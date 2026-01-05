:::GUIDE:::
unit::=4
title::=⚡ Unit 4: Systems of Particles and Linear Momentum
desc::=Master center of mass, momentum, impulse, and collisions with calculus
diff::=Very Hard
time::=60 min
tags::=physics-c,mechanics,momentum,collisions,center-of-mass
content::=

# ⚡ Unit 4: Systems of Particles and Linear Momentum

## 📚 Overview

This unit transitions from single-particle mechanics to systems of particles. You'll learn how to analyze complex systems using center of mass, understand momentum as a conserved quantity, and apply calculus to collision problems. These concepts are essential for understanding everything from rocket propulsion to particle physics.

---

## 🎯 Center of Mass: Definition and Calculation

### Conceptual Foundation

The **center of mass** (COM) is the mass-weighted average position of all particles in a system. It's the point where the system would balance perfectly and where we can treat all external forces as acting.

### Discrete System of Particles

For a system of $n$ particles with masses $m_1, m_2, \ldots, m_n$ at positions $\vec{r}_1, \vec{r}_2, \ldots, \vec{r}_n$:

$$\vec{r}_{cm} = \frac{\sum_{i=1}^{n} m_i \vec{r}_i}{\sum_{i=1}^{n} m_i} = \frac{\sum_{i=1}^{n} m_i \vec{r}_i}{M}$$

where $M = \sum_{i=1}^{n} m_i$ is the total mass.

**Component form:**
$$x_{cm} = \frac{\sum_{i=1}^{n} m_i x_i}{M}, \quad y_{cm} = \frac{\sum_{i=1}^{n} m_i y_i}{M}, \quad z_{cm} = \frac{\sum_{i=1}^{n} m_i z_i}{M}$$

### Continuous Mass Distribution

For a continuous body with mass density $\rho$:

$$\vec{r}_{cm} = \frac{1}{M} \int \vec{r} \, dm$$

where $dm$ is an infinitesimal mass element.

**The key is choosing the right $dm$:**

| Geometry | Mass Element | Density |
|----------|-------------|---------|
| 1D (rod) | $dm = \lambda \, dx$ | $\lambda$ = linear mass density (kg/m) |
| 2D (plate) | $dm = \sigma \, dA$ | $\sigma$ = surface mass density (kg/m²) |
| 3D (solid) | $dm = \rho \, dV$ | $\rho$ = volume mass density (kg/m³) |

### Example: Uniform Rod

For a uniform rod of length $L$ and mass $M$ along the x-axis from $x = 0$ to $x = L$:

$$\lambda = \frac{M}{L}$$

$$x_{cm} = \frac{1}{M} \int_0^L x \, dm = \frac{1}{M} \int_0^L x \cdot \lambda \, dx = \frac{\lambda}{M} \int_0^L x \, dx$$

$$x_{cm} = \frac{\lambda}{M} \left[\frac{x^2}{2}\right]_0^L = \frac{\lambda}{M} \cdot \frac{L^2}{2} = \frac{M/L}{M} \cdot \frac{L^2}{2} = \frac{L}{2}$$

**Result:** The center of mass is at the geometric center, as expected for a uniform rod.

### Example: Non-Uniform Rod

Consider a rod of length $L$ with linear mass density $\lambda(x) = \alpha x$ where $\alpha$ is a constant.

**Step 1: Find total mass**
$$M = \int_0^L dm = \int_0^L \alpha x \, dx = \alpha \left[\frac{x^2}{2}\right]_0^L = \frac{\alpha L^2}{2}$$

**Step 2: Calculate $x_{cm}$**
$$x_{cm} = \frac{1}{M} \int_0^L x \, dm = \frac{1}{M} \int_0^L x \cdot \alpha x \, dx = \frac{\alpha}{M} \int_0^L x^2 \, dx$$

$$x_{cm} = \frac{\alpha}{M} \left[\frac{x^3}{3}\right]_0^L = \frac{\alpha L^3}{3M} = \frac{\alpha L^3}{3} \cdot \frac{2}{\alpha L^2} = \frac{2L}{3}$$

**Result:** The center of mass is shifted toward the denser end (x = L).

### Example: Semicircular Wire

For a thin wire bent into a semicircle of radius $R$ with uniform linear mass density $\lambda$:

Using polar coordinates with the arc from $\theta = 0$ to $\theta = \pi$:
- Arc length element: $ds = R \, d\theta$
- Mass element: $dm = \lambda R \, d\theta$
- Position: $x = R\cos\theta$, $y = R\sin\theta$

By symmetry, $x_{cm} = 0$.

$$y_{cm} = \frac{1}{M} \int y \, dm = \frac{1}{M} \int_0^\pi R\sin\theta \cdot \lambda R \, d\theta$$

Total mass: $M = \lambda \cdot \pi R$

$$y_{cm} = \frac{\lambda R^2}{M} \int_0^\pi \sin\theta \, d\theta = \frac{\lambda R^2}{\lambda \pi R} [-\cos\theta]_0^\pi$$

$$y_{cm} = \frac{R}{\pi} \cdot [1 - (-1)] = \frac{2R}{\pi}$$

### Example: Solid Hemisphere

For a solid hemisphere of radius $R$ with uniform density $\rho$, with flat face on the xy-plane:

By symmetry: $x_{cm} = y_{cm} = 0$

Using disk slices at height $z$:
- Disk radius at height $z$: $r = \sqrt{R^2 - z^2}$
- Disk volume: $dV = \pi r^2 \, dz = \pi(R^2 - z^2) \, dz$
- Mass element: $dm = \rho \pi(R^2 - z^2) \, dz$

$$M = \frac{2}{3}\pi R^3 \rho$$

$$z_{cm} = \frac{1}{M} \int_0^R z \cdot \rho\pi(R^2 - z^2) \, dz = \frac{\rho\pi}{M} \int_0^R (zR^2 - z^3) \, dz$$

$$z_{cm} = \frac{\rho\pi}{M} \left[\frac{z^2 R^2}{2} - \frac{z^4}{4}\right]_0^R = \frac{\rho\pi}{M} \left(\frac{R^4}{2} - \frac{R^4}{4}\right) = \frac{\rho\pi R^4}{4M}$$

$$z_{cm} = \frac{\rho\pi R^4}{4} \cdot \frac{3}{2\pi R^3 \rho} = \frac{3R}{8}$$

---

## 🎯 Motion of the Center of Mass

### Velocity of Center of Mass

Taking the time derivative of $\vec{r}_{cm}$:

$$\vec{v}_{cm} = \frac{d\vec{r}_{cm}}{dt} = \frac{1}{M} \sum_{i=1}^{n} m_i \frac{d\vec{r}_i}{dt} = \frac{\sum_{i=1}^{n} m_i \vec{v}_i}{M}$$

**Key relationship:**
$$M\vec{v}_{cm} = \sum_{i=1}^{n} m_i \vec{v}_i = \vec{p}_{total}$$

The total momentum of a system equals the total mass times the velocity of the center of mass.

### Acceleration of Center of Mass

$$\vec{a}_{cm} = \frac{d\vec{v}_{cm}}{dt} = \frac{1}{M} \sum_{i=1}^{n} m_i \vec{a}_i$$

### Newton's Second Law for Systems

$$\vec{F}_{ext} = M\vec{a}_{cm}$$

**Critical insight:** Only external forces affect the motion of the center of mass. Internal forces (between particles within the system) cancel in pairs by Newton's third law.

**Proof:**
The net force on particle $i$: $\vec{F}_i = m_i\vec{a}_i$

Summing over all particles:
$$\sum_i \vec{F}_i = \sum_i m_i\vec{a}_i = M\vec{a}_{cm}$$

The total force includes internal forces $\vec{f}_{ij}$ (force on $i$ by $j$) and external forces:
$$\sum_i \vec{F}_i = \sum_i \vec{F}_{i,ext} + \sum_{i \neq j} \vec{f}_{ij}$$

By Newton's third law: $\vec{f}_{ij} = -\vec{f}_{ji}$, so internal forces cancel pairwise:
$$\sum_{i \neq j} \vec{f}_{ij} = 0$$

Therefore: $\vec{F}_{ext} = M\vec{a}_{cm}$

### Example: Exploding Projectile

A projectile of mass $M$ is launched at angle $\theta$ with speed $v_0$. At its peak, it explodes into two pieces of masses $m$ and $M-m$. Describe the motion of the center of mass after the explosion.

**Solution:**
Before explosion: The projectile follows a parabolic path.

After explosion: The center of mass continues on the same parabolic path! The explosion forces are internal and don't affect $\vec{a}_{cm}$.

