:::GUIDE:::
unit::=1
title::=📐 Unit 1: Limits and Continuity (BC)
desc::=Master limits, continuity, and asymptotic behavior with BC-level rigor
diff::=Medium-Hard
time::=55 min
tags::=calculus,bc,limits,continuity
content::=

# 📐 Unit 1: Limits and Continuity

## Overview

Limits form the foundation of calculus, providing the mathematical framework for understanding instantaneous rates of change and accumulation. In AP Calculus BC, you'll explore limits with greater rigor, including the formal epsilon-delta definition and advanced techniques like L'Hôpital's Rule.

:::TIMELINE:::
event::=**1665-1666** - Newton develops "fluxions" (early calculus) during the plague years
event::=**1670s** - Leibniz independently develops calculus with modern notation
event::=**1821** - Cauchy formalizes the concept of limits
event::=**1854** - Weierstrass develops the rigorous epsilon-delta definition
event::=**1861** - Weierstrass lectures on rigorous analysis at University of Berlin
event::=**1872** - Dedekind defines real numbers using "cuts," completing the foundation
:::TIMELINE:::

---

## 1.1 Introduction to Limits

### What is a Limit?

A **limit** describes the value a function approaches as the input approaches a particular value. This concept is fundamental because it allows us to analyze function behavior near points where direct evaluation may be impossible.

**Informal Definition:**
$$\lim_{x \to c} f(x) = L$$

means that as $x$ gets arbitrarily close to $c$ (but not equal to $c$), $f(x)$ gets arbitrarily close to $L$.

### The Epsilon-Delta Definition (Formal)

The rigorous definition of a limit, developed by Weierstrass, uses two Greek letters:
- $\varepsilon$ (epsilon): represents how close we want $f(x)$ to be to $L$
- $\delta$ (delta): represents how close $x$ needs to be to $c$

**Formal Definition:**
$$\lim_{x \to c} f(x) = L$$

if and only if for every $\varepsilon > 0$, there exists a $\delta > 0$ such that:
$$0 < |x - c| < \delta \implies |f(x) - L| < \varepsilon$$

**Understanding the Definition:**
- The condition $0 < |x - c|$ means $x \neq c$ (we never actually reach $c$)
- $|x - c| < \delta$ means $x$ is within $\delta$ units of $c$
- $|f(x) - L| < \varepsilon$ means $f(x)$ is within $\varepsilon$ units of $L$

### Worked Example: Epsilon-Delta Proof

**Prove that** $\lim_{x \to 3} (2x + 1) = 7$

**Solution:**

We need to show that for every $\varepsilon > 0$, there exists $\delta > 0$ such that:
$$0 < |x - 3| < \delta \implies |2x + 1 - 7| < \varepsilon$$

**Step 1:** Simplify $|f(x) - L|$
$$|2x + 1 - 7| = |2x - 6| = 2|x - 3|$$

**Step 2:** Find the relationship between $\delta$ and $\varepsilon$

We want $2|x - 3| < \varepsilon$, which means $|x - 3| < \frac{\varepsilon}{2}$

**Step 3:** Choose $\delta = \frac{\varepsilon}{2}$

**Step 4:** Verify the proof

Given any $\varepsilon > 0$, let $\delta = \frac{\varepsilon}{2}$.

If $0 < |x - 3| < \delta = \frac{\varepsilon}{2}$, then:
$$|2x + 1 - 7| = 2|x - 3| < 2 \cdot \frac{\varepsilon}{2} = \varepsilon$$

Therefore, $\lim_{x \to 3} (2x + 1) = 7$ ∎

---

## 1.2 One-Sided Limits

### Definition

**Left-hand limit:** $\lim_{x \to c^-} f(x) = L$ means $f(x) \to L$ as $x$ approaches $c$ from the left (values less than $c$).

**Right-hand limit:** $\lim_{x \to c^+} f(x) = L$ means $f(x) \to L$ as $x$ approaches $c$ from the right (values greater than $c$).

### The Two-Sided Limit Theorem

$$\lim_{x \to c} f(x) = L \iff \lim_{x \to c^-} f(x) = L \text{ and } \lim_{x \to c^+} f(x) = L$$

A two-sided limit exists if and only if both one-sided limits exist and are equal.

