:::GUIDE:::
unit::=1
title::=⚛️ Unit 1: Kinematics
desc::=Calculus-based kinematics for AP Physics C Mechanics
diff::=Hard
time::=60 min
tags::=physics,mechanics,calculus,kinematics,vectors,motion
content::=

# ⚛️ Unit 1: Kinematics

## Introduction to Calculus-Based Kinematics

Kinematics is the study of motion without considering the forces that cause it. In AP Physics C, we use **calculus** to describe motion with mathematical precision, allowing us to analyze complex motion that algebra alone cannot handle.

---

## 1.1 Position, Velocity, and Acceleration

### Fundamental Definitions

**Position** $\vec{r}(t)$ describes where an object is located at time $t$.

**Velocity** is the rate of change of position:
$$\vec{v}(t) = \frac{d\vec{r}}{dt}$$

**Acceleration** is the rate of change of velocity:
$$\vec{a}(t) = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}$$

### The Calculus Connection

| Derivative Relationship | Integral Relationship |
|------------------------|----------------------|
| $v = \frac{dx}{dt}$ | $x = \int v \, dt$ |
| $a = \frac{dv}{dt}$ | $v = \int a \, dt$ |
| $a = \frac{d^2x}{dt^2}$ | $x = \iint a \, dt \, dt$ |

### Important Note on Constants of Integration

When integrating, always include the constant of integration, which represents initial conditions:

$$v(t) = \int a(t) \, dt + v_0$$

$$x(t) = \int v(t) \, dt + x_0$$

---

## 1.2 One-Dimensional Motion

### Constant Acceleration (Special Case)

When acceleration is constant, we can derive the kinematic equations:

Starting with $a = \text{constant}$:

**Derivation of velocity equation:**
$$v = \int a \, dt = at + C$$

At $t = 0$, $v = v_0$, so $C = v_0$:
$$\boxed{v = v_0 + at}$$

**Derivation of position equation:**
$$x = \int v \, dt = \int (v_0 + at) \, dt = v_0 t + \frac{1}{2}at^2 + C$$

At $t = 0$, $x = x_0$, so $C = x_0$:
$$\boxed{x = x_0 + v_0 t + \frac{1}{2}at^2}$$

**Derivation of velocity-position equation:**

Using the chain rule: $a = \frac{dv}{dt} = \frac{dv}{dx} \cdot \frac{dx}{dt} = v\frac{dv}{dx}$

$$a \, dx = v \, dv$$

$$\int_{x_0}^{x} a \, dx = \int_{v_0}^{v} v \, dv$$

$$a(x - x_0) = \frac{v^2 - v_0^2}{2}$$

$$\boxed{v^2 = v_0^2 + 2a(x - x_0)}$$

### Variable Acceleration

When acceleration is not constant, we must integrate:

**Example:** If $a(t) = 6t - 2$ m/s², find $v(t)$ and $x(t)$ given $v(0) = 4$ m/s and $x(0) = 1$ m.

**Solution:**
$$v(t) = \int (6t - 2) \, dt = 3t^2 - 2t + C_1$$

Using $v(0) = 4$: $C_1 = 4$
$$v(t) = 3t^2 - 2t + 4 \text{ m/s}$$

$$x(t) = \int (3t^2 - 2t + 4) \, dt = t^3 - t^2 + 4t + C_2$$

Using $x(0) = 1$: $C_2 = 1$
$$x(t) = t^3 - t^2 + 4t + 1 \text{ m}$$

---

## 1.3 Graphical Analysis

### Interpreting Motion Graphs

| Graph Type | Slope Represents | Area Under Curve Represents |
|------------|------------------|----------------------------|
| $x$ vs $t$ | Velocity $v$ | — |
| $v$ vs $t$ | Acceleration $a$ | Displacement $\Delta x$ |
| $a$ vs $t$ | Jerk $j = \frac{da}{dt}$ | Change in velocity $\Delta v$ |

### Calculating Displacement from Velocity Graph

$$\Delta x = \int_{t_1}^{t_2} v(t) \, dt$$

This is the **signed area** under the velocity-time curve.

### Key Insights

- **Positive velocity**: object moving in positive direction
- **Negative velocity**: object moving in negative direction
- **Zero velocity**: object momentarily at rest (turning point)
- **Positive acceleration**: velocity increasing (or becoming less negative)
- **Negative acceleration**: velocity decreasing (or becoming more negative)

