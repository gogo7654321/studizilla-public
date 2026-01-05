:::GUIDE:::
unit::=5
title::=📐 Unit 5: Analytical Applications of Differentiation
desc::=Use derivatives for curve sketching, extrema, and function analysis
diff::=Hard
time::=55 min
tags::=calculus,bc,curve-sketching,extrema,optimization
content::=

# 📐 Unit 5: Analytical Applications of Differentiation

Master the powerful analytical tools that derivatives provide for understanding function behavior, finding extrema, and sketching accurate curves.

---

## 📚 Unit Overview

This unit focuses on using derivatives to analyze functions deeply:

| Topic | Description | Weight |
|-------|-------------|--------|
| Mean Value Theorem | Connecting average and instantaneous rates | 15% |
| First Derivative Test | Finding and classifying extrema | 20% |
| Second Derivative Test | Alternative extrema classification | 15% |
| Concavity & Inflection | Curvature analysis | 20% |
| Curve Sketching | Comprehensive graphing | 20% |
| Optimization | Real-world applications | 10% |

---

## 🎯 Learning Objectives

By the end of this unit, you will be able to:

1. ✅ Apply the Mean Value Theorem and Rolle's Theorem
2. ✅ Find critical points and classify them using derivative tests
3. ✅ Determine intervals of increase/decrease
4. ✅ Analyze concavity and find inflection points
5. ✅ Sketch curves using all analytical tools
6. ✅ Distinguish between local and global extrema
7. ✅ Solve optimization problems systematically

---

## 📖 Section 1: Mean Value Theorem and Rolle's Theorem

### 1.1 Rolle's Theorem

**Rolle's Theorem** is a special case that sets the foundation for the Mean Value Theorem.

