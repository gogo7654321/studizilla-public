:::GUIDE:::
unit::=Final Review
title::=📊 AP Precalculus Complete Final Exam Review
desc::=Comprehensive review of all 4 units for AP Precalculus exam
diff::=Medium
time::=90 min
tags::=precalculus,final-review,ap-exam,comprehensive
content::=

# 📊 AP Precalculus: Complete Final Exam Review

> Master all four units of AP Precalculus with this comprehensive review covering polynomial, rational, exponential, logarithmic, trigonometric, and polar/parametric functions.

---

## 📋 Exam Overview

### AP Precalculus Exam Structure
| Section | Questions | Time | Calculator |
|---------|-----------|------|------------|
| Part A: MCQ | 28 questions | 80 min | No Calculator |
| Part B: MCQ | 12 questions | 40 min | Calculator Required |
| Part A: FRQ | 2 questions | 30 min | No Calculator |
| Part B: FRQ | 2 questions | 30 min | Calculator Required |

### Unit Weightings
| Unit | Topic | Exam Weight |
|------|-------|-------------|
| 1 | Polynomial and Rational Functions | 30-40% |
| 2 | Exponential and Logarithmic Functions | 27-40% |
| 3 | Trigonometric and Polar Functions | 15-27% |
| 4 | Functions Involving Parameters, Vectors, and Matrices | 5-10% |

---

# 🔷 UNIT 1: Polynomial and Rational Functions (30-40%)

## 1.1 Function Fundamentals

### What is a Function?
A **function** is a relation where each input has exactly one output.

**Function Notation:**
$$f(x) = \text{output when input is } x$$

### Domain and Range
- **Domain**: All possible input values (x-values)
- **Range**: All possible output values (y-values)

**Finding Domain Restrictions:**
| Function Type | Restriction | Reason |
|---------------|-------------|--------|
| Polynomial | All real numbers | No restrictions |
| Rational | Denominator ≠ 0 | Division by zero undefined |
| Square Root | Radicand ≥ 0 | No real square root of negatives |
| Logarithm | Argument > 0 | Log of non-positive undefined |

### Function Operations

**Arithmetic Operations:**
- $(f + g)(x) = f(x) + g(x)$
- $(f - g)(x) = f(x) - g(x)$
- $(f \cdot g)(x) = f(x) \cdot g(x)$
- $\left(\frac{f}{g}\right)(x) = \frac{f(x)}{g(x)}, \quad g(x) \neq 0$

**Composition of Functions:**
$$(f \circ g)(x) = f(g(x))$$

> 💡 **Key Insight**: Work from inside out - first apply g, then apply f to the result.

### Inverse Functions

**Definition**: $f^{-1}(x)$ "undoes" what $f(x)$ does.

**Properties of Inverse Functions:**
1. $f(f^{-1}(x)) = x$ for all x in domain of $f^{-1}$
2. $f^{-1}(f(x)) = x$ for all x in domain of $f$
3. Domain of $f^{-1}$ = Range of $f$
4. Range of $f^{-1}$ = Domain of $f$
5. Graphs are reflections over $y = x$

**Finding Inverse Functions:**
1. Replace $f(x)$ with $y$
2. Swap $x$ and $y$
3. Solve for $y$
4. Replace $y$ with $f^{-1}(x)$

**Horizontal Line Test**: A function has an inverse function if and only if every horizontal line crosses the graph at most once.

---

## 1.2 Polynomial Functions

