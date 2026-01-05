# AP Computer Science A Unit 10 Study Guide

:::GUIDE:::
unit::=Unit 10
title::=💻 Unit 10: Recursion Complete Guide
desc::=Master recursive thinking, base cases, recursive cases, and classic recursive algorithms with interactive visualization
diff::=Very Hard
time::=70 minutes
tags::=computer science, java, recursion, algorithms, divide and conquer, interactive
content::=

# 💻 Unit 10: Recursion

## 📋 Unit Overview

Recursion is when a method calls itself! This unit covers recursive thinking, base cases, recursive cases, and classic algorithms. Mind-bending but powerful! 🔄

### Essential Questions

| Question | Focus |
|----------|-------|
| What is recursion? | Method calling itself |
| What is a base case? | Stopping condition |
| What is a recursive case? | Self-call |
| When to use recursion? | Problems with subproblems |
| How to trace recursion? | Call stack |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Recursion** | Method calls itself |
| **Base case** | Stops recursion |
| **Recursive case** | Makes progress toward base |
| **Call stack** | Tracks method calls |
| **Stack overflow** | Too many calls |

:::TIMELINE:::
id::=recursion-history
title::=📅 History of Recursion in Computer Science
events::=[
  {"year": "1936", "event": "Alan Turing and Church's Lambda Calculus", "detail": "Theoretical foundations; recursive functions proven equivalent to Turing machines"},
  {"year": "1958", "event": "LISP introduces recursion as primary control", "detail": "John McCarthy creates first language with recursion as fundamental pattern"},
  {"year": "1960", "event": "ALGOL 60 allows recursive procedures", "detail": "First mainstream language with proper recursion support"},
  {"year": "1962", "event": "QuickSort invented", "detail": "Tony Hoare creates recursive sorting algorithm; O(n log n) average case"},
  {"year": "1968", "event": "Structured Programming movement", "detail": "Dijkstra and others promote recursion as alternative to GOTO"},
  {"year": "1973", "event": "MergeSort proven optimal", "detail": "Recursive divide-and-conquer shown to achieve optimal comparison sorts"},
  {"year": "1984", "event": "'Structure and Interpretation of Computer Programs'", "detail": "MIT textbook makes recursion central to CS education"},
  {"year": "1995", "event": "Java 1.0 released", "detail": "Recursion standard feature; used in AP Computer Science curriculum"}
]
:::/TIMELINE:::

---

## 🔄 What is Recursion?

### Definition

| Concept | Method that calls itself |
|---------|--------------------------|

### Anatomy of Recursive Method

```java
public int recursiveMethod(parameters) {
    if (base case) {
        return base value;
    } else {
        return recursiveMethod(modified parameters);
    }
}
```

| Component | Purpose |
|-----------|---------|
| **Base case** | Stop recursion |
| **Recursive case** | Call self with simpler problem |

---

## 🎯 Base Case

### Definition

| Concept | Condition to stop recursion |
|---------|----------------------------|

### Why Important?

| Without base case | Infinite recursion |
|-------------------|---------------------|
| **Result** | StackOverflowError |

### Example

```java
public int factorial(int n) {
    if (n == 0) {  // Base case
        return 1;
    } else {
        return n * factorial(n - 1);  // Recursive case
    }
}
```

---

## 🔢 Classic Example: Factorial

### Mathematical Definition

| n! | n × (n-1)! |
|----|-----------|
| 0! | 1 (base case) |
| 5! | 5 × 4! = 5 × 24 = 120 |

### Recursive Implementation

```java
public static int factorial(int n) {
    if (n == 0) {
        return 1;  // Base case
    }
    return n * factorial(n - 1);  // Recursive case
}
```

### Trace: factorial(4)

| Call | Returns |
|------|---------|
| factorial(4) | 4 × factorial(3) |
| factorial(3) | 3 × factorial(2) |
| factorial(2) | 2 × factorial(1) |
| factorial(1) | 1 × factorial(0) |
| factorial(0) | 1 |

