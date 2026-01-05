:::GUIDE:::
unit::=3
title::=⚡ Unit 3: Electric Circuits
desc::=Master DC circuits, Kirchhoff's laws, and RC circuits with calculus
diff::=Very Hard
time::=60 min
tags::=physics-c,em,circuits,kirchhoff,rc-circuits
content::=

# ⚡ Unit 3: Electric Circuits

## 📚 Unit Overview

Electric circuits form the practical backbone of electromagnetism, connecting the abstract concepts of electric fields and potentials to real-world applications. This unit explores how charges flow through conductors, how we analyze complex circuits using Kirchhoff's laws, and how capacitors behave in circuits—requiring calculus to fully describe the time-dependent behavior of RC circuits.

---

## 🎯 Essential Concepts

By the end of this unit, you should master:
- **Current and current density** (microscopic charge flow)
- **Resistance** and Ohm's Law from a microscopic perspective
- **Resistivity** and its temperature dependence
- **Power dissipation** in circuit elements
- **EMF** and internal resistance of real batteries
- **Kirchhoff's laws** for circuit analysis
- **Series and parallel** resistor combinations
- **RC circuits** with differential equation solutions
- **Time constants** and exponential behavior

---

## ⚡ Current and Current Density

### Definition of Electric Current

**Electric current** is the rate of charge flow through a cross-sectional area:

$$I = \frac{dQ}{dt}$$

Where:
- $I$ = current (Amperes, A)
- $Q$ = charge (Coulombs, C)
- $t$ = time (seconds, s)

**Key insight**: 1 Ampere = 1 Coulomb per second

### Direction Convention

- **Conventional current**: Direction positive charges would flow (from + to -)
- **Electron flow**: Actual direction electrons move (from - to +)
- Physics C uses conventional current in all analysis

### Current Density

**Current density** $\vec{J}$ describes current flow per unit area:

$$\vec{J} = \frac{I}{A}\hat{n} \quad \text{(uniform current)}$$

More generally:

$$I = \int \vec{J} \cdot d\vec{A}$$

For a wire with cross-sectional area $A$:

$$J = \frac{I}{A}$$

Units: $A/m^2$

### Microscopic View: Drift Velocity

Current arises from the collective drift of charge carriers:

$$\vec{J} = nq\vec{v}_d$$

Where:
- $n$ = number density of charge carriers (per $m^3$)
- $q$ = charge of each carrier
- $\vec{v}_d$ = drift velocity

For electrons in a conductor:

$$I = nAv_d|e|$$

**Example calculation**:
```
A copper wire (n ≈ 8.5 × 10²⁸ electrons/m³) with radius 1 mm 
carries 10 A. Find the drift velocity.

A = π(0.001)² = π × 10⁻⁶ m²

v_d = I/(nAe)
v_d = 10/[(8.5 × 10²⁸)(π × 10⁻⁶)(1.6 × 10⁻¹⁹)]
v_d ≈ 2.3 × 10⁻⁴ m/s ≈ 0.23 mm/s
```

**Surprising result**: Electrons drift incredibly slowly! The electric signal propagates at nearly the speed of light, but individual electrons move at a snail's pace.

---

## 🔌 Resistance and Ohm's Law

### Microscopic Origin of Resistance

When electrons drift through a conductor, they collide with:
- Lattice ions (thermal vibrations)
- Impurities and defects
- Other electrons

These collisions create **resistance** to current flow.

### Ohm's Law (Microscopic Form)

$$\vec{J} = \sigma\vec{E}$$

Where:
- $\sigma$ = conductivity ($\Omega^{-1}m^{-1}$ or S/m)
- $\vec{E}$ = electric field in the conductor

**Resistivity** $\rho$ is the inverse of conductivity:

$$\rho = \frac{1}{\sigma}$$

$$\vec{E} = \rho\vec{J}$$

### Ohm's Law (Macroscopic Form)

For a uniform conductor of length $L$ and cross-sectional area $A$:

$$V = IR$$

