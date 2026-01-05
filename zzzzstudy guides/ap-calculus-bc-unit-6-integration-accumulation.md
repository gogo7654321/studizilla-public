:::GUIDE:::
unit::=6
title::=📐 Unit 6: Integration and Accumulation of Change
desc::=Master antiderivatives, definite integrals, and the Fundamental Theorem
diff::=Hard
time::=60 min
tags::=calculus,bc,integration,ftc,accumulation
content::=

# 📐 Unit 6: Integration and Accumulation of Change

> *"The integral is the inverse of the derivative, and together they form the heart of calculus."*

---

## 📋 Unit Overview

Unit 6 introduces **integration**, the second major operation in calculus. While differentiation measures instantaneous rates of change, integration measures **accumulation**—the total amount of change over an interval. This unit covers the Fundamental Theorem of Calculus, which beautifully connects these two operations.

### What You'll Master
- 🔄 Antiderivatives and indefinite integrals
- 📊 Riemann sums for approximating area
- 📐 Definite integral properties and evaluation
- ⚡ Fundamental Theorem of Calculus (Parts 1 & 2)
- 🔀 Integration by substitution (u-substitution)
- 🧮 Integration by parts (BC-specific)
- 📈 Accumulation functions and their properties

### Prerequisites
- Strong understanding of derivatives (Units 2-3)
- Familiarity with limits and continuity
- Knowledge of basic algebraic manipulation
- Comfort with function composition

---

## 📜 TIMELINE: History of Integration

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    THE EVOLUTION OF INTEGRATION                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ~250 BCE     Archimedes uses "method of exhaustion" to find areas          │
│      │        of parabolic segments and circles                             │
│      │                                                                       │
│      ▼                                                                       │
│  1635        Cavalieri develops "method of indivisibles"                    │
│      │        for computing volumes                                          │
│      │                                                                       │
│      ▼                                                                       │
│  1665-1675   Newton & Leibniz independently discover calculus               │
│      │        Newton: "fluents" and "fluxions"                              │
│      │        Leibniz: ∫ notation (elongated S for "summa")                 │
│      │                                                                       │
│      ▼                                                                       │
│  1823        Cauchy provides rigorous definition of definite integral       │
│      │                                                                       │
│      ▼                                                                       │
│  1854        Riemann defines integral using partitions                       │
│      │        (Riemann sums we use today)                                   │
│      │                                                                       │
│      ▼                                                                       │
│  1902        Lebesgue generalizes integration further                       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Fun Fact**: Leibniz chose the ∫ symbol as an elongated "S" for the Latin word *summa* (sum), reflecting that integration is fundamentally about adding up infinitely many infinitesimal pieces!

---

## 🔄 Section 1: Antiderivatives and Indefinite Integrals

### 1.1 What is an Antiderivative?

An **antiderivative** of a function $f(x)$ is a function $F(x)$ whose derivative equals $f(x)$.

$$\text{If } F'(x) = f(x), \text{ then } F(x) \text{ is an antiderivative of } f(x)$$

> **Key Insight**: Antidifferentiation "reverses" differentiation!

### 1.2 The Family of Antiderivatives

If $F(x)$ is an antiderivative of $f(x)$, then $F(x) + C$ is also an antiderivative for any constant $C$.

**Why?** Because $\frac{d}{dx}[F(x) + C] = F'(x) + 0 = f(x)$

The **indefinite integral** represents the entire family of antiderivatives:

$$\int f(x) \, dx = F(x) + C$$

Where:
- $\int$ is the integral sign
- $f(x)$ is the **integrand**
- $dx$ indicates the variable of integration
- $C$ is the **constant of integration**

### 1.3 Basic Integration Rules

| Function $f(x)$ | Antiderivative $\int f(x) \, dx$ |
|-----------------|----------------------------------|
| $k$ (constant) | $kx + C$ |
| $x^n$ (n ≠ -1) | $\frac{x^{n+1}}{n+1} + C$ |
| $x^{-1} = \frac{1}{x}$ | $\ln|x| + C$ |
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

### 1.4 Properties of Indefinite Integrals

**Constant Multiple Rule:**
$$\int k \cdot f(x) \, dx = k \int f(x) \, dx$$

**Sum/Difference Rule:**
$$\int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx$$

> ⚠️ **Warning**: There is NO product rule or quotient rule for integration!

---

### 📝 Worked Example 1: Basic Antiderivatives

**Problem**: Find $\int (3x^4 - 2x^2 + 5x - 7) \, dx$

**Solution**:
$$\int (3x^4 - 2x^2 + 5x - 7) \, dx$$

Apply the sum rule and power rule term by term:

$$= 3 \cdot \frac{x^5}{5} - 2 \cdot \frac{x^3}{3} + 5 \cdot \frac{x^2}{2} - 7x + C$$

$$= \frac{3x^5}{5} - \frac{2x^3}{3} + \frac{5x^2}{2} - 7x + C$$

✅ **Answer**: $\frac{3x^5}{5} - \frac{2x^3}{3} + \frac{5x^2}{2} - 7x + C$

