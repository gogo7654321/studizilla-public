:::GUIDE:::
unit::=2
title::=📐 Unit 2: Differentiation Definition and Properties
desc::=Master derivative definitions, rules, and fundamental properties
diff::=Medium-Hard
time::=50 min
tags::=calculus,bc,derivatives,differentiation
content::=

# 📐 Unit 2: Differentiation - Definition and Fundamental Properties

Master the foundational concepts of differentiation, from the limit definition to essential rules that form the backbone of calculus.

---

## 📚 Unit Overview

Differentiation is the mathematical study of rates of change. This unit establishes the rigorous foundation for derivatives and develops the essential rules you'll use throughout calculus.

### What You'll Learn
- The formal limit definition of a derivative
- Geometric and physical interpretations
- Basic differentiation rules
- Product and quotient rules
- Relationship between differentiability and continuity
- Higher-order derivatives

### Prerequisites
- Limits and continuity (Unit 1)
- Function notation and algebra
- Basic trigonometry

---

## 🎯 Section 1: The Derivative Definition

### 1.1 The Limit Definition of the Derivative

The derivative of a function $f(x)$ at a point $x = a$ is defined as:

$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$$

This is called the **limit definition** or **difference quotient** form.

#### Alternative Form (Point-to-Point)

$$f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$

Both definitions are equivalent and give the same result.

### 1.2 Understanding the Difference Quotient

The expression $\frac{f(a + h) - f(a)}{h}$ represents:

| Component | Meaning |
|-----------|---------|
| $f(a + h) - f(a)$ | Change in $y$ (rise) |
| $h$ | Change in $x$ (run) |
| Entire fraction | Slope of secant line |

As $h \to 0$, the secant line approaches the **tangent line**.

### 1.3 Notation for Derivatives

Several notations are used interchangeably:

| Notation | Read As | Common Usage |
|----------|---------|--------------|
| $f'(x)$ | "f prime of x" | General use |
| $\frac{dy}{dx}$ | "dy dx" | Leibniz notation |
| $\frac{d}{dx}[f(x)]$ | "d dx of f(x)" | Operator form |
| $y'$ | "y prime" | Quick notation |
| $Df(x)$ | "D of f(x)" | Operator notation |
| $\dot{y}$ | "y dot" | Physics (time) |

> 💡 **AP Tip**: The AP exam uses all notations. Be comfortable switching between them!

---

## 📊 Section 2: Derivative as Rate of Change

### 2.1 Instantaneous Rate of Change

The derivative $f'(a)$ represents the **instantaneous rate of change** of $f$ at $x = a$.

**Average Rate of Change** (over interval $[a, b]$):
$$\text{AROC} = \frac{f(b) - f(a)}{b - a}$$

**Instantaneous Rate of Change** (at point $a$):
$$\text{IROC} = f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$$

### 2.2 Geometric Interpretation

The derivative gives the **slope of the tangent line** to the curve at a point.

**Tangent Line Equation** at $(a, f(a))$:
$$y - f(a) = f'(a)(x - a)$$

Or in slope-intercept form:
$$y = f'(a)(x - a) + f(a)$$

### 2.3 Physical Interpretation

| Function | Derivative Represents |
|----------|----------------------|
| Position $s(t)$ | Velocity $v(t) = s'(t)$ |
| Velocity $v(t)$ | Acceleration $a(t) = v'(t)$ |
| Cost $C(x)$ | Marginal cost $C'(x)$ |
| Population $P(t)$ | Growth rate $P'(t)$ |

---

## 🔢 Section 3: Computing Derivatives from the Definition

### 3.1 Step-by-Step Process

To find $f'(x)$ using the limit definition:

1. Write $f(x + h)$
2. Compute $f(x + h) - f(x)$
3. Divide by $h$
4. Take the limit as $h \to 0$

### Example 1: Linear Function

Find the derivative of $f(x) = 3x + 2$.

**Solution:**
$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$

$$= \lim_{h \to 0} \frac{[3(x + h) + 2] - [3x + 2]}{h}$$

