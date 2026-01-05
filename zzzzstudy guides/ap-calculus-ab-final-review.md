:::GUIDE:::
unit::=Final Review
title::=📐 AP Calculus AB Complete Final Exam Review
desc::=Comprehensive review of all units for AP Calculus AB exam preparation
diff::=Hard
time::=120 min
tags::=calculus,final-review,ap-exam,limits,derivatives,integrals
content::=

# 📐 AP Calculus AB: Complete Final Exam Review

> **Exam Format:** 45 multiple choice questions (1 hr 45 min) + 6 free response questions (1 hr 30 min)
> **Calculator:** Allowed on parts of both sections

---

## 📜 Timeline of Calculus History

| Year | Mathematician | Contribution |
|------|---------------|--------------|
| ~250 BC | **Archimedes** | Method of exhaustion (early integration concepts) |
| 1635 | **Bonaventura Cavalieri** | Cavalieri's principle for volumes |
| 1665-1666 | **Isaac Newton** | Developed "fluxions" (derivatives), fundamental theorem |
| 1675-1684 | **Gottfried Leibniz** | Independent discovery, invented dx/dy notation |
| 1696 | **L'Hôpital** | Published first calculus textbook, L'Hôpital's Rule |
| 1734 | **Leonhard Euler** | Standardized notation, e and function concept |
| 1821 | **Augustin-Louis Cauchy** | Rigorous definition of limits |
| 1854 | **Bernhard Riemann** | Riemann sums and integration |
| 1861 | **Karl Weierstrass** | ε-δ definition of limits |

> 💡 **Fun Fact:** Newton and Leibniz independently developed calculus, leading to a famous priority dispute. Today, we use Leibniz's notation (dy/dx) because it's more intuitive for the chain rule.

---

## 🎯 Unit 1: Limits and Continuity

### Key Definitions

**Limit Definition:**
$$\lim_{x \to c} f(x) = L$$
means that as x approaches c, f(x) approaches L.

**Formal (ε-δ) Definition:**
For every ε > 0, there exists δ > 0 such that if 0 < |x - c| < δ, then |f(x) - L| < ε.

### Limit Laws

| Law | Formula |
|-----|---------|
| Sum | $\lim[f(x) + g(x)] = \lim f(x) + \lim g(x)$ |
| Difference | $\lim[f(x) - g(x)] = \lim f(x) - \lim g(x)$ |
| Product | $\lim[f(x) \cdot g(x)] = \lim f(x) \cdot \lim g(x)$ |
| Quotient | $\lim\frac{f(x)}{g(x)} = \frac{\lim f(x)}{\lim g(x)}$ (if denominator ≠ 0) |
| Power | $\lim[f(x)]^n = [\lim f(x)]^n$ |
| Constant Multiple | $\lim[c \cdot f(x)] = c \cdot \lim f(x)$ |

### Special Limits

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

$$\lim_{x \to 0} \frac{1 - \cos x}{x} = 0$$

$$\lim_{x \to 0} \frac{\tan x}{x} = 1$$

$$\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$$

$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

$$\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1$$

### Continuity

**Definition:** f(x) is continuous at x = c if:
1. f(c) is defined
2. $\lim_{x \to c} f(x)$ exists
3. $\lim_{x \to c} f(x) = f(c)$

**Types of Discontinuities:**
- **Removable (hole):** Limit exists but ≠ f(c) or f(c) undefined
- **Jump:** Left and right limits exist but are different
- **Infinite (vertical asymptote):** Limit is ±∞

### Intermediate Value Theorem (IVT)

> If f is continuous on [a, b] and k is between f(a) and f(b), then there exists at least one c in (a, b) such that f(c) = k.

**Application:** Proving roots exist
- Show f is continuous on [a, b]
- Show f(a) and f(b) have opposite signs
- Conclude: there exists c where f(c) = 0

### Asymptotes

**Horizontal Asymptotes:** $\lim_{x \to \pm\infty} f(x) = L$

