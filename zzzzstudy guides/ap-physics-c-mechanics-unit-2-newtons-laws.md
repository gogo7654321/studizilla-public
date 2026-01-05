:::GUIDE:::
unit::=2
title::=⚛️ Unit 2: Newton's Laws of Motion
desc::=Calculus-based dynamics and Newton's Laws for AP Physics C
diff::=Hard
time::=65 min
tags::=physics,mechanics,calculus,newtons-laws,forces,dynamics
content::=

# ⚛️ Unit 2: Newton's Laws of Motion

## Introduction to Dynamics

While kinematics describes **how** objects move, dynamics explains **why** they move. Newton's Laws of Motion are the foundation of classical mechanics, connecting force, mass, and acceleration through calculus-based relationships.

---

## 2.1 Newton's First Law (Law of Inertia)

### Statement

> An object at rest stays at rest, and an object in motion stays in motion with the same velocity, unless acted upon by a net external force.

### Mathematical Form

$$\sum \vec{F} = 0 \Rightarrow \vec{a} = 0$$

If $\vec{a} = 0$, then:
$$\vec{v} = \text{constant}$$

### Inertia

**Inertia** is the tendency of an object to resist changes in its motion. Mass is a measure of inertia.

### Inertial Reference Frames

Newton's laws are only valid in **inertial reference frames** - frames that are not accelerating. Examples:
- ✅ A lab at rest on Earth (approximately)
- ✅ A spaceship moving at constant velocity
- ❌ An accelerating car
- ❌ A rotating merry-go-round

---

## 2.2 Newton's Second Law

### Statement

> The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.

### Mathematical Form

$$\boxed{\sum \vec{F} = m\vec{a}}$$

Or equivalently:
$$\vec{a} = \frac{\sum \vec{F}}{m}$$

### Component Form

$$\sum F_x = ma_x$$
$$\sum F_y = ma_y$$
$$\sum F_z = ma_z$$

### Calculus Form

Since $\vec{a} = \frac{d\vec{v}}{dt}$:

$$\sum \vec{F} = m\frac{d\vec{v}}{dt}$$

And since $\vec{a} = \frac{d^2\vec{r}}{dt^2}$:

$$\sum \vec{F} = m\frac{d^2\vec{r}}{dt^2}$$

### Variable Mass (Advanced)

For systems with changing mass (like rockets):
$$\vec{F} = \frac{d\vec{p}}{dt} = \frac{d(m\vec{v})}{dt} = m\frac{d\vec{v}}{dt} + \vec{v}\frac{dm}{dt}$$

---

## 2.3 Newton's Third Law

### Statement

> For every action, there is an equal and opposite reaction.

### Mathematical Form

$$\vec{F}_{AB} = -\vec{F}_{BA}$$

Where $\vec{F}_{AB}$ is the force exerted on object A by object B.

### Important Properties

1. Action-reaction pairs act on **different objects**
2. They are **always equal in magnitude**
3. They are **always opposite in direction**
4. They are **always the same type of force**

### Common Misconception

Action-reaction pairs do **not** cancel each other because they act on different objects. Forces cancel only when they act on the **same** object.

---

## 2.4 Common Forces

### Weight (Gravitational Force)

$$\vec{W} = m\vec{g}$$

Near Earth's surface: $|\vec{W}| = mg$ where $g \approx 9.8$ m/s²

Direction: Always toward the center of Earth (usually $-\hat{j}$)

### Normal Force

The perpendicular force exerted by a surface on an object in contact with it.

- Symbol: $\vec{N}$ or $\vec{F}_N$
- Direction: Perpendicular to surface, away from surface
- Magnitude: Determined by the constraint that objects don't pass through surfaces

**Note:** $N \neq mg$ in general! The normal force adjusts to prevent penetration.

### Friction

**Static Friction** (object not sliding):
$$f_s \leq \mu_s N$$

Maximum static friction: $f_{s,max} = \mu_s N$

**Kinetic Friction** (object sliding):
$$f_k = \mu_k N$$

Where $\mu_s$ and $\mu_k$ are coefficients of static and kinetic friction, respectively. Generally, $\mu_s > \mu_k$.

