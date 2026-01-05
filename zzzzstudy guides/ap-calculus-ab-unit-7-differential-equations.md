:::GUIDE:::
unit::=7
title::=📊 Unit 7: Differential Equations
desc::=Master slope fields, separation of variables, and exponential models
diff::=Hard
time::=55 min
tags::=calculus,differential-equations,slope-fields
content::=

# 📊 Unit 7: Differential Equations

## ⏱️ TIMELINE
| Section | Topic | Time |
|---------|-------|------|
| 7.1 | Introduction to Differential Equations | 8 min |
| 7.2 | Verifying Solutions | 6 min |
| 7.3 | Slope Fields | 10 min |
| 7.4 | Euler's Method | 8 min |
| 7.5 | Separation of Variables | 10 min |
| 7.6 | Exponential Growth & Decay Models | 8 min |
| 7.7 | Practice Problems & Review | 5 min |

---

## 7.1 Introduction to Differential Equations

### What is a Differential Equation?

A **differential equation (DE)** is an equation that contains one or more derivatives of an unknown function. Differential equations describe relationships between quantities and their rates of change.

> 💡 **Key Insight**: Differential equations are the mathematical language for modeling change in the real world!

### Types of Differential Equations

**First-Order Differential Equations** contain only first derivatives:
$$\frac{dy}{dx} = f(x, y)$$

**Second-Order Differential Equations** contain second derivatives:
$$\frac{d^2y}{dx^2} = f\left(x, y, \frac{dy}{dx}\right)$$

> 📝 **AP Focus**: The AP Calculus AB exam focuses primarily on **first-order differential equations**.

### Examples of Differential Equations

| Equation | Type | Description |
|----------|------|-------------|
| $\frac{dy}{dx} = 3x^2$ | First-order | Rate depends only on $x$ |
| $\frac{dy}{dx} = 2y$ | First-order | Rate depends only on $y$ |
| $\frac{dy}{dx} = x + y$ | First-order | Rate depends on both $x$ and $y$ |
| $\frac{dy}{dx} = ky$ | First-order | Exponential growth/decay model |

### Solutions to Differential Equations

A **solution** to a differential equation is a function $y = f(x)$ that satisfies the equation when substituted.

**General Solution**: Contains an arbitrary constant $C$ and represents a family of curves.

**Particular Solution**: A specific solution obtained by applying an initial condition to find $C$.

### Example: Finding a General Solution

Given: $\frac{dy}{dx} = 3x^2$

**Solution by Integration**:
$$y = \int 3x^2 \, dx = x^3 + C$$

This is the **general solution** — a family of cubic curves shifted vertically.

```
    y
    │      ╱ C = 2
    │    ╱╱ C = 0
    │  ╱╱╱ C = -2
    │╱╱╱
────┼────────── x
   ╱│
 ╱╱ │
    │
```

### Initial Value Problems (IVP)

An **initial value problem** consists of:
1. A differential equation
2. An initial condition $y(x_0) = y_0$

**Example**: Solve $\frac{dy}{dx} = 3x^2$ with $y(0) = 5$

**Step 1**: Find the general solution
$$y = x^3 + C$$

**Step 2**: Apply the initial condition
$$5 = (0)^3 + C$$
$$C = 5$$

**Particular Solution**: $y = x^3 + 5$

> 🎯 **Memory Tip**: IVP = DE + IC (Differential Equation + Initial Condition)

---

## 7.2 Verifying Solutions

### How to Verify a Solution

To verify that a function is a solution to a differential equation:

1. **Compute** the required derivatives of the proposed solution
2. **Substitute** into the differential equation
3. **Check** if the equation is satisfied (both sides equal)

### Example 1: Verify a Simple Solution

**Verify**: Is $y = e^{2x}$ a solution to $\frac{dy}{dx} = 2y$?

**Step 1**: Compute $\frac{dy}{dx}$
$$\frac{dy}{dx} = 2e^{2x}$$

**Step 2**: Substitute into the right side
$$2y = 2(e^{2x}) = 2e^{2x}$$

**Step 3**: Compare
$$\frac{dy}{dx} = 2e^{2x} = 2y \quad ✓$$

**Conclusion**: Yes, $y = e^{2x}$ is a solution.

### Example 2: Verify with a Constant