> **Theorem (Rolle's Theorem):**
> If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists at least one $c \in (a, b)$ such that:
> $$f'(c) = 0$$

#### Geometric Interpretation

If a function starts and ends at the same height, there must be at least one point where the tangent line is horizontal.

```
    f(x)
     │      ╭──╮
     │     ╱    ╲     ← Horizontal tangent at c
     │    ╱      ╲
   ──┼───●────────●───
     │   a    c    b
```

#### Proof of Rolle's Theorem

**Case 1:** If $f(x) = f(a)$ for all $x \in [a, b]$, then $f$ is constant and $f'(x) = 0$ everywhere.

**Case 2:** If $f(x) > f(a)$ for some $x \in (a, b)$, then by the Extreme Value Theorem, $f$ attains a maximum at some $c \in (a, b)$. Since the maximum is interior, $f'(c) = 0$.

**Case 3:** If $f(x) < f(a)$ for some $x \in (a, b)$, then $f$ attains a minimum at some $c \in (a, b)$, and $f'(c) = 0$.

#### Example 1: Applying Rolle's Theorem

**Problem:** Verify Rolle's Theorem for $f(x) = x^3 - 3x$ on $[-\sqrt{3}, \sqrt{3}]$.

**Solution:**

**Step 1:** Check continuity and differentiability.
- $f(x) = x^3 - 3x$ is a polynomial, so it's continuous and differentiable everywhere. ✓

**Step 2:** Verify $f(a) = f(b)$.
$$f(-\sqrt{3}) = (-\sqrt{3})^3 - 3(-\sqrt{3}) = -3\sqrt{3} + 3\sqrt{3} = 0$$
$$f(\sqrt{3}) = (\sqrt{3})^3 - 3(\sqrt{3}) = 3\sqrt{3} - 3\sqrt{3} = 0$$
Thus $f(-\sqrt{3}) = f(\sqrt{3}) = 0$. ✓

**Step 3:** Find $c$ where $f'(c) = 0$.
$$f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$$
$$f'(c) = 0 \Rightarrow c = \pm 1$$

Both $c = 1$ and $c = -1$ are in $(-\sqrt{3}, \sqrt{3})$. ✓

---

### 1.2 Mean Value Theorem (MVT)

The **Mean Value Theorem** generalizes Rolle's Theorem to functions that don't necessarily have equal endpoint values.

> **Theorem (Mean Value Theorem):**
> If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one $c \in (a, b)$ such that:
> $$f'(c) = \frac{f(b) - f(a)}{b - a}$$

#### Geometric Interpretation

There exists a point where the instantaneous rate of change equals the average rate of change.

```
    f(x)
     │         ╱ B
     │        ╱
     │    ╱──╱   ← Parallel tangent at c
     │   ╱  ╱
     │  A──╱─────
     │
   ──┼───────────
     │  a  c  b
```

The tangent line at $c$ is parallel to the secant line connecting $(a, f(a))$ and $(b, f(b))$.

#### Proof of MVT

Define the auxiliary function:
$$g(x) = f(x) - \left[f(a) + \frac{f(b) - f(a)}{b - a}(x - a)\right]$$

This represents the vertical distance between $f$ and the secant line.

**Verify Rolle's Theorem conditions:**
- $g$ is continuous on $[a, b]$ (difference of continuous functions)
- $g$ is differentiable on $(a, b)$ (difference of differentiable functions)
- $g(a) = f(a) - f(a) = 0$
- $g(b) = f(b) - \left[f(a) + \frac{f(b) - f(a)}{b - a}(b - a)\right] = f(b) - f(b) = 0$

By Rolle's Theorem, there exists $c \in (a, b)$ such that $g'(c) = 0$.

$$g'(x) = f'(x) - \frac{f(b) - f(a)}{b - a}$$

$$g'(c) = 0 \Rightarrow f'(c) = \frac{f(b) - f(a)}{b - a}$$

#### Example 2: Applying MVT

**Problem:** Find the value of $c$ guaranteed by MVT for $f(x) = x^3 - 2x^2 + x$ on $[0, 2]$.

**Solution:**

**Step 1:** Calculate the average rate of change.
$$f(0) = 0, \quad f(2) = 8 - 8 + 2 = 2$$
$$\text{Average rate} = \frac{f(2) - f(0)}{2 - 0} = \frac{2 - 0}{2} = 1$$

**Step 2:** Find $c$ where $f'(c) = 1$.
$$f'(x) = 3x^2 - 4x + 1$$
$$3c^2 - 4c + 1 = 1$$
$$3c^2 - 4c = 0$$
$$c(3c - 4) = 0$$
$$c = 0 \text{ or } c = \frac{4}{3}$$

Since $c$ must be in $(0, 2)$, we have $c = \frac{4}{3}$.

---

### 1.3 Consequences of MVT

#### Consequence 1: Zero Derivative Implies Constant

> If $f'(x) = 0$ for all $x$ in an interval $I$, then $f$ is constant on $I$.

**Proof:** For any $a, b \in I$, MVT gives:
$$f(b) - f(a) = f'(c)(b - a) = 0 \cdot (b - a) = 0$$
Thus $f(a) = f(b)$ for all points in $I$.

#### Consequence 2: Functions with Equal Derivatives

> If $f'(x) = g'(x)$ for all $x$ in an interval $I$, then $f(x) = g(x) + C$ for some constant $C$.

**Proof:** Let $h(x) = f(x) - g(x)$. Then $h'(x) = 0$, so $h$ is constant.

#### Consequence 3: Sign of Derivative

> If $f'(x) > 0$ on $(a, b)$, then $f$ is strictly increasing on $[a, b]$.
> If $f'(x) < 0$ on $(a, b)$, then $f$ is strictly decreasing on $[a, b]$.

---

## 📖 Section 2: First Derivative Test

### 2.1 Critical Points

> **Definition:** A **critical point** of $f$ is a value $c$ in the domain of $f$ where either:
> 1. $f'(c) = 0$, or
> 2. $f'(c)$ does not exist

Critical points are the only candidates for local extrema!

#### Example 3: Finding Critical Points

**Problem:** Find all critical points of $f(x) = x^{4/3} - 4x^{1/3}$.

**Solution:**

$$f'(x) = \frac{4}{3}x^{1/3} - \frac{4}{3}x^{-2/3} = \frac{4}{3}x^{-2/3}(x - 1) = \frac{4(x-1)}{3x^{2/3}}$$

**Critical points occur when:**
1. $f'(x) = 0$: $x - 1 = 0 \Rightarrow x = 1$
2. $f'(x)$ undefined: $x^{2/3} = 0 \Rightarrow x = 0$

Both $x = 0$ and $x = 1$ are in the domain of $f$, so both are critical points.

---

### 2.2 The First Derivative Test

> **First Derivative Test:**
> Let $c$ be a critical point of a continuous function $f$.
> 
> 1. If $f'$ changes from **positive to negative** at $c$, then $f$ has a **local maximum** at $c$.
> 2. If $f'$ changes from **negative to positive** at $c$, then $f$ has a **local minimum** at $c$.
> 3. If $f'$ does not change sign at $c$, then $f$ has **no local extremum** at $c$.

#### Sign Chart Method

Create a sign chart for $f'(x)$ using critical points:

```
     f'(x):    +  |  -  |  +
              ───┼─────┼───
                 c₁    c₂
     f(x):    ↗  max  ↘  min  ↗
```

#### Example 4: First Derivative Test

**Problem:** Find and classify all local extrema of $f(x) = x^4 - 4x^3 + 4x^2$.

**Solution:**

**Step 1:** Find critical points.
$$f'(x) = 4x^3 - 12x^2 + 8x = 4x(x^2 - 3x + 2) = 4x(x-1)(x-2)$$

Critical points: $x = 0, 1, 2$

**Step 2:** Create sign chart.

| Interval | $(-\infty, 0)$ | $(0, 1)$ | $(1, 2)$ | $(2, \infty)$ |
|----------|----------------|----------|----------|---------------|
| Sign of $4x$ | $-$ | $+$ | $+$ | $+$ |
| Sign of $(x-1)$ | $-$ | $-$ | $+$ | $+$ |
| Sign of $(x-2)$ | $-$ | $-$ | $-$ | $+$ |
| $f'(x)$ | $-$ | $+$ | $-$ | $+$ |
| $f(x)$ | ↘ | ↗ | ↘ | ↗ |

**Step 3:** Classify extrema.
- At $x = 0$: $f'$ changes from $-$ to $+$ → **Local minimum**
- At $x = 1$: $f'$ changes from $+$ to $-$ → **Local maximum**
- At $x = 2$: $f'$ changes from $-$ to $+$ → **Local minimum**

**Step 4:** Find extreme values.
$$f(0) = 0, \quad f(1) = 1 - 4 + 4 = 1, \quad f(2) = 16 - 32 + 16 = 0$$

---

### 2.3 Increasing and Decreasing Intervals

> **Theorem:**
> - $f$ is **increasing** on an interval where $f'(x) > 0$
> - $f$ is **decreasing** on an interval where $f'(x) < 0$

#### Example 5: Intervals of Monotonicity

**Problem:** Find where $f(x) = \frac{x^2}{x^2 + 1}$ is increasing or decreasing.

**Solution:**

$$f'(x) = \frac{2x(x^2 + 1) - x^2(2x)}{(x^2 + 1)^2} = \frac{2x^3 + 2x - 2x^3}{(x^2 + 1)^2} = \frac{2x}{(x^2 + 1)^2}$$

Since $(x^2 + 1)^2 > 0$ always:
- $f'(x) > 0$ when $x > 0$ → **Increasing on $(0, \infty)$**
- $f'(x) < 0$ when $x < 0$ → **Decreasing on $(-\infty, 0)$**
- $f'(0) = 0$ → Critical point at $x = 0$

By First Derivative Test: Local minimum at $x = 0$ with value $f(0) = 0$.

---

## 📖 Section 3: Second Derivative Test

### 3.1 The Second Derivative Test

> **Second Derivative Test:**
> Suppose $f''$ is continuous near $c$ and $f'(c) = 0$.
> 
> 1. If $f''(c) > 0$, then $f$ has a **local minimum** at $c$.
> 2. If $f''(c) < 0$, then $f$ has a **local maximum** at $c$.
> 3. If $f''(c) = 0$, the test is **inconclusive**.

#### Intuition

- $f''(c) > 0$ means the curve is concave up (like a cup) → minimum
- $f''(c) < 0$ means the curve is concave down (like a cap) → maximum

```
Concave Up (f'' > 0):        Concave Down (f'' < 0):
        ╭─╮                         ╱─╲
       ╱   ╲                       │   │
      ╱     ╲                      ╲   ╱
     ●       ← min                   ●   ← max
```

#### Example 6: Second Derivative Test

**Problem:** Use the Second Derivative Test to classify extrema of $f(x) = x^3 - 6x^2 + 9x + 1$.

**Solution:**

**Step 1:** Find critical points.
$$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$$
Critical points: $x = 1, 3$

**Step 2:** Compute second derivative.
$$f''(x) = 6x - 12 = 6(x - 2)$$

**Step 3:** Apply the test.
- At $x = 1$: $f''(1) = 6(1 - 2) = -6 < 0$ → **Local maximum**
- At $x = 3$: $f''(3) = 6(3 - 2) = 6 > 0$ → **Local minimum**

**Step 4:** Find values.
$$f(1) = 1 - 6 + 9 + 1 = 5 \quad \text{(local max)}$$
$$f(3) = 27 - 54 + 27 + 1 = 1 \quad \text{(local min)}$$

---

### 3.2 When Second Derivative Test Fails

When $f''(c) = 0$, we must use the First Derivative Test or higher-order derivatives.

#### Example 7: Inconclusive Second Derivative Test

**Problem:** Classify the critical point of $f(x) = x^4$ at $x = 0$.

**Solution:**

$$f'(x) = 4x^3 \Rightarrow f'(0) = 0$$
$$f''(x) = 12x^2 \Rightarrow f''(0) = 0$$

Second Derivative Test is inconclusive!

**Using First Derivative Test:**
- For $x < 0$: $f'(x) = 4x^3 < 0$ (decreasing)
- For $x > 0$: $f'(x) = 4x^3 > 0$ (increasing)

Sign changes from $-$ to $+$, so $x = 0$ is a **local minimum**.

---

### 3.3 Comparison of Tests

| Feature | First Derivative Test | Second Derivative Test |
|---------|----------------------|------------------------|
| What you need | Sign of $f'$ around $c$ | Values of $f'(c)$ and $f''(c)$ |
| Always works? | Yes (if $f'$ exists) | No (inconclusive when $f''(c) = 0$) |
| Computation | Test points in intervals | Direct calculation |
| Extra info | Gives monotonicity | Gives concavity at point |

---

## 📖 Section 4: Concavity and Inflection Points

### 4.1 Concavity

> **Definition:**
> - A function $f$ is **concave up** on an interval if $f'$ is increasing (equivalently, $f'' > 0$).
> - A function $f$ is **concave down** on an interval if $f'$ is decreasing (equivalently, $f'' < 0$).

#### Visual Guide

```
Concave Up (f'' > 0):           Concave Down (f'' < 0):
                                       ╭────╮
    ╱                                 ╱      ╲
   ╱                                 ╱        ╲
  ●                                 ╲          ╱
 ╱ ╲                                 ╲        ╱
    ╲                                 ╰──────╯
     ╲
      ● Tangent lines below curve    ● Tangent lines above curve
```

### 4.2 Inflection Points

> **Definition:** An **inflection point** is a point where the function changes concavity.

At an inflection point:
- $f''(c) = 0$ or $f''(c)$ does not exist
- $f''$ changes sign at $c$

⚠️ **Warning:** $f''(c) = 0$ alone is NOT sufficient! The sign must change.

#### Example 8: Finding Inflection Points

**Problem:** Find all inflection points of $f(x) = x^4 - 6x^2 + 8x + 1$.

**Solution:**

**Step 1:** Find second derivative.
$$f'(x) = 4x^3 - 12x + 8$$
$$f''(x) = 12x^2 - 12 = 12(x^2 - 1) = 12(x-1)(x+1)$$

**Step 2:** Find where $f''(x) = 0$.
$$f''(x) = 0 \Rightarrow x = -1 \text{ or } x = 1$$

**Step 3:** Test for sign change.

| Interval | $(-\infty, -1)$ | $(-1, 1)$ | $(1, \infty)$ |
|----------|-----------------|-----------|---------------|
| $f''(x)$ | $+$ | $-$ | $+$ |
| Concavity | Up | Down | Up |

Sign changes at both $x = -1$ and $x = 1$!

**Step 4:** Find y-coordinates.
$$f(-1) = 1 - 6 - 8 + 1 = -12$$
$$f(1) = 1 - 6 + 8 + 1 = 4$$

**Inflection points:** $(-1, -12)$ and $(1, 4)$

---

### 4.3 Non-Example: $f''(c) = 0$ but No Inflection

**Problem:** Show that $f(x) = x^4$ has no inflection point at $x = 0$.

**Solution:**
$$f''(x) = 12x^2$$
$$f''(0) = 0$$

But $f''(x) = 12x^2 \geq 0$ for all $x$. No sign change!

The function is concave up everywhere, so $x = 0$ is **not** an inflection point.

---

## 📖 Section 5: Comprehensive Curve Sketching

### 5.1 Curve Sketching Checklist

Follow these steps for a complete analysis:

| Step | What to Find | How |
|------|--------------|-----|
| 1 | Domain | Identify restrictions |
| 2 | Intercepts | Set $y = 0$ and $x = 0$ |
| 3 | Symmetry | Check even/odd/periodic |
| 4 | Asymptotes | Horizontal, vertical, oblique |
| 5 | Critical points | Solve $f'(x) = 0$ or undefined |
| 6 | Monotonicity | Sign of $f'(x)$ |
| 7 | Local extrema | First or Second Derivative Test |
| 8 | Concavity | Sign of $f''(x)$ |
| 9 | Inflection points | Where $f''$ changes sign |
| 10 | Sketch | Combine all information |

---

### 5.2 Example: Complete Curve Analysis

**Problem:** Sketch the graph of $f(x) = \frac{x^2 - 1}{x^2 + 1}$.

**Step 1: Domain**
Denominator $x^2 + 1 > 0$ for all $x$, so domain is $(-\infty, \infty)$.

**Step 2: Intercepts**
- $y$-intercept: $f(0) = \frac{-1}{1} = -1$ → Point: $(0, -1)$
- $x$-intercepts: $x^2 - 1 = 0 \Rightarrow x = \pm 1$ → Points: $(-1, 0)$ and $(1, 0)$

**Step 3: Symmetry**
$$f(-x) = \frac{(-x)^2 - 1}{(-x)^2 + 1} = \frac{x^2 - 1}{x^2 + 1} = f(x)$$
The function is **even** (symmetric about $y$-axis).

**Step 4: Asymptotes**
- Vertical: None (denominator never zero)
- Horizontal: $\lim_{x \to \pm\infty} \frac{x^2 - 1}{x^2 + 1} = \lim_{x \to \pm\infty} \frac{1 - 1/x^2}{1 + 1/x^2} = 1$

Horizontal asymptote: $y = 1$

**Step 5: Critical Points**
$$f'(x) = \frac{2x(x^2 + 1) - (x^2 - 1)(2x)}{(x^2 + 1)^2} = \frac{2x^3 + 2x - 2x^3 + 2x}{(x^2 + 1)^2} = \frac{4x}{(x^2 + 1)^2}$$

$f'(x) = 0$ when $x = 0$. Critical point: $x = 0$

**Step 6: Monotonicity**
- $f'(x) > 0$ when $x > 0$ (increasing)
- $f'(x) < 0$ when $x < 0$ (decreasing)

**Step 7: Local Extrema**
At $x = 0$: $f'$ changes from $-$ to $+$ → **Local minimum** at $(0, -1)$

**Step 8: Concavity**
$$f''(x) = \frac{d}{dx}\left[\frac{4x}{(x^2 + 1)^2}\right]$$

Using the quotient rule:
$$f''(x) = \frac{4(x^2 + 1)^2 - 4x \cdot 2(x^2 + 1)(2x)}{(x^2 + 1)^4}$$
$$= \frac{4(x^2 + 1) - 16x^2}{(x^2 + 1)^3} = \frac{4 - 12x^2}{(x^2 + 1)^3} = \frac{4(1 - 3x^2)}{(x^2 + 1)^3}$$

$f''(x) = 0$ when $1 - 3x^2 = 0$, i.e., $x = \pm\frac{1}{\sqrt{3}}$

**Step 9: Inflection Points**

| Interval | $(-\infty, -\frac{1}{\sqrt{3}})$ | $(-\frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}})$ | $(\frac{1}{\sqrt{3}}, \infty)$ |
|----------|----------------------------------|---------------------------------------------|--------------------------------|
| Sign of $1 - 3x^2$ | $-$ | $+$ | $-$ |
| Concavity | Down | Up | Down |