$$\vec{a}_{cm} = -g\hat{j}$$ (unchanged)

The individual pieces may fly in different directions, but their mass-weighted average position traces the original parabola.

---

## 🎯 Linear Momentum: Calculus Definition

### Definition of Linear Momentum

For a particle of mass $m$ and velocity $\vec{v}$:

$$\vec{p} = m\vec{v}$$

**Units:** kg·m/s or N·s

### Momentum and Force (Newton's Second Law)

The most general form of Newton's second law:

$$\vec{F} = \frac{d\vec{p}}{dt}$$

For constant mass:
$$\vec{F} = \frac{d(m\vec{v})}{dt} = m\frac{d\vec{v}}{dt} = m\vec{a}$$

### System Momentum

For a system of particles:

$$\vec{P} = \sum_{i} \vec{p}_i = \sum_{i} m_i\vec{v}_i = M\vec{v}_{cm}$$

The total momentum equals the total mass times the center-of-mass velocity.

### Rate of Change of System Momentum

$$\frac{d\vec{P}}{dt} = \sum_{i} \frac{d\vec{p}_i}{dt} = \sum_{i} \vec{F}_i = \vec{F}_{ext}$$

**Fundamental theorem:**
$$\vec{F}_{ext} = \frac{d\vec{P}}{dt}$$

The rate of change of total momentum equals the net external force.

---

## 🎯 Impulse-Momentum Theorem with Integrals

### Definition of Impulse

**Impulse** is the time integral of force:

$$\vec{J} = \int_{t_1}^{t_2} \vec{F} \, dt$$

**Units:** N·s (same as momentum)

### Impulse-Momentum Theorem

From $\vec{F} = \frac{d\vec{p}}{dt}$:

$$\vec{J} = \int_{t_1}^{t_2} \vec{F} \, dt = \int_{t_1}^{t_2} \frac{d\vec{p}}{dt} \, dt = \int_{\vec{p}_1}^{\vec{p}_2} d\vec{p} = \vec{p}_2 - \vec{p}_1 = \Delta\vec{p}$$

**The impulse-momentum theorem:**
$$\vec{J} = \Delta\vec{p}$$

### Average Force

The **average force** during a collision:

$$\vec{F}_{avg} = \frac{\vec{J}}{\Delta t} = \frac{\Delta\vec{p}}{\Delta t}$$

### Graphical Interpretation

The impulse equals the area under the $F(t)$ curve:

$$J = \int_{t_1}^{t_2} F(t) \, dt = \text{Area under } F(t) \text{ curve}$$

### Example: Time-Varying Force

A force $\vec{F}(t) = (3t^2 - 2t)\hat{i}$ N acts on a 2 kg mass initially at rest. Find the velocity after 4 seconds.

**Solution:**
$$\vec{J} = \int_0^4 (3t^2 - 2t)\hat{i} \, dt = \left[t^3 - t^2\right]_0^4 \hat{i} = (64 - 16)\hat{i} = 48\hat{i} \text{ N·s}$$

$$\Delta\vec{p} = \vec{J} = 48\hat{i} \text{ kg·m/s}$$

$$m\vec{v}_f - m\vec{v}_i = 48\hat{i}$$

$$\vec{v}_f = \frac{48\hat{i}}{2} = 24\hat{i} \text{ m/s}$$

### Example: Collision Force Profile

During a collision lasting 0.01 s, the force varies as $F(t) = F_0 \sin\left(\frac{\pi t}{\Delta t}\right)$ where $\Delta t = 0.01$ s. If the impulse is 50 N·s, find $F_0$.

**Solution:**
$$J = \int_0^{\Delta t} F_0 \sin\left(\frac{\pi t}{\Delta t}\right) dt$$

Let $u = \frac{\pi t}{\Delta t}$, so $du = \frac{\pi}{\Delta t} dt$:

$$J = F_0 \cdot \frac{\Delta t}{\pi} \int_0^{\pi} \sin u \, du = F_0 \cdot \frac{\Delta t}{\pi} [-\cos u]_0^{\pi} = F_0 \cdot \frac{\Delta t}{\pi} \cdot 2 = \frac{2F_0 \Delta t}{\pi}$$

$$F_0 = \frac{\pi J}{2\Delta t} = \frac{\pi \cdot 50}{2 \cdot 0.01} = 7854 \text{ N}$$

---

## 🎯 Conservation of Momentum

### Statement of Conservation

