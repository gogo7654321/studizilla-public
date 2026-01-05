:::GUIDE:::
unit::=4
title::=📊 Unit 4: Functions Involving Parameters, Vectors, and Matrices
desc::=Master parametric equations, vectors, matrices, and advanced modeling techniques
diff::=Medium-Hard
time::=55 min
tags::=precalculus,parametric,vectors,matrices,modeling,conic-sections
content::=

# 📊 Unit 4: Functions Involving Parameters, Vectors, and Matrices

## 📋 Unit Overview

This unit explores advanced function concepts including parametric equations, vector operations, matrix fundamentals, and mathematical modeling. These topics bridge algebra and calculus while providing essential tools for physics, engineering, and computer graphics.

---

## 🎯 Learning Objectives

By the end of this unit, you will be able to:
- Write and interpret parametric equations
- Convert between parametric and rectangular forms
- Identify and graph conic sections
- Perform vector operations in two dimensions
- Apply dot product in geometric contexts
- Use matrices for data organization and transformations
- Model real-world phenomena with appropriate functions

---

# 📐 Section 1: Parametric Equations

## 1.1 Introduction to Parametric Equations

**Definition:** Parametric equations express coordinates as functions of an independent variable called a **parameter** (usually t).

### Standard Form
```
x = f(t)
y = g(t)
```

Where t is the parameter, often representing time.

### Why Use Parametric Equations?

| Advantage | Explanation |
|-----------|-------------|
| Motion description | Natural way to describe position over time |
| Multiple outputs | One input (t) produces (x, y) pairs |
| Direction | Shows which way curve is traced |
| Complex curves | Can represent curves impossible in y = f(x) form |

---

## 1.2 Graphing Parametric Equations

### Method: Create a Table of Values

**Example 1:** Graph x = t², y = t for -2 ≤ t ≤ 2

| t | x = t² | y = t | Point (x, y) |
|---|--------|-------|--------------|
| -2 | 4 | -2 | (4, -2) |
| -1 | 1 | -1 | (1, -1) |
| 0 | 0 | 0 | (0, 0) |
| 1 | 1 | 1 | (1, 1) |
| 2 | 4 | 2 | (4, 2) |

**Graph Description:**
```
    y
    ↑
  2 +        •
    |      ↗
  1 +    •
    |  ↗
  0 +•----→----→ x
    |  ↘
 -1 +    •
    |      ↘
 -2 +        •
    +--+--+--+--+
       0  1  2  3  4
```

**Key Observation:** Arrows indicate direction as t increases.

---

## 1.3 Eliminating the Parameter

To convert parametric to rectangular form, eliminate t:

### Method 1: Solve and Substitute

**Example 2:** Eliminate the parameter from x = t², y = t

**Solution:**
1. Solve y = t for t: → t = y
2. Substitute into x equation: x = (y)² = y²
3. **Rectangular form:** x = y² (parabola opening right)

---

### Method 2: Use Trigonometric Identities

**Example 3:** Eliminate the parameter from x = 3cos(t), y = 3sin(t)

**Solution:**
1. Solve for cos(t) and sin(t):
   - cos(t) = x/3
   - sin(t) = y/3

2. Use identity sin²(t) + cos²(t) = 1:
   - (y/3)² + (x/3)² = 1
   - x²/9 + y²/9 = 1

3. **Rectangular form:** x² + y² = 9 (circle, radius 3)

---

### Common Parametric-to-Rectangular Conversions

| Parametric Form | Rectangular Form | Curve |
|-----------------|------------------|-------|
| x = t, y = t² | y = x² | Parabola |
| x = cos(t), y = sin(t) | x² + y² = 1 | Circle |
| x = a·cos(t), y = b·sin(t) | x²/a² + y²/b² = 1 | Ellipse |
| x = sec(t), y = tan(t) | x² - y² = 1 | Hyperbola |
| x = t, y = mt + b | y = mx + b | Line |

---

## 1.4 Writing Parametric Equations