**Vertical Asymptotes:** $\lim_{x \to c} f(x) = \pm\infty$

**Comparing Growth Rates:**
- Exponentials dominate polynomials
- Polynomials dominate logarithms
- Higher degree polynomials dominate lower degree

---

## 🎯 Unit 2: Differentiation - Definition and Fundamental Properties

### Definition of the Derivative

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

**Alternate Form:**
$$f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$

### Interpretations of the Derivative

| Context | f'(x) Represents |
|---------|------------------|
| Geometry | Slope of tangent line |
| Physics | Instantaneous velocity |
| General | Instantaneous rate of change |
| Economics | Marginal cost/revenue |

### Basic Derivative Rules

| Function | Derivative |
|----------|------------|
| $c$ (constant) | $0$ |
| $x^n$ | $nx^{n-1}$ |
| $cf(x)$ | $cf'(x)$ |
| $f(x) + g(x)$ | $f'(x) + g'(x)$ |
| $f(x) - g(x)$ | $f'(x) - g'(x)$ |

### Trigonometric Derivatives

| Function | Derivative |
|----------|------------|
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| $\csc x$ | $-\csc x \cot x$ |

> 💡 **Memory Tip:** Functions starting with "co-" have negative derivatives

### Exponential and Logarithmic Derivatives

| Function | Derivative |
|----------|------------|
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\log_a x$ | $\frac{1}{x \ln a}$ |

### Differentiability and Continuity

> **Theorem:** If f is differentiable at c, then f is continuous at c.

> **Contrapositive:** If f is not continuous at c, then f is not differentiable at c.

**Note:** Continuous does NOT imply differentiable! (e.g., |x| at x = 0)

**Not Differentiable At:**
- Corners/cusps
- Vertical tangents
- Discontinuities

---

## 🎯 Unit 3: Differentiation - Composite, Implicit, and Inverse Functions

### Product Rule

$$\frac{d}{dx}[f(x) \cdot g(x)] = f'(x)g(x) + f(x)g'(x)$$

> 💡 **Memory:** "First times derivative of second plus second times derivative of first"

### Quotient Rule

$$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$

> 💡 **Memory:** "Lo d-Hi minus Hi d-Lo, over Lo-Lo" (Low × derivative of High...)

### Chain Rule

$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

**Leibniz Notation:**
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

### Combined Rules with Chain Rule

