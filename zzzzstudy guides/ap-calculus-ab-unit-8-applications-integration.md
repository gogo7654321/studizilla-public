:::GUIDE:::
unit::=8
title::=📐 Unit 8: Applications of Integration
desc::=Master area, volume, and motion applications of definite integrals
diff::=Hard
time::=60 min
tags::=calculus,applications,volume,area
content::=

# 📐 Unit 8: Applications of Integration

## 🎯 Unit Overview

This unit brings together everything you've learned about integration and applies it to solve real-world problems involving area, volume, and motion. These applications demonstrate the power of calculus to solve problems that would be impossible with algebra alone.

---

## 📊 8.1 Area Between Curves

### The Fundamental Concept

When finding the area between two curves, we integrate the difference between the "top" and "bottom" functions (or "right" and "left" for horizontal integration).

```
    y
    │         f(x)
    │      ╱‾‾‾‾‾‾╲
    │    ╱   AREA   ╲
    │   ╱ ░░░░░░░░░░ ╲
    │  │░░░░░░░░░░░░░░│
    │   ╲░░░░░░░░░░░╱
    │    ╲________╱   g(x)
    │      │    │
    └──────┼────┼─────── x
           a    b
```

### Area Formula (Vertical Slices)

$$A = \int_a^b [f(x) - g(x)] \, dx$$

Where:
- $f(x)$ is the **upper** curve
- $g(x)$ is the **lower** curve
- $a$ and $b$ are the x-coordinates of intersection points

### Area Formula (Horizontal Slices)

$$A = \int_c^d [f(y) - g(y)] \, dy$$

Where:
- $f(y)$ is the **right** curve
- $g(y)$ is the **left** curve
- $c$ and $d$ are the y-coordinates of intersection points

---

### Step-by-Step Process

**Step 1:** Sketch the region (crucial for visualization)
**Step 2:** Find intersection points
**Step 3:** Determine which curve is on top/right
**Step 4:** Set up and evaluate the integral

---

### Example 1: Basic Area Between Curves

Find the area between $y = x^2$ and $y = x + 2$.

**Step 1: Find intersections**
$$x^2 = x + 2$$
$$x^2 - x - 2 = 0$$
$$(x-2)(x+1) = 0$$
$$x = -1, \quad x = 2$$

**Step 2: Determine which is on top**
Test $x = 0$: $y = 0^2 = 0$ vs $y = 0 + 2 = 2$
The line $y = x + 2$ is on top.

```
    y
    │           ╱
    │    ╱‾‾‾╲ ╱
  4 ├───│░░░│╱
    │   │░░╱│
  2 ├───│╱░░│────
    │  ╱│░░░│
    │ ╱ ╲░░╱
    │╱   ╲╱
  ──┼─────┼──┼─── x
   -1    0  2
```

**Step 3: Set up integral**
$$A = \int_{-1}^{2} [(x + 2) - x^2] \, dx$$

**Step 4: Evaluate**
$$A = \int_{-1}^{2} (x + 2 - x^2) \, dx$$
$$= \left[\frac{x^2}{2} + 2x - \frac{x^3}{3}\right]_{-1}^{2}$$
$$= \left(2 + 4 - \frac{8}{3}\right) - \left(\frac{1}{2} - 2 + \frac{1}{3}\right)$$
$$= \frac{10}{3} - \left(-\frac{7}{6}\right) = \frac{10}{3} + \frac{7}{6} = \frac{27}{6} = \boxed{\frac{9}{2}}$$

---

### Example 2: Horizontal Integration

Find the area enclosed by $x = y^2$ and $x = y + 2$.

**Step 1: Find intersections**
$$y^2 = y + 2$$
$$y^2 - y - 2 = 0$$
$$(y-2)(y+1) = 0$$
$$y = -1, \quad y = 2$$

**Step 2: Determine right/left**
At $y = 0$: $x = 0$ (parabola) vs $x = 2$ (line)
Line is to the right.

```
    y
    │
  2 ├────────●
    │     ╱░░│
    │   ╱░░░░│
    │ ╱░░░░╱
    ├─░░░╱───────── x
    │░░╱
 -1 ├●
    │
```

**Step 3: Set up and evaluate**
$$A = \int_{-1}^{2} [(y + 2) - y^2] \, dy = \boxed{\frac{9}{2}}$$

---

### When to Use Horizontal vs Vertical Slices

| Situation | Use |
|-----------|-----|
| Functions of x, no switching | Vertical (dx) |
| Functions of y, or easier as y | Horizontal (dy) |
| Curves cross in middle | Split into multiple integrals OR switch orientation |

---

## 🍩 8.2 Volumes of Revolution - Disk Method

### The Concept