### Worked Example: One-Sided Limits

Consider the piecewise function:
$$f(x) = \begin{cases} x^2 & \text{if } x < 2 \\ 3x - 2 & \text{if } x \geq 2 \end{cases}$$

Find $\lim_{x \to 2^-} f(x)$, $\lim_{x \to 2^+} f(x)$, and $\lim_{x \to 2} f(x)$.

**Solution:**

- $\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} x^2 = 4$
- $\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (3x - 2) = 3(2) - 2 = 4$
- Since both one-sided limits equal 4, $\lim_{x \to 2} f(x) = 4$

---

## 1.3 Limit Laws and Properties

### Fundamental Limit Laws

If $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$, then:

| Law | Formula |
|-----|---------|
| **Sum Law** | $\lim_{x \to c} [f(x) + g(x)] = L + M$ |
| **Difference Law** | $\lim_{x \to c} [f(x) - g(x)] = L - M$ |
| **Constant Multiple Law** | $\lim_{x \to c} [k \cdot f(x)] = k \cdot L$ |
| **Product Law** | $\lim_{x \to c} [f(x) \cdot g(x)] = L \cdot M$ |
| **Quotient Law** | $\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{L}{M}$, if $M \neq 0$ |
| **Power Law** | $\lim_{x \to c} [f(x)]^n = L^n$ |
| **Root Law** | $\lim_{x \to c} \sqrt[n]{f(x)} = \sqrt[n]{L}$ (with conditions) |

### Special Limits

These fundamental limits appear frequently:

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

$$\lim_{x \to 0} \frac{1 - \cos x}{x} = 0$$

$$\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$$

$$\lim_{x \to 0} \frac{\tan x}{x} = 1$$

$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

$$\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1$$

$$\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$$

$$\lim_{x \to 0} (1 + x)^{1/x} = e$$

---

## 1.4 Techniques for Evaluating Limits

### Direct Substitution

The simplest method. If $f$ is continuous at $c$, then:
$$\lim_{x \to c} f(x) = f(c)$$

**Example:**
$$\lim_{x \to 2} (3x^2 - 5x + 1) = 3(4) - 5(2) + 1 = 12 - 10 + 1 = 3$$

### Factoring and Cancellation

When direct substitution yields $\frac{0}{0}$, factor and cancel.

**Example:**
$$\lim_{x \to 3} \frac{x^2 - 9}{x - 3} = \lim_{x \to 3} \frac{(x-3)(x+3)}{x-3} = \lim_{x \to 3} (x + 3) = 6$$

### Rationalization

Multiply by the conjugate when dealing with radicals.

**Example:**
$$\lim_{x \to 0} \frac{\sqrt{x + 4} - 2}{x}$$

**Solution:**
$$= \lim_{x \to 0} \frac{(\sqrt{x + 4} - 2)(\sqrt{x + 4} + 2)}{x(\sqrt{x + 4} + 2)}$$

$$= \lim_{x \to 0} \frac{(x + 4) - 4}{x(\sqrt{x + 4} + 2)}$$

$$= \lim_{x \to 0} \frac{x}{x(\sqrt{x + 4} + 2)}$$

$$= \lim_{x \to 0} \frac{1}{\sqrt{x + 4} + 2} = \frac{1}{4}$$

### Common Denominator

For complex fractions, find a common denominator.

**Example:**
$$\lim_{x \to 0} \frac{\frac{1}{x+2} - \frac{1}{2}}{x}$$

**Solution:**
$$= \lim_{x \to 0} \frac{\frac{2 - (x+2)}{2(x+2)}}{x} = \lim_{x \to 0} \frac{-x}{2x(x+2)} = \lim_{x \to 0} \frac{-1}{2(x+2)} = -\frac{1}{4}$$

### Trigonometric Manipulations

Use identities and known limits.

**Example:**
$$\lim_{x \to 0} \frac{\sin(3x)}{x}$$

**Solution:**
$$= \lim_{x \to 0} \frac{\sin(3x)}{3x} \cdot 3 = 1 \cdot 3 = 3$$

**Example:**
$$\lim_{x \to 0} \frac{\tan x - \sin x}{x^3}$$