---

## 1.4 Vector Kinematics

### Position Vector

In three dimensions:
$$\vec{r}(t) = x(t)\hat{i} + y(t)\hat{j} + z(t)\hat{k}$$

### Unit Vectors

$\hat{i}$, $\hat{j}$, $\hat{k}$ are unit vectors pointing in the positive $x$, $y$, $z$ directions respectively.

Properties:
- $|\hat{i}| = |\hat{j}| = |\hat{k}| = 1$
- $\hat{i} \cdot \hat{i} = \hat{j} \cdot \hat{j} = \hat{k} \cdot \hat{k} = 1$
- $\hat{i} \cdot \hat{j} = \hat{j} \cdot \hat{k} = \hat{i} \cdot \hat{k} = 0$

### Velocity Vector

$$\vec{v}(t) = \frac{d\vec{r}}{dt} = \frac{dx}{dt}\hat{i} + \frac{dy}{dt}\hat{j} + \frac{dz}{dt}\hat{k}$$

$$\vec{v}(t) = v_x(t)\hat{i} + v_y(t)\hat{j} + v_z(t)\hat{k}$$

### Acceleration Vector

$$\vec{a}(t) = \frac{d\vec{v}}{dt} = \frac{d^2x}{dt^2}\hat{i} + \frac{d^2y}{dt^2}\hat{j} + \frac{d^2z}{dt^2}\hat{k}$$

$$\vec{a}(t) = a_x(t)\hat{i} + a_y(t)\hat{j} + a_z(t)\hat{k}$$

### Speed vs Velocity

**Speed** (scalar) is the magnitude of velocity:
$$|\vec{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}$$

---

## 1.5 Two-Dimensional Motion

### Component Analysis

Motion in 2D can be analyzed by treating $x$ and $y$ components independently:

**Horizontal ($x$):**
$$x(t) = x_0 + v_{0x}t + \frac{1}{2}a_x t^2$$
$$v_x(t) = v_{0x} + a_x t$$

**Vertical ($y$):**
$$y(t) = y_0 + v_{0y}t + \frac{1}{2}a_y t^2$$
$$v_y(t) = v_{0y} + a_y t$$

### Parametric Equations

Position as a function of time creates **parametric equations**:
- $x = x(t)$
- $y = y(t)$

To find the path (trajectory), eliminate $t$ to get $y = f(x)$.

---

## 1.6 Projectile Motion

### Assumptions
- Air resistance is negligible
- Acceleration due to gravity is constant: $\vec{g} = -g\hat{j}$ (where $g = 9.8$ m/s²)
- Earth's rotation is negligible

### Equations of Motion

For a projectile launched with initial velocity $v_0$ at angle $\theta$ above horizontal:

**Initial velocity components:**
$$v_{0x} = v_0 \cos\theta$$
$$v_{0y} = v_0 \sin\theta$$

**Position equations (parametric):**
$$x(t) = v_0 \cos\theta \cdot t$$
$$y(t) = v_0 \sin\theta \cdot t - \frac{1}{2}gt^2$$

**Velocity equations:**
$$v_x(t) = v_0 \cos\theta$$
$$v_y(t) = v_0 \sin\theta - gt$$

### Trajectory Equation

Eliminating $t$ from the parametric equations:

From $x = v_0 \cos\theta \cdot t$: $t = \frac{x}{v_0 \cos\theta}$

Substituting into $y(t)$:
$$y = v_0 \sin\theta \cdot \frac{x}{v_0 \cos\theta} - \frac{1}{2}g\left(\frac{x}{v_0 \cos\theta}\right)^2$$

$$\boxed{y = x\tan\theta - \frac{gx^2}{2v_0^2\cos^2\theta}}$$

This is a **parabola** opening downward.

### Maximum Height

At maximum height, $v_y = 0$:
$$0 = v_0 \sin\theta - gt_{max}$$
$$t_{max} = \frac{v_0 \sin\theta}{g}$$

$$h_{max} = v_0 \sin\theta \cdot t_{max} - \frac{1}{2}gt_{max}^2$$

$$\boxed{h_{max} = \frac{v_0^2 \sin^2\theta}{2g}}$$

### Range (Horizontal Distance)

Time of flight (returning to launch height):
$$0 = v_0 \sin\theta \cdot t - \frac{1}{2}gt^2$$
$$t(v_0 \sin\theta - \frac{1}{2}gt) = 0$$
$$T = \frac{2v_0 \sin\theta}{g}$$

