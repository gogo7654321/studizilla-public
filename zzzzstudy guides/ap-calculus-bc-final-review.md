:::GUIDE:::
unit::=Final Review
title::=📐 AP Calculus BC Complete Final Exam Review
desc::=Comprehensive review of all 10 units for AP Calculus BC exam
diff::=Very Hard
time::=120 min
tags::=calculus,bc,final-review,ap-exam,comprehensive
content::=

# 📐 AP Calculus BC: Complete Final Exam Review

> **The Ultimate Guide** - Everything you need to know for the AP Calculus BC exam in one comprehensive review. BC-only topics are marked with 🔷.

---

## 📜 A Brief Timeline of Calculus History

| Year | Mathematician | Contribution |
|------|---------------|--------------|
| ~250 BC | Archimedes | Method of exhaustion (early integration) |
| 1629 | Fermat | Tangent lines and optimization |
| 1637 | Descartes | Coordinate geometry foundation |
| 1665-1666 | Newton | Fluxions, fundamental theorem |
| 1675-1686 | Leibniz | Modern notation (∫, dy/dx) |
| 1748 | Euler | Introduced e and function notation |
| 1821 | Cauchy | Rigorous limit definition |
| 1854 | Riemann | Riemann sums and integrals |
| 1870s | Weierstrass | ε-δ definition of limits |
| 1902 | Lebesgue | Lebesgue integration |

---

## 🎯 Exam Structure Overview

### Multiple Choice (50% of score)
- **Part A**: 30 questions, 60 minutes, NO calculator
- **Part B**: 15 questions, 45 minutes, calculator allowed

### Free Response (50% of score)
- **Part A**: 2 questions, 30 minutes, calculator allowed
- **Part B**: 4 questions, 60 minutes, NO calculator

### Scoring
- Total: 108 points (45 MC + 63 FRQ)
- 5: ~65-70%+
- 4: ~55-65%
- 3: ~45-55%

---

# 📚 UNIT 1: Limits and Continuity

## Essential Limit Properties

### Basic Limit Laws
If $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$, then:

| Law | Formula |
|-----|---------|
| Sum | $\lim_{x \to c} [f(x) + g(x)] = L + M$ |
| Difference | $\lim_{x \to c} [f(x) - g(x)] = L - M$ |
| Product | $\lim_{x \to c} [f(x) \cdot g(x)] = L \cdot M$ |
| Quotient | $\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{L}{M}$, if $M \neq 0$ |
| Power | $\lim_{x \to c} [f(x)]^n = L^n$ |
| Scalar | $\lim_{x \to c} [k \cdot f(x)] = k \cdot L$ |

### Special Trigonometric Limits
$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

$$\lim_{x \to 0} \frac{1 - \cos x}{x} = 0$$

$$\lim_{x \to 0} \frac{\tan x}{x} = 1$$

$$\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$$

### Definition of e
$$e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = \lim_{x \to 0} (1 + x)^{1/x}$$

### Squeeze Theorem
If $g(x) \leq f(x) \leq h(x)$ near $c$ and $\lim_{x \to c} g(x) = \lim_{x \to c} h(x) = L$, then $\lim_{x \to c} f(x) = L$

## Types of Discontinuities

| Type | Description | Example |
|------|-------------|---------|
| **Removable** | Hole in graph; limit exists | $\frac{x^2-1}{x-1}$ at $x=1$ |
| **Jump** | Left and right limits differ | Piecewise functions |
| **Infinite** | Vertical asymptote | $\frac{1}{x}$ at $x=0$ |
| **Oscillating** | Limit DNE due to oscillation | $\sin(1/x)$ at $x=0$ |

## Continuity Conditions
Function $f$ is continuous at $x = c$ if:
1. $f(c)$ is defined
2. $\lim_{x \to c} f(x)$ exists
3. $\lim_{x \to c} f(x) = f(c)$

## Important Theorems

### Intermediate Value Theorem (IVT)
If $f$ is continuous on $[a, b]$ and $k$ is between $f(a)$ and $f(b)$, then there exists at least one $c$ in $(a, b)$ such that $f(c) = k$.

**Application**: Proving existence of roots

### Horizontal Asymptotes
$$\lim_{x \to \infty} f(x) = L \implies y = L \text{ is a horizontal asymptote}$$

**Rational Function Rules**:
- Degree numerator < degree denominator → $y = 0$
- Degree numerator = degree denominator → $y = \frac{\text{leading coefficients}}{}$
- Degree numerator > degree denominator → No HA (possibly oblique asymptote)

---

# 📚 UNIT 2: Differentiation: Definition and Fundamental Properties

## Definition of the Derivative

### Limit Definition
$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

### Alternative Form (at a point)
$$f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$

## Basic Derivative Rules

| Function | Derivative |
|----------|------------|
| $c$ (constant) | $0$ |
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\log_a x$ | $\frac{1}{x \ln a}$ |

## Trigonometric Derivatives

| Function | Derivative |
|----------|------------|
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| $\csc x$ | $-\csc x \cot x$ |

## Inverse Trigonometric Derivatives

| Function | Derivative |
|----------|------------|
| $\sin^{-1} x$ | $\frac{1}{\sqrt{1-x^2}}$ |
| $\cos^{-1} x$ | $\frac{-1}{\sqrt{1-x^2}}$ |
| $\tan^{-1} x$ | $\frac{1}{1+x^2}$ |
| $\cot^{-1} x$ | $\frac{-1}{1+x^2}$ |
| $\sec^{-1} x$ | $\frac{1}{|x|\sqrt{x^2-1}}$ |
| $\csc^{-1} x$ | $\frac{-1}{|x|\sqrt{x^2-1}}$ |