Where resistance $R$ is:

$$R = \rho\frac{L}{A}$$

**Units of resistance**: Ohms (Ω)

**Units of resistivity**: Ω·m

### Typical Resistivity Values

| Material | Resistivity (Ω·m) |
|----------|-------------------|
| Silver | 1.6 × 10⁻⁸ |
| Copper | 1.7 × 10⁻⁸ |
| Aluminum | 2.7 × 10⁻⁸ |
| Iron | 10 × 10⁻⁸ |
| Carbon | 3.5 × 10⁻⁵ |
| Glass | 10¹⁰ - 10¹⁴ |
| Rubber | ~10¹³ |

### Temperature Dependence of Resistivity

For most metals, resistivity increases with temperature:

$$\rho(T) = \rho_0[1 + \alpha(T - T_0)]$$

Where:
- $\rho_0$ = resistivity at reference temperature $T_0$
- $\alpha$ = temperature coefficient of resistivity

For copper: $\alpha \approx 0.004$ °C⁻¹

**Physical explanation**: Higher temperature → more lattice vibrations → more electron collisions → higher resistance

### Semiconductors

For semiconductors, resistivity **decreases** with temperature (more carriers become available).

---

## ⚡ Power Dissipation

### Power in Circuit Elements

Power dissipated in a resistor:

$$P = IV$$

Using Ohm's Law:

$$P = I^2R = \frac{V^2}{R}$$

**Key formulas for AP exam**:
- $P = IV$ (general)
- $P = I^2R$ (when current is known)
- $P = V^2/R$ (when voltage is known)

### Energy Dissipation

Energy dissipated over time $t$:

$$E = Pt = I^2Rt = \frac{V^2t}{R}$$

### Joule Heating

Power dissipated as heat in a resistor:

$$P = \int \vec{J} \cdot \vec{E} \, dV = \int \sigma E^2 \, dV$$

For a uniform resistor:

$$P = I^2R$$

This is always positive—resistors always dissipate energy.

---

## 🔋 EMF and Internal Resistance

### Electromotive Force (EMF)

**EMF** ($\mathcal{E}$) is the work done per unit charge by a source (battery, generator):

$$\mathcal{E} = \frac{W}{q}$$

EMF is NOT a force—it's measured in volts!

### Real Batteries: Internal Resistance

Real batteries have **internal resistance** $r$:

```
    ┌────────────────────────┐
    │                        │
   (+)                       │
    │                        │
    ├──[ℰ]──[r]──┤          Load R
    │            │           │
   (-)           └───────────┘
    │                        │
    └────────────────────────┘
```

**Terminal voltage**:

$$V_{terminal} = \mathcal{E} - Ir$$

When current flows, some energy is lost to internal resistance.

### Maximum Power Transfer

Power delivered to external load $R$:

$$P = I^2R = \left(\frac{\mathcal{E}}{R + r}\right)^2 R$$

Maximum power occurs when $R = r$:

$$P_{max} = \frac{\mathcal{E}^2}{4r}$$

**Derivation**:
```
P = ℰ²R/(R + r)²

dP/dR = ℰ²[(R + r)² - R·2(R + r)]/(R + r)⁴
      = ℰ²[(R + r) - 2R]/(R + r)³
      = ℰ²[r - R]/(R + r)³

Setting dP/dR = 0:
r - R = 0
R = r
```

---

## ⚖️ Kirchhoff's Laws

### Junction Rule (Conservation of Charge)

At any junction in a circuit:

$$\sum I_{in} = \sum I_{out}$$

```
         I₁
          ↓
    ──────●──────
         /\
        /  \
      I₂    I₃
       ↓    ↓

    I₁ = I₂ + I₃
```

**Physical basis**: Conservation of charge (no charge accumulates at a junction)

### Loop Rule (Conservation of Energy)

Around any closed loop:

$$\sum \Delta V = 0$$

Or equivalently:

$$\oint \vec{E} \cdot d\vec{l} = 0 \quad \text{(for electrostatics)}$$

