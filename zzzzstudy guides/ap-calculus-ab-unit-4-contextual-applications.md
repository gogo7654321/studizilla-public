# AP Calculus AB Unit 4: Contextual Applications of Differentiation Study Guides

:::GUIDE:::
unit::=Unit 4
title::=📐 Unit 4: Contextual Applications of Differentiation Complete Guide
desc::=Understand how derivatives represent rates of change in real-world scenarios
diff::=Medium
time::=40 minutes
tags::=rates of change, interpretation, context, applications
content::=

# 📊 Interpreting Derivatives in Context

## 🎯 Derivatives as Rates of Change

The derivative tells us how fast something is changing! 📈

### The Big Idea

| Mathematical | Real-World Meaning |
|--------------|-------------------|
| $f(t)$ | Position, amount, value |
| $f'(t)$ | Rate of change (velocity, growth rate) |
| $f''(t)$ | Rate of rate (acceleration) |

---

## 📐 Units of Derivatives

### The Rule

$$\text{Units of } f'(t) = \frac{\text{Units of } f}{\text{Units of } t}$$

### Examples

| Function | Units of $f$ | Units of $t$ | Units of $f'(t)$ |
|----------|-------------|--------------|------------------|
| Position (meters) | m | s | m/s (velocity) |
| Population | people | years | people/year |
| Water volume (gallons) | gal | min | gal/min |
| Cost (dollars) | $ | items | $/item (marginal cost) |

---

## 🚗 Motion Problems

### Position, Velocity, Acceleration

| Function | Symbol | Meaning |
|----------|--------|---------|
| Position | $s(t)$ or $x(t)$ | Where is it? |
| Velocity | $v(t) = s'(t)$ | How fast? Which direction? |
| Acceleration | $a(t) = v'(t) = s''(t)$ | Speeding up or slowing down? |

### Velocity vs. Speed

| Term | Definition | Sign |
|------|------------|------|
| Velocity | $v(t) = s'(t)$ | Can be + or − |
| Speed | $|v(t)|$ | Always $\geq 0$ |

### Direction of Motion

| $v(t)$ | Motion |
|--------|--------|
| $v(t) > 0$ | Moving right/up |
| $v(t) < 0$ | Moving left/down |
| $v(t) = 0$ | At rest (possibly changing direction) |

---

## 🔄 Speeding Up vs. Slowing Down

### The Key Insight

| Condition | Particle is... |
|-----------|----------------|
| $v$ and $a$ same sign | Speeding up |
| $v$ and $a$ opposite signs | Slowing down |

### Why?

- Same sign: velocity and acceleration "agree"
- Opposite signs: velocity and acceleration "fight"

### Example

If $v(2) = -3$ and $a(2) = -1$:
- Both negative → **speeding up**
- Moving left and accelerating left

If $v(3) = -2$ and $a(3) = 5$:
- Opposite signs → **slowing down**
- Moving left but accelerating right

---

## 📈 Growth and Decay Models

### Interpreting $f'(t)$ in Context

| $f'(t)$ | Meaning |
|---------|---------|
| $f'(t) > 0$ | $f$ is increasing (growing) |
| $f'(t) < 0$ | $f$ is decreasing (decaying) |
| $f'(t) = 0$ | $f$ is constant (momentarily) |

### Example: Population

If $P(t)$ = population in thousands, $t$ = years since 2020

$P'(5) = 2.3$ means:

"At $t = 5$ (year 2025), the population is increasing at a rate of **2.3 thousand people per year**."

---

## 💰 Economics Applications

### Cost, Revenue, Profit

| Function | Meaning |
|----------|---------|
| $C(x)$ | Total cost to produce $x$ items |
| $R(x)$ | Total revenue from selling $x$ items |
| $P(x) = R(x) - C(x)$ | Profit |

### Marginal Functions

| Derivative | Name | Meaning |
|------------|------|---------|
| $C'(x)$ | Marginal cost | Cost of next item |
| $R'(x)$ | Marginal revenue | Revenue from next item |
| $P'(x)$ | Marginal profit | Profit from next item |

### Key Insight

$C'(100) = 15$ means:

"When producing 100 items, the cost of producing the 101st item is approximately **$15**."

---

## 🧪 Science Applications

### Common Contexts

| Context | $f(t)$ | $f'(t)$ |
|---------|--------|---------|
| Chemistry | Concentration | Reaction rate |
| Physics | Charge | Current |
| Biology | Population | Growth rate |
| Thermodynamics | Temperature | Rate of cooling |

### Example: Temperature

If $T(t)$ = temperature in °F, $t$ = minutes

$T'(10) = -2$ means:

"At $t = 10$ minutes, the temperature is **decreasing** at a rate of **2°F per minute**."

---

## ⚠️ Interpretation Guidelines

### Writing Good Interpretations

1. **State the time/value**
2. **Give the direction** (increasing/decreasing)
3. **Include units**
4. **Use context-specific language**

### Template

"At $t = \_\_\_$, [quantity] is [increasing/decreasing] at a rate of [value with units]."

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| Units | $\frac{\text{output units}}{\text{input units}}$ |
| Motion | Position → Velocity → Acceleration |
| Speeding up | $v$ and $a$ same sign |
| Marginal | Derivative ≈ "next one" |

:::GUIDE:::
unit::=Unit 4
title::=Related Rates
desc::=Solve problems involving rates of change of two or more related quantities
diff::=Hard
time::=55 minutes
tags::=related rates, implicit, chain rule
content::=

# 🔗 Related Rates

## 🎯 What Are Related Rates?

Problems where multiple quantities change with time! ⏰

### The Big Idea

When quantities are related by an equation:
- Differentiate both sides with respect to time $t$
- Use chain rule since quantities depend on $t$

---

## 📋 Related Rates Process

### Step-by-Step Strategy

1. **Draw a picture** and label variables
2. **Identify** what rates you know and want
3. **Write an equation** relating the variables
4. **Differentiate** with respect to $t$
5. **Substitute** known values
6. **Solve** for the unknown rate

---

## 🔧 Classic Example: Ladder Problem

### Problem

A 10 ft ladder leans against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall?

### Solution

**Step 1**: Draw and label
```
Wall
│╲
│ ╲ 10 ft
│  ╲
│   ╲
│____╲
  x   
(y = height on wall)
```

**Step 2**: Identify rates
- Know: $\frac{dx}{dt} = 2$ ft/s
- Want: $\frac{dy}{dt}$ when $x = 6$

**Step 3**: Equation (Pythagorean theorem)
$$x^2 + y^2 = 100$$

**Step 4**: Differentiate with respect to $t$
$$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$

**Step 5**: Find $y$ when $x = 6$
$$36 + y^2 = 100 \implies y = 8$$

Substitute:
$$2(6)(2) + 2(8)\frac{dy}{dt} = 0$$
$$24 + 16\frac{dy}{dt} = 0$$

**Step 6**: Solve
$$\frac{dy}{dt} = -\frac{24}{16} = -\frac{3}{2}$$

**Answer**: The top slides down at $\frac{3}{2}$ ft/s (negative indicates downward)

---

## 📐 Common Formulas to Know

### Geometry Formulas

| Shape | Formula |
|-------|---------|
| Circle area | $A = \pi r^2$ |
| Circle circumference | $C = 2\pi r$ |
| Sphere volume | $V = \frac{4}{3}\pi r^3$ |
| Sphere surface area | $S = 4\pi r^2$ |
| Cylinder volume | $V = \pi r^2 h$ |
| Cone volume | $V = \frac{1}{3}\pi r^2 h$ |
| Triangle area | $A = \frac{1}{2}bh$ |
| Pythagorean | $a^2 + b^2 = c^2$ |

### Similar Triangles

$$\frac{a_1}{b_1} = \frac{a_2}{b_2}$$

---

## 🔧 Classic Example: Expanding Circle

### Problem

A stone is dropped in a pond. The circular ripple expands at 3 ft/s. How fast is the area increasing when the radius is 10 ft?

### Solution

**Know**: $\frac{dr}{dt} = 3$ ft/s

**Want**: $\frac{dA}{dt}$ when $r = 10$

**Equation**: $A = \pi r^2$