Inflection points at $x = \pm\frac{1}{\sqrt{3}}$:
$$f\left(\frac{1}{\sqrt{3}}\right) = \frac{1/3 - 1}{1/3 + 1} = \frac{-2/3}{4/3} = -\frac{1}{2}$$

Inflection points: $\left(-\frac{1}{\sqrt{3}}, -\frac{1}{2}\right)$ and $\left(\frac{1}{\sqrt{3}}, -\frac{1}{2}\right)$

**Step 10: Sketch**
```
    y
    │       y = 1 ─ ─ ─ ─ ─ ─ ─ ─ (asymptote)
    │   ──────────────────────
    │  ╱                      ╲
  1 ┼─╱────────────────────────╲─
    │╱                          ╲
    ●───────────●───────────●───── x
   -1    (-1,0)  │  (0,-1)    1
                 │    ●
                 │ (min)
 -1 ┼────────────●──────────────
```

---

### 5.3 Example: Polynomial with Multiple Features

**Problem:** Analyze and sketch $f(x) = x^3 - 3x^2 - 9x + 5$.

**Solution:**

**Domain:** All real numbers

**Intercepts:**
- $y$-intercept: $f(0) = 5$ → $(0, 5)$
- $x$-intercepts: Solve $x^3 - 3x^2 - 9x + 5 = 0$ (approximately $x \approx -2.3, 0.5, 4.8$)

