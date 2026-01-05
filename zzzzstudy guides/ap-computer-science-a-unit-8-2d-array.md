# AP Computer Science A Unit 8 Study Guide

:::GUIDE:::
unit::=Unit 8
title::=💻 Unit 8: 2D Array Complete Guide
desc::=Master 2D array creation, traversal, algorithms, and matrix operations in Java
diff::=Hard
time::=60 minutes
tags::=computer science, java, 2D arrays, matrices, nested loops
content::=

# 💻 Unit 8: 2D Array

## 📋 Unit Overview

2D arrays are arrays of arrays! This unit covers creating, accessing, and traversing 2D arrays. Think rows and columns! 📊

### Essential Questions

| Question | Focus |
|----------|-------|
| What are 2D arrays? | Arrays of arrays |
| How do we create them? | Declaration and initialization |
| How do we access elements? | Row and column indices |
| How do we traverse them? | Nested loops |
| What are common algorithms? | Sum rows, transpose, etc. |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **2D array** | Array of arrays |
| **Row** | First dimension |
| **Column** | Second dimension |
| **Nested loop** | Traverse 2D array |
| **Rectangular** | Same columns per row |

---

## � History of Arrays and Matrix Computing

:::TIMELINE:::
id::=matrix-computing-timeline
title::=Evolution of Arrays and Matrix Computing
events::=[
  {"year": "1957", "event": "FORTRAN Arrays", "detail": "First high-level language with multidimensional arrays for scientific computing"},
  {"year": "1958", "event": "ALGOL 58", "detail": "Introduces formal array syntax; influences all future programming languages"},
  {"year": "1964", "event": "APL Language", "detail": "Kenneth Iverson's array programming language; powerful matrix notation"},
  {"year": "1979", "event": "MATLAB Created", "detail": "Cleve Moler creates 'Matrix Laboratory' for numerical computing with matrices"},
  {"year": "1995", "event": "Java Arrays", "detail": "Java implements arrays as objects; 2D arrays are arrays of arrays"},
  {"year": "2006", "event": "NumPy Released", "detail": "Numerical Python library brings efficient multidimensional arrays to Python"},
  {"year": "2012", "event": "GPU Matrix Computing", "detail": "CUDA and deep learning drive massive parallel matrix operations on GPUs"}
]
:::/TIMELINE:::

---

## �📐 2D Array Basics

### What is a 2D Array?

| Concept | Description |
|---------|-------------|
| **2D array** | Array of 1D arrays |
| **Matrix** | Rows and columns |
| **Rectangular** | All rows same length |
| **Jagged** | Rows different lengths |

### Visualization

```
   Col 0  Col 1  Col 2
Row 0: [1]    [2]    [3]
Row 1: [4]    [5]    [6]
Row 2: [7]    [8]    [9]
```

---

## 🏗️ Creating 2D Arrays

### Declaration and Creation

```java
int[][] matrix = new int[3][4];
```

| Component | Meaning |
|-----------|---------|
| `int[][]` | 2D int array |
| `matrix` | Variable name |
| `[3]` | 3 rows |
| `[4]` | 4 columns |

### Initialization with Values

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

| Visual |
|--------|
| 1 2 3 |
| 4 5 6 |
| 7 8 9 |

### 🎮 Interactive Demo: 2D Array Fundamentals