Range:
$$R = v_0 \cos\theta \cdot T = v_0 \cos\theta \cdot \frac{2v_0 \sin\theta}{g}$$

Using $2\sin\theta\cos\theta = \sin(2\theta)$:
$$\boxed{R = \frac{v_0^2 \sin(2\theta)}{g}}$$

**Maximum range** occurs when $\sin(2\theta) = 1$, i.e., $\theta = 45°$:
$$R_{max} = \frac{v_0^2}{g}$$

---

## 1.7 Relative Motion

### Relative Velocity

The velocity of object A relative to object B:
$$\vec{v}_{A/B} = \vec{v}_A - \vec{v}_B$$

### Reference Frame Transformation

If you know the velocity of A relative to B, and B relative to C:
$$\vec{v}_{A/C} = \vec{v}_{A/B} + \vec{v}_{B/C}$$

### Example: River Crossing

A boat with speed $v_b$ relative to water crosses a river with current $v_c$. The boat's velocity relative to ground:
$$\vec{v}_{boat/ground} = \vec{v}_{boat/water} + \vec{v}_{water/ground}$$

---

## 1.8 Circular Motion (Kinematics Preview)

### Angular Position and Displacement

Angular position: $\theta(t)$ (in radians)

Arc length: $s = r\theta$

### Angular Velocity

$$\omega = \frac{d\theta}{dt}$$

Relationship to linear velocity: $v = r\omega$

### Angular Acceleration

$$\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}$$

Relationship to tangential acceleration: $a_t = r\alpha$

### Centripetal Acceleration

For circular motion, centripetal acceleration points toward the center:
$$a_c = \frac{v^2}{r} = \omega^2 r$$

---

## 1.9 Practice Problems

### Problem 1: Variable Acceleration

A particle's position is given by $x(t) = 2t^3 - 9t^2 + 12t + 5$ meters.

**(a)** Find the velocity and acceleration as functions of time.

**Solution:**
$$v(t) = \frac{dx}{dt} = 6t^2 - 18t + 12 \text{ m/s}$$

$$a(t) = \frac{dv}{dt} = 12t - 18 \text{ m/s}^2$$

**(b)** When is the particle at rest?

**Solution:**
Set $v(t) = 0$:
$$6t^2 - 18t + 12 = 0$$
$$t^2 - 3t + 2 = 0$$
$$(t-1)(t-2) = 0$$
$$t = 1 \text{ s and } t = 2 \text{ s}$$

**(c)** When is the acceleration zero?

**Solution:**
$$12t - 18 = 0$$
$$t = 1.5 \text{ s}$$

**(d)** What is the total distance traveled from $t = 0$ to $t = 3$ s?

**Solution:**
The particle changes direction at $t = 1$ s and $t = 2$ s.

Position at key times:
- $x(0) = 5$ m
- $x(1) = 2 - 9 + 12 + 5 = 10$ m
- $x(2) = 16 - 36 + 24 + 5 = 9$ m
- $x(3) = 54 - 81 + 36 + 5 = 14$ m

Distance = $|10-5| + |9-10| + |14-9| = 5 + 1 + 5 = 11$ m

---

### Problem 2: Integration from Acceleration

A car starts from rest at the origin. Its acceleration is given by $a(t) = 4 - 0.5t$ m/s².

**(a)** Find $v(t)$.

**Solution:**
$$v(t) = \int (4 - 0.5t) \, dt = 4t - 0.25t^2 + C$$

Since $v(0) = 0$: $C = 0$
$$v(t) = 4t - 0.25t^2 \text{ m/s}$$

**(b)** Find $x(t)$.

**Solution:**
$$x(t) = \int (4t - 0.25t^2) \, dt = 2t^2 - \frac{0.25t^3}{3} + C$$

Since $x(0) = 0$: $C = 0$
$$x(t) = 2t^2 - \frac{t^3}{12} \text{ m}$$

**(c)** Find the maximum velocity and when it occurs.

**Solution:**
Maximum velocity when $a = 0$:
$$4 - 0.5t = 0 \Rightarrow t = 8 \text{ s}$$

$$v_{max} = 4(8) - 0.25(64) = 32 - 16 = 16 \text{ m/s}$$

---

### Problem 3: Vector Kinematics