**First Derivative:**
$$f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x-3)(x+1)$$

Critical points: $x = -1$ and $x = 3$

**Monotonicity:**

| Interval | $(-\infty, -1)$ | $(-1, 3)$ | $(3, \infty)$ |
|----------|-----------------|-----------|---------------|
| $f'(x)$ | $+$ | $-$ | $+$ |
| $f(x)$ | ↗ | ↘ | ↗ |

**Extrema:**
- $x = -1$: Local maximum, $f(-1) = -1 - 3 + 9 + 5 = 10$
- $x = 3$: Local minimum, $f(3) = 27 - 27 - 27 + 5 = -22$

**Second Derivative:**
$$f''(x) = 6x - 6 = 6(x - 1)$$

- $f''(x) = 0$ at $x = 1$
- $f''(x) < 0$ for $x < 1$ (concave down)
- $f''(x) > 0$ for $x > 1$ (concave up)

**Inflection Point:**
At $x = 1$: $f(1) = 1 - 3 - 9 + 5 = -6$
Inflection point: $(1, -6)$

---

## 📖 Section 6: Global vs Local Extrema

### 6.1 Definitions

> **Local (Relative) Extremum:** $f(c)$ is a local max/min if it's the largest/smallest value in some open interval around $c$.

> **Global (Absolute) Extremum:** $f(c)$ is a global max/min if it's the largest/smallest value on the entire domain.

