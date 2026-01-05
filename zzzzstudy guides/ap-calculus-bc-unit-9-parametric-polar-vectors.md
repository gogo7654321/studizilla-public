:::GUIDE:::
unit::=9
title::=📐 Unit 9: Parametric, Polar, and Vector Functions
desc::=Master parametric equations, polar coordinates, and vector calculus
diff::=Very Hard
time::=65 min
tags::=calculus,bc,parametric,polar,vectors
content::=

# 📐 Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions

This unit introduces three powerful ways to describe curves and motion beyond the standard y = f(x) representation. These topics are unique to AP Calculus BC and represent some of the most elegant applications of calculus.

---

## 📊 Unit Overview

| Topic | Weight | Key Concepts |
|-------|--------|--------------|
| Parametric Equations | ~30% | Derivatives, arc length, motion |
| Polar Coordinates | ~35% | Conversions, derivatives, area |
| Vector-Valued Functions | ~35% | Velocity, acceleration, speed |

---

## 🎯 Part 1: Parametric Equations

### What Are Parametric Equations?

Parametric equations describe a curve by expressing both x and y as functions of a third variable, called the **parameter** (usually t).

**Standard Form:**
$$x = f(t), \quad y = g(t)$$

The parameter t often represents time, allowing us to describe motion along a curve.

---

### Why Use Parametric Equations?

1. **Describe motion** with direction and timing
2. **Graph curves** that fail the vertical line test
3. **Simplify complex curves** like cycloids and spirals
4. **Model real-world phenomena** like projectile motion

---

### Common Parametric Curves

#### Circle (radius r, centered at origin)
$$x = r\cos(t), \quad y = r\sin(t), \quad 0 \leq t \leq 2\pi$$

```
        y
        │    ╭───╮
        │   ╱     ╲
        │  │   •   │  ← Center (0,0)
        │   ╲     ╱
        │    ╰───╯
    ────┼────────────── x
        │
```

#### Ellipse (semi-axes a and b)
$$x = a\cos(t), \quad y = b\sin(t), \quad 0 \leq t \leq 2\pi$$

```
        y
        │   ╭─────────╮
        │  ╱           ╲
        │ │      •      │  ← a > b (horizontal ellipse)
        │  ╲           ╱
        │   ╰─────────╯
    ────┼────────────────── x
        │
```

#### Line through (x₀, y₀) with direction (a, b)
$$x = x_0 + at, \quad y = y_0 + bt$$

#### Parabola (rightward opening)
$$x = t^2, \quad y = t$$

---

### Eliminating the Parameter

To convert parametric equations to rectangular form:

1. Solve one equation for t
2. Substitute into the other equation
3. Simplify

**Example:** Convert $x = 2t + 1$, $y = t^2 - 3$

- From x equation: $t = \frac{x-1}{2}$
- Substitute into y: $y = \left(\frac{x-1}{2}\right)^2 - 3 = \frac{(x-1)^2}{4} - 3$

---

### First Derivative of Parametric Curves

The slope of a parametric curve is found using the chain rule:

$$\boxed{\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{y'(t)}{x'(t)}}$$

**Conditions:**
- This formula works when $\frac{dx}{dt} \neq 0$
- Horizontal tangent: $\frac{dy}{dt} = 0$ and $\frac{dx}{dt} \neq 0$
- Vertical tangent: $\frac{dx}{dt} = 0$ and $\frac{dy}{dt} \neq 0$

---

### Example: Finding Slope

Given: $x = t^3 - 3t$, $y = t^2 - 4$

Find the slope at t = 2.

**Solution:**
$$\frac{dx}{dt} = 3t^2 - 3$$
$$\frac{dy}{dt} = 2t$$
$$\frac{dy}{dx} = \frac{2t}{3t^2 - 3}$$

At t = 2:
$$\frac{dy}{dx} = \frac{2(2)}{3(4) - 3} = \frac{4}{9}$$

---

### Second Derivative of Parametric Curves

The second derivative measures concavity:

$$\boxed{\frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}}$$

**Step-by-step process:**
1. Find $\frac{dy}{dx}$ as a function of t
2. Differentiate $\frac{dy}{dx}$ with respect to t
3. Divide by $\frac{dx}{dt}$

---

### Example: Second Derivative

Given: $x = t^2$, $y = t^3$

**Step 1:** Find first derivative
$$\frac{dy}{dx} = \frac{3t^2}{2t} = \frac{3t}{2}$$