---

### 📝 Worked Example 2: Trigonometric Integrals

**Problem**: Find $\int (4\cos x + 3\sec^2 x) \, dx$

**Solution**:
$$\int (4\cos x + 3\sec^2 x) \, dx = 4\sin x + 3\tan x + C$$

✅ **Answer**: $4\sin x + 3\tan x + C$

---

### 📝 Worked Example 3: Rewriting Before Integrating

**Problem**: Find $\int \frac{x^3 + 2x - 1}{x^2} \, dx$

**Solution**:
First, divide each term by $x^2$:

$$\int \frac{x^3 + 2x - 1}{x^2} \, dx = \int \left(x + \frac{2}{x} - x^{-2}\right) \, dx$$

Now integrate term by term:

$$= \frac{x^2}{2} + 2\ln|x| - \frac{x^{-1}}{-1} + C$$

$$= \frac{x^2}{2} + 2\ln|x| + \frac{1}{x} + C$$

✅ **Answer**: $\frac{x^2}{2} + 2\ln|x| + \frac{1}{x} + C$

---

## 📊 Section 2: Riemann Sums and Approximations

### 2.1 The Area Problem

How do we find the exact area under a curve? We approximate using rectangles!

A **Riemann sum** approximates the area under $f(x)$ on $[a, b]$ by dividing the interval into $n$ subintervals and summing the areas of rectangles.

### 2.2 Partition Notation

For $n$ equal subintervals on $[a, b]$:
- **Width of each subinterval**: $\Delta x = \frac{b - a}{n}$
- **Endpoints**: $x_0 = a, x_1 = a + \Delta x, x_2 = a + 2\Delta x, \ldots, x_n = b$
- **General endpoint**: $x_i = a + i \cdot \Delta x$

### 2.3 Types of Riemann Sums

#### Left Riemann Sum (LRAM)
Use the **left endpoint** of each subinterval to determine rectangle height:

$$L_n = \sum_{i=0}^{n-1} f(x_i) \cdot \Delta x = \Delta x \cdot [f(x_0) + f(x_1) + \cdots + f(x_{n-1})]$$

```
    ┌─────────────────────────────────────┐
    │     Left Riemann Sum                │
    │                         ╱           │
    │  ┌───┐              ╱              │
    │  │   │  ┌───┐   ╱                  │
    │  │   │  │   │╱ ┌───┐               │
    │  │   │  │   │  │   │               │
    │  │   │  │   │  │   │               │
    └──┴───┴──┴───┴──┴───┴───────────────┘
       x₀   x₁   x₂   x₃                  
    Heights taken at LEFT endpoints       
```

#### Right Riemann Sum (RRAM)
Use the **right endpoint** of each subinterval:

$$R_n = \sum_{i=1}^{n} f(x_i) \cdot \Delta x = \Delta x \cdot [f(x_1) + f(x_2) + \cdots + f(x_n)]$$

```
    ┌─────────────────────────────────────┐
    │     Right Riemann Sum               │
    │                         ╱           │
    │          ┌───┐      ╱  ┌───┐       │
    │  ┌───┐   │   │  ╱      │   │       │
    │  │   │   │   │╱ ┌───┐  │   │       │
    │  │   │   │   │  │   │  │   │       │
    │  │   │   │   │  │   │  │   │       │
    └──┴───┴───┴───┴──┴───┴──┴───┴───────┘
       x₀   x₁   x₂   x₃   x₄            
    Heights taken at RIGHT endpoints      
```

#### Midpoint Riemann Sum (MRAM)
Use the **midpoint** of each subinterval:

$$M_n = \sum_{i=1}^{n} f\left(\frac{x_{i-1} + x_i}{2}\right) \cdot \Delta x$$

#### Trapezoidal Sum
Use trapezoids instead of rectangles (average of left and right):

$$T_n = \frac{L_n + R_n}{2} = \frac{\Delta x}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n)]$$

### 2.4 Over/Underestimate Rules

| Function Behavior | Left Sum | Right Sum | Midpoint | Trapezoidal |
|-------------------|----------|-----------|----------|-------------|
| **Increasing** | Under | Over | Depends | Depends |
| **Decreasing** | Over | Under | Depends | Depends |
| **Concave Up** | Depends | Depends | Under | Over |
| **Concave Down** | Depends | Depends | Over | Under |

---

### 📝 Worked Example 4: Riemann Sum Calculation

**Problem**: Approximate $\int_0^4 x^2 \, dx$ using a left Riemann sum with $n = 4$ subintervals.

**Solution**:

**Step 1**: Find $\Delta x$
$$\Delta x = \frac{4 - 0}{4} = 1$$

**Step 2**: Identify left endpoints
$$x_0 = 0, \quad x_1 = 1, \quad x_2 = 2, \quad x_3 = 3$$

**Step 3**: Calculate function values
$$f(0) = 0, \quad f(1) = 1, \quad f(2) = 4, \quad f(3) = 9$$

