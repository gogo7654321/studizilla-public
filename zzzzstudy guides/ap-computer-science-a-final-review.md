:::GUIDE:::
unit::=Final Review
title::=💻 AP Computer Science A Complete Final Exam Review
desc::=Comprehensive review of all 10 units for AP CSA exam preparation
diff::=Medium
time::=120 min
tags::=java,programming,final-review,ap-exam
content::=

# 💻 AP Computer Science A: Complete Final Exam Review

> **Exam Format:** 40 Multiple Choice (50%) + 4 Free Response Questions (50%)
> **Time:** 90 minutes per section (3 hours total)

---

## 📋 Java Syntax Quick Reference

### Program Structure
```java
public class ClassName {
    // Instance variables (fields)
    private int myField;
    
    // Constructor
    public ClassName(int value) {
        myField = value;
    }
    
    // Methods
    public int getField() {
        return myField;
    }
    
    // Main method (entry point)
    public static void main(String[] args) {
        // Code here
    }
}
```

### Data Types at a Glance
| Type | Size | Range/Description | Default |
|------|------|-------------------|---------|
| `int` | 32 bits | -2³¹ to 2³¹-1 | 0 |
| `double` | 64 bits | Decimal numbers | 0.0 |
| `boolean` | 1 bit | true/false | false |
| `String` | varies | Text (object) | null |

### Operators Reference
```java
// Arithmetic
+  -  *  /  %  ++  --

// Comparison (return boolean)
==  !=  <  >  <=  >=

// Logical
&&  (AND)    ||  (OR)    !  (NOT)

// Assignment
=  +=  -=  *=  /=  %=

// String concatenation
"Hello" + " " + "World"  // "Hello World"
"Age: " + 25             // "Age: 25"
```

---

## 📦 Unit 1: Primitive Types

### Key Concepts
- **Primitive types** store actual values: `int`, `double`, `boolean`
- **Reference types** store memory addresses to objects
- **Casting** converts between types

### Integer Division & Modulo
```java
int a = 17 / 5;    // 3 (truncates decimal)
int b = 17 % 5;    // 2 (remainder)
double c = 17.0 / 5;  // 3.4

// Casting
int x = 10;
double y = (double) x / 4;  // 2.5
int z = (int) 3.9;          // 3 (truncates, doesn't round)
```

### Arithmetic Expressions
```java
// Order of operations: () * / % + -
int result = 5 + 3 * 2;     // 11, not 16
int result2 = (5 + 3) * 2;  // 16

// Compound assignment
int count = 10;
count += 5;   // count = 15
count *= 2;   // count = 30
count++;      // count = 31
```

### ⚠️ Common Mistakes
- Integer division: `5/2` equals `2`, not `2.5`
- Overflow: `Integer.MAX_VALUE + 1` wraps to negative
- Uninitialized local variables cause compile errors

---

## 🔤 Unit 2: Using Objects

### Creating Objects
```java
// Constructor syntax
ClassName objectName = new ClassName(arguments);

// Examples
String str = new String("Hello");
String str2 = "Hello";  // Shortcut for Strings
Scanner scan = new Scanner(System.in);
```

### String Methods (MEMORIZE THESE!)
```java
String s = "Hello World";

// Length and access
s.length()                  // 11
s.charAt(0)                 // 'H'
s.charAt(s.length() - 1)    // 'd' (last character)

// Substring
s.substring(0, 5)           // "Hello" (start inclusive, end exclusive)
s.substring(6)              // "World" (from index to end)

// Searching
s.indexOf("o")              // 4 (first occurrence)
s.indexOf("z")              // -1 (not found)
s.indexOf("o", 5)           // 7 (starting from index 5)

// Comparison
s.equals("Hello World")     // true
s.equalsIgnoreCase("HELLO WORLD")  // true
s.compareTo("Apple")        // positive (H > A)

// Immutability - Strings cannot be changed!
String upper = s.toUpperCase();  // Creates NEW string
// s is still "Hello World"
```