:::CODE:::
id::=2d-array-basics-demo
title::=2D Array Creation, Access, and Traversal
language::=java
runnable::=true
code::=
public class TwoDArrayDemo {
    public static void main(String[] args) {
        System.out.println("===== 2D ARRAY CREATION =====");
        
        // Method 1: Declare size, fill later
        int[][] grid = new int[3][4];  // 3 rows, 4 columns
        System.out.println("Created empty 3x4 grid (default values are 0)");
        
        // Method 2: Initialize with values
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        System.out.println("\nInitialized 3x3 matrix:");
        printMatrix(matrix);
        
        System.out.println("\n===== ACCESSING ELEMENTS =====");
        System.out.println("matrix[row][col] - row first, then column!");
        System.out.println("matrix[0][0] = " + matrix[0][0] + " (top-left)");
        System.out.println("matrix[0][2] = " + matrix[0][2] + " (top-right)");
        System.out.println("matrix[1][1] = " + matrix[1][1] + " (center)");
        System.out.println("matrix[2][0] = " + matrix[2][0] + " (bottom-left)");
        System.out.println("matrix[2][2] = " + matrix[2][2] + " (bottom-right)");
        
        System.out.println("\n===== DIMENSIONS =====");
        System.out.println("matrix.length = " + matrix.length + " (number of ROWS)");
        System.out.println("matrix[0].length = " + matrix[0].length + " (number of COLUMNS)");
        
        System.out.println("\n===== MODIFYING ELEMENTS =====");
        System.out.println("Setting matrix[1][1] = 99");
        matrix[1][1] = 99;
        printMatrix(matrix);
        
        System.out.println("\n===== ROW-MAJOR TRAVERSAL =====");
        System.out.println("Visits every element left-to-right, top-to-bottom:");
        System.out.print("Order: ");
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col] + " ");
            }
        }
        
        System.out.println("\n\n===== COLUMN-MAJOR TRAVERSAL =====");
        System.out.println("Visits every element top-to-bottom, left-to-right:");
        System.out.print("Order: ");
        for (int col = 0; col < matrix[0].length; col++) {
            for (int row = 0; row < matrix.length; row++) {
                System.out.print(matrix[row][col] + " ");
            }
        }
        
        System.out.println("\n\n===== SUM ALL ELEMENTS =====");
        int sum = 0;
        for (int[] row : matrix) {
            for (int val : row) {
                sum += val;
            }
        }
        System.out.println("Sum of all elements: " + sum);
        
        System.out.println("\n===== SUM EACH ROW =====");
        for (int r = 0; r < matrix.length; r++) {
            int rowSum = 0;
            for (int c = 0; c < matrix[r].length; c++) {
                rowSum += matrix[r][c];
            }
            System.out.println("Row " + r + " sum: " + rowSum);
        }
    }
    
    // Helper method to print matrix nicely
    public static void printMatrix(int[][] m) {
        for (int[] row : m) {
            for (int val : row) {
                System.out.printf("%4d", val);
            }
            System.out.println();
        }
    }
}
expected_output::=
===== 2D ARRAY CREATION =====
Created empty 3x4 grid (default values are 0)

Initialized 3x3 matrix:
   1   2   3
   4   5   6
   7   8   9

===== ACCESSING ELEMENTS =====
matrix[row][col] - row first, then column!
matrix[0][0] = 1 (top-left)
matrix[0][2] = 3 (top-right)
matrix[1][1] = 5 (center)
matrix[2][0] = 7 (bottom-left)
matrix[2][2] = 9 (bottom-right)

===== DIMENSIONS =====
matrix.length = 3 (number of ROWS)
matrix[0].length = 3 (number of COLUMNS)

===== MODIFYING ELEMENTS =====
Setting matrix[1][1] = 99
   1   2   3
   4  99   6
   7   8   9

===== ROW-MAJOR TRAVERSAL =====
Visits every element left-to-right, top-to-bottom:
Order: 1 2 3 4 99 6 7 8 9 

===== COLUMN-MAJOR TRAVERSAL =====
Visits every element top-to-bottom, left-to-right:
Order: 1 4 7 2 99 8 3 6 9 

===== SUM ALL ELEMENTS =====
Sum of all elements: 139

===== SUM EACH ROW =====
Row 0 sum: 6
Row 1 sum: 109
Row 2 sum: 24
:::/CODE:::

---

## 🔢 Accessing Elements

### Indexing

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

| Expression | Value |
|------------|-------|
| `matrix[0][0]` | 1 |
| `matrix[0][2]` | 3 |
| `matrix[1][1]` | 5 |
| `matrix[2][0]` | 7 |

### Assignment

```java
matrix[1][2] = 100;
```

| Result |
|--------|
| 1 2 3 |
| 4 5 **100** |
| 7 8 9 |

---

## 📏 Dimensions

### Getting Dimensions

| Expression | Meaning |
|------------|---------|
| `matrix.length` | Number of rows |
| `matrix[0].length` | Number of columns in row 0 |
| `matrix[r].length` | Number of columns in row r |

### Example

```java
int[][] matrix = new int[3][4];
```

| Property | Value |
|----------|-------|
| `matrix.length` | 3 (rows) |
| `matrix[0].length` | 4 (columns) |

---

## 🔄 Traversing 2D Arrays

### Row-Major Order

```java
for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {
        System.out.print(matrix[row][col] + " ");
    }
    System.out.println();
}
```

| Order | 1 2 3 4 5 6 7 8 9 |
|-------|-------------------|

### Column-Major Order

```java
for (int col = 0; col < matrix[0].length; col++) {
    for (int row = 0; row < matrix.length; row++) {
        System.out.print(matrix[row][col] + " ");
    }
    System.out.println();
}
```

| Order | 1 4 7 2 5 8 3 6 9 |
|-------|-------------------|

### Enhanced for Loop

```java
for (int[] row : matrix) {
    for (int value : row) {
        System.out.print(value + " ");
    }
    System.out.println();
}
```

