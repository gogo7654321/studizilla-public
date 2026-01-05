# AP Chemistry Unit 5: Kinetics Study Guides

:::GUIDE:::
unit::=5
title::=⚗️ Unit 5: Kinetics Complete Guide
desc::=Master chemical kinetics including how to measure reaction rates, express rate laws, and solve rate problems on the AP exam
diff::=Medium
time::=35 minutes
tags::=kinetics, reaction rate, rate law, rate constant, concentration
content::=

# ⏱️ Reaction Rates and Rate Laws

## 🎯 What is Chemical Kinetics?

Chemical kinetics is the study of **how fast** reactions occur and **what factors** affect reaction speed! ⚡

While thermodynamics tells us IF a reaction will occur, kinetics tells us HOW FAST it will happen! 🚀

### Why Kinetics Matters 🌟

| Real-World Application | Kinetics Concept |
|------------------------|------------------|
| Food spoilage 🍎 | Slowing reactions (refrigeration) |
| Enzyme catalysis 🧬 | Biological rate acceleration |
| Industrial synthesis ⚙️ | Maximizing production rates |
| Drug metabolism 💊 | Reaction rates in body |
| Combustion ⛽ | Fast energy release |

---

## 📊 Defining Reaction Rate

The **rate of reaction** measures how quickly reactants are consumed or products are formed! 📈

### Mathematical Definition

$$\text{Rate} = -\frac{1}{a}\frac{\Delta[A]}{\Delta t} = \frac{1}{b}\frac{\Delta[B]}{\Delta t}$$

For reaction: $aA + bB \rightarrow cC + dD$

| Term | Meaning |
|------|---------|
| $\Delta[A]$ | Change in concentration of A |
| $\Delta t$ | Change in time |
| Negative sign | Reactants decrease (negative $\Delta$) |
| Coefficients | Account for stoichiometry |

### Rate Expression Example 📝

For: $2N_2O_5 \rightarrow 4NO_2 + O_2$

$$\text{Rate} = -\frac{1}{2}\frac{\Delta[N_2O_5]}{\Delta t} = \frac{1}{4}\frac{\Delta[NO_2]}{\Delta t} = \frac{\Delta[O_2]}{\Delta t}$$

---

## 📈 Rate Law Expression

The **rate law** relates reaction rate to reactant concentrations! 🔗

### General Form

$$\text{Rate} = k[A]^m[B]^n$$

| Component | Description |
|-----------|-------------|
| $k$ | Rate constant (changes with T) |
| $[A], [B]$ | Reactant concentrations |
| $m, n$ | Reaction orders (determined experimentally!) |

### ⚠️ Critical Point!

**Reaction orders CANNOT be determined from coefficients!** They must be found experimentally! 🔬

---

## 🔢 Reaction Orders

The **order** with respect to a reactant shows how rate depends on that concentration! 📊

| Order | Rate Dependence | If [A] doubles... |
|-------|-----------------|-------------------|
| Zero (0) | Rate independent of [A] | Rate unchanged |
| First (1) | Rate ∝ [A] | Rate doubles |
| Second (2) | Rate ∝ [A]² | Rate quadruples |
| Third (3) | Rate ∝ [A]³ | Rate × 8 |

### Overall Order

$$\text{Overall order} = m + n + ...$$

**Example:** Rate = k[A]²[B]¹
- Order in A: 2
- Order in B: 1
- Overall order: 3

---

## 🧪 Determining Rate Laws Experimentally

### Method of Initial Rates 📋

Use data from multiple trials to find orders!

**Example Data:**

| Trial | [A] (M) | [B] (M) | Initial Rate (M/s) |
|-------|---------|---------|-------------------|
| 1 | 0.10 | 0.10 | 2.0 × 10⁻³ |
| 2 | 0.20 | 0.10 | 8.0 × 10⁻³ |
| 3 | 0.10 | 0.20 | 4.0 × 10⁻³ |

### Step-by-Step Solution 📝

**Step 1:** Find order in A (compare trials 1 and 2)
- [A] doubles (0.10 → 0.20), [B] constant
- Rate quadruples (2.0 → 8.0)
- $2^m = 4$, so $m = 2$ (second order in A)

**Step 2:** Find order in B (compare trials 1 and 3)
- [B] doubles (0.10 → 0.20), [A] constant
- Rate doubles (2.0 → 4.0)
- $2^n = 2$, so $n = 1$ (first order in B)

**Step 3:** Write rate law
$$\text{Rate} = k[A]^2[B]^1$$

**Step 4:** Calculate k using any trial
$$k = \frac{\text{Rate}}{[A]^2[B]} = \frac{2.0 \times 10^{-3}}{(0.10)^2(0.10)} = 2.0 \text{ M}^{-2}\text{s}^{-1}$$

---

## 📐 Units of Rate Constant

The units of k depend on overall order! 🎯

| Overall Order | Units of k |
|---------------|------------|
| 0 | M s⁻¹ |
| 1 | s⁻¹ |
| 2 | M⁻¹ s⁻¹ |
| 3 | M⁻² s⁻¹ |

### General Formula

$$\text{Units of } k = \text{M}^{(1-n)} \cdot \text{s}^{-1}$$

where n = overall order

---

## 🎯 AP Exam Tips for Rate Laws

| Tip | Details |
|-----|---------|
| Compare trials systematically | Keep one reactant constant |
| Watch for fractional orders | Half-order is possible (0.5) |
| Check units of k | Must match overall order |
| Rate is ALWAYS positive | Use absolute values |
| Don't assume from coefficients! | Orders are experimental |

---

## 🧠 Practice Problem

Given: $2A + B \rightarrow C$

| Trial | [A] (M) | [B] (M) | Rate (M/s) |
|-------|---------|---------|------------|
| 1 | 0.05 | 0.10 | 3.0 × 10⁻⁴ |
| 2 | 0.10 | 0.10 | 1.2 × 10⁻³ |
| 3 | 0.05 | 0.20 | 3.0 × 10⁻⁴ |

**Find the rate law and k!**

