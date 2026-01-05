# AP Calculus AB Unit 5: Analytical Applications of Differentiation Study Guides

:::GUIDE:::
unit::=Unit 5
title::=📐 Unit 5: Analytical Applications of Differentiation Complete Guide
desc::=Understand the MVT, Rolle's Theorem, and how to find extreme values of functions
diff::=Hard
time::=50 minutes
tags::=MVT, extreme values, critical points, Rolle's Theorem
content::=

# 📐 Mean Value Theorem and Extreme Values

## 📊 The Extreme Value Theorem

### Statement

If $f$ is **continuous** on $[a, b]$, then $f$ attains both an **absolute maximum** and an **absolute minimum** on $[a, b]$.

### Visual

```
     │ absolute
     │ max
     │   ●
     │  / ╲
     │ /   ╲
     │●     ╲●
     ─┼───────┼─
     a        b
     │
   absolute
     min
```

---

## 🔍 Types of Extrema

### Definitions

| Type | Definition |
|------|------------|
| **Absolute (Global) Max** | Largest value on entire domain |
| **Absolute (Global) Min** | Smallest value on entire domain |
| **Local (Relative) Max** | Largest in neighborhood |
| **Local (Relative) Min** | Smallest in neighborhood |

### Where Can Extrema Occur?

1. **Critical points** (where $f'(x) = 0$ or $f'(x)$ undefined)
2. **Endpoints** (for closed intervals)

---

## 🎯 Critical Points

### Definition

$c$ is a critical point if:
- $f'(c) = 0$, OR
- $f'(c)$ does not exist (and $f(c)$ exists)

### Finding Critical Points

1. Find $f'(x)$
2. Set $f'(x) = 0$ and solve
3. Find where $f'(x)$ is undefined
4. Check that $f(c)$ exists at each point

### Example

Find critical points of $f(x) = x^3 - 3x^2 - 9x + 5$

$f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x-3)(x+1)$

Set $f'(x) = 0$: $x = 3$ or $x = -1$

Critical points: $x = -1, 3$

---

## 📋 The Closed Interval Method

### Finding Absolute Extrema on $[a, b]$

1. Find all critical points in $(a, b)$
2. Evaluate $f$ at critical points
3. Evaluate $f$ at endpoints $a$ and $b$
4. Compare: largest is absolute max, smallest is absolute min

### Example

Find absolute max and min of $f(x) = x^3 - 3x^2$ on $[-1, 4]$

**Step 1**: Find critical points
$f'(x) = 3x^2 - 6x = 3x(x-2) = 0$
$x = 0$ or $x = 2$

**Step 2 & 3**: Evaluate

| $x$ | $f(x)$ |
|-----|--------|
| $-1$ | $(-1)^3 - 3(-1)^2 = -1 - 3 = -4$ |
| $0$ | $0$ |
| $2$ | $8 - 12 = -4$ |
| $4$ | $64 - 48 = 16$ |

**Step 4**: Compare
- Absolute max: $16$ at $x = 4$
- Absolute min: $-4$ at $x = -1$ and $x = 2$

---

## 📐 Rolle's Theorem

### Statement

If:
1. $f$ is continuous on $[a, b]$
2. $f$ is differentiable on $(a, b)$
3. $f(a) = f(b)$

Then there exists $c$ in $(a, b)$ such that $f'(c) = 0$.

### Interpretation

If endpoints have the same height, there's a horizontal tangent somewhere in between!

```
        ●──────●
       /        ╲
      /          ╲
     ●     ●      ●
         f'=0
     a           b
```

---

## 📐 Mean Value Theorem (MVT)

### Statement

If:
1. $f$ is continuous on $[a, b]$
2. $f$ is differentiable on $(a, b)$

Then there exists $c$ in $(a, b)$ such that:

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

### Interpretation

There's a point where the **instantaneous rate equals the average rate**!

The tangent line is parallel to the secant line.

```
     │        /● b
     │      /./
     │    /./ secant
     │  ● / ← tangent parallel to secant
     │  /
     │ /
     ●/
     a
```