| Use | Read-only traversal |
|-----|---------------------|

---

## 🧮 Common 2D Array Algorithms

### Sum All Elements

```java
int sum = 0;
for (int[] row : matrix) {
    for (int value : row) {
        sum += value;
    }
}
```

### Find Maximum

```java
int max = matrix[0][0];
for (int[] row : matrix) {
    for (int value : row) {
        if (value > max) {
            max = value;
        }
    }
}
```

### Count Occurrences

```java
int count = 0;
for (int[] row : matrix) {
    for (int value : row) {
        if (value == target) {
            count++;
        }
    }
}
```

---

## 📊 Row and Column Operations

### Sum of Row

```java
public static int sumRow(int[][] matrix, int rowIndex) {
    int sum = 0;
    for (int col = 0; col < matrix[rowIndex].length; col++) {
        sum += matrix[rowIndex][col];
    }
    return sum;
}
```

### Sum of Column

```java
public static int sumColumn(int[][] matrix, int colIndex) {
    int sum = 0;
    for (int row = 0; row < matrix.length; row++) {
        sum += matrix[row][colIndex];
    }
    return sum;
}
```

### Sum All Rows

```java
for (int row = 0; row < matrix.length; row++) {
    int rowSum = sumRow(matrix, row);
    System.out.println("Row " + row + ": " + rowSum);
}
```

---

## 🔍 Searching 2D Arrays

### Linear Search

```java
public static boolean contains(int[][] matrix, int target) {
    for (int[] row : matrix) {
        for (int value : row) {
            if (value == target) {
                return true;
            }
        }
    }
    return false;
}
```

### Find Location

```java
public static int[] find(int[][] matrix, int target) {
    for (int row = 0; row < matrix.length; row++) {
        for (int col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == target) {
                return new int[] {row, col};
            }
        }
    }
    return null;  // Not found
}
```

---

## 🔄 Matrix Operations

### Transpose

```java
public static int[][] transpose(int[][] matrix) {
    int rows = matrix.length;
    int cols = matrix[0].length;
    int[][] result = new int[cols][rows];
    
    for (int row = 0; row < rows; row++) {
        for (int col = 0; col < cols; col++) {
            result[col][row] = matrix[row][col];
        }
    }
    return result;
}
```

| Original | Transpose |
|----------|-----------|
| 1 2 3 | 1 4 7 |
| 4 5 6 | 2 5 8 |
| 7 8 9 | 3 6 9 |

### Rotate 90° Clockwise

```java
public static int[][] rotate90(int[][] matrix) {
    int n = matrix.length;
    int[][] result = new int[n][n];
    
    for (int row = 0; row < n; row++) {
        for (int col = 0; col < n; col++) {
            result[col][n - 1 - row] = matrix[row][col];
        }
    }
    return result;
}
```

---

## 🎯 Special Patterns

### Diagonal Elements

```java
// Main diagonal (top-left to bottom-right)
for (int i = 0; i < matrix.length; i++) {
    System.out.println(matrix[i][i]);
}
```

### Anti-Diagonal

```java
// Top-right to bottom-left
for (int i = 0; i < matrix.length; i++) {
    int col = matrix.length - 1 - i;
    System.out.println(matrix[i][col]);
}
```

### Border Elements

```java
for (int col = 0; col < matrix[0].length; col++) {
    System.out.print(matrix[0][col] + " ");  // Top row
}
for (int col = 0; col < matrix[0].length; col++) {
    System.out.print(matrix[matrix.length - 1][col] + " ");  // Bottom row
}
```

---

## 🎭 Jagged Arrays

### Definition

| Concept | Description |
|---------|-------------|
| **Jagged** | Rows have different lengths |
| **Not rectangular** | Irregular shape |

### Creation

```java
int[][] jagged = new int[3][];
jagged[0] = new int[2];
jagged[1] = new int[4];
jagged[2] = new int[3];
```

| Visual |
|--------|
| [0][1] |
| [0][1][2][3] |
| [0][1][2] |

### Traversing Jagged Arrays

```java
for (int row = 0; row < jagged.length; row++) {
    for (int col = 0; col < jagged[row].length; col++) {
        System.out.print(jagged[row][col] + " ");
    }
    System.out.println();
}
```

---

## 📐 Rectangular Array Algorithms

### Fill with Pattern

```java
// Fill with row number
for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {
        matrix[row][col] = row;
    }
}
```

| Result |
|--------|
| 0 0 0 |
| 1 1 1 |
| 2 2 2 |

### Fill with Sequential Numbers

```java
int num = 1;
for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {
        matrix[row][col] = num++;
    }
}
```