### 6.2 Extreme Value Theorem

> **Theorem:** If $f$ is continuous on a closed interval $[a, b]$, then $f$ attains both a global maximum and a global minimum on $[a, b]$.

### 6.3 Finding Global Extrema on Closed Intervals

**Closed Interval Method:**

1. Find all critical points in $(a, b)$
2. Evaluate $f$ at critical points and endpoints
3. Compare all values
4. Largest = global max, Smallest = global min

#### Example 9: Global Extrema

**Problem:** Find the global extrema of $f(x) = x^3 - 6x^2 + 9x + 2$ on $[0, 4]$.

**Solution:**

**Step 1:** Find critical points.
$$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$$
Critical points: $x = 1$ and $x = 3$ (both in $(0, 4)$)

**Step 2:** Evaluate at critical points and endpoints.
$$f(0) = 2$$
$$f(1) = 1 - 6 + 9 + 2 = 6$$
$$f(3) = 27 - 54 + 27 + 2 = 2$$
$$f(4) = 64 - 96 + 36 + 2 = 6$$

**Step 3:** Compare.
- Global maximum: $6$ at $x = 1$ and $x = 4$
- Global minimum: $2$ at $x = 0$ and $x = 3$

---

### 6.4 Finding Global Extrema on Open/Unbounded Intervals