$$= \lim_{h \to 0} \frac{3x + 3h + 2 - 3x - 2}{h}$$

$$= \lim_{h \to 0} \frac{3h}{h} = \lim_{h \to 0} 3 = 3$$

Therefore, $f'(x) = 3$.

### Example 2: Quadratic Function

Find the derivative of $f(x) = x^2$.

**Solution:**
$$f'(x) = \lim_{h \to 0} \frac{(x + h)^2 - x^2}{h}$$

$$= \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h}$$

$$= \lim_{h \to 0} \frac{2xh + h^2}{h}$$

$$= \lim_{h \to 0} \frac{h(2x + h)}{h}$$

$$= \lim_{h \to 0} (2x + h) = 2x$$

Therefore, $f'(x) = 2x$.

### Example 3: Reciprocal Function

Find the derivative of $f(x) = \frac{1}{x}$.

**Solution:**
$$f'(x) = \lim_{h \to 0} \frac{\frac{1}{x + h} - \frac{1}{x}}{h}$$

$$= \lim_{h \to 0} \frac{\frac{x - (x + h)}{x(x + h)}}{h}$$

$$= \lim_{h \to 0} \frac{-h}{hx(x + h)}$$

$$= \lim_{h \to 0} \frac{-1}{x(x + h)} = \frac{-1}{x^2}$$

Therefore, $f'(x) = -\frac{1}{x^2}$.

### Example 4: Square Root Function

Find the derivative of $f(x) = \sqrt{x}$.

**Solution:**
$$f'(x) = \lim_{h \to 0} \frac{\sqrt{x + h} - \sqrt{x}}{h}$$

Rationalize the numerator:
$$= \lim_{h \to 0} \frac{\sqrt{x + h} - \sqrt{x}}{h} \cdot \frac{\sqrt{x + h} + \sqrt{x}}{\sqrt{x + h} + \sqrt{x}}$$

$$= \lim_{h \to 0} \frac{(x + h) - x}{h(\sqrt{x + h} + \sqrt{x})}$$

$$= \lim_{h \to 0} \frac{h}{h(\sqrt{x + h} + \sqrt{x})}$$

$$= \lim_{h \to 0} \frac{1}{\sqrt{x + h} + \sqrt{x}} = \frac{1}{2\sqrt{x}}$$

Therefore, $f'(x) = \frac{1}{2\sqrt{x}}$.

---

## 📐 Section 4: Basic Differentiation Rules

### 4.1 The Constant Rule

If $f(x) = c$ (constant), then:
$$\frac{d}{dx}[c] = 0$$

**Why?** Constants don't change, so their rate of change is zero.

### 4.2 The Power Rule

For any real number $n$:
$$\frac{d}{dx}[x^n] = nx^{n-1}$$

**Examples:**

| Function | Derivative |
|----------|------------|
| $x^5$ | $5x^4$ |
| $x^{-2}$ | $-2x^{-3}$ |
| $x^{1/2}$ | $\frac{1}{2}x^{-1/2}$ |
| $x^{-1/3}$ | $-\frac{1}{3}x^{-4/3}$ |
| $x^{\pi}$ | $\pi x^{\pi - 1}$ |

> 🎯 **Key Insight**: The power rule works for ALL real exponents, not just positive integers!

### 4.3 The Constant Multiple Rule

If $c$ is a constant:
$$\frac{d}{dx}[cf(x)] = c \cdot f'(x)$$

**Examples:**
- $\frac{d}{dx}[5x^3] = 5 \cdot 3x^2 = 15x^2$
- $\frac{d}{dx}[-7x^4] = -7 \cdot 4x^3 = -28x^3$

### 4.4 The Sum and Difference Rules

$$\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$$

$$\frac{d}{dx}[f(x) - g(x)] = f'(x) - g'(x)$$

**Example:**
Find $\frac{d}{dx}[3x^4 - 5x^2 + 7x - 2]$

**Solution:**
$$= 3(4x^3) - 5(2x) + 7(1) - 0$$
$$= 12x^3 - 10x + 7$$

