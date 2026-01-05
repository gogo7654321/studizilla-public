# AP Chemistry Unit 7: Equilibrium Study Guides

:::GUIDE:::
unit::=7
title::=⚗️ Unit 7: Equilibrium Complete Guide
desc::=Master the fundamentals of chemical equilibrium, including dynamic equilibrium, equilibrium constants, and the relationship between K values and reaction extent
diff::=Medium
time::=35 minutes
tags::=equilibrium, equilibrium constant, Kc, Kp, dynamic equilibrium
content::=

# ⚖️ Chemical Equilibrium Concepts

## 🔄 What is Chemical Equilibrium?

**Chemical equilibrium** is a dynamic state where the forward and reverse reaction rates are EQUAL! 🎯

### Dynamic vs. Static Equilibrium

| Type | Description |
|------|-------------|
| Dynamic | Reactions still occurring, just at equal rates |
| Static | No reactions occurring (not chemical equilibrium) |

### Visualization

```
Forward:   A + B → C + D   (rate = kf[A][B])
                ⇌
Reverse:   C + D → A + B   (rate = kr[C][D])

At equilibrium: rate(forward) = rate(reverse)
```

**Concentrations stay CONSTANT, but reactions continue!** 🔄

---

## 📊 Characteristics of Equilibrium

| Feature | At Equilibrium |
|---------|---------------|
| Concentrations | Constant (not necessarily equal!) |
| Rates | Forward = Reverse |
| ΔG | = 0 |
| Q | = K |
| System | Must be closed |

### Common Misconception ⚠️

❌ At equilibrium, [reactants] = [products]
✅ At equilibrium, [reactants] and [products] are CONSTANT, but not necessarily equal!

---

## 🔢 The Equilibrium Constant (K)

For a general reaction:
$$aA + bB \rightleftharpoons cC + dD$$

The equilibrium constant expression is:

$$K = \frac{[C]^c[D]^d}{[A]^a[B]^b}$$

### Key Rules for K Expressions

| Rule | Example |
|------|---------|
| Products over reactants | Products in numerator |
| Coefficients become exponents | [A]² if coefficient is 2 |
| Pure solids/liquids OMITTED | Don't include (s) or (l) |
| Aqueous and gases included | Include (aq) and (g) |

---

## 📝 Writing K Expressions

### Example 1: Homogeneous Gas Equilibrium

$$N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)$$

$$K_c = \frac{[NH_3]^2}{[N_2][H_2]^3}$$

### Example 2: Heterogeneous Equilibrium

$$CaCO_3(s) \rightleftharpoons CaO(s) + CO_2(g)$$

$$K_c = [CO_2]$$

(Solids are omitted!)

### Example 3: Aqueous Equilibrium

$$AgCl(s) \rightleftharpoons Ag^+(aq) + Cl^-(aq)$$

$$K_{sp} = [Ag^+][Cl^-]$$

(Solid AgCl omitted!)

---

## 🌡️ Kc vs. Kp

For gas-phase reactions, we can express K in terms of **concentrations (Kc)** or **partial pressures (Kp)**!

### Converting Between Kc and Kp

$$K_p = K_c(RT)^{\Delta n}$$

| Symbol | Meaning |
|--------|---------|
| R | 0.0821 L·atm/(mol·K) |
| T | Temperature in Kelvin |
| Δn | moles gas products - moles gas reactants |

### Example Calculation

For: $N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)$

Δn = 2 - (1 + 3) = -2

If Kc = 3.5 × 10⁸ at 298 K:
$$K_p = (3.5 \times 10^8)(0.0821 \times 298)^{-2}$$
$$K_p = (3.5 \times 10^8)(24.5)^{-2}$$
$$K_p = (3.5 \times 10^8)(0.00167)$$
$$K_p = 5.8 \times 10^5$$ ✅

---

## 📊 Magnitude of K

The size of K tells you about the position of equilibrium! 📈

| K Value | Equilibrium Position | Interpretation |
|---------|---------------------|----------------|
| K >> 1 (large) | Products favored | Reaction "goes to completion" |
| K << 1 (small) | Reactants favored | Reaction barely proceeds |
| K ≈ 1 | Significant amounts of both | Neither strongly favored |

### Examples

| Reaction | K | Interpretation |
|----------|---|----------------|
| 2H₂ + O₂ ⇌ 2H₂O | 10⁸³ | Essentially all products |
| N₂ + O₂ ⇌ 2NO | 10⁻³⁰ | Essentially all reactants |
| H₂ + I₂ ⇌ 2HI | 54 | Mixture at equilibrium |

---

