:::GUIDE:::
unit::=7
title::=📐 Unit 7: Differential Equations
desc::=Master slope fields, Euler's method, and solving differential equations
diff::=Hard
time::=55 min
tags::=calculus,bc,differential-equations,slope-fields,eulers-method
content::=

# 📐 Unit 7: Differential Equations

## 📚 Overview

Differential equations are equations that involve derivatives. They describe how quantities change and are fundamental to modeling real-world phenomena in physics, biology, economics, and engineering. This unit covers techniques for solving and analyzing differential equations, from graphical methods to analytical solutions.

---

## 🎯 Key Concepts

| Topic | Description | Difficulty |
|-------|-------------|------------|
| Slope Fields | Visualizing solutions graphically | Medium |
| Euler's Method | Numerical approximation technique | Medium |
| Separable DEs | Analytical solution method | Medium |
| Exponential Models | Growth and decay applications | Medium |
| Logistic Models | Population dynamics (BC only) | Hard |

---

## 📊 Slope Fields (Direction Fields)

### What is a Slope Field?

A **slope field** is a graphical representation of a differential equation. At each point $(x, y)$ in the plane, we draw a small line segment with slope equal to $\frac{dy}{dx}$ at that point.

### Understanding Slope Fields

Given a differential equation $\frac{dy}{dx} = f(x, y)$:

1. **Choose grid points** $(x, y)$ in the coordinate plane
2. **Calculate the slope** $f(x, y)$ at each point
3. **Draw short segments** with that slope at each point

### Example: Creating a Slope Field

For $\frac{dy}{dx} = x + y$:

| Point (x, y) | Slope = x + y | Segment Direction |
|--------------|---------------|-------------------|
| (0, 0) | 0 | Horizontal |
| (1, 0) | 1 | Rising at 45° |
| (0, 1) | 1 | Rising at 45° |
| (-1, 1) | 0 | Horizontal |
| (1, 1) | 2 | Steep rising |
| (-1, -1) | -2 | Steep falling |

### Slope Field Diagram

```
     y
     ↑
   2 |  ↗  ↗  ↗  ↗  ↗
     |
   1 |  →  ↗  ↗  ↗  ↗
     |
   0 |  ↘  →  ↗  ↗  ↗
     |
  -1 |  ↘  ↘  →  ↗  ↗
     |
  -2 |  ↘  ↘  ↘  →  ↗
     +------------------→ x
       -2  -1   0   1   2
```

### Reading Slope Fields

**Key observations:**
- **Horizontal segments** occur where $\frac{dy}{dx} = 0$
- **Vertical tangents** occur where $\frac{dy}{dx}$ is undefined
- **Isoclines** are curves where the slope is constant

### Isoclines

An **isocline** is a curve where all slope segments have the same value.

For $\frac{dy}{dx} = f(x, y) = c$ (constant):

**Example:** For $\frac{dy}{dx} = x + y$
- Isocline for slope 0: $x + y = 0$ (the line $y = -x$)
- Isocline for slope 1: $x + y = 1$ (the line $y = 1 - x$)
- Isocline for slope -1: $x + y = -1$ (the line $y = -1 - x$)

### Matching Slope Fields to Equations

**Strategy:**
1. Check where slopes are zero (horizontal segments)
2. Check where slopes are positive/negative
3. Look for patterns (depends only on $x$, only on $y$, or both)
4. Identify any equilibrium solutions

**Type 1: $\frac{dy}{dx} = f(x)$ only**
- Slopes are the same along vertical lines
- All points with same $x$ have same slope

**Type 2: $\frac{dy}{dx} = f(y)$ only**
- Slopes are the same along horizontal lines
- All points with same $y$ have same slope

**Type 3: $\frac{dy}{dx} = f(x, y)$**
- Slopes vary in both directions

---

## 🔢 Euler's Method

### What is Euler's Method?

**Euler's Method** is a numerical technique for approximating solutions to differential equations when analytical solutions are difficult or impossible to find.

