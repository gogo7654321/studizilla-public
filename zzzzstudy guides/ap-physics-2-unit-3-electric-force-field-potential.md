:::GUIDE:::
unit::=3
title::=⚡ Unit 3: Electric Force, Field, and Potential
desc::=Master Coulomb's law, electric fields, and potential
diff::=Hard
time::=60 min
tags::=physics-2,electricity,coulomb,potential
content::=

# ⚡ Unit 3: Electric Force, Field, and Potential

## Introduction

Electric phenomena govern everything from lightning strikes to the neural signals in your brain. This unit explores the fundamental concepts of electric charge, the forces between charges, electric fields, and electric potential—the foundation for understanding circuits, electromagnetism, and modern electronics.

---

## 3.1 Electric Charge

### Fundamental Properties of Charge

**Electric charge** is a fundamental property of matter that causes it to experience a force in an electromagnetic field.

**Key Properties:**
- **Two types**: Positive (+) and Negative (−)
- **Like charges repel**, unlike charges attract
- **Quantized**: Comes in discrete units of elementary charge
- **Conserved**: Total charge in an isolated system remains constant

### Elementary Charge

The smallest unit of free charge is the **elementary charge**:

$$e = 1.602 \times 10^{-19} \text{ C}$$

| Particle | Charge |
|----------|--------|
| Proton | +e = +1.602 × 10⁻¹⁹ C |
| Electron | −e = −1.602 × 10⁻¹⁹ C |
| Neutron | 0 |

### Charging Methods

**1. Friction (Triboelectric Effect)**
- Rubbing two materials transfers electrons
- Example: Rubbing a balloon on hair

**2. Conduction**
- Direct contact between charged and neutral objects
- Charges transfer until equilibrium
- Both objects end up with same sign charge

**3. Induction**
- Charging without contact
- Requires grounding to separate charges permanently
- Induced charge is opposite to inducing charge

### Conservation of Charge

> **Law of Conservation of Charge**: The total electric charge in an isolated system remains constant. Charge can be transferred but cannot be created or destroyed.

**Example**: When you rub a glass rod with silk:
- Glass loses electrons → becomes positive
- Silk gains electrons → becomes negative
- Total charge: Still zero

---

## 3.2 Coulomb's Law

### The Electric Force Between Point Charges

**Coulomb's Law** describes the electrostatic force between two point charges:

$$F_e = k\frac{|q_1||q_2|}{r^2}$$

Where:
- $F_e$ = electric force (N)
- $k$ = Coulomb's constant = $8.99 \times 10^9$ N·m²/C²
- $q_1, q_2$ = charges (C)
- $r$ = distance between charge centers (m)

### Coulomb's Constant

$$k = \frac{1}{4\pi\epsilon_0} = 8.99 \times 10^9 \text{ N·m}^2/\text{C}^2$$

Where $\epsilon_0 = 8.85 \times 10^{-12}$ C²/(N·m²) is the **permittivity of free space**.

### Vector Nature of Electric Force

The electric force is a **vector quantity**:

$$\vec{F}_{12} = k\frac{q_1 q_2}{r^2}\hat{r}_{12}$$

- **Positive product** ($q_1 q_2 > 0$): Force is repulsive (along $\hat{r}$ away)
- **Negative product** ($q_1 q_2 < 0$): Force is attractive (opposite to $\hat{r}$)

### Superposition Principle

When multiple charges are present, the **net force** on any charge is the **vector sum** of forces from all other charges:

$$\vec{F}_{net} = \vec{F}_1 + \vec{F}_2 + \vec{F}_3 + ... = \sum_i \vec{F}_i$$

**Strategy for Multiple Charges:**
1. Identify all charges and their positions
2. Calculate each individual force (magnitude and direction)
3. Break forces into x and y components
4. Sum components: $F_x = \sum F_{ix}$, $F_y = \sum F_{iy}$
5. Find magnitude: $F_{net} = \sqrt{F_x^2 + F_y^2}$
6. Find direction: $\theta = \tan^{-1}(F_y/F_x)$