### Sign Conventions for Loop Rule

**Batteries (EMF sources)**:
- Traversing from - to +: $+\mathcal{E}$
- Traversing from + to -: $-\mathcal{E}$

**Resistors**:
- Traversing in direction of current: $-IR$
- Traversing opposite to current: $+IR$

### Systematic Circuit Analysis

**Step 1**: Label all currents (assume directions)
**Step 2**: Apply junction rule at enough junctions
**Step 3**: Apply loop rule around enough loops
**Step 4**: Solve the system of equations

**Number of equations needed**: $n$ unknowns → $n$ independent equations

### Example: Two-Loop Circuit

```
        I₁ →
    ┌────[R₁]────┐
    │            │
   (+)          (│) I₃
   ℰ₁           [R₃]
   (-)           │
    │     I₂ ←   │
    ├────[R₂]────┤
    │            │
   (+)           │
   ℰ₂            │
   (-)           │
    │            │
    └────────────┘
```

**Junction equation** (at top right):
$$I_1 = I_2 + I_3$$

**Loop 1** (outer loop, clockwise):
$$\mathcal{E}_1 - I_1R_1 - I_3R_3 + \mathcal{E}_2 - I_2R_2 = 0$$

Wait, let me redo this with a cleaner circuit:

```
           I₁ →
    ┌──────[R₁]──────┬──────────┐
    │                │          │
   (+)              [R₂]       [R₃]
   ℰ₁                │          │
   (-)               I₂↓        I₃↓
    │                │          │
    └────────────────┴──────────┘
```

**Junction equation**:
$$I_1 = I_2 + I_3$$

**Loop 1** (left loop, clockwise):
$$\mathcal{E}_1 - I_1R_1 - I_2R_2 = 0$$

**Loop 2** (right loop, clockwise):
$$I_2R_2 - I_3R_3 = 0$$

This gives us 3 equations for 3 unknowns.

---

## 🔗 Resistors in Series and Parallel

### Series Combination

Resistors in series carry the **same current**:

```
    ──[R₁]──[R₂]──[R₃]──
         I →
```

$$R_{eq} = R_1 + R_2 + R_3 + \cdots$$

**Voltage divider**: For resistors in series:

$$V_i = \frac{R_i}{R_{total}} \cdot V_{total}$$

### Parallel Combination

Resistors in parallel have the **same voltage**:

```
        ┌──[R₁]──┐
    ────┼──[R₂]──┼────
        └──[R₃]──┘
```

$$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \cdots$$

For two resistors:

$$R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$$

**Current divider**: For two resistors in parallel:

$$I_1 = \frac{R_2}{R_1 + R_2} \cdot I_{total}$$

### Combined Circuits

**Strategy**: Simplify step by step
1. Identify series and parallel groups
2. Replace with equivalent resistances
3. Repeat until you have one equivalent resistance

### Example: Complex Resistor Network

```
         R₁
    ┌────[  ]────┐
    │            │
────┤     R₂     ├────
    │   ┌[  ]┐   │
    └───┤    ├───┘
        └[R₃]┘
```

**Solution**:
1. $R_2$ and $R_3$ are in parallel: $R_{23} = \frac{R_2 R_3}{R_2 + R_3}$
2. $R_1$ and $R_{23}$ are in series: $R_{eq} = R_1 + R_{23}$

Wait, let me reconsider the circuit:

```
         R₁
    ┌────[  ]────┐
    │            │
────┤            ├────
    │    R₂ R₃   │
    └──[ ]─[ ]───┘
```

If $R_2$ and $R_3$ are in series, and that combination is in parallel with $R_1$:

1. $R_{23} = R_2 + R_3$
2. $R_{eq} = \frac{R_1 \cdot R_{23}}{R_1 + R_{23}}$

---

## 🔄 RC Circuits: The Heart of Physics C

RC circuits combine resistors and capacitors, creating time-dependent behavior that requires calculus to analyze.

### Charging a Capacitor

Consider this circuit:

```
         S (switch)
    ┌────/  ────┐
    │           │
   (+)         [R]
   ℰ            │
   (-)         ═══ C
    │           │
    └───────────┘
```

When switch S is closed at $t = 0$ (capacitor initially uncharged):

**Applying Kirchhoff's loop rule**:

$$\mathcal{E} - IR - \frac{Q}{C} = 0$$

Since $I = \frac{dQ}{dt}$:

$$\mathcal{E} - R\frac{dQ}{dt} - \frac{Q}{C} = 0$$

**Rearranging**:

$$\frac{dQ}{dt} = \frac{\mathcal{E}}{R} - \frac{Q}{RC}$$

$$\frac{dQ}{dt} = \frac{C\mathcal{E} - Q}{RC}$$

### Solving the Differential Equation

**Separation of variables**:

$$\frac{dQ}{C\mathcal{E} - Q} = \frac{dt}{RC}$$

**Integrating** (with $Q(0) = 0$):

$$-\ln(C\mathcal{E} - Q) \Big|_0^Q = \frac{t}{RC}$$

$$-\ln(C\mathcal{E} - Q) + \ln(C\mathcal{E}) = \frac{t}{RC}$$

$$\ln\left(\frac{C\mathcal{E}}{C\mathcal{E} - Q}\right) = \frac{t}{RC}$$

$$\frac{C\mathcal{E}}{C\mathcal{E} - Q} = e^{t/RC}$$

**Solving for Q**:

$$Q(t) = C\mathcal{E}\left(1 - e^{-t/RC}\right)$$

### Time Constant

The **time constant** $\tau$ is defined as:

$$\tau = RC$$

This gives:

$$Q(t) = Q_{max}\left(1 - e^{-t/\tau}\right)$$

Where $Q_{max} = C\mathcal{E}$

### Current During Charging

$$I(t) = \frac{dQ}{dt} = \frac{\mathcal{E}}{R}e^{-t/\tau} = I_0 e^{-t/\tau}$$

Where $I_0 = \frac{\mathcal{E}}{R}$ is the initial current.

### Voltage Across Capacitor During Charging

$$V_C(t) = \frac{Q(t)}{C} = \mathcal{E}\left(1 - e^{-t/\tau}\right)$$

### Voltage Across Resistor During Charging

$$V_R(t) = IR = \mathcal{E}e^{-t/\tau}$$

**Verification**: $V_R + V_C = \mathcal{E}$ ✓

### Graphical Representation: Charging

```
Charge Q(t)              Current I(t)
    │                        │
Q_max├─────────────────      │I₀ ────┐
    │        ___________     │       \
    │      /                 │        \
    │    /                   │         \___________
    │  /                     │
    │/                       │
    └──────────────────      └──────────────────
    0    τ    2τ   3τ  t     0    τ    2τ   3τ  t
```

### Key Time Constant Facts

| Time | Charge | Current |
|------|--------|---------|
| $t = 0$ | $0$ | $I_0$ |
| $t = \tau$ | $0.632 Q_{max}$ | $0.368 I_0$ |
| $t = 2\tau$ | $0.865 Q_{max}$ | $0.135 I_0$ |
| $t = 3\tau$ | $0.950 Q_{max}$ | $0.050 I_0$ |
| $t = 5\tau$ | $0.993 Q_{max}$ | $0.007 I_0$ |

**Rule of thumb**: After $5\tau$, the capacitor is ~99% charged.

---

## 📉 Discharging a Capacitor

### Circuit Setup

```
         S (switch)
    ┌────/  ────┐
    │           │
    │          [R]
    │           │
   ═══ C        │
    │(Q₀)       │
    └───────────┘
```

Capacitor starts with charge $Q_0$, switch closes at $t = 0$.

### Kirchhoff's Loop Rule

$$\frac{Q}{C} - IR = 0$$

$$\frac{Q}{C} = R\frac{dQ}{dt}$$

Wait, current flows out of the capacitor, so:

$$-\frac{dQ}{dt} = \frac{Q}{RC}$$

