:::GUIDE:::
unit::=2
title::=⚡ Unit 2: Conductors, Capacitors, and Dielectrics
desc::=Master electric potential, capacitance, and energy storage with calculus
diff::=Very Hard
time::=60 min
tags::=physics-c,em,capacitors,potential,dielectrics
content::=

# ⚡ Unit 2: Conductors, Capacitors, and Dielectrics

Welcome to one of the most mathematically rich units in AP Physics C: E&M! Here you'll master **electric potential**, the concept of **capacitance**, and how **dielectrics** modify electric fields. This unit brings together line integrals, energy concepts, and practical circuit elements.

---

## 📚 Table of Contents

1. [Electric Potential from Electric Field](#electric-potential-from-electric-field)
2. [Potential Due to Point Charges](#potential-due-to-point-charges)
3. [Potential from Continuous Distributions](#potential-from-continuous-distributions)
4. [Equipotential Surfaces](#equipotential-surfaces)
5. [Relationship Between E and V](#relationship-between-e-and-v)
6. [Conductors in Electrostatic Equilibrium](#conductors-in-electrostatic-equilibrium)
7. [Capacitance Definition](#capacitance-definition)
8. [Parallel Plate Capacitor](#parallel-plate-capacitor)
9. [Cylindrical Capacitor](#cylindrical-capacitor)
10. [Spherical Capacitor](#spherical-capacitor)
11. [Capacitors in Series and Parallel](#capacitors-in-series-and-parallel)
12. [Energy Stored in Capacitors](#energy-stored-in-capacitors)
13. [Dielectrics and Polarization](#dielectrics-and-polarization)
14. [Practice Problems](#practice-problems)

---

## Electric Potential from Electric Field

### The Line Integral Definition

Electric potential is defined through a **line integral** of the electric field:

$$V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l}$$

> 💡 **Key Insight**: The negative sign means moving **against** the electric field **increases** potential.

### Understanding the Line Integral

The line integral computes work per unit charge:

$$W_{A \to B} = q \int_A^B \vec{E} \cdot d\vec{l} = -q(V_B - V_A)$$

**Important properties:**
- The integral is **path-independent** (electrostatic field is conservative)
- Only the endpoints matter, not the route taken
- Unit: **Volt (V) = J/C**

### Potential from a Uniform Field

For a uniform electric field $\vec{E} = E_0 \hat{x}$:

$$V(x) - V(0) = -\int_0^x E_0 \, dx' = -E_0 x$$

If we set $V(0) = 0$:
$$V(x) = -E_0 x$$

> ⚠️ **Common Mistake**: Forgetting the negative sign! Moving in the direction of E decreases V.

### Example: Non-Uniform Field

Given $\vec{E} = \alpha x^2 \hat{x}$, find $V(x)$ with $V(0) = 0$:

$$V(x) = -\int_0^x \alpha x'^2 \, dx' = -\frac{\alpha x^3}{3}$$

---

## Potential Due to Point Charges

### Single Point Charge

The electric field of a point charge is:
$$\vec{E} = \frac{kQ}{r^2}\hat{r}$$

Integrating from infinity (where $V = 0$) to point $r$:

$$V(r) = -\int_\infty^r \frac{kQ}{r'^2} dr' = -kQ\left[-\frac{1}{r'}\right]_\infty^r = \frac{kQ}{r}$$

> 📝 **The Point Charge Potential Formula**:
> $$V = \frac{1}{4\pi\epsilon_0}\frac{Q}{r} = \frac{kQ}{r}$$

### Key Properties

| Property | Details |
|----------|---------|
| Sign | Positive charge → positive V; Negative charge → negative V |
| Reference | V = 0 at infinity (by convention) |
| Scalar | V is a scalar - no direction needed! |
| Superposition | $V_{total} = \sum V_i$ (algebraic, not vector) |

### Multiple Point Charges

For a system of point charges:

$$V(\vec{r}) = \sum_{i=1}^{n} \frac{kq_i}{|\vec{r} - \vec{r}_i|}$$

**Example**: Two charges $+2Q$ and $-Q$ separated by distance $d$. Find V at the midpoint:

$$V_{mid} = \frac{k(2Q)}{d/2} + \frac{k(-Q)}{d/2} = \frac{4kQ}{d} - \frac{2kQ}{d} = \frac{2kQ}{d}$$

### Electric Potential Energy

For two point charges:
$$U = \frac{kq_1q_2}{r_{12}}$$

For multiple charges:
$$U = \frac{1}{2}\sum_{i \neq j} \frac{kq_iq_j}{r_{ij}} = \sum_{i<j} \frac{kq_iq_j}{r_{ij}}$$

> 💡 **Physical Meaning**: U represents the work needed to assemble the charge configuration from infinity.

---

## Potential from Continuous Distributions

### The Integration Method

For continuous charge distributions:

$$V(\vec{r}) = \frac{1}{4\pi\epsilon_0}\int \frac{dq}{|\vec{r} - \vec{r}'|}$$

### Uniformly Charged Ring

A ring of radius $R$ with total charge $Q$, finding V on the axis at distance $z$:

**Setup:**
- Each element $dq$ is at distance $\sqrt{R^2 + z^2}$ from point P
- This distance is **constant** for all elements

$$V(z) = \frac{1}{4\pi\epsilon_0}\int \frac{dq}{\sqrt{R^2 + z^2}} = \frac{1}{4\pi\epsilon_0}\frac{Q}{\sqrt{R^2 + z^2}}$$

> ✅ **Checkpoint**: At $z = 0$, $V = kQ/R$ (on the ring). As $z \to \infty$, $V \to kQ/z$ (point charge behavior).

### Uniformly Charged Disk

A disk of radius $R$ with surface charge density $\sigma$:

Building from the ring result, a ring of radius $r$ and width $dr$ has charge $dq = \sigma \cdot 2\pi r \, dr$:

$$V(z) = \frac{1}{4\pi\epsilon_0}\int_0^R \frac{\sigma \cdot 2\pi r \, dr}{\sqrt{r^2 + z^2}}$$

Let $u = r^2 + z^2$, so $du = 2r\,dr$:

$$V(z) = \frac{\sigma}{2\epsilon_0}\int_{z^2}^{R^2+z^2} \frac{du}{2\sqrt{u}} = \frac{\sigma}{2\epsilon_0}\left[\sqrt{u}\right]_{z^2}^{R^2+z^2}$$

$$V(z) = \frac{\sigma}{2\epsilon_0}\left(\sqrt{R^2 + z^2} - |z|\right)$$

### Uniformly Charged Line Segment

A line of length $L$ with linear charge density $\lambda$, finding V at perpendicular distance $d$:

$$V = \frac{\lambda}{4\pi\epsilon_0}\int_{-L/2}^{L/2} \frac{dx}{\sqrt{x^2 + d^2}}$$

Using the integral $\int \frac{dx}{\sqrt{x^2 + a^2}} = \ln|x + \sqrt{x^2 + a^2}|$:

$$V = \frac{\lambda}{4\pi\epsilon_0}\ln\left(\frac{L/2 + \sqrt{(L/2)^2 + d^2}}{-L/2 + \sqrt{(L/2)^2 + d^2}}\right)$$

### Uniformly Charged Sphere (Outside)

A uniformly charged sphere of radius $R$ and total charge $Q$:

**Outside** ($r > R$): Acts like a point charge!
$$V(r) = \frac{kQ}{r}$$

**Inside** ($r < R$): Use superposition or integration
$$V(r) = \frac{kQ}{2R}\left(3 - \frac{r^2}{R^2}\right)$$

> 💡 **Key Result**: V is continuous at $r = R$: $V(R) = kQ/R$

---

## Equipotential Surfaces

### Definition and Properties

**Equipotential surfaces** are surfaces where $V = \text{constant}$.

**Fundamental Properties:**
1. **E is perpendicular to equipotentials** - Always!
2. **No work needed** to move charge along equipotential
3. **E points from high V to low V**
4. **Closer spacing** = stronger field

### Graphical Relationship

```
High V                    Low V
  |                         |
  |  →  →  →  →  →  →  →   |
  |       E field           |
  |                         |
  V₁        V₂        V₃
```

### Common Equipotential Shapes

| Charge Configuration | Equipotential Shape |
|---------------------|---------------------|
| Point charge | Concentric spheres |
| Infinite line charge | Concentric cylinders |
| Uniform field | Parallel planes |
| Dipole | Complex 3D surfaces |

### Mathematical Relationship

Since $\vec{E} \perp$ equipotentials:

$$\vec{E} \cdot d\vec{l} = 0 \text{ along equipotential}$$

This means:
$$dV = -\vec{E} \cdot d\vec{l} = 0$$

Confirming V is constant!

---

## Relationship Between E and V

### The Gradient Relationship

Electric field is the **negative gradient** of potential:

$$\vec{E} = -\nabla V = -\left(\frac{\partial V}{\partial x}\hat{x} + \frac{\partial V}{\partial y}\hat{y} + \frac{\partial V}{\partial z}\hat{z}\right)$$

> 📝 **In words**: E points in the direction of **steepest decrease** in V.

### Coordinate Systems

**Cartesian:**
$$\vec{E} = -\frac{\partial V}{\partial x}\hat{x} - \frac{\partial V}{\partial y}\hat{y} - \frac{\partial V}{\partial z}\hat{z}$$

**Spherical (radial only):**
$$E_r = -\frac{\partial V}{\partial r}$$

**Cylindrical (radial only):**
$$E_s = -\frac{\partial V}{\partial s}$$

### Example: Finding E from V

Given $V(x, y) = 3x^2 - 2xy + y^2$:

$$E_x = -\frac{\partial V}{\partial x} = -(6x - 2y) = -6x + 2y$$

$$E_y = -\frac{\partial V}{\partial y} = -(-2x + 2y) = 2x - 2y$$

$$\vec{E} = (2y - 6x)\hat{x} + (2x - 2y)\hat{y}$$

### Verifying Point Charge

For $V = kQ/r$:

$$E_r = -\frac{dV}{dr} = -\frac{d}{dr}\left(\frac{kQ}{r}\right) = -kQ\left(-\frac{1}{r^2}\right) = \frac{kQ}{r^2}$$

✓ Matches Coulomb's Law!

### Important Identities

Since $\vec{E} = -\nabla V$ and $\nabla \times \vec{E} = 0$:

$$\nabla \times (-\nabla V) = 0$$

This is always true (curl of gradient = 0), confirming E is conservative.

---

## Conductors in Electrostatic Equilibrium

### Fundamental Properties

When a conductor reaches **electrostatic equilibrium**:

| Property | Explanation |
|----------|-------------|
| **E = 0 inside** | Free charges rearrange to cancel any internal field |
| **V = constant throughout** | Since E = 0, no work to move charge → same V |
| **Charge on surface only** | Gauss's law with E = 0 inside |
| **E ⊥ surface** | Otherwise, surface charges would move |
| **E = σ/ε₀ at surface** | From Gauss's law with surface charge |

### Charge Distribution on Conductors

**Key insight**: Charge accumulates where **curvature is greatest**.

For a conductor:
$$E_{surface} = \frac{\sigma}{\epsilon_0}$$

Since V is constant and $E = -dV/dr$ at surface, regions of high curvature (small radius of curvature) have:
- Higher electric field
- Higher surface charge density

> ⚡ **Lightning Rods**: Sharp points have high curvature → intense local E → corona discharge

### Cavity Inside a Conductor

**Theorem**: A cavity inside a conductor with no internal charge has:
- E = 0 everywhere in the cavity
- No charge on the cavity surface (inner wall)

**With charge q inside the cavity:**
- Charge -q appears on the cavity wall
- Charge +q appears on the outer surface
- The conductor "shields" the outside from the distribution of q inside

### Induced Charges

When an external charge approaches a conductor:
1. Charges redistribute on the conductor surface
2. Induced charges create a field that cancels E inside
3. The conductor remains an equipotential

---

## Capacitance Definition

### The Concept

**Capacitance** measures a conductor's ability to store charge:

$$C = \frac{Q}{V}$$

Or for a capacitor (two conductors):
$$C = \frac{Q}{\Delta V}$$

- **Q** = magnitude of charge on either plate
- **ΔV** = potential difference between plates
- **Unit**: Farad (F) = C/V

> 💡 **Key Insight**: Capacitance depends only on **geometry** and **materials**, not on Q or V.

### Typical Values

| Capacitor Type | Typical Value |
|----------------|---------------|
| Parallel plate | pF to μF |
| Electrolytic | μF to mF |
| Supercapacitor | 1 F to 1000+ F |

**Prefix reminder:**
- 1 μF = 10⁻⁶ F
- 1 nF = 10⁻⁹ F
- 1 pF = 10⁻¹² F

### Isolated Sphere

For an isolated conducting sphere of radius R:

Using $V = kQ/R$ at the surface:

$$C = \frac{Q}{V} = \frac{Q}{kQ/R} = \frac{R}{k} = 4\pi\epsilon_0 R$$

**Example**: Earth's capacitance!
$$C_{Earth} = 4\pi\epsilon_0 (6.4 \times 10^6 \text{ m}) \approx 710 \text{ μF}$$

---

## Parallel Plate Capacitor

### Derivation

Consider two parallel plates, each with area A, separated by distance d.

**Step 1**: Find E between plates
Using Gauss's law (from Unit 1):
$$E = \frac{\sigma}{\epsilon_0} = \frac{Q}{\epsilon_0 A}$$

**Step 2**: Find ΔV
$$\Delta V = Ed = \frac{Qd}{\epsilon_0 A}$$

**Step 3**: Calculate C
$$C = \frac{Q}{\Delta V} = \frac{Q}{\frac{Qd}{\epsilon_0 A}} = \frac{\epsilon_0 A}{d}$$

> 📝 **The Parallel Plate Capacitance Formula**:
> $$C = \frac{\epsilon_0 A}{d}$$

### Physical Interpretation

| Factor | Effect on C |
|--------|-------------|
| Larger A | More charge storage area → Higher C |
| Smaller d | Less separation → Higher E for same V → Higher C |
| ε₀ → κε₀ | Dielectric increases C (see later) |

### Fringe Field Correction

The formula $C = \epsilon_0 A/d$ assumes **no fringe fields**. For finite plates:

$$C \approx \epsilon_0 \frac{A}{d}\left(1 + \frac{d}{2\pi w}\ln\frac{2\pi w}{d}\right)$$

where w is the width of square plates.

> ⚠️ **AP Exam**: Use the ideal formula unless told otherwise!

### Example Calculation

A parallel plate capacitor has plates of area 0.1 m² separated by 1 mm.

$$C = \frac{(8.85 \times 10^{-12})(0.1)}{10^{-3}} = 8.85 \times 10^{-10} \text{ F} = 885 \text{ pF}$$

---

## Cylindrical Capacitor

### Setup and Derivation

A cylindrical capacitor consists of:
- Inner conductor: radius a, charge +Q
- Outer conductor: radius b, charge -Q
- Length L (assume L >> b for no fringe effects)

**Step 1**: Electric field between conductors (from Unit 1)
$$E = \frac{\lambda}{2\pi\epsilon_0 r} = \frac{Q}{2\pi\epsilon_0 L r}$$

**Step 2**: Potential difference
$$\Delta V = -\int_b^a \vec{E} \cdot d\vec{r} = \int_a^b E \, dr = \frac{Q}{2\pi\epsilon_0 L}\int_a^b \frac{dr}{r}$$

$$\Delta V = \frac{Q}{2\pi\epsilon_0 L}\ln\left(\frac{b}{a}\right)$$

**Step 3**: Capacitance
$$C = \frac{Q}{\Delta V} = \frac{2\pi\epsilon_0 L}{\ln(b/a)}$$

> 📝 **Cylindrical Capacitor Formula**:
> $$C = \frac{2\pi\epsilon_0 L}{\ln(b/a)}$$

### Capacitance per Unit Length

Often useful for transmission lines:

$$\frac{C}{L} = \frac{2\pi\epsilon_0}{\ln(b/a)}$$

### Example: Coaxial Cable

A coaxial cable has inner radius 0.5 mm and outer radius 3 mm. Find C/L.

$$\frac{C}{L} = \frac{2\pi(8.85 \times 10^{-12})}{\ln(3/0.5)} = \frac{55.6 \times 10^{-12}}{1.79} = 31 \text{ pF/m}$$

---

## Spherical Capacitor

### Derivation

Two concentric spherical shells:
- Inner shell: radius a, charge +Q
- Outer shell: radius b, charge -Q

**Step 1**: Electric field between shells
$$E = \frac{kQ}{r^2} = \frac{Q}{4\pi\epsilon_0 r^2}$$

**Step 2**: Potential difference
$$\Delta V = -\int_b^a E \, dr = \int_a^b \frac{Q}{4\pi\epsilon_0 r^2} dr$$

$$\Delta V = \frac{Q}{4\pi\epsilon_0}\left[-\frac{1}{r}\right]_a^b = \frac{Q}{4\pi\epsilon_0}\left(\frac{1}{a} - \frac{1}{b}\right)$$

$$\Delta V = \frac{Q(b-a)}{4\pi\epsilon_0 ab}$$

**Step 3**: Capacitance
$$C = \frac{Q}{\Delta V} = \frac{4\pi\epsilon_0 ab}{b-a}$$

> 📝 **Spherical Capacitor Formula**:
> $$C = 4\pi\epsilon_0\frac{ab}{b-a}$$

### Special Cases

**Case 1: b → ∞** (isolated sphere)
$$C = \lim_{b \to \infty} \frac{4\pi\epsilon_0 ab}{b-a} = \lim_{b \to \infty} \frac{4\pi\epsilon_0 a}{1 - a/b} = 4\pi\epsilon_0 a$$

✓ Matches our earlier result!

**Case 2: b ≈ a** (thin gap, d = b - a << a)
$$C \approx \frac{4\pi\epsilon_0 a^2}{d} = \frac{\epsilon_0 (4\pi a^2)}{d} = \frac{\epsilon_0 A}{d}$$

✓ Approaches parallel plate formula!

---

## Capacitors in Series and Parallel

### Parallel Connection

Capacitors in **parallel** have the **same voltage**:

```
    ┌──||──┐
────┤      ├────
    ├──||──┤
    │      │
    └──||──┘
```

**Analysis:**
- Total charge: $Q_{total} = Q_1 + Q_2 + Q_3$
- Same voltage: $V_1 = V_2 = V_3 = V$
- Since $Q = CV$: $C_{eq}V = C_1V + C_2V + C_3V$

> 📝 **Parallel Capacitors**:
> $$C_{eq} = C_1 + C_2 + C_3 + \cdots$$

### Series Connection

Capacitors in **series** have the **same charge**:

```
────||────||────||────
```

**Analysis:**
- Same charge on each: $Q_1 = Q_2 = Q_3 = Q$
- Total voltage: $V_{total} = V_1 + V_2 + V_3$
- Since $V = Q/C$: $\frac{Q}{C_{eq}} = \frac{Q}{C_1} + \frac{Q}{C_2} + \frac{Q}{C_3}$

> 📝 **Series Capacitors**:
> $$\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} + \cdots$$

### Comparison Table

| Property | Series | Parallel |
|----------|--------|----------|
| Same quantity | Charge Q | Voltage V |
| Adds up | Voltage | Charge |
| Formula | 1/C adds | C adds |
| C_eq | Less than smallest | Greater than largest |

### Two Capacitors Shortcut

For two capacitors in series:
$$C_{eq} = \frac{C_1 C_2}{C_1 + C_2}$$

> 💡 **Memory Aid**: "Product over sum" for series (like parallel resistors!)

### Example: Mixed Circuit

Find C_eq for:
```
        C₁
    ┌──||──┐
────┤      ├──||──
    └──||──┘   C₃
        C₂
```

C₁ and C₂ are in parallel: $C_{12} = C_1 + C_2$

Then C₁₂ and C₃ are in series:
$$C_{eq} = \frac{C_{12} \cdot C_3}{C_{12} + C_3} = \frac{(C_1 + C_2)C_3}{C_1 + C_2 + C_3}$$

---

## Energy Stored in Capacitors

### Three Equivalent Formulas

Starting from the definition of work to charge a capacitor:

$$dW = V \, dq = \frac{q}{C} dq$$

Integrating from 0 to Q:

$$U = \int_0^Q \frac{q}{C} dq = \frac{1}{C}\left[\frac{q^2}{2}\right]_0^Q = \frac{Q^2}{2C}$$

Using $Q = CV$:

> 📝 **Capacitor Energy Formulas**:
> $$U = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$$

### Energy Density

Energy is stored in the **electric field** between the plates!

For a parallel plate capacitor:
$$U = \frac{1}{2}CV^2 = \frac{1}{2}\left(\frac{\epsilon_0 A}{d}\right)(Ed)^2 = \frac{1}{2}\epsilon_0 E^2 (Ad)$$

Since $Ad$ = volume between plates:

> 📝 **Energy Density**:
> $$u = \frac{U}{Volume} = \frac{1}{2}\epsilon_0 E^2$$

**Units**: J/m³

### General Application

The formula $u = \frac{1}{2}\epsilon_0 E^2$ applies **everywhere** in space!

Total energy in a region:
$$U = \int_V \frac{1}{2}\epsilon_0 E^2 \, dV$$

### Example: Energy in a Spherical Shell

Electric field of a charged sphere (Q, radius R) for r > R:
$$E = \frac{kQ}{r^2}$$

Energy stored outside the sphere:
$$U = \int_R^\infty \frac{1}{2}\epsilon_0 \left(\frac{kQ}{r^2}\right)^2 4\pi r^2 \, dr$$

$$U = \frac{1}{2}\epsilon_0 k^2 Q^2 \cdot 4\pi \int_R^\infty \frac{dr}{r^2} = 2\pi\epsilon_0 k^2 Q^2 \left[\frac{-1}{r}\right]_R^\infty$$

$$U = \frac{2\pi\epsilon_0 k^2 Q^2}{R} = \frac{kQ^2}{2R}$$

This equals $\frac{Q^2}{2C}$ since $C = 4\pi\epsilon_0 R$. ✓

---

## Dielectrics and Polarization

### What is a Dielectric?

A **dielectric** is an insulating material that can be polarized by an electric field.

**Common dielectrics:**
- Air (κ ≈ 1.0006)
- Paper (κ ≈ 3.5)
- Glass (κ ≈ 5-10)
- Water (κ ≈ 80)
- Ceramic (κ ≈ 100-15000)

### Dielectric Constant (κ)

The **dielectric constant** (or relative permittivity) κ characterizes the material:

$$\kappa = \frac{\epsilon}{\epsilon_0}$$

where $\epsilon$ is the permittivity of the material.

> 💡 **Key Effect**: A dielectric **reduces** the electric field by factor κ.

### Molecular Polarization

**Polar molecules** (like H₂O):
- Have permanent dipole moments
- Align with applied field

**Nonpolar molecules**:
- Induced dipole when E applied
- Electron cloud shifts relative to nuclei

### Effect on Electric Field

When dielectric fills the space between capacitor plates:

$$E_{dielectric} = \frac{E_0}{\kappa}$$

where $E_0$ is the field without dielectric.

**Physical reason**: Induced surface charges create opposing field.

### Bound Surface Charge

The polarization creates **bound surface charge** on the dielectric:

$$\sigma_b = P \cdot \hat{n} = \epsilon_0(\kappa - 1)E$$

where **P** is the polarization (dipole moment per unit volume).

### Effect on Capacitance

For a capacitor with dielectric:

**With battery connected** (constant V):
$$C = \kappa C_0 = \kappa \frac{\epsilon_0 A}{d} = \frac{\kappa \epsilon_0 A}{d} = \frac{\epsilon A}{d}$$

> 📝 **Dielectric Capacitance**:
> $$C = \kappa C_0$$

### Three Scenarios

| Scenario | What's Constant | Results |
|----------|-----------------|---------|
| Battery connected | V | C increases, Q increases, E same |
| Isolated (battery removed) | Q | C increases, V decreases, E decreases |
| Partial dielectric | Complicated! | Use energy methods |

### Energy with Dielectric

With dielectric:
$$u = \frac{1}{2}\epsilon E^2 = \frac{1}{2}\kappa\epsilon_0 E^2$$

**Battery connected**: Energy increases (battery does work)
$$U = \frac{1}{2}CV^2 = \frac{1}{2}\kappa C_0 V^2 = \kappa U_0$$

**Isolated**: Energy decreases (work done on dielectric)
$$U = \frac{Q^2}{2C} = \frac{Q^2}{2\kappa C_0} = \frac{U_0}{\kappa}$$

### Dielectric Breakdown

Every dielectric has a maximum field it can withstand:

**Dielectric strength** = maximum E before breakdown

| Material | Dielectric Strength (MV/m) |
|----------|---------------------------|
| Air | 3 |
| Paper | 16 |
| Glass | 9-14 |
| Teflon | 60 |

---

## Force on a Dielectric

### Dielectric Being Pulled into Capacitor

A dielectric slab is partially inserted into a parallel plate capacitor. What force acts on it?

**Energy method** (battery connected, constant V):

$$U = \frac{1}{2}CV^2$$

If dielectric extends distance x into the capacitor:
$$C(x) = \frac{\epsilon_0 w}{d}\left[(L-x) + \kappa x\right] = \frac{\epsilon_0 w}{d}[L + (\kappa-1)x]$$

Force is:
$$F = \frac{dU}{dx} = \frac{1}{2}V^2\frac{dC}{dx} = \frac{1}{2}V^2 \cdot \frac{\epsilon_0 w(\kappa-1)}{d}$$

> 💡 **Result**: The dielectric is **pulled into** the capacitor (F > 0 for κ > 1)

---

## Summary of Key Formulas

### Potential

| Quantity | Formula |
|----------|---------|
| V from E | $V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l}$ |
| E from V | $\vec{E} = -\nabla V$ |
| Point charge | $V = kQ/r$ |
| Potential energy | $U = kq_1q_2/r_{12}$ |

### Capacitance

| Configuration | Formula |
|---------------|---------|
| Definition | $C = Q/V$ |
| Parallel plate | $C = \epsilon_0 A/d$ |
| Cylindrical | $C = 2\pi\epsilon_0 L/\ln(b/a)$ |
| Spherical | $C = 4\pi\epsilon_0 ab/(b-a)$ |
| Isolated sphere | $C = 4\pi\epsilon_0 R$ |
| With dielectric | $C = \kappa C_0$ |

### Combinations

| Type | Formula |
|------|---------|
| Series | $1/C_{eq} = \sum 1/C_i$ |
| Parallel | $C_{eq} = \sum C_i$ |

### Energy

| Formula | Condition |
|---------|-----------|
| $U = \frac{1}{2}CV^2$ | General |
| $U = \frac{1}{2}QV$ | General |
| $U = Q^2/2C$ | General |
| $u = \frac{1}{2}\epsilon_0 E^2$ | Energy density (vacuum) |
| $u = \frac{1}{2}\epsilon E^2$ | Energy density (dielectric) |

---

## Practice Problems

### Problem 1: Potential Calculation

Two point charges, $q_1 = +4\mu C$ at origin and $q_2 = -2\mu C$ at (3m, 0), are in space.

**(a)** Find the potential at point P(0, 4m).

**(b)** How much work is needed to bring a third charge $q_3 = +1\mu C$ from infinity to P?

**Solution:**

(a) Distance from q₁ to P: $r_1 = 4$ m
Distance from q₂ to P: $r_2 = \sqrt{9 + 16} = 5$ m

$$V_P = \frac{kq_1}{r_1} + \frac{kq_2}{r_2} = k\left(\frac{4 \times 10^{-6}}{4} + \frac{-2 \times 10^{-6}}{5}\right)$$

$$V_P = (9 \times 10^9)(10^{-6} - 0.4 \times 10^{-6}) = 9000 \times 0.6 = 5400 \text{ V}$$

(b) Work = change in potential energy
$$W = q_3 V_P = (1 \times 10^{-6})(5400) = 5.4 \times 10^{-3} \text{ J} = 5.4 \text{ mJ}$$

### Problem 2: Cylindrical Capacitor with Dielectric

A cylindrical capacitor has inner radius a = 1 cm, outer radius b = 3 cm, and length L = 20 cm. The space between conductors is half-filled with a dielectric (κ = 4) for the inner half (a to 2 cm) and air for the outer half.

Find the capacitance.

**Solution:**

Treat as two capacitors in series:
- Inner region (a to 2 cm, κ = 4): $C_1 = \frac{2\pi(4\epsilon_0)L}{\ln(2/1)} = \frac{8\pi\epsilon_0 L}{\ln 2}$
- Outer region (2 cm to b, air): $C_2 = \frac{2\pi\epsilon_0 L}{\ln(3/2)}$

$$\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} = \frac{\ln 2}{8\pi\epsilon_0 L} + \frac{\ln(3/2)}{2\pi\epsilon_0 L}$$

$$\frac{1}{C_{eq}} = \frac{1}{2\pi\epsilon_0 L}\left(\frac{\ln 2}{4} + \ln\frac{3}{2}\right) = \frac{1}{2\pi\epsilon_0 L}(0.173 + 0.405) = \frac{0.578}{2\pi\epsilon_0 L}$$

$$C_{eq} = \frac{2\pi\epsilon_0 L}{0.578} = \frac{2\pi(8.85 \times 10^{-12})(0.2)}{0.578} = 19.2 \text{ pF}$$

### Problem 3: Energy Analysis

A parallel plate capacitor (C₀ = 100 pF) is charged to V = 100 V, then disconnected from the battery. A dielectric (κ = 5) is then inserted.

**(a)** Find the initial energy stored.
**(b)** Find the final energy stored.
**(c)** Where did the energy go?

**Solution:**

(a) Initial energy:
$$U_i = \frac{1}{2}C_0V^2 = \frac{1}{2}(100 \times 10^{-12})(100)^2 = 5 \times 10^{-7} \text{ J} = 0.5 \text{ μJ}$$

(b) After dielectric insertion (Q constant):
$$C = \kappa C_0 = 500 \text{ pF}$$
$$U_f = \frac{Q^2}{2C} = \frac{Q^2}{2\kappa C_0} = \frac{U_i}{\kappa} = \frac{0.5}{5} = 0.1 \text{ μJ}$$

(c) Energy decreased by 0.4 μJ. This energy went into:
- Work done pulling the dielectric into the capacitor
- Ultimately converted to heat/kinetic energy

### Problem 4: Gradient Problem

The electric potential in a region is given by:
$$V(x,y,z) = 100 - 20x + 10y^2 - 5z^3$$

**(a)** Find the electric field $\vec{E}$.
**(b)** Find E at point (1, 2, -1).
**(c)** Find the charge density at this point.

**Solution:**

(a) $\vec{E} = -\nabla V$:
$$E_x = -\frac{\partial V}{\partial x} = -(-20) = 20 \text{ V/m}$$
$$E_y = -\frac{\partial V}{\partial y} = -(20y) = -20y \text{ V/m}$$
$$E_z = -\frac{\partial V}{\partial z} = -(-15z^2) = 15z^2 \text{ V/m}$$

$$\vec{E} = 20\hat{x} - 20y\hat{y} + 15z^2\hat{z}$$

(b) At (1, 2, -1):
$$\vec{E} = 20\hat{x} - 40\hat{y} + 15\hat{z} \text{ V/m}$$
$$|\vec{E}| = \sqrt{400 + 1600 + 225} = \sqrt{2225} \approx 47.2 \text{ V/m}$$

(c) Using Gauss's law in differential form:
$$\rho = \epsilon_0 \nabla \cdot \vec{E} = \epsilon_0\left(\frac{\partial E_x}{\partial x} + \frac{\partial E_y}{\partial y} + \frac{\partial E_z}{\partial z}\right)$$
$$\rho = \epsilon_0(0 - 20 + 30z) = \epsilon_0(30z - 20)$$

At z = -1:
$$\rho = \epsilon_0(-30 - 20) = -50\epsilon_0 = -4.43 \times 10^{-10} \text{ C/m}^3$$

### Problem 5: Series-Parallel Network

Find the equivalent capacitance and the charge on each capacitor when connected to a 12 V battery:

```
        2μF        3μF
    ┌───||───┬────||────┐
    │        │          │
────┤       4μF         ├────
    │        │          │
    └────────┴──────────┘
```

**Solution:**

The 2μF and 3μF are in series (top branch):
$$C_{23} = \frac{2 \times 3}{2 + 3} = 1.2 \text{ μF}$$

C₂₃ is in parallel with 4μF:
$$C_{eq} = 1.2 + 4 = 5.2 \text{ μF}$$

Charges:
- Q₄ = C₄V = 4μF × 12V = 48 μC
- Q₂ = Q₃ (same, in series) = C₂₃V = 1.2μF × 12V = 14.4 μC

Voltages across 2μF and 3μF:
- V₂ = Q₂/C₂ = 14.4/2 = 7.2 V
- V₃ = Q₃/C₃ = 14.4/3 = 4.8 V

Check: V₂ + V₃ = 7.2 + 4.8 = 12 V ✓

---

## AP Exam Tips

### Free Response Strategy

1. **Start with a diagram** - Draw the situation with labels
2. **State the physics** - Write $C = Q/V$, $\vec{E} = -\nabla V$, etc.
3. **Show integration setup** - Even if you can't solve it
4. **Check limiting cases** - Does your answer make sense?

### Common Exam Topics

✅ Line integrals for potential
✅ Potential from continuous distributions  
✅ E from V using gradient
✅ Parallel plate capacitor derivation
✅ Series/parallel combinations
✅ Energy storage and density
✅ Dielectric effects on C, V, E, U

### Tricky Concepts

⚠️ **Sign of potential**: V can be negative (near negative charge)
⚠️ **Scalar vs. vector**: V is scalar (adds algebraically); E is vector
⚠️ **Series capacitors**: Charge is same, voltage divides
⚠️ **Dielectric scenarios**: Battery connected vs. isolated make huge difference

---

## Quick Reference Card

```
POTENTIAL
─────────────────────────────────
V from E:     V = -∫E⃗·dl⃗
E from V:     E⃗ = -∇V
Point charge: V = kQ/r
Energy:       U = kq₁q₂/r

CAPACITANCE
─────────────────────────────────
Definition:   C = Q/V
Parallel:     C = ε₀A/d
Cylindrical:  C = 2πε₀L/ln(b/a)
Spherical:    C = 4πε₀ab/(b-a)

COMBINATIONS
─────────────────────────────────
Series:       1/C = Σ(1/Cᵢ)
Parallel:     C = ΣCᵢ

ENERGY
─────────────────────────────────
Capacitor:    U = ½CV² = ½QV = Q²/2C
Density:      u = ½ε₀E²

DIELECTRICS
─────────────────────────────────
Capacitance:  C = κC₀
Field:        E = E₀/κ
Energy dens.: u = ½κε₀E²
```

---

**You've mastered Unit 2!** 🎉

The concepts here—potential, capacitance, and energy storage—form the foundation for understanding circuits and electromagnetic energy. In the next unit, you'll see how capacitors behave in circuits with resistors (RC circuits).

:::GUIDE:::