When a region is rotated around an axis, it creates a 3D solid. The **disk method** works when the region touches the axis of rotation.

```
  Rotating f(x) around x-axis:
  
       │          Cross-section is a DISK
   f(x)│  ╱‾‾╲         ┌─────┐
       │ │   │    →    │ ○○○ │  radius = f(x)
       │ │   │         │○○○○○│
       └─┴───┴── x     │ ○○○ │
                       └─────┘
```

### Disk Method Formula

**Rotation around x-axis:**
$$V = \pi \int_a^b [f(x)]^2 \, dx$$

**Rotation around y-axis:**
$$V = \pi \int_c^d [f(y)]^2 \, dy$$

### Understanding the Formula

Each disk has:
- **Radius** = $f(x)$ (or $f(y)$)
- **Area** = $\pi r^2 = \pi [f(x)]^2$
- **Thickness** = $dx$ (or $dy$)
- **Volume** = $\pi [f(x)]^2 \, dx$

---

### Example 3: Disk Method - Rotation Around x-axis

Find the volume when $y = \sqrt{x}$ from $x = 0$ to $x = 4$ is rotated around the x-axis.

```
    y
    │     ___
  2 ├────╱   
    │  ╱      Rotates to form a "bullet" shape
  1 ├╱        
    │         
    └────┼────┼── x
         2    4
```

$$V = \pi \int_0^4 (\sqrt{x})^2 \, dx = \pi \int_0^4 x \, dx$$
$$= \pi \left[\frac{x^2}{2}\right]_0^4 = \pi \cdot \frac{16}{2} = \boxed{8\pi}$$

---

### Example 4: Disk Method - Rotation Around y-axis

Find the volume when $y = x^2$ from $y = 0$ to $y = 4$ is rotated around the y-axis.

First, solve for x: $x = \sqrt{y}$

```
    y
    │
  4 ├───●
    │ ╱ │    Rotates to form a paraboloid bowl
  1 ├●  │    
    │   │    
    └───┴── x
```

$$V = \pi \int_0^4 (\sqrt{y})^2 \, dy = \pi \int_0^4 y \, dy$$
$$= \pi \left[\frac{y^2}{2}\right]_0^4 = \pi \cdot 8 = \boxed{8\pi}$$

---

## 🔘 8.3 Volumes of Revolution - Washer Method

### The Concept

The **washer method** is used when there's a hole in the middle (the region doesn't touch the axis of rotation).

```
  Cross-section is a WASHER (disk with hole):
  
       ┌─────────┐
       │ ○○○○○○○ │   outer radius = R(x)
       │○○     ○○│   inner radius = r(x)
       │○   ●   ○│   
       │○○     ○○│   Area = π(R² - r²)
       │ ○○○○○○○ │
       └─────────┘
```

### Washer Method Formula

**Rotation around x-axis:**
$$V = \pi \int_a^b \left([R(x)]^2 - [r(x)]^2\right) dx$$

**Rotation around y-axis:**
$$V = \pi \int_c^d \left([R(y)]^2 - [r(y)]^2\right) dy$$

Where:
- $R$ = outer radius (farther from axis)
- $r$ = inner radius (closer to axis)

---

### Example 5: Washer Method

Find the volume when the region between $y = x^2$ and $y = x$ (from $x = 0$ to $x = 1$) is rotated around the x-axis.

**Identify radii:**
- Outer radius: $R(x) = x$ (farther from x-axis)
- Inner radius: $r(x) = x^2$ (closer to x-axis)

```
    y
    │    ╱
  1 ├──●     y = x (outer)
    │╱░│
    │░░│     Shaded region rotates
    │░╱      y = x² (inner)
    └─┴── x
      1
```

$$V = \pi \int_0^1 \left[x^2 - (x^2)^2\right] dx = \pi \int_0^1 (x^2 - x^4) \, dx$$
$$= \pi \left[\frac{x^3}{3} - \frac{x^5}{5}\right]_0^1 = \pi \left(\frac{1}{3} - \frac{1}{5}\right) = \boxed{\frac{2\pi}{15}}$$

---

### Example 6: Rotation Around a Horizontal Line

Find the volume when $y = x^2$ from $x = 0$ to $x = 2$ is rotated around the line $y = -1$.

**Key insight:** Radii are measured from the axis $y = -1$

```
    y
    │
  4 ├───●
    │ ╱ │     The region is ABOVE y = -1
    │╱  │     Outer radius = x² - (-1) = x² + 1
    └───┴── x
 -1 ────────   ← axis of rotation
```

