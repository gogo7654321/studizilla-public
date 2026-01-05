:::GUIDE:::
unit::=6
title::=∫ Unit 6: Integration and Accumulation of Change
desc::=Master antiderivatives, definite integrals, and the Fundamental Theorem
diff::=Hard
time::=60 min
tags::=calculus,integration,FTC,antiderivatives
content::=

# ∫ Unit 6: Integration and Accumulation of Change

---

## TIMELINE

| Phase | Topic | Time | Priority |
|-------|-------|------|----------|
| 1 | Antiderivatives & Indefinite Integrals | 10 min | 🔴 High |
| 2 | Basic Integration Rules | 10 min | 🔴 High |
| 3 | Riemann Sums & Approximations | 10 min | 🔴 High |
| 4 | Definite Integrals | 8 min | 🔴 High |
| 5 | Fundamental Theorem of Calculus | 10 min | 🔴 High |
| 6 | Properties of Definite Integrals | 5 min | 🟡 Medium |
| 7 | U-Substitution | 7 min | 🔴 High |

---

## Phase 1: Antiderivatives and Indefinite Integrals

### What is an Antiderivative?

An **antiderivative** of a function $f(x)$ is a function $F(x)$ whose derivative equals $f(x)$.

$$F'(x) = f(x)$$

> **Key Insight:** Antidifferentiation is the reverse process of differentiation.

### The General Antiderivative

If $F(x)$ is an antiderivative of $f(x)$, then the **general antiderivative** is:

$$F(x) + C$$

where $C$ is the **constant of integration** (an arbitrary constant).

**Why the constant?** Because the derivative of any constant is zero, so $\frac{d}{dx}[F(x) + C] = F'(x) = f(x)$ for any value of $C$.

### Indefinite Integral Notation

The **indefinite integral** represents the family of all antiderivatives:

$$\int f(x) \, dx = F(x) + C$$

| Symbol | Meaning |
|--------|---------|
| $\int$ | Integral sign (elongated S for "sum") |
| $f(x)$ | Integrand (function being integrated) |
| $dx$ | Differential (indicates variable of integration) |
| $F(x)$ | Antiderivative |
| $C$ | Constant of integration |

### Example: Finding Antiderivatives

Find the antiderivative of $f(x) = 3x^2$:

**Solution:**
We need $F(x)$ such that $F'(x) = 3x^2$.

Think: What function has derivative $3x^2$?

$$F(x) = x^3$$

Verify: $\frac{d}{dx}[x^3] = 3x^2$ ✓

General antiderivative: $\int 3x^2 \, dx = x^3 + C$

---

## Phase 2: Basic Integration Rules

### Power Rule for Integration

For $n \neq -1$:

$$\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$$

> **Memory Trick:** "Add one to the exponent, divide by the new exponent"

### Essential Integration Formulas

| Function $f(x)$ | Antiderivative $\int f(x) \, dx$ |
|-----------------|----------------------------------|
| $k$ (constant) | $kx + C$ |
| $x^n$ $(n \neq -1)$ | $\frac{x^{n+1}}{n+1} + C$ |
| $\frac{1}{x}$ or $x^{-1}$ | $\ln|x| + C$ |
| $e^x$ | $e^x + C$ |
| $a^x$ | $\frac{a^x}{\ln a} + C$ |
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $\sec^2 x$ | $\tan x + C$ |
| $\csc^2 x$ | $-\cot x + C$ |
| $\sec x \tan x$ | $\sec x + C$ |
| $\csc x \cot x$ | $-\csc x + C$ |
| $\frac{1}{\sqrt{1-x^2}}$ | $\arcsin x + C$ |
| $\frac{1}{1+x^2}$ | $\arctan x + C$ |

### Algebraic Properties of Integrals

**Constant Multiple Rule:**
$$\int k \cdot f(x) \, dx = k \int f(x) \, dx$$

**Sum/Difference Rule:**
$$\int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx$$

> ⚠️ **Warning:** There is NO product rule or quotient rule for integration!

### Integration Examples

**Example 1:** $\int (4x^3 - 2x + 5) \, dx$

$$= \int 4x^3 \, dx - \int 2x \, dx + \int 5 \, dx$$

$$= 4 \cdot \frac{x^4}{4} - 2 \cdot \frac{x^2}{2} + 5x + C$$

