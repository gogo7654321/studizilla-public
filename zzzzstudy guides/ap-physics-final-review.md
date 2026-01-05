:::GUIDE:::
unit::=Final Review
title::=⚛️ AP Physics 1 Complete Final Exam Review
desc::=Comprehensive review of all units for AP Physics 1 exam preparation
diff::=Hard
time::=120 min
tags::=physics,mechanics,final-review,ap-exam
content::=

# ⚛️ AP Physics 1: Complete Final Exam Review

> **Exam Format:** 50 MCQs (90 min) + 5 FRQs (90 min) | **Score Range:** 1-5 | **Calculator:** Allowed

---

## 📋 Essential Equations Reference Sheet

### Kinematics Equations (The Big 5)

| Equation | Missing Variable | When to Use |
|----------|------------------|-------------|
| $v = v_0 + at$ | $\Delta x$ | Finding final velocity |
| $\Delta x = v_0t + \frac{1}{2}at^2$ | $v$ | Finding displacement |
| $\Delta x = vt - \frac{1}{2}at^2$ | $v_0$ | Rare, final velocity known |
| $v^2 = v_0^2 + 2a\Delta x$ | $t$ | No time given |
| $\Delta x = \frac{1}{2}(v_0 + v)t$ | $a$ | Average velocity method |

### Vector Components
- $v_x = v\cos\theta$
- $v_y = v\sin\theta$
- $v = \sqrt{v_x^2 + v_y^2}$
- $\theta = \tan^{-1}\left(\frac{v_y}{v_x}\right)$

