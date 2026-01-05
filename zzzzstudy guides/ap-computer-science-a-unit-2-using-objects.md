# AP Computer Science A Unit 2 Study Guide

:::GUIDE:::
unit::=Unit 2
title::=💻 Unit 2: Using Objects Complete Guide
desc::=Master object creation, method calls, Strings, and wrapper classes in Java with interactive code examples
diff::=Medium
time::=60 minutes
tags::=computer science, java, objects, strings, methods, classes, interactive
content::=

# 💻 Unit 2: Using Objects

## 📋 Unit Overview

Objects are the heart of Java! This unit covers creating and using objects, calling methods, and working with the String class. Understanding objects is essential for AP CSA! 🎯

### Essential Questions

| Question | Focus |
|----------|-------|
| What are objects? | Instances of classes |
| How do we create objects? | Constructors |
| How do we use objects? | Method calls |
| What are Strings? | Text as objects |
| What are wrapper classes? | Objects for primitives |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Object** | Instance of a class |
| **Class** | Blueprint for objects |
| **Constructor** | Creates new object |
| **Method** | Behavior of object |
| **String** | Text object |

:::TIMELINE:::
id::=java-oop-history
title::=📅 History of Object-Oriented Programming in Java
events::=[
  {"year": "1967", "event": "Simula introduces OOP concepts", "detail": "Norwegian Computing Center creates first OOP language with classes and objects"},
  {"year": "1972", "event": "Smalltalk developed at Xerox PARC", "detail": "Pure OOP language that influenced Java's design philosophy"},
  {"year": "1983", "event": "C++ created by Bjarne Stroustrup", "detail": "Adds OOP to C, becoming a major influence on Java syntax"},
  {"year": "1991", "event": "Java project begins at Sun Microsystems", "detail": "James Gosling starts 'Oak' project, later renamed Java"},
  {"year": "1995", "event": "Java 1.0 released", "detail": "First public release with core OOP features and String class"},
  {"year": "1998", "event": "Java 2 (J2SE 1.2) released", "detail": "Collections framework adds ArrayList, wrapper class improvements"},
  {"year": "2004", "event": "Java 5 introduces autoboxing", "detail": "Automatic conversion between primitives and wrapper classes"},
  {"year": "2014", "event": "Java 8 adds lambdas and streams", "detail": "Functional programming features complement OOP"},
  {"year": "2023", "event": "Java 21 LTS released", "detail": "Modern Java with virtual threads, pattern matching, and enhanced OOP"}
]
:::/TIMELINE:::

---

## 🏗️ Objects and Classes

### Class vs. Object

| Term | Definition | Analogy |
|------|------------|---------|
| **Class** | Blueprint/template | Cookie cutter |
| **Object** | Instance of class | A cookie |
| **Multiple objects** | Same class, different data | Many cookies |

### Creating Objects

| Syntax | Example |
|--------|---------|
| `ClassName objName = new ClassName();` | `Scanner s = new Scanner(System.in);` |
| `ClassName objName = new ClassName(args);` | `String s = new String("Hello");` |

### Constructor

| Definition | Special method that creates objects |
|------------|-------------------------------------|
| **Name** | Same as class name |
| **Return** | No return type |
| **Purpose** | Initialize new object |

:::CODE:::
id::=object-creation-demo
title::=🔧 Creating Objects - Interactive Demo
language::=java
runnable::=true
code::=
// Creating objects in Java
// Click "Run" to see how objects are created!

import java.util.Scanner;

public class ObjectDemo {
    public static void main(String[] args) {
        // Creating a String object using a literal
        String greeting = "Hello, World!";
        System.out.println("String literal: " + greeting);
        
        // Creating a String object using constructor
        String name = new String("Java");
        System.out.println("String constructor: " + name);
        
        // Creating multiple objects from same class
        String s1 = "First";
        String s2 = "Second";
        String s3 = "Third";
        
        System.out.println("\nMultiple String objects:");
        System.out.println("s1: " + s1);
        System.out.println("s2: " + s2);
        System.out.println("s3: " + s3);
        
        // Each object has its own data
        System.out.println("\nEach object has its own length:");
        System.out.println("s1.length(): " + s1.length());
        System.out.println("s2.length(): " + s2.length());
        System.out.println("s3.length(): " + s3.length());
    }
}
expected_output::=
String literal: Hello, World!
String constructor: Java