## 🔄 Manipulating Equilibrium Expressions

| Operation | Effect on K |
|-----------|-------------|
| Reverse reaction | K' = 1/K |
| Multiply by n | K' = Kⁿ |
| Add reactions | K' = K₁ × K₂ |

### Example: Reversing

$$N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g) \quad K = 4.0 \times 10^8$$

For the reverse:
$$2NH_3(g) \rightleftharpoons N_2(g) + 3H_2(g) \quad K' = \frac{1}{4.0 \times 10^8} = 2.5 \times 10^{-9}$$

### Example: Multiplying

If: $A \rightleftharpoons B \quad K = 10$

Then: $2A \rightleftharpoons 2B \quad K' = 10^2 = 100$

---

## 🌡️ Temperature and K

**K depends ONLY on temperature!**

| Factor | Effect on K? |
|--------|--------------|
| Temperature change | YES! Changes K |
| Concentration change | NO |
| Pressure change | NO |
| Catalyst | NO |

### Temperature Effect Direction

From: $\Delta G° = -RT \ln K$

| Reaction Type | Temperature ↑ | K... |
|---------------|---------------|------|
| Exothermic (ΔH < 0) | Increases | Decreases |
| Endothermic (ΔH > 0) | Increases | Increases |

**Think of heat as a reactant (endo) or product (exo)!** 🌡️

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| K expression | Products over reactants |
| Solids/liquids | OMIT from expression |
| K vs Kp | K_p = K_c(RT)^Δn |
| Large K | Products favored |
| Only T changes K | Other factors shift position, not K |

:::GUIDE:::
unit::=7
title::=The Reaction Quotient (Q) and Le Chatelier's Principle
desc::=Learn to use the reaction quotient to predict reaction direction and apply Le Chatelier's principle to equilibrium shifts
diff::=Medium
time::=35 minutes
tags::=reaction quotient, Q, Le Chatelier, equilibrium shift, stress
content::=

# 🔮 The Reaction Quotient and Le Chatelier's Principle

## 📊 The Reaction Quotient (Q)

**Q** has the same form as K, but uses CURRENT concentrations, not equilibrium! 📍

$$Q = \frac{[C]^c[D]^d}{[A]^a[B]^b} \quad \text{(at any time)}$$

### Q vs K Comparison

| Q vs K | System Status | Reaction Direction |
|--------|---------------|-------------------|
| Q < K | Not at equilibrium | Forward → (toward products) |
| Q > K | Not at equilibrium | Reverse ← (toward reactants) |
| Q = K | At equilibrium | No net change |

### Visual Representation

```
Q < K          Q = K          Q > K
  |              |              |
  |→→→→→→→→→→→→→|←←←←←←←←←←←←←|
  |  Forward    |   Equil.     |  Reverse
  |              |              |
[Reactants]  [Products]   [Products]
  excess       balanced     excess
```

---

## 🧮 Using Q to Predict Direction

### Example Problem

For: $H_2(g) + I_2(g) \rightleftharpoons 2HI(g)$ with K = 54 at 700 K

If [H₂] = 0.10 M, [I₂] = 0.20 M, [HI] = 0.40 M:

$$Q = \frac{[HI]^2}{[H_2][I_2]} = \frac{(0.40)^2}{(0.10)(0.20)} = \frac{0.16}{0.02} = 8.0$$

Since Q (8.0) < K (54):
- **Reaction proceeds FORWARD** ✅
- More HI will form
- [H₂] and [I₂] will decrease

---

## ⚖️ Le Chatelier's Principle

**Le Chatelier's Principle:** When a system at equilibrium is stressed, it shifts to RELIEVE the stress! 🏋️

### Types of Stress

| Stress | System Response |
|--------|-----------------|
| Add reactant | Shift right (→) |
| Remove reactant | Shift left (←) |
| Add product | Shift left (←) |
| Remove product | Shift right (→) |
| Increase pressure | Shift to fewer moles gas |
| Decrease pressure | Shift to more moles gas |
| Increase T (exo) | Shift left (←) |
| Increase T (endo) | Shift right (→) |

---

## 🧪 Concentration Changes

### Adding a Reactant

$$N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)$$

**Add more N₂:**
- Q becomes smaller (larger denominator)
- Q < K, so reaction shifts RIGHT
- More NH₃ is produced
- Some N₂ and H₂ are consumed

### Removing a Product

**Remove NH₃:**
- Q becomes smaller (smaller numerator)
- Q < K, so reaction shifts RIGHT
- More NH₃ is produced to replace it

---

## 📊 Pressure/Volume Changes

