# AP Calculus AB Unit 1: Limits and Continuity Study Guides

:::GUIDE:::
unit::=Unit 1
title::=📐 Unit 1: Limits and Continuity Complete Guide
desc::=Understand the concept of limits, how to evaluate limits graphically and numerically, and the notation used
diff::=Medium
time::=40 minutes
tags::=limits, notation, graphs, tables, approaching
content::=

# 📐 Introduction to Limits

## 🎯 What Is a Limit?

The foundation of calculus! 📊

### The Big Idea

A limit describes what value a function **approaches** as the input approaches a certain value.

| Concept | Meaning |
|---------|---------|
| $\lim_{x \to a} f(x) = L$ | As $x$ gets closer to $a$, $f(x)$ gets closer to $L$ |
| "Approaches" | Gets arbitrarily close |
| Not necessarily $f(a)$ | Limit can exist even if $f(a)$ doesn't |

### Key Understanding

The limit is about **behavior near** a point, not **at** the point! 🎯

---

## 📝 Limit Notation

### Standard Notation

$$\lim_{x \to a} f(x) = L$$

| Symbol | Meaning |
|--------|---------|
| $\lim$ | "the limit of" |
| $x \to a$ | "as x approaches a" |
| $f(x)$ | the function |
| $= L$ | "equals L" |

### Reading It Out Loud

"The limit of f of x, as x approaches a, equals L"

---

## 📊 Evaluating Limits Graphically

### From a Graph

| Step | Action |
|------|--------|
| 1 | Find $x = a$ on the x-axis |
| 2 | Trace the graph from the left toward $a$ |
| 3 | Trace the graph from the right toward $a$ |
| 4 | If both approach the same y-value, that's the limit |

### Example Graph Analysis

```
    y
    │      ○ (hole at (2,4))
  4 ├──────●──────────
    │     /
  3 ├────/
    │   /
  2 ├──/
    │ /
  1 ├/
    │
    └──┬──┬──┬──┬──── x
       1  2  3  4
       
At x = 2: Limit = 4 (even though there's a hole!)
```

### Key Insight

| Scenario | Limit Exists? |
|----------|---------------|
| Hole in graph | Yes, if approaches same value |
| Jump discontinuity | No (left ≠ right) |
| Vertical asymptote | No (infinite behavior) |
| Smooth curve | Yes |

---

## 📋 Evaluating Limits Numerically

### Using a Table

To find $\lim_{x \to 2} f(x)$:

| $x$ | $f(x)$ |
|-----|--------|
| 1.9 | 3.61 |
| 1.99 | 3.9601 |
| 1.999 | 3.996001 |
| 2.001 | 4.004001 |
| 2.01 | 4.0401 |
| 2.1 | 4.41 |

**Conclusion**: As $x \to 2$, $f(x) \to 4$

### Steps for Table Method

| Step | Action |
|------|--------|
| 1 | Choose values approaching from left |
| 2 | Choose values approaching from right |
| 3 | Calculate $f(x)$ for each |
| 4 | Look for pattern in outputs |

---

## ↔️ One-Sided Limits

### Left-Hand Limit

$$\lim_{x \to a^-} f(x)$$

Approaching $a$ from the **left** (values less than $a$)

### Right-Hand Limit

$$\lim_{x \to a^+} f(x)$$

Approaching $a$ from the **right** (values greater than $a$)

### The Connection

$$\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = L \text{ AND } \lim_{x \to a^+} f(x) = L$$

**Both one-sided limits must exist and be equal!**

---

## ⚠️ When Limits Don't Exist

### Three Common Cases

| Case | Example | Behavior |
|------|---------|----------|
| Left ≠ Right | Jump discontinuity | Different values |
| Infinite | Vertical asymptote | Goes to $\pm\infty$ |
| Oscillation | $\sin(1/x)$ near 0 | Bounces forever |

### How to Write It

| Situation | Notation |
|-----------|----------|
| Limit doesn't exist | DNE |
| Goes to infinity | $\lim = \infty$ (or $-\infty$) |
| Left/right different | State each one-sided limit |

---

## 🔢 Limits at the Value

### When $f(a)$ Exists

Sometimes the limit equals the function value:

$$\lim_{x \to a} f(x) = f(a)$$

This happens when $f$ is **continuous** at $a$ (more later!)

### When $f(a)$ Doesn't Exist

The limit can still exist! 🎯

