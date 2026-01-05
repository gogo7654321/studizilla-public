# AP Computer Science A Unit 5 Study Guide

:::GUIDE:::
unit::=Unit 5
title::=💻 Unit 5: Writing Classes Complete Guide
desc::=Master class design, constructors, methods, encapsulation, instance variables, and object-oriented programming
diff::=Hard
time::=60 minutes
tags::=computer science, java, classes, objects, OOP, encapsulation, methods
content::=

# 💻 Unit 5: Writing Classes

## 📋 Unit Overview

Creating your own classes! This unit covers class design, constructors, methods, instance variables, and encapsulation. This is the heart of object-oriented programming! 🏗️

### Essential Questions

| Question | Focus |
|----------|-------|
| What is a class? | Blueprint for objects |
| What are instance variables? | Object state |
| What are methods? | Object behavior |
| What are constructors? | Object initialization |
| What is encapsulation? | Data hiding |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Class** | Blueprint for objects |
| **Object** | Instance of class |
| **Instance variable** | Object's data |
| **Method** | Object's behavior |
| **Constructor** | Creates new object |
| **Encapsulation** | Private data, public methods |

---

## 📅 History of Object-Oriented Programming

:::TIMELINE:::
id::=oop-history-timeline
title::=Evolution of Object-Oriented Programming
events::=[
  {"year": "1960", "event": "Simula Development Begins", "detail": "Ole-Johan Dahl and Kristen Nygaard at Norwegian Computing Center begin work on simulation language"},
  {"year": "1967", "event": "Simula 67 Released", "detail": "First language with classes, objects, inheritance, and polymorphism - the birth of OOP"},
  {"year": "1972", "event": "Smalltalk-72 at Xerox PARC", "detail": "Alan Kay coins 'object-oriented'; everything is an object, message passing paradigm"},
  {"year": "1979", "event": "C with Classes", "detail": "Bjarne Stroustrup begins adding OOP features to C; would become C++"},
  {"year": "1983", "event": "C++ Named", "detail": "C with Classes renamed C++; adds classes, inheritance, virtual functions"},
  {"year": "1986", "event": "Objective-C Published", "detail": "Brad Cox adds Smalltalk messaging to C; later adopted by NeXT and Apple"},
  {"year": "1991", "event": "Java Development Begins", "detail": "James Gosling starts 'Oak' project at Sun Microsystems for embedded systems"},
  {"year": "1995", "event": "Java 1.0 Released", "detail": "Designed for internet; 'Write Once, Run Anywhere'; pure OOP (mostly)"},
  {"year": "1995", "event": "Design Patterns Book", "detail": "Gang of Four publishes influential patterns catalog; shapes OOP architecture"},
  {"year": "2000", "event": "C# Released", "detail": "Microsoft's answer to Java; Anders Hejlsberg designs modern OOP language"},
  {"year": "2004", "event": "Java 5 Generics", "detail": "Type-safe collections; Java matures with autoboxing, enhanced for loop"},
  {"year": "2014", "event": "Java 8 Lambdas", "detail": "Functional programming meets OOP; streams and lambda expressions added"}
]
:::/TIMELINE:::

---

## 🏗️ Anatomy of a Class

### Basic Class Structure

```java
public class ClassName {
    // Instance variables (fields)
    private int field1;
    private String field2;
    
    // Constructor
    public ClassName(int f1, String f2) {
        field1 = f1;
        field2 = f2;
    }
    
    // Methods
    public int getField1() {
        return field1;
    }
    
    public void setField1(int newValue) {
        field1 = newValue;
    }
}
```

### Class Components

| Component | Purpose |
|-----------|---------|
| **Class header** | `public class ClassName` |
| **Instance variables** | Object's state/data |
| **Constructor** | Initialize new object |
| **Methods** | Object's behaviors |

---

## 📦 Instance Variables

### Declaration

```java
public class Student {
    private String name;
    private int age;
    private double gpa;
}
```

| Modifier | Meaning |
|----------|---------|
| `private` | Only accessible within class |
| `public` | Accessible from anywhere |

### Why Private?

| Reason | Benefit |
|--------|---------|
| **Encapsulation** | Hide implementation details |
| **Control** | Validate before changing |
| **Flexibility** | Change implementation later |

### Scope

| Variable | Scope |
|----------|-------|
| **Instance variable** | Entire class |
| **Parameter** | Method only |
| **Local variable** | Block only |

