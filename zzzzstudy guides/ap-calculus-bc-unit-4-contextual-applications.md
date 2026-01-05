:::GUIDE:::
unit::=4
title::=📐 Unit 4: Contextual Applications of Differentiation
desc::=Apply derivatives to real-world motion, rates, and optimization problems
diff::=Hard
time::=55 min
tags::=calculus,bc,applications,motion,rates
content::=

# 📐 Unit 4: Contextual Applications of Differentiation

Welcome to Unit 4 of AP Calculus BC! This unit bridges the gap between abstract differentiation techniques and powerful real-world applications. You'll learn to analyze motion, solve complex related rates problems, use linearization for approximations, master L'Hôpital's Rule, and tackle optimization challenges.

---

## 📚 Table of Contents

1. [Position, Velocity, and Acceleration](#position-velocity-and-acceleration)
2. [Motion Along a Straight Line](#motion-along-a-straight-line)
3. [Motion in the Plane (Parametric)](#motion-in-the-plane)
4. [Related Rates](#related-rates)
5. [Linearization and Differentials](#linearization-and-differentials)
6. [L'Hôpital's Rule](#lhopitals-rule)
7. [Applied Optimization](#applied-optimization)
8. [FRQ Strategies](#frq-strategies)
9. [Practice Problems](#practice-problems)

---

## Position, Velocity, and Acceleration

### The Motion Trilogy

The three fundamental quantities describing motion are connected through differentiation and integration:

$$\text{Position} \xrightarrow{\text{differentiate}} \text{Velocity} \xrightarrow{\text{differentiate}} \text{Acceleration}$$

$$\text{Acceleration} \xrightarrow{\text{integrate}} \text{Velocity} \xrightarrow{\text{integrate}} \text{Position}$$

### Definitions and Notation

| Quantity | Symbol | Definition | Units |
|----------|--------|------------|-------|
| Position | $s(t)$ or $x(t)$ | Location at time $t$ | meters, feet |
| Velocity | $v(t)$ | $\frac{ds}{dt} = s'(t)$ | m/s, ft/s |
| Speed | $\|v(t)\|$ | Magnitude of velocity | m/s, ft/s |
| Acceleration | $a(t)$ | $\frac{dv}{dt} = v'(t) = s''(t)$ | m/s², ft/s² |

### Key Relationships

$$v(t) = \frac{ds}{dt} = s'(t)$$

$$a(t) = \frac{dv}{dt} = \frac{d^2s}{dt^2} = s''(t)$$

### Interpreting Signs

**Velocity Sign:**
- $v(t) > 0$: Particle moves in positive direction (right/up)
- $v(t) < 0$: Particle moves in negative direction (left/down)
- $v(t) = 0$: Particle is momentarily at rest

**Acceleration Sign:**
- $a(t) > 0$: Velocity is increasing
- $a(t) < 0$: Velocity is decreasing

**Speed Analysis:**
- Speed **increases** when $v(t)$ and $a(t)$ have the **same sign**
- Speed **decreases** when $v(t)$ and $a(t)$ have **opposite signs**

> 💡 **Memory Tip:** Think of pushing a car. If you push in the direction it's moving (same sign), it speeds up. If you push against its motion (opposite signs), it slows down.

---

## Motion Along a Straight Line

### Particle Motion Diagram

```
         ← negative direction    positive direction →
    ──────────────────────┼──────────────────────────
                        origin
                        
    When v(t) > 0: particle moves →
    When v(t) < 0: particle moves ←
    When v(t) = 0: particle stops (potential direction change)
```

### Total Distance vs. Displacement

**Displacement** (net change in position):
$$\text{Displacement} = s(b) - s(a) = \int_a^b v(t) \, dt$$

**Total Distance** (odometer reading):
$$\text{Total Distance} = \int_a^b |v(t)| \, dt$$

> ⚠️ **Common Mistake:** Displacement can be negative or zero; total distance is always non-negative.

### Example 1: Complete Motion Analysis

A particle moves along a line with position $s(t) = t^3 - 6t^2 + 9t + 2$ for $t \geq 0$.

**Find velocity and acceleration:**

$$v(t) = s'(t) = 3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t-1)(t-3)$$

$$a(t) = v'(t) = 6t - 12 = 6(t-2)$$

**Find when particle is at rest:**

$v(t) = 0$ when $t = 1$ and $t = 3$

**Analyze motion on intervals:**

| Interval | $v(t)$ sign | $a(t)$ sign | Motion | Speed |
|----------|-------------|-------------|--------|-------|
| $(0, 1)$ | $+$ | $-$ | Right | Decreasing |
| $(1, 2)$ | $-$ | $-$ | Left | Increasing |
| $(2, 3)$ | $-$ | $+$ | Left | Decreasing |
| $(3, \infty)$ | $+$ | $+$ | Right | Increasing |

**Direction changes at:** $t = 1$ and $t = 3$

### Example 2: Distance and Displacement

Using the same function, find displacement and total distance from $t = 0$ to $t = 4$.

**Displacement:**
$$s(4) - s(0) = (64 - 96 + 36 + 2) - (2) = 6 - 2 = 4$$

**Total Distance:**
Calculate positions at critical times:
- $s(0) = 2$
- $s(1) = 1 - 6 + 9 + 2 = 6$
- $s(3) = 27 - 54 + 27 + 2 = 2$
- $s(4) = 64 - 96 + 36 + 2 = 6$

$$\text{Total Distance} = |s(1) - s(0)| + |s(3) - s(1)| + |s(4) - s(3)|$$
$$= |6 - 2| + |2 - 6| + |6 - 2| = 4 + 4 + 4 = 12$$

### Motion Diagram for Example:

```
    t=3        t=0       t=1       t=4
     ↓          ↓         ↓         ↓
  ───●──────────●─────────●─────────●───→ position
     2          2         6         6
     
  Motion: 0→1→3→4
  Path:   2→6→2→6 (travels 4+4+4=12 units)
```

---

## Motion in the Plane

### Parametric Motion (BC Topic)

For motion described parametrically as $(x(t), y(t))$:

**Velocity Vector:**
$$\vec{v}(t) = \langle x'(t), y'(t) \rangle = \langle \frac{dx}{dt}, \frac{dy}{dt} \rangle$$

**Speed (Magnitude of Velocity):**
$$|\vec{v}(t)| = \sqrt{[x'(t)]^2 + [y'(t)]^2}$$

**Acceleration Vector:**
$$\vec{a}(t) = \langle x''(t), y''(t) \rangle$$

### Direction of Motion

The particle moves in the direction of the velocity vector $\vec{v}(t)$.

**Direction angle:**
$$\theta = \arctan\left(\frac{y'(t)}{x'(t)}\right)$$

### Example 3: Parametric Motion

A particle moves with position $(x(t), y(t)) = (t^2 - 4t, t^3 - 3t)$ for $t \geq 0$.

**Velocity vector:**
$$\vec{v}(t) = \langle 2t - 4, 3t^2 - 3 \rangle$$

**When is the particle at rest?**
Both components must equal zero:
- $2t - 4 = 0 \Rightarrow t = 2$
- $3t^2 - 3 = 0 \Rightarrow t = \pm 1$

No common solution, so **the particle is never completely at rest**.

**Speed at $t = 2$:**
$$|\vec{v}(2)| = \sqrt{(0)^2 + (9)^2} = 9$$

**Horizontal motion only when:** $y'(t) = 0 \Rightarrow t = 1$
At $t = 1$: $\vec{v}(1) = \langle -2, 0 \rangle$ (moving left)

**Vertical motion only when:** $x'(t) = 0 \Rightarrow t = 2$
At $t = 2$: $\vec{v}(2) = \langle 0, 9 \rangle$ (moving up)

### Arc Length for Parametric Curves

The distance traveled from $t = a$ to $t = b$:

$$L = \int_a^b \sqrt{[x'(t)]^2 + [y'(t)]^2} \, dt = \int_a^b |\vec{v}(t)| \, dt$$

### Example 4: Arc Length

Find the distance traveled by $(x(t), y(t)) = (\cos t, \sin t)$ from $t = 0$ to $t = \pi$.

$$x'(t) = -\sin t, \quad y'(t) = \cos t$$

$$L = \int_0^\pi \sqrt{\sin^2 t + \cos^2 t} \, dt = \int_0^\pi 1 \, dt = \pi$$

This is half the circumference of a unit circle! ✓

---

## Related Rates

### Strategy for Related Rates Problems

1. **Draw a diagram** and label all quantities
2. **Identify** what's given and what's asked
3. **Write an equation** relating the variables
4. **Differentiate** with respect to time $t$
5. **Substitute** known values
6. **Solve** for the unknown rate

> 🔑 **Key Insight:** Every variable that changes with time needs $\frac{d}{dt}$ applied!

### Common Geometric Relationships

**Pythagorean Theorem:**
$$x^2 + y^2 = z^2 \quad \Rightarrow \quad 2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 2z\frac{dz}{dt}$$

**Area of Circle:**
$$A = \pi r^2 \quad \Rightarrow \quad \frac{dA}{dt} = 2\pi r \frac{dr}{dt}$$

**Volume of Sphere:**
$$V = \frac{4}{3}\pi r^3 \quad \Rightarrow \quad \frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$$

**Volume of Cone:**
$$V = \frac{1}{3}\pi r^2 h \quad \Rightarrow \quad \frac{dV}{dt} = \frac{1}{3}\pi\left(2rh\frac{dr}{dt} + r^2\frac{dh}{dt}\right)$$

**Similar Triangles:** Often used to eliminate a variable!

### Example 5: Classic Ladder Problem

A 10-foot ladder leans against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 6 feet from the wall?

**Setup:**
```
       │╲
       │ ╲ 10 ft
     y │  ╲
       │   ╲
       └────╲──
          x
```

**Equation:** $x^2 + y^2 = 100$

**Differentiate:** $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$

**At the instant:** $x = 6$, so $y = \sqrt{100 - 36} = 8$

**Given:** $\frac{dx}{dt} = 2$ ft/s

**Solve:**
$$2(6)(2) + 2(8)\frac{dy}{dt} = 0$$
$$24 + 16\frac{dy}{dt} = 0$$
$$\frac{dy}{dt} = -\frac{3}{2} \text{ ft/s}$$

The top slides down at $\frac{3}{2}$ ft/s.

### Example 6: Conical Tank (BC Difficulty)

Water flows into a conical tank at 3 m³/min. The tank has radius 4 m and height 8 m at the top. How fast is the water level rising when the water is 2 m deep?

**Setup:**
```
       ╱  ╲  ← radius 4
      ╱    ╲
     ╱      ╲ height 8
    ╱   r    ╲
   ╱────┼────╲ ← water level h
  ╱     │     ╲
 ╱──────┴──────╲
```

**Similar triangles:** $\frac{r}{h} = \frac{4}{8} = \frac{1}{2}$, so $r = \frac{h}{2}$

**Volume:** $V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \left(\frac{h}{2}\right)^2 h = \frac{\pi h^3}{12}$

**Differentiate:** $\frac{dV}{dt} = \frac{\pi}{12} \cdot 3h^2 \frac{dh}{dt} = \frac{\pi h^2}{4} \frac{dh}{dt}$

**Substitute:** $h = 2$, $\frac{dV}{dt} = 3$

$$3 = \frac{\pi (4)}{4} \frac{dh}{dt} = \pi \frac{dh}{dt}$$

$$\frac{dh}{dt} = \frac{3}{\pi} \approx 0.955 \text{ m/min}$$

### Example 7: Two Moving Objects

Car A travels north at 60 mph from an intersection. Car B travels east at 80 mph toward the same intersection. At noon, Car A is 30 miles north, and Car B is 40 miles east. How fast is the distance between them changing at noon?

**Setup:**
```
         ↑ Car A (going north)
         │
    30mi │
         │
    ─────┼────────● Car B (going west)
              40mi
```

**Variables:**
- $a$ = distance of Car A from intersection (increasing)
- $b$ = distance of Car B from intersection (decreasing)
- $s$ = distance between cars

**Equation:** $s^2 = a^2 + b^2$

**At noon:** $a = 30$, $b = 40$, $s = 50$

**Rates:** $\frac{da}{dt} = 60$, $\frac{db}{dt} = -80$ (decreasing!)

**Differentiate:** $2s\frac{ds}{dt} = 2a\frac{da}{dt} + 2b\frac{db}{dt}$

$$2(50)\frac{ds}{dt} = 2(30)(60) + 2(40)(-80)$$
$$100\frac{ds}{dt} = 3600 - 6400 = -2800$$
$$\frac{ds}{dt} = -28 \text{ mph}$$

The cars are **approaching** at 28 mph.

### Example 8: Angle of Elevation

A rocket rises vertically at 500 m/s. An observer is 2000 m from the launch pad. How fast is the angle of elevation changing when the rocket is 1500 m high?

**Setup:**
```
         │  ● rocket (h)
         │ ╱
         │╱ θ
    ─────●───────
         observer
         ← 2000m →
```

**Relationship:** $\tan\theta = \frac{h}{2000}$

**Differentiate:** $\sec^2\theta \cdot \frac{d\theta}{dt} = \frac{1}{2000}\frac{dh}{dt}$

**At the instant:** $h = 1500$, so $\tan\theta = \frac{3}{4}$

Find $\sec^2\theta$: If $\tan\theta = \frac{3}{4}$, then hypotenuse $= 5$ (3-4-5 triangle)
$$\sec\theta = \frac{5}{4}, \quad \sec^2\theta = \frac{25}{16}$$

**Solve:**
$$\frac{25}{16} \cdot \frac{d\theta}{dt} = \frac{500}{2000} = \frac{1}{4}$$
$$\frac{d\theta}{dt} = \frac{1}{4} \cdot \frac{16}{25} = \frac{4}{25} = 0.16 \text{ rad/s}$$

---

## Linearization and Differentials

### Linear Approximation (Tangent Line Approximation)

Near $x = a$, a differentiable function can be approximated by its tangent line:

$$f(x) \approx L(x) = f(a) + f'(a)(x - a)$$

This is the **linearization** of $f$ at $a$.

### Geometric Interpretation

```
                    ╱ actual curve f(x)
           ╱──────○─────╲
          ╱   ╱   │
         ╱  ╱     │ error
        ╱ ╱       │
       ╱╱─────────● L(x) tangent line
      ○ (a, f(a))
```

### Example 9: Estimating Square Roots

Estimate $\sqrt{65}$ using linearization.

**Choose:** $f(x) = \sqrt{x}$, $a = 64$ (perfect square near 65)

**Calculate:**
- $f(64) = 8$
- $f'(x) = \frac{1}{2\sqrt{x}}$
- $f'(64) = \frac{1}{16}$

**Linearization:** $L(x) = 8 + \frac{1}{16}(x - 64)$

**Estimate:** $\sqrt{65} \approx L(65) = 8 + \frac{1}{16}(1) = 8.0625$

**Actual value:** $\sqrt{65} \approx 8.0623$ ✓

### Example 10: Trigonometric Approximation

Estimate $\sin(0.1)$ using linearization at $a = 0$.

**Setup:** $f(x) = \sin x$, $f'(x) = \cos x$
- $f(0) = 0$
- $f'(0) = 1$

**Linearization:** $L(x) = 0 + 1(x - 0) = x$

**Estimate:** $\sin(0.1) \approx 0.1$

**Actual:** $\sin(0.1) \approx 0.0998$ ✓

> 💡 **Small Angle Approximations:** For small $x$ (in radians):
> - $\sin x \approx x$
> - $\cos x \approx 1$
> - $\tan x \approx x$

### Differentials

The **differential** $dy$ represents the change along the tangent line:

$$dy = f'(x) \, dx$$

where $dx$ is a small change in $x$.

**Relationship to actual change:**
- $\Delta y = f(x + dx) - f(x)$ (actual change)
- $dy = f'(x) \cdot dx$ (approximate change)

For small $dx$: $\Delta y \approx dy$

### Example 11: Using Differentials

The radius of a sphere is measured as 5 cm with possible error of ±0.02 cm. Estimate the maximum error in the calculated volume.

**Volume:** $V = \frac{4}{3}\pi r^3$

**Differential:** $dV = 4\pi r^2 \, dr$

**Substitute:** $r = 5$, $dr = \pm 0.02$

$$dV = 4\pi(25)(0.02) = 2\pi \approx 6.28 \text{ cm}^3$$

The maximum error in volume is approximately $\pm 6.28$ cm³.

**Relative error:**
$$\frac{dV}{V} = \frac{4\pi r^2 \, dr}{\frac{4}{3}\pi r^3} = \frac{3 \, dr}{r} = \frac{3(0.02)}{5} = 0.012 = 1.2\%$$

> 🔑 **Error Propagation:** Relative error in $r^n$ is $n$ times the relative error in $r$.

---

## L'Hôpital's Rule

### The Rule

If $\lim_{x \to a} \frac{f(x)}{g(x)}$ produces an indeterminate form $\frac{0}{0}$ or $\frac{\pm\infty}{\pm\infty}$, and if $\lim_{x \to a} \frac{f'(x)}{g'(x)}$ exists, then:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

### Indeterminate Forms

**Direct application of L'Hôpital's:**
- $\frac{0}{0}$
- $\frac{\infty}{\infty}$

**Require transformation first:**
- $0 \cdot \infty$ → rewrite as $\frac{0}{1/\infty}$ or $\frac{\infty}{1/0}$
- $\infty - \infty$ → combine into single fraction
- $1^\infty$, $0^0$, $\infty^0$ → use logarithms

### Example 12: Basic L'Hôpital's

Evaluate $\lim_{x \to 0} \frac{\sin x}{x}$.

**Check:** $\frac{\sin 0}{0} = \frac{0}{0}$ ✓ (indeterminate)

**Apply L'Hôpital's:**
$$\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1} = \frac{1}{1} = 1$$

### Example 13: Multiple Applications

Evaluate $\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$.

**Check:** $\frac{e^0 - 1 - 0}{0} = \frac{0}{0}$ ✓

**First application:**
$$\lim_{x \to 0} \frac{e^x - 1}{2x} = \frac{0}{0}$$

**Second application:**
$$\lim_{x \to 0} \frac{e^x}{2} = \frac{1}{2}$$

### Example 14: $\frac{\infty}{\infty}$ Form

Evaluate $\lim_{x \to \infty} \frac{\ln x}{x}$.

**Check:** $\frac{\ln \infty}{\infty} = \frac{\infty}{\infty}$ ✓

**Apply L'Hôpital's:**
$$\lim_{x \to \infty} \frac{\ln x}{x} = \lim_{x \to \infty} \frac{1/x}{1} = \lim_{x \to \infty} \frac{1}{x} = 0$$

> 📊 **Growth Rates:** $\ln x \ll x^a \ll e^x$ for any $a > 0$

### Example 15: $0 \cdot \infty$ Form

Evaluate $\lim_{x \to 0^+} x \ln x$.

**Form:** $0 \cdot (-\infty)$ — must rewrite!

**Rewrite as:** $\lim_{x \to 0^+} \frac{\ln x}{1/x} = \frac{-\infty}{\infty}$

**Apply L'Hôpital's:**
$$\lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} \frac{x^2}{-x} = \lim_{x \to 0^+} (-x) = 0$$

### Example 16: $\infty - \infty$ Form

Evaluate $\lim_{x \to 0} \left(\frac{1}{\sin x} - \frac{1}{x}\right)$.

**Form:** $\infty - \infty$ — must combine!

**Rewrite:**
$$\lim_{x \to 0} \frac{x - \sin x}{x \sin x} = \frac{0}{0}$$

**Apply L'Hôpital's:**
$$\lim_{x \to 0} \frac{1 - \cos x}{\sin x + x\cos x} = \frac{0}{0}$$

**Apply again:**
$$\lim_{x \to 0} \frac{\sin x}{\cos x + \cos x - x\sin x} = \frac{0}{2} = 0$$

### Example 17: $1^\infty$ Form

Evaluate $\lim_{x \to 0^+} (1 + x)^{1/x}$.

**Form:** $1^\infty$ — use logarithms!

**Let** $y = (1 + x)^{1/x}$, so $\ln y = \frac{\ln(1 + x)}{x}$

**Find limit of $\ln y$:**
$$\lim_{x \to 0^+} \frac{\ln(1 + x)}{x} = \frac{0}{0}$$

**L'Hôpital's:**
$$\lim_{x \to 0^+} \frac{1/(1+x)}{1} = 1$$

**Therefore:** $\lim_{x \to 0^+} y = e^1 = e$

> 💡 **This proves:** $e = \lim_{x \to 0} (1 + x)^{1/x} = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n$

### Common Mistakes with L'Hôpital's Rule

| Mistake | Why It's Wrong |
|---------|----------------|
| Using when not indeterminate | Only works for $\frac{0}{0}$ or $\frac{\infty}{\infty}$ |
| Applying quotient rule | Differentiate numerator AND denominator **separately** |
| Infinite applications | If looping, try a different approach |
| Forgetting to check form | Always verify indeterminate form first |

---

## Applied Optimization

### Optimization Strategy

1. **Draw a diagram** and identify variables
2. **Write objective function** (what to maximize/minimize)
3. **Write constraint equation(s)**
4. **Reduce to one variable** using constraints
5. **Find critical points** ($f'(x) = 0$ or undefined)
6. **Verify max/min** (First or Second Derivative Test)
7. **Answer the question** with correct units!

### First Derivative Test for Absolute Extrema

On a closed interval $[a, b]$:
1. Find critical points in $(a, b)$
2. Evaluate $f$ at critical points and endpoints
3. Largest value = absolute max; smallest = absolute min

### Second Derivative Test

If $f'(c) = 0$ and:
- $f''(c) > 0$: local minimum at $c$
- $f''(c) < 0$: local maximum at $c$
- $f''(c) = 0$: test is inconclusive

### Example 18: Classic Box Problem

An open-top box is made from a 20×30 cm sheet by cutting squares from corners and folding. Find the cut size that maximizes volume.

**Setup:**
```
    ┌──────────────────────┐
    │  x ┌──────────┐ x    │
    │    │          │      │ 20
    │  x └──────────┘ x    │
    └──────────────────────┘
              30
```

**Dimensions after folding:** $(30 - 2x) \times (20 - 2x) \times x$

**Volume:** $V(x) = x(30 - 2x)(20 - 2x) = 4x^3 - 100x^2 + 600x$

**Domain:** $0 < x < 10$

**Find critical points:**
$$V'(x) = 12x^2 - 200x + 600 = 4(3x^2 - 50x + 150) = 0$$
$$x = \frac{50 \pm \sqrt{2500 - 1800}}{6} = \frac{50 \pm \sqrt{700}}{6}$$
$$x = \frac{50 - 26.46}{6} \approx 3.92 \quad \text{or} \quad x \approx 12.75 \text{ (outside domain)}$$

**Verify maximum:** $V''(x) = 24x - 200$
$$V''(3.92) = 24(3.92) - 200 \approx -106 < 0$$ ✓ (maximum)

**Maximum volume:** $V(3.92) \approx 1056.3$ cm³

### Example 19: Minimizing Distance

Find the point on the curve $y = x^2$ closest to $(3, 0)$.

**Distance formula:**
$$D = \sqrt{(x - 3)^2 + (y - 0)^2} = \sqrt{(x - 3)^2 + x^4}$$

**Minimize $D^2$ instead** (same critical points, easier calculus):
$$f(x) = (x - 3)^2 + x^4$$

**Find critical points:**
$$f'(x) = 2(x - 3) + 4x^3 = 4x^3 + 2x - 6 = 2(2x^3 + x - 3) = 0$$

**Factor:** $2x^3 + x - 3 = (x - 1)(2x^2 + 2x + 3) = 0$

The quadratic has no real roots, so $x = 1$.

**Point:** $(1, 1)$ is closest to $(3, 0)$.

**Distance:** $D = \sqrt{(1-3)^2 + 1} = \sqrt{5}$

### Example 20: Optimization with Trigonometry

A rain gutter is made from a 30 cm wide strip of metal by bending up the edges at angle $\theta$. Find $\theta$ that maximizes cross-sectional area.

**Setup:**
```
      ╱╲        ╱╲
     ╱  ╲──────╱  ╲
    ╱ θ  ╲    ╱  θ ╲
   10    10    10
```

**Cross-section:** Rectangle + two triangles

**Area:** $A(\theta) = 10\sin\theta \cdot 10 + 10\cos\theta \cdot 10\sin\theta$
$$A(\theta) = 100\sin\theta + 100\sin\theta\cos\theta = 100\sin\theta(1 + \cos\theta)$$

**Or use:** $A = 100\sin\theta + 50\sin(2\theta)$

**Find critical points:**
$$A'(\theta) = 100\cos\theta + 100\cos(2\theta) = 0$$
$$\cos\theta + 2\cos^2\theta - 1 = 0$$
$$(2\cos\theta - 1)(\cos\theta + 1) = 0$$

So $\cos\theta = \frac{1}{2}$ or $\cos\theta = -1$

$$\theta = \frac{\pi}{3} = 60°$$

### Example 21: Economic Optimization

A company's profit function is $P(x) = -2x^2 + 120x - 400$ dollars, where $x$ is units sold. Find the production level that maximizes profit.

**Find critical point:**
$$P'(x) = -4x + 120 = 0$$
$$x = 30 \text{ units}$$

**Verify maximum:** $P''(x) = -4 < 0$ ✓

**Maximum profit:** $P(30) = -2(900) + 3600 - 400 = \$1400$

### Example 22: Minimum Material

Design a cylindrical can with volume 1000 cm³ that uses minimum material (minimum surface area).

**Volume constraint:** $V = \pi r^2 h = 1000$, so $h = \frac{1000}{\pi r^2}$

**Surface area:** $S = 2\pi r^2 + 2\pi rh$ (top, bottom, and side)

**Substitute:**
$$S(r) = 2\pi r^2 + 2\pi r \cdot \frac{1000}{\pi r^2} = 2\pi r^2 + \frac{2000}{r}$$

**Find critical point:**
$$S'(r) = 4\pi r - \frac{2000}{r^2} = 0$$
$$4\pi r^3 = 2000$$
$$r^3 = \frac{500}{\pi}$$
$$r = \left(\frac{500}{\pi}\right)^{1/3} \approx 5.42 \text{ cm}$$

**Height:** $h = \frac{1000}{\pi(5.42)^2} \approx 10.84$ cm

> 💡 **Note:** The optimal can has $h = 2r$ (height equals diameter).

---

## FRQ Strategies

### Motion Problems (Very Common!)

**What they ask:**
- When is the particle at rest? → Solve $v(t) = 0$
- Direction of motion at time $t$? → Sign of $v(t)$
- Is speed increasing or decreasing? → Compare signs of $v(t)$ and $a(t)$
- Total distance traveled? → $\int_a^b |v(t)| \, dt$ (split at zeros of $v$)
- Displacement? → $\int_a^b v(t) \, dt$ or $s(b) - s(a)$

**Template response for "Is speed increasing?"**
> At $t = c$, $v(c) = \underline{\quad}$ and $a(c) = \underline{\quad}$. Since $v$ and $a$ have [same/opposite] signs, speed is [increasing/decreasing].

### Related Rates Problems

**Common point deductions:**
- Not stating "at this instant" when substituting values
- Wrong units in final answer
- Sign errors (forgetting decreasing = negative rate)

**Template setup:**
> Let $x =$ [quantity 1] and $y =$ [quantity 2].
> Given: $\frac{dx}{dt} = \underline{\quad}$
> Find: $\frac{dy}{dt}$ when [condition]

### Optimization Problems

**Required elements:**
1. Define variables clearly
2. State domain of objective function
3. Show calculus work to find critical points
4. Justify that your answer is a max/min
5. Answer with correct units

**Justification methods:**
- Closed interval: compare endpoints and critical values
- First Derivative Test: show sign change
- Second Derivative Test: show $f''(c) > 0$ or $< 0$
- Only critical point on open interval: if function → ∞ at boundaries

### Calculator Tips

**When allowed:**
- Graph to identify behavior
- Use numerical solver for equations
- Compute definite integrals for distance

**Show work even with calculator:**
- Write the equation you're solving
- State the integral you're evaluating
- Round appropriately (usually 3 decimals)

---

## Practice Problems

### Basic Motion (No Calculator)

**Problem 1:** A particle moves with position $s(t) = t^4 - 4t^3$ for $t \geq 0$.
a) Find velocity and acceleration functions
b) Find all times when the particle is at rest
c) On what intervals is the particle moving right?
d) When is the speed increasing?

<details>
<summary>Solution</summary>

a) $v(t) = 4t^3 - 12t^2 = 4t^2(t - 3)$
   $a(t) = 12t^2 - 24t = 12t(t - 2)$

b) $v(t) = 0$ when $t = 0$ or $t = 3$

c) $v(t) > 0$ when $t > 3$, so particle moves right on $(3, \infty)$

d) Speed increases when $v$ and $a$ have same sign:
   - $(0, 2)$: $v < 0$, $a > 0$ → opposite → speed decreasing
   - $(2, 3)$: $v < 0$, $a < 0$ → same → speed increasing
   - $(3, \infty)$: $v > 0$, $a > 0$ → same → speed increasing
   
   **Answer:** Speed increasing on $(2, 3) \cup (3, \infty)$