### Tension

Force transmitted through a rope, string, or cable.

For an **ideal rope** (massless and inextensible):
- Tension is the same throughout the rope
- Rope transmits force but does not store energy

### Spring Force (Hooke's Law)

$$\vec{F}_s = -k\vec{x}$$

Where:
- $k$ = spring constant (N/m)
- $x$ = displacement from equilibrium
- Negative sign indicates restoring force (opposite to displacement)

### Air Resistance (Drag)

For low speeds: $\vec{F}_d = -b\vec{v}$ (linear drag)

For high speeds: $\vec{F}_d = -\frac{1}{2}C_D \rho A v^2 \hat{v}$ (quadratic drag)

---

## 2.5 Free Body Diagrams

### Steps to Draw a Free Body Diagram

1. **Identify the object** of interest
2. **Draw the object** as a point or simple shape
3. **Identify all forces** acting on the object
4. **Draw force vectors** starting from the object
5. **Label each force** clearly
6. **Choose a coordinate system** (align with acceleration if possible)

### Example: Block on Inclined Plane

For a block on an incline at angle $\theta$:

Forces:
- Weight: $\vec{W} = mg$ (downward)
- Normal force: $\vec{N}$ (perpendicular to surface)
- Friction: $\vec{f}$ (along surface, opposing motion)

**Coordinate system:** Align x-axis parallel to incline, y-axis perpendicular.

Component equations:
$$\sum F_x = mg\sin\theta - f = ma$$
$$\sum F_y = N - mg\cos\theta = 0$$

---

## 2.6 Applying Newton's Second Law

### Problem-Solving Strategy

1. **Draw a diagram** of the physical situation
2. **Identify all forces** on each object
3. **Draw free body diagrams** for each object
4. **Choose coordinate systems** (align with acceleration)
5. **Write Newton's second law** in component form
6. **Solve the equations** for unknowns
7. **Check your answer** (units, limiting cases, reasonableness)

### Single Object Problems

**Example:** A 5 kg box is pushed across a floor with coefficient of kinetic friction $\mu_k = 0.3$ by a 40 N horizontal force. Find the acceleration.

**Solution:**

Free body diagram forces:
- Applied force: $F = 40$ N (horizontal)
- Weight: $W = mg = 49$ N (down)
- Normal force: $N$ (up)
- Friction: $f_k = \mu_k N$ (opposing motion)

Newton's second law:
$$\sum F_y = N - mg = 0 \Rightarrow N = 49 \text{ N}$$

$$f_k = \mu_k N = 0.3 \times 49 = 14.7 \text{ N}$$

$$\sum F_x = F - f_k = ma$$
$$40 - 14.7 = 5a$$
$$a = 5.06 \text{ m/s}^2$$

---

## 2.7 Connected Objects

### Atwood Machine

Two masses $m_1$ and $m_2$ connected by a rope over a pulley.

Assuming massless, frictionless pulley and inextensible rope:

For mass $m_1$: $m_1 g - T = m_1 a$
For mass $m_2$: $T - m_2 g = m_2 a$

Adding equations:
$$(m_1 - m_2)g = (m_1 + m_2)a$$

$$\boxed{a = \frac{(m_1 - m_2)g}{m_1 + m_2}}$$

Tension:
$$T = m_1 g - m_1 a = m_1 g - m_1 \cdot \frac{(m_1 - m_2)g}{m_1 + m_2}$$

$$\boxed{T = \frac{2m_1 m_2 g}{m_1 + m_2}}$$

### Objects in Contact

When objects are pushed together, they share a common acceleration.

**Example:** Two blocks ($m_1 = 2$ kg, $m_2 = 3$ kg) are pushed by force $F = 20$ N.

Treating as a system:
$$F = (m_1 + m_2)a$$
$$a = \frac{20}{5} = 4 \text{ m/s}^2$$

Force between blocks (analyzing $m_2$ alone):
$$F_{12} = m_2 a = 3 \times 4 = 12 \text{ N}$$

---

## 2.8 Inclined Plane Problems

### Block on Smooth (Frictionless) Incline