### 4.5 Combining Rules

**Example:** Find the derivative of $f(x) = \frac{4}{x^3} - \frac{2}{\sqrt{x}} + 8$

First, rewrite using negative exponents:
$$f(x) = 4x^{-3} - 2x^{-1/2} + 8$$

Apply the rules:
$$f'(x) = 4(-3)x^{-4} - 2(-\frac{1}{2})x^{-3/2} + 0$$
$$= -12x^{-4} + x^{-3/2}$$
$$= -\frac{12}{x^4} + \frac{1}{x^{3/2}}$$

---

## ✖️ Section 5: The Product Rule

### 5.1 Statement of the Product Rule

If $f$ and $g$ are differentiable, then:
$$\frac{d}{dx}[f(x) \cdot g(x)] = f'(x) \cdot g(x) + f(x) \cdot g'(x)$$

**Memory Device:** "First times derivative of second, plus second times derivative of first"

Or using Leibniz notation:
$$\frac{d}{dx}[uv] = u\frac{dv}{dx} + v\frac{du}{dx}$$

### 5.2 Product Rule Examples

**Example 1:** Find $\frac{d}{dx}[(x^2)(x^3 + 1)]$

Let $f(x) = x^2$ and $g(x) = x^3 + 1$
- $f'(x) = 2x$
- $g'(x) = 3x^2$

$$\frac{d}{dx}[(x^2)(x^3 + 1)] = (2x)(x^3 + 1) + (x^2)(3x^2)$$
$$= 2x^4 + 2x + 3x^4 = 5x^4 + 2x$$

**Verification:** $(x^2)(x^3 + 1) = x^5 + x^2$, so derivative is $5x^4 + 2x$ ✓

**Example 2:** Find $\frac{d}{dx}[(3x + 2)(4x^2 - 5)]$

- $f(x) = 3x + 2$, $f'(x) = 3$
- $g(x) = 4x^2 - 5$, $g'(x) = 8x$

$$= (3)(4x^2 - 5) + (3x + 2)(8x)$$
$$= 12x^2 - 15 + 24x^2 + 16x$$
$$= 36x^2 + 16x - 15$$

**Example 3:** Find $\frac{d}{dx}[x^2 \sqrt{x}]$

Rewrite: $x^2 \cdot x^{1/2} = x^{5/2}$

Using power rule directly: $\frac{5}{2}x^{3/2}$

Or using product rule:
$$= (2x)(x^{1/2}) + (x^2)(\frac{1}{2}x^{-1/2})$$
$$= 2x^{3/2} + \frac{1}{2}x^{3/2} = \frac{5}{2}x^{3/2}$$ ✓

### 5.3 Triple Product Rule

For three functions:
$$\frac{d}{dx}[fgh] = f'gh + fg'h + fgh'$$

---

## ➗ Section 6: The Quotient Rule

### 6.1 Statement of the Quotient Rule

If $f$ and $g$ are differentiable and $g(x) \neq 0$:

$$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{[g(x)]^2}$$

**Memory Device:** "Low d-high minus high d-low, over low squared"

Or: "Bottom times derivative of top, minus top times derivative of bottom, all over bottom squared"

### 6.2 Quotient Rule Examples

**Example 1:** Find $\frac{d}{dx}\left[\frac{x^2 + 1}{x - 3}\right]$

- $f(x) = x^2 + 1$, $f'(x) = 2x$
- $g(x) = x - 3$, $g'(x) = 1$

$$= \frac{(2x)(x - 3) - (x^2 + 1)(1)}{(x - 3)^2}$$
$$= \frac{2x^2 - 6x - x^2 - 1}{(x - 3)^2}$$
$$= \frac{x^2 - 6x - 1}{(x - 3)^2}$$

**Example 2:** Find $\frac{d}{dx}\left[\frac{3x}{x^2 + 4}\right]$

- $f(x) = 3x$, $f'(x) = 3$
- $g(x) = x^2 + 4$, $g'(x) = 2x$

