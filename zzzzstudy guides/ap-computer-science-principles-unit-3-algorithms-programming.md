# AP Computer Science Principles Unit 3 Study Guide

:::GUIDE:::
unit::=Unit 3
title::=🖥️ Unit 3: Algorithms and Programming Complete Guide
desc::=Master algorithms, sequencing, selection, iteration, procedures, parameters, and problem decomposition with interactive examples
diff::=Hard
time::=70 minutes
tags::=computer science principles, algorithms, programming, procedures, iteration, interactive
content::=

# 🖥️ Unit 3: Algorithms and Programming

## 📋 Unit Overview

Algorithms are the heart of programming! This unit covers algorithm design, programming constructs (sequencing, selection, iteration), procedures, and problem decomposition. Essential coding concepts! 🧠

### Essential Questions

| Question | Focus |
|----------|-------|
| What is an algorithm? | Step-by-step procedure |
| What are programming constructs? | Sequence, selection, iteration |
| What are procedures? | Reusable code |
| How to decompose problems? | Breaking into parts |
| What are lists? | Ordered collections |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Algorithm** | Instructions to solve problem |
| **Sequencing** | Steps in order |
| **Selection** | IF statements |
| **Iteration** | Loops |
| **Procedure** | Named block of code |
| **Parameter** | Input to procedure |

:::TIMELINE:::
id::=algorithms-programming-history
title::=📅 History of Algorithms and Programming
events::=[
  {"year": "~300 BCE", "event": "Euclid's Algorithm", "detail": "First documented algorithm: finds greatest common divisor; still used today"},
  {"year": "1843", "event": "Ada Lovelace writes first program", "detail": "Algorithm for Babbage's Analytical Engine; considered first computer program"},
  {"year": "1936", "event": "Turing Machine conceived", "detail": "Alan Turing defines computable functions; foundation of theoretical CS"},
  {"year": "1945", "event": "First stored-program computers", "detail": "ENIAC, Colossus; algorithms become executable programs"},
  {"year": "1957", "event": "FORTRAN released", "detail": "First high-level programming language; makes algorithms accessible"},
  {"year": "1960", "event": "Structured programming emerges", "detail": "Sequence, selection, iteration formalized as fundamental constructs"},
  {"year": "1962", "event": "QuickSort published", "detail": "Tony Hoare creates efficient sorting algorithm; O(n log n) average"},
  {"year": "1971", "event": "NP-completeness discovered", "detail": "Cook-Levin theorem; some problems have no known efficient algorithms"},
  {"year": "1972", "event": "C language created", "detail": "Dennis Ritchie; procedures and modular programming become standard"},
  {"year": "1995", "event": "JavaScript released", "detail": "Web programming brings algorithms to browsers; interactive computing"},
  {"year": "2005", "event": "AP CS Principles conceived", "detail": "NSF project to broaden CS education; algorithm thinking for all"},
  {"year": "2016", "event": "First AP CSP exam", "detail": "Algorithms and programming become accessible to all students"}
]
:::/TIMELINE:::

---

## 🧠 Algorithms

### Definition

| Algorithm | Step-by-step procedure to solve problem |
|-----------|----------------------------------------|

### Properties of Good Algorithms

| Property | Description |
|----------|-------------|
| **Correctness** | Produces correct result |
| **Efficiency** | Uses resources wisely |
| **Clarity** | Easy to understand |
| **Finiteness** | Terminates eventually |

### Example: Finding Maximum

```
PROCEDURE FindMax(list)
    max ← list[1]
    FOR EACH item IN list
        IF item > max
            max ← item
    RETURN max
```

---

## 🔄 Programming Constructs

### Sequencing

| Definition | Execute statements in order |
|------------|----------------------------|

```
Step 1
Step 2
Step 3
```

### Selection (IF)

| Definition | Choose between alternatives |
|------------|----------------------------|

```
IF condition
    Statement A
ELSE
    Statement B
```

### Iteration (Loops)

| Definition | Repeat statements |
|------------|------------------|

#### REPEAT n TIMES

```
REPEAT 5 TIMES
    Statement
```

#### REPEAT UNTIL

```
REPEAT UNTIL condition
    Statement
```