</details>

### Parametric Motion (Calculator Active)

**Problem 2:** A particle moves in the plane with position $(x(t), y(t)) = (e^t \cos t, e^t \sin t)$.
a) Find the velocity vector at $t = \pi/4$
b) Find the speed at $t = \pi/4$
c) When is the particle moving purely horizontally?

<details>
<summary>Solution</summary>

a) $x'(t) = e^t(\cos t - \sin t)$, $y'(t) = e^t(\sin t + \cos t)$
   
   At $t = \pi/4$: $\cos(\pi/4) = \sin(\pi/4) = \frac{\sqrt{2}}{2}$
   
   $x'(\pi/4) = e^{\pi/4}(0) = 0$
   $y'(\pi/4) = e^{\pi/4}(\sqrt{2})$
   
   $\vec{v} = \langle 0, \sqrt{2}e^{\pi/4} \rangle$

b) Speed $= |\vec{v}| = \sqrt{2}e^{\pi/4} \approx 3.11$

c) Horizontal when $y'(t) = 0$:
   $e^t(\sin t + \cos t) = 0$
   $\tan t = -1$
   $t = \frac{3\pi}{4}, \frac{7\pi}{4}, \ldots$ (i.e., $t = \frac{3\pi}{4} + n\pi$)
</details>