### From Rectangular Equations

**Example 4:** Write parametric equations for y = x² - 4

**Solution 1:** Let x = t
- x = t
- y = t² - 4

**Solution 2:** Let x = 2t (alternative parametrization)
- x = 2t
- y = (2t)² - 4 = 4t² - 4

---

### For Lines

**Line through (x₁, y₁) with direction vector ⟨a, b⟩:**
```
x = x₁ + at
y = y₁ + bt
```

**Example 5:** Parametric equations for line through (2, -1) with slope 3

**Solution:**
- Slope 3 means direction vector ⟨1, 3⟩
- x = 2 + t
- y = -1 + 3t

---

## 1.5 Motion Problems with Parametric Equations

### Projectile Motion Equations

For an object launched at angle θ with initial velocity v₀:

```
x(t) = v₀·cos(θ)·t + x₀
y(t) = -½gt² + v₀·sin(θ)·t + y₀
```

Where:
- g = 32 ft/s² or 9.8 m/s² (gravity)
- x₀, y₀ = initial position
- v₀ = initial velocity

**Example 6:** A ball is thrown from ground level at 64 ft/s at 45°. Find parametric equations.

**Solution:**
- x(t) = 64·cos(45°)·t = 64·(√2/2)·t = 32√2·t
- y(t) = -16t² + 64·sin(45°)·t = -16t² + 32√2·t

---

# 🔵 Section 2: Conic Sections

## 2.1 Overview of Conic Sections

Conic sections are curves formed by intersecting a plane with a double cone.

```
          ∧
         /|\
        / | \
       /  |  \    ← Circle (horizontal cut)
      /---|---\
     /    |    \  ← Ellipse (angled cut)
    /     |     \
   /      |      \ ← Parabola (parallel to edge)
  /_______|_______\
          |
          |        ← Hyperbola (vertical cut)
         ∨
```

---

## 2.2 The Parabola

### Standard Forms

| Form | Equation | Opens | Focus | Directrix |
|------|----------|-------|-------|-----------|
| Vertical (up) | x² = 4py | Up | (0, p) | y = -p |
| Vertical (down) | x² = -4py | Down | (0, -p) | y = p |
| Horizontal (right) | y² = 4px | Right | (p, 0) | x = -p |
| Horizontal (left) | y² = -4px | Left | (-p, 0) | x = p |

### Key Components
- **Vertex:** The turning point (at origin for standard forms)
- **Focus:** Point where reflected rays converge
- **Directrix:** Line equidistant from focus
- **Axis of symmetry:** Line through vertex and focus
- **p:** Distance from vertex to focus

---

### Shifted Parabolas

**Vertex at (h, k):**

| Opens | Equation |
|-------|----------|
| Up | (x - h)² = 4p(y - k) |
| Down | (x - h)² = -4p(y - k) |
| Right | (y - k)² = 4p(x - h) |
| Left | (y - k)² = -4p(x - h) |

**Example 7:** Find the focus and directrix of (x - 2)² = 8(y + 1)

**Solution:**
- Vertex: (2, -1)
- 4p = 8 → p = 2
- Opens up (positive coefficient)
- Focus: (2, -1 + 2) = (2, 1)
- Directrix: y = -1 - 2 = -3

---

## 2.3 The Ellipse

### Standard Forms (Center at Origin)

**Horizontal Major Axis:** (a > b)
```
x²/a² + y²/b² = 1
```

**Vertical Major Axis:** (a > b)
```
x²/b² + y²/a² = 1
```

### Key Components

| Element | Formula |
|---------|---------|
| Semi-major axis | a |
| Semi-minor axis | b |
| Foci distance from center | c = √(a² - b²) |
| Vertices (horizontal) | (±a, 0) |
| Vertices (vertical) | (0, ±a) |
| Co-vertices | (0, ±b) or (±b, 0) |

### Relationship
```
a² = b² + c²
```

---

### Ellipse Diagram

