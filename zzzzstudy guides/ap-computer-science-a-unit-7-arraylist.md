# AP Computer Science A Unit 7 Study Guide

:::GUIDE:::
unit::=Unit 7
title::=💻 Unit 7: ArrayList Complete Guide
desc::=Master ArrayList creation, manipulation, traversal, and algorithms for dynamic collections with interactive examples
diff::=Hard
time::=70 minutes
tags::=computer science, java, ArrayList, collections, dynamic arrays, interactive
content::=

# 💻 Unit 7: ArrayList

## 📋 Unit Overview

ArrayLists are resizable! This unit covers the ArrayList class, methods, traversal, and algorithms. ArrayLists are more flexible than arrays! 📈

### Essential Questions

| Question | Focus |
|----------|-------|
| What is ArrayList? | Resizable collection |
| How does it differ from arrays? | Size flexibility |
| What are ArrayList methods? | add, remove, get, set |
| How do we traverse? | Loops and iteration |
| What about algorithms? | Search, sort, etc. |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **ArrayList** | Resizable collection |
| **Generic type** | Type parameter <E> |
| **add** | Add element |
| **remove** | Remove element |
| **get** | Access element |
| **set** | Replace element |

:::TIMELINE:::
id::=arraylist-history
title::=📅 History of Dynamic Arrays and Collections
events::=[
  {"year": "1957", "event": "LISP introduces lists", "detail": "First language with dynamic data structures; linked lists"},
  {"year": "1970s", "event": "Dynamic arrays in various languages", "detail": "C with malloc/realloc; Pascal with pointers"},
  {"year": "1995", "event": "Java 1.0 Vector class", "detail": "First Java dynamic array; synchronized (thread-safe)"},
  {"year": "1998", "event": "Java 1.2 Collections Framework", "detail": "ArrayList introduced; unsynchronized for better performance"},
  {"year": "2004", "event": "Java 5 Generics", "detail": "Type parameters <E>; compile-time type safety; no more casting"},
  {"year": "2014", "event": "Java 8 Stream API", "detail": "Functional operations on collections; forEach, filter, map"}
]
:::/TIMELINE:::

---

## 📦 ArrayList vs. Array

### Comparison

| Feature | Array | ArrayList |
|---------|-------|-----------|
| **Size** | Fixed | Resizable |
| **Syntax** | `[]` | `.get()`, `.set()` |
| **Type** | Primitives or objects | Objects only |
| **Length** | `.length` | `.size()` |

### When to Use

| Use | Best Choice |
|-----|-------------|
| **Fixed size** | Array |
| **Size changes** | ArrayList |
| **Primitives** | Array (or wrapper in ArrayList) |
| **Flexibility** | ArrayList |

---

## 🏗️ Creating ArrayList

### Import Statement

```java
import java.util.ArrayList;
```

### Declaration and Creation

```java
ArrayList<String> names = new ArrayList<String>();
```

| Component | Meaning |
|-----------|---------|
| `ArrayList` | Class name |
| `<String>` | Type parameter (generic) |
| `names` | Variable name |
| `new ArrayList<String>()` | Create new ArrayList |

### Simplified (Java 7+)

```java
ArrayList<String> names = new ArrayList<>();
```

### Common Types

| Type | Example |
|------|---------|
| **String** | `ArrayList<String>` |
| **Integer** | `ArrayList<Integer>` |
| **Double** | `ArrayList<Double>` |
| **Custom class** | `ArrayList<Student>` |

---

## 🔢 ArrayList Methods

### add Method

| Method | Description |
|--------|-------------|
| `add(E obj)` | Add to end |
| `add(int index, E obj)` | Insert at index |

```java
ArrayList<String> list = new ArrayList<>();
list.add("A");           // [A]
list.add("C");           // [A, C]
list.add(1, "B");        // [A, B, C]
```

### size Method

```java
int size = list.size();
```

:::CODE:::
id::=arraylist-methods-demo
title::=📈 ArrayList Methods - Interactive Demo
language::=java
runnable::=true
code::=
// ArrayList Methods Demo
// Run to see all ArrayList operations in action!

import java.util.ArrayList;