---

## 🔧 MVT Examples

### Example 1

Verify MVT for $f(x) = x^2$ on $[1, 3]$

**Check conditions**:
- $f$ is a polynomial → continuous and differentiable ✓

**Apply MVT**:
$$f'(c) = \frac{f(3) - f(1)}{3 - 1} = \frac{9 - 1}{2} = 4$$

Find $c$: $f'(x) = 2x$
$$2c = 4 \implies c = 2$$

Since $2 \in (1, 3)$, MVT is verified ✓

### Example 2

Show that $x^3 + x + 1 = 0$ has exactly one real root.

**Existence**: Let $f(x) = x^3 + x + 1$
- $f(-1) = -1 - 1 + 1 = -1 < 0$
- $f(0) = 1 > 0$

By IVT, there's at least one root in $(-1, 0)$.

**Uniqueness**: $f'(x) = 3x^2 + 1 > 0$ for all $x$

So $f$ is always increasing → can cross x-axis only once!

---

## ⚠️ Common Mistakes

| Mistake | Correction |
|---------|------------|
| Forgetting endpoints | Always check endpoints on closed intervals |
| Critical points = extrema | Critical points are only candidates |
| Not checking conditions | MVT requires continuity AND differentiability |

---

## 🎯 AP Exam Tips

| Concept | Key Point |
|---------|-----------|
| Critical points | Where $f' = 0$ or undefined |
| Closed interval | Check critical points AND endpoints |
| MVT | $f'(c) = \frac{f(b) - f(a)}{b - a}$ |
| Rolle's | Special case of MVT when $f(a) = f(b)$ |

:::GUIDE:::
unit::=Unit 5
title::=The First Derivative Test and Increasing/Decreasing
desc::=Use the first derivative to determine where functions increase, decrease, and have local extrema
diff::=Medium
time::=40 minutes
tags::=first derivative test, increasing, decreasing, local extrema
content::=

# 📈 First Derivative Test

## 📊 Increasing and Decreasing Functions

### The Connection to Derivatives

| $f'(x)$ | $f(x)$ |
|---------|--------|
| $f'(x) > 0$ | Increasing ↗️ |
| $f'(x) < 0$ | Decreasing ↘️ |
| $f'(x) = 0$ | Constant or critical point |

### Why?

- Positive derivative = positive slope = going up
- Negative derivative = negative slope = going down

---

## 📋 Finding Intervals of Increase/Decrease

### Process

1. Find $f'(x)$
2. Find critical points (where $f'(x) = 0$ or undefined)
3. Create a sign chart for $f'(x)$
4. Determine where $f' > 0$ (increasing) and $f' < 0$ (decreasing)

### Example

Find where $f(x) = x^3 - 12x$ is increasing and decreasing.

**Step 1**: $f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x-2)(x+2)$

**Step 2**: Critical points: $x = -2, 2$

**Step 3**: Sign chart

| Interval | Test point | $f'(x)$ | Sign |
|----------|------------|---------|------|
| $(-\infty, -2)$ | $x = -3$ | $3(9-4) = 15$ | + |
| $(-2, 2)$ | $x = 0$ | $3(0-4) = -12$ | − |
| $(2, \infty)$ | $x = 3$ | $3(9-4) = 15$ | + |

**Step 4**: Result
- Increasing on $(-\infty, -2)$ and $(2, \infty)$
- Decreasing on $(-2, 2)$

---

## 🎯 The First Derivative Test

### For Local Extrema

At a critical point $c$:

| Sign change of $f'$ | Type of extremum |
|---------------------|------------------|
| $+$ to $-$ | Local maximum |
| $-$ to $+$ | Local minimum |
| No sign change | Not an extremum |

### Visual

```
Local Maximum:         Local Minimum:
     ↗ ● ↘                  ↘ ● ↗
    /   ╲                    ╲   /
   /     ╲                    ╲ /
f' > 0  f' < 0           f' < 0  f' > 0
```

---

## 🔧 Complete Example