| Function | Derivative |
|----------|------------|
| $[f(x)]^n$ | $n[f(x)]^{n-1} \cdot f'(x)$ |
| $e^{f(x)}$ | $e^{f(x)} \cdot f'(x)$ |
| $\ln[f(x)]$ | $\frac{f'(x)}{f(x)}$ |
| $\sin[f(x)]$ | $\cos[f(x)] \cdot f'(x)$ |
| $\cos[f(x)]$ | $-\sin[f(x)] \cdot f'(x)$ |

### Implicit Differentiation

**Steps:**
1. Differentiate both sides with respect to x
2. Apply chain rule: $\frac{d}{dx}[y^n] = ny^{n-1} \cdot \frac{dy}{dx}$
3. Collect all $\frac{dy}{dx}$ terms on one side
4. Factor out $\frac{dy}{dx}$ and solve

**Example:** Find dy/dx for $x^2 + y^2 = 25$
$$2x + 2y\frac{dy}{dx} = 0$$
$$\frac{dy}{dx} = -\frac{x}{y}$$

### Inverse Function Derivatives

$$\frac{d}{dx}[f^{-1}(x)] = \frac{1}{f'(f^{-1}(x))}$$

**Or equivalently:** If g = f⁻¹, then $g'(x) = \frac{1}{f'(g(x))}$

### Inverse Trigonometric Derivatives

| Function | Derivative |
|----------|------------|
| $\arcsin x$ | $\frac{1}{\sqrt{1-x^2}}$ |
| $\arccos x$ | $-\frac{1}{\sqrt{1-x^2}}$ |
| $\arctan x$ | $\frac{1}{1+x^2}$ |
| $\text{arccot } x$ | $-\frac{1}{1+x^2}$ |
| $\text{arcsec } x$ | $\frac{1}{|x|\sqrt{x^2-1}}$ |
| $\text{arccsc } x$ | $-\frac{1}{|x|\sqrt{x^2-1}}$ |

> 💡 **Memory:** Inverse "co-" functions have negative derivatives

---

## 🎯 Unit 4: Contextual Applications of Differentiation

### Related Rates Problem Strategy

**Steps:**
1. **Draw** a diagram and label variables
2. **Identify** given rates and the rate you need to find
3. **Write** an equation relating the variables
4. **Differentiate** implicitly with respect to time (t)
5. **Substitute** known values and solve

**Common Formulas:**
| Shape | Formula |
|-------|---------|
| Circle | $A = \pi r^2$, $C = 2\pi r$ |
| Sphere | $V = \frac{4}{3}\pi r^3$, $SA = 4\pi r^2$ |
| Cylinder | $V = \pi r^2 h$ |
| Cone | $V = \frac{1}{3}\pi r^2 h$ |
| Pythagorean | $a^2 + b^2 = c^2$ |

**Classic Related Rates Problems:**
- Ladder sliding down a wall
- Water filling/draining a tank
- Shadow length problems
- Two cars moving toward/away from each other
- Expanding/contracting circles and spheres

### Linearization and Differentials

**Linear Approximation:**
$$L(x) = f(a) + f'(a)(x - a)$$

**Differential:**
$$dy = f'(x) \cdot dx$$

> 💡 Use when asked to "approximate" or "estimate" values

### Motion Along a Line

| Quantity | Relationship |
|----------|--------------|
| Position | $s(t)$ or $x(t)$ |
| Velocity | $v(t) = s'(t)$ |
| Speed | $|v(t)|$ |
| Acceleration | $a(t) = v'(t) = s''(t)$ |

**Key Concepts:**
- Particle moving **right/up**: v(t) > 0
- Particle moving **left/down**: v(t) < 0
- Particle **at rest**: v(t) = 0
- **Speeding up**: v(t) and a(t) have same sign
- **Slowing down**: v(t) and a(t) have opposite signs
- **Change direction**: v(t) = 0 and v(t) changes sign

**Total Distance:**
$$\int_a^b |v(t)| \, dt$$

**Displacement:**
$$\int_a^b v(t) \, dt = s(b) - s(a)$$

---

## 🎯 Unit 5: Analytical Applications of Differentiation

### Mean Value Theorem (MVT)

> If f is continuous on [a, b] and differentiable on (a, b), then there exists at least one c in (a, b) such that:
$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

**Interpretation:** At some point, the instantaneous rate equals the average rate.

### Rolle's Theorem

> If f is continuous on [a, b], differentiable on (a, b), and f(a) = f(b), then there exists at least one c in (a, b) such that f'(c) = 0.

**Note:** Rolle's Theorem is a special case of MVT.

### Extreme Value Theorem (EVT)

> If f is continuous on a closed interval [a, b], then f attains both an absolute maximum and an absolute minimum on [a, b].

### Finding Extrema

**Critical Numbers:** Values of x where f'(x) = 0 or f'(x) is undefined

**Closed Interval Method (Absolute Extrema):**
1. Find all critical numbers in (a, b)
2. Evaluate f at critical numbers and endpoints
3. Compare values: largest is max, smallest is min

### First Derivative Test (Relative Extrema)

| Sign Change of f' | Conclusion |
|-------------------|------------|
| + to − | Relative maximum |
| − to + | Relative minimum |
| No change | No extremum |

### Second Derivative Test

If f'(c) = 0:
| f''(c) | Conclusion |
|--------|------------|
| f''(c) > 0 | Relative minimum (concave up) |
| f''(c) < 0 | Relative maximum (concave down) |
| f''(c) = 0 | Inconclusive |

### Concavity and Inflection Points

| f''(x) | Concavity |
|--------|-----------|
| f''(x) > 0 | Concave up (smile) ∪ |
| f''(x) < 0 | Concave down (frown) ∩ |

**Inflection Point:** Where concavity changes (f'' changes sign)

### Curve Sketching Checklist

1. **Domain** - Where is f defined?
2. **Intercepts** - x-intercepts (set y = 0), y-intercept (set x = 0)
3. **Symmetry** - Even: f(-x) = f(x), Odd: f(-x) = -f(x)
4. **Asymptotes** - Horizontal, vertical, slant
5. **First Derivative** - Critical numbers, increasing/decreasing, relative extrema
6. **Second Derivative** - Concavity, inflection points
7. **Plot key points** and connect

### Optimization Problem Strategy

**Steps:**
1. **Read** carefully and draw a diagram
2. **Define** variables and identify the constraint
3. **Write** the function to optimize
4. **Use constraint** to write function in one variable
5. **Find critical numbers** (set derivative = 0)
6. **Verify** maximum or minimum (use first or second derivative test)
7. **Answer** the specific question asked

**Common Optimization Problems:**
- Maximize area given perimeter
- Minimize surface area given volume
- Maximize volume of box/can
- Minimize cost/time
- Minimize distance

---

## 🎯 Unit 6: Integration and Accumulation of Change

### Riemann Sums

**Left Riemann Sum:**
$$L_n = \sum_{i=0}^{n-1} f(x_i) \Delta x$$

**Right Riemann Sum:**
$$R_n = \sum_{i=1}^{n} f(x_i) \Delta x$$

**Midpoint Riemann Sum:**
$$M_n = \sum_{i=1}^{n} f\left(\frac{x_{i-1} + x_i}{2}\right) \Delta x$$

**Trapezoidal Sum:**
$$T_n = \frac{\Delta x}{2}\left[f(x_0) + 2f(x_1) + 2f(x_2) + ... + 2f(x_{n-1}) + f(x_n)\right]$$

Where $\Delta x = \frac{b-a}{n}$

### Definite Integral Definition

$$\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x$$

### Properties of Definite Integrals

| Property | Formula |
|----------|---------|
| Zero Width | $\int_a^a f(x) \, dx = 0$ |
| Reverse Limits | $\int_a^b f(x) \, dx = -\int_b^a f(x) \, dx$ |
| Constant Multiple | $\int_a^b cf(x) \, dx = c\int_a^b f(x) \, dx$ |
| Sum/Difference | $\int_a^b [f(x) \pm g(x)] \, dx = \int_a^b f(x) \, dx \pm \int_a^b g(x) \, dx$ |
| Adjacent Intervals | $\int_a^b f(x) \, dx + \int_b^c f(x) \, dx = \int_a^c f(x) \, dx$ |

### Fundamental Theorem of Calculus

**Part 1 (FTC1):**
$$\frac{d}{dx}\left[\int_a^x f(t) \, dt\right] = f(x)$$

**With Chain Rule:**
$$\frac{d}{dx}\left[\int_a^{g(x)} f(t) \, dt\right] = f(g(x)) \cdot g'(x)$$

**Part 2 (FTC2):**
$$\int_a^b f(x) \, dx = F(b) - F(a)$$
where F is any antiderivative of f.

### Accumulation Function

If $F(x) = \int_a^x f(t) \, dt$, then:
- F(x) represents accumulated area from a to x
- F'(x) = f(x)
- F is increasing where f > 0
- F is decreasing where f < 0
- F has extrema where f = 0 (and f changes sign)

---

## 🎯 Unit 7: Differential Equations

### Basic Antiderivative Rules

| Function | Antiderivative |
|----------|----------------|
| $x^n$ (n ≠ -1) | $\frac{x^{n+1}}{n+1} + C$ |
| $\frac{1}{x}$ | $\ln|x| + C$ |
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

### U-Substitution

**Method:**
1. Choose u = g(x) (usually the "inside" function)
2. Find du = g'(x) dx
3. Substitute u and du into the integral
4. Integrate with respect to u
5. Substitute back x

**Example:**
$$\int 2x \cos(x^2) \, dx$$
Let $u = x^2$, $du = 2x \, dx$
$$= \int \cos u \, du = \sin u + C = \sin(x^2) + C$$

### Separation of Variables

**For differential equations of form:** $\frac{dy}{dx} = f(x) \cdot g(y)$

**Steps:**
1. Separate: $\frac{dy}{g(y)} = f(x) \, dx$
2. Integrate both sides: $\int \frac{1}{g(y)} \, dy = \int f(x) \, dx$
3. Solve for y if possible
4. Use initial condition to find C

### Exponential Growth and Decay

**Differential Equation:** $\frac{dy}{dt} = ky$

**Solution:** $y = Ce^{kt}$ or $y = y_0 e^{kt}$

| Scenario | k |
|----------|---|
| Growth | k > 0 |
| Decay | k < 0 |

**Half-life:** $t_{1/2} = \frac{\ln 2}{|k|}$

**Doubling time:** $t_2 = \frac{\ln 2}{k}$

### Slope Fields

- Each point (x, y) has a small line segment with slope = dy/dx
- Solution curves follow the pattern of slopes
- Horizontal segments where dy/dx = 0
- Vertical segments where dy/dx is undefined

**Sketching Solution Curves:**
1. Start at initial point
2. Follow the direction indicated by slope segments
3. Draw smooth curve tangent to slope segments

---

## 🎯 Unit 8: Applications of Integration

### Average Value of a Function

$$f_{avg} = \frac{1}{b-a} \int_a^b f(x) \, dx$$

### Position, Velocity, Acceleration

$$v(t) = \int a(t) \, dt$$
$$s(t) = \int v(t) \, dt$$

**Displacement:** $\int_a^b v(t) \, dt$

**Total Distance:** $\int_a^b |v(t)| \, dt$

### Area Between Curves

**Between y = f(x) and y = g(x) from x = a to x = b:**
$$A = \int_a^b |f(x) - g(x)| \, dx$$

**If f(x) ≥ g(x) on [a, b]:**
$$A = \int_a^b [f(x) - g(x)] \, dx$$

**Using horizontal slices (x as function of y):**
$$A = \int_c^d [f(y) - g(y)] \, dy$$

### Volume by Cross-Sections

$$V = \int_a^b A(x) \, dx$$

where A(x) is the cross-sectional area at position x.

**Common Cross-Sections:**
| Shape | Area Formula |
|-------|--------------|
| Square | $A = s^2$ |
| Rectangle | $A = lw$ |
| Semicircle | $A = \frac{1}{2}\pi r^2$ |
| Equilateral Triangle | $A = \frac{\sqrt{3}}{4}s^2$ |
| Isosceles Right Triangle | $A = \frac{1}{2}s^2$ |

### Volumes of Revolution

**Disk Method (about x-axis):**
$$V = \pi \int_a^b [f(x)]^2 \, dx$$

**Disk Method (about y-axis):**
$$V = \pi \int_c^d [f(y)]^2 \, dy$$

**Washer Method (about x-axis):**
$$V = \pi \int_a^b \left([R(x)]^2 - [r(x)]^2\right) \, dx$$

where R(x) is outer radius and r(x) is inner radius.

**Washer Method (about y-axis):**
$$V = \pi \int_c^d \left([R(y)]^2 - [r(y)]^2\right) \, dy$$

### Rotating About Other Lines

When rotating about y = k:
- Outer radius: $R = |f(x) - k|$
- Inner radius: $r = |g(x) - k|$

When rotating about x = k:
- Outer radius: $R = |f(y) - k|$
- Inner radius: $r = |g(y) - k|$

---

## 📝 Complete Derivative Reference Sheet

### Power Functions
$$\frac{d}{dx}[x^n] = nx^{n-1}$$
$$\frac{d}{dx}[\sqrt{x}] = \frac{1}{2\sqrt{x}}$$
$$\frac{d}{dx}\left[\frac{1}{x}\right] = -\frac{1}{x^2}$$

### Exponential & Logarithmic
$$\frac{d}{dx}[e^x] = e^x$$
$$\frac{d}{dx}[a^x] = a^x \ln a$$
$$\frac{d}{dx}[\ln x] = \frac{1}{x}$$
$$\frac{d}{dx}[\log_a x] = \frac{1}{x \ln a}$$

### Trigonometric
$$\frac{d}{dx}[\sin x] = \cos x \qquad \frac{d}{dx}[\cos x] = -\sin x$$
$$\frac{d}{dx}[\tan x] = \sec^2 x \qquad \frac{d}{dx}[\cot x] = -\csc^2 x$$
$$\frac{d}{dx}[\sec x] = \sec x \tan x \qquad \frac{d}{dx}[\csc x] = -\csc x \cot x$$

### Inverse Trigonometric
$$\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1-x^2}} \qquad \frac{d}{dx}[\arccos x] = -\frac{1}{\sqrt{1-x^2}}$$
$$\frac{d}{dx}[\arctan x] = \frac{1}{1+x^2} \qquad \frac{d}{dx}[\text{arccot } x] = -\frac{1}{1+x^2}$$

