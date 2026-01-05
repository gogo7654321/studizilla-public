# AP Calculus AB Unit 2: Differentiation - Definition and Fundamental Properties Study Guides

:::GUIDE:::
unit::=Unit 2
title::=📐 Unit 2: Differentiation Basics Complete Guide
desc::=Understand the derivative as a limit, the difference quotient, and the meaning of instantaneous rate of change
diff::=Hard
time::=45 minutes
tags::=derivative, definition, limit, rate of change, slope
content::=

# 📐 The Definition of the Derivative

## 🎯 What Is a Derivative?

The heart of calculus! ❤️

### The Big Idea

The derivative measures the **instantaneous rate of change** of a function.

| Concept | Meaning |
|---------|---------|
| Average rate of change | Slope of secant line |
| Instantaneous rate of change | Slope of tangent line |
| Derivative | Limit of average rate of change |

---

## 📈 Average vs. Instantaneous

### Average Rate of Change

The slope of the **secant line** between two points:

$$\text{Average rate} = \frac{f(b) - f(a)}{b - a}$$

### Instantaneous Rate of Change

The slope of the **tangent line** at one point:

$$\text{Instantaneous rate} = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

---

## 📝 The Difference Quotient

### Definition

$$\frac{f(x+h) - f(x)}{h}$$

This represents:
- Rise: $f(x+h) - f(x)$
- Run: $h$
- Slope of secant line through $(x, f(x))$ and $(x+h, f(x+h))$

---

## 🧮 The Derivative Definition

### Definition 1: Using $h$

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

### Definition 2: Using $a$ and $x$

$$f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$

### Notations for Derivative

| Notation | Read As |
|----------|---------|
| $f'(x)$ | "f prime of x" |
| $\frac{dy}{dx}$ | "dy dx" (Leibniz) |
| $\frac{d}{dx}[f(x)]$ | "derivative of f with respect to x" |
| $y'$ | "y prime" |
| $D_x f$ | "D sub x of f" |

---

## 📊 Example: Finding Derivative from Definition

### Example 1: $f(x) = x^2$

$$f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h}$$

**Step 1**: Expand
$$= \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h}$$

**Step 2**: Simplify
$$= \lim_{h \to 0} \frac{2xh + h^2}{h}$$

**Step 3**: Factor out $h$
$$= \lim_{h \to 0} \frac{h(2x + h)}{h}$$

**Step 4**: Cancel and evaluate
$$= \lim_{h \to 0} (2x + h) = 2x$$

**Result**: $f'(x) = 2x$

### Example 2: $f(x) = \frac{1}{x}$

$$f'(x) = \lim_{h \to 0} \frac{\frac{1}{x+h} - \frac{1}{x}}{h}$$

**Step 1**: Common denominator
$$= \lim_{h \to 0} \frac{\frac{x - (x+h)}{x(x+h)}}{h}$$

**Step 2**: Simplify
$$= \lim_{h \to 0} \frac{-h}{h \cdot x(x+h)}$$

**Step 3**: Cancel $h$
$$= \lim_{h \to 0} \frac{-1}{x(x+h)} = \frac{-1}{x^2}$$

**Result**: $f'(x) = -\frac{1}{x^2}$

---

## 📉 Tangent Line Equation

### Finding the Tangent Line

At point $(a, f(a))$:

1. Find slope: $m = f'(a)$
2. Use point-slope form: $y - f(a) = f'(a)(x - a)$

### Example

Find tangent line to $f(x) = x^2$ at $x = 3$:

1. $f(3) = 9$
2. $f'(x) = 2x$, so $f'(3) = 6$
3. Tangent line: $y - 9 = 6(x - 3)$
4. Simplified: $y = 6x - 9$

---

## 🔗 Differentiability and Continuity

### The Key Theorem

**If $f$ is differentiable at $a$, then $f$ is continuous at $a$.**

The converse is NOT true! A function can be continuous but not differentiable.

### When Is a Function NOT Differentiable?

| Case | Example | Why |
|------|---------|-----|
| Corner | $y = |x|$ at $x = 0$ | Sharp point |
| Cusp | $y = x^{2/3}$ at $x = 0$ | Pointed |
| Vertical tangent | $y = \sqrt[3]{x}$ at $x = 0$ | Slope is $\pm\infty$ |
| Discontinuity | Any discontinuous function | Not continuous = not differentiable |