### Problem

Analyze $f(x) = x^4 - 4x^3$

**Step 1**: Find $f'(x)$
$$f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$$

**Step 2**: Find critical points
$4x^2(x-3) = 0$
$x = 0$ or $x = 3$

**Step 3**: Sign chart

| Interval | $4x^2$ | $(x-3)$ | $f'(x)$ |
|----------|--------|---------|---------|
| $(-\infty, 0)$ | + | − | − |
| $(0, 3)$ | + | − | − |
| $(3, \infty)$ | + | + | + |

**Step 4**: Apply First Derivative Test

At $x = 0$: No sign change (−, −) → NOT an extremum

At $x = 3$: Sign changes from − to + → **Local minimum**

**Summary**:
- Decreasing on $(-\infty, 3)$
- Increasing on $(3, \infty)$
- Local min at $x = 3$, $f(3) = 81 - 108 = -27$

---

## 📊 Sign Chart Template

### Building a Sign Chart

```
            f'(x) = (x+2)(x-1)²(x-4)
                   
    ────●─────●─────────●────
       -2     1         4
        
Test: x = -3: (−)(+)(−) = +
      x = 0:  (+)(+)(−) = −
      x = 2:  (+)(+)(−) = −
      x = 5:  (+)(+)(+) = +

       +   −    −    +
    ───●───●────●────●───
      -2   1    4
       
Local max at x = -2
Local min at x = 4
```

---

## ⚠️ Special Cases

### When $f'(x)$ DNE

Check for cusps, corners, or vertical tangents.

### When $f'(x)$ Doesn't Change Sign

| Situation | Example |
|-----------|---------|
| $f'(x) = x^2$ | No sign change at $x = 0$ |
| Horizontal inflection | The point is not an extremum |

---

## 🎯 AP Exam Tips

| Concept | Remember |
|---------|----------|
| $f' > 0$ | $f$ increasing |
| $f' < 0$ | $f$ decreasing |
| + to − | Local max |
| − to + | Local min |
| No change | Not an extremum |

:::GUIDE:::
unit::=Unit 5
title::=The Second Derivative Test and Concavity
desc::=Use the second derivative to determine concavity, inflection points, and confirm extrema
diff::=Medium
time::=45 minutes
tags::=second derivative test, concavity, inflection points
content::=

# 📉 Second Derivative and Concavity

## 📊 What Is Concavity?

### Concave Up vs. Concave Down

| Concavity | Shape | $f''(x)$ | Slope |
|-----------|-------|----------|-------|
| Concave up | ∪ (cup) | $f''(x) > 0$ | Increasing |
| Concave down | ∩ (cap) | $f''(x) < 0$ | Decreasing |

### Visual

```
Concave Up (f'' > 0):    Concave Down (f'' < 0):
       /                        ╲    /
      /                          ╲  /
     /                            ╲/
    ∪ holds water               ∩ spills water
```

### Memory Aid

- Concave **up** = "holds water" ☕
- Concave **down** = "spills water" 🌧️

---

## 📐 The Second Derivative

### What It Tells Us

| $f(x)$ | $f'(x)$ | $f''(x)$ |
|--------|---------|----------|
| Position | Velocity | Acceleration |
| Value | Rate of change | Rate of rate |
| Height | Slope | Concavity |

---

## 📋 Finding Concavity

### Process

1. Find $f''(x)$
2. Find where $f''(x) = 0$ or undefined
3. Create sign chart for $f''(x)$
4. Determine concavity on each interval

### Example

Find concavity of $f(x) = x^3 - 6x^2 + 9x + 1$

**Step 1**: 
$f'(x) = 3x^2 - 12x + 9$
$f''(x) = 6x - 12 = 6(x - 2)$

**Step 2**: $f''(x) = 0$ when $x = 2$

**Step 3**: Sign chart

| Interval | $f''(x)$ | Concavity |
|----------|----------|-----------|
| $(-\infty, 2)$ | − | Concave down |
| $(2, \infty)$ | + | Concave up |