**Solution:**
$$= \lim_{x \to 0} \frac{\sin x \left(\frac{1}{\cos x} - 1\right)}{x^3} = \lim_{x \to 0} \frac{\sin x (1 - \cos x)}{x^3 \cos x}$$

$$= \lim_{x \to 0} \frac{\sin x}{x} \cdot \frac{1 - \cos x}{x^2} \cdot \frac{1}{\cos x} = 1 \cdot \frac{1}{2} \cdot 1 = \frac{1}{2}$$

---

## 1.5 The Squeeze Theorem

### Statement

If $g(x) \leq f(x) \leq h(x)$ for all $x$ near $c$ (except possibly at $c$), and:
$$\lim_{x \to c} g(x) = \lim_{x \to c} h(x) = L$$

then:
$$\lim_{x \to c} f(x) = L$$

### Proof (BC-Level)

**Given:** $g(x) \leq f(x) \leq h(x)$ near $c$, and $\lim_{x \to c} g(x) = \lim_{x \to c} h(x) = L$

**To prove:** $\lim_{x \to c} f(x) = L$

**Proof:**

Let $\varepsilon > 0$ be given.

Since $\lim_{x \to c} g(x) = L$, there exists $\delta_1 > 0$ such that:
$$0 < |x - c| < \delta_1 \implies |g(x) - L| < \varepsilon$$

This means $L - \varepsilon < g(x) < L + \varepsilon$.

Since $\lim_{x \to c} h(x) = L$, there exists $\delta_2 > 0$ such that:
$$0 < |x - c| < \delta_2 \implies |h(x) - L| < \varepsilon$$

This means $L - \varepsilon < h(x) < L + \varepsilon$.

Let $\delta = \min(\delta_1, \delta_2)$.

For $0 < |x - c| < \delta$:
$$L - \varepsilon < g(x) \leq f(x) \leq h(x) < L + \varepsilon$$

Therefore:
$$|f(x) - L| < \varepsilon$$

This proves $\lim_{x \to c} f(x) = L$ ∎

### Classic Application

**Prove that** $\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right) = 0$

**Solution:**

We know that $-1 \leq \sin\left(\frac{1}{x}\right) \leq 1$ for all $x \neq 0$.

Multiplying by $x^2$ (which is non-negative):
$$-x^2 \leq x^2 \sin\left(\frac{1}{x}\right) \leq x^2$$

Since $\lim_{x \to 0} (-x^2) = 0$ and $\lim_{x \to 0} x^2 = 0$:

By the Squeeze Theorem:
$$\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right) = 0$$

---

## 1.6 Continuity

### Definition of Continuity at a Point

A function $f$ is **continuous at** $x = c$ if all three conditions hold:

1. $f(c)$ is defined
2. $\lim_{x \to c} f(x)$ exists
3. $\lim_{x \to c} f(x) = f(c)$

**Epsilon-Delta Definition:**
$f$ is continuous at $c$ if for every $\varepsilon > 0$, there exists $\delta > 0$ such that:
$$|x - c| < \delta \implies |f(x) - f(c)| < \varepsilon$$

Note: Unlike the limit definition, we include $x = c$ here.

### Types of Discontinuities

| Type | Description | Example |
|------|-------------|---------|
| **Removable** | Limit exists but $f(c)$ undefined or $\neq$ limit | $\frac{x^2-1}{x-1}$ at $x=1$ |
| **Jump** | One-sided limits exist but are different | Step functions |
| **Infinite** | One or both one-sided limits are $\pm\infty$ | $\frac{1}{x}$ at $x=0$ |
| **Oscillatory** | Limit doesn't exist due to oscillation | $\sin\left(\frac{1}{x}\right)$ at $x=0$ |

### Continuity on an Interval

- **Continuous on an open interval** $(a, b)$: Continuous at every point in the interval
- **Continuous on a closed interval** $[a, b]$: Continuous on $(a, b)$, right-continuous at $a$, left-continuous at $b$

### Properties of Continuous Functions

If $f$ and $g$ are continuous at $c$, then:

1. $f + g$ is continuous at $c$
2. $f - g$ is continuous at $c$
3. $f \cdot g$ is continuous at $c$
4. $\frac{f}{g}$ is continuous at $c$ (if $g(c) \neq 0$)
5. $f \circ g$ is continuous at $c$ (if $g$ is continuous at $c$ and $f$ is continuous at $g(c)$)

