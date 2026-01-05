:::GUIDE:::
unit::=3
title::=📊 Unit 3: Trigonometric and Polar Functions
desc::=Master trig functions, identities, and polar coordinates
diff::=Medium-Hard
time::=60 min
tags::=precalculus,trigonometry,polar,unit-circle
content::=

# 📊 Unit 3: Trigonometric and Polar Functions

Master the essential concepts of trigonometry including the unit circle, trigonometric functions, identities, and polar coordinates. This unit forms the foundation for calculus and advanced mathematics.

---

## 📚 Table of Contents

1. [The Unit Circle](#the-unit-circle)
2. [Trigonometric Function Definitions](#trigonometric-function-definitions)
3. [Graphs of Trigonometric Functions](#graphs-of-trigonometric-functions)
4. [Transformations of Trig Functions](#transformations-of-trig-functions)
5. [Inverse Trigonometric Functions](#inverse-trigonometric-functions)
6. [Trigonometric Identities](#trigonometric-identities)
7. [Solving Trigonometric Equations](#solving-trigonometric-equations)
8. [Polar Coordinates](#polar-coordinates)
9. [Polar Curves](#polar-curves)
10. [Practice Problems](#practice-problems)

---

## 🔵 The Unit Circle

### Definition and Fundamentals

The **unit circle** is a circle with radius 1 centered at the origin (0, 0) in the coordinate plane.

**Equation:** x² + y² = 1

For any angle θ measured from the positive x-axis:
- The x-coordinate equals **cos(θ)**
- The y-coordinate equals **sin(θ)**

### Unit Circle Diagram

```
                    90° (π/2)
                    (0, 1)
                       |
         120° ●        |        ● 60°
      (2π/3)    \      |      /    (π/3)
                  \    |    /
        135° ●     \   |   /     ● 45°
       (3π/4)       \  |  /       (π/4)
                     \ | /
          150° ●------●●●------● 30°
         (5π/6)       /|\       (π/6)
                     / | \
  180° ●------------●--+--●------------● 0° / 360°
  (π)   (-1,0)      |  |  |     (1,0)    (2π)
                     \ | /
          210° ●------●●●------● 330°
         (7π/6)       \|/       (11π/6)
                     / | \
        225° ●     /   |   \     ● 315°
       (5π/4)   /      |      \   (7π/4)
              /        |        \
         240° ●        |        ● 300°
      (4π/3)           |           (5π/3)
                       |
                    270° (3π/2)
                    (0, -1)
```

### Special Angles Reference Table

| Degrees | Radians | sin(θ) | cos(θ) | tan(θ) | Coordinates |
|---------|---------|--------|--------|--------|-------------|
| 0° | 0 | 0 | 1 | 0 | (1, 0) |
| 30° | π/6 | 1/2 | √3/2 | √3/3 | (√3/2, 1/2) |
| 45° | π/4 | √2/2 | √2/2 | 1 | (√2/2, √2/2) |
| 60° | π/3 | √3/2 | 1/2 | √3 | (1/2, √3/2) |
| 90° | π/2 | 1 | 0 | undefined | (0, 1) |
| 120° | 2π/3 | √3/2 | -1/2 | -√3 | (-1/2, √3/2) |
| 135° | 3π/4 | √2/2 | -√2/2 | -1 | (-√2/2, √2/2) |
| 150° | 5π/6 | 1/2 | -√3/2 | -√3/3 | (-√3/2, 1/2) |
| 180° | π | 0 | -1 | 0 | (-1, 0) |
| 210° | 7π/6 | -1/2 | -√3/2 | √3/3 | (-√3/2, -1/2) |
| 225° | 5π/4 | -√2/2 | -√2/2 | 1 | (-√2/2, -√2/2) |
| 240° | 4π/3 | -√3/2 | -1/2 | √3 | (-1/2, -√3/2) |
| 270° | 3π/2 | -1 | 0 | undefined | (0, -1) |
| 300° | 5π/3 | -√3/2 | 1/2 | -√3 | (1/2, -√3/2) |
| 315° | 7π/4 | -√2/2 | √2/2 | -1 | (√2/2, -√2/2) |
| 330° | 11π/6 | -1/2 | √3/2 | -√3/3 | (√3/2, -1/2) |
| 360° | 2π | 0 | 1 | 0 | (1, 0) |

### Memorization Techniques

**The Hand Trick:**
Hold your left hand palm up, fingers spread:
- Thumb = 0°, Index = 30°, Middle = 45°, Ring = 60°, Pinky = 90°
- Count fingers below the target finger: √(count)/2 = sin value
- Count fingers above the target finger: √(count)/2 = cos value

**Pattern Recognition:**
- Sine values for 0°, 30°, 45°, 60°, 90°: √0/2, √1/2, √2/2, √3/2, √4/2 = 0, 1/2, √2/2, √3/2, 1
- Cosine values are reversed: 1, √3/2, √2/2, 1/2, 0

### Quadrant Signs (ASTC Rule)

```
        Quadrant II    |    Quadrant I
        S (sin +)      |    A (all +)
        cos -, tan -   |    sin +, cos +, tan +
    -------------------+-------------------
        Quadrant III   |    Quadrant IV
        T (tan +)      |    C (cos +)
        sin -, cos -   |    sin -, tan -
```

**Memory Aid:** "All Students Take Calculus" or "All Silly Tom Cats"

### Reference Angles

A **reference angle** is the acute angle formed between the terminal side and the x-axis.

**Finding Reference Angles:**
- Quadrant I: θ' = θ
- Quadrant II: θ' = π - θ (or 180° - θ)
- Quadrant III: θ' = θ - π (or θ - 180°)
- Quadrant IV: θ' = 2π - θ (or 360° - θ)

**Example:** Find the reference angle for 225°
- 225° is in Quadrant III
- Reference angle = 225° - 180° = 45°

---

## 📐 Trigonometric Function Definitions

### Right Triangle Definitions

For a right triangle with angle θ, opposite side (opp), adjacent side (adj), and hypotenuse (hyp):

| Function | Ratio | Memory Aid |
|----------|-------|------------|
| sin(θ) | opp/hyp | **S**OH |
| cos(θ) | adj/hyp | **C**AH |
| tan(θ) | opp/adj | **T**OA |
| csc(θ) | hyp/opp | Reciprocal of sin |
| sec(θ) | hyp/adj | Reciprocal of cos |
| cot(θ) | adj/opp | Reciprocal of tan |

```
                    /|
                   / |
                  /  |
         hyp    /   | opp
               /    |
              /θ    |
             /______|
               adj
```

### Unit Circle Definitions

For any angle θ with terminal point (x, y) on the unit circle:

| Function | Definition | 
|----------|------------|
| sin(θ) | y |
| cos(θ) | x |
| tan(θ) | y/x = sin(θ)/cos(θ) |
| csc(θ) | 1/y = 1/sin(θ) |
| sec(θ) | 1/x = 1/cos(θ) |
| cot(θ) | x/y = cos(θ)/sin(θ) |

### General Definitions (Any Point)

For any point (x, y) at distance r from the origin:
- r = √(x² + y²)
- sin(θ) = y/r
- cos(θ) = x/r
- tan(θ) = y/x

### Domain and Range

| Function | Domain | Range |
|----------|--------|-------|
| sin(θ) | All real numbers | [-1, 1] |
| cos(θ) | All real numbers | [-1, 1] |
| tan(θ) | All reals except π/2 + nπ | All real numbers |
| csc(θ) | All reals except nπ | (-∞, -1] ∪ [1, ∞) |
| sec(θ) | All reals except π/2 + nπ | (-∞, -1] ∪ [1, ∞) |
| cot(θ) | All reals except nπ | All real numbers |

### Periodicity

| Function | Period |
|----------|--------|
| sin(θ), cos(θ), csc(θ), sec(θ) | 2π |
| tan(θ), cot(θ) | π |

### Even and Odd Functions

**Even Functions** (symmetric about y-axis):
- cos(-θ) = cos(θ)
- sec(-θ) = sec(θ)

**Odd Functions** (symmetric about origin):
- sin(-θ) = -sin(θ)
- tan(-θ) = -tan(θ)
- csc(-θ) = -csc(θ)
- cot(-θ) = -cot(θ)

---

## 📈 Graphs of Trigonometric Functions

### Sine Function: y = sin(x)

```
     1 |      ●●●
       |    ●     ●
       |   ●       ●
       |  ●         ●
   0 --|●-----------●-----------●-----------●--> x
       |             ●         ●
       |              ●       ●
       |               ●     ●
    -1 |                ●●●
       0    π/2    π    3π/2   2π
```

**Key Properties:**
- Domain: (-∞, ∞)
- Range: [-1, 1]
- Period: 2π
- Amplitude: 1
- x-intercepts: x = nπ, n ∈ ℤ
- Maximum: y = 1 at x = π/2 + 2nπ
- Minimum: y = -1 at x = 3π/2 + 2nπ

### Cosine Function: y = cos(x)

```
     1 |●                       ●
       | ●                     ●
       |  ●                   ●
       |   ●                 ●
   0 --|----●------●--------●------●--> x
       |     ●    ●          ●    ●
       |      ●  ●            ●  ●
       |       ●●              ●●
    -1 |        ●               
       0    π/2    π    3π/2   2π
```

**Key Properties:**
- Domain: (-∞, ∞)
- Range: [-1, 1]
- Period: 2π
- Amplitude: 1
- x-intercepts: x = π/2 + nπ, n ∈ ℤ
- Maximum: y = 1 at x = 2nπ
- Minimum: y = -1 at x = π + 2nπ

### Tangent Function: y = tan(x)

```
       |         |         |
       |    ●    |    ●    |
       |   ●     |   ●     |
       |  ●      |  ●      |
   0 --|●--------+---------●-------> x
       |         ●         |
       |        ●          |
       |       ●           |
       |      ●            |
       |         |         |
      -π/2       0       π/2      π
           (asymptotes at ±π/2, ±3π/2, ...)
```

**Key Properties:**
- Domain: All reals except x = π/2 + nπ
- Range: (-∞, ∞)
- Period: π
- Vertical asymptotes: x = π/2 + nπ
- x-intercepts: x = nπ
- Passes through origin

### Cosecant Function: y = csc(x)

```
       ∪           ∪
       |           |
     1 |-●-------●-|
       |  \     /  |
       |   \   /   |
       |    \ /    |
   ----+-----●-----+----> x
       |    / \    |
       |   /   \   |
    -1 |-●-------●-|
       |           |
       ∩           ∩
       0     π    2π
```

**Key Properties:**
- Domain: All reals except x = nπ
- Range: (-∞, -1] ∪ [1, ∞)
- Period: 2π
- Vertical asymptotes: x = nπ

### Secant Function: y = sec(x)

```
     ∪     ∩     ∪
     |     |     |
   1-●-----+-----●-
     | \   |   / |
     |  \  |  /  |
  0 -|---\-+-/---|---> x
     |    \|/    |
  -1-●-----●-----●-
     |     |     |
     ∩     ∪     ∩
    -π/2   0   π/2    π
```

**Key Properties:**
- Domain: All reals except x = π/2 + nπ
- Range: (-∞, -1] ∪ [1, ∞)
- Period: 2π
- Vertical asymptotes: x = π/2 + nπ

### Cotangent Function: y = cot(x)

```
       |         |         |
       |●        |●        |
       | ●       | ●       |
       |  ●      |  ●      |
   0 --|---●-----+----●----+--> x
       |    ●    |    ●    |
       |     ●   |     ●   |
       |      ●  |      ●  |
       |       ● |       ● |
       |         |         |
       0        π        2π
        (asymptotes at 0, π, 2π, ...)
```

**Key Properties:**
- Domain: All reals except x = nπ
- Range: (-∞, ∞)
- Period: π
- Vertical asymptotes: x = nπ
- x-intercepts: x = π/2 + nπ

---

## 🔄 Transformations of Trig Functions

### General Form

**y = A · sin(B(x - C)) + D** or **y = A · cos(B(x - C)) + D**

| Parameter | Effect | Formula |
|-----------|--------|---------|
| A | **Amplitude** (vertical stretch) | \|A\| |
| B | **Period** change (horizontal stretch) | Period = 2π/\|B\| |
| C | **Phase shift** (horizontal translation) | Shift right if C > 0 |
| D | **Vertical shift** (midline) | Midline: y = D |

### Amplitude

The **amplitude** is the distance from the midline to the maximum (or minimum).

- For y = A·sin(x): Amplitude = |A|
- If A < 0, the graph is reflected over the x-axis

**Example:**
- y = 3sin(x) has amplitude 3
- y = -2cos(x) has amplitude 2 (reflected)

### Period

The **period** is the horizontal length of one complete cycle.

For y = sin(Bx) or y = cos(Bx):
- **Period = 2π/|B|**

For y = tan(Bx) or y = cot(Bx):
- **Period = π/|B|**

**Examples:**
- y = sin(2x) has period 2π/2 = π
- y = cos(x/3) has period 2π/(1/3) = 6π
- y = tan(4x) has period π/4

### Phase Shift

The **phase shift** is the horizontal translation of the graph.

For y = sin(B(x - C)) or y = cos(B(x - C)):
- Phase shift = C
- Positive C → shift right
- Negative C → shift left

**Common Mistake Alert:**
y = sin(2x - π) should be written as y = sin(2(x - π/2))
- Factor out B first!
- Phase shift = π/2 (not π)

### Vertical Shift

The **vertical shift** moves the entire graph up or down.

For y = sin(x) + D:
- D > 0 → shift up
- D < 0 → shift down
- Midline: y = D

### Step-by-Step Graphing Process

**To graph y = A·sin(B(x - C)) + D:**

1. Identify: A (amplitude), B (period factor), C (phase shift), D (vertical shift)
2. Calculate period: 2π/|B|
3. Find key points: start at x = C, add period/4 for each subsequent point
4. Plot 5 key points for one period
5. Draw smooth curve through points
6. Extend pattern as needed

**Example:** Graph y = 2sin(2(x - π/4)) + 1

1. A = 2, B = 2, C = π/4, D = 1
2. Period = 2π/2 = π
3. Amplitude = 2
4. Phase shift = π/4 (right)
5. Vertical shift = 1 (up)

Key points (starting at x = π/4):
| x | x - π/4 | 2(x - π/4) | sin(...) | 2sin(...) + 1 |
|---|---------|------------|----------|---------------|
| π/4 | 0 | 0 | 0 | 1 |
| π/2 | π/4 | π/2 | 1 | 3 |
| 3π/4 | π/2 | π | 0 | 1 |
| π | 3π/4 | 3π/2 | -1 | -1 |
| 5π/4 | π | 2π | 0 | 1 |

### Finding Equations from Graphs

Given a sinusoidal graph:

1. **Find D:** Midline = (max + min)/2
2. **Find A:** Amplitude = (max - min)/2
3. **Find Period:** Measure one complete cycle, then B = 2π/period
4. **Find C:** Locate a key point (like max for cosine, zero crossing for sine)

---

## ↩️ Inverse Trigonometric Functions

### Definitions and Notation

| Function | Notation | Domain | Range |
|----------|----------|--------|-------|
| Inverse sine | sin⁻¹(x) or arcsin(x) | [-1, 1] | [-π/2, π/2] |
| Inverse cosine | cos⁻¹(x) or arccos(x) | [-1, 1] | [0, π] |
| Inverse tangent | tan⁻¹(x) or arctan(x) | (-∞, ∞) | (-π/2, π/2) |
| Inverse cosecant | csc⁻¹(x) or arccsc(x) | \|x\| ≥ 1 | [-π/2, 0) ∪ (0, π/2] |
| Inverse secant | sec⁻¹(x) or arcsec(x) | \|x\| ≥ 1 | [0, π/2) ∪ (π/2, π] |
| Inverse cotangent | cot⁻¹(x) or arccot(x) | (-∞, ∞) | (0, π) |

### Understanding Inverse Functions

**Key Concept:** sin⁻¹(x) asks "What angle has a sine value of x?"

**Important:** sin⁻¹(x) ≠ 1/sin(x)
- sin⁻¹(x) is the inverse function (arcsin)
- 1/sin(x) = csc(x) is the reciprocal

### Graphs of Inverse Functions

**y = arcsin(x)**
```
    π/2 |         ●
        |       ●
        |     ●
      0 |---●-------> x
        |  ●
        | ●
   -π/2 |●
       -1   0    1
```

**y = arccos(x)**
```
      π |●
        | ●
        |  ●
    π/2 |---●------> x
        |    ●
        |     ●
      0 |      ●
       -1   0    1
```

**y = arctan(x)**
```
    π/2 |. . . . . . . ●●●●●  (asymptote)
        |           ●●
        |        ●●
      0 |------●-------> x
        |    ●●
        |  ●●
   -π/2 |●●●●● . . . . . . .  (asymptote)
```

### Special Values

| Expression | Value |
|------------|-------|
| sin⁻¹(0) | 0 |
| sin⁻¹(1/2) | π/6 |
| sin⁻¹(√2/2) | π/4 |
| sin⁻¹(√3/2) | π/3 |
| sin⁻¹(1) | π/2 |
| cos⁻¹(0) | π/2 |
| cos⁻¹(1/2) | π/3 |
| cos⁻¹(√2/2) | π/4 |
| cos⁻¹(√3/2) | π/6 |
| cos⁻¹(1) | 0 |
| tan⁻¹(0) | 0 |
| tan⁻¹(1) | π/4 |
| tan⁻¹(√3) | π/3 |
| tan⁻¹(√3/3) | π/6 |

### Composition Rules

**Direct Compositions (always work):**
- sin(sin⁻¹(x)) = x for x ∈ [-1, 1]
- cos(cos⁻¹(x)) = x for x ∈ [-1, 1]
- tan(tan⁻¹(x)) = x for x ∈ ℝ

**Inverse Compositions (restricted):**
- sin⁻¹(sin(x)) = x only if x ∈ [-π/2, π/2]
- cos⁻¹(cos(x)) = x only if x ∈ [0, π]
- tan⁻¹(tan(x)) = x only if x ∈ (-π/2, π/2)

**Example:** sin⁻¹(sin(5π/6))
- 5π/6 is NOT in [-π/2, π/2]
- sin(5π/6) = 1/2
- sin⁻¹(1/2) = π/6
- Answer: π/6 (not 5π/6!)

### Evaluating Compositions

**Example:** Find cos(tan⁻¹(3/4))

Method: Draw a right triangle
1. Let θ = tan⁻¹(3/4)
2. tan(θ) = 3/4 means opp = 3, adj = 4
3. hyp = √(9 + 16) = 5
4. cos(θ) = adj/hyp = 4/5

```
            /|
           / |
      5   /  | 3
         /   |
        /θ   |
       /_____|
          4
```

---

## 🔁 Trigonometric Identities

### Fundamental Identities

#### Reciprocal Identities
| Identity |
|----------|
| csc(θ) = 1/sin(θ) |
| sec(θ) = 1/cos(θ) |
| cot(θ) = 1/tan(θ) |

#### Quotient Identities
| Identity |
|----------|
| tan(θ) = sin(θ)/cos(θ) |
| cot(θ) = cos(θ)/sin(θ) |

### Pythagorean Identities

| Primary Form | Alternate Forms |
|--------------|-----------------|
| sin²(θ) + cos²(θ) = 1 | sin²(θ) = 1 - cos²(θ) |
| | cos²(θ) = 1 - sin²(θ) |
| 1 + tan²(θ) = sec²(θ) | tan²(θ) = sec²(θ) - 1 |
| | sec²(θ) - tan²(θ) = 1 |
| 1 + cot²(θ) = csc²(θ) | cot²(θ) = csc²(θ) - 1 |
| | csc²(θ) - cot²(θ) = 1 |

**Derivation of Pythagorean Identities:**
From x² + y² = 1 on the unit circle:
- cos²(θ) + sin²(θ) = 1
- Divide by cos²(θ): 1 + tan²(θ) = sec²(θ)
- Divide by sin²(θ): cot²(θ) + 1 = csc²(θ)

### Cofunction Identities

For complementary angles (θ + (π/2 - θ) = π/2):

| Identity |
|----------|
| sin(π/2 - θ) = cos(θ) |
| cos(π/2 - θ) = sin(θ) |
| tan(π/2 - θ) = cot(θ) |
| cot(π/2 - θ) = tan(θ) |
| sec(π/2 - θ) = csc(θ) |
| csc(π/2 - θ) = sec(θ) |

### Sum and Difference Identities

#### Sine
| Formula |
|---------|
| sin(A + B) = sin(A)cos(B) + cos(A)sin(B) |
| sin(A - B) = sin(A)cos(B) - cos(A)sin(B) |

#### Cosine
| Formula |
|---------|
| cos(A + B) = cos(A)cos(B) - sin(A)sin(B) |
| cos(A - B) = cos(A)cos(B) + sin(A)sin(B) |

#### Tangent
| Formula |
|---------|
| tan(A + B) = (tan(A) + tan(B))/(1 - tan(A)tan(B)) |
| tan(A - B) = (tan(A) - tan(B))/(1 + tan(A)tan(B)) |

**Memory Aid for Signs:**
- **Sine:** Sign in the middle matches the sign of the formula
- **Cosine:** Sign in the middle is opposite (+ becomes -, - becomes +)

### Double Angle Identities

| Function | Formulas |
|----------|----------|
| sin(2θ) | = 2sin(θ)cos(θ) |
| cos(2θ) | = cos²(θ) - sin²(θ) |
| | = 2cos²(θ) - 1 |
| | = 1 - 2sin²(θ) |
| tan(2θ) | = 2tan(θ)/(1 - tan²(θ)) |

**Derivation:** Use sum formulas with A = B = θ

### Half Angle Identities

| Function | Formula |
|----------|---------|
| sin(θ/2) | = ±√((1 - cos(θ))/2) |
| cos(θ/2) | = ±√((1 + cos(θ))/2) |
| tan(θ/2) | = ±√((1 - cos(θ))/(1 + cos(θ))) |
| | = sin(θ)/(1 + cos(θ)) |
| | = (1 - cos(θ))/sin(θ) |

**Note:** The ± sign depends on the quadrant of θ/2

### Power-Reducing Identities

| Function | Formula |
|----------|---------|
| sin²(θ) | = (1 - cos(2θ))/2 |
| cos²(θ) | = (1 + cos(2θ))/2 |
| tan²(θ) | = (1 - cos(2θ))/(1 + cos(2θ)) |

### Product-to-Sum Identities

| Product | Sum |
|---------|-----|
| sin(A)cos(B) | = ½[sin(A+B) + sin(A-B)] |
| cos(A)sin(B) | = ½[sin(A+B) - sin(A-B)] |
| cos(A)cos(B) | = ½[cos(A+B) + cos(A-B)] |
| sin(A)sin(B) | = ½[cos(A-B) - cos(A+B)] |

### Sum-to-Product Identities

| Sum | Product |
|-----|---------|
| sin(A) + sin(B) | = 2sin((A+B)/2)cos((A-B)/2) |
| sin(A) - sin(B) | = 2cos((A+B)/2)sin((A-B)/2) |
| cos(A) + cos(B) | = 2cos((A+B)/2)cos((A-B)/2) |
| cos(A) - cos(B) | = -2sin((A+B)/2)sin((A-B)/2) |

### Complete Identity Reference Table

```
┌─────────────────────────────────────────────────────────────┐
│                  TRIGONOMETRIC IDENTITIES                    │
├─────────────────────────────────────────────────────────────┤
│ PYTHAGOREAN          │ DOUBLE ANGLE                         │
│ sin²θ + cos²θ = 1    │ sin 2θ = 2 sin θ cos θ              │
│ 1 + tan²θ = sec²θ    │ cos 2θ = cos²θ - sin²θ              │
│ 1 + cot²θ = csc²θ    │        = 2cos²θ - 1 = 1 - 2sin²θ    │
├─────────────────────────────────────────────────────────────┤
│ SUM/DIFFERENCE                                               │
│ sin(A±B) = sin A cos B ± cos A sin B                        │
│ cos(A±B) = cos A cos B ∓ sin A sin B                        │
│ tan(A±B) = (tan A ± tan B)/(1 ∓ tan A tan B)               │
├─────────────────────────────────────────────────────────────┤
│ HALF ANGLE                                                   │
│ sin(θ/2) = ±√[(1 - cos θ)/2]                               │
│ cos(θ/2) = ±√[(1 + cos θ)/2]                               │
│ tan(θ/2) = sin θ/(1 + cos θ) = (1 - cos θ)/sin θ          │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧮 Solving Trigonometric Equations

### Basic Strategy

1. **Isolate** the trig function
2. **Find** the reference angle
3. **Determine** all solutions in the given interval
4. **Add** period multiples for general solutions

### Linear Trig Equations

**Example 1:** Solve 2sin(x) - 1 = 0 for x ∈ [0, 2π)

1. Isolate: sin(x) = 1/2
2. Reference angle: π/6 (since sin(π/6) = 1/2)
3. sin is positive in Quadrants I and II
4. Solutions: x = π/6, x = π - π/6 = 5π/6

**General Solution:** x = π/6 + 2nπ or x = 5π/6 + 2nπ, n ∈ ℤ

**Example 2:** Solve cos(x) = -√3/2 for x ∈ [0, 2π)

1. Reference angle: π/6 (since cos(π/6) = √3/2)
2. cos is negative in Quadrants II and III
3. Solutions: x = π - π/6 = 5π/6, x = π + π/6 = 7π/6

### Quadratic Trig Equations

**Example:** Solve 2sin²(x) - sin(x) - 1 = 0 for x ∈ [0, 2π)

1. Factor: (2sin(x) + 1)(sin(x) - 1) = 0
2. Set each factor = 0:
   - 2sin(x) + 1 = 0 → sin(x) = -1/2
   - sin(x) - 1 = 0 → sin(x) = 1

3. For sin(x) = -1/2: x = 7π/6, 11π/6
4. For sin(x) = 1: x = π/2

**Solutions:** x = π/2, 7π/6, 11π/6

### Equations Requiring Identities

**Example:** Solve sin(2x) = cos(x) for x ∈ [0, 2π)

1. Use double angle: 2sin(x)cos(x) = cos(x)
2. Rearrange: 2sin(x)cos(x) - cos(x) = 0
3. Factor: cos(x)(2sin(x) - 1) = 0
4. Solve:
   - cos(x) = 0 → x = π/2, 3π/2
   - sin(x) = 1/2 → x = π/6, 5π/6

**Solutions:** x = π/6, π/2, 5π/6, 3π/2

### Equations with Multiple Angles

**Example:** Solve sin(3x) = 1/2 for x ∈ [0, 2π)

1. Let u = 3x, so sin(u) = 1/2
2. For x ∈ [0, 2π), we need u ∈ [0, 6π)
3. u = π/6, 5π/6, 13π/6, 17π/6, 25π/6, 29π/6
4. Divide by 3: x = π/18, 5π/18, 13π/18, 17π/18, 25π/18, 29π/18

### Using Inverse Functions

**Example:** Solve 3tan(x) + 5 = 0

1. Isolate: tan(x) = -5/3
2. Reference angle: tan⁻¹(5/3) ≈ 1.030
3. tan is negative in Quadrants II and IV
4. x = π - 1.030 ≈ 2.111 or x = 2π - 1.030 ≈ 5.253

**General Solution:** x ≈ 2.111 + nπ, n ∈ ℤ

### Common Mistakes to Avoid

❌ **Dividing by a trig function** (may lose solutions)
- Instead, factor and set each factor = 0

❌ **Forgetting solutions in restricted domains**
- Always check how many periods fit in your interval

❌ **Using wrong quadrants**
- Remember ASTC: All, Sin, Tan, Cos

❌ **Ignoring extraneous solutions**
- Always verify solutions in the original equation

---

## 🎯 Polar Coordinates

### Introduction to Polar Coordinates

In **polar coordinates**, a point is described by:
- **r:** distance from the origin (pole)
- **θ:** angle from the positive x-axis (polar axis)

Notation: (r, θ)

```
                    y
                    |
                    |  ● P(r, θ)
                    | /
                    |/  θ
        ─────────────●─────────── x
                  origin
                   (pole)
```

### Polar vs. Rectangular Coordinates

**Converting Rectangular to Polar:**
- r = √(x² + y²)
- θ = tan⁻¹(y/x) (adjust for quadrant)

**Converting Polar to Rectangular:**
- x = r·cos(θ)
- y = r·sin(θ)

### Conversion Examples

**Example 1:** Convert (3, 4) to polar coordinates

- r = √(3² + 4²) = √25 = 5
- θ = tan⁻¹(4/3) ≈ 0.927 radians (≈ 53.13°)
- Polar: (5, 0.927) or (5, 53.13°)

**Example 2:** Convert (4, 2π/3) to rectangular coordinates

- x = 4·cos(2π/3) = 4·(-1/2) = -2
- y = 4·sin(2π/3) = 4·(√3/2) = 2√3
- Rectangular: (-2, 2√3)

### Multiple Representations

Unlike rectangular coordinates, a point has **infinitely many** polar representations:

For point P with polar coordinates (r, θ):
- (r, θ + 2nπ) for any integer n
- (-r, θ + π + 2nπ) for any integer n

**Example:** The point (3, π/4) can also be written as:
- (3, 9π/4)
- (3, -7π/4)
- (-3, 5π/4)
- (-3, -3π/4)

### Plotting Polar Points

**Steps to plot (r, θ):**
1. Start at the origin
2. Rotate θ from the positive x-axis
3. Move distance |r| along that direction
4. If r < 0, go in the opposite direction

```
Plot (2, π/3):          Plot (-2, π/6):
      |                       |
      |  ● (2, π/3)          ● (-2, π/6)
      | /                     |  \ 
      |/ π/3                  |   \ π/6
   ───●────────            ───●────────
                             (go backward)
```

### Converting Equations

**Rectangular to Polar:**
| Rectangular | Polar |
|-------------|-------|
| x | r·cos(θ) |
| y | r·sin(θ) |
| x² + y² | r² |
| x² + y² = a² | r = a |
| y = x | θ = π/4 |
| y = mx | θ = tan⁻¹(m) |

**Example:** Convert x² + y² = 9 to polar
- r² = 9
- r = 3

**Example:** Convert y = x to polar
- r·sin(θ) = r·cos(θ)
- tan(θ) = 1
- θ = π/4

---

## 🌀 Polar Curves

### Common Polar Curves

#### Circles

**Circle centered at origin:** r = a
```
        ●●●●●
      ●       ●
     ●    a    ●
      ●       ●
        ●●●●●
```

**Circle through origin:**
- r = a·cos(θ): Circle with diameter a on positive x-axis
- r = a·sin(θ): Circle with diameter a on positive y-axis

#### Lines

**Line through origin:** θ = k (constant)
```
           /
          /
    ─────●───── (θ = π/4)
        /
       /
```

#### Rose Curves

**r = a·cos(nθ)** or **r = a·sin(nθ)**

- n odd: n petals
- n even: 2n petals

```
n = 3 (r = cos 3θ):      n = 4 (r = cos 4θ):
      ●                        ●
     /|\                      /|\
    ● | ●                    ● | ●
     \|/                    ●──●──●
      ●                      ● | ●
                              \|/
                               ●
   3 petals                 8 petals
```

**Petal length = |a|**

#### Cardioids

**r = a(1 + cos(θ))** or **r = a(1 + sin(θ))**

Shape resembles a heart with a cusp at the origin.

```
        ●●●●●
      ●       ●●●
     ●            ●●
      ●             ●
       ●●●●●●●●●●●●●
             ●
            cusp
```

**Variations:**
- r = a(1 + cos θ): cusp points left
- r = a(1 - cos θ): cusp points right
- r = a(1 + sin θ): cusp points down
- r = a(1 - sin θ): cusp points up

#### Limaçons

**r = a + b·cos(θ)** or **r = a + b·sin(θ)**

| Condition | Shape |
|-----------|-------|
| a/b < 1 | Inner loop |
| a/b = 1 | Cardioid |
| 1 < a/b < 2 | Dimpled |
| a/b ≥ 2 | Convex |

```
Inner Loop:        Dimpled:         Convex:
   ●●●●●           ●●●●●            ●●●●●●●
  ●     ●         ●     ●          ●       ●
 ●  ●●●  ●       ●       ●        ●         ●
  ●     ●         ●     ●          ●       ●
   ●●●●●           ●●●●●            ●●●●●●●
```

#### Lemniscates

**r² = a²·cos(2θ)** or **r² = a²·sin(2θ)**

Figure-eight shape (infinity symbol)

```
    ●●●●●   ●●●●●
   ●     ●●●     ●
    ●●●●●   ●●●●●
```

#### Spirals

**Archimedean Spiral:** r = aθ

```
          ●●●●●
        ●●     ●●
      ●●   ●●●   ●●
     ●   ●●   ●●   ●
    ●  ●●  ●   ●●  ●
    ●  ●   ●    ●  ●
    ●   ●●●     ●  ●
     ●         ●  ●
      ●●     ●●●●●
        ●●●●●
```

### Graphing Polar Curves

**Strategy:**
1. Make a table of (r, θ) values
2. Look for symmetry:
   - About x-axis: r(θ) = r(-θ)
   - About y-axis: r(θ) = r(π - θ)
   - About origin: r(θ) = r(θ + π) or r(θ) = -r(θ)
3. Find r = 0 (where curve passes through origin)
4. Find maximum |r|
5. Plot points and connect smoothly

**Example:** Graph r = 2 + 2cos(θ) (cardioid)

| θ | cos(θ) | r = 2 + 2cos(θ) |
|---|--------|-----------------|
| 0 | 1 | 4 |
| π/3 | 1/2 | 3 |
| π/2 | 0 | 2 |
| 2π/3 | -1/2 | 1 |
| π | -1 | 0 |
| 4π/3 | -1/2 | 1 |
| 3π/2 | 0 | 2 |
| 5π/3 | 1/2 | 3 |
| 2π | 1 | 4 |

### Symmetry Tests

| Symmetry | Test | Replace |
|----------|------|---------|
| x-axis (polar axis) | (r, -θ) satisfies equation | θ with -θ |
| y-axis (θ = π/2) | (-r, -θ) or (r, π-θ) satisfies | |
| Origin (pole) | (-r, θ) or (r, θ+π) satisfies | |

### Intersections of Polar Curves

To find intersections:
1. Solve the system of equations
2. Check if both curves pass through the origin (may not give same θ)
3. Graph to verify all intersection points

**Example:** Find intersections of r = 2cos(θ) and r = 1

1. Set equal: 2cos(θ) = 1
2. cos(θ) = 1/2
3. θ = π/3 or θ = 5π/3
4. Intersection points: (1, π/3) and (1, 5π/3)

### Converting Polar Equations to Rectangular

**Example:** Convert r = 4cos(θ) to rectangular form

1. Multiply both sides by r: r² = 4r·cos(θ)
2. Substitute: x² + y² = 4x
3. Complete the square: (x² - 4x + 4) + y² = 4
4. Final form: (x - 2)² + y² = 4

This is a circle with center (2, 0) and radius 2.

---

## 📝 Practice Problems

### Unit Circle Practice

1. Find sin(5π/6) and cos(5π/6)
2. Find tan(7π/4)
3. Find all angles θ in [0, 2π) where sin(θ) = -√3/2
4. Find the reference angle for 290°

### Graphing Practice

5. Graph y = 3sin(2x - π) + 1. State amplitude, period, phase shift, and midline.
6. Graph y = -2cos(x/2). State amplitude and period.
7. Find an equation for a cosine function with amplitude 4, period π, and phase shift π/2 right.

### Identity Practice

8. Simplify: (sin(x) + cos(x))² + (sin(x) - cos(x))²
9. Prove: tan(x) + cot(x) = sec(x)csc(x)
10. Find the exact value of sin(75°) using sum identities.
11. If sin(θ) = 3/5 and θ is in Quadrant II, find sin(2θ) and cos(2θ).

### Equation Solving

12. Solve: 2cos²(x) - cos(x) - 1 = 0 for x ∈ [0, 2π)
13. Solve: sin(2x) = sin(x) for x ∈ [0, 2π)
14. Solve: 2sin²(x) = 1 for x ∈ [0, 2π)
15. Find all solutions: tan(x) = √3

### Inverse Trig Practice

16. Evaluate: sin⁻¹(sin(5π/4))
17. Find: cos(tan⁻¹(12/5))
18. Simplify: tan(cos⁻¹(x))

### Polar Coordinate Practice

19. Convert (−3, 3) to polar coordinates
20. Convert (6, 5π/6) to rectangular coordinates
21. Convert x² + y² = 6y to polar form
22. Convert r = 4sec(θ) to rectangular form

### Polar Curve Practice

23. Describe the curve r = 4sin(θ)
24. How many petals does r = 3cos(5θ) have?
25. Graph r = 2 - 4cos(θ) and identify the type of limaçon

---

## 🎯 Answer Key

### Unit Circle Answers

1. sin(5π/6) = 1/2, cos(5π/6) = -√3/2
2. tan(7π/4) = -1
3. θ = 4π/3, 5π/3
4. Reference angle = 70°

### Graphing Answers

5. Amplitude = 3, Period = π, Phase shift = π/2 right, Midline: y = 1
6. Amplitude = 2, Period = 4π
7. y = 4cos(2(x - π/2)) or y = 4cos(2x - π)

### Identity Answers

8. 2 (expand and simplify using sin² + cos² = 1)
9. tan(x) + cot(x) = sin(x)/cos(x) + cos(x)/sin(x) = (sin²x + cos²x)/(sin(x)cos(x)) = 1/(sin(x)cos(x)) = sec(x)csc(x)
10. sin(75°) = sin(45° + 30°) = (√6 + √2)/4
11. cos(θ) = -4/5, so sin(2θ) = 2(3/5)(-4/5) = -24/25, cos(2θ) = 16/25 - 9/25 = 7/25

### Equation Solving Answers

12. (2cos(x) + 1)(cos(x) - 1) = 0 → x = 0, 2π/3, 4π/3
13. 2sin(x)cos(x) = sin(x) → sin(x)(2cos(x) - 1) = 0 → x = 0, π/3, π, 5π/3
14. sin²(x) = 1/2 → sin(x) = ±√2/2 → x = π/4, 3π/4, 5π/4, 7π/4
15. x = π/3 + nπ, n ∈ ℤ

### Inverse Trig Answers

16. 5π/4 is not in [-π/2, π/2]. sin(5π/4) = -√2/2. sin⁻¹(-√2/2) = -π/4
17. Draw triangle: opp = 12, adj = 5, hyp = 13. cos = 5/13
18. If θ = cos⁻¹(x), then cos(θ) = x, adj = x, hyp = 1, opp = √(1-x²). So tan(cos⁻¹(x)) = √(1-x²)/x

### Polar Coordinate Answers

19. r = √(9 + 9) = 3√2, θ = 3π/4 (QII). Answer: (3√2, 3π/4)
20. x = 6cos(5π/6) = -3√3, y = 6sin(5π/6) = 3. Answer: (-3√3, 3)
21. x² + y² = 6y → r² = 6r·sin(θ) → r = 6sin(θ)
22. r = 4/cos(θ) → r·cos(θ) = 4 → x = 4 (vertical line)

### Polar Curve Answers

23. Circle with diameter 4 centered at (0, 2), passing through origin
24. 5 petals (n = 5 is odd)
25. Limaçon with inner loop (since |a/b| = |2/4| = 0.5 < 1)

---

## 📌 Key Formulas Quick Reference

### Essential Unit Circle Values
```
θ:     0    π/6   π/4   π/3   π/2
sin:   0    1/2   √2/2  √3/2   1
cos:   1    √3/2  √2/2  1/2    0
```

### Must-Know Identities
```
sin²θ + cos²θ = 1
sin(2θ) = 2sinθcosθ
cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ
sin(A±B) = sinAcosB ± cosAsinB
cos(A±B) = cosAcosB ∓ sinAsinB
```

### Polar-Rectangular Conversions
```
x = rcosθ     r = √(x² + y²)
y = rsinθ     θ = tan⁻¹(y/x)
```

### Transformation Parameters
```
y = A·sin(B(x - C)) + D
|A| = amplitude
2π/|B| = period
C = phase shift
D = vertical shift
```

---

## 🚀 Study Tips

1. **Memorize the unit circle** - it's the foundation for everything
2. **Practice deriving identities** - understanding > memorization
3. **Draw pictures** for inverse trig compositions
4. **Check quadrants** when solving equations
5. **Use symmetry** when graphing polar curves
6. **Convert strategically** - sometimes polar is easier than rectangular

---

## 📊 AP Exam Focus

**High-frequency topics:**
- Evaluating trig functions at special angles
- Transformations of sinusoidal functions
- Solving trig equations
- Verifying identities
- Inverse function compositions
- Polar curve analysis

**Calculator tips:**
- Set mode to radians (unless degrees specified)
- Use inverse functions correctly
- Graph polar equations to verify work

:::GUIDE:::