## Derivative Rules

### Product Rule
$$\frac{d}{dx}[f(x) \cdot g(x)] = f'(x)g(x) + f(x)g'(x)$$

### Quotient Rule
$$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$

**Memory Aid**: "Lo d-Hi minus Hi d-Lo over Lo-Lo"

## Differentiability

A function is differentiable at $x = c$ if:
1. Function is continuous at $c$
2. Left and right derivatives are equal
3. Tangent line exists (not vertical)

**Points of Non-Differentiability**:
- Corners (sharp turns)
- Cusps
- Vertical tangents
- Discontinuities

---

# 📚 UNIT 3: Differentiation: Composite, Implicit, and Inverse Functions

## Chain Rule

$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

**Leibniz Notation**:
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

### Common Chain Rule Patterns

| Pattern | Derivative |
|---------|------------|
| $[u(x)]^n$ | $n[u(x)]^{n-1} \cdot u'(x)$ |
| $e^{u(x)}$ | $e^{u(x)} \cdot u'(x)$ |
| $\ln[u(x)]$ | $\frac{u'(x)}{u(x)}$ |
| $\sin[u(x)]$ | $\cos[u(x)] \cdot u'(x)$ |
| $\cos[u(x)]$ | $-\sin[u(x)] \cdot u'(x)$ |

## Implicit Differentiation

**Process**:
1. Differentiate both sides with respect to $x$
2. Apply chain rule to terms with $y$ (multiply by $\frac{dy}{dx}$)
3. Collect terms with $\frac{dy}{dx}$ on one side
4. Factor out $\frac{dy}{dx}$ and solve

**Example**: For $x^2 + y^2 = 25$:
$$2x + 2y\frac{dy}{dx} = 0$$
$$\frac{dy}{dx} = -\frac{x}{y}$$

## Derivatives of Inverse Functions

If $g(x) = f^{-1}(x)$, then:
$$g'(x) = \frac{1}{f'(g(x))}$$

**At specific points**: If $f(a) = b$, then:
$$(f^{-1})'(b) = \frac{1}{f'(a)}$$

## Higher Order Derivatives

$$f''(x) = \frac{d^2y}{dx^2} = \frac{d}{dx}\left[\frac{dy}{dx}\right]$$

**For Implicit Functions**:
$$\frac{d^2y}{dx^2} = \frac{d}{dx}\left[\frac{dy}{dx}\right]$$
(Substitute first derivative back in)

---

# 📚 UNIT 4: Contextual Applications of Differentiation

## Related Rates

**Strategy**:
1. Draw diagram and label variables
2. Identify given rates and desired rate
3. Write equation relating variables
4. Differentiate with respect to time $t$
5. Substitute known values
6. Solve for unknown rate

### Common Related Rates Formulas

| Scenario | Key Equation |
|----------|--------------|
| Pythagorean | $a^2 + b^2 = c^2$ |
| Circle | $A = \pi r^2$, $C = 2\pi r$ |
| Sphere | $V = \frac{4}{3}\pi r^3$, $S = 4\pi r^2$ |
| Cone | $V = \frac{1}{3}\pi r^2 h$ |
| Cylinder | $V = \pi r^2 h$ |
| Similar Triangles | $\frac{a}{b} = \frac{c}{d}$ |

**⚠️ Common Mistake**: Don't substitute values until AFTER differentiating!

## Linearization and Tangent Line Approximation

### Equation of Tangent Line
$$y - f(a) = f'(a)(x - a)$$

### Linear Approximation
$$L(x) = f(a) + f'(a)(x - a)$$

$$f(x) \approx f(a) + f'(a)(x - a)$$

**When to use**: Estimating function values near known point

### Differentials
$$dy = f'(x) \cdot dx$$

**Approximation**: $\Delta y \approx dy$

## Motion Along a Line

| Quantity | Relationship |
|----------|--------------|
| Position | $s(t)$ or $x(t)$ |
| Velocity | $v(t) = s'(t)$ |
| Speed | $|v(t)|$ |
| Acceleration | $a(t) = v'(t) = s''(t)$ |

**Particle Analysis**:
- Moving right/up: $v(t) > 0$
- Moving left/down: $v(t) < 0$
- At rest: $v(t) = 0$
- Speeding up: $v(t)$ and $a(t)$ same sign
- Slowing down: $v(t)$ and $a(t)$ opposite signs
- Changes direction: $v(t)$ changes sign

---

# 📚 UNIT 5: Analytical Applications of Differentiation

## Critical Points and Extrema

### Critical Points
Points where $f'(x) = 0$ or $f'(x)$ is undefined

### First Derivative Test
At critical point $c$:
- $f'$ changes from + to −: Local maximum
- $f'$ changes from − to +: Local minimum
- $f'$ doesn't change sign: Neither (inflection point in derivative)

### Second Derivative Test
At critical point where $f'(c) = 0$:
- $f''(c) > 0$: Local minimum (concave up)
- $f''(c) < 0$: Local maximum (concave down)
- $f''(c) = 0$: Test inconclusive

## Concavity and Inflection Points

| Condition | Concavity |
|-----------|-----------|
| $f''(x) > 0$ | Concave up (smile) |
| $f''(x) < 0$ | Concave down (frown) |

**Inflection Points**: Where concavity changes
- $f''(x) = 0$ or undefined AND $f''$ changes sign

## Curve Sketching Checklist

1. **Domain**: Where is $f$ defined?
2. **Intercepts**: x-intercepts ($f(x) = 0$), y-intercept ($f(0)$)
3. **Symmetry**: Even, odd, or neither
4. **Asymptotes**: Horizontal, vertical, oblique
5. **First Derivative Analysis**: Increasing/decreasing, extrema
6. **Second Derivative Analysis**: Concavity, inflection points
7. **Plot key points and sketch**