### Unwinding

| Calculation | Result |
|-------------|--------|
| factorial(1) = 1 × 1 | 1 |
| factorial(2) = 2 × 1 | 2 |
| factorial(3) = 3 × 2 | 6 |
| factorial(4) = 4 × 6 | 24 |

:::CODE:::
id::=recursion-factorial-demo
title::=🔢 Factorial Recursion - Watch the Call Stack
language::=java
runnable::=true
code::=
// Factorial Recursion Demo
// Watch how the call stack builds up and then unwinds!

public class FactorialDemo {
    static int depth = 0;  // Track recursion depth
    
    public static void main(String[] args) {
        System.out.println("=== Factorial Recursion Visualization ===\n");
        
        int n = 5;
        System.out.println("Computing " + n + "!\n");
        System.out.println("--- Call Stack Building ---");
        
        int result = factorial(n);
        
        System.out.println("\n--- Final Result ---");
        System.out.println(n + "! = " + result);
        
        System.out.println("\n=== Multiple Factorials ===");
        for (int i = 0; i <= 7; i++) {
            depth = 0;  // Reset
            System.out.println(i + "! = " + factorialSimple(i));
        }
    }
    
    public static int factorial(int n) {
        String indent = "  ".repeat(depth);
        System.out.println(indent + "→ factorial(" + n + ") called");
        depth++;
        
        if (n == 0) {
            depth--;
            System.out.println(indent + "← factorial(0) returns 1 [BASE CASE]");
            return 1;
        }
        
        int subResult = factorial(n - 1);
        int result = n * subResult;
        depth--;
        System.out.println(indent + "← factorial(" + n + ") returns " + n + " × " + subResult + " = " + result);
        return result;
    }
    
    public static int factorialSimple(int n) {
        if (n == 0) return 1;
        return n * factorialSimple(n - 1);
    }
}
expected_output::=
=== Factorial Recursion Visualization ===

Computing 5!

--- Call Stack Building ---
→ factorial(5) called
  → factorial(4) called
    → factorial(3) called
      → factorial(2) called
        → factorial(1) called
          → factorial(0) called
          ← factorial(0) returns 1 [BASE CASE]
        ← factorial(1) returns 1 × 1 = 1
      ← factorial(2) returns 2 × 1 = 2
    ← factorial(3) returns 3 × 2 = 6
  ← factorial(4) returns 4 × 6 = 24
← factorial(5) returns 5 × 24 = 120

--- Final Result ---
5! = 120

=== Multiple Factorials ===
0! = 1
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
6! = 720
7! = 5040
:::/CODE:::

---

## 🐇 Fibonacci Numbers

### Definition

| F(n) | F(n-1) + F(n-2) |
|------|-----------------|
| F(0) | 0 |
| F(1) | 1 |

### Sequence

| n | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| **F(n)** | 0 | 1 | 1 | 2 | 3 | 5 | 8 | 13 |

### Recursive Implementation

```java
public static int fibonacci(int n) {
    if (n == 0) {
        return 0;  // Base case 1
    }
    if (n == 1) {
        return 1;  // Base case 2
    }
    return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive
}
```

:::CODE:::
id::=fibonacci-recursion-demo
title::=🐇 Fibonacci Recursion - See the Explosion of Calls
language::=java
runnable::=true
code::=
// Fibonacci Recursion Demo
// Warning: Fibonacci recursion is SLOW! Watch the call explosion!

public class FibonacciDemo {
    static int callCount = 0;
    
    public static void main(String[] args) {
        System.out.println("=== Fibonacci Sequence ===");
        System.out.print("First 15 numbers: ");
        for (int i = 0; i < 15; i++) {
            callCount = 0;
            System.out.print(fibSimple(i) + " ");
        }
        System.out.println("\n");
        
        System.out.println("=== Recursive Call Count (Exponential!) ===");
        for (int n = 0; n <= 15; n++) {
            callCount = 0;
            int result = fibWithCount(n);
            System.out.println("fib(" + n + ") = " + result + " | Calls made: " + callCount);
        }
        
        System.out.println("\n=== Detailed Trace for fib(5) ===");
        callCount = 0;
        System.out.println("Result: " + fibTrace(5, 0));
    }
    