### Comparing Electric and Gravitational Forces

| Property | Electric Force | Gravitational Force |
|----------|---------------|---------------------|
| Formula | $F = k\frac{q_1q_2}{r^2}$ | $F = G\frac{m_1m_2}{r^2}$ |
| Nature | Attractive or repulsive | Always attractive |
| Relative strength | Much stronger | Much weaker |
| Constant | k = 8.99 × 10⁹ | G = 6.67 × 10⁻¹¹ |

**Example**: For an electron and proton:
$$\frac{F_e}{F_g} \approx 2.3 \times 10^{39}$$

Electric force is ~10³⁹ times stronger!

---

## 3.3 Electric Field

### Concept of the Electric Field

The **electric field** is a vector field that describes the force a positive test charge would experience at each point in space.

**Definition:**

$$\vec{E} = \frac{\vec{F}}{q_0}$$

Where:
- $\vec{E}$ = electric field (N/C or V/m)
- $\vec{F}$ = force on test charge (N)
- $q_0$ = positive test charge (C)

### Electric Field Due to a Point Charge

For a point charge Q, the electric field at distance r is:

$$E = k\frac{|Q|}{r^2}$$

**Direction:**
- Away from positive charges
- Toward negative charges

**Vector form:**

$$\vec{E} = k\frac{Q}{r^2}\hat{r}$$

### Why Use Electric Fields?

The field concept allows us to:
1. Describe the effect of a charge on surrounding space
2. Calculate forces without knowing the source details
3. Understand how electromagnetic waves propagate
4. Separate the source from the effect

### Electric Field from Multiple Charges

The **superposition principle** applies to electric fields:

$$\vec{E}_{net} = \vec{E}_1 + \vec{E}_2 + \vec{E}_3 + ... = \sum_i \vec{E}_i$$

**Procedure:**
1. Calculate each field's magnitude using $E = k|Q|/r^2$
2. Determine each field's direction (away from +, toward −)
3. Resolve into components
4. Add components vectorially

### Special Configurations

**Electric Dipole:**
Two equal and opposite charges (+q and −q) separated by distance d.

At a point far from the dipole (r >> d):
- Along the axis: $E \propto \frac{1}{r^3}$
- Perpendicular to axis: $E \propto \frac{1}{r^3}$

**Dipole moment:** $\vec{p} = q\vec{d}$ (pointing from − to +)

---

## 3.4 Electric Field Lines

### Rules for Drawing Electric Field Lines

**Field lines** are visual representations of the electric field.

**Rules:**
1. Lines start on positive charges and end on negative charges
2. The number of lines is proportional to charge magnitude
3. Lines never cross each other
4. Field direction is tangent to the line at each point
5. Line density indicates field strength
6. Lines are perpendicular to conducting surfaces
7. Lines are symmetric around isolated charges

### Field Line Patterns

**Point Charges:**
- Positive charge: Lines radiate outward
- Negative charge: Lines point inward
- Number of lines ∝ |Q|

**Two Positive Charges:**
- Lines repel between them
- Neutral point exists between charges (E = 0)

**Two Negative Charges:**
- Lines enter both charges
- Neutral point exists between charges

**Positive and Negative Charges (Dipole):**
- Lines go from + to −
- Curved paths between charges
- Strongest field between charges

**Parallel Plate Capacitor:**
- Uniform field between plates
- Lines are parallel and equally spaced
- Fringe effects at edges

### Interpreting Field Line Diagrams

| Observation | Meaning |
|-------------|---------|
| Lines close together | Strong field |
| Lines far apart | Weak field |
| Lines crossing | IMPOSSIBLE |
| Lines are straight | Uniform field |
| Lines are curved | Non-uniform field |

---

## 3.5 Electric Potential Energy

### Work Done by Electric Forces

When a charge moves in an electric field, work is done:

$$W = \vec{F} \cdot \vec{d} = Fd\cos\theta$$

For a uniform field:
$$W = qEd\cos\theta$$

### Electric Potential Energy of Point Charges

The **electric potential energy** of two point charges:

$$U_e = k\frac{q_1 q_2}{r}$$

**Note:** Unlike force, there's no absolute value—sign matters!

| Signs | $U_e$ | Physical Meaning |
|-------|-------|------------------|
| Same signs (+/+ or −/−) | Positive | Energy required to bring together |
| Opposite signs (+/−) | Negative | Energy released when brought together |

### Reference Point

Potential energy is defined relative to a reference:
- For point charges: $U = 0$ at $r = \infty$
- Bringing charges from infinity requires work (or releases energy)

### Potential Energy of Multiple Charges

For a system of charges, sum all pairs:

$$U_{total} = \sum_{i<j} k\frac{q_i q_j}{r_{ij}}$$

**Example (3 charges):**
$$U = k\frac{q_1q_2}{r_{12}} + k\frac{q_1q_3}{r_{13}} + k\frac{q_2q_3}{r_{23}}$$

### Energy Conservation with Electric Forces

Total mechanical energy is conserved in electrostatic systems:

$$KE_i + U_i = KE_f + U_f$$

$$\frac{1}{2}mv_i^2 + k\frac{q_1q_2}{r_i} = \frac{1}{2}mv_f^2 + k\frac{q_1q_2}{r_f}$$

---

## 3.6 Electric Potential

### Definition of Electric Potential

**Electric potential** (voltage) is potential energy per unit charge:

$$V = \frac{U_e}{q}$$

Units: **Volts (V)** = Joules/Coulomb (J/C)

### Electric Potential Due to a Point Charge

$$V = k\frac{Q}{r}$$

Where:
- $V$ = electric potential (V)
- $Q$ = source charge (C) — include sign!
- $r$ = distance from charge (m)

**Key differences from Electric Field:**
| Electric Field ($\vec{E}$) | Electric Potential ($V$) |
|---------------------------|-------------------------|
| Vector | Scalar |
| Direction matters | No direction |
| $E = kQ/r^2$ | $V = kQ/r$ |
| Units: N/C or V/m | Units: V |

### Potential from Multiple Charges

Since potential is a scalar, simply add algebraically:

$$V_{net} = V_1 + V_2 + V_3 + ... = \sum_i k\frac{Q_i}{r_i}$$

**No vector addition needed!** This makes potential calculations often simpler than field calculations.

### Potential Difference (Voltage)

The **potential difference** between two points:

$$\Delta V = V_B - V_A = \frac{\Delta U}{q} = -\frac{W_{by field}}{q}$$

**Work-Energy Relationship:**
$$W_{by field} = q(V_A - V_B) = -q\Delta V$$
$$\Delta U = q\Delta V$$
$$\Delta KE = -\Delta U = -q\Delta V$$

### The Electron-Volt (eV)

An **electron-volt** is the energy gained by an electron accelerating through 1 volt:

$$1 \text{ eV} = 1.602 \times 10^{-19} \text{ J}$$

Useful for atomic and nuclear physics where charges and energies are small.

---

## 3.7 Equipotential Lines and Surfaces

### What are Equipotentials?

**Equipotential lines** (2D) or **surfaces** (3D) connect points of equal electric potential.

**Key Properties:**
1. No work is done moving a charge along an equipotential
2. Equipotentials are always perpendicular to field lines
3. Equipotentials never cross each other
4. Closer spacing = stronger field

### Equipotential Patterns

**Point Charge:**
- Concentric circles (2D) or spheres (3D)
- Spacing increases with distance

**Uniform Field:**
- Parallel lines (2D) or planes (3D)
- Equally spaced for constant potential difference

**Dipole:**
- Complex curved surfaces
- Perpendicular to curved field lines

### Relationship: Equipotentials and Field Lines

