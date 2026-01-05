:::GUIDE:::
unit::=Final Review
title::=⚡ AP Physics C: E&M Complete Final Exam Review
desc::=Comprehensive review of all 5 units for AP Physics C: E&M exam
diff::=Very Hard
time::=120 min
tags::=physics-c,em,electromagnetism,final-review,ap-exam
content::=

# ⚡ AP Physics C: E&M Complete Final Exam Review

## 📋 Exam Overview

**Format:**
- **Multiple Choice:** 35 questions in 45 minutes (50% of score)
- **Free Response:** 3 questions in 45 minutes (50% of score)
- **Calculator:** Allowed on entire exam
- **Formula Sheet:** Provided (but know formulas cold!)

**Unit Breakdown:**
| Unit | Topic | Exam Weight |
|------|-------|-------------|
| 1 | Electrostatics | 26-34% |
| 2 | Conductors, Capacitors, Dielectrics | 14-17% |
| 3 | Electric Circuits | 17-23% |
| 4 | Magnetic Fields | 17-23% |
| 5 | Electromagnetism | 14-17% |

---

# 📐 Master Formula Sheet

## Unit 1: Electrostatics

### Coulomb's Law
$$\vec{F} = k\frac{q_1 q_2}{r^2}\hat{r} = \frac{1}{4\pi\epsilon_0}\frac{q_1 q_2}{r^2}\hat{r}$$

**Constants:**
- $k = 8.99 \times 10^9 \text{ N·m}^2/\text{C}^2$
- $\epsilon_0 = 8.85 \times 10^{-12} \text{ C}^2/\text{N·m}^2$
- $e = 1.60 \times 10^{-19}$ C

### Electric Field
$$\vec{E} = \frac{\vec{F}}{q} = k\frac{Q}{r^2}\hat{r}$$

**Superposition Principle:**
$$\vec{E}_{total} = \sum_i \vec{E}_i = \sum_i k\frac{q_i}{r_i^2}\hat{r}_i$$

**Continuous Charge Distribution:**
$$\vec{E} = \int d\vec{E} = \int k\frac{dq}{r^2}\hat{r}$$

### Charge Density Definitions
| Type | Symbol | Definition | Units |
|------|--------|------------|-------|
| Linear | $\lambda$ | $\frac{dq}{dl}$ | C/m |
| Surface | $\sigma$ | $\frac{dq}{dA}$ | C/m² |
| Volume | $\rho$ | $\frac{dq}{dV}$ | C/m³ |

### Gauss's Law
$$\Phi_E = \oint \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\epsilon_0}$$

**Electric Flux:**
$$\Phi_E = \int \vec{E} \cdot d\vec{A} = EA\cos\theta$$

### Electric Potential
$$V = \frac{U}{q} = k\frac{Q}{r}$$

**Potential from Electric Field:**
$$V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l}$$

**Electric Field from Potential:**
$$\vec{E} = -\nabla V = -\left(\frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k}\right)$$

**In 1D:**
$$E_x = -\frac{dV}{dx}$$

### Electric Potential Energy
$$U = k\frac{q_1 q_2}{r} = qV$$

**For a system of charges:**
$$U = \frac{1}{2}\sum_i q_i V_i = k\sum_{i<j} \frac{q_i q_j}{r_{ij}}$$

---

## Unit 2: Conductors, Capacitors, Dielectrics

### Conductor Properties
1. $\vec{E}_{inside} = 0$ (electrostatic equilibrium)
2. All excess charge resides on surface
3. $\vec{E}_{surface} \perp$ to surface
4. $E_{surface} = \frac{\sigma}{\epsilon_0}$
5. Surface is an equipotential

### Capacitance
$$C = \frac{Q}{V}$$

**Units:** Farad (F) = C/V

### Capacitor Geometries

| Geometry | Capacitance Formula |
|----------|-------------------|
| Parallel Plate | $C = \frac{\epsilon_0 A}{d}$ |
| Cylindrical | $C = \frac{2\pi\epsilon_0 L}{\ln(b/a)}$ |
| Spherical | $C = 4\pi\epsilon_0 \frac{ab}{b-a}$ |
| Isolated Sphere | $C = 4\pi\epsilon_0 R$ |

### Capacitor Combinations

**Series:**
$$\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} + ...$$
- Same charge on each capacitor
- Voltage divides

**Parallel:**
$$C_{eq} = C_1 + C_2 + C_3 + ...$$
- Same voltage across each
- Charge divides

### Energy Stored in Capacitor
$$U = \frac{1}{2}CV^2 = \frac{1}{2}\frac{Q^2}{C} = \frac{1}{2}QV$$

### Energy Density
$$u = \frac{1}{2}\epsilon_0 E^2$$

**Total energy in electric field:**
$$U = \int u \, dV = \frac{1}{2}\epsilon_0 \int E^2 \, dV$$

### Dielectrics
$$C = \kappa C_0 = \frac{\kappa\epsilon_0 A}{d}$$