---

## 📝 Complete Integral Reference Sheet

### Power Functions
$$\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$
$$\int \frac{1}{x} \, dx = \ln|x| + C$$
$$\int \frac{1}{\sqrt{x}} \, dx = 2\sqrt{x} + C$$

### Exponential & Logarithmic
$$\int e^x \, dx = e^x + C$$
$$\int a^x \, dx = \frac{a^x}{\ln a} + C$$
$$\int \ln x \, dx = x\ln x - x + C$$

### Trigonometric
$$\int \sin x \, dx = -\cos x + C \qquad \int \cos x \, dx = \sin x + C$$
$$\int \tan x \, dx = -\ln|\cos x| + C \qquad \int \cot x \, dx = \ln|\sin x| + C$$
$$\int \sec x \, dx = \ln|\sec x + \tan x| + C$$
$$\int \csc x \, dx = -\ln|\csc x + \cot x| + C$$
$$\int \sec^2 x \, dx = \tan x + C \qquad \int \csc^2 x \, dx = -\cot x + C$$
$$\int \sec x \tan x \, dx = \sec x + C \qquad \int \csc x \cot x \, dx = -\csc x + C$$

### Inverse Trigonometric Forms
$$\int \frac{1}{\sqrt{1-x^2}} \, dx = \arcsin x + C$$
$$\int \frac{1}{1+x^2} \, dx = \arctan x + C$$
$$\int \frac{1}{\sqrt{a^2-x^2}} \, dx = \arcsin\frac{x}{a} + C$$
$$\int \frac{1}{a^2+x^2} \, dx = \frac{1}{a}\arctan\frac{x}{a} + C$$

