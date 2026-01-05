# AP Computer Science A Unit 9 Study Guide

:::GUIDE:::
unit::=Unit 9
title::=💻 Unit 9: Inheritance Complete Guide
desc::=Master inheritance, superclasses, subclasses, method overriding, and polymorphism in Java
diff::=Hard
time::=60 minutes
tags::=computer science, java, inheritance, polymorphism, OOP, superclass, subclass
content::=

# 💻 Unit 9: Inheritance

## 📋 Unit Overview

Inheritance creates class hierarchies! This unit covers extends, superclasses, subclasses, overriding, super, and polymorphism. Essential for object-oriented design! 🌳

### Essential Questions

| Question | Focus |
|----------|-------|
| What is inheritance? | Class relationships |
| What are superclass/subclass? | Parent and child |
| How does extends work? | Inheriting members |
| What is method overriding? | Replacing methods |
| What is polymorphism? | One interface, many forms |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Inheritance** | Subclass extends superclass |
| **Superclass** | Parent class |
| **Subclass** | Child class |
| **extends** | Keyword for inheritance |
| **Override** | Replace inherited method |
| **super** | Reference to superclass |
| **Polymorphism** | Object type vs. reference type |

---

## 📅 History of Inheritance in Programming

:::TIMELINE:::
id::=inheritance-history-timeline
title::=Evolution of Inheritance and Polymorphism
events::=[
  {"year": "1967", "event": "Simula 67 Introduces Inheritance", "detail": "First programming language with classes and subclasses; single inheritance model"},
  {"year": "1976", "event": "Smalltalk Refines OOP", "detail": "Pure OOP with message passing; everything inherits from Object; dynamic typing"},
  {"year": "1983", "event": "C++ Multiple Inheritance", "detail": "Allows class to inherit from multiple parents; creates 'diamond problem'"},
  {"year": "1988", "event": "Mixin Pattern Emerges", "detail": "Technique to add functionality without inheritance chains; influences traits"},
  {"year": "1995", "event": "Java Single Inheritance", "detail": "Single class inheritance + interfaces; avoids C++ diamond problem"},
  {"year": "1996", "event": "Favor Composition over Inheritance", "detail": "GoF Design Patterns book promotes composition; flexible alternative"},
  {"year": "2014", "event": "Java 8 Default Methods", "detail": "Interfaces can have implementations; solves some multiple inheritance needs"},
  {"year": "2016", "event": "Swift Protocol Extensions", "detail": "Protocol-oriented programming; composition alternative to inheritance"}
]
:::/TIMELINE:::

---

## 🌳 Inheritance Basics

### What is Inheritance?

| Concept | Description |
|---------|-------------|
| **Inheritance** | Subclass acquires superclass members |
| **Code reuse** | Don't repeat code |
| **IS-A relationship** | Dog IS-A Animal |

### extends Keyword

```java
public class Subclass extends Superclass {
    // Subclass code
}
```

### Example

```java
public class Animal {
    private String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    public void bark() {
        System.out.println("Woof!");
    }
}
```

| Class | Has |
|-------|-----|
| **Dog** | name, eat(), bark() |
| **Animal** | name, eat() |

### 🎮 Interactive Demo: Inheritance and Polymorphism

:::CODE:::
id::=inheritance-polymorphism-demo
title::=Complete Inheritance Example with Polymorphism
language::=java
runnable::=true
code::=
// SUPERCLASS (Parent)
class Animal {
    private String name;
    
    public Animal(String name) {
        this.name = name;
        System.out.println("Animal constructor called for: " + name);
    }
    
    public String getName() {
        return name;
    }
    
    public void eat() {
        System.out.println(name + " is eating.");
    }
    
    public void speak() {
        System.out.println(name + " makes a sound.");
    }
}

// SUBCLASS (Child) - inherits from Animal
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name);  // MUST call superclass constructor first!
        this.breed = breed;
        System.out.println("Dog constructor called for: " + name);
    }
    
    public String getBreed() {
        return breed;
    }
    
    // OVERRIDE - replace superclass method
    @Override
    public void speak() {
        System.out.println(getName() + " barks: Woof! Woof!");
    }
    
    // NEW method only in Dog
    public void fetch() {
        System.out.println(getName() + " fetches the ball!");
    }
}

// Another SUBCLASS
class Cat extends Animal {
    public Cat(String name) {
        super(name);
        System.out.println("Cat constructor called for: " + name);
    }
    