### General Form
$$P(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0$$

**Key Terms:**
- **Degree**: Highest power of x (determines end behavior and max turning points)
- **Leading coefficient**: $a_n$ (affects end behavior direction)
- **Zeros/Roots**: Values where $P(x) = 0$

### End Behavior Patterns

| Degree | Leading Coefficient | Left End | Right End |
|--------|---------------------|----------|-----------|
| Even | Positive (+) | ↑ (rises) | ↑ (rises) |
| Even | Negative (−) | ↓ (falls) | ↓ (falls) |
| Odd | Positive (+) | ↓ (falls) | ↑ (rises) |
| Odd | Negative (−) | ↑ (rises) | ↓ (falls) |

**Limit Notation for End Behavior:**
- $\lim_{x \to \infty} P(x)$ describes right end
- $\lim_{x \to -\infty} P(x)$ describes left end

### Zeros and Multiplicity

**Finding Zeros:**
1. Factor the polynomial completely
2. Set each factor equal to zero
3. Solve for x

**Multiplicity**: The number of times a factor appears

| Multiplicity | Behavior at Zero |
|--------------|------------------|
| Odd (1, 3, 5...) | Graph crosses x-axis |
| Even (2, 4, 6...) | Graph touches and bounces |

**Relationship**: For a polynomial of degree n:
- Maximum of n real zeros (counting multiplicity)
- Maximum of n - 1 turning points

### Polynomial Division

**Long Division**: Use when dividing by any polynomial

**Synthetic Division**: Use when dividing by $(x - c)$

**Remainder Theorem**: When $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$

**Factor Theorem**: $(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$

### Factoring Techniques

**Common Patterns:**
| Pattern | Formula |
|---------|---------|
| Difference of Squares | $a^2 - b^2 = (a+b)(a-b)$ |
| Sum of Cubes | $a^3 + b^3 = (a+b)(a^2-ab+b^2)$ |
| Difference of Cubes | $a^3 - b^3 = (a-b)(a^2+ab+b^2)$ |
| Perfect Square Trinomial | $a^2 \pm 2ab + b^2 = (a \pm b)^2$ |

**Rational Root Theorem**: If $\frac{p}{q}$ is a rational root of $P(x)$, then:
- $p$ is a factor of the constant term $a_0$
- $q$ is a factor of the leading coefficient $a_n$

---

## 1.3 Rational Functions

### General Form
$$R(x) = \frac{P(x)}{Q(x)} = \frac{a_nx^n + \cdots + a_0}{b_mx^m + \cdots + b_0}$$

### Domain
Domain excludes all values where $Q(x) = 0$

### Asymptotes

**Vertical Asymptotes:**
- Occur where denominator = 0 (and factor doesn't cancel)
- Written as $x = a$
- Graph approaches ±∞ near asymptote

**Horizontal Asymptotes (compare degrees):**
| Condition | Horizontal Asymptote |
|-----------|---------------------|
| degree(numerator) < degree(denominator) | $y = 0$ |
| degree(numerator) = degree(denominator) | $y = \frac{\text{leading coeff of num}}{\text{leading coeff of denom}}$ |
| degree(numerator) > degree(denominator) | No horizontal asymptote |

**Slant (Oblique) Asymptotes:**
- Occur when degree(numerator) = degree(denominator) + 1
- Find by polynomial division (quotient is the asymptote)

### Holes (Removable Discontinuities)
- Occur when a factor cancels from both numerator and denominator
- Location: Set canceled factor = 0, solve for x
- y-coordinate: Evaluate simplified function at x-value

### Zeros of Rational Functions
- Occur where numerator = 0 (and denominator ≠ 0)

### Graphing Rational Functions Checklist
1. ☐ Find domain (set denominator ≠ 0)
2. ☐ Factor numerator and denominator
3. ☐ Identify holes (canceled factors)
4. ☐ Find vertical asymptotes (remaining denominator zeros)
5. ☐ Find horizontal/slant asymptote
6. ☐ Find x-intercepts (numerator = 0)
7. ☐ Find y-intercept (evaluate at x = 0)
8. ☐ Determine behavior near asymptotes
9. ☐ Plot additional points as needed

---

## 1.4 Transformations of Functions

### Transformation Rules

| Transformation | Function Form | Effect |
|----------------|---------------|--------|
| Vertical shift up | $f(x) + k$ | Shift up k units |
| Vertical shift down | $f(x) - k$ | Shift down k units |
| Horizontal shift right | $f(x - h)$ | Shift right h units |
| Horizontal shift left | $f(x + h)$ | Shift left h units |
| Vertical stretch | $a \cdot f(x)$, $|a| > 1$ | Stretch vertically by factor a |
| Vertical compression | $a \cdot f(x)$, $0 < |a| < 1$ | Compress vertically |
| Horizontal stretch | $f(bx)$, $0 < |b| < 1$ | Stretch horizontally by factor $\frac{1}{b}$ |
| Horizontal compression | $f(bx)$, $|b| > 1$ | Compress horizontally |
| Reflection over x-axis | $-f(x)$ | Flip vertically |
| Reflection over y-axis | $f(-x)$ | Flip horizontally |

### General Transformation Form
$$g(x) = a \cdot f(b(x - h)) + k$$

**Order of Transformations:**
1. Horizontal shift (h)
2. Horizontal stretch/compress and reflect (b)
3. Vertical stretch/compress and reflect (a)
4. Vertical shift (k)

### Even and Odd Functions

**Even Functions**: $f(-x) = f(x)$
- Symmetric about the y-axis
- Examples: $x^2$, $\cos x$, $|x|$

**Odd Functions**: $f(-x) = -f(x)$
- Symmetric about the origin
- Examples: $x^3$, $\sin x$, $\tan x$

---

## 1.5 Rates of Change

### Average Rate of Change
$$\text{AROC} = \frac{f(b) - f(a)}{b - a} = \frac{\Delta y}{\Delta x}$$

This is the slope of the **secant line** connecting $(a, f(a))$ and $(b, f(b))$.

### Concavity and Rate of Change

| If rate of change is... | The function is... | Graph is... |
|-------------------------|-------------------|-------------|
| Increasing | Speeding up (away from zero) | Concave up |
| Decreasing | Slowing down (toward zero) | Concave down |
| Constant | Linear | Straight line |

### Point of Inflection
Where concavity changes (from up to down or down to up)

---

# 🔷 UNIT 2: Exponential and Logarithmic Functions (27-40%)

## 2.1 Arithmetic and Geometric Sequences

### Arithmetic Sequences
**Pattern**: Add a constant difference (d)

**Explicit Formula:**
$$a_n = a_1 + (n-1)d$$

**Recursive Formula:**
$$a_n = a_{n-1} + d, \quad a_1 = \text{first term}$$

**Sum of First n Terms:**
$$S_n = \frac{n(a_1 + a_n)}{2} = \frac{n(2a_1 + (n-1)d)}{2}$$

### Geometric Sequences
**Pattern**: Multiply by a constant ratio (r)

**Explicit Formula:**
$$a_n = a_1 \cdot r^{n-1}$$

**Recursive Formula:**
$$a_n = r \cdot a_{n-1}, \quad a_1 = \text{first term}$$

**Sum of First n Terms:**
$$S_n = a_1 \cdot \frac{1 - r^n}{1 - r}, \quad r \neq 1$$

**Sum of Infinite Geometric Series** (when $|r| < 1$):
$$S_\infty = \frac{a_1}{1 - r}$$

---

## 2.2 Exponential Functions

### General Form
$$f(x) = a \cdot b^x$$

Where:
- $a$ = initial value (y-intercept when no shifts)
- $b$ = base (growth/decay factor)
- If $b > 1$: exponential growth
- If $0 < b < 1$: exponential decay

### Transformed Exponential Form
$$f(x) = a \cdot b^{x-h} + k$$

| Parameter | Effect |
|-----------|--------|
| $a$ | Vertical stretch/compression, reflection if negative |
| $b$ | Base (growth rate) |
| $h$ | Horizontal shift |
| $k$ | Vertical shift (horizontal asymptote becomes $y = k$) |

### Properties of Exponential Functions
- Domain: All real numbers
- Range: $(k, \infty)$ if $a > 0$; $(-\infty, k)$ if $a < 0$
- Horizontal asymptote: $y = k$
- No vertical asymptotes
- One-to-one (has inverse)
- Always increasing (if $a > 0, b > 1$) or always decreasing (if $a > 0, 0 < b < 1$)

### The Natural Base e
$$e \approx 2.71828...$$

**Definition:**
$$e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n$$

### Exponential Growth and Decay Models

**General Growth/Decay:**
$$A(t) = A_0 \cdot b^t$$

**Continuous Growth/Decay:**
$$A(t) = A_0 \cdot e^{kt}$$
- $k > 0$: continuous growth
- $k < 0$: continuous decay

**Half-Life Formula:**
$$A(t) = A_0 \cdot \left(\frac{1}{2}\right)^{t/h}$$
where $h$ = half-life

**Doubling Time:**
$$A(t) = A_0 \cdot 2^{t/d}$$
where $d$ = doubling time

### Compound Interest

**Compound n times per year:**
$$A = P\left(1 + \frac{r}{n}\right)^{nt}$$

**Continuous compounding:**
$$A = Pe^{rt}$$

Where:
- $A$ = final amount
- $P$ = principal (initial amount)
- $r$ = annual interest rate (as decimal)
- $n$ = number of compoundings per year
- $t$ = time in years

---

## 2.3 Logarithmic Functions

### Definition
$$\log_b(x) = y \quad \Leftrightarrow \quad b^y = x$$

"Log base b of x equals y means b to the y power equals x"

### Common Logarithms
- $\log x = \log_{10} x$ (common log)
- $\ln x = \log_e x$ (natural log)

### Properties of Logarithms

**Basic Properties:**
| Property | Rule |
|----------|------|
| Log of 1 | $\log_b(1) = 0$ |
| Log of base | $\log_b(b) = 1$ |
| Log of power of base | $\log_b(b^x) = x$ |
| Inverse | $b^{\log_b(x)} = x$ |

**Logarithm Laws:**
| Law | Formula |
|-----|---------|
| Product Rule | $\log_b(MN) = \log_b(M) + \log_b(N)$ |
| Quotient Rule | $\log_b\left(\frac{M}{N}\right) = \log_b(M) - \log_b(N)$ |
| Power Rule | $\log_b(M^p) = p \cdot \log_b(M)$ |
| Change of Base | $\log_b(x) = \frac{\log_a(x)}{\log_a(b)} = \frac{\ln x}{\ln b}$ |

### Logarithmic Function Properties
- Domain: $(0, \infty)$
- Range: All real numbers
- Vertical asymptote: $x = 0$ (or $x = h$ after horizontal shift)
- x-intercept: $(1, 0)$ for basic $\log_b(x)$
- Inverse of exponential function

### Transformed Logarithmic Form
$$f(x) = a \cdot \log_b(x - h) + k$$

| Parameter | Effect |
|-----------|--------|
| $a$ | Vertical stretch/compression |
| $b$ | Base |
| $h$ | Horizontal shift (VA becomes $x = h$) |
| $k$ | Vertical shift |

---

## 2.4 Solving Exponential and Logarithmic Equations

### Solving Exponential Equations

**Method 1: Same Base**
If $b^{f(x)} = b^{g(x)}$, then $f(x) = g(x)$

**Method 2: Take Logarithm of Both Sides**
$$b^x = c$$
$$\log(b^x) = \log(c)$$
$$x \log(b) = \log(c)$$
$$x = \frac{\log(c)}{\log(b)}$$

**Method 3: Rewrite in Log Form**
$$b^x = c \quad \Rightarrow \quad x = \log_b(c)$$

### Solving Logarithmic Equations

**Method 1: Rewrite in Exponential Form**
$$\log_b(x) = c \quad \Rightarrow \quad x = b^c$$

**Method 2: Condense and Convert**
1. Use log properties to condense to single log
2. Convert to exponential form
3. Solve and check (domain!)

**Method 3: Exponentiate Both Sides**
$$\log_b(f(x)) = \log_b(g(x)) \quad \Rightarrow \quad f(x) = g(x)$$

> ⚠️ **Warning**: Always check solutions in original equation! Logarithms require positive arguments.

### Common Equation Types

**Exponential with Quadratic Pattern:**
$$e^{2x} - 5e^x + 6 = 0$$
Let $u = e^x$:
$$u^2 - 5u + 6 = 0$$
$$(u-2)(u-3) = 0$$
$$e^x = 2 \text{ or } e^x = 3$$
$$x = \ln 2 \text{ or } x = \ln 3$$

---

## 2.5 Semi-Log Plots and Modeling

### Semi-Log Plots
A semi-log plot uses:
- Linear scale on x-axis
- Logarithmic scale on y-axis

**Purpose**: Exponential data appears linear on a semi-log plot!

If $y = ab^x$, then:
$$\log y = \log a + x \log b$$

This is linear in the form $Y = mx + b$ where:
- $Y = \log y$
- slope $= \log b$
- y-intercept $= \log a$

### Identifying Function Types from Data

| Pattern in Data | Function Type |
|-----------------|---------------|
| Constant differences in y | Linear |
| Constant second differences | Quadratic |
| Constant ratios (quotients) | Exponential |
| Linear on semi-log plot | Exponential |

### Regression Models
Use calculator for:
- LinReg (ax + b): Linear
- QuadReg: Quadratic
- ExpReg (ab^x): Exponential
- LnReg: Logarithmic
- PwrReg: Power

---

# 🔷 UNIT 3: Trigonometric and Polar Functions (15-27%)

## 3.1 Periodic Functions

### Key Vocabulary
- **Period**: Horizontal length of one complete cycle
- **Amplitude**: Half the distance from max to min
- **Midline**: Horizontal line halfway between max and min
- **Frequency**: Number of cycles per unit (frequency = 1/period)

---

## 3.2 Angles and the Unit Circle

### Angle Measurement
**Degrees to Radians:**
$$\text{radians} = \text{degrees} \times \frac{\pi}{180}$$

**Radians to Degrees:**
$$\text{degrees} = \text{radians} \times \frac{180}{\pi}$$

### Common Angle Conversions
| Degrees | Radians |
|---------|---------|
| 0° | 0 |
| 30° | $\frac{\pi}{6}$ |
| 45° | $\frac{\pi}{4}$ |
| 60° | $\frac{\pi}{3}$ |
| 90° | $\frac{\pi}{2}$ |
| 120° | $\frac{2\pi}{3}$ |
| 135° | $\frac{3\pi}{4}$ |
| 150° | $\frac{5\pi}{6}$ |
| 180° | $\pi$ |
| 210° | $\frac{7\pi}{6}$ |
| 225° | $\frac{5\pi}{4}$ |
| 240° | $\frac{4\pi}{3}$ |
| 270° | $\frac{3\pi}{2}$ |
| 300° | $\frac{5\pi}{3}$ |
| 315° | $\frac{7\pi}{4}$ |
| 330° | $\frac{11\pi}{6}$ |
| 360° | $2\pi$ |

### The Unit Circle

The unit circle has radius 1, centered at origin.

For angle θ, the point on the unit circle is:
$$(\cos\theta, \sin\theta)$$

### Complete Unit Circle Values

| Angle (rad) | Angle (deg) | cos θ | sin θ | tan θ |
|-------------|-------------|-------|-------|-------|
| 0 | 0° | 1 | 0 | 0 |
| $\frac{\pi}{6}$ | 30° | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{3}$ |
| $\frac{\pi}{4}$ | 45° | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | 1 |
| $\frac{\pi}{3}$ | 60° | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\sqrt{3}$ |
| $\frac{\pi}{2}$ | 90° | 0 | 1 | undefined |
| $\frac{2\pi}{3}$ | 120° | $-\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $-\sqrt{3}$ |
| $\frac{3\pi}{4}$ | 135° | $-\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | -1 |
| $\frac{5\pi}{6}$ | 150° | $-\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $-\frac{\sqrt{3}}{3}$ |
| $\pi$ | 180° | -1 | 0 | 0 |
| $\frac{7\pi}{6}$ | 210° | $-\frac{\sqrt{3}}{2}$ | $-\frac{1}{2}$ | $\frac{\sqrt{3}}{3}$ |
| $\frac{5\pi}{4}$ | 225° | $-\frac{\sqrt{2}}{2}$ | $-\frac{\sqrt{2}}{2}$ | 1 |
| $\frac{4\pi}{3}$ | 240° | $-\frac{1}{2}$ | $-\frac{\sqrt{3}}{2}$ | $\sqrt{3}$ |
| $\frac{3\pi}{2}$ | 270° | 0 | -1 | undefined |
| $\frac{5\pi}{3}$ | 300° | $\frac{1}{2}$ | $-\frac{\sqrt{3}}{2}$ | $-\sqrt{3}$ |
| $\frac{7\pi}{4}$ | 315° | $\frac{\sqrt{2}}{2}$ | $-\frac{\sqrt{2}}{2}$ | -1 |
| $\frac{11\pi}{6}$ | 330° | $\frac{\sqrt{3}}{2}$ | $-\frac{1}{2}$ | $-\frac{\sqrt{3}}{3}$ |
| $2\pi$ | 360° | 1 | 0 | 0 |

### ASTC Rule (Signs by Quadrant)
- **Q1** (0° to 90°): **A**ll positive
- **Q2** (90° to 180°): **S**ine positive
- **Q3** (180° to 270°): **T**angent positive
- **Q4** (270° to 360°): **C**osine positive

> 💡 **Memory Aid**: "All Students Take Calculus"

### Reference Angles
The **reference angle** is the acute angle formed with the x-axis.

| Quadrant | Reference Angle Formula |
|----------|------------------------|
| Q1 | θ |
| Q2 | 180° - θ (or π - θ) |
| Q3 | θ - 180° (or θ - π) |
| Q4 | 360° - θ (or 2π - θ) |

---

## 3.3 Trigonometric Functions

### Definitions (Right Triangle)
$$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}} \quad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}} \quad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}$$