**When the net external force on a system is zero, the total momentum is conserved:**

$$\vec{F}_{ext} = 0 \implies \frac{d\vec{P}}{dt} = 0 \implies \vec{P} = \text{constant}$$

$$\sum_{i} m_i\vec{v}_{i,initial} = \sum_{i} m_i\vec{v}_{i,final}$$

### Component-wise Conservation

Momentum is conserved independently in each direction where the external force component is zero:

$$F_{ext,x} = 0 \implies P_x = \text{constant}$$
$$F_{ext,y} = 0 \implies P_y = \text{constant}$$
$$F_{ext,z} = 0 \implies P_z = \text{constant}$$

### Internal Forces and Momentum

Internal forces don't change total momentum because they come in Newton's third law pairs:

$$\vec{F}_{12} = -\vec{F}_{21}$$

When particle 1 pushes on particle 2, the momentum transferred to 2 equals the momentum lost by 1.

### Example: Recoil

A cannon of mass $M = 500$ kg fires a cannonball of mass $m = 10$ kg horizontally with velocity $v = 200$ m/s. Find the recoil velocity of the cannon.

**Solution:**
Initial momentum: $P_i = 0$ (both at rest)

Final momentum: $P_f = mv + MV = 0$

$$V = -\frac{mv}{M} = -\frac{10 \cdot 200}{500} = -4 \text{ m/s}$$

The cannon recoils at 4 m/s in the opposite direction.

### Example: Ice Skater

An ice skater (60 kg) throws a ball (0.5 kg) horizontally at 20 m/s relative to the ground. If initially at rest, find the skater's velocity.

**Solution:**
$$0 = m_{ball}v_{ball} + m_{skater}v_{skater}$$

$$v_{skater} = -\frac{0.5 \cdot 20}{60} = -0.167 \text{ m/s}$$

---

## 🎯 Elastic and Inelastic Collisions

### Classification of Collisions

| Type | Kinetic Energy | Momentum |
|------|---------------|----------|
| **Perfectly Elastic** | Conserved | Conserved |
| **Inelastic** | NOT conserved (decreases) | Conserved |
| **Perfectly Inelastic** | Maximum loss | Conserved (objects stick) |

### Coefficient of Restitution

The **coefficient of restitution** $e$ quantifies the "bounciness":

$$e = \frac{v_{2f} - v_{1f}}{v_{1i} - v_{2i}} = \frac{\text{relative velocity after}}{\text{relative velocity before}}$$

- $e = 1$: Perfectly elastic
- $0 < e < 1$: Inelastic
- $e = 0$: Perfectly inelastic

### One-Dimensional Elastic Collisions

For a 1D elastic collision between masses $m_1$ (velocity $v_1$) and $m_2$ (initially at rest):

**Conservation of momentum:**
$$m_1 v_1 = m_1 v_{1f} + m_2 v_{2f}$$

**Conservation of kinetic energy:**
$$\frac{1}{2}m_1 v_1^2 = \frac{1}{2}m_1 v_{1f}^2 + \frac{1}{2}m_2 v_{2f}^2$$

**Solving these simultaneously:**

$$v_{1f} = \frac{m_1 - m_2}{m_1 + m_2} v_1$$

$$v_{2f} = \frac{2m_1}{m_1 + m_2} v_1$$

**Special cases:**

1. **Equal masses** ($m_1 = m_2$): $v_{1f} = 0$, $v_{2f} = v_1$ (velocities exchange)

2. **Heavy projectile** ($m_1 \gg m_2$): $v_{1f} \approx v_1$, $v_{2f} \approx 2v_1$

3. **Light projectile** ($m_1 \ll m_2$): $v_{1f} \approx -v_1$, $v_{2f} \approx 0$ (bounces back)

### General Elastic Collision Formula

When both objects are initially moving ($m_1$ at $v_{1i}$, $m_2$ at $v_{2i}$):

$$v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}v_{1i} + \frac{2m_2}{m_1 + m_2}v_{2i}$$

$$v_{2f} = \frac{2m_1}{m_1 + m_2}v_{1i} + \frac{m_2 - m_1}{m_1 + m_2}v_{2i}$$

### Perfectly Inelastic Collisions

Objects stick together after collision:

$$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2)v_f$$

$$v_f = \frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$$

**Energy lost:**
$$\Delta KE = KE_i - KE_f = \frac{1}{2}\mu (v_{1i} - v_{2i})^2$$