Pressure changes only affect GAS equilibria with Δn ≠ 0!

### Increasing Pressure (Decreasing Volume)

System shifts toward the side with FEWER moles of gas!

**Example:** $N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)$
- Left side: 1 + 3 = 4 moles gas
- Right side: 2 moles gas
- Increase P → Shift RIGHT (toward fewer moles) ✅

### When Δn = 0

$$H_2(g) + I_2(g) \rightleftharpoons 2HI(g)$$
- Both sides: 2 moles gas
- Pressure change has NO EFFECT! ⚖️

### Adding Inert Gas

| Condition | Effect |
|-----------|--------|
| Constant volume | No shift (partial pressures unchanged) |
| Constant pressure | Shift toward more moles (volume increases) |

---

## 🌡️ Temperature Changes

Temperature changes actually change K! This is different from other stresses!

### For Exothermic Reactions (ΔH < 0)

Think: $A + B \rightleftharpoons C + D + \text{heat}$

| Change | Effect | K |
|--------|--------|---|
| Increase T | Shift LEFT | K decreases |
| Decrease T | Shift RIGHT | K increases |

### For Endothermic Reactions (ΔH > 0)

Think: $A + B + \text{heat} \rightleftharpoons C + D$

| Change | Effect | K |
|--------|--------|---|
| Increase T | Shift RIGHT | K increases |
| Decrease T | Shift LEFT | K decreases |

---

## 🚀 Catalyst Effect

**A catalyst does NOT shift equilibrium!**

| Catalyst Effect | Explanation |
|-----------------|-------------|
| Speeds up forward | ✅ Yes |
| Speeds up reverse | ✅ Yes (equally!) |
| Changes K | ❌ No |
| Shifts equilibrium | ❌ No |
| Reaches equilibrium faster | ✅ Yes |

---

## 📋 Le Chatelier Summary Table

| Stress | Shift Direction | Effect on K? |
|--------|-----------------|--------------|
| Add reactant | Right → | No change |
| Add product | Left ← | No change |
| Increase P (Δn ≠ 0) | Toward fewer moles | No change |
| Increase T (exo) | Left ← | K decreases |
| Increase T (endo) | Right → | K increases |
| Add catalyst | No shift | No change |

---

## 🧠 Conceptual Questions

**Q1:** For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH < 0. How can you maximize SO₃ yield?

**A:** 
- Add SO₂ or O₂ (shift right)
- Remove SO₃ (shift right)
- Increase pressure (shift right, fewer moles)
- Decrease temperature (shift right, exothermic)

**Q2:** Why do industrial processes often run at high temperature despite unfavorable K?

**A:** Kinetics! High T increases reaction RATE even if K is less favorable. Trade-off between equilibrium position and speed! ⚡

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| Q < K | Forward reaction favored |
| Q > K | Reverse reaction favored |
| Add substance | Shift away from it |
| Pressure | Only affects gases with Δn ≠ 0 |
| Only T changes K | Everything else shifts position |
| Catalyst | Faster, but no shift |

:::GUIDE:::
unit::=7
title::=ICE Tables and Equilibrium Calculations
desc::=Master the ICE table method for solving equilibrium problems including calculating concentrations and K values
diff::=Hard
time::=45 minutes
tags::=ICE table, equilibrium calculations, concentration, solving for x
content::=

# 🧊 ICE Tables and Equilibrium Calculations

## 📊 What is an ICE Table?

**ICE** stands for **I**nitial, **C**hange, **E**quilibrium! 🧊

It's a systematic way to organize equilibrium calculations!

### ICE Table Structure

|  | Reactant A | Reactant B | Product C |
|--|------------|------------|-----------|
| **I** (Initial) | [A]₀ | [B]₀ | [C]₀ |
| **C** (Change) | -ax | -bx | +cx |
| **E** (Equilibrium) | [A]₀ - ax | [B]₀ - bx | [C]₀ + cx |

**Note:** Coefficients from balanced equation become multipliers!

---

## 📝 Setting Up ICE Tables

### Key Rules

| Rule | Explanation |
|------|-------------|
| Use stoichiometry | Changes are in ratio of coefficients |
| Reactants decrease | Change is negative (-x) |
| Products increase | Change is positive (+x) |
| Add I + C = E | Each column adds up |

### Example Setup

For: $N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)$

Starting with 1.0 M N₂, 3.0 M H₂, no NH₃:

|  | N₂ | H₂ | NH₃ |
|--|----|----|-----|
| I | 1.0 | 3.0 | 0 |
| C | -x | -3x | +2x |
| E | 1.0-x | 3.0-3x | 2x |