---

## 🧮 Calculator Tips and Techniques

### TI-83/84 Graphing Calculator

**Numerical Derivative:**
- `MATH` → `8:nDeriv(`
- Syntax: `nDeriv(f(x), x, value)`
- Example: `nDeriv(x^3, x, 2)` gives 12

**Numerical Integral:**
- `MATH` → `9:fnInt(`
- Syntax: `fnInt(f(x), x, a, b)`
- Example: `fnInt(x^2, x, 0, 3)` gives 9

**Finding Zeros:**
- Graph the function
- `2nd` → `CALC` → `2:zero`
- Set left bound, right bound, guess

**Finding Maximum/Minimum:**
- Graph the function
- `2nd` → `CALC` → `3:minimum` or `4:maximum`
- Set left bound, right bound, guess

**Finding Intersections:**
- Graph both functions
- `2nd` → `CALC` → `5:intersect`
- Select first curve, second curve, guess

**Graphing Derivatives:**
- Y₂ = `nDeriv(Y₁, x, x)`
- Allows viewing function and derivative together

**Table of Values:**
- `2nd` → `TABLE`
- Set `TblStart` and `ΔTbl` in `TBLSET`

### Common Calculator Mistakes to Avoid

1. **Parentheses errors** - Always close parentheses
2. **Radian vs. Degree mode** - AP Calculus uses RADIANS
3. **Viewing window** - Adjust for the function being graphed
4. **Decimal precision** - Final answers may need more digits
5. **Not checking** - Verify calculator results make sense