$$mg\sin\theta = ma$$
$$a = g\sin\theta$$

### Block on Rough Incline

**Case 1: Block sliding down**
$$mg\sin\theta - \mu_k N = ma$$
$$N = mg\cos\theta$$
$$a = g(\sin\theta - \mu_k\cos\theta)$$

**Case 2: Block stationary (static friction)**
$$f_s = mg\sin\theta$$

Block remains stationary if:
$$mg\sin\theta \leq \mu_s mg\cos\theta$$
$$\tan\theta \leq \mu_s$$

**Critical angle:** $\theta_c = \arctan(\mu_s)$

---

## 2.9 Circular Motion and Centripetal Force

### Centripetal Acceleration

For uniform circular motion:
$$a_c = \frac{v^2}{r} = \omega^2 r$$

Direction: Always toward the center of the circle.

### Centripetal Force

Newton's second law for circular motion:
$$\sum F_c = ma_c = m\frac{v^2}{r}$$

**Important:** Centripetal force is not a new type of force! It's the **net force** toward the center, provided by real forces (tension, normal force, friction, gravity, etc.).

### Common Examples

**Horizontal circle (ball on string):**
$$T = m\frac{v^2}{r}$$

**Vertical circle (bottom):**
$$T - mg = m\frac{v^2}{r}$$
$$T = m\left(\frac{v^2}{r} + g\right)$$

**Vertical circle (top):**
$$T + mg = m\frac{v^2}{r}$$
$$T = m\left(\frac{v^2}{r} - g\right)$$

**Minimum speed at top** (for rope to remain taut, $T \geq 0$):
$$v_{min} = \sqrt{gr}$$

**Banked curve without friction:**
$$\tan\theta = \frac{v^2}{rg}$$

**Banked curve with friction:**
$$\frac{v^2}{rg} = \frac{\tan\theta + \mu}{1 - \mu\tan\theta}$$ (sliding outward)

---

## 2.10 Differential Equations in Dynamics

### Velocity-Dependent Forces

When force depends on velocity (like drag), we get differential equations.

**Example: Linear drag**

A falling object with linear drag $F_d = -bv$:

$$mg - bv = m\frac{dv}{dt}$$

$$\frac{dv}{dt} = g - \frac{b}{m}v$$

Let $\gamma = \frac{b}{m}$:
$$\frac{dv}{dt} = g - \gamma v$$

**Solving by separation of variables:**
$$\frac{dv}{g - \gamma v} = dt$$

$$-\frac{1}{\gamma}\ln|g - \gamma v| = t + C$$

With initial condition $v(0) = 0$:
$$-\frac{1}{\gamma}\ln|g| = C$$

$$-\frac{1}{\gamma}\ln\left|\frac{g - \gamma v}{g}\right| = t$$

$$\frac{g - \gamma v}{g} = e^{-\gamma t}$$

$$\boxed{v(t) = \frac{mg}{b}\left(1 - e^{-bt/m}\right)}$$

### Terminal Velocity

As $t \to \infty$:
$$v_{terminal} = \frac{mg}{b}$$

At terminal velocity, drag force equals weight.

---

## 2.11 Spring-Mass Systems

### Simple Harmonic Motion Setup

For a mass on a horizontal spring:
$$F = -kx = ma$$
$$m\frac{d^2x}{dt^2} = -kx$$

$$\boxed{\frac{d^2x}{dt^2} + \omega^2 x = 0}$$

Where $\omega = \sqrt{\frac{k}{m}}$ is the angular frequency.

### General Solution

$$x(t) = A\cos(\omega t + \phi)$$

Or equivalently:
$$x(t) = A\cos(\omega t) + B\sin(\omega t)$$

Where $A$ and $\phi$ (or $A$ and $B$) are determined by initial conditions.

### Velocity and Acceleration

$$v(t) = \frac{dx}{dt} = -A\omega\sin(\omega t + \phi)$$

$$a(t) = \frac{dv}{dt} = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x$$

### Period and Frequency

$$T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{m}{k}}$$

$$f = \frac{1}{T} = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$

---

## 2.12 Practice Problems

### Problem 1: Newton's Second Law