### Math Class Methods
```java
Math.abs(-5)           // 5
Math.abs(-3.2)         // 3.2
Math.pow(2, 3)         // 8.0 (2³)
Math.sqrt(16)          // 4.0
Math.random()          // [0.0, 1.0) random double

// Random integer from min to max (inclusive)
int random = (int)(Math.random() * (max - min + 1)) + min;

// Example: random 1-6 (dice roll)
int dice = (int)(Math.random() * 6) + 1;
```

### Comparing Objects
```java
// WRONG - compares memory addresses
if (str1 == str2)

// CORRECT - compares content
if (str1.equals(str2))

// Null-safe comparison
if (str1 != null && str1.equals(str2))
```

### ⚠️ Common Mistakes
- Using `==` instead of `.equals()` for Strings
- `substring(0, 5)` includes indices 0-4, not 0-5
- `charAt()` returns a `char`, not a String
- Calling methods on null causes NullPointerException

---

## 🔀 Unit 3: Boolean Expressions and if Statements

### Boolean Expressions
```java
// Relational operators
x == y    // equals
x != y    // not equals
x < y     // less than
x <= y    // less than or equal
x > y     // greater than
x >= y    // greater than or equal

// Logical operators
a && b    // AND - both must be true
a || b    // OR - at least one must be true
!a        // NOT - reverses the value
```

### Truth Tables
| a | b | a && b | a \|\| b | !a |
|---|---|--------|----------|----|
| T | T | T | T | F |
| T | F | F | T | F |
| F | T | F | T | T |
| F | F | F | F | T |

### Short-Circuit Evaluation
```java
// && stops if first is false
if (x != 0 && 10/x > 1)  // Safe! Won't divide if x is 0

// || stops if first is true
if (x == 0 || 10/x > 1)  // Also safe!
```

### If-Else Structures
```java
// Simple if
if (condition) {
    // code
}

// If-else
if (condition) {
    // code if true
} else {
    // code if false
}

// If-else if-else
if (condition1) {
    // code
} else if (condition2) {
    // code
} else {
    // default code
}
```

### De Morgan's Laws
```java
// These are equivalent:
!(a && b)  ≡  !a || !b
!(a || b)  ≡  !a && !b

// Example:
!(x > 5 && y < 10)  ≡  (x <= 5 || y >= 10)
```

### ⚠️ Common Mistakes
- Using `=` (assignment) instead of `==` (comparison)
- Forgetting curly braces with multiple statements
- Not considering all branches in if-else chains
- Confusing && and || in complex conditions

---

## 🔁 Unit 4: Iteration (Loops)

### While Loops
```java
// Execute while condition is true
int count = 0;
while (count < 5) {
    System.out.println(count);
    count++;
}
// Prints: 0 1 2 3 4
```

### For Loops
```java
// Standard for loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Counting backwards
for (int i = 10; i > 0; i--) {
    System.out.println(i);
}

// Every other element
for (int i = 0; i < arr.length; i += 2) {
    System.out.println(arr[i]);
}
```

### Loop Patterns
```java
// Sum elements
int sum = 0;
for (int i = 0; i < arr.length; i++) {
    sum += arr[i];
}

// Count occurrences
int count = 0;
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        count++;
    }
}

// Find maximum
int max = arr[0];  // Start with first element
for (int i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

// Find minimum
int min = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
```

### Nested Loops
```java
// Multiplication table
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        System.out.print(i * j + " ");
    }
    System.out.println();
}
```

### String Traversal
```java
String str = "Hello";

// Forward traversal
for (int i = 0; i < str.length(); i++) {
    char c = str.charAt(i);
    System.out.println(c);
}

// Reverse traversal
for (int i = str.length() - 1; i >= 0; i--) {
    char c = str.charAt(i);
    System.out.println(c);
}

// Build new string
String reversed = "";
for (int i = str.length() - 1; i >= 0; i--) {
    reversed += str.charAt(i);
}
```