    @Override
    public void speak() {
        System.out.println(getName() + " meows: Meow!");
    }
    
    public void scratch() {
        System.out.println(getName() + " scratches the furniture!");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        System.out.println("===== CREATING OBJECTS =====");
        Dog myDog = new Dog("Buddy", "Golden Retriever");
        System.out.println();
        Cat myCat = new Cat("Whiskers");
        
        System.out.println("\n===== INHERITED METHODS =====");
        myDog.eat();   // Inherited from Animal
        myCat.eat();   // Inherited from Animal
        
        System.out.println("\n===== OVERRIDDEN METHODS =====");
        myDog.speak(); // Uses Dog's version
        myCat.speak(); // Uses Cat's version
        
        System.out.println("\n===== SUBCLASS-SPECIFIC METHODS =====");
        myDog.fetch();    // Only Dog has this
        myCat.scratch();  // Only Cat has this
        
        System.out.println("\n===== POLYMORPHISM =====");
        System.out.println("Reference type vs Object type:");
        
        // Reference type: Animal, Object type: Dog
        Animal animal1 = new Dog("Rex", "German Shepherd");
        Animal animal2 = new Cat("Shadow");
        
        System.out.println("\n// Both reference type Animal, but different object types");
        animal1.speak();  // Calls Dog's speak()!
        animal2.speak();  // Calls Cat's speak()!
        
        animal1.eat();    // Calls Animal's eat() (not overridden)
        
        // animal1.fetch(); // ERROR! Animal reference can't see Dog methods
        System.out.println("\n// animal1.fetch() would NOT compile!");
        System.out.println("// Animal reference can only see Animal methods");
        
        System.out.println("\n===== POLYMORPHISM WITH ARRAY =====");
        Animal[] zoo = new Animal[3];
        zoo[0] = new Dog("Max", "Beagle");
        zoo[1] = new Cat("Luna");
        zoo[2] = new Dog("Charlie", "Poodle");
        
        System.out.println("\n// Loop through - each calls its OWN speak()!");
        for (Animal a : zoo) {
            a.speak();
        }
    }
}
expected_output::=
===== CREATING OBJECTS =====
Animal constructor called for: Buddy
Dog constructor called for: Buddy

Animal constructor called for: Whiskers
Cat constructor called for: Whiskers

===== INHERITED METHODS =====
Buddy is eating.
Whiskers is eating.

===== OVERRIDDEN METHODS =====
Buddy barks: Woof! Woof!
Whiskers meows: Meow!

===== SUBCLASS-SPECIFIC METHODS =====
Buddy fetches the ball!
Whiskers scratches the furniture!

===== POLYMORPHISM =====
Reference type vs Object type:
Animal constructor called for: Rex
Dog constructor called for: Rex
Animal constructor called for: Shadow
Cat constructor called for: Shadow

// Both reference type Animal, but different object types
Rex barks: Woof! Woof!
Shadow meows: Meow!
Rex is eating.

// animal1.fetch() would NOT compile!
// Animal reference can only see Animal methods

===== POLYMORPHISM WITH ARRAY =====
Animal constructor called for: Max
Dog constructor called for: Max
Animal constructor called for: Luna
Cat constructor called for: Luna
Animal constructor called for: Charlie
Dog constructor called for: Charlie

// Loop through - each calls its OWN speak()!
Max barks: Woof! Woof!
Luna meows: Meow!
Charlie barks: Woof! Woof!
:::/CODE:::

---

## 📊 Superclass and Subclass

### Terminology

| Term | Meaning |
|------|---------|
| **Superclass** | Parent class |
| **Subclass** | Child class |
| **Base class** | Superclass |
| **Derived class** | Subclass |

### What Subclass Inherits

| Inherited | Not Inherited |
|-----------|---------------|
| Public methods | Private fields (but can access via methods) |
| Protected members | Constructors |

### Inheritance Chain

```
Object
  ↑
Animal
  ↑
Dog
```

| Every class | Extends Object |
|-------------|----------------|

---

## 🏗️ Constructors in Inheritance

### super() Call

```java
public class Animal {
    private String name;
    
    public Animal(String name) {
        this.name = name;
    }
}

public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name);  // Call superclass constructor
        this.breed = breed;
    }
}
```

### Rules

| Rule | Description |
|------|-------------|
| **First statement** | super() must be first in constructor |
| **Implicit** | If not written, super() called automatically |
| **No default** | If superclass has no no-arg constructor, must call super() explicitly |

---

## 🔄 Method Overriding