### The Algorithm

Given:
- Differential equation: $\frac{dy}{dx} = f(x, y)$
- Initial condition: $(x_0, y_0)$
- Step size: $h$

**Formula:**
$$x_{n+1} = x_n + h$$
$$y_{n+1} = y_n + h \cdot f(x_n, y_n)$$

### Geometric Interpretation

Euler's method uses the tangent line at each point to estimate the next point:

```
       y
       ↑
       |        Actual curve
       |       /
       |      /
       |     / ← Tangent line
       |    /   approximation
       |   /
       |  • ← (x₁, y₁)
       | /
       |• ← (x₀, y₀)
       +------------------→ x
```

### Step-by-Step Example

**Problem:** Use Euler's method to approximate $y(1)$ for:
$$\frac{dy}{dx} = x + y, \quad y(0) = 1$$
with step size $h = 0.5$

**Solution:**

| Step | $x_n$ | $y_n$ | $f(x_n, y_n) = x_n + y_n$ | $y_{n+1} = y_n + h \cdot f$ |
|------|-------|-------|---------------------------|----------------------------|
| 0 | 0 | 1 | 0 + 1 = 1 | 1 + 0.5(1) = 1.5 |
| 1 | 0.5 | 1.5 | 0.5 + 1.5 = 2 | 1.5 + 0.5(2) = 2.5 |
| 2 | 1 | 2.5 | — | — |

**Answer:** $y(1) \approx 2.5$

### Euler's Method with Smaller Steps

Using $h = 0.25$:

| Step | $x_n$ | $y_n$ | $f(x_n, y_n)$ | $y_{n+1}$ |
|------|-------|-------|---------------|-----------|
| 0 | 0 | 1 | 1 | 1.25 |
| 1 | 0.25 | 1.25 | 1.5 | 1.625 |
| 2 | 0.5 | 1.625 | 2.125 | 2.15625 |
| 3 | 0.75 | 2.15625 | 2.90625 | 2.8828125 |
| 4 | 1 | 2.8828... | — | — |

**Answer with smaller step:** $y(1) \approx 2.883$

### Accuracy and Error

**Important observations:**
- Smaller step size → More accurate approximation
- Euler's method tends to **underestimate** concave up curves
- Euler's method tends to **overestimate** concave down curves

**Error Analysis:**
- **Local error** (per step): $O(h^2)$
- **Global error** (accumulated): $O(h)$

### When Euler's Method Works Well

✅ **Works well when:**
- Solution curve has low curvature
- Step size is sufficiently small
- Function $f(x, y)$ is smooth

❌ **May be inaccurate when:**
- Solution changes rapidly
- Curve has high curvature
- Step size is too large

---

## 🧮 Separable Differential Equations

### Definition

A **separable differential equation** can be written in the form:
$$\frac{dy}{dx} = f(x) \cdot g(y)$$

Or equivalently:
$$\frac{dy}{dx} = \frac{f(x)}{h(y)}$$

### Solving Method

**Step 1:** Separate variables
$$\frac{1}{g(y)} dy = f(x) dx$$

**Step 2:** Integrate both sides
$$\int \frac{1}{g(y)} dy = \int f(x) dx$$

**Step 3:** Solve for $y$ (if possible)

**Step 4:** Apply initial conditions (if given)

### Example 1: Basic Separation

**Solve:** $\frac{dy}{dx} = xy$

**Solution:**

Step 1: Separate
$$\frac{1}{y} dy = x \, dx$$

Step 2: Integrate
$$\int \frac{1}{y} dy = \int x \, dx$$
$$\ln|y| = \frac{x^2}{2} + C$$

Step 3: Solve for $y$
$$|y| = e^{x^2/2 + C} = e^C \cdot e^{x^2/2}$$
$$y = Ae^{x^2/2}$$

where $A = \pm e^C$ (or $A = 0$ for trivial solution)

### Example 2: With Initial Condition