(The negative sign indicates charge is decreasing)

### Solving the Differential Equation

$$\frac{dQ}{Q} = -\frac{dt}{RC}$$

**Integrating** (with $Q(0) = Q_0$):

$$\ln Q - \ln Q_0 = -\frac{t}{RC}$$

$$\ln\left(\frac{Q}{Q_0}\right) = -\frac{t}{\tau}$$

$$Q(t) = Q_0 e^{-t/\tau}$$

### Current During Discharging

$$I(t) = -\frac{dQ}{dt} = \frac{Q_0}{RC}e^{-t/\tau} = I_0 e^{-t/\tau}$$

Where $I_0 = \frac{Q_0}{RC} = \frac{V_0}{R}$

### Voltage During Discharging

$$V_C(t) = \frac{Q(t)}{C} = V_0 e^{-t/\tau}$$

### Graphical Representation: Discharging

```
Charge Q(t) or Voltage V(t)
    │
 Q₀ ├───┐
    │    \
    │     \
    │      \___
    │          \_________
    │
    └──────────────────────
    0    τ    2τ   3τ   t
```

---

## ⚡ Energy in RC Circuits

### Energy Stored in Capacitor

$$U_C = \frac{1}{2}CV^2 = \frac{Q^2}{2C}$$

### Energy During Charging

**Energy supplied by battery**:
$$E_{battery} = Q_{final} \cdot \mathcal{E} = C\mathcal{E}^2$$

**Energy stored in capacitor**:
$$U_C = \frac{1}{2}C\mathcal{E}^2$$

**Energy dissipated in resistor**:
$$E_R = E_{battery} - U_C = \frac{1}{2}C\mathcal{E}^2$$

**Remarkable result**: Exactly half the energy goes to the capacitor, half to the resistor—independent of R!

### Calculus Verification

Energy dissipated in resistor:

$$E_R = \int_0^\infty I^2 R \, dt = \int_0^\infty \frac{\mathcal{E}^2}{R} e^{-2t/RC} \, dt$$

$$E_R = \frac{\mathcal{E}^2}{R} \cdot \left(-\frac{RC}{2}\right) e^{-2t/RC} \Big|_0^\infty$$

$$E_R = \frac{\mathcal{E}^2}{R} \cdot \frac{RC}{2} = \frac{1}{2}C\mathcal{E}^2$$

---

## 🔧 RC Circuit Problem-Solving Strategy

### Step 1: Identify the Circuit Type
- Is the capacitor charging or discharging?
- What are the initial conditions?

### Step 2: Write Kirchhoff's Loop Equation
Include all EMF sources, resistors, and capacitor.

### Step 3: Set Up the Differential Equation
Replace $I$ with $\frac{dQ}{dt}$ (or $-\frac{dQ}{dt}$ for discharge).

### Step 4: Identify the Time Constant
$$\tau = RC$$

For complex circuits, use equivalent resistance.

### Step 5: Write the Solution

**Charging** (from $Q = 0$):
$$Q(t) = Q_{max}(1 - e^{-t/\tau})$$

**Discharging** (from $Q = Q_0$):
$$Q(t) = Q_0 e^{-t/\tau}$$

### Step 6: Find Other Quantities
- $I = dQ/dt$
- $V_C = Q/C$
- $V_R = IR$

---

## 📊 Complex RC Circuits

### Finding Equivalent Resistance for τ

For RC circuits with multiple resistors, the time constant uses the **Thévenin equivalent resistance** seen by the capacitor.

**Method**: Remove the capacitor and find $R_{eq}$ between its terminals.

### Example: RC with Parallel Resistor

```
         R₁
    ┌────[ ]────┐
    │           │
   (+)         [R₂]
   ℰ            │
   (-)         ═══ C
    │           │
    └───────────┘
```

**Time constant**: $\tau = R_2 \cdot C$

Why? When we analyze the capacitor's behavior, $R_1$ and the battery form the "source," but $R_2$ is what the capacitor "sees" directly.

