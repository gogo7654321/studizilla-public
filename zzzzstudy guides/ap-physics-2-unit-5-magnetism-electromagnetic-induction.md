:::GUIDE:::
unit::=5
title::=🧲 Unit 5: Magnetism and Electromagnetic Induction
desc::=Master magnetic forces, Faraday's law, and induced EMF
diff::=Hard
time::=60 min
tags::=physics-2,magnetism,induction,faraday
content::=

# 🧲 Unit 5: Magnetism and Electromagnetic Induction

## Overview

This unit explores the fascinating world of magnetism and its deep connection to electricity. You'll learn how magnetic fields exert forces on moving charges and currents, how changing magnetic fields create electric fields (electromagnetic induction), and the fundamental laws governing these phenomena. These concepts form the foundation for understanding electric motors, generators, transformers, and much of modern technology.

---

# 📚 Part 1: Magnetic Fields

## 1.1 What is a Magnetic Field?

A **magnetic field** is a vector field that describes the magnetic influence on moving electric charges, electric currents, and magnetic materials. Unlike electric fields, which can originate from stationary charges, magnetic fields are produced by:

1. **Moving electric charges** (electric currents)
2. **Permanent magnets** (due to aligned electron spins)
3. **Changing electric fields** (electromagnetic waves)

### Key Properties of Magnetic Fields

| Property | Description |
|----------|-------------|
| Symbol | **B** (bold for vector) or B (magnitude) |
| SI Unit | Tesla (T) = kg/(A·s²) |
| Alternative Unit | Gauss (G), where 1 T = 10,000 G |
| Direction | From North to South pole (external to magnet) |

### Magnetic Field Lines

- **Always form closed loops** (no magnetic monopoles exist)
- Point from **North to South** outside the magnet
- Point from **South to North** inside the magnet
- **Never cross** each other
- **Density** indicates field strength

> 💡 **Key Insight:** Earth's magnetic field is approximately 25-65 μT (0.25-0.65 G) at the surface.

## 1.2 Sources of Magnetic Fields

### Long Straight Wire

A current-carrying wire produces circular magnetic field lines:

$$B = \frac{\mu_0 I}{2\pi r}$$

Where:
- $\mu_0 = 4\pi \times 10^{-7}$ T·m/A (permeability of free space)
- $I$ = current (A)
- $r$ = perpendicular distance from wire (m)

**Right-Hand Rule for Wires:**
- Point thumb in direction of current
- Fingers curl in direction of magnetic field

### Circular Loop

At the center of a circular loop of radius R:

$$B = \frac{\mu_0 I}{2R}$$

For N turns (coil):

$$B = \frac{\mu_0 N I}{2R}$$

### Solenoid

Inside a long solenoid (uniform field):

$$B = \mu_0 n I = \frac{\mu_0 N I}{L}$$

Where:
- $n$ = turns per unit length (N/L)
- $N$ = total number of turns
- $L$ = length of solenoid

> 📝 **Note:** The field inside a solenoid is uniform and parallel to the axis. Outside, it's approximately zero.

---

# 📚 Part 2: Magnetic Force on Moving Charges

## 2.1 The Lorentz Force

When a charged particle moves through a magnetic field, it experiences a force:

$$\vec{F} = q\vec{v} \times \vec{B}$$

The magnitude is:

$$F = qvB\sin\theta$$

Where:
- $q$ = charge (C)
- $v$ = velocity (m/s)
- $B$ = magnetic field (T)
- $\theta$ = angle between $\vec{v}$ and $\vec{B}$

### Key Characteristics

| Condition | Result |
|-----------|--------|
| $\vec{v} \parallel \vec{B}$ (θ = 0° or 180°) | F = 0 (no force) |
| $\vec{v} \perp \vec{B}$ (θ = 90°) | F = qvB (maximum force) |
| Charge at rest (v = 0) | F = 0 (no force) |

### Right-Hand Rule for Charges