Solution:
- Trial 1→2: [A] doubles, rate × 4 → order = 2
- Trial 1→3: [B] doubles, rate unchanged → order = 0
- Rate = k[A]²
- k = (3.0 × 10⁻⁴)/(0.05)² = 0.12 M⁻¹s⁻¹ ✅

:::GUIDE:::
unit::=5
title::=Integrated Rate Laws and Half-Life
desc::=Learn to use integrated rate laws for different orders and calculate half-lives for radioactive decay and reactions
diff::=Hard
time::=40 minutes
tags::=integrated rate law, half-life, first order, second order, zero order
content::=

# 📈 Integrated Rate Laws and Half-Life

## 🔄 From Differential to Integrated

While differential rate laws relate **rate to concentration**, integrated rate laws relate **concentration to time**! 📊

### Why Use Integrated Rate Laws? 🤔

| Purpose | Application |
|---------|-------------|
| Predict concentrations | [A] at any time t |
| Determine reaction order | From graphical analysis |
| Calculate half-life | Radioactive decay |
| Plan experiments | Time needed for completion |

---

## 0️⃣ Zero-Order Reactions

For zero-order: Rate = k (constant rate!)

### Integrated Rate Law

$$[A]_t = [A]_0 - kt$$

### Characteristics Table

| Property | Zero-Order Value |
|----------|------------------|
| Rate Law | Rate = k |
| Integrated | [A] = [A]₀ - kt |
| Linear Plot | [A] vs. t |
| Slope | -k |
| Half-life | t₁/₂ = [A]₀/(2k) |
| Units of k | M/s (or M·s⁻¹) |

### Graphical Analysis 📊

```
[A]
|  \
|   \
|    \
|     \
+-------→ time
   slope = -k
```

**Zero order:** [A] vs t gives a straight line! 📉

### Half-Life (Zero Order)

$$t_{1/2} = \frac{[A]_0}{2k}$$

⚠️ **Note:** Half-life DEPENDS on initial concentration for zero order!

---

## 1️⃣ First-Order Reactions

For first-order: Rate = k[A]

### Integrated Rate Law

$$\ln[A]_t = \ln[A]_0 - kt$$

Or equivalently:

$$[A]_t = [A]_0 e^{-kt}$$

### Characteristics Table

| Property | First-Order Value |
|----------|-------------------|
| Rate Law | Rate = k[A] |
| Integrated | ln[A] = ln[A]₀ - kt |
| Linear Plot | ln[A] vs. t |
| Slope | -k |
| Half-life | t₁/₂ = 0.693/k |
| Units of k | s⁻¹ |

### Graphical Analysis 📊

```
ln[A]
|  \
|   \
|    \
|     \
+-------→ time
   slope = -k
```

**First order:** ln[A] vs t gives a straight line! 📉

### Half-Life (First Order) ⭐

$$t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}$$

🌟 **KEY:** Half-life is CONSTANT for first-order reactions!

---

## 2️⃣ Second-Order Reactions

For second-order: Rate = k[A]²

### Integrated Rate Law

$$\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt$$

### Characteristics Table

| Property | Second-Order Value |
|----------|-------------------|
| Rate Law | Rate = k[A]² |
| Integrated | 1/[A] = 1/[A]₀ + kt |
| Linear Plot | 1/[A] vs. t |
| Slope | +k |
| Half-life | t₁/₂ = 1/(k[A]₀) |
| Units of k | M⁻¹s⁻¹ |

### Graphical Analysis 📊

```
1/[A]
|        /
|      /
|    /
|  /
+-------→ time
   slope = +k
```

**Second order:** 1/[A] vs t gives a straight line! 📈

### Half-Life (Second Order)

$$t_{1/2} = \frac{1}{k[A]_0}$$

⚠️ **Note:** Half-life DEPENDS on initial concentration (inverse relationship)!

---

## 📊 Summary Comparison Table

| Order | Integrated Law | Linear Plot | Slope | Half-Life |
|-------|---------------|-------------|-------|-----------|
| 0 | [A] = [A]₀ - kt | [A] vs t | -k | [A]₀/2k |
| 1 | ln[A] = ln[A]₀ - kt | ln[A] vs t | -k | 0.693/k |
| 2 | 1/[A] = 1/[A]₀ + kt | 1/[A] vs t | +k | 1/(k[A]₀) |

🎯 **Pro Tip:** Make all three plots; whichever is linear tells you the order!

---

## ☢️ Radioactive Decay

Radioactive decay ALWAYS follows first-order kinetics! ⚛️

### Key Equations

$$N_t = N_0 e^{-\lambda t}$$

$$t_{1/2} = \frac{0.693}{\lambda}$$

| Symbol | Meaning |
|--------|---------|
| N | Number of nuclei (or activity) |
| λ | Decay constant (like k) |
| t₁/₂ | Half-life |

### Carbon-14 Dating Example 🦴

C-14 has t₁/₂ = 5,730 years

If a fossil has 25% of original C-14:
- 25% = (1/2)² → 2 half-lives
- Age = 2 × 5,730 = 11,460 years! 📅

---

## 🧮 Calculation Examples

### Example 1: First-Order

A first-order reaction has k = 0.025 s⁻¹. If [A]₀ = 0.80 M, find [A] after 30 s.

**Solution:**
$$\ln[A]_t = \ln(0.80) - (0.025)(30)$$
$$\ln[A]_t = -0.223 - 0.75 = -0.973$$
$$[A]_t = e^{-0.973} = 0.38 \text{ M}$$ ✅

### Example 2: Second-Order

A second-order reaction has k = 0.50 M⁻¹s⁻¹ and [A]₀ = 0.10 M. Find [A] after 10 s.

**Solution:**
$$\frac{1}{[A]_t} = \frac{1}{0.10} + (0.50)(10)$$
$$\frac{1}{[A]_t} = 10 + 5 = 15$$
$$[A]_t = 0.067 \text{ M}$$ ✅

### Example 3: Half-Life

A first-order reaction has t₁/₂ = 20 minutes. How long until 12.5% remains?

**Solution:**
- 12.5% = 1/8 = (1/2)³
- 3 half-lives = 3 × 20 = 60 minutes ✅

---

## 📈 Graphical Method Summary

To determine reaction order experimentally:

| If This Plot Is Linear... | Order Is... |
|--------------------------|-------------|
| [A] vs time | Zero order |
| ln[A] vs time | First order |
| 1/[A] vs time | Second order |

### Decision Tree 🌳

```
Make all three plots
        |
Which is linear?
   /    |    \
  /     |     \
[A]   ln[A]  1/[A]
 ↓      ↓      ↓
Zero  First  Second
```

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| First-order decay | Most common! Constant t₁/₂ |
| Memorize formulas | Know all three integrated laws |
| Unit check | k units change with order |
| Half-life pattern | After n half-lives: (1/2)ⁿ remains |
| Graphical analysis | Linear plot determines order |

:::GUIDE:::
unit::=5
title::=Collision Theory and Factors Affecting Rate
desc::=Understand the molecular basis of reaction rates through collision theory and learn how temperature, concentration, and surface area affect rates
diff::=Medium
time::=30 minutes
tags::=collision theory, activation energy, temperature, concentration, surface area
content::=

# 💥 Collision Theory and Factors Affecting Rate

## 🎱 Collision Theory Basics

For a reaction to occur, molecules must **collide** with:
1. ⚡ Sufficient energy (≥ Eₐ)
2. 🎯 Proper orientation

### The Three Requirements

| Requirement | Description |
|-------------|-------------|
| Collision | Molecules must physically meet |
| Energy | Energy ≥ activation energy (Eₐ) |
| Orientation | Correct geometric alignment |

---

## ⚡ Activation Energy (Eₐ)

The **activation energy** is the minimum energy needed for reaction! 🔥

### Energy Diagram

```
      ‡ (transition state)
     /\
    /  \  Ea (forward)
   /    \
  /      \_____ Products
 /       Ea (reverse)
/___________
Reactants
```

| Term | Definition |
|------|------------|
| Eₐ (forward) | Energy barrier from reactants |
| Eₐ (reverse) | Energy barrier from products |
| ΔH | Eₐ(forward) - Eₐ(reverse) |
| Transition state (‡) | Highest energy point |

### Activated Complex

The **activated complex** (transition state) is:
- 🔝 At the energy maximum
- ⚡ Unstable and short-lived
- 🔄 Can proceed to products OR back to reactants

---

## 🎯 Orientation Factor

Not all collisions lead to reaction—even with sufficient energy! 🎱

### Example: NO + Cl₂ → NOCl + Cl

**Effective collision:**
```
    O                   O
    ‖                   ‖
    N → + Cl-Cl  →     N-Cl + Cl
```

**Ineffective collision:**
```
    O                   
    ‖                   
    N ← + Cl-Cl  →  No reaction!
```

Only a fraction of collisions have correct orientation! 📐

---

## 🌡️ Effect of Temperature

**Temperature is the MOST important factor** affecting reaction rate! 🔥

### Why Temperature Matters

| Effect | Explanation |
|--------|-------------|
| More collisions | Molecules move faster |
| More energy | Higher fraction with E ≥ Eₐ |
| Faster reactions | Both effects combine |

### Maxwell-Boltzmann Distribution

```
Fraction
of molecules
    |     /\  T₁ (lower)
    |    /  \___ T₂ (higher)
    |   /      \____
    |  /            \
    | /              \_____
    +------------------------→
              Energy
            ↑
           Eₐ
```

At higher T:
- 📊 Distribution shifts right
- 📈 More molecules exceed Eₐ
- ⚡ Reaction faster

### Rule of Thumb 📏

**Rate approximately DOUBLES for every 10°C increase!**

(This is a rough approximation—actual change depends on Eₐ)

---

## 🧪 Effect of Concentration

Increasing concentration **increases reaction rate**! 📈

### Molecular Explanation

| Higher [Reactants] | Effect |
|-------------------|--------|
| More molecules | More frequent collisions |
| Same energy distribution | But more total collisions |
| Result | Faster reaction |

### Visualizing Concentration Effect

**Low concentration:**
```
+------------------+
|  •         •     |
|       •          |
|  •          •    |
+------------------+
Few collisions per second
```

**High concentration:**
```
+------------------+
| • • •  •  • • •  |
| •  • • •  • •  • |
| • •  •  • • •  • |
+------------------+
Many collisions per second
```

---

## 🧊 Effect of Surface Area

For heterogeneous reactions, **greater surface area = faster rate**! 📊

### Why Surface Area Matters

| Scenario | Surface Area | Rate |
|----------|--------------|------|
| Large chunk | Low | Slow ⏳ |
| Small pieces | Medium | Faster ⚡ |
| Powder | High | Fastest 💨 |

### Real-World Examples 🌍

| Example | Explanation |
|---------|-------------|
| Flour dust explosion 💥 | Massive surface area |
| Antacid tablets | Chew for faster relief |
| Catalytic converters | High surface area catalyst |
| Rusting iron | Powder rusts faster than block |

---

## 🎯 Summary: Factors Affecting Rate

| Factor | Change | Effect on Rate |
|--------|--------|---------------|
| Temperature ⬆️ | Increase | Increases ⬆️ |
| Concentration ⬆️ | Increase | Increases ⬆️ |
| Surface area ⬆️ | Increase | Increases ⬆️ |
| Catalyst added | Add catalyst | Increases ⬆️ |
| Nature of reactants | - | Varies |

### Nature of Reactants

| Reactant Type | Typical Rate |
|---------------|--------------|
| Ionic compounds | Fast (ions attract) |
| Large molecules | Slow (steric hindrance) |
| Bond strength | Stronger bonds = slower |
| Phase | Gas > liquid > solid |

---

## 📊 Collision Theory Math

### Collision Frequency (Z)

For gases: $Z \propto [A][B]\sqrt{T}$

### Fraction with Sufficient Energy

$$f = e^{-E_a/RT}$$

### Rate Constant Relationship

$$k \propto Z \cdot f \cdot p$$

where p = steric (orientation) factor

---

## 🧠 Conceptual Questions

**Q1:** Why doesn't doubling temperature double the rate exactly?

**A:** The relationship is exponential (Arrhenius equation), not linear. The fraction of molecules with E ≥ Eₐ increases exponentially with T! 📈