$$\csc\theta = \frac{1}{\sin\theta} \quad \sec\theta = \frac{1}{\cos\theta} \quad \cot\theta = \frac{1}{\tan\theta}$$

> 💡 **SOH-CAH-TOA**: Sin = Opp/Hyp, Cos = Adj/Hyp, Tan = Opp/Adj

### Definitions (Unit Circle)
For point $(x, y)$ on unit circle at angle θ:
$$\cos\theta = x \quad \sin\theta = y \quad \tan\theta = \frac{y}{x}$$

### Properties of Sine and Cosine

| Property | Sine | Cosine |
|----------|------|--------|
| Domain | $(-\infty, \infty)$ | $(-\infty, \infty)$ |
| Range | $[-1, 1]$ | $[-1, 1]$ |
| Period | $2\pi$ | $2\pi$ |
| Amplitude | 1 | 1 |
| Even/Odd | Odd | Even |
| Symmetry | Origin | y-axis |

### Graphs of Basic Trig Functions

**Sine: $y = \sin x$**
- Starts at origin (0, 0)
- Maximum at $\frac{\pi}{2}$
- Zero at $\pi$
- Minimum at $\frac{3\pi}{2}$

**Cosine: $y = \cos x$**
- Starts at maximum (0, 1)
- Zero at $\frac{\pi}{2}$
- Minimum at $\pi$
- Zero at $\frac{3\pi}{2}$