### Visual: Corner at $x = 0$

```
     y
     │    /
     │   /
     │  /
     │ /
     │/
─────●───────── x
    /│
   / │
  /  │
 
Left slope ≠ Right slope
→ Not differentiable
```

---

## 📊 Derivative as a Function

### The Derivative Function

$f'(x)$ is a **new function** that gives the slope at each point.

| Original | Derivative |
|----------|------------|
| $f(x) = x^2$ | $f'(x) = 2x$ |
| $f(x) = x^3$ | $f'(x) = 3x^2$ |
| $f(x) = \sqrt{x}$ | $f'(x) = \frac{1}{2\sqrt{x}}$ |

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| Definition | $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$ |
| Tangent line | Use point-slope form |
| Differentiable → Continuous | Yes |
| Continuous → Differentiable | NOT always |
| Corners, cusps | Not differentiable |

:::GUIDE:::
unit::=Unit 2
title::=Basic Differentiation Rules
desc::=Master the power rule, constant rule, sum/difference rules, and derivatives of exponential functions
diff::=Medium
time::=40 minutes
tags::=power rule, derivative rules, exponential, constant
content::=

# 📏 Basic Differentiation Rules

## ⚡ The Power Rule

The most important rule! 💪

### The Rule

$$\frac{d}{dx}[x^n] = nx^{n-1}$$

**"Bring down the power, reduce by 1"**

### Examples

| Function | Derivative |
|----------|------------|
| $x^5$ | $5x^4$ |
| $x^{100}$ | $100x^{99}$ |
| $x^{-3}$ | $-3x^{-4}$ |
| $x^{1/2}$ | $\frac{1}{2}x^{-1/2}$ |
| $x^1 = x$ | $1$ |
| $x^0 = 1$ | $0$ |

### Power Rule for Any Real Power

Works for ALL real numbers $n$:

| Expression | Rewritten | Derivative |
|------------|-----------|------------|
| $\sqrt{x}$ | $x^{1/2}$ | $\frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$ |
| $\frac{1}{x^2}$ | $x^{-2}$ | $-2x^{-3} = \frac{-2}{x^3}$ |
| $\sqrt[3]{x^2}$ | $x^{2/3}$ | $\frac{2}{3}x^{-1/3}$ |

---

## 📋 Constant and Constant Multiple Rules

### Constant Rule

$$\frac{d}{dx}[c] = 0$$

The derivative of a constant is 0.

### Constant Multiple Rule

$$\frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)$$

Constants "come along for the ride."

### Examples

| Function | Derivative |
|----------|------------|
| $7$ | $0$ |
| $5x^3$ | $5 \cdot 3x^2 = 15x^2$ |
| $-2x^4$ | $-2 \cdot 4x^3 = -8x^3$ |
| $\frac{x^2}{3}$ | $\frac{1}{3} \cdot 2x = \frac{2x}{3}$ |

---

## ➕ Sum and Difference Rules

### Sum Rule

$$\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$$

### Difference Rule

$$\frac{d}{dx}[f(x) - g(x)] = f'(x) - g'(x)$$

**Take derivatives term by term!**

### Examples

| Function | Derivative |
|----------|------------|
| $x^3 + x^2$ | $3x^2 + 2x$ |
| $5x^4 - 3x^2 + 7$ | $20x^3 - 6x$ |
| $x^5 + 2x^3 - x + 4$ | $5x^4 + 6x^2 - 1$ |

---

## 📐 Derivatives of Exponentials

### Natural Exponential

$$\frac{d}{dx}[e^x] = e^x$$

The only function equal to its own derivative! 🎯

### General Exponential

$$\frac{d}{dx}[a^x] = a^x \ln(a)$$

### Examples

| Function | Derivative |
|----------|------------|
| $e^x$ | $e^x$ |
| $2^x$ | $2^x \ln(2)$ |
| $10^x$ | $10^x \ln(10)$ |
| $3e^x$ | $3e^x$ |

---

## 📐 Derivatives of Logarithms

### Natural Logarithm

$$\frac{d}{dx}[\ln x] = \frac{1}{x}$$

### General Logarithm

$$\frac{d}{dx}[\log_a x] = \frac{1}{x \ln a}$$

### Examples

| Function | Derivative |
|----------|------------|
| $\ln x$ | $\frac{1}{x}$ |
| $\log_{10} x$ | $\frac{1}{x \ln 10}$ |
| $5 \ln x$ | $\frac{5}{x}$ |