    public static int fibSimple(int n) {
        if (n <= 1) return n;
        return fibSimple(n - 1) + fibSimple(n - 2);
    }
    
    public static int fibWithCount(int n) {
        callCount++;
        if (n <= 1) return n;
        return fibWithCount(n - 1) + fibWithCount(n - 2);
    }
    
    public static int fibTrace(int n, int depth) {
        String indent = "  ".repeat(depth);
        System.out.println(indent + "fib(" + n + ")");
        
        if (n == 0) return 0;
        if (n == 1) return 1;
        
        int left = fibTrace(n - 1, depth + 1);
        int right = fibTrace(n - 2, depth + 1);
        return left + right;
    }
}
expected_output::=
=== Fibonacci Sequence ===
First 15 numbers: 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 

=== Recursive Call Count (Exponential!) ===
fib(0) = 0 | Calls made: 1
fib(1) = 1 | Calls made: 1
fib(2) = 1 | Calls made: 3
fib(3) = 2 | Calls made: 5
fib(4) = 3 | Calls made: 9
fib(5) = 5 | Calls made: 15
fib(6) = 8 | Calls made: 25
fib(7) = 13 | Calls made: 41
fib(8) = 21 | Calls made: 67
fib(9) = 34 | Calls made: 109
fib(10) = 55 | Calls made: 177
fib(11) = 89 | Calls made: 287
fib(12) = 144 | Calls made: 465
fib(13) = 233 | Calls made: 753
fib(14) = 377 | Calls made: 1219
fib(15) = 610 | Calls made: 1973

=== Detailed Trace for fib(5) ===
fib(5)
  fib(4)
    fib(3)
      fib(2)
        fib(1)
        fib(0)
      fib(1)
    fib(2)
      fib(1)
      fib(0)
  fib(3)
    fib(2)
      fib(1)
      fib(0)
    fib(1)
Result: 5
:::/CODE:::

### Call Tree: fibonacci(5)

```
                fib(5)
               /      \
           fib(4)    fib(3)
           /    \    /    \
       fib(3) fib(2) fib(2) fib(1)
       /  \   /  \   /  \
   fib(2) fib(1) fib(1) fib(0)
   /  \
fib(1) fib(0)
```

---

## 🔢 Sum of Digits

### Problem

| Task | Sum digits of number |
|------|---------------------|
| 1234 | 1 + 2 + 3 + 4 = 10 |

### Recursive Approach

```java
public static int sumDigits(int n) {
    if (n == 0) {
        return 0;  // Base case
    }
    return n % 10 + sumDigits(n / 10);  // Recursive
}
```

### Trace: sumDigits(1234)

| Call | n | n % 10 | n / 10 | Returns |
|------|---|--------|--------|---------|
| sumDigits(1234) | 1234 | 4 | 123 | 4 + sumDigits(123) |
| sumDigits(123) | 123 | 3 | 12 | 3 + sumDigits(12) |
| sumDigits(12) | 12 | 2 | 1 | 2 + sumDigits(1) |
| sumDigits(1) | 1 | 1 | 0 | 1 + sumDigits(0) |
| sumDigits(0) | 0 | - | - | 0 |

### Result: 4 + 3 + 2 + 1 + 0 = 10

---

## 📜 String Recursion

### Reverse String

```java
public static String reverse(String s) {
    if (s.length() <= 1) {
        return s;  // Base case
    }
    return reverse(s.substring(1)) + s.charAt(0);
}
```

### Trace: reverse("abc")

| Call | Returns |
|------|---------|
| reverse("abc") | reverse("bc") + "a" |
| reverse("bc") | reverse("c") + "b" |
| reverse("c") | "c" |
| Unwind | "c" + "b" = "cb" |
| Unwind | "cb" + "a" = "cba" |