**Step 2:** Differentiate with respect to t
$$\frac{d}{dt}\left(\frac{3t}{2}\right) = \frac{3}{2}$$

**Step 3:** Divide by dx/dt
$$\frac{d^2y}{dx^2} = \frac{3/2}{2t} = \frac{3}{4t}$$

---

### Tangent Lines to Parametric Curves

To find the equation of a tangent line at parameter t = t₀:

1. Find the point: $(x(t_0), y(t_0))$
2. Find the slope: $m = \frac{dy/dt}{dx/dt}$ at $t = t_0$
3. Write the line: $y - y_0 = m(x - x_0)$

---

### Arc Length of Parametric Curves

The arc length of a parametric curve from t = a to t = b:

$$\boxed{L = \int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2} \, dt}$$

This formula comes from the Pythagorean theorem applied to infinitesimal segments.

```
    │
    │     ╭─────╮
    │    ╱       ╲  ← Curve length = sum of 
    │   ╱    ds   ╲     tiny segments ds
    │  ╱   ╱│      ╲
    │ ╱   ╱ │dy     ╲
    │╱   ╱──┘        ╲
    │   dx            ╲
    ┼─────────────────────
    │    ds² = dx² + dy²
```

---

### Example: Arc Length Calculation

Find the arc length of $x = \cos(t)$, $y = \sin(t)$ from $t = 0$ to $t = \pi$.

**Solution:**
$$\frac{dx}{dt} = -\sin(t), \quad \frac{dy}{dt} = \cos(t)$$

$$L = \int_0^{\pi} \sqrt{\sin^2(t) + \cos^2(t)} \, dt = \int_0^{\pi} 1 \, dt = \pi$$

This is half the circumference of a unit circle! ✓

---

### Speed in Parametric Motion

When t represents time, the **speed** is the magnitude of velocity:

$$\boxed{\text{Speed} = \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}}$$

Note: This is the integrand of the arc length formula!

---

## 🌀 Part 2: Polar Coordinates

### The Polar Coordinate System

Instead of (x, y), we locate points using:
- **r**: distance from the origin (pole)
- **θ**: angle from the positive x-axis (polar axis)

```
            90° (π/2)
               │
               │    • P(r, θ)
               │   ╱
               │  ╱ r
               │ ╱
               │╱ θ
    180° ──────┼────────── 0° (Polar axis)
      (π)      │
               │
               │
            270° (3π/2)
```

---

### Converting Between Coordinate Systems

**Polar to Rectangular:**
$$\boxed{x = r\cos\theta, \quad y = r\sin\theta}$$

**Rectangular to Polar:**
$$\boxed{r = \sqrt{x^2 + y^2}, \quad \tan\theta = \frac{y}{x}}$$

⚠️ **Important:** When finding θ, consider the quadrant!

---

### Conversion Examples

**Example 1:** Convert $(3, \frac{\pi}{4})$ to rectangular.

$$x = 3\cos\frac{\pi}{4} = 3 \cdot \frac{\sqrt{2}}{2} = \frac{3\sqrt{2}}{2}$$
$$y = 3\sin\frac{\pi}{4} = 3 \cdot \frac{\sqrt{2}}{2} = \frac{3\sqrt{2}}{2}$$

**Example 2:** Convert $(-2, 2)$ to polar.

$$r = \sqrt{4 + 4} = 2\sqrt{2}$$
$$\theta = \arctan\left(\frac{2}{-2}\right) = \arctan(-1) = \frac{3\pi}{4}$$ (Quadrant II)

---

### Common Polar Curves

#### Circles

| Equation | Description |
|----------|-------------|
| $r = a$ | Circle centered at origin, radius a |
| $r = a\cos\theta$ | Circle through origin, center on x-axis |
| $r = a\sin\theta$ | Circle through origin, center on y-axis |

```
r = a (circle)          r = a cos θ (circle)
                         
    ╭───╮                      ╭───╮
   ╱     ╲                    ╱     ╲
  │   •   │ r=a           •──│       │
   ╲     ╱                    ╲     ╱
    ╰───╯                      ╰───╯
                            Origin on circle
```

---

#### Rose Curves

$$r = a\cos(n\theta) \quad \text{or} \quad r = a\sin(n\theta)$$

- If n is odd: **n petals**
- If n is even: **2n petals**