**Step 4**: Compute the sum
$$L_4 = \Delta x \cdot [f(0) + f(1) + f(2) + f(3)]$$
$$L_4 = 1 \cdot [0 + 1 + 4 + 9] = 14$$

✅ **Answer**: $L_4 = 14$

*Note: The exact value is $\frac{64}{3} \approx 21.33$, so $L_4 = 14$ is an underestimate (function is increasing).*

---

### 📝 Worked Example 5: Trapezoidal Rule from Table

**Problem**: The table gives values of $f(x)$. Use the trapezoidal rule to approximate $\int_0^6 f(x) \, dx$.

| $x$ | 0 | 2 | 4 | 6 |
|-----|---|---|---|---|
| $f(x)$ | 3 | 5 | 4 | 6 |

**Solution**:

Here $\Delta x = 2$ and we have $n = 3$ subintervals.

$$T_3 = \frac{\Delta x}{2}[f(0) + 2f(2) + 2f(4) + f(6)]$$

$$T_3 = \frac{2}{2}[3 + 2(5) + 2(4) + 6]$$

$$T_3 = 1 \cdot [3 + 10 + 8 + 6] = 27$$

✅ **Answer**: $T_3 = 27$

---

## 📐 Section 3: The Definite Integral

### 3.1 Definition of the Definite Integral

The **definite integral** of $f(x)$ from $a$ to $b$ is defined as the limit of Riemann sums:

$$\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \cdot \Delta x$$

Where:
- $a$ is the **lower limit** of integration
- $b$ is the **upper limit** of integration
- $x_i^*$ is any point in the $i$-th subinterval
- This limit exists if $f$ is continuous on $[a, b]$

### 3.2 Geometric Interpretation

The definite integral $\int_a^b f(x) \, dx$ represents the **signed area** between the curve and the x-axis:
- Area **above** the x-axis is **positive**
- Area **below** the x-axis is **negative**

```
    ┌────────────────────────────────────────────┐
    │                                            │
    │      f(x)                                  │
    │     ╱╲                                     │
    │    ╱  ╲     Positive                       │
    │   ╱    ╲    Area (+)                       │
    │──╱──────╲──────────────────────────────────│
    │          ╲       ╱                         │
    │           ╲     ╱   Negative               │
    │            ╲   ╱    Area (−)               │
    │             ╲ ╱                            │
    │              V                             │
    │                                            │
    └────────────────────────────────────────────┘
       a                      b                   
```

### 3.3 Properties of Definite Integrals

**Property 1: Zero Width**
$$\int_a^a f(x) \, dx = 0$$

**Property 2: Reversing Limits**
$$\int_a^b f(x) \, dx = -\int_b^a f(x) \, dx$$

**Property 3: Constant Multiple**
$$\int_a^b k \cdot f(x) \, dx = k \int_a^b f(x) \, dx$$

**Property 4: Sum/Difference**
$$\int_a^b [f(x) \pm g(x)] \, dx = \int_a^b f(x) \, dx \pm \int_a^b g(x) \, dx$$

**Property 5: Additivity (Splitting Intervals)**
$$\int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx$$

**Property 6: Comparison**
If $f(x) \geq g(x)$ on $[a, b]$, then:
$$\int_a^b f(x) \, dx \geq \int_a^b g(x) \, dx$$

**Property 7: Bounds**
If $m \leq f(x) \leq M$ on $[a, b]$, then:
$$m(b-a) \leq \int_a^b f(x) \, dx \leq M(b-a)$$

---

### 📝 Worked Example 6: Using Integral Properties

**Problem**: Given $\int_0^5 f(x) \, dx = 8$ and $\int_0^5 g(x) \, dx = 3$, find:

(a) $\int_0^5 [2f(x) - 3g(x)] \, dx$

(b) $\int_5^0 f(x) \, dx$

**Solution**:

**(a)** Using properties 3 and 4:
$$\int_0^5 [2f(x) - 3g(x)] \, dx = 2\int_0^5 f(x) \, dx - 3\int_0^5 g(x) \, dx$$
$$= 2(8) - 3(3) = 16 - 9 = 7$$

**(b)** Using property 2:
$$\int_5^0 f(x) \, dx = -\int_0^5 f(x) \, dx = -8$$

✅ **Answers**: (a) $7$ (b) $-8$

---

### 📝 Worked Example 7: Splitting Integrals

**Problem**: Given $\int_0^7 f(x) \, dx = 12$ and $\int_3^7 f(x) \, dx = 5$, find $\int_0^3 f(x) \, dx$.

**Solution**:
Using property 5:
$$\int_0^7 f(x) \, dx = \int_0^3 f(x) \, dx + \int_3^7 f(x) \, dx$$

Substituting:
$$12 = \int_0^3 f(x) \, dx + 5$$

$$\int_0^3 f(x) \, dx = 12 - 5 = 7$$

✅ **Answer**: $\int_0^3 f(x) \, dx = 7$

---

## ⚡ Section 4: The Fundamental Theorem of Calculus

The **Fundamental Theorem of Calculus (FTC)** is the most important theorem in calculus! It connects differentiation and integration.

