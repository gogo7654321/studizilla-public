# AP Computer Science A Unit 3 Study Guide

:::GUIDE:::
unit::=Unit 3
title::=💻 Unit 3: Boolean Expressions and if Statements Complete Guide
desc::=Master conditional logic, boolean expressions, if-else statements, and control flow in Java with interactive examples
diff::=Medium
time::=60 minutes
tags::=computer science, java, conditionals, boolean, if statements, logic, interactive
content::=

# 💻 Unit 3: Boolean Expressions and if Statements

## 📋 Unit Overview

Control flow lets programs make decisions! This unit covers boolean expressions, conditional statements, and logical operators. Master these for decision-making code! 🔀

### Essential Questions

| Question | Focus |
|----------|-------|
| What are boolean expressions? | true/false conditions |
| How do if statements work? | Conditional execution |
| What are logical operators? | AND, OR, NOT |
| How to nest conditions? | If within if |
| What is short-circuit evaluation? | Efficient evaluation |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Boolean expression** | Evaluates to true or false |
| **if statement** | Execute if condition true |
| **else statement** | Alternative execution |
| **Logical operators** | Combine conditions |
| **Short-circuit** | Stop when answer known |

:::TIMELINE:::
id::=boolean-logic-history
title::=📅 History of Boolean Logic and Conditionals
events::=[
  {"year": "1847", "event": "George Boole publishes 'Mathematical Analysis of Logic'", "detail": "Creates Boolean algebra; true/false as 1/0; AND, OR, NOT operations"},
  {"year": "1854", "event": "Boole's 'Laws of Thought'", "detail": "Formalizes logical reasoning; foundation for all digital computing"},
  {"year": "1937", "event": "Claude Shannon applies Boolean algebra to circuits", "detail": "Master's thesis links logic gates to Boole's algebra; enables digital computers"},
  {"year": "1945", "event": "ENIAC uses conditional branching", "detail": "First electronic computer with IF-THEN logic"},
  {"year": "1957", "event": "FORTRAN introduces IF statements", "detail": "First high-level language with structured conditionals"},
  {"year": "1960", "event": "ALGOL standardizes if-else syntax", "detail": "Block structure and nesting; influenced all modern languages"},
  {"year": "1972", "event": "C refines conditional syntax", "detail": "Dennis Ritchie; if/else syntax that Java inherits directly"},
  {"year": "1995", "event": "Java adopts C-style conditionals", "detail": "if, else, else-if, switch; same syntax used in AP CSA today"}
]
:::/TIMELINE:::

---

## ✅ Boolean Expressions

### Relational Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `==` | Equal to | `x == 5` |
| `!=` | Not equal to | `x != 5` |
| `<` | Less than | `x < 5` |
| `>` | Greater than | `x > 5` |
| `<=` | Less than or equal | `x <= 5` |
| `>=` | Greater than or equal | `x >= 5` |

### Examples

| Expression | Value when x = 5 |
|------------|------------------|
| `x == 5` | `true` |
| `x != 5` | `false` |
| `x < 10` | `true` |
| `x >= 5` | `true` |
| `x > 5` | `false` |

### Common Mistake

| Wrong | Right | Why |
|-------|-------|-----|
| `x = 5` | `x == 5` | = is assignment |
| `5 < x < 10` | `x > 5 && x < 10` | Can't chain |

---

## 🔀 if Statements

### Basic if Statement

```java
if (condition) {
    // Execute if true
}
```

| Component | Purpose |
|-----------|---------|
| `condition` | Boolean expression |
| `{ }` | Code block (curly braces) |

### if-else Statement

```java
if (condition) {
    // Execute if true
} else {
    // Execute if false
}
```

| Flow | Description |
|------|-------------|
| **true path** | Execute if block |
| **false path** | Execute else block |

:::CODE:::
id::=conditionals-demo
title::=🔀 Boolean Expressions and if Statements - Interactive Demo
language::=java
runnable::=true
code::=
// Boolean Expressions and if Statements Demo
// Run to see conditionals in action!

public class ConditionalsDemo {
    public static void main(String[] args) {
        System.out.println("=== Relational Operators ===");
        int x = 5;
        System.out.println("x = " + x);
        System.out.println("x == 5: " + (x == 5));
        System.out.println("x != 5: " + (x != 5));
        System.out.println("x < 10: " + (x < 10));
        System.out.println("x > 5: " + (x > 5));
        System.out.println("x >= 5: " + (x >= 5));
        System.out.println();
        
        System.out.println("=== Basic if Statement ===");
        int score = 85;
        System.out.println("Score: " + score);
        
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else if (score >= 60) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");
        }
        System.out.println();
        
        System.out.println("=== Logical Operators ===");
        int age = 25;
        boolean hasLicense = true;
        System.out.println("age = " + age + ", hasLicense = " + hasLicense);
        
        // AND (&&)
        if (age >= 16 && hasLicense) {
            System.out.println("&& : Can drive legally ✓");
        }
        