### Newton's Laws
- $\vec{F}_{net} = m\vec{a}$
- $\vec{F}_{12} = -\vec{F}_{21}$ (Newton's Third Law)
- Weight: $F_g = mg$ where $g = 9.8$ m/s² (or 10 m/s² for estimation)
- Friction: $f_s \leq \mu_s N$ and $f_k = \mu_k N$
- Spring Force: $F_s = -kx$ (Hooke's Law)

### Circular Motion
- Centripetal acceleration: $a_c = \frac{v^2}{r} = \omega^2 r$
- Centripetal force: $F_c = \frac{mv^2}{r} = m\omega^2 r$
- Period: $T = \frac{2\pi r}{v} = \frac{2\pi}{\omega}$
- Frequency: $f = \frac{1}{T}$

### Energy
- Kinetic Energy: $KE = \frac{1}{2}mv^2$
- Gravitational PE: $U_g = mgh$
- Elastic PE: $U_s = \frac{1}{2}kx^2$
- Work: $W = Fd\cos\theta = \Delta KE$
- Power: $P = \frac{W}{t} = Fv$
- Conservation: $E_i = E_f$ (isolated system)

### Momentum & Impulse
- Momentum: $\vec{p} = m\vec{v}$
- Impulse: $\vec{J} = \vec{F}_{avg}\Delta t = \Delta\vec{p}$
- Conservation: $\vec{p}_i = \vec{p}_f$ (no external forces)

### Rotational Motion
| Linear | Rotational | Relationship |
|--------|------------|--------------|
| $x$ | $\theta$ | $s = r\theta$ |
| $v$ | $\omega$ | $v = r\omega$ |
| $a$ | $\alpha$ | $a_t = r\alpha$ |
| $m$ | $I$ | Moment of inertia |
| $F$ | $\tau$ | $\tau = rF\sin\theta$ |
| $p = mv$ | $L = I\omega$ | Angular momentum |
| $F = ma$ | $\tau = I\alpha$ | Newton's 2nd (rotation) |

### Common Moments of Inertia
- Point mass: $I = mr^2$
- Solid cylinder/disk: $I = \frac{1}{2}mr^2$
- Hollow cylinder/hoop: $I = mr^2$
- Solid sphere: $I = \frac{2}{5}mr^2$
- Hollow sphere: $I = \frac{2}{3}mr^2$
- Rod (center): $I = \frac{1}{12}mL^2$
- Rod (end): $I = \frac{1}{3}mL^2$

### Simple Harmonic Motion
- Position: $x(t) = A\cos(\omega t + \phi)$
- Velocity: $v(t) = -A\omega\sin(\omega t + \phi)$
- Max velocity: $v_{max} = A\omega$
- Max acceleration: $a_{max} = A\omega^2$
- Mass-spring: $T = 2\pi\sqrt{\frac{m}{k}}$
- Simple pendulum: $T = 2\pi\sqrt{\frac{L}{g}}$

### Waves
- Wave speed: $v = f\lambda$
- Standing waves (string): $f_n = \frac{nv}{2L}$ (n = 1, 2, 3...)
- Standing waves (open pipe): $f_n = \frac{nv}{2L}$
- Standing waves (closed pipe): $f_n = \frac{nv}{4L}$ (n = 1, 3, 5... odd only)

---

## 🎯 Unit 1: Kinematics

### Key Concepts

**Position, Displacement, Distance**
- Position ($x$): Location relative to origin
- Displacement ($\Delta x$): Change in position (vector)
- Distance: Total path length (scalar, always positive)

**Velocity vs Speed**
- Velocity: Rate of change of position (vector)
- Speed: Magnitude of velocity (scalar)
- Average velocity: $\bar{v} = \frac{\Delta x}{\Delta t}$
- Instantaneous velocity: Slope of x-t graph

**Acceleration**
- Rate of change of velocity: $a = \frac{\Delta v}{\Delta t}$
- Constant acceleration → parabolic x-t graph
- Deceleration: Acceleration opposite to velocity direction

### Graph Interpretation

| Graph Type | Slope Represents | Area Represents |
|------------|------------------|-----------------|
| x vs t | Velocity | - |
| v vs t | Acceleration | Displacement |
| a vs t | Jerk | Change in velocity |

### Projectile Motion Strategy

**Step 1:** Separate into x and y components
- Horizontal: $a_x = 0$, constant velocity
- Vertical: $a_y = -g = -9.8$ m/s²

**Step 2:** Identify knowns
- $v_{0x} = v_0\cos\theta$
- $v_{0y} = v_0\sin\theta$

**Step 3:** Key relationships
- Time of flight: $t_{total} = \frac{2v_{0y}}{g}$ (level ground)
- Max height: $h_{max} = \frac{v_{0y}^2}{2g}$
- Range: $R = \frac{v_0^2\sin(2\theta)}{g}$

**Critical Insight:** At maximum height, $v_y = 0$ but $v_x \neq 0$

### Common Kinematics Mistakes
❌ Forgetting to use negative values for downward motion
❌ Using total velocity instead of components
❌ Confusing displacement with distance
❌ Ignoring that acceleration can be negative

---

## 🎯 Unit 2: Dynamics (Forces)

### Newton's First Law (Inertia)
- Objects at rest stay at rest
- Objects in motion stay in motion at constant velocity
- **Applies when:** $\vec{F}_{net} = 0$
- **Result:** $a = 0$, equilibrium

### Newton's Second Law
$$\vec{F}_{net} = m\vec{a}$$

- Net force causes acceleration
- Acceleration is in the direction of net force
- Mass resists acceleration (inertia)

### Newton's Third Law (Action-Reaction)
- Forces come in pairs
- Equal magnitude, opposite direction
- Act on DIFFERENT objects
- Same type of force

**Example:** You push wall → Wall pushes you

### Types of Forces

**Contact Forces:**
1. **Normal Force ($N$):** Perpendicular to surface
2. **Friction ($f$):** Parallel to surface, opposes motion
3. **Tension ($T$):** Along rope/string, pulling
4. **Applied Force ($F_{app}$):** External push/pull
5. **Spring Force ($F_s$):** $F = -kx$

**Field Forces:**
1. **Gravitational ($F_g$):** $F_g = mg$, always downward

### Free Body Diagram (FBD) Strategy

**Step 1:** Identify the object
**Step 2:** Draw all forces acting ON that object
**Step 3:** Choose coordinate system (tilted for inclines)
**Step 4:** Break forces into components
**Step 5:** Apply Newton's Second Law in each direction

### Friction

**Static Friction:** Prevents motion
- $f_s \leq \mu_s N$
- Adjusts to match applied force up to maximum

**Kinetic Friction:** During motion
- $f_k = \mu_k N$
- Constant value
- Always: $\mu_k < \mu_s$

### Inclined Planes

**Coordinate Choice:** x-axis along incline, y-axis perpendicular

**Force Components:**
- $F_{gx} = mg\sin\theta$ (down the incline)
- $F_{gy} = mg\cos\theta$ (into the incline)
- Normal force: $N = mg\cos\theta$

**Acceleration (frictionless):** $a = g\sin\theta$

**With friction:**
- $a = g(\sin\theta - \mu_k\cos\theta)$ (sliding down)
- $a = g(\sin\theta + \mu_k\cos\theta)$ (pushed up)

### Atwood Machine

Two masses connected by rope over pulley:
$$a = \frac{(m_1 - m_2)g}{m_1 + m_2}$$
$$T = \frac{2m_1m_2g}{m_1 + m_2}$$

### Elevator Problems

**Apparent Weight:** What scale reads = Normal force

| Motion | Apparent Weight |
|--------|-----------------|
| At rest or constant v | $W_{app} = mg$ |
| Accelerating up | $W_{app} = m(g + a)$ |
| Accelerating down | $W_{app} = m(g - a)$ |
| Free fall | $W_{app} = 0$ |

---

## 🎯 Unit 3: Circular Motion and Gravitation

### Uniform Circular Motion

**Key Property:** Speed constant, direction changes → acceleration exists

**Centripetal Acceleration:**
$$a_c = \frac{v^2}{r} = \omega^2 r = \frac{4\pi^2 r}{T^2}$$
- Always points toward center
- Perpendicular to velocity

**Centripetal Force:**
$$F_c = \frac{mv^2}{r}$$
- NOT a new force—it's the NET force toward center
- Can be provided by: gravity, friction, tension, normal force

### Horizontal Circular Motion Examples

**Car on Flat Curve:**
- Friction provides centripetal force
- $f = \frac{mv^2}{r}$
- Max speed: $v_{max} = \sqrt{\mu_s gr}$

**Banked Curve (no friction):**
- Normal force component provides centripetal force
- $\tan\theta = \frac{v^2}{gr}$

**Object on Rotating Platform:**
- Static friction provides centripetal force
- Object flies off when $\frac{mv^2}{r} > \mu_s mg$

### Vertical Circular Motion

**At Top of Circle:**
- Minimum speed: $v_{min} = \sqrt{gr}$ (for $N = 0$)
- $F_c = mg + N$ or $F_c = mg - N$ (depending on orientation)

**At Bottom of Circle:**
- $N - mg = \frac{mv^2}{r}$
- Tension/Normal is maximum

### Newton's Law of Universal Gravitation
$$F_g = \frac{Gm_1m_2}{r^2}$$
- $G = 6.67 \times 10^{-11}$ N·m²/kg²
- Always attractive
- Acts along line connecting centers

### Gravitational Field
$$g = \frac{GM}{r^2}$$
- Field strength at distance r from center
- At Earth's surface: $g = 9.8$ m/s²

### Satellite Motion

**Orbital Speed:**
$$v = \sqrt{\frac{GM}{r}}$$

**Orbital Period:**
$$T = 2\pi\sqrt{\frac{r^3}{GM}}$$

**Key Insight:** Orbiting = Continuous free fall. Astronauts feel "weightless" because they and the station fall at the same rate.

---

## 🎯 Unit 4: Energy

### Work

$$W = Fd\cos\theta$$

| Angle | cos θ | Work |
|-------|-------|------|
| 0° | 1 | Maximum positive |
| 90° | 0 | Zero |
| 180° | -1 | Maximum negative |

**Work by Variable Force:** Area under F vs x graph

### Work-Energy Theorem
$$W_{net} = \Delta KE = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$$

### Kinetic Energy
$$KE = \frac{1}{2}mv^2$$
- Always positive (scalar)
- Doubles when speed doubles? NO—quadruples!

### Potential Energy

**Gravitational PE:**
$$U_g = mgh$$
- Reference point is arbitrary
- Only changes in PE matter

**Elastic PE:**
$$U_s = \frac{1}{2}kx^2$$
- x = displacement from equilibrium
- Always positive

### Conservation of Mechanical Energy

**Condition:** Only conservative forces do work (gravity, spring)

$$KE_i + PE_i = KE_f + PE_f$$

$$\frac{1}{2}mv_i^2 + mgh_i + \frac{1}{2}kx_i^2 = \frac{1}{2}mv_f^2 + mgh_f + \frac{1}{2}kx_f^2$$

### Non-Conservative Forces

**When friction/air resistance present:**
$$E_i + W_{nc} = E_f$$
$$KE_i + PE_i - f_kd = KE_f + PE_f$$

### Power
$$P = \frac{W}{t} = \frac{\Delta E}{t} = Fv$$
- Unit: Watt (W) = J/s
- 1 horsepower = 746 W

### Energy Bar Charts

Visual representation of energy conservation:
- Total height of all bars must remain constant (closed system)
- Bars: KE, Ug, Us, thermal energy

### Problem-Solving Strategy for Energy

1. **Define system** (what's included?)
2. **Identify initial and final states**
3. **List energy types at each state**
4. **Check for non-conservative forces**
5. **Write conservation equation**
6. **Solve for unknown**

---

## 🎯 Unit 5: Momentum

### Linear Momentum
$$\vec{p} = m\vec{v}$$
- Vector quantity
- Direction same as velocity
- Units: kg·m/s

### Impulse
$$\vec{J} = \vec{F}_{avg}\Delta t = \Delta\vec{p}$$

**Impulse-Momentum Theorem:**
$$\vec{F}_{avg}\Delta t = m\vec{v}_f - m\vec{v}_i$$

**Graphical:** Impulse = Area under F vs t curve

### Conservation of Momentum

**Condition:** No external forces (or external forces cancel)

$$\vec{p}_{total,i} = \vec{p}_{total,f}$$
$$m_1v_{1i} + m_2v_{2i} = m_1v_{1f} + m_2v_{2f}$$

### Types of Collisions

| Type | Momentum | Kinetic Energy | Objects After |
|------|----------|----------------|---------------|
| Elastic | Conserved | Conserved | Separate |
| Inelastic | Conserved | NOT conserved | Separate |
| Perfectly Inelastic | Conserved | Maximum loss | Stick together |
| Explosion | Conserved | Increases | Separate |

### Elastic Collision Equations (1D)

$$v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}v_{1i}$$

$$v_{2f} = \frac{2m_1}{m_1 + m_2}v_{1i}$$

**Special Cases:**
- Equal masses: Objects exchange velocities
- Heavy hits light: Heavy continues, light moves fast
- Light hits heavy: Light bounces back

### Perfectly Inelastic Collision

$$v_f = \frac{m_1v_{1i} + m_2v_{2i}}{m_1 + m_2}$$

**Maximum kinetic energy loss occurs here**

### 2D Collisions

Apply conservation separately:
- x-direction: $m_1v_{1x,i} + m_2v_{2x,i} = m_1v_{1x,f} + m_2v_{2x,f}$
- y-direction: $m_1v_{1y,i} + m_2v_{2y,i} = m_1v_{1y,f} + m_2v_{2y,f}$

### Center of Mass

$$x_{cm} = \frac{m_1x_1 + m_2x_2 + ...}{m_1 + m_2 + ...}$$

**Properties:**
- Center of mass velocity: $v_{cm} = \frac{p_{total}}{m_{total}}$
- If no external force: $v_{cm}$ = constant
- Internal forces don't change $v_{cm}$

### Impulse Applications

**Airbags, Padding, Crumple Zones:**
- Increase $\Delta t$ → Decrease $F_{avg}$
- Same impulse, less force

**Catching a Ball:**
- Move hands backward to increase time
- Reduces impact force

---

## 🎯 Unit 6: Simple Harmonic Motion

### Definition of SHM
- Restoring force proportional to displacement
- $F = -kx$ (Hooke's Law form)
- Results in sinusoidal motion

### Key Parameters

| Term | Symbol | Definition |
|------|--------|------------|
| Amplitude | A | Maximum displacement from equilibrium |
| Period | T | Time for one complete cycle |
| Frequency | f | Cycles per second (Hz) |
| Angular frequency | ω | $\omega = 2\pi f = \frac{2\pi}{T}$ |

### Equations of Motion

**Position:** $x(t) = A\cos(\omega t + \phi)$

**Velocity:** $v(t) = -A\omega\sin(\omega t + \phi) = \pm\omega\sqrt{A^2 - x^2}$

**Acceleration:** $a(t) = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x$

### Extreme Values

| At | Position | Velocity | Acceleration | KE | PE |
|----|----------|----------|--------------|----|----|
| Equilibrium | 0 | $\pm v_{max}$ | 0 | Max | 0 |
| Amplitude | $\pm A$ | 0 | $\pm a_{max}$ | 0 | Max |

$$v_{max} = A\omega$$
$$a_{max} = A\omega^2$$

### Mass-Spring System

**Horizontal Spring:**
$$T = 2\pi\sqrt{\frac{m}{k}}$$

- Period independent of amplitude
- Period independent of gravity

**Vertical Spring:**
- Same period formula
- Equilibrium position shifts by $\Delta y = \frac{mg}{k}$

### Simple Pendulum

$$T = 2\pi\sqrt{\frac{L}{g}}$$

**Conditions:** Small angle ($\theta < 15°$)

**Period depends on:**
- Length L
- Gravitational field g

**Period independent of:**
- Mass
- Amplitude (for small angles)

### Energy in SHM

**Total Mechanical Energy:**
$$E = \frac{1}{2}kA^2 = \frac{1}{2}mv_{max}^2$$

**At any position:**
$$\frac{1}{2}kA^2 = \frac{1}{2}mv^2 + \frac{1}{2}kx^2$$

**Energy Graphs:**
- KE and PE oscillate between 0 and $E_{total}$
- When one is max, other is zero
- Sum is always constant

### Physical Pendulum

$$T = 2\pi\sqrt{\frac{I}{mgd}}$$

- I = moment of inertia about pivot
- d = distance from pivot to center of mass

---

## 🎯 Unit 7: Torque and Rotational Motion

### Angular Quantities

| Linear | Angular | Relationship |
|--------|---------|--------------|
| Position x | Angle θ | $s = r\theta$ |
| Velocity v | Angular velocity ω | $v = r\omega$ |
| Acceleration a | Angular acceleration α | $a_t = r\alpha$ |

**Units:**
- θ: radians (rad)
- ω: rad/s
- α: rad/s²

### Rotational Kinematics

Same form as linear:
- $\omega = \omega_0 + \alpha t$
- $\theta = \omega_0 t + \frac{1}{2}\alpha t^2$
- $\omega^2 = \omega_0^2 + 2\alpha\theta$
- $\theta = \frac{1}{2}(\omega_0 + \omega)t$

### Torque

$$\tau = rF\sin\theta = r_\perp F = rF_\perp$$

- r = distance from axis
- θ = angle between r and F
- Units: N·m (not Joules!)

**Sign Convention:**
- Counterclockwise: Positive (+)
- Clockwise: Negative (-)

### Moment of Inertia

$$I = \sum m_i r_i^2$$

**Depends on:**
- Mass distribution
- Axis of rotation

**Parallel Axis Theorem:**
$$I = I_{cm} + Md^2$$

### Newton's Second Law for Rotation
$$\tau_{net} = I\alpha$$

### Rotational Equilibrium

**Conditions:**
1. $\vec{F}_{net} = 0$ (translational)
2. $\tau_{net} = 0$ (rotational)

**Strategy:**
1. Choose pivot point (often where unknown force acts)
2. Calculate torque from each force
3. Set sum of torques = 0

### Rotational Kinetic Energy

$$KE_{rot} = \frac{1}{2}I\omega^2$$

**Rolling (without slipping):**
$$KE_{total} = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2$$

With $v = r\omega$:
$$KE_{total} = \frac{1}{2}mv^2(1 + \frac{I}{mr^2})$$

### Rolling Down Incline

**Speed at bottom (height h):**
$$v = \sqrt{\frac{2gh}{1 + \frac{I}{mr^2}}}$$

**Acceleration:**
$$a = \frac{g\sin\theta}{1 + \frac{I}{mr^2}}$$

**Objects with smaller I/mr² roll faster**
- Solid sphere fastest
- Hollow sphere slowest

### Angular Momentum

$$L = I\omega$$

**For point mass:** $L = mvr\sin\theta = mvr_\perp$

### Conservation of Angular Momentum

**Condition:** No net external torque

$$L_i = L_f$$
$$I_i\omega_i = I_f\omega_f$$

**Classic Example:** Figure skater pulling in arms
- I decreases → ω increases
- L stays constant

---

## 🎯 Unit 8: Mechanical Waves

### Wave Properties

| Property | Symbol | Definition |
|----------|--------|------------|
| Wavelength | λ | Distance for one complete cycle |
| Frequency | f | Cycles per second |
| Period | T | Time for one cycle |
| Amplitude | A | Maximum displacement |
| Wave speed | v | Speed of wave propagation |

**Fundamental Relationship:**
$$v = f\lambda$$

### Types of Waves

**Transverse Waves:**
- Particle motion ⊥ wave direction
- Examples: Light, string waves, water surface

**Longitudinal Waves:**
- Particle motion ∥ wave direction
- Example: Sound waves
- Compressions and rarefactions

### Wave on a String

$$v = \sqrt{\frac{T}{\mu}}$$

- T = tension (N)
- μ = linear mass density (kg/m)

**What affects wave speed:**
- Tension (higher T → faster)
- Mass density (higher μ → slower)

**What doesn't affect wave speed:**
- Frequency
- Amplitude

### Wave Interference

**Superposition Principle:** When waves overlap, displacements add algebraically

**Constructive Interference:**
- Waves in phase
- Amplitudes add
- Path difference = nλ (n = 0, 1, 2...)

**Destructive Interference:**
- Waves out of phase (180°)
- Amplitudes subtract
- Path difference = (n + ½)λ

### Standing Waves

Created by interference of two identical waves traveling opposite directions

**Characteristics:**
- Nodes: Points of zero displacement
- Antinodes: Points of maximum displacement
- Energy doesn't propagate

### Standing Waves on Strings (Fixed Ends)

$$\lambda_n = \frac{2L}{n}$$
$$f_n = \frac{nv}{2L} = nf_1$$

| Harmonic | n | Nodes | Antinodes |
|----------|---|-------|-----------|
| 1st (fundamental) | 1 | 2 | 1 |
| 2nd | 2 | 3 | 2 |
| 3rd | 3 | 4 | 3 |
| nth | n | n+1 | n |

### Standing Waves in Tubes

**Open Pipe (both ends open):**
$$f_n = \frac{nv}{2L}$$ (n = 1, 2, 3...)
- All harmonics present
- Antinodes at both ends

**Closed Pipe (one end closed):**
$$f_n = \frac{nv}{4L}$$ (n = 1, 3, 5... odd only)
- Only odd harmonics
- Node at closed end, antinode at open end

### Beats

When two waves of slightly different frequencies interfere:
$$f_{beat} = |f_1 - f_2|$$

### Sound

**Speed of Sound in Air:**
- ~343 m/s at 20°C
- Increases with temperature

**Intensity:** Power per unit area
$$I = \frac{P}{A} = \frac{P}{4\pi r^2}$$

---

## 📝 Free Body Diagram Mastery

### Step-by-Step FBD Process

1. **Isolate the object** - Draw it as a dot or simple shape
2. **Identify all forces** - Only forces ON the object
3. **Draw force vectors** - Start from center, correct direction
4. **Label each force** - Use standard notation
5. **Choose coordinate system** - Align with acceleration direction

### Common Force Pairs to Remember

| Situation | Forces to Include |
|-----------|-------------------|
| Object on surface | Weight, Normal |
| Object with friction | Add friction force |
| Connected objects | Tension in rope/string |
| Spring attached | Spring force |
| Circular motion | Identify centripetal source |

### FBD Mistakes to Avoid

❌ Including forces the object exerts on others
❌ Forgetting weight
❌ Drawing normal force when object not in contact
❌ Making normal force always equal to weight
❌ Including "ma" as a force
❌ Drawing friction in wrong direction

---

## 🧮 Problem-Solving Strategies

### General Approach (GUESS Method)

**G** - Given: List known quantities
**U** - Unknown: Identify what to find
**E** - Equation: Select appropriate formula
**S** - Substitute: Plug in values with units
**S** - Solve: Calculate and check units

### Strategy by Topic

**Kinematics:**
1. Identify known variables (need 3 to solve)
2. List unknowns
3. Select equation missing the unwanted unknown
4. For 2D: Treat x and y independently

**Dynamics:**
1. Draw FBD for each object
2. Choose coordinate system
3. Write ΣF = ma for each direction
4. Solve system of equations

**Energy:**
1. Define system
2. Identify initial and final states
3. List energy types present
4. Apply conservation (or include work by non-conservative forces)

**Momentum:**
1. Identify system (should be isolated)
2. Write p_initial = p_final
3. For 2D: Apply separately to x and y

**Rotation:**
1. Draw extended FBD
2. Choose rotation axis (often at pivot or where force is unknown)
3. Calculate torques (positive CCW, negative CW)
4. Apply Στ = Iα or Στ = 0

---

## 📊 Common Problem Patterns

### Pattern 1: Connected Objects

**Setup:** Two masses connected by string

**Approach:**
1. Draw FBD for each mass
2. Recognize they have same acceleration magnitude
3. Write Newton's 2nd for each
4. Add equations to eliminate tension

### Pattern 2: Inclined Plane

**Key:** Tilt coordinate system
- x-axis: Along incline
- y-axis: Perpendicular to incline

**Standard Results:**
- $a = g\sin\theta$ (frictionless)
- $a = g(\sin\theta - \mu\cos\theta)$ (friction, moving down)

### Pattern 3: Projectile Motion

**Strategy:**
1. Separate x and y components
2. Horizontal: $a_x = 0$, constant velocity
3. Vertical: $a_y = -g$
4. Time connects both dimensions

### Pattern 4: Conservation Problems

**Energy:** Use when asking about speed at different heights
**Momentum:** Use for collisions and explosions
**Angular Momentum:** Use when moment of inertia changes

### Pattern 5: Circular Motion

1. Identify what provides centripetal force
2. Set that force equal to $\frac{mv^2}{r}$
3. Solve for unknown

### Pattern 6: Oscillations

**Finding period:** Match system to formula
- Mass-spring: $T = 2\pi\sqrt{m/k}$
- Pendulum: $T = 2\pi\sqrt{L/g}$

**Finding speed at position x:**
$$v = \omega\sqrt{A^2 - x^2}$$

---

## 🔢 Calculator Tips

### Before the Exam
- Know your calculator well
- Practice unit conversions
- Verify trig mode (degrees vs radians)

### Quick Calculations

**Useful Approximations:**
- $\pi \approx 3.14$
- $\sqrt{2} \approx 1.41$
- $\sqrt{3} \approx 1.73$
- $g \approx 10$ m/s² (for estimation)

### Unit Conversions
- 1 km = 1000 m
- 1 hour = 3600 s
- 1 kg = 1000 g
- 1 revolution = 2π radians

### Checking Answers

1. **Units analysis** - Final answer should have correct units
2. **Order of magnitude** - Is answer reasonable?
3. **Limiting cases** - Does formula work at extremes?
4. **Direction** - Vector quantities need direction

---

## 📝 FRQ Templates

### Template 1: Derive an Expression

**Structure:**
1. State the principle/law being used
2. Write the general equation
3. Apply to specific situation
4. Show algebra steps clearly
5. Box final answer

**Example phrases:**
- "Using conservation of energy..."
- "Applying Newton's second law..."
- "By the impulse-momentum theorem..."

### Template 2: Explain/Justify

**Structure:**
1. State your claim
2. Provide physics reasoning
3. Connect to evidence
4. Use specific terms

**Claim-Evidence-Reasoning:**
- Claim: What you conclude
- Evidence: What data/info supports it
- Reasoning: What physics principle connects them

### Template 3: Design an Experiment

**Required Elements:**
1. **Procedure:** Step-by-step instructions
2. **Measurements:** What to measure, how
3. **Data Analysis:** How to graph/analyze
4. **Determination:** How to extract answer

**Always include:**
- Independent variable
- Dependent variable
- Control variables
- Multiple trials

### Template 4: Graphical Analysis

**Common Tasks:**
1. Identify relationship (linear, quadratic, etc.)
2. Determine slope meaning
3. Find intercept meaning
4. Calculate values from graph

**Remember:**
- Slope = Δy/Δx
- Use units to interpret meaning
- Area under curve often has physical meaning

---

## ⚠️ Common Exam Mistakes

### Conceptual Errors

1. **Force and Motion**
   - ❌ Objects need force to move
   - ✓ Objects need force to accelerate

2. **Circular Motion**
   - ❌ Centrifugal force is real
   - ✓ Centripetal force is the net force toward center

3. **Energy**
   - ❌ Energy is used up
   - ✓ Energy is transferred or transformed

4. **Momentum**
   - ❌ Momentum is same as energy
   - ✓ Different concepts with different conservation conditions

### Calculation Errors

1. **Sign Errors**
   - Be consistent with coordinate system
   - Acceleration due to gravity is negative when up is positive

2. **Unit Errors**
   - Convert to SI units before calculating
   - Check that answer units make sense

3. **Vector Errors**
   - Don't add magnitudes directly for 2D
   - Use components

4. **Formula Errors**
   - Know when to use which kinematic equation
   - Check if energy is conserved before using

---

## 📚 Quick Reference: When to Use What

| Scenario | Use |
|----------|-----|
| Finding velocity without time | $v^2 = v_0^2 + 2a\Delta x$ |
| Object at rest or constant v | Equilibrium: ΣF = 0 |
| Multiple objects interacting | Separate FBDs, common a |
| Heights and speeds | Energy conservation |
| Before/after collision | Momentum conservation |
| Spinning object speeds up/slows | Angular momentum |
| Periodic motion | SHM equations, T formulas |
| Waves on string | $v = \sqrt{T/\mu}$ |
| Standing waves | Boundary conditions |

---

## 🏆 Final Exam Checklist

### Before the Exam
- [ ] Review all formulas
- [ ] Practice FBD drawing
- [ ] Review common problem types
- [ ] Get good rest

### During MCQ Section
- [ ] Read carefully - note "which is NOT"
- [ ] Eliminate wrong answers
- [ ] Use estimation when possible
- [ ] Flag and return to hard questions
- [ ] Never leave blank (no penalty)

### During FRQ Section
- [ ] Read entire problem first
- [ ] Identify what physics applies
- [ ] Show all work
- [ ] Include units
- [ ] Box final answers
- [ ] Partial credit exists - write something!

### Key Reminders
- [ ] Check calculator mode (degrees/radians)
- [ ] Watch significant figures
- [ ] Use given variables unless numbers specified
- [ ] Justify answers with physics principles
- [ ] Manage time - don't get stuck

---

## 🎯 Final Summary: The Big Ideas

### Big Idea 1: Objects interact through forces
- Newton's Laws govern motion
- Forces come in pairs
- Net force causes acceleration

### Big Idea 2: Interactions are described by fields
- Gravitational field: $g = GM/r^2$
- Fields exert forces on objects within them

### Big Idea 3: Interactions result in changes and conservation
- Energy can be transferred but not created/destroyed
- Momentum is conserved in isolated systems
- Angular momentum is conserved when no external torque

### Big Idea 4: Waves transfer energy without matter transfer
- Mechanical waves need medium
- Superposition and interference
- Standing waves at boundaries

---

**Good luck on your AP Physics 1 Exam! Remember: Physics is about understanding the principles, not just memorizing formulas.** 🚀

:::GUIDE:::
