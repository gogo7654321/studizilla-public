# AP Computer Science A Unit 1 Study Guide

:::GUIDE:::
unit::=Unit 1
title::=💻 Unit 1: Primitive Types Complete Guide
desc::=Master Java primitive data types, variables, expressions, and input/output operations
diff::=Medium
time::=45 minutes
tags::=computer science, java, primitive types, variables, expressions
content::=

# 💻 Unit 1: Primitive Types

## 📋 Unit Overview

Welcome to Java programming! This unit introduces the fundamental building blocks of Java programs including variables, data types, and basic operations. Master these concepts for everything else! ☕

### Essential Questions

| Question | Focus |
|----------|-------|
| What are primitive types? | Basic data types |
| How do variables work? | Storage and naming |
| What are expressions? | Operations and evaluation |
| How does Java handle math? | Arithmetic operations |
| What is casting? | Type conversion |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Primitive types** | int, double, boolean |
| **Variables** | Named storage locations |
| **Operators** | Arithmetic operations |
| **Expressions** | Combinations that produce values |
| **Casting** | Converting between types |

---

## 📅 History of Programming Languages

:::TIMELINE:::
id::=programming-history-timeline
title::=Evolution of Programming Languages
events::=[
  {"year": "1843", "event": "Ada Lovelace's Algorithm", "detail": "First computer program written for Charles Babbage's Analytical Engine, making Ada Lovelace the first programmer"},
  {"year": "1957", "event": "FORTRAN Released", "detail": "IBM's FORmula TRANslation - first widely used high-level programming language for scientific computing"},
  {"year": "1959", "event": "COBOL Created", "detail": "Common Business-Oriented Language for business computing; still runs banking systems today"},
  {"year": "1964", "event": "BASIC Introduced", "detail": "Beginner's All-purpose Symbolic Instruction Code - designed for teaching programming to beginners"},
  {"year": "1972", "event": "C Language Created", "detail": "Dennis Ritchie at Bell Labs creates C; becomes foundation for Unix and most modern languages"},
  {"year": "1983", "event": "C++ Developed", "detail": "Bjarne Stroustrup extends C with object-oriented features; 'C with Classes'"},
  {"year": "1991", "event": "Python Released", "detail": "Guido van Rossum creates Python; emphasizes readability and simplicity"},
  {"year": "1995", "event": "Java Released", "detail": "James Gosling at Sun Microsystems; 'Write Once, Run Anywhere' on Java Virtual Machine"},
  {"year": "1995", "event": "JavaScript Created", "detail": "Brendan Eich creates JavaScript in 10 days for Netscape; becomes the language of the web"},
  {"year": "2000", "event": "C# Launched", "detail": "Microsoft creates C# for .NET framework; combines C++ and Java concepts"},
  {"year": "2009", "event": "Go Released", "detail": "Google creates Go for modern systems programming with built-in concurrency"},
  {"year": "2014", "event": "Swift Introduced", "detail": "Apple's modern replacement for Objective-C in iOS/macOS development"},
  {"year": "2015", "event": "Rust 1.0 Released", "detail": "Mozilla's systems language focused on memory safety without garbage collection"}
]
:::/TIMELINE:::

---

## ☕ Why Java?

### Java Characteristics

| Feature | Description |
|---------|-------------|
| **Object-oriented** | Everything is an object (mostly) |
| **Platform independent** | Write once, run anywhere |
| **Strongly typed** | Must declare variable types |
| **Case sensitive** | `Name` ≠ `name` |

### Basic Program Structure

```java
public class MyProgram {
    public static void main(String[] args) {
        // Code goes here
        System.out.println("Hello, World!");
    }
}
```

| Component | Purpose |
|-----------|---------|
| **public class** | Container for code |
| **main method** | Entry point |
| **System.out.println** | Output to console |

---

## 🔢 Primitive Data Types

### The Eight Primitive Types

| Type | Size | Range | Example |
|------|------|-------|---------|
| **byte** | 8 bits | -128 to 127 | `byte b = 100;` |
| **short** | 16 bits | -32,768 to 32,767 | `short s = 1000;` |
| **int** | 32 bits | ±2.1 billion | `int x = 42;` |
| **long** | 64 bits | Very large | `long l = 123L;` |
| **float** | 32 bits | Decimal (less precise) | `float f = 3.14f;` |
| **double** | 64 bits | Decimal (more precise) | `double d = 3.14159;` |
| **char** | 16 bits | Single character | `char c = 'A';` |
| **boolean** | 1 bit | true or false | `boolean b = true;` |