### ⚠️ Common Mistakes
- Off-by-one errors (using <= instead of <)
- Infinite loops (forgetting to update loop variable)
- Modifying loop variable inside the loop unexpectedly
- Not initializing accumulators before loops

---

## ✍️ Unit 5: Writing Classes

### Class Structure
```java
public class Student {
    // Instance variables (private for encapsulation)
    private String name;
    private int grade;
    private double gpa;
    
    // Constructor
    public Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
        this.gpa = 0.0;
    }
    
    // Accessor (getter) methods
    public String getName() {
        return name;
    }
    
    public int getGrade() {
        return grade;
    }
    
    public double getGpa() {
        return gpa;
    }
    
    // Mutator (setter) methods
    public void setGpa(double gpa) {
        this.gpa = gpa;
    }
    
    // Other methods
    public boolean isHonorRoll() {
        return gpa >= 3.5;
    }
    
    // toString method
    public String toString() {
        return name + " (Grade " + grade + "): " + gpa;
    }
}
```

### Access Modifiers
| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| `public` | ✓ | ✓ | ✓ | ✓ |
| `private` | ✓ | ✗ | ✗ | ✗ |

### The `this` Keyword
```java
public class Circle {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;  // Distinguishes field from parameter
    }
    
    public void setRadius(double radius) {
        this.radius = radius;
    }
}
```

### Static vs Instance
```java
public class Counter {
    private static int totalCount = 0;  // Shared by all instances
    private int instanceCount = 0;       // Unique to each instance
    
    public Counter() {
        totalCount++;
        instanceCount++;
    }
    
    public static int getTotalCount() {
        return totalCount;  // Can only access static variables
    }
    
    public int getInstanceCount() {
        return instanceCount;  // Can access both
    }
}
```

### ⚠️ Common Mistakes
- Making instance variables public (breaks encapsulation)
- Forgetting `this` when parameter names match field names
- Not initializing instance variables
- Confusing static and instance members

---

## 📚 Unit 6: Array

### Array Basics
```java
// Declaration and initialization
int[] numbers = new int[5];           // [0, 0, 0, 0, 0]
int[] primes = {2, 3, 5, 7, 11};      // Initializer list
String[] names = new String[3];       // [null, null, null]

// Access and modification
numbers[0] = 10;
int first = primes[0];                // 2
int last = primes[primes.length - 1]; // 11

// Length property (not a method!)
int size = numbers.length;            // 5
```

### Array Traversal
```java
int[] arr = {10, 20, 30, 40, 50};

// Standard for loop (can modify)
for (int i = 0; i < arr.length; i++) {
    arr[i] *= 2;  // Double each element
}

// Enhanced for loop (read-only)
for (int num : arr) {
    System.out.println(num);
}

// When to use standard for loop:
// - Need the index
// - Need to modify elements
// - Need to traverse backwards
// - Need to skip elements
```

### Common Array Algorithms
```java
// 1. Sequential/Linear Search
public static int search(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;  // Found at index i
        }
    }
    return -1;  // Not found
}

// 2. Count elements matching condition
public static int countEvens(int[] arr) {
    int count = 0;
    for (int num : arr) {
        if (num % 2 == 0) {
            count++;
        }
    }
    return count;
}

// 3. Calculate average
public static double average(int[] arr) {
    int sum = 0;
    for (int num : arr) {
        sum += num;
    }
    return (double) sum / arr.length;
}

// 4. Shift elements left (removing first)
public static void shiftLeft(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;  // Fill last with default
}

// 5. Shift elements right (removing last)
public static void shiftRight(int[] arr) {
    for (int i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = 0;  // Fill first with default
}

// 6. Reverse array
public static void reverse(int[] arr) {
    for (int i = 0; i < arr.length / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
```

### ⚠️ Common Mistakes
- ArrayIndexOutOfBoundsException (accessing invalid index)
- Using `arr.length()` instead of `arr.length`
- Off-by-one errors in loops
- Confusing array length with last valid index

---

## 📋 Unit 7: ArrayList