---

## 🧮 Solving for x: Type 1 - Given K

### Problem Type 1A: Small K (x << initial)

When K is very small, we can approximate! 🎯

**Example:** Find [HI] at equilibrium.
$$H_2(g) + I_2(g) \rightleftharpoons 2HI(g) \quad K = 1.0 \times 10^{-4}$$

Initial: [H₂] = [I₂] = 0.50 M, [HI] = 0

|  | H₂ | I₂ | HI |
|--|----|----|----|
| I | 0.50 | 0.50 | 0 |
| C | -x | -x | +2x |
| E | 0.50-x | 0.50-x | 2x |

$$K = \frac{[HI]^2}{[H_2][I_2]} = \frac{(2x)^2}{(0.50-x)(0.50-x)}$$

Since K is small, x << 0.50, so 0.50 - x ≈ 0.50:

$$1.0 \times 10^{-4} = \frac{4x^2}{(0.50)^2} = \frac{4x^2}{0.25}$$

$$x^2 = \frac{(1.0 \times 10^{-4})(0.25)}{4} = 6.25 \times 10^{-6}$$

$$x = 2.5 \times 10^{-3}$$

$$[HI] = 2x = 5.0 \times 10^{-3} \text{ M}$$ ✅

**Check:** Is x << 0.50? Yes! (0.0025 << 0.50) ✅

---

### Problem Type 1B: Moderate K (Quadratic)

When K is moderate, solve the quadratic! 📐

**Example:** Find equilibrium concentrations.
$$PCl_5(g) \rightleftharpoons PCl_3(g) + Cl_2(g) \quad K = 0.040$$

Initial: [PCl₅] = 0.50 M

|  | PCl₅ | PCl₃ | Cl₂ |
|--|------|------|-----|
| I | 0.50 | 0 | 0 |
| C | -x | +x | +x |
| E | 0.50-x | x | x |

$$K = \frac{[PCl_3][Cl_2]}{[PCl_5]} = \frac{(x)(x)}{0.50-x} = 0.040$$

$$x^2 = 0.040(0.50 - x)$$
$$x^2 = 0.020 - 0.040x$$
$$x^2 + 0.040x - 0.020 = 0$$

Using quadratic formula:
$$x = \frac{-0.040 \pm \sqrt{0.0016 + 0.080}}{2}$$
$$x = \frac{-0.040 \pm 0.286}{2}$$
$$x = 0.123$$ (taking positive root)

**Equilibrium concentrations:**
- [PCl₅] = 0.50 - 0.123 = 0.38 M ✅
- [PCl₃] = [Cl₂] = 0.123 M ✅

---

## 🧮 Solving for x: Type 2 - Finding K

### Problem: Calculate K from Data

At equilibrium: [N₂] = 0.80 M, [H₂] = 0.40 M, [NH₃] = 0.20 M

For: $N_2 + 3H_2 \rightleftharpoons 2NH_3$

$$K = \frac{[NH_3]^2}{[N_2][H_2]^3} = \frac{(0.20)^2}{(0.80)(0.40)^3}$$
$$= \frac{0.040}{(0.80)(0.064)} = \frac{0.040}{0.0512} = 0.78$$ ✅

---

## 🔢 Special Cases

### Case 1: Starting from Pure Products

**Example:** 1.0 M NH₃ decomposes.

|  | N₂ | H₂ | NH₃ |
|--|----|----|-----|
| I | 0 | 0 | 1.0 |
| C | +x | +3x | -2x |
| E | x | 3x | 1.0-2x |

Note: Products form (positive change for N₂ and H₂)!

### Case 2: Starting from Both Sides

**Example:** Initial: [H₂] = 0.50 M, [I₂] = 0.50 M, [HI] = 0.10 M

First, find Q to determine direction:
$$Q = \frac{(0.10)^2}{(0.50)(0.50)} = 0.04$$

If K = 50, then Q < K, so reaction goes FORWARD.

|  | H₂ | I₂ | HI |
|--|----|----|----|
| I | 0.50 | 0.50 | 0.10 |
| C | -x | -x | +2x |
| E | 0.50-x | 0.50-x | 0.10+2x |

---

## 📐 The Quadratic Formula

$$ax^2 + bx + c = 0$$

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### Tips for Using Quadratic

| Tip | Explanation |
|-----|-------------|
| Only one root is physical | Concentrations must be positive! |
| Check your answer | Plug x back into K expression |
| If K is small, try approximation first | 5% rule |

---

## 📏 The 5% Rule for Approximations

If the approximation changes the initial concentration by less than 5%, it's valid!