**Differentiate**:
$$\frac{dA}{dt} = 2\pi r \cdot \frac{dr}{dt}$$

**Substitute**:
$$\frac{dA}{dt} = 2\pi (10)(3) = 60\pi$$

**Answer**: $60\pi$ ft²/s ≈ 188.5 ft²/s

---

## 🔧 Classic Example: Filling Cone

### Problem

Water pours into a conical tank at 2 ft³/min. The tank has height 10 ft and radius 5 ft at top. How fast is the water level rising when the depth is 4 ft?

### Solution

**Step 1**: Set up similar triangles
$$\frac{r}{h} = \frac{5}{10} = \frac{1}{2} \implies r = \frac{h}{2}$$

**Step 2**: Volume formula
$$V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \left(\frac{h}{2}\right)^2 h = \frac{\pi h^3}{12}$$

**Step 3**: Differentiate
$$\frac{dV}{dt} = \frac{\pi}{12} \cdot 3h^2 \cdot \frac{dh}{dt} = \frac{\pi h^2}{4}\frac{dh}{dt}$$

**Step 4**: Substitute ($\frac{dV}{dt} = 2$, $h = 4$)
$$2 = \frac{\pi (4)^2}{4}\frac{dh}{dt}$$
$$2 = 4\pi \frac{dh}{dt}$$

**Step 5**: Solve
$$\frac{dh}{dt} = \frac{2}{4\pi} = \frac{1}{2\pi}$$

**Answer**: $\frac{1}{2\pi}$ ft/min ≈ 0.159 ft/min

---

## 🔧 Classic Example: Distance Problem

### Problem

Person A walks east at 3 mph. Person B walks north at 4 mph. Both start at the same point. How fast is the distance between them increasing after 2 hours?

### Solution

```
    B (north)
    │
    │ y
    │
    ●───────── A (east)
         x
```

**Step 1**: After $t$ hours
- $x = 3t$, $y = 4t$
- So $\frac{dx}{dt} = 3$, $\frac{dy}{dt} = 4$

**Step 2**: Distance equation
$$d^2 = x^2 + y^2$$

**Step 3**: Differentiate
$$2d\frac{dd}{dt} = 2x\frac{dx}{dt} + 2y\frac{dy}{dt}$$

**Step 4**: At $t = 2$
- $x = 6$, $y = 8$
- $d = \sqrt{36 + 64} = 10$

Substitute:
$$2(10)\frac{dd}{dt} = 2(6)(3) + 2(8)(4)$$
$$20\frac{dd}{dt} = 36 + 64 = 100$$

**Answer**: $\frac{dd}{dt} = 5$ mph

---

## ⚠️ Common Mistakes

| Mistake | Correction |
|---------|------------|
| Substituting before differentiating | Always differentiate first! |
| Forgetting chain rule | Every variable needs $\frac{d}{dt}$ |
| Wrong signs | Think about whether quantity increases/decreases |
| Mixing up rates | Label clearly what you know vs. want |

---

## 🎯 AP Exam Tips

| Step | Remember |
|------|----------|
| Setup | Draw picture, label variables |
| Equation | Use geometry (often Pythagorean) |
| Differentiate | Use chain rule for all variables |
| Substitute | Plug in AFTER differentiating |
| Units | Include units in final answer |

:::GUIDE:::
unit::=Unit 4
title::=Linearization and Differentials
desc::=Use local linear approximation and differentials to estimate function values
diff::=Medium
time::=40 minutes
tags::=linearization, differentials, tangent line approximation
content::=

# 📏 Linearization and Differentials

## 📐 Local Linear Approximation

The tangent line approximates the curve near the point! 📊

### The Big Idea

Near $x = a$:
$$f(x) \approx L(x) = f(a) + f'(a)(x-a)$$

This is just the tangent line at $x = a$!

### Visualization

```
     │  curve: f(x)
     │    ___/
     │  _/  / ← tangent line: L(x)
     │ /   /
     │/   /
─────●───────── x
     a
     
Near a, the tangent line is close to the curve!
```

---

## 🧮 Linearization Formula

### Definition

The linearization of $f$ at $x = a$ is:

$$L(x) = f(a) + f'(a)(x - a)$$

### Example 1

Find the linearization of $f(x) = \sqrt{x}$ at $a = 4$.

**Step 1**: Find $f(4)$ and $f'(4)$
- $f(4) = \sqrt{4} = 2$
- $f'(x) = \frac{1}{2\sqrt{x}}$
- $f'(4) = \frac{1}{2 \cdot 2} = \frac{1}{4}$

**Step 2**: Write linearization
$$L(x) = 2 + \frac{1}{4}(x - 4) = 2 + \frac{x}{4} - 1 = \frac{x}{4} + 1$$

**Step 3**: Use to approximate $\sqrt{4.1}$
$$\sqrt{4.1} \approx L(4.1) = \frac{4.1}{4} + 1 = 1.025 + 1 = 2.025$$

(Actual: $\sqrt{4.1} \approx 2.0248$) ✅

---

## 📊 Common Linearizations

### At $x = 0$ (Most Common)

| Function | Linearization at $x = 0$ |
|----------|-------------------------|
| $(1+x)^n$ | $1 + nx$ |
| $\sin x$ | $x$ |
| $\cos x$ | $1$ |
| $\tan x$ | $x$ |
| $e^x$ | $1 + x$ |
| $\ln(1+x)$ | $x$ |

### Example

Approximate $\sin(0.1)$:

Using $L(x) = x$ for $\sin x$ near 0:
$$\sin(0.1) \approx 0.1$$

(Actual: 0.0998) ✅

---

## 📐 Differentials

### Definitions

| Symbol | Meaning |
|--------|---------|
| $dx$ | Small change in $x$ |
| $dy$ | Corresponding change in $y$ on tangent line |

### The Differential Formula

$$dy = f'(x) \cdot dx$$

### Relationship

$$dy \approx \Delta y$$

where $\Delta y = f(x + \Delta x) - f(x)$ is the actual change.

---

## 🔧 Using Differentials

### To Estimate Change

If $y = f(x)$ and $x$ changes by $dx$:

$$\Delta y \approx dy = f'(x) \cdot dx$$

### Example

Estimate how $y = x^3$ changes when $x$ goes from 2 to 2.01.

$dy = f'(x) \cdot dx = 3x^2 \cdot dx$

At $x = 2$, $dx = 0.01$:
$$dy = 3(4)(0.01) = 0.12$$

So $y$ increases by approximately **0.12**

Check: $2.01^3 - 2^3 = 8.120601 - 8 = 0.120601$ ✅

---

## 📊 Percentage Error

### Using Differentials for Relative Error

$$\frac{\Delta y}{y} \approx \frac{dy}{y}$$

### Example: Volume of Sphere

The radius of a sphere is measured as 5 cm with possible error of 0.1 cm. Estimate the percentage error in volume.

$V = \frac{4}{3}\pi r^3$

$dV = 4\pi r^2 \cdot dr$

At $r = 5$, $dr = 0.1$:
$$dV = 4\pi(25)(0.1) = 10\pi$$

$$V = \frac{4}{3}\pi(125) = \frac{500\pi}{3}$$

Relative error:
$$\frac{dV}{V} = \frac{10\pi}{\frac{500\pi}{3}} = \frac{30}{500} = 0.06 = 6\%$$

---

## 🔗 Over vs. Under Estimates

### When Is Linearization an Overestimate?

When the curve is **concave down** ($f'' < 0$)

### When Is It an Underestimate?

When the curve is **concave up** ($f'' > 0$)

### Visual

```
Concave up (f'' > 0):     Concave down (f'' < 0):
Tangent below curve       Tangent above curve
→ UNDERESTIMATE          → OVERESTIMATE

    curve                      curve
     _/                       ╲_
    /                           ╲
   / ← tangent                   ╲ ← tangent
```

---

## ⚠️ When to Use Which

| Method | Best For |
|--------|----------|
| Linearization | Approximating $f(x)$ near known point |
| Differentials | Estimating change $\Delta y$ |

---

## 🎯 AP Exam Tips

