
import { adminDb } from './firebase-server';
import { courses, type Course } from './courses';
import type { CourseDetails } from './course-data/course-details-schema';

/**
 * Retrieves a course's static data from the `courses` array by its slug.
 * @param {string} slug The slug of the course to find.
 * @returns {Course | undefined} The course object if found, otherwise undefined.
 */
export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find((course) => course.slug === slug);
};

/**
 * A new, fully-featured Course type that includes details fetched from Firestore.
 */
export type FullCourse = Course & CourseDetails;

/**
 * Fetches dynamic course details from Firestore and merges them with static course data.
 * @param {string} slug The slug of the course to fetch.
 * @returns {Promise<FullCourse | null>} A promise that resolves to the merged course data, or null if not found.
 */
export async function getCourseData(slug: string): Promise<FullCourse | null> {
    const staticData = getCourseBySlug(slug);
    if (!staticData) {
        return null;
    }

    try {
        const docRef = adminDb.collection('courseDetails').doc(staticData.id);
        const docSnap = await docRef.get();

        if (docSnap.exists) {
            const dynamicData = docSnap.data() as CourseDetails;
            // Merge static and dynamic data
            return {
                ...staticData,
                ...dynamicData,
            };
        } else {
            // Return static data with empty arrays if no dynamic data found
            return {
                ...staticData,
                description: staticData.description, // Use the base description
                exam_breakdown: [],
                units: [],
            };
        }
    } catch (error) {
        console.error(`Failed to fetch course details for slug "${slug}":`, error);
        // Fallback to static data in case of Firestore error
        return {
            ...staticData,
            description: staticData.description,
            exam_breakdown: [],
            units: [],
        };
    }
}