**Tangent: $y = \tan x$**
- Period: $\pi$
- Vertical asymptotes at $x = \frac{\pi}{2} + n\pi$
- Passes through origin
- Range: all real numbers

---

## 3.4 Sinusoidal Functions

### General Forms
$$y = A\sin(B(x - C)) + D$$
$$y = A\cos(B(x - C)) + D$$

### Parameters

| Parameter | Effect | Formula |
|-----------|--------|---------|
| $A$ | Amplitude | $\|A\| = \frac{\text{max} - \text{min}}{2}$ |
| $B$ | Period change | Period $= \frac{2\pi}{\|B\|}$ |
| $C$ | Phase shift | Shift right C units |
| $D$ | Vertical shift (midline) | $D = \frac{\text{max} + \text{min}}{2}$ |

### Writing Sinusoidal Equations from Graphs

**Step 1**: Find the midline $D = \frac{\text{max} + \text{min}}{2}$

**Step 2**: Find the amplitude $|A| = \frac{\text{max} - \text{min}}{2}$

**Step 3**: Find the period, then $B = \frac{2\pi}{\text{period}}$

**Step 4**: Find the phase shift C (where does the basic pattern start?)

**Step 5**: Choose sine or cosine based on starting point:
- If starts at midline going up → sine, A > 0
- If starts at midline going down → sine, A < 0
- If starts at maximum → cosine, A > 0
- If starts at minimum → cosine, A < 0