| Field Lines | Equipotentials |
|-------------|----------------|
| Show direction of $\vec{E}$ | Connect equal V points |
| Point from high to low V | Perpendicular to field lines |
| Tangent gives $\vec{E}$ direction | No direction (scalar) |

---

## 3.8 Relationship Between Electric Field and Potential

### Field as the Gradient of Potential

The electric field is related to how potential changes with position:

$$E = -\frac{dV}{dx}$$ (in 1D)

$$\vec{E} = -\nabla V = -\left(\frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k}\right)$$

**Simplified for uniform field:**
$$E = -\frac{\Delta V}{\Delta x} = \frac{V_A - V_B}{d}$$

### Physical Interpretation

- Electric field points from high to low potential
- Field magnitude = rate of potential change with distance
- Where V is constant (equipotential), E has no component along that direction

### Units Connection

$$[E] = \frac{V}{m} = \frac{N}{C}$$

Both are valid units for electric field!

### Calculating Potential from Field

$$V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l}$$

For uniform field along displacement:
$$\Delta V = -Ed$$

---

## 3.9 Conductors in Electrostatic Equilibrium

### Properties of Conductors

In **electrostatic equilibrium** (charges not moving):

1. **$\vec{E} = 0$ inside the conductor**
   - If E ≠ 0, charges would move (not equilibrium)
   
2. **All excess charge resides on the surface**
   - Charges repel to maximize distance
   
3. **$\vec{E}$ at surface is perpendicular to surface**
   - Any parallel component would move surface charges
   
4. **Surface is an equipotential**
   - No work moving charge along surface
   
5. **Charge density is highest at sharp points**
   - Explains lightning rods and corona discharge

### Electric Field at Conductor Surface

Just outside a conductor surface:

$$E = \frac{\sigma}{\epsilon_0}$$

Where $\sigma$ = surface charge density (C/m²)

### Electrostatic Shielding (Faraday Cage)

A conducting shell shields its interior from external electric fields:
- External fields induce charges on outer surface
- These induced charges cancel the field inside
- Interior remains at constant potential

**Applications:**
- Faraday cages protect electronics
- Car interior safe during lightning
- Shielded cables prevent interference

### Charge Distribution on Conductors

**Solid Conductor:**
- All charge on outer surface
- E = 0 everywhere inside

**Hollow Conductor:**
- Charge on outer surface only (if no internal charges)
- E = 0 in the cavity

**Conductor with Cavity Containing Charge q:**
- Inner surface has charge −q
- Outer surface has remaining charge
- Field exists in cavity, none in conductor material

---

## 3.10 Capacitors and Parallel Plates

### Parallel Plate Capacitor

Two parallel conducting plates separated by distance d:

**Electric Field (between plates):**
$$E = \frac{\sigma}{\epsilon_0} = \frac{Q}{\epsilon_0 A}$$

The field is **uniform** between the plates (ignoring edge effects).

**Potential Difference:**
$$\Delta V = Ed = \frac{Qd}{\epsilon_0 A}$$

### Capacitance

**Capacitance** measures ability to store charge:

$$C = \frac{Q}{\Delta V}$$

Units: **Farads (F)** = Coulombs/Volt

For parallel plates:
$$C = \frac{\epsilon_0 A}{d}$$

Where:
- A = plate area (m²)
- d = separation (m)

### Energy Stored in a Capacitor

$$U = \frac{1}{2}Q\Delta V = \frac{1}{2}C(\Delta V)^2 = \frac{Q^2}{2C}$$

### Energy Density

Energy per unit volume in the electric field:

$$u = \frac{U}{Volume} = \frac{1}{2}\epsilon_0 E^2$$

This is a general result—energy is stored in the electric field itself!

---

## 3.11 Motion of Charges in Electric Fields

### Force on a Charge

$$\vec{F} = q\vec{E}$$

- Positive charges accelerate in direction of $\vec{E}$
- Negative charges accelerate opposite to $\vec{E}$

### Acceleration