where $\mu = \frac{m_1 m_2}{m_1 + m_2}$ is the **reduced mass**.

### Example: Ballistic Pendulum

A bullet of mass $m$ and velocity $v$ embeds in a block of mass $M$ suspended by a string. The block rises to height $h$. Find $v$.

**Step 1: Collision (momentum conserved, energy not)**
$$mv = (m + M)V$$

where $V$ is the velocity just after collision.

**Step 2: Rise (energy conserved)**
$$\frac{1}{2}(m + M)V^2 = (m + M)gh$$

$$V = \sqrt{2gh}$$

**Step 3: Solve for v**
$$v = \frac{(m + M)V}{m} = \frac{(m + M)\sqrt{2gh}}{m}$$

### Example: Energy Loss Calculation

A 2 kg block moving at 8 m/s collides with a 3 kg block at rest. If the collision is perfectly inelastic:

**Final velocity:**
$$v_f = \frac{2 \cdot 8 + 3 \cdot 0}{2 + 3} = \frac{16}{5} = 3.2 \text{ m/s}$$

**Energy before:**
$$KE_i = \frac{1}{2}(2)(8)^2 = 64 \text{ J}$$

**Energy after:**
$$KE_f = \frac{1}{2}(5)(3.2)^2 = 25.6 \text{ J}$$

**Energy lost:**
$$\Delta KE = 64 - 25.6 = 38.4 \text{ J}$$

**Using reduced mass formula:**
$$\mu = \frac{2 \cdot 3}{2 + 3} = 1.2 \text{ kg}$$
$$\Delta KE = \frac{1}{2}(1.2)(8 - 0)^2 = 38.4 \text{ J}$$ ✓

---

## 🎯 Two-Dimensional Collisions

### Vector Conservation

In 2D, momentum is conserved as a vector:

$$\vec{p}_{1i} + \vec{p}_{2i} = \vec{p}_{1f} + \vec{p}_{2f}$$

**Component equations:**
$$m_1 v_{1ix} + m_2 v_{2ix} = m_1 v_{1fx} + m_2 v_{2fx}$$
$$m_1 v_{1iy} + m_2 v_{2iy} = m_1 v_{1fy} + m_2 v_{2fy}$$

### Elastic 2D Collisions

For elastic collisions, add energy conservation:

$$\frac{1}{2}m_1 v_{1i}^2 + \frac{1}{2}m_2 v_{2i}^2 = \frac{1}{2}m_1 v_{1f}^2 + \frac{1}{2}m_2 v_{2f}^2$$

This gives three equations but usually four unknowns (two final velocities with two components each). Additional information like impact angle is needed.

### Glancing Collision Example

A ball of mass $m$ moving at velocity $v$ along the x-axis strikes a stationary ball of equal mass. After the elastic collision, the first ball moves at angle $\theta$ above the x-axis. Find both final velocities and prove $\theta + \phi = 90°$ (where $\phi$ is the angle of the second ball below x-axis).

**Momentum conservation:**
- x: $mv = mv_{1f}\cos\theta + mv_{2f}\cos\phi$
- y: $0 = mv_{1f}\sin\theta - mv_{2f}\sin\phi$

**Energy conservation (elastic):**
$$v^2 = v_{1f}^2 + v_{2f}^2$$

From the y-equation: $v_{1f}\sin\theta = v_{2f}\sin\phi$

Using vector addition geometrically:
$$\vec{v} = \vec{v}_{1f} + \vec{v}_{2f}$$

Since $|\vec{v}|^2 = |\vec{v}_{1f}|^2 + |\vec{v}_{2f}|^2$, the vectors form a right triangle!

Therefore: $\theta + \phi = 90°$

### Center of Mass Frame

The **center of mass frame** simplifies collision analysis. In this frame:
- Total momentum is zero
- $\vec{v}_{cm} = 0$

**Velocities in CM frame:**
$$\vec{v}_1' = \vec{v}_1 - \vec{v}_{cm}$$
$$\vec{v}_2' = \vec{v}_2 - \vec{v}_{cm}$$

**For elastic collisions in CM frame:** Velocities simply reverse direction (magnitudes unchanged).

---

## 🎯 Rocket Propulsion: Variable Mass Systems

### The Rocket Equation

For a rocket expelling mass, both the rocket mass and velocity change with time. This requires careful application of momentum conservation.