Multiple String objects:
s1: First
s2: Second
s3: Third

Each object has its own length:
s1.length(): 5
s2.length(): 6
s3.length(): 5
:::/CODE:::

---

## 📞 Calling Methods

### Method Call Syntax

| Type | Syntax | Example |
|------|--------|---------|
| **Instance method** | `object.method()` | `s.length()` |
| **With arguments** | `object.method(args)` | `s.substring(0, 3)` |
| **Static method** | `Class.method()` | `Math.sqrt(25)` |

### Void vs. Return Methods

| Type | Description | Example |
|------|-------------|---------|
| **Void** | Performs action, no return | `System.out.println()` |
| **Return** | Gives back a value | `s.length()` |

### Using Return Values

| Code | Explanation |
|------|-------------|
| `int len = s.length();` | Store in variable |
| `System.out.println(s.length());` | Use directly |
| `if (s.length() > 5)` | Use in expression |

---

## 📜 String Class

### Creating Strings

| Method | Example |
|--------|---------|
| **Literal** | `String s = "Hello";` |
| **Constructor** | `String s = new String("Hello");` |
| **Preferred** | Literal form |

### String Immutability

| Concept | Description |
|---------|-------------|
| **Immutable** | Cannot be changed once created |
| **Methods** | Return new String, don't modify |
| `s.toUpperCase()` | Returns new String, s unchanged |

:::CODE:::
id::=string-immutability-demo
title::=🔒 String Immutability - See It In Action
language::=java
runnable::=true
code::=
// String Immutability Demo
// Watch how Strings cannot be modified!

public class ImmutabilityDemo {
    public static void main(String[] args) {
        // Create original String
        String original = "Hello";
        System.out.println("Original: " + original);
        System.out.println("Memory address hint: " + System.identityHashCode(original));
        
        // Try to "modify" with toUpperCase()
        String upper = original.toUpperCase();
        
        System.out.println("\nAfter calling toUpperCase():");
        System.out.println("original is still: " + original);  // Unchanged!
        System.out.println("upper is: " + upper);              // New String!
        
        System.out.println("\nMemory addresses (different = different objects):");
        System.out.println("original address: " + System.identityHashCode(original));
        System.out.println("upper address: " + System.identityHashCode(upper));
        
        // Common mistake: forgetting to save the result
        System.out.println("\n⚠️ Common Mistake:");
        String s = "hello";
        s.toUpperCase();  // Result is lost!
        System.out.println("s after s.toUpperCase(): " + s);  // Still "hello"!
        
        // Correct way:
        s = s.toUpperCase();  // Reassign!
        System.out.println("s after s = s.toUpperCase(): " + s);  // Now "HELLO"
    }
}
expected_output::=
Original: Hello
Memory address hint: [varies]

After calling toUpperCase():
original is still: Hello
upper is: HELLO

Memory addresses (different = different objects):
original address: [varies]
upper address: [varies]

⚠️ Common Mistake:
s after s.toUpperCase(): hello
s after s = s.toUpperCase(): HELLO
:::/CODE:::

---

## 🔤 String Methods

### Length and Characters

| Method | Description | Example |
|--------|-------------|---------|
| `length()` | Number of characters | `"Hello".length()` → `5` |
| `charAt(i)` | Character at index i | `"Hello".charAt(0)` → `'H'` |

### Index Reference

| String | `H` | `e` | `l` | `l` | `o` |
|--------|-----|-----|-----|-----|-----|
| **Index** | 0 | 1 | 2 | 3 | 4 |
| **Length** | 5 | | | | |

### Substring Methods

| Method | Description | Example |
|--------|-------------|---------|
| `substring(start)` | From start to end | `"Hello".substring(2)` → `"llo"` |
| `substring(start, end)` | From start to end-1 | `"Hello".substring(0, 3)` → `"Hel"` |

### Substring Rules

| Rule | Description |
|------|-------------|
| **Start index** | Inclusive |
| **End index** | Exclusive |
| **Empty string** | When start == end |