Since the region is above the axis and there's no inner boundary:
$$V = \pi \int_0^2 (x^2 + 1)^2 \, dx = \pi \int_0^2 (x^4 + 2x^2 + 1) \, dx$$
$$= \pi \left[\frac{x^5}{5} + \frac{2x^3}{3} + x\right]_0^2$$
$$= \pi \left(\frac{32}{5} + \frac{16}{3} + 2\right) = \pi \cdot \frac{96 + 80 + 30}{15} = \boxed{\frac{206\pi}{15}}$$

---

### Example 7: Rotation Around a Vertical Line

Find the volume when the region between $y = \sqrt{x}$ and $y = 0$ from $x = 0$ to $x = 4$ is rotated around the line $x = 5$.

**Using washers (horizontal slices):**
- Outer radius: $R(y) = 5 - 0 = 5$ (from $x = 5$ to $x = 0$)
- Inner radius: $r(y) = 5 - y^2$ (from $x = 5$ to $x = y^2$)
- Bounds: $y = 0$ to $y = 2$

```
       x = 5
         │
    y    │
    │    │
  2 ├────│───●
    │░░░░│ ╱
  1 ├░░░░│╱
    │░░░╱│
    └────┴──── x
         4
```

$$V = \pi \int_0^2 \left[5^2 - (5 - y^2)^2\right] dy$$
$$= \pi \int_0^2 \left[25 - (25 - 10y^2 + y^4)\right] dy$$
$$= \pi \int_0^2 (10y^2 - y^4) \, dy$$
$$= \pi \left[\frac{10y^3}{3} - \frac{y^5}{5}\right]_0^2$$
$$= \pi \left(\frac{80}{3} - \frac{32}{5}\right) = \pi \cdot \frac{400 - 96}{15} = \boxed{\frac{304\pi}{15}}$$

---

## 🔷 8.4 Volumes with Known Cross-Sections

### The Concept

Instead of rotating, we can build solids with specified cross-sectional shapes (squares, semicircles, triangles, etc.).

```
  Base region in xy-plane, cross-sections perpendicular to x-axis:
  
        ┌───┐
       ╱│   │╲       Each slice has shape based on
      ╱ │   │ ╲      the width at that x-value
     ╱  │   │  ╲
    ╱   │   │   ╲
   └────┴───┴────┘
        base
```

### General Formula

$$V = \int_a^b A(x) \, dx$$

Where $A(x)$ is the area of the cross-section at position $x$.

---

### Cross-Section Area Formulas

If the base extends from $y = g(x)$ to $y = f(x)$, then the "width" at $x$ is:
$$w(x) = f(x) - g(x)$$

| Cross-Section | Area Formula |
|---------------|--------------|
| **Square** | $A = w^2 = [f(x) - g(x)]^2$ |
| **Rectangle (h = 2w)** | $A = 2w^2$ |
| **Semicircle** | $A = \frac{1}{2}\pi\left(\frac{w}{2}\right)^2 = \frac{\pi w^2}{8}$ |
| **Equilateral Triangle** | $A = \frac{\sqrt{3}}{4}w^2$ |
| **Isosceles Right Triangle** | $A = \frac{1}{2}w^2$ |

---

### Example 8: Square Cross-Sections

The base of a solid is bounded by $y = \sqrt{x}$ and $y = 0$ from $x = 0$ to $x = 4$. Cross-sections perpendicular to the x-axis are squares.

```
    y
    │     ___
  2 ├────╱    Base region
    │  ╱      
    │╱        
    └────┴────── x
         4

  Side view with square cross-sections:
         ┌──┐
        ╱│  │
       ╱ │  │
      ╱  │  │
     ╱   └──┘
    └─────────
```

**Width at x:** $w(x) = \sqrt{x} - 0 = \sqrt{x}$

**Area of square:** $A(x) = (\sqrt{x})^2 = x$

$$V = \int_0^4 x \, dx = \left[\frac{x^2}{2}\right]_0^4 = \boxed{8}$$

---

### Example 9: Semicircular Cross-Sections

The base is bounded by $y = \sin x$ and $y = 0$ from $x = 0$ to $x = \pi$. Cross-sections perpendicular to the x-axis are semicircles.

**Width (diameter):** $w(x) = \sin x$

**Radius:** $r = \frac{\sin x}{2}$

**Area:** $A(x) = \frac{1}{2}\pi r^2 = \frac{1}{2}\pi \cdot \frac{\sin^2 x}{4} = \frac{\pi \sin^2 x}{8}$

$$V = \int_0^{\pi} \frac{\pi \sin^2 x}{8} \, dx = \frac{\pi}{8} \int_0^{\pi} \sin^2 x \, dx$$

Using $\sin^2 x = \frac{1 - \cos 2x}{2}$:

$$V = \frac{\pi}{8} \int_0^{\pi} \frac{1 - \cos 2x}{2} \, dx = \frac{\pi}{16} \left[x - \frac{\sin 2x}{2}\right]_0^{\pi}$$
$$= \frac{\pi}{16}(\pi - 0) = \boxed{\frac{\pi^2}{16}}$$