| Example | $f(a)$ | Limit |
|---------|--------|-------|
| Hole at $a$ | Undefined | May exist |
| Removable discontinuity | Undefined | Exists |

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| Limit ≠ function value | They can differ |
| Check both sides | For limit to exist |
| Graphical reading | Trace from both directions |
| Table method | Values approaching from both sides |
| One-sided notation | $a^-$ (left), $a^+$ (right) |

:::GUIDE:::
unit::=Unit 1
title::=Algebraic Limit Techniques
desc::=Master algebraic techniques for evaluating limits including direct substitution, factoring, rationalization, and more
diff::=Hard
time::=45 minutes
tags::=limits, algebra, factoring, rationalization, techniques
content::=

# 🧮 Algebraic Limit Techniques

## 🔌 Direct Substitution

The first thing to try! ⚡

### When It Works

If $f(x)$ is continuous at $x = a$:

$$\lim_{x \to a} f(x) = f(a)$$

Just plug in $a$! ✅

### Examples

| Limit | Work | Answer |
|-------|------|--------|
| $\lim_{x \to 3} (x^2 + 1)$ | $(3)^2 + 1$ | $10$ |
| $\lim_{x \to 2} \frac{x+1}{x-1}$ | $\frac{2+1}{2-1}$ | $3$ |
| $\lim_{x \to 0} \cos(x)$ | $\cos(0)$ | $1$ |

### Continuous Functions (Direct Sub Works)

| Type | Examples |
|------|----------|
| Polynomials | $x^2 + 3x - 5$ |
| Rational (where defined) | $\frac{x+1}{x-2}$ (if $x \neq 2$) |
| Trig (where defined) | $\sin x$, $\cos x$ |
| Exponentials | $e^x$, $2^x$ |
| Logarithms (where defined) | $\ln x$ (if $x > 0$) |

---

## 🚫 Indeterminate Forms

### What Is $\frac{0}{0}$?

When direct substitution gives $\frac{0}{0}$, we need **more work**!

| Form | Called | Meaning |
|------|--------|---------|
| $\frac{0}{0}$ | Indeterminate | Can't determine limit directly |

This is NOT saying the limit doesn't exist—it means we need different techniques!

### Other Indeterminate Forms (for reference)

$$\frac{0}{0}, \quad \frac{\infty}{\infty}, \quad 0 \cdot \infty, \quad \infty - \infty, \quad 0^0, \quad \infty^0, \quad 1^\infty$$

---

## 🔧 Factoring Technique

### The Idea

Factor to cancel the problematic term!

### Example 1

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

**Step 1**: Direct sub gives $\frac{0}{0}$ ❌

**Step 2**: Factor the numerator
$$= \lim_{x \to 2} \frac{(x+2)(x-2)}{x-2}$$

**Step 3**: Cancel
$$= \lim_{x \to 2} (x + 2)$$

**Step 4**: Direct sub
$$= 2 + 2 = 4$$

### Example 2

$$\lim_{x \to 3} \frac{x^2 - 9}{x^2 - 5x + 6}$$

**Step 1**: Factor both
$$= \lim_{x \to 3} \frac{(x+3)(x-3)}{(x-2)(x-3)}$$

**Step 2**: Cancel
$$= \lim_{x \to 3} \frac{x+3}{x-2}$$

**Step 3**: Direct sub
$$= \frac{6}{1} = 6$$

---

## √ Rationalization Technique

### When to Use

When you see square roots and get $\frac{0}{0}$

### The Conjugate

| Expression | Conjugate |
|------------|-----------|
| $\sqrt{x} - 2$ | $\sqrt{x} + 2$ |
| $\sqrt{x+1} + 3$ | $\sqrt{x+1} - 3$ |

### Example

$$\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4}$$

**Step 1**: Multiply by conjugate
$$= \lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4} \cdot \frac{\sqrt{x} + 2}{\sqrt{x} + 2}$$

**Step 2**: Simplify numerator (difference of squares)
$$= \lim_{x \to 4} \frac{x - 4}{(x - 4)(\sqrt{x} + 2)}$$

**Step 3**: Cancel
$$= \lim_{x \to 4} \frac{1}{\sqrt{x} + 2}$$

**Step 4**: Direct sub
$$= \frac{1}{2 + 2} = \frac{1}{4}$$

---

## 📐 Complex Fractions

### Technique

Multiply by the LCD to clear denominators!

### Example

