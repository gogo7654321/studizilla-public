:::GUIDE:::
unit::=3
title::=📐 Unit 3: Composite, Implicit, and Inverse Derivatives
desc::=Master chain rule, implicit differentiation, and inverse function derivatives
diff::=Hard
time::=55 min
tags::=calculus,bc,chain-rule,implicit,inverse
content::=

# 📐 Unit 3: Composite, Implicit, and Inverse Derivatives

Welcome to one of the most powerful and essential units in AP Calculus BC! This unit expands your differentiation toolkit to handle complex composite functions, equations where y cannot be easily isolated, and inverse functions. These techniques are fundamental for success on both the AP exam and future mathematics courses.

---

## 📚 Unit Overview

| Topic | Weight | Key Concepts |
|-------|--------|--------------|
| Chain Rule | 35% | Compositions, nested functions, multiple chains |
| Implicit Differentiation | 25% | Implicit equations, finding dy/dx |
| Related Rates | 20% | Real-world rate problems |
| Inverse Function Derivatives | 10% | Derivative of f⁻¹(x) |
| Inverse Trig Derivatives | 5% | arcsin, arccos, arctan, etc. |
| Logarithmic Differentiation | 5% | Complex products and powers |

---

## 🔗 Part 1: The Chain Rule

### 1.1 Understanding Composite Functions

A **composite function** is a function of a function. If we have $f(x)$ and $g(x)$, then the composition $(f \circ g)(x) = f(g(x))$ applies $g$ first, then $f$ to the result.

**Example:** If $f(x) = x^2$ and $g(x) = 3x + 1$, then:
$$f(g(x)) = f(3x + 1) = (3x + 1)^2$$

### 1.2 The Chain Rule Formula

> **Chain Rule:** If $y = f(g(x))$, where $f$ and $g$ are differentiable, then:
> $$\frac{dy}{dx} = f'(g(x)) \cdot g'(x)$$

**Alternative Notation (Leibniz Form):**
If $y = f(u)$ and $u = g(x)$, then:
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

### 1.3 Intuitive Understanding

Think of the chain rule as a "zoom factor" that accounts for how fast the inner function is changing:
- $f'(g(x))$ = slope of outer function at the inner function's value
- $g'(x)$ = rate of change of inner function

The total rate of change is the product of these factors.

---

### 1.4 Basic Chain Rule Examples

**Example 1:** Find $\frac{d}{dx}[(2x + 5)^7]$

*Solution:*
- Outer function: $f(u) = u^7$, so $f'(u) = 7u^6$
- Inner function: $g(x) = 2x + 5$, so $g'(x) = 2$

$$\frac{d}{dx}[(2x + 5)^7] = 7(2x + 5)^6 \cdot 2 = 14(2x + 5)^6$$

---

**Example 2:** Find $\frac{d}{dx}[\sin(x^2)]$

*Solution:*
- Outer: $f(u) = \sin(u)$, $f'(u) = \cos(u)$
- Inner: $g(x) = x^2$, $g'(x) = 2x$

$$\frac{d}{dx}[\sin(x^2)] = \cos(x^2) \cdot 2x = 2x\cos(x^2)$$

---

**Example 3:** Find $\frac{d}{dx}[e^{3x}]$

*Solution:*
- Outer: $f(u) = e^u$, $f'(u) = e^u$
- Inner: $g(x) = 3x$, $g'(x) = 3$

$$\frac{d}{dx}[e^{3x}] = e^{3x} \cdot 3 = 3e^{3x}$$

---

**Example 4:** Find $\frac{d}{dx}[\ln(x^2 + 1)]$

*Solution:*
- Outer: $f(u) = \ln(u)$, $f'(u) = \frac{1}{u}$
- Inner: $g(x) = x^2 + 1$, $g'(x) = 2x$

$$\frac{d}{dx}[\ln(x^2 + 1)] = \frac{1}{x^2 + 1} \cdot 2x = \frac{2x}{x^2 + 1}$$

---

### 1.5 Multiple Chain Rule (Nested Compositions)

When functions are nested multiple times, apply the chain rule repeatedly from the outside in.

> **Extended Chain Rule:** If $y = f(g(h(x)))$, then:
> $$\frac{dy}{dx} = f'(g(h(x))) \cdot g'(h(x)) \cdot h'(x)$$

---

**Example 5:** Find $\frac{d}{dx}[\sin^3(2x)]$