### More String Methods

| Method | Description | Example |
|--------|-------------|---------|
| `indexOf(str)` | First occurrence | `"Hello".indexOf("l")` → `2` |
| `equals(str)` | Compare content | `"Hi".equals("Hi")` → `true` |
| `equalsIgnoreCase(str)` | Ignore case | `"Hi".equalsIgnoreCase("HI")` → `true` |
| `compareTo(str)` | Lexicographic compare | `"a".compareTo("b")` → negative |

### Case Methods

| Method | Description | Example |
|--------|-------------|---------|
| `toUpperCase()` | All uppercase | `"Hello".toUpperCase()` → `"HELLO"` |
| `toLowerCase()` | All lowercase | `"Hello".toLowerCase()` → `"hello"` |

### compareTo Results

| Result | Meaning |
|--------|---------|
| **Negative** | This comes before other |
| **Zero** | Strings are equal |
| **Positive** | This comes after other |

:::CODE:::
id::=string-methods-demo
title::=🔤 String Methods - Interactive Practice
language::=java
runnable::=true
code::=
// String Methods Comprehensive Demo
// Run this to see all major String methods in action!

public class StringMethodsDemo {
    public static void main(String[] args) {
        String s = "Hello, World!";
        System.out.println("Original String: \"" + s + "\"");
        System.out.println("Length: " + s.length());
        System.out.println();
        
        // charAt - get character at index
        System.out.println("=== charAt(index) ===");
        System.out.println("charAt(0): '" + s.charAt(0) + "'");   // H
        System.out.println("charAt(7): '" + s.charAt(7) + "'");   // W
        System.out.println("charAt(12): '" + s.charAt(12) + "'"); // !
        System.out.println();
        
        // substring - extract portion
        System.out.println("=== substring(start, end) ===");
        System.out.println("substring(0, 5): \"" + s.substring(0, 5) + "\"");   // Hello
        System.out.println("substring(7, 12): \"" + s.substring(7, 12) + "\""); // World
        System.out.println("substring(7): \"" + s.substring(7) + "\"");         // World!
        System.out.println();
        
        // indexOf - find position
        System.out.println("=== indexOf(str) ===");
        System.out.println("indexOf(\"o\"): " + s.indexOf("o"));       // 4
        System.out.println("indexOf(\"World\"): " + s.indexOf("World")); // 7
        System.out.println("indexOf(\"xyz\"): " + s.indexOf("xyz"));   // -1 (not found)
        System.out.println();
        
        // equals and compareTo
        System.out.println("=== Comparison Methods ===");
        String s2 = "Hello, World!";
        String s3 = "hello, world!";
        System.out.println("s.equals(s2): " + s.equals(s2));                     // true
        System.out.println("s.equals(s3): " + s.equals(s3));                     // false
        System.out.println("s.equalsIgnoreCase(s3): " + s.equalsIgnoreCase(s3)); // true
        System.out.println("\"apple\".compareTo(\"banana\"): " + "apple".compareTo("banana")); // negative
        System.out.println("\"banana\".compareTo(\"apple\"): " + "banana".compareTo("apple")); // positive
        System.out.println();
        
        // Case conversion
        System.out.println("=== Case Conversion ===");
        System.out.println("toUpperCase(): \"" + s.toUpperCase() + "\"");
        System.out.println("toLowerCase(): \"" + s.toLowerCase() + "\"");
    }
}
expected_output::=
Original String: "Hello, World!"
Length: 13

=== charAt(index) ===
charAt(0): 'H'
charAt(7): 'W'
charAt(12): '!'

=== substring(start, end) ===
substring(0, 5): "Hello"
substring(7, 12): "World"
substring(7): "World!"

=== indexOf(str) ===
indexOf("o"): 4
indexOf("World"): 7
indexOf("xyz"): -1

=== Comparison Methods ===
s.equals(s2): true
s.equals(s3): false
s.equalsIgnoreCase(s3): true
"apple".compareTo("banana"): -1
"banana".compareTo("apple"): 1

=== Case Conversion ===
toUpperCase(): "HELLO, WORLD!"
toLowerCase(): "hello, world!"
:::/CODE:::

---

## ⚠️ String Comparison