$$= x^4 - x^2 + 5x + C$$

**Example 2:** $\int \frac{3}{x^2} \, dx$

Rewrite: $\int 3x^{-2} \, dx$

$$= 3 \cdot \frac{x^{-1}}{-1} + C = -\frac{3}{x} + C$$

**Example 3:** $\int (\sqrt{x} + \frac{1}{\sqrt{x}}) \, dx$

Rewrite: $\int (x^{1/2} + x^{-1/2}) \, dx$

$$= \frac{x^{3/2}}{3/2} + \frac{x^{1/2}}{1/2} + C$$

$$= \frac{2}{3}x^{3/2} + 2x^{1/2} + C = \frac{2}{3}x\sqrt{x} + 2\sqrt{x} + C$$

**Example 4:** $\int (3\cos x - 2\sin x) \, dx$

$$= 3\sin x - 2(-\cos x) + C = 3\sin x + 2\cos x + C$$

### Finding Particular Solutions (Initial Value Problems)

Given $f'(x)$ and an initial condition $f(a) = b$, find $f(x)$:

**Example:** $f'(x) = 2x - 3$, and $f(1) = 4$

**Step 1:** Find general antiderivative
$$f(x) = \int (2x - 3) \, dx = x^2 - 3x + C$$

**Step 2:** Use initial condition to find $C$
$$f(1) = (1)^2 - 3(1) + C = 4$$
$$1 - 3 + C = 4$$
$$C = 6$$

**Step 3:** Write particular solution
$$f(x) = x^2 - 3x + 6$$

---

## Phase 3: Riemann Sums and Approximations

### The Area Problem

**Question:** How do we find the exact area under a curve $y = f(x)$ between $x = a$ and $x = b$?

**Answer:** Approximate with rectangles, then take the limit as the number of rectangles approaches infinity.

### Sigma Notation Review

$$\sum_{i=1}^{n} a_i = a_1 + a_2 + a_3 + \cdots + a_n$$

**Useful Formulas:**

| Sum | Formula |
|-----|---------|
| $\sum_{i=1}^{n} c$ | $cn$ |
| $\sum_{i=1}^{n} i$ | $\frac{n(n+1)}{2}$ |
| $\sum_{i=1}^{n} i^2$ | $\frac{n(n+1)(2n+1)}{6}$ |
| $\sum_{i=1}^{n} i^3$ | $\left[\frac{n(n+1)}{2}\right]^2$ |

### Setting Up a Riemann Sum

For a function $f(x)$ on interval $[a, b]$ divided into $n$ subintervals:

**Width of each subinterval:**
$$\Delta x = \frac{b - a}{n}$$

**Endpoints:**
$$x_i = a + i \cdot \Delta x$$

where $x_0 = a$ and $x_n = b$

### Types of Riemann Sums

**Left Riemann Sum (LRAM):**
$$L_n = \sum_{i=0}^{n-1} f(x_i) \cdot \Delta x$$

Uses left endpoint of each subinterval for height.

**Right Riemann Sum (RRAM):**
$$R_n = \sum_{i=1}^{n} f(x_i) \cdot \Delta x$$

Uses right endpoint of each subinterval for height.

**Midpoint Riemann Sum (MRAM):**
$$M_n = \sum_{i=1}^{n} f\left(\frac{x_{i-1} + x_i}{2}\right) \cdot \Delta x$$

Uses midpoint of each subinterval for height.

### Comparison of Methods

| If $f$ is... | Left Sum | Right Sum |
|--------------|----------|-----------|
| Increasing | Underestimate | Overestimate |
| Decreasing | Overestimate | Underestimate |

> **Midpoint Rule:** Generally gives better approximations than left or right sums.

### Trapezoidal Rule

Uses trapezoids instead of rectangles:

$$T_n = \frac{\Delta x}{2}\left[f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n)\right]$$

Or equivalently:
$$T_n = \frac{L_n + R_n}{2}$$

### Example: Riemann Sum Calculation

Approximate $\int_0^4 x^2 \, dx$ using $n = 4$ subintervals.

**Setup:**
- $a = 0$, $b = 4$, $n = 4$
- $\Delta x = \frac{4 - 0}{4} = 1$
- Endpoints: $x_0 = 0, x_1 = 1, x_2 = 2, x_3 = 3, x_4 = 4$

