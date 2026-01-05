:::GUIDE:::
unit::=8
title::=📐 Unit 8: Applications of Integration
desc::=Apply integrals to area, volume, and arc length problems
diff::=Hard
time::=60 min
tags::=calculus,bc,area,volume,arc-length
content::=

# 📐 Unit 8: Applications of Integration

Master the powerful applications of definite integrals! This unit covers calculating areas, volumes, arc lengths, and surface areas—essential skills for the AP Calculus BC exam.

---

## 📋 Unit Overview

| Topic | Description | BC Exclusive |
|-------|-------------|--------------|
| Area Between Curves | Finding area enclosed by two or more functions | No |
| Disk/Washer Method | Volumes of revolution with perpendicular cross-sections | No |
| Cross-Section Method | Volumes with known cross-sectional shapes | No |
| Cylindrical Shells | Alternative method for volumes of revolution | ✅ Yes |
| Arc Length | Length of a curve between two points | ✅ Yes |
| Surface Area | Area of surfaces of revolution | ✅ Yes |
| Average Value | Mean value of a function over an interval | No |

---

## 📊 Topic 1: Area Between Curves

### The Fundamental Concept

When finding area between curves, we integrate the difference between the "top" and "bottom" functions (or "right" and "left" for horizontal integration).

```
    y
    │     f(x) ← top curve
    │   ╭─────╮
    │  ╱░░░░░░░╲    ← shaded area
    │ ╱░░░░░░░░░╲
    │╱░░░░░░░░░░░╲
    ├────────────── g(x) ← bottom curve
    │    a     b
    └──────────────── x
```

### Formula: Vertical Slices (dx)

$$A = \int_a^b [f(x) - g(x)] \, dx$$

Where:
- **f(x)** = upper curve
- **g(x)** = lower curve
- **a, b** = x-coordinates of intersection points

### Formula: Horizontal Slices (dy)

$$A = \int_c^d [f(y) - g(y)] \, dy$$

Where:
- **f(y)** = right curve (solve for x)
- **g(y)** = left curve (solve for x)
- **c, d** = y-coordinates of intersection points

### When to Use Horizontal vs. Vertical Slices

| Use Vertical (dx) | Use Horizontal (dy) |
|-------------------|---------------------|
| Functions easily expressed as y = f(x) | Functions easily expressed as x = g(y) |
| Curves don't switch positions | Avoids splitting into multiple integrals |
| Standard parabolas, polynomials | Sideways parabolas, x = y² forms |

### Example 1: Basic Area Problem

**Find the area between y = x² and y = x + 2**

**Step 1:** Find intersection points
```
x² = x + 2
x² - x - 2 = 0
(x - 2)(x + 1) = 0
x = -1, x = 2
```

**Step 2:** Determine which function is on top
- At x = 0: y = x + 2 = 2, y = x² = 0
- Linear function is on top!

**Step 3:** Set up and evaluate integral
$$A = \int_{-1}^{2} [(x + 2) - x^2] \, dx$$

$$A = \int_{-1}^{2} (x + 2 - x^2) \, dx$$

$$A = \left[\frac{x^2}{2} + 2x - \frac{x^3}{3}\right]_{-1}^{2}$$

$$A = \left(\frac{4}{2} + 4 - \frac{8}{3}\right) - \left(\frac{1}{2} - 2 + \frac{1}{3}\right)$$

$$A = \left(2 + 4 - \frac{8}{3}\right) - \left(\frac{1}{2} - 2 + \frac{1}{3}\right)$$

$$A = 6 - \frac{8}{3} - \frac{1}{2} + 2 - \frac{1}{3} = 8 - 3 - \frac{1}{2} = \frac{9}{2}$$

### Example 2: Area Using Horizontal Slices

**Find the area enclosed by x = y² and x = y + 2**

**Step 1:** Find intersection points
```
y² = y + 2
y² - y - 2 = 0
(y - 2)(y + 1) = 0
y = -1, y = 2
```

**Step 2:** Identify right and left curves
- Right curve: x = y + 2 (larger x-values)
- Left curve: x = y²