1. Point fingers in direction of velocity $\vec{v}$
2. Curl fingers toward $\vec{B}$
3. Thumb points in direction of $\vec{F}$ (for positive charges)
4. **For negative charges, reverse the direction**

> ⚠️ **Important:** The magnetic force is always perpendicular to both velocity and magnetic field. It does **no work** on the particle!

## 2.2 Motion of Charged Particles in Magnetic Fields

### Circular Motion

When $\vec{v} \perp \vec{B}$, the particle moves in a circle:

The magnetic force provides centripetal acceleration:

$$qvB = \frac{mv^2}{r}$$

Solving for the radius:

$$r = \frac{mv}{qB}$$

**Period of revolution:**

$$T = \frac{2\pi r}{v} = \frac{2\pi m}{qB}$$

**Cyclotron frequency:**

$$f = \frac{1}{T} = \frac{qB}{2\pi m}$$

> 💡 **Key Insight:** The period and frequency are **independent of velocity**! This is the principle behind the cyclotron particle accelerator.

### Helical Motion

When velocity has components both parallel and perpendicular to B:

- **Parallel component:** Unchanged (no force)
- **Perpendicular component:** Circular motion

Result: **Helical (spiral) path** along the field direction

**Pitch of helix:**

$$p = v_{\parallel} T = v\cos\theta \cdot \frac{2\pi m}{qB}$$

## 2.3 Applications

### Velocity Selector

Crossed electric and magnetic fields select particles of specific velocity:

$$v = \frac{E}{B}$$

Only particles with this velocity pass through undeflected.

### Mass Spectrometer

Separates ions by mass-to-charge ratio:

$$\frac{m}{q} = \frac{rB}{v} = \frac{rB^2}{E}$$

### Hall Effect

A current-carrying conductor in a magnetic field develops a transverse voltage:

$$V_H = \frac{IB}{nqt}$$

Where:
- $t$ = thickness of conductor
- $n$ = charge carrier density

---

# 📚 Part 3: Magnetic Force on Current-Carrying Wires

## 3.1 Force on a Straight Wire

Since current is moving charge, a current-carrying wire in a magnetic field experiences a force:

$$\vec{F} = I\vec{L} \times \vec{B}$$

Magnitude:

$$F = BIL\sin\theta$$

Where:
- $I$ = current (A)
- $L$ = length of wire in the field (m)
- $\theta$ = angle between wire and field

### Right-Hand Rule for Current

1. Point fingers in direction of current $I$
2. Curl toward $\vec{B}$
3. Thumb points in direction of $\vec{F}$

## 3.2 Force Between Parallel Wires

Two parallel wires carrying currents exert forces on each other:

$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$$

Where $d$ is the distance between wires.

| Currents | Force |
|----------|-------|
| Same direction | **Attractive** |
| Opposite direction | **Repulsive** |

> 📝 **Historical Note:** This relationship defines the SI unit of current (ampere).

## 3.3 Torque on a Current Loop

A rectangular loop in a magnetic field experiences a torque:

$$\tau = NIAB\sin\theta$$

Where:
- $N$ = number of turns
- $A$ = area of loop
- $\theta$ = angle between loop normal and B

### Magnetic Dipole Moment

$$\vec{\mu} = NI\vec{A}$$

The torque can be written as:

$$\vec{\tau} = \vec{\mu} \times \vec{B}$$

**Potential energy:**

$$U = -\vec{\mu} \cdot \vec{B} = -\mu B\cos\theta$$

| Position | Energy | Stability |
|----------|--------|-----------|
| $\vec{\mu} \parallel \vec{B}$ | Minimum ($U = -\mu B$) | Stable equilibrium |
| $\vec{\mu} \perp \vec{B}$ | Zero ($U = 0$) | Unstable |
| $\vec{\mu}$ antiparallel to $\vec{B}$ | Maximum ($U = +\mu B$) | Unstable equilibrium |

> 💡 **Application:** This is the principle behind electric motors!

---

# 📚 Part 4: Biot-Savart Law

## 4.1 The Biot-Savart Law