### Related Rates (No Calculator)

**Problem 3:** A spherical balloon is inflated at 100 cm³/s. How fast is the radius increasing when the radius is 5 cm?

<details>
<summary>Solution</summary>

$V = \frac{4}{3}\pi r^3$

$\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$

$100 = 4\pi(25)\frac{dr}{dt}$

$\frac{dr}{dt} = \frac{100}{100\pi} = \frac{1}{\pi} \approx 0.318$ cm/s
</details>

### L'Hôpital's Rule (No Calculator)

**Problem 4:** Evaluate each limit.
a) $\lim_{x \to 0} \frac{e^{2x} - 1}{\sin 3x}$
b) $\lim_{x \to \infty} x^2 e^{-x}$
c) $\lim_{x \to 1^+} (\ln x)^{x-1}$

<details>
<summary>Solution</summary>

a) Form: $\frac{0}{0}$
   $\lim_{x \to 0} \frac{2e^{2x}}{3\cos 3x} = \frac{2(1)}{3(1)} = \frac{2}{3}$

b) Form: $\infty \cdot 0$. Rewrite as $\frac{x^2}{e^x}$, form $\frac{\infty}{\infty}$
   Apply L'Hôpital's twice:
   $\lim \frac{2x}{e^x} = \lim \frac{2}{e^x} = 0$