---

## 🔄 Inflection Points

### Definition

An **inflection point** is where concavity changes.

### Requirements

1. $f''(x) = 0$ or undefined at the point
2. Concavity actually changes (sign of $f''$ changes)
3. The point must be in the domain of $f$

### From Previous Example

At $x = 2$: Concavity changes from down to up

$f(2) = 8 - 24 + 18 + 1 = 3$

**Inflection point**: $(2, 3)$

---

## 📐 The Second Derivative Test

### For Classifying Critical Points

At a critical point $c$ (where $f'(c) = 0$):

| $f''(c)$ | Conclusion |
|----------|------------|
| $f''(c) > 0$ | Local minimum |
| $f''(c) < 0$ | Local maximum |
| $f''(c) = 0$ | Inconclusive (use first derivative test) |

### Why Does It Work?

- $f''(c) > 0$: Concave up = "valley" = minimum
- $f''(c) < 0$: Concave down = "hill" = maximum

---

## 🔧 Second Derivative Test Example

### Problem

Find and classify critical points of $f(x) = x^4 - 8x^2 + 3$

**Step 1**: Find $f'(x)$ and critical points
$$f'(x) = 4x^3 - 16x = 4x(x^2 - 4) = 4x(x-2)(x+2)$$

Critical points: $x = -2, 0, 2$

**Step 2**: Find $f''(x)$
$$f''(x) = 12x^2 - 16$$

**Step 3**: Evaluate $f''$ at critical points

| $c$ | $f''(c)$ | Conclusion |
|-----|----------|------------|
| $-2$ | $12(4) - 16 = 32 > 0$ | Local min |
| $0$ | $12(0) - 16 = -16 < 0$ | Local max |
| $2$ | $12(4) - 16 = 32 > 0$ | Local min |

**Step 4**: Find $y$-values
- $f(-2) = 16 - 32 + 3 = -13$ → Local min at $(-2, -13)$
- $f(0) = 3$ → Local max at $(0, 3)$
- $f(2) = 16 - 32 + 3 = -13$ → Local min at $(2, -13)$

---

## 📊 Complete Analysis Template

### Full Curve Sketch Process

1. **Domain**: Where is $f$ defined?
2. **Intercepts**: $x$ and $y$ intercepts
3. **Symmetry**: Even, odd, or neither
4. **Critical points**: Where $f' = 0$ or undefined
5. **Increasing/Decreasing**: Sign of $f'$
6. **Local extrema**: First or second derivative test
7. **Concavity**: Sign of $f''$
8. **Inflection points**: Where $f''$ changes sign
9. **Asymptotes**: Vertical, horizontal, or slant

---

## ⚠️ When Second Derivative Test Fails

### $f''(c) = 0$ at Critical Point

Must use **First Derivative Test** instead!

### Example: $f(x) = x^4$

$f'(x) = 4x^3 = 0$ at $x = 0$
$f''(x) = 12x^2$
$f''(0) = 0$ → Inconclusive!

First Derivative Test: $f'$ changes from − to + at $x = 0$
→ Local minimum at $(0, 0)$

---

## 🎯 AP Exam Tips

| Test | Use When | Result |
|------|----------|--------|
| First Derivative | Finding extrema | Sign change = extremum |
| Second Derivative | Quick check at critical point | $f'' > 0$: min, $f'' < 0$: max |
| Inflection | Finding shape changes | Where $f''$ changes sign |

:::GUIDE:::
unit::=Unit 5
title::=Optimization Problems
desc::=Use derivatives to find maximum and minimum values in real-world applications
diff::=Hard
time::=50 minutes
tags::=optimization, max, min, applied problems
content::=

# 🎯 Optimization Problems

## 📐 What Is Optimization?

Finding the **best** (maximum or minimum) value! 🏆

### Real-World Applications

| Find the... | Examples |
|-------------|----------|
| Maximum | Profit, area, volume, efficiency |
| Minimum | Cost, distance, time, material |

---

## 📋 Optimization Strategy

### Step-by-Step Process

1. **Understand** the problem (draw a picture!)
2. **Identify** the quantity to optimize (objective function)
3. **Write** the objective function in terms of variables
4. **Express** in terms of ONE variable (use constraints)
5. **Find domain** of the objective function
6. **Differentiate** and find critical points
7. **Determine** if critical point is max or min
8. **Answer** the question asked

---

## 🔧 Classic Example: Box Problem

### Problem

You have 1200 cm² of cardboard. Make an open-top box with maximum volume by cutting squares from corners of a rectangular piece. If the base is square, find the dimensions.

### Solution

**Step 1**: Draw picture
```
 ┌─────────────────┐
 │  ●     ●     ●  │
 │                 │
 │  ●           ●  │
 │                 │
 │  ●     ●     ●  │
 └─────────────────┘
     Cut squares from corners
     Fold up sides
```

Let $x$ = side of base, $h$ = height

**Step 2**: Objective = Volume
$$V = x^2 h$$

**Step 3**: Constraint (surface area = 1200)
$$x^2 + 4xh = 1200$$

Solve for $h$:
$$h = \frac{1200 - x^2}{4x}$$

**Step 4**: Substitute into $V$
$$V = x^2 \cdot \frac{1200 - x^2}{4x} = \frac{x(1200 - x^2)}{4} = \frac{1200x - x^3}{4}$$

**Step 5**: Domain: $x > 0$ and $h > 0$
From constraint: $x^2 < 1200$, so $0 < x < 20\sqrt{3}$

**Step 6**: Find critical points
$$V' = \frac{1200 - 3x^2}{4} = 0$$
$$1200 = 3x^2$$
$$x^2 = 400$$
$$x = 20$$ (positive only)

**Step 7**: Verify maximum
$V'' = \frac{-6x}{4} = \frac{-3x}{2}$
$V''(20) = -30 < 0$ → Maximum ✓

**Step 8**: Find dimensions
$x = 20$ cm
$h = \frac{1200 - 400}{80} = \frac{800}{80} = 10$ cm

**Answer**: Base is 20 cm × 20 cm, height is 10 cm

---

## 🔧 Classic Example: Distance

### Problem

Find the point on $y = x^2$ closest to $(0, 1)$.

### Solution

**Objective**: Minimize distance (or distance²)
$$D^2 = (x - 0)^2 + (y - 1)^2 = x^2 + (y - 1)^2$$

**Constraint**: Point is on $y = x^2$

**Substitute**:
$$D^2 = x^2 + (x^2 - 1)^2 = x^2 + x^4 - 2x^2 + 1 = x^4 - x^2 + 1$$

**Differentiate**:
$$\frac{d(D^2)}{dx} = 4x^3 - 2x = 2x(2x^2 - 1) = 0$$

**Critical points**: $x = 0$ or $x = \pm\frac{1}{\sqrt{2}}$

**Second derivative test**:
$\frac{d^2(D^2)}{dx^2} = 12x^2 - 2$

At $x = 0$: $-2 < 0$ → Local max (not what we want)
At $x = \pm\frac{1}{\sqrt{2}}$: $12(\frac{1}{2}) - 2 = 4 > 0$ → Local min ✓

**Answer**: Points $\left(\pm\frac{1}{\sqrt{2}}, \frac{1}{2}\right)$

---

## 🔧 Classic Example: Fencing

### Problem

A farmer has 400 ft of fencing. One side borders a river (no fence needed). Find dimensions for maximum area.

### Solution

```
River
─────────────────
│               │
y               y
│               │
└───────x───────┘
```

**Constraint**: $2y + x = 400$ → $x = 400 - 2y$

**Objective**: $A = xy = y(400 - 2y) = 400y - 2y^2$

**Differentiate**: $A' = 400 - 4y = 0$
$y = 100$

**Check**: $A'' = -4 < 0$ → Maximum ✓

**Dimensions**: $y = 100$ ft, $x = 400 - 200 = 200$ ft

**Answer**: 100 ft × 200 ft, with 200 ft side along river

---

## 📊 Common Optimization Formulas

### Geometry

| Shape | Perimeter/Surface | Area/Volume |
|-------|-------------------|-------------|
| Rectangle | $P = 2l + 2w$ | $A = lw$ |
| Circle | $C = 2\pi r$ | $A = \pi r^2$ |
| Box (open) | $S = lw + 2lh + 2wh$ | $V = lwh$ |
| Box (closed) | $S = 2lw + 2lh + 2wh$ | $V = lwh$ |
| Cylinder | $S = 2\pi r^2 + 2\pi rh$ | $V = \pi r^2 h$ |
| Cone | $S = \pi r^2 + \pi rs$ | $V = \frac{1}{3}\pi r^2 h$ |

---

## ⚠️ Common Mistakes

| Mistake | Correction |
|---------|------------|
| Not finding domain | Always determine valid range |
| Forgetting constraint | Use constraint to get one variable |
| Not answering question | Re-read what's asked (dimensions? value?) |
| Assuming endpoint is answer | Check critical points AND endpoints |

---

## 🎯 AP Exam Tips

| Step | Key Action |
|------|------------|
| Setup | Draw picture, define variables |
| Objective | What to maximize/minimize |
| Constraint | Relationship between variables |
| Reduce | Get one variable |
| Solve | Find critical points |
| Verify | Confirm max/min (2nd derivative or endpoints) |

:::GUIDE:::
unit::=Unit 5
title::=Unit 5 AP Exam Strategies
desc::=Master problem-solving strategies for analytical applications of differentiation
diff::=Medium
time::=30 minutes
tags::=AP exam, strategies, Unit 5
content::=

# 📝 Unit 5 AP Exam Strategies

## 📊 Unit Weight

| Exam Section | Unit 5 Weight |
|--------------|---------------|
| Multiple Choice | ~15-18% |
| Free Response | Very common |

Unit 5 is one of the **most heavily tested** units! 🎯

---

## 🔑 Must-Know Concepts

### Critical Points

$$f'(x) = 0 \text{ or } f'(x) \text{ undefined}$$

### First Derivative Test

| $f'$ sign change | Result |
|------------------|--------|
| + to − | Local max |
| − to + | Local min |
| No change | Not extremum |

### Second Derivative Test

| At critical point $c$ | If $f''(c)$ | Then |
|----------------------|-------------|------|
| $f'(c) = 0$ | $> 0$ | Local min |
| $f'(c) = 0$ | $< 0$ | Local max |
| $f'(c) = 0$ | $= 0$ | Inconclusive |

### Concavity

| $f''(x)$ | Concavity |
|----------|-----------|
| $> 0$ | Concave up |
| $< 0$ | Concave down |

### Mean Value Theorem

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

for some $c \in (a, b)$

---

## ✍️ Sample MC Questions

### Question 1

The function $f(x) = x^3 - 6x^2 + 9x + 2$ has a local maximum at:

(A) $x = 1$
(B) $x = 2$
(C) $x = 3$
(D) $x = 0$

**Solution**:
$f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3) = 0$