## Optimization Problems

**Strategy**:
1. Identify what to maximize/minimize
2. Write objective function
3. Write constraint equation
4. Use constraint to write objective in one variable
5. Find critical points
6. Verify maximum/minimum (use endpoints or derivative test)
7. Answer the question asked

**⚠️ Don't forget**: Check endpoints for absolute extrema on closed intervals!

## Mean Value Theorem (MVT)

If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one $c$ in $(a, b)$ such that:

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

**Interpretation**: At some point, instantaneous rate = average rate

### Rolle's Theorem (Special Case)
If $f(a) = f(b)$, then $f'(c) = 0$ for some $c$ in $(a, b)$

## 🔷 L'Hôpital's Rule (BC Topic)

If $\lim_{x \to c} \frac{f(x)}{g(x)}$ gives $\frac{0}{0}$ or $\frac{\pm\infty}{\pm\infty}$, then:

$$\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}$$

(if the right side limit exists)

**Other Indeterminate Forms**:
| Form | Method |
|------|--------|
| $0 \cdot \infty$ | Rewrite as $\frac{0}{1/\infty}$ or $\frac{\infty}{1/0}$ |
| $\infty - \infty$ | Combine fractions or factor |
| $1^\infty$, $0^0$, $\infty^0$ | Take natural log: $\ln L = \lim[\ln(\text{expression})]$ |

---

# 📚 UNIT 6: Integration and Accumulation of Change

## Riemann Sums

$$\int_a^b f(x)\,dx \approx \sum_{i=1}^{n} f(x_i^*) \Delta x$$

where $\Delta x = \frac{b-a}{n}$

| Type | $x_i^*$ |
|------|---------|
| Left | $a + (i-1)\Delta x$ |
| Right | $a + i\Delta x$ |
| Midpoint | $a + (i - 0.5)\Delta x$ |

**Accuracy for Monotonic Functions**:
- Increasing: Left underestimates, Right overestimates
- Decreasing: Left overestimates, Right underestimates

## 🔷 Trapezoidal Rule

$$\int_a^b f(x)\,dx \approx \frac{\Delta x}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n)]$$

## Fundamental Theorem of Calculus

### Part 1 (FTC1)
$$\frac{d}{dx}\left[\int_a^x f(t)\,dt\right] = f(x)$$

**With Chain Rule**:
$$\frac{d}{dx}\left[\int_a^{g(x)} f(t)\,dt\right] = f(g(x)) \cdot g'(x)$$

**Both Limits Variable**:
$$\frac{d}{dx}\left[\int_{g(x)}^{h(x)} f(t)\,dt\right] = f(h(x)) \cdot h'(x) - f(g(x)) \cdot g'(x)$$

### Part 2 (FTC2)
$$\int_a^b f(x)\,dx = F(b) - F(a)$$

where $F$ is any antiderivative of $f$

## Basic Integration Rules

| Function | Antiderivative |
|----------|----------------|
| $x^n$ $(n \neq -1)$ | $\frac{x^{n+1}}{n+1} + C$ |
| $\frac{1}{x}$ | $\ln|x| + C$ |
| $e^x$ | $e^x + C$ |
| $a^x$ | $\frac{a^x}{\ln a} + C$ |
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $\sec^2 x$ | $\tan x + C$ |
| $\csc^2 x$ | $-\cot x + C$ |
| $\sec x \tan x$ | $\sec x + C$ |
| $\csc x \cot x$ | $-\csc x + C$ |
| $\frac{1}{\sqrt{1-x^2}}$ | $\sin^{-1} x + C$ |
| $\frac{1}{1+x^2}$ | $\tan^{-1} x + C$ |

## Properties of Definite Integrals

$$\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$$

$$\int_a^a f(x)\,dx = 0$$

$$\int_a^b f(x)\,dx + \int_b^c f(x)\,dx = \int_a^c f(x)\,dx$$

$$\int_a^b [f(x) \pm g(x)]\,dx = \int_a^b f(x)\,dx \pm \int_a^b g(x)\,dx$$

$$\int_a^b kf(x)\,dx = k\int_a^b f(x)\,dx$$

## U-Substitution

$$\int f(g(x)) \cdot g'(x)\,dx = \int f(u)\,du$$

where $u = g(x)$ and $du = g'(x)\,dx$

**For Definite Integrals**: Change limits when substituting!
- If $u = g(x)$, then new limits are $g(a)$ and $g(b)$

---

# 📚 UNIT 7: Differential Equations

## Separation of Variables

**Process**:
1. Write as $\frac{dy}{dx} = f(x)g(y)$
2. Separate: $\frac{dy}{g(y)} = f(x)\,dx$
3. Integrate both sides
4. Solve for $y$
5. Use initial condition to find $C$

**Example**: Solve $\frac{dy}{dx} = xy$, $y(0) = 1$
$$\frac{dy}{y} = x\,dx$$
$$\ln|y| = \frac{x^2}{2} + C$$
$$y = Ae^{x^2/2}$$
$$y(0) = 1 \Rightarrow A = 1$$
$$y = e^{x^2/2}$$

## Exponential Growth and Decay

$$\frac{dy}{dt} = ky$$

**Solution**: $y = y_0 e^{kt}$

| $k$ | Behavior |
|-----|----------|
| $k > 0$ | Exponential growth |
| $k < 0$ | Exponential decay |

**Half-life**: $t_{1/2} = \frac{\ln 2}{|k|}$