$$\frac{x}{[\text{initial}]} \times 100\% < 5\%$$

### If Approximation Fails

| Option | Method |
|--------|--------|
| Successive approximation | Substitute x back, iterate |
| Quadratic formula | Solve exactly |
| Perfect square | Sometimes expression simplifies |

---

## 🧮 Practice Problem

For: $2NO_2(g) \rightleftharpoons N_2O_4(g)$ with K = 4.5

Initial: [NO₂] = 0.80 M, [N₂O₄] = 0

**Solution:**

|  | NO₂ | N₂O₄ |
|--|-----|------|
| I | 0.80 | 0 |
| C | -2x | +x |
| E | 0.80-2x | x |

$$K = \frac{[N_2O_4]}{[NO_2]^2} = \frac{x}{(0.80-2x)^2} = 4.5$$

Let y = 0.80 - 2x, so x = (0.80 - y)/2:

$$\frac{(0.80-y)/2}{y^2} = 4.5$$

$$0.80 - y = 9y^2$$
$$9y^2 + y - 0.80 = 0$$

$$y = \frac{-1 + \sqrt{1 + 28.8}}{18} = \frac{-1 + 5.46}{18} = 0.248$$

So: 0.80 - 2x = 0.248
$$x = \frac{0.80 - 0.248}{2} = 0.276$$

**Equilibrium:**
- [NO₂] = 0.80 - 2(0.276) = 0.248 M ✅
- [N₂O₄] = 0.276 M ✅

**Check:** K = 0.276/(0.248)² = 4.5 ✅

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| Set up ICE table first | Always! |
| Use stoichiometry | Coefficients are multipliers |
| Try approximation | If K < 10⁻³ |
| Check your answer | Plug x back into K |
| Reject negative x | Concentrations must be positive |

:::GUIDE:::
unit::=7
title::=Solubility Equilibria and Ksp
desc::=Master solubility product calculations including Ksp expressions, molar solubility, and the common ion effect
diff::=Hard
time::=40 minutes
tags::=solubility, Ksp, common ion, precipitation, molar solubility
content::=

# 💎 Solubility Equilibria and Ksp

## 🧪 What is Ksp?

**Ksp** (solubility product constant) describes the equilibrium between a solid ionic compound and its dissolved ions! 💧

### Dissolution Equilibrium

For a sparingly soluble salt:
$$MX(s) \rightleftharpoons M^+(aq) + X^-(aq)$$

$$K_{sp} = [M^+][X^-]$$

**Note:** The solid is NOT included in the Ksp expression!

---

## 📝 Writing Ksp Expressions

### General Form

For: $M_aX_b(s) \rightleftharpoons aM^{b+}(aq) + bX^{a-}(aq)$

$$K_{sp} = [M^{b+}]^a[X^{a-}]^b$$

### Examples

| Compound | Dissolution Equation | Ksp Expression |
|----------|---------------------|----------------|
| AgCl | AgCl ⇌ Ag⁺ + Cl⁻ | [Ag⁺][Cl⁻] |
| PbI₂ | PbI₂ ⇌ Pb²⁺ + 2I⁻ | [Pb²⁺][I⁻]² |
| Ca₃(PO₄)₂ | Ca₃(PO₄)₂ ⇌ 3Ca²⁺ + 2PO₄³⁻ | [Ca²⁺]³[PO₄³⁻]² |
| Fe(OH)₃ | Fe(OH)₃ ⇌ Fe³⁺ + 3OH⁻ | [Fe³⁺][OH⁻]³ |

---

## 📊 Common Ksp Values

| Compound | Ksp | Classification |
|----------|-----|----------------|
| AgCl | 1.8 × 10⁻¹⁰ | Slightly soluble |
| AgBr | 5.0 × 10⁻¹³ | Slightly soluble |
| AgI | 8.5 × 10⁻¹⁷ | Very insoluble |
| BaSO₄ | 1.1 × 10⁻¹⁰ | Slightly soluble |
| CaCO₃ | 3.4 × 10⁻⁹ | Slightly soluble |
| PbI₂ | 7.9 × 10⁻⁹ | Slightly soluble |
| Fe(OH)₃ | 2.8 × 10⁻³⁹ | Extremely insoluble |

**Smaller Ksp = Less soluble!** 📉

---

## 🧮 Calculating Molar Solubility

**Molar solubility (s)** = moles of salt dissolved per liter of solution

### Type 1: 1:1 Salt (like AgCl)

$$AgCl(s) \rightleftharpoons Ag^+(aq) + Cl^-(aq)$$