The Biot-Savart law gives the magnetic field contribution from a small current element:

$$d\vec{B} = \frac{\mu_0}{4\pi} \frac{I \, d\vec{l} \times \hat{r}}{r^2}$$

Magnitude form:

$$dB = \frac{\mu_0}{4\pi} \frac{I \, dl \sin\theta}{r^2}$$

Where:
- $d\vec{l}$ = infinitesimal length element in direction of current
- $\hat{r}$ = unit vector from element to field point
- $r$ = distance from element to field point
- $\theta$ = angle between $d\vec{l}$ and $\hat{r}$

### Key Features

1. Magnetic field contribution is **perpendicular** to both $d\vec{l}$ and $\hat{r}$
2. Field strength decreases as $1/r^2$
3. Must **integrate** to find total field from extended currents

## 4.2 Applications of Biot-Savart Law

### Magnetic Field of a Long Straight Wire

Integrating along an infinite straight wire:

$$B = \frac{\mu_0 I}{2\pi r}$$

### Magnetic Field at Center of Circular Loop

For a single loop of radius R:

$$B = \frac{\mu_0 I}{2R}$$

### Magnetic Field on Axis of Circular Loop

At distance x from center along the axis:

$$B = \frac{\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$$

As $x \to \infty$:

$$B \approx \frac{\mu_0 I R^2}{2x^3} = \frac{\mu_0 \mu}{2\pi x^3}$$

where $\mu = IA$ is the magnetic dipole moment.

### Comparison: Biot-Savart vs. Ampère's Law

| Biot-Savart Law | Ampère's Law |
|-----------------|--------------|
| Always applicable | Requires high symmetry |
| Often involves complex integrals | Simpler when applicable |
| Gives B at a specific point | Relates B to enclosed current |
| Analogous to Coulomb's law | Analogous to Gauss's law |

---

# 📚 Part 5: Magnetic Flux

## 5.1 Definition of Magnetic Flux

**Magnetic flux** measures the total magnetic field passing through a surface:

$$\Phi_B = \int \vec{B} \cdot d\vec{A} = \int B \cos\theta \, dA$$

For a uniform field through a flat surface:

$$\Phi_B = BA\cos\theta$$

Where:
- $\Phi_B$ = magnetic flux (Wb)
- $B$ = magnetic field (T)
- $A$ = area (m²)
- $\theta$ = angle between $\vec{B}$ and surface normal $\hat{n}$

### Units

| Quantity | SI Unit | Symbol |
|----------|---------|--------|
| Magnetic flux | Weber | Wb = T·m² = V·s |
| Magnetic field | Tesla | T = Wb/m² |

## 5.2 Flux Through Different Orientations

| Orientation | Flux | Description |
|-------------|------|-------------|
| $\vec{B} \perp$ surface ($\theta = 0°$) | $\Phi_B = BA$ | Maximum flux |
| $\vec{B}$ at angle θ | $\Phi_B = BA\cos\theta$ | Partial flux |
| $\vec{B} \parallel$ surface ($\theta = 90°$) | $\Phi_B = 0$ | Zero flux |

## 5.3 Gauss's Law for Magnetism

The net magnetic flux through any **closed** surface is always zero:

$$\oint \vec{B} \cdot d\vec{A} = 0$$

This is because:
- Magnetic field lines form **closed loops**
- There are **no magnetic monopoles**
- Every field line entering a surface must exit

> 💡 **Key Insight:** This is one of Maxwell's four equations and explains why you can't have an isolated magnetic north or south pole.

---

# 📚 Part 6: Faraday's Law of Induction

## 6.1 Electromagnetic Induction

**Discovery:** Michael Faraday (1831) discovered that a changing magnetic flux induces an electromotive force (EMF).

### Faraday's Law

$$\mathcal{E} = -\frac{d\Phi_B}{dt}$$

For N loops:

$$\mathcal{E} = -N\frac{d\Phi_B}{dt}$$

The induced EMF equals the **negative rate of change** of magnetic flux.

### Ways to Change Magnetic Flux

Since $\Phi_B = BA\cos\theta$, flux changes when:

| Method | What Changes | Example |
|--------|--------------|---------|
| Change B | Magnetic field magnitude | Moving magnet toward coil |
| Change A | Area in field | Expanding loop |
| Change θ | Angle | Rotating loop |
| Change any combination | Multiple factors | Generator |

## 6.2 Motional EMF

When a conductor moves through a magnetic field, an EMF is induced:

### Rod Moving on Rails

For a rod of length L moving with velocity v perpendicular to B:

$$\mathcal{E} = BLv$$

**Derivation:**
- Charges in rod experience force $F = qvB$
- This creates electric field $E = vB$
- EMF = $EL = BLv$

### Power and Force

If connected to a circuit with resistance R:

**Induced current:**
$$I = \frac{\mathcal{E}}{R} = \frac{BLv}{R}$$

**Magnetic force on rod:**
$$F_{mag} = BIL = \frac{B^2L^2v}{R}$$

**Power dissipated:**
$$P = I^2R = \frac{B^2L^2v^2}{R}$$

**External force required (constant velocity):**
$$F_{ext} = F_{mag} = \frac{B^2L^2v}{R}$$

> ⚠️ **Energy Conservation:** The mechanical work done by the external force equals the electrical energy dissipated in the resistor.

## 6.3 Induced Electric Fields

A changing magnetic field creates an **electric field** even in the absence of conductors:

$$\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}$$