```
r = cos(2θ) - 4 petals     r = cos(3θ) - 3 petals

      ╱│╲                        │
     ╱ │ ╲                     ╲ │ ╱
    ╱  │  ╲                   ──╲│╱──
   ╱   │   ╲                     │
───────┼───────               ╱  │  ╲
   ╲   │   ╱                 ╱   │   ╲
    ╲  │  ╱
     ╲ │ ╱
      ╲│╱
```

---

#### Limaçons

$$r = a + b\cos\theta \quad \text{or} \quad r = a + b\sin\theta$$

| Ratio | Shape |
|-------|-------|
| $a/b < 1$ | Inner loop |
| $a/b = 1$ | Cardioid |
| $1 < a/b < 2$ | Dimpled |
| $a/b \geq 2$ | Convex |

```
Inner Loop (a < b)    Cardioid (a = b)     Dimpled (a > b)

    ╭──╮╭──╮              ╭──╮                ╭───╮
   ╱    ╲   ╲            ╱    ╲              ╱     ╲
  │   ╭──╮   │          │   •  │            │   ╰─╮ │
   ╲ ╰──╯   ╱            ╲    ╱              ╲    ╱
    ╰──────╯              ╰──╯                ╰──╯
```

---

#### Lemniscates

$$r^2 = a^2\cos(2\theta) \quad \text{or} \quad r^2 = a^2\sin(2\theta)$$

Figure-8 shapes centered at the origin.

```
       ╭───╮   ╭───╮
      ╱     ╲ ╱     ╲
     │       •       │
      ╲     ╱ ╲     ╱
       ╰───╯   ╰───╯
```

---

### Derivatives in Polar Coordinates

For a polar curve r = f(θ), we can find dy/dx:

$$\boxed{\frac{dy}{dx} = \frac{\frac{dr}{d\theta}\sin\theta + r\cos\theta}{\frac{dr}{d\theta}\cos\theta - r\sin\theta}}$$

**Derivation:** Using parametric form with θ as the parameter:
- $x = r\cos\theta$
- $y = r\sin\theta$

Apply the chain rule to both.

---

### Tangent Lines to Polar Curves

**Horizontal tangent:** $\frac{dy}{d\theta} = 0$ (and $\frac{dx}{d\theta} \neq 0$)
$$\frac{dr}{d\theta}\sin\theta + r\cos\theta = 0$$

**Vertical tangent:** $\frac{dx}{d\theta} = 0$ (and $\frac{dy}{d\theta} \neq 0$)
$$\frac{dr}{d\theta}\cos\theta - r\sin\theta = 0$$

---

### Example: Polar Derivative

Find the slope of $r = 2 + \cos\theta$ at $\theta = \frac{\pi}{2}$.

**Solution:**
$$\frac{dr}{d\theta} = -\sin\theta$$

At $\theta = \frac{\pi}{2}$: $r = 2 + 0 = 2$, $\frac{dr}{d\theta} = -1$

$$\frac{dy}{dx} = \frac{(-1)\sin(\pi/2) + 2\cos(\pi/2)}{(-1)\cos(\pi/2) - 2\sin(\pi/2)}$$
$$= \frac{-1 + 0}{0 - 2} = \frac{-1}{-2} = \frac{1}{2}$$

---

### Area in Polar Coordinates

The area enclosed by a polar curve from θ = α to θ = β:

$$\boxed{A = \frac{1}{2}\int_{\alpha}^{\beta} r^2 \, d\theta}$$

**Intuition:** We're summing infinitesimal "pie slices" of area $\frac{1}{2}r^2 d\theta$.

```
         ╱│╲
        ╱ │ ╲    Each slice has area
       ╱  │  ╲   dA = ½ r² dθ
      ╱   │   ╲
     ╱    │    ╲
    ╱     │     ╲
   ╱  dθ  │      ╲
  ╱───────•───────╲
         r
```

---

### Example: Area of a Circle

Find the area enclosed by $r = 3$.

$$A = \frac{1}{2}\int_0^{2\pi} 9 \, d\theta = \frac{9}{2} \cdot 2\pi = 9\pi$$

This confirms $A = \pi r^2$ for r = 3. ✓

---

### Example: Area of One Petal

Find the area of one petal of $r = \cos(2\theta)$.

**First, find the petal bounds:** One petal from $\theta = -\frac{\pi}{4}$ to $\theta = \frac{\pi}{4}$

$$A = \frac{1}{2}\int_{-\pi/4}^{\pi/4} \cos^2(2\theta) \, d\theta$$