**Left Sum:**
$$L_4 = [f(0) + f(1) + f(2) + f(3)] \cdot 1$$
$$= [0 + 1 + 4 + 9] \cdot 1 = 14$$

**Right Sum:**
$$R_4 = [f(1) + f(2) + f(3) + f(4)] \cdot 1$$
$$= [1 + 4 + 9 + 16] \cdot 1 = 30$$

**Midpoint Sum:**
$$M_4 = [f(0.5) + f(1.5) + f(2.5) + f(3.5)] \cdot 1$$
$$= [0.25 + 2.25 + 6.25 + 12.25] \cdot 1 = 21$$

**Trapezoidal:**
$$T_4 = \frac{14 + 30}{2} = 22$$

**Exact value:** $\int_0^4 x^2 \, dx = \frac{64}{3} \approx 21.33$

### Definition of the Definite Integral

The **definite integral** is defined as the limit of Riemann sums:

$$\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \cdot \Delta x$$

where $x_i^*$ is any sample point in the $i$th subinterval.

---

## Phase 4: Definite Integrals

### Notation and Terminology

$$\int_a^b f(x) \, dx$$

| Component | Name | Role |
|-----------|------|------|
| $a$ | Lower limit of integration | Starting point |
| $b$ | Upper limit of integration | Ending point |
| $f(x)$ | Integrand | Function being integrated |
| $dx$ | Differential | Variable of integration |

### Geometric Interpretation

The definite integral $\int_a^b f(x) \, dx$ represents:

- **Net signed area** between curve and x-axis
- Area above x-axis counts as **positive**
- Area below x-axis counts as **negative**

$$\int_a^b f(x) \, dx = (\text{Area above x-axis}) - (\text{Area below x-axis})$$

### Total Area vs. Net Area

**Net Area (signed):**
$$\int_a^b f(x) \, dx$$

**Total Area (absolute):**
$$\int_a^b |f(x)| \, dx$$

> To find total area, integrate $|f(x)|$ or split the integral at zeros and take absolute values.

### Example: Interpreting Definite Integrals Geometrically

Evaluate $\int_0^4 (2 - x) \, dx$ using geometry.

**Solution:**
The graph of $y = 2 - x$ is a line crossing the x-axis at $x = 2$.

- From $x = 0$ to $x = 2$: Triangle above x-axis with base 2 and height 2
  - Area = $\frac{1}{2}(2)(2) = 2$
  
- From $x = 2$ to $x = 4$: Triangle below x-axis with base 2 and height 2
  - Area = $\frac{1}{2}(2)(2) = 2$ (counts as negative)

**Net area:** $2 + (-2) = 0$

$$\int_0^4 (2 - x) \, dx = 0$$

---

## Phase 5: The Fundamental Theorem of Calculus

### FTC Part 1 (Derivative of an Integral)

If $f$ is continuous on $[a, b]$, then the function:

$$g(x) = \int_a^x f(t) \, dt$$

is continuous on $[a, b]$, differentiable on $(a, b)$, and:

$$g'(x) = \frac{d}{dx}\left[\int_a^x f(t) \, dt\right] = f(x)$$

> **In words:** The derivative of an integral (with variable upper limit) returns the original function.

### FTC Part 1: Extended Form

If the upper limit is a function $u(x)$:

$$\frac{d}{dx}\left[\int_a^{u(x)} f(t) \, dt\right] = f(u(x)) \cdot u'(x)$$

This uses the **Chain Rule**!

### FTC Part 1 Examples

**Example 1:** Find $\frac{d}{dx}\left[\int_2^x \sin(t^2) \, dt\right]$

By FTC Part 1:
$$\frac{d}{dx}\left[\int_2^x \sin(t^2) \, dt\right] = \sin(x^2)$$

**Example 2:** Find $\frac{d}{dx}\left[\int_1^{x^3} \sqrt{t+1} \, dt\right]$

Let $u = x^3$, so $u' = 3x^2$

By FTC Part 1 (extended):
$$\frac{d}{dx}\left[\int_1^{x^3} \sqrt{t+1} \, dt\right] = \sqrt{x^3+1} \cdot 3x^2$$