$$\vec{a} = \frac{q\vec{E}}{m}$$

### Uniform Field Motion

In a uniform electric field:
- Constant acceleration (like gravity)
- Kinematic equations apply
- Projectile-like motion if initial velocity is perpendicular to field

**Vertical deflection (for horizontal initial velocity):**
$$y = \frac{1}{2}at^2 = \frac{qE}{2m}\left(\frac{x}{v_0}\right)^2$$

### Energy Analysis

$$qV = \frac{1}{2}mv^2$$

Solving for final speed:
$$v = \sqrt{\frac{2qV}{m}}$$

---

## 3.12 Key Formulas Summary

### Electric Charge
- Elementary charge: $e = 1.602 \times 10^{-19}$ C

### Coulomb's Law
$$F = k\frac{|q_1||q_2|}{r^2}$$
$$k = 8.99 \times 10^9 \text{ N·m}^2/\text{C}^2$$

### Electric Field
$$\vec{E} = \frac{\vec{F}}{q}$$
$$E = k\frac{|Q|}{r^2}$$ (point charge)
$$E = \frac{\sigma}{\epsilon_0}$$ (at conductor surface)

### Electric Potential Energy
$$U = k\frac{q_1q_2}{r}$$ (two point charges)

### Electric Potential
$$V = \frac{U}{q} = k\frac{Q}{r}$$ (point charge)
$$\Delta V = -\int \vec{E} \cdot d\vec{l}$$

### Field-Potential Relationship
$$E = -\frac{dV}{dx}$$
$$\Delta V = -Ed$$ (uniform field)

### Capacitance
$$C = \frac{Q}{\Delta V} = \frac{\epsilon_0 A}{d}$$ (parallel plates)

### Energy
$$U = \frac{1}{2}C(\Delta V)^2 = \frac{1}{2}\epsilon_0 E^2 \cdot (Volume)$$

---

## 3.13 Practice Problems

### Problem 1: Coulomb's Law
Two charges, $q_1 = +3.0$ μC and $q_2 = -5.0$ μC, are separated by 0.20 m. Calculate the electric force between them.

**Solution:**
$$F = k\frac{|q_1||q_2|}{r^2} = (8.99 \times 10^9)\frac{(3.0 \times 10^{-6})(5.0 \times 10^{-6})}{(0.20)^2}$$
$$F = (8.99 \times 10^9)\frac{1.5 \times 10^{-11}}{0.04} = 3.37 \text{ N}$$

The force is **attractive** (opposite charges).

---

### Problem 2: Superposition of Forces
Three charges are arranged: $q_1 = +2.0$ μC at origin, $q_2 = +3.0$ μC at x = 0.30 m, $q_3 = -4.0$ μC at y = 0.40 m. Find the net force on $q_1$.

**Solution:**

Force from $q_2$ on $q_1$:
$$F_{21} = k\frac{(2.0 \times 10^{-6})(3.0 \times 10^{-6})}{(0.30)^2} = 0.60 \text{ N}$$
Direction: −x (repulsion)

Force from $q_3$ on $q_1$:
$$F_{31} = k\frac{(2.0 \times 10^{-6})(4.0 \times 10^{-6})}{(0.40)^2} = 0.45 \text{ N}$$
Direction: +y (attraction)

Net force:
$$F_{net} = \sqrt{(0.60)^2 + (0.45)^2} = 0.75 \text{ N}$$
$$\theta = \tan^{-1}\left(\frac{0.45}{0.60}\right) = 36.9°$$ above −x axis

---

### Problem 3: Electric Field
A charge of +8.0 nC creates an electric field. At what distance is the field strength 200 N/C?

**Solution:**
$$E = k\frac{Q}{r^2}$$
$$200 = (8.99 \times 10^9)\frac{8.0 \times 10^{-9}}{r^2}$$
$$r^2 = \frac{(8.99 \times 10^9)(8.0 \times 10^{-9})}{200} = 0.36$$
$$r = 0.60 \text{ m}$$