**Dielectric constant:** $\kappa > 1$

**Effects of inserting dielectric:**
| Quantity | Battery Connected | Isolated Capacitor |
|----------|------------------|-------------------|
| Capacitance | $C' = \kappa C$ | $C' = \kappa C$ |
| Voltage | $V' = V$ (constant) | $V' = V/\kappa$ |
| Charge | $Q' = \kappa Q$ | $Q' = Q$ (constant) |
| Energy | $U' = \kappa U$ | $U' = U/\kappa$ |
| E-field | $E' = E$ | $E' = E/\kappa$ |

---

## Unit 3: Electric Circuits

### Current
$$I = \frac{dQ}{dt} = nAv_d q$$

**Where:**
- $n$ = number density of charge carriers
- $A$ = cross-sectional area
- $v_d$ = drift velocity
- $q$ = charge per carrier

### Resistance and Resistivity
$$R = \frac{\rho L}{A}$$

$$\rho = \rho_0[1 + \alpha(T - T_0)]$$

**Temperature coefficient:** $\alpha$

### Ohm's Law
$$V = IR$$

$$\vec{J} = \sigma\vec{E} = \frac{\vec{E}}{\rho}$$

**Current density:** $J = \frac{I}{A}$

### Power
$$P = IV = I^2R = \frac{V^2}{R}$$

### Resistor Combinations

**Series:**
$$R_{eq} = R_1 + R_2 + R_3 + ...$$
- Same current through each
- Voltage divides

**Parallel:**
$$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ...$$
- Same voltage across each
- Current divides

### Kirchhoff's Rules

**Junction Rule (KCL):**
$$\sum I_{in} = \sum I_{out}$$

**Loop Rule (KVL):**
$$\sum \Delta V = 0$$

**Sign conventions for loop rule:**
- Battery: + if traversing from − to +
- Resistor: − if traversing in direction of current

### RC Circuits

**Charging:**
$$Q(t) = Q_{max}(1 - e^{-t/\tau}) = C\mathcal{E}(1 - e^{-t/RC})$$
$$I(t) = I_0 e^{-t/\tau} = \frac{\mathcal{E}}{R}e^{-t/RC}$$
$$V_C(t) = \mathcal{E}(1 - e^{-t/RC})$$

**Discharging:**
$$Q(t) = Q_0 e^{-t/\tau} = Q_0 e^{-t/RC}$$
$$I(t) = -I_0 e^{-t/\tau} = -\frac{Q_0}{RC}e^{-t/RC}$$
$$V_C(t) = V_0 e^{-t/RC}$$

**Time Constant:**
$$\tau = RC$$

**At $t = \tau$:**
- Charging: $Q = 0.632 Q_{max}$, $V = 0.632 \mathcal{E}$
- Discharging: $Q = 0.368 Q_0$, $V = 0.368 V_0$

---

## Unit 4: Magnetic Fields

### Magnetic Force on Moving Charge
$$\vec{F} = q\vec{v} \times \vec{B}$$

**Magnitude:** $F = qvB\sin\theta$

### Magnetic Force on Current-Carrying Wire
$$\vec{F} = I\vec{L} \times \vec{B}$$
$$d\vec{F} = I \, d\vec{l} \times \vec{B}$$

**Magnitude:** $F = BIL\sin\theta$

### Lorentz Force
$$\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})$$

### Circular Motion in Magnetic Field
$$r = \frac{mv}{qB}$$

$$T = \frac{2\pi m}{qB}$$

$$\omega = \frac{qB}{m}$$

### Magnetic Torque on Current Loop
$$\vec{\tau} = \vec{\mu} \times \vec{B}$$

**Magnetic dipole moment:**
$$\vec{\mu} = NIA\hat{n}$$

**Magnitude:** $\tau = \mu B \sin\theta = NIAB\sin\theta$

### Potential Energy of Dipole
$$U = -\vec{\mu} \cdot \vec{B} = -\mu B \cos\theta$$

### Biot-Savart Law
$$d\vec{B} = \frac{\mu_0}{4\pi}\frac{I \, d\vec{l} \times \hat{r}}{r^2}$$

**Permeability of free space:** $\mu_0 = 4\pi \times 10^{-7}$ T·m/A

### Magnetic Field Sources

| Configuration | Magnetic Field |
|--------------|----------------|
| Long straight wire | $B = \frac{\mu_0 I}{2\pi r}$ |
| Center of circular loop | $B = \frac{\mu_0 I}{2R}$ |
| On axis of circular loop | $B = \frac{\mu_0 IR^2}{2(R^2 + x^2)^{3/2}}$ |
| Inside solenoid | $B = \mu_0 nI$ |
| Inside toroid | $B = \frac{\mu_0 NI}{2\pi r}$ |
| Center of arc (angle θ) | $B = \frac{\mu_0 I \theta}{4\pi R}$ |

### Ampère's Law
$$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc}$$