**Q2:** Why do ionic reactions occur fast?

**A:** Ion-ion attractions are strong, requiring lower Eₐ. Collisions between oppositely charged ions are often effective! ⚡

**Q3:** Why does a catalyst increase rate?

**A:** Catalyst provides an alternative pathway with lower Eₐ! (More on this later! 🔜)

---

## 🎯 AP Exam Tips

| Topic | Key Point |
|-------|-----------|
| Collision theory | Must collide with energy AND orientation |
| Temperature | Most important factor |
| Concentration | Appears in rate law |
| Surface area | Only for heterogeneous |
| Orientation | Not all collisions work |

:::GUIDE:::
unit::=5
title::=The Arrhenius Equation
desc::=Master the mathematical relationship between temperature and rate constant, and learn to calculate activation energy from experimental data
diff::=Hard
time::=35 minutes
tags::=Arrhenius, activation energy, temperature, rate constant, exponential
content::=

# 📐 The Arrhenius Equation

## 🔬 The Mathematical Relationship

The Arrhenius equation quantifies how temperature affects rate constant! 📊

### The Arrhenius Equation

$$k = Ae^{-E_a/RT}$$

| Symbol | Meaning | Units |
|--------|---------|-------|
| k | Rate constant | Varies |
| A | Frequency factor (pre-exponential) | Same as k |
| Eₐ | Activation energy | J/mol |
| R | Gas constant | 8.314 J/(mol·K) |
| T | Temperature | K (Kelvin!) |

---

## 📊 Understanding Each Component

### Frequency Factor (A)

The frequency factor represents:
- 🎯 Collision frequency
- 📐 Orientation probability
- 📈 Maximum possible rate constant (if all collisions were effective)

### Exponential Factor (e^(-Eₐ/RT))

This fraction represents:
- 📊 Fraction of molecules with E ≥ Eₐ
- 🔢 Always between 0 and 1
- 🌡️ Increases with T

### Temperature Effects on Exponential

| Condition | Value of e^(-Eₐ/RT) |
|-----------|---------------------|
| T → 0 | → 0 (very small) |
| T → ∞ | → 1 |
| High Eₐ | Smaller value |
| Low Eₐ | Larger value |

---

## 📈 Linearized Arrhenius Equation

Taking the natural log of both sides:

$$\ln k = \ln A - \frac{E_a}{R} \cdot \frac{1}{T}$$

This is in the form y = mx + b!

### Linear Plot

```
ln(k)
|  •
|    •
|      •
|        •
|          •
+------------→ 1/T
```

| Component | Value |
|-----------|-------|
| y-axis | ln(k) |
| x-axis | 1/T |
| slope | -Eₐ/R |
| y-intercept | ln(A) |

---

## 🧮 Two-Point Form

When you have k values at two temperatures:

$$\ln\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

### Solving for Eₐ

$$E_a = \frac{R \ln(k_2/k_1)}{(1/T_1 - 1/T_2)}$$

### Solving for k₂

$$k_2 = k_1 \exp\left[\frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)\right]$$

---

## 📝 Step-by-Step Calculations

### Example 1: Finding Eₐ

**Given:**
- k = 0.0521 s⁻¹ at 25°C
- k = 0.379 s⁻¹ at 50°C

**Find Eₐ**

**Step 1:** Convert to Kelvin
- T₁ = 25 + 273 = 298 K
- T₂ = 50 + 273 = 323 K

**Step 2:** Apply two-point form
$$E_a = \frac{(8.314) \ln(0.379/0.0521)}{(1/298 - 1/323)}$$

**Step 3:** Calculate
$$E_a = \frac{(8.314)(1.98)}{(0.00336 - 0.00310)}$$
$$E_a = \frac{16.5}{0.00026} = 63,500 \text{ J/mol}$$

$$E_a = 63.5 \text{ kJ/mol}$$ ✅

---

### Example 2: Finding k at New Temperature

**Given:**
- k = 2.5 × 10⁻³ s⁻¹ at 300 K
- Eₐ = 50.0 kJ/mol

**Find k at 350 K**

**Step 1:** Convert Eₐ to J/mol
- Eₐ = 50,000 J/mol

**Step 2:** Apply formula
$$\ln\left(\frac{k_2}{k_1}\right) = \frac{50000}{8.314}\left(\frac{1}{300} - \frac{1}{350}\right)$$

**Step 3:** Calculate
$$\ln\left(\frac{k_2}{k_1}\right) = (6014)(0.000476) = 2.86$$

$$\frac{k_2}{k_1} = e^{2.86} = 17.5$$

$$k_2 = (2.5 \times 10^{-3})(17.5) = 0.044 \text{ s}^{-1}$$ ✅

---

## 📊 Graphical Determination of Eₐ

### Data Table Example

| T (K) | k (s⁻¹) | 1/T (K⁻¹) | ln(k) |
|-------|---------|-----------|-------|
| 300 | 0.0120 | 0.00333 | -4.42 |
| 320 | 0.0450 | 0.00313 | -3.10 |
| 340 | 0.156 | 0.00294 | -1.86 |
| 360 | 0.487 | 0.00278 | -0.720 |

### Finding Slope and Eₐ

$$\text{slope} = \frac{\Delta \ln k}{\Delta (1/T)} = \frac{-0.720 - (-4.42)}{0.00278 - 0.00333}$$

$$\text{slope} = \frac{3.70}{-0.00055} = -6727 \text{ K}$$

$$E_a = -(\text{slope}) \times R = (6727)(8.314) = 55,900 \text{ J/mol}$$

$$E_a = 55.9 \text{ kJ/mol}$$ ✅

---

## 📉 Effect of Eₐ on Temperature Sensitivity

| Eₐ Value | Effect |
|----------|--------|
| High Eₐ | Rate VERY sensitive to T |
| Low Eₐ | Rate less sensitive to T |

### Visualization

```
ln(k)
|     \  Low Eₐ (gentle slope)
|      \ 
|       \__________
|         \
|          \  High Eₐ (steep slope)
+--------------→ 1/T
```

High Eₐ → Steep slope → Large change in k with T! 📈

---