Critical points: $x = 1, 3$

$f''(x) = 6x - 12$
$f''(1) = -6 < 0$ → Local max
$f''(3) = 6 > 0$ → Local min

**Answer: (A)**

### Question 2

On what interval is $f(x) = x^4 - 4x^3$ concave up?

(A) $(-\infty, 0)$
(B) $(0, 2)$
(C) $(2, \infty)$
(D) $(-\infty, 0) \cup (2, \infty)$

**Solution**:
$f'(x) = 4x^3 - 12x^2$
$f''(x) = 12x^2 - 24x = 12x(x-2)$

$f'' > 0$ when $x < 0$ or $x > 2$

**Answer: (D)**

### Question 3

The function $f$ is continuous on $[2, 5]$ and $f(2) = 4$, $f(5) = 1$. If $f$ is differentiable on $(2, 5)$, then by the MVT, there exists $c$ in $(2, 5)$ such that $f'(c) = $

(A) $-1$
(B) $1$
(C) $-3$
(D) $3$

**Solution**:
$$f'(c) = \frac{f(5) - f(2)}{5 - 2} = \frac{1 - 4}{3} = -1$$

**Answer: (A)**

### Question 4

What is the maximum area of a rectangle inscribed in a semicircle of radius 4?

(A) $8$
(B) $16$
(C) $32$
(D) $16\pi$