---

### Example 10: Equilateral Triangle Cross-Sections

The base is the region between $y = x^2$ and $y = 4$. Cross-sections perpendicular to the y-axis are equilateral triangles.

**Width at y:** From $x = -\sqrt{y}$ to $x = \sqrt{y}$, so $w(y) = 2\sqrt{y}$

**Area:** $A(y) = \frac{\sqrt{3}}{4}(2\sqrt{y})^2 = \frac{\sqrt{3}}{4} \cdot 4y = \sqrt{3}y$

$$V = \int_0^4 \sqrt{3}y \, dy = \sqrt{3}\left[\frac{y^2}{2}\right]_0^4 = \sqrt{3} \cdot 8 = \boxed{8\sqrt{3}}$$

---

## 📈 8.5 Average Value of a Function

### The Formula

The average value of $f(x)$ on $[a, b]$ is:

$$f_{avg} = \frac{1}{b-a} \int_a^b f(x) \, dx$$

### Geometric Interpretation

```
    y
    │      ╱‾╲
    │    ╱    ╲____
    │   │          ╲
  ──┼───┼──────────┼── f_avg (horizontal line)
    │   │░░░░░░░░░░│   Area under curve = Area of rectangle
    │   │░░░░░░░░░░│
    └───┼──────────┼── x
        a          b
```

The average value is the height of a rectangle with the same area as the region under the curve.

---

### Mean Value Theorem for Integrals

If $f$ is continuous on $[a, b]$, there exists at least one $c$ in $(a, b)$ such that:

$$f(c) = \frac{1}{b-a} \int_a^b f(x) \, dx = f_{avg}$$

---

### Example 11: Average Value

Find the average value of $f(x) = x^2$ on $[0, 3]$.

$$f_{avg} = \frac{1}{3-0} \int_0^3 x^2 \, dx = \frac{1}{3} \left[\frac{x^3}{3}\right]_0^3 = \frac{1}{3} \cdot 9 = \boxed{3}$$

**Find c where f(c) = 3:**
$$c^2 = 3 \implies c = \sqrt{3} \approx 1.732$$

---

### Example 12: Average Value Application

The temperature (in °F) during a 12-hour period is modeled by:
$$T(t) = 50 + 14\sin\left(\frac{\pi t}{12}\right)$$

Find the average temperature.

$$T_{avg} = \frac{1}{12} \int_0^{12} \left[50 + 14\sin\left(\frac{\pi t}{12}\right)\right] dt$$

$$= \frac{1}{12} \left[50t - 14 \cdot \frac{12}{\pi}\cos\left(\frac{\pi t}{12}\right)\right]_0^{12}$$

$$= \frac{1}{12} \left[\left(600 - \frac{168}{\pi}(-1)\right) - \left(0 - \frac{168}{\pi}(1)\right)\right]$$

$$= \frac{1}{12} \left[600 + \frac{168}{\pi} + \frac{168}{\pi}\right] = \frac{1}{12}\left[600 + \frac{336}{\pi}\right]$$

$$= 50 + \frac{28}{\pi} \approx \boxed{58.9°F}$$

---

## 🚗 8.6 Motion Problems (Rectilinear Motion)

### The Relationships

```
  Position ──differentiate──→ Velocity ──differentiate──→ Acceleration
     s(t)        ←──integrate──    v(t)      ←──integrate──    a(t)
```

### Key Formulas

**Velocity from acceleration:**
$$v(t) = v(0) + \int_0^t a(\tau) \, d\tau$$

**Position from velocity:**
$$s(t) = s(0) + \int_0^t v(\tau) \, d\tau$$

**Displacement (change in position):**
$$\text{Displacement} = \int_a^b v(t) \, dt = s(b) - s(a)$$

**Total Distance Traveled:**
$$\text{Total Distance} = \int_a^b |v(t)| \, dt$$

---

### Displacement vs. Total Distance

```
  v(t)
    │     ╱╲
    │   ╱    ╲
  ──┼──╱──────╲──────── t
    │          ╲    ╱
    │            ╲╱
    
  Displacement = Area above − Area below (signed)
  Total Distance = |Area above| + |Area below| (absolute)
```

---

### Example 13: Basic Motion Problem

A particle moves along a line with velocity $v(t) = t^2 - 4t + 3$ for $t \geq 0$.

**a) Find when the particle is at rest.**
$$v(t) = 0 \implies t^2 - 4t + 3 = 0 \implies (t-1)(t-3) = 0$$
$$t = 1, \quad t = 3$$