**Solve:** $\frac{dy}{dx} = \frac{x}{y}$, $y(0) = 2$

**Solution:**

Step 1: Separate
$$y \, dy = x \, dx$$

Step 2: Integrate
$$\int y \, dy = \int x \, dx$$
$$\frac{y^2}{2} = \frac{x^2}{2} + C$$
$$y^2 = x^2 + 2C$$

Step 3: Apply initial condition
$$y(0) = 2: \quad 4 = 0 + 2C \quad \Rightarrow \quad C = 2$$

Step 4: Final answer
$$y^2 = x^2 + 4$$
$$y = \sqrt{x^2 + 4}$$ (taking positive root since $y(0) = 2 > 0$)

### Example 3: Exponential Type

**Solve:** $\frac{dy}{dx} = 3y$, $y(0) = 5$

**Solution:**

$$\frac{1}{y} dy = 3 \, dx$$
$$\ln|y| = 3x + C$$
$$y = Ae^{3x}$$

Apply IC: $5 = Ae^0 = A$

**Answer:** $y = 5e^{3x}$

### Example 4: More Complex

**Solve:** $\frac{dy}{dx} = \frac{y^2 + 1}{x^2 + 1}$

**Solution:**

$$\frac{1}{y^2 + 1} dy = \frac{1}{x^2 + 1} dx$$

$$\int \frac{1}{y^2 + 1} dy = \int \frac{1}{x^2 + 1} dx$$

$$\arctan(y) = \arctan(x) + C$$

$$y = \tan(\arctan(x) + C)$$

### Common Patterns

| Equation Form | Solution Type |
|---------------|---------------|
| $\frac{dy}{dx} = ky$ | $y = Ce^{kx}$ |
| $\frac{dy}{dx} = ky^2$ | $y = \frac{1}{C - kx}$ |
| $\frac{dy}{dx} = \frac{y}{x}$ | $y = Cx$ |
| $\frac{dy}{dx} = -\frac{x}{y}$ | $x^2 + y^2 = C$ |

---

## 📈 Exponential Growth and Decay

### The Basic Model

The differential equation for exponential growth/decay:
$$\frac{dy}{dt} = ky$$

**Solution:** $y = y_0 e^{kt}$

Where:
- $y_0$ = initial value (when $t = 0$)
- $k$ = growth/decay constant
- $k > 0$: exponential growth
- $k < 0$: exponential decay

### Exponential Growth

**Characteristics:**
- Population increases without bound
- Rate of change proportional to current amount
- Doubling time is constant

**Doubling Time Formula:**
$$T_{double} = \frac{\ln 2}{k}$$

### Example: Population Growth

**Problem:** A bacteria population doubles every 3 hours. If initially there are 1000 bacteria, find:
(a) The growth constant $k$
(b) Population after 8 hours
(c) Time to reach 50,000 bacteria

**Solution:**

(a) Using doubling time:
$$3 = \frac{\ln 2}{k}$$
$$k = \frac{\ln 2}{3} \approx 0.231$$

(b) Population after 8 hours:
$$P(t) = 1000e^{kt}$$
$$P(8) = 1000e^{(0.231)(8)}$$
$$P(8) = 1000e^{1.848} \approx 6350$$

(c) Time to reach 50,000:
$$50000 = 1000e^{0.231t}$$
$$50 = e^{0.231t}$$
$$\ln 50 = 0.231t$$
$$t = \frac{\ln 50}{0.231} \approx 16.9 \text{ hours}$$

### Exponential Decay

**Characteristics:**
- Quantity decreases toward zero
- Never completely reaches zero
- Half-life is constant

**Half-Life Formula:**
$$T_{half} = \frac{\ln 2}{|k|}$$

### Example: Radioactive Decay

**Problem:** A radioactive substance has a half-life of 5730 years (Carbon-14). 
If you start with 100 grams, how much remains after 10,000 years?

**Solution:**