$$= \frac{(3)(x^2 + 4) - (3x)(2x)}{(x^2 + 4)^2}$$
$$= \frac{3x^2 + 12 - 6x^2}{(x^2 + 4)^2}$$
$$= \frac{12 - 3x^2}{(x^2 + 4)^2}$$
$$= \frac{3(4 - x^2)}{(x^2 + 4)^2}$$

**Example 3:** Find $\frac{d}{dx}\left[\frac{1}{x^2 + 1}\right]$

- $f(x) = 1$, $f'(x) = 0$
- $g(x) = x^2 + 1$, $g'(x) = 2x$

$$= \frac{(0)(x^2 + 1) - (1)(2x)}{(x^2 + 1)^2}$$
$$= \frac{-2x}{(x^2 + 1)^2}$$

### 6.3 When to Avoid the Quotient Rule

Sometimes it's easier to rewrite and use the power rule:

**Example:** $\frac{d}{dx}\left[\frac{5}{x^3}\right]$

**Method 1 (Quotient Rule):** Lengthy calculation

**Method 2 (Rewrite):**
$$\frac{5}{x^3} = 5x^{-3}$$
$$\frac{d}{dx}[5x^{-3}] = 5(-3)x^{-4} = -\frac{15}{x^4}$$

> 💡 **AP Tip**: If the numerator is a constant, rewrite using negative exponents!

---

## 🔗 Section 7: Differentiability and Continuity

### 7.1 The Fundamental Relationship

**Theorem:** If $f$ is differentiable at $x = a$, then $f$ is continuous at $x = a$.

**Contrapositive:** If $f$ is not continuous at $x = a$, then $f$ is not differentiable at $x = a$.

> ⚠️ **Warning**: The converse is FALSE! A function can be continuous but not differentiable.

### 7.2 When Derivatives Don't Exist

A function fails to be differentiable at a point when:

| Case | Description | Example |
|------|-------------|---------|
| **Corner** | Sharp point | $f(x) = |x|$ at $x = 0$ |
| **Cusp** | Pointed peak | $f(x) = x^{2/3}$ at $x = 0$ |
| **Vertical Tangent** | Infinite slope | $f(x) = \sqrt[3]{x}$ at $x = 0$ |
| **Discontinuity** | Jump/hole/asymptote | $f(x) = \frac{1}{x}$ at $x = 0$ |

### 7.3 One-Sided Derivatives

The **left-hand derivative**:
$$f'_-(a) = \lim_{h \to 0^-} \frac{f(a + h) - f(a)}{h}$$

The **right-hand derivative**:
$$f'_+(a) = \lim_{h \to 0^+} \frac{f(a + h) - f(a)}{h}$$

**For differentiability at $x = a$:**
$$f'_-(a) = f'_+(a)$$

### 7.4 Example: Absolute Value Function

Show that $f(x) = |x|$ is not differentiable at $x = 0$.

**Solution:**

$$f(x) = |x| = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$$

Left-hand derivative at $x = 0$:
$$f'_-(0) = \lim_{h \to 0^-} \frac{|0 + h| - |0|}{h} = \lim_{h \to 0^-} \frac{-h}{h} = -1$$

Right-hand derivative at $x = 0$:
$$f'_+(0) = \lim_{h \to 0^+} \frac{|0 + h| - |0|}{h} = \lim_{h \to 0^+} \frac{h}{h} = 1$$

Since $f'_-(0) = -1 \neq 1 = f'_+(0)$, the function is not differentiable at $x = 0$.

### 7.5 Piecewise Functions

For a piecewise function to be differentiable at a boundary point:
1. It must be continuous there
2. Left and right derivatives must be equal

**Example:** Is $f(x) = \begin{cases} x^2 & \text{if } x \leq 1 \\ 2x - 1 & \text{if } x > 1 \end{cases}$ differentiable at $x = 1$?

**Check continuity:**
- $\lim_{x \to 1^-} x^2 = 1$
- $\lim_{x \to 1^+} (2x - 1) = 1$
- $f(1) = 1^2 = 1$

Continuous ✓