### == vs. equals()

| Operator | Compares |
|----------|----------|
| `==` | References (memory location) |
| `equals()` | Content (actual characters) |

### Example

| Code | Result | Why |
|------|--------|-----|
| `"Hi" == "Hi"` | `true` | Same literal |
| `new String("Hi") == new String("Hi")` | `false` | Different objects |
| `new String("Hi").equals(new String("Hi"))` | `true` | Same content |

### Rule

| Always use | `equals()` for String content comparison |
|------------|------------------------------------------|
| **==** | Only for reference comparison |

:::CODE:::
id::=string-comparison-demo
title::=⚠️ == vs equals() - Critical Difference
language::=java
runnable::=true
code::=
// == vs equals() Demo
// This is the #1 source of bugs for new Java programmers!

public class ComparisonDemo {
    public static void main(String[] args) {
        // String literals - Java optimizes these
        String lit1 = "Hello";
        String lit2 = "Hello";
        
        System.out.println("=== String Literals (same memory) ===");
        System.out.println("lit1 == lit2: " + (lit1 == lit2));           // true (same object)
        System.out.println("lit1.equals(lit2): " + lit1.equals(lit2));   // true
        System.out.println();
        
        // String objects with new - always different memory
        String obj1 = new String("Hello");
        String obj2 = new String("Hello");
        
        System.out.println("=== new String() (different memory) ===");
        System.out.println("obj1 == obj2: " + (obj1 == obj2));           // false! Different objects
        System.out.println("obj1.equals(obj2): " + obj1.equals(obj2));   // true - same content
        System.out.println();
        
        // Comparing literal to object
        System.out.println("=== Literal vs Object ===");
        System.out.println("lit1 == obj1: " + (lit1 == obj1));           // false!
        System.out.println("lit1.equals(obj1): " + lit1.equals(obj1));   // true
        System.out.println();
        
        // User input simulation - always use equals()!
        String userInput = new String("password123");
        String correctPassword = "password123";
        
        System.out.println("=== Real World Example: Password Check ===");
        System.out.println("Using ==: " + (userInput == correctPassword));       // WRONG - false
        System.out.println("Using equals(): " + userInput.equals(correctPassword)); // CORRECT - true
        
        System.out.println();
        System.out.println("🚨 ALWAYS USE equals() FOR STRING COMPARISON! 🚨");
    }
}
expected_output::=
=== String Literals (same memory) ===
lit1 == lit2: true
lit1.equals(lit2): true

=== new String() (different memory) ===
obj1 == obj2: false
obj1.equals(obj2): true

=== Literal vs Object ===
lit1 == obj1: false
lit1.equals(obj1): true

=== Real World Example: Password Check ===
Using ==: false
Using equals(): true

🚨 ALWAYS USE equals() FOR STRING COMPARISON! 🚨
:::/CODE:::

---

## 🔢 Escape Sequences

### Common Escape Sequences

| Sequence | Character |
|----------|-----------|
| `\\` | Backslash |
| `\"` | Double quote |
| `\'` | Single quote |
| `\n` | Newline |
| `\t` | Tab |

### Examples

| Code | Output |
|------|--------|
| `"Hello\\nWorld"` | `Hello` (newline) `World` |
| `"She said \\"Hi\\""` | `She said "Hi"` |
| `"A\\tB"` | `A    B` (tab) |

---

## 📦 Wrapper Classes

### Primitive to Object

| Primitive | Wrapper Class |
|-----------|---------------|
| `int` | `Integer` |
| `double` | `Double` |
| `boolean` | `Boolean` |
| `char` | `Character` |

### Why Use Wrappers?

| Reason | Description |
|--------|-------------|
| **ArrayList** | Can't use primitives |
| **null value** | Primitives can't be null |
| **Methods** | Wrapper classes have methods |

### Autoboxing and Unboxing

| Term | Description | Example |
|------|-------------|---------|
| **Autoboxing** | Primitive → Object | `Integer x = 5;` |
| **Unboxing** | Object → Primitive | `int y = x;` |

### Integer Methods

