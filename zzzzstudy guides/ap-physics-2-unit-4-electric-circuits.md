:::GUIDE:::
unit::=4
title::=🔌 Unit 4: Electric Circuits
desc::=Master circuit analysis, Ohm's law, and RC circuits
diff::=Medium-Hard
time::=55 min
tags::=physics-2,circuits,resistance,capacitors
content::=

# 🔌 Unit 4: Electric Circuits

## 📚 Introduction

Electric circuits are the backbone of modern technology. This unit covers everything from basic current flow to complex RC circuit analysis—essential knowledge for AP Physics 2 and beyond.

---

## ⚡ 1. Electric Current

### What is Current?

**Electric current (I)** is the rate of flow of electric charge through a conductor.

$$I = \frac{\Delta Q}{\Delta t}$$

Where:
- **I** = current (Amperes, A)
- **ΔQ** = charge transferred (Coulombs, C)
- **Δt** = time interval (seconds, s)

### Conventional Current vs. Electron Flow

| Conventional Current | Electron Flow |
|---------------------|---------------|
| Flows from + to − | Flows from − to + |
| Used in circuit analysis | Actual electron movement |
| Historical convention | Physical reality |

> 💡 **Key Point:** We use conventional current direction in all circuit analysis, even though electrons actually move in the opposite direction.

### Types of Current

**Direct Current (DC):**
- Flows in one direction
- Constant magnitude
- Sources: batteries, DC power supplies

**Alternating Current (AC):**
- Periodically reverses direction
- Varies sinusoidally
- Sources: wall outlets, generators

### Current Density

**Current density (J)** describes current per unit cross-sectional area:

$$J = \frac{I}{A}$$

Where:
- **J** = current density (A/m²)
- **A** = cross-sectional area (m²)

### Drift Velocity

Electrons move through a conductor with an average **drift velocity (vd)**:

$$I = nAv_d q$$

Where:
- **n** = number density of charge carriers (electrons/m³)
- **A** = cross-sectional area
- **vd** = drift velocity
- **q** = charge of each carrier (1.6 × 10⁻¹⁹ C for electrons)

> 🔬 **Fun Fact:** Drift velocity is surprisingly slow—typically ~10⁻⁴ m/s. The electric signal travels at nearly the speed of light because the electric field propagates quickly!

---

## 🧱 2. Resistance and Resistivity

### Resistance

**Resistance (R)** is the opposition to current flow in a conductor.

$$R = \frac{V}{I}$$

- **Unit:** Ohms (Ω)
- 1 Ω = 1 V/A

### Resistivity

**Resistivity (ρ)** is an intrinsic property of a material that determines its resistance:

$$R = \frac{\rho L}{A}$$

Where:
- **ρ** = resistivity (Ω·m)
- **L** = length of conductor (m)
- **A** = cross-sectional area (m²)

### Resistivity of Common Materials

| Material | Resistivity (Ω·m) at 20°C |
|----------|---------------------------|
| Silver | 1.59 × 10⁻⁸ |
| Copper | 1.68 × 10⁻⁸ |
| Aluminum | 2.65 × 10⁻⁸ |
| Tungsten | 5.60 × 10⁻⁸ |
| Nichrome | 1.00 × 10⁻⁶ |
| Silicon | 640 |
| Glass | 10¹⁰ – 10¹⁴ |

### Temperature Dependence of Resistance

For most metals, resistance increases with temperature:

$$R = R_0[1 + \alpha(T - T_0)]$$

Where:
- **R₀** = resistance at reference temperature T₀
- **α** = temperature coefficient of resistance (°C⁻¹)
- **T** = final temperature

> ⚠️ **Note:** Semiconductors have negative temperature coefficients—their resistance DECREASES with increasing temperature.

### Factors Affecting Resistance

| Factor | Effect on Resistance |
|--------|---------------------|
| ↑ Length | ↑ Resistance (directly proportional) |
| ↑ Cross-sectional Area | ↓ Resistance (inversely proportional) |
| ↑ Temperature (metals) | ↑ Resistance |
| Material type | Depends on resistivity |

---

## ⚖️ 3. Ohm's Law

### The Fundamental Relationship

**Ohm's Law** states that the current through a conductor is directly proportional to the voltage across it:

$$V = IR$$