Find $k$:
$$5730 = \frac{\ln 2}{|k|}$$
$$|k| = \frac{\ln 2}{5730} \approx 0.000121$$
$$k \approx -0.000121$$

Amount after 10,000 years:
$$A(t) = 100e^{-0.000121 \cdot 10000}$$
$$A(10000) = 100e^{-1.21}$$
$$A(10000) \approx 29.8 \text{ grams}$$

### Newton's Law of Cooling

**Model:**
$$\frac{dT}{dt} = k(T - T_s)$$

Where:
- $T$ = temperature of object
- $T_s$ = surrounding temperature (constant)
- $k$ = cooling constant ($k < 0$)

**Solution:**
$$T(t) = T_s + (T_0 - T_s)e^{kt}$$

### Example: Cooling Coffee

**Problem:** A cup of coffee at 180°F is placed in a room at 70°F. After 5 minutes, it cools to 160°F. Find:
(a) Temperature after 10 minutes
(b) Time to cool to 100°F

**Solution:**

Given: $T_0 = 180$, $T_s = 70$, $T(5) = 160$

$$T(t) = 70 + (180 - 70)e^{kt} = 70 + 110e^{kt}$$

Find $k$:
$$160 = 70 + 110e^{5k}$$
$$90 = 110e^{5k}$$
$$e^{5k} = \frac{9}{11}$$
$$k = \frac{\ln(9/11)}{5} \approx -0.0401$$

(a) Temperature after 10 minutes:
$$T(10) = 70 + 110e^{-0.0401 \cdot 10}$$
$$T(10) = 70 + 110(0.669) \approx 143.6°F$$

(b) Time to 100°F:
$$100 = 70 + 110e^{-0.0401t}$$
$$30 = 110e^{-0.0401t}$$
$$e^{-0.0401t} = \frac{3}{11}$$
$$t = \frac{\ln(3/11)}{-0.0401} \approx 32.4 \text{ minutes}$$

---

## 🌱 Logistic Differential Equations (BC Only)

### The Logistic Model

The **logistic differential equation** models population growth with a carrying capacity:

$$\frac{dP}{dt} = kP\left(1 - \frac{P}{L}\right)$$

Or equivalently:
$$\frac{dP}{dt} = kP\left(\frac{L - P}{L}\right)$$

Where:
- $P$ = population
- $k$ = growth rate constant
- $L$ = carrying capacity (maximum sustainable population)

### Understanding the Model

**Analysis:**
- When $P$ is small: $\frac{dP}{dt} \approx kP$ (exponential growth)
- When $P = L$: $\frac{dP}{dt} = 0$ (equilibrium)
- When $P > L$: $\frac{dP}{dt} < 0$ (population decreases)

### Equilibrium Solutions

Setting $\frac{dP}{dt} = 0$:
$$kP\left(1 - \frac{P}{L}\right) = 0$$

**Equilibrium points:**
- $P = 0$ (unstable equilibrium)
- $P = L$ (stable equilibrium)

### The Logistic Solution

The general solution to the logistic equation is:

$$P(t) = \frac{L}{1 + Ae^{-kt}}$$

Where $A = \frac{L - P_0}{P_0}$ and $P_0$ is the initial population.

### Logistic Growth Curve

```
   P
   ↑
 L |---------------------------- carrying capacity
   |                    ___----
   |               __--
   |           _--
   |        _-
   |      _-
   |    _-
   |  _-     ← Inflection point at P = L/2
   | -
   |_
   +--------------------------------→ t
```

### Key Features of Logistic Curves

1. **S-shaped (sigmoid) curve**
2. **Horizontal asymptotes:** $P = 0$ and $P = L$
3. **Inflection point:** occurs at $P = \frac{L}{2}$
4. **Maximum growth rate:** at the inflection point

### Finding the Inflection Point

The inflection point occurs when $\frac{d^2P}{dt^2} = 0$.

For $\frac{dP}{dt} = kP(1 - \frac{P}{L})$:

Taking the derivative:
$$\frac{d^2P}{dt^2} = k\frac{dP}{dt} - \frac{2kP}{L}\frac{dP}{dt}$$
$$= k\frac{dP}{dt}\left(1 - \frac{2P}{L}\right)$$

Setting equal to zero: $P = \frac{L}{2}$

**At inflection point:**
- Population is half the carrying capacity
- Growth rate is maximum
- $\frac{dP}{dt}_{max} = \frac{kL}{4}$

### Example: Logistic Population

**Problem:** A population grows logistically with carrying capacity 10,000 and growth constant $k = 0.5$. Initially, there are 1,000 individuals.

(a) Write the differential equation
(b) Find $P(t)$
(c) When does the population reach 5,000?
(d) What is the maximum rate of population growth?

**Solution:**

(a) Differential equation:
$$\frac{dP}{dt} = 0.5P\left(1 - \frac{P}{10000}\right)$$

(b) Find $A$:
$$A = \frac{L - P_0}{P_0} = \frac{10000 - 1000}{1000} = 9$$

Solution:
$$P(t) = \frac{10000}{1 + 9e^{-0.5t}}$$

(c) When $P = 5000$:
$$5000 = \frac{10000}{1 + 9e^{-0.5t}}$$
$$1 + 9e^{-0.5t} = 2$$
$$9e^{-0.5t} = 1$$
$$e^{-0.5t} = \frac{1}{9}$$
$$t = \frac{\ln 9}{0.5} \approx 4.39$$

(d) Maximum growth rate (at $P = 5000$):
$$\frac{dP}{dt}_{max} = \frac{kL}{4} = \frac{0.5 \times 10000}{4} = 1250 \text{ per unit time}$$

### Logistic vs. Exponential

| Feature | Exponential | Logistic |
|---------|-------------|----------|
| Growth pattern | Unlimited | Limited by L |
| Long-term behavior | $\to \infty$ | $\to L$ |
| Rate of change | Always increasing | Increases then decreases |
| Curve shape | J-shaped | S-shaped |
| Inflection point | None | At $P = L/2$ |

---

## 🎯 General and Particular Solutions

### General Solution

A **general solution** contains an arbitrary constant (or constants) and represents a family of curves.

**Example:** For $\frac{dy}{dx} = 2x$

General solution: $y = x^2 + C$

This represents infinitely many parabolas, one for each value of $C$.

### Particular Solution

A **particular solution** satisfies a specific initial condition, with no arbitrary constants.

**Example:** For $\frac{dy}{dx} = 2x$ with $y(1) = 5$

$$y = x^2 + C$$
$$5 = 1 + C$$
$$C = 4$$

Particular solution: $y = x^2 + 4$

### Initial Value Problems (IVPs)

An **Initial Value Problem** consists of:
1. A differential equation
2. An initial condition $y(x_0) = y_0$

**Standard form:** 
$$\frac{dy}{dx} = f(x, y), \quad y(x_0) = y_0$$

### Existence and Uniqueness

**Theorem:** If $f(x, y)$ and $\frac{\partial f}{\partial y}$ are continuous in a region containing $(x_0, y_0)$, then the IVP has a unique solution near that point.

---

## 📝 Practice Problems

### Slope Fields

**Problem 1:** Match the slope field to the equation:

(A) $\frac{dy}{dx} = x$
(B) $\frac{dy}{dx} = y$  
(C) $\frac{dy}{dx} = x + y$
(D) $\frac{dy}{dx} = xy$

*Hint: Check where slopes are zero and look for patterns*

**Problem 2:** Sketch the slope field for $\frac{dy}{dx} = y - x$ at integer points from -2 to 2.

### Euler's Method

**Problem 3:** Use Euler's method with $h = 0.2$ to approximate $y(0.6)$ for:
$$\frac{dy}{dx} = x^2 + y, \quad y(0) = 1$$

**Problem 4:** Given $\frac{dy}{dx} = 2xy$ with $y(1) = 1$, use Euler's method with step size 0.5 to find $y(2)$.