**Check derivatives:**
- Left: $f'(x) = 2x$ for $x < 1$, so $f'_-(1) = 2$
- Right: $f'(x) = 2$ for $x > 1$, so $f'_+(1) = 2$

Since $f'_-(1) = f'_+(1) = 2$, the function is differentiable at $x = 1$.

---

## 📈 Section 8: Higher-Order Derivatives

### 8.1 Definition

The **second derivative** is the derivative of the first derivative:
$$f''(x) = \frac{d}{dx}[f'(x)]$$

**Notations for higher derivatives:**

| Order | Prime Notation | Leibniz Notation |
|-------|----------------|------------------|
| 1st | $f'(x)$ | $\frac{dy}{dx}$ |
| 2nd | $f''(x)$ | $\frac{d^2y}{dx^2}$ |
| 3rd | $f'''(x)$ | $\frac{d^3y}{dx^3}$ |
| nth | $f^{(n)}(x)$ | $\frac{d^ny}{dx^n}$ |

### 8.2 Computing Higher Derivatives

**Example 1:** Find all derivatives of $f(x) = x^5 - 3x^3 + 2x$

$$f'(x) = 5x^4 - 9x^2 + 2$$
$$f''(x) = 20x^3 - 18x$$
$$f'''(x) = 60x^2 - 18$$
$$f^{(4)}(x) = 120x$$
$$f^{(5)}(x) = 120$$
$$f^{(6)}(x) = 0$$

All subsequent derivatives are also 0.

**Example 2:** Find the first four derivatives of $f(x) = \frac{1}{x}$

$$f(x) = x^{-1}$$
$$f'(x) = -x^{-2} = -\frac{1}{x^2}$$
$$f''(x) = 2x^{-3} = \frac{2}{x^3}$$
$$f'''(x) = -6x^{-4} = -\frac{6}{x^4}$$
$$f^{(4)}(x) = 24x^{-5} = \frac{24}{x^5}$$

**Pattern:** $f^{(n)}(x) = \frac{(-1)^n \cdot n!}{x^{n+1}}$

### 8.3 Physical Interpretation

| Derivative | Position Context | Meaning |
|------------|------------------|---------|
| $s(t)$ | Position | Location |
| $s'(t) = v(t)$ | Velocity | Speed and direction |
| $s''(t) = a(t)$ | Acceleration | Rate of velocity change |
| $s'''(t)$ | Jerk | Rate of acceleration change |

### 8.4 Second Derivative and Concavity

| Condition | Meaning |
|-----------|---------|
| $f''(x) > 0$ | Concave up (opens upward) |
| $f''(x) < 0$ | Concave down (opens downward) |
| $f''(x) = 0$ | Possible inflection point |

---

## 🧮 Section 9: Derivatives of Trigonometric Functions

### 9.1 Basic Trigonometric Derivatives

| Function | Derivative |
|----------|------------|
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| $\csc x$ | $-\csc x \cot x$ |

> 🎯 **Memory Pattern**: Functions starting with "co" have negative derivatives!

### 9.2 Deriving sin x and cos x

Using the limit definition:
$$\frac{d}{dx}[\sin x] = \lim_{h \to 0} \frac{\sin(x + h) - \sin x}{h}$$

Using the angle addition formula: $\sin(x + h) = \sin x \cos h + \cos x \sin h$

$$= \lim_{h \to 0} \frac{\sin x \cos h + \cos x \sin h - \sin x}{h}$$

$$= \lim_{h \to 0} \left[\sin x \cdot \frac{\cos h - 1}{h} + \cos x \cdot \frac{\sin h}{h}\right]$$

Using special limits: $\lim_{h \to 0} \frac{\sin h}{h} = 1$ and $\lim_{h \to 0} \frac{\cos h - 1}{h} = 0$

$$= \sin x \cdot 0 + \cos x \cdot 1 = \cos x$$

### 9.3 Deriving tan x, sec x, etc.

**Tangent:** Using quotient rule
$$\frac{d}{dx}[\tan x] = \frac{d}{dx}\left[\frac{\sin x}{\cos x}\right]$$

$$= \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x}$$