When the interval is not closed, global extrema may not exist!

**Strategy:**
1. Find all local extrema
2. Check behavior as $x \to \pm\infty$ or at domain boundaries
3. Compare local extreme values with limiting behavior

#### Example 10: Unbounded Domain

**Problem:** Find global extrema of $f(x) = xe^{-x}$ on $[0, \infty)$.

**Solution:**

**Find critical points:**
$$f'(x) = e^{-x} - xe^{-x} = e^{-x}(1 - x)$$
$f'(x) = 0$ when $x = 1$

**Classify:**
- For $x < 1$: $f'(x) > 0$ (increasing)
- For $x > 1$: $f'(x) < 0$ (decreasing)

Local maximum at $x = 1$: $f(1) = e^{-1} = \frac{1}{e}$

**Check boundaries:**
- $f(0) = 0$
- $\lim_{x \to \infty} xe^{-x} = 0$ (by L'Hôpital's Rule)

**Conclusion:**
- Global maximum: $\frac{1}{e}$ at $x = 1$
- Global minimum: $0$ at $x = 0$ (and as $x \to \infty$)

---

## 📖 Section 7: Optimization Strategies

### 7.1 Optimization Problem-Solving Framework

**Step-by-Step Process:**

1. **Read and understand** the problem
2. **Draw a diagram** if applicable
3. **Identify variables** and assign symbols
4. **Write the objective function** (what to maximize/minimize)
5. **Find constraints** and use them to reduce variables
6. **Express objective** in terms of one variable
7. **Find domain** of the objective function
8. **Apply calculus** (find critical points)
9. **Verify** it's the desired extremum
10. **Answer the question** asked

---

### 7.2 Classic Optimization Problems

#### Example 11: Maximizing Area

**Problem:** A farmer has 400 meters of fencing to enclose a rectangular field adjacent to a river (no fencing needed along the river). What dimensions maximize the area?

**Solution:**

**Step 1:** Draw diagram.
```
        River
═══════════════════════
│                     │
│                     │ y
│       Area          │
│                     │
═══════════════════════
          x
```

**Step 2:** Set up equations.
- Perimeter constraint: $x + 2y = 400$
- Objective (area): $A = xy$

**Step 3:** Express in one variable.
From constraint: $x = 400 - 2y$
$$A(y) = (400 - 2y)y = 400y - 2y^2$$

**Step 4:** Find domain.
$y > 0$ and $x = 400 - 2y > 0 \Rightarrow y < 200$
Domain: $(0, 200)$

**Step 5:** Optimize.
$$A'(y) = 400 - 4y = 0$$
$$y = 100$$

**Step 6:** Verify maximum.
$A''(y) = -4 < 0$ → Concave down → Maximum

**Step 7:** Find dimensions.
$y = 100$ m, $x = 400 - 200 = 200$ m
Maximum area: $A = 200 \times 100 = 20,000$ m²

---

#### Example 12: Minimizing Distance

**Problem:** Find the point on the parabola $y = x^2$ closest to the point $(3, 0)$.

**Solution:**

**Step 1:** Distance formula.
Distance from $(x, x^2)$ to $(3, 0)$:
$$D = \sqrt{(x-3)^2 + (x^2)^2}$$

**Step 2:** Minimize $D^2$ instead (same location).
$$D^2 = f(x) = (x-3)^2 + x^4$$

**Step 3:** Differentiate.
$$f'(x) = 2(x-3) + 4x^3 = 4x^3 + 2x - 6 = 2(2x^3 + x - 3)$$

**Step 4:** Solve $f'(x) = 0$.
$$2x^3 + x - 3 = 0$$
Testing $x = 1$: $2(1) + 1 - 3 = 0$ ✓

Factor: $(x - 1)(2x^2 + 2x + 3) = 0$

The quadratic $2x^2 + 2x + 3$ has discriminant $4 - 24 = -20 < 0$, so no real roots.

