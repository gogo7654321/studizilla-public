# AP Computer Science A Unit 4 Study Guide

:::GUIDE:::
unit::=Unit 4
title::=💻 Unit 4: Iteration Complete Guide
desc::=Master while loops, for loops, nested loops, and loop algorithms in Java with interactive examples
diff::=Medium
time::=60 minutes
tags::=computer science, java, loops, iteration, while, for, interactive
content::=

# 💻 Unit 4: Iteration

## 📋 Unit Overview

Loops let code repeat! This unit covers while loops, for loops, nested loops, and common algorithms. Mastering iteration is crucial for problem-solving! 🔁

### Essential Questions

| Question | Focus |
|----------|-------|
| What are loops? | Repeating code |
| When to use while vs. for? | Loop types |
| How do nested loops work? | Loops within loops |
| What are common algorithms? | Search, accumulate, etc. |
| How to avoid infinite loops? | Proper termination |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **while loop** | Loop while condition true |
| **for loop** | Loop with counter |
| **Nested loop** | Loop inside loop |
| **Loop variable** | Controls iterations |
| **Infinite loop** | Never terminates |

:::TIMELINE:::
id::=iteration-history
title::=📅 History of Looping Constructs in Programming
events::=[
  {"year": "1945", "event": "First loop in von Neumann architecture", "detail": "Stored-program computers enable branching and repetition"},
  {"year": "1957", "event": "FORTRAN introduces DO loops", "detail": "First high-level language with structured loops"},
  {"year": "1960", "event": "ALGOL introduces while loops", "detail": "Algol 60 defines structured programming patterns still used today"},
  {"year": "1972", "event": "C language standardizes for/while", "detail": "Dennis Ritchie creates C; loop syntax influences Java, JavaScript, C++, C#"},
  {"year": "1995", "event": "Java adopts C-style loops", "detail": "Java uses familiar for/while/do-while syntax from C"},
  {"year": "2004", "event": "Java 5 adds enhanced for-each loop", "detail": "for(Type item : collection) syntax simplifies iteration"},
  {"year": "2014", "event": "Java 8 adds Stream API", "detail": "Functional-style iteration with forEach, map, filter, reduce"}
]
:::/TIMELINE:::

---

## 🔄 while Loops

### while Loop Syntax

```java
while (condition) {
    // Loop body
    // Update condition
}
```

| Component | Purpose |
|-----------|---------|
| **condition** | Boolean expression |
| **body** | Code to repeat |
| **update** | Move toward termination |

### while Loop Example

```java
int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}
```

| Iteration | i | Output |
|-----------|---|--------|
| 1 | 1 | 1 |
| 2 | 2 | 2 |
| 3 | 3 | 3 |
| 4 | 4 | 4 |
| 5 | 5 | 5 |
| 6 | 6 | Stop (condition false) |

:::CODE:::
id::=while-loop-demo
title::=🔄 while Loop - Interactive Demo
language::=java
runnable::=true
code::=
// while Loop Demo
// Watch how the loop variable changes!

public class WhileDemo {
    public static void main(String[] args) {
        System.out.println("=== Basic while Loop ===");
        int i = 1;
        while (i <= 5) {
            System.out.println("Iteration " + i + ": i = " + i);
            i++;
        }
        System.out.println("Loop ended. Final i = " + i);
        System.out.println();
        
        System.out.println("=== Countdown while Loop ===");
        int countdown = 10;
        while (countdown > 0) {
            System.out.print(countdown + "... ");
            countdown--;
        }
        System.out.println("LIFTOFF! 🚀");
        System.out.println();
        
        System.out.println("=== while with Condition Check ===");
        int sum = 0;
        int num = 1;
        while (sum < 20) {
            sum += num;
            System.out.println("Added " + num + ", sum is now " + sum);
            num++;
        }
        System.out.println("Stopped when sum >= 20");
        System.out.println();
        
        System.out.println("=== Sentinel Value Loop ===");
        int[] data = {5, 3, 8, 2, -1};  // -1 is sentinel
        int index = 0;
        while (data[index] != -1) {
            System.out.println("Processing: " + data[index]);
            index++;
        }
        System.out.println("Found sentinel -1, stopping.");
    }
}
expected_output::=
=== Basic while Loop ===
Iteration 1: i = 1
Iteration 2: i = 2
Iteration 3: i = 3
Iteration 4: i = 4
Iteration 5: i = 5
Loop ended. Final i = 6