|  | Ag⁺ | Cl⁻ |
|--|-----|-----|
| I | 0 | 0 |
| C | +s | +s |
| E | s | s |

$$K_{sp} = [Ag^+][Cl^-] = s \cdot s = s^2$$

$$s = \sqrt{K_{sp}} = \sqrt{1.8 \times 10^{-10}} = 1.3 \times 10^{-5} \text{ M}$$ ✅

---

### Type 2: 1:2 Salt (like PbI₂)

$$PbI_2(s) \rightleftharpoons Pb^{2+}(aq) + 2I^-(aq)$$

|  | Pb²⁺ | I⁻ |
|--|------|-----|
| I | 0 | 0 |
| C | +s | +2s |
| E | s | 2s |

$$K_{sp} = [Pb^{2+}][I^-]^2 = (s)(2s)^2 = 4s^3$$

$$s = \sqrt[3]{\frac{K_{sp}}{4}} = \sqrt[3]{\frac{7.9 \times 10^{-9}}{4}} = 1.3 \times 10^{-3} \text{ M}$$ ✅

---

### Type 3: 1:3 Salt (like Fe(OH)₃)

$$Fe(OH)_3(s) \rightleftharpoons Fe^{3+}(aq) + 3OH^-(aq)$$

|  | Fe³⁺ | OH⁻ |
|--|------|-----|
| I | 0 | 0 |
| C | +s | +3s |
| E | s | 3s |

$$K_{sp} = [Fe^{3+}][OH^-]^3 = (s)(3s)^3 = 27s^4$$

$$s = \sqrt[4]{\frac{K_{sp}}{27}}$$

---

## 📐 Ksp Formula Summary

| Salt Type | Ksp Expression | s in Terms of Ksp |
|-----------|---------------|-------------------|
| MX | s² | s = √(Ksp) |
| MX₂ | 4s³ | s = ∛(Ksp/4) |
| M₂X | 4s³ | s = ∛(Ksp/4) |
| MX₃ | 27s⁴ | s = ⁴√(Ksp/27) |
| M₃X | 27s⁴ | s = ⁴√(Ksp/27) |
| M₂X₃ | 108s⁵ | s = ⁵√(Ksp/108) |

---

## 🔄 The Common Ion Effect

Adding a common ion DECREASES solubility! 📉

### Example: AgCl in NaCl Solution

Dissolving AgCl in 0.10 M NaCl:

$$AgCl(s) \rightleftharpoons Ag^+(aq) + Cl^-(aq)$$

|  | Ag⁺ | Cl⁻ |
|--|-----|-----|
| I | 0 | 0.10 |
| C | +s | +s |
| E | s | 0.10 + s |

Since Ksp is small, s << 0.10, so 0.10 + s ≈ 0.10:

$$K_{sp} = (s)(0.10) = 1.8 \times 10^{-10}$$
$$s = 1.8 \times 10^{-9} \text{ M}$$ ✅

**Compare:**
- In pure water: s = 1.3 × 10⁻⁵ M
- In 0.10 M NaCl: s = 1.8 × 10⁻⁹ M

**Solubility decreased by 10,000×!** 📉

---

## ⚡ Predicting Precipitation

Compare Q (ion product) to Ksp to predict if precipitation occurs!

### Decision Table

| Condition | Result |
|-----------|--------|
| Q < Ksp | Unsaturated, no precipitate |
| Q = Ksp | Saturated, at equilibrium |
| Q > Ksp | Supersaturated, precipitate forms |

### Example Problem

Will BaSO₄ precipitate when 50 mL of 0.020 M Ba(NO₃)₂ is mixed with 50 mL of 0.010 M Na₂SO₄?

Ksp(BaSO₄) = 1.1 × 10⁻¹⁰

**Step 1:** Find concentrations after mixing
- Total volume = 100 mL
- [Ba²⁺] = (0.020)(50)/(100) = 0.010 M
- [SO₄²⁻] = (0.010)(50)/(100) = 0.0050 M

**Step 2:** Calculate Q
$$Q = [Ba^{2+}][SO_4^{2-}] = (0.010)(0.0050) = 5.0 \times 10^{-5}$$

**Step 3:** Compare to Ksp
Q (5.0 × 10⁻⁵) >> Ksp (1.1 × 10⁻¹⁰)

**BaSO₄ WILL precipitate!** ✅

---

## 🎯 Selective Precipitation

When multiple ions can precipitate, the one with the SMALLEST Ksp precipitates first!

### Example: Separating Ag⁺ from Pb²⁺

Adding Cl⁻ to a solution containing both:

| Salt | Ksp |
|------|-----|
| AgCl | 1.8 × 10⁻¹⁰ |
| PbCl₂ | 1.7 × 10⁻⁵ |

AgCl precipitates first! (Smaller Ksp)

---

## 📊 Factors Affecting Solubility

| Factor | Effect | Explanation |
|--------|--------|-------------|
| Common ion | Decreases | Shifts equilibrium left |
| pH (for basic anions) | Increases at low pH | H⁺ removes OH⁻, S²⁻, CO₃²⁻ |
| Complex ion formation | Increases | Removes metal ion |
| Temperature | Usually increases | Most dissolutions are endothermic |

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| Ksp expression | Exclude solids |
| Smaller Ksp | Less soluble |
| Common ion | Decreases solubility |
| Q vs Ksp | Predicts precipitation |
| ICE table | Use stoichiometric ratios |

:::GUIDE:::
unit::=7
title::=AP Equilibrium Exam Strategies
desc::=Master problem-solving strategies for equilibrium FRQs including Q vs K analysis, ICE tables, and Le Chatelier applications
diff::=Hard
time::=40 minutes
tags::=AP exam, FRQ, equilibrium, problem solving, strategies
content::=

# 📝 AP Equilibrium Exam Strategies

## 🎯 What to Expect

Equilibrium is a MAJOR topic on the AP Chemistry exam! 📊

| Question Type | Frequency | Points |
|---------------|-----------|--------|
| K expression writing | Very common | 1-2 pts |
| Q vs K analysis | Very common | 2-3 pts |
| ICE table calculations | Very common | 4-7 pts |
| Le Chatelier predictions | Very common | 2-4 pts |
| Ksp calculations | Common | 3-5 pts |
| Connecting ΔG° to K | Common | 2-3 pts |

---

## 📋 Strategy 1: Writing K Expressions

### Checklist ✅

| Step | Action |
|------|--------|
| 1 | Balance the equation |
| 2 | Products in numerator |
| 3 | Reactants in denominator |
| 4 | Coefficients → exponents |
| 5 | OMIT pure solids and liquids |

### Common Mistakes