c) Form: $0^0$. Let $y = (\ln x)^{x-1}$
   $\ln y = (x-1)\ln(\ln x)$
   
   As $x \to 1^+$: $\ln(\ln x) \to -\infty$ and $(x-1) \to 0$
   Form: $0 \cdot (-\infty)$
   
   Rewrite: $\frac{\ln(\ln x)}{1/(x-1)}$, form $\frac{-\infty}{\infty}$
   
   L'Hôpital's: $\lim_{x \to 1^+} \frac{\frac{1}{x\ln x}}{\frac{-1}{(x-1)^2}} = \lim_{x \to 1^+} \frac{-(x-1)^2}{x\ln x}$
   
   This requires more work... Let $u = x - 1$, so $x = 1 + u$, $u \to 0^+$
   $\lim_{u \to 0^+} \frac{-u^2}{(1+u)\ln(1+u)} = \lim \frac{-u^2}{(1+u) \cdot u} = \lim \frac{-u}{1+u} = 0$
   
   So $\ln y \to 0$, meaning $y \to e^0 = 1$
</details>

### Optimization (Calculator Active)

**Problem 5:** A farmer wants to fence a rectangular field next to a river (no fence needed along the river). With 600 meters of fencing, what dimensions maximize the area?

<details>
<summary>Solution</summary>