Using the identity $\cos^2(u) = \frac{1 + \cos(2u)}{2}$:

$$A = \frac{1}{2}\int_{-\pi/4}^{\pi/4} \frac{1 + \cos(4\theta)}{2} \, d\theta = \frac{1}{4}\left[\theta + \frac{\sin(4\theta)}{4}\right]_{-\pi/4}^{\pi/4}$$

$$= \frac{1}{4}\left[\frac{\pi}{4} + 0 - \left(-\frac{\pi}{4}\right) - 0\right] = \frac{1}{4} \cdot \frac{\pi}{2} = \frac{\pi}{8}$$

---

### Area Between Polar Curves

For the area between two polar curves r₁(θ) and r₂(θ) where r₂ > r₁:

$$\boxed{A = \frac{1}{2}\int_{\alpha}^{\beta} \left[r_2^2 - r_1^2\right] d\theta}$$

---

### Example: Area Between Curves

Find the area inside $r = 2$ but outside $r = 2(1 - \cos\theta)$ (a cardioid).

**Step 1:** Find intersection points.
$2 = 2(1 - \cos\theta) \Rightarrow 1 = 1 - \cos\theta \Rightarrow \cos\theta = 0$
$\theta = \frac{\pi}{2}, \frac{3\pi}{2}$

**Step 2:** Set up the integral (using symmetry about x-axis):
$$A = 2 \cdot \frac{1}{2}\int_{\pi/2}^{\pi} \left[4 - 4(1-\cos\theta)^2\right] d\theta$$

---

### Arc Length in Polar Coordinates

The arc length of a polar curve from θ = α to θ = β:

$$\boxed{L = \int_{\alpha}^{\beta} \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2} \, d\theta}$$

---

## 🚀 Part 3: Vector-Valued Functions

### What Are Vector-Valued Functions?

A **vector-valued function** outputs a vector instead of a scalar:

$$\vec{r}(t) = \langle x(t), y(t) \rangle = x(t)\hat{i} + y(t)\hat{j}$$

In 3D:
$$\vec{r}(t) = \langle x(t), y(t), z(t) \rangle$$

---

### Relationship to Parametric Equations

Vector-valued functions are essentially parametric equations written in vector notation:

| Parametric Form | Vector Form |
|-----------------|-------------|
| $x = f(t), y = g(t)$ | $\vec{r}(t) = \langle f(t), g(t) \rangle$ |

---

### Position, Velocity, and Acceleration

For a particle with position $\vec{r}(t) = \langle x(t), y(t) \rangle$:

**Position vector:**
$$\vec{r}(t) = \langle x(t), y(t) \rangle$$