$$\lim_{x \to 0} \frac{\frac{1}{x+2} - \frac{1}{2}}{x}$$

**Step 1**: Find LCD of inner fractions: $2(x+2)$

**Step 2**: Multiply top and bottom by LCD
$$= \lim_{x \to 0} \frac{2 - (x+2)}{x \cdot 2(x+2)}$$

**Step 3**: Simplify
$$= \lim_{x \to 0} \frac{-x}{2x(x+2)}$$

**Step 4**: Cancel $x$
$$= \lim_{x \to 0} \frac{-1}{2(x+2)}$$

**Step 5**: Direct sub
$$= \frac{-1}{2(2)} = -\frac{1}{4}$$

---

## 📊 Limit Laws

### Properties of Limits

If $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$:

| Law | Statement |
|-----|-----------|
| Sum | $\lim [f(x) + g(x)] = L + M$ |
| Difference | $\lim [f(x) - g(x)] = L - M$ |
| Product | $\lim [f(x) \cdot g(x)] = L \cdot M$ |
| Quotient | $\lim \frac{f(x)}{g(x)} = \frac{L}{M}$ (if $M \neq 0$) |
| Constant Multiple | $\lim [c \cdot f(x)] = c \cdot L$ |
| Power | $\lim [f(x)]^n = L^n$ |

### Example Using Laws

$$\lim_{x \to 2} [3x^2 + 2x - 1]$$
$$= 3 \lim_{x \to 2} x^2 + 2 \lim_{x \to 2} x - \lim_{x \to 2} 1$$
$$= 3(4) + 2(2) - 1 = 15$$

---

## 🔄 Special Trig Limits

### The Two Essential Limits

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

$$\lim_{x \to 0} \frac{1 - \cos x}{x} = 0$$

**You MUST memorize these!** 🧠

### Using Them

$$\lim_{x \to 0} \frac{\sin(3x)}{x}$$

Rewrite: $= \lim_{x \to 0} \frac{\sin(3x)}{3x} \cdot 3 = 1 \cdot 3 = 3$

$$\lim_{x \to 0} \frac{\sin(5x)}{\sin(2x)}$$

Rewrite: $= \lim_{x \to 0} \frac{\sin(5x)}{5x} \cdot \frac{2x}{\sin(2x)} \cdot \frac{5}{2} = 1 \cdot 1 \cdot \frac{5}{2} = \frac{5}{2}$

---

## 📋 Strategy Summary

### Flowchart for Evaluating Limits

```
Start: Try Direct Substitution
            ↓
    Get a number? → DONE!
            ↓
    Get 0/0? → Try:
      1. Factor & cancel
      2. Rationalize
      3. Clear complex fractions
      4. Use trig identities
      5. Special trig limits
            ↓
    Get c/0 (c ≠ 0)? → Check for:
      - Vertical asymptote
      - One-sided limits
      - DNE or ±∞
```

---

## 🎯 AP Exam Tips

| Technique | When to Use |
|-----------|-------------|
| Direct sub | Always try first |
| Factoring | Polynomial ratios |
| Rationalization | Square roots |
| LCD | Complex fractions |
| Special limits | $\frac{\sin x}{x}$ or $\frac{1-\cos x}{x}$ |

:::GUIDE:::
unit::=Unit 1
title::=Limits at Infinity
desc::=Analyze the behavior of functions as x approaches infinity or negative infinity, including horizontal asymptotes
diff::=Hard
time::=40 minutes
tags::=limits, infinity, asymptotes, end behavior
content::=

# ∞ Limits at Infinity

## 🌌 The Concept

What happens as $x$ gets really, really big? 🚀

### Notation

$$\lim_{x \to \infty} f(x) = L$$

"As x increases without bound, f(x) approaches L"

$$\lim_{x \to -\infty} f(x) = L$$

"As x decreases without bound, f(x) approaches L"

---

## 📏 Horizontal Asymptotes

### Definition

If $\lim_{x \to \infty} f(x) = L$ or $\lim_{x \to -\infty} f(x) = L$, then $y = L$ is a **horizontal asymptote**.

### What It Means

| Behavior | Asymptote |
|----------|-----------|
| Function levels off at $y = 3$ as $x \to \infty$ | HA at $y = 3$ |
| Function approaches 0 as $x \to -\infty$ | HA at $y = 0$ |

---

## 📊 Rational Functions

### The Key Rule

For $\frac{p(x)}{q(x)}$ where $p$ and $q$ are polynomials:

**Compare the highest powers!**

| Degrees | Limit as $x \to \pm\infty$ | HA |
|---------|---------------------------|-----|
| Numerator < Denominator | 0 | $y = 0$ |
| Numerator = Denominator | $\frac{\text{leading coeff.}}{\text{leading coeff.}}$ | That value |
| Numerator > Denominator | $\pm\infty$ (DNE) | None |

### Examples

**Example 1**: $\lim_{x \to \infty} \frac{3x^2 + 1}{5x^2 - 2}$

Degrees equal (both 2), so:
$$= \frac{3}{5}$$

**Example 2**: $\lim_{x \to \infty} \frac{2x + 1}{x^3 + 4}$

Numerator degree (1) < Denominator degree (3):
$$= 0$$

**Example 3**: $\lim_{x \to \infty} \frac{x^3 - 1}{x + 2}$

Numerator degree (3) > Denominator degree (1):
$$= \infty$$

---

## 🧮 Algebraic Technique

### Divide by Highest Power

For $\lim_{x \to \infty} \frac{3x^2 + 2x - 1}{5x^2 + 4}$:

**Step 1**: Divide every term by $x^2$

$$= \lim_{x \to \infty} \frac{3 + \frac{2}{x} - \frac{1}{x^2}}{5 + \frac{4}{x^2}}$$

**Step 2**: As $x \to \infty$, terms with $x$ in denominator → 0

$$= \frac{3 + 0 - 0}{5 + 0} = \frac{3}{5}$$

---

## 🔢 Important Limits

### Basic Limits to Know

| Limit | Value |
|-------|-------|
| $\lim_{x \to \infty} \frac{1}{x}$ | $0$ |
| $\lim_{x \to \infty} \frac{1}{x^n}$ (n > 0) | $0$ |
| $\lim_{x \to \infty} c$ | $c$ |
| $\lim_{x \to \infty} x^n$ (n > 0) | $\infty$ |
| $\lim_{x \to -\infty} x^n$ (n even) | $\infty$ |
| $\lim_{x \to -\infty} x^n$ (n odd) | $-\infty$ |

### Exponential vs. Polynomial

$$\lim_{x \to \infty} \frac{x^n}{e^x} = 0$$

Exponentials grow faster than any polynomial!

$$\lim_{x \to \infty} \frac{\ln x}{x} = 0$$

Polynomials grow faster than logarithms!

---

## √ Radicals at Infinity

### Example with Square Root

$$\lim_{x \to \infty} \frac{\sqrt{4x^2 + 1}}{x + 3}$$

**Step 1**: For $x > 0$, $\sqrt{x^2} = x$

**Step 2**: Factor out $x^2$ from under radical:
$$= \lim_{x \to \infty} \frac{\sqrt{x^2(4 + \frac{1}{x^2})}}{x + 3} = \lim_{x \to \infty} \frac{x\sqrt{4 + \frac{1}{x^2}}}{x + 3}$$

**Step 3**: Divide by $x$:
$$= \lim_{x \to \infty} \frac{\sqrt{4 + \frac{1}{x^2}}}{1 + \frac{3}{x}} = \frac{\sqrt{4}}{1} = 2$$

### ⚠️ Watch Out!

For $x \to -\infty$: $\sqrt{x^2} = |x| = -x$ (since $x < 0$)

---

## ↕️ Infinite Limits

### Vertical Asymptotes

When $\lim_{x \to a} f(x) = \pm\infty$:

| Behavior | Notation |
|----------|----------|
| Goes up without bound | $\lim = \infty$ |
| Goes down without bound | $\lim = -\infty$ |

### Finding Vertical Asymptotes

For $f(x) = \frac{p(x)}{q(x)}$:

1. Set $q(x) = 0$
2. If $p(x) \neq 0$ at those points, VA there
3. Check sign from each side

### Example

$f(x) = \frac{1}{(x-2)^2}$

- VA at $x = 2$
- $\lim_{x \to 2} f(x) = \infty$ (from both sides)

---

## 🔄 Putting It Together

### Function: $f(x) = \frac{2x+1}{x-3}$

**Horizontal Asymptote**:
$$\lim_{x \to \infty} \frac{2x+1}{x-3} = 2$$
HA: $y = 2$

**Vertical Asymptote**:
Denominator = 0 when $x = 3$
VA: $x = 3$

