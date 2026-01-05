:::GUIDE:::
unit::=3
title::=⚛️ Unit 3: Work, Energy, and Power
desc::=Calculus-based energy for AP Physics C Mechanics
diff::=Hard
time::=60 min
tags::=physics,mechanics,energy,work,power
content::=

# ⚛️ Unit 3: Work, Energy, and Power

Master the calculus-based approach to energy in mechanics. This unit connects force and motion through the powerful concepts of work, energy, and power.

---

## 📚 Key Concepts Overview

| Concept | Definition | Key Equation |
|---------|------------|--------------|
| Work | Energy transfer via force | W = ∫F·dr |
| Kinetic Energy | Energy of motion | K = ½mv² |
| Potential Energy | Stored energy from position | U = -∫F·dr |
| Power | Rate of energy transfer | P = dW/dt |
| Conservation | Total mechanical energy constant | E = K + U |

---

## 🔧 Work as an Integral

### Definition of Work

Work is the energy transferred to or from an object by a force acting on it. In calculus form:

$$W = \int_{\vec{r}_1}^{\vec{r}_2} \vec{F} \cdot d\vec{r}$$

For motion along a path, this becomes a **line integral**.

### Work by a Constant Force

When force is constant:
$$W = \vec{F} \cdot \Delta\vec{r} = F \cdot d \cdot \cos\theta$$

Where:
- F = magnitude of force
- d = displacement magnitude
- θ = angle between force and displacement

### Work by a Variable Force

When force varies with position, we must integrate:

$$W = \int_{x_1}^{x_2} F(x) \, dx$$

**Example: Spring Force**

For a spring with F(x) = -kx:

$$W = \int_{x_1}^{x_2} F_{applied} \, dx = \int_{x_1}^{x_2} kx \, dx = \frac{1}{2}kx_2^2 - \frac{1}{2}kx_1^2$$

### Three-Dimensional Work Integral

In 3D with position-dependent force:

$$W = \int_C \vec{F} \cdot d\vec{r} = \int_C (F_x \, dx + F_y \, dy + F_z \, dz)$$

### Parametric Path Integration

If the path is given parametrically as $\vec{r}(t)$:

$$W = \int_{t_1}^{t_2} \vec{F}(\vec{r}(t)) \cdot \frac{d\vec{r}}{dt} \, dt = \int_{t_1}^{t_2} \vec{F} \cdot \vec{v} \, dt$$

---

## 💡 Worked Example: Variable Force Work

**Problem:** A force F(x) = 3x² + 2x (in Newtons) acts on an object. Find the work done moving the object from x = 1 m to x = 4 m.

**Solution:**

$$W = \int_{1}^{4} (3x^2 + 2x) \, dx$$

$$W = \left[ x^3 + x^2 \right]_1^4$$

$$W = (64 + 16) - (1 + 1)$$

$$W = 80 - 2 = 78 \text{ J}$$

---

## 💡 Worked Example: Work Along a Curved Path

**Problem:** A force $\vec{F} = xy\hat{i} + y^2\hat{j}$ acts on a particle moving along the parabola y = x² from (0,0) to (2,4). Find the work done.

**Solution:**

Parametrize the path: Let x = t, so y = t², where t goes from 0 to 2.

Position: $\vec{r}(t) = t\hat{i} + t^2\hat{j}$

Velocity: $\frac{d\vec{r}}{dt} = \hat{i} + 2t\hat{j}$

Force along path: $\vec{F}(t) = t(t^2)\hat{i} + (t^2)^2\hat{j} = t^3\hat{i} + t^4\hat{j}$

Work integral:
$$W = \int_0^2 \vec{F} \cdot \frac{d\vec{r}}{dt} \, dt = \int_0^2 (t^3 \cdot 1 + t^4 \cdot 2t) \, dt$$

$$W = \int_0^2 (t^3 + 2t^5) \, dt = \left[\frac{t^4}{4} + \frac{t^6}{3}\right]_0^2$$