### ArrayList Basics
```java
import java.util.ArrayList;

// Declaration (must use wrapper classes for primitives)
ArrayList<Integer> numbers = new ArrayList<Integer>();
ArrayList<String> names = new ArrayList<String>();

// With diamond operator (Java 7+)
ArrayList<Integer> nums = new ArrayList<>();
```

### ArrayList Methods (MEMORIZE THESE!)
```java
ArrayList<String> list = new ArrayList<>();

// Add elements
list.add("Apple");           // Adds to end
list.add(0, "Banana");       // Inserts at index 0

// Access elements
String first = list.get(0);  // "Banana"
int size = list.size();      // 2

// Modify elements
list.set(0, "Cherry");       // Replace at index 0

// Remove elements
list.remove(0);              // Remove by index
list.remove("Apple");        // Remove first occurrence of value
```

### ArrayList vs Array Comparison
| Feature | Array | ArrayList |
|---------|-------|-----------|
| Size | Fixed | Dynamic |
| Syntax | `arr[i]` | `list.get(i)` |
| Length | `arr.length` | `list.size()` |
| Types | Primitives & Objects | Objects only |
| Add/Remove | Manual shifting | Built-in methods |

### Wrapper Classes
```java
// Primitive → Wrapper (autoboxing)
Integer num = 5;              // Auto-converts int to Integer
ArrayList<Integer> nums = new ArrayList<>();
nums.add(10);                 // Autoboxing

// Wrapper → Primitive (unboxing)
int value = nums.get(0);      // Auto-converts Integer to int

// Wrapper classes: Integer, Double, Boolean, Character
```

### Traversing ArrayList
```java
ArrayList<Integer> nums = new ArrayList<>();

// Standard for loop
for (int i = 0; i < nums.size(); i++) {
    System.out.println(nums.get(i));
}

// Enhanced for loop
for (Integer num : nums) {
    System.out.println(num);
}
```

### Removing While Traversing
```java
// WRONG - skips elements after removal
for (int i = 0; i < list.size(); i++) {
    if (list.get(i) < 0) {
        list.remove(i);  // After removal, elements shift!
    }
}

// CORRECT - traverse backwards
for (int i = list.size() - 1; i >= 0; i--) {
    if (list.get(i) < 0) {
        list.remove(i);
    }
}

// CORRECT - adjust index after removal
for (int i = 0; i < list.size(); i++) {
    if (list.get(i) < 0) {
        list.remove(i);
        i--;  // Stay at same index
    }
}
```

### ⚠️ Common Mistakes
- Using `list.length` instead of `list.size()`
- Using `list[i]` instead of `list.get(i)`
- Not adjusting index when removing during traversal
- Forgetting to import ArrayList

---

## 🔢 Unit 8: 2D Array

### 2D Array Basics
```java
// Declaration and initialization
int[][] grid = new int[3][4];  // 3 rows, 4 columns

int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Access elements
int value = matrix[1][2];  // Row 1, Column 2 → 6
matrix[0][0] = 10;         // Modify element

// Dimensions
int numRows = matrix.length;        // 3
int numCols = matrix[0].length;     // 3
```

### Row-Major Traversal (Standard)
```java
// Process row by row, left to right
for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {
        System.out.print(matrix[row][col] + " ");
    }
    System.out.println();
}
```

### Column-Major Traversal
```java
// Process column by column, top to bottom
for (int col = 0; col < matrix[0].length; col++) {
    for (int row = 0; row < matrix.length; row++) {
        System.out.print(matrix[row][col] + " ");
    }
    System.out.println();
}
```

### Enhanced For Loop with 2D Arrays
```java
// Outer loop gets each row (1D array)
for (int[] row : matrix) {
    // Inner loop gets each element in the row
    for (int value : row) {
        System.out.print(value + " ");
    }
    System.out.println();
}
```