Actually, let me reconsider. For a more accurate analysis:

**Initial state** ($t = 0^+$): Capacitor acts like a short circuit
- $I_{total} = \mathcal{E}/(R_1)$ (all through $R_1$)
- Current splits between $R_2$ and $C$

**Final state** ($t \to \infty$): Capacitor acts like an open circuit
- $I = \mathcal{E}/(R_1 + R_2)$
- $V_C = \mathcal{E} \cdot R_2/(R_1 + R_2)$

**Time constant**: $\tau = R_{eq} \cdot C$ where $R_{eq} = R_1 \| R_2 = \frac{R_1 R_2}{R_1 + R_2}$

### RC Circuits with Multiple Capacitors

For capacitors in series or parallel, find $C_{eq}$ first:

**Series**: $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2}$

**Parallel**: $C_{eq} = C_1 + C_2$

---

## 🎯 Practice Problems

### Problem 1: Basic Kirchhoff Analysis

A circuit has:
- $\mathcal{E}_1 = 12$ V with internal resistance $r_1 = 1$ Ω
- $\mathcal{E}_2 = 6$ V with internal resistance $r_2 = 0.5$ Ω
- External resistor $R = 5$ Ω

All in a single loop with batteries opposing.

Find the current and power dissipated in each element.

**Solution**:

Using the loop rule (clockwise, starting from $\mathcal{E}_1$):
$$\mathcal{E}_1 - Ir_1 - IR - \mathcal{E}_2 - Ir_2 = 0$$

$$12 - I(1) - I(5) - 6 - I(0.5) = 0$$

$$6 = I(6.5)$$

$$I = \frac{6}{6.5} = 0.923 \text{ A}$$

Power dissipated:
- In $r_1$: $P = I^2 r_1 = (0.923)^2(1) = 0.85$ W
- In $R$: $P = I^2 R = (0.923)^2(5) = 4.26$ W
- In $r_2$: $P = I^2 r_2 = (0.923)^2(0.5) = 0.43$ W

### Problem 2: RC Charging

A $10$ μF capacitor is charged through a $100$ kΩ resistor by a $24$ V battery.

(a) Find the time constant.
(b) Find the charge after 2 seconds.
(c) Find the current after 2 seconds.
(d) How long until the capacitor reaches 90% of maximum charge?

**Solution**:

(a) $\tau = RC = (100 \times 10^3)(10 \times 10^{-6}) = 1$ s

(b) $Q(t) = C\mathcal{E}(1 - e^{-t/\tau})$
$Q(2) = (10 \times 10^{-6})(24)(1 - e^{-2})$
$Q(2) = (240 \times 10^{-6})(1 - 0.135)$
$Q(2) = 207.6$ μC

(c) $I(t) = \frac{\mathcal{E}}{R}e^{-t/\tau}$
$I(2) = \frac{24}{100 \times 10^3}e^{-2}$
$I(2) = (240 \times 10^{-6})(0.135) = 32.4$ μA

(d) $0.90 = 1 - e^{-t/\tau}$
$e^{-t/\tau} = 0.10$
$-t/\tau = \ln(0.10) = -2.303$
$t = 2.303 \times 1 = 2.3$ s

### Problem 3: RC Discharging

A capacitor with initial charge $Q_0 = 500$ μC and capacitance $C = 25$ μF discharges through a $20$ kΩ resistor.

(a) Find the initial voltage and current.
(b) Find the time constant.
(c) Find the energy dissipated in the first time constant.

**Solution**:

(a) $V_0 = Q_0/C = (500 \times 10^{-6})/(25 \times 10^{-6}) = 20$ V
$I_0 = V_0/R = 20/(20 \times 10^3) = 1$ mA

(b) $\tau = RC = (20 \times 10^3)(25 \times 10^{-6}) = 0.5$ s

(c) Initial energy: $U_0 = \frac{1}{2}CV_0^2 = \frac{1}{2}(25 \times 10^{-6})(400) = 5$ mJ