---

## 🏭 Constructors

### Constructor Purpose

| Purpose | Description |
|---------|-------------|
| **Create object** | Allocate memory |
| **Initialize** | Set initial values |
| **Same name** | As class name |
| **No return type** | Not even void |

### Constructor Example

```java
public class Rectangle {
    private int width;
    private int height;
    
    // Constructor
    public Rectangle(int w, int h) {
        width = w;
        height = h;
    }
}
```

### Using Constructor

```java
Rectangle r = new Rectangle(10, 5);
```

| Component | Meaning |
|-----------|---------|
| `Rectangle` | Type |
| `r` | Variable name |
| `new` | Create new object |
| `Rectangle(10, 5)` | Call constructor |

### 🎮 Interactive Demo: Building Your First Class

:::CODE:::
id::=writing-class-demo
title::=Building a Complete Class from Scratch
language::=java
runnable::=true
code::=
// A complete class demonstrating all key concepts
class BankAccount {
    // 1. INSTANCE VARIABLES (private for encapsulation)
    private String ownerName;
    private double balance;
    private int accountNumber;
    private static int nextAccountNumber = 1000; // Shared across all accounts
    
    // 2. CONSTRUCTOR - initializes the object
    public BankAccount(String name, double initialDeposit) {
        ownerName = name;
        balance = initialDeposit;
        accountNumber = nextAccountNumber;
        nextAccountNumber++; // Each new account gets unique number
    }
    
    // 3. ACCESSOR METHODS (getters) - return private data
    public String getOwnerName() {
        return ownerName;
    }
    
    public double getBalance() {
        return balance;
    }
    
    public int getAccountNumber() {
        return accountNumber;
    }
    
    // 4. MUTATOR METHODS (setters/modifiers) - change data
    public void deposit(double amount) {
        if (amount > 0) {  // Validate input!
            balance += amount;
            System.out.println("Deposited $" + amount);
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew $" + amount);
            return true;  // Success
        }
        System.out.println("Withdrawal failed!");
        return false;  // Failure
    }
    
    // 5. HELPER METHOD - internal use
    private boolean hasSufficientFunds(double amount) {
        return balance >= amount;
    }
    
    // 6. toString METHOD - readable representation
    public String toString() {
        return "Account #" + accountNumber + " | " + ownerName + " | Balance: $" + balance;
    }
}

public class WritingClassDemo {
    public static void main(String[] args) {
        System.out.println("===== CREATING OBJECTS =====");
        
        // Create objects using constructor
        BankAccount alice = new BankAccount("Alice Smith", 500.00);
        BankAccount bob = new BankAccount("Bob Jones", 1000.00);
        
        System.out.println("Created: " + alice);
        System.out.println("Created: " + bob);
        
        System.out.println("\n===== USING ACCESSOR METHODS =====");
        System.out.println("Alice's balance: $" + alice.getBalance());
        System.out.println("Bob's account number: " + bob.getAccountNumber());
        
        System.out.println("\n===== USING MUTATOR METHODS =====");
        alice.deposit(250);
        System.out.println("Alice's new balance: $" + alice.getBalance());
        
        bob.withdraw(150);
        System.out.println("Bob's new balance: $" + bob.getBalance());
        
        // Try invalid withdrawal
        System.out.println("\nAttempting to withdraw $2000 from Bob's account:");
        bob.withdraw(2000);
        
        System.out.println("\n===== ENCAPSULATION IN ACTION =====");
        System.out.println("Cannot directly access: alice.balance");
        System.out.println("Must use: alice.getBalance() = $" + alice.getBalance());
        System.out.println("This protects data from invalid changes!");
        
        System.out.println("\n===== FINAL STATE =====");
        System.out.println(alice);
        System.out.println(bob);
    }
}
expected_output::=
===== CREATING OBJECTS =====
Created: Account #1000 | Alice Smith | Balance: $500.0
Created: Account #1001 | Bob Jones | Balance: $1000.0

===== USING ACCESSOR METHODS =====
Alice's balance: $500.0
Bob's account number: 1001

===== USING MUTATOR METHODS =====
Deposited $250.0
Alice's new balance: $750.0
Withdrew $150.0
Bob's new balance: $850.0

Attempting to withdraw $2000 from Bob's account:
Withdrawal failed!

===== ENCAPSULATION IN ACTION =====
Cannot directly access: alice.balance
Must use: alice.getBalance() = $750.0
This protects data from invalid changes!