**Verify**: Is $y = Ce^{-3x}$ a solution to $\frac{dy}{dx} = -3y$?

**Step 1**: Compute $\frac{dy}{dx}$
$$\frac{dy}{dx} = C \cdot (-3)e^{-3x} = -3Ce^{-3x}$$

**Step 2**: Substitute into the right side
$$-3y = -3(Ce^{-3x}) = -3Ce^{-3x}$$

**Step 3**: Compare
$$\frac{dy}{dx} = -3Ce^{-3x} = -3y \quad ✓$$

**Conclusion**: Yes, for any constant $C$.

### Example 3: A Non-Solution

**Verify**: Is $y = x^2$ a solution to $\frac{dy}{dx} = y$?

**Step 1**: Compute $\frac{dy}{dx}$
$$\frac{dy}{dx} = 2x$$

**Step 2**: Compare with $y$
$$\frac{dy}{dx} = 2x \neq x^2 = y$$

**Conclusion**: No, $y = x^2$ is NOT a solution.

### Example 4: Verifying with Initial Conditions

**Verify**: Is $y = 3e^{2x}$ a solution to the IVP $\frac{dy}{dx} = 2y$, $y(0) = 3$?

**Check the DE**:
- $\frac{dy}{dx} = 6e^{2x}$
- $2y = 2(3e^{2x}) = 6e^{2x}$ ✓

**Check the IC**:
- $y(0) = 3e^{0} = 3$ ✓

**Conclusion**: Yes, it satisfies both the DE and IC.

### Verification Checklist

| Step | Action | Check |
|------|--------|-------|
| 1 | Find all necessary derivatives | □ |
| 2 | Substitute into DE | □ |
| 3 | Simplify both sides | □ |
| 4 | Verify equality | □ |
| 5 | Check initial condition (if given) | □ |

---

## 7.3 Slope Fields

### What is a Slope Field?

A **slope field** (or direction field) is a graphical representation of a differential equation $\frac{dy}{dx} = f(x, y)$.

At each point $(x, y)$, we draw a short line segment with slope equal to $f(x, y)$.

> 💡 **Visualization**: A slope field shows the "flow" of solutions without solving the DE!

### Constructing a Slope Field

For $\frac{dy}{dx} = f(x, y)$:

1. Choose a grid of points $(x, y)$
2. Calculate the slope $m = f(x, y)$ at each point
3. Draw a short line segment with that slope

### Example: Slope Field for $\frac{dy}{dx} = x$

| Point | Slope $= x$ |
|-------|-------------|
| $(-2, y)$ | $-2$ |
| $(-1, y)$ | $-1$ |
| $(0, y)$ | $0$ |
| $(1, y)$ | $1$ |
| $(2, y)$ | $2$ |

```
    y
    │    ╲  │  ╱
    │  ╲  │  ╱
    │    ──────    (x=0: horizontal)
    │  ╱  │  ╲
    │╱    │    ╲
────┼──────────── x
   ╱│╲    │
  ╱ │ ╲   │
    │    (slopes = x)
```

> 📝 **Pattern**: Slopes depend only on $x$, so all points in the same vertical line have the same slope.

### Example: Slope Field for $\frac{dy}{dx} = y$

| Point | Slope $= y$ |
|-------|-------------|
| $(x, 2)$ | $2$ |
| $(x, 1)$ | $1$ |
| $(x, 0)$ | $0$ |
| $(x, -1)$ | $-1$ |
| $(x, -2)$ | $-2$ |

```
    y
    │   ╱  ╱  ╱  ╱   (y > 0: positive slopes)
    │  ╱  ╱  ╱  ╱
    │──────────────  (y = 0: horizontal)
    │ ╲  ╲  ╲  ╲     (y < 0: negative slopes)
    │  ╲  ╲  ╲  ╲
────┼──────────── x
```

> 📝 **Pattern**: Slopes depend only on $y$, so all points in the same horizontal line have the same slope.

### Interpreting Slope Fields

**Key Features to Identify**:

| Feature | What to Look For |
|---------|------------------|
| **Equilibrium Solutions** | Horizontal segments (slope = 0) |
| **Increasing Solutions** | Positive slopes (↗) |
| **Decreasing Solutions** | Negative slopes (↘) |
| **Isoclines** | Curves where slope is constant |