This is Faraday's law in its most general form.

### Properties of Induced Electric Fields

| Property | Static E-field | Induced E-field |
|----------|----------------|-----------------|
| Source | Stationary charges | Changing magnetic flux |
| Field lines | Begin/end on charges | Form closed loops |
| Conservative? | Yes (∮E·dl = 0) | No (∮E·dl ≠ 0) |

---

# 📚 Part 7: Lenz's Law

## 7.1 Statement of Lenz's Law

**Lenz's Law:** The direction of the induced EMF (and current) opposes the change in magnetic flux that produces it.

The negative sign in Faraday's law represents Lenz's law:

$$\mathcal{E} = -\frac{d\Phi_B}{dt}$$

## 7.2 Applying Lenz's Law

### Step-by-Step Method

1. **Determine the original flux** direction through the loop
2. **Identify whether flux is increasing or decreasing**
3. **The induced current creates a magnetic field that opposes this change:**
   - If flux is increasing → induced B opposes original B
   - If flux is decreasing → induced B supports original B
4. **Use the right-hand rule** to find current direction from induced B

### Common Scenarios

| Scenario | Flux Change | Induced B Direction | Current Direction |
|----------|-------------|---------------------|-------------------|
| N pole approaching | Increasing (into) | Out of loop | Counterclockwise (from N side) |
| N pole receding | Decreasing (into) | Into loop | Clockwise (from N side) |
| S pole approaching | Increasing (out of) | Into loop | Clockwise (from S side) |
| S pole receding | Decreasing (out of) | Out of loop | Counterclockwise (from S side) |

## 7.3 Physical Significance

Lenz's law is a consequence of **conservation of energy**:

- If induced currents aided flux change, they would create more flux change
- This would induce more current, creating runaway energy production
- Instead, induced currents oppose change, requiring external work

> 💡 **Analogy:** Lenz's law is like Newton's third law for electromagnetism—the system "pushes back" against changes.

### Eddy Currents

When bulk conductors (not wires) experience changing magnetic flux:

- **Eddy currents** circulate within the conductor
- These currents dissipate energy as heat
- Applications: electromagnetic braking, induction heating
- Undesired effects: energy loss in transformers (minimized with laminated cores)

---

# 📚 Part 8: Induced EMF in Various Situations

## 8.1 EMF in a Rotating Loop (Generator)

A loop rotating in a uniform magnetic field with angular velocity ω:

**Flux:**
$$\Phi_B = BA\cos\theta = BA\cos(\omega t)$$

