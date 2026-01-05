:::GUIDE:::
unit::=Final Review
title::=⚡ AP Physics C: Mechanics Complete Final Exam Review
desc::=Comprehensive review of all 7 units for AP Physics C: Mechanics exam
diff::=Very Hard
time::=120 min
tags::=physics-c,mechanics,final-review,calculus-based,ap-exam
content::=

# ⚡ AP Physics C: Mechanics Complete Final Exam Review

> **The Ultimate Calculus-Based Physics Review** - Everything you need to master the AP Physics C: Mechanics exam, from kinematics to oscillations.

---

## 📋 Exam Overview

| Component | Details |
|-----------|---------|
| **Duration** | 1 hour 30 minutes |
| **Multiple Choice** | 35 questions, 45 minutes (50% of score) |
| **Free Response** | 3 questions, 45 minutes (50% of score) |
| **Calculator** | Allowed on entire exam |
| **Formula Sheet** | Provided (but know them cold!) |

### Score Distribution by Unit
| Unit | Exam Weight |
|------|-------------|
| Unit 1: Kinematics | 14-20% |
| Unit 2: Newton's Laws | 17-23% |
| Unit 3: Work, Energy, Power | 14-17% |
| Unit 4: Systems of Particles & Momentum | 14-17% |
| Unit 5: Rotation | 14-20% |
| Unit 6: Oscillations | 6-14% |
| Unit 7: Gravitation | 6-14% |

---

## 📐 Essential Calculus Requirements

### Derivatives You Must Know
| Function | Derivative |
|----------|------------|
| $x^n$ | $nx^{n-1}$ |
| $\sin(x)$ | $\cos(x)$ |
| $\cos(x)$ | $-\sin(x)$ |
| $e^{ax}$ | $ae^{ax}$ |
| $\ln(x)$ | $\frac{1}{x}$ |
| Chain Rule: $f(g(x))$ | $f'(g(x)) \cdot g'(x)$ |
| Product Rule: $uv$ | $u'v + uv'$ |

### Integrals You Must Know
| Function | Integral |
|----------|----------|
| $x^n$ | $\frac{x^{n+1}}{n+1} + C$ (n ≠ -1) |
| $\frac{1}{x}$ | $\ln|x| + C$ |
| $\sin(x)$ | $-\cos(x) + C$ |
| $\cos(x)$ | $\sin(x) + C$ |
| $e^{ax}$ | $\frac{1}{a}e^{ax} + C$ |

### Physics-Calculus Connections
$$v = \frac{dx}{dt} \quad \Leftrightarrow \quad x = \int v \, dt$$

$$a = \frac{dv}{dt} = \frac{d^2x}{dt^2} \quad \Leftrightarrow \quad v = \int a \, dt$$

$$F = \frac{dp}{dt} \quad \Leftrightarrow \quad \Delta p = \int F \, dt$$

$$W = \int \vec{F} \cdot d\vec{r}$$

$$P = \frac{dW}{dt}$$

---

# 📚 Unit 1: Kinematics (14-20%)

## 1.1 Position, Velocity, and Acceleration

### Definitions Using Calculus

**Position** $\vec{r}(t)$: Location of object as function of time

**Velocity** (instantaneous):
$$\vec{v} = \frac{d\vec{r}}{dt} = \lim_{\Delta t \to 0} \frac{\Delta \vec{r}}{\Delta t}$$

**Speed**: $|\vec{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}$

**Acceleration** (instantaneous):
$$\vec{a} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}$$