### 4.1 FTC Part 1 (Derivative of an Integral)

If $f$ is continuous on $[a, b]$ and $g(x) = \int_a^x f(t) \, dt$, then:

$$g'(x) = \frac{d}{dx}\left[\int_a^x f(t) \, dt\right] = f(x)$$

> **In words**: The derivative of an accumulation function gives back the original function!

#### Extended Version (Chain Rule)

If the upper limit is a function $u(x)$:

$$\frac{d}{dx}\left[\int_a^{u(x)} f(t) \, dt\right] = f(u(x)) \cdot u'(x)$$

If both limits are functions:

$$\frac{d}{dx}\left[\int_{v(x)}^{u(x)} f(t) \, dt\right] = f(u(x)) \cdot u'(x) - f(v(x)) \cdot v'(x)$$

---

### 📝 Worked Example 8: FTC Part 1

**Problem**: Find $\frac{d}{dx}\left[\int_2^x \sqrt{t^3 + 1} \, dt\right]$

**Solution**:
By FTC Part 1, we simply substitute $x$ for $t$:

$$\frac{d}{dx}\left[\int_2^x \sqrt{t^3 + 1} \, dt\right] = \sqrt{x^3 + 1}$$

✅ **Answer**: $\sqrt{x^3 + 1}$

---

### 📝 Worked Example 9: FTC Part 1 with Chain Rule

**Problem**: Find $\frac{d}{dx}\left[\int_1^{x^2} \cos(t^2) \, dt\right]$

**Solution**:
Let $u = x^2$, so $u'(x) = 2x$.

Using the chain rule version:
$$\frac{d}{dx}\left[\int_1^{x^2} \cos(t^2) \, dt\right] = \cos((x^2)^2) \cdot 2x = 2x\cos(x^4)$$

✅ **Answer**: $2x\cos(x^4)$

---

### 📝 Worked Example 10: FTC Part 1 with Variable Limits

**Problem**: Find $\frac{d}{dx}\left[\int_{\sin x}^{x^3} e^{t^2} \, dt\right]$

**Solution**:
Using the formula for both variable limits:

$$\frac{d}{dx}\left[\int_{\sin x}^{x^3} e^{t^2} \, dt\right] = e^{(x^3)^2} \cdot 3x^2 - e^{(\sin x)^2} \cdot \cos x$$

$$= 3x^2 e^{x^6} - \cos x \cdot e^{\sin^2 x}$$

✅ **Answer**: $3x^2 e^{x^6} - (\cos x) e^{\sin^2 x}$

---

### 4.2 FTC Part 2 (Evaluation Theorem)

If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$, then:

$$\int_a^b f(x) \, dx = F(b) - F(a) = \Big[F(x)\Big]_a^b$$

> **In words**: To evaluate a definite integral, find any antiderivative and subtract!

---

### 📝 Worked Example 11: Evaluating Definite Integrals

**Problem**: Evaluate $\int_1^4 (3x^2 - 2x + 1) \, dx$

**Solution**:

**Step 1**: Find the antiderivative
$$F(x) = x^3 - x^2 + x$$

**Step 2**: Evaluate at the limits
$$\int_1^4 (3x^2 - 2x + 1) \, dx = \Big[x^3 - x^2 + x\Big]_1^4$$

$$= (4^3 - 4^2 + 4) - (1^3 - 1^2 + 1)$$

$$= (64 - 16 + 4) - (1 - 1 + 1)$$

$$= 52 - 1 = 51$$

✅ **Answer**: $51$

---

### 📝 Worked Example 12: Definite Integral with Trig Functions

**Problem**: Evaluate $\int_0^{\pi/4} \sec^2 x \, dx$

**Solution**:
$$\int_0^{\pi/4} \sec^2 x \, dx = \Big[\tan x\Big]_0^{\pi/4}$$

$$= \tan\left(\frac{\pi}{4}\right) - \tan(0)$$

$$= 1 - 0 = 1$$

✅ **Answer**: $1$

---

### 📝 Worked Example 13: Average Value of a Function

The **average value** of $f$ on $[a, b]$ is:

$$f_{avg} = \frac{1}{b-a} \int_a^b f(x) \, dx$$

**Problem**: Find the average value of $f(x) = x^2$ on $[0, 3]$.

**Solution**:
$$f_{avg} = \frac{1}{3-0} \int_0^3 x^2 \, dx = \frac{1}{3} \cdot \Big[\frac{x^3}{3}\Big]_0^3$$

$$= \frac{1}{3} \cdot \left(\frac{27}{3} - 0\right) = \frac{1}{3} \cdot 9 = 3$$

✅ **Answer**: $f_{avg} = 3$

---

## 🔀 Section 5: Integration by Substitution (U-Substitution)

### 5.1 The Substitution Method

**U-substitution** reverses the chain rule for derivatives. It's used when the integrand contains a function and its derivative.

**Chain Rule**: $\frac{d}{dx}[F(g(x))] = F'(g(x)) \cdot g'(x)$