**Induced EMF:**
$$\mathcal{E} = -\frac{d\Phi_B}{dt} = BA\omega\sin(\omega t)$$

**Maximum EMF:**
$$\mathcal{E}_{max} = BA\omega = 2\pi f BA$$

For N turns:
$$\mathcal{E}_{max} = NBA\omega$$

> 💡 **Application:** This is the principle behind AC generators. The sinusoidal output is the source of alternating current electricity.

## 8.2 EMF from Changing Magnetic Field

If B changes with time while A and θ remain constant:

$$\mathcal{E} = -A\cos\theta \frac{dB}{dt}$$

For a coil with N turns:

$$\mathcal{E} = -NA\cos\theta \frac{dB}{dt}$$

## 8.3 EMF from Changing Area

If area changes while B and θ remain constant:

$$\mathcal{E} = -B\cos\theta \frac{dA}{dt}$$

**Example:** Sliding rod on rails

$$\frac{dA}{dt} = L\frac{dx}{dt} = Lv$$

$$\mathcal{E} = BLv$$

## 8.4 Self-Inductance

A changing current in a coil induces an EMF in itself:

$$\mathcal{E} = -L\frac{dI}{dt}$$

Where L is the **self-inductance** (unit: Henry, H).

### Inductance of a Solenoid

$$L = \frac{\mu_0 N^2 A}{l}$$

Where:
- N = number of turns
- A = cross-sectional area
- l = length

### Energy Stored in an Inductor

$$U = \frac{1}{2}LI^2$$

**Energy density in magnetic field:**

$$u_B = \frac{B^2}{2\mu_0}$$

## 8.5 Mutual Inductance

When changing current in one coil induces EMF in another:

$$\mathcal{E}_2 = -M\frac{dI_1}{dt}$$

Where M is the **mutual inductance**.

The mutual inductance is reciprocal:
$$M_{12} = M_{21} = M$$

---

# 📚 Part 9: Transformers

## 9.1 Transformer Basics

A **transformer** transfers electrical energy between circuits through electromagnetic induction.

### Ideal Transformer Equations

**Voltage ratio:**
$$\frac{V_s}{V_p} = \frac{N_s}{N_p}$$

**Current ratio:**
$$\frac{I_s}{I_p} = \frac{N_p}{N_s}$$

**Power conservation:**
$$P_p = P_s$$
$$V_p I_p = V_s I_s$$

Where:
- Subscript p = primary coil
- Subscript s = secondary coil

### Types of Transformers

| Type | Ratio | Application |
|------|-------|-------------|
| Step-up | Ns > Np | Power transmission |
| Step-down | Ns < Np | Household voltage |
| Isolation | Ns = Np | Safety, noise reduction |

## 9.2 Energy Losses in Transformers

Real transformers have losses:

| Loss Type | Cause | Mitigation |
|-----------|-------|------------|
| Copper losses (I²R) | Resistance in windings | Thick wires |
| Eddy currents | Currents in core | Laminated core |
| Hysteresis | Magnetization cycles | Soft iron core |
| Flux leakage | Incomplete flux linkage | Toroidal cores |

---

# 📝 Practice Problems

## Problem Set 1: Magnetic Fields

### Problem 1.1
A long straight wire carries a current of 5.0 A. At what distance from the wire is the magnetic field strength 2.0 × 10⁻⁵ T?

**Solution:**
Using $B = \frac{\mu_0 I}{2\pi r}$:

$$r = \frac{\mu_0 I}{2\pi B} = \frac{(4\pi \times 10^{-7})(5.0)}{2\pi(2.0 \times 10^{-5})}$$

$$r = \frac{2.0 \times 10^{-6}}{4.0 \times 10^{-5}} = 0.05 \text{ m} = 5.0 \text{ cm}$$

### Problem 1.2
A solenoid has 500 turns and is 25 cm long. What current is needed to produce a magnetic field of 0.02 T inside?

