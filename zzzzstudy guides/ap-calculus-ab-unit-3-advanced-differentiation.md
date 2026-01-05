# AP Calculus AB Unit 3: Differentiation - Composite, Implicit, and Inverse Functions Study Guides

:::GUIDE:::
unit::=Unit 3
title::=📐 Unit 3: Advanced Differentiation Complete Guide
desc::=Master the chain rule for differentiating composite functions - the most powerful differentiation technique
diff::=Hard
time::=50 minutes
tags::=chain rule, composite functions, derivatives
content::=

# ⛓️ The Chain Rule

## 🎯 What Is a Composite Function?

A function inside another function! 🪆

### Composition Notation

If $f(x) = x^2$ and $g(x) = 3x + 1$:

$$f(g(x)) = f(3x+1) = (3x+1)^2$$

The "inner" function is $g(x) = 3x+1$
The "outer" function is $f(u) = u^2$

---

## ⛓️ The Chain Rule

### The Rule

If $y = f(g(x))$, then:

$$\frac{dy}{dx} = f'(g(x)) \cdot g'(x)$$

**"Derivative of outside times derivative of inside"**

### Leibniz Notation

If $y = f(u)$ and $u = g(x)$:

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

The $du$'s "cancel" like fractions! ✨

---

## 📊 Chain Rule Process

### Step-by-Step

1. Identify the **outer function** (what happens last)
2. Identify the **inner function** (what's inside)
3. Differentiate the outer, keeping inner unchanged
4. Multiply by derivative of inner

### Visual Process

```
y = f(g(x))

Step 1: f'(g(x))     ← derivative of outer
Step 2: × g'(x)      ← times derivative of inner

Result: f'(g(x)) · g'(x)
```

---

## 🔧 Basic Chain Rule Examples

### Example 1: $(3x+1)^5$

**Outer**: $u^5$
**Inner**: $3x+1$

$$\frac{d}{dx}[(3x+1)^5] = 5(3x+1)^4 \cdot 3 = 15(3x+1)^4$$

### Example 2: $\sqrt{x^2+1}$

Rewrite: $(x^2+1)^{1/2}$

**Outer**: $u^{1/2}$
**Inner**: $x^2+1$

$$= \frac{1}{2}(x^2+1)^{-1/2} \cdot 2x = \frac{x}{\sqrt{x^2+1}}$$

### Example 3: $(2x^3-5)^{-2}$

**Outer**: $u^{-2}$
**Inner**: $2x^3-5$

$$= -2(2x^3-5)^{-3} \cdot 6x^2 = \frac{-12x^2}{(2x^3-5)^3}$$

---

## 📐 Chain Rule with Trig Functions

### Pattern

$$\frac{d}{dx}[\sin(u)] = \cos(u) \cdot u'$$

$$\frac{d}{dx}[\cos(u)] = -\sin(u) \cdot u'$$

### Examples

| Function | Derivative |
|----------|------------|
| $\sin(3x)$ | $\cos(3x) \cdot 3 = 3\cos(3x)$ |
| $\cos(x^2)$ | $-\sin(x^2) \cdot 2x = -2x\sin(x^2)$ |
| $\tan(5x)$ | $\sec^2(5x) \cdot 5 = 5\sec^2(5x)$ |
| $\sin^2(x)$ | $2\sin(x) \cdot \cos(x) = \sin(2x)$ |

### ⚠️ Watch Out!

| Expression | Meaning |
|------------|---------|
| $\sin^2(x)$ | $(\sin x)^2$ - outer is squaring |
| $\sin(x^2)$ | $\sin(x^2)$ - outer is sine |

---

## 📐 Chain Rule with Exponentials

### Natural Exponential

$$\frac{d}{dx}[e^{u}] = e^{u} \cdot u'$$

### Examples

| Function | Derivative |
|----------|------------|
| $e^{3x}$ | $e^{3x} \cdot 3 = 3e^{3x}$ |
| $e^{x^2}$ | $e^{x^2} \cdot 2x = 2xe^{x^2}$ |
| $e^{-x}$ | $e^{-x} \cdot (-1) = -e^{-x}$ |
| $e^{\sin x}$ | $e^{\sin x} \cdot \cos x$ |

### General Exponential

$$\frac{d}{dx}[a^{u}] = a^{u} \ln(a) \cdot u'$$

---

## 📐 Chain Rule with Logarithms

### Natural Log

$$\frac{d}{dx}[\ln(u)] = \frac{1}{u} \cdot u' = \frac{u'}{u}$$