**Reversing**: $\int F'(g(x)) \cdot g'(x) \, dx = F(g(x)) + C$

### 5.2 The U-Substitution Process

**Step 1**: Choose $u = g(x)$ (usually the "inside" function)

**Step 2**: Compute $du = g'(x) \, dx$

**Step 3**: Substitute to eliminate all $x$'s

**Step 4**: Integrate with respect to $u$

**Step 5**: Substitute back $u = g(x)$

> 💡 **Tip**: Look for a function and its derivative (or a constant multiple of its derivative) in the integrand!

---

### 📝 Worked Example 14: Basic U-Substitution

**Problem**: Find $\int 2x(x^2 + 1)^5 \, dx$

**Solution**:

**Step 1**: Let $u = x^2 + 1$

**Step 2**: Then $du = 2x \, dx$ ✓ (This appears in our integral!)

**Step 3**: Substitute
$$\int 2x(x^2 + 1)^5 \, dx = \int u^5 \, du$$

**Step 4**: Integrate
$$= \frac{u^6}{6} + C$$

**Step 5**: Substitute back
$$= \frac{(x^2 + 1)^6}{6} + C$$

✅ **Answer**: $\frac{(x^2 + 1)^6}{6} + C$

---

### 📝 Worked Example 15: U-Sub with Adjustment

**Problem**: Find $\int x^2 \sqrt{x^3 + 4} \, dx$

**Solution**:

**Step 1**: Let $u = x^3 + 4$

**Step 2**: Then $du = 3x^2 \, dx$, so $x^2 \, dx = \frac{1}{3} du$

**Step 3**: Substitute
$$\int x^2 \sqrt{x^3 + 4} \, dx = \int \sqrt{u} \cdot \frac{1}{3} du = \frac{1}{3} \int u^{1/2} \, du$$

**Step 4**: Integrate
$$= \frac{1}{3} \cdot \frac{u^{3/2}}{3/2} + C = \frac{1}{3} \cdot \frac{2u^{3/2}}{3} + C = \frac{2u^{3/2}}{9} + C$$

**Step 5**: Substitute back
$$= \frac{2(x^3 + 4)^{3/2}}{9} + C$$

✅ **Answer**: $\frac{2(x^3 + 4)^{3/2}}{9} + C$

---

### 📝 Worked Example 16: U-Sub with Trigonometry

**Problem**: Find $\int \sin^3 x \cos x \, dx$

**Solution**:

**Step 1**: Let $u = \sin x$

**Step 2**: Then $du = \cos x \, dx$ ✓

**Step 3**: Substitute
$$\int \sin^3 x \cos x \, dx = \int u^3 \, du$$

**Step 4**: Integrate
$$= \frac{u^4}{4} + C$$

**Step 5**: Substitute back
$$= \frac{\sin^4 x}{4} + C$$

✅ **Answer**: $\frac{\sin^4 x}{4} + C$

---

### 📝 Worked Example 17: U-Sub with Exponentials

**Problem**: Find $\int e^{3x} \, dx$

**Solution**:

**Step 1**: Let $u = 3x$

**Step 2**: Then $du = 3 \, dx$, so $dx = \frac{1}{3} du$

**Step 3**: Substitute
$$\int e^{3x} \, dx = \int e^u \cdot \frac{1}{3} du = \frac{1}{3} \int e^u \, du$$

**Step 4**: Integrate
$$= \frac{1}{3} e^u + C$$

**Step 5**: Substitute back
$$= \frac{1}{3} e^{3x} + C$$

✅ **Answer**: $\frac{e^{3x}}{3} + C$

---

### 5.3 U-Substitution with Definite Integrals

**Two Methods**:

**Method 1**: Change the limits when you substitute
- If $u = g(x)$, then when $x = a$, $u = g(a)$
- When $x = b$, $u = g(b)$

**Method 2**: Substitute back to $x$ and use original limits

---

### 📝 Worked Example 18: Definite Integral with U-Sub

**Problem**: Evaluate $\int_0^2 x(x^2 + 1)^3 \, dx$

**Solution** (Method 1 - Changing Limits):

Let $u = x^2 + 1$, so $du = 2x \, dx$, which gives $x \, dx = \frac{1}{2} du$

**Change limits**:
- When $x = 0$: $u = 0^2 + 1 = 1$
- When $x = 2$: $u = 2^2 + 1 = 5$

$$\int_0^2 x(x^2 + 1)^3 \, dx = \frac{1}{2}\int_1^5 u^3 \, du$$

$$= \frac{1}{2} \cdot \Big[\frac{u^4}{4}\Big]_1^5 = \frac{1}{8}\Big[u^4\Big]_1^5$$

$$= \frac{1}{8}(625 - 1) = \frac{624}{8} = 78$$

✅ **Answer**: $78$

---

## 🧮 Section 6: Integration by Parts (BC Topic)

### 6.1 The Integration by Parts Formula

**Integration by parts** reverses the product rule for derivatives.

**Product Rule**: $\frac{d}{dx}[uv] = u\frac{dv}{dx} + v\frac{du}{dx}$