Energy at $t = \tau$: $V(\tau) = V_0 e^{-1} = 20(0.368) = 7.36$ V
$U(\tau) = \frac{1}{2}(25 \times 10^{-6})(54.2) = 0.678$ mJ

Energy dissipated: $\Delta U = 5 - 0.678 = 4.32$ mJ

Alternative: $U(\tau) = U_0 e^{-2} = 5(0.135) = 0.677$ mJ ✓

### Problem 4: Two-Loop Kirchhoff

```
        R₁=4Ω        R₂=6Ω
    ┌────[ ]────┬────[ ]────┐
    │           │           │
   (+)         [R₃=3Ω]     (+)
   ℰ₁=12V       │          ℰ₂=8V
   (-)          │          (-)
    │           │           │
    └───────────┴───────────┘
```

Find all currents.

**Solution**:

Let $I_1$ flow from $\mathcal{E}_1$ (left branch), $I_2$ flow to $\mathcal{E}_2$ (right branch), and $I_3$ flow down through $R_3$.

**Junction**: $I_1 = I_2 + I_3$

**Loop 1** (left, clockwise):
$12 - 4I_1 - 3I_3 = 0$

**Loop 2** (right, clockwise):
$3I_3 - 6I_2 - 8 = 0$

From junction: $I_3 = I_1 - I_2$

Substituting into Loop 1:
$12 - 4I_1 - 3(I_1 - I_2) = 0$
$12 - 7I_1 + 3I_2 = 0$ ... (1)

Substituting into Loop 2:
$3(I_1 - I_2) - 6I_2 - 8 = 0$
$3I_1 - 9I_2 = 8$ ... (2)

From (2): $I_1 = \frac{8 + 9I_2}{3}$

Substituting into (1):
$12 - 7 \cdot \frac{8 + 9I_2}{3} + 3I_2 = 0$
$36 - 56 - 63I_2 + 9I_2 = 0$
$-20 - 54I_2 = 0$
$I_2 = -\frac{20}{54} = -0.370$ A

$I_1 = \frac{8 + 9(-0.370)}{3} = \frac{4.67}{3} = 1.56$ A

$I_3 = 1.56 - (-0.370) = 1.93$ A

The negative $I_2$ means current actually flows from $\mathcal{E}_2$ toward the junction.

---

## 🧠 Common Mistakes to Avoid

### Mistake 1: Wrong Sign Conventions
- Always be consistent with current direction assumptions
- Double-check voltage drops vs. rises

### Mistake 2: Confusing Series and Parallel
- Series: same current, voltages add
- Parallel: same voltage, currents add

### Mistake 3: RC Time Constant Errors
- $\tau = RC$, not $R/C$ or $C/R$
- Use Thévenin equivalent R for complex circuits

### Mistake 4: Initial Conditions
- Uncharged capacitor: $V_C = 0$, acts like short circuit
- Fully charged capacitor: $I = 0$, acts like open circuit

### Mistake 5: Forgetting Internal Resistance
- Real batteries have internal resistance
- Terminal voltage < EMF when current flows

---

## 📐 Key Formulas Summary

### Current and Resistance
| Quantity | Formula |
|----------|---------|
| Current | $I = dQ/dt$ |
| Current density | $J = I/A = nqv_d$ |
| Ohm's Law (micro) | $\vec{J} = \sigma\vec{E}$ |
| Ohm's Law (macro) | $V = IR$ |
| Resistance | $R = \rho L/A$ |

### Power
| Quantity | Formula |
|----------|---------|
| Power | $P = IV = I^2R = V^2/R$ |

### Kirchhoff's Laws
| Law | Statement |
|-----|-----------|
| Junction | $\sum I_{in} = \sum I_{out}$ |
| Loop | $\sum \Delta V = 0$ |

### Resistor Combinations
| Configuration | Formula |
|---------------|---------|
| Series | $R_{eq} = R_1 + R_2 + \cdots$ |
| Parallel | $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots$ |

