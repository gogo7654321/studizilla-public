# Course Content Architecture Refactor

## 🎯 Overview

This refactor changes the course content data architecture from a **nested document structure** to **separate Firestore collections** for better scalability, consistency, and performance.

## 📊 Before vs After

### Before (Nested Structure)
```
courseContent/{courseId}
├── metadata
├── units[]
│   ├── flashcards[]
│   ├── questions[]
│   └── materials[]
├── studyGuides[]
├── practiceTests[]
├── globalMaterials[]
└── faqs[]
```

### After (Separate Collections)
```
courseContent/{courseId}        → metadata, units (structure only), faqs
courseDecks/{deckId}            → flashcard decks (already existed)
courseQuestions/{questionId}    → all questions with courseId + unitId
courseMaterials/{materialId}    → all materials with courseId + unitId
courseStudyGuides/{guideId}     → all study guides with courseId
coursePracticeTests/{testId}    → all practice tests with courseId
```

## ✅ What Changed

### New Schema Files Created
- `/src/lib/course-questions-schema.ts`
- `/src/lib/course-materials-schema.ts`
- `/src/lib/course-study-guides-schema.ts`
- `/src/lib/course-practice-tests-schema.ts`

### New Action Files Created
- `/src/app/dashboard/dev/course-content-manager/course-questions-actions.ts`
- `/src/app/dashboard/dev/course-content-manager/course-materials-actions.ts`
- `/src/app/dashboard/dev/course-content-manager/course-study-guides-actions.ts`
- `/src/app/dashboard/dev/course-content-manager/course-practice-tests-actions.ts`

### Updated Files
- `/src/lib/course-content-schema.ts` - Removed nested arrays, kept units & FAQs
- `/src/app/dashboard/dev/course-content-manager/page.tsx` - Fetches from multiple collections
- Stats calculation now uses data from all collections

## 🔑 Key Principles

### What Stays in courseContent
- **Metadata**: Course information (name, description, icon, etc.)
- **Units**: Unit structure only (title, description, order, isPublished)
- **FAQs**: Frequently asked questions

### What Moved to Separate Collections
- **Questions**: `courseQuestions` collection
- **Materials**: `courseMaterials` collection  
- **Study Guides**: `courseStudyGuides` collection
- **Practice Tests**: `coursePracticeTests` collection
- **Flashcards**: `courseDecks` collection (already existed)

## 📝 Collection Schemas

### courseQuestions
```typescript
{
  id: string
  courseId: string      // Required for querying
  unitId: string        // Links to unit
  type: 'multiple-choice' | 'free-response' | 'true-false'
  question: string
  options?: string[]
  correctAnswer?: string
  explanation?: string
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
  points: number
  isPublished: boolean
  createdAt: string
  updatedAt: string
}
```

### courseMaterials
```typescript
{
  id: string
  courseId: string      // Required for querying
  unitId?: string       // Optional - if not set, it's global
  name: string
  type: 'pdf' | 'video' | 'link' | 'image' | 'other'
  url: string
  description?: string
  isPublished: boolean
  order: number
  uploadedAt: string
}
```

### courseStudyGuides
```typescript
{
  id: string
  courseId: string
  title: string
  description?: string
  content: string       // Rich text HTML
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  tags: string[]
  isPublished: boolean
  order: number
  createdAt: string
  updatedAt: string
}
```

### coursePracticeTests
```typescript
{
  id: string
  courseId: string
  title: string
  type: 'practice-exam' | 'unit-test' | 'quiz' | 'diagnostic'
  questionIds: string[]  // References to courseQuestions
  timeLimit?: number
  passingScore?: number
  isPublished: boolean
  order: number
  createdAt: string
  updatedAt: string
}
```

## 🚀 Benefits

### Performance
- **Faster queries**: Query only what you need instead of entire document
- **Parallel loading**: Load all collections simultaneously
- **No document size limits**: Each collection can grow independently

### Consistency
- **Uniform CRUD operations**: All tabs work the same way
- **Batch operations**: Built-in batch create/update/delete for all collections
- **Standardized structure**: Every content type follows same pattern

### Scalability
- **No nesting limits**: Firestore has limits on nested arrays
- **Better indexing**: Can index on courseId, unitId, etc.
- **Easier migrations**: Update one collection without touching others

## 📦 Action Functions

All collection action files include:
- `get{Type}(id)` - Get single item
- `getCourse{Types}(courseId)` - Get all for course
- `getUnit{Types}(courseId, unitId)` - Get all for unit (where applicable)
- `create{Type}(data)` - Create single item
- `update{Type}(id, updates)` - Update single item
- `delete{Type}(id)` - Delete single item
- `batchCreate{Types}(items[])` - Batch create
- `batchUpdate{Types}(updates[])` - Batch update
- `batchDelete{Types}(ids[])` - Batch delete

## 🔄 Data Migration

### For Existing Data
You'll need to create a migration script that:
1. Reads existing `courseContent` documents
2. Extracts nested arrays (questions, materials, etc.)
3. Creates documents in new collections with proper `courseId` and `unitId`
4. Updates `courseContent` to remove nested arrays
5. Verifies data integrity

### Example Migration (Pseudocode)
```typescript
// For each course
const courseContent = await getCourseContent(courseId);

// Migrate questions
for (const unit of courseContent.units) {
  for (const question of unit.questions) {
    await createQuestion({
      ...question,
      courseId,
      unitId: unit.id
    });
  }
  unit.questions = []; // Clear nested array
}

// Migrate materials
for (const unit of courseContent.units) {
  for (const material of unit.materials) {
    await createMaterial({
      ...material,
      courseId,
      unitId: unit.id
    });
  }
  unit.materials = []; // Clear nested array
}

// Save updated courseContent (without nested data)
await updateCourseContent(courseId, courseContent);
```

## ⚠️ Important Notes

### Firestore Rules
You'll need to add rules for the new collections:
```
// Allow devs to read/write course content collections
match /courseQuestions/{questionId} {
  allow read, write: if request.auth != null && 
    exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
    get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'dev';
}

match /courseMaterials/{materialId} {
  allow read, write: if request.auth != null && 
    exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
    get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'dev';
}

// etc. for other collections
```

### Indexes Required
Create composite indexes for efficient queries:
- `courseQuestions`: (courseId, createdAt)
- `courseQuestions`: (courseId, unitId, createdAt)
- `courseMaterials`: (courseId, order)
- `courseMaterials`: (courseId, unitId, order)
- `courseStudyGuides`: (courseId, order)
- `coursePracticeTests`: (courseId, order)

## 🎨 UI Updates

The main page now:
- Fetches from all collections in parallel using `Promise.allSettled()`
- Calculates stats from actual collection data
- Passes separate state to each tab component
- Shows accurate counts for each content type

## 🧪 Next Steps

1. **Update Tab Components**: Modify QuestionsTab, MaterialsTab, etc. to use new action functions
2. **Add Firestore Rules**: Secure new collections
3. **Create Indexes**: Add required composite indexes
4. **Test Thoroughly**: Verify all CRUD operations work
5. **Migrate Data**: Run migration for existing course data
6. **Update User-Facing Code**: Ensure student views also use new collections

## 💡 Benefits Summary

✅ Consistent architecture across all content types  
✅ Better performance with parallel loading  
✅ No document size limits  
✅ Easier to maintain and extend  
✅ Proper separation of concerns  
✅ Scalable for future growth  

---

Generated: December 1, 2025