**One-sided limits at VA**:
- $\lim_{x \to 3^+} f(x) = \infty$
- $\lim_{x \to 3^-} f(x) = -\infty$

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| Compare degrees | For rational functions |
| Divide by highest power | Algebraic technique |
| $\sqrt{x^2} = |x|$ | Watch signs! |
| Exponential beats polynomial | $e^x$ grows faster |
| Polynomial beats logarithm | $x$ grows faster than $\ln x$ |

:::GUIDE:::
unit::=Unit 1
title::=Continuity
desc::=Understand the definition of continuity, types of discontinuities, and the Intermediate Value Theorem
diff::=Hard
time::=45 minutes
tags::=continuity, discontinuity, IVT, definition
content::=

# 🔗 Continuity

## 📝 Definition of Continuity

What makes a function "connected"? 🧵

### Continuity at a Point

$f$ is **continuous at $x = a$** if ALL THREE conditions hold:

| Condition | Meaning |
|-----------|---------|
| 1. $f(a)$ exists | Function is defined at $a$ |
| 2. $\lim_{x \to a} f(x)$ exists | Limit exists |
| 3. $\lim_{x \to a} f(x) = f(a)$ | Limit equals function value |

### The Visual Test

Can you draw the graph at $x = a$ **without lifting your pencil**? ✏️

---

## ❌ Types of Discontinuities

### 1. Removable Discontinuity (Hole)

| Feature | Description |
|---------|-------------|
| Limit exists | $\lim_{x \to a} f(x) = L$ |
| Function undefined | $f(a)$ DNE or $f(a) \neq L$ |
| Graph | Hole in the curve |
| "Removable" | Can be fixed by redefining $f(a)$ |

**Example**: $f(x) = \frac{x^2-4}{x-2}$ at $x = 2$

### 2. Jump Discontinuity

| Feature | Description |
|---------|-------------|
| One-sided limits exist | But differ |
| $\lim_{x \to a^-} f(x) \neq \lim_{x \to a^+} f(x)$ | Jump! |
| Graph | Gap between pieces |

**Example**: Piecewise functions, step functions

### 3. Infinite Discontinuity

| Feature | Description |
|---------|-------------|
| Limit is infinite | $\lim_{x \to a} f(x) = \pm\infty$ |
| Vertical asymptote | At $x = a$ |

**Example**: $f(x) = \frac{1}{x}$ at $x = 0$

### 4. Oscillating Discontinuity

| Feature | Description |
|---------|-------------|
| Limit DNE | Not infinite, just oscillating |
| Function bounces | Near the point |

**Example**: $f(x) = \sin\left(\frac{1}{x}\right)$ at $x = 0$

---

## ✅ Continuous Functions

### Types Always Continuous (on their domains)

| Type | Domain |
|------|--------|
| Polynomial | All real numbers |
| Rational | Where denominator ≠ 0 |
| Exponential | All real numbers |
| Logarithmic | Where argument > 0 |
| Trig | Depends on function |
| Radical (even) | Where radicand ≥ 0 |

### Building Continuous Functions

If $f$ and $g$ are continuous at $a$:

| Operation | Result |
|-----------|--------|
| $f + g$ | Continuous at $a$ |
| $f - g$ | Continuous at $a$ |
| $f \cdot g$ | Continuous at $a$ |
| $f/g$ | Continuous at $a$ (if $g(a) \neq 0$) |
| $f \circ g$ | Continuous (with care about domains) |

---

## 📐 Continuity on an Interval

### Definitions

| Type | Meaning |
|------|---------|
| Continuous on $(a, b)$ | Continuous at every point in $(a, b)$ |
| Continuous on $[a, b]$ | Continuous on $(a, b)$, plus one-sided continuity at endpoints |
| Continuous on $[a, b)$ | Right-continuous at $a$, continuous on $(a, b)$ |

### At Endpoints

- At left endpoint $a$: Check $\lim_{x \to a^+} f(x) = f(a)$
- At right endpoint $b$: Check $\lim_{x \to b^-} f(x) = f(b)$

---

## 📊 Piecewise Functions

### Checking Continuity

For $f(x) = \begin{cases} f_1(x) & x < a \\ f_2(x) & x \geq a \end{cases}$

At $x = a$, check:
1. $f(a) = f_2(a)$ (function defined)
2. $\lim_{x \to a^-} f_1(x) = \lim_{x \to a^+} f_2(x)$ (limits match)
3. These equal $f(a)$