A 10 kg block is acted upon by two forces: $\vec{F}_1 = (20\hat{i} + 30\hat{j})$ N and $\vec{F}_2 = (-5\hat{i} + 10\hat{j})$ N.

**(a)** Find the net force.

**Solution:**
$$\sum \vec{F} = \vec{F}_1 + \vec{F}_2 = (20-5)\hat{i} + (30+10)\hat{j} = 15\hat{i} + 40\hat{j} \text{ N}$$

**(b)** Find the acceleration.

**Solution:**
$$\vec{a} = \frac{\sum \vec{F}}{m} = \frac{15\hat{i} + 40\hat{j}}{10} = 1.5\hat{i} + 4\hat{j} \text{ m/s}^2$$

**(c)** Find the magnitude of acceleration.

**Solution:**
$$|\vec{a}| = \sqrt{1.5^2 + 4^2} = \sqrt{2.25 + 16} = \sqrt{18.25} = 4.27 \text{ m/s}^2$$

---

### Problem 2: Friction and Inclined Plane

A 5 kg block is placed on an incline at 30° with the horizontal. The coefficient of static friction is $\mu_s = 0.4$ and kinetic friction is $\mu_k = 0.3$.

**(a)** Will the block slide?

**Solution:**
Check if $\tan\theta > \mu_s$:
$$\tan(30°) = 0.577 > 0.4 = \mu_s$$

Yes, the block will slide.

**(b)** Find the acceleration.

**Solution:**
$$a = g(\sin\theta - \mu_k\cos\theta)$$
$$a = 9.8(\sin 30° - 0.3\cos 30°)$$
$$a = 9.8(0.5 - 0.3 \times 0.866)$$
$$a = 9.8(0.5 - 0.26) = 9.8 \times 0.24 = 2.35 \text{ m/s}^2$$

---

### Problem 3: Atwood Machine Variation

In a modified Atwood machine, mass $m_1 = 4$ kg hangs vertically, connected by a rope over a pulley to mass $m_2 = 2$ kg on a frictionless horizontal table.

**(a)** Find the acceleration of the system.

**Solution:**

For $m_1$ (vertical): $m_1 g - T = m_1 a$
For $m_2$ (horizontal): $T = m_2 a$

Adding:
$$m_1 g = (m_1 + m_2)a$$
$$a = \frac{m_1 g}{m_1 + m_2} = \frac{4 \times 9.8}{6} = 6.53 \text{ m/s}^2$$

**(b)** Find the tension.

**Solution:**
$$T = m_2 a = 2 \times 6.53 = 13.07 \text{ N}$$

---

### Problem 4: Circular Motion

A 0.5 kg ball is swung in a vertical circle of radius 1.2 m.

**(a)** What is the minimum speed at the top for the string to remain taut?

**Solution:**
At minimum speed, tension $T = 0$:
$$mg = m\frac{v^2}{r}$$
$$v_{min} = \sqrt{gr} = \sqrt{9.8 \times 1.2} = 3.43 \text{ m/s}$$

**(b)** If the speed at the top is 5 m/s, what is the tension?

**Solution:**
$$T + mg = m\frac{v^2}{r}$$
$$T = m\left(\frac{v^2}{r} - g\right) = 0.5\left(\frac{25}{1.2} - 9.8\right)$$
$$T = 0.5(20.83 - 9.8) = 0.5 \times 11.03 = 5.52 \text{ N}$$

**(c)** What is the tension at the bottom if speed is 8 m/s?

**Solution:**
$$T - mg = m\frac{v^2}{r}$$
$$T = m\left(\frac{v^2}{r} + g\right) = 0.5\left(\frac{64}{1.2} + 9.8\right)$$
$$T = 0.5(53.33 + 9.8) = 0.5 \times 63.13 = 31.57 \text{ N}$$

---

### Problem 5: Differential Equation - Drag Force

A 2 kg object is dropped from rest. The drag force is $F_d = 0.5v$ N.

**(a)** Set up the differential equation for velocity.

**Solution:**
$$mg - bv = m\frac{dv}{dt}$$
$$2(9.8) - 0.5v = 2\frac{dv}{dt}$$
$$\frac{dv}{dt} = 9.8 - 0.25v$$