| Result |
|--------|
| 1 2 3 |
| 4 5 6 |
| 7 8 9 |

---

## 🧩 Common Mistakes

### Off-by-One Errors

| Wrong | Right |
|-------|-------|
| `row <= matrix.length` | `row < matrix.length` |
| `col <= matrix[0].length` | `col < matrix[0].length` |

### Assuming Square

```java
// WRONG if not square
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix.length; j++) {  // Should be matrix[i].length
        // ...
    }
}
```

### Row vs. Column Confusion

| Correct Order | [row][col] |
|---------------|------------|
| **Not** | [col][row] |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **2D array** | Array of arrays |
| **Row** | First dimension |
| **Column** | Second dimension |
| **Rectangular** | All rows same length |
| **Jagged** | Rows different lengths |
| **Row-major** | Traverse rows first |
| **Column-major** | Traverse columns first |
| **Transpose** | Swap rows and columns |
| **Diagonal** | Elements where row == col |

---

## 🎯 AP Exam Strategies

### Common Question Types

| Type | Focus |
|------|-------|
| **Traverse** | Nested loops |
| **Row/column operations** | Sum, average |
| **Search** | Find value |
| **Algorithms** | Transpose, rotate |

### Key Things to Remember

| Topic | Remember |
|-------|----------|
| **Dimensions** | `matrix.length` = rows |
| **Column count** | `matrix[row].length` |
| **Indexing** | [row][col] |
| **Nested loops** | Outer = rows, inner = cols |

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| `matrix[col][row]` | `matrix[row][col]` |
| Assume square | Check dimensions |
| `matrix.length()` | `matrix.length` (no parentheses) |
| Off-by-one | Use < not <= |

### FRQ Tips

| Tip | Explanation |
|-----|-------------|
| **Trace carefully** | Draw the array |
| **Check dimensions** | Rows vs. columns |
| **Test edge cases** | 1x1, rectangular |
| **Use proper order** | [row][col] always |

---

## 🧪 Practice Problems

### Problem 1: Sum of Diagonal

```java
public static int sumDiagonal(int[][] matrix) {
    int sum = 0;
    for (int i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
    }
    return sum;
}
```

### Problem 2: Check if Square

```java
public static boolean isSquare(int[][] matrix) {
    int rows = matrix.length;
    for (int row = 0; row < rows; row++) {
        if (matrix[row].length != rows) {
            return false;
        }
    }
    return true;
}
```

### Problem 3: Row with Max Sum

```java
public static int rowWithMaxSum(int[][] matrix) {
    int maxRow = 0;
    int maxSum = sumRow(matrix, 0);
    
    for (int row = 1; row < matrix.length; row++) {
        int sum = sumRow(matrix, row);
        if (sum > maxSum) {
            maxSum = sum;
            maxRow = row;
        }
    }
    return maxRow;
}
```

### Problem 4: Replace Negatives

```java
public static void replaceNegatives(int[][] matrix, int value) {
    for (int row = 0; row < matrix.length; row++) {
        for (int col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] < 0) {
                matrix[row][col] = value;
            }
        }
    }
}
```

### Problem 5: Copy 2D Array

```java
public static int[][] copy(int[][] matrix) {
    int[][] result = new int[matrix.length][];
    for (int row = 0; row < matrix.length; row++) {
        result[row] = new int[matrix[row].length];
        for (int col = 0; col < matrix[row].length; col++) {
            result[row][col] = matrix[row][col];
        }
    }
    return result;
}
```

---

## 🔄 Advanced Patterns

### Spiral Traversal

```java
// Visit elements in spiral order
public static void spiralPrint(int[][] matrix) {
    int top = 0, bottom = matrix.length - 1;
    int left = 0, right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
        // Top row
        for (int i = left; i <= right; i++) {
            System.out.print(matrix[top][i] + " ");
        }
        top++;
        
        // Right column
        for (int i = top; i <= bottom; i++) {
            System.out.print(matrix[i][right] + " ");
        }
        right--;
        
        // Bottom row
        if (top <= bottom) {
            for (int i = right; i >= left; i--) {
                System.out.print(matrix[bottom][i] + " ");
            }
            bottom--;
        }
        
        // Left column
        if (left <= right) {
            for (int i = bottom; i >= top; i--) {
                System.out.print(matrix[i][left] + " ");
            }
            left++;
        }
    }
}
```

---

**Good luck on your AP Computer Science A exam! 🍀💻📊**

Remember: `matrix.length` gives rows, `matrix[row].length` gives columns. Always index as [row][col], not [col][row]! Nested loops: outer for rows, inner for columns. Don't assume all 2D arrays are square - check dimensions!