| Concept | Formula |
|---------|---------|
| Linearization | $L(x) = f(a) + f'(a)(x-a)$ |
| Differential | $dy = f'(x) \cdot dx$ |
| Over/Under | Check concavity ($f''$) |
| Common | $\sin x \approx x$, $e^x \approx 1+x$ near 0 |

:::GUIDE:::
unit::=Unit 4
title::=L'Hôpital's Rule
desc::=Use L'Hôpital's Rule to evaluate limits of indeterminate forms
diff::=Medium
time::=35 minutes
tags::=L'Hopital, indeterminate forms, limits
content::=

# 🏥 L'Hôpital's Rule

## 🎯 What Is L'Hôpital's Rule?

A powerful technique for evaluating tricky limits! ⚡

### When to Use

When direct substitution gives an **indeterminate form**:
- $\frac{0}{0}$
- $\frac{\infty}{\infty}$

---

## 📐 The Rule

### L'Hôpital's Rule

If $\lim_{x \to a} \frac{f(x)}{g(x)}$ gives $\frac{0}{0}$ or $\frac{\pm\infty}{\pm\infty}$, then:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

**Differentiate top and bottom separately!**

### ⚠️ Important Notes

- This is NOT the quotient rule!
- Must check for indeterminate form first
- May need to apply multiple times

---

## 🔧 Basic Examples

### Example 1: $\frac{0}{0}$

$$\lim_{x \to 0} \frac{\sin x}{x}$$

Check: $\frac{\sin 0}{0} = \frac{0}{0}$ ✓ Indeterminate

Apply L'Hôpital's:
$$= \lim_{x \to 0} \frac{\cos x}{1} = \frac{1}{1} = 1$$

### Example 2: $\frac{0}{0}$

$$\lim_{x \to 0} \frac{e^x - 1}{x}$$

Check: $\frac{e^0 - 1}{0} = \frac{0}{0}$ ✓ Indeterminate

Apply L'Hôpital's:
$$= \lim_{x \to 0} \frac{e^x}{1} = \frac{1}{1} = 1$$

### Example 3: $\frac{\infty}{\infty}$

$$\lim_{x \to \infty} \frac{3x^2 + 2x}{5x^2 - 7}$$

Check: $\frac{\infty}{\infty}$ ✓ Indeterminate

Apply L'Hôpital's:
$$= \lim_{x \to \infty} \frac{6x + 2}{10x}$$

Still $\frac{\infty}{\infty}$, apply again:
$$= \lim_{x \to \infty} \frac{6}{10} = \frac{3}{5}$$

---

## 📊 Indeterminate Forms

### Forms That Work Directly

| Form | Can Use L'Hôpital's? |
|------|---------------------|
| $\frac{0}{0}$ | Yes ✅ |
| $\frac{\infty}{\infty}$ | Yes ✅ |

### Forms That Need Conversion

| Form | Convert To |
|------|------------|
| $0 \cdot \infty$ | $\frac{0}{1/\infty}$ or $\frac{\infty}{1/0}$ |
| $\infty - \infty$ | Combine into single fraction |
| $1^\infty$ | Use $\ln$ |
| $0^0$ | Use $\ln$ |
| $\infty^0$ | Use $\ln$ |

---

## 🔧 Converting Indeterminate Forms

### $0 \cdot \infty$ Form

$$\lim_{x \to 0^+} x \ln x$$

This is $0 \cdot (-\infty)$. Rewrite:
$$= \lim_{x \to 0^+} \frac{\ln x}{1/x} = \lim_{x \to 0^+} \frac{\ln x}{x^{-1}}$$

Now it's $\frac{-\infty}{\infty}$. Apply L'Hôpital's:
$$= \lim_{x \to 0^+} \frac{1/x}{-x^{-2}} = \lim_{x \to 0^+} \frac{-x^2}{x} = \lim_{x \to 0^+} (-x) = 0$$

### $\infty - \infty$ Form

$$\lim_{x \to 0^+} \left(\frac{1}{x} - \frac{1}{\sin x}\right)$$

Combine:
$$= \lim_{x \to 0^+} \frac{\sin x - x}{x \sin x}$$