Only critical point: $x = 1$

**Step 5:** Verify minimum.
$$f''(x) = 12x^2 + 2$$
$$f''(1) = 12 + 2 = 14 > 0$$
Concave up → Minimum

**Step 6:** Find the point.
$x = 1$, $y = 1^2 = 1$

**Closest point:** $(1, 1)$

---

#### Example 13: Optimization with Constraints

**Problem:** A box with a square base and open top must have volume 32,000 cm³. Find dimensions that minimize material (surface area).

**Solution:**

**Variables:**
- Base side: $x$
- Height: $h$

**Constraint:**
$$V = x^2 h = 32000$$

**Objective (surface area):**
$$S = x^2 + 4xh$$

**Express in one variable:**
From constraint: $h = \frac{32000}{x^2}$
$$S(x) = x^2 + 4x \cdot \frac{32000}{x^2} = x^2 + \frac{128000}{x}$$

**Domain:** $x > 0$

**Optimize:**
$$S'(x) = 2x - \frac{128000}{x^2}$$
$$2x = \frac{128000}{x^2}$$
$$x^3 = 64000$$
$$x = 40 \text{ cm}$$

**Verify:**
$$S''(x) = 2 + \frac{256000}{x^3}$$
$$S''(40) = 2 + \frac{256000}{64000} = 2 + 4 = 6 > 0$$
Minimum confirmed.

**Dimensions:**
$x = 40$ cm, $h = \frac{32000}{1600} = 20$ cm

---

## 📊 Summary Tables

### Derivative Tests Comparison

| Test | Condition | Conclusion |
|------|-----------|------------|
| **First Derivative** | $f'$ changes $+$ to $-$ | Local max |
| | $f'$ changes $-$ to $+$ | Local min |
| | $f'$ same sign | Not an extremum |
| **Second Derivative** | $f'(c) = 0$ and $f''(c) > 0$ | Local min |
| | $f'(c) = 0$ and $f''(c) < 0$ | Local max |
| | $f'(c) = 0$ and $f''(c) = 0$ | Inconclusive |

### Function Behavior Summary

| $f'(x)$ | $f''(x)$ | $f(x)$ Behavior |
|---------|----------|-----------------|
| $+$ | $+$ | Increasing, concave up |
| $+$ | $-$ | Increasing, concave down |
| $-$ | $+$ | Decreasing, concave up |
| $-$ | $-$ | Decreasing, concave down |

---

## 🎯 Practice Problems

### Problem Set A: Mean Value Theorem

**A1.** Verify that $f(x) = x^3 - x$ satisfies the hypotheses of Rolle's Theorem on $[-1, 1]$ and find all values of $c$.

**A2.** Find the value of $c$ guaranteed by MVT for $f(x) = \sqrt{x}$ on $[1, 4]$.

**A3.** Show that $x^3 + x - 1 = 0$ has exactly one real root using calculus.

### Problem Set B: First Derivative Test

**B1.** Find and classify all local extrema of $f(x) = x^4 - 8x^2 + 16$.

**B2.** Find intervals of increase/decrease for $f(x) = \frac{x}{x^2 + 4}$.

**B3.** The function $f(x) = ax^3 + bx^2 + cx + d$ has a local maximum at $x = -2$ and local minimum at $x = 1$. Find $a$ and $b$ if $c = -12$.

### Problem Set C: Second Derivative Test

**C1.** Use the Second Derivative Test to classify critical points of $f(x) = x^5 - 5x^4 + 5x^3 + 1$.

**C2.** For what values of $k$ does $f(x) = x^3 + kx^2 + 3x$ have no local extrema?

### Problem Set D: Concavity and Inflection

**D1.** Find all inflection points of $f(x) = x^4 - 4x^3 + 6x^2$.

**D2.** Determine concavity intervals for $f(x) = x\ln(x)$ for $x > 0$.

**D3.** Show that $f(x) = \tan^{-1}(x)$ has exactly one inflection point.

### Problem Set E: Curve Sketching

**E1.** Sketch the complete graph of $f(x) = \frac{x^3}{x^2 - 1}$, identifying all features.

**E2.** Sketch $f(x) = x^{2/3}(x - 5)$ showing all extrema and inflection points.

### Problem Set F: Global Extrema

**F1.** Find the global maximum and minimum of $f(x) = x^3 - 3x + 1$ on $[-2, 2]$.

**F2.** Find global extrema of $f(x) = x^2 e^{-x}$ on $[0, \infty)$.

### Problem Set G: Optimization

**G1.** A window has the shape of a rectangle topped by a semicircle. If the perimeter is 12 meters, find the dimensions that maximize the area.

**G2.** Find the dimensions of the largest rectangle that can be inscribed in a circle of radius $R$.

**G3.** A cylindrical can must hold 1 liter. Find the dimensions that minimize the surface area.

---

## ✅ Solutions to Selected Problems