=== Countdown while Loop ===
10... 9... 8... 7... 6... 5... 4... 3... 2... 1... LIFTOFF! 🚀

=== while with Condition Check ===
Added 1, sum is now 1
Added 2, sum is now 3
Added 3, sum is now 6
Added 4, sum is now 10
Added 5, sum is now 15
Added 6, sum is now 21
Stopped when sum >= 20

=== Sentinel Value Loop ===
Processing: 5
Processing: 3
Processing: 8
Processing: 2
Found sentinel -1, stopping.
:::/CODE:::

---

## 🔢 for Loops

### for Loop Syntax

```java
for (initialization; condition; update) {
    // Loop body
}
```

| Component | Purpose |
|-----------|---------|
| **initialization** | Start (once) |
| **condition** | Continue if true |
| **update** | After each iteration |

### for Loop Example

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

| Part | Code | Meaning |
|------|------|---------|
| **Init** | `int i = 1` | Start at 1 |
| **Condition** | `i <= 5` | Continue while ≤ 5 |
| **Update** | `i++` | Increment by 1 |

### Equivalent while Loop

```java
int i = 1;           // initialization
while (i <= 5) {     // condition
    System.out.println(i);
    i++;             // update
}
```

---

## 🎯 Common Loop Patterns

### Count Up

```java
for (int i = 0; i < n; i++) {
    // 0, 1, 2, ..., n-1
}
```

### Count Down

```java
for (int i = n; i > 0; i--) {
    // n, n-1, ..., 1
}
```

### Count by 2

```java
for (int i = 0; i < n; i += 2) {
    // 0, 2, 4, ..., n-2
}
```

### Loop Through String

```java
for (int i = 0; i < s.length(); i++) {
    char c = s.charAt(i);
    // Process character
}
```

---

## 📊 Accumulator Pattern

:::CODE:::
id::=loop-patterns-demo
title::=🎯 Common Loop Patterns - Interactive Examples
language::=java
runnable::=true
code::=
// Common Loop Patterns for AP CSA
// Master these patterns - they appear on every exam!