---

### Problem 4: Superposition of Fields
Two charges, $q_1 = +4.0$ μC and $q_2 = +4.0$ μC, are 0.60 m apart. Find the electric field at the midpoint between them.

**Solution:**
At midpoint, r = 0.30 m from each charge.

$$E_1 = k\frac{Q}{r^2} = (8.99 \times 10^9)\frac{4.0 \times 10^{-6}}{(0.30)^2} = 4.0 \times 10^5 \text{ N/C}$$

$E_1$ points away from $q_1$ (to the right)
$E_2$ points away from $q_2$ (to the left)

Since they're equal and opposite:
$$E_{net} = 0$$

---

### Problem 5: Electric Potential
Find the electric potential at a point 0.20 m from a +5.0 μC charge.

**Solution:**
$$V = k\frac{Q}{r} = (8.99 \times 10^9)\frac{5.0 \times 10^{-6}}{0.20}$$
$$V = 2.25 \times 10^5 \text{ V} = 225 \text{ kV}$$

---

### Problem 6: Potential from Multiple Charges
Charges of +3.0 μC and −3.0 μC are 0.40 m apart. Find the potential at the midpoint.

**Solution:**
At midpoint, r = 0.20 m from each.

$$V_1 = k\frac{Q_1}{r} = (8.99 \times 10^9)\frac{3.0 \times 10^{-6}}{0.20} = 1.35 \times 10^5 \text{ V}$$

$$V_2 = k\frac{Q_2}{r} = (8.99 \times 10^9)\frac{-3.0 \times 10^{-6}}{0.20} = -1.35 \times 10^5 \text{ V}$$

$$V_{net} = V_1 + V_2 = 0$$

---

### Problem 7: Work and Potential Energy
How much work is required to bring a +2.0 μC charge from infinity to a point 0.50 m from a +6.0 μC charge?

**Solution:**
$$W = \Delta U = U_f - U_i = k\frac{q_1q_2}{r} - 0$$
$$W = (8.99 \times 10^9)\frac{(2.0 \times 10^{-6})(6.0 \times 10^{-6})}{0.50}$$
$$W = 0.216 \text{ J} = 216 \text{ mJ}$$

---

### Problem 8: Electron Acceleration
An electron is accelerated from rest through a potential difference of 500 V. What is its final speed?

**Solution:**
$$qV = \frac{1}{2}mv^2$$
$$v = \sqrt{\frac{2qV}{m}} = \sqrt{\frac{2(1.602 \times 10^{-19})(500)}{9.11 \times 10^{-31}}}$$
$$v = 1.33 \times 10^7 \text{ m/s}$$

---

### Problem 9: Field and Potential Relationship
The electric potential varies linearly from 100 V at x = 0 to 20 V at x = 0.40 m. What is the electric field?

**Solution:**
$$E = -\frac{\Delta V}{\Delta x} = -\frac{20 - 100}{0.40 - 0} = -\frac{-80}{0.40} = 200 \text{ V/m}$$

The field points in the +x direction (from high to low potential).

---

### Problem 10: Parallel Plate Capacitor
A parallel plate capacitor has plates of area 0.050 m² separated by 2.0 mm. Find: (a) capacitance, (b) charge if connected to 12 V battery.

**Solution:**

(a) Capacitance:
$$C = \frac{\epsilon_0 A}{d} = \frac{(8.85 \times 10^{-12})(0.050)}{2.0 \times 10^{-3}}$$
$$C = 2.21 \times 10^{-10} \text{ F} = 221 \text{ pF}$$

(b) Charge:
$$Q = CV = (2.21 \times 10^{-10})(12) = 2.65 \times 10^{-9} \text{ C} = 2.65 \text{ nC}$$

---

### Problem 11: Energy in Capacitor
A 4.0 μF capacitor is charged to 200 V. How much energy is stored?