**Solution**:
If corner at $(x, y)$ on semicircle, then $y = \sqrt{16 - x^2}$

Area = $2x \cdot y = 2x\sqrt{16 - x^2}$

$\frac{dA}{dx} = 2\sqrt{16-x^2} + 2x \cdot \frac{-x}{\sqrt{16-x^2}} = 0$

$2(16 - x^2) = 2x^2$
$32 = 4x^2$
$x = 2\sqrt{2}$

$y = \sqrt{16 - 8} = \sqrt{8} = 2\sqrt{2}$

$A = 2(2\sqrt{2})(2\sqrt{2}) = 16$

**Answer: (B)**

---

## ✍️ Sample FR Question

**Question**: Let $f(x) = xe^{-x}$ for $x \geq 0$.

(a) Find all critical points of $f$ and determine whether each is a local maximum, local minimum, or neither.

(b) Find all inflection points of $f$.

(c) Find the absolute maximum value of $f$ on $[0, \infty)$.

**Solution**:

(a) $f'(x) = e^{-x} + x(-e^{-x}) = e^{-x}(1-x)$

$f'(x) = 0$ when $x = 1$ (since $e^{-x} \neq 0$)

$f''(x) = -e^{-x}(1-x) + e^{-x}(-1) = e^{-x}(x - 2)$