#### FOR EACH

```
FOR EACH item IN list
    Statement
```

:::CODE:::
id::=csp-constructs-demo
title::=🔧 Programming Constructs in Python (AP CSP Pseudocode Style)
language::=python
runnable::=true
code::=
# Programming Constructs Demo (Python equivalent of AP CSP pseudocode)
# Run this to see sequencing, selection, and iteration in action!

print("=" * 50)
print("SEQUENCING - Statements execute in order")
print("=" * 50)

# Sequencing: Steps happen in order
step1 = "First"
step2 = "Second"  
step3 = "Third"
print(f"Step 1: {step1}")
print(f"Step 2: {step2}")
print(f"Step 3: {step3}")

print("\n" + "=" * 50)
print("SELECTION - IF statements choose between paths")
print("=" * 50)

# Selection: IF-ELSE
temperature = 75

if temperature > 80:
    print(f"Temperature {temperature}°F: It's HOT! 🥵")
elif temperature > 60:
    print(f"Temperature {temperature}°F: It's nice! 😊")
else:
    print(f"Temperature {temperature}°F: It's cold! 🥶")

# Multiple conditions
age = 16
has_permit = True

if age >= 16 and has_permit:
    print("Can drive with adult supervision ✓")
elif age >= 18:
    print("Can drive alone ✓")
else:
    print("Cannot drive yet ✗")

print("\n" + "=" * 50)
print("ITERATION - Loops repeat statements")
print("=" * 50)

# REPEAT n TIMES (for loop with range)
print("\nREPEAT 5 TIMES:")
for i in range(5):
    print(f"  Iteration {i + 1}")

# FOR EACH item IN list
print("\nFOR EACH item IN list:")
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"  Processing: {fruit}")

# REPEAT UNTIL (while loop)
print("\nREPEAT UNTIL count > 5:")
count = 1
while count <= 5:
    print(f"  Count is {count}")
    count = count + 1

print("\n" + "=" * 50)
print("COMBINING CONSTRUCTS")
print("=" * 50)

# Find max in list
numbers = [34, 67, 23, 89, 12, 56]
print(f"\nList: {numbers}")

max_value = numbers[0]
for num in numbers:
    if num > max_value:
        max_value = num
        print(f"  New max found: {max_value}")

print(f"Maximum value: {max_value}")
expected_output::=
==================================================
SEQUENCING - Statements execute in order
==================================================
Step 1: First
Step 2: Second
Step 3: Third

==================================================
SELECTION - IF statements choose between paths
==================================================
Temperature 75°F: It's nice! 😊
Can drive with adult supervision ✓

==================================================
ITERATION - Loops repeat statements
==================================================

REPEAT 5 TIMES:
  Iteration 1
  Iteration 2
  Iteration 3
  Iteration 4
  Iteration 5

FOR EACH item IN list:
  Processing: apple
  Processing: banana
  Processing: cherry

REPEAT UNTIL count > 5:
  Count is 1
  Count is 2
  Count is 3
  Count is 4
  Count is 5

==================================================
COMBINING CONSTRUCTS
==================================================

List: [34, 67, 23, 89, 12, 56]
  New max found: 67
  New max found: 89
Maximum value: 89
:::/CODE:::

---

## 📦 Procedures

### Definition

| Procedure | Named block of code |
|-----------|---------------------|

### Why Use Procedures?

| Benefit | Description |
|---------|-------------|
| **Reuse** | Call multiple times |
| **Organization** | Break into parts |
| **Abstraction** | Hide details |
| **Maintenance** | Fix in one place |

### Syntax

```
PROCEDURE name(parameters)
    Statements
    RETURN value
```

### Example

```
PROCEDURE Square(x)
    RETURN x * x

result ← Square(5)  // result = 25
```

---

## 🎯 Parameters and Return

### Parameters

| Definition | Inputs to procedure |
|------------|---------------------|

```
PROCEDURE Add(a, b)
    RETURN a + b

sum ← Add(3, 5)  // sum = 8
```

### Return Values

| Definition | Output from procedure |
|------------|---------------------|

```
PROCEDURE IsEven(n)
    RETURN n MOD 2 = 0

result ← IsEven(4)  // result = true
```