### Examples

| Function | Derivative |
|----------|------------|
| $\ln(3x)$ | $\frac{3}{3x} = \frac{1}{x}$ |
| $\ln(x^2+1)$ | $\frac{2x}{x^2+1}$ |
| $\ln(\sin x)$ | $\frac{\cos x}{\sin x} = \cot x$ |
| $\ln(e^x)$ | $\frac{e^x}{e^x} = 1$ (or just = $x$) |

---

## 🔗 Multiple Chain Rule Applications

### Nested Functions

For $(outer(middle(inner)))$:

$$\frac{d}{dx} = outer' \cdot middle' \cdot inner'$$

### Example: $\sin^3(2x)$

This is $(\sin(2x))^3$

$$= 3(\sin(2x))^2 \cdot \cos(2x) \cdot 2$$
$$= 6\sin^2(2x)\cos(2x)$$

### Example: $e^{\cos(3x)}$

$$= e^{\cos(3x)} \cdot (-\sin(3x)) \cdot 3$$
$$= -3\sin(3x)e^{\cos(3x)}$$

---

## 📊 Chain Rule Reference Table

| Form | Derivative |
|------|------------|
| $[u]^n$ | $n[u]^{n-1} \cdot u'$ |
| $\sin(u)$ | $\cos(u) \cdot u'$ |
| $\cos(u)$ | $-\sin(u) \cdot u'$ |
| $\tan(u)$ | $\sec^2(u) \cdot u'$ |
| $e^u$ | $e^u \cdot u'$ |
| $\ln(u)$ | $\frac{u'}{u}$ |
| $a^u$ | $a^u \ln(a) \cdot u'$ |

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| Chain rule | Outer' × Inner' |
| Leibniz | $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$ |
| Always | Don't forget the inner derivative! |
| Common error | Forgetting to multiply by $u'$ |

:::GUIDE:::
unit::=Unit 3
title::=Implicit Differentiation
desc::=Learn to find derivatives when y cannot be isolated - essential for curves and relations
diff::=Hard
time::=45 minutes
tags::=implicit differentiation, dy/dx, curves
content::=

# 🔍 Implicit Differentiation

## 📐 Explicit vs. Implicit

### Explicit Functions

$y$ is solved in terms of $x$:

$$y = x^2 + 3x - 5$$
$$y = \sin(x) + e^x$$

### Implicit Relations

$x$ and $y$ are mixed together:

$$x^2 + y^2 = 25$$ (circle)
$$x^3 + y^3 = 6xy$$ (folium)
$$xy = 1$$ (hyperbola)

---

## 🧮 The Implicit Process

### Key Insight

When differentiating $y$ with respect to $x$:

$$\frac{d}{dx}[y] = \frac{dy}{dx}$$

This is just the chain rule where $y$ is a function of $x$!

### The Process

1. Differentiate **both sides** with respect to $x$
2. When differentiating a $y$ term, multiply by $\frac{dy}{dx}$
3. Collect all $\frac{dy}{dx}$ terms on one side
4. Factor out $\frac{dy}{dx}$
5. Solve for $\frac{dy}{dx}$

---

## 🔧 Basic Examples

### Example 1: Circle $x^2 + y^2 = 25$

Differentiate both sides:
$$\frac{d}{dx}[x^2] + \frac{d}{dx}[y^2] = \frac{d}{dx}[25]$$

$$2x + 2y\frac{dy}{dx} = 0$$

Solve for $\frac{dy}{dx}$:
$$2y\frac{dy}{dx} = -2x$$

$$\frac{dy}{dx} = -\frac{x}{y}$$

### Example 2: $xy = 1$

Use **product rule** on $xy$:
$$\frac{d}{dx}[xy] = \frac{d}{dx}[1]$$

$$x\frac{dy}{dx} + y \cdot 1 = 0$$

$$\frac{dy}{dx} = -\frac{y}{x}$$

### Example 3: $x^2 + xy + y^2 = 7$

$$2x + \left(x\frac{dy}{dx} + y\right) + 2y\frac{dy}{dx} = 0$$

Collect $\frac{dy}{dx}$ terms:
$$x\frac{dy}{dx} + 2y\frac{dy}{dx} = -2x - y$$

Factor:
$$\frac{dy}{dx}(x + 2y) = -2x - y$$

Solve:
$$\frac{dy}{dx} = \frac{-2x - y}{x + 2y}$$

---

## 📊 Common Implicit Patterns

### Differentiating $y^n$

$$\frac{d}{dx}[y^n] = ny^{n-1} \cdot \frac{dy}{dx}$$

| Expression | Derivative |
|------------|------------|
| $y^2$ | $2y\frac{dy}{dx}$ |
| $y^3$ | $3y^2\frac{dy}{dx}$ |
| $\sqrt{y}$ | $\frac{1}{2\sqrt{y}}\frac{dy}{dx}$ |
| $\frac{1}{y}$ | $-\frac{1}{y^2}\frac{dy}{dx}$ |

### Products with $y$

Use product rule:

| Expression | Derivative |
|------------|------------|
| $xy$ | $x\frac{dy}{dx} + y$ |
| $x^2y$ | $x^2\frac{dy}{dx} + 2xy$ |
| $xy^2$ | $x \cdot 2y\frac{dy}{dx} + y^2$ |

### Trig with $y$

| Expression | Derivative |
|------------|------------|
| $\sin(y)$ | $\cos(y)\frac{dy}{dx}$ |
| $\cos(y)$ | $-\sin(y)\frac{dy}{dx}$ |
| $e^y$ | $e^y\frac{dy}{dx}$ |
| $\ln(y)$ | $\frac{1}{y}\frac{dy}{dx}$ |

---

## 🔧 Advanced Examples

### Example: $\sin(xy) = x$

Use chain rule on $\sin(xy)$:
$$\cos(xy) \cdot \frac{d}{dx}[xy] = 1$$

$$\cos(xy) \cdot \left(x\frac{dy}{dx} + y\right) = 1$$

$$x\cos(xy)\frac{dy}{dx} + y\cos(xy) = 1$$

$$\frac{dy}{dx} = \frac{1 - y\cos(xy)}{x\cos(xy)}$$

### Example: $e^{xy} = x + y$

$$e^{xy} \cdot \left(x\frac{dy}{dx} + y\right) = 1 + \frac{dy}{dx}$$

$$xe^{xy}\frac{dy}{dx} + ye^{xy} = 1 + \frac{dy}{dx}$$

$$xe^{xy}\frac{dy}{dx} - \frac{dy}{dx} = 1 - ye^{xy}$$

$$\frac{dy}{dx}(xe^{xy} - 1) = 1 - ye^{xy}$$

$$\frac{dy}{dx} = \frac{1 - ye^{xy}}{xe^{xy} - 1}$$

---

## 📈 Finding Tangent Lines

### Process

1. Use implicit differentiation to find $\frac{dy}{dx}$
2. Plug in the point to find the slope
3. Use point-slope form

### Example

Find tangent to $x^2 + y^2 = 25$ at $(3, 4)$

**Step 1**: $\frac{dy}{dx} = -\frac{x}{y}$

**Step 2**: At $(3, 4)$: $m = -\frac{3}{4}$

**Step 3**: $y - 4 = -\frac{3}{4}(x - 3)$

**Answer**: $y = -\frac{3}{4}x + \frac{25}{4}$

---

## ⚠️ Common Mistakes

| Mistake | Correct |
|---------|---------|
| Forgetting $\frac{dy}{dx}$ on $y$ terms | Every $y$ term needs $\frac{dy}{dx}$ |
| Product rule errors | $xy \to x\frac{dy}{dx} + y$ |
| Not solving for $\frac{dy}{dx}$ | Isolate it! |
| Wrong chain rule | $y^2 \to 2y\frac{dy}{dx}$, not $2y$ |

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| $\frac{d}{dx}[y] = \frac{dy}{dx}$ | Chain rule! |
| Process | Differentiate → Collect → Factor → Solve |
| Products | Always use product rule with $xy$ |
| Tangent lines | Find slope, use point-slope form |

:::GUIDE:::
unit::=Unit 3
title::=Derivatives of Inverse Functions
desc::=Learn to differentiate inverse functions including inverse trigonometric functions
diff::=Hard
time::=45 minutes
tags::=inverse functions, arcsin, arccos, arctan, derivatives
content::=

# 🔄 Derivatives of Inverse Functions

## 🔄 Inverse Function Review

### What Is an Inverse?

If $f(x)$ takes $a$ to $b$, then $f^{-1}(x)$ takes $b$ back to $a$.

$$f(a) = b \iff f^{-1}(b) = a$$

### Graphical Relationship

The graph of $f^{-1}$ is the **reflection** of $f$ across $y = x$

```
    y
    │     /f(x)
    │    /
    │   /  y = x
    │  / /
    │ / / 
    │//  f⁻¹(x)
────┼──────────── x
    │
```

---

## 📐 Derivative of Inverse Function

### The Formula

If $f$ and $f^{-1}$ are inverses:

$$\left(f^{-1}\right)'(x) = \frac{1}{f'(f^{-1}(x))}$$