public class ArrayListDemo {
    public static void main(String[] args) {
        System.out.println("=== Creating ArrayList ===");
        ArrayList<String> fruits = new ArrayList<>();
        System.out.println("Empty ArrayList: " + fruits);
        System.out.println("Size: " + fruits.size());
        System.out.println();
        
        System.out.println("=== add(element) - Add to End ===");
        fruits.add("Apple");
        System.out.println("After add(\"Apple\"): " + fruits);
        fruits.add("Banana");
        System.out.println("After add(\"Banana\"): " + fruits);
        fruits.add("Cherry");
        System.out.println("After add(\"Cherry\"): " + fruits);
        System.out.println();
        
        System.out.println("=== add(index, element) - Insert ===");
        fruits.add(1, "Blueberry");
        System.out.println("After add(1, \"Blueberry\"): " + fruits);
        System.out.println();
        
        System.out.println("=== get(index) - Access ===");
        System.out.println("get(0): " + fruits.get(0));
        System.out.println("get(2): " + fruits.get(2));
        System.out.println();
        
        System.out.println("=== set(index, element) - Replace ===");
        String old = fruits.set(1, "Blackberry");
        System.out.println("set(1, \"Blackberry\") returned: " + old);
        System.out.println("List now: " + fruits);
        System.out.println();
        
        System.out.println("=== remove(index) - Remove by Position ===");
        String removed = fruits.remove(2);
        System.out.println("remove(2) returned: " + removed);
        System.out.println("List now: " + fruits);
        System.out.println();
        
        System.out.println("=== remove(object) - Remove by Value ===");
        boolean success = fruits.remove("Apple");
        System.out.println("remove(\"Apple\") returned: " + success);
        System.out.println("List now: " + fruits);
        System.out.println();
        
        System.out.println("=== Other Useful Methods ===");
        fruits.add("Date");
        fruits.add("Elderberry");
        System.out.println("List: " + fruits);
        System.out.println("size(): " + fruits.size());
        System.out.println("contains(\"Date\"): " + fruits.contains("Date"));
        System.out.println("indexOf(\"Date\"): " + fruits.indexOf("Date"));
        System.out.println("isEmpty(): " + fruits.isEmpty());
        System.out.println();
        
        System.out.println("=== ArrayList with Integer ===");
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(10);  // Autoboxing: int -> Integer
        numbers.add(20);
        numbers.add(30);
        System.out.println("Integer ArrayList: " + numbers);
        int sum = 0;
        for (int num : numbers) {  // Unboxing: Integer -> int
            sum += num;
        }
        System.out.println("Sum: " + sum);
    }
}
expected_output::=
=== Creating ArrayList ===
Empty ArrayList: []
Size: 0

=== add(element) - Add to End ===
After add("Apple"): [Apple]
After add("Banana"): [Apple, Banana]
After add("Cherry"): [Apple, Banana, Cherry]

=== add(index, element) - Insert ===
After add(1, "Blueberry"): [Apple, Blueberry, Banana, Cherry]

=== get(index) - Access ===
get(0): Apple
get(2): Banana

=== set(index, element) - Replace ===
set(1, "Blackberry") returned: Blueberry
List now: [Apple, Blackberry, Banana, Cherry]

=== remove(index) - Remove by Position ===
remove(2) returned: Banana
List now: [Apple, Blackberry, Cherry]

=== remove(object) - Remove by Value ===
remove("Apple") returned: true
List now: [Blackberry, Cherry]

=== Other Useful Methods ===
List: [Blackberry, Cherry, Date, Elderberry]
size(): 4
contains("Date"): true
indexOf("Date"): 2
isEmpty(): false

=== ArrayList with Integer ===
Integer ArrayList: [10, 20, 30]
Sum: 60
:::/CODE:::

| ArrayList | Array |
|-----------|-------|
| `.size()` (method) | `.length` (property) |

### get Method

```java
String value = list.get(index);
```

| Example | Result |
|---------|--------|
| `list.get(0)` | First element |
| `list.get(list.size() - 1)` | Last element |

### set Method

```java
list.set(index, newValue);
```

| Method | Effect |
|--------|--------|
| `set` | Replace element |
| Returns | Old value |

```java
list.set(1, "X");  // Replace element at index 1
```

---

## ❌ remove Method

### Two Versions

| Method | Description |
|--------|-------------|
| `remove(int index)` | Remove by index |
| `remove(Object obj)` | Remove by value |

### remove by Index

```java
ArrayList<String> list = new ArrayList<>();
list.add("A"); list.add("B"); list.add("C");
list.remove(1);  // Remove "B"
// list is now ["A", "C"]
```

### remove by Value