**Doubling time**: $t_d = \frac{\ln 2}{k}$

## 🔷 Logistic Growth (BC Topic)

$$\frac{dP}{dt} = kP\left(1 - \frac{P}{L}\right)$$

where $L$ is the carrying capacity

**Solution**: 
$$P(t) = \frac{L}{1 + Ae^{-kt}}$$

where $A = \frac{L - P_0}{P_0}$

**Key Properties**:
- Maximum growth rate at $P = \frac{L}{2}$
- $\lim_{t \to \infty} P(t) = L$
- Inflection point at $P = \frac{L}{2}$

## Slope Fields

- Each point shows slope $\frac{dy}{dx}$ at that location
- Solution curves follow the direction of slopes
- Horizontal segments where $\frac{dy}{dx} = 0$
- Vertical segments where $\frac{dy}{dx}$ is undefined

## 🔷 Euler's Method (BC Topic)

Numerical approximation for $\frac{dy}{dx} = f(x, y)$:

$$y_{n+1} = y_n + f(x_n, y_n) \cdot \Delta x$$
$$x_{n+1} = x_n + \Delta x$$

**Steps**:
1. Start with $(x_0, y_0)$
2. Calculate slope: $m = f(x_0, y_0)$
3. New point: $y_1 = y_0 + m \cdot \Delta x$
4. Repeat

**⚠️ Smaller step size = more accurate approximation**

---

# 📚 UNIT 8: Applications of Integration

## Average Value of a Function

$$f_{avg} = \frac{1}{b-a}\int_a^b f(x)\,dx$$

**Mean Value Theorem for Integrals**: There exists $c$ in $[a, b]$ such that $f(c) = f_{avg}$

## Net Change Theorem

$$\int_a^b f'(x)\,dx = f(b) - f(a)$$

**Applications**:
- Position from velocity: $s(b) - s(a) = \int_a^b v(t)\,dt$
- Total distance: $\int_a^b |v(t)|\,dt$
- Population change: $\int_a^b P'(t)\,dt$

## Area Between Curves

### Vertical Slices (dx)
$$A = \int_a^b [f(x) - g(x)]\,dx$$

where $f(x) \geq g(x)$ on $[a, b]$

### Horizontal Slices (dy)
$$A = \int_c^d [f(y) - g(y)]\,dy$$

where $f(y) \geq g(y)$ on $[c, d]$

**Strategy**: Choose slicing direction based on which makes functions easier to express

## Volumes of Solids

### Disk Method (revolution around axis)
$$V = \pi \int_a^b [R(x)]^2\,dx$$

### Washer Method (revolution with hole)
$$V = \pi \int_a^b \left([R(x)]^2 - [r(x)]^2\right)dx$$

where $R$ = outer radius, $r$ = inner radius

### Cross-Section Method
$$V = \int_a^b A(x)\,dx$$

| Cross-Section | $A(x)$ |
|---------------|--------|
| Square | $s^2$ |
| Equilateral triangle | $\frac{\sqrt{3}}{4}s^2$ |
| Isoceles right triangle | $\frac{1}{2}s^2$ |
| Semicircle | $\frac{\pi}{8}s^2$ |

## 🔷 Arc Length (BC Topic)

### Cartesian Form
$$L = \int_a^b \sqrt{1 + [f'(x)]^2}\,dx$$

### Parametric Form
$$L = \int_{\alpha}^{\beta} \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt$$

---

# 📚 UNIT 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions 🔷

## Parametric Equations

### First Derivative
$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{y'(t)}{x'(t)}$$

### Second Derivative
$$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}$$

### Arc Length
$$L = \int_{\alpha}^{\beta} \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt$$

### Speed
$$\text{Speed} = \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}$$

### Position from Velocity
$$x(t) = x_0 + \int_{t_0}^{t} v_x(\tau)\,d\tau$$
$$y(t) = y_0 + \int_{t_0}^{t} v_y(\tau)\,d\tau$$

### Total Distance Traveled
$$\int_{\alpha}^{\beta} \sqrt{[x'(t)]^2 + [y'(t)]^2}\,dt$$

## Polar Coordinates

### Conversions
| Polar to Rectangular | Rectangular to Polar |
|---------------------|---------------------|
| $x = r\cos\theta$ | $r = \sqrt{x^2 + y^2}$ |
| $y = r\sin\theta$ | $\tan\theta = \frac{y}{x}$ |

### Common Polar Curves

| Equation | Shape |
|----------|-------|
| $r = a$ | Circle, radius $a$, centered at origin |
| $r = a\cos\theta$ | Circle, diameter $a$, tangent to y-axis at origin |
| $r = a\sin\theta$ | Circle, diameter $a$, tangent to x-axis at origin |
| $r = a + b\cos\theta$ | Limaçon |
| $r = a\cos(n\theta)$ | Rose ($n$ or $2n$ petals) |
| $r^2 = a^2\cos(2\theta)$ | Lemniscate |
| $r = a\theta$ | Spiral of Archimedes |

### Limaçon Types ($r = a + b\cos\theta$)
| Condition | Type |
|-----------|------|
| $a > b$ | Convex limaçon (no dimple) |
| $a = b$ | Cardioid |
| $a < b$ | Limaçon with inner loop |

### Rose Curves
- $r = a\cos(n\theta)$: 
  - $n$ odd → $n$ petals
  - $n$ even → $2n$ petals

### Slope in Polar Coordinates
$$\frac{dy}{dx} = \frac{\frac{dr}{d\theta}\sin\theta + r\cos\theta}{\frac{dr}{d\theta}\cos\theta - r\sin\theta}$$

