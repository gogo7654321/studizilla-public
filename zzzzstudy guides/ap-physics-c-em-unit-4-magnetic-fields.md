:::GUIDE:::
unit::=4
title::=🧲 Unit 4: Magnetic Fields
desc::=Magnetic forces and Ampere's Law
diff::=Hard
time::=60 min
tags::=physics,magnetism,ampere-law,calculus
content::=

# 🧲 Unit 4: Magnetic Fields

## 📚 Overview

Unit 4 explores the fundamental nature of magnetic fields, their sources, and their effects on moving charges and current-carrying conductors. This unit requires strong calculus skills for applying the Biot-Savart Law and Ampere's Law.

---

## 🎯 Key Concepts

### 4.1 Sources of Magnetic Fields

**Magnetic fields are created by:**
- Moving electric charges
- Electric currents
- Permanent magnets (atomic current loops)

**Key insight:** There are no magnetic monopoles—magnetic field lines always form closed loops.

---

## 🧮 The Biot-Savart Law

### Fundamental Form

The Biot-Savart Law gives the magnetic field $d\vec{B}$ due to a current element $Id\vec{l}$:

$$d\vec{B} = \frac{\mu_0}{4\pi} \frac{I \, d\vec{l} \times \hat{r}}{r^2}$$

Where:
- $\mu_0 = 4\pi \times 10^{-7} \text{ T·m/A}$ (permeability of free space)
- $I$ = current in the wire
- $d\vec{l}$ = infinitesimal length element in direction of current
- $\hat{r}$ = unit vector from source to field point
- $r$ = distance from source to field point

### Magnitude Form

$$dB = \frac{\mu_0}{4\pi} \frac{I \, dl \sin\theta}{r^2}$$

Where $\theta$ is the angle between $d\vec{l}$ and $\hat{r}$.

---

## 📐 Biot-Savart Law Applications

### Magnetic Field of a Long Straight Wire

For an infinitely long straight wire carrying current $I$:

$$B = \frac{\mu_0 I}{2\pi r}$$

**Direction:** Use the right-hand rule—thumb points in current direction, fingers curl in direction of $\vec{B}$.

**Derivation sketch:**
1. Set up coordinates with wire along z-axis
2. For element at position $z$: $d\vec{l} = dz\hat{z}$
3. Distance: $r = \sqrt{x^2 + z^2}$
4. Integrate from $-\infty$ to $+\infty$

$$B = \frac{\mu_0 I}{4\pi} \int_{-\infty}^{\infty} \frac{dz \sin\theta}{(x^2 + z^2)}$$

Using $\sin\theta = \frac{x}{\sqrt{x^2 + z^2}}$ and substituting:

$$B = \frac{\mu_0 I}{2\pi x}$$

---

### Magnetic Field at Center of Circular Loop

For a circular loop of radius $R$ carrying current $I$:

$$B = \frac{\mu_0 I}{2R}$$

**Direction:** Use right-hand rule—curl fingers in direction of current, thumb points in direction of $\vec{B}$.

---

### Magnetic Field on Axis of Circular Loop

At distance $x$ from the center along the axis:

$$B = \frac{\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$$

**Special cases:**
- At center ($x = 0$): $B = \frac{\mu_0 I}{2R}$
- Far from loop ($x >> R$): $B \approx \frac{\mu_0 I R^2}{2x^3}$ (magnetic dipole field)

---

### Magnetic Field of a Solenoid

For a solenoid with $n$ turns per unit length:

**Inside (ideal solenoid):**
$$B = \mu_0 n I$$

**Outside:** $B \approx 0$

**Derivation:** Apply Ampere's Law to rectangular loop straddling the solenoid wall.

---

### Magnetic Field of a Toroid

For a toroid with $N$ total turns:

**Inside the toroid at radius $r$:**
$$B = \frac{\mu_0 N I}{2\pi r}$$

**Outside:** $B = 0$

---

## ⭕ Ampere's Law

### Statement

$$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc}$$

The line integral of the magnetic field around any closed loop equals $\mu_0$ times the total current enclosed by the loop.

### When to Use Ampere's Law

Ampere's Law is most useful when there is **high symmetry**:
- Infinite straight wires
- Infinite planes of current
- Solenoids
- Toroids
- Coaxial cables

---

## 🔄 Ampere's Law Applications

### Long Straight Wire (Revisited)

Choose a circular Amperian loop of radius $r$ centered on the wire:

$$\oint \vec{B} \cdot d\vec{l} = B(2\pi r) = \mu_0 I$$

$$B = \frac{\mu_0 I}{2\pi r}$$

---

### Inside a Current-Carrying Wire

For a wire of radius $R$ with uniform current density:

**Inside ($r < R$):**
$$B = \frac{\mu_0 I r}{2\pi R^2}$$

**Outside ($r > R$):**
$$B = \frac{\mu_0 I}{2\pi r}$$

The field increases linearly inside and decreases as $1/r$ outside.

---

### Infinite Sheet of Current

For a sheet with surface current density $K$ (A/m):

$$B = \frac{\mu_0 K}{2}$$

Direction is parallel to the sheet, perpendicular to current flow.

---

### Coaxial Cable

For a coaxial cable with inner conductor (radius $a$, current $I$) and outer conductor (inner radius $b$, outer radius $c$, current $-I$):

| Region | Magnetic Field |
|--------|---------------|
| $r < a$ | $B = \frac{\mu_0 I r}{2\pi a^2}$ |
| $a < r < b$ | $B = \frac{\mu_0 I}{2\pi r}$ |
| $b < r < c$ | $B = \frac{\mu_0 I}{2\pi r}\left(1 - \frac{r^2 - b^2}{c^2 - b^2}\right)$ |
| $r > c$ | $B = 0$ |

---

## ⚡ Magnetic Force on Moving Charges

### The Lorentz Force

$$\vec{F} = q\vec{v} \times \vec{B}$$

**Magnitude:** $F = qvB\sin\theta$

Where $\theta$ is the angle between $\vec{v}$ and $\vec{B}$.

### Key Properties

1. **Force is perpendicular** to both $\vec{v}$ and $\vec{B}$
2. **No work done** by magnetic force ($\vec{F} \perp \vec{v}$)
3. **Kinetic energy unchanged**—only direction changes
4. Force is zero if $\vec{v} \parallel \vec{B}$

---

## 🔵 Motion of Charged Particles in Magnetic Fields

### Circular Motion (v ⊥ B)

When a charged particle moves perpendicular to a uniform magnetic field:

**Radius of circular path:**
$$r = \frac{mv}{qB}$$

**Period:**
$$T = \frac{2\pi m}{qB}$$

**Cyclotron frequency:**
$$f = \frac{qB}{2\pi m}$$

**Angular frequency:**
$$\omega = \frac{qB}{m}$$

Note: Period and frequency are independent of velocity!

---

### Helical Motion (v at angle to B)

When velocity has components both parallel and perpendicular to $\vec{B}$:

- **Parallel component:** Unchanged (no force)
- **Perpendicular component:** Circular motion

**Result:** Helical path with:
- Radius: $r = \frac{mv_\perp}{qB}$
- Pitch: $p = v_\parallel T = \frac{2\pi m v_\parallel}{qB}$

---

### Velocity Selector

Crossed electric and magnetic fields can select particles by velocity:

When $\vec{E} \perp \vec{B}$, particles pass through undeflected if:

$$v = \frac{E}{B}$$

This works regardless of charge or mass.

---

### Mass Spectrometer

Combines velocity selector with deflection region:

1. Velocity selector ensures all particles have $v = E/B_1$
2. Deflection region: particles curve with $r = \frac{mv}{qB_2}$

**Mass determination:**
$$m = \frac{qB_1 B_2 r}{E}$$

---

## 🔌 Magnetic Force on Current-Carrying Conductors

### Force on a Straight Wire

$$\vec{F} = I\vec{L} \times \vec{B}$$

**Magnitude:** $F = BIL\sin\theta$

Where:
- $I$ = current
- $L$ = length of wire in field
- $\theta$ = angle between wire and field

---

### Force on a Curved Wire

For an arbitrary current-carrying wire:

$$\vec{F} = \int I \, d\vec{l} \times \vec{B}$$

For a uniform field, this simplifies to:

$$\vec{F} = I\vec{L}_{eff} \times \vec{B}$$

Where $\vec{L}_{eff}$ is the vector from start to end of wire.

---

### Force Between Parallel Wires

Two parallel wires carrying currents $I_1$ and $I_2$ separated by distance $d$:

**Force per unit length:**
$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$$

- **Currents in same direction:** Attractive
- **Currents in opposite directions:** Repulsive

This defines the ampere in SI units!

---

## 🔄 Torque on Current Loops

### Magnetic Dipole Moment

$$\vec{\mu} = NIA\hat{n}$$

Where:
- $N$ = number of turns
- $I$ = current
- $A$ = area of loop
- $\hat{n}$ = unit normal to loop (right-hand rule)

---

### Torque on a Magnetic Dipole

$$\vec{\tau} = \vec{\mu} \times \vec{B}$$

**Magnitude:** $\tau = \mu B \sin\theta = NIAB\sin\theta$

Where $\theta$ is the angle between $\vec{\mu}$ and $\vec{B}$.