---

## 🔧 Putting It All Together

### Example 1

Find $\frac{d}{dx}[3x^4 - 2x^2 + 5x - 7]$

$$= 12x^3 - 4x + 5$$

### Example 2

Find $\frac{d}{dx}[\sqrt{x} + \frac{1}{x}]$

Rewrite: $= x^{1/2} + x^{-1}$

$$= \frac{1}{2}x^{-1/2} - x^{-2} = \frac{1}{2\sqrt{x}} - \frac{1}{x^2}$$

### Example 3

Find $\frac{d}{dx}[e^x + 3x^2 - \ln x]$

$$= e^x + 6x - \frac{1}{x}$$

---

## 📊 Common Functions Table

### Reference Table

| $f(x)$ | $f'(x)$ |
|--------|---------|
| $c$ (constant) | $0$ |
| $x$ | $1$ |
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\log_a x$ | $\frac{1}{x \ln a}$ |

---

## 🎯 AP Exam Tips

| Rule | Key Point |
|------|-----------|
| Power Rule | Works for any real exponent |
| Constant | Derivative is 0 |
| Sum/Difference | Term by term |
| $e^x$ | Equals itself |
| $\ln x$ | Gives $\frac{1}{x}$ |

:::GUIDE:::
unit::=Unit 2
title::=Derivatives of Trigonometric Functions
desc::=Learn the derivatives of sine, cosine, tangent, and other trigonometric functions
diff::=Hard
time::=40 minutes
tags::=trig, derivatives, sine, cosine, tangent
content::=

# 📐 Derivatives of Trigonometric Functions

## 🎯 The Basic Trig Derivatives

You MUST memorize these! 🧠

### Sine and Cosine

$$\frac{d}{dx}[\sin x] = \cos x$$

$$\frac{d}{dx}[\cos x] = -\sin x$$

**Notice the negative sign on cosine!** ⚠️

### Memory Aid

```
    sin → cos → -sin → -cos → sin
    (Go around the unit circle!)
```

---

## 📊 Deriving Sin and Cos

### Why $\frac{d}{dx}[\sin x] = \cos x$?

Using the limit definition:
$$\frac{d}{dx}[\sin x] = \lim_{h \to 0} \frac{\sin(x+h) - \sin x}{h}$$

Using angle addition:
$$= \lim_{h \to 0} \frac{\sin x \cos h + \cos x \sin h - \sin x}{h}$$

$$= \lim_{h \to 0} \frac{\sin x(\cos h - 1) + \cos x \sin h}{h}$$

$$= \sin x \cdot \lim_{h \to 0} \frac{\cos h - 1}{h} + \cos x \cdot \lim_{h \to 0} \frac{\sin h}{h}$$

$$= \sin x \cdot 0 + \cos x \cdot 1 = \cos x$$

---

## 📏 Other Trig Derivatives

### Tangent, Cotangent, Secant, Cosecant

| Function | Derivative |
|----------|------------|
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| $\csc x$ | $-\csc x \cot x$ |

### Memory Patterns

**Co-functions have negatives:**
- $\cos x \to -\sin x$
- $\cot x \to -\csc^2 x$
- $\csc x \to -\csc x \cot x$

---

## 🧮 Deriving Tangent

### Using Quotient Rule (Preview)

$$\tan x = \frac{\sin x}{\cos x}$$

$$\frac{d}{dx}[\tan x] = \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x}$$

$$= \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x$$

---

## 📊 Complete Trig Reference Table

| Function | Derivative | Domain Restriction |
|----------|------------|-------------------|
| $\sin x$ | $\cos x$ | All real numbers |
| $\cos x$ | $-\sin x$ | All real numbers |
| $\tan x$ | $\sec^2 x$ | $x \neq \frac{\pi}{2} + n\pi$ |
| $\cot x$ | $-\csc^2 x$ | $x \neq n\pi$ |
| $\sec x$ | $\sec x \tan x$ | $x \neq \frac{\pi}{2} + n\pi$ |
| $\csc x$ | $-\csc x \cot x$ | $x \neq n\pi$ |

---

## 🔧 Examples

### Example 1

Find $\frac{d}{dx}[3\sin x + 2\cos x]$

$$= 3\cos x + 2(-\sin x) = 3\cos x - 2\sin x$$

### Example 2