A particle has position $\vec{r}(t) = (3t^2 - 2t)\hat{i} + (4t - t^2)\hat{j}$ meters.

**(a)** Find velocity and acceleration vectors.

**Solution:**
$$\vec{v}(t) = \frac{d\vec{r}}{dt} = (6t - 2)\hat{i} + (4 - 2t)\hat{j} \text{ m/s}$$

$$\vec{a}(t) = \frac{d\vec{v}}{dt} = 6\hat{i} - 2\hat{j} \text{ m/s}^2$$

**(b)** Find speed at $t = 2$ s.

**Solution:**
$$\vec{v}(2) = (12-2)\hat{i} + (4-4)\hat{j} = 10\hat{i} \text{ m/s}$$

$$|\vec{v}| = \sqrt{10^2 + 0^2} = 10 \text{ m/s}$$

**(c)** Find the magnitude of acceleration.

**Solution:**
$$|\vec{a}| = \sqrt{6^2 + (-2)^2} = \sqrt{36 + 4} = \sqrt{40} = 2\sqrt{10} \text{ m/s}^2 \approx 6.32 \text{ m/s}^2$$

---

### Problem 4: Projectile Motion with Calculus

A ball is thrown from a height of 20 m with initial velocity $\vec{v}_0 = 15\hat{i} + 25\hat{j}$ m/s.

**(a)** Find position as a function of time.

**Solution:**
$$\vec{a} = -9.8\hat{j} \text{ m/s}^2$$

$$\vec{v}(t) = \int \vec{a} \, dt = 15\hat{i} + (25 - 9.8t)\hat{j} \text{ m/s}$$

$$\vec{r}(t) = \int \vec{v} \, dt = 15t\hat{i} + (20 + 25t - 4.9t^2)\hat{j} \text{ m}$$

**(b)** Find when the ball hits the ground.

**Solution:**
When $y = 0$:
$$20 + 25t - 4.9t^2 = 0$$

Using quadratic formula:
$$t = \frac{-25 \pm \sqrt{625 + 392}}{-9.8} = \frac{-25 \pm 31.9}{-9.8}$$

Taking positive root:
$$t = \frac{-25 - 31.9}{-9.8} = 5.81 \text{ s}$$

**(c)** Find horizontal distance traveled.

**Solution:**
$$x = 15(5.81) = 87.2 \text{ m}$$

**(d)** Find velocity when it hits the ground.

**Solution:**
$$\vec{v}(5.81) = 15\hat{i} + (25 - 9.8 \times 5.81)\hat{j}$$
$$\vec{v}(5.81) = 15\hat{i} - 31.9\hat{j} \text{ m/s}$$

Speed: $|\vec{v}| = \sqrt{15^2 + 31.9^2} = 35.3$ m/s

---

### Problem 5: Relative Motion

Two cars are at an intersection. Car A travels east at 20 m/s. Car B travels north at 15 m/s. Both start at the origin at $t = 0$.

**(a)** Find the position of each car as a function of time.

**Solution:**
$$\vec{r}_A = 20t\hat{i} \text{ m}$$
$$\vec{r}_B = 15t\hat{j} \text{ m}$$

**(b)** Find the velocity of A relative to B.

**Solution:**
$$\vec{v}_{A/B} = \vec{v}_A - \vec{v}_B = 20\hat{i} - 15\hat{j} \text{ m/s}$$

**(c)** Find the distance between the cars as a function of time.

**Solution:**
$$\vec{r}_{A/B} = \vec{r}_A - \vec{r}_B = 20t\hat{i} - 15t\hat{j}$$

$$d = |\vec{r}_{A/B}| = \sqrt{(20t)^2 + (15t)^2} = 25t \text{ m}$$

**(d)** How fast is the distance between them increasing?

**Solution:**
$$\frac{dd}{dt} = 25 \text{ m/s}$$

Alternatively, using relative velocity:
$$|\vec{v}_{A/B}| = \sqrt{20^2 + 15^2} = 25 \text{ m/s}$$

---

### Problem 6: Calculus-Based Analysis

A particle moves along the x-axis with velocity $v(t) = 10\cos(\pi t/4)$ m/s. At $t = 0$, the particle is at $x = 2$ m.

**(a)** Find position as a function of time.

**Solution:**
$$x(t) = \int 10\cos\left(\frac{\pi t}{4}\right) dt = 10 \cdot \frac{4}{\pi}\sin\left(\frac{\pi t}{4}\right) + C$$

