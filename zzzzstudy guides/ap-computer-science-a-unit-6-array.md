# AP Computer Science A Unit 6 Study Guide

:::GUIDE:::
unit::=Unit 6
title::=💻 Unit 6: Array Complete Guide
desc::=Master array creation, traversal, algorithms, and manipulation in Java with interactive examples
diff::=Hard
time::=70 minutes
tags::=computer science, java, arrays, data structures, algorithms, interactive
content::=

# 💻 Unit 6: Array

## 📋 Unit Overview

Arrays store multiple values! This unit covers array creation, traversal, searching, sorting, and manipulation. Arrays are fundamental to AP CSA! 📊

### Essential Questions

| Question | Focus |
|----------|-------|
| What are arrays? | Collection of values |
| How do we create arrays? | Declaration and initialization |
| How do we access elements? | Indexing |
| How do we traverse arrays? | Loops |
| What are common algorithms? | Search, sort, etc. |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Array** | Fixed-size collection |
| **Index** | Position (0-based) |
| **Element** | Value at index |
| **Length** | Size of array |
| **Traversal** | Visit each element |

:::TIMELINE:::
id::=array-history
title::=📅 History of Arrays in Computer Science
events::=[
  {"year": "1945", "event": "Arrays in ENIAC", "detail": "First electronic computer uses arrays for ballistic calculations"},
  {"year": "1957", "event": "FORTRAN introduces array syntax", "detail": "First high-level language with explicit array support; scientific computing"},
  {"year": "1960", "event": "ALGOL defines array semantics", "detail": "Formal definition of arrays with bounds checking; influenced all later languages"},
  {"year": "1964", "event": "BASIC simplifies arrays", "detail": "Arrays accessible to beginner programmers; education focus"},
  {"year": "1972", "event": "C arrays become foundation", "detail": "Dennis Ritchie's C language; pointer-based arrays; maximum efficiency"},
  {"year": "1995", "event": "Java arrays with safety", "detail": "Bounds checking prevents buffer overflow; length property; garbage collected"},
  {"year": "1998", "event": "Java Collections Framework", "detail": "ArrayList provides dynamic arrays; generics in 2004"}
]
:::/TIMELINE:::

---

## 📦 Array Basics

### What is an Array?

| Property | Description |
|----------|-------------|
| **Fixed size** | Can't change after creation |
| **Same type** | All elements same type |
| **Indexed** | Access by position (0-based) |
| **Length** | `arr.length` (no parentheses) |

### Array Declaration

| Syntax | Example |
|--------|---------|
| `type[] name;` | `int[] numbers;` |
| `type name[];` | `int numbers[];` (less common) |

---

## 🏗️ Creating Arrays

### Method 1: Declare + Create

```java
int[] numbers;           // Declare
numbers = new int[5];    // Create (size 5)
```

### Method 2: Combined

```java
int[] numbers = new int[5];
```

| Index | 0 | 1 | 2 | 3 | 4 |
|-------|---|---|---|---|---|
| **Value** | 0 | 0 | 0 | 0 | 0 |

### Method 3: Initialize with Values

```java
int[] numbers = {10, 20, 30, 40, 50};
```

| Index | 0 | 1 | 2 | 3 | 4 |
|-------|---|---|---|---|---|
| **Value** | 10 | 20 | 30 | 40 | 50 |

### Default Values

| Type | Default |
|------|---------|
| `int` | 0 |
| `double` | 0.0 |
| `boolean` | false |
| `String` (object) | null |

:::CODE:::
id::=array-basics-demo
title::=📦 Array Basics - Interactive Demo
language::=java
runnable::=true
code::=
// Array Basics Demo
// Run to see how arrays work in Java!

public class ArrayBasics {
    public static void main(String[] args) {
        System.out.println("=== Creating Arrays ===\n");
        
        // Method 1: Create empty, fill later
        int[] nums = new int[5];
        System.out.println("Empty int array (default 0s):");
        printArray(nums);
        
        // Method 2: Initialize with values
        int[] scores = {90, 85, 92, 78, 95};
        System.out.println("\nInitialized array:");
        printArray(scores);
        
        System.out.println("\n=== Array Properties ===");
        System.out.println("scores.length = " + scores.length);
        System.out.println("First index: 0");
        System.out.println("Last index: " + (scores.length - 1));
        
        System.out.println("\n=== Accessing Elements ===");
        System.out.println("scores[0] = " + scores[0]);  // First
        System.out.println("scores[2] = " + scores[2]);  // Middle
        System.out.println("scores[4] = " + scores[4]);  // Last
        System.out.println("scores[scores.length-1] = " + scores[scores.length-1]);
        
        System.out.println("\n=== Modifying Elements ===");
        System.out.println("Before: scores[1] = " + scores[1]);
        scores[1] = 100;  // Modify
        System.out.println("After scores[1] = 100: scores[1] = " + scores[1]);
        
        System.out.println("\n=== Default Values by Type ===");
        int[] intArr = new int[3];
        double[] dblArr = new double[3];
        boolean[] boolArr = new boolean[3];
        String[] strArr = new String[3];
        
        System.out.println("int default: " + intArr[0]);
        System.out.println("double default: " + dblArr[0]);
        System.out.println("boolean default: " + boolArr[0]);
        System.out.println("String default: " + strArr[0]);
        
        System.out.println("\n=== Array Traversal ===");
        System.out.println("Using for loop:");
        for (int i = 0; i < scores.length; i++) {
            System.out.println("  Index " + i + ": " + scores[i]);
        }
        
        System.out.println("\nUsing for-each loop:");
        for (int score : scores) {
            System.out.println("  Value: " + score);
        }
    }
    
