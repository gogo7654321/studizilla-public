:::GUIDE:::
unit::=2
title::=📊 Unit 2: Exponential and Logarithmic Functions
desc::=Master exponential growth/decay and logarithmic properties
diff::=Medium
time::=50 min
tags::=precalculus,exponentials,logarithms,growth-decay
content::=

# 📊 Unit 2: Exponential and Logarithmic Functions

## 📋 Unit Overview

Unit 2 explores two of the most important function families in mathematics: exponential and logarithmic functions. These functions model countless real-world phenomena from population growth to radioactive decay, from sound intensity to earthquake magnitude. Understanding their properties, graphs, and relationships is essential for success in calculus and beyond.

---

## 🎯 Learning Objectives

By the end of this unit, you should be able to:
- Identify and graph exponential functions with various bases
- Apply transformations to exponential and logarithmic functions
- Understand the relationship between exponentials and logarithms
- Use logarithm properties to simplify expressions
- Solve exponential and logarithmic equations
- Apply these functions to real-world problems

---

## 📚 Section 1: Exponential Functions

### What is an Exponential Function?

An **exponential function** is a function of the form:

$$f(x) = a \cdot b^x$$

Where:
- **a** is the initial value (y-intercept when x = 0)
- **b** is the base (b > 0 and b ≠ 1)
- **x** is the exponent (independent variable)

### Key Characteristics

| Property | When b > 1 (Growth) | When 0 < b < 1 (Decay) |
|----------|---------------------|------------------------|
| Behavior | Increasing | Decreasing |
| As x → ∞ | f(x) → ∞ | f(x) → 0 |
| As x → -∞ | f(x) → 0 | f(x) → ∞ |
| Y-intercept | (0, a) | (0, a) |
| Horizontal Asymptote | y = 0 | y = 0 |

### Domain and Range

For f(x) = a · bˣ where a > 0:
- **Domain**: All real numbers (-∞, ∞)
- **Range**: (0, ∞) when a > 0
- **Range**: (-∞, 0) when a < 0

### Examples of Exponential Functions

**Example 1**: f(x) = 2ˣ
- Base b = 2 > 1, so this is exponential growth
- Y-intercept: (0, 1)
- Points: (-1, 0.5), (0, 1), (1, 2), (2, 4), (3, 8)

**Example 2**: f(x) = (1/2)ˣ = 2⁻ˣ
- Base b = 1/2, so this is exponential decay
- Y-intercept: (0, 1)
- Points: (-2, 4), (-1, 2), (0, 1), (1, 0.5), (2, 0.25)

**Example 3**: f(x) = 3 · 4ˣ
- Initial value a = 3
- Base b = 4 (growth)
- Y-intercept: (0, 3)

---

## 📈 Section 2: Graphs of Exponential Functions

### Parent Function: f(x) = bˣ

The basic exponential function passes through (0, 1) and has a horizontal asymptote at y = 0.

### Graphing Steps

1. Identify the base b and initial value a
2. Plot the y-intercept (0, a)
3. Determine if the function grows (b > 1) or decays (0 < b < 1)
4. Plot additional points by substituting x values
5. Draw the horizontal asymptote
6. Connect points with a smooth curve

### Comparing Different Bases

For exponential growth functions:
- Larger base = steeper curve
- f(x) = 10ˣ grows faster than f(x) = 2ˣ

For exponential decay functions:
- Smaller base (closer to 0) = steeper decline
- f(x) = (0.1)ˣ decays faster than f(x) = (0.5)ˣ

### Key Points to Remember

| x | 2ˣ | 3ˣ | (1/2)ˣ |
|---|----|----|--------|
| -2 | 0.25 | 0.111 | 4 |
| -1 | 0.5 | 0.333 | 2 |
| 0 | 1 | 1 | 1 |
| 1 | 2 | 3 | 0.5 |
| 2 | 4 | 9 | 0.25 |
| 3 | 8 | 27 | 0.125 |

---

## 🔄 Section 3: Transformations of Exponential Functions

### General Form

$$f(x) = a \cdot b^{(x-h)} + k$$

Where:
- **a**: Vertical stretch/compression and reflection
- **h**: Horizontal shift
- **k**: Vertical shift
- **b**: Base of the exponential

### Transformation Effects