**When to use Ampère's Law:**
- Infinite straight wire
- Infinite solenoid
- Toroid
- Coaxial cable
- Infinite current sheet

### Force Between Parallel Wires
$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$$

- **Same direction currents:** Attract
- **Opposite direction currents:** Repel

---

## Unit 5: Electromagnetism

### Magnetic Flux
$$\Phi_B = \int \vec{B} \cdot d\vec{A} = BA\cos\theta$$

**Units:** Weber (Wb) = T·m²

### Faraday's Law
$$\mathcal{E} = -\frac{d\Phi_B}{dt}$$

**For N loops:**
$$\mathcal{E} = -N\frac{d\Phi_B}{dt}$$

### Lenz's Law
The induced EMF opposes the change in magnetic flux.

**Remember:** "Nature opposes change"

### Motional EMF
$$\mathcal{E} = BLv$$

**For rotating loop:**
$$\mathcal{E} = NBA\omega\sin(\omega t)$$

### Inductance

**Self-Inductance:**
$$\mathcal{E} = -L\frac{dI}{dt}$$

$$L = \frac{N\Phi_B}{I}$$

**For a solenoid:**
$$L = \mu_0 n^2 V = \frac{\mu_0 N^2 A}{l}$$

**Mutual Inductance:**
$$\mathcal{E}_2 = -M\frac{dI_1}{dt}$$

$$M = \frac{N_2 \Phi_{21}}{I_1} = \frac{N_1 \Phi_{12}}{I_2}$$

### Energy Stored in Inductor
$$U = \frac{1}{2}LI^2$$

### Magnetic Energy Density
$$u_B = \frac{B^2}{2\mu_0}$$

### RL Circuits

**Current rise (closing switch):**
$$I(t) = \frac{\mathcal{E}}{R}(1 - e^{-t/\tau}) = I_{max}(1 - e^{-Rt/L})$$

**Current decay (opening switch):**
$$I(t) = I_0 e^{-t/\tau} = I_0 e^{-Rt/L}$$

**Time Constant:**
$$\tau = \frac{L}{R}$$

### LC Circuits

$$q(t) = Q_0 \cos(\omega t + \phi)$$

$$I(t) = -\omega Q_0 \sin(\omega t + \phi)$$

**Angular frequency:**
$$\omega = \frac{1}{\sqrt{LC}}$$

**Period:**
$$T = 2\pi\sqrt{LC}$$

**Energy oscillation:**
$$U_{total} = \frac{1}{2}\frac{Q^2}{C} + \frac{1}{2}LI^2 = \frac{1}{2}\frac{Q_0^2}{C} = \text{constant}$$

---

# 🔬 Gauss's Law Applications Summary

## When to Use Gauss's Law
Gauss's Law is useful when there is **high symmetry**:
1. **Spherical symmetry** → Use spherical Gaussian surface
2. **Cylindrical symmetry** → Use cylindrical Gaussian surface
3. **Planar symmetry** → Use "pillbox" (rectangular prism)

## Step-by-Step Method
1. Identify the symmetry
2. Choose appropriate Gaussian surface
3. Ensure $\vec{E}$ is constant on surface or parallel/perpendicular to $d\vec{A}$
4. Calculate $Q_{enc}$ inside surface
5. Apply $\oint \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\epsilon_0}$
6. Solve for $E$

## Common Configurations

### Point Charge / Uniformly Charged Sphere

**Outside sphere ($r > R$):**
$$E = \frac{Q}{4\pi\epsilon_0 r^2} = \frac{kQ}{r^2}$$

**Inside conducting sphere:** $E = 0$

**Inside uniformly charged insulating sphere ($r < R$):**
$$E = \frac{Qr}{4\pi\epsilon_0 R^3} = \frac{\rho r}{3\epsilon_0}$$

### Infinite Line of Charge

$$E = \frac{\lambda}{2\pi\epsilon_0 r}$$

**Direction:** Radially outward (if $\lambda > 0$)

### Infinite Charged Cylinder

**Outside ($r > R$):**
$$E = \frac{\lambda}{2\pi\epsilon_0 r}$$

**Inside uniformly charged cylinder ($r < R$):**
$$E = \frac{\rho r}{2\epsilon_0} = \frac{\lambda r}{2\pi\epsilon_0 R^2}$$

### Infinite Plane of Charge

$$E = \frac{\sigma}{2\epsilon_0}$$

**Direction:** Perpendicular to plane, away from surface

### Parallel Plate Capacitor

**Between plates:**
$$E = \frac{\sigma}{\epsilon_0}$$

**Outside plates:** $E = 0$

### Conducting Surface

$$E = \frac{\sigma}{\epsilon_0}$$

**Just outside the surface; inside conductor $E = 0$**

---

# 📊 Capacitor Formulas Table

## Capacitance by Geometry