## 🎯 Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Using °C | ALWAYS convert to Kelvin! |
| Wrong units for R | Use 8.314 J/(mol·K) with J |
| Forgetting ln | It's ln(k), not just k |
| Sign errors | Slope is negative |
| kJ vs J | Be consistent with units |

---

## 🔢 Quick Reference Formulas

| Formula | Use When... |
|---------|-------------|
| $k = Ae^{-E_a/RT}$ | Full equation |
| $\ln k = \ln A - E_a/RT$ | Graphical method |
| $\ln(k_2/k_1) = (E_a/R)(1/T_1 - 1/T_2)$ | Two-point calculation |
| Slope = -Eₐ/R | From ln(k) vs 1/T plot |

---

## 🧠 Practice Problem

A reaction has the following data:
- At 25°C (298 K): k = 1.2 × 10⁻⁴ s⁻¹
- Eₐ = 75 kJ/mol

Calculate k at 50°C (323 K).

**Solution:**
$$\ln\left(\frac{k_2}{k_1}\right) = \frac{75000}{8.314}\left(\frac{1}{298} - \frac{1}{323}\right)$$
$$= (9021)(0.000260) = 2.35$$
$$k_2 = (1.2 \times 10^{-4})e^{2.35}$$
$$k_2 = (1.2 \times 10^{-4})(10.5) = 1.26 \times 10^{-3} \text{ s}^{-1}$$ ✅

Rate increased ~10× with 25°C temperature rise! 🚀

:::GUIDE:::
unit::=5
title::=Reaction Mechanisms and Elementary Steps
desc::=Learn how complex reactions proceed through multiple steps, identify intermediates and rate-determining steps, and derive rate laws from mechanisms
diff::=Hard
time::=40 minutes
tags::=mechanism, elementary step, intermediate, rate-determining step, molecularity
content::=

# ⚙️ Reaction Mechanisms and Elementary Steps

## 🔬 What is a Reaction Mechanism?

A **reaction mechanism** is the step-by-step sequence of elementary reactions that leads to the overall reaction! 🪜

### Overall Reaction vs. Mechanism

**Overall reaction:** Shows start and end only
$$2NO_2 + F_2 \rightarrow 2NO_2F$$

**Mechanism:** Shows HOW it happens
- Step 1: $NO_2 + F_2 \rightarrow NO_2F + F$
- Step 2: $NO_2 + F \rightarrow NO_2F$

---

## 📦 Elementary Steps

An **elementary step** is a single molecular event! ⚛️

### Molecularity

The **molecularity** is the number of molecules involved in an elementary step!

| Molecularity | Name | Example | Rate Law |
|--------------|------|---------|----------|
| 1 | Unimolecular | A → products | Rate = k[A] |
| 2 | Bimolecular | A + B → products | Rate = k[A][B] |
| 2 | Bimolecular | 2A → products | Rate = k[A]² |
| 3 | Termolecular | A + B + C → products | Rate = k[A][B][C] |

### 🌟 Key Rule!

**For elementary steps ONLY:**
Rate law can be written from stoichiometry! 

(This does NOT apply to overall reactions!)

---

## 🔄 Reaction Intermediates

An **intermediate** is formed in one step and consumed in another! 🔄

### Identifying Intermediates

**Example mechanism:**
- Step 1: $A + B \rightarrow C + D$ (D is intermediate)
- Step 2: $D + E \rightarrow F$
- Overall: $A + B + E \rightarrow C + F$

| Species | Role |
|---------|------|
| A, B, E | Reactants |
| C, F | Products |
| D | Intermediate (not in overall!) |

### Intermediate vs. Transition State

| Feature | Intermediate | Transition State |
|---------|--------------|------------------|
| Stability | Has some stability | Maximum energy, unstable |
| Lifetime | Can be detected (sometimes) | Cannot be isolated |
| Energy | Local minimum | Energy maximum |
| Symbol | Regular formula | ‡ symbol |

---

## ⏱️ Rate-Determining Step (RDS)

The **rate-determining step** is the SLOWEST step—it controls the overall rate! 🐢

### Visualizing RDS

```
     Fast        Slow (RDS)      Fast
A + B ───→ C + D ─────→ E + F ───→ G
     step 1      step 2       step 3
```

**The slow step is the bottleneck!** 🚧

### Identifying the RDS

The rate law of the overall reaction matches the rate law of the RDS! 📝

---

## 📝 Writing Rate Laws from Mechanisms

### Case 1: First Step is Rate-Determining

**Mechanism:**
- Step 1 (slow): $NO_2 + F_2 \rightarrow NO_2F + F$
- Step 2 (fast): $NO_2 + F \rightarrow NO_2F$

**Rate law:** Directly from slow step!
$$\text{Rate} = k[NO_2][F_2]$$ ✅

---

### Case 2: Second Step is Rate-Determining

**Mechanism:**
- Step 1 (fast, equilibrium): $2NO \rightleftharpoons N_2O_2$
- Step 2 (slow): $N_2O_2 + H_2 \rightarrow N_2O + H_2O$

**Problem:** Rate law from step 2 contains intermediate!
$$\text{Rate} = k_2[N_2O_2][H_2]$$

**Solution:** Substitute using equilibrium! ⚖️

From step 1 equilibrium:
$$K = \frac{[N_2O_2]}{[NO]^2}$$
$$[N_2O_2] = K[NO]^2$$

**Final rate law:**
$$\text{Rate} = k_2 \cdot K[NO]^2[H_2] = k[NO]^2[H_2]$$ ✅

---

## 📊 Deriving Rate Laws: Step-by-Step

### Algorithm 🔢

1. Write rate law for slow step
2. If intermediate appears:
   - Use fast equilibrium step to express [intermediate]
   - Substitute back into rate law
3. Combine constants into single k

### Example: Ozone Decomposition

**Overall:** $2O_3 \rightarrow 3O_2$

**Mechanism:**
- Step 1 (fast eq): $O_3 \rightleftharpoons O_2 + O$
- Step 2 (slow): $O + O_3 \rightarrow 2O_2$

**Step 1:** Rate from slow step
$$\text{Rate} = k_2[O][O_3]$$