**Velocity vector:**
$$\boxed{\vec{v}(t) = \vec{r}'(t) = \langle x'(t), y'(t) \rangle}$$

**Acceleration vector:**
$$\boxed{\vec{a}(t) = \vec{v}'(t) = \vec{r}''(t) = \langle x''(t), y''(t) \rangle}$$

---

### Visualizing Motion

```
                    ↗ v(t) (velocity - tangent to path)
                   ╱
        ╭────────•────────╮
       ╱         │╲        ╲
      ╱          │ ╲a(t)    ╲   ← Path of particle
     │           │  ↘        │
     │                       │
      ╲                     ╱
       ╲                   ╱
        ╰─────────────────╯
        
    • = particle position r(t)
    → = velocity vector (tangent to path)
    ↘ = acceleration vector (points toward concave side)
```

---

### Speed

**Speed** is the magnitude of velocity (a scalar):

$$\boxed{\text{Speed} = |\vec{v}(t)| = \sqrt{[x'(t)]^2 + [y'(t)]^2}}$$

**Key distinction:**
- Velocity is a **vector** (has direction)
- Speed is a **scalar** (magnitude only)

---

### Example: Velocity and Speed

A particle moves with $\vec{r}(t) = \langle t^2 - 1, 2t \rangle$.

Find the velocity, acceleration, and speed at t = 2.

**Solution:**

$$\vec{v}(t) = \langle 2t, 2 \rangle$$
$$\vec{v}(2) = \langle 4, 2 \rangle$$

$$\vec{a}(t) = \langle 2, 0 \rangle$$
$$\vec{a}(2) = \langle 2, 0 \rangle$$

$$\text{Speed} = |\vec{v}(2)| = \sqrt{16 + 4} = \sqrt{20} = 2\sqrt{5}$$

---

### Displacement vs. Distance

**Displacement** (net change in position):
$$\boxed{\text{Displacement} = \vec{r}(b) - \vec{r}(a) = \int_a^b \vec{v}(t) \, dt}$$

**Total Distance Traveled:**
$$\boxed{\text{Distance} = \int_a^b |\vec{v}(t)| \, dt = \int_a^b \sqrt{[x'(t)]^2 + [y'(t)]^2} \, dt}$$

Note: Distance = Arc length of the path!

---

### Displacement vs. Distance: Visual

```
    Start (A)                    End (B)
       •─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ •
        ╲                       ╱
         ╲    Actual path     ╱
          ╲     traveled     ╱
           ╲               ╱
            ╲     ╭───╮   ╱
             ╲   ╱     ╲ ╱
              ╲ ╱       ╳
               ╳       ╱
              ╱       ╱
    
    Displacement = straight-line distance A to B (vector)
    Total Distance = length along the curved path (scalar)
```

---

### Example: Displacement and Distance

A particle has velocity $\vec{v}(t) = \langle \cos t, \sin t \rangle$ for $0 \leq t \leq \pi$.

**Displacement:**
$$\int_0^{\pi} \langle \cos t, \sin t \rangle \, dt = \langle \sin t, -\cos t \rangle \Big|_0^{\pi}$$
$$= \langle 0 - 0, -(-1) - (-1) \rangle = \langle 0, 2 \rangle$$

**Distance:**
$$\int_0^{\pi} \sqrt{\cos^2 t + \sin^2 t} \, dt = \int_0^{\pi} 1 \, dt = \pi$$

---

### Direction of Motion

The **unit tangent vector** gives the direction of motion:

$$\boxed{\hat{T}(t) = \frac{\vec{v}(t)}{|\vec{v}(t)|}}$$

This is a unit vector (magnitude 1) pointing in the direction of travel.

---

### Integration of Vector Functions

To integrate a vector-valued function, integrate each component:

$$\int \langle f(t), g(t) \rangle \, dt = \left\langle \int f(t) \, dt, \int g(t) \, dt \right\rangle$$

**Finding position from velocity:**
$$\vec{r}(t) = \int \vec{v}(t) \, dt + \vec{C}$$

where $\vec{C}$ is a constant vector (determined by initial conditions).

---

### Example: Finding Position from Velocity

Given $\vec{v}(t) = \langle 2t, e^t \rangle$ and $\vec{r}(0) = \langle 1, 3 \rangle$, find $\vec{r}(t)$.

**Solution:**
$$\vec{r}(t) = \int \langle 2t, e^t \rangle \, dt = \langle t^2, e^t \rangle + \vec{C}$$

Using initial condition:
$$\vec{r}(0) = \langle 0, 1 \rangle + \vec{C} = \langle 1, 3 \rangle$$
$$\vec{C} = \langle 1, 2 \rangle$$

$$\vec{r}(t) = \langle t^2 + 1, e^t + 2 \rangle$$

---

### Projectile Motion

A classic application of vector-valued functions:

$$\vec{r}(t) = \langle v_0 \cos(\theta) \cdot t, v_0 \sin(\theta) \cdot t - \frac{1}{2}gt^2 \rangle$$

where:
- $v_0$ = initial speed
- $\theta$ = launch angle
- $g$ = acceleration due to gravity (≈ 9.8 m/s² or 32 ft/s²)

```
                    ╭─────────╮
                   ╱     •     ╲      ← Maximum height
                  ╱     ╱│╲     ╲
                 ╱     ╱ │ ╲     ╲
                ╱   v ╱  │g ╲     ╲
               ╱     ╱   │   ↓     ╲
              ╱     ↗    │          ╲
             ╱            │           ╲
           •╱ θ           │            •
    ═══════════════════════════════════════
       Launch                        Landing
```

---

### Circular Motion

For uniform circular motion with radius R and angular velocity ω:

$$\vec{r}(t) = \langle R\cos(\omega t), R\sin(\omega t) \rangle$$

**Velocity:**
$$\vec{v}(t) = \langle -R\omega\sin(\omega t), R\omega\cos(\omega t) \rangle$$

**Speed:** $|\vec{v}| = R\omega$ (constant!)

**Acceleration:**
$$\vec{a}(t) = \langle -R\omega^2\cos(\omega t), -R\omega^2\sin(\omega t) \rangle = -\omega^2 \vec{r}(t)$$

The acceleration points **toward the center** (centripetal acceleration).

---

### Properties of Vector Derivatives

For vector functions $\vec{u}(t)$ and $\vec{v}(t)$, and scalar function $f(t)$:

| Rule | Formula |
|------|---------|
| Sum | $\frac{d}{dt}[\vec{u} + \vec{v}] = \vec{u}' + \vec{v}'$ |
| Scalar Multiple | $\frac{d}{dt}[c\vec{u}] = c\vec{u}'$ |
| Product with scalar | $\frac{d}{dt}[f(t)\vec{u}] = f'(t)\vec{u} + f(t)\vec{u}'$ |
| Dot Product | $\frac{d}{dt}[\vec{u} \cdot \vec{v}] = \vec{u}' \cdot \vec{v} + \vec{u} \cdot \vec{v}'$ |
| Chain Rule | $\frac{d}{dt}[\vec{u}(f(t))] = \vec{u}'(f(t)) \cdot f'(t)$ |

---

## 🔗 Connecting the Three Representations

### Parametric ↔ Vector

| Parametric | Vector |
|------------|--------|
| $x = f(t), y = g(t)$ | $\vec{r}(t) = \langle f(t), g(t) \rangle$ |
| $\frac{dx}{dt}, \frac{dy}{dt}$ | $\vec{v}(t) = \langle x'(t), y'(t) \rangle$ |
| Speed = $\sqrt{(dx/dt)^2 + (dy/dt)^2}$ | Speed = $|\vec{v}(t)|$ |

---

### Parametric ↔ Polar

Using θ as the parameter for a polar curve r = f(θ):

$$x = r\cos\theta = f(\theta)\cos\theta$$
$$y = r\sin\theta = f(\theta)\sin\theta$$

---

### All Three Together

A particle on a polar curve can be described:

**Polar:** $r = f(\theta)$

**Parametric:** 
$$x = f(\theta)\cos\theta, \quad y = f(\theta)\sin\theta$$

**Vector:**
$$\vec{r}(\theta) = \langle f(\theta)\cos\theta, f(\theta)\sin\theta \rangle$$

---

## 📋 Key Formulas Summary

### Parametric Equations

| Concept | Formula |
|---------|---------|
| First derivative | $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$ |
| Second derivative | $\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}(dy/dx)}{dx/dt}$ |
| Arc length | $L = \int_a^b \sqrt{(dx/dt)^2 + (dy/dt)^2} \, dt$ |
| Speed | $\sqrt{(dx/dt)^2 + (dy/dt)^2}$ |