Let $x$ = side perpendicular to river, $y$ = side parallel to river

Constraint: $2x + y = 600$, so $y = 600 - 2x$

Area: $A(x) = xy = x(600 - 2x) = 600x - 2x^2$

Domain: $0 < x < 300$

$A'(x) = 600 - 4x = 0$
$x = 150$ m

$y = 600 - 300 = 300$ m

$A''(x) = -4 < 0$ ✓ (maximum)

**Answer:** 150 m × 300 m, with the 300 m side along the river.
</details>

### AP-Style FRQ

**Problem 6 (Calculator Active):** A particle moves along the $x$-axis with velocity $v(t) = t^2 - 4t + 3$ for $t \geq 0$. At $t = 0$, the particle is at position $x = 2$.

a) Find all times $t$ in the interval $0 \leq t \leq 5$ when the particle changes direction.

b) Find the position of the particle at time $t = 5$.

c) Find the total distance traveled by the particle from $t = 0$ to $t = 5$.

d) For what values of $t$ is the speed of the particle increasing?

<details>
<summary>Solution</summary>

**a)** The particle changes direction when $v(t) = 0$ and $v$ changes sign.
$v(t) = t^2 - 4t + 3 = (t-1)(t-3) = 0$
$t = 1$ and $t = 3$

Check sign changes:
- $v(0) = 3 > 0$
- $v(2) = -1 < 0$
- $v(4) = 3 > 0$