### Count Characters

```java
public static int count(String s, char c) {
    if (s.length() == 0) {
        return 0;  // Base case
    }
    int rest = count(s.substring(1), c);
    if (s.charAt(0) == c) {
        return 1 + rest;
    } else {
        return rest;
    }
}
```

---

## 🎯 Array Recursion

### Sum Array

```java
public static int sum(int[] arr, int index) {
    if (index >= arr.length) {
        return 0;  // Base case
    }
    return arr[index] + sum(arr, index + 1);
}

// Call: sum(arr, 0)
```

### Find Maximum

```java
public static int max(int[] arr, int index) {
    if (index == arr.length - 1) {
        return arr[index];  // Base case
    }
    int restMax = max(arr, index + 1);
    return Math.max(arr[index], restMax);
}
```

### Linear Search

```java
public static int search(int[] arr, int target, int index) {
    if (index >= arr.length) {
        return -1;  // Not found
    }
    if (arr[index] == target) {
        return index;  // Found
    }
    return search(arr, target, index + 1);
}
```

---

## 🔍 Binary Search (Recursive)

### Algorithm

```java
public static int binarySearch(int[] arr, int target, int low, int high) {
    if (low > high) {
        return -1;  // Not found
    }
    
    int mid = (low + high) / 2;
    
    if (arr[mid] == target) {
        return mid;  // Found
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high);
    } else {
        return binarySearch(arr, target, low, mid - 1);
    }
}
```

### Call

```java
int index = binarySearch(arr, target, 0, arr.length - 1);
```

---

## 🧮 Power Function

### Problem: x^n

```java
public static int power(int x, int n) {
    if (n == 0) {
        return 1;  // Base case
    }
    return x * power(x, n - 1);
}
```

### Optimized (Divide and Conquer)

```java
public static int power(int x, int n) {
    if (n == 0) {
        return 1;
    }
    if (n % 2 == 0) {
        int half = power(x, n / 2);
        return half * half;
    } else {
        return x * power(x, n - 1);
    }
}
```

---

## 🎯 Recursive Patterns

### Processing Elements

| Pattern | Example |
|---------|---------|
| **Process first** | Do something with first, recurse on rest |
| **Process last** | Recurse on all but last, process last |
| **Divide in half** | Binary search, merge sort |

### Example: Process First

```java
public static void print(String s) {
    if (s.length() == 0) return;
    System.out.println(s.charAt(0));
    print(s.substring(1));
}
```

---

## 📐 Call Stack

### How Recursion Works

| Stack | Method calls stored on stack |
|-------|------------------------------|
| **Each call** | New stack frame |
| **Return** | Pop stack frame |

### Visualization: factorial(3)

```
| factorial(0) → returns 1       |  ← Top of stack
| factorial(1) → 1 * factorial(0)|
| factorial(2) → 2 * factorial(1)|
| factorial(3) → 3 * factorial(2)|  ← Bottom
```

### Stack Overflow

| Cause | Too many recursive calls |
|-------|-------------------------|
| **Reason** | Missing/wrong base case |
| **Error** | StackOverflowError |

---

## 🔄 Recursion vs. Iteration

### Comparison

| Aspect | Recursion | Iteration |
|--------|-----------|-----------|
| **Readability** | Often clearer | Can be verbose |
| **Efficiency** | Slower (overhead) | Faster |
| **Memory** | Uses stack | Uses heap |
| **When** | Tree, divide-and-conquer | Counting, simple loops |

### Iterative Factorial

```java
public static int factorial(int n) {
    int result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
```

---

## ⚠️ Common Recursion Mistakes

### Missing Base Case

```java
// WRONG - infinite recursion
public int bad(int n) {
    return n + bad(n - 1);  // No base case!
}
```

### Not Making Progress

```java
// WRONG - infinite recursion
public int bad(int n) {
    if (n == 0) return 0;
    return n + bad(n);  // Doesn't decrease n!
}
```

### Wrong Base Case