---

### Polar Coordinates

| Concept | Formula |
|---------|---------|
| Conversion to rectangular | $x = r\cos\theta, \, y = r\sin\theta$ |
| Conversion to polar | $r = \sqrt{x^2 + y^2}, \, \tan\theta = y/x$ |
| Slope | $\frac{dy}{dx} = \frac{(dr/d\theta)\sin\theta + r\cos\theta}{(dr/d\theta)\cos\theta - r\sin\theta}$ |
| Area | $A = \frac{1}{2}\int_{\alpha}^{\beta} r^2 \, d\theta$ |
| Arc length | $L = \int_{\alpha}^{\beta} \sqrt{r^2 + (dr/d\theta)^2} \, d\theta$ |

---

### Vector-Valued Functions

| Concept | Formula |
|---------|---------|
| Position | $\vec{r}(t) = \langle x(t), y(t) \rangle$ |
| Velocity | $\vec{v}(t) = \vec{r}'(t) = \langle x'(t), y'(t) \rangle$ |
| Acceleration | $\vec{a}(t) = \vec{v}'(t) = \langle x''(t), y''(t) \rangle$ |
| Speed | $|\vec{v}(t)| = \sqrt{[x'(t)]^2 + [y'(t)]^2}$ |
| Displacement | $\vec{r}(b) - \vec{r}(a) = \int_a^b \vec{v}(t) \, dt$ |
| Distance | $\int_a^b |\vec{v}(t)| \, dt$ |

---

## ⚠️ Common Mistakes to Avoid

### Parametric Errors

❌ **Forgetting to use chain rule** for second derivative
$$\frac{d^2y}{dx^2} \neq \frac{d^2y/dt^2}{d^2x/dt^2}$$