### AP Exam Focus Types

| Type | Focus | AP Importance |
|------|-------|---------------|
| **int** | Whole numbers | ⭐⭐⭐ High |
| **double** | Decimal numbers | ⭐⭐⭐ High |
| **boolean** | true/false | ⭐⭐⭐ High |

### 🎮 Interactive Demo: Primitive Types

:::CODE:::
id::=primitive-types-demo
title::=Exploring Java Primitive Types
language::=java
runnable::=true
code::=
public class PrimitiveTypesDemo {
    public static void main(String[] args) {
        // ===== THE THREE AP EXAM TYPES =====
        
        // int - whole numbers (no decimals)
        int score = 95;
        int students = 30;
        int negative = -42;
        
        // double - decimal numbers
        double gpa = 3.75;
        double temperature = 98.6;
        double pi = 3.14159265358979;
        
        // boolean - true or false only
        boolean isPassing = true;
        boolean isWeekend = false;
        
        System.out.println("===== Primitive Types Demo =====");
        System.out.println("int score: " + score);
        System.out.println("int students: " + students);
        System.out.println("int negative: " + negative);
        System.out.println();
        System.out.println("double gpa: " + gpa);
        System.out.println("double temperature: " + temperature);
        System.out.println("double pi: " + pi);
        System.out.println();
        System.out.println("boolean isPassing: " + isPassing);
        System.out.println("boolean isWeekend: " + isWeekend);
        
        // ===== TYPE RANGES =====
        System.out.println("\n===== Type Ranges =====");
        System.out.println("int max: " + Integer.MAX_VALUE);
        System.out.println("int min: " + Integer.MIN_VALUE);
        System.out.println("double max: " + Double.MAX_VALUE);
        
        // ===== WHAT HAPPENS WITH OVERFLOW? =====
        System.out.println("\n===== Integer Overflow Demo =====");
        int maxInt = 2147483647;  // Maximum int value
        System.out.println("maxInt: " + maxInt);
        System.out.println("maxInt + 1: " + (maxInt + 1));  // Wraps around!
    }
}
expected_output::=
===== Primitive Types Demo =====
int score: 95
int students: 30
int negative: -42

double gpa: 3.75
double temperature: 98.6
double pi: 3.14159265358979

boolean isPassing: true
boolean isWeekend: false

===== Type Ranges =====
int max: 2147483647
int min: -2147483648
double max: 1.7976931348623157E308

===== Integer Overflow Demo =====
maxInt: 2147483647
maxInt + 1: -2147483648
:::/CODE:::

---

## 📝 Variables

### Variable Declaration

| Syntax | Example |
|--------|---------|
| `type name;` | `int count;` |
| `type name = value;` | `int count = 0;` |

### Naming Rules

| Rule | Valid | Invalid |
|------|-------|---------|
| Start with letter, $, or _ | `score`, `_value` | `2count` |
| No spaces | `totalScore` | `total score` |
| No reserved words | `myClass` | `class` |
| Case sensitive | `Name` ≠ `name` | - |

### Naming Conventions

| Convention | Example | Use For |
|------------|---------|---------|
| **camelCase** | `firstName` | Variables, methods |
| **PascalCase** | `MyClass` | Classes |
| **SCREAMING_CASE** | `MAX_VALUE` | Constants |

### Variable Initialization

| State | Description |
|-------|-------------|
| **Declared** | `int x;` (no value) |
| **Initialized** | `int x = 5;` (has value) |
| **Rule** | Must initialize before use |

---

## ➕ Arithmetic Operators

### Basic Operators