**Rearranging and integrating**:

$$\boxed{\int u \, dv = uv - \int v \, du}$$

### 6.2 Choosing u and dv: LIATE

Use **LIATE** to choose $u$ (pick the function that comes first):

| Priority | Type | Examples |
|----------|------|----------|
| **L** | Logarithmic | $\ln x$, $\log x$ |
| **I** | Inverse trig | $\arcsin x$, $\arctan x$ |
| **A** | Algebraic | $x^2$, $x^3 + 2x$ |
| **T** | Trigonometric | $\sin x$, $\cos x$ |
| **E** | Exponential | $e^x$, $2^x$ |

> 💡 **Tip**: Choose $u$ so that $du$ is simpler, and choose $dv$ so you can integrate it!

---

### 📝 Worked Example 19: Integration by Parts

**Problem**: Find $\int x e^x \, dx$

**Solution**:

Using LIATE: $x$ (Algebraic) comes before $e^x$ (Exponential)

**Choose**:
- $u = x$ → $du = dx$
- $dv = e^x \, dx$ → $v = e^x$

**Apply the formula**:
$$\int x e^x \, dx = uv - \int v \, du$$
$$= x e^x - \int e^x \, dx$$
$$= x e^x - e^x + C$$
$$= e^x(x - 1) + C$$

✅ **Answer**: $e^x(x - 1) + C$

---

### 📝 Worked Example 20: Integration by Parts with Trig

**Problem**: Find $\int x \sin x \, dx$

**Solution**:

**Choose**:
- $u = x$ → $du = dx$
- $dv = \sin x \, dx$ → $v = -\cos x$

**Apply the formula**:
$$\int x \sin x \, dx = x(-\cos x) - \int (-\cos x) \, dx$$
$$= -x \cos x + \int \cos x \, dx$$
$$= -x \cos x + \sin x + C$$

✅ **Answer**: $-x \cos x + \sin x + C$

---

### 📝 Worked Example 21: Integration by Parts (Twice)

**Problem**: Find $\int x^2 e^x \, dx$

**Solution**:

**First application**:
- $u = x^2$ → $du = 2x \, dx$
- $dv = e^x \, dx$ → $v = e^x$

$$\int x^2 e^x \, dx = x^2 e^x - \int 2x e^x \, dx = x^2 e^x - 2\int x e^x \, dx$$

**Second application** (for $\int x e^x \, dx$):
- $u = x$ → $du = dx$
- $dv = e^x \, dx$ → $v = e^x$

$$\int x e^x \, dx = x e^x - e^x$$

**Combine**:
$$\int x^2 e^x \, dx = x^2 e^x - 2(x e^x - e^x) + C$$
$$= x^2 e^x - 2x e^x + 2e^x + C$$
$$= e^x(x^2 - 2x + 2) + C$$

✅ **Answer**: $e^x(x^2 - 2x + 2) + C$

---

### 📝 Worked Example 22: Integration by Parts with Logarithm

**Problem**: Find $\int \ln x \, dx$

**Solution**:

**Choose**:
- $u = \ln x$ → $du = \frac{1}{x} dx$
- $dv = dx$ → $v = x$

**Apply the formula**:
$$\int \ln x \, dx = x \ln x - \int x \cdot \frac{1}{x} \, dx$$
$$= x \ln x - \int 1 \, dx$$
$$= x \ln x - x + C$$

✅ **Answer**: $x \ln x - x + C$ or $x(\ln x - 1) + C$

---

### 📝 Worked Example 23: Tabular Integration

For repeated integration by parts with polynomial × exponential/trig, use **tabular method**:

**Problem**: Find $\int x^3 e^{2x} \, dx$

**Solution**:

Create a table with derivatives of $u$ and integrals of $dv$:

| Sign | $u$ and derivatives | $dv$ and integrals |
|------|---------------------|-------------------|
| + | $x^3$ | $e^{2x}$ |
| − | $3x^2$ | $\frac{1}{2}e^{2x}$ |
| + | $6x$ | $\frac{1}{4}e^{2x}$ |
| − | $6$ | $\frac{1}{8}e^{2x}$ |
| + | $0$ | $\frac{1}{16}e^{2x}$ |

**Multiply diagonally and add**:
$$\int x^3 e^{2x} \, dx = x^3 \cdot \frac{e^{2x}}{2} - 3x^2 \cdot \frac{e^{2x}}{4} + 6x \cdot \frac{e^{2x}}{8} - 6 \cdot \frac{e^{2x}}{16} + C$$

$$= \frac{e^{2x}}{2}x^3 - \frac{3e^{2x}}{4}x^2 + \frac{3e^{2x}}{4}x - \frac{3e^{2x}}{8} + C$$

$$= \frac{e^{2x}}{8}(4x^3 - 6x^2 + 6x - 3) + C$$

✅ **Answer**: $\frac{e^{2x}}{8}(4x^3 - 6x^2 + 6x - 3) + C$

---

## 📈 Section 7: Accumulation Functions