**(b)** Find the terminal velocity.

**Solution:**
At terminal velocity, $\frac{dv}{dt} = 0$:
$$9.8 - 0.25v_t = 0$$
$$v_t = \frac{9.8}{0.25} = 39.2 \text{ m/s}$$

**(c)** Find $v(t)$.

**Solution:**
Using the general solution for linear drag:
$$v(t) = v_t(1 - e^{-bt/m}) = 39.2(1 - e^{-0.25t}) \text{ m/s}$$

**(d)** How long to reach 90% of terminal velocity?

**Solution:**
$$0.9v_t = v_t(1 - e^{-0.25t})$$
$$0.9 = 1 - e^{-0.25t}$$
$$e^{-0.25t} = 0.1$$
$$-0.25t = \ln(0.1) = -2.303$$
$$t = 9.21 \text{ s}$$

---

### Problem 6: Spring-Mass Oscillation

A 0.4 kg mass is attached to a spring with $k = 100$ N/m. It is pulled 0.1 m from equilibrium and released from rest.

**(a)** Write the equation of motion.

**Solution:**
$$\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{100}{0.4}} = 15.81 \text{ rad/s}$$

Initial conditions: $x(0) = 0.1$ m, $v(0) = 0$

$$x(t) = A\cos(\omega t + \phi)$$

At $t = 0$: $x(0) = A\cos\phi = 0.1$
$v(0) = -A\omega\sin\phi = 0 \Rightarrow \phi = 0$

Therefore: $A = 0.1$ m

$$x(t) = 0.1\cos(15.81t) \text{ m}$$

**(b)** Find maximum velocity.

**Solution:**
$$v_{max} = A\omega = 0.1 \times 15.81 = 1.581 \text{ m/s}$$

**(c)** Find maximum acceleration.

**Solution:**
$$a_{max} = A\omega^2 = 0.1 \times 15.81^2 = 25 \text{ m/s}^2$$

Or using $a_{max} = \frac{kA}{m} = \frac{100 \times 0.1}{0.4} = 25$ m/s²

**(d)** Find the period.

**Solution:**
$$T = \frac{2\pi}{\omega} = \frac{2\pi}{15.81} = 0.397 \text{ s}$$

---

### Problem 7: Two-Body Problem with Friction

Two blocks are stacked: $m_1 = 3$ kg (top) and $m_2 = 5$ kg (bottom). The coefficient of static friction between blocks is $\mu_s = 0.4$. The bottom block sits on a frictionless surface. A horizontal force $F$ is applied to the bottom block.

**(a)** What is the maximum force $F$ before the top block slips?

**Solution:**

For the blocks to move together:
$$a = \frac{F}{m_1 + m_2}$$

Friction accelerates the top block:
$$f_s = m_1 a$$

Maximum before slipping:
$$\mu_s m_1 g = m_1 a_{max}$$
$$a_{max} = \mu_s g = 0.4 \times 9.8 = 3.92 \text{ m/s}^2$$

$$F_{max} = (m_1 + m_2)a_{max} = 8 \times 3.92 = 31.36 \text{ N}$$

**(b)** If $F = 50$ N, find the acceleration of each block.

**Solution:**

Since $F > F_{max}$, blocks slip. Use kinetic friction.

Assuming $\mu_k = 0.3$ (typical):

For top block:
$$f_k = \mu_k m_1 g = 0.3 \times 3 \times 9.8 = 8.82 \text{ N}$$
$$a_1 = \frac{f_k}{m_1} = \frac{8.82}{3} = 2.94 \text{ m/s}^2$$

For bottom block:
$$F - f_k = m_2 a_2$$
$$50 - 8.82 = 5 a_2$$
$$a_2 = \frac{41.18}{5} = 8.24 \text{ m/s}^2$$

---

### Problem 8: Conical Pendulum

A ball of mass $m = 0.2$ kg is attached to a string of length $L = 0.8$ m and swings in a horizontal circle. The string makes an angle of 30° with the vertical.

**(a)** Find the tension in the string.