| Parameter | Effect |
|-----------|--------|
| a > 1 | Vertical stretch |
| 0 < a < 1 | Vertical compression |
| a < 0 | Reflection over x-axis |
| h > 0 | Shift right h units |
| h < 0 | Shift left \|h\| units |
| k > 0 | Shift up k units |
| k < 0 | Shift down \|k\| units |

### Horizontal Asymptote

The horizontal asymptote shifts with k:
- Original asymptote: y = 0
- Transformed asymptote: y = k

### Example Transformations

**Example 1**: g(x) = 2^(x-3) + 4
- Parent: f(x) = 2ˣ
- Shift right 3 units
- Shift up 4 units
- Horizontal asymptote: y = 4
- Y-intercept: 2^(0-3) + 4 = 1/8 + 4 = 4.125

**Example 2**: g(x) = -3 · 2^(x+1)
- Parent: f(x) = 2ˣ
- Vertical stretch by factor of 3
- Reflection over x-axis
- Shift left 1 unit
- Horizontal asymptote: y = 0

**Example 3**: g(x) = (1/2) · 3^(x) - 5
- Parent: f(x) = 3ˣ
- Vertical compression by factor of 1/2
- Shift down 5 units
- Horizontal asymptote: y = -5

### Finding Equations from Graphs

To find the equation of a transformed exponential:
1. Identify the horizontal asymptote (gives k)
2. Find the y-intercept and adjust for k
3. Use two points to determine a and b
4. Check for reflections (curve direction)

---

## 🌟 Section 4: The Natural Exponential Function

### Euler's Number (e)

The number **e** is an irrational constant approximately equal to:

$$e \approx 2.71828182845904523536...$$

### Definition of e

e can be defined as:

$$e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n$$

Or through the infinite series:

$$e = \sum_{n=0}^{\infty} \frac{1}{n!} = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + ...$$

### The Natural Exponential Function

$$f(x) = e^x$$

Properties:
- Domain: (-∞, ∞)
- Range: (0, ∞)
- Y-intercept: (0, 1)
- Horizontal asymptote: y = 0
- Always increasing
- Special property: The derivative of eˣ is eˣ

### Why is e Important?

1. **Continuous compound interest**: A = Pe^(rt)
2. **Natural growth/decay**: N = N₀e^(kt)
3. **Calculus**: d/dx(eˣ) = eˣ
4. **Probability**: Normal distribution uses e
5. **Physics**: Radioactive decay, capacitor discharge

### Key Values of eˣ

| x | eˣ (approximate) |
|---|------------------|
| -2 | 0.135 |
| -1 | 0.368 |
| 0 | 1 |
| 1 | 2.718 |
| 2 | 7.389 |
| 3 | 20.086 |

---

## 📖 Section 5: Introduction to Logarithms

### Definition of Logarithm

The **logarithm** is the inverse of the exponential function.

If $b^y = x$, then $\log_b(x) = y$

In words: "log base b of x equals y" means "b raised to the power y equals x"

### Converting Between Forms

| Exponential Form | Logarithmic Form |
|------------------|------------------|
| 2³ = 8 | log₂(8) = 3 |
| 10² = 100 | log₁₀(100) = 2 |
| 5⁰ = 1 | log₅(1) = 0 |
| 3⁻² = 1/9 | log₃(1/9) = -2 |
| e¹ = e | ln(e) = 1 |

### Special Logarithms

**Common Logarithm (log)**:
- Base 10
- Written as log(x) or log₁₀(x)
- Example: log(100) = 2 because 10² = 100

**Natural Logarithm (ln)**:
- Base e
- Written as ln(x) or logₑ(x)
- Example: ln(e) = 1 because e¹ = e

### Basic Logarithm Properties

For any valid base b (b > 0, b ≠ 1):

1. **logᵦ(1) = 0** (because b⁰ = 1)
2. **logᵦ(b) = 1** (because b¹ = b)
3. **logᵦ(bˣ) = x** (logarithm and exponential cancel)
4. **b^(logᵦ(x)) = x** (exponential and logarithm cancel)

### Examples

**Example 1**: Evaluate log₂(32)
- 2^? = 32
- 2⁵ = 32
- Therefore, log₂(32) = 5

**Example 2**: Evaluate log₃(1/27)
- 3^? = 1/27
- 3⁻³ = 1/27
- Therefore, log₃(1/27) = -3