### Area in Polar Coordinates
$$A = \frac{1}{2}\int_{\alpha}^{\beta} [r(\theta)]^2\,d\theta$$

**Area Between Two Polar Curves**:
$$A = \frac{1}{2}\int_{\alpha}^{\beta} \left([r_1(\theta)]^2 - [r_2(\theta)]^2\right)d\theta$$

## Vector-Valued Functions

A vector-valued function: $\vec{r}(t) = \langle x(t), y(t) \rangle$ or $\vec{r}(t) = x(t)\hat{i} + y(t)\hat{j}$

### Velocity and Acceleration
$$\vec{v}(t) = \vec{r}'(t) = \langle x'(t), y'(t) \rangle$$
$$\vec{a}(t) = \vec{v}'(t) = \langle x''(t), y''(t) \rangle$$

### Speed (Magnitude of Velocity)
$$|\vec{v}(t)| = \sqrt{[x'(t)]^2 + [y'(t)]^2}$$

### Total Distance Traveled
$$\int_a^b |\vec{v}(t)|\,dt = \int_a^b \sqrt{[x'(t)]^2 + [y'(t)]^2}\,dt$$

### Displacement
$$\vec{r}(b) - \vec{r}(a) = \int_a^b \vec{v}(t)\,dt$$

---

# 📚 UNIT 10: Infinite Sequences and Series 🔷

## Sequences

### Limit of a Sequence
$$\lim_{n \to \infty} a_n = L$$

The sequence **converges** if this limit exists and is finite.

### Important Sequence Limits
$$\lim_{n \to \infty} \frac{1}{n^p} = 0 \text{ for } p > 0$$

$$\lim_{n \to \infty} r^n = 0 \text{ for } |r| < 1$$

$$\lim_{n \to \infty} \sqrt[n]{n} = 1$$

$$\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$$

$$\lim_{n \to \infty} \frac{n!}{n^n} = 0$$

## Series Basics

### Definition
$$\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \cdots$$

### Partial Sums
$$S_n = \sum_{k=1}^{n} a_k$$

Series converges if $\lim_{n \to \infty} S_n$ exists

### Divergence Test (nth Term Test)
If $\lim_{n \to \infty} a_n \neq 0$, then $\sum a_n$ **diverges**

**⚠️ Warning**: If $\lim_{n \to \infty} a_n = 0$, the series may converge OR diverge!

## Special Series

### Geometric Series
$$\sum_{n=0}^{\infty} ar^n = \frac{a}{1-r} \text{ if } |r| < 1$$

Diverges if $|r| \geq 1$

### p-Series
$$\sum_{n=1}^{\infty} \frac{1}{n^p}$$

- Converges if $p > 1$
- Diverges if $p \leq 1$

**Special Case**: Harmonic series $\sum \frac{1}{n}$ diverges

### Alternating Harmonic Series
$$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = \ln 2$$

## 🔷 Convergence Tests Flowchart

```
Is it a geometric series (ar^n)?
├── Yes → Converges if |r| < 1, sum = a/(1-r)
└── No ↓

Is it a p-series (1/n^p)?
├── Yes → Converges if p > 1
└── No ↓

Does lim(n→∞) aₙ ≠ 0?
├── Yes → DIVERGES (Divergence Test)
└── No ↓

Is it alternating with decreasing terms?
├── Yes → Use Alternating Series Test
└── No ↓

Can you easily integrate the function?
├── Yes → Use Integral Test
└── No ↓

Can you compare to a known series?
├── Yes → Use Direct or Limit Comparison
└── No ↓

Does it have factorials or powers of n?
├── Yes → Use Ratio Test
└── No ↓

Are terms of form (aₙ)^n?
├── Yes → Use Root Test
└── No → Try Ratio Test or rethink comparison
```

## Convergence Tests Detailed

### Integral Test
If $f(x)$ is positive, continuous, and decreasing for $x \geq 1$, and $a_n = f(n)$, then:
$$\sum_{n=1}^{\infty} a_n \text{ and } \int_1^{\infty} f(x)\,dx$$
either both converge or both diverge.

### Comparison Test (Direct)
Given $0 \leq a_n \leq b_n$:
- If $\sum b_n$ converges, then $\sum a_n$ converges
- If $\sum a_n$ diverges, then $\sum b_n$ diverges

### Limit Comparison Test
If $a_n, b_n > 0$ and $\lim_{n \to \infty} \frac{a_n}{b_n} = L$ where $0 < L < \infty$, then $\sum a_n$ and $\sum b_n$ either both converge or both diverge.

### Alternating Series Test (Leibniz)
For $\sum (-1)^n a_n$ where $a_n > 0$:

If:
1. $\lim_{n \to \infty} a_n = 0$
2. $a_{n+1} \leq a_n$ (decreasing)

Then the series **converges**.

**Error Bound**: $|R_n| \leq a_{n+1}$

### Ratio Test
$$L = \lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right|$$

| $L$ | Conclusion |
|-----|------------|
| $L < 1$ | Absolutely convergent |
| $L > 1$ | Divergent |
| $L = 1$ | Inconclusive |

**Best for**: Factorials, products, exponentials

### Root Test
$$L = \lim_{n \to \infty} \sqrt[n]{|a_n|}$$

| $L$ | Conclusion |
|-----|------------|
| $L < 1$ | Absolutely convergent |
| $L > 1$ | Divergent |
| $L = 1$ | Inconclusive |

**Best for**: Terms of form $(...)^n$

## Absolute vs Conditional Convergence

- **Absolutely convergent**: $\sum |a_n|$ converges
- **Conditionally convergent**: $\sum a_n$ converges but $\sum |a_n|$ diverges

**Fact**: Absolute convergence implies convergence