---

## 📊 Lists

### Definition

| List | Ordered collection of elements |
|------|-------------------------------|

### Indexing

| Convention | AP CSP uses 1-based indexing |
|------------|------------------------------|

```
list ← [10, 20, 30, 40]
```

| Index | 1 | 2 | 3 | 4 |
|-------|---|---|---|---|
| **Value** | 10 | 20 | 30 | 40 |

### List Operations

| Operation | Syntax | Result |
|-----------|--------|--------|
| **Access** | `list[i]` | Element at index i |
| **Assign** | `list[i] ← value` | Change element |
| **Insert** | `INSERT(list, i, value)` | Add at index |
| **Append** | `APPEND(list, value)` | Add to end |
| **Remove** | `REMOVE(list, i)` | Delete at index |
| **Length** | `LENGTH(list)` | Number of elements |

---

## 🔁 Traversing Lists

### FOR EACH Loop

```
FOR EACH item IN list
    DISPLAY(item)
```

### Index-Based Loop

```
FOR i FROM 1 TO LENGTH(list)
    DISPLAY(list[i])
```

### Example: Sum List

```
PROCEDURE SumList(list)
    sum ← 0
    FOR EACH value IN list
        sum ← sum + value
    RETURN sum
```

---

## 🔍 Searching Algorithms

### Linear Search

```
PROCEDURE LinearSearch(list, target)
    FOR EACH item IN list
        IF item = target
            RETURN true
    RETURN false
```

| Time | Check each element |
|------|-------------------|

### Binary Search

```
PROCEDURE BinarySearch(list, target)
    low ← 1
    high ← LENGTH(list)
    REPEAT UNTIL low > high
        mid ← (low + high) / 2
        IF list[mid] = target
            RETURN true
        ELSE IF list[mid] < target
            low ← mid + 1
        ELSE
            high ← mid - 1
    RETURN false
```

| Requirement | List must be sorted |
|-------------|---------------------|

---

## 🔄 Problem Decomposition

### Definition

| Decomposition | Breaking problem into smaller parts |
|---------------|-------------------------------------|

### Benefits

| Benefit | Description |
|---------|-------------|
| **Manageable** | Easier to solve |
| **Reusable** | Use parts elsewhere |
| **Collaboration** | Divide work |
| **Testing** | Test parts separately |

### Example: Drawing Program

| Part | Procedure |
|------|-----------|
| Draw circle | `DrawCircle(x, y, radius)` |
| Draw square | `DrawSquare(x, y, size)` |
| Draw face | Calls circle and square |

---

## 🎨 Abstraction

### Definition

| Abstraction | Hide complexity, show essentials |
|-------------|----------------------------------|

### Levels

| Level | Example |
|-------|---------|
| **High** | `SendEmail(recipient, message)` |
| **Low** | TCP packets, SMTP protocol |

### Benefits

| Benefit | Description |
|---------|-------------|
| **Simplicity** | Easier to use |
| **Focus** | What, not how |
| **Flexibility** | Change implementation |

---

## ⚙️ AP CSP Pseudocode

### Assignment

```
variable ← expression
```

### Display Output

```
DISPLAY(expression)
```

### Input

```
INPUT()
```

### Selection

```
IF condition
    Statement(s)
ELSE
    Statement(s)
```

### Iteration

```
REPEAT n TIMES
    Statement(s)

REPEAT UNTIL condition
    Statement(s)
```

### Procedures

```
PROCEDURE name(parameters)
    Statement(s)
    RETURN value
```

### Lists

```
list ← [value1, value2, value3]
list[i]
APPEND(list, value)
INSERT(list, i, value)
REMOVE(list, i)
LENGTH(list)
FOR EACH item IN list
    Statement(s)
```

---

## 🧮 Operators

### Arithmetic

| Operator | Meaning |
|----------|---------|
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `MOD` | Modulus (remainder) |

### Relational

| Operator | Meaning |
|----------|---------|
| `=` | Equal to |
| `≠` | Not equal to |
| `>` | Greater than |
| `<` | Less than |
| `≥` | Greater than or equal |
| `≤` | Less than or equal |

### Logical