### Solution A1

$f(x) = x^3 - x$ is a polynomial, so continuous and differentiable everywhere.
$f(-1) = -1 + 1 = 0$, $f(1) = 1 - 1 = 0$. ✓

$f'(x) = 3x^2 - 1 = 0 \Rightarrow x = \pm\frac{1}{\sqrt{3}}$

Both values are in $(-1, 1)$.

### Solution B1

$f'(x) = 4x^3 - 16x = 4x(x^2 - 4) = 4x(x-2)(x+2)$

Critical points: $x = -2, 0, 2$

Sign chart:
- $x < -2$: $f' < 0$
- $-2 < x < 0$: $f' > 0$
- $0 < x < 2$: $f' < 0$
- $x > 2$: $f' > 0$

Local minimum at $x = -2$: $f(-2) = 16 - 32 + 16 = 0$
Local maximum at $x = 0$: $f(0) = 16$
Local minimum at $x = 2$: $f(2) = 16 - 32 + 16 = 0$

### Solution D2

$f(x) = x\ln(x)$ for $x > 0$

$f'(x) = \ln(x) + 1$
$f''(x) = \frac{1}{x}$

Since $\frac{1}{x} > 0$ for all $x > 0$, the function is **concave up on $(0, \infty)$**.

No inflection points.

### Solution F1

$f(x) = x^3 - 3x + 1$ on $[-2, 2]$

$f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$

Critical points: $x = -1, 1$

Evaluate:
- $f(-2) = -8 + 6 + 1 = -1$
- $f(-1) = -1 + 3 + 1 = 3$
- $f(1) = 1 - 3 + 1 = -1$
- $f(2) = 8 - 6 + 1 = 3$

**Global maximum:** $3$ at $x = -1$ and $x = 2$
**Global minimum:** $-1$ at $x = -2$ and $x = 1$

### Solution G2

Let the rectangle have dimensions $2x$ by $2y$ inscribed in a circle of radius $R$.

Constraint: $x^2 + y^2 = R^2$

Objective: $A = 4xy$

From constraint: $y = \sqrt{R^2 - x^2}$

$A(x) = 4x\sqrt{R^2 - x^2}$

$A'(x) = 4\sqrt{R^2 - x^2} + 4x \cdot \frac{-x}{\sqrt{R^2 - x^2}} = \frac{4(R^2 - 2x^2)}{\sqrt{R^2 - x^2}}$

$A'(x) = 0$ when $R^2 = 2x^2 \Rightarrow x = \frac{R}{\sqrt{2}}$

Then $y = \sqrt{R^2 - \frac{R^2}{2}} = \frac{R}{\sqrt{2}}$

**Dimensions:** The largest rectangle is a **square** with side $\frac{2R}{\sqrt{2}} = R\sqrt{2}$

Maximum area: $A = (R\sqrt{2})^2 = 2R^2$

---

## 💡 Key Takeaways

1. **MVT connects average and instantaneous rates** - there's always a point where they're equal

2. **Critical points are essential** - all local extrema occur at critical points

3. **Two tests for extrema:**
   - First Derivative Test: more reliable, gives monotonicity
   - Second Derivative Test: faster when it works

4. **Concavity from $f''$:**
   - $f'' > 0$: concave up (smile)
   - $f'' < 0$: concave down (frown)

5. **Inflection points require sign change** in $f''$, not just $f'' = 0$

6. **Closed interval method** for global extrema: check critical points AND endpoints

7. **Optimization strategy:** reduce to single-variable calculus using constraints

8. **Always verify** your answer is the type of extremum requested (max vs min)

---

## 📝 AP Exam Tips

### Common Free Response Patterns

1. **Justification questions:** "Justify why this is a maximum"
   - State the test used
   - Show the condition is met
   - Conclude

2. **Curve sketching:** Label everything
   - Intercepts with coordinates
   - Extrema with coordinates
   - Inflection points
   - Asymptotes with equations

3. **Optimization:** Show all work
   - Define variables
   - Write objective function
   - Take derivative
   - Solve
   - Verify answer type

### Calculator vs Non-Calculator

**Non-Calculator Section:**
- Factor derivatives by hand
- Use exact values (fractions, radicals)
- Know how to solve cubics that factor nicely

**Calculator Section:**
- Graph to verify
- Use numerical solver for complex equations
- Still need to show analytical setup

---

## 🔗 Connections to Other Units

| Concept | Connection |
|---------|------------|
| **Unit 2-3** | Derivative rules needed for all analysis |
| **Unit 4** | Related rates use optimization ideas |
| **Unit 6** | Integration uses monotonicity for area problems |
| **Unit 7** | Differential equations use curve analysis |
| **Unit 8** | Series convergence uses derivative tests |

---

*Master these analytical tools and you'll have the power to fully understand any function's behavior from its derivatives alone!*

:::GUIDE:::