**Answer:** The particle changes direction at $t = 1$ and $t = 3$.

**b)** $x(5) = x(0) + \int_0^5 v(t) \, dt$

$\int_0^5 (t^2 - 4t + 3) \, dt = \left[\frac{t^3}{3} - 2t^2 + 3t\right]_0^5$
$= \frac{125}{3} - 50 + 15 = \frac{125}{3} - 35 = \frac{125 - 105}{3} = \frac{20}{3}$

$x(5) = 2 + \frac{20}{3} = \frac{26}{3}$

**Answer:** The particle is at position $\frac{26}{3}$ at $t = 5$.

**c)** Total distance $= \int_0^5 |v(t)| \, dt$

$= \int_0^1 v(t) \, dt - \int_1^3 v(t) \, dt + \int_3^5 v(t) \, dt$

$\int_0^1 (t^2-4t+3) \, dt = \left[\frac{t^3}{3} - 2t^2 + 3t\right]_0^1 = \frac{1}{3} - 2 + 3 = \frac{4}{3}$

$\int_1^3 (t^2-4t+3) \, dt = \left[\frac{t^3}{3} - 2t^2 + 3t\right]_1^3 = (9-18+9) - (\frac{1}{3}-2+3) = 0 - \frac{4}{3} = -\frac{4}{3}$