### Frequency
$$\text{Frequency} = \frac{1}{\text{Period}} = \frac{|B|}{2\pi}$$

---

## 3.5 Inverse Trigonometric Functions

### Definitions and Domains

| Function | Domain | Range |
|----------|--------|-------|
| $\sin^{-1}(x)$ or $\arcsin(x)$ | $[-1, 1]$ | $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ |
| $\cos^{-1}(x)$ or $\arccos(x)$ | $[-1, 1]$ | $[0, \pi]$ |
| $\tan^{-1}(x)$ or $\arctan(x)$ | $(-\infty, \infty)$ | $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ |

### Special Values

| Expression | Value |
|------------|-------|
| $\sin^{-1}(0)$ | 0 |
| $\sin^{-1}(\frac{1}{2})$ | $\frac{\pi}{6}$ |
| $\sin^{-1}(\frac{\sqrt{2}}{2})$ | $\frac{\pi}{4}$ |
| $\sin^{-1}(\frac{\sqrt{3}}{2})$ | $\frac{\pi}{3}$ |
| $\sin^{-1}(1)$ | $\frac{\pi}{2}$ |
| $\cos^{-1}(1)$ | 0 |
| $\cos^{-1}(\frac{\sqrt{3}}{2})$ | $\frac{\pi}{6}$ |
| $\cos^{-1}(\frac{\sqrt{2}}{2})$ | $\frac{\pi}{4}$ |
| $\cos^{-1}(\frac{1}{2})$ | $\frac{\pi}{3}$ |
| $\cos^{-1}(0)$ | $\frac{\pi}{2}$ |
| $\tan^{-1}(0)$ | 0 |
| $\tan^{-1}(\frac{\sqrt{3}}{3})$ | $\frac{\pi}{6}$ |
| $\tan^{-1}(1)$ | $\frac{\pi}{4}$ |
| $\tan^{-1}(\sqrt{3})$ | $\frac{\pi}{3}$ |

---

## 3.6 Trigonometric Identities

### Pythagorean Identities
$$\sin^2\theta + \cos^2\theta = 1$$
$$1 + \tan^2\theta = \sec^2\theta$$
$$1 + \cot^2\theta = \csc^2\theta$$

### Reciprocal Identities
$$\csc\theta = \frac{1}{\sin\theta} \quad \sec\theta = \frac{1}{\cos\theta} \quad \cot\theta = \frac{1}{\tan\theta}$$

### Quotient Identities
$$\tan\theta = \frac{\sin\theta}{\cos\theta} \quad \cot\theta = \frac{\cos\theta}{\sin\theta}$$

### Co-function Identities
$$\sin\left(\frac{\pi}{2} - \theta\right) = \cos\theta \quad \cos\left(\frac{\pi}{2} - \theta\right) = \sin\theta$$
$$\tan\left(\frac{\pi}{2} - \theta\right) = \cot\theta \quad \cot\left(\frac{\pi}{2} - \theta\right) = \tan\theta$$

### Even-Odd Identities
$$\sin(-\theta) = -\sin\theta \quad \text{(odd)}$$
$$\cos(-\theta) = \cos\theta \quad \text{(even)}$$
$$\tan(-\theta) = -\tan\theta \quad \text{(odd)}$$

### Sum and Difference Formulas
$$\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B$$
$$\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B$$
$$\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A \tan B}$$

### Double Angle Formulas
$$\sin(2\theta) = 2\sin\theta\cos\theta$$
$$\cos(2\theta) = \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta$$
$$\tan(2\theta) = \frac{2\tan\theta}{1 - \tan^2\theta}$$