✅ **Correct method:**
$$\frac{d^2y}{dx^2} = \frac{d/dt(dy/dx)}{dx/dt}$$

---

### Polar Errors

❌ **Using rectangular area formula**
$$A \neq \int r \, d\theta$$

✅ **Correct polar area:**
$$A = \frac{1}{2}\int r^2 \, d\theta$$

❌ **Forgetting r can be negative**

When r < 0, the point is plotted in the opposite direction.

---

### Vector Errors

❌ **Confusing displacement and distance**
- Displacement is a vector (can be negative components)
- Distance is always positive (magnitude)

❌ **Forgetting initial conditions**

When integrating velocity to find position, always add the constant vector determined by initial conditions.

---

## 📝 AP Exam Tips

### Free Response Strategy

1. **Show all work** for derivatives and integrals
2. **Label your answers** clearly (velocity, speed, position)
3. **Include units** when given in the problem
4. **Use your calculator** wisely for definite integrals

### Calculator Skills

- Graph parametric equations (MODE → PAR)
- Evaluate definite integrals numerically
- Find intersection points
- Calculate arc length integrals

---

### Common FRQ Patterns

| Question Type | What to Find |
|---------------|--------------|
| Particle motion | Position, velocity, speed at time t |
| Direction of motion | When particle moves left/right, up/down |
| Tangent lines | Slope and equation at given t or θ |
| Area | Bounded regions in polar coordinates |
| Arc length | Length of parametric or polar curve |

---

## 🎯 Practice Problem Set

### Problem 1: Parametric Derivatives
Given $x = e^t$, $y = t^2 - 3t$, find:
a) $\frac{dy}{dx}$ at t = 0
b) $\frac{d^2y}{dx^2}$ at t = 0
c) The equation of the tangent line at t = 0

<details>
<summary>Solution</summary>

a) $\frac{dx}{dt} = e^t$, $\frac{dy}{dt} = 2t - 3$
   $\frac{dy}{dx} = \frac{2t-3}{e^t}$
   At t = 0: $\frac{dy}{dx} = \frac{-3}{1} = -3$

b) $\frac{d}{dt}\left(\frac{dy}{dx}\right) = \frac{2e^t - (2t-3)e^t}{e^{2t}} = \frac{5-2t}{e^t}$
   $\frac{d^2y}{dx^2} = \frac{(5-2t)/e^t}{e^t} = \frac{5-2t}{e^{2t}}$
   At t = 0: $\frac{d^2y}{dx^2} = 5$

c) Point: $(e^0, 0-0) = (1, 0)$, slope = -3
   Line: $y - 0 = -3(x - 1)$ → $y = -3x + 3$
</details>

---

### Problem 2: Polar Area
Find the area enclosed by one loop of $r = 2\sin(3\theta)$.

<details>
<summary>Solution</summary>

One loop: $0 \leq \theta \leq \frac{\pi}{3}$

$A = \frac{1}{2}\int_0^{\pi/3} 4\sin^2(3\theta) \, d\theta$

$= 2\int_0^{\pi/3} \frac{1-\cos(6\theta)}{2} \, d\theta$

$= \int_0^{\pi/3} [1 - \cos(6\theta)] \, d\theta$

$= \left[\theta - \frac{\sin(6\theta)}{6}\right]_0^{\pi/3}$

$= \frac{\pi}{3} - 0 = \frac{\pi}{3}$
</details>

---

### Problem 3: Vector Motion
A particle moves with $\vec{r}(t) = \langle 2\cos t, 3\sin t \rangle$ for $t \geq 0$.

a) Find the velocity and acceleration vectors.
b) Find the speed at $t = \frac{\pi}{4}$.
c) When is the particle moving to the right?
d) Find the total distance traveled from $t = 0$ to $t = 2\pi$.

<details>
<summary>Solution</summary>

a) $\vec{v}(t) = \langle -2\sin t, 3\cos t \rangle$
   $\vec{a}(t) = \langle -2\cos t, -3\sin t \rangle$

b) $\vec{v}(\pi/4) = \langle -\sqrt{2}, \frac{3\sqrt{2}}{2} \rangle$
   Speed $= \sqrt{2 + \frac{9}{2}} = \sqrt{\frac{13}{2}} = \frac{\sqrt{26}}{2}$

c) Moving right when $x'(t) > 0$: $-2\sin t > 0 \Rightarrow \sin t < 0$
   $t \in (\pi, 2\pi), (3\pi, 4\pi), ...$