---

## 📋 FRQ Templates and Strategies

### Type 1: Rate/Accumulation Problems

**Given:** Rate function r(t) or table of values

**Common Questions:**
1. **Meaning of integral:** $\int_a^b r(t) \, dt$ = total change in quantity from t = a to t = b
2. **Average value:** $\frac{1}{b-a}\int_a^b r(t) \, dt$
3. **When is quantity increasing?** When r(t) > 0
4. **Maximum/minimum quantity:** Find where r(t) = 0

**Template Response:**
> "The integral $\int_a^b r(t) \, dt$ represents the [total/net] [quantity] from t = a to t = b, measured in [units]. The value is [calculated value], meaning [interpretation in context]."

### Type 2: Particle Motion

**Given:** Position s(t), velocity v(t), or acceleration a(t)

**Common Questions:**
1. **Position at time t:** $s(t) = s(0) + \int_0^t v(\tau) \, d\tau$
2. **Total distance:** $\int_a^b |v(t)| \, dt$
3. **Displacement:** $\int_a^b v(t) \, dt$
4. **When moving right:** v(t) > 0
5. **Speeding up:** v(t) and a(t) have same sign

### Type 3: Graph Analysis

**Given:** Graph of f, f', or f''

**Analyze f from graph of f':**
| f' | f |
|----|---|
| f' > 0 | f increasing |
| f' < 0 | f decreasing |
| f' = 0 | f has critical point |
| f' changes + to − | f has local max |
| f' changes − to + | f has local min |
| f' increasing | f concave up |
| f' decreasing | f concave down |
| f' has extremum | f has inflection point |