**Example 3:** Find $\frac{d}{dx}\left[\int_x^5 e^{t^2} \, dt\right]$

First, flip the limits (adds negative sign):
$$\int_x^5 e^{t^2} \, dt = -\int_5^x e^{t^2} \, dt$$

Then:
$$\frac{d}{dx}\left[-\int_5^x e^{t^2} \, dt\right] = -e^{x^2}$$

### FTC Part 2 (Evaluation Theorem)

If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$, then:

$$\int_a^b f(x) \, dx = F(b) - F(a) = \Big[F(x)\Big]_a^b$$

> **In words:** To evaluate a definite integral, find an antiderivative and subtract the values at the endpoints.

### Notation: Evaluation Bar

$$\Big[F(x)\Big]_a^b = F(x)\Big|_a^b = F(b) - F(a)$$

### FTC Part 2 Examples

**Example 1:** Evaluate $\int_1^3 2x \, dx$

$$\int_1^3 2x \, dx = \Big[x^2\Big]_1^3 = (3)^2 - (1)^2 = 9 - 1 = 8$$

**Example 2:** Evaluate $\int_0^{\pi} \cos x \, dx$

$$\int_0^{\pi} \cos x \, dx = \Big[\sin x\Big]_0^{\pi} = \sin(\pi) - \sin(0) = 0 - 0 = 0$$

**Example 3:** Evaluate $\int_1^e \frac{1}{x} \, dx$

$$\int_1^e \frac{1}{x} \, dx = \Big[\ln|x|\Big]_1^e = \ln(e) - \ln(1) = 1 - 0 = 1$$

**Example 4:** Evaluate $\int_0^4 \sqrt{x} \, dx$

$$\int_0^4 x^{1/2} \, dx = \Big[\frac{x^{3/2}}{3/2}\Big]_0^4 = \frac{2}{3}\Big[x^{3/2}\Big]_0^4$$

$$= \frac{2}{3}\left[(4)^{3/2} - (0)^{3/2}\right] = \frac{2}{3}(8 - 0) = \frac{16}{3}$$

**Example 5:** Evaluate $\int_{-1}^{1} (x^3 + x) \, dx$

$$\int_{-1}^{1} (x^3 + x) \, dx = \Big[\frac{x^4}{4} + \frac{x^2}{2}\Big]_{-1}^{1}$$

$$= \left(\frac{1}{4} + \frac{1}{2}\right) - \left(\frac{1}{4} + \frac{1}{2}\right) = 0$$

> Note: $f(x) = x^3 + x$ is an odd function, so the integral over a symmetric interval is zero.

### Connection Between FTC Parts

| Part | Statement | Purpose |
|------|-----------|---------|
| FTC 1 | $\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$ | Differentiation undoes integration |
| FTC 2 | $\int_a^b f(x)\,dx = F(b) - F(a)$ | Integration undoes differentiation |

Together they establish that **differentiation and integration are inverse operations**.

---

## Phase 6: Properties of Definite Integrals

### Fundamental Properties

**1. Zero Width:**
$$\int_a^a f(x) \, dx = 0$$

**2. Reversed Limits:**
$$\int_b^a f(x) \, dx = -\int_a^b f(x) \, dx$$

**3. Constant Multiple:**
$$\int_a^b k \cdot f(x) \, dx = k \int_a^b f(x) \, dx$$

**4. Sum/Difference:**
$$\int_a^b [f(x) \pm g(x)] \, dx = \int_a^b f(x) \, dx \pm \int_a^b g(x) \, dx$$

**5. Additivity (Splitting Intervals):**
$$\int_a^b f(x) \, dx + \int_b^c f(x) \, dx = \int_a^c f(x) \, dx$$

### Comparison Properties

If $f(x) \geq 0$ on $[a, b]$, then:
$$\int_a^b f(x) \, dx \geq 0$$

If $f(x) \geq g(x)$ on $[a, b]$, then:
$$\int_a^b f(x) \, dx \geq \int_a^b g(x) \, dx$$

If $m \leq f(x) \leq M$ on $[a, b]$, then:
$$m(b-a) \leq \int_a^b f(x) \, dx \leq M(b-a)$$

### Properties of Odd and Even Functions

**Even Function:** $f(-x) = f(x)$
$$\int_{-a}^{a} f(x) \, dx = 2\int_0^a f(x) \, dx$$