$$= \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x$$

### 9.4 Examples with Trigonometric Functions

**Example 1:** Find $\frac{d}{dx}[x^2 \sin x]$

Using product rule:
$$= 2x \sin x + x^2 \cos x$$

**Example 2:** Find $\frac{d}{dx}\left[\frac{\tan x}{x}\right]$

Using quotient rule:
$$= \frac{x \sec^2 x - \tan x}{x^2}$$

**Example 3:** Find $\frac{d}{dx}[\sin x \cos x]$

Using product rule:
$$= \cos x \cdot \cos x + \sin x \cdot (-\sin x)$$
$$= \cos^2 x - \sin^2 x = \cos(2x)$$

---

## 📊 Section 10: Derivatives of Exponential and Logarithmic Functions

### 10.1 The Natural Exponential Function

$$\frac{d}{dx}[e^x] = e^x$$

This is the only function equal to its own derivative!

### 10.2 General Exponential Functions

For any positive constant $a$:
$$\frac{d}{dx}[a^x] = a^x \ln a$$

**Special cases:**
- $\frac{d}{dx}[2^x] = 2^x \ln 2$
- $\frac{d}{dx}[10^x] = 10^x \ln 10$

### 10.3 Natural Logarithm

$$\frac{d}{dx}[\ln x] = \frac{1}{x}, \quad x > 0$$

**With absolute value:**
$$\frac{d}{dx}[\ln|x|] = \frac{1}{x}, \quad x \neq 0$$

### 10.4 General Logarithmic Functions

$$\frac{d}{dx}[\log_a x] = \frac{1}{x \ln a}$$

**Examples:**
- $\frac{d}{dx}[\log_{10} x] = \frac{1}{x \ln 10}$
- $\frac{d}{dx}[\log_2 x] = \frac{1}{x \ln 2}$

### 10.5 Examples

**Example 1:** Find $\frac{d}{dx}[x^2 e^x]$

Using product rule:
$$= 2x \cdot e^x + x^2 \cdot e^x = e^x(2x + x^2) = xe^x(2 + x)$$

**Example 2:** Find $\frac{d}{dx}\left[\frac{e^x}{x}\right]$

Using quotient rule:
$$= \frac{xe^x - e^x}{x^2} = \frac{e^x(x - 1)}{x^2}$$

**Example 3:** Find $\frac{d}{dx}[x \ln x]$

Using product rule:
$$= 1 \cdot \ln x + x \cdot \frac{1}{x} = \ln x + 1$$

---

## 📝 Section 11: Equation of Tangent and Normal Lines

### 11.1 Tangent Line

At point $(a, f(a))$, the tangent line equation is:
$$y - f(a) = f'(a)(x - a)$$

### 11.2 Normal Line

The **normal line** is perpendicular to the tangent line.