### Example

$$f(x) = \begin{cases} x^2 & x < 2 \\ 3x - 2 & x \geq 2 \end{cases}$$

Check at $x = 2$:
- $f(2) = 3(2) - 2 = 4$ ✓
- $\lim_{x \to 2^-} x^2 = 4$ ✓
- $\lim_{x \to 2^+} (3x-2) = 4$ ✓
- All equal! **Continuous at $x = 2$** ✅

---

## 🧮 Finding Values for Continuity

### Common Problem Type

"Find $k$ so that $f$ is continuous at $x = a$"

### Example

$$f(x) = \begin{cases} x^2 + k & x < 1 \\ 3x & x \geq 1 \end{cases}$$

For continuity at $x = 1$:
$$\lim_{x \to 1^-} (x^2 + k) = \lim_{x \to 1^+} (3x)$$
$$1 + k = 3$$
$$k = 2$$

---

## 📈 Intermediate Value Theorem (IVT)

### Statement

If $f$ is continuous on $[a, b]$ and $N$ is any value between $f(a)$ and $f(b)$, then there exists at least one $c$ in $(a, b)$ such that $f(c) = N$.

### Visual Understanding

```
    y
    │
f(b)├────────────●
    │           /
  N ├─ ─ ─ ─ ─/─ ─ (some c gives N)
    │        /
f(a)├──●────/
    │
    └──┬────┬───── x
       a    b
```

### Key Requirements for IVT

| Requirement | Why |
|-------------|-----|
| $f$ is continuous | No gaps! |
| On $[a, b]$ | Closed interval |
| $N$ is between $f(a)$ and $f(b)$ | In the range |

---

## 🔍 Using IVT to Find Zeros

### The Idea

If $f$ is continuous and $f(a) < 0 < f(b)$ (or vice versa), then $f$ has a zero somewhere in $(a, b)$!

### Example

Show $f(x) = x^3 - x - 1$ has a zero in $[1, 2]$:

1. $f$ is continuous (polynomial) ✓
2. $f(1) = 1 - 1 - 1 = -1 < 0$ ✓
3. $f(2) = 8 - 2 - 1 = 5 > 0$ ✓
4. By IVT, there exists $c \in (1, 2)$ where $f(c) = 0$ ✅

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| 3 conditions | For continuity at a point |
| Removable | Hole, limit exists |
| Jump | Left ≠ right limits |
| IVT | Continuous + between values |
| Piecewise | Match at boundary |

:::GUIDE:::
unit::=Unit 1
title::=Unit 1 AP Exam Strategies
desc::=Master key concepts, problem types, and strategies for Unit 1 of the AP Calculus AB exam
diff::=Medium
time::=30 minutes
tags::=AP exam, Unit 1, strategies, limits, continuity
content::=

# 📝 Unit 1 AP Exam Strategies

## 📊 Unit Weight

| Exam Section | Unit 1 Weight |
|--------------|---------------|
| Multiple Choice | ~10-12% |
| Free Response | May appear |

---

## 🔑 Must-Know Concepts

### Limit Essentials

| Concept | What to Know |
|---------|--------------|
| Limit definition | Approaching, not reaching |
| One-sided limits | $a^-$ and $a^+$ |
| Limit exists | Both sides equal |
| Direct substitution | First method |
| $\frac{0}{0}$ | Indeterminate, need more work |

### Techniques

| Technique | When to Use |
|-----------|-------------|
| Direct substitution | Always try first |
| Factoring | Polynomial numerator/denominator |
| Rationalization | Square roots |
| Special trig limits | $\frac{\sin x}{x}$ situations |

### Continuity

| Concept | Requirement |
|---------|-------------|
| Continuity at point | 3 conditions |
| Types of discontinuity | Removable, jump, infinite |
| IVT | Continuous, closed interval |

---

## 📋 Key Formulas

### Special Trig Limits

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

$$\lim_{x \to 0} \frac{1 - \cos x}{x} = 0$$

### Limits at Infinity (Rational)

| Degree Comparison | Result |
|-------------------|--------|
| Num < Denom | 0 |
| Num = Denom | Ratio of leading coefficients |
| Num > Denom | $\pm\infty$ |

### Continuity Definition

$f$ continuous at $a$ means:
1. $f(a)$ exists
2. $\lim_{x \to a} f(x)$ exists
3. $\lim_{x \to a} f(x) = f(a)$

---