```java
// WRONG - misses base case for n=1
public int bad(int n) {
    if (n == 0) return 1;
    return n * bad(n - 2);  // Skips n=1!
}
```

---

## 🧩 Recursive Helper Methods

### Pattern

```java
// Public method
public static int sum(int[] arr) {
    return sumHelper(arr, 0);
}

// Private recursive helper
private static int sumHelper(int[] arr, int index) {
    if (index >= arr.length) {
        return 0;
    }
    return arr[index] + sumHelper(arr, index + 1);
}
```

| Why | Cleaner public interface |
|-----|--------------------------|

---

## 🎯 Tail Recursion

### Definition

| Concept | Recursive call is last operation |
|---------|----------------------------------|

### Example

```java
public static int factorial(int n, int accumulator) {
    if (n == 0) {
        return accumulator;
    }
    return factorial(n - 1, n * accumulator);  // Tail recursive
}

// Call: factorial(5, 1)
```

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Recursion** | Method that calls itself |
| **Base case** | Condition that stops recursion |
| **Recursive case** | Self-call with simpler input |
| **Call stack** | Memory for tracking method calls |
| **Stack overflow** | Too many recursive calls |
| **Helper method** | Recursive method with extra parameters |
| **Tail recursion** | Recursive call is last operation |

---

## 🎯 AP Exam Strategies

### Common Question Types

| Type | Focus |
|------|-------|
| **Trace recursion** | Follow calls and returns |
| **Identify base case** | Stopping condition |
| **Write recursive method** | Base + recursive case |
| **Debug recursion** | Find missing/wrong base |

### Key Things to Remember

| Topic | Remember |
|-------|----------|
| **Base case** | Must stop recursion |
| **Progress** | Each call closer to base |
| **Return** | Builds result from base |
| **Stack** | Each call uses memory |

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| No base case | Add stopping condition |
| No progress | Modify parameters |
| Wrong base value | Check return value |
| Missing return | All paths return |

### FRQ Tips

| Tip | Explanation |
|-----|-------------|
| **Identify base case** | What stops recursion? |
| **Make progress** | How get closer to base? |
| **Trace carefully** | Draw call stack |
| **Test edge cases** | Empty, single element |

---

## 🧪 Practice Problems

### Problem 1: Count Down

```java
public static void countDown(int n) {
    if (n == 0) {
        System.out.println("Blastoff!");
        return;
    }
    System.out.println(n);
    countDown(n - 1);
}
```

### Problem 2: Is Palindrome

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

### Problem 3: GCD (Greatest Common Divisor)

```java
public static int gcd(int a, int b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}
```

### Problem 4: Count Occurrences

```java
public static int count(int[] arr, int target, int index) {
    if (index >= arr.length) {
        return 0;
    }
    int count = (arr[index] == target) ? 1 : 0;
    return count + count(arr, target, index + 1);
}
```

### Problem 5: Print All Subsets

```java
public static void printSubsets(String s, String current) {
    if (s.length() == 0) {
        System.out.println(current);
        return;
    }
    // Include first character
    printSubsets(s.substring(1), current + s.charAt(0));
    // Exclude first character
    printSubsets(s.substring(1), current);
}
```

---

## 🎓 When to Use Recursion

### Good For

| Problem Type | Example |
|--------------|---------|
| **Divide and conquer** | Binary search, merge sort |
| **Tree traversal** | File systems |
| **Backtracking** | Maze solving |
| **Mathematical** | Factorial, Fibonacci |

### Avoid For

| Scenario | Reason |
|----------|--------|
| **Simple counting** | Iteration clearer |
| **Large n** | Stack overflow risk |
| **Performance critical** | Overhead too high |

---

**Good luck on your AP Computer Science A exam! 🍀💻🔄**

Remember: Every recursive method needs a base case to stop! Each recursive call must make progress toward the base case. Trace recursion by drawing the call stack. For arrays/strings, use helper methods with index parameters. Recursion is elegant but has overhead - use wisely!