**Setup:**
- At time $t$: Rocket has mass $m$ and velocity $v$
- At time $t + dt$: Rocket has mass $m - dm$ and velocity $v + dv$
- Exhaust has mass $dm$ and velocity $v - v_{ex}$ (where $v_{ex}$ is exhaust velocity relative to rocket)

**Momentum conservation:**
$$m \cdot v = (m - dm)(v + dv) + dm(v - v_{ex})$$

Expanding:
$$mv = mv + m\,dv - v\,dm - dm\,dv + v\,dm - v_{ex}\,dm$$

Neglecting second-order term $dm\,dv$:
$$0 = m\,dv - v_{ex}\,dm$$

$$m\,dv = v_{ex}\,dm$$

### Thrust

The **thrust** is the force from exhaust:

$$F_{thrust} = v_{ex} \frac{dm}{dt} = v_{ex} |\dot{m}|$$

where $|\dot{m}|$ is the mass flow rate (positive).

### Rocket Equation Derivation

From $m\,dv = v_{ex}\,dm$:

$$dv = v_{ex} \frac{dm}{m}$$

Integrating from initial state $(m_0, v_0)$ to final state $(m_f, v_f)$:

$$\int_{v_0}^{v_f} dv = v_{ex} \int_{m_0}^{m_f} \frac{dm}{m}$$

$$v_f - v_0 = v_{ex} \ln\left(\frac{m_f}{m_0}\right) = -v_{ex} \ln\left(\frac{m_0}{m_f}\right)$$

**The Tsiolkovsky Rocket Equation:**
$$\Delta v = v_{ex} \ln\left(\frac{m_0}{m_f}\right)$$

### Mass Ratio

The **mass ratio** $R = \frac{m_0}{m_f}$ determines maximum velocity change:

$$\Delta v = v_{ex} \ln R$$

**To achieve $\Delta v = v_{ex}$:** $R = e \approx 2.72$

**To achieve $\Delta v = 2v_{ex}$:** $R = e^2 \approx 7.39$

### Rocket with Gravity

Including gravitational force:

$$m\frac{dv}{dt} = F_{thrust} - mg = v_{ex}|\dot{m}| - mg$$

$$\frac{dv}{dt} = \frac{v_{ex}|\dot{m}|}{m} - g$$

For constant mass flow rate $\dot{m}$:
$$m(t) = m_0 - |\dot{m}|t$$

### Example: Rocket Launch

A rocket with initial mass 1000 kg (including 800 kg fuel) has exhaust velocity 2500 m/s. Find:
(a) Maximum velocity change in vacuum
(b) Thrust if burn time is 100 s

**Solution:**

(a) Final mass = 200 kg
$$\Delta v = v_{ex} \ln\left(\frac{m_0}{m_f}\right) = 2500 \ln\left(\frac{1000}{200}\right) = 2500 \ln 5 = 4024 \text{ m/s}$$

(b) Mass flow rate:
$$|\dot{m}| = \frac{800 \text{ kg}}{100 \text{ s}} = 8 \text{ kg/s}$$

Thrust:
$$F = v_{ex}|\dot{m}| = 2500 \times 8 = 20,000 \text{ N} = 20 \text{ kN}$$

### Example: Variable Exhaust

A rocket's exhaust velocity varies as $v_{ex}(t) = v_0 e^{-t/\tau}$. If mass decreases as $m(t) = m_0 e^{-\alpha t}$, find velocity as a function of time (starting from rest in vacuum).

**Solution:**
$$\frac{dm}{m} = -\alpha \, dt$$

$$dv = v_{ex} \frac{dm}{m} = v_0 e^{-t/\tau} \cdot (-\alpha \, dt)$$

Wait—let's reconsider. From $m\,dv = v_{ex}\,dm$:

$$dv = v_{ex} \frac{dm}{m}$$

With $m = m_0 e^{-\alpha t}$: $\frac{dm}{dt} = -\alpha m$, so $dm = -\alpha m \, dt$

$$dv = v_{ex} \cdot \frac{-\alpha m \, dt}{m} = -\alpha v_0 e^{-t/\tau} dt$$