**Step 2:** [O] is intermediate—eliminate it!
From equilibrium: $K = \frac{[O_2][O]}{[O_3]}$
$$[O] = \frac{K[O_3]}{[O_2]}$$

**Step 3:** Substitute
$$\text{Rate} = k_2 \cdot \frac{K[O_3]}{[O_2]} \cdot [O_3]$$

$$\text{Rate} = k\frac{[O_3]^2}{[O_2]}$$ ✅

**Note:** [O₂] appears in denominator—it INHIBITS the reaction!

---

## ✅ Validating a Proposed Mechanism

A valid mechanism must:

| Criterion | Requirement |
|-----------|-------------|
| 1. Sum correctly | Steps add to overall reaction |
| 2. Match rate law | Predicted = experimental rate law |
| 3. Be reasonable | Elementary steps must be plausible |

### Testing a Mechanism

**Experimental rate law:** Rate = k[A][B]²

**Proposed mechanism:**
- Step 1 (fast eq): $A + B \rightleftharpoons C$
- Step 2 (slow): $C + B \rightarrow D$

**Deriving rate law:**
- From step 2: Rate = k₂[C][B]
- From equilibrium: [C] = K[A][B]
- Substituting: Rate = k₂K[A][B][B] = k[A][B]² ✅

**Mechanism is consistent!** 🎉

---

## 🧮 Practice Problem

**Mechanism:**
- Step 1 (fast eq): $Br_2 \rightleftharpoons 2Br$
- Step 2 (slow): $Br + H_2 \rightarrow HBr + H$
- Step 3 (fast): $H + Br_2 \rightarrow HBr + Br$

**What is the rate law?**

**Solution:**
1. Rate from slow step: Rate = k₂[Br][H₂]
2. [Br] is intermediate! From equilibrium:
   - K = [Br]²/[Br₂]
   - [Br] = √(K[Br₂]) = K^(1/2)[Br₂]^(1/2)
3. Substitute:
   - Rate = k₂ · K^(1/2)[Br₂]^(1/2)[H₂]
   - Rate = k[Br₂]^(1/2)[H₂] ✅

**The reaction is half-order in Br₂!** 📊

---

## 🎯 AP Exam Tips

| Concept | Key Point |
|---------|-----------|
| Elementary step rate law | CAN use stoichiometry |
| Overall reaction rate law | CANNOT use stoichiometry |
| RDS determines rate | Slowest step is bottleneck |
| Intermediates | Cancel when adding steps |
| Equilibrium step | Use K to eliminate intermediates |

:::GUIDE:::
unit::=5
title::=Catalysis
desc::=Understand how catalysts speed up reactions by lowering activation energy, and learn about homogeneous, heterogeneous, and enzyme catalysis
diff::=Medium
time::=30 minutes
tags::=catalyst, activation energy, enzyme, homogeneous, heterogeneous
content::=

# 🚀 Catalysis

## 🎯 What is a Catalyst?

A **catalyst** speeds up a reaction without being consumed in the process! ⚡

### Key Properties of Catalysts

| Property | Description |
|----------|-------------|
| Not consumed | Regenerated at end of reaction |
| Lowers Eₐ | Provides alternative pathway |
| Doesn't change ΔH | Same products, same energy change |
| Doesn't change K | Equilibrium position unchanged |
| Speeds BOTH directions | Forward and reverse equally |

---

## 📊 Energy Diagram with Catalyst

```
Energy
   |        ‡ (without catalyst)
   |       /\
   |      /  \
   |     /    \
   |    /  ‡*  \    (with catalyst - lower peak)
   |   / /  \   \
   |  / /    \   \
   | //        \  \
Reactants       \_\_Products
   |
```

| Path | Eₐ |
|------|-----|
| Without catalyst | Higher Eₐ |
| With catalyst | Lower Eₐ |

**Catalyst provides an alternative pathway with LOWER Eₐ!** 🛤️

---

## 🧮 Effect on Rate Constant

Since k depends on Eₐ (Arrhenius equation):

$$k = Ae^{-E_a/RT}$$

When Eₐ decreases, k INCREASES! 📈

### Example Calculation

**Without catalyst:** Eₐ = 100 kJ/mol
**With catalyst:** Eₐ = 60 kJ/mol
**Temperature:** 300 K

$$\frac{k_{cat}}{k_{uncat}} = \frac{e^{-60000/(8.314)(300)}}{e^{-100000/(8.314)(300)}}$$

$$= e^{(40000)/(8.314 \times 300)} = e^{16.0} = 8.9 \times 10^6$$

**The catalyst speeds up the reaction by nearly 9 million times!** 🚀

---

## 🔬 Types of Catalysts

### 1️⃣ Homogeneous Catalysis

Catalyst and reactants are in the **SAME PHASE**! 💧

| Feature | Description |
|---------|-------------|
| Phase | Same as reactants (usually solution) |
| Example | Acid-catalyzed reactions |
| Mechanism | Forms intermediate with reactants |

**Example:** Ester hydrolysis
$$CH_3COOCH_3 + H_2O \xrightarrow{H^+} CH_3COOH + CH_3OH$$

H⁺ is in solution with reactants!

---

### 2️⃣ Heterogeneous Catalysis

Catalyst and reactants are in **DIFFERENT PHASES**! 🧱

| Feature | Description |
|---------|-------------|
| Phase | Usually solid catalyst, gas/liquid reactants |
| Example | Catalytic converters, Haber process |
| Mechanism | Adsorption → Reaction → Desorption |

### Surface Catalysis Steps

```
1. Reactants approach surface
   ↓
2. ADSORPTION (reactants bind to surface)
   ↓
3. REACTION (bonds break/form on surface)
   ↓
4. DESORPTION (products leave surface)
   ↓
5. Surface regenerated for next cycle
```

### Industrial Examples

| Process | Catalyst | Reaction |
|---------|----------|----------|
| Haber process | Fe | N₂ + 3H₂ → 2NH₃ |
| Contact process | V₂O₅ | 2SO₂ + O₂ → 2SO₃ |
| Catalytic converter | Pt/Pd/Rh | CO + NOₓ → CO₂ + N₂ |
| Hydrogenation | Pt/Pd/Ni | C=C + H₂ → C-C |