| Operator | Operation | Example | Result |
|----------|-----------|---------|--------|
| **+** | Addition | `5 + 3` | `8` |
| **-** | Subtraction | `5 - 3` | `2` |
| ***** | Multiplication | `5 * 3` | `15` |
| **/** | Division | `5 / 3` | `1` (int) |
| **%** | Modulus (remainder) | `5 % 3` | `2` |

### Integer Division

| Expression | Result | Explanation |
|------------|--------|-------------|
| `7 / 2` | `3` | Integer division truncates |
| `7.0 / 2` | `3.5` | Double division |
| `7 / 2.0` | `3.5` | Double division |
| `(double) 7 / 2` | `3.5` | Casting to double |

### Modulus Operator

| Expression | Result | Use Case |
|------------|--------|----------|
| `10 % 3` | `1` | Check divisibility |
| `7 % 2` | `1` | Check odd/even |
| `15 % 5` | `0` | Evenly divisible |

### Common Uses of Modulus

| Use | Expression | True When |
|----|------------|-----------|
| **Even number** | `n % 2 == 0` | n is even |
| **Odd number** | `n % 2 == 1` | n is odd |
| **Divisible by k** | `n % k == 0` | n divisible by k |
| **Last digit** | `n % 10` | Gets ones place |

### 🎮 Interactive Demo: Integer Division and Modulus

:::CODE:::
id::=integer-division-demo
title::=Integer Division vs Double Division
language::=java
runnable::=true
code::=
public class IntegerDivisionDemo {
    public static void main(String[] args) {
        System.out.println("===== INTEGER DIVISION =====");
        System.out.println("When both operands are int, result is int (truncated)!");
        System.out.println();
        
        // Integer division - TRUNCATES (doesn't round)
        System.out.println("7 / 2 = " + (7 / 2));       // 3, not 3.5!
        System.out.println("10 / 3 = " + (10 / 3));     // 3, not 3.33!
        System.out.println("1 / 2 = " + (1 / 2));       // 0, not 0.5!
        System.out.println("99 / 100 = " + (99 / 100)); // 0!
        
        System.out.println("\n===== GETTING DECIMAL RESULTS =====");
        System.out.println("Make at least one operand a double:");
        System.out.println();
        
        System.out.println("7.0 / 2 = " + (7.0 / 2));       // 3.5
        System.out.println("7 / 2.0 = " + (7 / 2.0));       // 3.5
        System.out.println("(double) 7 / 2 = " + ((double) 7 / 2)); // 3.5
        
        System.out.println("\n===== MODULUS (REMAINDER) =====");
        System.out.println("The % operator gives the remainder:");
        System.out.println();
        
        System.out.println("7 % 2 = " + (7 % 2));   // 1 (7 = 2*3 + 1)
        System.out.println("10 % 3 = " + (10 % 3)); // 1 (10 = 3*3 + 1)
        System.out.println("15 % 5 = " + (15 % 5)); // 0 (evenly divisible)
        System.out.println("8 % 10 = " + (8 % 10)); // 8 (less than divisor)
        
        System.out.println("\n===== PRACTICAL USES OF MODULUS =====");
        
        // Check even/odd
        int num = 17;
        System.out.println(num + " % 2 = " + (num % 2));
        System.out.println(num + " is " + (num % 2 == 0 ? "even" : "odd"));
        
        // Get last digit
        int number = 12345;
        System.out.println("\nNumber: " + number);
        System.out.println("Last digit: " + (number % 10));
        System.out.println("Last 2 digits: " + (number % 100));
        
        // Remove last digit
        System.out.println("Without last digit: " + (number / 10));
    }
}
expected_output::=
===== INTEGER DIVISION =====
When both operands are int, result is int (truncated)!

7 / 2 = 3
10 / 3 = 3
1 / 2 = 0
99 / 100 = 0

===== GETTING DECIMAL RESULTS =====
Make at least one operand a double:

7.0 / 2 = 3.5
7 / 2.0 = 3.5
(double) 7 / 2 = 3.5

===== MODULUS (REMAINDER) =====
The % operator gives the remainder:

7 % 2 = 1
10 % 3 = 1
15 % 5 = 0
8 % 10 = 8

===== PRACTICAL USES OF MODULUS =====
17 % 2 = 1
17 is odd

Number: 12345
Last digit: 5
Last 2 digits: 45
Without last digit: 1234
:::/CODE:::

---

## 📊 Operator Precedence

### Order of Operations

| Priority | Operators | Description |
|----------|-----------|-------------|
| **1** | `()` | Parentheses first |
| **2** | `* / %` | Left to right |
| **3** | `+ -` | Left to right |

### Examples

| Expression | Evaluation | Result |
|------------|------------|--------|
| `2 + 3 * 4` | `2 + 12` | `14` |
| `(2 + 3) * 4` | `5 * 4` | `20` |
| `10 - 4 - 2` | `6 - 2` | `4` |
| `10 / 2 * 5` | `5 * 5` | `25` |

---

## 🔄 Compound Assignment Operators

### Shorthand Operators

| Operator | Equivalent | Example |
|----------|------------|---------|
| `+=` | `x = x + y` | `x += 5;` |
| `-=` | `x = x - y` | `x -= 3;` |
| `*=` | `x = x * y` | `x *= 2;` |
| `/=` | `x = x / y` | `x /= 4;` |
| `%=` | `x = x % y` | `x %= 3;` |

### Increment/Decrement

| Operator | Description | Example |
|----------|-------------|---------|
| `++` | Increment by 1 | `x++;` or `++x;` |
| `--` | Decrement by 1 | `x--;` or `--x;` |

### Pre vs. Post Increment

| Expression | Value of x | Value Used |
|------------|------------|------------|
| `y = x++;` | Increments after | Uses old value |
| `y = ++x;` | Increments before | Uses new value |

---

## 🔀 Type Casting

### Implicit Casting (Widening)

| From | To | Example |
|------|----|---------|
| `int` | `double` | `double d = 5;` |
| Smaller | Larger | Automatic |

### Explicit Casting (Narrowing)

| From | To | Example |
|------|----|---------|
| `double` | `int` | `int x = (int) 3.7;` |
| Larger | Smaller | Must be explicit |

### Casting Examples

| Expression | Result | Explanation |
|------------|--------|-------------|
| `(int) 3.7` | `3` | Truncates (not rounds) |
| `(int) 3.9` | `3` | Truncates (not rounds) |
| `(int) -2.9` | `-2` | Truncates toward zero |
| `(double) 5` | `5.0` | Converts to double |

### Casting in Expressions

| Expression | Result | Explanation |
|------------|--------|-------------|
| `(int) (7.0 / 2.0)` | `3` | Cast result |
| `(int) 7.0 / 2` | `3` | Cast 7.0 first |
| `7 / (double) 2` | `3.5` | Cast 2 first |

### 🎮 Interactive Demo: Type Casting

:::CODE:::
id::=type-casting-demo
title::=Understanding Type Casting in Java
language::=java
runnable::=true
code::=
public class TypeCastingDemo {
    public static void main(String[] args) {
        System.out.println("===== IMPLICIT CASTING (Widening) =====");
        System.out.println("Smaller type -> Larger type (automatic)");
        System.out.println();
        
        int myInt = 42;
        double myDouble = myInt;  // int automatically becomes double
        System.out.println("int myInt = 42");
        System.out.println("double myDouble = myInt; // Result: " + myDouble);
        
        System.out.println("\n===== EXPLICIT CASTING (Narrowing) =====");
        System.out.println("Larger type -> Smaller type (must cast)");
        System.out.println("WARNING: Truncates, does NOT round!");
        System.out.println();
        
        double price = 19.99;
        int truncated = (int) price;  // Must explicitly cast
        System.out.println("double price = 19.99");
        System.out.println("(int) price = " + truncated + " // Truncated, not rounded!");
        
        System.out.println("\n===== CASTING EXAMPLES =====");
        System.out.println("(int) 3.1 = " + (int) 3.1);   // 3
        System.out.println("(int) 3.9 = " + (int) 3.9);   // 3, NOT 4!
        System.out.println("(int) -2.9 = " + (int) -2.9); // -2, truncates toward 0
        System.out.println("(int) -2.1 = " + (int) -2.1); // -2
        
        System.out.println("\n===== CASTING IN EXPRESSIONS =====");
        System.out.println("Order of casting matters!");
        System.out.println();
        
        int a = 7, b = 2;
        System.out.println("int a = 7, b = 2");
        System.out.println();
        System.out.println("a / b = " + (a / b) + " // Both int -> int result");
        System.out.println("(double) a / b = " + ((double) a / b) + " // Cast a first");
        System.out.println("a / (double) b = " + (a / (double) b) + " // Cast b first");
        System.out.println("(double) (a / b) = " + ((double) (a / b)) + " // Cast AFTER division (too late!)");
        
        System.out.println("\n===== CALCULATING AVERAGES =====");
        int sum = 17;
        int count = 5;
        
        // Wrong way - integer division first
        double wrongAvg = sum / count;
        System.out.println("Wrong: 17 / 5 = " + wrongAvg);
        
        // Right way - cast before division
        double rightAvg = (double) sum / count;
        System.out.println("Right: (double) 17 / 5 = " + rightAvg);
    }
}
expected_output::=
===== IMPLICIT CASTING (Widening) =====
Smaller type -> Larger type (automatic)

int myInt = 42
double myDouble = myInt; // Result: 42.0

===== EXPLICIT CASTING (Narrowing) =====
Larger type -> Smaller type (must cast)
WARNING: Truncates, does NOT round!

double price = 19.99
(int) price = 19 // Truncated, not rounded!

===== CASTING EXAMPLES =====
(int) 3.1 = 3
(int) 3.9 = 3
(int) -2.9 = -2
(int) -2.1 = -2

===== CASTING IN EXPRESSIONS =====
Order of casting matters!

int a = 7, b = 2
a / b = 3 // Both int -> int result
(double) a / b = 3.5 // Cast a first
a / (double) b = 3.5 // Cast b first
(double) (a / b) = 3.0 // Cast AFTER division (too late!)

===== CALCULATING AVERAGES =====
Wrong: 17 / 5 = 3.0
Right: (double) 17 / 5 = 3.4
:::/CODE:::

---

## 📤 Output

### System.out.println

| Method | Effect |
|--------|--------|
| `System.out.println(x)` | Prints x, then new line |
| `System.out.print(x)` | Prints x, no new line |

### String Concatenation

| Expression | Output |
|------------|--------|
| `"Hello " + "World"` | `Hello World` |
| `"Score: " + 95` | `Score: 95` |
| `"Sum: " + 2 + 3` | `Sum: 23` |
| `"Sum: " + (2 + 3)` | `Sum: 5` |

### Concatenation Rules

| Rule | Example | Result |
|------|---------|--------|
| Left to right | `1 + 2 + "abc"` | `3abc` |
| Once String, stays String | `"abc" + 1 + 2` | `abc12` |
| Use parentheses | `"abc" + (1 + 2)` | `abc3` |

### 🎮 Interactive Demo: String Concatenation Traps

:::CODE:::
id::=string-concatenation-demo
title::=String Concatenation - Watch Out for These!
language::=java
runnable::=true
code::=
public class StringConcatenationDemo {
    public static void main(String[] args) {
        System.out.println("===== BASIC CONCATENATION =====");
        System.out.println("Hello " + "World");
        System.out.println("Score: " + 95);
        System.out.println("GPA: " + 3.5);
        
        System.out.println("\n===== THE TRICKY PART =====");
        System.out.println("Left-to-right evaluation:");
        System.out.println();
        
        // These produce DIFFERENT results!
        System.out.println("1 + 2 + \"abc\" = " + (1 + 2 + "abc"));
        System.out.println("\"abc\" + 1 + 2 = " + ("abc" + 1 + 2));
        System.out.println("\"abc\" + (1 + 2) = " + ("abc" + (1 + 2)));
        
        System.out.println("\n===== WHY THIS HAPPENS =====");
        System.out.println("1 + 2 + \"abc\":");
        System.out.println("  Step 1: 1 + 2 = 3 (both int, so addition)");
        System.out.println("  Step 2: 3 + \"abc\" = \"3abc\" (int + String = String)");
        System.out.println();
        System.out.println("\"abc\" + 1 + 2:");
        System.out.println("  Step 1: \"abc\" + 1 = \"abc1\" (String + int = String)");
        System.out.println("  Step 2: \"abc1\" + 2 = \"abc12\" (String + int = String)");
        
        System.out.println("\n===== COMMON MISTAKE =====");
        int a = 5, b = 3;
        System.out.println("int a = 5, b = 3");
        System.out.println();
        
        // Wrong way
        System.out.println("\"Sum: \" + a + b = " + ("Sum: " + a + b));
        
        // Right way
        System.out.println("\"Sum: \" + (a + b) = " + ("Sum: " + (a + b)));
        
        System.out.println("\n===== MORE EXAMPLES =====");
        System.out.println("10 - 5 + \" = result\" -> " + (10 - 5 + " = result"));
        System.out.println("\"Result = \" + 10 - 5 would cause ERROR!");
        System.out.println("\"Result = \" + (10 - 5) -> " + ("Result = " + (10 - 5)));
    }
}
expected_output::=
===== BASIC CONCATENATION =====
Hello World
Score: 95
GPA: 3.5

===== THE TRICKY PART =====
Left-to-right evaluation:

1 + 2 + "abc" = 3abc
"abc" + 1 + 2 = abc12
"abc" + (1 + 2) = abc3

===== WHY THIS HAPPENS =====
1 + 2 + "abc":
  Step 1: 1 + 2 = 3 (both int, so addition)
  Step 2: 3 + "abc" = "3abc" (int + String = String)

"abc" + 1 + 2:
  Step 1: "abc" + 1 = "abc1" (String + int = String)
  Step 2: "abc1" + 2 = "abc12" (String + int = String)

===== COMMON MISTAKE =====
int a = 5, b = 3

"Sum: " + a + b = Sum: 53
"Sum: " + (a + b) = Sum: 8

===== MORE EXAMPLES =====
10 - 5 + " = result" -> 5 = result
"Result = " + 10 - 5 would cause ERROR!
"Result = " + (10 - 5) -> Result = 5
:::/CODE:::

---

## 📥 Input (Scanner)

### Setting Up Scanner

```java
import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Enter a number: ");
        int num = input.nextInt();
        
        System.out.println("You entered: " + num);
    }
}
```

### Scanner Methods

| Method | Reads |
|--------|-------|
| `nextInt()` | Integer |
| `nextDouble()` | Double |
| `next()` | Single word |
| `nextLine()` | Entire line |
| `nextBoolean()` | Boolean |

---

## ⚠️ Common Errors

### Integer Division

| Error | Explanation |
|-------|-------------|
| `int avg = (a + b) / 2;` | May lose precision |
| **Fix** | `double avg = (a + b) / 2.0;` |

### Uninitialized Variables

| Error | Explanation |
|-------|-------------|
| `int x; System.out.println(x);` | Variable not initialized |
| **Fix** | `int x = 0;` |

### Type Mismatch

| Error | Explanation |
|-------|-------------|
| `int x = 3.14;` | Can't assign double to int |
| **Fix** | `int x = (int) 3.14;` |

### Overflow

| Error | Explanation |
|-------|-------------|
| `int max = 2147483647 + 1;` | Overflow |
| **Result** | `-2147483648` (wraps around) |

---

## 📐 Math Expressions

### Common Patterns

| Task | Expression |
|------|------------|
| **Average** | `(a + b) / 2.0` |
| **Distance** | `Math.sqrt(dx*dx + dy*dy)` |
| **Remainder** | `n % divisor` |
| **Integer digits** | `n / 10` (remove last), `n % 10` (get last) |

### Temperature Conversion

| Formula | Code |
|---------|------|
| F to C | `double c = (f - 32) * 5 / 9.0;` |
| C to F | `double f = c * 9 / 5.0 + 32;` |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Primitive type** | Basic data type (int, double, boolean) |
| **Variable** | Named storage location |
| **Declaration** | Creating a variable |
| **Initialization** | Assigning first value |
| **Expression** | Code that produces a value |
| **Operator** | Symbol for operation (+, -, *, /) |
| **Casting** | Converting between types |
| **Truncation** | Cutting off decimal part |
| **Concatenation** | Joining strings |
| **Modulus** | Remainder operator (%) |

---

## 🎯 AP Exam Strategies

### Common Question Types

| Type | Focus |
|------|-------|
| **Evaluate expressions** | Order of operations |
| **Integer division** | Truncation behavior |
| **Casting** | When and how |
| **Concatenation** | String + number |

### Key Things to Remember

| Topic | Remember |
|-------|----------|
| **int / int** | Always integer result |
| **Casting** | Truncates, doesn't round |
| **Modulus** | Gives remainder |
| **Concatenation** | Left to right |

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Thinking casting rounds | Casting truncates |
| Forgetting integer division | Use .0 for decimals |
| String + num + num | Use parentheses |

### FRQ Tips

| Tip | Explanation |
|-----|-------------|
| **Show work** | Trace through expressions |
| **Check types** | int vs. double |
| **Watch precedence** | * / before + - |

---

**Good luck on your AP Computer Science A exam! 🍀💻☕**

Remember: Java is strongly typed - always know your data types! Integer division truncates, and casting also truncates (doesn't round). Use parentheses when in doubt about order of operations!