| Operator | Meaning |
|----------|---------|
| `AND` | Both true |
| `OR` | At least one true |
| `NOT` | Opposite |

---

## 🎯 Common Algorithms

### Find Maximum

```
PROCEDURE FindMax(list)
    max ← list[1]
    FOR i FROM 2 TO LENGTH(list)
        IF list[i] > max
            max ← list[i]
    RETURN max
```

### Count Occurrences

```
PROCEDURE Count(list, value)
    count ← 0
    FOR EACH item IN list
        IF item = value
            count ← count + 1
    RETURN count
```

### Reverse List

```
PROCEDURE Reverse(list)
    newList ← []
    FOR i FROM LENGTH(list) TO 1
        APPEND(newList, list[i])
    RETURN newList
```

---

## 🔄 Iteration Patterns

### Accumulator Pattern

```
sum ← 0
FOR EACH value IN list
    sum ← sum + value
```

### Counter Pattern

```
count ← 0
FOR EACH item IN list
    IF condition
        count ← count + 1
```

### Filter Pattern

```
filtered ← []
FOR EACH item IN list
    IF condition
        APPEND(filtered, item)
```

---

## 🧩 Combining Constructs

### Nested Loops

```
FOR i FROM 1 TO 3
    FOR j FROM 1 TO 3
        DISPLAY(i, j)
```

### Selection in Iteration

```
FOR EACH num IN list
    IF num MOD 2 = 0
        DISPLAY(num, "is even")
    ELSE
        DISPLAY(num, "is odd")
```

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Algorithm** | Step-by-step procedure |
| **Sequencing** | Execute in order |
| **Selection** | Choose path (IF) |
| **Iteration** | Repeat (loops) |
| **Procedure** | Named code block |
| **Parameter** | Input to procedure |
| **Return** | Output from procedure |
| **List** | Ordered collection |
| **Index** | Position in list |
| **Decomposition** | Break into parts |
| **Abstraction** | Hide details |

---

## 🎯 AP Exam Strategies

### Common Question Types

| Type | Focus |
|------|-------|
| **Trace code** | Follow execution |
| **Write procedure** | Solve specific problem |
| **Identify construct** | Sequence, selection, iteration |
| **List operations** | Access, append, remove |

### Key Things to Remember

| Topic | Remember |
|-------|----------|
| **1-based indexing** | AP CSP starts at 1 |
| **MOD** | Remainder operation |
| **APPEND** | Add to end |
| **FOR EACH** | Iterate through list |

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| 0-based indexing | Use 1-based |
| Wrong syntax | Follow AP pseudocode |
| Infinite loop | Ensure termination |
| Wrong return | Check what's returned |

### Exam Tips

| Tip | Explanation |
|-----|-------------|
| **Read carefully** | Understand problem |
| **Trace by hand** | Follow step-by-step |
| **Check edge cases** | Empty list, single item |
| **Use examples** | Test with sample data |

---

## 🧪 Practice Problems

### Problem 1: Even Numbers

```
PROCEDURE CountEvens(list)
    count ← 0
    FOR EACH num IN list
        IF num MOD 2 = 0
            count ← count + 1
    RETURN count
```

### Problem 2: Find Index

```
PROCEDURE FindIndex(list, target)
    FOR i FROM 1 TO LENGTH(list)
        IF list[i] = target
            RETURN i
    RETURN -1
```

### Problem 3: Double Values

```
PROCEDURE DoubleList(list)
    FOR i FROM 1 TO LENGTH(list)
        list[i] ← list[i] * 2
```

---

## 🎮 Real-World Applications

### Game Loop

```
REPEAT UNTIL gameOver
    GetInput()
    UpdateGame()
    DrawScreen()
```

### Search Engine

```
PROCEDURE Search(query, database)
    results ← []
    FOR EACH item IN database
        IF Matches(item, query)
            APPEND(results, item)
    RETURN results
```

---

**Good luck on your AP Computer Science Principles exam! 🍀🖥️🧠**

Remember: Algorithms use sequencing, selection, and iteration. Procedures allow code reuse and abstraction. AP CSP uses 1-based indexing for lists. Decomposition breaks problems into manageable parts. MOD gives the remainder!