### Isoclines

An **isocline** is a curve along which the slope is constant.

For $\frac{dy}{dx} = f(x, y)$, the isocline for slope $m$ is found by solving:
$$f(x, y) = m$$

**Example**: For $\frac{dy}{dx} = x + y$, find the isocline where slope = 0.
$$x + y = 0 \implies y = -x$$

The line $y = -x$ is the isocline of zero slope (equilibrium).

### Matching Slope Fields to DEs

**Strategy**: Look for distinctive patterns:

| If $\frac{dy}{dx}$ depends on... | Then slopes... |
|----------------------------------|----------------|
| Only $x$ | Same in vertical columns |
| Only $y$ | Same in horizontal rows |
| Both $x$ and $y$ | Vary in both directions |
| $x + y$ | Same along diagonal lines |
| $xy$ | Zero on both axes |

### Sketching Solution Curves

To sketch a solution through a point $(x_0, y_0)$:

1. Start at the point
2. Follow the direction indicated by nearby segments
3. Draw a smooth curve that is tangent to each segment

```
    y
    │    ┌──╮
    │   ╱    ╲
    │──●──────── Starting point
    │   ╲    ╱
    │    └──╯
────┼──────────── x
```

> ⚠️ **Warning**: Solution curves never cross each other (uniqueness theorem)!

---

## 7.4 Euler's Method

### What is Euler's Method?

**Euler's Method** is a numerical technique for approximating solutions to differential equations when an exact solution is difficult or impossible to find.

> 💡 **Concept**: Use the tangent line to "step" forward and estimate the next value.

### The Euler's Method Formula

Given:
- Differential equation: $\frac{dy}{dx} = f(x, y)$
- Initial condition: $(x_0, y_0)$
- Step size: $h$ (or $\Delta x$)

**Recursive Formula**:
$$x_{n+1} = x_n + h$$
$$y_{n+1} = y_n + h \cdot f(x_n, y_n)$$

Or equivalently:
$$y_{n+1} = y_n + \Delta x \cdot \frac{dy}{dx}\bigg|_{(x_n, y_n)}$$

### Geometric Interpretation

```
    y
    │         Actual curve
    │        ╱
    │       ╱ ●──── Euler approximation
    │      ╱ ╱
    │     ●╱   Tangent line
    │    ╱
    │   ●  Starting point
    │
────┼──────────── x
    x₀  x₁  x₂
```

Each step follows the tangent line, creating a polygonal approximation.

### Step-by-Step Example

**Problem**: Use Euler's method with $h = 0.5$ to approximate $y(1)$ for:
$$\frac{dy}{dx} = x + y, \quad y(0) = 1$$

**Step 0**: Initial values
- $x_0 = 0$, $y_0 = 1$
- $f(0, 1) = 0 + 1 = 1$

**Step 1**: From $(0, 1)$ to $(0.5, ?)$
$$y_1 = y_0 + h \cdot f(x_0, y_0)$$
$$y_1 = 1 + 0.5 \cdot 1 = 1.5$$

**Step 2**: From $(0.5, 1.5)$ to $(1, ?)$
$$f(0.5, 1.5) = 0.5 + 1.5 = 2$$
$$y_2 = 1.5 + 0.5 \cdot 2 = 2.5$$

**Approximation**: $y(1) \approx 2.5$

### Euler's Method Table Format

| $n$ | $x_n$ | $y_n$ | $f(x_n, y_n)$ | $h \cdot f$ | $y_{n+1}$ |
|-----|-------|-------|---------------|-------------|-----------|
| 0 | 0 | 1 | 1 | 0.5 | 1.5 |
| 1 | 0.5 | 1.5 | 2 | 1.0 | 2.5 |
| 2 | 1.0 | 2.5 | — | — | — |

### Accuracy and Step Size

**Smaller step size $h$** → **Better approximation**

| Step Size | Accuracy | Computation |
|-----------|----------|-------------|
| Large $h$ | Less accurate | Fewer calculations |
| Small $h$ | More accurate | More calculations |

> ⚠️ **Trade-off**: Smaller steps give better results but require more work!

### Example: Comparing Step Sizes

For $\frac{dy}{dx} = y$, $y(0) = 1$, actual solution: $y = e^x$