---

### Potential Energy of a Magnetic Dipole

$$U = -\vec{\mu} \cdot \vec{B} = -\mu B \cos\theta$$

- **Minimum energy:** $\vec{\mu} \parallel \vec{B}$ ($\theta = 0$)
- **Maximum energy:** $\vec{\mu}$ antiparallel to $\vec{B}$ ($\theta = 180°$)

---

## 🌀 Magnetic Flux

### Definition

$$\Phi_B = \int \vec{B} \cdot d\vec{A}$$

For a uniform field:
$$\Phi_B = BA\cos\theta$$

**Units:** Weber (Wb) = T·m²

---

### Gauss's Law for Magnetism

$$\oint \vec{B} \cdot d\vec{A} = 0$$

The net magnetic flux through any closed surface is zero.

**Physical meaning:** There are no magnetic monopoles. Magnetic field lines always close on themselves.

---

## 📊 Comparison: Electric vs Magnetic

| Property | Electric Field | Magnetic Field |
|----------|---------------|----------------|
| Source | Charges | Moving charges/currents |
| Monopoles | Yes (+ and −) | No |
| Field lines | Begin/end on charges | Always closed loops |
| Force on charge | $\vec{F} = q\vec{E}$ | $\vec{F} = q\vec{v} \times \vec{B}$ |
| Work on charge | Can do work | Cannot do work |
| Gauss's Law | $\oint \vec{E} \cdot d\vec{A} = \frac{Q}{\epsilon_0}$ | $\oint \vec{B} \cdot d\vec{A} = 0$ |

---

## 🧪 Practice Problems

### Problem 1: Biot-Savart Application

A semicircular wire of radius $R$ carries current $I$. Find the magnetic field at the center.

**Solution:**
For a full circle: $B = \frac{\mu_0 I}{2R}$
For a semicircle: $B = \frac{\mu_0 I}{4R}$

Direction: Into or out of page (use right-hand rule based on current direction).

---

### Problem 2: Ampere's Law with Non-uniform Current

A long cylindrical conductor of radius $R$ carries current with density $J = J_0(r/R)$.

Find $B(r)$ for $r < R$ and $r > R$.

**Solution:**

Total current: $I = \int_0^R J \cdot 2\pi r \, dr = \frac{2\pi J_0 R^2}{3}$

For $r < R$:
$I_{enc} = \int_0^r J_0 \frac{r'}{R} \cdot 2\pi r' \, dr' = \frac{2\pi J_0 r^3}{3R}$

$$B = \frac{\mu_0 J_0 r^2}{3R}$$

For $r > R$:
$$B = \frac{\mu_0 J_0 R^2}{3r}$$

---

### Problem 3: Charged Particle Motion

A proton enters a region of uniform magnetic field $B = 0.5$ T perpendicular to its velocity of $3 \times 10^6$ m/s.

Find: (a) radius, (b) period, (c) kinetic energy after one revolution.

**Solution:**

(a) $r = \frac{mv}{qB} = \frac{(1.67 \times 10^{-27})(3 \times 10^6)}{(1.6 \times 10^{-19})(0.5)} = 0.063$ m

(b) $T = \frac{2\pi m}{qB} = \frac{2\pi(1.67 \times 10^{-27})}{(1.6 \times 10^{-19})(0.5)} = 1.3 \times 10^{-7}$ s

(c) Kinetic energy is unchanged! Magnetic force does no work.

---

### Problem 4: Current Loop Torque

A rectangular loop (3 cm × 5 cm) with 100 turns carries 2 A in a 0.8 T field. The plane of the loop makes a 30° angle with the field.

Find the torque.

**Solution:**

Angle between $\vec{\mu}$ and $\vec{B}$: $\theta = 90° - 30° = 60°$

$\mu = NIA = (100)(2)(0.03 \times 0.05) = 0.30$ A·m²

$\tau = \mu B \sin\theta = (0.30)(0.8)\sin 60° = 0.21$ N·m

---

### Problem 5: Magnetic Field of Coaxial Cable

A coaxial cable has an inner conductor of radius 2 mm carrying 5 A. The outer conductor has inner radius 6 mm and outer radius 8 mm, carrying 5 A in the opposite direction.

Find $B$ at: (a) $r = 1$ mm, (b) $r = 4$ mm, (c) $r = 10$ mm

**Solution:**

(a) Inside inner conductor:
$B = \frac{\mu_0 I r}{2\pi a^2} = \frac{(4\pi \times 10^{-7})(5)(0.001)}{2\pi(0.002)^2} = 2.5 \times 10^{-4}$ T

(b) Between conductors:
$B = \frac{\mu_0 I}{2\pi r} = \frac{(4\pi \times 10^{-7})(5)}{2\pi(0.004)} = 2.5 \times 10^{-4}$ T

(c) Outside both conductors:
$B = 0$ (net enclosed current = 0)

---

## 🔑 Key Formulas Summary

### Biot-Savart Law
$$d\vec{B} = \frac{\mu_0}{4\pi} \frac{I \, d\vec{l} \times \hat{r}}{r^2}$$

### Ampere's Law
$$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc}$$