### Alternate Form

If $g = f^{-1}$, then:

$$g'(x) = \frac{1}{f'(g(x))}$$

### Why Does This Work?

Since $f(f^{-1}(x)) = x$:

Differentiate both sides (chain rule):
$$f'(f^{-1}(x)) \cdot (f^{-1})'(x) = 1$$

Solve:
$$(f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}$$

---

## 🔧 Examples

### Example 1

If $f(x) = x^3 + 1$, find $(f^{-1})'(9)$.

**Step 1**: Find where $f(x) = 9$
$$x^3 + 1 = 9 \implies x^3 = 8 \implies x = 2$$

So $f^{-1}(9) = 2$

**Step 2**: Find $f'(x)$
$$f'(x) = 3x^2$$

**Step 3**: Apply formula
$$(f^{-1})'(9) = \frac{1}{f'(f^{-1}(9))} = \frac{1}{f'(2)} = \frac{1}{3(2)^2} = \frac{1}{12}$$

### Example 2

Given: $f(4) = 7$ and $f'(4) = 3$

Find $(f^{-1})'(7)$

Since $f(4) = 7$, we have $f^{-1}(7) = 4$

$$(f^{-1})'(7) = \frac{1}{f'(f^{-1}(7))} = \frac{1}{f'(4)} = \frac{1}{3}$$

---

## 📐 Inverse Trig Derivatives

### The Six Inverse Trig Functions

| Function | Notation | Domain |
|----------|----------|--------|
| Inverse sine | $\arcsin x$ or $\sin^{-1}x$ | $[-1, 1]$ |
| Inverse cosine | $\arccos x$ or $\cos^{-1}x$ | $[-1, 1]$ |
| Inverse tangent | $\arctan x$ or $\tan^{-1}x$ | All reals |

---

## 📊 Inverse Trig Derivative Formulas

### The Big Three (AP Calc AB)

$$\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1-x^2}}$$