| Geometry | Formula | Variables |
|----------|---------|-----------|
| Parallel Plate | $C = \frac{\epsilon_0 A}{d}$ | A = area, d = separation |
| Parallel Plate w/ Dielectric | $C = \frac{\kappa\epsilon_0 A}{d}$ | κ = dielectric constant |
| Cylindrical | $C = \frac{2\pi\epsilon_0 L}{\ln(b/a)}$ | a = inner radius, b = outer radius |
| Spherical | $C = 4\pi\epsilon_0 \frac{ab}{b-a}$ | a = inner radius, b = outer radius |
| Isolated Sphere | $C = 4\pi\epsilon_0 R$ | R = radius |

## Capacitor Relationships

| Quantity | Formula 1 | Formula 2 | Formula 3 |
|----------|-----------|-----------|-----------|
| Capacitance | $C = \frac{Q}{V}$ | $C = \frac{\epsilon_0 A}{d}$ | — |
| Charge | $Q = CV$ | — | — |
| Voltage | $V = \frac{Q}{C}$ | $V = Ed$ | — |
| Energy | $U = \frac{1}{2}CV^2$ | $U = \frac{1}{2}\frac{Q^2}{C}$ | $U = \frac{1}{2}QV$ |
| Electric Field | $E = \frac{V}{d}$ | $E = \frac{\sigma}{\epsilon_0}$ | $E = \frac{Q}{\epsilon_0 A}$ |

## Series vs Parallel Summary

| Property | Series | Parallel |
|----------|--------|----------|
| Equivalent | $\frac{1}{C_{eq}} = \sum \frac{1}{C_i}$ | $C_{eq} = \sum C_i$ |
| Charge | Same: $Q_1 = Q_2 = Q_{total}$ | Divides: $Q_{total} = Q_1 + Q_2$ |
| Voltage | Divides: $V_{total} = V_1 + V_2$ | Same: $V_1 = V_2 = V_{total}$ |
| Energy | $U_{total} = U_1 + U_2$ | $U_{total} = U_1 + U_2$ |

---

# ⚡ Circuit Analysis Methods

## Method 1: Kirchhoff's Rules

### Junction Rule (KCL - Kirchhoff's Current Law)
$$\sum I_{in} = \sum I_{out}$$

At any junction, current is conserved.

### Loop Rule (KVL - Kirchhoff's Voltage Law)
$$\sum \Delta V = 0$$

Around any closed loop, the total voltage change is zero.

### Sign Conventions
| Element | Traversal Direction | Voltage Change |
|---------|-------------------|----------------|
| Battery | − to + | +ε |
| Battery | + to − | −ε |
| Resistor | With current | −IR |
| Resistor | Against current | +IR |
| Capacitor | + to − | −Q/C |
| Capacitor | − to + | +Q/C |

### Solving Circuit Problems
1. Label all currents with directions (guess if needed)
2. Identify junctions and write KCL equations
3. Identify independent loops
4. Write KVL equation for each loop
5. Solve system of equations
6. Negative current → actual direction is opposite

## Method 2: Equivalent Resistance

### Series Resistors
$$R_{eq} = R_1 + R_2 + R_3 + ...$$

### Parallel Resistors
$$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ...$$

**Two resistors in parallel:**
$$R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$$

### Strategy
1. Identify series and parallel combinations
2. Reduce step by step
3. Find total current from source
4. Work backwards to find individual currents/voltages

## Method 3: Voltage and Current Dividers

### Voltage Divider (Series)
$$V_1 = V_{total} \cdot \frac{R_1}{R_1 + R_2}$$

### Current Divider (Parallel)
$$I_1 = I_{total} \cdot \frac{R_2}{R_1 + R_2}$$

## RC Circuit Analysis

### Differential Equation Approach

**Charging (switch closed at t = 0):**
$$\mathcal{E} - IR - \frac{Q}{C} = 0$$
$$\mathcal{E} - R\frac{dQ}{dt} - \frac{Q}{C} = 0$$

**Solution:**
$$Q(t) = C\mathcal{E}(1 - e^{-t/RC})$$
$$I(t) = \frac{\mathcal{E}}{R}e^{-t/RC}$$

**Discharging:**
$$-R\frac{dQ}{dt} - \frac{Q}{C} = 0$$

**Solution:**
$$Q(t) = Q_0 e^{-t/RC}$$
$$I(t) = -\frac{Q_0}{RC}e^{-t/RC}$$

### Key Time Points
| Time | Charging Q | Charging V | Discharging Q |
|------|-----------|-----------|---------------|
| t = 0 | 0 | 0 | $Q_0$ |
| t = τ | $0.632 Q_{max}$ | $0.632 \mathcal{E}$ | $0.368 Q_0$ |
| t = 2τ | $0.865 Q_{max}$ | $0.865 \mathcal{E}$ | $0.135 Q_0$ |
| t = 3τ | $0.950 Q_{max}$ | $0.950 \mathcal{E}$ | $0.050 Q_0$ |
| t = 5τ | $0.993 Q_{max}$ | $0.993 \mathcal{E}$ | $0.007 Q_0$ |
| t → ∞ | $Q_{max}$ | $\mathcal{E}$ | 0 |