### Separable Equations

**Problem 5:** Solve $\frac{dy}{dx} = \frac{y}{x}$

**Problem 6:** Solve $\frac{dy}{dx} = xy^2$ with $y(0) = 1$

**Problem 7:** Find the particular solution: $\frac{dy}{dx} = e^{x-y}$, $y(0) = 0$

**Problem 8:** Solve $(1 + x^2)\frac{dy}{dx} = 1 + y^2$

### Exponential Models

**Problem 9:** A population grows at a rate proportional to its size. If the population doubles in 4 hours and starts at 500, find:
(a) $P(t)$
(b) Population after 10 hours
(c) Time to reach 10,000

**Problem 10:** The half-life of a substance is 12 days. If you start with 80 grams:
(a) Find the decay constant
(b) How much remains after 30 days?
(c) When will only 5 grams remain?

### Logistic Models (BC)

**Problem 11:** A lake can support a maximum of 2000 fish. The fish population grows logistically with $k = 0.3$. If there are initially 200 fish:
(a) Write the differential equation
(b) Find $P(t)$
(c) When is the population 1000?
(d) What is the maximum growth rate?

**Problem 12:** Given $\frac{dP}{dt} = 2P(1 - \frac{P}{500})$ with $P(0) = 100$:
(a) Find the carrying capacity
(b) Find the inflection point
(c) Find the maximum rate of change

---

## ✅ Solutions

### Solution 1
- (A) matches slope field with horizontal rows (slope depends only on $x$)
- (B) matches slope field with horizontal columns (slope depends only on $y$)
- (C) slopes zero on line $y = -x$
- (D) slopes zero on both axes

### Solution 3

| Step | $x$ | $y$ | $f(x,y) = x^2 + y$ | $y_{new}$ |
|------|-----|-----|-------------------|-----------|
| 0 | 0 | 1 | 0 + 1 = 1 | 1 + 0.2(1) = 1.2 |
| 1 | 0.2 | 1.2 | 0.04 + 1.2 = 1.24 | 1.2 + 0.2(1.24) = 1.448 |
| 2 | 0.4 | 1.448 | 0.16 + 1.448 = 1.608 | 1.448 + 0.2(1.608) = 1.7696 |
| 3 | 0.6 | 1.7696 | — | — |

**Answer:** $y(0.6) \approx 1.77$

### Solution 4

| Step | $x$ | $y$ | $f(x,y) = 2xy$ | $y_{new}$ |
|------|-----|-----|----------------|-----------|
| 0 | 1 | 1 | 2(1)(1) = 2 | 1 + 0.5(2) = 2 |
| 1 | 1.5 | 2 | 2(1.5)(2) = 6 | 2 + 0.5(6) = 5 |
| 2 | 2 | 5 | — | — |

**Answer:** $y(2) \approx 5$

### Solution 5

$$\frac{dy}{y} = \frac{dx}{x}$$
$$\ln|y| = \ln|x| + C$$
$$y = Ax$$ where $A = \pm e^C$

### Solution 6

$$\frac{dy}{y^2} = x \, dx$$
$$-\frac{1}{y} = \frac{x^2}{2} + C$$

IC: $y(0) = 1$: $-1 = 0 + C$, so $C = -1$

$$-\frac{1}{y} = \frac{x^2}{2} - 1$$
$$y = \frac{1}{1 - \frac{x^2}{2}} = \frac{2}{2 - x^2}$$

### Solution 7

$$\frac{dy}{dx} = e^x \cdot e^{-y}$$
$$e^y \, dy = e^x \, dx$$
$$e^y = e^x + C$$

IC: $y(0) = 0$: $1 = 1 + C$, so $C = 0$

$$e^y = e^x$$
$$y = x$$

### Solution 8

$$\frac{dy}{1 + y^2} = \frac{dx}{1 + x^2}$$
$$\arctan(y) = \arctan(x) + C$$
$$y = \tan(\arctan(x) + C)$$