If $f'(a) \neq 0$, the normal line equation is:
$$y - f(a) = -\frac{1}{f'(a)}(x - a)$$

### 11.3 Examples

**Example 1:** Find the tangent line to $f(x) = x^2 - 3x + 1$ at $x = 2$.

- $f(2) = 4 - 6 + 1 = -1$
- $f'(x) = 2x - 3$
- $f'(2) = 4 - 3 = 1$

Tangent line: $y - (-1) = 1(x - 2)$
$$y = x - 3$$

**Example 2:** Find both tangent and normal lines to $f(x) = \sqrt{x}$ at $x = 4$.

- $f(4) = 2$
- $f'(x) = \frac{1}{2\sqrt{x}}$
- $f'(4) = \frac{1}{4}$

Tangent: $y - 2 = \frac{1}{4}(x - 4)$ → $y = \frac{1}{4}x + 1$

Normal: $y - 2 = -4(x - 4)$ → $y = -4x + 18$

---

## ✏️ Practice Problems

### Basic Differentiation

**Problem 1:** Find $f'(x)$ using the limit definition for $f(x) = 3x^2 - 2x$.

**Problem 2:** Differentiate: $g(x) = 5x^4 - 3x^3 + 2x^{-2} + 7$

**Problem 3:** Find $\frac{dy}{dx}$: $y = \sqrt[3]{x^5} - \frac{4}{x^2}$

### Product and Quotient Rules

**Problem 4:** Find $\frac{d}{dx}[(2x^3 - 1)(x^2 + 3)]$

**Problem 5:** Find $\frac{d}{dx}\left[\frac{x^2 - 4}{x + 1}\right]$

**Problem 6:** Find $\frac{d}{dx}[x^2 \tan x]$

### Higher-Order Derivatives

**Problem 7:** Find $f'''(x)$ if $f(x) = x^5 - 2x^3 + x$

**Problem 8:** Find $\frac{d^2y}{dx^2}$ if $y = \frac{1}{x^2}$

### Tangent Lines

**Problem 9:** Find the equation of the tangent line to $y = x^3 - 4x$ at $x = 2$.

**Problem 10:** At what point(s) on the curve $y = x^3$ is the tangent line parallel to the line $y = 12x + 5$?

### Differentiability

**Problem 11:** Is $f(x) = \begin{cases} x^2 + 1 & \text{if } x \leq 2 \\ 4x - 3 & \text{if } x > 2 \end{cases}$ differentiable at $x = 2$?

**Problem 12:** For what values of $a$ and $b$ is $g(x) = \begin{cases} ax^2 & \text{if } x \leq 1 \\ bx + 2 & \text{if } x > 1 \end{cases}$ differentiable at $x = 1$?

---

## 📝 Practice Problem Solutions

### Solution 1
$$f'(x) = \lim_{h \to 0} \frac{3(x+h)^2 - 2(x+h) - (3x^2 - 2x)}{h}$$
$$= \lim_{h \to 0} \frac{3x^2 + 6xh + 3h^2 - 2x - 2h - 3x^2 + 2x}{h}$$
$$= \lim_{h \to 0} \frac{6xh + 3h^2 - 2h}{h} = \lim_{h \to 0}(6x + 3h - 2) = 6x - 2$$

### Solution 2
$$g'(x) = 20x^3 - 9x^2 - 4x^{-3} = 20x^3 - 9x^2 - \frac{4}{x^3}$$

### Solution 3
$$y = x^{5/3} - 4x^{-2}$$
$$\frac{dy}{dx} = \frac{5}{3}x^{2/3} + 8x^{-3} = \frac{5}{3}\sqrt[3]{x^2} + \frac{8}{x^3}$$

### Solution 4
$$= (6x^2)(x^2 + 3) + (2x^3 - 1)(2x)$$
$$= 6x^4 + 18x^2 + 4x^4 - 2x = 10x^4 + 18x^2 - 2x$$

### Solution 5
$$= \frac{2x(x + 1) - (x^2 - 4)(1)}{(x + 1)^2}$$
$$= \frac{2x^2 + 2x - x^2 + 4}{(x + 1)^2} = \frac{x^2 + 2x + 4}{(x + 1)^2}$$

### Solution 6
$$= 2x \tan x + x^2 \sec^2 x$$

### Solution 7
$$f'(x) = 5x^4 - 6x^2 + 1$$
$$f''(x) = 20x^3 - 12x$$
$$f'''(x) = 60x^2 - 12$$

### Solution 8
$$y = x^{-2}$$
$$\frac{dy}{dx} = -2x^{-3}$$
$$\frac{d^2y}{dx^2} = 6x^{-4} = \frac{6}{x^4}$$

### Solution 9
- $y(2) = 8 - 8 = 0$
- $y' = 3x^2 - 4$
- $y'(2) = 12 - 4 = 8$

Tangent line: $y - 0 = 8(x - 2)$ → $y = 8x - 16$

### Solution 10
We need $y' = 12$
$$3x^2 = 12$$
$$x^2 = 4$$
$$x = \pm 2$$

At $x = 2$: $(2, 8)$
At $x = -2$: $(-2, -8)$

### Solution 11
Check continuity at $x = 2$:
- $\lim_{x \to 2^-}(x^2 + 1) = 5$
- $\lim_{x \to 2^+}(4x - 3) = 5$
- $f(2) = 5$ ✓

Check derivatives:
- Left: $f'(x) = 2x$, so $f'_-(2) = 4$
- Right: $f'(x) = 4$, so $f'_+(2) = 4$

Yes, differentiable at $x = 2$.

### Solution 12
Continuity: $a(1)^2 = b(1) + 2$ → $a = b + 2$

Derivatives: $2ax = b$ at $x = 1$ → $2a = b$

From both equations: $a = b + 2$ and $2a = b$
$$2(b + 2) = b$$
$$2b + 4 = b$$
$$b = -4$$
$$a = -2$$

---

## 🎯 AP Exam Tips

### Common FRQ Types

1. **Finding derivatives** using definition or rules
2. **Tangent line equations** at specific points
3. **Interpreting derivatives** in context (rates of change)
4. **Analyzing differentiability** at boundary points

### Calculator vs. Non-Calculator

| Calculator Section | Non-Calculator Section |
|-------------------|----------------------|
| Evaluate derivatives numerically | Apply rules algebraically |
| Graph to visualize | Show all work |
| Verify answers | Simplify completely |

### Common Mistakes to Avoid

❌ Forgetting the minus sign in $\frac{d}{dx}[\cos x] = -\sin x$

❌ Incorrect quotient rule order (numerator terms)

❌ Not simplifying after applying rules

❌ Confusing $\frac{dy}{dx}$ with $\frac{\Delta y}{\Delta x}$

❌ Assuming continuous means differentiable

### Key Formulas to Memorize

| Formula | Type |
|---------|------|
| $\frac{d}{dx}[x^n] = nx^{n-1}$ | Power Rule |
| $(fg)' = f'g + fg'$ | Product Rule |
| $\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$ | Quotient Rule |
| $\frac{d}{dx}[e^x] = e^x$ | Exponential |
| $\frac{d}{dx}[\ln x] = \frac{1}{x}$ | Logarithmic |

---

## 🔗 Connections to Other Units

| This Unit | Connects To |
|-----------|-------------|
| Derivative definition | Unit 3: Chain Rule |
| Derivative as rate | Unit 4: Related Rates |
| Tangent lines | Unit 5: Linearization |
| Higher derivatives | Unit 8: Parametric derivatives |
| Product/Quotient rules | Unit 6: Integration |

---

## 📋 Quick Reference Card

### Essential Derivatives

$$\frac{d}{dx}[c] = 0 \quad \frac{d}{dx}[x^n] = nx^{n-1}$$

$$\frac{d}{dx}[e^x] = e^x \quad \frac{d}{dx}[\ln x] = \frac{1}{x}$$

$$\frac{d}{dx}[\sin x] = \cos x \quad \frac{d}{dx}[\cos x] = -\sin x$$

$$\frac{d}{dx}[\tan x] = \sec^2 x \quad \frac{d}{dx}[\sec x] = \sec x \tan x$$

### Derivative Rules

**Sum/Difference:** $(f \pm g)' = f' \pm g'$

**Constant Multiple:** $(cf)' = cf'$

**Product:** $(fg)' = f'g + fg'$

**Quotient:** $\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$

### Differentiability Conditions

1. Function must be continuous
2. Left derivative equals right derivative
3. No corners, cusps, or vertical tangents

---

## 🏆 Unit 2 Mastery Checklist

- [ ] I can find derivatives using the limit definition
- [ ] I understand the geometric meaning of the derivative
- [ ] I can apply the power rule to any exponent
- [ ] I can use the product rule correctly
- [ ] I can use the quotient rule correctly
- [ ] I know all six trigonometric derivatives
- [ ] I can differentiate exponential and logarithmic functions
- [ ] I can find higher-order derivatives
- [ ] I can write equations of tangent and normal lines
- [ ] I understand the relationship between differentiability and continuity
- [ ] I can analyze piecewise functions for differentiability

---

*Master these foundational concepts—they're the building blocks for everything that follows in calculus!*

:::GUIDE:::