        // OR (||)
        boolean isWeekend = true;
        boolean isHoliday = false;
        if (isWeekend || isHoliday) {
            System.out.println("|| : Day off! (weekend=" + isWeekend + " OR holiday=" + isHoliday + ")");
        }
        
        // NOT (!)
        boolean raining = false;
        if (!raining) {
            System.out.println("! : Not raining, go outside!");
        }
        System.out.println();
        
        System.out.println("=== Short-Circuit Evaluation ===");
        int num = 0;
        // Short-circuit: second part not evaluated because first is false
        if (num != 0 && 10/num > 1) {
            System.out.println("This won't print");
        } else {
            System.out.println("Short-circuit prevented division by zero!");
        }
        System.out.println();
        
        System.out.println("=== Nested if Statements ===");
        int temperature = 75;
        boolean sunny = true;
        
        if (temperature > 60) {
            if (sunny) {
                System.out.println("Temperature " + temperature + "°, sunny: Great day for a picnic!");
            } else {
                System.out.println("Warm but cloudy");
            }
        } else {
            System.out.println("Too cold!");
        }
        System.out.println();
        
        System.out.println("=== Common Patterns ===");
        // Check if in range
        int value = 50;
        if (value >= 0 && value <= 100) {
            System.out.println(value + " is in range [0, 100]");
        }
        
        // Check even/odd
        int n = 7;
        if (n % 2 == 0) {
            System.out.println(n + " is even");
        } else {
            System.out.println(n + " is odd");
        }
    }
}
expected_output::=
=== Relational Operators ===
x = 5
x == 5: true
x != 5: false
x < 10: true
x > 5: false
x >= 5: true

=== Basic if Statement ===
Score: 85
Grade: B

=== Logical Operators ===
age = 25, hasLicense = true
&& : Can drive legally ✓
|| : Day off! (weekend=true OR holiday=false)
! : Not raining, go outside!

=== Short-Circuit Evaluation ===
Short-circuit prevented division by zero!

=== Nested if Statements ===
Temperature 75°, sunny: Great day for a picnic!

=== Common Patterns ===
50 is in range [0, 100]
7 is odd
:::/CODE:::

### else-if Chain

```java
if (condition1) {
    // Code 1
} else if (condition2) {
    // Code 2
} else if (condition3) {
    // Code 3
} else {
    // Default code
}
```

| Rule | Description |
|------|-------------|
| **First true** | Execute that block only |
| **Order matters** | Check from top |
| **Optional else** | Default case |

---

## 🎯 Example: Grade Ranges

```java
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
```

| Score | Grade |
|-------|-------|
| 90-100 | A |
| 80-89 | B |
| 70-79 | C |
| 60-69 | D |
| 0-59 | F |

---

## 🔗 Logical Operators

### AND, OR, NOT

| Operator | Symbol | Description |
|----------|--------|-------------|
| **AND** | `&&` | Both must be true |
| **OR** | `||` | At least one true |
| **NOT** | `!` | Opposite |

### AND Truth Table

| A | B | A && B |
|---|---|--------|
| T | T | **T** |
| T | F | F |
| F | T | F |
| F | F | F |

### OR Truth Table

| A | B | A \|\| B |
|---|---|----------|
| T | T | **T** |
| T | F | **T** |
| F | T | **T** |
| F | F | F |

### NOT Truth Table

| A | !A |
|---|-----|
| T | **F** |
| F | **T** |

---

## 🎯 Logical Operator Examples

### Range Checking

| Task | Expression |
|------|------------|
| Between 0-100 | `x >= 0 && x <= 100` |
| Outside 0-100 | `x < 0 || x > 100` |
| Not equal | `x != 5` or `!(x == 5)` |

### Multiple Conditions

| Scenario | Code |
|----------|------|
| Both conditions | `if (age >= 18 && hasLicense)` |
| Either condition | `if (isWeekend || isHoliday)` |
| Not condition | `if (!isRaining)` |

---

## ⚡ Short-Circuit Evaluation

### Definition

| Concept | Description |
|---------|-------------|
| **Short-circuit** | Stop evaluating when answer known |
| **&&** | Stop if first is false |
| **||** | Stop if first is true |

### AND Short-Circuit

| Expression | Behavior |
|------------|----------|
| `false && anything` | Second not evaluated |
| `true && B` | Must check B |

### OR Short-Circuit

| Expression | Behavior |
|------------|----------|
| `true || anything` | Second not evaluated |
| `false || B` | Must check B |

### Why It Matters

| Example | Explanation |
|---------|-------------|
| `s != null && s.length() > 0` | Prevents NullPointerException |
| `x != 0 && y / x > 2` | Prevents division by zero |

---

## 🌳 Nested if Statements

### if Within if

```java
if (condition1) {
    if (condition2) {
        // Both true
    }
}
```

### Dangling else Problem

| Code | Which if? |
|------|-----------|
| `if (A) if (B) x = 1; else x = 2;` | else matches nearest if |

### Solution: Use Braces