$f''(1) = e^{-1}(-1) < 0$ → **Local maximum at $x = 1$**

(b) $f''(x) = e^{-x}(x-2) = 0$ when $x = 2$

Sign of $f''$:
- $x < 2$: $f'' < 0$ (concave down)
- $x > 2$: $f'' > 0$ (concave up)

**Inflection point at $x = 2$**: $(2, 2e^{-2})$

(c) Check critical point and behavior at boundary:
- $f(0) = 0$
- $f(1) = e^{-1} = \frac{1}{e}$
- As $x \to \infty$, $f(x) \to 0$

**Absolute maximum: $\frac{1}{e}$ at $x = 1$**

---

## ⚠️ Common Mistakes

| Topic | Mistake | Correction |
|-------|---------|------------|
| Critical points | Setting $f(x) = 0$ | Set $f'(x) = 0$ |
| Extrema | Critical point = extremum | Must verify with test |
| Concavity | Confusing with increasing | Use $f''$, not $f'$ |
| Optimization | Forgetting constraints | Always use constraint to reduce variables |

---

## 📊 Justification Language

### For Free Response

| Claim | Justification |
|-------|---------------|
| $f$ has local max at $c$ | "$f'$ changes from + to − at $c$" or "$f'(c) = 0$ and $f''(c) < 0$" |
| $f$ is increasing on $(a,b)$ | "$f'(x) > 0$ on $(a,b)$" |
| $f$ is concave up on $(a,b)$ | "$f''(x) > 0$ on $(a,b)$" |
| $(c, f(c))$ is inflection | "$f''$ changes sign at $c$" |

---

## 📋 Unit 5 Checklist

### Before the Exam

✅ Can find critical points
✅ Know First Derivative Test
✅ Know Second Derivative Test
✅ Can find intervals of increase/decrease
✅ Can find concavity and inflection points
✅ Understand and apply MVT
✅ Can solve optimization problems
✅ Know Extreme Value Theorem
✅ Can analyze complete behavior of a function

---

## 🔗 Connections

### Unit 5 → Integration

| Unit 5 Concept | Used In Integration |
|----------------|---------------------|
| $f$ increasing | Area accumulation |
| Critical points | Bounds of integration |
| Concavity | Error in approximations |

**Good luck! 🍀**