**Example 3**: Evaluate ln(e⁴)
- ln(e⁴) = 4 (property: ln(eˣ) = x)

**Example 4**: Evaluate 10^(log(1000))
- 10^(log(1000)) = 1000 (property: b^(logᵦ(x)) = x)

---

## 📐 Section 6: Graphs of Logarithmic Functions

### Parent Function: f(x) = logᵦ(x)

Key features of the basic logarithmic function:

| Property | Description |
|----------|-------------|
| Domain | (0, ∞) |
| Range | (-∞, ∞) |
| X-intercept | (1, 0) |
| Vertical Asymptote | x = 0 |
| Behavior | Increasing when b > 1 |

### Key Points for f(x) = log₂(x)

| x | log₂(x) |
|---|---------|
| 1/4 | -2 |
| 1/2 | -1 |
| 1 | 0 |
| 2 | 1 |
| 4 | 2 |
| 8 | 3 |

### Relationship to Exponential Graphs

The logarithmic function is the **reflection** of the exponential function over the line y = x.

If (a, b) is on y = bˣ, then (b, a) is on y = logᵦ(x)

### Transformations of Logarithmic Functions

General form: f(x) = a · logᵦ(x - h) + k

| Transformation | Effect |
|----------------|--------|
| a > 1 | Vertical stretch |
| 0 < a < 1 | Vertical compression |
| a < 0 | Reflection over x-axis |
| h > 0 | Shift right (asymptote at x = h) |
| h < 0 | Shift left |
| k > 0 | Shift up |
| k < 0 | Shift down |

### Example: Graphing g(x) = log₂(x - 3) + 2

1. Parent function: f(x) = log₂(x)
2. Shift right 3 units
3. Shift up 2 units
4. Vertical asymptote: x = 3
5. Key point: (4, 2) since log₂(1) = 0, then add shifts

---

## 🔧 Section 7: Properties of Logarithms

### The Three Main Rules

**Product Rule**:
$$\log_b(MN) = \log_b(M) + \log_b(N)$$

The log of a product equals the sum of the logs.

**Quotient Rule**:
$$\log_b\left(\frac{M}{N}\right) = \log_b(M) - \log_b(N)$$

The log of a quotient equals the difference of the logs.

**Power Rule**:
$$\log_b(M^p) = p \cdot \log_b(M)$$

The log of a power equals the exponent times the log.

### Expanding Logarithmic Expressions

**Example 1**: Expand log₃(xy²)
$$\log_3(xy^2) = \log_3(x) + \log_3(y^2) = \log_3(x) + 2\log_3(y)$$

**Example 2**: Expand ln(x³/y)
$$\ln\left(\frac{x^3}{y}\right) = \ln(x^3) - \ln(y) = 3\ln(x) - \ln(y)$$

**Example 3**: Expand log(√(ab)/c²)
$$\log\left(\frac{\sqrt{ab}}{c^2}\right) = \log(\sqrt{ab}) - \log(c^2)$$
$$= \frac{1}{2}\log(ab) - 2\log(c)$$
$$= \frac{1}{2}[\log(a) + \log(b)] - 2\log(c)$$
$$= \frac{1}{2}\log(a) + \frac{1}{2}\log(b) - 2\log(c)$$

### Condensing Logarithmic Expressions

**Example 1**: Condense 2log(x) + 3log(y)
$$2\log(x) + 3\log(y) = \log(x^2) + \log(y^3) = \log(x^2y^3)$$

**Example 2**: Condense ln(a) - 4ln(b) + ln(c)
$$\ln(a) - 4\ln(b) + \ln(c) = \ln(a) + \ln(c) - \ln(b^4)$$
$$= \ln(ac) - \ln(b^4) = \ln\left(\frac{ac}{b^4}\right)$$

**Example 3**: Condense ½log₂(x) - 3log₂(y)
$$\frac{1}{2}\log_2(x) - 3\log_2(y) = \log_2(x^{1/2}) - \log_2(y^3)$$
$$= \log_2\left(\frac{\sqrt{x}}{y^3}\right)$$

---

## 🔄 Section 8: Change of Base Formula

### The Formula

$$\log_b(x) = \frac{\log_a(x)}{\log_a(b)}$$

Most commonly used with common log or natural log:

$$\log_b(x) = \frac{\log(x)}{\log(b)} = \frac{\ln(x)}{\ln(b)}$$