## Power Series

### Form
$$\sum_{n=0}^{\infty} c_n(x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \cdots$$

### Radius of Convergence (R)
Use Ratio Test:
$$R = \lim_{n \to \infty} \left|\frac{c_n}{c_{n+1}}\right|$$

or Root Test:
$$R = \frac{1}{\lim_{n \to \infty} \sqrt[n]{|c_n|}}$$

### Interval of Convergence
- Centered at $a$ with radius $R$
- Check endpoints separately!

| Radius | Interval |
|--------|----------|
| $R = 0$ | Converges only at $x = a$ |
| $R = \infty$ | Converges for all $x$ |
| $0 < R < \infty$ | Check $(a-R, a+R)$ and endpoints |

## Operations on Power Series

### Differentiation
$$\frac{d}{dx}\left[\sum_{n=0}^{\infty} c_n(x-a)^n\right] = \sum_{n=1}^{\infty} nc_n(x-a)^{n-1}$$

**Same radius of convergence** (endpoints may change)

### Integration
$$\int \sum_{n=0}^{\infty} c_n(x-a)^n\,dx = C + \sum_{n=0}^{\infty} \frac{c_n(x-a)^{n+1}}{n+1}$$

**Same radius of convergence** (endpoints may change)

## Taylor and Maclaurin Series

### Taylor Series (centered at $x = a$)
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$

### Maclaurin Series (centered at $x = 0$)
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n$$

## Essential Maclaurin Series (MEMORIZE!)

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots \quad R = \infty$$

$$\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots \quad R = \infty$$

$$\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots \quad R = \infty$$

$$\ln(1+x) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1} x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots \quad R = 1, \text{ includes } x = 1$$

$$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \cdots \quad R = 1$$

$$\frac{1}{1+x} = \sum_{n=0}^{\infty} (-1)^n x^n = 1 - x + x^2 - x^3 + \cdots \quad R = 1$$

$$\tan^{-1} x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots \quad R = 1, \text{ includes endpoints}$$

$$(1+x)^k = \sum_{n=0}^{\infty} \binom{k}{n} x^n = 1 + kx + \frac{k(k-1)}{2!}x^2 + \cdots \quad R = 1$$

## Taylor Polynomial Approximation

### nth-degree Taylor polynomial
$$P_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k$$

### Lagrange Error Bound
$$|R_n(x)| = |f(x) - P_n(x)| \leq \frac{M}{(n+1)!}|x-a|^{n+1}$$

where $M = \max|f^{(n+1)}(z)|$ for $z$ between $a$ and $x$

### Alternating Series Error Bound
For alternating series, the error is bounded by the first omitted term:
$$|R_n| \leq |a_{n+1}|$$

## Building New Series from Known Series

**Substitution**: Replace $x$ with expression
- Example: $e^{-x^2} = \sum \frac{(-x^2)^n}{n!} = \sum \frac{(-1)^n x^{2n}}{n!}$

**Multiplication**: Multiply series by $x^k$
- Example: $x^2 \cos x = x^2 \sum \frac{(-1)^n x^{2n}}{(2n)!} = \sum \frac{(-1)^n x^{2n+2}}{(2n)!}$

**Integration**: Integrate term by term
- Example: $\int \frac{1}{1+x^2}dx = \tan^{-1}x = \sum \frac{(-1)^n x^{2n+1}}{2n+1}$

---

# 🧮 Integration Techniques Summary 🔷

## Technique Selection Guide

| If you see... | Try... |
|---------------|--------|
| $f(g(x)) \cdot g'(x)$ | u-substitution |
| $\int u\,dv$ form | Integration by parts |
| $\sin^m x \cos^n x$ | Trig identities/substitution |
| $\sqrt{a^2 - x^2}$ | $x = a\sin\theta$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan\theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec\theta$ |
| $\frac{P(x)}{Q(x)}$ with deg P ≥ deg Q | Long division first |
| $\frac{P(x)}{Q(x)}$ factorable | Partial fractions |

## 🔷 Integration by Parts

$$\int u\,dv = uv - \int v\,du$$

**LIATE Rule** (choose $u$ in this order):
1. **L**ogarithmic
2. **I**nverse trig
3. **A**lgebraic (polynomials)
4. **T**rigonometric
5. **E**xponential

### Tabular Method (Repeated IBP)
For $\int x^n e^{ax}dx$, $\int x^n \sin(ax)dx$, etc.

| Sign | Derivatives of $u$ | Integrals of $dv$ |
|------|-------------------|-------------------|
| + | $x^n$ | $e^{ax}$ |
| − | $nx^{n-1}$ | $\frac{1}{a}e^{ax}$ |
| + | $n(n-1)x^{n-2}$ | $\frac{1}{a^2}e^{ax}$ |
| ... | ... | ... |

Multiply diagonally and add.

## 🔷 Partial Fractions

### Case 1: Distinct Linear Factors
$$\frac{P(x)}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}$$

### Case 2: Repeated Linear Factors
$$\frac{P(x)}{(x-a)^n} = \frac{A_1}{x-a} + \frac{A_2}{(x-a)^2} + \cdots + \frac{A_n}{(x-a)^n}$$

### Case 3: Irreducible Quadratic Factors
$$\frac{P(x)}{(x^2+bx+c)} = \frac{Ax+B}{x^2+bx+c}$$

## 🔷 Trigonometric Integrals

### $\int \sin^m x \cos^n x \, dx$

**If $m$ is odd**: Save one $\sin x$, convert rest to $\cos x$, let $u = \cos x$

**If $n$ is odd**: Save one $\cos x$, convert rest to $\sin x$, let $u = \sin x$