| Method | Description | Example |
|--------|-------------|---------|
| `Integer.parseInt(s)` | String to int | `Integer.parseInt("123")` → `123` |
| `Integer.toString(n)` | int to String | `Integer.toString(123)` → `"123"` |
| `Integer.MAX_VALUE` | Largest int | `2147483647` |
| `Integer.MIN_VALUE` | Smallest int | `-2147483648` |

### Double Methods

| Method | Description | Example |
|--------|-------------|---------|
| `Double.parseDouble(s)` | String to double | `Double.parseDouble("3.14")` → `3.14` |
| `Double.toString(d)` | double to String | `Double.toString(3.14)` → `"3.14"` |

---

## 🧮 Math Class

### Math Class Methods

| Method | Description | Example |
|--------|-------------|---------|
| `Math.abs(x)` | Absolute value | `Math.abs(-5)` → `5` |
| `Math.pow(a, b)` | a to power b | `Math.pow(2, 3)` → `8.0` |
| `Math.sqrt(x)` | Square root | `Math.sqrt(25)` → `5.0` |
| `Math.random()` | Random [0, 1) | `Math.random()` → `0.xxxxx` |

### Random Numbers

| Range | Formula |
|-------|---------|
| `[0, 1)` | `Math.random()` |
| `[0, n)` | `Math.random() * n` |
| `[0, n-1]` (int) | `(int)(Math.random() * n)` |
| `[a, b]` (int) | `(int)(Math.random() * (b - a + 1)) + a` |

### Random Examples

| Goal | Code |
|------|------|
| 0 to 9 | `(int)(Math.random() * 10)` |
| 1 to 6 (die) | `(int)(Math.random() * 6) + 1` |
| 10 to 20 | `(int)(Math.random() * 11) + 10` |

:::CODE:::
id::=math-random-demo
title::=🎲 Random Numbers - Interactive Simulator
language::=java
runnable::=true
code::=
// Math.random() Demo
// Run multiple times to see different random values!

public class RandomDemo {
    public static void main(String[] args) {
        System.out.println("=== Basic Math.random() ===");
        System.out.println("Math.random(): " + Math.random());
        System.out.println("Math.random(): " + Math.random());
        System.out.println("Math.random(): " + Math.random());
        System.out.println();
        
        System.out.println("=== Random Integer Formulas ===");
        System.out.println();
        
        // 0 to 9 (10 possible values)
        System.out.println("Random 0-9: (int)(Math.random() * 10)");
        for (int i = 0; i < 5; i++) {
            System.out.print((int)(Math.random() * 10) + " ");
        }
        System.out.println();
        System.out.println();
        
        // 1 to 6 (dice roll)
        System.out.println("Dice Roll 1-6: (int)(Math.random() * 6) + 1");
        for (int i = 0; i < 5; i++) {
            System.out.print((int)(Math.random() * 6) + 1 + " ");
        }
        System.out.println();
        System.out.println();
        
        // 10 to 20
        System.out.println("Random 10-20: (int)(Math.random() * 11) + 10");
        for (int i = 0; i < 5; i++) {
            System.out.print((int)(Math.random() * 11) + 10 + " ");
        }
        System.out.println();
        System.out.println();
        
        // General formula
        System.out.println("=== General Formula ===");
        System.out.println("Range [min, max]: (int)(Math.random() * (max - min + 1)) + min");
        System.out.println();
        
        // Example: random between 50 and 100
        int min = 50, max = 100;
        System.out.println("Random " + min + "-" + max + ":");
        for (int i = 0; i < 5; i++) {
            int random = (int)(Math.random() * (max - min + 1)) + min;
            System.out.print(random + " ");
        }
        System.out.println();
    }
}
expected_output::=
=== Basic Math.random() ===
Math.random(): 0.xxxxx (varies)
Math.random(): 0.xxxxx (varies)
Math.random(): 0.xxxxx (varies)

=== Random Integer Formulas ===

Random 0-9: (int)(Math.random() * 10)
[5 random digits 0-9]

Dice Roll 1-6: (int)(Math.random() * 6) + 1
[5 random numbers 1-6]

Random 10-20: (int)(Math.random() * 11) + 10
[5 random numbers 10-20]

=== General Formula ===
Range [min, max]: (int)(Math.random() * (max - min + 1)) + min