**Solution:**
Using $B = \mu_0 n I = \frac{\mu_0 N I}{L}$:

$$I = \frac{BL}{\mu_0 N} = \frac{(0.02)(0.25)}{(4\pi \times 10^{-7})(500)}$$

$$I = \frac{0.005}{6.28 \times 10^{-4}} = 7.96 \text{ A} \approx 8.0 \text{ A}$$

---

## Problem Set 2: Force on Moving Charges

### Problem 2.1
An electron moves at 3.0 × 10⁶ m/s perpendicular to a magnetic field of 0.40 T. Find:
(a) The magnitude of the magnetic force
(b) The radius of the circular path

**Solution:**

(a) $F = qvB = (1.6 \times 10^{-19})(3.0 \times 10^6)(0.40)$
$$F = 1.92 \times 10^{-13} \text{ N}$$

(b) $r = \frac{mv}{qB} = \frac{(9.11 \times 10^{-31})(3.0 \times 10^6)}{(1.6 \times 10^{-19})(0.40)}$
$$r = \frac{2.73 \times 10^{-24}}{6.4 \times 10^{-20}} = 4.27 \times 10^{-5} \text{ m} = 42.7 \text{ μm}$$

### Problem 2.2
A proton enters a region with crossed electric and magnetic fields. E = 5000 V/m and B = 0.25 T. What velocity allows the proton to pass through undeflected?

**Solution:**
For the velocity selector:
$$v = \frac{E}{B} = \frac{5000}{0.25} = 20,000 \text{ m/s} = 2.0 \times 10^4 \text{ m/s}$$

---

## Problem Set 3: Force on Current-Carrying Wires

### Problem 3.1
A wire carrying 8.0 A is 50 cm long and lies in a 0.30 T magnetic field at 30° to the field. What is the magnetic force on the wire?

**Solution:**
$$F = BIL\sin\theta = (0.30)(8.0)(0.50)\sin(30°)$$
$$F = (0.30)(8.0)(0.50)(0.50) = 0.60 \text{ N}$$

### Problem 3.2
Two parallel wires 10 cm apart each carry 15 A in opposite directions. Find the force per unit length between them.

**Solution:**
$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d} = \frac{(4\pi \times 10^{-7})(15)(15)}{2\pi(0.10)}$$
$$\frac{F}{L} = \frac{(2 \times 10^{-7})(225)}{0.10} = 4.5 \times 10^{-4} \text{ N/m}$$

The force is **repulsive** (opposite currents).

### Problem 3.3
A rectangular coil (5 cm × 10 cm) with 200 turns carries 2.0 A in a 0.50 T field. The plane of the coil makes a 60° angle with the field. Find the torque.

**Solution:**
The angle between the normal and B is θ = 90° - 60° = 30°

$$\tau = NIAB\sin\theta = (200)(2.0)(0.05 \times 0.10)(0.50)\sin(30°)$$
$$\tau = (200)(2.0)(0.005)(0.50)(0.50) = 0.50 \text{ N·m}$$

---

## Problem Set 4: Magnetic Flux and Faraday's Law

### Problem 4.1
A circular coil with radius 12 cm and 50 turns is in a magnetic field of 0.80 T. The field makes a 37° angle with the coil's axis. Find the magnetic flux through the coil.

**Solution:**
$$\Phi_B = NBA\cos\theta = N \cdot B \cdot (\pi r^2) \cdot \cos\theta$$
$$\Phi_B = (50)(0.80)(\pi)(0.12)^2\cos(37°)$$
$$\Phi_B = (50)(0.80)(0.0452)(0.80) = 1.45 \text{ Wb}$$

### Problem 4.2
A magnetic field through a 100-turn coil (area = 0.040 m²) increases from 0 to 0.50 T in 0.25 s. What is the induced EMF?

**Solution:**
$$\mathcal{E} = -N\frac{d\Phi_B}{dt} = -N\frac{\Delta(BA)}{dt} = -NA\frac{\Delta B}{\Delta t}$$
$$|\mathcal{E}| = (100)(0.040)\frac{0.50}{0.25} = (4.0)(2.0) = 8.0 \text{ V}$$