$$W = \frac{16}{4} + \frac{64}{3} = 4 + \frac{64}{3} = \frac{76}{3} \approx 25.3 \text{ J}$$

---

## ⚡ Kinetic Energy and the Work-Energy Theorem

### Derivation of the Work-Energy Theorem

Starting from Newton's second law:
$$\vec{F} = m\vec{a} = m\frac{d\vec{v}}{dt}$$

Multiply both sides by velocity and integrate:
$$\vec{F} \cdot \vec{v} = m\frac{d\vec{v}}{dt} \cdot \vec{v}$$

Using the chain rule: $\frac{d}{dt}\left(\frac{1}{2}v^2\right) = \vec{v} \cdot \frac{d\vec{v}}{dt}$

Therefore:
$$\vec{F} \cdot \vec{v} = \frac{d}{dt}\left(\frac{1}{2}mv^2\right)$$

Integrating from $t_1$ to $t_2$:
$$\int_{t_1}^{t_2} \vec{F} \cdot \vec{v} \, dt = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

Since $\int \vec{F} \cdot \vec{v} \, dt = \int \vec{F} \cdot d\vec{r} = W$:

$$\boxed{W_{net} = \Delta K = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2}$$

### Kinetic Energy

Kinetic energy is the energy of motion:

$$K = \frac{1}{2}mv^2$$

In component form:
$$K = \frac{1}{2}m(v_x^2 + v_y^2 + v_z^2)$$

### Relativistic Note

At very high speeds, K = ½mv² is an approximation. The full relativistic kinetic energy is:
$$K = (\gamma - 1)mc^2$$
where $\gamma = 1/\sqrt{1-v^2/c^2}$

(Not required for AP Physics C, but good to know!)

---

## 💡 Worked Example: Work-Energy Theorem

**Problem:** A 2 kg block initially at rest is acted upon by a force F(x) = 6x N. Find the speed of the block after it has moved 3 m.

**Solution:**

Apply the Work-Energy Theorem:
$$W = \Delta K = K_f - K_i$$

Calculate work:
$$W = \int_0^3 6x \, dx = 3x^2 \Big|_0^3 = 27 \text{ J}$$

Since $K_i = 0$ (starts at rest):
$$27 = \frac{1}{2}(2)v_f^2 - 0$$

$$v_f = \sqrt{27} = 3\sqrt{3} \approx 5.20 \text{ m/s}$$

---

## 🔋 Potential Energy Functions

### Conservative Forces

A force is **conservative** if:
1. The work done is path-independent (depends only on endpoints)
2. The work done over a closed path is zero: $\oint \vec{F} \cdot d\vec{r} = 0$
3. The force can be written as the negative gradient of a potential: $\vec{F} = -\nabla U$

### Potential Energy Definition

For a conservative force, the potential energy function is defined as:

$$U(\vec{r}) = -\int_{\vec{r}_0}^{\vec{r}} \vec{F} \cdot d\vec{r}' + U_0$$

Or equivalently, the change in potential energy:

$$\Delta U = -W_{conservative} = -\int_{\vec{r}_1}^{\vec{r}_2} \vec{F} \cdot d\vec{r}$$

### Force from Potential Energy

Given U(r), the force is:

**1D:** 
$$F = -\frac{dU}{dx}$$

**3D (Gradient):**
$$\vec{F} = -\nabla U = -\left(\frac{\partial U}{\partial x}\hat{i} + \frac{\partial U}{\partial y}\hat{j} + \frac{\partial U}{\partial z}\hat{k}\right)$$

### Common Potential Energy Functions

| Force Type | Force | Potential Energy |
|------------|-------|------------------|
| Gravity (near Earth) | F = -mg | U = mgy |
| Spring | F = -kx | U = ½kx² |
| Gravity (universal) | F = -GMm/r² | U = -GMm/r |
| Electric | F = kqQ/r² | U = kqQ/r |

### Derivation: Gravitational Potential Energy

For gravity near Earth's surface (F = -mg, taking up as positive):

$$U = -\int F \, dy = -\int (-mg) \, dy = mgy + C$$