===== FINAL STATE =====
Account #1000 | Alice Smith | Balance: $750.0
Account #1001 | Bob Jones | Balance: $850.0
:::/CODE:::

---

## 🔄 Default Constructor

### No Constructor Written

| If you write | Java provides |
|--------------|---------------|
| **No constructor** | Default (no-arg) constructor |
| **Any constructor** | No default |

### Example

```java
public class Point {
    private int x;
    private int y;
    // No constructor written
}

// Can use:
Point p = new Point();  // x=0, y=0
```

### Explicit Default Constructor

```java
public class Point {
    private int x;
    private int y;
    
    public Point() {
        x = 0;
        y = 0;
    }
}
```

---

## 🎯 Methods

### Method Structure

```java
public returnType methodName(parameters) {
    // Method body
    return value;  // If not void
}
```

| Component | Purpose |
|-----------|---------|
| **public/private** | Accessibility |
| **Return type** | Type of result (or void) |
| **Method name** | Identifier |
| **Parameters** | Inputs |
| **Body** | Code to execute |

### Method Example

```java
public class Circle {
    private double radius;
    
    public Circle(double r) {
        radius = r;
    }
    
    public double getArea() {
        return Math.PI * radius * radius;
    }
    
    public double getCircumference() {
        return 2 * Math.PI * radius;
    }
}
```

---

## 🔍 Accessor Methods (Getters)

### Purpose

| Name | Purpose |
|------|---------|
| **Accessor** | Return value of instance variable |
| **Getter** | Common name |
| **Read-only** | Doesn't change object |

### Example

```java
public class Student {
    private String name;
    
    public String getName() {
        return name;
    }
}
```

### Naming Convention

| Variable | Getter Method |
|----------|---------------|
| `name` | `getName()` |
| `age` | `getAge()` |
| `isActive` | `isActive()` (for boolean) |

---

## ✏️ Mutator Methods (Setters)

### Purpose

| Name | Purpose |
|------|---------|
| **Mutator** | Change value of instance variable |
| **Setter** | Common name |
| **Modify** | Changes object state |

### Example

```java
public class Student {
    private String name;
    
    public void setName(String newName) {
        name = newName;
    }
}
```

### With Validation

```java
public class Student {
    private int age;
    
    public void setAge(int newAge) {
        if (newAge >= 0 && newAge <= 120) {
            age = newAge;
        }
    }
}
```

---

## 🔐 Encapsulation

### Principle

| Concept | Description |
|---------|-------------|
| **Private data** | Instance variables private |
| **Public methods** | Getters and setters public |
| **Control** | Validate changes |
| **Flexibility** | Change implementation |

### Benefits

| Benefit | Explanation |
|---------|-------------|
| **Data hiding** | Can't access directly |
| **Validation** | Check values before setting |
| **Maintenance** | Easy to change implementation |
| **Security** | Prevent invalid states |

---

## 🎭 this Keyword

### Purpose

| Use | Description |
|-----|-------------|
| **Distinguish** | Parameter vs. instance variable |
| **Clarity** | Explicit reference |

### Example

```java
public class Point {
    private int x;
    private int y;
    
    public Point(int x, int y) {
        this.x = x;  // this.x is instance variable
        this.y = y;  // x is parameter
    }
}
```

### Without this

```java
public Point(int xVal, int yVal) {
    x = xVal;  // Different names
    y = yVal;
}
```

---

## 📊 Static vs. Instance

### Comparison

| Type | Belongs To | Keyword |
|------|------------|---------|
| **Instance** | Each object | None |
| **Static** | Class itself | `static` |

### Instance Members

```java
public class Counter {
    private int count;  // Each object has its own
    
    public void increment() {
        count++;
    }
}
```

### Static Members

```java
public class Math {
    public static final double PI = 3.14159;
    
    public static int abs(int x) {
        return x < 0 ? -x : x;
    }
}
```

| Access | Example |
|--------|---------|
| **Static** | `Math.abs(-5)` |
| **Instance** | `counter.increment()` |

---

## 🔒 Access Modifiers

### Levels

| Modifier | Access |
|----------|--------|
| `public` | Anywhere |
| `private` | Same class only |
| `protected` | (Not on AP exam) |
| (none) | (Not on AP exam) |

### Best Practices