$$\frac{d}{dx}[\arccos x] = -\frac{1}{\sqrt{1-x^2}}$$

$$\frac{d}{dx}[\arctan x] = \frac{1}{1+x^2}$$

### Memory Aid

| Function | Derivative | Note |
|----------|------------|------|
| $\arcsin x$ | $\frac{1}{\sqrt{1-x^2}}$ | Square root |
| $\arccos x$ | $-\frac{1}{\sqrt{1-x^2}}$ | Negative of arcsin |
| $\arctan x$ | $\frac{1}{1+x^2}$ | No square root |

---

## 🧮 Deriving Arcsin Derivative

### Proof

Let $y = \arcsin x$, so $\sin y = x$

Differentiate implicitly:
$$\cos y \cdot \frac{dy}{dx} = 1$$

$$\frac{dy}{dx} = \frac{1}{\cos y}$$

Since $\sin^2 y + \cos^2 y = 1$:
$$\cos y = \sqrt{1 - \sin^2 y} = \sqrt{1 - x^2}$$

Therefore:
$$\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1-x^2}}$$

---

## 🔧 Chain Rule with Inverse Trig

### General Forms

$$\frac{d}{dx}[\arcsin(u)] = \frac{u'}{\sqrt{1-u^2}}$$

$$\frac{d}{dx}[\arccos(u)] = -\frac{u'}{\sqrt{1-u^2}}$$

$$\frac{d}{dx}[\arctan(u)] = \frac{u'}{1+u^2}$$

### Examples

| Function | Derivative |
|----------|------------|
| $\arcsin(2x)$ | $\frac{2}{\sqrt{1-4x^2}}$ |
| $\arctan(x^2)$ | $\frac{2x}{1+x^4}$ |
| $\arccos(e^x)$ | $-\frac{e^x}{\sqrt{1-e^{2x}}}$ |
| $\arcsin(\sqrt{x})$ | $\frac{1/(2\sqrt{x})}{\sqrt{1-x}} = \frac{1}{2\sqrt{x-x^2}}$ |

---

## 📊 Complete Inverse Trig Table

| Function | Derivative |
|----------|------------|
| $\arcsin x$ | $\frac{1}{\sqrt{1-x^2}}$ |
| $\arccos x$ | $-\frac{1}{\sqrt{1-x^2}}$ |
| $\arctan x$ | $\frac{1}{1+x^2}$ |
| $\text{arccot } x$ | $-\frac{1}{1+x^2}$ |
| $\text{arcsec } x$ | $\frac{1}{|x|\sqrt{x^2-1}}$ |
| $\text{arccsc } x$ | $-\frac{1}{|x|\sqrt{x^2-1}}$ |

*Note: Only arcsin, arccos, arctan typically on AP Calc AB*

---

## ⚠️ Common Mistakes

| Mistake | Correct |
|---------|---------|
| Confusing $\sin^{-1}x$ with $\frac{1}{\sin x}$ | $\sin^{-1}x = \arcsin x$ |
| Wrong signs | $\arccos$ has negative derivative |
| Forgetting chain rule | $\arcsin(2x)$ needs $× 2$ |
| Domain issues | $\arcsin x$ only for $|x| \leq 1$ |

---

## 🎯 AP Exam Tips

| Function | Derivative |
|----------|------------|
| $\arcsin u$ | $\frac{u'}{\sqrt{1-u^2}}$ |
| $\arccos u$ | $-\frac{u'}{\sqrt{1-u^2}}$ |
| $\arctan u$ | $\frac{u'}{1+u^2}$ |
| Inverse function | $\frac{1}{f'(f^{-1}(x))}$ |

:::GUIDE:::
unit::=Unit 3
title::=Higher-Order Derivatives and Selecting Procedures
desc::=Learn about second and higher derivatives and how to choose the right differentiation technique
diff::=Medium
time::=35 minutes
tags::=second derivative, higher order, procedures
content::=

# 📈 Higher-Order Derivatives

## 📊 Second Derivatives

### Definition

The derivative of the derivative!

$$f''(x) = \frac{d}{dx}[f'(x)]$$

### Notations

| Notation | Read As |
|----------|---------|
| $f''(x)$ | "f double prime" |
| $y''$ | "y double prime" |
| $\frac{d^2y}{dx^2}$ | "d two y dx squared" |
| $\frac{d^2}{dx^2}[f]$ | "second derivative of f" |

---

## 🔧 Finding Second Derivatives

### Example 1

$f(x) = x^4 - 3x^2 + 5x$

$f'(x) = 4x^3 - 6x + 5$

$f''(x) = 12x^2 - 6$

### Example 2

$y = \sin(2x)$

$y' = 2\cos(2x)$

$y'' = 2 \cdot (-\sin(2x)) \cdot 2 = -4\sin(2x)$

### Example 3

$f(x) = e^{3x}$

$f'(x) = 3e^{3x}$

$f''(x) = 9e^{3x}$

---

## 📐 Higher Order Derivatives

### Third, Fourth, and Beyond

| Order | Notation |
|-------|----------|
| Third | $f'''(x)$ or $f^{(3)}(x)$ |
| Fourth | $f^{(4)}(x)$ |
| nth | $f^{(n)}(x)$ |

### Example: $f(x) = x^5$

| Derivative | Result |
|------------|--------|
| $f'(x)$ | $5x^4$ |
| $f''(x)$ | $20x^3$ |
| $f'''(x)$ | $60x^2$ |
| $f^{(4)}(x)$ | $120x$ |
| $f^{(5)}(x)$ | $120$ |
| $f^{(6)}(x)$ | $0$ |

---

## 🔄 Pattern Recognition

### For $f(x) = e^{ax}$

All derivatives have pattern:
$$f^{(n)}(x) = a^n e^{ax}$$

### For $f(x) = \sin x$

| n | $f^{(n)}(x)$ |
|---|--------------|
| 1 | $\cos x$ |
| 2 | $-\sin x$ |
| 3 | $-\cos x$ |
| 4 | $\sin x$ |
| 5 | $\cos x$ |

Repeats every 4! So:
$$f^{(100)}(x) = \sin x$$ (since $100 \div 4 = 25$ remainder 0)

---

## 📊 Implicit Second Derivatives

### Process

1. Find $\frac{dy}{dx}$ using implicit differentiation
2. Differentiate again, treating $y$ as function of $x$
3. Substitute $\frac{dy}{dx}$ from step 1

### Example: $x^2 + y^2 = 25$

**Step 1**: Find $\frac{dy}{dx}$
$$2x + 2y\frac{dy}{dx} = 0$$
$$\frac{dy}{dx} = -\frac{x}{y}$$

**Step 2**: Differentiate $\frac{dy}{dx} = -\frac{x}{y}$
$$\frac{d^2y}{dx^2} = -\frac{y \cdot 1 - x \cdot \frac{dy}{dx}}{y^2}$$

**Step 3**: Substitute $\frac{dy}{dx} = -\frac{x}{y}$
$$= -\frac{y - x \cdot (-\frac{x}{y})}{y^2} = -\frac{y + \frac{x^2}{y}}{y^2}$$
$$= -\frac{\frac{y^2 + x^2}{y}}{y^2} = -\frac{y^2 + x^2}{y^3}$$

Since $x^2 + y^2 = 25$:
$$\frac{d^2y}{dx^2} = -\frac{25}{y^3}$$

---

## 🎯 Selecting Differentiation Procedures

### Decision Flowchart

```
Is y explicit (solved for y)?
├─ YES: Use basic rules
└─ NO: Use implicit differentiation

Is it a composite function?
├─ YES: Use chain rule
└─ NO: Check for products/quotients

Is it a product of functions?
├─ YES: Use product rule
└─ NO: Continue

Is it a quotient of functions?
├─ YES: Use quotient rule
└─ NO: Use basic rules
```

### Quick Reference

| Situation | Rule to Use |
|-----------|-------------|
| $f(g(x))$ | Chain rule |
| $f \cdot g$ | Product rule |
| $\frac{f}{g}$ | Quotient rule |
| $x$ and $y$ mixed | Implicit |
| $f^{-1}$ | Inverse function rule |
| $\arcsin, \arctan$ | Inverse trig formulas |

---

## 🔧 Combined Examples

### Example 1: Multiple Rules

Find $\frac{d}{dx}[x^2 \sin(3x)]$

**Rules needed**: Product + Chain

$$= x^2 \cdot \cos(3x) \cdot 3 + \sin(3x) \cdot 2x$$
$$= 3x^2\cos(3x) + 2x\sin(3x)$$

### Example 2: Quotient + Chain

Find $\frac{d}{dx}\left[\frac{e^{2x}}{x+1}\right]$

$$= \frac{(x+1) \cdot 2e^{2x} - e^{2x} \cdot 1}{(x+1)^2}$$
$$= \frac{e^{2x}(2x+2-1)}{(x+1)^2} = \frac{e^{2x}(2x+1)}{(x+1)^2}$$

### Example 3: Implicit + Chain

$\sin(xy) = y$

$$\cos(xy) \cdot \left(y + x\frac{dy}{dx}\right) = \frac{dy}{dx}$$
$$y\cos(xy) + x\cos(xy)\frac{dy}{dx} = \frac{dy}{dx}$$
$$y\cos(xy) = \frac{dy}{dx} - x\cos(xy)\frac{dy}{dx}$$
$$y\cos(xy) = \frac{dy}{dx}(1 - x\cos(xy))$$
$$\frac{dy}{dx} = \frac{y\cos(xy)}{1 - x\cos(xy)}$$

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| Second derivative | Derivative of the derivative |
| Sin/Cos pattern | Repeats every 4 derivatives |
| $e^{ax}$ pattern | $f^{(n)} = a^n e^{ax}$ |
| Procedure selection | Identify structure first |

:::GUIDE:::
unit::=Unit 3
title::=Unit 3 AP Exam Strategies
desc::=Master key concepts and problem-solving strategies for Unit 3 of the AP Calculus AB exam
diff::=Medium
time::=30 minutes
tags::=AP exam, strategies, Unit 3
content::=

# 📝 Unit 3 AP Exam Strategies

## 📊 Unit Weight

| Exam Section | Unit 3 Weight |
|--------------|---------------|
| Multiple Choice | ~9-13% |
| Free Response | Very common |

---

## 🔑 Must-Know Formulas

### Chain Rule

$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

### Common Chain Rule Forms

| Form | Derivative |
|------|------------|
| $(u)^n$ | $n(u)^{n-1} \cdot u'$ |
| $\sin(u)$ | $\cos(u) \cdot u'$ |
| $\cos(u)$ | $-\sin(u) \cdot u'$ |
| $e^u$ | $e^u \cdot u'$ |
| $\ln(u)$ | $\frac{u'}{u}$ |

### Implicit Differentiation

When differentiating $y$: multiply by $\frac{dy}{dx}$

### Inverse Function

$$(f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}$$

### Inverse Trig

| Function | Derivative |
|----------|------------|
| $\arcsin u$ | $\frac{u'}{\sqrt{1-u^2}}$ |
| $\arccos u$ | $-\frac{u'}{\sqrt{1-u^2}}$ |
| $\arctan u$ | $\frac{u'}{1+u^2}$ |

---

## ✍️ Sample MC Questions

### Question 1

Find $\frac{d}{dx}[(2x+1)^4]$

(A) $4(2x+1)^3$
(B) $8(2x+1)^3$
(C) $(2x+1)^3$
(D) $4(2x+1)^4$

**Solution**: Chain rule
$$= 4(2x+1)^3 \cdot 2 = 8(2x+1)^3$$

**Answer: (B)**

### Question 2

If $x^2 + y^2 = 16$, find $\frac{dy}{dx}$

(A) $\frac{x}{y}$
(B) $-\frac{x}{y}$
(C) $-\frac{y}{x}$
(D) $\frac{2x}{2y}$

**Solution**: Implicit differentiation
$$2x + 2y\frac{dy}{dx} = 0$$
$$\frac{dy}{dx} = -\frac{x}{y}$$

**Answer: (B)**

### Question 3

Find $\frac{d}{dx}[\arctan(3x)]$

(A) $\frac{3}{1+9x^2}$
(B) $\frac{1}{1+9x^2}$
(C) $\frac{3}{1+3x^2}$
(D) $\frac{1}{\sqrt{1-9x^2}}$

**Solution**: 
$$= \frac{3}{1+(3x)^2} = \frac{3}{1+9x^2}$$

**Answer: (A)**

### Question 4

If $f(5) = 2$ and $f'(5) = 7$, find $(f^{-1})'(2)$

(A) $\frac{1}{7}$
(B) $7$
(C) $\frac{1}{2}$
(D) $\frac{2}{7}$

**Solution**: Since $f(5) = 2$, we have $f^{-1}(2) = 5$

$$(f^{-1})'(2) = \frac{1}{f'(f^{-1}(2))} = \frac{1}{f'(5)} = \frac{1}{7}$$

**Answer: (A)**

---

## ✍️ Sample FR Question

**Question**: Let $f(x) = \sin(x^2)$

(a) Find $f'(x)$.

(b) Find $f''(x)$.

(c) Find the equation of the tangent line to $y = f(x)$ at $x = \sqrt{\pi}$.

**Solution**:

(a) Using chain rule:
$$f'(x) = \cos(x^2) \cdot 2x = 2x\cos(x^2)$$

(b) Using product rule and chain rule:
$$f''(x) = 2\cos(x^2) + 2x \cdot (-\sin(x^2)) \cdot 2x$$
$$= 2\cos(x^2) - 4x^2\sin(x^2)$$

(c) At $x = \sqrt{\pi}$:
- $f(\sqrt{\pi}) = \sin(\pi) = 0$
- $f'(\sqrt{\pi}) = 2\sqrt{\pi}\cos(\pi) = 2\sqrt{\pi}(-1) = -2\sqrt{\pi}$

Tangent line:
$$y - 0 = -2\sqrt{\pi}(x - \sqrt{\pi})$$
$$y = -2\sqrt{\pi}x + 2\pi$$

---

## ⚠️ Common Mistakes

### Chain Rule Errors

| Mistake | Correct |
|---------|---------|
| Forgetting inner derivative | Always multiply by $u'$ |
| $(3x)^2 \to 6x$ | $(3x)^2 \to 2(3x) \cdot 3 = 18x$ |

### Implicit Differentiation Errors

| Mistake | Correct |
|---------|---------|
| Forgetting $\frac{dy}{dx}$ on $y$ terms | Every $y$ needs it |
| Not collecting $\frac{dy}{dx}$ terms | Factor it out |

### Inverse Function Errors

| Mistake | Correct |
|---------|---------|
| Wrong formula direction | $(f^{-1})'(b) = \frac{1}{f'(a)}$ where $f(a) = b$ |
| Confusing $f^{-1}$ with $\frac{1}{f}$ | They're different! |

---

## 📋 Unit 3 Checklist

### Before the Exam

✅ Can apply chain rule with polynomials
✅ Can apply chain rule with trig functions
✅ Can apply chain rule with exponentials and logs
✅ Can do implicit differentiation
✅ Can find tangent lines for implicit curves
✅ Know inverse function derivative formula
✅ Know derivatives of arcsin, arccos, arctan
✅ Can find second derivatives
✅ Can recognize patterns in higher derivatives

---

## 🔗 Connections

### Unit 3 → Unit 4

| Unit 3 | Application in Unit 4 |
|--------|----------------------|
| Implicit differentiation | Related rates |
| Chain rule | Related rates |
| All differentiation | Contextual problems |

### Unit 3 → Unit 5

| Unit 3 | Application in Unit 5 |
|--------|----------------------|
| Second derivative | Concavity |
| $f''(x)$ | Inflection points |
| Differentiation | Optimization |

**Good luck! 🍀**