**b) Find displacement from t = 0 to t = 4.**
$$\text{Displacement} = \int_0^4 (t^2 - 4t + 3) \, dt = \left[\frac{t^3}{3} - 2t^2 + 3t\right]_0^4$$
$$= \frac{64}{3} - 32 + 12 = \frac{64}{3} - 20 = \boxed{\frac{4}{3}}$$

**c) Find total distance from t = 0 to t = 4.**

Check sign of v(t):
- $0 < t < 1$: $v(0.5) = 0.25 - 2 + 3 = 1.25 > 0$
- $1 < t < 3$: $v(2) = 4 - 8 + 3 = -1 < 0$
- $3 < t < 4$: $v(3.5) = 12.25 - 14 + 3 = 1.25 > 0$

$$\text{Distance} = \int_0^1 v(t) \, dt - \int_1^3 v(t) \, dt + \int_3^4 v(t) \, dt$$

$$\int_0^1 v(t) \, dt = \frac{1}{3} - 2 + 3 = \frac{4}{3}$$

$$\int_1^3 v(t) \, dt = \left(\frac{27}{3} - 18 + 9\right) - \left(\frac{1}{3} - 2 + 3\right) = 0 - \frac{4}{3} = -\frac{4}{3}$$

$$\int_3^4 v(t) \, dt = \frac{4}{3} - 0 = \frac{4}{3}$$

$$\text{Total Distance} = \frac{4}{3} + \frac{4}{3} + \frac{4}{3} = \boxed{4}$$

---

### Example 14: Acceleration Problem

A particle has acceleration $a(t) = 6t - 4$, with $v(0) = 5$ and $s(0) = 2$.

**Find v(t):**
$$v(t) = \int (6t - 4) \, dt = 3t^2 - 4t + C$$
$$v(0) = 5 \implies C = 5$$
$$v(t) = 3t^2 - 4t + 5$$

**Find s(t):**
$$s(t) = \int (3t^2 - 4t + 5) \, dt = t^3 - 2t^2 + 5t + C$$
$$s(0) = 2 \implies C = 2$$
$$\boxed{s(t) = t^3 - 2t^2 + 5t + 2}$$

---

### Example 15: Speed and Velocity

The velocity of a particle is $v(t) = t\cos t$ for $0 \leq t \leq 2\pi$.

**Find total distance traveled.**

Need to find where $v(t) = 0$: $t\cos t = 0$
- $t = 0$ (boundary)
- $\cos t = 0 \implies t = \frac{\pi}{2}, \frac{3\pi}{2}$

$$\text{Distance} = \left|\int_0^{\pi/2} t\cos t \, dt\right| + \left|\int_{\pi/2}^{3\pi/2} t\cos t \, dt\right| + \left|\int_{3\pi/2}^{2\pi} t\cos t \, dt\right|$$

Using integration by parts: $\int t\cos t \, dt = t\sin t + \cos t + C$

$$\int_0^{\pi/2} t\cos t \, dt = \left[t\sin t + \cos t\right]_0^{\pi/2} = \frac{\pi}{2} - 1$$

$$\int_{\pi/2}^{3\pi/2} t\cos t \, dt = \left[t\sin t + \cos t\right]_{\pi/2}^{3\pi/2} = \left(-\frac{3\pi}{2}\right) - \left(\frac{\pi}{2}\right) = -2\pi$$

$$\int_{3\pi/2}^{2\pi} t\cos t \, dt = \left[t\sin t + \cos t\right]_{3\pi/2}^{2\pi} = 1 - 0 = 1$$

$$\text{Total Distance} = \left(\frac{\pi}{2} - 1\right) + 2\pi + 1 = \boxed{\frac{5\pi}{2}}$$

---

## 📝 8.7 Practice Problems

### Section A: Area Between Curves

**Problem 1:** Find the area enclosed by $y = x^3$ and $y = x$.

<details>
<summary>Solution</summary>

Find intersections: $x^3 = x \implies x(x^2 - 1) = 0 \implies x = -1, 0, 1$

Need two integrals (curves switch positions):
$$A = \int_{-1}^{0} (x^3 - x) \, dx + \int_0^1 (x - x^3) \, dx$$
$$= \left[\frac{x^4}{4} - \frac{x^2}{2}\right]_{-1}^0 + \left[\frac{x^2}{2} - \frac{x^4}{4}\right]_0^1$$
$$= \left(0 - \left(\frac{1}{4} - \frac{1}{2}\right)\right) + \left(\frac{1}{2} - \frac{1}{4}\right)$$
$$= \frac{1}{4} + \frac{1}{4} = \boxed{\frac{1}{2}}$$
</details>

---

**Problem 2:** Find the area between $y = \sin x$ and $y = \cos x$ from $x = 0$ to $x = \frac{\pi}{2}$.