### Definition

| Concept | Subclass replaces superclass method |
|---------|-------------------------------------|

### Example

```java
public class Animal {
    public void makeSound() {
        System.out.println("Some sound");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}
```

### @Override Annotation

| Purpose | Description |
|---------|-------------|
| **Optional** | But recommended |
| **Compiler check** | Verifies overriding |
| **Readability** | Clear intent |

### Overriding Rules

| Rule | Description |
|------|-------------|
| **Same signature** | Same name, parameters, return type |
| **Same or more accessible** | Can't reduce visibility |
| **Cannot override** | private, static, final methods |

---

## 🎯 super Keyword

### Uses

| Use | Description |
|-----|-------------|
| **super()** | Call superclass constructor |
| **super.method()** | Call superclass method |
| **super.field** | Access superclass field (rare) |

### Calling Superclass Method

```java
public class Dog extends Animal {
    @Override
    public void eat() {
        super.eat();  // Call Animal's eat()
        System.out.println("Dog is chewing");
    }
}
```

---

## 🎭 Polymorphism

### Definition

| Concept | One interface, many implementations |
|---------|-------------------------------------|

### Object vs. Reference Type

```java
Animal a = new Dog("Spot");
```

| Type | Value |
|------|-------|
| **Reference type** | Animal |
| **Object type** | Dog |

### Which Method?

| Rule | Use object type's method |
|------|-------------------------|

```java
Animal a = new Dog("Spot");
a.makeSound();  // Calls Dog's makeSound()
```

### Compile-Time vs. Run-Time

| Time | Checks |
|------|--------|
| **Compile-time** | Reference type |
| **Run-time** | Object type |

---

## 📐 Type Relationships

### Valid Assignments

```java
Dog d = new Dog("Spot");
Animal a = d;  // OK: Dog IS-A Animal
```

| Rule | Subclass object → Superclass reference |
|------|----------------------------------------|

### Invalid Assignment

```java
Animal a = new Animal("Generic");
Dog d = a;  // ERROR: Animal might not be Dog
```

### Casting

```java
Animal a = new Dog("Spot");
Dog d = (Dog) a;  // Cast to Dog
d.bark();  // Now can call Dog methods
```

| Warning | ClassCastException if wrong type |
|---------|----------------------------------|

---

## 🔍 instanceof Operator

### Checking Type

```java
if (a instanceof Dog) {
    Dog d = (Dog) a;
    d.bark();
}
```

| Returns | true if object is instance of type |
|---------|-------------------------------------|

---

## 📊 Method Overriding vs. Overloading

### Comparison

| Feature | Overriding | Overloading |
|---------|------------|-------------|
| **Same class?** | No (subclass) | Yes |
| **Same signature?** | Yes | No |
| **Inheritance?** | Yes | No |
| **Polymorphism?** | Yes | No |

### Example: Overriding

```java
class Animal {
    public void eat() { }
}
class Dog extends Animal {
    public void eat() { }  // Override
}
```

### Example: Overloading

```java
class Calculator {
    public int add(int a, int b) { }
    public double add(double a, double b) { }  // Overload
}
```

---

## 🎯 Abstract Classes

### Definition

| Concept | Cannot instantiate, can have abstract methods |
|---------|-----------------------------------------------|

### Syntax

```java
public abstract class Shape {
    public abstract double getArea();  // No body
    
    public void display() {
        System.out.println("Area: " + getArea());
    }
}

public class Circle extends Shape {
    private double radius;
    
    public Circle(double r) {
        radius = r;
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}
```

### Abstract Method Rules

| Rule | Description |
|------|-------------|
| **No body** | Just signature |
| **Must override** | In concrete subclass |
| **abstract keyword** | Required |

### Abstract Class Rules

| Rule | Description |
|------|-------------|
| **Cannot instantiate** | Cannot do `new Shape()` |
| **Can have concrete methods** | Regular methods allowed |
| **Subclass must override** | All abstract methods |

---

## 🔐 Access Modifiers in Inheritance

### Visibility

| Modifier | Same Class | Subclass | Package | World |
|----------|------------|----------|---------|-------|
| **private** | ✓ | ✗ | ✗ | ✗ |
| **(default)** | ✓ | ✗ | ✓ | ✗ |
| **protected** | ✓ | ✓ | ✓ | ✗ |
| **public** | ✓ | ✓ | ✓ | ✓ |

### protected

| Use | Accessible in subclass |
|-----|------------------------|