### Solution 9

(a) $k = \frac{\ln 2}{4}$, so $P(t) = 500e^{(\ln 2/4)t} = 500 \cdot 2^{t/4}$

(b) $P(10) = 500 \cdot 2^{2.5} \approx 2828$

(c) $10000 = 500 \cdot 2^{t/4}$
$20 = 2^{t/4}$
$t = 4\log_2(20) \approx 17.3$ hours

### Solution 10

(a) $k = -\frac{\ln 2}{12} \approx -0.0578$

(b) $A(30) = 80e^{-0.0578(30)} = 80e^{-1.733} \approx 14.2$ grams

(c) $5 = 80e^{-0.0578t}$
$t = \frac{\ln(5/80)}{-0.0578} \approx 48$ days

### Solution 11

(a) $\frac{dP}{dt} = 0.3P(1 - \frac{P}{2000})$

(b) $A = \frac{2000 - 200}{200} = 9$
$P(t) = \frac{2000}{1 + 9e^{-0.3t}}$

(c) $1000 = \frac{2000}{1 + 9e^{-0.3t}}$
$1 + 9e^{-0.3t} = 2$
$t = \frac{\ln 9}{0.3} \approx 7.32$

(d) $\frac{dP}{dt}_{max} = \frac{0.3 \times 2000}{4} = 150$ fish per unit time

### Solution 12

(a) Carrying capacity: $L = 500$

(b) Inflection point: $P = \frac{500}{2} = 250$

(c) Maximum rate: $\frac{dP}{dt}_{max} = \frac{2 \times 500}{4} = 250$

---

## 🔑 Key Formulas Summary

| Concept | Formula |
|---------|---------|
| Euler's Method | $y_{n+1} = y_n + h \cdot f(x_n, y_n)$ |
| Exponential Growth/Decay | $\frac{dy}{dt} = ky$ → $y = y_0e^{kt}$ |
| Doubling Time | $T = \frac{\ln 2}{k}$ |
| Half-Life | $T = \frac{\ln 2}{\|k\|}$ |
| Newton's Cooling | $T(t) = T_s + (T_0 - T_s)e^{kt}$ |
| Logistic Equation | $\frac{dP}{dt} = kP(1 - \frac{P}{L})$ |
| Logistic Solution | $P(t) = \frac{L}{1 + Ae^{-kt}}$ |
| Logistic Inflection | $P = \frac{L}{2}$ |
| Max Logistic Rate | $\frac{dP}{dt}_{max} = \frac{kL}{4}$ |

---

## 🎓 AP Exam Tips

### Free Response Strategies

1. **Show all separation steps** when solving separable DEs
2. **Include the constant of integration** before applying ICs
3. **Clearly state initial conditions** and how they're used
4. **Label Euler's method tables** clearly
5. **Check your answer** by differentiating

### Common Mistakes to Avoid

❌ Forgetting the absolute value in $\ln|y|$
❌ Losing solutions when dividing by $y$
❌ Using wrong sign for decay constant
❌ Confusing $k$ and $\frac{1}{k}$ in logistic problems
❌ Arithmetic errors in Euler's method calculations

### Calculator Tips

- Use table feature for Euler's method
- Graph slope fields using parametric mode
- Check analytical solutions numerically

---

## 📚 Summary

### Unit 7 Key Takeaways

1. **Slope fields** visualize solution curves without solving
2. **Euler's method** provides numerical approximations
3. **Separable equations** solve by separating and integrating
4. **Exponential models** have constant growth/decay rates
5. **Logistic models** incorporate carrying capacity
6. **Initial conditions** determine particular solutions

### Connection to Other Units

- **Unit 4:** Applications of derivatives in modeling
- **Unit 6:** Integration techniques for solving DEs
- **Unit 8:** Areas and volumes from DE solutions

---

*Master differential equations and you'll have powerful tools for modeling the real world! 📐*

:::GUIDE:::