### Continuous Function Families

These functions are continuous on their domains:

- **Polynomials:** All real numbers
- **Rational functions:** Where denominator $\neq 0$
- **Trigonometric:** $\sin x$, $\cos x$ everywhere; $\tan x$, $\sec x$ where defined
- **Exponential:** $e^x$, $a^x$ ($a > 0$) everywhere
- **Logarithmic:** $\ln x$, $\log_a x$ for $x > 0$
- **Root functions:** $\sqrt[n]{x}$ on appropriate domain

---

## 1.7 The Intermediate Value Theorem (IVT)

### Statement

If $f$ is continuous on $[a, b]$ and $k$ is any value between $f(a)$ and $f(b)$, then there exists at least one $c \in (a, b)$ such that $f(c) = k$.

### Graphical Interpretation

A continuous function cannot "jump over" any value. If you draw the graph without lifting your pen, you must cross every horizontal line between $f(a)$ and $f(b)$.

### Application: Root Finding

**Example:** Prove that $x^3 - x - 1 = 0$ has a solution in $(1, 2)$.

**Solution:**

Let $f(x) = x^3 - x - 1$

- $f(1) = 1 - 1 - 1 = -1 < 0$
- $f(2) = 8 - 2 - 1 = 5 > 0$

Since $f$ is a polynomial (continuous everywhere) and $f(1) < 0 < f(2)$:

By IVT, there exists $c \in (1, 2)$ such that $f(c) = 0$ ∎

### Using IVT to Narrow Down Roots

We can use bisection to approximate:
- $f(1.5) = 3.375 - 1.5 - 1 = 0.875 > 0$

So the root is in $(1, 1.5)$.

- $f(1.25) = 1.953 - 1.25 - 1 = -0.297 < 0$

So the root is in $(1.25, 1.5)$.

Continuing this process gives increasingly accurate approximations.

---

## 1.8 Infinite Limits and Vertical Asymptotes

### Definition of Infinite Limits

$$\lim_{x \to c} f(x) = \infty$$

means that $f(x)$ grows without bound as $x \to c$.

**Formal Definition:**
For every $M > 0$, there exists $\delta > 0$ such that:
$$0 < |x - c| < \delta \implies f(x) > M$$

Similarly for $-\infty$.

### Vertical Asymptotes

The line $x = c$ is a **vertical asymptote** of $f$ if:
$$\lim_{x \to c^+} f(x) = \pm\infty \text{ or } \lim_{x \to c^-} f(x) = \pm\infty$$

### Finding Vertical Asymptotes

For rational functions $\frac{p(x)}{q(x)}$:

1. Factor completely
2. Cancel common factors (these are holes, not asymptotes)
3. Remaining zeros of denominator are vertical asymptotes

**Example:**
$$f(x) = \frac{x^2 - 4}{x^2 - x - 2} = \frac{(x-2)(x+2)}{(x-2)(x+1)} = \frac{x+2}{x+1}, \quad x \neq 2$$

- Hole at $x = 2$ (removable discontinuity)
- Vertical asymptote at $x = -1$

### Behavior Near Vertical Asymptotes

**Example:** Analyze $f(x) = \frac{1}{x-2}$ near $x = 2$

- As $x \to 2^+$: denominator is small and positive, so $f(x) \to +\infty$
- As $x \to 2^-$: denominator is small and negative, so $f(x) \to -\infty$

---

## 1.9 Limits at Infinity and Horizontal Asymptotes

### Definition

$$\lim_{x \to \infty} f(x) = L$$

means that $f(x)$ approaches $L$ as $x$ grows without bound.

**Formal Definition:**
For every $\varepsilon > 0$, there exists $N > 0$ such that:
$$x > N \implies |f(x) - L| < \varepsilon$$

### Horizontal Asymptotes

The line $y = L$ is a **horizontal asymptote** of $f$ if:
$$\lim_{x \to \infty} f(x) = L \text{ or } \lim_{x \to -\infty} f(x) = L$$

### Rules for Rational Functions

For $f(x) = \frac{a_n x^n + \ldots + a_0}{b_m x^m + \ldots + b_0}$:

| Condition | Limit as $x \to \pm\infty$ |
|-----------|---------------------------|
| $n < m$ | $0$ |
| $n = m$ | $\frac{a_n}{b_m}$ |
| $n > m$ | $\pm\infty$ (no horizontal asymptote) |

### Technique: Divide by Highest Power

**Example:**
$$\lim_{x \to \infty} \frac{3x^2 - 2x + 1}{5x^2 + 4x - 3}$$

**Solution:**
$$= \lim_{x \to \infty} \frac{3 - \frac{2}{x} + \frac{1}{x^2}}{5 + \frac{4}{x} - \frac{3}{x^2}} = \frac{3 - 0 + 0}{5 + 0 - 0} = \frac{3}{5}$$

### Exponential Dominance

For limits involving exponentials:

$$\lim_{x \to \infty} \frac{x^n}{e^x} = 0 \quad \text{for any } n$$

$$\lim_{x \to \infty} \frac{\ln x}{x^p} = 0 \quad \text{for any } p > 0$$

**Ordering of growth rates:**
$$\ln x \ll x^p \ll e^x \ll x! \ll x^x$$

---

## 1.10 L'Hôpital's Rule (BC Topic)

### Statement

If $\lim_{x \to c} \frac{f(x)}{g(x)}$ is of the form $\frac{0}{0}$ or $\frac{\pm\infty}{\pm\infty}$, and $f$ and $g$ are differentiable near $c$ with $g'(x) \neq 0$, then:

$$\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}$$

provided the limit on the right exists (or is $\pm\infty$).

### Important Notes

1. Verify the indeterminate form FIRST
2. The rule applies to $c = \pm\infty$ as well
3. May need to apply multiple times
4. Not all limits require L'Hôpital's Rule—simpler methods may work

### Worked Examples

**Example 1:** $\lim_{x \to 0} \frac{\sin x}{x}$ (form $\frac{0}{0}$)

$$= \lim_{x \to 0} \frac{\cos x}{1} = \frac{1}{1} = 1$$

**Example 2:** $\lim_{x \to \infty} \frac{\ln x}{x}$ (form $\frac{\infty}{\infty}$)

$$= \lim_{x \to \infty} \frac{1/x}{1} = \lim_{x \to \infty} \frac{1}{x} = 0$$

**Example 3:** $\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$ (form $\frac{0}{0}$)

First application:
$$= \lim_{x \to 0} \frac{e^x - 1}{2x}$$ (still $\frac{0}{0}$)

Second application:
$$= \lim_{x \to 0} \frac{e^x}{2} = \frac{1}{2}$$

### Other Indeterminate Forms

L'Hôpital's Rule directly handles $\frac{0}{0}$ and $\frac{\infty}{\infty}$. Other forms must be converted:

| Form | Conversion Strategy |
|------|-------------------|
| $0 \cdot \infty$ | Rewrite as $\frac{0}{1/\infty}$ or $\frac{\infty}{1/0}$ |
| $\infty - \infty$ | Find common denominator or factor |
| $0^0$, $\infty^0$, $1^\infty$ | Take logarithm: $y = f^g \Rightarrow \ln y = g \ln f$ |

**Example:** $\lim_{x \to 0^+} x \ln x$ (form $0 \cdot (-\infty)$)

$$= \lim_{x \to 0^+} \frac{\ln x}{1/x} = \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x) = 0$$

**Example:** $\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x$ (form $1^\infty$)

Let $y = \left(1 + \frac{1}{x}\right)^x$

$$\ln y = x \ln\left(1 + \frac{1}{x}\right) = \frac{\ln\left(1 + \frac{1}{x}\right)}{1/x}$$ (form $\frac{0}{0}$)

$$\lim_{x \to \infty} \ln y = \lim_{x \to \infty} \frac{\frac{-1/x^2}{1 + 1/x}}{-1/x^2} = \lim_{x \to \infty} \frac{1}{1 + 1/x} = 1$$

Therefore, $\lim_{x \to \infty} y = e^1 = e$

---

## 1.11 Connecting Limits to Calculus

### Preview: The Derivative

The derivative is defined as a limit:
$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

This represents the instantaneous rate of change—the slope of the tangent line.

### Preview: The Definite Integral

The definite integral is defined as a limit of Riemann sums:
$$\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i^*)\Delta x$$

This represents accumulated area under the curve.

---

## Practice Problems