Find $\frac{d}{dx}[x^2 + \tan x]$

$$= 2x + \sec^2 x$$

### Example 3

Find $\frac{d}{dx}[\sin x + 5\sec x]$

$$= \cos x + 5\sec x \tan x$$

### Example 4

Find the slope of $y = \sin x$ at $x = \frac{\pi}{3}$

$y' = \cos x$

At $x = \frac{\pi}{3}$: $y' = \cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$

---

## ⚠️ Common Mistakes

### Watch Out For:

| Mistake | Correct |
|---------|---------|
| $\frac{d}{dx}[\cos x] = \sin x$ | $\frac{d}{dx}[\cos x] = -\sin x$ |
| Forgetting negatives | Co-functions have negatives |
| $\frac{d}{dx}[\tan x] = \sec x$ | $\frac{d}{dx}[\tan x] = \sec^2 x$ (squared!) |

---

## 🔗 Higher Derivatives of Sin and Cos

### Pattern for $y = \sin x$

| Derivative | Result |
|------------|--------|
| $y = \sin x$ | — |
| $y' = \cos x$ | First |
| $y'' = -\sin x$ | Second |
| $y''' = -\cos x$ | Third |
| $y^{(4)} = \sin x$ | Fourth (back to start!) |

The pattern repeats every 4 derivatives! 🔄

---

## 🎯 AP Exam Tips

| Function | Derivative |
|----------|------------|
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| Remember | Co-functions have negatives |

:::GUIDE:::
unit::=Unit 2
title::=Product and Quotient Rules
desc::=Master the product rule and quotient rule for differentiating products and quotients of functions
diff::=Hard
time::=45 minutes
tags::=product rule, quotient rule, derivatives
content::=

# ✖️ Product and Quotient Rules

## ✖️ The Product Rule

When you multiply functions! 🔢

### The Rule

If $h(x) = f(x) \cdot g(x)$, then:

$$h'(x) = f(x) \cdot g'(x) + g(x) \cdot f'(x)$$

### Memory Aids

**"First times derivative of second, plus second times derivative of first"**

Or: $(fg)' = fg' + gf'$

Or: $(uv)' = uv' + vu'$

---

## 📊 Product Rule Examples

### Example 1

Find $\frac{d}{dx}[x^2 \cdot \sin x]$

Let $f = x^2$ and $g = \sin x$

$f' = 2x$ and $g' = \cos x$

$$= x^2 \cdot \cos x + \sin x \cdot 2x$$
$$= x^2 \cos x + 2x \sin x$$

### Example 2

Find $\frac{d}{dx}[(3x+1)(x^2-4)]$

Let $f = 3x+1$ and $g = x^2-4$

$f' = 3$ and $g' = 2x$

$$= (3x+1)(2x) + (x^2-4)(3)$$
$$= 6x^2 + 2x + 3x^2 - 12$$
$$= 9x^2 + 2x - 12$$

### Example 3

Find $\frac{d}{dx}[e^x \ln x]$

Let $f = e^x$ and $g = \ln x$

$f' = e^x$ and $g' = \frac{1}{x}$

$$= e^x \cdot \frac{1}{x} + \ln x \cdot e^x$$
$$= e^x \left(\frac{1}{x} + \ln x\right)$$

---

## ➗ The Quotient Rule

When you divide functions! 📊

### The Rule

If $h(x) = \frac{f(x)}{g(x)}$, then:

$$h'(x) = \frac{g(x) \cdot f'(x) - f(x) \cdot g'(x)}{[g(x)]^2}$$

### Memory Aids

**"Lo d-Hi minus Hi d-Lo, over Lo squared"**

$$\frac{d}{dx}\left[\frac{\text{Hi}}{\text{Lo}}\right] = \frac{\text{Lo} \cdot d\text{Hi} - \text{Hi} \cdot d\text{Lo}}{\text{Lo}^2}$$

Or: $\left(\frac{u}{v}\right)' = \frac{vu' - uv'}{v^2}$

---

## 📊 Quotient Rule Examples

### Example 1

Find $\frac{d}{dx}\left[\frac{x^2}{x+1}\right]$

Hi = $x^2$, Lo = $x+1$, $d$Hi = $2x$, $d$Lo = $1$

$$= \frac{(x+1)(2x) - (x^2)(1)}{(x+1)^2}$$
$$= \frac{2x^2 + 2x - x^2}{(x+1)^2}$$
$$= \frac{x^2 + 2x}{(x+1)^2}$$

### Example 2

Find $\frac{d}{dx}\left[\frac{\sin x}{x}\right]$

Hi = $\sin x$, Lo = $x$, $d$Hi = $\cos x$, $d$Lo = $1$

$$= \frac{x \cdot \cos x - \sin x \cdot 1}{x^2}$$
$$= \frac{x\cos x - \sin x}{x^2}$$

### Example 3

Find $\frac{d}{dx}[\tan x]$ using quotient rule

$$\tan x = \frac{\sin x}{\cos x}$$

$$= \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x}$$
$$= \frac{\cos^2 x + \sin^2 x}{\cos^2 x}$$
$$= \frac{1}{\cos^2 x} = \sec^2 x$$ ✅

---

## 🤔 Product or Quotient?

### Decision Guide

| Expression | Rule |
|------------|------|
| $f(x) \cdot g(x)$ | Product |
| $\frac{f(x)}{g(x)}$ | Quotient |
| $c \cdot f(x)$ | Just constant multiple |
| $\frac{f(x)}{c}$ | Just constant multiple |

### Simplify First!

Sometimes you can avoid these rules:

| Instead of | Use |
|------------|-----|
| Quotient rule on $\frac{x^3}{x}$ | Simplify to $x^2$ first |
| Quotient rule on $\frac{5}{x^2}$ | Rewrite as $5x^{-2}$ |
| Product rule on $x \cdot x^2$ | Combine to $x^3$ first |

---

## 🔧 Combined Examples

### Example: Product and Power

Find $\frac{d}{dx}[x^3(2x-5)]$

**Product rule:**
$$= x^3 \cdot 2 + (2x-5) \cdot 3x^2$$
$$= 2x^3 + 6x^3 - 15x^2$$
$$= 8x^3 - 15x^2$$

**Or expand first:**
$x^3(2x-5) = 2x^4 - 5x^3$
$$\frac{d}{dx}[2x^4 - 5x^3] = 8x^3 - 15x^2$$ ✅

### Example: Quotient with Trig

Find $\frac{d}{dx}\left[\frac{e^x}{\cos x}\right]$

$$= \frac{\cos x \cdot e^x - e^x \cdot (-\sin x)}{\cos^2 x}$$
$$= \frac{e^x(\cos x + \sin x)}{\cos^2 x}$$

---

## ⚠️ Common Mistakes

### Product Rule

| Mistake | Correct |
|---------|---------|
| $(fg)' = f' \cdot g'$ | $(fg)' = fg' + gf'$ |
| Forgetting one term | Two terms added |

### Quotient Rule

| Mistake | Correct |
|---------|---------|
| Wrong order in numerator | Lo d-Hi MINUS Hi d-Lo |
| Forgetting to square bottom | Denominator is $[g(x)]^2$ |
| Using + instead of − | It's subtraction! |

---

## 🎯 AP Exam Tips

| Rule | Formula |
|------|---------|
| Product | $fg' + gf'$ |
| Quotient | $\frac{gf' - fg'}{g^2}$ |
| Strategy | Simplify first if possible |
| Order | Quotient: Lo d-Hi − Hi d-Lo |

:::GUIDE:::
unit::=Unit 2
title::=Unit 2 AP Exam Strategies
desc::=Master key concepts, problem types, and strategies for Unit 2 of the AP Calculus AB exam
diff::=Medium
time::=30 minutes
tags::=AP exam, Unit 2, strategies, derivatives
content::=

# 📝 Unit 2 AP Exam Strategies

## 📊 Unit Weight

| Exam Section | Unit 2 Weight |
|--------------|---------------|
| Multiple Choice | ~10-12% |
| Free Response | Very common |

---

## 🔑 Must-Know Formulas

### Derivative Definition

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

### Basic Rules

| Rule | Formula |
|------|---------|
| Power | $\frac{d}{dx}[x^n] = nx^{n-1}$ |
| Constant | $\frac{d}{dx}[c] = 0$ |
| Constant Multiple | $\frac{d}{dx}[cf] = cf'$ |
| Sum/Difference | $\frac{d}{dx}[f \pm g] = f' \pm g'$ |
| Product | $(fg)' = fg' + gf'$ |
| Quotient | $\left(\frac{f}{g}\right)' = \frac{gf' - fg'}{g^2}$ |

### Special Functions

| Function | Derivative |
|----------|------------|
| $e^x$ | $e^x$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\sec x$ | $\sec x \tan x$ |

---

## ✍️ Sample MC Questions

### Question 1

Find $\frac{d}{dx}[x^3 - 4x^2 + 5x - 2]$

(A) $3x^2 - 4x + 5$
(B) $3x^2 - 8x + 5$
(C) $3x^3 - 8x^2 + 5x$
(D) $x^2 - 8x + 5$

**Solution**: Power rule on each term
$$= 3x^2 - 8x + 5$$

**Answer: (B)**

### Question 2

If $f(x) = x^2 \sin x$, find $f'(x)$

(A) $2x \cos x$
(B) $x^2 \cos x + 2x \sin x$
(C) $2x \sin x - x^2 \cos x$
(D) $x^2 \cos x$

**Solution**: Product rule
$$= x^2 \cdot \cos x + \sin x \cdot 2x$$
$$= x^2 \cos x + 2x \sin x$$

**Answer: (B)**

### Question 3

Find $\frac{d}{dx}\left[\frac{x}{x+2}\right]$

(A) $\frac{1}{(x+2)^2}$
(B) $\frac{2}{(x+2)^2}$
(C) $\frac{-2}{(x+2)^2}$
(D) $\frac{x+2}{x^2}$

**Solution**: Quotient rule
$$= \frac{(x+2)(1) - x(1)}{(x+2)^2} = \frac{2}{(x+2)^2}$$

**Answer: (B)**

---

## ✍️ Sample FR Question

**Question**: Let $f(x) = x^3 - 3x^2 + 2$

(a) Find $f'(x)$.

(b) Find the equation of the tangent line at $x = 2$.

(c) At what value(s) of $x$ is the tangent line horizontal?

**Solution**:

(a) $f'(x) = 3x^2 - 6x$

(b) At $x = 2$:
- $f(2) = 8 - 12 + 2 = -2$
- $f'(2) = 12 - 12 = 0$
- Tangent line: $y - (-2) = 0(x - 2)$
- **Answer: $y = -2$**

(c) Horizontal tangent when $f'(x) = 0$:
$$3x^2 - 6x = 0$$
$$3x(x - 2) = 0$$
$$x = 0 \text{ or } x = 2$$

**Answer: $x = 0$ and $x = 2$**

---

## ⚠️ Common Mistakes

### Rule Application Errors

| Mistake | Correct |
|---------|---------|
| $(f \cdot g)' = f' \cdot g'$ | Use product rule |
| $\left(\frac{f}{g}\right)' = \frac{f'}{g'}$ | Use quotient rule |
| Power rule on $e^x$ | $\frac{d}{dx}[e^x] = e^x$ |
| $\frac{d}{dx}[\cos x] = \sin x$ | $= -\sin x$ (negative!) |

### Calculation Errors

| Mistake | Correct |
|---------|---------|
| Wrong sign in quotient rule | Lo d-Hi MINUS Hi d-Lo |
| Forgetting constant term | Derivative of constant is 0 |
| Wrong trig derivative | Check the signs! |

---

## 🔗 Connections to Other Units

### Unit 2 → Unit 3

| Unit 2 | Leads to Unit 3 |
|--------|-----------------|
| Basic rules | Chain rule |
| Product/Quotient | Implicit differentiation |
| Trig derivatives | Inverse trig derivatives |

### Unit 2 → Unit 4 & 5

| Concept | Application |
|---------|-------------|
| Tangent lines | Linear approximation |
| Horizontal tangent | Critical points |
| Derivatives | Rates of change |

---

## 💡 Quick Tips

### Before Differentiating

1. **Simplify** if possible
2. **Rewrite** radicals and fractions as powers
3. **Expand** simple products if easier

### Check Your Work

1. Does the answer make sense?
2. Right number of terms?
3. Correct signs?
4. Simplified properly?

---

## 📋 Unit 2 Checklist

### Before the Exam

✅ Can find derivative using definition
✅ Know power rule for any real exponent
✅ Know constant and constant multiple rules
✅ Know sum and difference rules
✅ Know all six trig derivatives
✅ Know $e^x$ and $\ln x$ derivatives
✅ Can apply product rule correctly
✅ Can apply quotient rule correctly
✅ Can find tangent line equations
✅ Understand differentiability vs. continuity

**Good luck! 🍀**