```
                 (0, b)
                   •
                 ╱   ╲
               ╱       ╲
    (-a, 0) •───•───────•───• (a, 0)
             (-c,0)  (c,0)
               ╲       ╱
                 ╲   ╱
                   •
                (0, -b)
```

**Example 8:** For the ellipse x²/25 + y²/16 = 1, find all key features.

**Solution:**
- a² = 25 → a = 5 (larger denominator)
- b² = 16 → b = 4
- c = √(25 - 16) = √9 = 3
- Horizontal major axis
- Vertices: (±5, 0)
- Co-vertices: (0, ±4)
- Foci: (±3, 0)

---

### Shifted Ellipse

**Center at (h, k):**
```
(x - h)²/a² + (y - k)²/b² = 1
```

---

## 2.4 The Hyperbola

### Standard Forms (Center at Origin)

**Horizontal Transverse Axis:**
```
x²/a² - y²/b² = 1
```
Opens left and right

**Vertical Transverse Axis:**
```
y²/a² - x²/b² = 1
```
Opens up and down

### Key Components

| Element | Horizontal | Vertical |
|---------|------------|----------|
| Vertices | (±a, 0) | (0, ±a) |
| Foci | (±c, 0) | (0, ±c) |
| Asymptotes | y = ±(b/a)x | y = ±(a/b)x |

### Relationship
```
c² = a² + b²
```

---

### Hyperbola Diagram

```
           \        /
            \      /
     --------•----•--------
           /   ╲
          /     ╲
   •     /       \     •
(-c,0)  (-a,0)  (a,0) (c,0)
          \       /
           \     /
     --------•----•--------
            /      \
           /        \
```

**Example 9:** For x²/9 - y²/16 = 1, find vertices, foci, and asymptotes.

**Solution:**
- a² = 9 → a = 3
- b² = 16 → b = 4
- c = √(9 + 16) = √25 = 5
- Horizontal transverse axis
- Vertices: (±3, 0)
- Foci: (±5, 0)
- Asymptotes: y = ±(4/3)x

---

## 2.5 Identifying Conic Sections

### General Second-Degree Equation
```
Ax² + Bxy + Cy² + Dx + Ey + F = 0
```

### Classification (when B = 0)

| Condition | Conic Type |
|-----------|------------|
| A = C (same sign, non-zero) | Circle |
| A ≠ C (same sign) | Ellipse |
| A = 0 or C = 0 (not both) | Parabola |
| A and C opposite signs | Hyperbola |

**Example 10:** Identify: 4x² + 9y² - 16x + 18y - 11 = 0

**Solution:**
- A = 4, C = 9 (both positive, A ≠ C)
- This is an **ellipse**

---

## 2.6 Parametric Equations for Conics

| Conic | Parametric Form |
|-------|-----------------|
| Circle (r) | x = r·cos(t), y = r·sin(t) |
| Ellipse | x = a·cos(t), y = b·sin(t) |
| Parabola | x = t, y = t² (or variations) |
| Hyperbola | x = a·sec(t), y = b·tan(t) |

---

# ➡️ Section 3: Vectors in Two Dimensions

## 3.1 Introduction to Vectors

### Scalar vs. Vector

| Scalar | Vector |
|--------|--------|
| Magnitude only | Magnitude AND direction |
| Examples: speed, temperature | Examples: velocity, force |
| Written: 5, -3.2 | Written: **v**, ⟨3, 4⟩ |

### Vector Notation

- **Bold:** **v**
- **Arrow:** v⃗
- **Component form:** ⟨a, b⟩ or ⟨vₓ, vᵧ⟩
- **Unit vector form:** aî + bĵ

---

## 3.2 Vector Components

### From Initial and Terminal Points

Vector from A(x₁, y₁) to B(x₂, y₂):
```
AB⃗ = ⟨x₂ - x₁, y₂ - y₁⟩
```

**Example 11:** Find the vector from P(2, -3) to Q(5, 1)