*Solution:*
Note that $\sin^3(2x) = [\sin(2x)]^3$

We have three layers:
- Outermost: $u^3$ → derivative: $3u^2$
- Middle: $\sin(v)$ → derivative: $\cos(v)$  
- Innermost: $2x$ → derivative: $2$

$$\frac{d}{dx}[\sin^3(2x)] = 3[\sin(2x)]^2 \cdot \cos(2x) \cdot 2 = 6\sin^2(2x)\cos(2x)$$

---

**Example 6:** Find $\frac{d}{dx}[e^{\cos(x^2)}]$

*Solution:*
Three layers:
- Outer: $e^u$ → $e^u$
- Middle: $\cos(v)$ → $-\sin(v)$
- Inner: $x^2$ → $2x$

$$\frac{d}{dx}[e^{\cos(x^2)}] = e^{\cos(x^2)} \cdot (-\sin(x^2)) \cdot 2x = -2x\sin(x^2)e^{\cos(x^2)}$$

---

**Example 7:** Find $\frac{d}{dx}\left[\sqrt{\ln(3x+1)}\right]$

*Solution:*
Rewrite as $[\ln(3x+1)]^{1/2}$

- Outer: $u^{1/2}$ → $\frac{1}{2}u^{-1/2}$
- Middle: $\ln(v)$ → $\frac{1}{v}$
- Inner: $3x + 1$ → $3$

$$\frac{d}{dx}\left[\sqrt{\ln(3x+1)}\right] = \frac{1}{2}[\ln(3x+1)]^{-1/2} \cdot \frac{1}{3x+1} \cdot 3 = \frac{3}{2(3x+1)\sqrt{\ln(3x+1)}}$$

---

### 1.6 Chain Rule with Product and Quotient Rules

When derivatives involve both composition and products/quotients, combine the rules carefully.

**Example 8:** Find $\frac{d}{dx}[x^2 \sin(3x)]$

*Solution:*
Use product rule, with chain rule on $\sin(3x)$:

$$\frac{d}{dx}[x^2 \sin(3x)] = 2x \cdot \sin(3x) + x^2 \cdot \cos(3x) \cdot 3$$
$$= 2x\sin(3x) + 3x^2\cos(3x)$$

---

**Example 9:** Find $\frac{d}{dx}\left[\frac{e^{2x}}{x^2 + 1}\right]$

*Solution:*
Use quotient rule with chain rule on $e^{2x}$:

$$\frac{d}{dx}\left[\frac{e^{2x}}{x^2 + 1}\right] = \frac{2e^{2x}(x^2 + 1) - e^{2x}(2x)}{(x^2 + 1)^2}$$
$$= \frac{2e^{2x}(x^2 + 1 - x)}{(x^2 + 1)^2} = \frac{2e^{2x}(x^2 - x + 1)}{(x^2 + 1)^2}$$

---

### 1.7 Common Chain Rule Patterns

Memorize these derivatives that frequently appear:

| Function | Derivative |
|----------|------------|
| $[f(x)]^n$ | $n[f(x)]^{n-1} \cdot f'(x)$ |
| $e^{f(x)}$ | $e^{f(x)} \cdot f'(x)$ |
| $\ln[f(x)]$ | $\frac{f'(x)}{f(x)}$ |
| $\sin[f(x)]$ | $\cos[f(x)] \cdot f'(x)$ |
| $\cos[f(x)]$ | $-\sin[f(x)] \cdot f'(x)$ |
| $\tan[f(x)]$ | $\sec^2[f(x)] \cdot f'(x)$ |
| $a^{f(x)}$ | $a^{f(x)} \cdot \ln(a) \cdot f'(x)$ |

---

## 🔄 Part 2: Implicit Differentiation

### 2.1 What is Implicit Differentiation?

Some equations define $y$ as a function of $x$ **implicitly** rather than explicitly. For example:
- **Explicit:** $y = x^2 + 3x$
- **Implicit:** $x^2 + y^2 = 25$ (circle)

When we can't easily solve for $y$, we use **implicit differentiation**.

### 2.2 The Key Principle

> When differentiating an expression containing $y$ with respect to $x$, treat $y$ as a function of $x$ and apply the chain rule:
> $$\frac{d}{dx}[f(y)] = f'(y) \cdot \frac{dy}{dx}$$

---

### 2.3 Step-by-Step Process

1. Differentiate both sides with respect to $x$
2. Apply chain rule to terms containing $y$ (multiply by $\frac{dy}{dx}$)
3. Collect all $\frac{dy}{dx}$ terms on one side
4. Factor out $\frac{dy}{dx}$
5. Solve for $\frac{dy}{dx}$

---

### 2.4 Basic Implicit Differentiation Examples

**Example 10:** Find $\frac{dy}{dx}$ for $x^2 + y^2 = 25$

*Solution:*
Differentiate both sides:
$$\frac{d}{dx}[x^2] + \frac{d}{dx}[y^2] = \frac{d}{dx}[25]$$
$$2x + 2y \cdot \frac{dy}{dx} = 0$$

Solve for $\frac{dy}{dx}$:
$$2y \cdot \frac{dy}{dx} = -2x$$
$$\frac{dy}{dx} = -\frac{x}{y}$$

---

**Example 11:** Find $\frac{dy}{dx}$ for $x^3 + y^3 = 6xy$

*Solution:*
Differentiate (use product rule on right side):
$$3x^2 + 3y^2 \cdot \frac{dy}{dx} = 6y + 6x \cdot \frac{dy}{dx}$$

Collect $\frac{dy}{dx}$ terms:
$$3y^2 \cdot \frac{dy}{dx} - 6x \cdot \frac{dy}{dx} = 6y - 3x^2$$

Factor:
$$(3y^2 - 6x) \cdot \frac{dy}{dx} = 6y - 3x^2$$

Solve:
$$\frac{dy}{dx} = \frac{6y - 3x^2}{3y^2 - 6x} = \frac{2y - x^2}{y^2 - 2x}$$

---

**Example 12:** Find $\frac{dy}{dx}$ for $\sin(xy) = x + y$

*Solution:*
Left side needs product rule inside the chain rule:
$$\cos(xy) \cdot \frac{d}{dx}[xy] = 1 + \frac{dy}{dx}$$
$$\cos(xy) \cdot \left(y + x\frac{dy}{dx}\right) = 1 + \frac{dy}{dx}$$

Expand:
$$y\cos(xy) + x\cos(xy)\frac{dy}{dx} = 1 + \frac{dy}{dx}$$

Collect $\frac{dy}{dx}$:
$$x\cos(xy)\frac{dy}{dx} - \frac{dy}{dx} = 1 - y\cos(xy)$$
$$\frac{dy}{dx}[x\cos(xy) - 1] = 1 - y\cos(xy)$$

$$\frac{dy}{dx} = \frac{1 - y\cos(xy)}{x\cos(xy) - 1}$$

---

### 2.5 Finding Tangent Lines Using Implicit Differentiation

**Example 13:** Find the equation of the tangent line to $x^2 + xy + y^2 = 7$ at point $(1, 2)$.

*Solution:*

**Step 1:** Find $\frac{dy}{dx}$
$$2x + y + x\frac{dy}{dx} + 2y\frac{dy}{dx} = 0$$
$$\frac{dy}{dx}(x + 2y) = -2x - y$$
$$\frac{dy}{dx} = \frac{-2x - y}{x + 2y}$$

**Step 2:** Evaluate at $(1, 2)$
$$\frac{dy}{dx}\bigg|_{(1,2)} = \frac{-2(1) - 2}{1 + 2(2)} = \frac{-4}{5}$$

**Step 3:** Write tangent line equation
$$y - 2 = -\frac{4}{5}(x - 1)$$
$$y = -\frac{4}{5}x + \frac{4}{5} + 2 = -\frac{4}{5}x + \frac{14}{5}$$

---

### 2.6 Second Derivatives with Implicit Differentiation

**Example 14:** Find $\frac{d^2y}{dx^2}$ for $x^2 + y^2 = 25$

*Solution:*
From Example 10: $\frac{dy}{dx} = -\frac{x}{y}$

Differentiate again using quotient rule:
$$\frac{d^2y}{dx^2} = \frac{d}{dx}\left[-\frac{x}{y}\right] = -\frac{y(1) - x \cdot \frac{dy}{dx}}{y^2}$$

Substitute $\frac{dy}{dx} = -\frac{x}{y}$:
$$\frac{d^2y}{dx^2} = -\frac{y - x \cdot (-\frac{x}{y})}{y^2} = -\frac{y + \frac{x^2}{y}}{y^2}$$
$$= -\frac{\frac{y^2 + x^2}{y}}{y^2} = -\frac{y^2 + x^2}{y^3}$$

Since $x^2 + y^2 = 25$:
$$\frac{d^2y}{dx^2} = -\frac{25}{y^3}$$

---

## 🔄 Part 3: Related Rates

### 3.1 Understanding Related Rates

**Related rates** problems involve finding the rate of change of one quantity when you know the rate of change of a related quantity. Both quantities change with respect to time.

### 3.2 Problem-Solving Strategy

1. **Draw a diagram** and label all quantities
2. **Identify** what rates are given and what rate you need to find
3. **Write an equation** relating the quantities
4. **Differentiate** both sides with respect to time $t$
5. **Substitute** known values and solve

---

### 3.3 Classic Related Rates Problems

**Example 15: Expanding Circle**

A stone is dropped into a pond, creating circular ripples. The radius expands at 3 ft/sec. How fast is the area increasing when the radius is 10 ft?

*Solution:*

**Given:** $\frac{dr}{dt} = 3$ ft/sec
**Find:** $\frac{dA}{dt}$ when $r = 10$ ft

**Equation:** $A = \pi r^2$

**Differentiate:**
$$\frac{dA}{dt} = 2\pi r \cdot \frac{dr}{dt}$$

**Substitute:**
$$\frac{dA}{dt} = 2\pi(10)(3) = 60\pi \approx 188.5 \text{ ft}^2/\text{sec}$$

---

**Example 16: Sliding Ladder**

A 13-foot ladder leans against a wall. The base slides away at 2 ft/sec. How fast is the top sliding down when the base is 5 feet from the wall?

*Solution:*

**Setup:** Let $x$ = distance from wall to base, $y$ = height on wall

**Given:** $\frac{dx}{dt} = 2$ ft/sec
**Find:** $\frac{dy}{dt}$ when $x = 5$ ft

**Equation:** $x^2 + y^2 = 169$ (Pythagorean theorem)

When $x = 5$: $25 + y^2 = 169$, so $y = 12$ ft

**Differentiate:**
$$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$

**Substitute:**
$$2(5)(2) + 2(12)\frac{dy}{dt} = 0$$
$$20 + 24\frac{dy}{dt} = 0$$
$$\frac{dy}{dt} = -\frac{20}{24} = -\frac{5}{6} \text{ ft/sec}$$

The negative sign indicates the ladder is sliding **down**.

---

**Example 17: Filling a Cone**

Water flows into an inverted cone (radius 4 m, height 8 m) at 2 m³/min. How fast is the water level rising when the depth is 3 m?

*Solution:*

**Given:** $\frac{dV}{dt} = 2$ m³/min
**Find:** $\frac{dh}{dt}$ when $h = 3$ m

**Key relationship:** By similar triangles, $\frac{r}{h} = \frac{4}{8} = \frac{1}{2}$, so $r = \frac{h}{2}$

**Volume:** $V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \left(\frac{h}{2}\right)^2 h = \frac{\pi h^3}{12}$

**Differentiate:**
$$\frac{dV}{dt} = \frac{\pi \cdot 3h^2}{12} \cdot \frac{dh}{dt} = \frac{\pi h^2}{4} \cdot \frac{dh}{dt}$$

**Substitute:**
$$2 = \frac{\pi (3)^2}{4} \cdot \frac{dh}{dt}$$
$$2 = \frac{9\pi}{4} \cdot \frac{dh}{dt}$$
$$\frac{dh}{dt} = \frac{8}{9\pi} \approx 0.283 \text{ m/min}$$

---

**Example 18: Distance Between Moving Objects**

Car A travels north at 60 mph. Car B travels east at 80 mph. Both start from the same intersection. How fast is the distance between them increasing after 30 minutes?

*Solution:*

**Setup:** Let $a$ = distance of A from intersection, $b$ = distance of B, $c$ = distance between cars

**Given:** $\frac{da}{dt} = 60$ mph, $\frac{db}{dt} = 80$ mph
**Find:** $\frac{dc}{dt}$ after 0.5 hours

After 30 min: $a = 30$ mi, $b = 40$ mi, $c = \sqrt{30^2 + 40^2} = 50$ mi

**Equation:** $c^2 = a^2 + b^2$

**Differentiate:**
$$2c\frac{dc}{dt} = 2a\frac{da}{dt} + 2b\frac{db}{dt}$$

**Substitute:**
$$2(50)\frac{dc}{dt} = 2(30)(60) + 2(40)(80)$$
$$100\frac{dc}{dt} = 3600 + 6400 = 10000$$
$$\frac{dc}{dt} = 100 \text{ mph}$$

---

### 3.4 Advanced Related Rates

**Example 19: Shadow Problem**

A 6-foot person walks away from a 15-foot streetlight at 4 ft/sec. How fast is the tip of their shadow moving?

*Solution:*

**Setup:** Let $x$ = distance from light to person, $s$ = length of shadow

**Given:** $\frac{dx}{dt} = 4$ ft/sec
**Find:** $\frac{d(x+s)}{dt}$ (tip of shadow distance from light)

By similar triangles: $\frac{15}{x + s} = \frac{6}{s}$

Cross-multiply: $15s = 6(x + s) = 6x + 6s$

Simplify: $9s = 6x$, so $s = \frac{2x}{3}$

**Tip of shadow:** $x + s = x + \frac{2x}{3} = \frac{5x}{3}$

**Differentiate:**
$$\frac{d(x+s)}{dt} = \frac{5}{3} \cdot \frac{dx}{dt} = \frac{5}{3}(4) = \frac{20}{3} \text{ ft/sec}$$

---

## 🔀 Part 4: Inverse Function Derivatives

### 4.1 The Inverse Function Derivative Theorem

If $f$ is differentiable and has an inverse function $g = f^{-1}$, then:

$$g'(x) = \frac{1}{f'(g(x))}$$