### Common 2D Array Algorithms
```java
// Sum all elements
public static int sumAll(int[][] grid) {
    int sum = 0;
    for (int[] row : grid) {
        for (int val : row) {
            sum += val;
        }
    }
    return sum;
}

// Sum a specific row
public static int sumRow(int[][] grid, int row) {
    int sum = 0;
    for (int col = 0; col < grid[row].length; col++) {
        sum += grid[row][col];
    }
    return sum;
}

// Sum a specific column
public static int sumColumn(int[][] grid, int col) {
    int sum = 0;
    for (int row = 0; row < grid.length; row++) {
        sum += grid[row][col];
    }
    return sum;
}

// Find maximum value
public static int findMax(int[][] grid) {
    int max = grid[0][0];
    for (int[] row : grid) {
        for (int val : row) {
            if (val > max) {
                max = val;
            }
        }
    }
    return max;
}

// Count occurrences
public static int count(int[][] grid, int target) {
    int count = 0;
    for (int[] row : grid) {
        for (int val : row) {
            if (val == target) {
                count++;
            }
        }
    }
    return count;
}
```

### Diagonal Traversal
```java
// Main diagonal (top-left to bottom-right)
// Only works for square matrices
for (int i = 0; i < matrix.length; i++) {
    System.out.println(matrix[i][i]);
}

// Anti-diagonal (top-right to bottom-left)
for (int i = 0; i < matrix.length; i++) {
    System.out.println(matrix[i][matrix.length - 1 - i]);
}
```

### ⚠️ Common Mistakes
- Confusing row and column indices
- Assuming all rows have the same length (jagged arrays)
- Off-by-one errors with nested loops
- Using wrong array for length check

---

## 👪 Unit 9: Inheritance

### Inheritance Basics
```java
// Superclass (parent)
public class Animal {
    private String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public String getName() {
        return name;
    }
    
    public void speak() {
        System.out.println("Animal sound");
    }
}

// Subclass (child)
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name);  // MUST be first statement
        this.breed = breed;
    }
    
    public String getBreed() {
        return breed;
    }
    
    // Override parent method
    @Override
    public void speak() {
        System.out.println("Woof!");
    }
}
```

### The `super` Keyword
```java
public class Cat extends Animal {
    public Cat(String name) {
        super(name);  // Call parent constructor
    }
    
    @Override
    public void speak() {
        super.speak();  // Call parent method
        System.out.println("Meow!");
    }
}
```

### Method Overriding Rules
1. Same method signature (name and parameters)
2. Return type must be same or subtype
3. Cannot reduce visibility (public → private is illegal)
4. Use `@Override` annotation

### Polymorphism
```java
// Parent reference can hold child object
Animal myPet = new Dog("Buddy", "Labrador");

// Calls the DOG's speak method (runtime polymorphism)
myPet.speak();  // "Woof!"

// Cannot access Dog-specific methods without casting
// myPet.getBreed();  // Compile error!
String breed = ((Dog) myPet).getBreed();  // Works after casting
```

### Object Class Methods
```java
// Every class inherits from Object
public class Student {
    private String name;
    private int id;
    
    // Override toString for meaningful output
    @Override
    public String toString() {
        return "Student: " + name + " (ID: " + id + ")";
    }
    
    // Override equals for content comparison
    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Student) {
            Student other = (Student) obj;
            return this.id == other.id;
        }
        return false;
    }
}
```

### Abstract Classes
```java
public abstract class Shape {
    // Abstract method - no body, must be overridden
    public abstract double getArea();
    
    // Concrete method - has implementation
    public void printArea() {
        System.out.println("Area: " + getArea());
    }
}

public class Rectangle extends Shape {
    private double width, height;
    
    public Rectangle(double w, double h) {
        width = w;
        height = h;
    }
    
    @Override
    public double getArea() {
        return width * height;
    }
}
```

### Interfaces
```java
public interface Comparable<T> {
    int compareTo(T other);
}

public class Student implements Comparable<Student> {
    private String name;
    private double gpa;
    
    @Override
    public int compareTo(Student other) {
        // Compare by GPA
        if (this.gpa < other.gpa) return -1;
        else if (this.gpa > other.gpa) return 1;
        else return 0;
    }
}
```