Or equivalently:
$$I = \frac{V}{R} \quad \text{and} \quad R = \frac{V}{I}$$

### Ohmic vs. Non-Ohmic Materials

**Ohmic Materials:**
- Follow Ohm's law
- Constant resistance
- Linear V-I graph
- Examples: metals at constant temperature

**Non-Ohmic Materials:**
- Don't follow Ohm's law
- Variable resistance
- Non-linear V-I graph
- Examples: diodes, LEDs, thermistors

### V-I Characteristic Graphs

```
Ohmic (Resistor):          Non-Ohmic (Diode):
    V                           V
    |     /                     |      /
    |   /                       |     /
    | /                         |    |
    +------→ I                  +----→ I
```

> 📊 **Interpreting Graphs:** For a V-I graph, the slope equals resistance. A steeper slope = higher resistance.

---

## 💡 4. Electrical Power

### Power in Circuits

**Electrical power (P)** is the rate at which electrical energy is transferred:

$$P = IV$$

Using Ohm's law, we can derive equivalent expressions:

$$P = IV = I^2R = \frac{V^2}{R}$$

- **Unit:** Watts (W)
- 1 W = 1 J/s = 1 A·V

### Energy Consumption

Electrical energy consumed over time:

$$E = Pt$$

- **Unit:** Joules (J) or kilowatt-hours (kWh)
- 1 kWh = 3.6 × 10⁶ J

### Power Dissipation in Resistors

When current flows through a resistor, electrical energy converts to thermal energy (Joule heating):

$$P_{dissipated} = I^2R$$

> 🔥 **Important:** This is why high-current wires get hot and why we use thick wires for high-power applications.

### Choosing the Right Power Formula

| Given | Use This Formula |
|-------|------------------|
| I and V | P = IV |
| I and R | P = I²R |
| V and R | P = V²/R |

---

## 🔗 5. Series Circuits

### Characteristics of Series Circuits

In a **series circuit**, components are connected end-to-end in a single path.

**Key Properties:**
1. **Same current** flows through all components: I_total = I₁ = I₂ = I₃
2. **Voltages add up:** V_total = V₁ + V₂ + V₃
3. **Resistances add up:** R_total = R₁ + R₂ + R₃

### Equivalent Resistance (Series)

$$R_{eq} = R_1 + R_2 + R_3 + ... + R_n = \sum_{i=1}^{n} R_i$$

> 📝 **Memory Tip:** Series = Sum (both start with 'S')

### Voltage Divider Rule

In a series circuit, voltage divides proportionally to resistance:

$$V_n = V_{total} \times \frac{R_n}{R_{total}}$$

### Example: Series Circuit Analysis

**Problem:** Three resistors (2Ω, 4Ω, 6Ω) are connected in series with a 24V battery.

**Solution:**
1. Total resistance: R_total = 2 + 4 + 6 = 12Ω
2. Current: I = V/R = 24/12 = 2A
3. Voltage drops:
   - V₁ = IR₁ = 2 × 2 = 4V
   - V₂ = IR₂ = 2 × 4 = 8V
   - V₃ = IR₃ = 2 × 6 = 12V
4. Check: 4 + 8 + 12 = 24V ✓

---

## 🔀 6. Parallel Circuits

### Characteristics of Parallel Circuits

In a **parallel circuit**, components are connected across the same two points (nodes).

**Key Properties:**
1. **Same voltage** across all branches: V_total = V₁ = V₂ = V₃
2. **Currents add up:** I_total = I₁ + I₂ + I₃
3. **Reciprocals of resistances add up**

### Equivalent Resistance (Parallel)

$$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ... = \sum_{i=1}^{n} \frac{1}{R_i}$$

**For two resistors in parallel (shortcut):**

$$R_{eq} = \frac{R_1 \times R_2}{R_1 + R_2}$$

> ⚡ **Key Insight:** The equivalent resistance in parallel is ALWAYS less than the smallest individual resistance.

### Current Divider Rule

In a parallel circuit, current divides inversely proportional to resistance:

$$I_n = I_{total} \times \frac{R_{total}}{R_n}$$

For two parallel resistors:
$$I_1 = I_{total} \times \frac{R_2}{R_1 + R_2}$$

### Example: Parallel Circuit Analysis