**Step 3:** Set up integral
$$A = \int_{-1}^{2} [(y + 2) - y^2] \, dy = \frac{9}{2}$$

### Area with Multiple Regions

When curves cross within the interval, split into separate integrals:

```
    y
    │        ╱
    │   ╱╲  ╱     curves cross!
    │  ╱  ╲╱
    │ ╱   ╱╲
    │╱   ╱  ╲
    ├───────────── x
    a   c    b
```

$$A = \int_a^c |f(x) - g(x)| \, dx + \int_c^b |f(x) - g(x)| \, dx$$

Or equivalently:
$$A = \int_a^b |f(x) - g(x)| \, dx$$

---

## 🔵 Topic 2: Volume by Disks and Washers

### The Disk Method

When rotating a region around an axis, if there's NO gap between the curve and the axis:

```
  Rotation around x-axis:
  
      │  ╭───╮
      │ ╱     ╲  ← f(x)
  ────┼────────────
      │ ╲     ╱
      │  ╰───╯
      
  Creates solid disks!
```

**Formula (around x-axis):**
$$V = \pi \int_a^b [f(x)]^2 \, dx$$

**Formula (around y-axis):**
$$V = \pi \int_c^d [g(y)]^2 \, dy$$

### Visualizing a Disk

```
        ┌─────────┐
       ╱│         │╲
      ╱ │    r    │ ╲
     │  │←───────→│  │
      ╲ │         │ ╱
       ╲│         │╱
        └─────────┘
           dx
           
  Volume of disk = π r² × thickness
                 = π [f(x)]² dx
```

### The Washer Method

When there's a GAP between the region and the axis of rotation:

```
  Region between two curves:
  
      │     ╭─╮  ← outer: R(x)
      │   ╱░░░╲
      │  │░░░░░│ ← inner: r(x)
  ────┼───╲░░░╱──────
      │    ╰─╯
      
  Creates washers (donuts)!
```

**Formula (around x-axis):**
$$V = \pi \int_a^b \left([R(x)]^2 - [r(x)]^2\right) \, dx$$

Where:
- **R(x)** = outer radius (farther from axis)
- **r(x)** = inner radius (closer to axis)

### Visualizing a Washer

```
        ┌─────────────┐
       ╱│  ┌─────┐    │╲
      ╱ │  │     │    │ ╲
     │  │  │hole │ R  │  │
      ╲ │  │  r  │    │ ╱
       ╲│  └─────┘    │╱
        └─────────────┘
              dx
              
  Volume = π(R² - r²) × dx
```

### Example 3: Disk Method

**Find the volume when y = √x from x = 0 to x = 4 is rotated about the x-axis.**

```
      y
      │   ╭──────
      │  ╱
      │ ╱  y = √x
      │╱
      └─────────── x
      0          4
```

$$V = \pi \int_0^4 (\sqrt{x})^2 \, dx = \pi \int_0^4 x \, dx$$

$$V = \pi \left[\frac{x^2}{2}\right]_0^4 = \pi \cdot \frac{16}{2} = 8\pi$$

### Example 4: Washer Method

**Find the volume when the region between y = x² and y = x is rotated about the x-axis.**

**Step 1:** Find intersection points
```
x² = x → x(x-1) = 0 → x = 0, 1
```

**Step 2:** Identify R(x) and r(x)
- For 0 ≤ x ≤ 1: y = x is above y = x²
- R(x) = x (outer, farther from x-axis)
- r(x) = x² (inner, closer to x-axis)

**Step 3:** Calculate
$$V = \pi \int_0^1 [x^2 - (x^2)^2] \, dx = \pi \int_0^1 (x^2 - x^4) \, dx$$

$$V = \pi \left[\frac{x^3}{3} - \frac{x^5}{5}\right]_0^1 = \pi \left(\frac{1}{3} - \frac{1}{5}\right) = \frac{2\pi}{15}$$

### Rotation About Other Lines

**Around y = k (horizontal line):**
- Adjust radii: R(x) = |f(x) - k| and r(x) = |g(x) - k|