### Half Angle Formulas
$$\sin\left(\frac{\theta}{2}\right) = \pm\sqrt{\frac{1 - \cos\theta}{2}}$$
$$\cos\left(\frac{\theta}{2}\right) = \pm\sqrt{\frac{1 + \cos\theta}{2}}$$
$$\tan\left(\frac{\theta}{2}\right) = \frac{\sin\theta}{1 + \cos\theta} = \frac{1 - \cos\theta}{\sin\theta}$$

---

## 3.7 Solving Trigonometric Equations

### General Strategy
1. Isolate the trig function
2. Find reference angle(s)
3. Determine all angles in the given interval
4. Add period multiples for general solutions

### General Solutions

| Equation | General Solution |
|----------|------------------|
| $\sin\theta = k$ | $\theta = \sin^{-1}(k) + 2\pi n$ or $\theta = \pi - \sin^{-1}(k) + 2\pi n$ |
| $\cos\theta = k$ | $\theta = \pm\cos^{-1}(k) + 2\pi n$ |
| $\tan\theta = k$ | $\theta = \tan^{-1}(k) + \pi n$ |

### Special Cases
| Equation | Solutions in $[0, 2\pi)$ |
|----------|--------------------------|
| $\sin\theta = 0$ | $0, \pi$ |
| $\sin\theta = 1$ | $\frac{\pi}{2}$ |
| $\sin\theta = -1$ | $\frac{3\pi}{2}$ |
| $\cos\theta = 0$ | $\frac{\pi}{2}, \frac{3\pi}{2}$ |
| $\cos\theta = 1$ | $0$ |
| $\cos\theta = -1$ | $\pi$ |

---

## 3.8 Polar Coordinates

### Definitions
A point in polar coordinates is written as $(r, \theta)$:
- $r$ = distance from origin (pole)
- $\theta$ = angle from positive x-axis (polar axis)

### Converting Between Systems

**Polar to Rectangular:**
$$x = r\cos\theta$$
$$y = r\sin\theta$$

**Rectangular to Polar:**
$$r = \sqrt{x^2 + y^2}$$
$$\tan\theta = \frac{y}{x}$$ (adjust quadrant!)

### Equivalent Polar Points
$(r, \theta)$ is the same point as:
- $(r, \theta + 2\pi n)$ for any integer n
- $(-r, \theta + \pi)$

---

## 3.9 Polar Function Graphs

### Common Polar Curves

**Circles:**
- $r = a$: Circle centered at origin, radius $|a|$
- $r = a\cos\theta$: Circle through origin, center $(a/2, 0)$
- $r = a\sin\theta$: Circle through origin, center $(0, a/2)$

**Lines:**
- $\theta = k$: Line through origin at angle k
- $r = \frac{a}{\cos\theta}$ or $r\cos\theta = a$: Vertical line $x = a$
- $r = \frac{a}{\sin\theta}$ or $r\sin\theta = a$: Horizontal line $y = a$

**Rose Curves: $r = a\cos(n\theta)$ or $r = a\sin(n\theta)$**
- If n is odd: n petals
- If n is even: 2n petals
- Petal length = |a|

**Limaçons: $r = a + b\cos\theta$ or $r = a + b\sin\theta$**
| Condition | Shape |
|-----------|-------|
| $\|a\| < \|b\|$ | Inner loop |
| $\|a\| = \|b\|$ | Cardioid (heart-shaped) |
| $\|a\| > \|b\|$ | Dimpled or convex |

**Spirals:**
- $r = a\theta$: Archimedean spiral
- $r = ae^{b\theta}$: Logarithmic spiral

### Rate of Change in Polar

The average rate of change of $r$ with respect to $\theta$:
$$\frac{\Delta r}{\Delta \theta} = \frac{r(\theta_2) - r(\theta_1)}{\theta_2 - \theta_1}$$

**Interpreting:**
- When $r$ is increasing, the curve moves away from the origin
- When $r$ is decreasing, the curve moves toward the origin
- When $\frac{dr}{d\theta} > 0$, r is increasing
- When $\frac{dr}{d\theta} < 0$, r is decreasing

---

# 🔷 UNIT 4: Functions Involving Parameters, Vectors, and Matrices (5-10%)

## 4.1 Parametric Functions

### Definition
Parametric equations express x and y as separate functions of a parameter t:
$$x = f(t)$$
$$y = g(t)$$

### Converting Parametric to Rectangular
1. Solve one equation for t
2. Substitute into the other equation
3. Simplify

**Example:**
$x = t + 1$, $y = t^2$
Solve: $t = x - 1$
Substitute: $y = (x-1)^2$

### Common Parametric Forms

**Line through $(x_1, y_1)$ with slope m:**
$$x = x_1 + t$$
$$y = y_1 + mt$$

**Line through two points $(x_1, y_1)$ and $(x_2, y_2)$:**
$$x = x_1 + t(x_2 - x_1)$$
$$y = y_1 + t(y_2 - y_1)$$

**Circle centered at $(h, k)$ with radius r:**
$$x = h + r\cos t$$
$$y = k + r\sin t$$

**Ellipse centered at $(h, k)$:**
$$x = h + a\cos t$$
$$y = k + b\sin t$$

### Direction and Motion
- As t increases, trace the curve in a specific direction
- The direction of motion is indicated by arrows
- Starting and ending points determined by domain of t

### Rate of Change in Parametric

**Average rate of change of y with respect to x:**
$$\frac{\Delta y}{\Delta x} = \frac{y(t_2) - y(t_1)}{x(t_2) - x(t_1)} = \frac{g(t_2) - g(t_1)}{f(t_2) - f(t_1)}$$

---

## 4.2 Parametric Functions and Rates of Change

### Analyzing Parametric Motion

**Position**: $(x(t), y(t))$