**If both even**: Use half-angle identities:
$$\sin^2 x = \frac{1 - \cos 2x}{2}, \quad \cos^2 x = \frac{1 + \cos 2x}{2}$$

### Useful Trig Identities
$$\sin^2 x + \cos^2 x = 1$$
$$\tan^2 x + 1 = \sec^2 x$$
$$\cot^2 x + 1 = \csc^2 x$$
$$\sin 2x = 2\sin x \cos x$$
$$\cos 2x = \cos^2 x - \sin^2 x = 1 - 2\sin^2 x = 2\cos^2 x - 1$$

## 🔷 Trigonometric Substitution

| Expression | Substitution | Identity Used |
|------------|--------------|---------------|
| $\sqrt{a^2 - x^2}$ | $x = a\sin\theta$ | $1 - \sin^2\theta = \cos^2\theta$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan\theta$ | $1 + \tan^2\theta = \sec^2\theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec\theta$ | $\sec^2\theta - 1 = \tan^2\theta$ |

**Don't forget**: Convert back to $x$ at the end!

## 🔷 Improper Integrals

### Type 1: Infinite Limits
$$\int_a^{\infty} f(x)\,dx = \lim_{b \to \infty} \int_a^b f(x)\,dx$$

$$\int_{-\infty}^{b} f(x)\,dx = \lim_{a \to -\infty} \int_a^b f(x)\,dx$$

$$\int_{-\infty}^{\infty} f(x)\,dx = \int_{-\infty}^{c} f(x)\,dx + \int_c^{\infty} f(x)\,dx$$

### Type 2: Discontinuous Integrand
If $f$ has discontinuity at $c$ in $[a, b]$:
$$\int_a^b f(x)\,dx = \lim_{t \to c^-} \int_a^t f(x)\,dx + \lim_{t \to c^+} \int_t^b f(x)\,dx$$

### Comparison Test for Improper Integrals
If $0 \leq f(x) \leq g(x)$:
- $\int g(x)\,dx$ converges → $\int f(x)\,dx$ converges
- $\int f(x)\,dx$ diverges → $\int g(x)\,dx$ diverges

### Common Improper Integrals
$$\int_1^{\infty} \frac{1}{x^p}\,dx \text{ converges iff } p > 1$$

$$\int_0^{1} \frac{1}{x^p}\,dx \text{ converges iff } p < 1$$

---

# 📝 FRQ Strategies by Type

## Type 1: Rate/Accumulation Problems
- Identify rate function and what's being accumulated
- Net change = $\int_a^b r(t)\,dt$
- Average value = $\frac{1}{b-a}\int_a^b r(t)\,dt$
- Use FTC Part 1 for derivative of integral

## Type 2: Differential Equations
- Slope fields: Describe behavior, sketch solution
- Separation of variables: Show work clearly
- Initial conditions: Always find the constant
- Euler's method: Make a table, show calculations

## Type 3: Area/Volume
- Draw a picture!
- Label bounds clearly
- Disk/washer: Identify inner and outer radii
- Cross-sections: Find the side length in terms of x or y

## Type 4: Particle Motion
- Position, velocity, acceleration relationships
- Speed = |velocity|
- Direction change when velocity changes sign
- Distance ≠ displacement

## Type 5: Taylor/Maclaurin Series
- Show enough terms to establish pattern
- Write general term with sigma notation
- Find interval of convergence
- Error bounds: Lagrange or alternating series

## Type 6: Parametric/Polar
- Parametric: $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$
- Polar area: $\frac{1}{2}\int r^2\,d\theta$
- Convert between forms as needed
- Speed = $\sqrt{(x')^2 + (y')^2}$

---

# 🔢 Calculator vs Non-Calculator Tips

## Calculator Section (Parts A)

### What to Use Calculator For:
- Graphing to find intersections
- Numerical integration (fnInt)
- Numerical derivatives (nDeriv)
- Finding zeros/roots
- Storing intermediate values

### Calculator Commands (TI-84)
| Operation | Command |
|-----------|---------|
| Derivative at point | nDeriv(f(x), x, value) |
| Definite integral | fnInt(f(x), x, a, b) |
| Find zeros | CALC → zero |
| Intersection | CALC → intersect |
| Maximum/Minimum | CALC → maximum/minimum |

### Tips:
- Set MODE to radians
- Use parentheses carefully
- Store values: `3.14159 → A`
- Check reasonableness of answers

## Non-Calculator Section (Parts B)

### Must Know Cold:
- All derivative rules
- Basic antiderivatives
- Unit circle values
- Taylor series of common functions
- Convergence test procedures

### Mental Math Shortcuts:
- $\ln e = 1$, $e^0 = 1$, $\ln 1 = 0$
- $\sin(\pi/6) = 1/2$, $\cos(\pi/3) = 1/2$
- $\sin(\pi/4) = \cos(\pi/4) = \sqrt{2}/2$
- $\tan(\pi/4) = 1$

---

# ⚠️ Common Mistakes to Avoid

## Limits
- ❌ Plugging in before simplifying
- ❌ Forgetting $\frac{0}{0}$ requires more work
- ❌ Confusing limits at infinity with infinite limits

## Derivatives
- ❌ Forgetting chain rule
- ❌ Wrong signs for trig derivatives
- ❌ Not using product/quotient rule when needed
- ❌ Derivatives of constants ≠ 0 if constant involves the variable

## Integrals
- ❌ Forgetting + C for indefinite integrals
- ❌ Wrong u-substitution bounds
- ❌ Forgetting to substitute back
- ❌ Area can't be negative (use absolute value)