---

## 🧬 Enzyme Catalysis (Biological)

Enzymes are biological catalysts—proteins that catalyze reactions in living systems! 🧬

### Enzyme Characteristics

| Feature | Description |
|---------|-------------|
| Specificity | Each enzyme for specific substrate |
| Active site | Where substrate binds |
| Lock and key | Substrate fits active site precisely |
| Induced fit | Active site adjusts to substrate |

### Enzyme Kinetics

```
E + S ⇌ ES → E + P

E = Enzyme
S = Substrate
ES = Enzyme-substrate complex
P = Product
```

### Michaelis-Menten Equation

$$v = \frac{V_{max}[S]}{K_M + [S]}$$

| Term | Meaning |
|------|---------|
| v | Reaction velocity (rate) |
| Vₘₐₓ | Maximum velocity |
| [S] | Substrate concentration |
| Kₘ | Michaelis constant |

### Saturation Kinetics Graph

```
Rate (v)
   |        ____________ Vmax
   |      /
   |    /
   |  /
   |/
   +------------------→ [S]
     ↑
    Km
```

At low [S]: Rate ∝ [S] (first order)
At high [S]: Rate = Vₘₐₓ (zero order)

---

## ☠️ Catalyst Poisoning

**Catalyst poisoning** occurs when a substance binds to the catalyst surface, blocking active sites! 🚫

| Example | Poison | Effect |
|---------|--------|--------|
| Catalytic converter | Lead (Pb) | Blocks Pt surface |
| Haber process Fe | Sulfur compounds | Blocks active sites |
| Enzymes | Heavy metals | Denatures protein |

**This is why leaded gasoline was banned!** ⛽

---

## 🔄 Catalysts in Mechanisms

A catalyst participates in the mechanism but is regenerated! 🔄

### Example: Ozone Depletion by CFCs

**Step 1:** $Cl + O_3 \rightarrow ClO + O_2$
**Step 2:** $ClO + O \rightarrow Cl + O_2$
**Overall:** $O_3 + O \rightarrow 2O_2$

**Cl is a catalyst!** It's consumed in step 1, regenerated in step 2! 🔄

One Cl atom can destroy thousands of O₃ molecules! 😱

---

## 📊 Catalyst Summary Table

| Type | Phase | Example | Advantage |
|------|-------|---------|-----------|
| Homogeneous | Same | H⁺ in solution | Uniform mixing |
| Heterogeneous | Different | Pt surface | Easy separation |
| Enzyme | Biological | Amylase | Very specific |

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| Catalyst lowers Eₐ | Alternative pathway |
| Not consumed | Regenerated in mechanism |
| Doesn't change ΔH | Same thermodynamics |
| Doesn't change K | Same equilibrium |
| Surface area | More catalyst surface = faster |
| Poisoning | Blocks active sites |

---

## 🧠 Quick Check Questions

**Q1:** A catalyst is added to a reaction at equilibrium. What happens?

**A:** Nothing! Equilibrium is reached faster, but position doesn't change. At equilibrium, forward and reverse rates are already equal—catalyst speeds both equally! ⚖️

**Q2:** How does a catalyst affect the energy diagram?

**A:** Lower activation energy peak, but same starting and ending energies (same ΔH)! 📊

**Q3:** Why are heterogeneous catalysts often finely divided?

**A:** Greater surface area = more active sites = faster reaction! 📈

:::GUIDE:::
unit::=5
title::=AP Exam Kinetics Problem Strategies
desc::=Master problem-solving strategies for kinetics FRQs including rate law determination, mechanism analysis, and graphical interpretation
diff::=Hard
time::=45 minutes
tags::=AP exam, FRQ, problem solving, kinetics, rate law
content::=

# 📝 AP Exam Kinetics Problem Strategies

## 🎯 What to Expect on the AP Exam

Kinetics is heavily tested! Here's what you'll see: 📊

| Question Type | Frequency | Points |
|---------------|-----------|--------|
| Rate law from data | Very common | 4-7 pts |
| Mechanism analysis | Common | 4-6 pts |
| Integrated rate law | Common | 3-5 pts |
| Arrhenius calculations | Sometimes | 3-4 pts |
| Catalyst conceptual | Common | 2-3 pts |

---

## 📊 Strategy 1: Rate Law from Initial Rates

### The Algorithm 🔢

**Step 1:** Identify trials where only ONE concentration changes

**Step 2:** Calculate the factor changes
$$\frac{\text{Rate}_2}{\text{Rate}_1} = \left(\frac{[A]_2}{[A]_1}\right)^n$$

**Step 3:** Solve for order (n)
- If rate doubles when [A] doubles: n = 1
- If rate quadruples when [A] doubles: n = 2
- If rate unchanged when [A] doubles: n = 0

**Step 4:** Write complete rate law

**Step 5:** Calculate k using any trial

### Worked Example 📝

| Trial | [A] (M) | [B] (M) | Rate (M/s) |
|-------|---------|---------|------------|
| 1 | 0.20 | 0.30 | 4.0 × 10⁻³ |
| 2 | 0.40 | 0.30 | 1.6 × 10⁻² |
| 3 | 0.20 | 0.60 | 8.0 × 10⁻³ |

**Order in A:** (Trial 1 vs 2)
- [A]: 0.20 → 0.40 (×2)
- Rate: 4.0 → 16 (×4)
- 2ⁿ = 4, so n = 2 ✅

**Order in B:** (Trial 1 vs 3)
- [B]: 0.30 → 0.60 (×2)
- Rate: 4.0 → 8.0 (×2)
- 2ⁿ = 2, so n = 1 ✅

**Rate Law:** Rate = k[A]²[B]

**Find k:**
$$k = \frac{\text{Rate}}{[A]^2[B]} = \frac{4.0 \times 10^{-3}}{(0.20)^2(0.30)}$$
$$k = \frac{4.0 \times 10^{-3}}{0.012} = 0.33 \text{ M}^{-2}\text{s}^{-1}$$ ✅

---

## 📈 Strategy 2: Graphical Analysis

### Which Plot to Make?