### Finding Position from Velocity
$$x(t) = x_0 + \int_{t_0}^{t} v(t') \, dt'$$

### Finding Velocity from Acceleration
$$v(t) = v_0 + \int_{t_0}^{t} a(t') \, dt'$$

## 1.2 Constant Acceleration Equations

When acceleration is constant:

$$v = v_0 + at$$

$$x = x_0 + v_0t + \frac{1}{2}at^2$$

$$v^2 = v_0^2 + 2a(x - x_0)$$

$$x = x_0 + \frac{1}{2}(v_0 + v)t$$

$$x = x_0 + vt - \frac{1}{2}at^2$$

> 💡 **Derivation Insight**: All kinematic equations come from integrating $a = \frac{dv}{dt}$

## 1.3 Non-Constant Acceleration

For $a = f(t)$:
$$v(t) = v_0 + \int_0^t a(t') \, dt'$$
$$x(t) = x_0 + \int_0^t v(t') \, dt'$$

For $a = f(v)$:
$$t = \int_{v_0}^{v} \frac{dv'}{a(v')}$$

For $a = f(x)$:
$$v \, dv = a \, dx$$
$$\frac{1}{2}v^2 - \frac{1}{2}v_0^2 = \int_{x_0}^{x} a(x') \, dx'$$

## 1.4 Projectile Motion

### Component Equations
**Horizontal** (no air resistance):
$$a_x = 0, \quad v_x = v_{0x} = v_0\cos\theta$$
$$x = x_0 + v_{0x}t$$

**Vertical**:
$$a_y = -g, \quad v_y = v_{0y} - gt = v_0\sin\theta - gt$$
$$y = y_0 + v_{0y}t - \frac{1}{2}gt^2$$

### Key Results

**Range** (same height launch/land):
$$R = \frac{v_0^2 \sin(2\theta)}{g}$$

**Maximum Height**:
$$h_{max} = \frac{v_0^2 \sin^2\theta}{2g}$$

**Time of Flight**:
$$T = \frac{2v_0\sin\theta}{g}$$

**Trajectory Equation**:
$$y = x\tan\theta - \frac{gx^2}{2v_0^2\cos^2\theta}$$

## 1.5 Relative Motion

$$\vec{v}_{A/C} = \vec{v}_{A/B} + \vec{v}_{B/C}$$

> 🔑 **Key Insight**: Subscripts read "A relative to C equals A relative to B plus B relative to C"

---

# 📚 Unit 2: Newton's Laws of Motion (17-23%)

## 2.1 Newton's Three Laws

### First Law (Inertia)
An object remains at rest or in uniform motion unless acted upon by a net external force.
$$\sum \vec{F} = 0 \Rightarrow \vec{a} = 0$$

### Second Law
$$\sum \vec{F} = m\vec{a}$$

Or more generally:
$$\sum \vec{F} = \frac{d\vec{p}}{dt}$$

### Third Law
$$\vec{F}_{AB} = -\vec{F}_{BA}$$

## 2.2 Free-Body Diagram Strategy

### Step-by-Step Process
1. **Identify the system** (what object are you analyzing?)
2. **Isolate the object** (draw it as a dot or simple shape)
3. **Identify ALL forces** acting ON the object
4. **Draw force vectors** from center of object
5. **Choose coordinate system** (usually along acceleration direction)
6. **Write equations**: $\sum F_x = ma_x$, $\sum F_y = ma_y$

### Common Forces to Include
| Force | Symbol | Direction |
|-------|--------|-----------|
| Weight | $\vec{W} = m\vec{g}$ | Downward |
| Normal | $\vec{N}$ | ⊥ to surface, away from surface |
| Friction | $\vec{f}$ | Along surface, opposes motion |
| Tension | $\vec{T}$ | Along rope, away from object |
| Spring | $\vec{F}_s = -k\vec{x}$ | Toward equilibrium |
| Applied | $\vec{F}_{app}$ | As specified |

## 2.3 Friction

### Static Friction
$$f_s \leq \mu_s N$$

The force adjusts to prevent motion up to maximum value.

### Kinetic Friction
$$f_k = \mu_k N$$

Always opposes direction of motion (velocity, not acceleration).

> ⚠️ **Common Mistake**: Using $\mu_s$ when object is moving, or $\mu_k$ when object is stationary.

## 2.4 Circular Motion

### Centripetal Acceleration
$$a_c = \frac{v^2}{r} = \omega^2 r = \frac{4\pi^2 r}{T^2}$$

Direction: Always toward center of circle

### Centripetal Force
$$F_c = ma_c = \frac{mv^2}{r}$$

> 🔑 **Critical Concept**: Centripetal force is NOT a new force! It's the NET force toward center, provided by real forces (tension, gravity, normal, friction, etc.)

### Vertical Circular Motion

**Top of circle** (minimum speed to maintain contact):
$$N + mg = \frac{mv^2}{r}$$
At minimum: $N = 0$, so $v_{min} = \sqrt{gr}$

**Bottom of circle**:
$$N - mg = \frac{mv^2}{r}$$

### Banking Angles
**Without friction** (ideal banking):
$$\tan\theta = \frac{v^2}{rg}$$

**With friction** (maximum speed):
$$v_{max} = \sqrt{rg \cdot \frac{\tan\theta + \mu_s}{1 - \mu_s\tan\theta}}$$

## 2.5 Drag Forces

### Linear Drag (low speeds)
$$\vec{F}_D = -b\vec{v}$$

### Quadratic Drag (high speeds)
$$F_D = \frac{1}{2}C_D \rho A v^2$$

### Terminal Velocity
Set $F_D = mg$:

For linear drag: $v_T = \frac{mg}{b}$

For quadratic drag: $v_T = \sqrt{\frac{2mg}{C_D \rho A}}$

### Motion with Linear Drag
$$m\frac{dv}{dt} = mg - bv$$

Solution (falling from rest):
$$v(t) = v_T(1 - e^{-t/\tau})$$

where $\tau = \frac{m}{b}$ is the time constant.

## 2.6 Non-Inertial Reference Frames

In accelerating frame with acceleration $\vec{a}_0$:
$$\sum \vec{F}_{real} - m\vec{a}_0 = m\vec{a}_{rel}$$

The term $-m\vec{a}_0$ is the "pseudo-force" or "fictitious force."

---

# 📚 Unit 3: Work, Energy, and Power (14-17%)

## 3.1 Work

### Work by Constant Force
$$W = \vec{F} \cdot \vec{d} = Fd\cos\theta$$

### Work by Variable Force
$$W = \int_{x_1}^{x_2} F(x) \, dx$$

**General 3D form**:
$$W = \int_C \vec{F} \cdot d\vec{r} = \int (F_x \, dx + F_y \, dy + F_z \, dz)$$

### Work-Energy Theorem
$$W_{net} = \Delta KE = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$$

> 🔑 **Key Point**: Net work equals change in kinetic energy, always!

## 3.2 Kinetic Energy

$$KE = \frac{1}{2}mv^2$$

Derived from work:
$$W = \int F \, dx = \int ma \, dx = \int m\frac{dv}{dt} \, dx = \int mv \, dv = \frac{1}{2}mv^2$$

## 3.3 Potential Energy

### Gravitational Potential Energy (near Earth)
$$U_g = mgh$$

Reference point is arbitrary; only changes in $U$ matter.

### Gravitational PE (general)
$$U_g = -\frac{GMm}{r}$$

Note: $U = 0$ at $r = \infty$

### Spring Potential Energy
$$U_s = \frac{1}{2}kx^2$$

where $x$ is displacement from equilibrium.

### Relationship to Force
$$\vec{F} = -\nabla U = -\frac{\partial U}{\partial x}\hat{i} - \frac{\partial U}{\partial y}\hat{j} - \frac{\partial U}{\partial z}\hat{k}$$

In 1D:
$$F = -\frac{dU}{dx}$$

Conversely:
$$\Delta U = -W_{conservative} = -\int \vec{F} \cdot d\vec{r}$$

## 3.4 Conservation of Energy

### Conservative Forces
Work done is path-independent (depends only on initial and final positions).

Examples: Gravity, spring force, electrostatic force

### Non-Conservative Forces
Work done depends on path.

Examples: Friction, air resistance, applied forces

### Energy Conservation Equation

**Without non-conservative forces**:
$$KE_i + U_i = KE_f + U_f$$
$$E_{mech} = KE + U = \text{constant}$$

**With non-conservative forces**:
$$KE_i + U_i + W_{nc} = KE_f + U_f$$

Or:
$$\Delta E_{mech} = W_{nc}$$

For friction: $W_{friction} = -f_k \cdot d$ (always negative)

## 3.5 Power

### Average Power
$$P_{avg} = \frac{W}{\Delta t} = \frac{\Delta E}{\Delta t}$$

### Instantaneous Power
$$P = \frac{dW}{dt} = \vec{F} \cdot \vec{v} = Fv\cos\theta$$

Units: Watts (W) = J/s

> 💡 **Useful relation**: At constant velocity up incline, $P = mgv\sin\theta$

## 3.6 Energy Diagrams

### Reading Energy Diagrams
- **Equilibrium points**: Where $\frac{dU}{dx} = 0$ (force = 0)
- **Stable equilibrium**: U is minimum (concave up)
- **Unstable equilibrium**: U is maximum (concave down)
- **Turning points**: Where $E_{total} = U$ (KE = 0)
- **Forbidden regions**: Where $U > E_{total}$

### Force from Energy Diagram
The force is the negative slope of the U vs x curve:
$$F = -\frac{dU}{dx}$$

- Slope negative → Force positive (rightward)
- Slope positive → Force negative (leftward)

---

# 📚 Unit 4: Systems of Particles and Linear Momentum (14-17%)

## 4.1 Center of Mass

### Discrete System
$$x_{cm} = \frac{\sum m_i x_i}{\sum m_i} = \frac{m_1x_1 + m_2x_2 + ...}{m_1 + m_2 + ...}$$

$$\vec{r}_{cm} = \frac{\sum m_i \vec{r}_i}{M_{total}}$$

### Continuous Mass Distribution
$$x_{cm} = \frac{\int x \, dm}{\int dm} = \frac{1}{M}\int x \, dm$$

$$\vec{r}_{cm} = \frac{1}{M}\int \vec{r} \, dm$$

### Common dm Substitutions
- **Linear (1D)**: $dm = \lambda \, dx$ where $\lambda$ = mass/length
- **Surface (2D)**: $dm = \sigma \, dA$ where $\sigma$ = mass/area
- **Volume (3D)**: $dm = \rho \, dV$ where $\rho$ = mass/volume

### Motion of Center of Mass
$$\vec{v}_{cm} = \frac{d\vec{r}_{cm}}{dt} = \frac{\sum m_i \vec{v}_i}{M}$$

$$\vec{a}_{cm} = \frac{d\vec{v}_{cm}}{dt} = \frac{\sum m_i \vec{a}_i}{M}$$

$$\sum \vec{F}_{ext} = M\vec{a}_{cm}$$

> 🔑 **Key Insight**: Center of mass moves as if all mass were concentrated there with all external forces acting on it.

## 4.2 Linear Momentum

### Definition
$$\vec{p} = m\vec{v}$$

For system: $\vec{p}_{total} = \sum m_i\vec{v}_i = M\vec{v}_{cm}$

### Newton's Second Law (Momentum Form)
$$\sum \vec{F} = \frac{d\vec{p}}{dt}$$

## 4.3 Impulse

### Definition
$$\vec{J} = \int_{t_1}^{t_2} \vec{F} \, dt = \Delta \vec{p}$$

### Impulse-Momentum Theorem
$$\vec{J} = \vec{p}_f - \vec{p}_i = m\vec{v}_f - m\vec{v}_i$$

### Average Force
$$\vec{F}_{avg} = \frac{\vec{J}}{\Delta t} = \frac{\Delta \vec{p}}{\Delta t}$$

> 💡 **Application**: Airbags increase Δt, reducing F for same Δp

## 4.4 Conservation of Momentum

### Condition
When $\sum \vec{F}_{ext} = 0$:
$$\vec{p}_{total} = \text{constant}$$
$$\sum m_i\vec{v}_{i,initial} = \sum m_i\vec{v}_{i,final}$$

> ⚠️ **Important**: Momentum is conserved component by component. Even if one component is not conserved, others may be!

## 4.5 Collisions

### Elastic Collisions
Both momentum AND kinetic energy conserved.

**1D Elastic Collision Formulas**:
$$v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}v_{1i} + \frac{2m_2}{m_1 + m_2}v_{2i}$$

$$v_{2f} = \frac{2m_1}{m_1 + m_2}v_{1i} + \frac{m_2 - m_1}{m_1 + m_2}v_{2i}$$

**Special Cases**:
- Equal masses: Objects exchange velocities
- Heavy hits light at rest: Light object moves at 2× heavy's speed
- Light hits heavy at rest: Light bounces back, heavy barely moves

### Inelastic Collisions
Momentum conserved, kinetic energy NOT conserved.

### Perfectly Inelastic Collisions
Objects stick together. Maximum KE loss.

$$m_1v_{1i} + m_2v_{2i} = (m_1 + m_2)v_f$$

$$v_f = \frac{m_1v_{1i} + m_2v_{2i}}{m_1 + m_2}$$

**Energy Lost**:
$$\Delta KE = KE_i - KE_f = \frac{1}{2}\frac{m_1m_2}{m_1+m_2}(v_{1i} - v_{2i})^2$$

### 2D Collisions
Apply conservation in each direction:
- $\sum p_x = \text{constant}$
- $\sum p_y = \text{constant}$

## 4.6 Rocket Propulsion

### Thrust
$$F_{thrust} = v_{rel}\frac{dm}{dt}$$

where $v_{rel}$ is exhaust velocity relative to rocket.

### Rocket Equation
$$v_f - v_i = v_{rel}\ln\frac{m_i}{m_f}$$

---

# 📚 Unit 5: Rotation (14-20%)

## 5.1 Rotational Kinematics

### Angular Quantities

| Linear | Angular | Relationship |
|--------|---------|--------------|
| $x$ (position) | $\theta$ (angle) | $s = r\theta$ |
| $v$ (velocity) | $\omega$ (angular velocity) | $v = r\omega$ |
| $a$ (acceleration) | $\alpha$ (angular acceleration) | $a_t = r\alpha$ |

### Angular Definitions
$$\omega = \frac{d\theta}{dt}$$

$$\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}$$

### Constant Angular Acceleration
$$\omega = \omega_0 + \alpha t$$

$$\theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2$$

$$\omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0)$$

### Tangential and Centripetal Acceleration
$$a_t = r\alpha \quad \text{(tangential)}$$

$$a_c = \frac{v^2}{r} = r\omega^2 \quad \text{(centripetal)}$$

$$a_{total} = \sqrt{a_t^2 + a_c^2}$$

## 5.2 Moment of Inertia

### Definition (Discrete)
$$I = \sum m_i r_i^2$$

### Definition (Continuous)
$$I = \int r^2 \, dm$$

### Common Moments of Inertia

| Object | Axis | Moment of Inertia |
|--------|------|-------------------|
| Point mass | Distance r | $mr^2$ |
| Thin rod (length L) | Through center | $\frac{1}{12}mL^2$ |
| Thin rod (length L) | Through end | $\frac{1}{3}mL^2$ |
| Solid cylinder/disk | Through center | $\frac{1}{2}mR^2$ |
| Hollow cylinder | Through center | $mR^2$ |
| Solid sphere | Through center | $\frac{2}{5}mR^2$ |
| Hollow sphere | Through center | $\frac{2}{3}mR^2$ |
| Hoop (thin ring) | Through center | $mR^2$ |
| Rectangular plate (a×b) | Through center | $\frac{1}{12}m(a^2 + b^2)$ |

### Parallel Axis Theorem
$$I = I_{cm} + Md^2$$

where $d$ is distance from CM axis to new parallel axis.

### Perpendicular Axis Theorem (Flat Objects Only)
$$I_z = I_x + I_y$$

where z is perpendicular to the plane of the object.

## 5.3 Torque

### Definition
$$\vec{\tau} = \vec{r} \times \vec{F}$$

Magnitude: $\tau = rF\sin\theta = r_\perp F = rF_\perp$

### Net Torque and Angular Acceleration
$$\sum \tau = I\alpha$$

This is the rotational analog of $\sum F = ma$

## 5.4 Rotational Dynamics

### Newton's Second Law for Rotation
$$\sum \tau = I\alpha = I\frac{d\omega}{dt}$$

### Combined Translation and Rotation
For object rolling or undergoing both:
- $\sum F = ma_{cm}$
- $\sum \tau_{cm} = I_{cm}\alpha$

## 5.5 Rolling Motion

### Rolling Without Slipping
$$v_{cm} = R\omega$$
$$a_{cm} = R\alpha$$

**Key insight**: The point of contact has zero velocity relative to ground.

### Rolling Down Incline
Using energy: $mgh = \frac{1}{2}mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$

$$v_{cm} = \sqrt{\frac{2gh}{1 + I_{cm}/mR^2}}$$

$$a_{cm} = \frac{g\sin\theta}{1 + I_{cm}/mR^2}$$

> 🔑 **Key Result**: Objects with smaller $I/(mR^2)$ roll faster! (Solid sphere beats hollow sphere beats solid cylinder beats hollow cylinder)

## 5.6 Rotational Kinetic Energy

$$KE_{rot} = \frac{1}{2}I\omega^2$$

### Total KE for Rolling Object
$$KE_{total} = \frac{1}{2}mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$$

Using $v_{cm} = R\omega$:
$$KE_{total} = \frac{1}{2}(I_{cm} + mR^2)\omega^2 = \frac{1}{2}mv_{cm}^2\left(1 + \frac{I_{cm}}{mR^2}\right)$$

## 5.7 Angular Momentum

### For a Particle
$$\vec{L} = \vec{r} \times \vec{p} = \vec{r} \times m\vec{v}$$

Magnitude: $L = rmv\sin\theta = r_\perp p = rp_\perp$

### For Rigid Body (About Fixed Axis)
$$L = I\omega$$

### Newton's Second Law (Angular)
$$\sum \vec{\tau} = \frac{d\vec{L}}{dt}$$

## 5.8 Conservation of Angular Momentum

### Condition
When $\sum \vec{\tau}_{ext} = 0$:
$$\vec{L} = \text{constant}$$
$$I_i\omega_i = I_f\omega_f$$

**Applications**:
- Figure skater spinning (arms in → faster)
- Divers tucking
- Planets orbiting (Kepler's 2nd law)

## 5.9 Linear vs Rotational Comparison Table

| Linear | Rotational |
|--------|------------|
| Mass: $m$ | Moment of inertia: $I$ |
| Position: $x$ | Angle: $\theta$ |
| Velocity: $v = \frac{dx}{dt}$ | Angular velocity: $\omega = \frac{d\theta}{dt}$ |
| Acceleration: $a = \frac{dv}{dt}$ | Angular acceleration: $\alpha = \frac{d\omega}{dt}$ |
| Force: $F$ | Torque: $\tau$ |
| $F = ma$ | $\tau = I\alpha$ |
| $p = mv$ | $L = I\omega$ |
| $F = \frac{dp}{dt}$ | $\tau = \frac{dL}{dt}$ |
| $KE = \frac{1}{2}mv^2$ | $KE_{rot} = \frac{1}{2}I\omega^2$ |
| $W = \int F \, dx$ | $W = \int \tau \, d\theta$ |
| $P = Fv$ | $P = \tau\omega$ |

---

# 📚 Unit 6: Oscillations (6-14%)

## 6.1 Simple Harmonic Motion (SHM)

### Defining Condition
Restoring force proportional to displacement:
$$F = -kx$$

This leads to:
$$a = -\omega^2 x$$

where $\omega = \sqrt{k/m}$ for a spring system.

### Differential Equation of SHM
$$\frac{d^2x}{dt^2} = -\omega^2 x$$

### General Solution
$$x(t) = A\cos(\omega t + \phi)$$

Or equivalently:
$$x(t) = A\sin(\omega t + \phi')$$

where:
- $A$ = amplitude (maximum displacement)
- $\omega$ = angular frequency
- $\phi$ = phase constant (determined by initial conditions)

### Velocity and Acceleration
$$v(t) = \frac{dx}{dt} = -A\omega\sin(\omega t + \phi)$$

$$v_{max} = A\omega$$

$$a(t) = \frac{dv}{dt} = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x$$

$$a_{max} = A\omega^2$$

### Velocity as Function of Position
$$v = \pm\omega\sqrt{A^2 - x^2}$$

## 6.2 Period and Frequency

### Relationships
$$T = \frac{2\pi}{\omega} = \frac{1}{f}$$

$$f = \frac{\omega}{2\pi} = \frac{1}{T}$$

$$\omega = 2\pi f = \frac{2\pi}{T}$$

## 6.3 Mass-Spring System

### Horizontal Spring
$$\omega = \sqrt{\frac{k}{m}}, \quad T = 2\pi\sqrt{\frac{m}{k}}$$

### Vertical Spring
Same frequency! The equilibrium position shifts by $\Delta x = \frac{mg}{k}$, but oscillation frequency unchanged.

### Springs in Series
$$\frac{1}{k_{eff}} = \frac{1}{k_1} + \frac{1}{k_2}$$

### Springs in Parallel
$$k_{eff} = k_1 + k_2$$

## 6.4 Simple Pendulum

For small angles ($\theta < 15°$):
$$\omega = \sqrt{\frac{g}{L}}, \quad T = 2\pi\sqrt{\frac{L}{g}}$$

> 🔑 **Key Point**: Period independent of mass and amplitude (for small angles)!

### Derivation Using Torque
$$\tau = -mgL\sin\theta \approx -mgL\theta \quad \text{(small angle)}$$

$$I\frac{d^2\theta}{dt^2} = -mgL\theta$$

$$\frac{d^2\theta}{dt^2} = -\frac{g}{L}\theta$$

## 6.5 Physical Pendulum

Any rigid body pivoting about a point:

$$\omega = \sqrt{\frac{mgd}{I}}, \quad T = 2\pi\sqrt{\frac{I}{mgd}}$$

where:
- $I$ = moment of inertia about pivot
- $d$ = distance from pivot to center of mass

## 6.6 Energy in SHM

### Potential Energy
$$U = \frac{1}{2}kx^2 = \frac{1}{2}kA^2\cos^2(\omega t + \phi)$$

### Kinetic Energy
$$KE = \frac{1}{2}mv^2 = \frac{1}{2}kA^2\sin^2(\omega t + \phi)$$

### Total Energy
$$E = KE + U = \frac{1}{2}kA^2 = \text{constant}$$

### Energy Exchange
- At $x = 0$: All KE, no PE
- At $x = \pm A$: All PE, no KE
- Average KE = Average PE = $\frac{1}{2}E$

## 6.7 Damped Oscillations

### Damped Differential Equation
$$m\frac{d^2x}{dt^2} + b\frac{dx}{dt} + kx = 0$$

### Underdamped Solution ($b^2 < 4mk$)
$$x(t) = Ae^{-\gamma t}\cos(\omega' t + \phi)$$

where:
- Damping coefficient: $\gamma = \frac{b}{2m}$
- Damped frequency: $\omega' = \sqrt{\omega_0^2 - \gamma^2} = \sqrt{\frac{k}{m} - \frac{b^2}{4m^2}}$

### Critical Damping ($b^2 = 4mk$)
System returns to equilibrium fastest without oscillating.

### Overdamping ($b^2 > 4mk$)
System returns to equilibrium slowly without oscillating.

---

# 📚 Unit 7: Gravitation (6-14%)

## 7.1 Newton's Law of Universal Gravitation

$$\vec{F} = -\frac{GMm}{r^2}\hat{r}$$

Magnitude:
$$F = \frac{GMm}{r^2}$$

The negative sign indicates attractive force (toward each other).

### Gravitational Field (Acceleration)
$$\vec{g} = -\frac{GM}{r^2}\hat{r}$$

Magnitude at distance r from mass M:
$$g = \frac{GM}{r^2}$$

At Earth's surface: $g = \frac{GM_E}{R_E^2} \approx 9.8 \text{ m/s}^2$

## 7.2 Gravitational Potential Energy

$$U = -\frac{GMm}{r}$$

**Convention**: $U = 0$ at $r = \infty$

> ⚠️ **Common Mistake**: Forgetting the negative sign! $U$ is always negative for bound systems.

### Work Done Against Gravity
$$W = U_f - U_i = -GMm\left(\frac{1}{r_f} - \frac{1}{r_i}\right)$$

## 7.3 Escape Velocity

Minimum velocity to escape gravitational field (reach infinity with zero velocity):

$$v_{escape} = \sqrt{\frac{2GM}{r}}$$

At Earth's surface:
$$v_{escape} = \sqrt{2gR_E} \approx 11.2 \text{ km/s}$$

### Derivation
Using energy conservation: $KE_i + U_i = KE_f + U_f$

$$\frac{1}{2}mv_{esc}^2 - \frac{GMm}{R} = 0 + 0$$

## 7.4 Orbital Motion

### Circular Orbits
Setting gravitational force equal to centripetal force:
$$\frac{GMm}{r^2} = \frac{mv^2}{r}$$

**Orbital velocity**:
$$v_{orbit} = \sqrt{\frac{GM}{r}}$$

**Period** (Kepler's 3rd Law):
$$T = 2\pi\sqrt{\frac{r^3}{GM}}$$

$$T^2 = \frac{4\pi^2}{GM}r^3$$

### Energy of Circular Orbit
**Kinetic Energy**:
$$KE = \frac{1}{2}mv^2 = \frac{GMm}{2r}$$

**Potential Energy**:
$$U = -\frac{GMm}{r}$$

**Total Energy**:
$$E = KE + U = -\frac{GMm}{2r}$$

> 🔑 **Key Relationships**:
> - $KE = -\frac{1}{2}U$
> - $E = -KE = \frac{1}{2}U$
> - Total energy is negative for bound orbits

## 7.5 Kepler's Laws

### First Law (Law of Orbits)
Planets move in elliptical orbits with the Sun at one focus.

### Second Law (Law of Areas)
A line from planet to Sun sweeps equal areas in equal times.

$$\frac{dA}{dt} = \frac{L}{2m} = \text{constant}$$

This is conservation of angular momentum!

### Third Law (Law of Periods)
$$T^2 = \frac{4\pi^2}{GM}a^3$$

where $a$ = semi-major axis

For two objects orbiting same central mass:
$$\frac{T_1^2}{T_2^2} = \frac{a_1^3}{a_2^3}$$

## 7.6 Elliptical Orbits

### Energy
$$E = -\frac{GMm}{2a}$$

where $a$ = semi-major axis (not radius!)

### Velocity at Any Point
$$v = \sqrt{GM\left(\frac{2}{r} - \frac{1}{a}\right)}$$

### Perihelion and Aphelion
- **Perihelion**: Closest approach, $r_{min} = a(1 - e)$, fastest speed
- **Aphelion**: Farthest point, $r_{max} = a(1 + e)$, slowest speed

where $e$ = eccentricity (0 for circle, <1 for ellipse)

### Conservation at Perihelion/Aphelion
$$v_p r_p = v_a r_a$$

$$\frac{1}{2}mv_p^2 - \frac{GMm}{r_p} = \frac{1}{2}mv_a^2 - \frac{GMm}{r_a}$$

## 7.7 Gravitational Field Inside Spherical Shell

**Inside a uniform spherical shell**: $g = 0$

**Inside a uniform solid sphere** (at radius r from center):
$$g = \frac{GM_{enclosed}}{r^2} = \frac{G(\frac{4}{3}\pi r^3 \rho)}{r^2} = \frac{4\pi G\rho r}{3}$$

For uniform density: $g \propto r$ inside the sphere

---

# 🎯 Problem-Solving Strategies

## Strategy 1: Free-Body Diagram Method

1. **Draw the system** - Identify all objects
2. **Isolate each object** - Draw separately
3. **Identify all forces** - Weight, normal, friction, tension, etc.
4. **Choose coordinates** - Usually along motion or acceleration
5. **Apply Newton's 2nd Law** - $\sum F_x = ma_x$, $\sum F_y = ma_y$
6. **Solve equations** - Use algebra/calculus

## Strategy 2: Energy Conservation Method

1. **Identify initial and final states**
2. **Check if mechanical energy conserved**
   - If only conservative forces: $E_i = E_f$
   - If non-conservative forces: $E_i + W_{nc} = E_f$
3. **Write energy equation**: $KE_i + U_i = KE_f + U_f$
4. **Choose convenient reference point** for potential energy
5. **Solve for unknown**

> 💡 **When to use energy**: When you don't care about forces or time, just initial and final states.

## Strategy 3: Momentum Conservation Method

1. **Identify the system**
2. **Check for external forces**
   - If $\sum \vec{F}_{ext} = 0$: momentum conserved
   - Check each direction separately
3. **Write conservation equation**: $\vec{p}_i = \vec{p}_f$
4. **Solve component equations**

> 💡 **When to use momentum**: Collisions, explosions, or when forces are internal.

## Strategy 4: Rotational Problems

1. **Identify rotation axis**
2. **Draw extended free-body diagram** showing where forces act
3. **Calculate torques** about chosen axis
4. **Apply $\sum\tau = I\alpha$**
5. **For rolling**: Also use $\sum F = ma_{cm}$ and constraint $a = R\alpha$

## Strategy 5: Integration Method (Variable Forces/Acceleration)

1. **Write differential equation** from physics laws
2. **Separate variables** if possible
3. **Integrate** with appropriate limits
4. **Apply initial conditions**

---

# 📝 FRQ Success Strategies

## Show Your Work!
- **Write equations** before plugging in numbers
- **Define variables** and their values
- **Show algebraic steps**
- **Include units** in final answer
- **Box or circle** final answers

## Justify Your Answers
- **Cite physical principles**: "By conservation of energy..."
- **Explain your reasoning**: "Since friction is present, mechanical energy is not conserved..."
- **State assumptions**: "Assuming no air resistance..."

## Common FRQ Types

### Type 1: Derive an Expression
- Use symbols only (no numbers)
- Show step-by-step algebraic manipulation
- Check dimensions of final answer

### Type 2: Calculate/Determine
- Start with relevant equation
- Substitute values with units
- Show calculation steps
- Report answer with correct units and significant figures

### Type 3: Sketch/Graph
- Label axes with quantities and units
- Mark key points (intercepts, maxima, minima)
- Show correct shape and behavior

### Type 4: Explain/Justify
- Use physics vocabulary
- Reference specific laws or principles
- Be concise but complete

### Type 5: Design an Experiment
- State what you would measure
- Explain how you would analyze data
- Identify control variables

---

# ⚠️ Common Mistakes to Avoid

## Kinematics Mistakes
- ❌ Using constant acceleration equations when $a \neq$ constant
- ❌ Forgetting that velocity and acceleration can have different signs
- ❌ Missing the $\frac{1}{2}$ in $x = x_0 + v_0t + \frac{1}{2}at^2$
- ❌ Using horizontal velocity for vertical calculations in projectile motion

## Forces Mistakes
- ❌ Forgetting to include all forces in FBD
- ❌ Drawing centripetal force as a separate force (it's net force!)
- ❌ Using $\mu_s$ for kinetic friction or vice versa
- ❌ Setting $N = mg$ when surface is inclined or there's vertical acceleration

## Energy Mistakes
- ❌ Forgetting the negative sign in $U_g = -GMm/r$
- ❌ Using $U = mgh$ for large distances from Earth
- ❌ Ignoring work done by friction
- ❌ Not squaring velocity in $KE = \frac{1}{2}mv^2$

## Momentum Mistakes
- ❌ Forgetting momentum is a vector (need components)
- ❌ Using momentum conservation when external forces present
- ❌ Confusing elastic and inelastic collision formulas

## Rotation Mistakes
- ❌ Using moment of inertia about wrong axis
- ❌ Forgetting parallel axis theorem when axis not through CM
- ❌ Missing $I\omega^2$ term in rolling energy
- ❌ Sign errors in torque (check direction of rotation)

## SHM Mistakes
- ❌ Confusing $\omega$ (angular frequency) with $\omega$ (angular velocity)
- ❌ Using $\omega = v/r$ instead of $\omega = \sqrt{k/m}$ for springs
- ❌ Forgetting amplitude is maximum displacement, not total range

## Gravitation Mistakes
- ❌ Using $g = 9.8$ m/s² for orbital problems (use $g = GM/r^2$)
- ❌ Forgetting that orbital energy is negative
- ❌ Using $r = R$ (Earth's radius) instead of actual orbital radius

---

# 🔢 Formula Quick Reference Sheet

## Kinematics
$$v = v_0 + at \quad | \quad x = x_0 + v_0t + \frac{1}{2}at^2 \quad | \quad v^2 = v_0^2 + 2a\Delta x$$

$$v = \frac{dx}{dt} \quad | \quad a = \frac{dv}{dt} = \frac{d^2x}{dt^2}$$

## Dynamics
$$\sum F = ma = \frac{dp}{dt} \quad | \quad f_s \leq \mu_s N \quad | \quad f_k = \mu_k N$$

$$F_c = \frac{mv^2}{r} \quad | \quad F_g = \frac{GMm}{r^2}$$

## Work & Energy
$$W = \int \vec{F} \cdot d\vec{r} \quad | \quad KE = \frac{1}{2}mv^2 \quad | \quad U_g = mgh$$

$$U_s = \frac{1}{2}kx^2 \quad | \quad U_g = -\frac{GMm}{r} \quad | \quad P = \frac{dW}{dt} = \vec{F} \cdot \vec{v}$$

## Momentum & Impulse
$$\vec{p} = m\vec{v} \quad | \quad \vec{J} = \int \vec{F} \, dt = \Delta\vec{p}$$

$$\vec{r}_{cm} = \frac{\sum m_i\vec{r}_i}{M} \quad | \quad \sum\vec{F}_{ext} = M\vec{a}_{cm}$$

## Rotation
$$\omega = \frac{d\theta}{dt} \quad | \quad \alpha = \frac{d\omega}{dt} \quad | \quad v = r\omega \quad | \quad a_t = r\alpha$$

$$I = \int r^2 \, dm \quad | \quad \tau = rF\sin\theta \quad | \quad \sum\tau = I\alpha$$

$$L = I\omega \quad | \quad KE_{rot} = \frac{1}{2}I\omega^2 \quad | \quad I = I_{cm} + Md^2$$

## Oscillations
$$x = A\cos(\omega t + \phi) \quad | \quad \omega_{spring} = \sqrt{\frac{k}{m}} \quad | \quad \omega_{pend} = \sqrt{\frac{g}{L}}$$

$$T = \frac{2\pi}{\omega} \quad | \quad E = \frac{1}{2}kA^2$$

## Gravitation
$$g = \frac{GM}{r^2} \quad | \quad v_{orbit} = \sqrt{\frac{GM}{r}} \quad | \quad v_{esc} = \sqrt{\frac{2GM}{r}}$$

$$T^2 = \frac{4\pi^2 r^3}{GM} \quad | \quad E = -\frac{GMm}{2r}$$

---

# ✅ Final Exam Checklist

## Before the Exam
- [ ] Review all formulas (especially those NOT on formula sheet)
- [ ] Practice calculus: derivatives and integrals
- [ ] Review common $I$ values (not all are provided)
- [ ] Do timed practice problems
- [ ] Get comfortable with calculator

## During the Exam
- [ ] Read each question completely before answering
- [ ] Draw diagrams for every problem
- [ ] Show all work clearly
- [ ] Check units at each step
- [ ] Use correct significant figures
- [ ] Double-check signs (especially for energy and directions)
- [ ] Manage time: ~1.3 min per MC, ~15 min per FRQ

## Key Concepts to Master
- [ ] Vector decomposition (especially forces on inclines)
- [ ] When to use energy vs momentum vs forces
- [ ] Rolling motion (combined translation + rotation)
- [ ] Orbital mechanics (energy, Kepler's laws)
- [ ] SHM equations and phase relationships
- [ ] Calculus applications (integrating to find motion)

---

# 🏆 You're Ready!

**Remember**: AP Physics C: Mechanics rewards deep understanding over memorization. Know WHY the physics works, not just which formula to use.

**Key Success Factors**:
1. ✅ Strong calculus fundamentals
2. ✅ Ability to draw and analyze free-body diagrams
3. ✅ Understanding when to apply each conservation law
4. ✅ Practice with calculus-based derivations
5. ✅ Clear communication of physics reasoning

**Good luck on your exam! You've got this! ⚡🎯**

:::GUIDE:::