## Differential Equations
- ❌ Not separating variables correctly
- ❌ Forgetting constant of integration
- ❌ Not checking initial conditions

## Series
- ❌ Divergence test: If limit = 0, can't conclude convergence!
- ❌ Forgetting to check endpoints for interval of convergence
- ❌ Using wrong error bound formula
- ❌ Not matching the form of known series

## Parametric/Polar
- ❌ Forgetting $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$
- ❌ Wrong limits for polar area
- ❌ Not squaring $r$ in polar area formula
- ❌ Using wrong formula for second derivative

## FRQs
- ❌ Not showing enough work
- ❌ Rounding intermediate answers
- ❌ Not answering the question asked
- ❌ Not including units when required

---

# ✅ Last-Minute Checklist

## Formulas to Have Memorized

### Derivatives
- [ ] Power rule, product rule, quotient rule, chain rule
- [ ] All six trig derivatives
- [ ] All six inverse trig derivatives
- [ ] Exponential and logarithmic derivatives

### Integrals
- [ ] Basic antiderivatives (power, trig, exp, log)
- [ ] Integration by parts formula
- [ ] Trig substitution triangles

### Series (BC)
- [ ] Geometric series formula and convergence
- [ ] p-series convergence
- [ ] All convergence tests
- [ ] Taylor series of $e^x$, $\sin x$, $\cos x$, $\ln(1+x)$, $\frac{1}{1-x}$
- [ ] Lagrange error bound formula

### Parametric/Polar (BC)
- [ ] Parametric first and second derivatives
- [ ] Arc length formulas
- [ ] Polar area formula
- [ ] Polar to rectangular conversions

## Concepts to Review

- [ ] Limit evaluation techniques
- [ ] Continuity and differentiability conditions
- [ ] Related rates problem setup
- [ ] Optimization strategy
- [ ] Mean Value Theorem statements
- [ ] Riemann sum interpretations
- [ ] Net change vs total change
- [ ] Motion analysis (position, velocity, acceleration)
- [ ] Separation of variables
- [ ] Euler's method steps
- [ ] Logistic growth properties
- [ ] Convergence test selection
- [ ] Building series from known series

## Day-Before Tips

1. **Get good sleep** - More valuable than cramming
2. **Review flashcards** of formulas
3. **Do 1-2 practice FRQs** to stay sharp
4. **Prepare materials** - Calculator (fresh batteries!), pencils, eraser
5. **Know your testing location** and arrival time
6. **Eat a good breakfast** on exam day
7. **Stay calm** - You've prepared for this!

## During the Exam

1. **Read each question carefully**
2. **Manage your time** - Don't get stuck on one problem
3. **Show all work** on FRQs
4. **Use correct notation** (dy/dx, not y')
5. **Check units** when given
6. **If stuck, move on** and come back
7. **Review if time permits**

---

# 📊 Quick Reference: All BC Topics at a Glance

## Unit 1-4: Shared with AB
| Topic | Key Concepts |
|-------|--------------|
| Limits | Limit laws, squeeze theorem, continuity |
| Differentiation | All derivative rules, implicit, inverse |
| Applications | Related rates, linearization, motion |
| Analysis | Extrema, concavity, optimization |

## Unit 5-8: Shared with AB (BC adds depth)
| Topic | Key Concepts |
|-------|--------------|
| L'Hôpital's Rule 🔷 | Indeterminate forms |
| Integration | FTC, u-substitution |
| Advanced Integration 🔷 | IBP, partial fractions, trig sub |
| Diff EQ | Separation, slope fields |
| Euler's Method 🔷 | Numerical approximation |
| Logistic Growth 🔷 | Carrying capacity models |
| Applications | Average value, area, volume |
| Arc Length 🔷 | Cartesian and parametric |

## Unit 9: Parametric, Polar, Vectors 🔷
| Topic | Key Concepts |
|-------|--------------|
| Parametric | Derivatives, arc length, motion |
| Polar | Conversions, area, curves |
| Vectors | Position, velocity, acceleration |

## Unit 10: Infinite Series 🔷
| Topic | Key Concepts |
|-------|--------------|
| Sequences | Convergence |
| Series | Convergence tests |
| Power Series | Radius/interval of convergence |
| Taylor/Maclaurin | Approximations, error bounds |

---

# 🎯 Score Maximizing Strategy

## Multiple Choice
1. Answer every question (no penalty for guessing)
2. Eliminate obviously wrong answers
3. Use your calculator efficiently
4. Flag questions to review
5. Watch for "traps" in answer choices

## Free Response
1. **Read entire question first**
2. **Part (a) often sets up later parts**
3. **Show intermediate steps** - partial credit!
4. **Use proper notation** and label clearly
5. **Box or clearly indicate final answers**
6. **Justify with calculus**, not just calculator output
7. **If you can't solve, write what you know**

## Point Allocation
- Each FRQ part is scored 0-9 points
- Partial credit is common
- Correct setup with wrong answer > no attempt
- Calculator answers must be supported by setup

---

## 🌟 Final Words of Encouragement

You've made it through the most challenging calculus course offered in high school. AP Calculus BC covers an enormous amount of material - from limits to infinite series - and you've tackled it all.

Remember:
- **Trust your preparation** - You've done the work
- **Stay calm under pressure** - You know this material
- **Read carefully** - Many mistakes come from misreading
- **Show your work** - Partial credit adds up
- **Use your time wisely** - Don't get stuck on one problem

The AP exam tests your understanding of calculus concepts and your ability to apply them. You've been training for this all year. 

**You've got this! Good luck! 🍀**

---

*"The only way to learn mathematics is to do mathematics."* — Paul Halmos

:::GUIDE:::