**Solution:**
```
PQ⃗ = ⟨5 - 2, 1 - (-3)⟩ = ⟨3, 4⟩
```

---

### Magnitude (Length) of a Vector

For **v** = ⟨a, b⟩:
```
|v| = √(a² + b²)
```

**Example 12:** Find |⟨3, 4⟩|

**Solution:**
```
|⟨3, 4⟩| = √(3² + 4²) = √(9 + 16) = √25 = 5
```

---

### Direction Angle

The angle θ a vector makes with the positive x-axis:
```
θ = tan⁻¹(b/a)
```

**Note:** Adjust for quadrant!

```
            90°
             ↑
             |
    II       |       I
             |
  180° ←----+----→ 0°
             |
    III      |      IV
             |
             ↓
           270°
```

**Example 13:** Find the direction angle of ⟨-3, 3⟩

**Solution:**
- tan⁻¹(3/-3) = tan⁻¹(-1) = -45°
- Vector is in Quadrant II
- Direction angle: 180° - 45° = 135°

---

## 3.3 Vector Operations

### Vector Addition

**Component Method:**
```
⟨a, b⟩ + ⟨c, d⟩ = ⟨a + c, b + d⟩
```

**Example 14:** ⟨2, 5⟩ + ⟨-1, 3⟩ = ⟨2 + (-1), 5 + 3⟩ = ⟨1, 8⟩

### Graphical Method: Head-to-Tail

```
        →  →    →
        u + v = u + v
                ↗
               / 
        →    /   →
        v   /    v
           /
    →→→→→→/
         u
```

---

### Scalar Multiplication

```
k⟨a, b⟩ = ⟨ka, kb⟩
```

- If k > 0: same direction, scaled magnitude
- If k < 0: opposite direction, scaled magnitude
- If |k| > 1: stretches
- If |k| < 1: compresses

**Example 15:** 3⟨2, -1⟩ = ⟨6, -3⟩

---

### Vector Subtraction

```
⟨a, b⟩ - ⟨c, d⟩ = ⟨a - c, b - d⟩
```

**Example 16:** ⟨5, 2⟩ - ⟨3, 7⟩ = ⟨2, -5⟩

---

## 3.4 Unit Vectors

### Definition
A **unit vector** has magnitude 1.

### Standard Unit Vectors
- î = ⟨1, 0⟩ (x-direction)
- ĵ = ⟨0, 1⟩ (y-direction)

### Writing Vectors with Unit Vectors
```
⟨a, b⟩ = aî + bĵ
```

**Example 17:** ⟨3, -2⟩ = 3î - 2ĵ

---

### Finding a Unit Vector

To find the unit vector in the direction of **v**:
```
û = v/|v| = ⟨a/|v|, b/|v|⟩
```

**Example 18:** Find the unit vector in the direction of ⟨6, 8⟩

**Solution:**
1. |⟨6, 8⟩| = √(36 + 64) = √100 = 10
2. û = ⟨6/10, 8/10⟩ = ⟨0.6, 0.8⟩

---

## 3.5 The Dot Product

### Definition

For **u** = ⟨u₁, u₂⟩ and **v** = ⟨v₁, v₂⟩:
```
u · v = u₁v₁ + u₂v₂
```

**Note:** The dot product produces a SCALAR, not a vector!

**Example 19:** ⟨3, 4⟩ · ⟨2, -1⟩ = (3)(2) + (4)(-1) = 6 - 4 = 2

---

### Geometric Formula

```
u · v = |u| |v| cos(θ)
```

Where θ is the angle between the vectors.

### Finding the Angle Between Vectors

```
cos(θ) = (u · v)/(|u| |v|)
θ = cos⁻¹((u · v)/(|u| |v|))
```

**Example 20:** Find the angle between ⟨1, 0⟩ and ⟨1, 1⟩

**Solution:**
1. **u** · **v** = (1)(1) + (0)(1) = 1
2. |**u**| = 1, |**v**| = √2
3. cos(θ) = 1/(1 · √2) = 1/√2 = √2/2
4. θ = cos⁻¹(√2/2) = 45°