Approximating $y(1)$:

| Step Size | Approximation | Actual $e^1$ | Error |
|-----------|---------------|--------------|-------|
| $h = 1$ | 2.000 | 2.718 | 0.718 |
| $h = 0.5$ | 2.250 | 2.718 | 0.468 |
| $h = 0.25$ | 2.441 | 2.718 | 0.277 |
| $h = 0.1$ | 2.594 | 2.718 | 0.124 |

### Euler's Method with Multiple Steps

**Problem**: Use 3 steps to approximate $y(0.3)$ for $\frac{dy}{dx} = 2x - y$, $y(0) = 1$.

Step size: $h = 0.1$

| Step | $x_n$ | $y_n$ | $\frac{dy}{dx} = 2x_n - y_n$ | $y_{n+1}$ |
|------|-------|-------|------------------------------|-----------|
| 0 | 0 | 1 | $2(0) - 1 = -1$ | $1 + 0.1(-1) = 0.9$ |
| 1 | 0.1 | 0.9 | $2(0.1) - 0.9 = -0.7$ | $0.9 + 0.1(-0.7) = 0.83$ |
| 2 | 0.2 | 0.83 | $2(0.2) - 0.83 = -0.43$ | $0.83 + 0.1(-0.43) = 0.787$ |
| 3 | 0.3 | 0.787 | — | — |

**Approximation**: $y(0.3) \approx 0.787$

### Common Euler's Method Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Using wrong $f(x, y)$ | Write out the DE clearly |
| Forgetting to update $x$ | Always increment: $x_{n+1} = x_n + h$ |
| Arithmetic errors | Use a table to organize calculations |
| Using $y_{n+1}$ to calculate $f$ | Always use $y_n$ in the current step |

---

## 7.5 Separation of Variables

### What is Separation of Variables?

**Separation of variables** is a technique for solving differential equations where we can:
1. Move all $y$ terms (and $dy$) to one side
2. Move all $x$ terms (and $dx$) to the other side
3. Integrate both sides

### When Can We Use It?

The DE must be **separable** — it can be written as:
$$\frac{dy}{dx} = g(x) \cdot h(y)$$

or equivalently:
$$\frac{dy}{h(y)} = g(x) \, dx$$

### The Separation of Variables Method

**Step 1**: Write in the form $\frac{dy}{dx} = g(x) \cdot h(y)$

**Step 2**: Separate: $\frac{1}{h(y)} \, dy = g(x) \, dx$

**Step 3**: Integrate both sides: $\int \frac{1}{h(y)} \, dy = \int g(x) \, dx$

**Step 4**: Solve for $y$ (if possible)

**Step 5**: Apply initial condition to find $C$

### Example 1: Basic Separation

**Solve**: $\frac{dy}{dx} = xy$

**Step 1**: Already in separable form ($g(x) = x$, $h(y) = y$)

**Step 2**: Separate
$$\frac{dy}{y} = x \, dx$$

**Step 3**: Integrate
$$\int \frac{1}{y} \, dy = \int x \, dx$$
$$\ln|y| = \frac{x^2}{2} + C_1$$

**Step 4**: Solve for $y$
$$|y| = e^{x^2/2 + C_1} = e^{C_1} \cdot e^{x^2/2}$$
$$y = Ce^{x^2/2}$$ (where $C = \pm e^{C_1}$)

### Example 2: With Initial Condition

**Solve**: $\frac{dy}{dx} = 3x^2 y$, $y(0) = 2$

**Separate**:
$$\frac{dy}{y} = 3x^2 \, dx$$

**Integrate**:
$$\ln|y| = x^3 + C_1$$

**Solve for y**:
$$y = Ce^{x^3}$$

**Apply IC**: $y(0) = 2$
$$2 = Ce^0 = C$$

**Particular Solution**: $y = 2e^{x^3}$

### Example 3: Requiring More Algebra

**Solve**: $\frac{dy}{dx} = \frac{x}{y^2}$

**Separate**:
$$y^2 \, dy = x \, dx$$

**Integrate**:
$$\int y^2 \, dy = \int x \, dx$$
$$\frac{y^3}{3} = \frac{x^2}{2} + C$$