Random 50-100:
[5 random numbers 50-100]
:::/CODE:::

---

## 📊 Static vs. Instance

### Comparison

| Type | Belongs To | Call Syntax |
|------|------------|-------------|
| **Static** | Class itself | `ClassName.method()` |
| **Instance** | Object | `objectName.method()` |

### Examples

| Type | Example |
|------|---------|
| **Static** | `Math.sqrt(25)`, `Integer.parseInt("5")` |
| **Instance** | `s.length()`, `s.substring(0, 3)` |

---

## 🎭 Null References

### Null

| Concept | Description |
|---------|-------------|
| `null` | No object assigned |
| **Error** | NullPointerException if used |

### Example

| Code | Result |
|------|--------|
| `String s = null;` | s has no object |
| `s.length()` | NullPointerException |
| `if (s != null)` | Check before use |

---

## 📐 String Processing Patterns

### Character by Character

```java
String s = "Hello";
for (int i = 0; i < s.length(); i++) {
    char c = s.charAt(i);
    // process c
}
```

### Count Characters

```java
int count = 0;
for (int i = 0; i < s.length(); i++) {
    if (s.charAt(i) == 'a') {
        count++;
    }
}
```

### Build New String

```java
String result = "";
for (int i = 0; i < s.length(); i++) {
    char c = s.charAt(i);
    result += Character.toUpperCase(c);
}
```

:::CODE:::
id::=string-processing-patterns
title::=📐 String Processing Patterns - Practice Problems
language::=java
runnable::=true
code::=
// Common String Processing Patterns for AP CSA
// These patterns appear frequently on the exam!

public class StringPatterns {
    public static void main(String[] args) {
        String s = "Hello World";
        
        // Pattern 1: Character by Character Processing
        System.out.println("=== Pattern 1: Process Each Character ===");
        System.out.println("String: \"" + s + "\"");
        System.out.print("Characters: ");
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            System.out.print("[" + c + "] ");
        }
        System.out.println("\n");
        
        // Pattern 2: Count Specific Characters
        System.out.println("=== Pattern 2: Count Characters ===");
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'l') {
                count++;
            }
        }
        System.out.println("Number of 'l' characters: " + count);
        System.out.println();
        
        // Pattern 3: Count Vowels
        System.out.println("=== Pattern 3: Count Vowels ===");
        int vowels = 0;
        String lower = s.toLowerCase();
        for (int i = 0; i < lower.length(); i++) {
            char c = lower.charAt(i);
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                vowels++;
            }
        }
        System.out.println("Number of vowels: " + vowels);
        System.out.println();
        
        // Pattern 4: Build New String
        System.out.println("=== Pattern 4: Build New String ===");
        String result = "";
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c != ' ') {  // Skip spaces
                result += c;
            }
        }
        System.out.println("Without spaces: \"" + result + "\"");
        System.out.println();
        
        // Pattern 5: Reverse a String
        System.out.println("=== Pattern 5: Reverse String ===");
        String reversed = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            reversed += s.charAt(i);
        }
        System.out.println("Reversed: \"" + reversed + "\"");
        System.out.println();
        
        // Pattern 6: Find and Replace
        System.out.println("=== Pattern 6: Replace Characters ===");
        String replaced = "";
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == 'o') {
                replaced += '0';  // Replace o with 0
            } else {
                replaced += c;
            }
        }
        System.out.println("o → 0: \"" + replaced + "\"");
    }
}
expected_output::=
=== Pattern 1: Process Each Character ===
String: "Hello World"
Characters: [H] [e] [l] [l] [o] [ ] [W] [o] [r] [l] [d] 

=== Pattern 2: Count Characters ===
Number of 'l' characters: 3

=== Pattern 3: Count Vowels ===
Number of vowels: 3

=== Pattern 4: Build New String ===
Without spaces: "HelloWorld"

=== Pattern 5: Reverse String ===
Reversed: "dlroW olleH"

=== Pattern 6: Replace Characters ===
o → 0: "Hell0 W0rld"
:::/CODE:::

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Object** | Instance of a class |
| **Class** | Template for objects |
| **Constructor** | Creates new object |
| **Method** | Behavior of object |
| **Instance method** | Called on object |
| **Static method** | Called on class |
| **Immutable** | Cannot be changed |
| **String** | Immutable text object |
| **Wrapper class** | Object version of primitive |
| **Autoboxing** | Primitive to wrapper |
| **Unboxing** | Wrapper to primitive |
| **null** | No object reference |