---

### Properties of Dot Product

| Property | Formula |
|----------|---------|
| Commutative | u · v = v · u |
| Distributive | u · (v + w) = u · v + u · w |
| Scalar multiplication | (ku) · v = k(u · v) |
| Self dot product | v · v = |v|² |

---

### Orthogonal (Perpendicular) Vectors

Two vectors are **orthogonal** if and only if:
```
u · v = 0
```

**Example 21:** Are ⟨2, 3⟩ and ⟨6, -4⟩ orthogonal?

**Solution:**
⟨2, 3⟩ · ⟨6, -4⟩ = (2)(6) + (3)(-4) = 12 - 12 = 0

**Yes, they are orthogonal!**

---

## 3.6 Vector Applications

### Resultant Force

When multiple forces act on an object, the **resultant** is their vector sum.

**Example 22:** Forces F₁ = ⟨30, 40⟩ N and F₂ = ⟨-10, 20⟩ N act on an object. Find the resultant.

**Solution:**
```
F_R = F₁ + F₂ = ⟨30 + (-10), 40 + 20⟩ = ⟨20, 60⟩ N
```

Magnitude: |F_R| = √(400 + 3600) = √4000 ≈ 63.2 N

---

### Navigation Problems

**Example 23:** A plane flies at 400 mph heading due north. Wind blows from west to east at 50 mph. Find the resultant velocity.

**Solution:**
- Plane velocity: ⟨0, 400⟩
- Wind velocity: ⟨50, 0⟩
- Resultant: ⟨50, 400⟩

Speed: √(2500 + 160000) = √162500 ≈ 403.1 mph

Direction: tan⁻¹(400/50) = tan⁻¹(8) ≈ 82.9° from east (or 7.1° east of north)

---

### Work

Work done by a force **F** moving an object along displacement **d**:
```
W = F · d = |F| |d| cos(θ)
```

**Example 24:** A force of ⟨10, 5⟩ N moves an object from (0, 0) to (4, 3). Find the work done.

**Solution:**
- Displacement: **d** = ⟨4, 3⟩
- Work = **F** · **d** = (10)(4) + (5)(3) = 40 + 15 = 55 J

---

# 📊 Section 4: Matrices (Introduction)

## 4.1 Matrix Basics

### Definition
A **matrix** is a rectangular array of numbers arranged in rows and columns.

### Notation and Dimensions

A matrix with m rows and n columns is an **m × n matrix**.

```
    ┌           ┐
A = │ a₁₁  a₁₂ │  ← Row 1
    │ a₂₁  a₂₂ │  ← Row 2
    └           ┘
      ↑     ↑
     Col1  Col2
```

This is a 2 × 2 matrix.

**Example 25:**
```
    ┌         ┐
B = │ 1  2  3 │
    │ 4  5  6 │
    └         ┘
```
B is a 2 × 3 matrix (2 rows, 3 columns)

---

## 4.2 Special Matrices

### Row Matrix
1 × n matrix (single row)
```
[ 3  -1  7 ]  ← 1 × 3
```

### Column Matrix
m × 1 matrix (single column)
```
┌   ┐
│ 2 │
│ 5 │  ← 3 × 1
│-1 │
└   ┘
```

### Square Matrix
n × n matrix (equal rows and columns)
```
┌       ┐
│ 1   2 │
│ 3   4 │  ← 2 × 2
└       ┘
```

### Zero Matrix
All entries are 0
```
┌       ┐
│ 0   0 │
│ 0   0 │
└       ┘
```

### Identity Matrix (I)
Square matrix with 1s on diagonal, 0s elsewhere
```
       ┌         ┐
I₃ =   │ 1  0  0 │
       │ 0  1  0 │
       │ 0  0  1 │
       └         ┘
```

---

## 4.3 Matrix Operations

### Matrix Addition

Add corresponding elements (matrices must have same dimensions).