**Problem:** Two resistors (6Ω and 3Ω) are connected in parallel with a 12V battery.

**Solution:**
1. Equivalent resistance: R_eq = (6 × 3)/(6 + 3) = 18/9 = 2Ω
2. Total current: I_total = V/R_eq = 12/2 = 6A
3. Branch currents:
   - I₁ = V/R₁ = 12/6 = 2A
   - I₂ = V/R₂ = 12/3 = 4A
4. Check: 2 + 4 = 6A ✓

---

## 🧩 7. Combination Circuits

### Strategy for Solving Combination Circuits

1. **Identify** series and parallel groups
2. **Simplify** from the inside out
3. **Reduce** to a single equivalent resistance
4. **Find** total current from the source
5. **Work backwards** to find individual values

### Example: Combination Circuit

```
    ┌──[R1=4Ω]──┬──[R2=6Ω]──┐
    │           │           │
   (+)         [R3=3Ω]     (−)
    │           │           │
    └───────────┴───────────┘
           12V
```

**Solution:**
1. R2 and R3 are in parallel:
   R₂₃ = (6 × 3)/(6 + 3) = 2Ω

2. R1 and R₂₃ are in series:
   R_total = 4 + 2 = 6Ω

3. Total current:
   I_total = 12V / 6Ω = 2A

4. Voltage across R1:
   V₁ = I × R₁ = 2 × 4 = 8V

5. Voltage across parallel group:
   V₂₃ = 12 - 8 = 4V

6. Current through R2:
   I₂ = 4V / 6Ω = 0.67A

7. Current through R3:
   I₃ = 4V / 3Ω = 1.33A

---

## ⚖️ 8. Kirchhoff's Laws

### Kirchhoff's Current Law (KCL) — Junction Rule

> **The sum of currents entering a junction equals the sum of currents leaving.**

$$\sum I_{in} = \sum I_{out}$$

This is based on **conservation of charge** — charge cannot accumulate at a junction.

### Kirchhoff's Voltage Law (KVL) — Loop Rule

> **The sum of all voltage changes around any closed loop equals zero.**

$$\sum V = 0$$

This is based on **conservation of energy** — a charge returning to its starting point has the same potential energy.

### Sign Conventions for KVL

| Element | Direction of Travel | Voltage Change |
|---------|---------------------|----------------|
| Battery | − to + | +ε (EMF) |
| Battery | + to − | −ε |
| Resistor | With current | −IR |
| Resistor | Against current | +IR |

### Applying Kirchhoff's Laws

**Step-by-Step Process:**
1. **Assign current directions** (guess if needed)
2. **Identify loops** and junctions
3. **Write KCL equations** for junctions
4. **Write KVL equations** for loops
5. **Solve** the system of equations
6. **Interpret** — negative current means opposite direction

### Example: Two-Loop Circuit

```
       I₁→     I₂→
    ┌──[R1]──A──[R2]──┐
    │                 │
   ε₁               ε₂
    │                 │
    └────────B────────┘
            ↑I₃
```

**Junction A:** I₁ = I₂ + I₃

**Loop 1 (left):** ε₁ − I₁R₁ − I₃R₃ = 0

**Loop 2 (right):** −ε₂ + I₃R₃ − I₂R₂ = 0

---

## 🔋 9. Capacitors in Circuits

### Capacitors in Series

$$\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3}$$

**Properties:**
- Same charge Q on each capacitor
- Voltages add up: V_total = V₁ + V₂ + V₃
- Equivalent capacitance is LESS than smallest individual capacitance

### Capacitors in Parallel

$$C_{eq} = C_1 + C_2 + C_3$$

**Properties:**
- Same voltage across each capacitor
- Charges add up: Q_total = Q₁ + Q₂ + Q₃
- Equivalent capacitance is the SUM of all capacitances

> 🔄 **Notice:** Capacitor formulas are OPPOSITE to resistor formulas! Series capacitors add reciprocally, while parallel capacitors add directly.

### Energy Stored in Capacitors

$$U = \frac{1}{2}CV^2 = \frac{1}{2}\frac{Q^2}{C} = \frac{1}{2}QV$$

### Comparison Table