---

# 🧲 Magnetic Field Sources

## Biot-Savart Law

$$d\vec{B} = \frac{\mu_0}{4\pi}\frac{I \, d\vec{l} \times \hat{r}}{r^2}$$

### When to Use Biot-Savart
- Finite straight wires
- Circular arcs
- Arbitrary current configurations
- When Ampère's Law symmetry doesn't apply

### Common Biot-Savart Calculations

**Finite Straight Wire:**
$$B = \frac{\mu_0 I}{4\pi a}(\sin\theta_2 - \sin\theta_1)$$

Where $a$ is perpendicular distance, $\theta$ measured from perpendicular.

**Semi-infinite Wire:**
$$B = \frac{\mu_0 I}{4\pi a}$$

**Center of Circular Arc (angle θ in radians):**
$$B = \frac{\mu_0 I \theta}{4\pi R}$$

**Center of Full Circular Loop:**
$$B = \frac{\mu_0 I}{2R}$$

**On Axis of Circular Loop:**
$$B = \frac{\mu_0 IR^2}{2(R^2 + x^2)^{3/2}}$$

## Ampère's Law

$$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc}$$

### When to Use Ampère's Law
- High symmetry configurations
- Current distribution allows $\vec{B}$ parallel or perpendicular to path

### Common Ampère's Law Applications

**Long Straight Wire:**
$$B = \frac{\mu_0 I}{2\pi r}$$

**Inside a Wire (uniform current density):**
$$B = \frac{\mu_0 I r}{2\pi R^2}$$ for $r < R$

**Solenoid (inside, infinite):**
$$B = \mu_0 nI = \frac{\mu_0 NI}{L}$$

**Outside solenoid:** $B ≈ 0$

**Toroid:**
$$B = \frac{\mu_0 NI}{2\pi r}$$ for $a < r < b$

$B = 0$ for $r < a$ or $r > b$

**Infinite Current Sheet:**
$$B = \frac{\mu_0 K}{2}$$

Where $K$ is surface current density (A/m)

## Right-Hand Rules

### Rule 1: Straight Wire
- Thumb points in direction of current
- Fingers curl in direction of magnetic field

### Rule 2: Loop/Coil
- Fingers curl in direction of current
- Thumb points in direction of magnetic field (inside loop)

### Rule 3: Cross Product ($\vec{F} = q\vec{v} \times \vec{B}$)
- Fingers point in direction of $\vec{v}$
- Curl toward $\vec{B}$
- Thumb points in direction of $\vec{F}$ (for positive charge)

---

# 🔄 Induction and Faraday's Law

## Faraday's Law of Induction

$$\mathcal{E} = -\frac{d\Phi_B}{dt} = -\frac{d}{dt}\int \vec{B} \cdot d\vec{A}$$

**For N turns:**
$$\mathcal{E} = -N\frac{d\Phi_B}{dt}$$

## Ways to Change Flux

1. **Change B:** $\mathcal{E} = -A\cos\theta \frac{dB}{dt}$
2. **Change A:** $\mathcal{E} = -B\cos\theta \frac{dA}{dt}$
3. **Change θ:** $\mathcal{E} = BA\sin\theta \frac{d\theta}{dt}$
4. **Combination of above**

## Lenz's Law

The induced current creates a magnetic field that **opposes** the change in flux.

### Determining Induced Current Direction
1. Determine if flux is increasing or decreasing
2. The induced B-field opposes this change
3. Use right-hand rule to find current direction

**Mnemonic:** "Nature hates change"

## Motional EMF

### Straight Conductor Moving Through Field
$$\mathcal{E} = BLv$$

Where:
- $B$ = magnetic field strength
- $L$ = length of conductor
- $v$ = velocity perpendicular to both $B$ and $L$

### General Motional EMF
$$\mathcal{E} = \oint (\vec{v} \times \vec{B}) \cdot d\vec{l}$$

### Rotating Loop (AC Generator)
$$\Phi_B = BA\cos(\omega t)$$
$$\mathcal{E} = NBA\omega\sin(\omega t) = \mathcal{E}_0 \sin(\omega t)$$

**Maximum EMF:** $\mathcal{E}_0 = NBA\omega$

## Induced Electric Fields

When magnetic flux changes, an electric field is induced even in empty space:

$$\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}$$

This is the **generalized form of Faraday's Law**.

### Properties of Induced E-field
- Circular (for symmetric changing B)
- Non-conservative
- No potential can be defined

---

# 📜 Maxwell's Equations (Integral Form)

## The Four Equations

### 1. Gauss's Law for Electricity
$$\oint \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\epsilon_0}$$

**Physical meaning:** Electric charges create electric fields. Field lines begin on positive charges and end on negative charges.

### 2. Gauss's Law for Magnetism
$$\oint \vec{B} \cdot d\vec{A} = 0$$