**Solve for y**:
$$y^3 = \frac{3x^2}{2} + 3C$$
$$y = \sqrt[3]{\frac{3x^2}{2} + K}$$ (where $K = 3C$)

### Example 4: Exponential Type

**Solve**: $\frac{dy}{dx} = ky$, $y(0) = y_0$

**Separate**:
$$\frac{dy}{y} = k \, dx$$

**Integrate**:
$$\ln|y| = kx + C_1$$

**Solve**:
$$y = Ce^{kx}$$

**Apply IC**:
$$y_0 = Ce^0 \implies C = y_0$$

**Solution**: $y = y_0 e^{kx}$

> 🎯 **Important**: This is the **exponential growth/decay model**!

### Common Separable Forms

| Differential Equation | General Solution |
|----------------------|------------------|
| $\frac{dy}{dx} = ky$ | $y = Ce^{kx}$ |
| $\frac{dy}{dx} = \frac{x}{y}$ | $y^2 = x^2 + C$ |
| $\frac{dy}{dx} = xy$ | $y = Ce^{x^2/2}$ |
| $\frac{dy}{dx} = \frac{y}{x}$ | $y = Cx$ |
| $\frac{dy}{dx} = y^2$ | $y = \frac{-1}{x + C}$ |

### Tricky Cases

**Case 1**: Don't forget the constant!
$$\int \frac{1}{y} \, dy = \ln|y| + C \quad \text{(often absorbed into one side)}$$

**Case 2**: Watch for division by zero
- If separating by $y$, consider $y = 0$ as a possible solution
- Example: For $\frac{dy}{dx} = y$, we have $y = 0$ as an equilibrium solution

**Case 3**: Implicit vs. explicit solutions
- Sometimes you can't solve explicitly for $y$
- Implicit solutions like $y^3 + y = x^2 + C$ are acceptable

### Separation of Variables Checklist

| Step | Description | Check |
|------|-------------|-------|
| 1 | Identify if DE is separable | □ |
| 2 | Separate variables correctly | □ |
| 3 | Add $dy$ and $dx$ appropriately | □ |
| 4 | Integrate both sides | □ |
| 5 | Include constant of integration | □ |
| 6 | Solve for $y$ if possible | □ |
| 7 | Apply initial condition | □ |
| 8 | Check by substituting back | □ |

---

## 7.6 Exponential Growth & Decay Models

### The Fundamental Exponential Model

Many real-world phenomena follow the differential equation:
$$\frac{dy}{dt} = ky$$

Where:
- $y$ = quantity at time $t$
- $k$ = growth/decay constant
- $t$ = time

**Solution**: $y = y_0 e^{kt}$ where $y_0 = y(0)$

### Growth vs. Decay

| Condition | Type | Behavior |
|-----------|------|----------|
| $k > 0$ | **Exponential Growth** | $y$ increases without bound |
| $k < 0$ | **Exponential Decay** | $y$ approaches 0 |
| $k = 0$ | **No Change** | $y$ remains constant |

```
    y
    │           ╱ k > 0 (growth)
    │         ╱
    │       ╱
    │     ●────────── k = 0 (constant)
    │   ╱   ╲
    │ ╱       ╲ k < 0 (decay)
    │╱          ╲____
────┼──────────────── t
```

### Exponential Growth Applications

**Population Growth**: If a population grows at a rate proportional to its size:
$$\frac{dP}{dt} = kP \implies P(t) = P_0 e^{kt}$$

**Example**: A bacteria colony starts with 500 cells and doubles every 3 hours.

**Step 1**: Find $k$
- At $t = 3$: $P = 2 \times 500 = 1000$
- $1000 = 500e^{3k}$
- $2 = e^{3k}$
- $k = \frac{\ln 2}{3} \approx 0.231$

**Step 2**: Write the model
$$P(t) = 500e^{(\ln 2/3)t} = 500 \cdot 2^{t/3}$$

**Step 3**: Predict population at $t = 9$ hours
$$P(9) = 500 \cdot 2^{9/3} = 500 \cdot 2^3 = 4000 \text{ cells}$$

### Exponential Decay Applications

**Radioactive Decay**: The amount of a radioactive substance decreases proportionally:
$$\frac{dN}{dt} = -\lambda N \implies N(t) = N_0 e^{-\lambda t}$$