```java
list.remove("A");  // Remove first "A"
// list is now ["C"]
```

### Important: Shifting

| After remove | All elements shift left |
|--------------|-------------------------|
| **Indices change** | Be careful in loops |

---

## 🔄 Traversing ArrayList

### Standard for Loop

```java
for (int i = 0; i < list.size(); i++) {
    String value = list.get(i);
    System.out.println(value);
}
```

### Enhanced for Loop

```java
for (String value : list) {
    System.out.println(value);
}
```

### Comparison

| Type | Use When |
|------|----------|
| **Standard** | Need index, modify list |
| **Enhanced** | Read-only |

---

## ⚠️ Removing While Traversing

### Problem: ConcurrentModificationException

```java
// WRONG! May cause error
for (String s : list) {
    if (s.equals("X")) {
        list.remove(s);  // Error!
    }
}
```

### Solution 1: Backwards

```java
for (int i = list.size() - 1; i >= 0; i--) {
    if (list.get(i).equals("X")) {
        list.remove(i);
    }
}
```

### Solution 2: Forward with Adjustment

```java
for (int i = 0; i < list.size(); i++) {
    if (list.get(i).equals("X")) {
        list.remove(i);
        i--;  // Adjust for shift
    }
}
```

---

## 🔍 ArrayList Algorithms

### Linear Search

```java
public static int indexOf(ArrayList<Integer> list, int target) {
    for (int i = 0; i < list.size(); i++) {
        if (list.get(i) == target) {
            return i;
        }
    }
    return -1;
}
```

### Find Minimum

```java
public static int findMin(ArrayList<Integer> list) {
    int min = list.get(0);
    for (int i = 1; i < list.size(); i++) {
        if (list.get(i) < min) {
            min = list.get(i);
        }
    }
    return min;
}
```

### Sum Elements

```java
public static int sum(ArrayList<Integer> list) {
    int total = 0;
    for (int value : list) {
        total += value;
    }
    return total;
}
```

---

## 🎯 Wrapper Classes with ArrayList

### Cannot Use Primitives

| Wrong | Right |
|-------|-------|
| `ArrayList<int>` | `ArrayList<Integer>` |
| `ArrayList<double>` | `ArrayList<Double>` |
| `ArrayList<boolean>` | `ArrayList<Boolean>` |

### Autoboxing

```java
ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(5);        // Auto-boxes int to Integer
int x = numbers.get(0); // Auto-unboxes Integer to int
```

---

## 📐 Common ArrayList Patterns

### Build ArrayList from Array

```java
int[] arr = {1, 2, 3, 4, 5};
ArrayList<Integer> list = new ArrayList<>();
for (int num : arr) {
    list.add(num);
}
```

### Build Array from ArrayList

```java
int[] arr = new int[list.size()];
for (int i = 0; i < list.size(); i++) {
    arr[i] = list.get(i);
}
```

### Filter Elements

```java
public static ArrayList<Integer> getEvens(ArrayList<Integer> list) {
    ArrayList<Integer> evens = new ArrayList<>();
    for (int num : list) {
        if (num % 2 == 0) {
            evens.add(num);
        }
    }
    return evens;
}
```

---

## 🔄 ArrayList vs. Array Example

### Array Version

```java
String[] names = new String[3];
names[0] = "Alice";
names[1] = "Bob";
names[2] = "Charlie";

for (int i = 0; i < names.length; i++) {
    System.out.println(names[i]);
}
```

### ArrayList Version

```java
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

for (int i = 0; i < names.size(); i++) {
    System.out.println(names.get(i));
}
```

---

## 🎭 ArrayList of Objects

### Example: ArrayList of Students

```java
ArrayList<Student> students = new ArrayList<>();

students.add(new Student("Alice", 20));
students.add(new Student("Bob", 21));

for (Student s : students) {
    System.out.println(s.getName());
}
```

### Sorting Custom Objects

```java
// Assuming Student implements Comparable
Collections.sort(students);
```

---

## 📊 ArrayList Methods Summary

| Method | Description | Example |
|--------|-------------|---------|
| `add(E obj)` | Add to end | `list.add("A")` |
| `add(int, E)` | Insert at index | `list.add(0, "A")` |
| `remove(int)` | Remove by index | `list.remove(0)` |
| `remove(Object)` | Remove by value | `list.remove("A")` |
| `get(int)` | Access element | `list.get(0)` |
| `set(int, E)` | Replace element | `list.set(0, "X")` |
| `size()` | Number of elements | `list.size()` |
| `clear()` | Remove all | `list.clear()` |
| `isEmpty()` | Check if empty | `list.isEmpty()` |
| `contains(Object)` | Check if present | `list.contains("A")` |
| `indexOf(Object)` | Find first index | `list.indexOf("A")` |