**Horizontal Motion:**
- Moving right when $x(t)$ is increasing
- Moving left when $x(t)$ is decreasing
- Stationary horizontally when $\frac{dx}{dt} = 0$

**Vertical Motion:**
- Moving up when $y(t)$ is increasing
- Moving down when $y(t)$ is decreasing
- Stationary vertically when $\frac{dy}{dt} = 0$

### Particle Motion Problems
Given parametric equations for position:
1. Find when particle is at rest (both derivatives = 0)
2. Find when particle changes direction (one derivative = 0)
3. Describe path and direction of motion

---

## 4.3 Parametric Functions and Conic Sections

### Conic Sections Summary

**Circle:**
$$(x - h)^2 + (y - k)^2 = r^2$$
- Center: $(h, k)$
- Radius: $r$

**Parametric:** $x = h + r\cos t$, $y = k + r\sin t$

**Ellipse:**
$$\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1$$
- Center: $(h, k)$
- If $a > b$: horizontal major axis, vertices at $(h \pm a, k)$
- If $b > a$: vertical major axis, vertices at $(h, k \pm b)$

**Parametric:** $x = h + a\cos t$, $y = k + b\sin t$

**Parabola:**
- Vertical: $(x - h)^2 = 4p(y - k)$
- Horizontal: $(y - k)^2 = 4p(x - h)$
- Vertex: $(h, k)$
- Focus: distance $|p|$ from vertex
- Opens toward focus

**Hyperbola:**
- Horizontal: $\frac{(x-h)^2}{a^2} - \frac{(y-k)^2}{b^2} = 1$
- Vertical: $\frac{(y-k)^2}{a^2} - \frac{(x-h)^2}{b^2} = 1$
- Center: $(h, k)$
- Asymptotes: $y - k = \pm\frac{b}{a}(x - h)$ (horizontal)

---

## 4.4 Implicitly Defined Functions

### Definition
An implicit equation involves both x and y mixed together, like:
$$x^2 + y^2 = 25$$

### Converting to Explicit Form
Solve for y in terms of x (may require ±):
$$y = \pm\sqrt{25 - x^2}$$

### Analyzing Implicit Functions
- Determine if y is a function of x (use vertical line test mentally)
- Find intercepts by setting x = 0 or y = 0
- Find symmetry by testing substitutions

---

## 4.5 Vectors

### Vector Notation
A vector can be written as:
- $\vec{v} = \langle a, b \rangle$ (component form)
- $\vec{v} = a\mathbf{i} + b\mathbf{j}$ (unit vector form)

### Vector Properties

**Magnitude (Length):**
$$|\vec{v}| = \sqrt{a^2 + b^2}$$

**Direction Angle:**
$$\theta = \tan^{-1}\left(\frac{b}{a}\right)$$
(adjust for correct quadrant)

**Unit Vector:**
$$\hat{v} = \frac{\vec{v}}{|\vec{v}|} = \left\langle \frac{a}{|\vec{v}|}, \frac{b}{|\vec{v}|} \right\rangle$$

### Vector Operations

**Addition:**
$$\langle a, b \rangle + \langle c, d \rangle = \langle a+c, b+d \rangle$$

**Subtraction:**
$$\langle a, b \rangle - \langle c, d \rangle = \langle a-c, b-d \rangle$$

**Scalar Multiplication:**
$$k\langle a, b \rangle = \langle ka, kb \rangle$$

**Dot Product:**
$$\vec{u} \cdot \vec{v} = \langle a, b \rangle \cdot \langle c, d \rangle = ac + bd$$

**Alternate Dot Product Formula:**
$$\vec{u} \cdot \vec{v} = |\vec{u}||\vec{v}|\cos\theta$$

### Vector from Point A to Point B
$$\vec{AB} = \langle x_B - x_A, y_B - y_A \rangle$$

### Parallel and Perpendicular Vectors
- **Parallel**: One is a scalar multiple of the other
- **Perpendicular**: Dot product equals zero: $\vec{u} \cdot \vec{v} = 0$

### Angle Between Vectors
$$\cos\theta = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}||\vec{v}|}$$

---

## 4.6 Matrices (Introduction)

### Matrix Notation
An $m \times n$ matrix has m rows and n columns:
$$A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix}$$

### Matrix Addition and Subtraction
Add/subtract corresponding entries (matrices must have same dimensions)

### Scalar Multiplication
Multiply each entry by the scalar

### Matrix Multiplication
$$(AB)_{ij} = \sum_{k} a_{ik} \cdot b_{kj}$$

**Requirement**: Number of columns in A = Number of rows in B

**Result**: If A is $m \times n$ and B is $n \times p$, then AB is $m \times p$

### Identity Matrix
$$I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$

$AI = IA = A$ for any compatible matrix A

### Transformations Using Matrices

**Rotation by angle θ:**
$$R_\theta = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}$$

**Reflection over x-axis:**
$$\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$$

**Reflection over y-axis:**
$$\begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix}$$

**Scaling:**
$$\begin{bmatrix} a & 0 \\ 0 & b \end{bmatrix}$$
(scales x by a, y by b)

---

# 📝 Exam Strategies and Tips

## FRQ Strategies

### General FRQ Tips
1. **Show all work** - Partial credit is available
2. **Answer what is asked** - Don't provide extra information
3. **Use correct notation** - Function notation, limit notation, etc.
4. **Label your answers** - Clearly indicate parts (a), (b), (c)
5. **Include units** when given in the problem
6. **Don't erase work** - Cross out neatly if wrong

### FRQ Question Types

**Type 1: Analysis of Functions**
- Identify key features (domain, range, asymptotes, intercepts)
- Describe transformations
- Write equations from graphs