### Section A: Basic Limit Evaluation

**1.** Evaluate: $\lim_{x \to 4} \frac{x^2 - 16}{x - 4}$

**2.** Evaluate: $\lim_{x \to 0} \frac{\sin(5x)}{\sin(3x)}$

**3.** Evaluate: $\lim_{x \to 1} \frac{x^3 - 1}{x^2 - 1}$

**4.** Evaluate: $\lim_{x \to 0} \frac{\sqrt{1+x} - 1}{x}$

**5.** Evaluate: $\lim_{x \to \infty} \frac{2x^3 - x + 5}{4x^3 + 3x^2 - 1}$

### Section B: Squeeze Theorem and Special Limits

**6.** Use the Squeeze Theorem to find: $\lim_{x \to 0} x^4 \cos\left(\frac{2}{x}\right)$

**7.** Evaluate: $\lim_{x \to 0} \frac{\sin^2(3x)}{x^2}$

**8.** Evaluate: $\lim_{x \to 0} \frac{1 - \cos(2x)}{x \sin x}$

### Section C: Continuity

**9.** For what value of $k$ is the function continuous?
$$f(x) = \begin{cases} x^2 + k & x \leq 2 \\ 3x + 1 & x > 2 \end{cases}$$

**10.** Classify the discontinuity of $f(x) = \frac{|x|}{x}$ at $x = 0$.

### Section D: Infinite Limits and Asymptotes

**11.** Find all vertical and horizontal asymptotes of:
$$f(x) = \frac{2x^2 - 8}{x^2 - 5x + 6}$$

**12.** Evaluate: $\lim_{x \to 3^+} \frac{x + 1}{x^2 - 9}$

### Section E: L'Hôpital's Rule (BC)

**13.** Evaluate: $\lim_{x \to 0} \frac{e^x - e^{-x} - 2x}{x - \sin x}$

**14.** Evaluate: $\lim_{x \to 0^+} x^x$

**15.** Evaluate: $\lim_{x \to \infty} x^2 e^{-x}$

### Section F: Epsilon-Delta (BC)

**16.** Prove using epsilon-delta: $\lim_{x \to 2} (5x - 3) = 7$

**17.** Prove using epsilon-delta: $\lim_{x \to 4} \sqrt{x} = 2$

---

## Solutions to Practice Problems

### Solution 1
$$\lim_{x \to 4} \frac{x^2 - 16}{x - 4} = \lim_{x \to 4} \frac{(x-4)(x+4)}{x-4} = \lim_{x \to 4} (x+4) = 8$$

### Solution 2
$$\lim_{x \to 0} \frac{\sin(5x)}{\sin(3x)} = \lim_{x \to 0} \frac{\sin(5x)}{5x} \cdot \frac{3x}{\sin(3x)} \cdot \frac{5}{3} = 1 \cdot 1 \cdot \frac{5}{3} = \frac{5}{3}$$

### Solution 3
$$\lim_{x \to 1} \frac{x^3 - 1}{x^2 - 1} = \lim_{x \to 1} \frac{(x-1)(x^2+x+1)}{(x-1)(x+1)} = \lim_{x \to 1} \frac{x^2+x+1}{x+1} = \frac{3}{2}$$

### Solution 4
$$\lim_{x \to 0} \frac{\sqrt{1+x} - 1}{x} \cdot \frac{\sqrt{1+x} + 1}{\sqrt{1+x} + 1} = \lim_{x \to 0} \frac{x}{x(\sqrt{1+x} + 1)} = \frac{1}{2}$$

### Solution 5
$$\lim_{x \to \infty} \frac{2x^3 - x + 5}{4x^3 + 3x^2 - 1} = \lim_{x \to \infty} \frac{2 - \frac{1}{x^2} + \frac{5}{x^3}}{4 + \frac{3}{x} - \frac{1}{x^3}} = \frac{2}{4} = \frac{1}{2}$$

### Solution 6
Since $-1 \leq \cos\left(\frac{2}{x}\right) \leq 1$:
$$-x^4 \leq x^4 \cos\left(\frac{2}{x}\right) \leq x^4$$

Both bounds approach 0 as $x \to 0$, so by Squeeze Theorem, the limit is **0**.