**Around x = h (vertical line):**
- Use horizontal slices or shell method
- Adjust radii accordingly

### Example 5: Rotation About y = -1

**Rotate the region between y = x and y = x² about y = -1**

```
      y
    2 │      ╱
      │    ╱░
    1 │  ╱░░░  y = x
      │╱░░░╱
    0 ├───────── x
   -1 ┼─────────  ← axis of rotation
      │
```

**Radii from y = -1:**
- R(x) = x - (-1) = x + 1 (outer)
- r(x) = x² - (-1) = x² + 1 (inner)

$$V = \pi \int_0^1 [(x+1)^2 - (x^2+1)^2] \, dx$$

---

## 🔷 Topic 3: Volume by Cross-Sections

### The Concept

Instead of rotating, we can build a solid with known cross-sectional shapes:

```
  Side view:          Cross-sections:
      
      ╱╲              □ Square
     ╱  ╲             △ Triangle
    ╱    ╲            ⬭ Semicircle
   ╱______╲           ⬡ Other shapes
   
  Each cross-section perpendicular to the base
```

### General Formula

$$V = \int_a^b A(x) \, dx$$

Where **A(x)** is the area of the cross-section at position x.

### Common Cross-Section Formulas

| Shape | Area Formula | If side = s |
|-------|-------------|-------------|
| Square | s² | s² |
| Equilateral Triangle | (√3/4)s² | (√3/4)s² |
| Isosceles Right Triangle | (1/2)s² | (1/2)s² |
| Semicircle | (1/2)π(s/2)² = πs²/8 | πs²/8 |
| Rectangle (height = 2s) | 2s² | 2s² |

### Example 6: Square Cross-Sections

**The base is the region between y = √x and y = 0 from x = 0 to x = 4. Cross-sections perpendicular to the x-axis are squares.**

```
  Top view (base):        3D view:
      y                    
      │   ╭──────         ╱╲
      │  ╱                │  ╲
      │ ╱                 │   ╲
      │╱                  │____╲
      └───────── x       ╱______╲
      0        4
      
  Side length s = √x at each x
```

**Solution:**
- Side of square at x: s = √x - 0 = √x
- Area: A(x) = s² = x

$$V = \int_0^4 x \, dx = \left[\frac{x^2}{2}\right]_0^4 = 8$$

### Example 7: Semicircular Cross-Sections

**Base: region between y = x² and y = 1 from x = -1 to x = 1. Cross-sections perpendicular to y-axis are semicircles.**

```
  Base region:            Cross-section:
      y                        
    1 ├─────────           ╭───╮
      │ ╲     ╱            │   │
      │   ╲ ╱              ╰───╯
    0 └───────── x        semicircle
     -1    0    1
```

**Solution:**
- At height y, the width is: 2√y (from x = -√y to x = √y)
- Diameter = 2√y, so radius = √y
- Area of semicircle: A(y) = (1/2)π(√y)² = πy/2

$$V = \int_0^1 \frac{\pi y}{2} \, dy = \frac{\pi}{2} \cdot \frac{1}{2} = \frac{\pi}{4}$$

### Example 8: Equilateral Triangle Cross-Sections

**Base is a circle x² + y² = 4. Cross-sections perpendicular to x-axis are equilateral triangles.**

```
  Circle base:            Triangle cross-section:
      y                         ╱╲
    2 │   ╭───╮              ╱    ╲
      │  ╱     ╲            ╱______╲
    0 ├─●───────●─ x           s
      │  ╲     ╱
   -2 │   ╰───╯
     -2   0    2
```

**Solution:**
- At x, circle gives: y = ±√(4-x²)
- Side length: s = 2√(4-x²)
- Area: A(x) = (√3/4)s² = (√3/4) · 4(4-x²) = √3(4-x²)

$$V = \int_{-2}^{2} \sqrt{3}(4-x^2) \, dx = \sqrt{3}\left[4x - \frac{x^3}{3}\right]_{-2}^{2}$$

$$V = \sqrt{3}\left[\left(8 - \frac{8}{3}\right) - \left(-8 + \frac{8}{3}\right)\right] = \sqrt{3} \cdot \frac{32}{3} = \frac{32\sqrt{3}}{3}$$

