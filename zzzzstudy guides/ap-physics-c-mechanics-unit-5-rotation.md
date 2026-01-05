:::GUIDE:::
unit::=5
title::=⚡ Unit 5: Rotation
desc::=Master rotational kinematics, dynamics, and energy with calculus
diff::=Very Hard
time::=65 min
tags::=physics-c,mechanics,rotation,torque,angular-momentum
content::=

# ⚡ Unit 5: Rotation

## 📚 Overview

Rotation is one of the most mathematically intensive topics in AP Physics C: Mechanics. This unit extends your understanding of linear motion to rotational systems, requiring calculus to derive moments of inertia, analyze rolling motion, and solve angular momentum problems. Mastery of cross products and integration techniques is essential.

---

## 🔄 Rotational Kinematics

### Angular Position, Velocity, and Acceleration

**Angular Position (θ):**
- Measured in radians (rad)
- One complete revolution = 2π radians = 360°
- Arc length relationship: **s = rθ**

**Angular Velocity (ω):**
$$\omega = \frac{d\theta}{dt}$$

- Units: rad/s
- Relates to linear velocity: **v = rω**
- Direction: Use right-hand rule (curl fingers in rotation direction, thumb points along ω)

**Angular Acceleration (α):**
$$\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}$$

- Units: rad/s²
- Relates to tangential acceleration: **a_t = rα**

### Centripetal Acceleration

The radial (centripetal) acceleration for circular motion:
$$a_c = \frac{v^2}{r} = \omega^2 r$$

**Total acceleration** for non-uniform circular motion:
$$\vec{a} = \vec{a}_t + \vec{a}_c$$
$$|a| = \sqrt{a_t^2 + a_c^2} = \sqrt{(r\alpha)^2 + (\omega^2 r)^2}$$

### Kinematic Equations for Constant Angular Acceleration

These mirror the linear kinematic equations:

| Linear | Rotational |
|--------|------------|
| v = v₀ + at | ω = ω₀ + αt |
| x = x₀ + v₀t + ½at² | θ = θ₀ + ω₀t + ½αt² |
| v² = v₀² + 2a(x - x₀) | ω² = ω₀² + 2α(θ - θ₀) |
| x = x₀ + ½(v + v₀)t | θ = θ₀ + ½(ω + ω₀)t |

### Non-Constant Angular Acceleration

When α varies with time or position, use calculus:

**Given α(t):**
$$\omega(t) = \omega_0 + \int_0^t \alpha(t') \, dt'$$
$$\theta(t) = \theta_0 + \int_0^t \omega(t') \, dt'$$

**Given α(θ):**
$$\omega \, d\omega = \alpha \, d\theta$$
$$\int_{\omega_0}^{\omega} \omega' \, d\omega' = \int_{\theta_0}^{\theta} \alpha(\theta') \, d\theta'$$

> 💡 **Example:** A wheel has angular acceleration α = 4t rad/s². Starting from rest, find ω and θ at t = 3 s.
> 
> $$\omega = \int_0^3 4t \, dt = 2t^2 \Big|_0^3 = 18 \text{ rad/s}$$
> $$\theta = \int_0^3 2t^2 \, dt = \frac{2t^3}{3} \Big|_0^3 = 18 \text{ rad}$$

---

## 🎯 Moment of Inertia

### Definition

**Moment of inertia (I)** is the rotational analog of mass—it measures resistance to angular acceleration.

**For discrete masses:**
$$I = \sum_i m_i r_i^2$$

**For continuous objects:**
$$I = \int r^2 \, dm$$

where r is the perpendicular distance from the axis of rotation.

### Calculating Moment of Inertia with Integrals

The key is expressing dm in terms of a spatial variable.

**Volume density:** ρ = dm/dV → dm = ρ dV

**Surface density:** σ = dm/dA → dm = σ dA

**Linear density:** λ = dm/dl → dm = λ dl

---

### Example 1: Thin Rod About Center

A uniform rod of mass M and length L rotates about its center.

**Setup:**
- Linear density: λ = M/L
- Element at position x from center: dm = λ dx
- Distance from axis: r = x

$$I = \int_{-L/2}^{L/2} x^2 \cdot \lambda \, dx = \frac{M}{L} \int_{-L/2}^{L/2} x^2 \, dx$$

$$I = \frac{M}{L} \cdot \frac{x^3}{3} \Big|_{-L/2}^{L/2} = \frac{M}{L} \cdot \frac{2}{3} \cdot \frac{L^3}{8} = \boxed{\frac{1}{12}ML^2}$$

---

### Example 2: Thin Rod About End

Same rod, but rotating about one end.

$$I = \int_0^L x^2 \cdot \frac{M}{L} \, dx = \frac{M}{L} \cdot \frac{x^3}{3} \Big|_0^L = \boxed{\frac{1}{3}ML^2}$$

---

### Example 3: Solid Disk/Cylinder About Central Axis

A uniform disk of mass M, radius R, and thickness t.

**Setup:**
- Use cylindrical shells at radius r, thickness dr
- Volume of shell: dV = 2πr · t · dr
- Volume density: ρ = M/(πR²t)
- dm = ρ · dV = (2M/R²) · r dr

$$I = \int_0^R r^2 \cdot \frac{2M}{R^2} \cdot r \, dr = \frac{2M}{R^2} \int_0^R r^3 \, dr$$

$$I = \frac{2M}{R^2} \cdot \frac{r^4}{4} \Big|_0^R = \frac{2M}{R^2} \cdot \frac{R^4}{4} = \boxed{\frac{1}{2}MR^2}$$

---

### Example 4: Solid Sphere About Diameter

A uniform solid sphere of mass M and radius R.

**Setup:**
- Slice into thin disks perpendicular to the axis
- Disk at height z has radius r = √(R² - z²)
- Mass of disk: dm = ρ · πr² dz = ρπ(R² - z²) dz
- Moment of inertia of disk about axis: dI = ½ dm · r²

$$dI = \frac{1}{2} \rho \pi (R^2 - z^2)^2 \, dz$$

$$I = \frac{1}{2} \rho \pi \int_{-R}^{R} (R^2 - z^2)^2 \, dz$$

Expanding and integrating:
$$I = \frac{1}{2} \rho \pi \int_{-R}^{R} (R^4 - 2R^2z^2 + z^4) \, dz$$

$$I = \frac{1}{2} \rho \pi \left[ R^4 z - \frac{2R^2 z^3}{3} + \frac{z^5}{5} \right]_{-R}^{R}$$

$$I = \frac{1}{2} \rho \pi \cdot 2 \left( R^5 - \frac{2R^5}{3} + \frac{R^5}{5} \right) = \rho \pi R^5 \left( 1 - \frac{2}{3} + \frac{1}{5} \right)$$

$$I = \rho \pi R^5 \cdot \frac{8}{15}$$

Since ρ = M/(4πR³/3) = 3M/(4πR³):

$$I = \frac{3M}{4\pi R^3} \cdot \pi R^5 \cdot \frac{8}{15} = \boxed{\frac{2}{5}MR^2}$$

---

### Example 5: Thin Spherical Shell

A hollow sphere of mass M and radius R.

Using spherical coordinates with strips at angle θ from the axis:
- Ring radius: r = R sin θ
- Ring mass: dm = (M/4πR²) · 2πR sin θ · R dθ = (M/2) sin θ dθ

$$I = \int_0^{\pi} (R \sin\theta)^2 \cdot \frac{M}{2} \sin\theta \, d\theta = \frac{MR^2}{2} \int_0^{\pi} \sin^3\theta \, d\theta$$

$$I = \frac{MR^2}{2} \cdot \frac{4}{3} = \boxed{\frac{2}{3}MR^2}$$

---

### Common Moments of Inertia Table

| Object | Axis | Moment of Inertia |
|--------|------|-------------------|
| Point mass | Distance r | mr² |
| Thin rod | Through center | (1/12)ML² |
| Thin rod | Through end | (1/3)ML² |
| Thin hoop | Through center | MR² |
| Solid disk/cylinder | Through center | (1/2)MR² |
| Hollow cylinder | Through center | (1/2)M(R₁² + R₂²) |
| Solid sphere | Through center | (2/5)MR² |
| Thin spherical shell | Through center | (2/3)MR² |
| Thin rectangular plate | Through center, ⊥ to plate | (1/12)M(a² + b²) |

---

## 📐 Parallel Axis Theorem

The **parallel axis theorem** relates the moment of inertia about any axis to the moment about a parallel axis through the center of mass:

$$I = I_{cm} + Md^2$$

where:
- I = moment of inertia about the new axis
- I_cm = moment of inertia about the center of mass axis
- M = total mass
- d = perpendicular distance between the two axes

> 💡 **Example:** Verify the rod about end result using the parallel axis theorem.
> 
> For a rod about its center: I_cm = (1/12)ML²
> Distance from center to end: d = L/2
> 
> $$I_{end} = \frac{1}{12}ML^2 + M\left(\frac{L}{2}\right)^2 = \frac{1}{12}ML^2 + \frac{1}{4}ML^2 = \frac{1}{3}ML^2$$ ✓

### Perpendicular Axis Theorem (Planar Objects Only)

For a flat object in the xy-plane:
$$I_z = I_x + I_y$$

where I_z is perpendicular to the plane.

---

## ⚙️ Torque and Angular Acceleration

### Torque Definition

**Torque (τ)** is the rotational analog of force.

**Vector definition:**
$$\vec{\tau} = \vec{r} \times \vec{F}$$

**Magnitude:**
$$|\tau| = rF\sin\phi = r_{\perp}F = rF_{\perp}$$

where:
- r = position vector from axis to point of force application
- F = applied force
- φ = angle between r and F
- r_⊥ = lever arm (perpendicular distance from axis to line of action)
- F_⊥ = component of force perpendicular to r

**Units:** N·m (not Joules, even though dimensionally equivalent)

### Cross Product Review

For vectors in component form:
$$\vec{A} \times \vec{B} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix}$$

$$\vec{A} \times \vec{B} = (A_yB_z - A_zB_y)\hat{i} + (A_zB_x - A_xB_z)\hat{j} + (A_xB_y - A_yB_x)\hat{k}$$

**Properties:**
- Anti-commutative: A × B = -B × A
- Distributive: A × (B + C) = A × B + A × C
- |A × B| = |A||B|sin θ

### Newton's Second Law for Rotation

$$\sum \vec{\tau} = I\vec{\alpha}$$

For a single axis:
$$\sum \tau = I\alpha$$

This is the rotational equivalent of ΣF = ma.

> 💡 **Example:** A 5 kg solid disk of radius 0.3 m has a string wrapped around it. A tension of 20 N is applied tangentially. Find the angular acceleration.
> 
> I = (1/2)MR² = (1/2)(5)(0.3)² = 0.225 kg·m²
> τ = FR = (20)(0.3) = 6 N·m
> α = τ/I = 6/0.225 = **26.7 rad/s²**

### Torque from Gravity

For an extended object, gravity acts at the **center of mass**:
$$\tau_g = Mgr_{cm}\sin\theta$$

where r_cm is the distance from the pivot to the center of mass.

---

## 🔋 Rotational Kinetic Energy

### Definition

$$K_{rot} = \frac{1}{2}I\omega^2$$

This is analogous to K = ½mv² for linear motion.

### Work-Energy Theorem for Rotation

$$W = \int \tau \, d\theta$$

For constant torque:
$$W = \tau \Delta\theta$$

**Power:**
$$P = \frac{dW}{dt} = \tau\omega$$

(Analogous to P = Fv)

---

## 🎱 Rolling Motion

### Pure Rolling Condition

For an object rolling without slipping:
$$v_{cm} = R\omega$$
$$a_{cm} = R\alpha$$

The contact point has **zero velocity** relative to the surface.

### Kinetic Energy of Rolling Objects

A rolling object has **both** translational and rotational kinetic energy:

$$K_{total} = K_{trans} + K_{rot} = \frac{1}{2}Mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$$

Using v_cm = Rω and I = cMR² (where c is a shape factor):

$$K_{total} = \frac{1}{2}Mv_{cm}^2 + \frac{1}{2}(cMR^2)\left(\frac{v_{cm}}{R}\right)^2 = \frac{1}{2}Mv_{cm}^2(1 + c)$$

**Shape factors:**
- Solid sphere: c = 2/5
- Solid cylinder: c = 1/2
- Hollow sphere: c = 2/3
- Hollow cylinder: c = 1

### Rolling Down an Incline

Consider an object rolling down a frictionless incline of height h:

**Energy Conservation:**
$$Mgh = \frac{1}{2}Mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$$

$$Mgh = \frac{1}{2}Mv_{cm}^2(1 + c)$$

$$v_{cm} = \sqrt{\frac{2gh}{1+c}}$$

> 🔑 **Key Insight:** Objects with smaller c (less rotational inertia) roll faster!
> 
> Race order (fastest to slowest):
> 1. Sliding block (c = 0)
> 2. Solid sphere (c = 2/5)
> 3. Solid cylinder (c = 1/2)
> 4. Hollow sphere (c = 2/3)
> 5. Hollow cylinder (c = 1)

### Dynamics of Rolling (Force Analysis)

For rolling down an incline at angle θ:

**Forces on the object:**
- Weight: Mg (downward)
- Normal force: N (perpendicular to surface)
- Friction: f (up the incline, at contact point)

**Translational motion:**
$$Mg\sin\theta - f = Ma_{cm}$$

**Rotational motion (about center of mass):**
$$fR = I_{cm}\alpha$$

**Using rolling condition** a_cm = Rα:
$$f = \frac{I_{cm}a_{cm}}{R^2}$$

Substituting:
$$Mg\sin\theta - \frac{I_{cm}a_{cm}}{R^2} = Ma_{cm}$$

$$a_{cm} = \frac{Mg\sin\theta}{M + I_{cm}/R^2} = \frac{g\sin\theta}{1 + c}$$

> 💡 **Example:** Find the acceleration of a solid sphere (c = 2/5) rolling down a 30° incline.
> 
> $$a = \frac{g\sin 30°}{1 + 2/5} = \frac{9.8 \times 0.5}{1.4} = \frac{4.9}{1.4} = \textbf{3.5 m/s}^2$$
> 
> Compare to sliding: a = g sin 30° = 4.9 m/s²

### Friction in Rolling

The friction force for rolling without slipping:
$$f = \frac{I_{cm}a_{cm}}{R^2} = \frac{cMa_{cm}}{1}$$

For rolling down an incline:
$$f = \frac{Mg\sin\theta \cdot c}{1 + c}$$

**Maximum static friction** sets the limit for rolling without slipping:
$$f \leq \mu_s N = \mu_s Mg\cos\theta$$

This gives the minimum coefficient of friction for pure rolling:
$$\mu_s \geq \frac{c \tan\theta}{1 + c}$$

For a solid sphere: μ_s ≥ (2/7) tan θ

---

## 🌀 Angular Momentum

### Definition

**For a particle:**
$$\vec{L} = \vec{r} \times \vec{p} = \vec{r} \times m\vec{v}$$

**Magnitude:**
$$L = rmv\sin\phi = r_{\perp}mv = rmv_{\perp}$$

**For a rigid body rotating about a fixed axis:**
$$L = I\omega$$

**Vector form:**
$$\vec{L} = I\vec{\omega}$$

### Relationship Between Torque and Angular Momentum

$$\vec{\tau}_{net} = \frac{d\vec{L}}{dt}$$

This is the rotational analog of F = dp/dt.

For a rigid body with constant I:
$$\tau = I\alpha = I\frac{d\omega}{dt} = \frac{d(I\omega)}{dt} = \frac{dL}{dt}$$

### Angular Momentum of a System

$$\vec{L}_{total} = \vec{L}_{orbital} + \vec{L}_{spin}$$

- **Orbital angular momentum:** L_orbital = r_cm × Mv_cm (about external point)
- **Spin angular momentum:** L_spin = I_cm ω (about center of mass)

---

## ⚖️ Conservation of Angular Momentum

When **net external torque is zero**:
$$\vec{L}_i = \vec{L}_f$$

$$I_i\omega_i = I_f\omega_f$$

### Classic Examples

**1. Figure Skater Spin:**
- Arms extended: large I, small ω
- Arms pulled in: small I, large ω
- L is conserved!

**2. Rotating Platform with Weights:**
A person on a rotating platform holds weights. When they extend their arms, their rotation slows.

> 💡 **Example:** A skater with I = 5 kg·m² spins at 2 rev/s. She pulls her arms in, reducing I to 2 kg·m². Find her new angular velocity.
> 
> L_i = L_f
> I_i ω_i = I_f ω_f
> (5)(2) = (2)(ω_f)
> ω_f = **5 rev/s**

**3. Neutron Star Formation:**
When a star collapses, its radius decreases dramatically while angular momentum is conserved, resulting in extremely high rotation rates.

**4. Falling Cat Problem:**
Cats can reorient themselves mid-fall while conserving angular momentum by changing their moment of inertia configuration.

### Collisions Involving Rotation

**Example:** A ball of mass m moving with velocity v strikes and sticks to a rod of mass M and length L pivoted at one end.

**Before collision:**
- Ball's angular momentum about pivot: L_i = mvL (ball hits end of rod)
- Rod at rest: L_rod = 0

**After collision:**
- System rotates together with angular velocity ω
- Combined I = I_rod + I_ball = (1/3)ML² + mL²

**Conservation:**
$$mvL = \left(\frac{1}{3}ML^2 + mL^2\right)\omega$$

$$\omega = \frac{mvL}{\frac{1}{3}ML^2 + mL^2} = \frac{mv}{(\frac{M}{3} + m)L}$$

---

## 🎯 Angular Impulse

**Angular impulse** is the rotational analog of linear impulse:

$$\vec{J}_{angular} = \int \vec{\tau} \, dt = \Delta\vec{L}$$

For constant torque:
$$J = \tau \Delta t = \Delta L$$

---

## 🌍 Precession and Gyroscopic Motion

### Gyroscope Basics

A spinning gyroscope resists changes to its orientation due to angular momentum conservation.

### Precession

When a torque is applied perpendicular to the angular momentum vector, the gyroscope **precesses** (rotates slowly about a vertical axis).

**Precession angular velocity:**
$$\Omega = \frac{\tau}{L} = \frac{Mgr}{I\omega}$$

where:
- Ω = precession angular velocity
- τ = gravitational torque = Mgr
- L = spin angular momentum = Iω
- r = distance from pivot to center of mass

> 💡 **Example:** A toy top has I = 4 × 10⁻⁴ kg·m² and spins at 30 rev/s. Its center of mass is 3 cm from the tip. If M = 0.1 kg, find the precession rate.
> 
> τ = Mgr = (0.1)(9.8)(0.03) = 0.0294 N·m
> L = Iω = (4 × 10⁻⁴)(30 × 2π) = 0.0754 kg·m²/s
> Ω = τ/L = 0.0294/0.0754 = **0.39 rad/s**

### Direction of Precession

The precession direction follows:
$$\vec{\Omega} \times \vec{L} = \vec{\tau}$$

The angular momentum vector moves in the direction of the applied torque.

---

## 📊 Summary: Linear vs. Rotational Quantities

| Linear Quantity | Symbol | Rotational Quantity | Symbol |
|-----------------|--------|---------------------|--------|
| Position | x | Angular position | θ |
| Velocity | v | Angular velocity | ω |
| Acceleration | a | Angular acceleration | α |
| Mass | m | Moment of inertia | I |
| Force | F | Torque | τ |
| Momentum | p = mv | Angular momentum | L = Iω |
| Kinetic energy | ½mv² | Rotational KE | ½Iω² |
| Work | W = Fd | Work | W = τθ |
| Power | P = Fv | Power | P = τω |
| Impulse | J = FΔt | Angular impulse | J = τΔt |
| Newton's 2nd | F = ma | Newton's 2nd | τ = Iα |
| Momentum conservation | Σp = const | Angular momentum | ΣL = const |

---

## 🧮 Vector Cross Products in 3D

### Calculating Torque from Position and Force

Given position vector $\vec{r}$ and force $\vec{F}$:

$$\vec{\tau} = \vec{r} \times \vec{F}$$

> 💡 **Example:** A force F = (3î + 2ĵ) N is applied at position r = (4î - ĵ + 2k̂) m. Find the torque.
> 
> $$\vec{\tau} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 4 & -1 & 2 \\ 3 & 2 & 0 \end{vmatrix}$$
> 
> τ_x = (-1)(0) - (2)(2) = -4
> τ_y = (2)(3) - (4)(0) = 6
> τ_z = (4)(2) - (-1)(3) = 11
> 
> $$\vec{\tau} = (-4\hat{i} + 6\hat{j} + 11\hat{k}) \text{ N·m}$$

### Angular Momentum of a Point Mass

$$\vec{L} = \vec{r} \times \vec{p} = \vec{r} \times m\vec{v}$$

> 💡 **Example:** A 2 kg particle at r = (1, 2, 0) m has velocity v = (3, 0, 4) m/s. Find its angular momentum about the origin.
> 
> p = mv = (6, 0, 8) kg·m/s
> 
> $$\vec{L} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 1 & 2 & 0 \\ 6 & 0 & 8 \end{vmatrix}$$
> 
> L_x = (2)(8) - (0)(0) = 16
> L_y = (0)(6) - (1)(8) = -8
> L_z = (1)(0) - (2)(6) = -12
> 
> $$\vec{L} = (16\hat{i} - 8\hat{j} - 12\hat{k}) \text{ kg·m}^2\text{/s}$$

---

## 🎯 Problem-Solving Strategies

### Rotational Kinematics Problems

1. Identify the given quantities (θ, ω, α, t)
2. Choose the appropriate kinematic equation
3. If α is not constant, use calculus (integration/differentiation)
4. Check units and direction conventions

### Moment of Inertia Calculations

1. Identify the axis of rotation
2. Set up the integral I = ∫ r² dm
3. Express dm in terms of geometry (dx, dr, dA, dV)
4. Express r (distance from axis) in terms of the integration variable
5. Set limits of integration
6. Evaluate the integral
7. Consider using parallel axis theorem if not rotating about center of mass

### Rotational Dynamics Problems

1. Draw a free-body diagram
2. Choose a rotation axis (often the pivot point)
3. Calculate torques about this axis (τ = r × F)
4. Apply Στ = Iα
5. For rolling: add constraint a_cm = Rα
6. Solve the system of equations

### Angular Momentum Conservation

1. Identify the system
2. Check that net external torque is zero (or negligible)
3. Calculate initial angular momentum
4. Calculate final angular momentum (different configuration)
5. Set L_i = L_f and solve

### Energy Conservation with Rotation

1. Identify initial and final states
2. Include all forms of energy:
   - Gravitational PE: Mgh
   - Translational KE: ½Mv²
   - Rotational KE: ½Iω²
3. For rolling: use v = Rω constraint
4. Apply E_i = E_f (if no non-conservative work)

---

## ⚠️ Common Mistakes to Avoid

### 1. Wrong Axis for Moment of Inertia
Always use the moment of inertia for the **actual** axis of rotation, not just any axis.

### 2. Forgetting Parallel Axis Theorem
When the axis doesn't pass through the center of mass, you must add Md².

### 3. Mixing Radians and Degrees
Kinematic equations require radians! Convert degrees to radians.

### 4. Sign Errors in Torque
Establish a positive direction (usually counterclockwise) and be consistent.

### 5. Forgetting Rolling Constraint
For rolling without slipping: v_cm = Rω and a_cm = Rα.

### 6. Wrong Reference Point for Angular Momentum
L = r × p depends on the reference point. Be consistent!

### 7. Confusing ω and Ω
- ω = spin angular velocity of the object
- Ω = precession angular velocity (for gyroscopes)

### 8. Energy in Rolling
Don't forget both translational AND rotational kinetic energy!

---

## 📝 AP Exam Tips

### Free Response Strategy

1. **Start with a diagram** showing all forces and their points of application
2. **Define positive directions** for both translation and rotation
3. **Show all work** - set up equations before plugging in numbers
4. **Check units** at every step
5. **Box your final answers** with units

### Common FRQ Types

1. **Atwood machine with pulley** - include pulley's rotational inertia
2. **Rolling objects on inclines** - energy and dynamics approaches
3. **Collisions with rotation** - angular momentum conservation
4. **Variable moment of inertia** - angular momentum conservation

### Calculator Tips

- Keep intermediate answers in memory
- Use radians mode for trigonometric functions in rotational problems
- For integration: know your calculator's numerical integration feature

---

## 🔬 Practice Problems

### Problem 1: Moment of Inertia Integral
Find the moment of inertia of a thin uniform disk of mass M and radius R about an axis tangent to the edge of the disk and perpendicular to the plane of the disk.

**Solution:**
Using parallel axis theorem:
- I_cm = ½MR² (about center, perpendicular to plane)
- d = R
- I = I_cm + Md² = ½MR² + MR² = **3/2 MR²**

### Problem 2: Rolling with Energy
A solid sphere rolls without slipping down a ramp of height h = 2 m. Find its speed at the bottom.

**Solution:**
$$Mgh = \frac{1}{2}Mv^2 + \frac{1}{2}I\omega^2 = \frac{1}{2}Mv^2 + \frac{1}{2}\left(\frac{2}{5}MR^2\right)\left(\frac{v}{R}\right)^2$$
$$gh = \frac{1}{2}v^2 + \frac{1}{5}v^2 = \frac{7}{10}v^2$$
$$v = \sqrt{\frac{10gh}{7}} = \sqrt{\frac{10(9.8)(2)}{7}} = \textbf{5.29 m/s}$$

### Problem 3: Angular Momentum Conservation
A disk of mass M = 2 kg and radius R = 0.5 m rotates at ω₀ = 10 rad/s. A ring of mass m = 1 kg and the same radius is dropped onto the disk and rotates with it. Find the final angular velocity.

**Solution:**
- I_disk = ½MR² = ½(2)(0.5)² = 0.25 kg·m²
- I_ring = mR² = (1)(0.5)² = 0.25 kg·m²

$$L_i = L_f$$
$$I_{disk}\omega_0 = (I_{disk} + I_{ring})\omega_f$$
$$(0.25)(10) = (0.25 + 0.25)\omega_f$$
$$\omega_f = \frac{2.5}{0.5} = \textbf{5 rad/s}$$

### Problem 4: Rotational Dynamics
A uniform rod of length L = 1 m and mass M = 2 kg is pivoted at one end and released from horizontal. Find its angular velocity when it reaches vertical.

**Solution:**
Center of mass falls through h = L/2 = 0.5 m

Energy conservation:
$$Mgh = \frac{1}{2}I\omega^2$$
$$Mg\frac{L}{2} = \frac{1}{2}\left(\frac{1}{3}ML^2\right)\omega^2$$
$$g\frac{L}{2} = \frac{L^2\omega^2}{6}$$
$$\omega = \sqrt{\frac{3g}{L}} = \sqrt{\frac{3(9.8)}{1}} = \textbf{5.42 rad/s}$$

### Problem 5: Combined Translation and Rotation
A yo-yo of mass M = 0.1 kg has inner radius r = 1 cm and outer radius R = 3 cm. Treat it as a solid disk of radius R. If released, find its linear acceleration.

**Solution:**
Taking torques about the center:
- Tension T acts at radius r
- τ = Tr

Equations:
$$Mg - T = Ma$$
$$Tr = I\alpha = \frac{1}{2}MR^2 \cdot \frac{a}{r}$$

From the second equation:
$$T = \frac{MR^2 a}{2r^2}$$

Substituting:
$$Mg - \frac{MR^2 a}{2r^2} = Ma$$
$$g = a\left(1 + \frac{R^2}{2r^2}\right) = a\left(1 + \frac{9}{2}\right) = 5.5a$$
$$a = \frac{g}{5.5} = \frac{9.8}{5.5} = \textbf{1.78 m/s}^2$$

---

## 🎓 Key Equations to Memorize

### Kinematics
- ω = dθ/dt
- α = dω/dt = d²θ/dt²
- v = rω
- a_t = rα
- a_c = ω²r = v²/r

### Moment of Inertia
- I = Σmr² (discrete)
- I = ∫r² dm (continuous)
- I = I_cm + Md² (parallel axis)

### Dynamics
- τ = r × F = rF sin φ
- Στ = Iα
- L = Iω = r × p
- τ = dL/dt

### Energy
- K_rot = ½Iω²
- W = ∫τ dθ
- P = τω

### Rolling
- v_cm = Rω
- a_cm = Rα
- K_total = ½Mv² + ½Iω² = ½Mv²(1 + c)

### Precession
- Ω = τ/L = Mgr/(Iω)

---

:::GUIDE:::