### Solution 7
$$\lim_{x \to 0} \frac{\sin^2(3x)}{x^2} = \lim_{x \to 0} \left(\frac{\sin(3x)}{x}\right)^2 = \left(\lim_{x \to 0} \frac{\sin(3x)}{3x} \cdot 3\right)^2 = (1 \cdot 3)^2 = 9$$

### Solution 8
$$\lim_{x \to 0} \frac{1 - \cos(2x)}{x \sin x} = \lim_{x \to 0} \frac{2\sin^2 x}{x \sin x} = \lim_{x \to 0} \frac{2\sin x}{x} = 2$$

### Solution 9
For continuity at $x = 2$:
$$\lim_{x \to 2^-} (x^2 + k) = 4 + k$$
$$\lim_{x \to 2^+} (3x + 1) = 7$$

Setting equal: $4 + k = 7 \Rightarrow k = 3$

### Solution 10
- $\lim_{x \to 0^+} \frac{|x|}{x} = \frac{x}{x} = 1$
- $\lim_{x \to 0^-} \frac{|x|}{x} = \frac{-x}{x} = -1$

Since one-sided limits exist but are unequal, this is a **jump discontinuity**.

### Solution 11
$$f(x) = \frac{2x^2 - 8}{x^2 - 5x + 6} = \frac{2(x-2)(x+2)}{(x-2)(x-3)}$$

- Hole at $x = 2$
- **Vertical asymptote:** $x = 3$
- **Horizontal asymptote:** $y = 2$ (degrees equal, ratio of leading coefficients)

### Solution 12
$$\lim_{x \to 3^+} \frac{x + 1}{(x-3)(x+3)}$$

As $x \to 3^+$: numerator $\to 4$, $(x-3) \to 0^+$, $(x+3) \to 6$

$$= \frac{4}{0^+ \cdot 6} = +\infty$$

### Solution 13
Form: $\frac{0}{0}$

First derivative: $\frac{e^x + e^{-x} - 2}{1 - \cos x}$ (still $\frac{0}{0}$)

Second derivative: $\frac{e^x - e^{-x}}{\sin x}$ (still $\frac{0}{0}$)

Third derivative: $\frac{e^x + e^{-x}}{\cos x} = \frac{2}{1} = 2$

### Solution 14
Let $y = x^x$, so $\ln y = x \ln x$