$$x(t) = \frac{40}{\pi}\sin\left(\frac{\pi t}{4}\right) + C$$

At $t = 0$: $x(0) = 0 + C = 2$, so $C = 2$

$$x(t) = \frac{40}{\pi}\sin\left(\frac{\pi t}{4}\right) + 2 \text{ m}$$

**(b)** Find acceleration as a function of time.

**Solution:**
$$a(t) = \frac{dv}{dt} = 10 \cdot \left(-\frac{\pi}{4}\right)\sin\left(\frac{\pi t}{4}\right)$$

$$a(t) = -\frac{5\pi}{2}\sin\left(\frac{\pi t}{4}\right) \text{ m/s}^2$$

**(c)** Find maximum displacement from origin.

**Solution:**
Maximum displacement when $\sin(\pi t/4) = 1$:
$$x_{max} = \frac{40}{\pi} + 2 \approx 14.73 \text{ m}$$

---

### Problem 7: Trajectory Analysis

A projectile is launched from ground level with speed $v_0 = 50$ m/s.

**(a)** At what angle should it be launched to hit a target 200 m away horizontally?

**Solution:**
Using the range equation:
$$R = \frac{v_0^2 \sin(2\theta)}{g}$$

$$200 = \frac{50^2 \sin(2\theta)}{9.8}$$

$$\sin(2\theta) = \frac{200 \times 9.8}{2500} = 0.784$$

$$2\theta = 51.6° \text{ or } 128.4°$$

$$\theta = 25.8° \text{ or } 64.2°$$

**(b)** Which angle gives the shorter flight time?

**Solution:**
$$T = \frac{2v_0 \sin\theta}{g}$$

For $\theta = 25.8°$: $T = \frac{2(50)\sin(25.8°)}{9.8} = 4.44$ s

For $\theta = 64.2°$: $T = \frac{2(50)\sin(64.2°)}{9.8} = 9.19$ s

The **lower angle (25.8°)** gives shorter flight time.

---

## 1.10 Key Formulas Summary

### One-Dimensional Kinematics
| Quantity | Derivative Form | Integral Form |
|----------|-----------------|---------------|
| Velocity | $v = \frac{dx}{dt}$ | $x = \int v \, dt$ |
| Acceleration | $a = \frac{dv}{dt}$ | $v = \int a \, dt$ |

### Constant Acceleration
$$v = v_0 + at$$
$$x = x_0 + v_0 t + \frac{1}{2}at^2$$
$$v^2 = v_0^2 + 2a(x - x_0)$$

### Projectile Motion
$$x(t) = v_0 \cos\theta \cdot t$$
$$y(t) = v_0 \sin\theta \cdot t - \frac{1}{2}gt^2$$
$$R = \frac{v_0^2 \sin(2\theta)}{g}$$
$$h_{max} = \frac{v_0^2 \sin^2\theta}{2g}$$

### Vector Kinematics
$$\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}$$
$$\vec{v} = \frac{d\vec{r}}{dt}$$
$$\vec{a} = \frac{d\vec{v}}{dt}$$

---

## 1.11 Common Mistakes to Avoid

1. **Forgetting constants of integration** - Always include $+C$ and use initial conditions to find it.

2. **Confusing distance and displacement** - Distance is total path length (always positive); displacement is change in position (can be negative).

3. **Sign errors** - Choose a coordinate system and stick with it. Remember $g$ is positive, but $\vec{g} = -g\hat{j}$.

4. **Mixing scalars and vectors** - Speed is a scalar; velocity is a vector.

5. **Ignoring the direction of acceleration** - Negative acceleration doesn't always mean slowing down!

6. **Forgetting to check multiple solutions** - Quadratic equations often give two solutions; use physics to determine which is valid.

---

## 1.12 AP Exam Tips

✅ **Show all work** - Include the integral or derivative symbol and all steps.

✅ **Include units** - Every numerical answer needs appropriate units.

✅ **Draw diagrams** - Especially for projectile and vector problems.

✅ **Check limiting cases** - When $t = 0$, does your equation give the initial conditions?

✅ **Use calculus notation** - The AP Physics C exam expects $\frac{dx}{dt}$ notation, not just "rate of change."

✅ **State assumptions** - Especially "air resistance is negligible."

---

:::GUIDE:::