**Solution:**
$$U = \frac{1}{2}CV^2 = \frac{1}{2}(4.0 \times 10^{-6})(200)^2$$
$$U = 0.080 \text{ J} = 80 \text{ mJ}$$

---

### Problem 12: Charge Motion in Uniform Field
A proton enters a uniform electric field of 5000 N/C perpendicular to its initial velocity of 2.0 × 10⁶ m/s. After traveling 0.10 m horizontally, find its vertical deflection.

**Solution:**

Acceleration:
$$a = \frac{qE}{m} = \frac{(1.602 \times 10^{-19})(5000)}{1.67 \times 10^{-27}} = 4.8 \times 10^{11} \text{ m/s}^2$$

Time in field:
$$t = \frac{x}{v_x} = \frac{0.10}{2.0 \times 10^6} = 5.0 \times 10^{-8} \text{ s}$$

Vertical deflection:
$$y = \frac{1}{2}at^2 = \frac{1}{2}(4.8 \times 10^{11})(5.0 \times 10^{-8})^2$$
$$y = 6.0 \times 10^{-4} \text{ m} = 0.60 \text{ mm}$$

---

## 3.14 Common Mistakes to Avoid

### Mistake 1: Forgetting Vector Nature
❌ Adding electric forces or fields as scalars
✅ Use vector components, then add

### Mistake 2: Sign Errors in Potential
❌ Using absolute value for potential: $V = k|Q|/r$
✅ Include sign: $V = kQ/r$ (Q can be negative)

### Mistake 3: Confusing E and V
❌ "E = 0 means V = 0"
✅ E = 0 means V is constant (not necessarily zero)

### Mistake 4: Force Direction
❌ Assuming force on any charge is in direction of E
✅ Negative charges feel force opposite to E direction

### Mistake 5: Potential Energy Signs
❌ Using U = kq₁q₂/r with absolute values
✅ Include signs: opposite charges have negative U

### Mistake 6: Field Inside Conductor
❌ Assuming E inside depends on external field
✅ E = 0 inside conductor in equilibrium, always

---

## 3.15 AP Exam Tips

### Free Response Strategies

1. **Draw diagrams** showing charges, forces, fields
2. **Label all vectors** with arrows and magnitudes
3. **Show your work** with units at each step
4. **Check signs** especially for potential and potential energy
5. **Use energy methods** when asked about speeds

### Common AP Question Types

- Calculate net force on a charge (superposition)
- Find where E = 0 between charges
- Sketch field lines for charge configurations
- Relate field and potential graphically
- Analyze motion of charged particles
- Calculate energy stored in capacitors
- Apply conservation of energy with electric PE

### Key Relationships to Memorize

$$F = qE \quad \rightarrow \quad E = F/q$$
$$U = qV \quad \rightarrow \quad V = U/q$$
$$E = -\frac{dV}{dx}$$
$$W = -\Delta U = q(V_A - V_B)$$

---

## Conceptual Check Questions

1. Why can't electric field lines cross?

2. A positive charge is released from rest in a uniform electric field. Describe its motion.

3. If the electric field is zero at a point, must the electric potential also be zero there? Explain.

4. Why does all excess charge reside on the surface of a conductor?

5. How does doubling the distance between two point charges affect: (a) the force, (b) the potential energy?

6. An electron moves from point A to point B. If $V_B > V_A$, does the electron gain or lose kinetic energy?

7. Why is it easier to calculate electric potential than electric field for multiple charges?

8. Explain why a Faraday cage protects its contents from external electric fields.

---

## Summary

This unit established the fundamental concepts connecting charge, force, field, energy, and potential:

- **Coulomb's Law** quantifies electric forces between charges
- **Electric fields** describe how charges affect surrounding space
- **Electric potential** provides a scalar approach to energy analysis
- **Conductors** have unique properties in electrostatic equilibrium
- **Energy conservation** applies to electrostatic systems

These concepts form the foundation for understanding circuits, magnetism, and electromagnetic waves in upcoming units.

:::GUIDE:::