**Type 2: Modeling**
- Write equations to model situations
- Interpret parameters in context
- Make predictions

**Type 3: Solving Equations**
- Show algebraic steps clearly
- Check solutions (especially for logs and radicals)
- Give exact answers unless calculator is required

**Type 4: Rates of Change**
- Calculate average rate of change
- Interpret in context
- Connect to function behavior

### Calculator FRQ Tips
- Store intermediate values to avoid rounding errors
- Use correct window settings for graphing
- Show setup, not just final answer
- Round appropriately (usually 3 decimal places unless specified)

---

## Graphing Calculator Tips

### Essential Functions

**TI-84/Similar:**
| Task | Location/Command |
|------|------------------|
| Graph function | Y= menu |
| Find zeros | 2nd → CALC → zero |
| Find intersection | 2nd → CALC → intersect |
| Find maximum/minimum | 2nd → CALC → maximum/minimum |
| Evaluate function | VARS → Y-VARS → Function → Y1, then Y1(value) |
| Table | 2nd → TABLE |
| Regression | STAT → CALC |

### Polar Mode
- MODE → Pol
- Use θ (accessed via X,T,θ,n button)
- Adjust window: θmin, θmax, θstep

### Parametric Mode
- MODE → Par
- Enter x(t) and y(t) separately
- Adjust Tmin, Tmax, Tstep

### Calculator Window Tips
- Use ZoomFit for automatic scaling
- ZoomTrig for trig functions (sets x from -2π to 2π)
- ZoomSquare for accurate circles/angles
- Manually adjust if needed

---

## Common Mistakes to Avoid

### Unit 1: Polynomial and Rational Functions
❌ Forgetting to check for holes before finding vertical asymptotes
❌ Mixing up end behavior rules for odd vs. even degree
❌ Not factoring completely before finding zeros
❌ Forgetting that multiplicity affects graph behavior
❌ Dividing by zero when evaluating functions

### Unit 2: Exponential and Logarithmic Functions
❌ Applying log rules incorrectly (log(a+b) ≠ log(a) + log(b))
❌ Forgetting domain restrictions for logarithms
❌ Not checking solutions in original logarithmic equations
❌ Confusing growth factor with growth rate
❌ Using wrong formula for compound interest

### Unit 3: Trigonometric and Polar Functions
❌ Calculator in wrong mode (degrees vs. radians)
❌ Forgetting to find all solutions in given interval
❌ Wrong signs in quadrants (use ASTC!)
❌ Incorrect period calculation (dividing instead of multiplying)
❌ Forgetting to adjust range of inverse trig functions

### Unit 4: Parametric, Vectors, and Matrices
❌ Losing direction of motion in parametric equations
❌ Not adjusting for quadrant when finding vector direction
❌ Matrix multiplication in wrong order (AB ≠ BA usually)
❌ Forgetting that dot product gives a scalar, not a vector

---

## Quick Reference Formulas

### Essential Formulas Card

**Polynomial/Rational:**
- Zeros: Set numerator = 0
- VA: Set denominator = 0 (after canceling)
- HA: Compare degrees

**Exponential/Log:**
- $a^x = b \Rightarrow x = \log_a(b) = \frac{\ln b}{\ln a}$
- $\log_a(b) = c \Rightarrow a^c = b$
- Half-life: $A = A_0(0.5)^{t/h}$
- Compound: $A = P(1 + r/n)^{nt}$

**Trigonometry:**
- Period: $\frac{2\pi}{|B|}$
- Amplitude: $|A|$
- Midline: $y = D$
- $\sin^2\theta + \cos^2\theta = 1$

**Polar:**
- $x = r\cos\theta$, $y = r\sin\theta$
- $r = \sqrt{x^2 + y^2}$

**Vectors:**
- $|\vec{v}| = \sqrt{a^2 + b^2}$
- $\vec{u} \cdot \vec{v} = |u||v|\cos\theta$

---

## Pre-Exam Checklist

### Night Before
- [ ] Review unit circle values
- [ ] Review transformation rules
- [ ] Review all formulas on this sheet
- [ ] Check calculator batteries
- [ ] Set calculator to radian mode
- [ ] Get good sleep!

### Day of Exam
- [ ] Bring two calculators if possible
- [ ] Multiple pencils and erasers
- [ ] Check calculator is in correct mode for each problem
- [ ] Read each question carefully
- [ ] Manage time - don't spend too long on one problem

### During MCQ Section
- [ ] Eliminate obviously wrong answers
- [ ] Check your mode (degrees vs radians)
- [ ] Don't over-complicate - trust your knowledge
- [ ] Mark problems to return to if unsure

### During FRQ Section
- [ ] Read entire question first
- [ ] Identify what is being asked
- [ ] Show all work for partial credit
- [ ] Box or circle final answers
- [ ] Use proper notation and units

---

## Final Review Summary

### Key Skills by Unit

**Unit 1**: Analyze polynomial/rational functions, find asymptotes, apply transformations, understand rates of change

**Unit 2**: Work with exponential growth/decay, solve log equations, interpret parameters in context

**Unit 3**: Use unit circle, graph sinusoidal functions, solve trig equations, work in polar coordinates

**Unit 4**: Convert between parametric and rectangular, understand particle motion, perform vector operations

### Most Important Concepts
1. Function transformations (appears throughout all units)
2. Rates of change (AROC interpretation)
3. Solving equations (all types)
4. Domain and range restrictions
5. Connecting graphs, equations, and tables
6. Interpreting parameters in context

> 💪 **You've Got This!** Trust your preparation and take your time on each problem.

---

*Good luck on your AP Precalculus exam!*

:::GUIDE:::