d) Distance $= \int_0^{2\pi} \sqrt{4\sin^2 t + 9\cos^2 t} \, dt$
   This is the perimeter of an ellipse (use calculator ≈ 15.87)
</details>

---

### Problem 4: Mixed Concepts
The polar curve $r = 1 + \cos\theta$ (cardioid) is traced counterclockwise as θ increases.

a) Find the Cartesian coordinates of the point where $\theta = \frac{2\pi}{3}$.
b) Find $\frac{dy}{dx}$ at $\theta = \frac{2\pi}{3}$.
c) Set up (but don't evaluate) an integral for the arc length of the entire cardioid.

<details>
<summary>Solution</summary>

a) $r = 1 + \cos(2\pi/3) = 1 - \frac{1}{2} = \frac{1}{2}$
   $x = r\cos\theta = \frac{1}{2} \cdot (-\frac{1}{2}) = -\frac{1}{4}$
   $y = r\sin\theta = \frac{1}{2} \cdot \frac{\sqrt{3}}{2} = \frac{\sqrt{3}}{4}$
   Point: $(-\frac{1}{4}, \frac{\sqrt{3}}{4})$

b) $\frac{dr}{d\theta} = -\sin\theta$
   At $\theta = \frac{2\pi}{3}$: $\frac{dr}{d\theta} = -\frac{\sqrt{3}}{2}$
   
   $\frac{dy}{dx} = \frac{(-\frac{\sqrt{3}}{2})(\frac{\sqrt{3}}{2}) + (\frac{1}{2})(-\frac{1}{2})}{(-\frac{\sqrt{3}}{2})(-\frac{1}{2}) - (\frac{1}{2})(\frac{\sqrt{3}}{2})}$
   $= \frac{-\frac{3}{4} - \frac{1}{4}}{\frac{\sqrt{3}}{4} - \frac{\sqrt{3}}{4}} = \frac{-1}{0}$ → undefined (vertical tangent)

c) Arc length: $L = \int_0^{2\pi} \sqrt{(1+\cos\theta)^2 + \sin^2\theta} \, d\theta$
   $= \int_0^{2\pi} \sqrt{1 + 2\cos\theta + \cos^2\theta + \sin^2\theta} \, d\theta$
   $= \int_0^{2\pi} \sqrt{2 + 2\cos\theta} \, d\theta$
</details>

---

## 🏁 Unit Summary

**Parametric Equations** allow us to describe curves as functions of a parameter, enabling the description of motion and curves that can't be written as y = f(x).

**Polar Coordinates** provide an alternative way to locate points using distance and angle, making certain curves (spirals, roses, cardioids) much simpler to express.

**Vector-Valued Functions** combine the concepts, giving us a powerful tool for describing motion in the plane with position, velocity, and acceleration vectors.

These three representations are interconnected and often used together in applications ranging from physics to engineering to computer graphics.

---

## 📚 Quick Reference Card

```
╔════════════════════════════════════════════════════════════╗
║                    UNIT 9 QUICK REFERENCE                  ║
╠════════════════════════════════════════════════════════════╣
║ PARAMETRIC                                                 ║
║   dy/dx = (dy/dt)/(dx/dt)                                 ║
║   d²y/dx² = [d/dt(dy/dx)]/(dx/dt)                        ║
║   Arc Length = ∫√[(dx/dt)² + (dy/dt)²] dt                ║
╠════════════════════════════════════════════════════════════╣
║ POLAR                                                      ║
║   x = r cos θ,  y = r sin θ                               ║
║   r = √(x² + y²),  tan θ = y/x                           ║
║   Area = ½∫r² dθ                                          ║
║   Arc Length = ∫√[r² + (dr/dθ)²] dθ                      ║
╠════════════════════════════════════════════════════════════╣
║ VECTORS                                                    ║
║   r⃗(t) = ⟨x(t), y(t)⟩                                     ║
║   v⃗(t) = r⃗'(t) = ⟨x'(t), y'(t)⟩                          ║
║   a⃗(t) = v⃗'(t) = ⟨x''(t), y''(t)⟩                        ║
║   Speed = |v⃗(t)| = √[x'(t)² + y'(t)²]                     ║
║   Distance = ∫|v⃗(t)| dt                                   ║
╚════════════════════════════════════════════════════════════╝
```

---

*Master these three powerful representations and you'll be well-prepared for the BC exam!* 🎯

:::GUIDE:::