**Physical meaning:** No magnetic monopoles exist. Magnetic field lines always form closed loops.

### 3. Faraday's Law
$$\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}$$

**Physical meaning:** A changing magnetic field creates an electric field.

### 4. Ampère-Maxwell Law
$$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc} + \mu_0\epsilon_0\frac{d\Phi_E}{dt}$$

**Physical meaning:** Electric currents and changing electric fields create magnetic fields.

## Displacement Current

$$I_D = \epsilon_0\frac{d\Phi_E}{dt}$$

**Importance:** Completes the symmetry between electric and magnetic fields. Allows electromagnetic waves to propagate.

## Electromagnetic Waves

**Speed of light:**
$$c = \frac{1}{\sqrt{\mu_0\epsilon_0}} = 3 \times 10^8 \text{ m/s}$$

**Relationship between E and B:**
$$E = cB$$

---

# 📐 Vector Calculus Requirements

## Gradient (∇V)

$$\vec{E} = -\nabla V = -\left(\frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k}\right)$$

**Physical meaning:** Electric field points in direction of steepest decrease in potential.

## Divergence (∇·)

$$\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$$

**Physical meaning:** Sources and sinks of field lines.

## Curl (∇×)

$$\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$$

**Physical meaning:** Circulation of field.

## Line Integrals

$$\int_A^B \vec{F} \cdot d\vec{l} = \int_A^B (F_x dx + F_y dy + F_z dz)$$

**For potential:**
$$V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l}$$

## Surface Integrals

$$\Phi = \iint \vec{F} \cdot d\vec{A}$$

For constant field perpendicular to flat surface:
$$\Phi = FA$$

## Common Integral Results

| Integral | Result |
|----------|--------|
| $\int x^n dx$ | $\frac{x^{n+1}}{n+1}$ (n ≠ -1) |
| $\int \frac{1}{x} dx$ | $\ln|x|$ |
| $\int e^{ax} dx$ | $\frac{1}{a}e^{ax}$ |
| $\int \frac{1}{(a^2+x^2)^{3/2}} dx$ | $\frac{x}{a^2\sqrt{a^2+x^2}}$ |
| $\int x(a^2+x^2)^{-3/2} dx$ | $-\frac{1}{\sqrt{a^2+x^2}}$ |

---

# 📝 FRQ Strategies

## General Approach

### Before Starting
1. Read the ENTIRE problem first
2. Identify which units/concepts are being tested
3. Note what's given and what's asked

### During the Problem
1. **Draw diagrams** - Always include coordinate system
2. **Write known equations** - Show your starting point
3. **Show all work** - Partial credit is significant
4. **Include units** - At final answer minimum
5. **Box final answers**

### Time Management
- ~15 minutes per FRQ
- Don't spend too long on one part
- Return to difficult parts if time permits

## By Problem Type

### Electrostatics Problems

1. **Draw the charge configuration**
2. **Set up coordinate system**
3. **For multiple charges:** Use superposition
4. **For continuous distributions:** Set up integral
   - Identify dq in terms of geometry
   - Express r in terms of integration variable
   - Include vector components

### Gauss's Law Problems

1. **Identify symmetry** (spherical, cylindrical, planar)
2. **Choose Gaussian surface**
3. **Draw the surface clearly**
4. **Calculate flux through each part of surface**
5. **Calculate $Q_{enc}$**
6. **Apply $\Phi_E = Q_{enc}/\epsilon_0$**

### Circuit Problems

1. **Redraw the circuit** neatly
2. **Label all currents** with directions
3. **Simplify** series/parallel combinations if possible
4. **Apply Kirchhoff's rules**
5. **For RC circuits:**
   - Identify τ = RC
   - Write exponential equations
   - Consider initial and final conditions

### Magnetic Field Problems

1. **Determine source of B-field**
2. **Choose Biot-Savart or Ampère's Law**
3. **Apply right-hand rule for direction**
4. **For forces:** $\vec{F} = q\vec{v} \times \vec{B}$ or $\vec{F} = I\vec{L} \times \vec{B}$

### Induction Problems

1. **Calculate magnetic flux**
2. **Determine how flux changes with time**
3. **Apply Faraday's Law**
4. **Use Lenz's Law for direction**
5. **Consider all contributions if multiple sources**

## Calculus-Based Derivations

When asked to derive an equation:

1. **State the fundamental law** you're using
2. **Set up the integral/derivative clearly**
3. **Show substitutions**
4. **Evaluate limits**
5. **Simplify to final form**

### Example Structure
"Starting with Gauss's Law: $\oint \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\epsilon_0}$

For a spherical Gaussian surface of radius r > R around a uniformly charged sphere:

$E(4\pi r^2) = \frac{Q}{\epsilon_0}$

Therefore: $E = \frac{Q}{4\pi\epsilon_0 r^2}$"

---

# ⚠️ Common Mistakes to Avoid

## Conceptual Errors