### Why We Need It

Calculators typically only have log (base 10) and ln (base e) buttons. The change of base formula allows us to evaluate logarithms with any base.

### Examples

**Example 1**: Evaluate log₅(20)
$$\log_5(20) = \frac{\log(20)}{\log(5)} = \frac{1.301}{0.699} \approx 1.861$$

**Example 2**: Evaluate log₃(50)
$$\log_3(50) = \frac{\ln(50)}{\ln(3)} = \frac{3.912}{1.099} \approx 3.561$$

**Example 3**: Express log₄(x) in terms of natural logarithm
$$\log_4(x) = \frac{\ln(x)}{\ln(4)}$$

### Special Application

To verify: log₂(8) = 3
$$\log_2(8) = \frac{\log(8)}{\log(2)} = \frac{0.903}{0.301} = 3 \checkmark$$

---

## ✏️ Section 9: Solving Exponential Equations

### Method 1: Equal Bases

When both sides can be written with the same base:

If bˣ = bʸ, then x = y

**Example 1**: Solve 2ˣ = 32
- 2ˣ = 2⁵
- x = 5

**Example 2**: Solve 9^(x+1) = 27
- (3²)^(x+1) = 3³
- 3^(2x+2) = 3³
- 2x + 2 = 3
- x = 1/2

**Example 3**: Solve 4^(2x-1) = 8^(x+2)
- (2²)^(2x-1) = (2³)^(x+2)
- 2^(4x-2) = 2^(3x+6)
- 4x - 2 = 3x + 6
- x = 8

### Method 2: Taking Logarithms

When bases cannot be made equal:

**Example 1**: Solve 5ˣ = 17
- log(5ˣ) = log(17)
- x · log(5) = log(17)
- x = log(17)/log(5)
- x ≈ 1.760

**Example 2**: Solve 3^(2x-1) = 7
- ln(3^(2x-1)) = ln(7)
- (2x - 1) · ln(3) = ln(7)
- 2x - 1 = ln(7)/ln(3)
- 2x = 1 + ln(7)/ln(3)
- x = [1 + ln(7)/ln(3)]/2
- x ≈ 1.386

**Example 3**: Solve e^(3x) = 45
- ln(e^(3x)) = ln(45)
- 3x = ln(45)
- x = ln(45)/3
- x ≈ 1.269

### Method 3: Equations with e

**Example**: Solve e^(2x) - 5e^x + 6 = 0
Let u = eˣ:
- u² - 5u + 6 = 0
- (u - 2)(u - 3) = 0
- u = 2 or u = 3
- eˣ = 2 or eˣ = 3
- x = ln(2) or x = ln(3)
- x ≈ 0.693 or x ≈ 1.099

---

## ✏️ Section 10: Solving Logarithmic Equations

### Method 1: Convert to Exponential Form

**Example 1**: Solve log₂(x) = 5
- 2⁵ = x
- x = 32

**Example 2**: Solve ln(x - 3) = 2
- e² = x - 3
- x = e² + 3
- x ≈ 10.389

**Example 3**: Solve log₃(2x + 1) = 4
- 3⁴ = 2x + 1
- 81 = 2x + 1
- x = 40

### Method 2: Using Logarithm Properties