| Mistake | Correction |
|---------|------------|
| Including solids | Omit them! |
| Wrong exponents | Use coefficients |
| Products on bottom | Products on TOP |
| Including water in dilute solutions | Omit (it's a pure liquid) |

---

## 📋 Strategy 2: Q vs K Analysis

### The Algorithm

```
Calculate Q using current concentrations
           |
    Compare Q to K
    /      |      \
Q < K    Q = K    Q > K
  |        |        |
Forward   Equil.   Reverse
→→→       ⚖️       ←←←
```

### Answer Template

*"Q = [calculation] = [value]. Since Q [</>] K, the system is not at equilibrium and the reaction will proceed in the [forward/reverse] direction to reach equilibrium."*

---

## 📋 Strategy 3: ICE Table Problems

### Setup Checklist

| Step | Details |
|------|---------|
| 1 | Write balanced equation |
| 2 | Set up ICE table |
| 3 | Fill in initial concentrations |
| 4 | Write changes using x and stoichiometry |
| 5 | Write equilibrium expressions |
| 6 | Substitute into K expression |
| 7 | Solve for x |
| 8 | Calculate equilibrium concentrations |
| 9 | CHECK your answer! |

### Deciding on Approximation

```
Is K very small (< 10⁻³)?
        |
       YES → Try x << [initial] approximation
        |
       NO → Use quadratic or complete solution
```

### After Solving

**ALWAYS check:**
1. Is x positive? (must be!)
2. Is x less than initial concentration? (must be for reactants!)
3. Does plugging back give K? (should match!)

---

## 📋 Strategy 4: Le Chatelier Problems

### Quick Reference

| Stress | Shift | K changes? |
|--------|-------|------------|
| Add reactant | Right → | No |
| Add product | Left ← | No |
| Remove reactant | Left ← | No |
| Remove product | Right → | No |
| Increase P | Toward fewer moles | No |
| Increase T (exo) | Left ← | Yes (↓) |
| Increase T (endo) | Right → | Yes (↑) |
| Add catalyst | No shift | No |

### Answer Template

*"According to Le Chatelier's principle, the system will shift [left/right] to [increase/decrease] the concentration of [species]. This is because [explanation]. The value of K will [remain unchanged/increase/decrease] because [only temperature changes K / temperature increased for an exo/endo reaction]."*

---

## 📋 Strategy 5: Ksp Problems

### Molar Solubility Quick Reference

| Salt Type | Ksp = | Solubility s = |
|-----------|-------|----------------|
| MX | s² | √Ksp |
| MX₂ or M₂X | 4s³ | ∛(Ksp/4) |
| MX₃ or M₃X | 27s⁴ | ⁴√(Ksp/27) |

### Precipitation Prediction

**Step 1:** Calculate ion concentrations after mixing (account for dilution!)

**Step 2:** Calculate Q = [cation]^a[anion]^b

**Step 3:** Compare Q to Ksp

| Result | Conclusion |
|--------|------------|
| Q > Ksp | Precipitate forms |
| Q < Ksp | No precipitate |
| Q = Ksp | Saturated solution |

---

## 📋 Strategy 6: Common Ion Effect

### Key Points

- Common ion DECREASES solubility
- Set up ICE table with initial [common ion] ≠ 0
- Often can assume s << [common ion]

### Example Setup

For AgCl in 0.10 M NaCl:

|  | Ag⁺ | Cl⁻ |
|--|-----|-----|
| I | 0 | 0.10 |
| C | +s | +s |
| E | s | 0.10+s ≈ 0.10 |

---

## 📝 FRQ Answer Templates

### Template 1: Explaining Equilibrium Shift

*"When [stress] is applied to the system at equilibrium, the system shifts toward the [products/reactants] to partially counteract this stress. [Specific explanation of what happens to concentrations]. The equilibrium constant K [remains unchanged/changes] because [reason]."*

### Template 2: ICE Table Solution

*"Setting up an ICE table:*
[Show table]

*The equilibrium expression is K = [expression]. Substituting equilibrium concentrations: [show substitution]. [Solving method]. Therefore, x = [value] and the equilibrium concentrations are [list values]."*

### Template 3: Precipitation Analysis

*"After mixing, [ion 1] = [calculation] = [value] M and [ion 2] = [calculation] = [value] M. The ion product Q = [expression] = [value]. Since Q [>/<] Ksp, a precipitate [will/will not] form."*

---

## ⚠️ Common Mistakes to Avoid

### Calculation Errors

| Mistake | Fix |
|---------|-----|
| Forgetting dilution | Account for volume changes when mixing |
| Wrong stoichiometry in ICE | Coefficients multiply x |
| Taking wrong root | Match salt formula |
| Forgetting to check | Always verify answer |

### Conceptual Errors

| Mistake | Correct Understanding |
|---------|----------------------|
| "K changes with concentration" | Only T changes K |
| "Catalyst shifts equilibrium" | Catalyst only speeds up |
| "Q = K means no reaction" | Reactions still occur, just equal rates |
| "Larger Ksp = more soluble" | Only if comparing same formula type! |

---

## 🧮 Practice FRQ

**Consider the equilibrium:**
$$2NO_2(g) \rightleftharpoons N_2O_4(g) \quad K_c = 4.5 \text{ at } 298 \text{ K}$$

ΔH = -57.2 kJ/mol

**(a)** Write the Kc expression.

**(b)** If [NO₂] = 0.50 M and [N₂O₄] = 0.80 M, is the system at equilibrium? If not, which way will it shift?

**(c)** Starting with 1.0 M NO₂ and no N₂O₄, find equilibrium concentrations.

**(d)** How would increasing temperature affect K? Explain.

### Solutions

**(a)** $K_c = \frac{[N_2O_4]}{[NO_2]^2}$ ✅

**(b)** 
$$Q = \frac{0.80}{(0.50)^2} = \frac{0.80}{0.25} = 3.2$$

Q (3.2) < K (4.5), so reaction shifts RIGHT toward products. ✅

**(c)** ICE table:
|  | NO₂ | N₂O₄ |
|--|-----|------|
| I | 1.0 | 0 |
| C | -2x | +x |
| E | 1.0-2x | x |

$$4.5 = \frac{x}{(1.0-2x)^2}$$

Let y = 1.0 - 2x:
$$4.5y^2 = 1.0 - y)/2$$
...solving: x ≈ 0.31

[NO₂] = 1.0 - 2(0.31) = 0.38 M ✅
[N₂O₄] = 0.31 M ✅

**(d)** The reaction is exothermic (ΔH < 0). Increasing temperature shifts equilibrium LEFT, so K will DECREASE. Heat can be thought of as a product, and adding heat (increasing T) shifts toward reactants. ✅

---

## 🎯 Final Tips

| Strategy | Application |
|----------|-------------|
| Read carefully | What's given vs. asked |
| Set up ICE tables | Always for calculations |
| Show all work | Partial credit |
| Check units | K is unitless (activity) |
| Verify answers | Plug back into K |
| Time management | ~1.5 min per point |

**Good luck on the AP exam!** 🍀