public class LoopPatterns {
    public static void main(String[] args) {
        int n = 5;
        
        System.out.println("=== Count Up (0 to n-1) ===");
        for (int i = 0; i < n; i++) {
            System.out.print(i + " ");
        }
        System.out.println("\n");
        
        System.out.println("=== Count Up (1 to n) ===");
        for (int i = 1; i <= n; i++) {
            System.out.print(i + " ");
        }
        System.out.println("\n");
        
        System.out.println("=== Count Down ===");
        for (int i = n; i > 0; i--) {
            System.out.print(i + " ");
        }
        System.out.println("\n");
        
        System.out.println("=== Count by 2 (evens) ===");
        for (int i = 0; i <= 10; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println("\n");
        
        System.out.println("=== Count by 2 (odds) ===");
        for (int i = 1; i <= 10; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println("\n");
        
        System.out.println("=== Loop Through String ===");
        String s = "Hello";
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            System.out.println("Index " + i + ": '" + c + "'");
        }
        System.out.println();
        
        System.out.println("=== Accumulator: Sum ===");
        int sum = 0;
        for (int i = 1; i <= 5; i++) {
            sum += i;
            System.out.println("After adding " + i + ": sum = " + sum);
        }
        System.out.println("Final sum: " + sum);
        System.out.println();
        
        System.out.println("=== Accumulator: Product (Factorial) ===");
        int factorial = 1;
        int num = 5;
        for (int i = 1; i <= num; i++) {
            factorial *= i;
            System.out.println(i + "! = " + factorial);
        }
        System.out.println("5! = " + factorial);
    }
}
expected_output::=
=== Count Up (0 to n-1) ===
0 1 2 3 4 

=== Count Up (1 to n) ===
1 2 3 4 5 

=== Count Down ===
5 4 3 2 1 

=== Count by 2 (evens) ===
0 2 4 6 8 10 

=== Count by 2 (odds) ===
1 3 5 7 9 

=== Loop Through String ===
Index 0: 'H'
Index 1: 'e'
Index 2: 'l'
Index 3: 'l'
Index 4: 'o'

=== Accumulator: Sum ===
After adding 1: sum = 1
After adding 2: sum = 3
After adding 3: sum = 6
After adding 4: sum = 10
After adding 5: sum = 15
Final sum: 15

=== Accumulator: Product (Factorial) ===
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
5! = 120
:::/CODE:::

### Sum Values

```java
int sum = 0;
for (int i = 1; i <= n; i++) {
    sum += i;
}
// sum = 1 + 2 + ... + n
```

### Count Items

```java
int count = 0;
for (int i = 0; i < s.length(); i++) {
    if (s.charAt(i) == 'a') {
        count++;
    }
}
```

### Build String

```java
String result = "";
for (int i = 0; i < s.length(); i++) {
    result += s.charAt(i) + " ";
}
```

---

## 🔍 Search Algorithms

### Linear Search

```java
boolean found = false;
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        found = true;
        break;
    }
}
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

## 🧮 Math Algorithms

### Factorial

```java
int factorial = 1;
for (int i = 1; i <= n; i++) {
    factorial *= i;
}
// factorial = n!
```

### Power (x^n)

```java
int result = 1;
for (int i = 0; i < n; i++) {
    result *= x;
}
```

### Sum of Digits

```java
int sum = 0;
while (n > 0) {
    sum += n % 10;  // Add last digit
    n /= 10;        // Remove last digit
}
```

### Reverse Number

```java
int reversed = 0;
while (n > 0) {
    reversed = reversed * 10 + n % 10;
    n /= 10;
}
```

---

## 🏗️ Nested Loops

### Definition

| Concept | Description |
|---------|-------------|
| **Nested loop** | Loop inside another loop |
| **Outer loop** | Controls outer iterations |
| **Inner loop** | Runs completely for each outer |

### Rectangle Pattern

```java
for (int row = 0; row < 3; row++) {
    for (int col = 0; col < 5; col++) {
        System.out.print("*");
    }
    System.out.println();
}
```

| Output |
|--------|
| ***** |
| ***** |
| ***** |

### Triangle Pattern

```java
for (int row = 1; row <= 5; row++) {
    for (int col = 1; col <= row; col++) {
        System.out.print("*");
    }
    System.out.println();
}
```

| Output |
|--------|
| * |
| ** |
| *** |
| **** |
| ***** |

### Multiplication Table

```java
for (int i = 1; i <= 10; i++) {
    for (int j = 1; j <= 10; j++) {
        System.out.print(i * j + "\t");
    }
    System.out.println();
}
```

---

## 🎯 Loop Control Statements

### break

| Statement | Effect |
|-----------|--------|
| `break` | Exit loop immediately |

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;  // Exit when i is 5
    }
}
```

### continue

| Statement | Effect |
|-----------|--------|
| `continue` | Skip to next iteration |

```java
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;  // Skip even numbers
    }
    System.out.println(i);  // Only odd numbers
}
```

---

## ⚠️ Infinite Loops

### Common Causes

| Cause | Example |
|-------|---------|
| **Condition always true** | `while (true)` |
| **No update** | Forget `i++` |
| **Wrong operator** | `i < 10` instead of `i <= 10` |

### Examples

| Infinite Loop | Fix |
|---------------|-----|
| `while (x > 0) { x--; }` when x negative | Check `x > 0` before loop |
| `for (int i = 0; i < 10; i--)` | Change to `i++` |

---

## 🔄 while vs. for

### When to Use

| Loop Type | Best For |
|-----------|----------|
| **for** | Known number of iterations |
| **while** | Unknown number of iterations |
| **for** | Counter-based loops |
| **while** | Condition-based loops |

### Examples

| Scenario | Loop |
|----------|------|
| Repeat n times | for |
| Until user enters "quit" | while |
| Loop through array | for |
| Until condition met | while |

---

## 📐 Off-by-One Errors

### Common Mistakes

| Error | Fix |
|-------|-----|
| `i <= arr.length` | `i < arr.length` |
| `i = 1; i < arr.length` | `i = 0` |
| `i <= s.length()` | `i < s.length()` |

### Fence Post Problem

| Posts | Sections |
|-------|----------|
| 4 posts | 3 sections |
| n posts | n-1 sections |

```java
// Print n numbers with n-1 commas
for (int i = 0; i < n; i++) {
    System.out.print(i);
    if (i < n - 1) {
        System.out.print(", ");
    }
}
```

---

## 🧪 Loop Tracing

### Example

```java
int sum = 0;
for (int i = 1; i <= 4; i++) {
    sum += i;
}
```

| Iteration | i | sum Before | sum After |
|-----------|---|------------|-----------|
| 1 | 1 | 0 | 1 |
| 2 | 2 | 1 | 3 |
| 3 | 3 | 3 | 6 |
| 4 | 4 | 6 | 10 |
| End | 5 | 10 | 10 |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Iteration** | Repetition of code |
| **Loop** | Control structure for repetition |
| **while loop** | Loop based on condition |
| **for loop** | Loop with counter |
| **Loop variable** | Controls iterations |
| **Nested loop** | Loop inside loop |
| **Infinite loop** | Loop that never ends |
| **break** | Exit loop early |
| **continue** | Skip to next iteration |
| **Accumulator** | Variable that accumulates values |
| **Off-by-one error** | Loop runs one too many/few times |

---

## 🎯 AP Exam Strategies

### Common Question Types

| Type | Focus |
|------|-------|
| **Trace loops** | Follow iterations |
| **Count iterations** | How many times? |
| **Fix errors** | Off-by-one, infinite |
| **Write algorithms** | Sum, count, search |

### Key Things to Remember

| Topic | Remember |
|-------|----------|
| **Array bounds** | 0 to length-1 |
| **String bounds** | 0 to length()-1 |
| **Loop update** | Must move toward termination |
| **Nested loops** | Inner completes for each outer |

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| `i <= arr.length` | `i < arr.length` |
| Forget to update | Add i++ |
| Wrong loop type | Match to problem |
| Off by one | Check boundaries |

### FRQ Tips

| Tip | Explanation |
|-----|-------------|
| **Trace carefully** | Write out values |
| **Check bounds** | 0-based indexing |
| **Test edge cases** | Empty, single item |
| **Count iterations** | Verify loop runs correctly |

---

## 🧩 Practice Problems

### Problem 1: Sum Even Numbers

```java
int sum = 0;
for (int i = 0; i <= n; i += 2) {
    sum += i;
}
```

### Problem 2: Count Vowels

```java
int count = 0;
String vowels = "aeiouAEIOU";
for (int i = 0; i < s.length(); i++) {
    if (vowels.indexOf(s.charAt(i)) != -1) {
        count++;
    }
}
```

### Problem 3: Prime Check

```java
boolean isPrime = true;
for (int i = 2; i < n; i++) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}
```

### Problem 4: Right Triangle

```java
for (int row = 1; row <= 5; row++) {
    for (int space = 5; space > row; space--) {
        System.out.print(" ");
    }
    for (int star = 1; star <= row; star++) {
        System.out.print("*");
    }
    System.out.println();
}
```

| Output |
|--------|
| ____* |
| ___** |
| __*** |
| _**** |
| ***** |

---

**Good luck on your AP Computer Science A exam! 🍀💻🔁**

Remember: Array indices go from 0 to length-1, String indices from 0 to length()-1. Always check loop bounds carefully to avoid off-by-one errors! For nested loops, the inner loop completes fully for each iteration of the outer loop.