| Property | Resistors | Capacitors |
|----------|-----------|------------|
| Series | R_eq = ΣR | 1/C_eq = Σ(1/C) |
| Parallel | 1/R_eq = Σ(1/R) | C_eq = ΣC |
| In Series | Same current | Same charge |
| In Parallel | Same voltage | Same voltage |

---

## ⏱️ 10. RC Circuits

### What is an RC Circuit?

An **RC circuit** contains both a resistor and a capacitor. These circuits exhibit time-dependent behavior during charging and discharging.

### Time Constant (τ)

The **time constant** characterizes how quickly the circuit responds:

$$\tau = RC$$

- **Unit:** seconds
- After one time constant (t = τ), the circuit is ~63% of the way to its final state

### Charging a Capacitor

When a capacitor charges through a resistor:

**Charge:** $Q(t) = Q_{max}(1 - e^{-t/RC}) = CV_0(1 - e^{-t/\tau})$

**Voltage:** $V_C(t) = V_0(1 - e^{-t/\tau})$

**Current:** $I(t) = I_0 e^{-t/\tau} = \frac{V_0}{R}e^{-t/\tau}$

### Discharging a Capacitor

When a capacitor discharges through a resistor:

**Charge:** $Q(t) = Q_0 e^{-t/RC} = Q_0 e^{-t/\tau}$

**Voltage:** $V_C(t) = V_0 e^{-t/\tau}$

**Current:** $I(t) = I_0 e^{-t/\tau} = \frac{V_0}{R}e^{-t/\tau}$

### RC Circuit Graphs

**Charging:**
```
V or Q                  I
  │    ___________        │\
  │   /                   │ \
  │  /                    │  \___________
  │ /                     │
  +──────────→ t          +──────────→ t
```

**Discharging:**
```
V or Q                  I
  |\                      |\
  │ \                     │ \
  │  \___________         │  \___________
  │                       │
  +──────────→ t          +──────────→ t
```

### Key Time Points

| Time | Charging (% of max) | Discharging (% remaining) |
|------|---------------------|---------------------------|
| t = τ | 63% | 37% |
| t = 2τ | 86% | 14% |
| t = 3τ | 95% | 5% |
| t = 4τ | 98% | 2% |
| t = 5τ | 99% | 1% (≈ fully charged/discharged) |

> 🎯 **Rule of Thumb:** After 5 time constants, the capacitor is essentially fully charged or discharged.

### Example: RC Circuit Calculation

**Problem:** A 100μF capacitor charges through a 50kΩ resistor from a 9V battery.

(a) What is the time constant?
(b) What is the voltage after 3 seconds?
(c) What is the initial current?

**Solution:**
(a) τ = RC = (50 × 10³)(100 × 10⁻⁶) = 5 s

(b) V(3) = 9(1 - e⁻³/⁵) = 9(1 - e⁻⁰·⁶) = 9(0.451) = 4.06 V

(c) I₀ = V₀/R = 9/(50 × 10³) = 0.18 mA = 180 μA

---

## 📊 11. Ammeters and Voltmeters

### Ammeters

**Purpose:** Measure current through a circuit element

**Connection:** In SERIES with the component

**Ideal Ammeter:** Has ZERO resistance (R = 0)
- Doesn't affect the current it measures
- No voltage drop across it

**Real Ammeters:** Have small but non-zero resistance
- Slightly reduces current in circuit
- Error is minimized when ammeter resistance << circuit resistance

### Voltmeters

**Purpose:** Measure voltage across a circuit element

**Connection:** In PARALLEL with the component

**Ideal Voltmeter:** Has INFINITE resistance (R = ∞)
- Draws no current
- Doesn't affect circuit behavior

**Real Voltmeters:** Have large but finite resistance
- Draws small current
- Error is minimized when voltmeter resistance >> circuit resistance

### Comparison Table

| Property | Ammeter | Voltmeter |
|----------|---------|-----------|
| Measures | Current (I) | Voltage (V) |
| Connection | Series | Parallel |
| Ideal Resistance | 0 | ∞ |
| Effect if non-ideal | Decreases I | Decreases V |

### Circuit Diagrams with Meters

```
Ammeter (Series):           Voltmeter (Parallel):
    ┌───[A]───[R]───┐           ┌────[R]────┐
    │               │           │     │     │
   (+)             (−)         (+)   [V]   (−)
    │               │           │     │     │
    └───────────────┘           └─────┴─────┘
```