---

## 🌀 Topic 4: Volume by Cylindrical Shells (BC Only)

### Why Use Shells?

The shell method is often easier when:
- Rotating about a **vertical** axis with functions of x
- The washer method would require solving for x in terms of y
- Multiple functions would need multiple integrals with washers

```
  Disk/Washer:              Shell:
  Slices ⟂ axis            Slices ∥ axis
  
      │                        │
    ──┼──  ←slice            ▓▓│▓▓  ←shell
      │                        │
```

### Shell Method Formula

**Rotation about y-axis:**
$$V = 2\pi \int_a^b x \cdot f(x) \, dx$$

**Rotation about x-axis:**
$$V = 2\pi \int_c^d y \cdot g(y) \, dy$$

### Understanding a Cylindrical Shell

```
  Unrolled shell:
  ┌────────────────────────┐
  │                        │  height = f(x)
  │                        │
  └────────────────────────┘
        circumference = 2πx
        
  Volume = circumference × height × thickness
         = 2πx · f(x) · dx
```

### Visual: Shell Method

```
     y
     │    ╭──╮
     │   ╱    ╲
     │  │      │  f(x)
     │  │ ▓▓▓▓ │  ← shell at x
     │  │      │
     └──┴──────┴───── x
        x    x+dx
        
  Rotating about y-axis:
  Shell radius = x
  Shell height = f(x)
```

### Example 9: Basic Shell Method

**Find the volume when y = x² from x = 0 to x = 2 is rotated about the y-axis.**

```
     y
   4 │      ╭
     │     ╱
     │    ╱
     │   ╱  y = x²
     │  ╱
     │ ╱
     └─────────── x
     0          2
```

**Using Shells:**
$$V = 2\pi \int_0^2 x \cdot x^2 \, dx = 2\pi \int_0^2 x^3 \, dx$$

$$V = 2\pi \left[\frac{x^4}{4}\right]_0^2 = 2\pi \cdot 4 = 8\pi$$

**Verify with Disks (around y-axis, horizontal slices):**
- x = √y, from y = 0 to y = 4
$$V = \pi \int_0^4 (\sqrt{y})^2 \, dy = \pi \int_0^4 y \, dy = \pi \cdot 8 = 8\pi$$ ✓

### Example 10: Shell Method with Region Between Curves

**Find the volume when the region between y = x and y = x² is rotated about the y-axis.**

$$V = 2\pi \int_0^1 x(x - x^2) \, dx = 2\pi \int_0^1 (x^2 - x^3) \, dx$$

$$V = 2\pi \left[\frac{x^3}{3} - \frac{x^4}{4}\right]_0^1 = 2\pi \left(\frac{1}{3} - \frac{1}{4}\right) = 2\pi \cdot \frac{1}{12} = \frac{\pi}{6}$$

### Shell Method About Other Axes

**Rotation about x = h (vertical line):**
$$V = 2\pi \int_a^b |x - h| \cdot f(x) \, dx$$

**Rotation about y = k (horizontal line):**
$$V = 2\pi \int_c^d |y - k| \cdot g(y) \, dy$$

### Example 11: Rotation About x = 3

**Rotate the region under y = x from x = 0 to x = 2 about the line x = 3.**

```
     y
   2 │        ╱│
     │       ╱ │
     │      ╱  │
     │     ╱   │
     │    ╱    │
     └────────────── x
     0   2    3
              ↑ axis
```

- Shell radius = 3 - x (distance from shell to axis)
- Shell height = x

$$V = 2\pi \int_0^2 (3-x) \cdot x \, dx = 2\pi \int_0^2 (3x - x^2) \, dx$$

$$V = 2\pi \left[\frac{3x^2}{2} - \frac{x^3}{3}\right]_0^2 = 2\pi \left(6 - \frac{8}{3}\right) = 2\pi \cdot \frac{10}{3} = \frac{20\pi}{3}$$

### Comparison: When to Use Which Method