Integrating:
$$v(t) = -\alpha v_0 \int_0^t e^{-t'/\tau} dt' = -\alpha v_0 \cdot (-\tau)[e^{-t'/\tau}]_0^t$$

$$v(t) = \alpha \tau v_0 (1 - e^{-t/\tau})$$

---

## 🎯 Advanced Problem-Solving Techniques

### Using Relative Velocity

In collision problems, relative velocity often simplifies analysis:

$$v_{rel} = v_1 - v_2$$

For elastic collisions:
$$v_{rel,after} = -v_{rel,before}$$

### Reduced Mass

The **reduced mass** $\mu = \frac{m_1 m_2}{m_1 + m_2}$ appears in:

1. **Energy loss in inelastic collisions:**
   $$\Delta KE = \frac{1}{2}\mu v_{rel}^2 (1 - e^2)$$

2. **Two-body problem:** The relative motion of two particles is equivalent to a single particle of reduced mass $\mu$ moving under the net force.

### Impulse in Multiple Dimensions

For 2D impulse problems, decompose forces and integrate component-wise:

$$J_x = \int F_x(t) \, dt = \Delta p_x$$
$$J_y = \int F_y(t) \, dt = \Delta p_y$$

### Center of Mass Shortcuts

1. **Composite bodies:** Find COM by treating each piece as a point mass at its own COM:
   $$x_{cm} = \frac{m_1 x_{cm,1} + m_2 x_{cm,2}}{m_1 + m_2}$$

2. **Subtraction method:** For a body with a hole, treat the hole as negative mass:
   $$x_{cm} = \frac{M_{total}x_{cm,total} - M_{hole}x_{cm,hole}}{M_{total} - M_{hole}}$$

---

## 🎯 AP Exam Strategies

### Common FRQ Patterns

1. **Collision problems:**
   - Identify collision type (elastic/inelastic)
   - Write momentum conservation equations
   - Add energy conservation if elastic
   - Solve system of equations

2. **Center of mass calculations:**
   - Set up integral with appropriate $dm$
   - Use symmetry to reduce work
   - Check units throughout

3. **Rocket problems:**
   - Apply variable mass rocket equation
   - Account for gravity if present
   - Be careful with sign conventions

### Key Equations to Memorize

| Concept | Equation |
|---------|----------|
| Center of mass | $\vec{r}_{cm} = \frac{1}{M}\sum m_i\vec{r}_i$ or $\frac{1}{M}\int \vec{r}\,dm$ |
| Momentum | $\vec{p} = m\vec{v}$ |
| Impulse | $\vec{J} = \int \vec{F}\,dt = \Delta\vec{p}$ |
| Elastic collision | $v_{1f} = \frac{m_1-m_2}{m_1+m_2}v_{1i} + \frac{2m_2}{m_1+m_2}v_{2i}$ |
| Inelastic collision | $v_f = \frac{m_1v_1 + m_2v_2}{m_1+m_2}$ |
| Rocket equation | $\Delta v = v_{ex}\ln(m_0/m_f)$ |
| Thrust | $F = v_{ex}|\dot{m}|$ |

### Conceptual Questions

**Why is momentum conserved in collisions?**
During a collision, objects exert internal forces on each other. By Newton's third law, these forces are equal and opposite, causing equal and opposite momentum changes. The total momentum remains constant.

**Why isn't kinetic energy always conserved?**
Internal forces can do work, converting kinetic energy to other forms (deformation, heat, sound). In elastic collisions, the objects temporarily store energy (like springs) and fully return it.

**What happens to the center of mass during an explosion?**
The center of mass continues its original motion! Explosion forces are internal and don't affect COM trajectory.

---

## 📝 Practice Problems

### Problem 1: Non-uniform Disk

A circular disk of radius $R$ has surface mass density $\sigma(r) = \sigma_0(1 + r/R)$ where $r$ is the distance from center. Find the total mass and center of mass.

**Solution:**
$$M = \int \sigma \, dA = \int_0^{2\pi} \int_0^R \sigma_0\left(1 + \frac{r}{R}\right) r \, dr \, d\theta$$

$$M = 2\pi\sigma_0 \int_0^R \left(r + \frac{r^2}{R}\right) dr = 2\pi\sigma_0 \left[\frac{r^2}{2} + \frac{r^3}{3R}\right]_0^R$$

$$M = 2\pi\sigma_0 \left(\frac{R^2}{2} + \frac{R^2}{3}\right) = 2\pi\sigma_0 R^2 \cdot \frac{5}{6} = \frac{5\pi\sigma_0 R^2}{3}$$

By symmetry, $x_{cm} = y_{cm} = 0$, so COM is at the center.

### Problem 2: Two-stage Collision

Mass $m_1 = 2$ kg moving at $6$ m/s collides elastically with mass $m_2 = 3$ kg at rest. Then $m_2$ collides elastically with $m_3 = 4$ kg at rest. Find final velocity of $m_3$.

**Solution:**
**First collision:**
$$v_{2f} = \frac{2m_1}{m_1+m_2}v_1 = \frac{2(2)}{5}(6) = 4.8 \text{ m/s}$$

**Second collision:**
$$v_{3f} = \frac{2m_2}{m_2+m_3}v_{2f} = \frac{2(3)}{7}(4.8) = 4.11 \text{ m/s}$$

### Problem 3: Impulse Integration

A force $\vec{F} = (At^2)\hat{i} + (Bt)\hat{j}$ acts on a 3 kg particle from $t = 0$ to $t = 2$ s, where $A = 6$ N/s² and $B = 4$ N/s. If initially at rest, find final velocity.

**Solution:**
$$J_x = \int_0^2 At^2 \, dt = A\left[\frac{t^3}{3}\right]_0^2 = 6 \cdot \frac{8}{3} = 16 \text{ N·s}$$

$$J_y = \int_0^2 Bt \, dt = B\left[\frac{t^2}{2}\right]_0^2 = 4 \cdot 2 = 8 \text{ N·s}$$

$$\vec{v}_f = \frac{\vec{J}}{m} = \frac{16\hat{i} + 8\hat{j}}{3} = (5.33\hat{i} + 2.67\hat{j}) \text{ m/s}$$

### Problem 4: Rocket with Air Resistance

A rocket with $m_0 = 500$ kg, $v_{ex} = 3000$ m/s, and mass flow rate 5 kg/s experiences air resistance $F_d = -bv$ where $b = 10$ N·s/m. Write the equation of motion and solve for $v(t)$ numerically (or set up the differential equation).

**Solution:**
$$m\frac{dv}{dt} = v_{ex}|\dot{m}| - mg - bv$$

With $m = m_0 - |\dot{m}|t$:

$$(500 - 5t)\frac{dv}{dt} = 3000(5) - (500-5t)(9.8) - 10v$$

$$(500 - 5t)\frac{dv}{dt} = 15000 - 4900 + 49t - 10v$$

$$(500 - 5t)\frac{dv}{dt} + 10v = 10100 + 49t$$

This is a first-order linear ODE requiring numerical methods or integrating factor.

---

## 🔑 Key Takeaways

1. **Center of mass** represents the average position weighted by mass—use integrals for continuous distributions.

2. **Momentum is always conserved** when external forces are zero; kinetic energy is only conserved in elastic collisions.

3. **Impulse** equals change in momentum—integrate force over time for variable forces.

4. **Two-dimensional collisions** require component-wise momentum conservation.

5. **Rocket propulsion** involves variable mass—use the Tsiolkovsky equation $\Delta v = v_{ex}\ln(m_0/m_f)$.

6. The **center of mass frame** simplifies collision analysis by making total momentum zero.

7. **Reduced mass** $\mu = \frac{m_1m_2}{m_1+m_2}$ appears in relative motion and energy loss calculations.

---

## 📚 Quick Reference Card

### Centers of Mass (Common Shapes)

| Shape | Center of Mass |
|-------|---------------|
| Uniform rod | Geometric center |
| Triangle | Centroid (intersection of medians) |
| Semicircular wire | $\frac{2R}{\pi}$ from center |
| Semicircular plate | $\frac{4R}{3\pi}$ from center |
| Hemispherical shell | $\frac{R}{2}$ from center |
| Solid hemisphere | $\frac{3R}{8}$ from center |
| Cone (solid) | $\frac{3h}{4}$ from apex |
| Cone (hollow) | $\frac{2h}{3}$ from apex |

### Collision Summary

| Property | Elastic | Inelastic | Perfectly Inelastic |
|----------|---------|-----------|---------------------|
| Momentum | Conserved | Conserved | Conserved |
| KE | Conserved | Decreases | Maximum loss |
| $e$ value | 1 | 0 < e < 1 | 0 |
| Objects after | Separate | Separate | Stick together |

---

*Master these concepts to excel on the AP Physics C: Mechanics exam. Remember: momentum conservation is perhaps the most powerful tool in mechanics—use it wisely!*

:::GUIDE:::