**Odd Function:** $f(-x) = -f(x)$
$$\int_{-a}^{a} f(x) \, dx = 0$$

### Examples Using Properties

**Example 1:** Given $\int_0^5 f(x) \, dx = 7$ and $\int_0^2 f(x) \, dx = 3$, find $\int_2^5 f(x) \, dx$

By additivity:
$$\int_0^2 f(x) \, dx + \int_2^5 f(x) \, dx = \int_0^5 f(x) \, dx$$

$$3 + \int_2^5 f(x) \, dx = 7$$

$$\int_2^5 f(x) \, dx = 4$$

**Example 2:** Given $\int_1^4 f(x) \, dx = 6$, find $\int_4^1 3f(x) \, dx$

$$\int_4^1 3f(x) \, dx = 3 \int_4^1 f(x) \, dx = 3 \cdot \left(-\int_1^4 f(x) \, dx\right) = 3(-6) = -18$$

**Example 3:** Evaluate $\int_{-2}^{2} x^5 \, dx$

Since $f(x) = x^5$ is odd (check: $(-x)^5 = -x^5$):
$$\int_{-2}^{2} x^5 \, dx = 0$$

---

## Phase 7: U-Substitution

### The Substitution Rule

If $u = g(x)$ is differentiable and $f$ is continuous, then:

$$\int f(g(x)) \cdot g'(x) \, dx = \int f(u) \, du$$

where $u = g(x)$ and $du = g'(x) \, dx$

> **Key Idea:** Substitution reverses the Chain Rule for derivatives.

### U-Substitution Steps (Indefinite Integrals)

1. **Choose** $u$ (usually the "inside" function)
2. **Compute** $du = \frac{du}{dx} \cdot dx$
3. **Substitute** to eliminate all $x$ terms
4. **Integrate** with respect to $u$
5. **Back-substitute** to return to variable $x$

### Choosing $u$: Guidelines