$\int_3^5 (t^2-4t+3) \, dt = \frac{20}{3} - 0 + \frac{4}{3} = \frac{20}{3} + \frac{4}{3} = 8$

Total distance $= \frac{4}{3} + \frac{4}{3} + 8 = \frac{32}{3}$

**Answer:** The total distance traveled is $\frac{32}{3}$ units.

**d)** Speed increases when $v(t)$ and $a(t)$ have the same sign.

$a(t) = v'(t) = 2t - 4 = 0$ when $t = 2$

Sign analysis:
| Interval | $v(t)$ | $a(t)$ | Same sign? |
|----------|--------|--------|------------|
| $(0,1)$ | $+$ | $-$ | No |
| $(1,2)$ | $-$ | $-$ | Yes ✓ |
| $(2,3)$ | $-$ | $+$ | No |
| $(3,\infty)$ | $+$ | $+$ | Yes ✓ |

**Answer:** Speed is increasing on $(1, 2) \cup (3, \infty)$.
</details>

---

## Quick Reference Card

### Motion Formulas
$$v(t) = s'(t), \quad a(t) = v'(t) = s''(t)$$
$$\text{Displacement} = \int_a^b v(t) \, dt$$
$$\text{Total Distance} = \int_a^b |v(t)| \, dt$$