$$\lim_{x \to 0^+} x \ln x = \lim_{x \to 0^+} \frac{\ln x}{1/x} \stackrel{L'H}{=} \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x) = 0$$

Therefore, $\lim_{x \to 0^+} x^x = e^0 = 1$

### Solution 15
Form: $\infty \cdot 0$ — rewrite as $\frac{x^2}{e^x}$ (form $\frac{\infty}{\infty}$)

Apply L'Hôpital's twice:
$$\lim_{x \to \infty} \frac{x^2}{e^x} \stackrel{L'H}{=} \lim_{x \to \infty} \frac{2x}{e^x} \stackrel{L'H}{=} \lim_{x \to \infty} \frac{2}{e^x} = 0$$

### Solution 16
We want: $|5x - 3 - 7| = |5x - 10| = 5|x - 2| < \varepsilon$

This requires $|x - 2| < \frac{\varepsilon}{5}$

Choose $\delta = \frac{\varepsilon}{5}$. Then if $0 < |x - 2| < \delta$:
$$|5x - 3 - 7| = 5|x - 2| < 5 \cdot \frac{\varepsilon}{5} = \varepsilon$$ ∎

### Solution 17
We want: $|\sqrt{x} - 2| < \varepsilon$

Note: $|\sqrt{x} - 2| = \frac{|x - 4|}{|\sqrt{x} + 2|}$

If $|x - 4| < 1$, then $x \in (3, 5)$, so $\sqrt{x} + 2 > \sqrt{3} + 2 > 3$

Thus: $|\sqrt{x} - 2| < \frac{|x - 4|}{3}$

Choose $\delta = \min(1, 3\varepsilon)$. Then if $0 < |x - 4| < \delta$:
$$|\sqrt{x} - 2| < \frac{\delta}{3} \leq \varepsilon$$ ∎

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Applying L'Hôpital's Without Checking Form
**Wrong:** Using L'Hôpital's on $\lim_{x \to 1} \frac{x^2}{x+1}$

**Why:** This is NOT indeterminate—just substitute: $\frac{1}{2}$

### ❌ Mistake 2: Confusing $\lim_{x \to c} f(x)$ with $f(c)$
**Example:** $\lim_{x \to 2} \frac{x^2-4}{x-2} = 4$, but $f(2)$ is undefined

The limit describes approach, not arrival.

### ❌ Mistake 3: Wrong Direction in One-Sided Limits
**Remember:**
- $x \to c^+$ means from the RIGHT (values > c)
- $x \to c^-$ means from the LEFT (values < c)

### ❌ Mistake 4: Canceling Before Checking
**Wrong:** Immediately canceling $(x-2)$ in $\frac{x-2}{x^2-4}$

**Right:** First recognize this equals $\frac{1}{x+2}$ for $x \neq 2$

### ❌ Mistake 5: Assuming Horizontal Asymptote is Never Crossed
Functions CAN cross their horizontal asymptotes! They just approach them as $x \to \pm\infty$.

### ❌ Mistake 6: Forgetting Absolute Value in Epsilon-Delta
When working with $|x - c| < \delta$, the absolute value ensures we consider both sides.

---

## AP Exam Tips

### 📝 Multiple Choice Strategy
- **Direct substitution first**—many limits don't require fancy techniques
- Watch for disguised forms of $\frac{\sin x}{x}$ and similar
- Check if answer choices suggest a particular form

### 📝 Free Response Strategy
1. **Show your work**—justify each step
2. **State the theorem** you're using (IVT, Squeeze, L'Hôpital's)
3. **Verify conditions** before applying theorems
4. For epsilon-delta proofs, clearly state your choice of $\delta$

### 📝 Calculator Notes
- Graphing can suggest the limit value
- Tables near the limit point help verify
- But algebraic work is usually required for full credit

### 📝 Time Management
- Limits questions typically take 1-2 minutes each (MC)
- Epsilon-delta proofs on FR can take 5-8 minutes
- IVT applications are usually quick (2-3 minutes)

### 📝 Common BC-Specific Topics
- L'Hôpital's Rule is exclusively BC
- Epsilon-delta proofs appear more often on BC
- Expect more complex indeterminate forms

---

## Summary Table

| Concept | Key Formula/Definition |
|---------|----------------------|
| Limit Definition | $\lim_{x \to c} f(x) = L$ |
| Epsilon-Delta | $0 < \|x-c\| < \delta \Rightarrow \|f(x)-L\| < \varepsilon$ |
| One-Sided | $\lim_{x \to c^-}$, $\lim_{x \to c^+}$ |
| Continuity | $\lim_{x \to c} f(x) = f(c)$ |
| Squeeze Theorem | $g \leq f \leq h$, $\lim g = \lim h = L \Rightarrow \lim f = L$ |
| IVT | Continuous on $[a,b]$ → hits all values between $f(a)$ and $f(b)$ |
| L'Hôpital's | $\frac{0}{0}$ or $\frac{\infty}{\infty}$: $\lim \frac{f}{g} = \lim \frac{f'}{g'}$ |
| Vertical Asymptote | $\lim_{x \to c} f(x) = \pm\infty$ |
| Horizontal Asymptote | $\lim_{x \to \pm\infty} f(x) = L$ |

---

## Quick Reference: Indeterminate Forms

| Form | Determinate? | Strategy |
|------|--------------|----------|
| $\frac{0}{0}$ | Indeterminate | Factor, rationalize, or L'Hôpital's |
| $\frac{\infty}{\infty}$ | Indeterminate | Divide by highest power or L'Hôpital's |
| $\frac{c}{0}$ ($c \neq 0$) | $\pm\infty$ | Analyze signs |
| $0 \cdot \infty$ | Indeterminate | Rewrite as quotient |
| $\infty - \infty$ | Indeterminate | Common denominator or factor |
| $0^0$ | Indeterminate | Use logarithm |
| $\infty^0$ | Indeterminate | Use logarithm |
| $1^\infty$ | Indeterminate | Use logarithm |
| $0^\infty$ | $= 0$ | Determinate |
| $\infty^\infty$ | $= \infty$ | Determinate |

---

*Master limits, and you master the gateway to all of calculus!*

:::GUIDE:::