```java
public class Animal {
    protected String name;  // Subclass can access
}

public class Dog extends Animal {
    public void printName() {
        System.out.println(name);  // OK
    }
}
```

---

## 📝 Object Class

### Universal Superclass

| Class | Extends Object |
|-------|----------------|
| **All classes** | Directly or indirectly |

### Key Methods

| Method | Purpose |
|--------|---------|
| `toString()` | String representation |
| `equals(Object)` | Equality check |
| `hashCode()` | Hash value |

### Overriding toString()

```java
public class Dog {
    private String name;
    
    @Override
    public String toString() {
        return "Dog[name=" + name + "]";
    }
}
```

### Overriding equals()

```java
@Override
public boolean equals(Object obj) {
    if (obj instanceof Dog) {
        Dog other = (Dog) obj;
        return this.name.equals(other.name);
    }
    return false;
}
```

---

## 🎯 Inheritance Hierarchies

### Example Hierarchy

```
        Animal
       /      \
     Dog      Cat
    /   \
Poodle  Bulldog
```

### Code

```java
public class Animal { }
public class Dog extends Animal { }
public class Cat extends Animal { }
public class Poodle extends Dog { }
public class Bulldog extends Dog { }
```

---

## 📐 Design Considerations

### When to Use Inheritance

| Use | When IS-A relationship |
|-----|------------------------|

| Good | Dog IS-A Animal |
|------|-----------------|
| **Bad** | Car HAS-A Engine (composition) |

### Composition vs. Inheritance

| Relationship | Use |
|--------------|-----|
| **IS-A** | Inheritance |
| **HAS-A** | Composition |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Inheritance** | Subclass acquires superclass features |
| **Superclass** | Parent class |
| **Subclass** | Child class |
| **extends** | Keyword for inheritance |
| **Override** | Replace inherited method |
| **super** | Reference to superclass |
| **Polymorphism** | Many forms of one interface |
| **Reference type** | Variable's declared type |
| **Object type** | Actual type created with new |
| **Abstract class** | Cannot instantiate |
| **Abstract method** | No implementation |
| **protected** | Accessible in subclass |

---

## 🎯 AP Exam Strategies

### Common Question Types

| Type | Focus |
|------|-------|
| **Inheritance hierarchy** | Which methods available |
| **Method calls** | Which version runs |
| **Casting** | Valid/invalid |
| **Override vs. overload** | Distinguish |

### Key Things to Remember

| Topic | Remember |
|-------|----------|
| **super()** | Must be first in constructor |
| **Overriding** | Same signature |
| **Polymorphism** | Object type determines method |
| **Reference type** | Determines accessible methods |

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Forget super() | Call in constructor |
| Wrong signature | Match exactly for override |
| Assume reference type | Use object type |
| Invalid cast | Check with instanceof |

### FRQ Tips

| Tip | Explanation |
|-----|-------------|
| **Trace carefully** | Which version of method? |
| **Check types** | Reference vs. object |
| **Use @Override** | Shows intent |
| **Consider hierarchy** | What's inherited? |

---

## 🧩 Complete Example

```java
public abstract class Vehicle {
    protected String brand;
    
    public Vehicle(String brand) {
        this.brand = brand;
    }
    
    public abstract void start();
    
    public void stop() {
        System.out.println(brand + " stopped");
    }
}

public class Car extends Vehicle {
    private int doors;
    
    public Car(String brand, int doors) {
        super(brand);
        this.doors = doors;
    }
    
    @Override
    public void start() {
        System.out.println("Car starting with key");
    }
    
    public void honk() {
        System.out.println("Beep beep!");
    }
}

public class ElectricCar extends Car {
    private int batteryCapacity;
    
    public ElectricCar(String brand, int doors, int battery) {
        super(brand, doors);
        this.batteryCapacity = battery;
    }
    
    @Override
    public void start() {
        System.out.println("Electric car starting silently");
    }
    
    public void charge() {
        System.out.println("Charging battery");
    }
}

// Usage
Vehicle v = new ElectricCar("Tesla", 4, 100);
v.start();  // "Electric car starting silently"
v.stop();   // "Tesla stopped"
// v.charge();  // ERROR: charge() not in Vehicle
```

---

**Good luck on your AP Computer Science A exam! 🍀💻🌳**

Remember: Subclass IS-A Superclass. Use extends for inheritance. super() must be first in constructor. @Override ensures correct overriding. Polymorphism: object type determines which method runs, but reference type determines which methods are accessible!