### Half-Life

The **half-life** $t_{1/2}$ is the time for a quantity to reduce to half its initial value.

**Formula**:
$$t_{1/2} = \frac{\ln 2}{|k|} = \frac{0.693}{|k|}$$

**Derivation**:
$$\frac{y_0}{2} = y_0 e^{-kt_{1/2}}$$
$$\frac{1}{2} = e^{-kt_{1/2}}$$
$$\ln\left(\frac{1}{2}\right) = -kt_{1/2}$$
$$t_{1/2} = \frac{\ln 2}{k}$$

### Example: Radioactive Decay

**Problem**: Carbon-14 has a half-life of 5730 years. A fossil contains 20% of its original C-14. How old is it?

**Step 1**: Find the decay constant
$$k = \frac{\ln 2}{5730} \approx 0.000121 \text{ per year}$$

**Step 2**: Set up the equation
$$0.20 N_0 = N_0 e^{-0.000121t}$$
$$0.20 = e^{-0.000121t}$$

**Step 3**: Solve for $t$
$$\ln(0.20) = -0.000121t$$
$$t = \frac{-\ln(0.20)}{0.000121} = \frac{1.609}{0.000121} \approx 13,300 \text{ years}$$

### Newton's Law of Cooling

The rate of cooling is proportional to the temperature difference:
$$\frac{dT}{dt} = k(T - T_s)$$

Where:
- $T$ = temperature of object
- $T_s$ = surrounding temperature
- $k < 0$ for cooling

**Solution**: $T(t) = T_s + (T_0 - T_s)e^{kt}$

### Example: Cooling Coffee

**Problem**: Coffee at 180°F is placed in a 70°F room. After 10 minutes, it's 150°F. Find the temperature after 20 minutes.

**Step 1**: Identify values
- $T_0 = 180$, $T_s = 70$
- $T(10) = 150$

**Step 2**: Find $k$
$$150 = 70 + (180 - 70)e^{10k}$$
$$80 = 110e^{10k}$$
$$e^{10k} = \frac{80}{110} = \frac{8}{11}$$
$$k = \frac{\ln(8/11)}{10} \approx -0.0318$$

**Step 3**: Find $T(20)$
$$T(20) = 70 + 110e^{20(-0.0318)}$$
$$T(20) = 70 + 110e^{-0.636}$$
$$T(20) = 70 + 110(0.529) \approx 128°F$$

### Doubling Time

The **doubling time** is the time for a quantity to double:
$$t_{\text{double}} = \frac{\ln 2}{k}$$

**Rule of 70**: For percentage growth rate $r$%:
$$t_{\text{double}} \approx \frac{70}{r}$$

### Summary: Exponential Models

| Model | DE | Solution |
|-------|----|---------| 
| Growth/Decay | $\frac{dy}{dt} = ky$ | $y = y_0 e^{kt}$ |
| Cooling | $\frac{dT}{dt} = k(T-T_s)$ | $T = T_s + (T_0-T_s)e^{kt}$ |

| Property | Formula |
|----------|---------|
| Half-life | $t_{1/2} = \frac{\ln 2}{\|k\|}$ |
| Doubling time | $t_d = \frac{\ln 2}{k}$ |

---

## 7.7 Practice Problems & Review

### Problem Set A: Verifying Solutions

**A1.** Verify that $y = 2e^{-3x}$ is a solution to $\frac{dy}{dx} = -3y$.

<details>
<summary>Solution</summary>

$\frac{dy}{dx} = 2(-3)e^{-3x} = -6e^{-3x}$

$-3y = -3(2e^{-3x}) = -6e^{-3x}$ ✓

Yes, it's a solution.
</details>

**A2.** Is $y = x^2 + 1$ a solution to $\frac{dy}{dx} = 2\sqrt{y-1}$?

<details>
<summary>Solution</summary>

$\frac{dy}{dx} = 2x$

$2\sqrt{y-1} = 2\sqrt{x^2 + 1 - 1} = 2\sqrt{x^2} = 2|x|$

Only a solution for $x \geq 0$ (where $2x = 2|x|$).
</details>

**A3.** Verify that $y = \tan(x + C)$ satisfies $\frac{dy}{dx} = 1 + y^2$.