### Common Magnetic Fields

| Configuration | Magnetic Field |
|--------------|----------------|
| Long straight wire | $B = \frac{\mu_0 I}{2\pi r}$ |
| Center of circular loop | $B = \frac{\mu_0 I}{2R}$ |
| Axis of circular loop | $B = \frac{\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$ |
| Inside solenoid | $B = \mu_0 n I$ |
| Inside toroid | $B = \frac{\mu_0 N I}{2\pi r}$ |

### Forces and Torques

| Quantity | Formula |
|----------|---------|
| Force on moving charge | $\vec{F} = q\vec{v} \times \vec{B}$ |
| Force on current | $\vec{F} = I\vec{L} \times \vec{B}$ |
| Force between parallel wires | $\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$ |
| Magnetic moment | $\vec{\mu} = NIA\hat{n}$ |
| Torque on dipole | $\vec{\tau} = \vec{\mu} \times \vec{B}$ |
| Potential energy | $U = -\vec{\mu} \cdot \vec{B}$ |

### Charged Particle Motion

| Quantity | Formula |
|----------|---------|
| Cyclotron radius | $r = \frac{mv}{qB}$ |
| Cyclotron period | $T = \frac{2\pi m}{qB}$ |
| Cyclotron frequency | $f = \frac{qB}{2\pi m}$ |

### Magnetic Flux
$$\Phi_B = \int \vec{B} \cdot d\vec{A}$$

### Gauss's Law for Magnetism
$$\oint \vec{B} \cdot d\vec{A} = 0$$

---

## ✅ AP Exam Tips

1. **Right-hand rules are essential!**
   - For Biot-Savart: Point fingers from $d\vec{l}$ to $\hat{r}$, thumb gives $d\vec{B}$
   - For force: Fingers from $\vec{v}$ to $\vec{B}$, thumb gives $\vec{F}$ (for positive charge)
   - For current loops: Curl fingers with current, thumb gives $\vec{\mu}$

2. **Know when to use each law:**
   - Biot-Savart: Any configuration (but harder to integrate)
   - Ampere's Law: High symmetry only

3. **Common mistakes to avoid:**
   - Forgetting magnetic force does no work
   - Confusing $\vec{\mu}$ direction with $\vec{B}$ direction
   - Not accounting for current direction in parallel wire problems

4. **Units check:** $[B] = \frac{\text{T·m/A} \cdot \text{A}}{\text{m}} = \text{T}$ ✓

5. **Vector nature:** Always consider direction, not just magnitude!

---

## 📝 Quick Reference: Right-Hand Rules

### Rule 1: Magnetic Field Around a Wire
- Thumb: Direction of current
- Fingers curl: Direction of magnetic field

### Rule 2: Force on a Moving Charge
- Fingers: Point from $\vec{v}$ toward $\vec{B}$
- Thumb: Direction of force (for + charge)
- For negative charge: Reverse the force direction

### Rule 3: Magnetic Moment of a Loop
- Fingers: Curl with current direction
- Thumb: Direction of magnetic moment $\vec{\mu}$

### Rule 4: Biot-Savart Law
- Fingers: Point from $d\vec{l}$ toward $\hat{r}$
- Thumb: Direction of $d\vec{B}$

---

## 🎓 Conceptual Understanding Check

1. **Why do magnetic field lines always form closed loops?**
   Because there are no magnetic monopoles—every north pole is accompanied by a south pole.

2. **Why doesn't a magnetic force change a particle's kinetic energy?**
   Because $\vec{F} \perp \vec{v}$, so $P = \vec{F} \cdot \vec{v} = 0$. The force only changes direction.

3. **Why is the magnetic field zero outside a coaxial cable?**
   The currents in the inner and outer conductors are equal and opposite, so $I_{enc} = 0$ for any Amperian loop outside.

4. **Why does a current loop align with an external magnetic field?**
   The torque $\vec{\tau} = \vec{\mu} \times \vec{B}$ drives the loop toward minimum energy configuration where $\vec{\mu} \parallel \vec{B}$.

5. **What determines the pitch of a helical path?**
   The component of velocity parallel to $\vec{B}$, which is unaffected by the magnetic force.

---

:::GUIDE:::