### 7.1 Definition of Accumulation Function

An **accumulation function** is defined as:

$$F(x) = \int_a^x f(t) \, dt$$

This function measures the accumulated (signed) area under $f(t)$ from $a$ to $x$.

### 7.2 Properties of Accumulation Functions

1. **At the starting point**: $F(a) = \int_a^a f(t) \, dt = 0$

2. **Derivative** (by FTC Part 1): $F'(x) = f(x)$

3. **Increasing/Decreasing**:
   - $F$ is increasing where $f(x) > 0$
   - $F$ is decreasing where $f(x) < 0$

4. **Concavity** (since $F''(x) = f'(x)$):
   - $F$ is concave up where $f'(x) > 0$ (f is increasing)
   - $F$ is concave down where $f'(x) < 0$ (f is decreasing)

5. **Critical points of $F$**: Where $f(x) = 0$

6. **Inflection points of $F$**: Where $f$ has local extrema

---

### 📝 Worked Example 24: Analyzing Accumulation Functions

**Problem**: Let $F(x) = \int_0^x f(t) \, dt$ where $f$ is shown in the graph below.

```
        f(t)
         │
       2 ┼───────╲
         │       │╲
       1 ┼       │ ╲
         │       │  ╲
       0 ┼───┬───┼───╲───┬───┬───► t
         0   1   2   3   4   5
        -1 ┼           ╱
         │           ╱
        -2 ┼─────────╱
```

Find: (a) $F(2)$ (b) $F(4)$ (c) Where is $F$ increasing? (d) Where does $F$ have a local maximum?

**Solution**:

**(a)** $F(2) = \int_0^2 f(t) \, dt$ = Area of rectangle = $2 \times 2 = 4$

**(b)** $F(4) = \int_0^4 f(t) \, dt = F(2) + \int_2^4 f(t) \, dt$

From $t = 2$ to $t = 4$, we have a triangle with vertices at $(2, 2)$, $(3, 0)$, $(4, -2)$.
Area from 2 to 3 (above x-axis): $\frac{1}{2}(1)(2) = 1$
Area from 3 to 4 (below x-axis): $-\frac{1}{2}(1)(2) = -1$

$F(4) = 4 + 1 + (-1) = 4$

**(c)** $F$ is increasing where $F'(x) = f(x) > 0$, which is on $(0, 3)$

**(d)** $F$ has a local maximum where $f$ changes from positive to negative, which is at $x = 3$

✅ **Answers**: (a) $4$ (b) $4$ (c) $(0, 3)$ (d) $x = 3$

---

## 🎯 Section 8: Common Integration Patterns

### 8.1 Quick Reference Table

| Pattern | Technique | Example |
|---------|-----------|---------|
| $\int [f(x)]^n \cdot f'(x) \, dx$ | U-sub: $u = f(x)$ | $\int (\sin x)^3 \cos x \, dx$ |
| $\int \frac{f'(x)}{f(x)} \, dx$ | U-sub: $u = f(x)$, gives $\ln|u|$ | $\int \frac{2x}{x^2 + 1} \, dx$ |
| $\int e^{f(x)} \cdot f'(x) \, dx$ | U-sub: $u = f(x)$ | $\int e^{x^2} \cdot 2x \, dx$ |
| $\int x \cdot e^x \, dx$ | Integration by parts | See Example 19 |
| $\int x \cdot \sin x \, dx$ | Integration by parts | See Example 20 |
| $\int \ln x \, dx$ | Integration by parts with $dv = dx$ | See Example 22 |
| $\int x^n \cdot e^x \, dx$ | Repeated parts or tabular | See Example 23 |

### 8.2 Recognizing Patterns

**Pattern Recognition Tips**:

1. **Look for function-derivative pairs**: If you see $f(x)$ and $f'(x)$ (or a constant multiple), try u-substitution

2. **Look for composite functions**: The "inside" function is often a good choice for $u$

3. **Products of different function types**: Consider integration by parts (LIATE)

4. **Exponentials or trig with linear arguments**: Simple u-sub with $u = $ linear part

---

## 📋 Section 9: AP Exam Strategies

### 9.1 Common FRQ Types

**Type 1: Table-Based Riemann Sums**
- Given a table of values
- Asked to approximate using left, right, midpoint, or trapezoidal
- May ask if it's over/underestimate

**Type 2: Accumulation Function Analysis**
- Given graph of $f$, analyze $F(x) = \int_a^x f(t) \, dt$
- Find values, increasing/decreasing intervals, extrema

**Type 3: FTC Applications**
- Rate in → Amount out problems
- $\frac{d}{dx}\int_a^{g(x)} f(t) \, dt$ with chain rule

**Type 4: Motion Problems**
- Position from velocity: $s(t) = s(0) + \int_0^t v(\tau) \, d\tau$
- Displacement vs. total distance

### 9.2 Calculator Tips

**Allowed calculations**:
- Numerical integration (fnInt or nInt)
- Graphing accumulation functions

**Syntax** (TI-84):
```
fnInt(f(x), x, a, b)
```

**Example**: $\int_0^3 x^2 \, dx$ → `fnInt(X^2, X, 0, 3)` returns $9$

### 9.3 Common Mistakes to Avoid

❌ **Forgetting + C** in indefinite integrals

❌ **Wrong sign** when reversing limits

❌ **Forgetting chain rule** in FTC Part 1 with variable upper limit

❌ **Not changing limits** in definite integral u-substitution

❌ **Mixing up** over/underestimate rules for different Riemann sums

❌ **Dropping the absolute value** in $\int \frac{1}{x} \, dx = \ln|x| + C$

---

## 🧪 Practice Problems

### Basic Level

1. Find $\int (4x^3 - 3x^2 + 2) \, dx$

2. Evaluate $\int_0^1 (3x^2 + 2x) \, dx$

3. Find $\frac{d}{dx}\left[\int_1^x t^3 \, dt\right]$

### Intermediate Level

4. Evaluate $\int_1^4 \frac{1}{\sqrt{x}} \, dx$

5. Find $\int \frac{x}{\sqrt{x^2 + 1}} \, dx$ using u-substitution

6. Use a left Riemann sum with $n = 4$ to approximate $\int_0^2 e^x \, dx$

### Advanced Level (BC)

7. Find $\frac{d}{dx}\left[\int_x^{x^2} \sin(t^2) \, dt\right]$

8. Evaluate $\int x \cos(2x) \, dx$ using integration by parts

9. Find $\int x^2 \ln x \, dx$

### AP-Style FRQ

10. Let $f$ be continuous on $[0, 8]$ with values given in the table:

| $x$ | 0 | 2 | 4 | 6 | 8 |
|-----|---|---|---|---|---|
| $f(x)$ | 5 | 7 | 8 | 6 | 4 |

(a) Use a trapezoidal sum with 4 subintervals to approximate $\int_0^8 f(x) \, dx$

(b) Find the average value of $f$ on $[0, 8]$ using your answer from (a)

(c) Must there be a value $c$ in $(0, 8)$ where $f(c)$ equals the average value? Justify.

---

## 📝 Answer Key

1. $x^4 - x^3 + 2x + C$

2. $[x^3 + x^2]_0^1 = 2$

3. $x^3$

4. $[2\sqrt{x}]_1^4 = 4 - 2 = 2$

5. $\sqrt{x^2 + 1} + C$

6. $L_4 = 0.5(e^0 + e^{0.5} + e^1 + e^{1.5}) \approx 4.51$

7. $2x\sin(x^4) - \sin(x^2)$

8. $\frac{x\sin(2x)}{2} + \frac{\cos(2x)}{4} + C$

9. $\frac{x^3 \ln x}{3} - \frac{x^3}{9} + C$

10. (a) $T_4 = 1[5 + 2(7) + 2(8) + 2(6) + 4] = 51$
    (b) $f_{avg} = \frac{51}{8} = 6.375$
    (c) Yes, by the Mean Value Theorem for Integrals (since $f$ is continuous and $5 < 6.375 < 8$, IVT guarantees such a $c$ exists)

---

## 🔑 Key Formulas Summary

### Indefinite Integrals
$$\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$

$$\int e^x \, dx = e^x + C$$

$$\int \frac{1}{x} \, dx = \ln|x| + C$$

### Fundamental Theorem of Calculus
**Part 1**: $\frac{d}{dx}\left[\int_a^x f(t) \, dt\right] = f(x)$

**Part 2**: $\int_a^b f(x) \, dx = F(b) - F(a)$

### Riemann Sums
$$\Delta x = \frac{b-a}{n}$$

$$L_n = \sum_{i=0}^{n-1} f(x_i) \Delta x$$

$$R_n = \sum_{i=1}^{n} f(x_i) \Delta x$$

$$T_n = \frac{\Delta x}{2}[f(x_0) + 2f(x_1) + \cdots + 2f(x_{n-1}) + f(x_n)]$$

### Integration Techniques
**U-Substitution**: $\int f(g(x)) g'(x) \, dx = \int f(u) \, du$ where $u = g(x)$

**Integration by Parts**: $\int u \, dv = uv - \int v \, du$

### Average Value
$$f_{avg} = \frac{1}{b-a} \int_a^b f(x) \, dx$$

---

## 🎓 Unit Summary

**Integration** is the reverse of differentiation and measures **accumulation**. The **Fundamental Theorem of Calculus** provides the crucial link:
- **FTC Part 1**: Differentiating an integral gives back the original function
- **FTC Part 2**: Evaluating a definite integral uses antiderivatives

**Key techniques** include:
- **U-substitution**: For chain rule patterns
- **Integration by parts** (BC): For products using LIATE

**Riemann sums** approximate definite integrals using rectangles or trapezoids.

**Accumulation functions** $F(x) = \int_a^x f(t) \, dt$ track running totals and inherit properties from $f$.

> *"Integration is not just about finding areas—it's about understanding how quantities accumulate over time and space."*

---

:::GUIDE:::