```
┌       ┐   ┌       ┐   ┌         ┐
│ 1   2 │ + │ 5   0 │ = │ 6    2  │
│ 3   4 │   │-1   2 │   │ 2    6  │
└       ┘   └       ┘   └         ┘
```

### Scalar Multiplication

Multiply every element by the scalar.

```
    ┌       ┐   ┌        ┐
3 · │ 1   2 │ = │ 3    6 │
    │ 4  -1 │   │ 12  -3 │
    └       ┘   └        ┘
```

---

## 4.4 Matrix Multiplication

### Requirements
To multiply A × B:
- **Columns of A** must equal **rows of B**
- If A is m × n and B is n × p, result is m × p

### Method
Each entry is the dot product of a row from A with a column from B.

**Example 26:**
```
┌       ┐   ┌       ┐
│ 1   2 │ × │ 5   6 │
│ 3   4 │   │ 7   8 │
└       ┘   └       ┘
```

**Solution:**
- Entry (1,1): (1)(5) + (2)(7) = 5 + 14 = 19
- Entry (1,2): (1)(6) + (2)(8) = 6 + 16 = 22
- Entry (2,1): (3)(5) + (4)(7) = 15 + 28 = 43
- Entry (2,2): (3)(6) + (4)(8) = 18 + 32 = 50

```
      ┌         ┐
AB =  │ 19   22 │
      │ 43   50 │
      └         ┘
```

---

### Important Properties

| Property | True/False |
|----------|------------|
| AB = BA (Commutative) | ❌ FALSE in general |
| A(BC) = (AB)C (Associative) | ✅ TRUE |
| A(B + C) = AB + AC (Distributive) | ✅ TRUE |
| AI = IA = A (Identity) | ✅ TRUE |

---

## 4.5 Representing Vectors as Matrices

Vectors can be written as column matrices:

**v** = ⟨3, 4⟩ can be written as:
```
    ┌   ┐
v = │ 3 │
    │ 4 │
    └   ┘
```

This allows us to use matrix operations on vectors.

---

# 📈 Section 5: Modeling with Functions

## 5.1 Types of Function Models

### Linear Model: y = mx + b
- Constant rate of change
- Applications: cost, depreciation, simple motion

### Quadratic Model: y = ax² + bx + c
- Parabolic shape
- Applications: projectile motion, area optimization

### Exponential Model: y = a·bˣ
- Constant percentage change
- Applications: population growth, radioactive decay

### Logarithmic Model: y = a + b·ln(x)
- Inverse of exponential
- Applications: pH, sound intensity, earthquake magnitude

---

## 5.2 Choosing the Right Model

| Pattern in Data | Suggested Model |
|-----------------|-----------------|
| Constant differences | Linear |
| Constant second differences | Quadratic |
| Constant ratios | Exponential |
| Rapid initial growth, then slowing | Logarithmic |
| Periodic/cyclical | Trigonometric |

---

### Scatter Plot Analysis

**Linear Pattern:**
```
    •
      •
        •
          •
            •
```

**Quadratic Pattern:**
```
•       •
  •   •
    •
```

**Exponential Pattern:**
```
            •
          •
        •
      •
    •
•
```

---

## 5.3 Piecewise Functions

### Definition
A function defined by different formulas on different intervals.

### Notation
```
        ┌ f₁(x)  if condition 1
f(x) =  ├ f₂(x)  if condition 2
        └ f₃(x)  if condition 3
```

**Example 27:**
```
        ┌ x²       if x < 0
f(x) =  ├ 2x       if 0 ≤ x < 3
        └ 6        if x ≥ 3
```

---

### Evaluating Piecewise Functions

For the function above:

- f(-2) = (-2)² = 4 (using x² since -2 < 0)
- f(1) = 2(1) = 2 (using 2x since 0 ≤ 1 < 3)
- f(5) = 6 (using 6 since 5 ≥ 3)

---

### Common Piecewise Functions

**Absolute Value:**
```
        ┌ x    if x ≥ 0
|x| =   └ -x   if x < 0
```