### Type 4: Table Problems

**Strategies:**
- Use trapezoidal sum for approximation
- Use MVT to show derivative exists
- Use IVT to show value exists
- Approximate derivative: $f'(a) \approx \frac{f(b) - f(a)}{b - a}$

### Type 5: Differential Equations

**Steps:**
1. Separate variables
2. Integrate both sides
3. Apply initial condition
4. Solve for y explicitly if possible

**Check:** Verify solution satisfies both the DE and initial condition

### Type 6: Area/Volume

**Area between curves:**
$$A = \int_a^b [f(x) - g(x)] \, dx$$

**Volume by disks/washers:**
- Identify axis of rotation
- Determine radii (outer and inner if washer)
- Set up integral with π

**Volume by cross-sections:**
$$V = \int_a^b A(x) \, dx$$

---

## ⚠️ Common Mistakes to Avoid

### Limits
- ❌ Assuming $\frac{0}{0}$ means limit doesn't exist
- ✅ Simplify first, then substitute

### Derivatives
- ❌ Forgetting chain rule with composite functions
- ❌ Product rule: $(fg)' ≠ f'g'$
- ❌ Quotient rule: Sign error in numerator

### Integrals
- ❌ Forgetting the "+ C" in indefinite integrals
- ❌ Wrong limits with u-substitution (change or don't change, be consistent)
- ❌ Treating $\int$ as multiplication

### FRQs
- ❌ Not showing work
- ❌ Not including units
- ❌ Not interpreting results in context
- ❌ Rounding intermediate steps

---

## 📊 Quick Reference: When to Use Each Theorem

| Question Type | Theorem/Technique |
|--------------|-------------------|
| "Prove a value exists between..." | IVT |
| "Show derivative equals average rate..." | MVT |
| "Show derivative equals zero..." | Rolle's Theorem |
| "Find absolute max/min on closed interval" | EVT + Closed Interval Method |
| "Find relative max/min" | First or Second Derivative Test |
| "Rate of change" | Derivative |
| "Total change" | Integral |
| "Average value" | $\frac{1}{b-a}\int_a^b f(x) \, dx$ |

---

## 🎯 Unit-by-Unit Summary

### Unit 1: Limits & Continuity
- Evaluate limits algebraically, graphically, numerically
- Special limits (sin x/x, etc.)
- Continuity and types of discontinuities
- IVT applications

### Unit 2: Definition of Derivatives
- Definition using limits
- Basic derivative rules
- Tangent line equations
- Differentiability vs continuity

### Unit 3: Differentiation Techniques
- Product, quotient, chain rules
- Implicit differentiation
- Derivatives of inverses
- Inverse trig derivatives

### Unit 4: Contextual Applications
- Related rates
- Linearization
- Motion problems

### Unit 5: Analytical Applications
- Critical points and extrema
- MVT and Rolle's Theorem
- Curve sketching
- Optimization

### Unit 6: Integration
- Riemann sums
- Definite integrals
- FTC Parts 1 and 2
- Accumulation functions

### Unit 7: Differential Equations
- Antiderivatives
- Separation of variables
- Slope fields
- Exponential models

### Unit 8: Integration Applications
- Area between curves
- Volumes (disk, washer, cross-section)
- Average value

---

## 🏆 Final Exam Strategies

### Multiple Choice Tips
1. **Time management:** ~2 minutes per question
2. **Process of elimination:** Cross out wrong answers
3. **Calculator section:** Know when to use calculator vs. algebra
4. **Check reasonableness:** Does the answer make sense?
5. **Skip and return:** Don't get stuck on one problem

### Free Response Tips
1. **Read carefully:** Underline key words
2. **Show ALL work:** Partial credit is possible
3. **Use correct notation:** dy/dx, ∫, lim, etc.
4. **Label everything:** Include units
5. **Interpret in context:** What does the number mean?
6. **Check your work:** Verify calculations
7. **Time management:** ~15 minutes per FRQ

### Day Before the Exam
- Review formula sheets
- Get good sleep
- Prepare calculator and materials
- Don't cram new material

### During the Exam
- Read directions carefully
- Pace yourself
- Don't leave blanks
- Check calculator mode (RADIANS!)

---

## 📚 Formula Quick Reference Card

### Limits
$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$
$$\lim_{x \to 0} \frac{1 - \cos x}{x} = 0$$

### Key Derivatives
$$\frac{d}{dx}[e^x] = e^x$$
$$\frac{d}{dx}[\ln x] = \frac{1}{x}$$
$$\frac{d}{dx}[\sin x] = \cos x$$
$$\frac{d}{dx}[\cos x] = -\sin x$$

### Key Integrals
$$\int e^x \, dx = e^x + C$$
$$\int \frac{1}{x} \, dx = \ln|x| + C$$
$$\int \sin x \, dx = -\cos x + C$$
$$\int \cos x \, dx = \sin x + C$$

### Fundamental Theorem
$$\frac{d}{dx}\int_a^x f(t) \, dt = f(x)$$
$$\int_a^b f(x) \, dx = F(b) - F(a)$$

### Area and Volume
$$A = \int_a^b [f(x) - g(x)] \, dx$$
$$V = \pi\int_a^b [f(x)]^2 \, dx$$

### Motion
$$v(t) = s'(t)$$
$$a(t) = v'(t)$$
$$\text{Distance} = \int_a^b |v(t)| \, dt$$

---

> 💪 **You've got this!** Remember: Calculus is about rates of change (derivatives) and accumulation (integrals). Master the theorems, practice the techniques, and stay calm on exam day.

**Good luck on your AP Calculus AB Exam!** 🎓

:::GUIDE:::