### ⚠️ Common Mistakes
- Forgetting `super()` must be first in constructor
- Trying to access private parent fields directly
- Confusing overloading (different params) and overriding (same signature)
- Not checking type before casting

---

## 🔄 Unit 10: Recursion

### Recursion Basics
```java
// Every recursive method needs:
// 1. Base case - stops the recursion
// 2. Recursive case - calls itself with smaller input

public static int factorial(int n) {
    // Base case
    if (n == 0 || n == 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

// factorial(4) = 4 * factorial(3)
//              = 4 * 3 * factorial(2)
//              = 4 * 3 * 2 * factorial(1)
//              = 4 * 3 * 2 * 1
//              = 24
```

### Common Recursive Patterns

#### Fibonacci
```java
public static int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// fib(5) = 5, fib(6) = 8, fib(7) = 13
```

#### Power Function
```java
public static int power(int base, int exp) {
    if (exp == 0) {
        return 1;
    }
    return base * power(base, exp - 1);
}
```

#### Sum of Digits
```java
public static int sumDigits(int n) {
    if (n < 10) {
        return n;
    }
    return n % 10 + sumDigits(n / 10);
}
// sumDigits(1234) = 4 + sumDigits(123)
//                 = 4 + 3 + sumDigits(12)
//                 = 4 + 3 + 2 + sumDigits(1)
//                 = 4 + 3 + 2 + 1 = 10
```

#### String Reversal
```java
public static String reverse(String s) {
    if (s.length() <= 1) {
        return s;
    }
    return reverse(s.substring(1)) + s.charAt(0);
}
// reverse("hello") = reverse("ello") + "h"
//                  = reverse("llo") + "e" + "h"
//                  = ... = "olleh"
```

#### Palindrome Check
```java
public static boolean isPalindrome(String s) {
    if (s.length() <= 1) {
        return true;
    }
    if (s.charAt(0) != s.charAt(s.length() - 1)) {
        return false;
    }
    return isPalindrome(s.substring(1, s.length() - 1));
}
```

### Recursive Array Processing
```java
// Sum array recursively
public static int sum(int[] arr, int index) {
    if (index == arr.length) {
        return 0;
    }
    return arr[index] + sum(arr, index + 1);
}

// Find maximum recursively
public static int max(int[] arr, int index) {
    if (index == arr.length - 1) {
        return arr[index];
    }
    return Math.max(arr[index], max(arr, index + 1));
}

// Binary search (recursive)
public static int binarySearch(int[] arr, int target, int low, int high) {
    if (low > high) {
        return -1;  // Not found
    }
    int mid = (low + high) / 2;
    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, high);
    }
}
```

### Merge Sort (Important for FRQ)
```java
public static void mergeSort(int[] arr, int low, int high) {
    if (low < high) {
        int mid = (low + high) / 2;
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }
}

public static void merge(int[] arr, int low, int mid, int high) {
    int[] temp = new int[high - low + 1];
    int i = low, j = mid + 1, k = 0;
    
    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= high) temp[k++] = arr[j++];
    
    for (k = 0; k < temp.length; k++) {
        arr[low + k] = temp[k];
    }
}
```

### ⚠️ Common Mistakes
- Missing or incorrect base case (infinite recursion)
- Not making progress toward base case
- StackOverflowError from too many calls
- Not returning the recursive call result

---

## 🔍 Essential Algorithms Reference

### Searching Algorithms

#### Sequential (Linear) Search
```java
// Time: O(n)
// Works on any array
public static int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
```

#### Binary Search
```java
// Time: O(log n)
// Array MUST be sorted
public static int binarySearch(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;
    
    while (low <= high) {
        int mid = (low + high) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
```

### Sorting Algorithms