**Solution:**

Vertical equilibrium:
$$T\cos\theta = mg$$
$$T = \frac{mg}{\cos\theta} = \frac{0.2 \times 9.8}{\cos 30°} = \frac{1.96}{0.866} = 2.26 \text{ N}$$

**(b)** Find the speed of the ball.

**Solution:**

Radius of circle: $r = L\sin\theta = 0.8 \times 0.5 = 0.4$ m

Horizontal (centripetal):
$$T\sin\theta = m\frac{v^2}{r}$$
$$v^2 = \frac{rT\sin\theta}{m} = \frac{0.4 \times 2.26 \times 0.5}{0.2} = 2.26$$
$$v = 1.50 \text{ m/s}$$

**(c)** Find the period of rotation.

**Solution:**
$$T_{period} = \frac{2\pi r}{v} = \frac{2\pi \times 0.4}{1.50} = 1.68 \text{ s}$$

---

## 2.13 Key Formulas Summary

### Newton's Laws
$$\sum \vec{F} = 0 \Rightarrow \vec{v} = \text{constant (1st Law)}$$
$$\sum \vec{F} = m\vec{a} = m\frac{d\vec{v}}{dt} \text{ (2nd Law)}$$
$$\vec{F}_{AB} = -\vec{F}_{BA} \text{ (3rd Law)}$$

### Common Forces
| Force | Formula |
|-------|---------|
| Weight | $W = mg$ |
| Normal | Determined by constraint |
| Static Friction | $f_s \leq \mu_s N$ |
| Kinetic Friction | $f_k = \mu_k N$ |
| Spring | $F = -kx$ |
| Linear Drag | $F_d = -bv$ |

### Circular Motion
$$a_c = \frac{v^2}{r} = \omega^2 r$$
$$\sum F_c = m\frac{v^2}{r}$$

### Inclined Plane
$$a = g\sin\theta \text{ (frictionless)}$$
$$a = g(\sin\theta - \mu_k\cos\theta) \text{ (with friction)}$$

### Spring-Mass System
$$\omega = \sqrt{\frac{k}{m}}, \quad T = 2\pi\sqrt{\frac{m}{k}}$$
$$x(t) = A\cos(\omega t + \phi)$$

---

## 2.14 Common Mistakes to Avoid

1. **Drawing free body diagrams incorrectly** - Only include forces acting ON the object, not forces the object exerts on others.

2. **Confusing $N = mg$** - The normal force equals weight only on horizontal surfaces with no other vertical forces.

3. **Forgetting friction direction** - Friction always opposes relative motion or tendency to move.

4. **Centripetal force as a separate force** - It's the NET force toward the center, not an additional force.

5. **Sign errors in circular motion** - Carefully choose which direction is positive (toward or away from center).

6. **Ignoring constraints** - Connected objects often have the same acceleration magnitude.

7. **Confusing mass and weight** - Mass is measured in kg; weight is a force in Newtons.

---

## 2.15 AP Exam Tips

✅ **Always draw a free body diagram** - Even if not explicitly asked, it helps organize your solution.

✅ **Choose coordinates wisely** - Align one axis with acceleration when possible.

✅ **Show Newton's second law explicitly** - Write $\sum F = ma$ before substituting.

✅ **Solve symbolically first** - Then substitute numbers at the end.

✅ **Check dimensions** - Your answer should have correct units.

✅ **Verify limiting cases** - Does your answer make sense when $\mu \to 0$ or $m_1 \to m_2$?

✅ **Use calculus notation** - The exam expects derivatives and integrals, not just algebra.

✅ **State assumptions** - "The pulley is massless and frictionless," "Air resistance is negligible."

---

## 2.16 Connections to Other Units

| This Unit | Connects To |
|-----------|-------------|
| $\vec{F} = m\vec{a}$ | Unit 3: Work-Energy Theorem |
| Friction and springs | Unit 4: Systems and momentum |
| Circular motion forces | Unit 5: Rotational dynamics |
| $F = ma$ as differential equation | Unit 6: Oscillations (SHM) |
| Gravity as a force | Unit 7: Gravitation |

---

:::GUIDE:::