**Step Function (Floor):**
```
⌊x⌋ = greatest integer ≤ x
```

**Example:** ⌊3.7⌋ = 3, ⌊-2.3⌋ = -3

---

## 5.4 Function Composition

### Definition
(f ∘ g)(x) = f(g(x))

**Read as:** "f of g of x" or "f composed with g"

### Process
1. Start with x
2. Apply g to get g(x)
3. Apply f to g(x)

**Example 28:** If f(x) = x² and g(x) = x + 3, find (f ∘ g)(2)

**Solution:**
1. g(2) = 2 + 3 = 5
2. f(g(2)) = f(5) = 5² = 25

**Answer:** (f ∘ g)(2) = 25

---

### Finding Composite Function Formula

**Example 29:** For f(x) = 2x - 1 and g(x) = x², find (f ∘ g)(x)

**Solution:**
(f ∘ g)(x) = f(g(x)) = f(x²) = 2(x²) - 1 = 2x² - 1

---

### Order Matters!

(f ∘ g)(x) ≠ (g ∘ f)(x) in general

Using f(x) = 2x - 1 and g(x) = x²:
- (f ∘ g)(x) = 2x² - 1
- (g ∘ f)(x) = (2x - 1)² = 4x² - 4x + 1

---

## 5.5 Inverse Functions

### Definition
f⁻¹ "undoes" what f does: f(f⁻¹(x)) = x and f⁻¹(f(x)) = x

### Graphical Relationship
The graph of f⁻¹ is the reflection of f over the line y = x.

```
       y = x
        ╱
    f  ╱  f⁻¹
      ╱
     ╱
    ╱
```

### Finding the Inverse

1. Replace f(x) with y
2. Swap x and y
3. Solve for y
4. Replace y with f⁻¹(x)

**Example 30:** Find the inverse of f(x) = 2x + 3

**Solution:**
1. y = 2x + 3
2. x = 2y + 3
3. x - 3 = 2y → y = (x - 3)/2
4. f⁻¹(x) = (x - 3)/2

---

### Verifying Inverses

Check: f(f⁻¹(x)) = x

f(f⁻¹(x)) = f((x-3)/2) = 2((x-3)/2) + 3 = (x - 3) + 3 = x ✓

---

# 📝 Section 6: Practice Problems

## Parametric Equations

**Problem 1:** Eliminate the parameter: x = 2t + 1, y = t² - 3

**Solution:**
- t = (x - 1)/2
- y = ((x-1)/2)² - 3 = (x² - 2x + 1)/4 - 3
- y = (x² - 2x + 1 - 12)/4 = (x² - 2x - 11)/4

---

**Problem 2:** Write parametric equations for y = 3x - 2

**Solution:**
- Let t = x
- x = t, y = 3t - 2

---

## Conic Sections

**Problem 3:** Identify and find key features: (x - 1)²/16 + (y + 2)²/9 = 1

**Solution:**
- Ellipse (both terms positive, different denominators)
- Center: (1, -2)
- a² = 16 → a = 4 (horizontal)
- b² = 9 → b = 3
- c = √(16 - 9) = √7
- Vertices: (1 ± 4, -2) = (-3, -2) and (5, -2)
- Foci: (1 ± √7, -2)

---

**Problem 4:** Find the equation of a parabola with vertex (0, 0) and focus (0, 3)

**Solution:**
- Opens up (focus above vertex)
- p = 3
- Form: x² = 4py
- **Equation: x² = 12y**

---

## Vectors

**Problem 5:** Given **u** = ⟨4, -3⟩ and **v** = ⟨2, 5⟩, find:
a) **u** + **v**
b) 2**u** - **v**
c) **u** · **v**
d) The angle between **u** and **v**