| Pattern | Let $u = $ | Then $du = $ |
|---------|------------|--------------|
| $\int f(ax + b) \, dx$ | $ax + b$ | $a \, dx$ |
| $\int x \cdot f(x^2) \, dx$ | $x^2$ | $2x \, dx$ |
| $\int f(\sin x) \cos x \, dx$ | $\sin x$ | $\cos x \, dx$ |
| $\int f(e^x) e^x \, dx$ | $e^x$ | $e^x \, dx$ |
| $\int \frac{f'(x)}{f(x)} \, dx$ | $f(x)$ | $f'(x) \, dx$ |

### U-Substitution Examples (Indefinite)

**Example 1:** $\int (2x + 3)^5 \, dx$

Let $u = 2x + 3$, so $du = 2 \, dx$, meaning $dx = \frac{du}{2}$

$$\int (2x + 3)^5 \, dx = \int u^5 \cdot \frac{du}{2} = \frac{1}{2} \int u^5 \, du$$

$$= \frac{1}{2} \cdot \frac{u^6}{6} + C = \frac{(2x + 3)^6}{12} + C$$

**Example 2:** $\int x \sqrt{x^2 + 1} \, dx$

Let $u = x^2 + 1$, so $du = 2x \, dx$, meaning $x \, dx = \frac{du}{2}$

$$\int x \sqrt{x^2 + 1} \, dx = \int \sqrt{u} \cdot \frac{du}{2} = \frac{1}{2} \int u^{1/2} \, du$$

$$= \frac{1}{2} \cdot \frac{u^{3/2}}{3/2} + C = \frac{1}{3}(x^2 + 1)^{3/2} + C$$

**Example 3:** $\int \sin^4 x \cos x \, dx$

Let $u = \sin x$, so $du = \cos x \, dx$

$$\int \sin^4 x \cos x \, dx = \int u^4 \, du = \frac{u^5}{5} + C = \frac{\sin^5 x}{5} + C$$

**Example 4:** $\int \frac{x}{x^2 + 4} \, dx$

Let $u = x^2 + 4$, so $du = 2x \, dx$, meaning $x \, dx = \frac{du}{2}$

$$\int \frac{x}{x^2 + 4} \, dx = \int \frac{1}{u} \cdot \frac{du}{2} = \frac{1}{2} \ln|u| + C = \frac{1}{2} \ln(x^2 + 4) + C$$

**Example 5:** $\int e^{3x} \, dx$

Let $u = 3x$, so $du = 3 \, dx$, meaning $dx = \frac{du}{3}$

$$\int e^{3x} \, dx = \int e^u \cdot \frac{du}{3} = \frac{1}{3} e^u + C = \frac{1}{3} e^{3x} + C$$

**Example 6:** $\int \tan x \, dx$

Rewrite: $\int \tan x \, dx = \int \frac{\sin x}{\cos x} \, dx$

Let $u = \cos x$, so $du = -\sin x \, dx$

$$\int \frac{\sin x}{\cos x} \, dx = \int \frac{-du}{u} = -\ln|u| + C = -\ln|\cos x| + C$$

Or equivalently: $\ln|\sec x| + C$

### U-Substitution for Definite Integrals

**Two Methods:**

**Method 1: Change the Limits**
When substituting $u = g(x)$, convert limits:
- Lower limit: $u = g(a)$
- Upper limit: $u = g(b)$

$$\int_a^b f(g(x)) \cdot g'(x) \, dx = \int_{g(a)}^{g(b)} f(u) \, du$$

**Method 2: Back-Substitute First**
Find the indefinite integral in terms of $x$, then evaluate at original limits.

### Definite Integral U-Substitution Examples

**Example 1:** Evaluate $\int_0^2 x(x^2 + 1)^3 \, dx$

Let $u = x^2 + 1$, $du = 2x \, dx$

Change limits:
- When $x = 0$: $u = 0 + 1 = 1$
- When $x = 2$: $u = 4 + 1 = 5$

$$\int_0^2 x(x^2 + 1)^3 \, dx = \int_1^5 u^3 \cdot \frac{du}{2} = \frac{1}{2} \int_1^5 u^3 \, du$$

$$= \frac{1}{2} \Big[\frac{u^4}{4}\Big]_1^5 = \frac{1}{8}\left[5^4 - 1^4\right] = \frac{1}{8}(625 - 1) = \frac{624}{8} = 78$$

**Example 2:** Evaluate $\int_0^{\pi/2} \sin x \cos x \, dx$

Let $u = \sin x$, $du = \cos x \, dx$

Change limits:
- When $x = 0$: $u = \sin 0 = 0$
- When $x = \pi/2$: $u = \sin(\pi/2) = 1$

$$\int_0^{\pi/2} \sin x \cos x \, dx = \int_0^1 u \, du = \Big[\frac{u^2}{2}\Big]_0^1 = \frac{1}{2} - 0 = \frac{1}{2}$$

**Example 3:** Evaluate $\int_1^e \frac{\ln x}{x} \, dx$

Let $u = \ln x$, $du = \frac{1}{x} dx$

Change limits:
- When $x = 1$: $u = \ln 1 = 0$
- When $x = e$: $u = \ln e = 1$

$$\int_1^e \frac{\ln x}{x} \, dx = \int_0^1 u \, du = \Big[\frac{u^2}{2}\Big]_0^1 = \frac{1}{2}$$

---

## 📊 Key Integration Formulas Summary

### Basic Integrals to Memorize

| Integral | Result |
|----------|--------|
| $\int x^n \, dx$ | $\frac{x^{n+1}}{n+1} + C$ $(n \neq -1)$ |
| $\int \frac{1}{x} \, dx$ | $\ln\|x\| + C$ |
| $\int e^x \, dx$ | $e^x + C$ |
| $\int a^x \, dx$ | $\frac{a^x}{\ln a} + C$ |
| $\int \sin x \, dx$ | $-\cos x + C$ |
| $\int \cos x \, dx$ | $\sin x + C$ |
| $\int \sec^2 x \, dx$ | $\tan x + C$ |
| $\int \csc^2 x \, dx$ | $-\cot x + C$ |
| $\int \sec x \tan x \, dx$ | $\sec x + C$ |
| $\int \csc x \cot x \, dx$ | $-\csc x + C$ |
| $\int \tan x \, dx$ | $-\ln\|\cos x\| + C = \ln\|\sec x\| + C$ |
| $\int \frac{1}{\sqrt{1-x^2}} \, dx$ | $\arcsin x + C$ |
| $\int \frac{1}{1+x^2} \, dx$ | $\arctan x + C$ |

---

## 📝 Practice Problems

### Section A: Indefinite Integrals

**A1.** $\int (5x^4 - 3x^2 + 2x - 7) \, dx$

**A2.** $\int \left(\frac{4}{x^3} - \frac{2}{x} + 3\sqrt{x}\right) \, dx$

**A3.** $\int (3\sin x + 4\cos x - \sec^2 x) \, dx$

**A4.** $\int (e^x + 2^x) \, dx$

**A5.** $\int \frac{x^3 + 2x - 1}{x^2} \, dx$

---

### Section B: Initial Value Problems

**B1.** $f'(x) = 3x^2 - 4x + 1$, $f(0) = 5$. Find $f(x)$.

**B2.** $f'(x) = \sin x + \cos x$, $f(\pi) = 2$. Find $f(x)$.

**B3.** $f''(x) = 6x$, $f'(1) = 4$, $f(1) = 2$. Find $f(x)$.

---

### Section C: Riemann Sums

**C1.** Approximate $\int_0^3 x^2 \, dx$ using a Right Riemann Sum with $n = 3$.

**C2.** Using $n = 4$ equal subintervals, find the Trapezoidal approximation of $\int_0^4 \sqrt{x} \, dx$.

**C3.** If $f$ is increasing on $[2, 8]$, which gives an overestimate: Left or Right Riemann Sum?

---

### Section D: Definite Integrals (FTC Part 2)

**D1.** $\int_1^4 (2x - 3) \, dx$

**D2.** $\int_0^{\pi/4} \sec^2 x \, dx$

**D3.** $\int_1^8 \frac{1}{\sqrt[3]{x}} \, dx$

**D4.** $\int_{-1}^2 (x^3 - 2x) \, dx$

**D5.** $\int_0^{\ln 3} e^x \, dx$

---

### Section E: FTC Part 1

**E1.** Find $\frac{d}{dx}\left[\int_1^x \sqrt{t^3 + 1} \, dt\right]$

**E2.** Find $\frac{d}{dx}\left[\int_x^4 \cos(t^2) \, dt\right]$

**E3.** Find $\frac{d}{dx}\left[\int_0^{x^2} e^{-t^2} \, dt\right]$

**E4.** If $F(x) = \int_2^{3x} \frac{1}{1+t^2} \, dt$, find $F'(x)$.

---

### Section F: Properties of Definite Integrals

**F1.** If $\int_0^6 f(x) \, dx = 10$ and $\int_4^6 f(x) \, dx = 3$, find $\int_0^4 f(x) \, dx$.

**F2.** If $\int_1^5 f(x) \, dx = 8$, find $\int_5^1 2f(x) \, dx$.

**F3.** Evaluate $\int_{-3}^{3} x^7 \, dx$ without computing an antiderivative.

**F4.** Evaluate $\int_{-\pi}^{\pi} \cos x \, dx$.

---

### Section G: U-Substitution (Indefinite)

**G1.** $\int (3x - 1)^4 \, dx$

**G2.** $\int x^2 \sqrt{x^3 + 5} \, dx$

**G3.** $\int \cos^3 x \sin x \, dx$

**G4.** $\int \frac{e^{\sqrt{x}}}{\sqrt{x}} \, dx$

**G5.** $\int \frac{\ln x}{x} \, dx$

**G6.** $\int x e^{-x^2} \, dx$

---

### Section H: U-Substitution (Definite)

**H1.** $\int_0^1 (2x + 1)^3 \, dx$

**H2.** $\int_0^{2} x\sqrt{4-x^2} \, dx$

**H3.** $\int_0^{\pi/4} \tan x \sec^2 x \, dx$

**H4.** $\int_1^4 \frac{1}{\sqrt{x}(1 + \sqrt{x})^2} \, dx$

---

## ✅ Answer Key

### Section A: Indefinite Integrals

**A1.** $x^5 - x^3 + x^2 - 7x + C$

**A2.** $-\frac{2}{x^2} - 2\ln|x| + 2x^{3/2} + C$

**A3.** $-3\cos x + 4\sin x - \tan x + C$

**A4.** $e^x + \frac{2^x}{\ln 2} + C$

**A5.** $\frac{x^2}{2} + 2\ln|x| + \frac{1}{x} + C$

---

### Section B: Initial Value Problems

**B1.** $f(x) = x^3 - 2x^2 + x + 5$

**B2.** $f(x) = -\cos x + \sin x + 1$

**B3.** $f(x) = x^3 + x - 1$

---

### Section C: Riemann Sums

**C1.** $R_3 = (1 + 4 + 9) \cdot 1 = 14$

**C2.** $T_4 = \frac{1}{2}[0 + 2(1) + 2(\sqrt{2}) + 2(\sqrt{3}) + 2] \approx 5.15$

**C3.** Right Riemann Sum (overestimate for increasing functions)

---

### Section D: Definite Integrals

**D1.** $[x^2 - 3x]_1^4 = (16 - 12) - (1 - 3) = 4 + 2 = 6$

**D2.** $[\tan x]_0^{\pi/4} = 1 - 0 = 1$

**D3.** $\int_1^8 x^{-1/3} \, dx = [\frac{3}{2}x^{2/3}]_1^8 = \frac{3}{2}(4 - 1) = \frac{9}{2}$

**D4.** $[\frac{x^4}{4} - x^2]_{-1}^2 = (4 - 4) - (\frac{1}{4} - 1) = 0 + \frac{3}{4} = \frac{3}{4}$

**D5.** $[e^x]_0^{\ln 3} = e^{\ln 3} - e^0 = 3 - 1 = 2$

---

### Section E: FTC Part 1

**E1.** $\sqrt{x^3 + 1}$

**E2.** $-\cos(x^2)$

**E3.** $e^{-x^4} \cdot 2x = 2x e^{-x^4}$

**E4.** $F'(x) = \frac{1}{1+(3x)^2} \cdot 3 = \frac{3}{1+9x^2}$

---

### Section F: Properties

**F1.** $\int_0^4 f(x) \, dx = 10 - 3 = 7$

**F2.** $\int_5^1 2f(x) \, dx = -2 \cdot 8 = -16$

**F3.** $0$ (odd function over symmetric interval)

**F4.** $[\sin x]_{-\pi}^{\pi} = 0 - 0 = 0$

---

### Section G: U-Substitution (Indefinite)

**G1.** $\frac{(3x-1)^5}{15} + C$

**G2.** $\frac{2}{9}(x^3 + 5)^{3/2} + C$

**G3.** $-\frac{\cos^4 x}{4} + C$

**G4.** $2e^{\sqrt{x}} + C$

**G5.** $\frac{(\ln x)^2}{2} + C$

**G6.** $-\frac{1}{2}e^{-x^2} + C$

---

### Section H: U-Substitution (Definite)

**H1.** $\frac{1}{8}[(2x+1)^4]_0^1 = \frac{1}{8}(81 - 1) = 10$

**H2.** Let $u = 4 - x^2$: $-\frac{1}{3}[(4-x^2)^{3/2}]_0^2 = \frac{8}{3}$

**H3.** $[\frac{\tan^2 x}{2}]_0^{\pi/4} = \frac{1}{2}(1 - 0) = \frac{1}{2}$

**H4.** Let $u = 1 + \sqrt{x}$: $[\frac{-2}{1+\sqrt{x}}]_1^4 = -\frac{2}{3} + 1 = \frac{1}{3}$

---

## 🧠 Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Forgetting $+C$ for indefinite integrals | Always include constant of integration |
| Using $\int x^{-1} dx = \frac{x^0}{0}$ | Use $\int \frac{1}{x} dx = \ln\|x\| + C$ |
| Ignoring negative area | Net area can be negative or zero |
| Not changing limits with u-sub | Either change limits or back-substitute |
| Missing chain rule in FTC Part 1 | Multiply by derivative of upper limit |
| Product/quotient rules for integrals | These don't exist—must rewrite or use techniques |

---

## 📌 AP Exam Tips

1. **Show all work** — especially substitution steps
2. **Check units** in accumulation problems
3. **Identify odd/even functions** to simplify calculations
4. **Verify answers** by differentiating when time allows
5. **Use proper notation** — don't forget $dx$ and $+C$
6. **For FTC Part 1:** Write out the chain rule when upper limit is a function
7. **Riemann sums:** Clearly state $\Delta x$ and sample points

---

:::GUIDE:::