```java
if (A) {
    if (B) {
        x = 1;
    } else {
        x = 2;  // Matches inner if
    }
}
```

---

## 🔄 Equivalent Conditions

### De Morgan's Laws

| Original | Equivalent |
|----------|------------|
| `!(A && B)` | `!A || !B` |
| `!(A || B)` | `!A && !B` |

### Examples

| Expression | Equivalent |
|------------|------------|
| `!(x > 5 && y < 10)` | `x <= 5 || y >= 10` |
| `!(x == 0 || y == 0)` | `x != 0 && y != 0` |

### Simplification

| Complex | Simpler |
|---------|---------|
| `!(x < 5)` | `x >= 5` |
| `!(x == 5)` | `x != 5` |
| `!(!A)` | `A` |

---

## 🎭 Comparing Objects

### Comparing Strings

| Wrong | Right |
|-------|-------|
| `s1 == s2` | `s1.equals(s2)` |
| Compares references | Compares content |

### null Checks

| Safe Pattern | Why |
|--------------|-----|
| `if (s != null && s.length() > 0)` | Prevents error |
| `if (s == null || s.length() == 0)` | Check for empty |

---

## 📐 Common Patterns

### Validating Input

```java
if (age >= 0 && age <= 120) {
    // Valid age
} else {
    // Invalid age
}
```

### Checking Ranges

```java
// Is x in [min, max]?
if (x >= min && x <= max) {
    // In range
}
```

### Leap Year

```java
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    // Leap year
}
```

---

## 🚨 Common Errors

### Semicolon After if

| Wrong | Right |
|-------|-------|
| `if (x > 0);` | `if (x > 0)` |
| Always executes | Conditional |

### Assignment in Condition

| Wrong | Right |
|-------|-------|
| `if (x = 5)` | `if (x == 5)` |
| Assignment | Comparison |

### Unreachable Code

```java
if (x > 5) {
    return 1;
} else if (x > 3) {  // Never reached if x > 5
    return 2;
}
```

---

## 🔍 Tracing Conditionals

### Example Trace

| x | Condition | Result |
|---|-----------|--------|
| 10 | `x >= 90` | false |
| 10 | `x >= 80` | false |
| 10 | `x >= 70` | false |
| 10 | `x >= 60` | false |
| 10 | `else` | grade = 'F' |

---

## 🎯 Operator Precedence

### Full Precedence

| Priority | Operators |
|----------|-----------|
| 1 | `()` |
| 2 | `! - (unary)` |
| 3 | `* / %` |
| 4 | `+ -` |
| 5 | `< > <= >=` |
| 6 | `== !=` |
| 7 | `&&` |
| 8 | `||` |

### Example

| Expression | Evaluation |
|------------|------------|
| `x > 5 && y < 10 || z == 0` | `(x > 5 && y < 10) || z == 0` |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Boolean expression** | Expression that evaluates to true or false |
| **Conditional statement** | if statement |
| **Relational operator** | Compares values (==, !=, <, >, <=, >=) |
| **Logical operator** | Combines conditions (&&, ||, !) |
| **Short-circuit** | Stops evaluating when answer known |
| **Nested if** | if statement inside another |
| **De Morgan's Laws** | Rules for negating AND/OR |
| **Dangling else** | Ambiguous else statement |

---

## 🎯 AP Exam Strategies

### Common Question Types

| Type | Focus |
|------|-------|
| **Trace code** | Follow if-else logic |
| **Equivalent expressions** | De Morgan's Laws |
| **Fix errors** | Semicolons, assignment |
| **Write conditions** | Range checks |

### Key Things to Remember

| Topic | Remember |
|-------|----------|
| **== vs. =** | Compare vs. assign |
| **Short-circuit** | Order matters |
| **else matches** | Nearest if |
| **Strings** | Use equals() |

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Using = instead of == | Double check |
| Chaining comparisons | Use && |
| Forgetting braces | Add them |
| Wrong operator precedence | Use parentheses |

### FRQ Tips

| Tip | Explanation |
|-----|-------------|
| **Trace carefully** | Write values |
| **Check edge cases** | Boundaries |
| **Use parentheses** | Clarity |
| **Test all paths** | Cover all cases |

---

## 🧪 Practice Problems

### Problem 1: Valid Triangle

```java
// Valid triangle if sum of any two sides > third
if (a + b > c && a + c > b && b + c > a) {
    // Valid triangle
}
```

### Problem 2: Check Even/Odd

```java
if (n % 2 == 0) {
    // Even
} else {
    // Odd
}
```

### Problem 3: Grade with +/-

```java
if (score >= 90) {
    if (score >= 97) grade = "A+";
    else if (score >= 93) grade = "A";
    else grade = "A-";
}
```

---

**Good luck on your AP Computer Science A exam! 🍀💻🔀**

Remember: Use == for comparison, not =! Short-circuit evaluation prevents errors (check null before calling methods). Always use equals() for String comparison, and use parentheses when in doubt about precedence!