<details>
<summary>Solution</summary>

Intersection: $\sin x = \cos x \implies x = \frac{\pi}{4}$

On $[0, \frac{\pi}{4}]$: $\cos x > \sin x$
On $[\frac{\pi}{4}, \frac{\pi}{2}]$: $\sin x > \cos x$

$$A = \int_0^{\pi/4} (\cos x - \sin x) \, dx + \int_{\pi/4}^{\pi/2} (\sin x - \cos x) \, dx$$
$$= [\sin x + \cos x]_0^{\pi/4} + [-\cos x - \sin x]_{\pi/4}^{\pi/2}$$
$$= (\sqrt{2} - 1) + (-1 - (-\sqrt{2})) = \sqrt{2} - 1 + \sqrt{2} - 1 = \boxed{2\sqrt{2} - 2}$$
</details>

---

**Problem 3:** Find the area enclosed by $x = y^2 - 2$ and $x = y$.

<details>
<summary>Solution</summary>

Intersections: $y^2 - 2 = y \implies y^2 - y - 2 = 0 \implies y = -1, 2$

Line is to the right of parabola on this interval.

$$A = \int_{-1}^{2} [y - (y^2 - 2)] \, dy = \int_{-1}^{2} (y - y^2 + 2) \, dy$$
$$= \left[\frac{y^2}{2} - \frac{y^3}{3} + 2y\right]_{-1}^{2}$$
$$= \left(2 - \frac{8}{3} + 4\right) - \left(\frac{1}{2} + \frac{1}{3} - 2\right)$$
$$= \frac{10}{3} + \frac{7}{6} = \boxed{\frac{9}{2}}$$
</details>

---

### Section B: Disk and Washer Method

**Problem 4:** Find the volume when $y = x^3$ from $x = 0$ to $x = 2$ is rotated about the x-axis.

<details>
<summary>Solution</summary>

$$V = \pi \int_0^2 (x^3)^2 \, dx = \pi \int_0^2 x^6 \, dx = \pi \left[\frac{x^7}{7}\right]_0^2 = \boxed{\frac{128\pi}{7}}$$
</details>

---

**Problem 5:** Find the volume when the region between $y = x$ and $y = x^2$ is rotated about the x-axis.

<details>
<summary>Solution</summary>

Intersections at $x = 0$ and $x = 1$. Use washers:
- Outer: $R = x$
- Inner: $r = x^2$

$$V = \pi \int_0^1 (x^2 - x^4) \, dx = \pi \left[\frac{x^3}{3} - \frac{x^5}{5}\right]_0^1 = \pi\left(\frac{1}{3} - \frac{1}{5}\right) = \boxed{\frac{2\pi}{15}}$$
</details>

---

**Problem 6:** Find the volume when $y = \sqrt{x}$ from $x = 1$ to $x = 4$ is rotated about $y = 3$.

<details>
<summary>Solution</summary>

The curve is below $y = 3$, so we have washers:
- Outer radius: $R = 3 - 0 = 3$ (from axis to x-axis... wait, the region is just the curve)

Actually, rotating just the curve $y = \sqrt{x}$:
- Outer: $R = 3$ (from axis to x-axis)
- Inner: $r = 3 - \sqrt{x}$ (from axis to curve)

$$V = \pi \int_1^4 \left[9 - (3 - \sqrt{x})^2\right] dx$$
$$= \pi \int_1^4 \left[9 - 9 + 6\sqrt{x} - x\right] dx$$
$$= \pi \int_1^4 (6\sqrt{x} - x) \, dx$$
$$= \pi \left[4x^{3/2} - \frac{x^2}{2}\right]_1^4$$
$$= \pi \left[(32 - 8) - (4 - \frac{1}{2})\right] = \pi\left[24 - \frac{7}{2}\right] = \boxed{\frac{41\pi}{2}}$$
</details>

---

**Problem 7:** Find the volume when $y = e^x$, $y = 0$, $x = 0$, $x = 1$ is rotated about the y-axis.

<details>
<summary>Solution</summary>

Use horizontal slices. $x = \ln y$, bounds: $y = 1$ to $y = e$

- Outer: $R = 1$ (from y-axis to $x = 1$)
- Inner: $r = \ln y$ (from y-axis to curve)

$$V = \pi \int_1^e (1 - \ln^2 y) \, dy$$

Let $u = \ln y$, $du = \frac{1}{y}dy$... Actually easier to use shell method, but for washers:

$$V = \pi \int_1^e (1 - \ln^2 y) \, dy$$

Using $\int \ln^2 y \, dy = y\ln^2 y - 2y\ln y + 2y$:

$$= \pi \left[y - y\ln^2 y + 2y\ln y - 2y\right]_1^e$$
$$= \pi \left[(e - e + 2e - 2e) - (1 - 0 + 0 - 2)\right]$$
$$= \pi [0 - (-1)] = \boxed{\pi}$$
</details>

---

### Section C: Cross-Sections

**Problem 8:** The base of a solid is the region between $y = x$ and $y = x^2$. Cross-sections perpendicular to the x-axis are squares. Find the volume.

<details>
<summary>Solution</summary>

Bounds: $x = 0$ to $x = 1$
Width: $w = x - x^2$
Area: $A = (x - x^2)^2 = x^2 - 2x^3 + x^4$

$$V = \int_0^1 (x^2 - 2x^3 + x^4) \, dx = \left[\frac{x^3}{3} - \frac{x^4}{2} + \frac{x^5}{5}\right]_0^1$$
$$= \frac{1}{3} - \frac{1}{2} + \frac{1}{5} = \frac{10 - 15 + 6}{30} = \boxed{\frac{1}{30}}$$
</details>

---

**Problem 9:** A solid has a circular base with radius 3. Cross-sections perpendicular to a diameter are isosceles right triangles. Find the volume.

<details>
<summary>Solution</summary>

Place diameter along x-axis. Circle: $x^2 + y^2 = 9$
At position x, width = $2\sqrt{9-x^2}$
For isosceles right triangle with legs = width:
$$A = \frac{1}{2}(2\sqrt{9-x^2})^2 = 2(9-x^2)$$

$$V = \int_{-3}^{3} 2(9 - x^2) \, dx = 2\left[9x - \frac{x^3}{3}\right]_{-3}^{3}$$
$$= 2\left[(27 - 9) - (-27 + 9)\right] = 2[18 + 18] = \boxed{72}$$
</details>

---

### Section D: Average Value

**Problem 10:** Find the average value of $f(x) = \cos x$ on $[0, \pi]$.

<details>
<summary>Solution</summary>

$$f_{avg} = \frac{1}{\pi - 0} \int_0^{\pi} \cos x \, dx = \frac{1}{\pi}[\sin x]_0^{\pi} = \frac{1}{\pi}(0 - 0) = \boxed{0}$$
</details>

---

**Problem 11:** Find the average value of $f(x) = x^2$ on $[-1, 2]$ and find $c$ where $f(c) = f_{avg}$.

<details>
<summary>Solution</summary>

$$f_{avg} = \frac{1}{3} \int_{-1}^{2} x^2 \, dx = \frac{1}{3}\left[\frac{x^3}{3}\right]_{-1}^{2} = \frac{1}{3} \cdot \frac{8 + 1}{3} = \boxed{1}$$

Find c: $c^2 = 1 \implies c = \pm 1$
In interval $(-1, 2)$: $\boxed{c = 1}$
</details>

---

### Section E: Motion Problems

**Problem 12:** A particle moves with velocity $v(t) = t^2 - 5t + 4$. Find:
a) When is the particle at rest?
b) Displacement from $t = 0$ to $t = 5$
c) Total distance from $t = 0$ to $t = 5$

<details>
<summary>Solution</summary>

**a)** $v(t) = 0$: $t^2 - 5t + 4 = 0 \implies (t-1)(t-4) = 0$
$\boxed{t = 1, t = 4}$

**b)** Displacement:
$$\int_0^5 (t^2 - 5t + 4) \, dt = \left[\frac{t^3}{3} - \frac{5t^2}{2} + 4t\right]_0^5$$
$$= \frac{125}{3} - \frac{125}{2} + 20 = \frac{250 - 375 + 120}{6} = \boxed{-\frac{5}{6}}$$

**c)** Check signs:
- $v(0) = 4 > 0$ (moving right on $[0,1]$)
- $v(2) = 4 - 10 + 4 = -2 < 0$ (moving left on $[1,4]$)
- $v(5) = 25 - 25 + 4 = 4 > 0$ (moving right on $[4,5]$)

$$\int_0^1 v \, dt = \frac{1}{3} - \frac{5}{2} + 4 = \frac{2 - 15 + 24}{6} = \frac{11}{6}$$

$$\int_1^4 v \, dt = \left(\frac{64}{3} - 40 + 16\right) - \frac{11}{6} = \frac{-8}{3} - \frac{11}{6} = -\frac{27}{6} = -\frac{9}{2}$$

$$\int_4^5 v \, dt = -\frac{5}{6} - (-\frac{9}{2}) = -\frac{5}{6} + \frac{27}{6} = \frac{22}{6} = \frac{11}{3}$$

Wait, let me recalculate more carefully:
$$\int_4^5 v \, dt = \left[\frac{t^3}{3} - \frac{5t^2}{2} + 4t\right]_4^5 = \left(\frac{125}{3} - \frac{125}{2} + 20\right) - \left(\frac{64}{3} - 40 + 16\right)$$
$$= \frac{-5}{6} - \frac{-8}{3} = \frac{-5 + 16}{6} = \frac{11}{6}$$