| Plot Linear? | Order | Slope |
|--------------|-------|-------|
| [A] vs t | Zero | -k |
| ln[A] vs t | First | -k |
| 1/[A] vs t | Second | +k |

### Reading the Graph

**Step 1:** Identify which plot is linear

**Step 2:** Calculate slope using two points
$$\text{slope} = \frac{y_2 - y_1}{x_2 - x_1}$$

**Step 3:** Determine k from slope
- Zero/First order: k = -slope
- Second order: k = +slope

---

## ⚙️ Strategy 3: Mechanism Problems

### Verify a Mechanism Matches Data

**Checklist:**
- [ ] Steps sum to overall reaction
- [ ] Rate law from mechanism matches experimental
- [ ] Elementary steps are reasonable (unimolecular, bimolecular)

### Deriving Rate Law from Mechanism

**If first step is slow:**
- Write rate law directly from slow step

**If later step is slow:**
1. Write rate law from slow step
2. Identify any intermediates
3. Use equilibrium from fast step to substitute
4. Eliminate intermediate from rate law

### Quick Reference: Eliminating Intermediates

For fast equilibrium: $A + B \rightleftharpoons C$ (C is intermediate)

$$K = \frac{[C]}{[A][B]}$$
$$[C] = K[A][B]$$

Substitute this into rate law for slow step!

---

## 🌡️ Strategy 4: Arrhenius Problems

### Two-Point Formula

$$\ln\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

### Common Tasks

| Given | Find | Formula |
|-------|------|---------|
| k₁, k₂, T₁, T₂ | Eₐ | Rearrange for Eₐ |
| k₁, Eₐ, T₁, T₂ | k₂ | Rearrange for k₂ |
| k₁, k₂, Eₐ, T₁ | T₂ | Rearrange for T₂ |

### ⚠️ Don't Forget!
- Convert °C to K
- Use R = 8.314 J/(mol·K)
- Watch Eₐ units (kJ vs J)

---

## 📋 Strategy 5: Half-Life Problems

### Key Formulas

| Order | Half-Life | Constant? |
|-------|-----------|-----------|
| Zero | t₁/₂ = [A]₀/2k | No, depends on [A]₀ |
| First | t₁/₂ = 0.693/k | Yes, constant! |
| Second | t₁/₂ = 1/(k[A]₀) | No, depends on [A]₀ |

### Fraction Remaining After n Half-Lives

$$\text{Fraction remaining} = \left(\frac{1}{2}\right)^n$$

| n | Fraction | Percentage |
|---|----------|------------|
| 1 | 1/2 | 50% |
| 2 | 1/4 | 25% |
| 3 | 1/8 | 12.5% |
| 4 | 1/16 | 6.25% |

---

## 🚀 Strategy 6: Catalyst Questions

### Common Conceptual Questions

**Q:** How does a catalyst increase rate?
**A:** Provides alternative pathway with lower Eₐ, increasing the fraction of collisions with sufficient energy.

**Q:** Does a catalyst affect equilibrium position?
**A:** No! It speeds both forward and reverse reactions equally. K is unchanged.

**Q:** What happens to ΔH with a catalyst?
**A:** Nothing! ΔH depends only on initial and final states.

**Q:** Sketch energy diagram with/without catalyst.
**A:** Same starting and ending points, but lower peak with catalyst.

---

## 📝 FRQ Answer Templates

### Rate Law from Data

*"The order in [reactant] is [n] because when [reactant] is [factor] while [other reactant] is held constant, the rate [changes by factor]. Since [factor]ⁿ = [rate factor], n = [order]."*

### Mechanism Justification

*"The proposed mechanism is consistent with the experimental rate law because:*
*1) The steps sum to the overall reaction*
*2) The rate-determining step is [step #], giving rate = k[...]*
*3) After substituting for the intermediate using the equilibrium expression, the rate law becomes rate = k[...], matching experiment."*

### Collision Theory Explanation

*"The reaction rate increases because:*
*1) More collisions occur per unit time*
*2) A greater fraction of collisions have energy ≥ Eₐ*
*3) [Additional factor if relevant]"*

---

## ⚠️ Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Using coefficients for orders | Orders are experimental only! |
| Forgetting to convert to K | Arrhenius needs Kelvin |
| Wrong sign for slope | Check: zero/first = negative, second = positive |
| Using intermediate in final rate law | Must substitute it out |
| Saying catalyst changes ΔH or K | It only lowers Eₐ |

---

## 🧠 Practice FRQ

**The following data were collected for the reaction:**
$2A + B \rightarrow C$

| Trial | [A] (M) | [B] (M) | Initial Rate (M/s) |
|-------|---------|---------|-------------------|
| 1 | 0.10 | 0.10 | 2.5 × 10⁻⁵ |
| 2 | 0.20 | 0.10 | 5.0 × 10⁻⁵ |
| 3 | 0.10 | 0.30 | 2.25 × 10⁻⁴ |

**(a)** Determine the order with respect to each reactant.

**(b)** Write the rate law.

**(c)** Calculate the rate constant with units.

**(d)** A student proposes this mechanism:
- Step 1 (slow): A + B → D
- Step 2 (fast): A + D → C

Is this consistent with the data? Explain.

---

### Solution

**(a)** 
- Order in A: Trial 1→2, [A] doubles, rate doubles. Order = 1
- Order in B: Trial 1→3, [B] triples, rate × 9 (3² = 9). Order = 2

**(b)** Rate = k[A][B]²

**(c)** $k = \frac{2.5 \times 10^{-5}}{(0.10)(0.10)^2} = 2.5 \times 10^{-2}$ M⁻²s⁻¹

**(d)** No! The mechanism predicts Rate = k[A][B] from the slow step, but the experimental rate law shows second order in B. The mechanism is NOT consistent. ❌

---

## 🎯 Final Exam Tips

| Area | Strategy |
|------|----------|
| Rate laws | Practice the ratio method |
| Graphs | Know all three linear plots |
| Mechanisms | Intermediate elimination |
| Arrhenius | Check units and temperatures |
| Conceptual | Focus on collision theory |
| Time management | ~1.5 min per point |

**Good luck on the AP exam!** 🍀