### Problem 4.3
A 20 cm long rod moves at 5.0 m/s perpendicular to a 0.30 T magnetic field. Find the induced EMF.

**Solution:**
$$\mathcal{E} = BLv = (0.30)(0.20)(5.0) = 0.30 \text{ V}$$

---

## Problem Set 5: Lenz's Law Applications

### Problem 5.1
A magnet approaches a coil with its north pole first. As viewed from the magnet:
(a) Is the flux through the coil increasing or decreasing?
(b) What is the direction of the induced current?
(c) Does the coil attract or repel the magnet?

**Solution:**

(a) The flux is **increasing** (north pole brings more field lines into the coil).

(b) By Lenz's law, the induced current opposes this increase. The induced magnetic field points toward the approaching magnet (opposing the original field). Using the right-hand rule, the current flows **counterclockwise** as viewed from the magnet.

(c) The induced current creates a magnetic dipole with north pole facing the approaching north pole. Like poles repel, so the coil **repels** the magnet.

### Problem 5.2
A conducting loop is being pulled out of a region with magnetic field B pointing into the page. Determine the direction of induced current.

**Solution:**
- Original flux: Into the page
- Flux change: Decreasing (as loop exits)
- Induced B: Must be into page (to oppose decrease)
- Induced current: Clockwise (by right-hand rule)

---

## Problem Set 6: Generators and Inductors

### Problem 6.1
An AC generator has a coil with 100 turns and area 0.050 m². It rotates at 60 Hz in a 0.80 T field. Find the maximum EMF.

**Solution:**
$$\mathcal{E}_{max} = NBA\omega = NBA(2\pi f)$$
$$\mathcal{E}_{max} = (100)(0.80)(0.050)(2\pi)(60)$$
$$\mathcal{E}_{max} = (4.0)(377) = 1508 \text{ V} \approx 1.5 \text{ kV}$$

### Problem 6.2
A solenoid has inductance L = 2.5 mH. If the current changes from 0 to 3.0 A in 10 ms, find:
(a) The induced EMF
(b) The energy stored when I = 3.0 A

**Solution:**

(a) $$\mathcal{E} = L\frac{dI}{dt} = (2.5 \times 10^{-3})\frac{3.0}{0.010} = 0.75 \text{ V}$$

(b) $$U = \frac{1}{2}LI^2 = \frac{1}{2}(2.5 \times 10^{-3})(3.0)^2 = 0.01125 \text{ J} = 11.25 \text{ mJ}$$

---

## Problem Set 7: Transformers

### Problem 7.1
A step-down transformer reduces 120 V to 12 V. If the primary has 500 turns:
(a) How many turns in the secondary?
(b) If the secondary current is 2.0 A, what is the primary current?

**Solution:**

(a) $$\frac{N_s}{N_p} = \frac{V_s}{V_p}$$
$$N_s = N_p \cdot \frac{V_s}{V_p} = 500 \cdot \frac{12}{120} = 50 \text{ turns}$$

(b) From power conservation:
$$I_p = I_s \cdot \frac{V_s}{V_p} = 2.0 \cdot \frac{12}{120} = 0.20 \text{ A}$$

### Problem 7.2
A power station transmits 500 kW at 10 kV through lines with total resistance 5.0 Ω. Calculate:
(a) Current in the transmission lines
(b) Power lost in the lines
(c) If voltage is stepped up to 100 kV, what is the new power loss?

**Solution:**

(a) $$I = \frac{P}{V} = \frac{500,000}{10,000} = 50 \text{ A}$$

(b) $$P_{loss} = I^2R = (50)^2(5.0) = 12,500 \text{ W} = 12.5 \text{ kW}$$

(c) At 100 kV:
$$I = \frac{500,000}{100,000} = 5.0 \text{ A}$$
$$P_{loss} = (5.0)^2(5.0) = 125 \text{ W}$$