Now it's $\frac{0}{0}$. Apply L'Hôpital's twice:
$$= \lim_{x \to 0^+} \frac{\cos x - 1}{x \cos x + \sin x} = \frac{0}{0}$$
$$= \lim_{x \to 0^+} \frac{-\sin x}{-x \sin x + \cos x + \cos x} = \frac{0}{2} = 0$$

---

## ⚠️ Common Mistakes

### Mistake 1: Using When Not Indeterminate

$$\lim_{x \to 1} \frac{x^2}{x+1} = \frac{1}{2}$$

This is NOT indeterminate! Don't use L'Hôpital's.

### Mistake 2: Using Quotient Rule

$$\lim_{x \to 0} \frac{\sin x}{x} \neq \lim_{x \to 0} \frac{x \cos x - \sin x}{x^2}$$

Take derivatives **separately**, not quotient rule!

### Mistake 3: Forgetting to Check Again

After applying once, check if result is still indeterminate.

---

## 🔧 More Examples

### Example: Triple Application

$$\lim_{x \to 0} \frac{e^x - 1 - x - \frac{x^2}{2}}{\sin x - x}$$

At $x = 0$: $\frac{0}{0}$

Apply L'Hôpital's:
$$= \lim_{x \to 0} \frac{e^x - 1 - x}{\cos x - 1}$$

Still $\frac{0}{0}$, apply again:
$$= \lim_{x \to 0} \frac{e^x - 1}{-\sin x}$$

Still $\frac{0}{0}$, apply again:
$$= \lim_{x \to 0} \frac{e^x}{-\cos x} = \frac{1}{-1} = -1$$

---

## 🎯 AP Exam Tips

| Step | Action |
|------|--------|
| 1 | Try direct substitution first |
| 2 | Check for $\frac{0}{0}$ or $\frac{\infty}{\infty}$ |
| 3 | Differentiate top and bottom separately |
| 4 | Evaluate; repeat if necessary |
| 5 | Show indeterminate form for full credit |

:::GUIDE:::
unit::=Unit 4
title::=Unit 4 AP Exam Strategies
desc::=Master problem-solving strategies for contextual applications of differentiation
diff::=Medium
time::=30 minutes
tags::=AP exam, strategies, Unit 4
content::=

# 📝 Unit 4 AP Exam Strategies

## 📊 Unit Weight

| Exam Section | Unit 4 Weight |
|--------------|---------------|
| Multiple Choice | ~10-15% |
| Free Response | Very common |

---

## 🔑 Must-Know Concepts

### Rates of Change

| Concept | Key Idea |
|---------|----------|
| Units | $\frac{\text{output units}}{\text{input units}}$ |
| $f'(t) > 0$ | Quantity increasing |
| $f'(t) < 0$ | Quantity decreasing |

### Motion

| Function | Relationship |
|----------|--------------|
| Position $s(t)$ | Given |
| Velocity $v(t)$ | $s'(t)$ |
| Acceleration $a(t)$ | $v'(t) = s''(t)$ |
| Speed | $|v(t)|$ |
| Speeding up | $v$ and $a$ same sign |
| Slowing down | $v$ and $a$ opposite signs |

### Related Rates

1. Draw picture
2. Identify known/unknown rates
3. Write equation relating variables
4. Differentiate with respect to $t$
5. Substitute and solve

### Linearization

$$L(x) = f(a) + f'(a)(x-a)$$

### L'Hôpital's Rule

For $\frac{0}{0}$ or $\frac{\infty}{\infty}$:
$$\lim \frac{f}{g} = \lim \frac{f'}{g'}$$

---

## ✍️ Sample MC Questions

### Question 1: Interpretation

If $H(t)$ represents the height in feet of a balloon at time $t$ seconds, what are the units of $H'(3)$?

(A) feet
(B) seconds
(C) feet per second
(D) seconds per foot

**Solution**: $H'(t) = \frac{dH}{dt}$ has units $\frac{\text{feet}}{\text{seconds}}$

**Answer: (C)**

### Question 2: Motion

A particle moves with velocity $v(t) = t^2 - 4t + 3$. When is the particle speeding up?

Find when $v = 0$: $t = 1, 3$
Find $a(t) = 2t - 4 = 0$ when $t = 2$