### RC Circuits
| Quantity | Charging | Discharging |
|----------|----------|-------------|
| Charge | $Q = Q_{max}(1 - e^{-t/\tau})$ | $Q = Q_0 e^{-t/\tau}$ |
| Current | $I = I_0 e^{-t/\tau}$ | $I = I_0 e^{-t/\tau}$ |
| Voltage | $V_C = \mathcal{E}(1 - e^{-t/\tau})$ | $V_C = V_0 e^{-t/\tau}$ |
| Time constant | $\tau = RC$ | $\tau = RC$ |

---

## 🎓 AP Exam Tips

### Free Response Strategy

1. **Draw the circuit** clearly with all labels
2. **Define current directions** explicitly
3. **Write Kirchhoff equations** systematically
4. **Show all calculus steps** for RC problems
5. **Check units** at every step
6. **Verify limiting cases** ($t = 0$, $t \to \infty$)

### Common FRQ Topics

- Multi-loop circuits with Kirchhoff's laws
- RC circuit analysis with calculus
- Energy considerations in circuits
- Power dissipation calculations
- Equivalent resistance problems

### Calculator Tips

- $e^{-1} \approx 0.368$
- $1 - e^{-1} \approx 0.632$
- $e^{-2} \approx 0.135$
- $\ln(2) \approx 0.693$

### Time Management

- Circuit diagrams: 2-3 minutes
- Kirchhoff setup: 3-5 minutes
- Solving equations: 5-7 minutes
- RC differential equations: 5-8 minutes

---

## 🔬 Laboratory Connections

### Ohm's Law Verification
- Measure $V$ vs $I$ for a resistor
- Slope = $R$
- Verify linearity (ohmic behavior)

### RC Time Constant Measurement
- Use oscilloscope or voltage sensor
- Measure voltage vs. time during charge/discharge
- Find $\tau$ from graph (time to reach 63.2%)

### Internal Resistance of a Battery
- Measure terminal voltage at different currents
- Plot $V$ vs $I$
- y-intercept = $\mathcal{E}$, slope = $-r$

---

## 🌟 Extension Topics

### Thévenin and Norton Equivalents
Any linear circuit can be replaced by:
- **Thévenin**: Voltage source $V_{Th}$ in series with $R_{Th}$
- **Norton**: Current source $I_N$ in parallel with $R_N$

Where $V_{Th} = I_N \cdot R_N$ and $R_{Th} = R_N$

### Wheatstone Bridge
Used for precision resistance measurement:

```
        R₁           R₂
    ┌───[ ]───┬───[ ]───┐
    │         │         │
   (+)       [G]        │
   ℰ          │         │
   (-)        │         │
    │         │         │
    └───[R₃]──┴──[R_x]──┘
```

When balanced (no current through G):
$$\frac{R_1}{R_3} = \frac{R_2}{R_x}$$

### RL and RLC Circuits (Preview)
In later units, you'll encounter:
- **RL circuits**: $\tau = L/R$
- **LC circuits**: Oscillations with $\omega = 1/\sqrt{LC}$
- **RLC circuits**: Damped oscillations

---

## ✅ Unit 3 Checklist

Before the exam, make sure you can:

- [ ] Calculate current density and drift velocity
- [ ] Apply microscopic Ohm's Law ($\vec{J} = \sigma\vec{E}$)
- [ ] Calculate resistance from resistivity
- [ ] Find power dissipation using all three formulas
- [ ] Account for internal resistance in batteries
- [ ] Apply Kirchhoff's junction rule correctly
- [ ] Apply Kirchhoff's loop rule with proper signs
- [ ] Combine resistors in series and parallel
- [ ] Set up the differential equation for RC circuits
- [ ] Solve RC charging and discharging problems
- [ ] Calculate time constants for complex RC circuits
- [ ] Analyze energy flow in RC circuits
- [ ] Sketch graphs of Q, I, V vs. time for RC circuits

---

*Electric circuits bridge theory and application—master the fundamentals, and you'll have the foundation for all of electronics! ⚡*

:::GUIDE:::