### Parametric Motion
$$\vec{v}(t) = \langle x'(t), y'(t) \rangle$$
$$\text{Speed} = |\vec{v}(t)| = \sqrt{[x'(t)]^2 + [y'(t)]^2}$$

### Linearization
$$L(x) = f(a) + f'(a)(x - a)$$
$$dy = f'(x) \, dx$$

### L'Hôpital's Rule
$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)} \quad \text{(if } \frac{0}{0} \text{ or } \frac{\infty}{\infty}\text{)}$$

### Speed Analysis
- Speed ↑: $v$ and $a$ same sign
- Speed ↓: $v$ and $a$ opposite signs

---

## Summary

Unit 4 connects differentiation to the physical world:

| Topic | Key Concept | Common Applications |
|-------|-------------|---------------------|
| Motion | $v = s'$, $a = v'$ | Position, velocity, acceleration analysis |
| Parametric | $\vec{v} = \langle x', y' \rangle$ | Planar motion, arc length |
| Related Rates | Chain rule with time | Changing geometric quantities |
| Linearization | Tangent line approximation | Estimation, error analysis |
| L'Hôpital's | Derivatives resolve indeterminate forms | Limits involving $\frac{0}{0}$, $\frac{\infty}{\infty}$ |
| Optimization | Critical points + extrema tests | Maximum/minimum problems |

Master these applications, and you'll be well-prepared for both the multiple choice and free response sections of the AP Calculus BC exam!

---

*Good luck on your AP exam! Remember: show your work, justify your answers, and always include units!* 🎯

:::GUIDE:::