---

## 🧮 Advanced Operations

### Reverse ArrayList

```java
for (int i = 0; i < list.size() / 2; i++) {
    E temp = list.get(i);
    int j = list.size() - 1 - i;
    list.set(i, list.get(j));
    list.set(j, temp);
}
```

### Remove Duplicates

```java
public static void removeDuplicates(ArrayList<Integer> list) {
    for (int i = 0; i < list.size(); i++) {
        for (int j = i + 1; j < list.size(); j++) {
            if (list.get(i).equals(list.get(j))) {
                list.remove(j);
                j--;
            }
        }
    }
}
```

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **ArrayList** | Resizable array implementation |
| **Generic** | Type parameter (<E>) |
| **add** | Insert element |
| **remove** | Delete element |
| **get** | Access element |
| **set** | Replace element |
| **size** | Number of elements |
| **Wrapper class** | Object version of primitive |
| **Autoboxing** | Automatic primitive to object |
| **Unboxing** | Automatic object to primitive |

---

## 🎯 AP Exam Strategies

### Common Question Types

| Type | Focus |
|------|-------|
| **Traverse** | Standard or enhanced for |
| **Add/remove** | Modify while iterating |
| **Algorithms** | Search, filter, etc. |
| **Array vs. ArrayList** | Syntax differences |

### Key Things to Remember

| Topic | Remember |
|-------|----------|
| **size()** | Method, needs parentheses |
| **get(i)** | Not `[]` |
| **Objects only** | Use wrappers for primitives |
| **Remove carefully** | Indices shift |

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| `list.length` | `list.size()` |
| `list[i]` | `list.get(i)` |
| `list[i] = x` | `list.set(i, x)` |
| Remove in enhanced for | Use standard for backwards |

### FRQ Tips

| Tip | Explanation |
|-----|-------------|
| **size() vs. length** | ArrayList vs. Array |
| **Check bounds** | 0 to size()-1 |
| **Remove backwards** | Avoid index issues |
| **Read carefully** | Array or ArrayList? |

---

## 🧩 Practice Problems

### Problem 1: Remove Negatives

```java
public static void removeNegatives(ArrayList<Integer> list) {
    for (int i = list.size() - 1; i >= 0; i--) {
        if (list.get(i) < 0) {
            list.remove(i);
        }
    }
}
```

### Problem 2: Find Longest String

```java
public static String findLongest(ArrayList<String> list) {
    String longest = list.get(0);
    for (String s : list) {
        if (s.length() > longest.length()) {
            longest = s;
        }
    }
    return longest;
}
```

### Problem 3: Merge Two Lists

```java
public static ArrayList<Integer> merge(
    ArrayList<Integer> list1, 
    ArrayList<Integer> list2) {
    
    ArrayList<Integer> result = new ArrayList<>();
    result.addAll(list1);
    result.addAll(list2);
    return result;
}
```

### Problem 4: Count Occurrences

```java
public static int countOccurrences(
    ArrayList<String> list, 
    String target) {
    
    int count = 0;
    for (String s : list) {
        if (s.equals(target)) {
            count++;
        }
    }
    return count;
}
```

### Problem 5: Insert in Order

```java
public static void insertInOrder(
    ArrayList<Integer> list, 
    int value) {
    
    int i = 0;
    while (i < list.size() && list.get(i) < value) {
        i++;
    }
    list.add(i, value);
}
```

---

## 🔄 ArrayList Efficiency

### Time Complexity

| Operation | Time |
|-----------|------|
| `get(i)` | O(1) |
| `set(i, x)` | O(1) |
| `add(x)` | O(1) average |
| `add(i, x)` | O(n) |
| `remove(i)` | O(n) |
| `contains(x)` | O(n) |

---

**Good luck on your AP Computer Science A exam! 🍀💻📈**

Remember: ArrayList uses `.size()` (method), not `.length`! Access with `.get(i)`, not `[i]`. Only objects allowed - use Integer, Double, etc. for primitives. When removing while traversing, go backwards to avoid index shifting issues!