### Electric Fields and Forces
- ❌ Confusing $\vec{E}$ (field) with $\vec{F}$ (force)
- ❌ Forgetting that $\vec{E}$ is a vector (must consider components)
- ❌ Adding magnitudes instead of vector components
- ❌ Wrong sign on potential (positive charge = positive potential)

### Gauss's Law
- ❌ Using Gauss's Law without proper symmetry
- ❌ Forgetting that $Q_{enc}$ is only charge INSIDE Gaussian surface
- ❌ Confusing surface area of Gaussian surface with area of physical object
- ❌ Wrong calculation of $Q_{enc}$ for non-uniform distributions

### Capacitors
- ❌ Confusing series and parallel formulas (opposite of resistors!)
- ❌ Forgetting that dielectric INCREASES capacitance
- ❌ Wrong energy formula (three equivalent forms—use the right one)
- ❌ Not distinguishing between isolated capacitor and battery-connected

### Circuits
- ❌ Wrong sign conventions in Kirchhoff loops
- ❌ Forgetting that ideal wires have no resistance
- ❌ Treating non-ideal batteries as ideal
- ❌ Wrong time constant (RC vs L/R)
- ❌ Confusing charging and discharging equations

### Magnetism
- ❌ Forgetting that magnetic force does no work ($\vec{F} \perp \vec{v}$)
- ❌ Wrong right-hand rule application
- ❌ Forgetting that $\vec{F} = q\vec{v} \times \vec{B}$ requires MOVING charge
- ❌ Confusing Biot-Savart and Ampère's Law applications

### Induction
- ❌ Wrong sign in Faraday's Law (Lenz's Law)
- ❌ Forgetting the N in $\mathcal{E} = -N\frac{d\Phi}{dt}$
- ❌ Confusing motional EMF with transformer EMF
- ❌ Wrong area in flux calculation

## Mathematical Errors

### Calculus
- ❌ Wrong integration limits
- ❌ Forgetting absolute value in $\int \frac{1}{x}dx = \ln|x|$
- ❌ Wrong chain rule application
- ❌ Dropping negative signs

### Vectors
- ❌ Wrong cross product direction
- ❌ Not breaking into components properly
- ❌ Forgetting $\sin\theta$ or $\cos\theta$ in dot/cross products

### Units
- ❌ Mixing SI and CGS units
- ❌ Forgetting to convert cm to m
- ❌ Wrong prefix (milli, micro, nano, pico)

## Exam Strategy Errors

- ❌ Not reading the entire problem first
- ❌ Not drawing diagrams
- ❌ Not showing work (losing partial credit)
- ❌ Spending too much time on one problem
- ❌ Not checking units of final answer
- ❌ Not using provided formula sheet

---

# 📋 AP Physics C: E&M Formula Sheet Reference

## Constants (Provided on Exam)

| Constant | Symbol | Value |
|----------|--------|-------|
| Elementary charge | $e$ | $1.60 \times 10^{-19}$ C |
| Coulomb constant | $k$ | $8.99 \times 10^9$ N·m²/C² |
| Permittivity of free space | $\epsilon_0$ | $8.85 \times 10^{-12}$ C²/N·m² |
| Permeability of free space | $\mu_0$ | $4\pi \times 10^{-7}$ T·m/A |
| Speed of light | $c$ | $3.00 \times 10^8$ m/s |
| Electron mass | $m_e$ | $9.11 \times 10^{-31}$ kg |
| Proton mass | $m_p$ | $1.67 \times 10^{-27}$ kg |

## Unit 1: Electrostatics

$$F = \frac{1}{4\pi\epsilon_0}\frac{q_1 q_2}{r^2} \qquad \vec{E} = \frac{\vec{F}}{q} \qquad \oint \vec{E} \cdot d\vec{A} = \frac{Q}{\epsilon_0}$$

$$V = \frac{1}{4\pi\epsilon_0}\frac{q}{r} \qquad U_E = qV = \frac{1}{4\pi\epsilon_0}\frac{q_1 q_2}{r}$$

$$\vec{E} = -\nabla V \qquad E_x = -\frac{dV}{dx}$$

## Unit 2: Capacitors

$$C = \frac{Q}{V} \qquad C = \kappa\epsilon_0\frac{A}{d}$$

$$U_C = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C}$$

$$\text{Parallel: } C_{eq} = \sum C_i \qquad \text{Series: } \frac{1}{C_{eq}} = \sum \frac{1}{C_i}$$

## Unit 3: Circuits

$$I = \frac{dQ}{dt} \qquad V = IR \qquad R = \frac{\rho L}{A}$$

$$P = IV \qquad \text{Series: } R_{eq} = \sum R_i \qquad \text{Parallel: } \frac{1}{R_{eq}} = \sum \frac{1}{R_i}$$

$$Q(t) = Q_{max}(1-e^{-t/RC}) \qquad Q(t) = Q_0 e^{-t/RC}$$

## Unit 4: Magnetism

$$\vec{F} = q\vec{v} \times \vec{B} \qquad \vec{F} = I\vec{L} \times \vec{B}$$