| Interval | $v$ sign | $a$ sign | Motion |
|----------|----------|----------|--------|
| $(0, 1)$ | + | − | Slowing down |
| $(1, 2)$ | − | − | Speeding up |
| $(2, 3)$ | − | + | Slowing down |
| $(3, \infty)$ | + | + | Speeding up |

**Answer**: $1 < t < 2$ and $t > 3$

### Question 3: Related Rates

A circle's area increases at 4 cm²/s. When $r = 2$, how fast is the radius increasing?

$A = \pi r^2$
$\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$
$4 = 2\pi(2) \frac{dr}{dt}$
$\frac{dr}{dt} = \frac{4}{4\pi} = \frac{1}{\pi}$

**Answer: $\frac{1}{\pi}$ cm/s**

### Question 4: Linearization

Use linearization to approximate $\sqrt{16.1}$

Let $f(x) = \sqrt{x}$, $a = 16$

$f(16) = 4$, $f'(x) = \frac{1}{2\sqrt{x}}$, $f'(16) = \frac{1}{8}$

$L(x) = 4 + \frac{1}{8}(x - 16)$
$L(16.1) = 4 + \frac{1}{8}(0.1) = 4 + 0.0125 = 4.0125$

**Answer: 4.0125**

### Question 5: L'Hôpital's

$$\lim_{x \to 0} \frac{1 - \cos x}{x^2}$$

Check: $\frac{0}{0}$ ✓

Apply L'Hôpital's: $\lim_{x \to 0} \frac{\sin x}{2x}$

Still $\frac{0}{0}$, apply again: $\lim_{x \to 0} \frac{\cos x}{2} = \frac{1}{2}$

**Answer: $\frac{1}{2}$**

---

## ✍️ Sample FR Question

**Question**: A conical tank has height 12 ft and radius 4 ft at the top. Water flows in at 3 ft³/min.

(a) Find an expression for the volume $V$ in terms of the water depth $h$.

(b) At what rate is the depth increasing when $h = 6$ ft?

(c) At what rate is the surface area of the water increasing when $h = 6$ ft?

**Solution**:

(a) By similar triangles: $\frac{r}{h} = \frac{4}{12} = \frac{1}{3}$, so $r = \frac{h}{3}$

$$V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \left(\frac{h}{3}\right)^2 h = \frac{\pi h^3}{27}$$

(b) $\frac{dV}{dt} = \frac{\pi}{27} \cdot 3h^2 \frac{dh}{dt} = \frac{\pi h^2}{9}\frac{dh}{dt}$

At $h = 6$, $\frac{dV}{dt} = 3$:
$$3 = \frac{\pi(36)}{9}\frac{dh}{dt} = 4\pi\frac{dh}{dt}$$
$$\frac{dh}{dt} = \frac{3}{4\pi}$$ ft/min

(c) Surface area $A = \pi r^2 = \pi \left(\frac{h}{3}\right)^2 = \frac{\pi h^2}{9}$

$$\frac{dA}{dt} = \frac{2\pi h}{9}\frac{dh}{dt} = \frac{2\pi(6)}{9} \cdot \frac{3}{4\pi} = \frac{12\pi}{9} \cdot \frac{3}{4\pi} = \frac{36\pi}{36\pi} = 1$$ ft²/min

---

## ⚠️ Common Mistakes

| Topic | Mistake | Correct |
|-------|---------|---------|
| Related rates | Substituting before differentiating | Differentiate first! |
| Motion | Confusing velocity and speed | Speed = $|v|$ |
| Linearization | Using wrong point | Use nearby "nice" value |
| L'Hôpital's | Using when not indeterminate | Check form first |

---

## 📋 Unit 4 Checklist

### Before the Exam

✅ Can interpret derivatives in context with units
✅ Understand position-velocity-acceleration relationships
✅ Know when particle speeds up vs slows down
✅ Can set up and solve related rates problems
✅ Know geometry formulas (circles, cones, spheres)
✅ Can find and use linearizations
✅ Know when and how to apply L'Hôpital's Rule
✅ Can convert other indeterminate forms

**Good luck! 🍀**