**Example 1**: Solve log(x) + log(x - 3) = 1
- log(x(x - 3)) = 1
- x(x - 3) = 10¹
- x² - 3x - 10 = 0
- (x - 5)(x + 2) = 0
- x = 5 or x = -2
- Check: x = -2 is extraneous (can't take log of negative)
- **x = 5**

**Example 2**: Solve log₂(x + 2) + log₂(x - 1) = 2
- log₂((x + 2)(x - 1)) = 2
- (x + 2)(x - 1) = 4
- x² + x - 2 = 4
- x² + x - 6 = 0
- (x + 3)(x - 2) = 0
- x = -3 or x = 2
- Check: x = -3 makes x - 1 negative (extraneous)
- **x = 2**

**Example 3**: Solve ln(x) - ln(x - 4) = 2
- ln(x/(x - 4)) = 2
- x/(x - 4) = e²
- x = e²(x - 4)
- x = e²x - 4e²
- x - e²x = -4e²
- x(1 - e²) = -4e²
- x = -4e²/(1 - e²)
- x = 4e²/(e² - 1)
- x ≈ 4.313

### Checking for Extraneous Solutions

**IMPORTANT**: Always verify solutions in the original equation!

Logarithmic expressions require positive arguments:
- log(x) requires x > 0
- ln(x - a) requires x > a
- log₂(2x + 1) requires x > -1/2

---

## 🌍 Section 11: Exponential Growth and Decay

### General Model

$$A(t) = A_0 \cdot b^{t/p}$$

or

$$A(t) = A_0 \cdot e^{kt}$$

Where:
- A(t) = amount at time t
- A₀ = initial amount
- b = growth/decay factor
- p = period for the factor
- k = continuous growth/decay rate

### Growth (k > 0 or b > 1)

The quantity increases over time.

**Example**: Population Growth
A town has 5,000 people and grows at 3% per year.

$$P(t) = 5000 \cdot (1.03)^t$$

Find population after 10 years:
$$P(10) = 5000 \cdot (1.03)^{10} \approx 6,720$$

### Decay (k < 0 or 0 < b < 1)

The quantity decreases over time.

**Example**: Depreciation
A car worth $25,000 depreciates 15% per year.

$$V(t) = 25000 \cdot (0.85)^t$$

Find value after 5 years:
$$V(5) = 25000 \cdot (0.85)^5 \approx \$11,093$$

### Converting Between Forms

If A(t) = A₀ · bᵗ, then k = ln(b)
If A(t) = A₀ · eᵏᵗ, then b = eᵏ

**Example**: Convert P(t) = 100 · (1.05)ᵗ to continuous form
- k = ln(1.05) ≈ 0.0488
- P(t) = 100 · e^(0.0488t)

---

## ☢️ Section 12: Half-Life and Doubling Time

### Half-Life

**Half-life** is the time required for a quantity to reduce to half its initial value.

$$A(t) = A_0 \cdot \left(\frac{1}{2}\right)^{t/h}$$

Where h = half-life

### Finding Half-Life

If A(t) = A₀ · eᵏᵗ, then:
$$h = \frac{\ln(2)}{|k|} = \frac{0.693}{|k|}$$

**Example**: Carbon-14 has a decay constant k ≈ -0.000121 per year.
$$h = \frac{0.693}{0.000121} \approx 5,730 \text{ years}$$

### Half-Life Problems

**Example**: Radioactive iodine-131 has a half-life of 8 days. If you start with 200 mg, how much remains after 20 days?

$$A(t) = 200 \cdot \left(\frac{1}{2}\right)^{20/8}$$
$$A(20) = 200 \cdot \left(\frac{1}{2}\right)^{2.5}$$
$$A(20) = 200 \cdot 0.177 \approx 35.4 \text{ mg}$$

### Doubling Time

**Doubling time** is the time required for a quantity to double.

$$t_d = \frac{\ln(2)}{k}$$

**Example**: A bacteria population doubles every 4 hours. Write the growth function.

$$P(t) = P_0 \cdot 2^{t/4}$$

or using continuous growth:
$$k = \frac{\ln(2)}{4} \approx 0.173$$
$$P(t) = P_0 \cdot e^{0.173t}$$

---

## 💰 Section 13: Compound Interest

### Discrete Compounding

$$A = P\left(1 + \frac{r}{n}\right)^{nt}$$

Where:
- A = final amount
- P = principal (initial investment)
- r = annual interest rate (as decimal)
- n = number of times compounded per year
- t = time in years

### Compounding Frequencies

| Frequency | n value |
|-----------|---------|
| Annually | 1 |
| Semi-annually | 2 |
| Quarterly | 4 |
| Monthly | 12 |
| Weekly | 52 |
| Daily | 365 |

### Continuous Compounding

$$A = Pe^{rt}$$

This is the limit as n → ∞

### Examples

**Example 1**: $5,000 at 6% compounded quarterly for 10 years

$$A = 5000\left(1 + \frac{0.06}{4}\right)^{4 \cdot 10}$$
$$A = 5000(1.015)^{40}$$
$$A \approx \$9,070.09$$

**Example 2**: $5,000 at 6% compounded continuously for 10 years

$$A = 5000 \cdot e^{0.06 \cdot 10}$$
$$A = 5000 \cdot e^{0.6}$$
$$A \approx \$9,110.59$$

**Example 3**: How long to double $1,000 at 5% compounded monthly?

$$2000 = 1000\left(1 + \frac{0.05}{12}\right)^{12t}$$
$$2 = (1.00417)^{12t}$$
$$\ln(2) = 12t \cdot \ln(1.00417)$$
$$t = \frac{\ln(2)}{12 \cdot \ln(1.00417)}$$
$$t \approx 13.9 \text{ years}$$

---

## 🔊 Section 14: Logarithmic Scales

### The Decibel Scale (Sound Intensity)

$$\beta = 10 \log\left(\frac{I}{I_0}\right)$$

Where:
- β = sound level in decibels (dB)
- I = sound intensity
- I₀ = reference intensity (10⁻¹² W/m²)

**Example**: A sound has intensity 10⁻⁵ W/m². Find the decibel level.

$$\beta = 10 \log\left(\frac{10^{-5}}{10^{-12}}\right)$$
$$\beta = 10 \log(10^7)$$
$$\beta = 10 \cdot 7 = 70 \text{ dB}$$

### The Richter Scale (Earthquakes)

$$M = \log\left(\frac{I}{I_0}\right)$$

Where:
- M = magnitude
- I = intensity of earthquake
- I₀ = reference intensity

**Example**: How many times more intense is a magnitude 7 earthquake than a magnitude 5?

$$\frac{I_7}{I_5} = \frac{I_0 \cdot 10^7}{I_0 \cdot 10^5} = 10^2 = 100$$

A magnitude 7 earthquake is 100 times more intense.

### The pH Scale (Acidity)

$$\text{pH} = -\log[H^+]$$

Where [H⁺] is the hydrogen ion concentration.

**Example**: If [H⁺] = 3.2 × 10⁻⁴, find pH.

$$\text{pH} = -\log(3.2 \times 10^{-4})$$
$$\text{pH} = -(\log(3.2) + \log(10^{-4}))$$
$$\text{pH} = -(0.505 - 4)$$
$$\text{pH} \approx 3.5$$

---

## 📊 Section 15: Comparing Exponential and Logarithmic Functions

### Inverse Relationship

| Exponential: y = bˣ | Logarithmic: y = logᵦ(x) |
|---------------------|--------------------------|
| Domain: (-∞, ∞) | Domain: (0, ∞) |
| Range: (0, ∞) | Range: (-∞, ∞) |
| Asymptote: y = 0 | Asymptote: x = 0 |
| Y-intercept: (0, 1) | X-intercept: (1, 0) |
| Always positive output | Output can be any real |

### Graphical Relationship

- The graphs are reflections of each other over the line y = x
- If (a, b) is on y = bˣ, then (b, a) is on y = logᵦ(x)

### Solving Using Inverses

To solve exponential equations: Take the logarithm
To solve logarithmic equations: Exponentiate

**Example**: Solve log₃(x) = 4
- Apply exponential: 3⁴ = x
- x = 81

**Example**: Solve 2ˣ = 10
- Apply logarithm: x = log₂(10)
- x = log(10)/log(2) ≈ 3.322

---

## 🎯 Section 16: Practice Problems

### Exponential Functions

1. Graph f(x) = 3 · 2^(x-1) - 4
   - Identify transformations, asymptote, and key points

2. Solve: 4^(x+2) = 8^(2x-1)

3. Solve: e^(2x) - 7e^x + 12 = 0

### Logarithmic Functions

4. Expand: log₂(x³y/z²)

5. Condense: 3ln(x) - 2ln(y) + ½ln(z)

6. Solve: log₃(x) + log₃(x + 6) = 3

### Applications

7. An investment of $10,000 earns 4.5% interest compounded monthly. Find the value after 15 years.

8. A radioactive substance has a half-life of 12 hours. How long until only 10% remains?

9. A bacteria culture triples every 5 hours. Starting with 500 bacteria, when will there be 50,000?

---

## ✅ Section 17: Solutions to Practice Problems

### Problem 1 Solution
f(x) = 3 · 2^(x-1) - 4
- Parent: 2ˣ
- Shift right 1: 2^(x-1)
- Stretch by 3: 3 · 2^(x-1)
- Shift down 4: 3 · 2^(x-1) - 4
- Asymptote: y = -4
- Y-intercept: 3 · 2⁻¹ - 4 = 1.5 - 4 = -2.5

### Problem 2 Solution
4^(x+2) = 8^(2x-1)
- (2²)^(x+2) = (2³)^(2x-1)
- 2^(2x+4) = 2^(6x-3)
- 2x + 4 = 6x - 3
- 7 = 4x
- x = 7/4

### Problem 3 Solution
e^(2x) - 7e^x + 12 = 0
Let u = eˣ:
- u² - 7u + 12 = 0
- (u - 3)(u - 4) = 0
- u = 3 or u = 4
- eˣ = 3 → x = ln(3) ≈ 1.099
- eˣ = 4 → x = ln(4) ≈ 1.386

### Problem 4 Solution
log₂(x³y/z²)
= log₂(x³) + log₂(y) - log₂(z²)
= 3log₂(x) + log₂(y) - 2log₂(z)

### Problem 5 Solution
3ln(x) - 2ln(y) + ½ln(z)
= ln(x³) - ln(y²) + ln(z^(1/2))
= ln(x³ · √z / y²)
= ln(x³√z/y²)

### Problem 6 Solution
log₃(x) + log₃(x + 6) = 3
- log₃(x(x + 6)) = 3
- x(x + 6) = 27
- x² + 6x - 27 = 0
- (x + 9)(x - 3) = 0
- x = -9 or x = 3
- Check: x = -9 is extraneous
- **x = 3**

### Problem 7 Solution
A = 10000(1 + 0.045/12)^(12·15)
A = 10000(1.00375)^180
A ≈ $19,614.93

### Problem 8 Solution
0.10 · A₀ = A₀ · (1/2)^(t/12)
0.10 = (1/2)^(t/12)
log(0.10) = (t/12) · log(0.5)
t = 12 · log(0.10)/log(0.5)
t ≈ 39.9 hours

### Problem 9 Solution
50000 = 500 · 3^(t/5)
100 = 3^(t/5)
log(100) = (t/5) · log(3)
t = 5 · log(100)/log(3)
t ≈ 20.96 hours

---

## 📝 Key Formulas Summary

### Exponential Functions
- Standard form: f(x) = a · bˣ
- Transformed: f(x) = a · b^(x-h) + k
- Natural exponential: f(x) = eˣ

### Logarithmic Functions
- Definition: logᵦ(x) = y ⟺ bʸ = x
- Common log: log(x) = log₁₀(x)
- Natural log: ln(x) = logₑ(x)

### Logarithm Properties
- Product: logᵦ(MN) = logᵦ(M) + logᵦ(N)
- Quotient: logᵦ(M/N) = logᵦ(M) - logᵦ(N)
- Power: logᵦ(Mᵖ) = p · logᵦ(M)
- Change of base: logᵦ(x) = log(x)/log(b)

### Applications
- Compound interest: A = P(1 + r/n)^(nt)
- Continuous compound: A = Peʳᵗ
- Growth/Decay: A(t) = A₀ · eᵏᵗ
- Half-life: t₁/₂ = ln(2)/|k|

---

## 🎓 AP Exam Tips

### Common Mistakes to Avoid

1. **Forgetting domain restrictions** on logarithms
2. **Not checking for extraneous solutions**
3. **Confusing log properties** (log(a+b) ≠ log(a) + log(b))
4. **Misapplying the power rule** to the base
5. **Forgetting the asymptote** shifts with transformations

### Calculator Tips

- Use LOG for common logarithm
- Use LN for natural logarithm
- Use change of base for other bases
- Store intermediate values to avoid rounding errors

### Multiple Choice Strategies

- Eliminate answers with wrong domain/range
- Check asymptote behavior
- Test specific values when in doubt
- Remember inverse relationships

### Free Response Tips

- Show all steps clearly
- State the property or rule you're using
- Check answers in original equation
- Include units in application problems
- Verify reasonableness of answers

---

## 🔗 Connections to Other Units

### Unit 1: Functions
- Exponentials and logs are inverse functions
- Domain and range concepts apply

### Unit 3: Polynomial and Rational Functions
- Comparing end behavior
- Asymptote analysis

### Unit 4: Trigonometry
- Both use transformations
- Both have periodic vs. non-periodic behavior

### Future: Calculus
- Derivatives: d/dx(eˣ) = eˣ
- Derivatives: d/dx(ln x) = 1/x
- Integrals involving exponentials
- L'Hôpital's Rule applications

---

:::GUIDE:::