$$d\vec{B} = \frac{\mu_0}{4\pi}\frac{I \, d\vec{l} \times \hat{r}}{r^2} \qquad \oint \vec{B} \cdot d\vec{l} = \mu_0 I$$

$$B_{wire} = \frac{\mu_0 I}{2\pi r} \qquad B_{solenoid} = \mu_0 nI$$

## Unit 5: Electromagnetism

$$\Phi_B = \int \vec{B} \cdot d\vec{A} \qquad \mathcal{E} = -\frac{d\Phi_B}{dt}$$

$$\mathcal{E} = -L\frac{dI}{dt} \qquad L = \frac{\mu_0 N^2 A}{l}$$

$$U_L = \frac{1}{2}LI^2 \qquad I(t) = I_{max}(1-e^{-Rt/L})$$

---

# 🎯 Final Exam Checklist

## Before the Exam

- [ ] Review all formulas (even though sheet is provided)
- [ ] Practice Gauss's Law with all geometries
- [ ] Master circuit analysis (DC and RC)
- [ ] Know Biot-Savart vs Ampère's Law applications
- [ ] Practice Faraday's Law problems
- [ ] Review right-hand rules
- [ ] Bring approved calculator with fresh batteries
- [ ] Get good sleep the night before

## During the Exam

### Multiple Choice Strategy
- [ ] Read carefully—watch for "NOT" or "EXCEPT"
- [ ] Use process of elimination
- [ ] Check units for reasonableness
- [ ] Don't spend too long on any question
- [ ] Mark difficult questions to return to

### Free Response Strategy
- [ ] Read entire problem first
- [ ] Draw diagrams with labeled variables
- [ ] Write starting equations
- [ ] Show all mathematical steps
- [ ] Include units in final answers
- [ ] Box final answers clearly
- [ ] Don't erase wrong work (might get partial credit)
- [ ] Answer every part, even with incomplete work

## Key Relationships to Remember

### Electric ↔ Magnetic Parallels

| Electric | Magnetic |
|----------|----------|
| $\vec{E}$ | $\vec{B}$ |
| $q$ | Magnetic pole (N/S) |
| $\epsilon_0$ | $\mu_0$ |
| $\frac{1}{4\pi\epsilon_0}$ | $\frac{\mu_0}{4\pi}$ |
| Gauss's Law | Ampère's Law |
| Coulomb's Law | Biot-Savart Law |

### Capacitor ↔ Inductor Parallels

| Capacitor | Inductor |
|-----------|----------|
| $C = Q/V$ | $L = N\Phi/I$ |
| $U = \frac{1}{2}CV^2$ | $U = \frac{1}{2}LI^2$ |
| $u = \frac{1}{2}\epsilon_0 E^2$ | $u = \frac{B^2}{2\mu_0}$ |
| τ = RC | τ = L/R |
| Opposes voltage change | Opposes current change |

### Series ↔ Parallel (Opposite Rules!)

| Capacitors | Resistors |
|------------|-----------|
| Series: $\frac{1}{C_{eq}} = \sum\frac{1}{C_i}$ | Series: $R_{eq} = \sum R_i$ |
| Parallel: $C_{eq} = \sum C_i$ | Parallel: $\frac{1}{R_{eq}} = \sum\frac{1}{R_i}$ |

---

# 🏆 Quick Reference: What Equation to Use

## Finding Electric Field

| Situation | Method |
|-----------|--------|
| Point charge | $E = kq/r^2$ |
| Multiple point charges | Superposition |
| Continuous distribution | Integration |
| High symmetry | Gauss's Law |
| From potential | $E = -dV/dx$ |

## Finding Magnetic Field

| Situation | Method |
|-----------|--------|
| Infinite straight wire | Ampère's Law: $B = \mu_0I/2\pi r$ |
| Finite wire | Biot-Savart Law |
| Circular loop | Biot-Savart or formula |
| Solenoid | Ampère's Law: $B = \mu_0 nI$ |
| Arbitrary shape | Biot-Savart Law |

## Finding EMF

| Situation | Formula |
|-----------|---------|
| Changing B-field | $\mathcal{E} = -dΦ_B/dt$ |
| Moving conductor | $\mathcal{E} = BLv$ |
| Rotating loop | $\mathcal{E} = NBA\omega\sin(\omega t)$ |
| Inductor with changing I | $\mathcal{E} = -LdI/dt$ |

## Circuit Analysis

| Situation | Method |
|-----------|--------|
| Simple series/parallel | Equivalent resistance |
| Complex network | Kirchhoff's Rules |
| RC transient | Exponential equations |
| RL transient | Exponential equations |
| LC oscillation | Simple harmonic motion |

---

**Good luck on your AP Physics C: E&M exam! ⚡🎓**

Remember: Physics is about understanding relationships, not just memorizing formulas. If you understand WHY the equations work, you can derive what you need!

:::GUIDE:::