| Type | Modifier |
|------|----------|
| **Instance variables** | `private` |
| **Constructors** | `public` |
| **Getters/setters** | `public` |
| **Helper methods** | `private` |

---

## 🎯 Method Overloading

### Definition

| Concept | Multiple methods, same name, different parameters |
|---------|---------------------------------------------------|

### Example

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}
```

### Overload Rules

| Must differ in | Examples |
|----------------|----------|
| **Number of parameters** | `(int)` vs `(int, int)` |
| **Type of parameters** | `(int)` vs `(double)` |
| **Order of types** | `(int, double)` vs `(double, int)` |

### Not Overloading

| Invalid | Why |
|---------|-----|
| Different return type only | Not enough |
| Different parameter names | Not enough |

---

## 📐 Constructor Overloading

### Multiple Constructors

```java
public class Rectangle {
    private int width;
    private int height;
    
    // Default: square 1x1
    public Rectangle() {
        width = 1;
        height = 1;
    }
    
    // Square
    public Rectangle(int side) {
        width = side;
        height = side;
    }
    
    // Rectangle
    public Rectangle(int w, int h) {
        width = w;
        height = h;
    }
}
```

### Usage

```java
Rectangle r1 = new Rectangle();       // 1x1
Rectangle r2 = new Rectangle(5);      // 5x5
Rectangle r3 = new Rectangle(3, 7);   // 3x7
```

---

## 🔄 Method Return Types

### void Methods

```java
public void printInfo() {
    System.out.println("Name: " + name);
    // No return statement
}
```

### Returning Values

```java
public int getAge() {
    return age;
}
```

### Multiple Returns

```java
public String getGrade(int score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else {
        return "F";
    }
}
```

---

## 🧪 Testing Classes

### Driver Class

```java
public class StudentTester {
    public static void main(String[] args) {
        Student s = new Student("Alice", 20);
        System.out.println(s.getName());  // Alice
        System.out.println(s.getAge());   // 20
        
        s.setAge(21);
        System.out.println(s.getAge());   // 21
    }
}
```

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Class** | Blueprint for creating objects |
| **Object** | Instance of a class |
| **Instance variable** | Variable belonging to each object |
| **Method** | Function defined in a class |
| **Constructor** | Special method to create objects |
| **Encapsulation** | Hiding data, exposing methods |
| **Accessor** | Getter method (returns value) |
| **Mutator** | Setter method (changes value) |
| **this** | Reference to current object |
| **static** | Belongs to class, not object |
| **Overloading** | Same name, different parameters |

---

## 🎯 AP Exam Strategies

### Common Question Types

| Type | Focus |
|------|-------|
| **Write constructor** | Initialize instance variables |
| **Write getter/setter** | Access and modify data |
| **Trace code** | Follow object state changes |
| **Fix errors** | Missing initialization, access |

### Key Things to Remember

| Topic | Remember |
|-------|----------|
| **Constructor** | Same name as class, no return type |
| **this** | Distinguish parameter from field |
| **private** | Instance variables should be private |
| **return** | Match method return type |

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Return type on constructor | Remove it |
| Public instance variables | Make private |
| Forgetting return | Add return statement |
| Wrong type returned | Match method signature |

### FRQ Tips

| Tip | Explanation |
|-----|-------------|
| **Use this** | When parameter names match fields |
| **Validate input** | In setters |
| **Complete methods** | Include all cases |
| **Follow conventions** | getName(), setName() |

---

## 🧩 Complete Example

```java
public class BankAccount {
    // Instance variables
    private String accountNumber;
    private double balance;
    
    // Constructor
    public BankAccount(String accNum, double initialBalance) {
        accountNumber = accNum;
        if (initialBalance >= 0) {
            balance = initialBalance;
        } else {
            balance = 0;
        }
    }
    
    // Overloaded constructor
    public BankAccount(String accNum) {
        accountNumber = accNum;
        balance = 0;
    }
    
    // Accessor methods
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public double getBalance() {
        return balance;
    }
    
    // Mutator methods
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
    
    // Other methods
    public void transfer(BankAccount other, double amount) {
        if (amount > 0 && amount <= balance) {
            this.withdraw(amount);
            other.deposit(amount);
        }
    }
}
```

---

**Good luck on your AP Computer Science A exam! 🍀💻🏗️**

Remember: Instance variables should be private! Constructors have the same name as the class and no return type. Use getters to access data and setters to modify it. The `this` keyword distinguishes parameters from instance variables!