## ✍️ Sample MC Questions

### Question 1

$$\lim_{x \to 3} \frac{x^2 - 9}{x - 3} = $$

(A) 0  (B) 3  (C) 6  (D) DNE

**Solution**: Factor numerator
$$= \lim_{x \to 3} \frac{(x+3)(x-3)}{x-3} = \lim_{x \to 3} (x+3) = 6$$

**Answer: (C)**

### Question 2

$$\lim_{x \to 0} \frac{\sin(5x)}{3x} = $$

(A) 0  (B) $\frac{3}{5}$  (C) $\frac{5}{3}$  (D) 5

**Solution**: 
$$= \lim_{x \to 0} \frac{\sin(5x)}{5x} \cdot \frac{5}{3} = 1 \cdot \frac{5}{3}$$

**Answer: (C)**

### Question 3

If $f(x) = \begin{cases} x^2 + 1 & x < 2 \\ kx - 3 & x \geq 2 \end{cases}$ is continuous, find $k$.

**Solution**: At $x = 2$:
- Left limit: $(2)^2 + 1 = 5$
- Right limit: $2k - 3$
- Set equal: $2k - 3 = 5 \Rightarrow k = 4$

**Answer: $k = 4$**

---

## ✍️ Sample FR Question

**Question**: Let $f(x) = \frac{x^2 - 4x + 3}{x^2 - 1}$

(a) Find all vertical asymptotes.

(b) Find all horizontal asymptotes.

(c) Find $\lim_{x \to 1} f(x)$ or explain why it doesn't exist.

**Solution**:

(a) Factor: $f(x) = \frac{(x-1)(x-3)}{(x-1)(x+1)}$

Cancel: $= \frac{x-3}{x+1}$ for $x \neq 1$

VA where simplified denom = 0: $x = -1$

**Answer: VA at $x = -1$**

(b) Degrees equal, so:
$$\lim_{x \to \pm\infty} \frac{x-3}{x+1} = 1$$

**Answer: HA at $y = 1$**

(c) Using simplified form:
$$\lim_{x \to 1} \frac{x-3}{x+1} = \frac{-2}{2} = -1$$

**Answer: $\lim_{x \to 1} f(x) = -1$**

(Note: There's a hole at $(1, -1)$, not a VA)

---

## ⚠️ Common Mistakes

### Limit Mistakes

| Mistake | Correction |
|---------|------------|
| Assuming limit = function value | Check continuity first |
| Stopping at $\frac{0}{0}$ | This is indeterminate—keep going! |
| Forgetting one-sided limits | Both must exist and be equal |
| Wrong trig limit | $\frac{\sin x}{x} \to 1$, not 0 |

### Continuity Mistakes

| Mistake | Correction |
|---------|------------|
| Only checking limit | Need all 3 conditions |
| Confusing removable and jump | Removable = limit exists |
| Misusing IVT | Must be continuous |

---

## 🔗 Connections to Other Units

### Unit 1 → Unit 2

| Unit 1 | Sets Up Unit 2 |
|--------|----------------|
| Limit definition | Derivative is a limit |
| $\frac{0}{0}$ techniques | Used in derivatives |
| Continuity | Differentiability implies continuity |

---

## 💡 Calculator Tips

### Using Calculator for Limits

| Method | Approach |
|--------|----------|
| Table | Enter values approaching limit |
| Graph | Trace near the point |
| Direct calculation | Only works for continuous |

### Be Careful!

- Calculator shows decimals, not exact answers
- May miss removable discontinuities
- Trust algebra over calculator for precision

---

## 📌 Quick Reference

### Flowchart for Evaluating Limits

```
STEP 1: Direct Substitution
         ↓
    Got a number? → DONE
         ↓ (Got 0/0?)
STEP 2: Algebraic manipulation
    • Factor
    • Rationalize  
    • Complex fractions
    • Special trig
         ↓
STEP 3: Substitute again
         ↓
    Still issues? → Check for DNE
```

---

## 🎯 Final Checklist

### Before the Exam

✅ Can evaluate limits graphically and numerically
✅ Know direct substitution
✅ Can handle $\frac{0}{0}$ with algebra
✅ Memorized special trig limits
✅ Know limits at infinity for rational functions
✅ Understand all 3 continuity conditions
✅ Can identify types of discontinuities
✅ Can apply IVT
✅ Can find $k$ values for piecewise continuity

**Good luck! 🍀**