| Situation | Preferred Method |
|-----------|------------------|
| Rotate about x-axis, y = f(x) given | Disks/Washers (dx) |
| Rotate about y-axis, y = f(x) given | Shells (dx) |
| Rotate about y-axis, x = g(y) given | Disks/Washers (dy) |
| Rotate about x-axis, x = g(y) given | Shells (dy) |
| Function hard to invert | Shells |
| Multiple integrals needed for washers | Shells |

---

## 📏 Topic 5: Arc Length (BC Only)

### The Arc Length Formula

For a smooth curve y = f(x) from x = a to x = b:

$$L = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx$$

Alternatively, for x = g(y) from y = c to y = d:

$$L = \int_c^d \sqrt{1 + \left(\frac{dx}{dy}\right)^2} \, dy$$

### Derivation Intuition

```
  Using tiny line segments:
  
        │╱ ds
        ╱│
       ╱ │dy
      ╱──┤
      dx
      
  ds² = dx² + dy²
  ds = √(dx² + dy²) = √(1 + (dy/dx)²) dx
```

### Parametric Arc Length

For x = x(t), y = y(t) from t = α to t = β:

$$L = \int_\alpha^\beta \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2} \, dt$$

### Example 12: Arc Length of a Curve

**Find the arc length of y = x^(3/2) from x = 0 to x = 4.**

**Step 1:** Find dy/dx
$$\frac{dy}{dx} = \frac{3}{2}x^{1/2}$$

**Step 2:** Set up integral
$$L = \int_0^4 \sqrt{1 + \left(\frac{3}{2}x^{1/2}\right)^2} \, dx = \int_0^4 \sqrt{1 + \frac{9x}{4}} \, dx$$

**Step 3:** Evaluate (u-substitution: u = 1 + 9x/4)
$$L = \int_0^4 \sqrt{1 + \frac{9x}{4}} \, dx$$

Let u = 1 + 9x/4, then du = (9/4)dx → dx = (4/9)du
- When x = 0: u = 1
- When x = 4: u = 10

$$L = \frac{4}{9} \int_1^{10} \sqrt{u} \, du = \frac{4}{9} \cdot \frac{2}{3} \left[u^{3/2}\right]_1^{10}$$

$$L = \frac{8}{27}(10^{3/2} - 1) = \frac{8}{27}(10\sqrt{10} - 1) \approx 9.07$$

### Example 13: Arc Length with Perfect Square

**Find the arc length of y = (x²/4) - (ln x)/2 from x = 1 to x = e.**

**Step 1:** Find dy/dx
$$\frac{dy}{dx} = \frac{x}{2} - \frac{1}{2x}$$

**Step 2:** Calculate 1 + (dy/dx)²
$$\left(\frac{dy}{dx}\right)^2 = \left(\frac{x}{2} - \frac{1}{2x}\right)^2 = \frac{x^2}{4} - \frac{1}{2} + \frac{1}{4x^2}$$

$$1 + \left(\frac{dy}{dx}\right)^2 = \frac{x^2}{4} + \frac{1}{2} + \frac{1}{4x^2} = \left(\frac{x}{2} + \frac{1}{2x}\right)^2$$

**Step 3:** Evaluate
$$L = \int_1^e \sqrt{\left(\frac{x}{2} + \frac{1}{2x}\right)^2} \, dx = \int_1^e \left(\frac{x}{2} + \frac{1}{2x}\right) \, dx$$

$$L = \left[\frac{x^2}{4} + \frac{\ln x}{2}\right]_1^e = \left(\frac{e^2}{4} + \frac{1}{2}\right) - \left(\frac{1}{4} + 0\right) = \frac{e^2 - 1}{4} + \frac{1}{2}$$

### Parametric Arc Length Example

**Find the arc length of x = cos t, y = sin t from t = 0 to t = 2π (a circle).**

$$\frac{dx}{dt} = -\sin t, \quad \frac{dy}{dt} = \cos t$$

$$L = \int_0^{2\pi} \sqrt{(-\sin t)^2 + (\cos t)^2} \, dt = \int_0^{2\pi} \sqrt{1} \, dt = 2\pi$$

This confirms the circumference of a unit circle!