Or equivalently:
$$(f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}$$

---

### 4.2 Understanding the Formula

If $(a, b)$ is on the graph of $f$, then $(b, a)$ is on the graph of $f^{-1}$.

The slope at $(b, a)$ on $f^{-1}$ is the reciprocal of the slope at $(a, b)$ on $f$:

$$\text{slope of } f^{-1} \text{ at } x = b \quad = \quad \frac{1}{\text{slope of } f \text{ at } x = a}$$

---

### 4.3 Examples

**Example 20:** Let $f(x) = x^3 + x$. Find $(f^{-1})'(2)$.

*Solution:*
We need to find $a$ such that $f(a) = 2$:
$a^3 + a = 2$ → $a = 1$ (by inspection)

So $f(1) = 2$, meaning $f^{-1}(2) = 1$

Now: $f'(x) = 3x^2 + 1$, so $f'(1) = 4$

$$(f^{-1})'(2) = \frac{1}{f'(f^{-1}(2))} = \frac{1}{f'(1)} = \frac{1}{4}$$

---

**Example 21:** Let $f(x) = e^x + x$. Find $(f^{-1})'(1)$.

*Solution:*
Find $a$ where $f(a) = 1$:
$e^a + a = 1$ → $a = 0$ (since $e^0 + 0 = 1$)

$f'(x) = e^x + 1$, so $f'(0) = 2$

$$(f^{-1})'(1) = \frac{1}{f'(0)} = \frac{1}{2}$$