> 💡 **Key Insight:** Increasing voltage by 10× reduces power loss by 100×!

---

# 🎯 Key Equations Summary

## Magnetic Fields

| Source | Equation |
|--------|----------|
| Long straight wire | $B = \frac{\mu_0 I}{2\pi r}$ |
| Center of circular loop | $B = \frac{\mu_0 NI}{2R}$ |
| Solenoid | $B = \mu_0 nI = \frac{\mu_0 NI}{L}$ |

## Magnetic Forces

| Situation | Equation |
|-----------|----------|
| Force on moving charge | $F = qvB\sin\theta$ |
| Force on wire | $F = BIL\sin\theta$ |
| Torque on loop | $\tau = NIAB\sin\theta$ |
| Force between parallel wires | $\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$ |

## Circular Motion of Charges

| Quantity | Equation |
|----------|----------|
| Radius | $r = \frac{mv}{qB}$ |
| Period | $T = \frac{2\pi m}{qB}$ |
| Frequency | $f = \frac{qB}{2\pi m}$ |

## Electromagnetic Induction

| Concept | Equation |
|---------|----------|
| Magnetic flux | $\Phi_B = BA\cos\theta$ |
| Faraday's law | $\mathcal{E} = -N\frac{d\Phi_B}{dt}$ |
| Motional EMF | $\mathcal{E} = BLv$ |
| Generator EMF | $\mathcal{E} = NBA\omega\sin(\omega t)$ |
| Self-inductance | $\mathcal{E} = -L\frac{dI}{dt}$ |
| Energy in inductor | $U = \frac{1}{2}LI^2$ |

## Transformers

| Relationship | Equation |
|--------------|----------|
| Voltage ratio | $\frac{V_s}{V_p} = \frac{N_s}{N_p}$ |
| Current ratio | $\frac{I_s}{I_p} = \frac{N_p}{N_s}$ |
| Power conservation | $V_p I_p = V_s I_s$ |

---

# 📋 Quick Reference: Right-Hand Rules

### Rule 1: Magnetic Field Around a Wire
- **Thumb:** Direction of current
- **Fingers:** Curl in direction of B

### Rule 2: Force on Positive Charge
- **Fingers:** Point in direction of v
- **Curl toward:** Direction of B
- **Thumb:** Direction of F

### Rule 3: Force on Current-Carrying Wire
- **Fingers:** Point in direction of I
- **Curl toward:** Direction of B
- **Thumb:** Direction of F

### Rule 4: Induced Current Direction
- **Fingers:** Curl in direction of induced current
- **Thumb:** Direction of induced B field
- (Use Lenz's law to determine induced B direction first)

---

# 🔬 Common Mistakes to Avoid

1. **Forgetting the sine:** Force is $F = qvB\sin\theta$, not $F = qvB$

2. **Confusing angles:** In flux calculations, θ is between B and the **normal** to the surface

3. **Wrong sign for charge:** Remember to reverse force direction for negative charges

4. **Magnetic force does work:** NO! Magnetic force is always perpendicular to velocity

5. **Flux change misconception:** It's the **rate of change** of flux that matters, not the flux itself

6. **Lenz's law direction:** Induced B opposes the **change** in flux, not necessarily the original B

7. **Transformer current:** Higher voltage means LOWER current (power is conserved)

8. **Units:** Keep everything in SI units (Tesla, Weber, Henry)

---

# 🧠 Conceptual Checkpoints

✅ Magnetic field lines always form closed loops

✅ Magnetic force on a stationary charge is zero

✅ Magnetic force does no work (always perpendicular to motion)

✅ Period of circular motion is independent of particle speed

✅ Parallel currents attract; antiparallel currents repel

✅ Changing magnetic flux induces EMF (Faraday's law)

✅ Induced current opposes flux change (Lenz's law)

✅ Transformers only work with AC (changing current)

✅ Energy is stored in magnetic fields (inductors)

✅ High-voltage transmission reduces power loss

:::GUIDE:::