### Common Mistakes to Avoid

❌ Connecting ammeter in parallel → short circuit!
❌ Connecting voltmeter in series → blocks current!
❌ Assuming real meters are ideal → measurement errors

> ⚠️ **Safety Warning:** Never connect an ammeter in parallel with a low-resistance component. This creates a short circuit and can damage the meter!

---

## 🔧 12. Internal Resistance and EMF

### Electromotive Force (EMF)

**EMF (ε)** is the energy per unit charge provided by a power source:
- It's NOT a force, despite the name
- Represents the "ideal" voltage of a battery
- Unit: Volts (V)

### Internal Resistance

Real batteries have **internal resistance (r)**:

$$V_{terminal} = \varepsilon - Ir$$

Where:
- V_terminal = actual voltage across battery terminals
- ε = EMF (ideal voltage)
- I = current drawn
- r = internal resistance

### Power Considerations

**Power delivered to external circuit:**
$$P_{external} = I^2 R = \frac{\varepsilon^2 R}{(R + r)^2}$$

**Power dissipated internally:**
$$P_{internal} = I^2 r$$

**Maximum power transfer:** Occurs when R = r (external resistance equals internal resistance)

### Example: Battery with Internal Resistance

**Problem:** A battery with EMF 12V and internal resistance 0.5Ω is connected to a 5.5Ω resistor.

**Solution:**
1. Total resistance: R_total = 5.5 + 0.5 = 6Ω
2. Current: I = ε/R_total = 12/6 = 2A
3. Terminal voltage: V = ε − Ir = 12 − (2)(0.5) = 11V
4. Voltage across load: V_load = IR = (2)(5.5) = 11V ✓
5. Power to load: P = I²R = (2)²(5.5) = 22W
6. Power lost internally: P = I²r = (2)²(0.5) = 2W

---

## 📐 13. Circuit Analysis Summary

### Problem-Solving Checklist

✅ **Identify the circuit type** (series, parallel, or combination)

✅ **Draw a clear circuit diagram** with labels