<details>
<summary>Solution</summary>

$\frac{dy}{dx} = \sec^2(x + C)$

$1 + y^2 = 1 + \tan^2(x + C) = \sec^2(x + C)$ ✓

Yes, it's a solution.
</details>

---

### Problem Set B: Slope Fields

**B1.** For $\frac{dy}{dx} = y - 1$, describe the slope field and identify any equilibrium solutions.

<details>
<summary>Solution</summary>

- When $y = 1$: slopes are 0 (horizontal) → **equilibrium solution**
- When $y > 1$: slopes are positive
- When $y < 1$: slopes are negative

Equilibrium: $y = 1$
</details>

**B2.** Match: For $\frac{dy}{dx} = x - y$, which statement is true?
- (a) Slopes are constant along vertical lines
- (b) Slopes are constant along horizontal lines
- (c) Slopes are constant along lines where $x = y$

<details>
<summary>Solution</summary>

(c) Along $x = y$: $\frac{dy}{dx} = x - y = 0$

All points where $x = y$ have slope 0.
</details>

**B3.** For $\frac{dy}{dx} = xy$, where are the slopes zero?

<details>
<summary>Solution</summary>

$xy = 0$ when $x = 0$ OR $y = 0$

Slopes are zero along both axes.
</details>

---

### Problem Set C: Euler's Method

**C1.** Use Euler's method with $h = 0.5$ to approximate $y(1)$ for:
$$\frac{dy}{dx} = x^2, \quad y(0) = 0$$

<details>
<summary>Solution</summary>

| $n$ | $x_n$ | $y_n$ | $f(x_n, y_n) = x_n^2$ | $y_{n+1}$ |
|-----|-------|-------|----------------------|-----------|
| 0 | 0 | 0 | 0 | 0 |
| 1 | 0.5 | 0 | 0.25 | $0 + 0.5(0.25) = 0.125$ |
| 2 | 1.0 | 0.125 | — | — |

Approximation: $y(1) \approx 0.125$

(Actual: $y = \frac{x^3}{3}$, so $y(1) = \frac{1}{3} \approx 0.333$)
</details>

**C2.** Use 2 steps of Euler's method with $h = 0.2$ to estimate $y(0.4)$ for:
$$\frac{dy}{dx} = y, \quad y(0) = 1$$

<details>
<summary>Solution</summary>

| Step | $x_n$ | $y_n$ | $f = y_n$ | $y_{n+1}$ |
|------|-------|-------|-----------|-----------|
| 0 | 0 | 1 | 1 | $1 + 0.2(1) = 1.2$ |
| 1 | 0.2 | 1.2 | 1.2 | $1.2 + 0.2(1.2) = 1.44$ |
| 2 | 0.4 | 1.44 | — | — |

Approximation: $y(0.4) \approx 1.44$

(Actual: $e^{0.4} \approx 1.492$)
</details>

---

### Problem Set D: Separation of Variables

**D1.** Solve: $\frac{dy}{dx} = 6x^2 y$

<details>
<summary>Solution</summary>

$\frac{dy}{y} = 6x^2 \, dx$

$\ln|y| = 2x^3 + C_1$

$y = Ce^{2x^3}$
</details>

**D2.** Solve the IVP: $\frac{dy}{dx} = \frac{x}{y}$, $y(0) = 4$

<details>
<summary>Solution</summary>

$y \, dy = x \, dx$

$\frac{y^2}{2} = \frac{x^2}{2} + C$

$y^2 = x^2 + 2C$

Apply IC: $16 = 0 + 2C \implies C = 8$

$y^2 = x^2 + 16$

$y = \sqrt{x^2 + 16}$ (positive since $y(0) = 4 > 0$)
</details>

**D3.** Solve: $\frac{dy}{dx} = e^{x-y}$

<details>
<summary>Solution</summary>

$\frac{dy}{dx} = e^x \cdot e^{-y}$

$e^y \, dy = e^x \, dx$

$e^y = e^x + C$

$y = \ln(e^x + C)$
</details>

**D4.** Solve the IVP: $\frac{dy}{dx} = \frac{2x}{y+1}$, $y(0) = 3$

<details>
<summary>Solution</summary>

$(y+1) \, dy = 2x \, dx$