#### Selection Sort
```java
// Time: O(n²)
// Find minimum, swap to front
public static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        int minIndex = i;
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

#### Insertion Sort
```java
// Time: O(n²), but O(n) for nearly sorted
// Insert each element into sorted portion
public static void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i];
        int j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```

#### Merge Sort (Recursive)
```java
// Time: O(n log n)
// Divide and conquer
// See Unit 10 section for full implementation
```

### Algorithm Comparison
| Algorithm | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| Linear Search | O(1) | O(n) | O(n) | O(1) |
| Binary Search | O(1) | O(log n) | O(log n) | O(1) |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |

---

## 📝 FRQ Patterns and Strategies

### FRQ Types (AP CSA Exam)
1. **Methods and Control Structures** - Array/ArrayList processing
2. **Classes** - Complete or partial class implementation
3. **Array/ArrayList** - Complex array manipulation
4. **2D Array** - Grid-based problems

### Common FRQ Algorithm Patterns

#### Pattern 1: Process and Filter
```java
// Remove elements not meeting criteria
public ArrayList<String> filterLongWords(ArrayList<String> words, int minLength) {
    ArrayList<String> result = new ArrayList<>();
    for (String word : words) {
        if (word.length() >= minLength) {
            result.add(word);
        }
    }
    return result;
}
```

#### Pattern 2: Transform Elements
```java
// Modify each element
public void doubleAll(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
}
```

#### Pattern 3: Accumulate/Reduce
```java
// Combine elements into single result
public String concatenate(String[] words) {
    String result = "";
    for (String word : words) {
        result += word;
    }
    return result;
}
```

#### Pattern 4: Find Consecutive Matches
```java
// Check for k consecutive equal values
public boolean hasConsecutive(int[] arr, int k) {
    int count = 1;
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i-1]) {
            count++;
            if (count >= k) return true;
        } else {
            count = 1;
        }
    }
    return false;
}
```

#### Pattern 5: Grid Neighbor Check
```java
// Check adjacent cells in 2D array
public int countNeighbors(int[][] grid, int row, int col) {
    int count = 0;
    int[] dRow = {-1, -1, -1, 0, 0, 1, 1, 1};
    int[] dCol = {-1, 0, 1, -1, 1, -1, 0, 1};
    
    for (int i = 0; i < 8; i++) {
        int newRow = row + dRow[i];
        int newCol = col + dCol[i];
        
        if (newRow >= 0 && newRow < grid.length &&
            newCol >= 0 && newCol < grid[0].length) {
            if (grid[newRow][newCol] == 1) {
                count++;
            }
        }
    }
    return count;
}
```

### FRQ Writing Tips
1. **Read the entire problem** before coding
2. **Use the provided method signatures** exactly
3. **Check for null/empty cases** if not guaranteed
4. **Use meaningful variable names**
5. **Don't forget return statements**
6. **Test with provided examples mentally**

---

## 🎯 Code Tracing Strategies

### Variable Tracking Table
```java
int x = 5;
int y = 3;
x = x + y;    // x: 8
y = x - y;    // y: 5
x = x - y;    // x: 3
```
| Step | x | y |
|------|---|---|
| Init | 5 | 3 |
| 1 | 8 | 3 |
| 2 | 8 | 5 |
| 3 | 3 | 5 |

### Loop Tracing
```java
int sum = 0;
for (int i = 1; i <= 4; i++) {
    sum += i;
}
```
| i | sum |
|---|-----|
| 1 | 1 |
| 2 | 3 |
| 3 | 6 |
| 4 | 10 |

### Recursion Tracing (Use a Call Stack)
```java
factorial(4)
├── 4 * factorial(3)
│   ├── 3 * factorial(2)
│   │   ├── 2 * factorial(1)
│   │   │   └── returns 1
│   │   └── returns 2
│   └── returns 6
└── returns 24
```

---

## ⚠️ Top 25 Common Mistakes to Avoid

### Syntax Errors
1. Missing semicolons
2. Mismatched curly braces
3. Using `=` instead of `==`
4. Forgetting parentheses in method calls

### Logic Errors
5. Off-by-one errors in loops
6. Integer division truncation
7. Infinite loops
8. Wrong comparison operator

### Object Errors
9. Using `==` instead of `.equals()` for Strings
10. NullPointerException (calling methods on null)
11. ArrayIndexOutOfBoundsException
12. Forgetting to instantiate objects

### Array/ArrayList Errors
13. Using `.length()` instead of `.length` for arrays
14. Using `.length` instead of `.size()` for ArrayList
15. Using `[]` instead of `.get()` for ArrayList
16. Modifying ArrayList while iterating forward

### Class Design Errors
17. Making instance variables public
18. Not using `this` when needed
19. Forgetting `super()` in constructor
20. Not overriding `toString()` and `equals()`

### Method Errors
21. Missing return statement
22. Returning wrong type
23. Not handling edge cases
24. Modifying immutable Strings

### Recursion Errors
25. Missing or incorrect base case

---

## 📊 Quick Reference Tables

### Comparison: Array vs ArrayList vs 2D Array
| Operation | Array | ArrayList | 2D Array |
|-----------|-------|-----------|----------|
| Length | `.length` | `.size()` | `.length` / `[0].length` |
| Access | `arr[i]` | `list.get(i)` | `arr[r][c]` |
| Modify | `arr[i] = x` | `list.set(i, x)` | `arr[r][c] = x` |
| Add | N/A | `list.add(x)` | N/A |
| Remove | N/A | `list.remove(i)` | N/A |

### String Method Quick Reference
| Method | Returns | Example |
|--------|---------|---------|
| `length()` | int | `"Hello".length()` → 5 |
| `charAt(i)` | char | `"Hello".charAt(1)` → 'e' |
| `substring(s,e)` | String | `"Hello".substring(1,3)` → "el" |
| `indexOf(s)` | int | `"Hello".indexOf("l")` → 2 |
| `equals(s)` | boolean | `"Hi".equals("Hi")` → true |
| `compareTo(s)` | int | `"A".compareTo("B")` → negative |

### Math Method Quick Reference
| Method | Returns | Example |
|--------|---------|---------|
| `abs(x)` | number | `Math.abs(-5)` → 5 |
| `pow(b,e)` | double | `Math.pow(2,3)` → 8.0 |
| `sqrt(x)` | double | `Math.sqrt(16)` → 4.0 |
| `random()` | double | `Math.random()` → [0.0, 1.0) |

---

## 🏆 Final Exam Checklist

### Before the Exam
- [ ] Review all String and Math methods
- [ ] Practice array traversal patterns
- [ ] Review ArrayList add/remove edge cases
- [ ] Practice 2D array row/column operations
- [ ] Review inheritance and polymorphism
- [ ] Trace through recursion examples

### During Multiple Choice
- [ ] Trace code carefully with tables
- [ ] Watch for tricky integer division
- [ ] Check loop bounds carefully
- [ ] Consider edge cases (empty, null, one element)
- [ ] Use process of elimination

### During Free Response
- [ ] Read entire question first
- [ ] Use exact method signatures given
- [ ] Write helper methods if needed
- [ ] Check for return statements
- [ ] Handle edge cases appropriately
- [ ] Write clearly - partial credit exists!

---

## 🔑 Key Formulas and Patterns

### Random Number Generation
```java
// Random int from 0 to n-1
(int)(Math.random() * n)

// Random int from 1 to n
(int)(Math.random() * n) + 1

// Random int from min to max (inclusive)
(int)(Math.random() * (max - min + 1)) + min
```

### Array Index Formulas
```java
// Last element
arr[arr.length - 1]

// Middle element
arr[arr.length / 2]

// Iterate pairs
for (int i = 0; i < arr.length - 1; i++) {
    // arr[i] and arr[i+1] are adjacent
}
```

### 2D Array Index Formulas
```java
// Number of elements
rows * cols

// Convert 1D index to 2D
row = index / numCols
col = index % numCols

// Convert 2D to 1D index
index = row * numCols + col
```

---

**Good luck on your AP Computer Science A exam! 🎓**

*Remember: Practice coding by hand, understand the concepts, and you'll do great!*

:::GUIDE:::