---

**Example 22:** If $f(3) = 7$ and $f'(3) = 4$, find $(f^{-1})'(7)$.

*Solution:*
Since $f(3) = 7$, we have $f^{-1}(7) = 3$

$$(f^{-1})'(7) = \frac{1}{f'(f^{-1}(7))} = \frac{1}{f'(3)} = \frac{1}{4}$$

---

## 📐 Part 5: Inverse Trigonometric Derivatives

### 5.1 The Six Inverse Trig Derivatives

| Function | Derivative |
|----------|------------|
| $\arcsin(x)$ | $\frac{1}{\sqrt{1-x^2}}$ |
| $\arccos(x)$ | $-\frac{1}{\sqrt{1-x^2}}$ |
| $\arctan(x)$ | $\frac{1}{1+x^2}$ |
| $\text{arccot}(x)$ | $-\frac{1}{1+x^2}$ |
| $\text{arcsec}(x)$ | $\frac{1}{|x|\sqrt{x^2-1}}$ |
| $\text{arccsc}(x)$ | $-\frac{1}{|x|\sqrt{x^2-1}}$ |

---

### 5.2 Deriving the Arcsin Derivative

Let $y = \arcsin(x)$, so $\sin(y) = x$

Differentiate implicitly:
$$\cos(y) \cdot \frac{dy}{dx} = 1$$
$$\frac{dy}{dx} = \frac{1}{\cos(y)}$$

Using $\sin^2(y) + \cos^2(y) = 1$:
$$\cos(y) = \sqrt{1 - \sin^2(y)} = \sqrt{1 - x^2}$$

Therefore:
$$\frac{d}{dx}[\arcsin(x)] = \frac{1}{\sqrt{1-x^2}}$$

---

### 5.3 Chain Rule with Inverse Trig

**Example 23:** Find $\frac{d}{dx}[\arctan(3x)]$

*Solution:*
$$\frac{d}{dx}[\arctan(3x)] = \frac{1}{1+(3x)^2} \cdot 3 = \frac{3}{1+9x^2}$$

---

**Example 24:** Find $\frac{d}{dx}[\arcsin(x^2)]$

*Solution:*
$$\frac{d}{dx}[\arcsin(x^2)] = \frac{1}{\sqrt{1-(x^2)^2}} \cdot 2x = \frac{2x}{\sqrt{1-x^4}}$$

---

**Example 25:** Find $\frac{d}{dx}[\arccos(e^x)]$

*Solution:*
$$\frac{d}{dx}[\arccos(e^x)] = -\frac{1}{\sqrt{1-(e^x)^2}} \cdot e^x = -\frac{e^x}{\sqrt{1-e^{2x}}}$$

---

**Example 26:** Find $\frac{d}{dx}[x \cdot \arctan(x)]$

*Solution:* (Product rule)
$$\frac{d}{dx}[x \cdot \arctan(x)] = 1 \cdot \arctan(x) + x \cdot \frac{1}{1+x^2}$$
$$= \arctan(x) + \frac{x}{1+x^2}$$

---

### 5.4 Inverse Trig Identities to Know

- $\arcsin(x) + \arccos(x) = \frac{\pi}{2}$
- $\arctan(x) + \text{arccot}(x) = \frac{\pi}{2}$
- $\arctan(x) + \arctan\left(\frac{1}{x}\right) = \frac{\pi}{2}$ for $x > 0$

---

## 📊 Part 6: Logarithmic Differentiation

### 6.1 When to Use Logarithmic Differentiation

Use this technique when:
1. The variable appears in **both base and exponent**: $f(x)^{g(x)}$
2. Complex products/quotients with many factors
3. Products of functions raised to powers

### 6.2 The Process

1. Take the natural log of both sides: $\ln(y) = \ln(f(x))$
2. Use log properties to simplify
3. Differentiate both sides implicitly
4. Solve for $\frac{dy}{dx}$
5. Substitute back for $y$

---

### 6.3 Examples

**Example 27:** Find $\frac{dy}{dx}$ for $y = x^x$

*Solution:*

**Step 1:** Take ln of both sides
$$\ln(y) = \ln(x^x) = x \ln(x)$$

**Step 2:** Differentiate implicitly
$$\frac{1}{y} \cdot \frac{dy}{dx} = 1 \cdot \ln(x) + x \cdot \frac{1}{x} = \ln(x) + 1$$

**Step 3:** Solve for $\frac{dy}{dx}$
$$\frac{dy}{dx} = y(\ln(x) + 1) = x^x(\ln(x) + 1)$$

---

**Example 28:** Find $\frac{dy}{dx}$ for $y = (\sin x)^x$

*Solution:*
$$\ln(y) = x \ln(\sin x)$$

Differentiate:
$$\frac{1}{y} \cdot \frac{dy}{dx} = \ln(\sin x) + x \cdot \frac{\cos x}{\sin x}$$
$$= \ln(\sin x) + x \cot x$$

$$\frac{dy}{dx} = (\sin x)^x [\ln(\sin x) + x \cot x]$$

---

**Example 29:** Find $\frac{dy}{dx}$ for $y = x^{\sin x}$

*Solution:*
$$\ln(y) = \sin x \cdot \ln(x)$$

Differentiate:
$$\frac{1}{y} \cdot \frac{dy}{dx} = \cos x \cdot \ln(x) + \sin x \cdot \frac{1}{x}$$

$$\frac{dy}{dx} = x^{\sin x}\left[\cos x \cdot \ln(x) + \frac{\sin x}{x}\right]$$

---

**Example 30:** Simplify $y = \frac{x^2(x+1)^3}{(x-2)^4}$

*Solution:*
$$\ln(y) = 2\ln(x) + 3\ln(x+1) - 4\ln(x-2)$$

Differentiate:
$$\frac{1}{y} \cdot \frac{dy}{dx} = \frac{2}{x} + \frac{3}{x+1} - \frac{4}{x-2}$$

$$\frac{dy}{dx} = \frac{x^2(x+1)^3}{(x-2)^4}\left[\frac{2}{x} + \frac{3}{x+1} - \frac{4}{x-2}\right]$$

---

## ⚠️ Common Mistakes to Avoid

### Mistake 1: Forgetting the Chain Rule
❌ $\frac{d}{dx}[\sin(3x)] = \cos(3x)$
✅ $\frac{d}{dx}[\sin(3x)] = 3\cos(3x)$

### Mistake 2: Forgetting $\frac{dy}{dx}$ in Implicit Differentiation
❌ $\frac{d}{dx}[y^2] = 2y$
✅ $\frac{d}{dx}[y^2] = 2y \cdot \frac{dy}{dx}$

### Mistake 3: Using Wrong Inverse Trig Formula
Remember: arcsin and arccos have $\sqrt{1-x^2}$ in denominator
arctan and arccot have $1 + x^2$ in denominator

### Mistake 4: Related Rates - Using the Wrong Instant
Always find all variable values at the specific instant before substituting.

### Mistake 5: Confusing $(f^{-1})'$ formula
$$(f^{-1})'(b) = \frac{1}{f'(a)} \text{ where } f(a) = b$$
NOT $\frac{1}{f'(b)}$!

---

## 📝 AP Exam Practice Problems

### Free Response Style

**FRQ 1:** Consider the curve defined by $x^2y + y^3 = 10$.

(a) Find $\frac{dy}{dx}$ in terms of $x$ and $y$.

(b) Find the equation of the tangent line at the point $(1, 2)$.

(c) Find $\frac{d^2y}{dx^2}$ at the point $(1, 2)$.

---

**Solution FRQ 1:**

**(a)** Differentiate implicitly:
$$2xy + x^2\frac{dy}{dx} + 3y^2\frac{dy}{dx} = 0$$
$$\frac{dy}{dx}(x^2 + 3y^2) = -2xy$$
$$\frac{dy}{dx} = \frac{-2xy}{x^2 + 3y^2}$$

**(b)** At $(1, 2)$:
$$\frac{dy}{dx} = \frac{-2(1)(2)}{1 + 12} = \frac{-4}{13}$$

Tangent line: $y - 2 = -\frac{4}{13}(x - 1)$

**(c)** Differentiate $\frac{dy}{dx}$ using quotient rule:
$$\frac{d^2y}{dx^2} = \frac{(x^2+3y^2)(-2y-2x\frac{dy}{dx}) - (-2xy)(2x + 6y\frac{dy}{dx})}{(x^2+3y^2)^2}$$

At $(1, 2)$ with $\frac{dy}{dx} = -\frac{4}{13}$:

Numerator: $(13)(-2(2) - 2(1)(-\frac{4}{13})) - (-4)(2 + 12(-\frac{4}{13}))$
$= 13(-4 + \frac{8}{13}) - (-4)(2 - \frac{48}{13})$
$= 13 \cdot \frac{-52 + 8}{13} + 4 \cdot \frac{26 - 48}{13}$
$= -44 + 4 \cdot \frac{-22}{13} = -44 - \frac{88}{13} = \frac{-572 - 88}{13} = \frac{-660}{13}$

$$\frac{d^2y}{dx^2} = \frac{-660/13}{169} = \frac{-660}{2197}$$

---

**FRQ 2:** A spherical balloon is being inflated. At the instant when the radius is 5 cm, the volume is increasing at a rate of $100\pi$ cm³/sec.

(a) Find how fast the radius is increasing at that instant.

(b) Find how fast the surface area is increasing at that instant.

(c) Explain why the rate of change of surface area is not constant even though the rate of change of volume is constant.

---

**Solution FRQ 2:**

**(a)** $V = \frac{4}{3}\pi r^3$

$$\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$$
$$100\pi = 4\pi(25)\frac{dr}{dt}$$
$$\frac{dr}{dt} = 1 \text{ cm/sec}$$

**(b)** $S = 4\pi r^2$
$$\frac{dS}{dt} = 8\pi r \frac{dr}{dt} = 8\pi(5)(1) = 40\pi \text{ cm}^2/\text{sec}$$

**(c)** Even with constant $\frac{dV}{dt}$, the radius grows slower as the balloon gets larger (since $\frac{dr}{dt} = \frac{dV/dt}{4\pi r^2}$). The surface area rate depends on both $r$ and $\frac{dr}{dt}$, making $\frac{dS}{dt} = \frac{2}{r} \cdot \frac{dV}{dt}$, which decreases as $r$ increases.

---

### Multiple Choice Practice

**MC 1:** If $y = \ln(\cos(x^2))$, then $\frac{dy}{dx} = $

(A) $\frac{-\sin(x^2)}{\cos(x^2)}$
(B) $\frac{-2x\sin(x^2)}{\cos(x^2)}$
(C) $\frac{2x}{\cos(x^2)}$
(D) $-2x\tan(x^2)$

**Answer:** (D) - Apply chain rule twice: $\frac{1}{\cos(x^2)} \cdot (-\sin(x^2)) \cdot 2x = -2x\tan(x^2)$

---

**MC 2:** The derivative of $\arctan(\sqrt{x})$ is

(A) $\frac{1}{1+x}$
(B) $\frac{1}{2\sqrt{x}(1+x)}$
(C) $\frac{1}{2(1+x)\sqrt{x}}$
(D) $\frac{1}{2\sqrt{x}(1+\sqrt{x})^2}$

**Answer:** (B) - $\frac{1}{1+(\sqrt{x})^2} \cdot \frac{1}{2\sqrt{x}} = \frac{1}{2\sqrt{x}(1+x)}$

---

**MC 3:** If $f(x) = x^3 + 2x$ and $g = f^{-1}$, then $g'(3) = $

(A) $\frac{1}{5}$
(B) $\frac{1}{29}$
(C) $5$
(D) $\frac{1}{3}$

**Answer:** (A) - $f(1) = 3$, so $g(3) = 1$. $f'(x) = 3x^2 + 2$, $f'(1) = 5$. Thus $g'(3) = \frac{1}{5}$

---

**MC 4:** A ladder 10 feet long leans against a wall. If the bottom slides away at 2 ft/sec, how fast is the top sliding down when the bottom is 6 feet from the wall?

(A) $\frac{3}{2}$ ft/sec
(B) $\frac{3}{4}$ ft/sec
(C) $3$ ft/sec
(D) $\frac{-3}{2}$ ft/sec

**Answer:** (A) - When $x = 6$, $y = 8$. From $x^2 + y^2 = 100$: $2(6)(2) + 2(8)\frac{dy}{dt} = 0$, so $\frac{dy}{dt} = -\frac{3}{2}$. Speed = $\frac{3}{2}$ ft/sec.

---

## 🎯 Quick Reference Formulas

### Chain Rule Patterns
$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

### Implicit Differentiation
When differentiating $y$ with respect to $x$: multiply by $\frac{dy}{dx}$

### Inverse Function Derivative
$$(f^{-1})'(b) = \frac{1}{f'(f^{-1}(b))}$$

### Inverse Trig (Most Common)
$$\frac{d}{dx}[\arcsin(x)] = \frac{1}{\sqrt{1-x^2}}$$
$$\frac{d}{dx}[\arctan(x)] = \frac{1}{1+x^2}$$

### Logarithmic Differentiation
For $y = f(x)^{g(x)}$: Take $\ln$, differentiate, solve for $\frac{dy}{dx}$, substitute back.

---

## 📈 Study Tips for Success

1. **Practice the chain rule extensively** - it appears in nearly every derivative problem
2. **Draw diagrams for related rates** - visualization prevents errors
3. **Memorize inverse trig derivatives** - they appear frequently on the AP exam
4. **Check your work** by differentiating simpler cases you can verify
5. **Watch for nested functions** - count the number of compositions before differentiating

---

## 🔑 Key Takeaways

✅ The chain rule is fundamental: always check for compositions
✅ Implicit differentiation treats $y$ as a function of $x$
✅ Related rates connect changing quantities through time
✅ Inverse function derivatives are reciprocals (at corresponding points)
✅ Logarithmic differentiation simplifies variable exponents

**You've mastered Unit 3! These techniques will be essential throughout AP Calculus BC and beyond.**

:::GUIDE:::