$\frac{(y+1)^2}{2} = x^2 + C$

$(y+1)^2 = 2x^2 + 2C$

Apply IC: $(3+1)^2 = 0 + 2C \implies 16 = 2C \implies C = 8$

$(y+1)^2 = 2x^2 + 16$

$y = -1 + \sqrt{2x^2 + 16}$
</details>

---

### Problem Set E: Exponential Models

**E1.** A population grows according to $\frac{dP}{dt} = 0.05P$. If $P(0) = 1000$, find $P(10)$.

<details>
<summary>Solution</summary>

$P(t) = 1000e^{0.05t}$

$P(10) = 1000e^{0.5} \approx 1000(1.649) = 1649$
</details>

**E2.** A radioactive substance has a half-life of 4 hours. Write the decay equation and find what percentage remains after 10 hours.

<details>
<summary>Solution</summary>

$k = \frac{\ln 2}{4} \approx 0.173$

$N(t) = N_0 e^{-0.173t}$

$N(10) = N_0 e^{-1.73} \approx 0.177 N_0$

About **17.7%** remains.
</details>

**E3.** An investment doubles in 12 years with continuous compounding. Find the annual rate.

<details>
<summary>Solution</summary>

$2A_0 = A_0 e^{12r}$

$2 = e^{12r}$

$r = \frac{\ln 2}{12} \approx 0.0578 = 5.78\%$
</details>

**E4.** A cup of tea at 190°F cools in a 68°F room. After 5 minutes, it's 160°F. Find the temperature after 15 minutes.

<details>
<summary>Solution</summary>

$160 = 68 + (190 - 68)e^{5k}$

$92 = 122e^{5k}$

$e^{5k} = \frac{92}{122}$

$k = \frac{\ln(92/122)}{5} \approx -0.056$

$T(15) = 68 + 122e^{15(-0.056)}$

$T(15) = 68 + 122e^{-0.84}$

$T(15) = 68 + 122(0.432) \approx 121°F$
</details>

---

### Quick Reference: Essential Formulas

| Topic | Formula |
|-------|---------|
| **General DE Solution** | $y = y_0 e^{kt}$ for $\frac{dy}{dt} = ky$ |
| **Euler's Method** | $y_{n+1} = y_n + h \cdot f(x_n, y_n)$ |
| **Half-Life** | $t_{1/2} = \frac{\ln 2}{\|k\|}$ |
| **Doubling Time** | $t_d = \frac{\ln 2}{k}$ |
| **Newton's Cooling** | $T = T_s + (T_0 - T_s)e^{kt}$ |

---

### AP Exam Tips for Unit 7

> ✅ **DO**:
> - Always check if a DE is separable before attempting to solve
> - Include the constant of integration $C$
> - Organize Euler's method calculations in a table
> - Verify solutions by substituting back into the DE
> - Label your work clearly on FRQs

> ❌ **DON'T**:
> - Forget to apply initial conditions
> - Mix up growth ($k > 0$) and decay ($k < 0$)
> - Use $y_{n+1}$ instead of $y_n$ in Euler's method
> - Forget absolute values in $\ln|y|$
> - Leave implicit solutions without explanation

---

### Final Checklist: Unit 7 Mastery

| Skill | Confident? |
|-------|------------|
| Identify and classify differential equations | □ |
| Verify that a function is a solution | □ |
| Interpret and sketch slope fields | □ |
| Apply Euler's method accurately | □ |
| Solve separable DEs | □ |
| Solve initial value problems | □ |
| Set up exponential growth/decay models | □ |
| Calculate half-life and doubling time | □ |
| Apply Newton's Law of Cooling | □ |

---

## 🎯 Key Takeaways

1. **Differential equations** describe how quantities change — they're everywhere in science!

2. **Slope fields** give visual insight into solutions without solving analytically.

3. **Euler's method** provides numerical approximations when exact solutions are difficult.

4. **Separation of variables** is the primary technique for solving first-order DEs on the AP exam.

5. **Exponential models** ($y = y_0e^{kt}$) appear in population growth, radioactive decay, and cooling problems.

6. Always verify your solutions and don't forget the constant of integration!

> 📚 **Study Tip**: Practice setting up DEs from word problems — this skill is heavily tested on the AP exam!

:::GUIDE:::