✅ **Assign current directions** (use Kirchhoff's laws if complex)

✅ **Find equivalent resistance** (simplify step by step)

✅ **Apply Ohm's law** (V = IR)

✅ **Use power formulas** as needed (P = IV = I²R = V²/R)

✅ **Check your answers** (do currents and voltages add correctly?)

### Quick Reference Formulas

| Quantity | Formula(s) |
|----------|------------|
| Current | I = ΔQ/Δt = V/R |
| Resistance | R = ρL/A = V/I |
| Power | P = IV = I²R = V²/R |
| Series R | R_eq = R₁ + R₂ + ... |
| Parallel R | 1/R_eq = 1/R₁ + 1/R₂ + ... |
| Series C | 1/C_eq = 1/C₁ + 1/C₂ + ... |
| Parallel C | C_eq = C₁ + C₂ + ... |
| Time constant | τ = RC |
| RC charging | V = V₀(1 - e⁻ᵗ/ᵗ) |
| RC discharging | V = V₀e⁻ᵗ/ᵗ |

---

## 📝 Practice Problems

### Problem 1: Basic Ohm's Law
A 330Ω resistor is connected to a 9V battery. Calculate:
(a) The current through the resistor
(b) The power dissipated

<details>
<summary>Solution</summary>

(a) I = V/R = 9/330 = 0.0273 A = 27.3 mA

(b) P = V²/R = 81/330 = 0.245 W = 245 mW
    OR P = IV = (0.0273)(9) = 0.245 W ✓

</details>

---

### Problem 2: Resistivity Calculation
A copper wire is 2.0 m long and has a diameter of 1.0 mm. Given ρ = 1.68 × 10⁻⁸ Ω·m, find its resistance.

<details>
<summary>Solution</summary>

A = πr² = π(0.5 × 10⁻³)² = 7.85 × 10⁻⁷ m²

R = ρL/A = (1.68 × 10⁻⁸)(2.0)/(7.85 × 10⁻⁷)
R = 0.0428 Ω = 42.8 mΩ

</details>

---

### Problem 3: Series Circuit
Three resistors (10Ω, 15Ω, and 25Ω) are connected in series with a 20V power supply. Find:
(a) Total resistance
(b) Current in the circuit
(c) Voltage across each resistor

<details>
<summary>Solution</summary>

(a) R_total = 10 + 15 + 25 = 50Ω

(b) I = V/R = 20/50 = 0.4 A

(c) V₁ = IR₁ = 0.4 × 10 = 4V
    V₂ = IR₂ = 0.4 × 15 = 6V
    V₃ = IR₃ = 0.4 × 25 = 10V
    
Check: 4 + 6 + 10 = 20V ✓

</details>

---

### Problem 4: Parallel Circuit
Two resistors (12Ω and 6Ω) are connected in parallel across a 24V source. Calculate:
(a) Equivalent resistance
(b) Total current from the source
(c) Current through each resistor

<details>
<summary>Solution</summary>

(a) R_eq = (12 × 6)/(12 + 6) = 72/18 = 4Ω

(b) I_total = V/R_eq = 24/4 = 6A

(c) I₁ = V/R₁ = 24/12 = 2A
    I₂ = V/R₂ = 24/6 = 4A
    
Check: 2 + 4 = 6A ✓

</details>

---

### Problem 5: Combination Circuit
```
         ┌──[6Ω]──┐
    ─────┤        ├────[8Ω]────
         └──[3Ω]──┘
              │
             24V
```
Find the current through the 8Ω resistor.

<details>
<summary>Solution</summary>

1. Parallel combination: R_p = (6 × 3)/(6 + 3) = 2Ω

2. Total resistance: R_total = 2 + 8 = 10Ω

3. Total current: I = 24/10 = 2.4A

The current through the 8Ω resistor is **2.4A** (same as total current since it's in series with the parallel group).

</details>

---

### Problem 6: Kirchhoff's Laws
Use Kirchhoff's laws to find the current through each resistor:
```
       ←I₁     →I₂
    ┌──[4Ω]──┬──[6Ω]──┐
    │        │        │
   12V      [2Ω]     6V
    │        │        │
    └────────┴────────┘
          ↓I₃
```

<details>
<summary>Solution</summary>

Junction rule at top node: I₁ = I₂ + I₃

Left loop (clockwise): 12 - 4I₁ - 2I₃ = 0
Right loop (clockwise): 2I₃ - 6I₂ - 6 = 0

From left loop: I₁ = (12 - 2I₃)/4 = 3 - 0.5I₃
From right loop: I₂ = (2I₃ - 6)/6 = I₃/3 - 1

Junction: 3 - 0.5I₃ = (I₃/3 - 1) + I₃
3 + 1 = 0.5I₃ + I₃/3 + I₃
4 = (1.5 + 0.333 + 1)I₃ = 1.833I₃
I₃ = 2.18A

I₁ = 3 - 0.5(2.18) = 1.91A
I₂ = 2.18/3 - 1 = -0.27A (flows opposite to assumed direction)

</details>

---

### Problem 7: Capacitors in Series and Parallel
Three capacitors (4μF, 6μF, and 12μF) are connected: the 4μF and 6μF are in series, and this combination is in parallel with the 12μF. Find the equivalent capacitance.

<details>
<summary>Solution</summary>

1. Series combination (4μF and 6μF):
   1/C_s = 1/4 + 1/6 = 3/12 + 2/12 = 5/12
   C_s = 12/5 = 2.4μF

2. Parallel with 12μF:
   C_eq = 2.4 + 12 = **14.4μF**

</details>

---

### Problem 8: RC Circuit Charging
A 50μF capacitor is charged through a 200kΩ resistor by a 100V source.
(a) What is the time constant?
(b) How long until the capacitor reaches 95% of its maximum voltage?
(c) What is the voltage after 15 seconds?

<details>
<summary>Solution</summary>

(a) τ = RC = (200 × 10³)(50 × 10⁻⁶) = 10 s

(b) 95% corresponds to approximately 3τ = 30 s

(c) V(15) = 100(1 - e⁻¹⁵/¹⁰) = 100(1 - e⁻¹·⁵)
    V(15) = 100(1 - 0.223) = 100(0.777) = **77.7V**

</details>

---

### Problem 9: RC Circuit Discharging
A capacitor initially charged to 50V discharges through a 10kΩ resistor. After 20ms, the voltage is 18.4V. Find the capacitance.

<details>
<summary>Solution</summary>

V(t) = V₀e⁻ᵗ/ᵗ
18.4 = 50e⁻⁰·⁰²/ᵗ
0.368 = e⁻⁰·⁰²/ᵗ
ln(0.368) = -0.02/τ
-1.0 = -0.02/τ
τ = 0.02 s = 20 ms

C = τ/R = 0.02/(10 × 10³) = 2 × 10⁻⁶ F = **2μF**

</details>

---

### Problem 10: Internal Resistance
A battery has an EMF of 9.0V. When connected to a 4.0Ω resistor, a current of 2.0A flows. Find:
(a) The internal resistance
(b) The terminal voltage
(c) The power dissipated internally

<details>
<summary>Solution</summary>

(a) ε = I(R + r)
    9.0 = 2.0(4.0 + r)
    4.5 = 4.0 + r
    r = **0.5Ω**

(b) V_terminal = ε - Ir = 9.0 - (2.0)(0.5) = **8.0V**
    OR V_terminal = IR = (2.0)(4.0) = 8.0V ✓

(c) P_internal = I²r = (2.0)²(0.5) = **2.0W**

</details>

---

### Problem 11: Power Analysis
A 60W light bulb operates at 120V. Calculate:
(a) The current through the bulb
(b) The resistance of the filament
(c) The energy consumed in 8 hours

<details>
<summary>Solution</summary>

(a) P = IV → I = P/V = 60/120 = **0.5A**

(b) R = V/I = 120/0.5 = **240Ω**
    OR R = V²/P = 14400/60 = 240Ω ✓

(c) E = Pt = 60W × 8h = 480 Wh = **0.48 kWh**
    In joules: E = 60 × 8 × 3600 = **1.73 × 10⁶ J**

</details>

---

### Problem 12: Ammeter and Voltmeter Effects
A voltmeter with internal resistance 10kΩ is used to measure voltage across a 5kΩ resistor in a simple circuit with a 15V source and the 5kΩ resistor.

(a) What voltage would an ideal voltmeter read?
(b) What does the real voltmeter read?
(c) Calculate the percent error.

<details>
<summary>Solution</summary>

(a) Ideal voltmeter: V = 15V (all voltage across the single resistor)

(b) Real voltmeter in parallel with 5kΩ:
    R_parallel = (10 × 5)/(10 + 5) = 50/15 = 3.33kΩ
    
    Since the voltmeter creates a parallel path, the effective resistance changes.
    But wait—if there's only ONE resistor and a voltage source, the voltage across it should still be 15V regardless of the voltmeter... unless there's additional resistance.
    
    Actually, re-reading: with just a source and one resistor, V across the resistor = 15V always.
    
    The voltmeter draws current I_v = 15/10000 = 1.5mA
    But this doesn't change the voltage reading (15V), just adds current draw.
    
    **V_measured = 15V** (same as ideal in this case)

(c) Percent error = 0%

Note: The voltmeter effect is significant when measuring across one component in a voltage divider or more complex circuit.

</details>

---

## 🎯 Key Takeaways

### Must-Know Concepts

1. **Ohm's Law:** V = IR — the foundation of circuit analysis

2. **Series vs. Parallel:**
   - Series: same current, voltages add, resistances add
   - Parallel: same voltage, currents add, reciprocals of resistance add

3. **Kirchhoff's Laws:**
   - Junction rule: currents in = currents out (charge conservation)
   - Loop rule: ΣV = 0 (energy conservation)

4. **RC Circuits:**
   - Time constant τ = RC
   - Exponential charging/discharging
   - After 5τ, circuit is ~99% complete

5. **Power:** P = IV = I²R = V²/R

### Common Exam Mistakes

❌ Forgetting to convert units (kΩ, μF, mA)
❌ Adding parallel resistances directly
❌ Wrong sign conventions in Kirchhoff's loops
❌ Confusing capacitor and resistor combination rules
❌ Ignoring internal resistance in battery problems

### Final Tips

✅ Draw clear circuit diagrams
✅ Label all known and unknown quantities
✅ Check answers using alternative methods
✅ Verify units throughout calculations
✅ Remember: capacitors are opposite to resistors for series/parallel!

---

**Good luck on your AP Physics 2 exam! 🚀**

:::GUIDE:::