Choosing U = 0 at y = 0: **U = mgy**

### Derivation: Spring Potential Energy

For a spring (F = -kx):

$$U = -\int_0^x (-kx') \, dx' = \frac{1}{2}kx^2$$

### Derivation: Universal Gravitational Potential

For universal gravitation (F = -GMm/r²):

$$U = -\int_{\infty}^{r} \left(-\frac{GMm}{r'^2}\right) \, dr' = -\frac{GMm}{r}$$

(Note: U = 0 at r = ∞ by convention)

---

## 💡 Worked Example: Force from Potential

**Problem:** A potential energy function is given by U(x,y) = 3x²y - 2y³. Find the force vector at point (2, 1).

**Solution:**

Find the gradient:
$$F_x = -\frac{\partial U}{\partial x} = -6xy$$
$$F_y = -\frac{\partial U}{\partial y} = -3x^2 + 6y^2$$

At (2, 1):
$$F_x = -6(2)(1) = -12 \text{ N}$$
$$F_y = -3(4) + 6(1) = -12 + 6 = -6 \text{ N}$$

$$\vec{F} = -12\hat{i} - 6\hat{j} \text{ N}$$

Magnitude: $|\vec{F}| = \sqrt{144 + 36} = \sqrt{180} = 6\sqrt{5} \approx 13.4$ N

---

## 💡 Worked Example: Deriving Potential from Force

**Problem:** A force is given by $\vec{F} = -2xy\hat{i} - x^2\hat{j}$. Show this is conservative and find U(x,y).

**Solution:**

**Step 1: Check if conservative**

For a 2D force to be conservative: $\frac{\partial F_x}{\partial y} = \frac{\partial F_y}{\partial x}$

$$\frac{\partial F_x}{\partial y} = \frac{\partial}{\partial y}(-2xy) = -2x$$
$$\frac{\partial F_y}{\partial x} = \frac{\partial}{\partial x}(-x^2) = -2x$$

Yes, it's conservative! ✓

**Step 2: Find U(x,y)**

From $F_x = -\frac{\partial U}{\partial x} = -2xy$:
$$U = \int 2xy \, dx = x^2y + f(y)$$

From $F_y = -\frac{\partial U}{\partial y} = -x^2$:
$$\frac{\partial U}{\partial y} = x^2 + f'(y) = x^2$$
$$f'(y) = 0 \Rightarrow f(y) = C$$

Therefore: **U(x,y) = x²y + C**

---

## 🔄 Conservation of Mechanical Energy

### The Conservation Principle

When only conservative forces do work:

$$E = K + U = \text{constant}$$

$$K_1 + U_1 = K_2 + U_2$$

### General Energy Equation

When non-conservative forces (like friction) are present:

$$K_1 + U_1 + W_{nc} = K_2 + U_2$$

Or equivalently:
$$\Delta K + \Delta U = W_{nc}$$

### Energy Diagrams

Plotting U(x) vs x reveals:
- **Equilibrium points**: Where F = -dU/dx = 0 (slope = 0)
- **Stable equilibrium**: Local minimum in U (restoring force)
- **Unstable equilibrium**: Local maximum in U (deflecting force)
- **Turning points**: Where E = U (K = 0)

### Analyzing Motion from Energy Diagrams

At any position x:
$$K(x) = E - U(x)$$

Since K ≥ 0, motion is allowed only where E ≥ U(x).

The speed at any point:
$$v(x) = \sqrt{\frac{2[E - U(x)]}{m}}$$

---

## 💡 Worked Example: Conservation of Energy

**Problem:** A 0.5 kg ball is dropped from height h = 10 m. Find its speed when it's at height y = 3 m. (Ignore air resistance.)

**Solution:**

Using conservation of energy with ground as reference (U = 0):

$$K_1 + U_1 = K_2 + U_2$$

Initially (at rest at h = 10 m):
$$0 + mgh = \frac{1}{2}mv^2 + mgy$$

$$gh = \frac{1}{2}v^2 + gy$$

$$v = \sqrt{2g(h-y)} = \sqrt{2(9.8)(10-3)}$$

$$v = \sqrt{137.2} \approx 11.7 \text{ m/s}$$

---

## 💡 Worked Example: Spring and Gravity

**Problem:** A 2 kg block compresses a vertical spring (k = 500 N/m) by 0.3 m. When released, how high above the compressed position does the block rise?

**Solution:**

Take the compressed position as y = 0, with up positive.

**Initial state:** Block at rest, spring compressed by x₀ = 0.3 m
$$E_i = K_i + U_{spring} + U_{grav} = 0 + \frac{1}{2}kx_0^2 + 0$$
$$E_i = \frac{1}{2}(500)(0.3)^2 = 22.5 \text{ J}$$

**Final state:** Block at maximum height h, spring relaxed
$$E_f = 0 + 0 + mgh = (2)(9.8)h$$

By conservation:
$$22.5 = 19.6h$$
$$h = 1.15 \text{ m}$$

---

## 💡 Worked Example: Energy Diagram Analysis

**Problem:** A particle moves in a potential U(x) = x⁴ - 4x². If the particle has total energy E = 3 J, find the turning points and equilibrium positions.

**Solution:**

**Equilibrium positions** (where dU/dx = 0):
$$\frac{dU}{dx} = 4x^3 - 8x = 4x(x^2 - 2) = 0$$
$$x = 0, \pm\sqrt{2}$$

Check stability using second derivative:
$$\frac{d^2U}{dx^2} = 12x^2 - 8$$

At x = 0: $\frac{d^2U}{dx^2} = -8 < 0$ → **Unstable** (maximum)
At x = ±√2: $\frac{d^2U}{dx^2} = 24 - 8 = 16 > 0$ → **Stable** (minima)

**Turning points** (where U = E = 3):
$$x^4 - 4x^2 = 3$$
$$x^4 - 4x^2 - 3 = 0$$

Let u = x²:
$$u^2 - 4u - 3 = 0$$
$$u = \frac{4 \pm \sqrt{16 + 12}}{2} = \frac{4 \pm \sqrt{28}}{2} = 2 \pm \sqrt{7}$$

Since u = x² ≥ 0, only u = 2 + √7 ≈ 4.65 is valid.
$$x = \pm\sqrt{2 + \sqrt{7}} \approx \pm 2.16$$

The turning points are at **x ≈ ±2.16 m**.

---

## ⚡ Power

### Definition of Power

Power is the rate at which work is done (or energy is transferred):

$$P = \frac{dW}{dt}$$

### Average Power

$$P_{avg} = \frac{\Delta W}{\Delta t} = \frac{W_{total}}{t}$$

### Instantaneous Power

Using W = ∫F·dr:

$$P = \frac{dW}{dt} = \vec{F} \cdot \frac{d\vec{r}}{dt} = \vec{F} \cdot \vec{v}$$

$$\boxed{P = \vec{F} \cdot \vec{v} = Fv\cos\theta}$$

### Units of Power

- SI unit: **Watt (W)** = J/s = kg·m²/s³
- 1 horsepower (hp) = 746 W
- 1 kilowatt-hour (kWh) = 3.6 × 10⁶ J (unit of energy!)

### Power and Kinetic Energy

Since $K = \frac{1}{2}mv^2$:

$$P = \frac{dK}{dt} = \frac{d}{dt}\left(\frac{1}{2}mv^2\right) = mv\frac{dv}{dt} = mav$$

(when only kinetic energy changes)

---

## 💡 Worked Example: Power Calculation

**Problem:** A car of mass 1500 kg accelerates from rest. If the engine provides constant power P = 100 kW, find:
(a) The velocity after 10 s
(b) The acceleration when v = 20 m/s

**Solution:**

**(a) Velocity after 10 s:**

Power delivers energy: W = Pt = (100,000)(10) = 10⁶ J

By work-energy theorem:
$$W = \Delta K = \frac{1}{2}mv^2 - 0$$
$$10^6 = \frac{1}{2}(1500)v^2$$
$$v = \sqrt{\frac{2 \times 10^6}{1500}} = \sqrt{1333.3} \approx 36.5 \text{ m/s}$$

**(b) Acceleration at v = 20 m/s:**

From P = Fv:
$$F = \frac{P}{v} = \frac{100,000}{20} = 5000 \text{ N}$$

From F = ma:
$$a = \frac{F}{m} = \frac{5000}{1500} = 3.33 \text{ m/s}^2$$

---

## 💡 Worked Example: Power with Friction

**Problem:** A 1000 kg car travels at constant velocity of 25 m/s up a 10° incline. If the coefficient of rolling friction is μ = 0.02, what power must the engine provide?

**Solution:**

At constant velocity, the engine force equals resistive forces:

**Gravity component down the incline:**
$$F_g = mg\sin\theta = (1000)(9.8)\sin(10°) = 1702 \text{ N}$$

**Friction force:**
$$f = \mu N = \mu mg\cos\theta = (0.02)(1000)(9.8)\cos(10°) = 193 \text{ N}$$

**Total resistive force:**
$$F_{resist} = 1702 + 193 = 1895 \text{ N}$$

**Power required:**
$$P = Fv = (1895)(25) = 47,375 \text{ W} \approx 47.4 \text{ kW}$$

Or in horsepower: P = 47,375/746 ≈ **63.5 hp**

---

## 💡 Worked Example: Variable Power

**Problem:** An engine provides power that varies with time as P(t) = 6t² W. How much work is done in the first 4 seconds?

**Solution:**

$$W = \int_0^4 P(t) \, dt = \int_0^4 6t^2 \, dt$$

$$W = 2t^3 \Big|_0^4 = 2(64) - 0 = 128 \text{ J}$$

---

## 🧮 Advanced Topics

### Velocity-Dependent Forces and Energy

For velocity-dependent forces like drag (F = -bv or F = -cv²), the work-energy theorem still applies, but we must carefully evaluate the integral.

**Example: Linear Drag**

For F = -bv, the equation of motion is:
$$m\frac{dv}{dt} = -bv$$

The work done by drag as the object slows from $v_0$ to v:
$$W_{drag} = \int F \, dx = \int (-bv) \, dx$$

Using dx = v dt:
$$W_{drag} = -b\int v^2 \, dt$$

This equals the change in kinetic energy: $W_{drag} = \frac{1}{2}mv^2 - \frac{1}{2}mv_0^2$

### Escape Velocity Derivation

For an object to escape Earth's gravitational pull, it needs enough kinetic energy to reach infinity with at least zero velocity.

At Earth's surface (r = R):
$$E = K_i + U_i = \frac{1}{2}mv_{esc}^2 - \frac{GMm}{R}$$

At infinity (r → ∞):
$$E = K_f + U_f = 0 + 0 = 0$$

By conservation:
$$\frac{1}{2}mv_{esc}^2 = \frac{GMm}{R}$$

$$\boxed{v_{esc} = \sqrt{\frac{2GM}{R}} = \sqrt{2gR}}$$

For Earth: $v_{esc} = \sqrt{2(9.8)(6.37 \times 10^6)} \approx 11.2$ km/s

### Center of Mass Energy

For a system of particles, the total kinetic energy can be split:

$$K_{total} = K_{cm} + K_{rel}$$

Where:
- $K_{cm} = \frac{1}{2}Mv_{cm}^2$ (kinetic energy of center of mass motion)
- $K_{rel}$ = kinetic energy relative to center of mass

---

## 💡 Worked Example: Escape Velocity

**Problem:** A rocket is launched from Earth's surface with speed v₀ = 8 km/s. What is its speed when it's at a distance of 2R from Earth's center (where R is Earth's radius)?

**Solution:**

Using conservation of energy:
$$K_i + U_i = K_f + U_f$$

$$\frac{1}{2}mv_0^2 - \frac{GMm}{R} = \frac{1}{2}mv_f^2 - \frac{GMm}{2R}$$

Note: $GM = gR^2$, so:
$$\frac{1}{2}v_0^2 - gR = \frac{1}{2}v_f^2 - \frac{gR}{2}$$

$$v_f^2 = v_0^2 - 2gR + gR = v_0^2 - gR$$

$$v_f = \sqrt{v_0^2 - gR} = \sqrt{(8000)^2 - (9.8)(6.37 \times 10^6)}$$

$$v_f = \sqrt{64 \times 10^6 - 62.4 \times 10^6} = \sqrt{1.6 \times 10^6}$$

$$v_f \approx 1265 \text{ m/s} \approx 1.27 \text{ km/s}$$

---

## 📝 Practice Problems

### Problem Set A: Work Calculations

**A1.** A force F(x) = 4x³ - 2x acts on an object. Calculate the work done as the object moves from x = 0 to x = 2 m.

<details>
<summary>Solution</summary>

$$W = \int_0^2 (4x^3 - 2x) \, dx = \left[x^4 - x^2\right]_0^2 = (16 - 4) - 0 = 12 \text{ J}$$

</details>

**A2.** A particle moves along the path y = x² from (0,0) to (3,9) under the influence of force $\vec{F} = 2y\hat{i} + x\hat{j}$ N. Find the work done.

<details>
<summary>Solution</summary>

Parametrize: x = t, y = t², where t: 0 → 3
$d\vec{r}/dt = \hat{i} + 2t\hat{j}$
$\vec{F} = 2t^2\hat{i} + t\hat{j}$

$$W = \int_0^3 (2t^2 \cdot 1 + t \cdot 2t) \, dt = \int_0^3 4t^2 \, dt = \frac{4t^3}{3}\Big|_0^3 = 36 \text{ J}$$

</details>

**A3.** A 3 kg object moves along the x-axis. A force F = 12/x² N acts on it. Find the work done as the object moves from x = 2 m to x = 6 m.

<details>
<summary>Solution</summary>

$$W = \int_2^6 \frac{12}{x^2} \, dx = -\frac{12}{x}\Big|_2^6 = -2 - (-6) = 4 \text{ J}$$

</details>

---

### Problem Set B: Work-Energy Theorem

**B1.** A 5 kg block starts from rest and is pulled by a variable force F(x) = 20 + 4x (in Newtons) over a frictionless surface. Find its speed after moving 5 m.

<details>
<summary>Solution</summary>

$$W = \int_0^5 (20 + 4x) \, dx = \left[20x + 2x^2\right]_0^5 = 100 + 50 = 150 \text{ J}$$

By work-energy theorem:
$$150 = \frac{1}{2}(5)v^2 \Rightarrow v = \sqrt{60} = 7.75 \text{ m/s}$$

</details>

**B2.** A 2 kg ball is thrown upward with initial velocity 15 m/s. Using the work-energy theorem, find the maximum height reached.

<details>
<summary>Solution</summary>

Work by gravity = Change in KE
$$-mgh = 0 - \frac{1}{2}mv_0^2$$
$$h = \frac{v_0^2}{2g} = \frac{225}{19.6} = 11.5 \text{ m}$$

</details>

---

### Problem Set C: Potential Energy

**C1.** Given U(x) = 2x³ - 12x, find:
(a) The force F(x)
(b) The equilibrium positions
(c) Whether each equilibrium is stable or unstable

<details>
<summary>Solution</summary>

(a) $F = -dU/dx = -(6x^2 - 12) = -6x^2 + 12$

(b) Set F = 0: $-6x^2 + 12 = 0 \Rightarrow x = \pm\sqrt{2}$

(c) $d^2U/dx^2 = 12x$
At x = √2: 12√2 > 0 → **Stable**
At x = -√2: -12√2 < 0 → **Unstable**

</details>

**C2.** A particle has potential energy U(r) = A/r² - B/r where A = 2 J·m² and B = 4 J·m. Find the equilibrium position.

<details>
<summary>Solution</summary>

$$F = -\frac{dU}{dr} = -\left(-\frac{2A}{r^3} + \frac{B}{r^2}\right) = \frac{2A}{r^3} - \frac{B}{r^2}$$

At equilibrium, F = 0:
$$\frac{2A}{r^3} = \frac{B}{r^2} \Rightarrow r = \frac{2A}{B} = \frac{2(2)}{4} = 1 \text{ m}$$

</details>

---

### Problem Set D: Conservation of Energy

**D1.** A 0.2 kg ball is released from rest at the top of a frictionless hemispherical bowl of radius 0.5 m. Find the speed of the ball at the bottom of the bowl.

<details>
<summary>Solution</summary>

$$mgh = \frac{1}{2}mv^2$$
$$v = \sqrt{2gh} = \sqrt{2(9.8)(0.5)} = 3.13 \text{ m/s}$$

</details>

**D2.** A 1 kg block slides down a frictionless incline from height h = 2 m and then moves across a rough horizontal surface (μ = 0.3) for distance d before stopping. Find d.

<details>
<summary>Solution</summary>

Energy at bottom of incline: $E = mgh = (1)(9.8)(2) = 19.6$ J

Work by friction: $W_f = -\mu mg \cdot d$

$$0 = 19.6 - (0.3)(1)(9.8)d$$
$$d = \frac{19.6}{2.94} = 6.67 \text{ m}$$

</details>

**D3.** A spring (k = 200 N/m) is compressed 0.15 m and used to launch a 0.1 kg ball vertically. What maximum height does the ball reach?

<details>
<summary>Solution</summary>

$$\frac{1}{2}kx^2 = mgh$$
$$h = \frac{kx^2}{2mg} = \frac{(200)(0.15)^2}{2(0.1)(9.8)} = \frac{4.5}{1.96} = 2.30 \text{ m}$$

</details>

---

### Problem Set E: Power

**E1.** A motor lifts a 500 kg elevator at constant velocity of 3 m/s. What power does the motor deliver?

<details>
<summary>Solution</summary>

$$P = Fv = (mg)v = (500)(9.8)(3) = 14,700 \text{ W} = 14.7 \text{ kW}$$

</details>

**E2.** A 1200 kg car can accelerate from 0 to 30 m/s in 8 seconds. Assuming constant power output, find:
(a) The power output
(b) The car's velocity at t = 4 s

<details>
<summary>Solution</summary>

(a) Final KE = $\frac{1}{2}(1200)(30)^2 = 540,000$ J
Power = W/t = 540,000/8 = **67,500 W = 67.5 kW**

(b) At t = 4s: W = Pt = 67,500 × 4 = 270,000 J
$\frac{1}{2}mv^2 = 270,000$
$v = \sqrt{\frac{540,000}{1200}} = \sqrt{450} = 21.2$ m/s

</details>

**E3.** An engine provides power P(t) = P₀(1 - e^(-t/τ)) where P₀ = 50 kW and τ = 2 s. Find the work done in the first 5 seconds.

<details>
<summary>Solution</summary>

$$W = \int_0^5 P_0(1 - e^{-t/\tau}) \, dt = P_0\left[t + \tau e^{-t/\tau}\right]_0^5$$

$$W = 50,000\left[(5 + 2e^{-2.5}) - (0 + 2)\right]$$
$$W = 50,000\left[3 + 2e^{-2.5}\right] = 50,000[3 + 0.164]$$
$$W = 158,200 \text{ J} = 158.2 \text{ kJ}$$

</details>

---

### Problem Set F: Challenging Problems

**F1.** A particle of mass m moves in a potential U(x) = U₀(x/a)² - U₀(x/a)⁴ where U₀ = 10 J and a = 2 m. 
(a) Find all equilibrium positions
(b) Determine their stability
(c) If the particle is at x = a with zero velocity, find the maximum speed it achieves

<details>
<summary>Solution</summary>

Let u = x/a. Then U = U₀(u² - u⁴)

(a) $F = -dU/dx = -U_0(2u - 4u^3)/a = 0$
$u(1 - 2u^2) = 0$
$u = 0$ or $u = \pm 1/\sqrt{2}$
Equilibrium at: **x = 0, ±a/√2 = ±√2 m**

(b) $d²U/dx² = U_0(2 - 12u^2)/a^2$
At x = 0 (u = 0): 2U₀/a² > 0 → **Stable**
At x = ±√2 (u = ±1/√2): U₀(2-6)/a² < 0 → **Unstable**

(c) At x = a (u = 1): U = U₀(1 - 1) = 0 J
At x = 0: U = 0 J
Conservation: KE is maximum when U is minimum.
U_min occurs at x = 0 where U = 0.
Since particle starts with E = 0 + 0 = 0, max KE = 0 - U_min...

Wait, let me recalculate. At u = 1/√2:
U = U₀(1/2 - 1/4) = U₀/4 = -2.5 J (this is a local max, unstable)

At u = 0: U = 0

The particle at x = a has U(1) = U₀(1 - 1) = 0 and K = 0, so E = 0.

Maximum speed occurs at minimum U. The minimum is at u = 1/√2 where U = -2.5 J.

E = K + U → 0 = ½mv² - 2.5
**v_max = √(5/m)** (need mass to get numerical answer)

</details>

**F2.** A bead of mass m slides on a frictionless wire bent into the shape y = x²/2a. If released from rest at height h = 2a, find the normal force from the wire at the bottom (x = 0).

<details>
<summary>Solution</summary>

At bottom, v = √(2g·2a) = 2√(ag)

Curvature at x = 0: y'' = 1/a, so radius R = 1/y'' = a

At bottom, centripetal acceleration = v²/R = 4ag/a = 4g

Normal force: N - mg = m(v²/R) = 4mg
**N = 5mg**

</details>

---

## 📋 Key Formulas Summary

| Quantity | Formula |
|----------|---------|
| Work (integral form) | $W = \int \vec{F} \cdot d\vec{r}$ |
| Work (constant force) | $W = Fd\cos\theta$ |
| Kinetic Energy | $K = \frac{1}{2}mv^2$ |
| Work-Energy Theorem | $W_{net} = \Delta K$ |
| Potential Energy (definition) | $\Delta U = -W_{conservative}$ |
| Force from Potential | $\vec{F} = -\nabla U$ |
| Conservation of Energy | $K_1 + U_1 + W_{nc} = K_2 + U_2$ |
| Power (instantaneous) | $P = \vec{F} \cdot \vec{v}$ |
| Power (average) | $P_{avg} = W/t$ |
| Spring PE | $U = \frac{1}{2}kx^2$ |
| Gravitational PE (near Earth) | $U = mgy$ |
| Gravitational PE (universal) | $U = -\frac{GMm}{r}$ |
| Escape velocity | $v_{esc} = \sqrt{2gR}$ |

---

## 🎯 AP Exam Tips

1. **Work integrals**: Always set up the integral correctly with proper limits
2. **Sign conventions**: Be consistent with your choice of positive direction
3. **Energy diagrams**: Practice reading and interpreting U(x) vs x graphs
4. **Conservative forces**: Remember that only conservative forces have potential energy
5. **Power**: Remember P = Fv is instantaneous; use P = W/t for average
6. **Units**: Always check that your answer has correct units (J for energy, W for power)
7. **Free-body diagrams**: Still useful! Draw them before applying energy methods
8. **Reference points**: Clearly state where U = 0 for potential energy problems

---

## 🔗 Connections to Other Units

- **Unit 1 (Kinematics)**: Energy methods often simplify problems that would require solving differential equations kinematically
- **Unit 2 (Newton's Laws)**: Work-energy theorem is derived from F = ma
- **Unit 4 (Momentum)**: Together with energy conservation, momentum conservation solves collision problems
- **Unit 5 (Rotation)**: Rotational kinetic energy: K = ½Iω²
- **Unit 6 (Oscillations)**: Energy oscillates between K and U in SHM
- **Unit 7 (Gravitation)**: Gravitational potential energy and escape velocity

:::GUIDE:::