:::CODE:::
id::=wrapper-class-demo
title::=📦 Wrapper Classes and Autoboxing
language::=java
runnable::=true
code::=
// Wrapper Classes Demo
// Understanding Integer, Double, and autoboxing/unboxing

public class WrapperDemo {
    public static void main(String[] args) {
        System.out.println("=== Autoboxing (primitive → object) ===");
        
        // Autoboxing - automatic conversion
        Integer num1 = 42;  // int → Integer automatically
        Double num2 = 3.14; // double → Double automatically
        
        System.out.println("Integer num1 = 42; → " + num1);
        System.out.println("Double num2 = 3.14; → " + num2);
        System.out.println();
        
        System.out.println("=== Unboxing (object → primitive) ===");
        
        // Unboxing - automatic conversion back
        int primitiveInt = num1;     // Integer → int automatically
        double primitiveDouble = num2; // Double → double automatically
        
        System.out.println("int primitiveInt = num1; → " + primitiveInt);
        System.out.println("double primitiveDouble = num2; → " + primitiveDouble);
        System.out.println();
        
        System.out.println("=== Parsing Strings ===");
        
        // String to primitive
        String numberStr = "123";
        int parsed = Integer.parseInt(numberStr);
        System.out.println("Integer.parseInt(\"123\"): " + parsed);
        
        String decimalStr = "3.14159";
        double parsedDouble = Double.parseDouble(decimalStr);
        System.out.println("Double.parseDouble(\"3.14159\"): " + parsedDouble);
        System.out.println();
        
        System.out.println("=== Integer Constants ===");
        System.out.println("Integer.MAX_VALUE: " + Integer.MAX_VALUE);
        System.out.println("Integer.MIN_VALUE: " + Integer.MIN_VALUE);
        System.out.println();
        
        System.out.println("=== Converting to String ===");
        int value = 42;
        String str1 = Integer.toString(value);
        String str2 = "" + value;  // Concatenation trick
        System.out.println("Integer.toString(42): \"" + str1 + "\"");
        System.out.println("\"\" + 42: \"" + str2 + "\"");
    }
}
expected_output::=
=== Autoboxing (primitive → object) ===
Integer num1 = 42; → 42
Double num2 = 3.14; → 3.14

=== Unboxing (object → primitive) ===
int primitiveInt = num1; → 42
double primitiveDouble = num2; → 3.14

=== Parsing Strings ===
Integer.parseInt("123"): 123
Double.parseDouble("3.14159"): 3.14159

=== Integer Constants ===
Integer.MAX_VALUE: 2147483647
Integer.MIN_VALUE: -2147483648

=== Converting to String ===
Integer.toString(42): "42"
"" + 42: "42"
:::/CODE:::

---

## 🎯 AP Exam Strategies

### Common Question Types

| Type | Focus |
|------|-------|
| **String methods** | substring, indexOf, charAt |
| **String comparison** | equals vs. == |
| **Random numbers** | Range formulas |
| **Method calls** | Return values |

### Key Things to Remember

| Topic | Remember |
|-------|----------|
| **substring(a, b)** | a inclusive, b exclusive |
| **indexOf** | Returns -1 if not found |
| **String compare** | Use equals(), not == |
| **Math.random()** | Returns [0, 1) |

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Using == for Strings | Use equals() |
| Off-by-one in substring | End is exclusive |
| Modifying String | Strings are immutable |
| Wrong random formula | Remember the pattern |

### FRQ Tips

| Tip | Explanation |
|-----|-------------|
| **Trace carefully** | Track String indices |
| **Check bounds** | Don't go past length() - 1 |
| **Remember immutability** | Must reassign result |

---

**Good luck on your AP Computer Science A exam! 🍀💻🎯**

Remember: Strings are immutable - methods return new Strings! Always use equals() to compare String content, and remember that substring's end index is exclusive. For random numbers, use the formula: (int)(Math.random() * range) + min!