    public static void printArray(int[] arr) {
        System.out.print("  [");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
}
expected_output::=
=== Creating Arrays ===

Empty int array (default 0s):
  [0, 0, 0, 0, 0]

Initialized array:
  [90, 85, 92, 78, 95]

=== Array Properties ===
scores.length = 5
First index: 0
Last index: 4

=== Accessing Elements ===
scores[0] = 90
scores[2] = 92
scores[4] = 95
scores[scores.length-1] = 95

=== Modifying Elements ===
Before: scores[1] = 85
After scores[1] = 100: scores[1] = 100

=== Default Values by Type ===
int default: 0
double default: 0.0
boolean default: false
String default: null

=== Array Traversal ===
Using for loop:
  Index 0: 90
  Index 1: 100
  Index 2: 92
  Index 3: 78
  Index 4: 95

Using for-each loop:
  Value: 90
  Value: 100
  Value: 92
  Value: 78
  Value: 95
:::/CODE:::

---

## 🔢 Accessing Elements

### Indexing

```java
int[] arr = {10, 20, 30, 40, 50};
```

| Expression | Value |
|------------|-------|
| `arr[0]` | 10 |
| `arr[2]` | 30 |
| `arr[4]` | 50 |
| `arr.length` | 5 |

### Assignment

```java
arr[2] = 100;  // Change element at index 2
```

| Index | 0 | 1 | 2 | 3 | 4 |
|-------|---|---|---|---|---|
| **Value** | 10 | 20 | **100** | 40 | 50 |

---

## ⚠️ Array Bounds

### Valid Indices

| Array | Valid Indices |
|-------|---------------|
| `length = 5` | 0, 1, 2, 3, 4 |
| `length = n` | 0 to n-1 |

### ArrayIndexOutOfBoundsException

| Invalid | Error |
|---------|-------|
| `arr[-1]` | Negative index |
| `arr[arr.length]` | Index too large |

### Safe Access

```java
if (index >= 0 && index < arr.length) {
    int value = arr[index];
}
```

---

## 🔄 Traversing Arrays

### Standard for Loop

```java
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}
```

### Enhanced for Loop (for-each)

```java
for (int value : arr) {
    System.out.println(value);
}
```

### Comparison

| Type | Use When |
|------|----------|
| **Standard** | Need index, modify elements |
| **Enhanced** | Read-only, simpler |

### Enhanced for Loop Limitation

| Can Do | Can't Do |
|--------|----------|
| Read values | Modify array |
| Access each element | Access index |

---

## 🧮 Array Algorithms

### Sum Elements

```java
int sum = 0;
for (int i = 0; i < arr.length; i++) {
    sum += arr[i];
}
```

### Find Average

```java
double sum = 0;
for (int num : arr) {
    sum += num;
}
double avg = sum / arr.length;
```

### Find Minimum

```java
int min = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
```

### Find Maximum

```java
int max = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
```

---

## 🔍 Searching Arrays

### Linear Search

```java
public static int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;  // Found at index i
        }
    }
    return -1;  // Not found
}
```

| Return | Meaning |
|--------|---------|
| **Index** | Target found |
| **-1** | Target not found |

### Binary Search (Sorted Array)

```java
// Array must be sorted!
public static int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    
    while (left <= right) {
        int mid = (left + right) / 2;
        
        if (arr[mid] == target) {
            return mid;  // Found
        } else if (arr[mid] < target) {
            left = mid + 1;  // Search right half
        } else {
            right = mid - 1;  // Search left half
        }
    }
    return -1;  // Not found
}
```

| Algorithm | Requires | Efficiency |
|-----------|----------|------------|
| **Linear** | Nothing | O(n) |
| **Binary** | Sorted array | O(log n) |

---

## 🔀 Modifying Arrays

### Reverse Array

```java
for (int i = 0; i < arr.length / 2; i++) {
    int temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
```

### Shift Elements Left

```java
// Remove first, shift left
int first = arr[0];
for (int i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
arr[arr.length - 1] = 0;  // Or some default
```

### Shift Elements Right

```java
// Shift right, add at beginning
for (int i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = newValue;
```

---

## 📊 Selection Sort

### Algorithm

```java
public static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        int minIndex = i;
        
        // Find minimum in remaining array
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
```

### Example Trace

| Pass | Array State |
|------|-------------|
| Start | [5, 3, 8, 1, 9] |
| 1 | [1, 3, 8, 5, 9] |
| 2 | [1, 3, 8, 5, 9] |
| 3 | [1, 3, 5, 8, 9] |
| 4 | [1, 3, 5, 8, 9] |

---

## 🔁 Insertion Sort

### Algorithm

```java
public static void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i];
        int j = i - 1;
        
        // Shift elements right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
}
```

### Example Trace

| Pass | Array State |
|------|-------------|
| Start | [5, 3, 8, 1, 9] |
| 1 | [3, 5, 8, 1, 9] |
| 2 | [3, 5, 8, 1, 9] |
| 3 | [1, 3, 5, 8, 9] |
| 4 | [1, 3, 5, 8, 9] |

---

## 📐 Arrays of Objects

### Declaration

```java
String[] names = new String[3];
```

| Index | 0 | 1 | 2 |
|-------|---|---|---|
| **Value** | null | null | null |

### Initialization

```java
names[0] = "Alice";
names[1] = "Bob";
names[2] = "Charlie";
```

### Or Combined

```java
String[] names = {"Alice", "Bob", "Charlie"};
```

### Accessing Object Methods

```java
for (int i = 0; i < names.length; i++) {
    System.out.println(names[i].length());
}
```

---

## 🎯 Common Array Patterns

### Count Occurrences

```java
int count = 0;
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        count++;
    }
}
```

### Find All Matches

```java
ArrayList<Integer> indices = new ArrayList<>();
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        indices.add(i);
    }
}
```

### Check if Sorted

```java
boolean isSorted = true;
for (int i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        isSorted = false;
        break;
    }
}
```

---

## 🧪 Array as Parameter

### Passing Array

```java
public static void printArray(int[] arr) {
    for (int value : arr) {
        System.out.println(value);
    }
}
```

### Returning Array

```java
public static int[] createArray(int size) {
    int[] arr = new int[size];
    for (int i = 0; i < size; i++) {
        arr[i] = i;
    }
    return arr;
}
```

### Arrays are Objects

| Concept | Description |
|---------|-------------|
| **Pass by reference** | Changes affect original |
| **Aliasing** | Two references, one array |

```java
public static void modifyArray(int[] arr) {
    arr[0] = 100;  // Changes original array
}
```

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Array** | Fixed-size collection of same-type elements |
| **Index** | Position in array (0-based) |
| **Element** | Value at specific index |
| **Length** | Size of array (`arr.length`) |
| **Traversal** | Visiting each element |
| **Linear search** | Check each element sequentially |
| **Binary search** | Divide-and-conquer on sorted array |
| **Selection sort** | Find min, swap with first unsorted |
| **Insertion sort** | Insert each element in sorted position |
| **Pass by reference** | Array parameter changes original |

---

## 🎯 AP Exam Strategies

### Common Question Types

| Type | Focus |
|------|-------|
| **Traverse array** | Standard or enhanced for |
| **Search** | Linear or binary |
| **Modify** | Shift, reverse, etc. |
| **Algorithm trace** | Follow iterations |

### Key Things to Remember

| Topic | Remember |
|-------|----------|
| **Indices** | 0 to length-1 |
| **arr.length** | No parentheses |
| **Enhanced for** | Can't modify |
| **Binary search** | Requires sorted array |

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| `i <= arr.length` | `i < arr.length` |
| `arr.length()` | `arr.length` (no parentheses) |
| Modify in enhanced for | Use standard for |
| Off-by-one | Check boundaries |

### FRQ Tips

| Tip | Explanation |
|-----|-------------|
| **Check bounds** | Prevent errors |
| **Trace carefully** | Write values |
| **Test edge cases** | Empty, single element |
| **Choose right loop** | Standard vs. enhanced |

---

## 🧩 Practice Problems

### Problem 1: Rotate Array Left

```java
public static void rotateLeft(int[] arr) {
    int first = arr[0];
    for (int i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
}
```

### Problem 2: Count Even Numbers

```java
public static int countEvens(int[] arr) {
    int count = 0;
    for (int num : arr) {
        if (num % 2 == 0) {
            count++;
        }
    }
    return count;
}
```

### Problem 3: Find Second Largest

```java
public static int secondLargest(int[] arr) {
    int max = arr[0];
    int secondMax = arr[0];
    
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] != max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
```

### Problem 4: Merge Two Sorted Arrays

```java
public static int[] merge(int[] arr1, int[] arr2) {
    int[] result = new int[arr1.length + arr2.length];
    int i = 0, j = 0, k = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result[k++] = arr1[i++];
        } else {
            result[k++] = arr2[j++];
        }
    }
    
    while (i < arr1.length) {
        result[k++] = arr1[i++];
    }
    
    while (j < arr2.length) {
        result[k++] = arr2[j++];
    }
    
    return result;
}
```

---

**Good luck on your AP Computer Science A exam! 🍀💻📊**

Remember: Arrays are 0-indexed with valid indices from 0 to length-1. `arr.length` has no parentheses! Enhanced for loops can't modify arrays. Binary search requires a sorted array. Always check bounds to avoid ArrayIndexOutOfBoundsException!