Total Distance = $\frac{11}{6} + \frac{9}{2} + \frac{11}{6} = \frac{11 + 27 + 11}{6} = \boxed{\frac{49}{6}}$
</details>

---

**Problem 13:** Given $a(t) = \sin t$, $v(0) = -1$, $s(0) = 0$. Find $s(t)$.

<details>
<summary>Solution</summary>

$$v(t) = \int \sin t \, dt = -\cos t + C$$
$$v(0) = -1 \implies -1 + C = -1 \implies C = 0$$
$$v(t) = -\cos t$$

$$s(t) = \int -\cos t \, dt = -\sin t + C$$
$$s(0) = 0 \implies C = 0$$
$$\boxed{s(t) = -\sin t}$$
</details>

---

**Problem 14:** A ball is thrown upward with initial velocity 48 ft/s from height 64 ft. Acceleration is $a = -32$ ft/s². Find:
a) Maximum height
b) Time when it hits the ground
c) Speed when it hits the ground

<details>
<summary>Solution</summary>

$$v(t) = -32t + 48$$
$$s(t) = -16t^2 + 48t + 64$$

**a)** Max height when $v = 0$: $t = \frac{48}{32} = 1.5$ s
$$s(1.5) = -16(2.25) + 48(1.5) + 64 = -36 + 72 + 64 = \boxed{100 \text{ ft}}$$

**b)** Hits ground when $s = 0$:
$$-16t^2 + 48t + 64 = 0$$
$$t^2 - 3t - 4 = 0$$
$$(t-4)(t+1) = 0$$
$$\boxed{t = 4 \text{ s}}$$

**c)** Speed at $t = 4$:
$$v(4) = -32(4) + 48 = -80$$
Speed = $\boxed{80 \text{ ft/s}}$
</details>

---

## 🎯 8.8 AP Exam Tips

### Common Question Types

1. **Area problems** - Always sketch first, identify top/bottom
2. **Volume by revolution** - Know when to use disk vs washer
3. **Cross-section volumes** - Set up area formula carefully
4. **Average value** - Remember to divide by interval length
5. **Motion** - Distinguish displacement from total distance

### Calculator vs Non-Calculator

**Calculator Section:**
- Numerical integration allowed
- Focus on setup more than computation

**Non-Calculator:**
- Clean integrals (polynomials, basic trig)
- Practice exact computations

### Key Formulas Summary

| Application | Formula |
|-------------|---------|
| Area (vertical) | $\int_a^b [f(x) - g(x)] dx$ |
| Area (horizontal) | $\int_c^d [f(y) - g(y)] dy$ |
| Disk volume | $\pi \int [r(x)]^2 dx$ |
| Washer volume | $\pi \int [R^2 - r^2] dx$ |
| Cross-section | $\int A(x) dx$ |
| Average value | $\frac{1}{b-a}\int_a^b f(x) dx$ |
| Displacement | $\int_a^b v(t) dt$ |
| Total distance | $\int_a^b |v(t)| dt$ |

---

## 📋 Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│                 APPLICATIONS OF INTEGRATION                  │
├─────────────────────────────────────────────────────────────┤
│  AREA BETWEEN CURVES                                         │
│  • Vertical: ∫[top - bottom] dx                             │
│  • Horizontal: ∫[right - left] dy                           │
│  • Find intersections first!                                │
├─────────────────────────────────────────────────────────────┤
│  VOLUMES OF REVOLUTION                                       │
│  • Disk: π∫r² dx (region touches axis)                      │
│  • Washer: π∫(R² - r²) dx (hole in middle)                  │
│  • Radius = distance from axis to curve                      │
├─────────────────────────────────────────────────────────────┤
│  CROSS-SECTIONS                                              │
│  • V = ∫A(x) dx where A = cross-section area                │
│  • Square: A = w², Semicircle: A = πw²/8                    │
│  • Equilateral △: A = (√3/4)w²                              │
├─────────────────────────────────────────────────────────────┤
│  AVERAGE VALUE                                               │
│  • f_avg = (1/(b-a)) ∫f(x) dx                               │
│  • MVT: ∃c where f(c) = f_avg                               │
├─────────────────────────────────────────────────────────────┤
│  MOTION                                                      │
│  • Displacement = ∫v dt (signed)                            │
│  • Total Distance = ∫|v| dt (split at v = 0)                │
│  • s' = v, v' = a                                           │
└─────────────────────────────────────────────────────────────┘
```

---

**Good luck on the AP Exam! 🍀**

:::GUIDE:::