**Solutions:**
a) ⟨4 + 2, -3 + 5⟩ = ⟨6, 2⟩
b) 2⟨4, -3⟩ - ⟨2, 5⟩ = ⟨8, -6⟩ - ⟨2, 5⟩ = ⟨6, -11⟩
c) (4)(2) + (-3)(5) = 8 - 15 = -7
d) |**u**| = 5, |**v**| = √29
   cos(θ) = -7/(5√29) ≈ -0.26
   θ = cos⁻¹(-0.26) ≈ 105°

---

## Modeling

**Problem 6:** A car rental company charges $30 per day plus $0.15 per mile. Write a function for the cost C in terms of miles m for a d-day rental.

**Solution:**
C(m, d) = 30d + 0.15m

For a single-day rental:
C(m) = 30 + 0.15m

---

# 🎯 Quick Reference Card

## Conic Section Formulas

| Conic | Standard Form | c Relationship |
|-------|---------------|----------------|
| Circle | x² + y² = r² | N/A |
| Ellipse | x²/a² + y²/b² = 1 | c² = a² - b² |
| Hyperbola | x²/a² - y²/b² = 1 | c² = a² + b² |
| Parabola | x² = 4py | Focus at (0, p) |

## Vector Formulas

| Operation | Formula |
|-----------|---------|
| Magnitude | \|**v**\| = √(a² + b²) |
| Unit vector | **û** = **v**/\|**v**\| |
| Dot product | **u** · **v** = u₁v₁ + u₂v₂ |
| Angle | cos(θ) = (**u** · **v**)/(|**u**||**v**|) |
| Orthogonal test | **u** · **v** = 0 |

## Parametric to Rectangular

| Given | Use Identity |
|-------|--------------|
| sin(t), cos(t) | sin²t + cos²t = 1 |
| tan(t), sec(t) | sec²t - tan²t = 1 |
| Linear in t | Solve and substitute |

---

# ⚠️ Common Mistakes to Avoid

1. **Confusing a and b in ellipse/hyperbola**
   - For ellipse: a > b always
   - For hyperbola: a is under the positive term

2. **Forgetting direction in parametric curves**
   - Always indicate which way the curve is traced as t increases

3. **Dot product is a scalar**
   - Result is a number, NOT a vector

4. **Matrix multiplication order matters**
   - AB ≠ BA in general

5. **Inverse function notation**
   - f⁻¹(x) ≠ 1/f(x)

6. **Quadrant adjustment for direction angles**
   - Calculator gives reference angle; adjust for actual quadrant

---

# 🏆 AP Exam Tips

## For Free Response Questions

1. **Show all work** - Include formulas before substituting
2. **Label answers** - Clearly identify what you found
3. **Include units** - For application problems
4. **Check reasonableness** - Does your answer make sense?

## Calculator Skills to Master

- Graphing parametric equations
- Finding intersections
- Matrix operations
- Vector calculations
- Regression for modeling

## Time Management

- Spend about 10-12 minutes per free response question
- Don't get stuck on one part; move on and return

---

# 📊 Summary

## Key Takeaways

✅ **Parametric equations** describe curves using a parameter, often representing motion over time

✅ **Conic sections** (circles, ellipses, parabolas, hyperbolas) arise from slicing cones and have standard forms

✅ **Vectors** have both magnitude and direction; operations include addition, scalar multiplication, and dot product

✅ **Matrices** organize data in rectangular arrays; multiplication has specific rules

✅ **Function modeling** matches real-world situations to appropriate function types

✅ **Composition and inverses** are fundamental function operations that combine and reverse functions

---

## Connections to Other Units

| This Unit | Connects To |
|-----------|-------------|
| Parametric equations | Calculus: derivatives, arc length |
| Vectors | Physics: force, velocity, work |
| Matrices | Linear algebra, transformations |
| Modeling | Statistics, data analysis |
| Inverses | Logarithms and exponentials |

---

## What's Next?

After mastering this unit, you'll be prepared for:
- Calculus concepts involving parametric curves
- Physics applications of vectors
- Linear algebra and matrix theory
- Statistical modeling and regression
- 3D extensions of these concepts

---

:::GUIDE:::