---

## 🌐 Topic 6: Surface Area of Revolution (BC Only)

### Surface Area Formulas

**Rotation about x-axis:**
$$S = 2\pi \int_a^b f(x) \sqrt{1 + [f'(x)]^2} \, dx$$

**Rotation about y-axis:**
$$S = 2\pi \int_a^b x \sqrt{1 + [f'(x)]^2} \, dx$$

### Understanding the Formula

```
  Rotating a curve:
  
       │    ╭──╮
       │   ╱    ╲
       │  │  ds  │ ← small arc length
   ────┼──│──────│──────
       │  │      │
       │   ╲    ╱
       │    ╰──╯
       
  Surface band ≈ circumference × arc length
                = 2πr × ds
```

### Parametric Surface Area

**Rotation about x-axis:**
$$S = 2\pi \int_\alpha^\beta y(t) \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2} \, dt$$

### Example 14: Surface Area of a Cone

**Find the surface area when y = x from x = 0 to x = 1 is rotated about the x-axis.**

```
       y
     1 │   ╱
       │  ╱
       │ ╱  y = x
       │╱
       └───────── x
       0        1
       
  Creates a cone!
```

**Step 1:** Find f'(x) = 1

**Step 2:** Set up integral
$$S = 2\pi \int_0^1 x \sqrt{1 + 1} \, dx = 2\pi\sqrt{2} \int_0^1 x \, dx$$

**Step 3:** Evaluate
$$S = 2\pi\sqrt{2} \cdot \frac{1}{2} = \pi\sqrt{2}$$

### Example 15: Surface Area of a Sphere

**Find the surface area when y = √(r² - x²) from x = -r to x = r is rotated about the x-axis (a sphere of radius r).**

**Step 1:** Find dy/dx
$$\frac{dy}{dx} = \frac{-x}{\sqrt{r^2 - x^2}}$$

**Step 2:** Calculate 1 + (dy/dx)²
$$1 + \left(\frac{dy}{dx}\right)^2 = 1 + \frac{x^2}{r^2 - x^2} = \frac{r^2 - x^2 + x^2}{r^2 - x^2} = \frac{r^2}{r^2 - x^2}$$

$$\sqrt{1 + \left(\frac{dy}{dx}\right)^2} = \frac{r}{\sqrt{r^2 - x^2}}$$

**Step 3:** Set up and evaluate
$$S = 2\pi \int_{-r}^{r} \sqrt{r^2 - x^2} \cdot \frac{r}{\sqrt{r^2 - x^2}} \, dx = 2\pi \int_{-r}^{r} r \, dx$$

$$S = 2\pi r \cdot 2r = 4\pi r^2$$

This confirms the formula for surface area of a sphere!

---

## 📊 Topic 7: Average Value of a Function

### The Average Value Formula

The average (mean) value of f(x) on [a, b]:

$$f_{avg} = \frac{1}{b-a} \int_a^b f(x) \, dx$$

### Geometric Interpretation

```
  The area under the curve equals
  the area of a rectangle with:
  - width = b - a
  - height = f_avg
  
      y
      │    ╭───╮
 favg ├────┼───┼────  ← average value
      │   ╱│   │╲
      │  ╱░│░░░│░╲
      │ ╱░░│░░░│░░╲
      └────┴───┴───── x
         a     b
```

### Example 16: Average Value

**Find the average value of f(x) = x² on [0, 3].**

$$f_{avg} = \frac{1}{3-0} \int_0^3 x^2 \, dx = \frac{1}{3} \cdot \left[\frac{x^3}{3}\right]_0^3 = \frac{1}{3} \cdot 9 = 3$$

### Mean Value Theorem for Integrals

If f is continuous on [a, b], there exists at least one c in (a, b) such that:

$$f(c) = \frac{1}{b-a} \int_a^b f(x) \, dx = f_{avg}$$

### Example 17: Finding c

**For f(x) = x² on [0, 3], find c where f(c) = f_avg = 3.**

$$c^2 = 3$$
$$c = \sqrt{3} \approx 1.732$$

Since √3 is in (0, 3), the MVT is satisfied.

---

## 🧮 Practice Problems

### Problem Set A: Area Between Curves

**A1.** Find the area between y = sin x and y = cos x from x = 0 to x = π/2.

<details>
<summary>Solution</summary>

Curves intersect at x = π/4.
- From 0 to π/4: cos x ≥ sin x
- From π/4 to π/2: sin x ≥ cos x

$$A = \int_0^{\pi/4} (\cos x - \sin x) \, dx + \int_{\pi/4}^{\pi/2} (\sin x - \cos x) \, dx$$

$$A = [\sin x + \cos x]_0^{\pi/4} + [-\cos x - \sin x]_{\pi/4}^{\pi/2}$$

$$A = (\sqrt{2} - 1) + ((-1) - (-\sqrt{2})) = \sqrt{2} - 1 + \sqrt{2} - 1 = 2\sqrt{2} - 2$$
</details>

**A2.** Find the area enclosed by x = y² - 4 and x = 2 - y².

<details>
<summary>Solution</summary>

Intersection: y² - 4 = 2 - y² → 2y² = 6 → y = ±√3

Right curve: 2 - y² (larger x-values for |y| < √3)

$$A = \int_{-\sqrt{3}}^{\sqrt{3}} [(2-y^2) - (y^2-4)] \, dy = \int_{-\sqrt{3}}^{\sqrt{3}} (6 - 2y^2) \, dy$$

$$A = \left[6y - \frac{2y^3}{3}\right]_{-\sqrt{3}}^{\sqrt{3}} = 2\left(6\sqrt{3} - \frac{2 \cdot 3\sqrt{3}}{3}\right) = 2(6\sqrt{3} - 2\sqrt{3}) = 8\sqrt{3}$$
</details>

### Problem Set B: Volumes

**B1.** Find the volume when y = e^x from x = 0 to x = 1 is rotated about the x-axis.

<details>
<summary>Solution</summary>

$$V = \pi \int_0^1 (e^x)^2 \, dx = \pi \int_0^1 e^{2x} \, dx = \pi \left[\frac{e^{2x}}{2}\right]_0^1 = \frac{\pi(e^2 - 1)}{2}$$
</details>

**B2.** (Shells) Find the volume when y = ln x from x = 1 to x = e is rotated about the y-axis.

<details>
<summary>Solution</summary>

$$V = 2\pi \int_1^e x \ln x \, dx$$

Using integration by parts: u = ln x, dv = x dx

$$V = 2\pi \left[\frac{x^2 \ln x}{2} - \frac{x^2}{4}\right]_1^e = 2\pi \left[\left(\frac{e^2}{2} - \frac{e^2}{4}\right) - \left(0 - \frac{1}{4}\right)\right]$$

$$V = 2\pi \left(\frac{e^2}{4} + \frac{1}{4}\right) = \frac{\pi(e^2 + 1)}{2}$$
</details>

**B3.** The base is the region between y = x² and y = 4. Cross-sections perpendicular to the y-axis are squares. Find the volume.

<details>
<summary>Solution</summary>

At height y: x = ±√y, so side = 2√y

Area: A(y) = (2√y)² = 4y

$$V = \int_0^4 4y \, dy = 4 \cdot \frac{y^2}{2} \Big|_0^4 = 2 \cdot 16 = 32$$
</details>

### Problem Set C: Arc Length and Surface Area (BC)

**C1.** Find the arc length of y = ln(cos x) from x = 0 to x = π/4.

<details>
<summary>Solution</summary>

$$\frac{dy}{dx} = \frac{-\sin x}{\cos x} = -\tan x$$

$$L = \int_0^{\pi/4} \sqrt{1 + \tan^2 x} \, dx = \int_0^{\pi/4} \sec x \, dx$$

$$L = [\ln|\sec x + \tan x|]_0^{\pi/4} = \ln(\sqrt{2} + 1) - \ln(1) = \ln(\sqrt{2} + 1)$$
</details>

**C2.** Find the surface area when y = x³/3 from x = 0 to x = 1 is rotated about the x-axis.

<details>
<summary>Solution</summary>

$$\frac{dy}{dx} = x^2$$

$$S = 2\pi \int_0^1 \frac{x^3}{3} \sqrt{1 + x^4} \, dx$$

Let u = 1 + x⁴, du = 4x³ dx

$$S = 2\pi \cdot \frac{1}{3} \cdot \frac{1}{4} \int_1^2 \sqrt{u} \, du = \frac{\pi}{6} \cdot \frac{2}{3}[u^{3/2}]_1^2$$

$$S = \frac{\pi}{9}(2\sqrt{2} - 1)$$
</details>

### Problem Set D: Average Value

**D1.** Find the average value of f(x) = sin x on [0, π].

<details>
<summary>Solution</summary>

$$f_{avg} = \frac{1}{\pi - 0} \int_0^\pi \sin x \, dx = \frac{1}{\pi}[-\cos x]_0^\pi = \frac{1}{\pi}(1 + 1) = \frac{2}{\pi}$$
</details>

**D2.** Find c in [1, 4] where f(c) equals the average value of f(x) = √x.

<details>
<summary>Solution</summary>

$$f_{avg} = \frac{1}{3} \int_1^4 \sqrt{x} \, dx = \frac{1}{3} \cdot \frac{2}{3}[x^{3/2}]_1^4 = \frac{2}{9}(8 - 1) = \frac{14}{9}$$

$$\sqrt{c} = \frac{14}{9} \Rightarrow c = \frac{196}{81} \approx 2.42$$
</details>

---

## 📝 Quick Reference: Key Formulas

### Area
$$A = \int_a^b |f(x) - g(x)| \, dx$$

### Volume: Disk/Washer
$$V = \pi \int_a^b [R(x)]^2 - [r(x)]^2 \, dx$$

### Volume: Cross-Sections
$$V = \int_a^b A(x) \, dx$$

### Volume: Shells (BC)
$$V = 2\pi \int_a^b (\text{radius})(\text{height}) \, dx$$

### Arc Length (BC)
$$L = \int_a^b \sqrt{1 + [f'(x)]^2} \, dx$$

### Surface Area (BC)
$$S = 2\pi \int_a^b f(x) \sqrt{1 + [f'(x)]^2} \, dx$$

### Average Value
$$f_{avg} = \frac{1}{b-a} \int_a^b f(x) \, dx$$

---

## ⚠️ Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Forgetting to square in disk method | V = π∫[f(x)]² dx, not π∫f(x) dx |
| Wrong order in washer (R² - r²) | Always outer² - inner² |
| Not finding intersection points | Solve f(x) = g(x) first |
| Shell: forgetting 2π | V = 2π∫(radius)(height) dx |
| Arc length: forgetting square root | √(1 + (dy/dx)²), not 1 + (dy/dx)² |
| Average: forgetting 1/(b-a) | Must divide by interval length |
| Wrong axis distance for shells | Distance = |x - axis| or |y - axis| |

---

## 🎯 AP Exam Tips

1. **Read carefully** - identify axis of rotation and method required
2. **Draw a diagram** - visualize the region and the solid
3. **Set up before computing** - verify your integral is correct
4. **Check your answer** - does the volume make physical sense?
5. **Know when to switch methods** - shells vs. washers
6. **BC topics appear frequently** - arc length and shells are common
7. **Calculator problems** - set up the integral, let the calculator evaluate
8. **Units matter** - area in square units, volume in cubic units

---

## 📚 Summary

| Concept | Key Insight |
|---------|-------------|
| Area | ∫(top - bottom) or ∫(right - left) |
| Disks | π∫r² dx, no hole in solid |
| Washers | π∫(R² - r²) dx, hole in solid |
| Cross-sections | ∫A(x) dx with A based on shape |
| Shells | 2π∫(radius)(height), parallel to axis |
| Arc Length | ∫√(1 + (f')²) dx |
| Surface Area | 2π∫f(x)√(1 + (f')²) dx |
| Average Value | (1/(b-a))∫f(x) dx |

Master these applications and you'll be ready for the AP exam! 🏆

:::GUIDE:::
