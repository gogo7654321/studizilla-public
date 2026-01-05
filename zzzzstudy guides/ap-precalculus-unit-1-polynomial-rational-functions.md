:::GUIDE:::
unit::=1
title::=📊 Unit 1: Polynomial and Rational Functions
desc::=Master polynomial behavior, zeros, and rational function analysis
diff::=Medium
time::=50 min
tags::=precalculus,polynomials,rational-functions,zeros
content::=

# 📊 Unit 1: Polynomial and Rational Functions

Master the foundations of polynomial and rational functions—essential building blocks for calculus and advanced mathematics.

---

## 📚 Section 1: Polynomial Functions and Terminology

### What is a Polynomial Function?

A **polynomial function** is a function of the form:

$$P(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_2x^2 + a_1x + a_0$$

Where:
- $a_n, a_{n-1}, \ldots, a_0$ are real number coefficients
- $a_n \neq 0$ (leading coefficient)
- $n$ is a non-negative integer (degree)
- $x$ is the variable

### Key Terminology

| Term | Definition | Example |
|------|------------|---------|
| **Degree** | Highest power of x | $x^4 + 2x - 1$ has degree 4 |
| **Leading Coefficient** | Coefficient of highest degree term | In $3x^5 - x^2$, it's 3 |
| **Leading Term** | Term with highest degree | In $3x^5 - x^2$, it's $3x^5$ |
| **Constant Term** | Term without variable | In $x^2 + 5$, it's 5 |
| **Standard Form** | Terms in descending degree order | $4x^3 + 2x^2 - x + 7$ |

### Classifying Polynomials by Degree

| Degree | Name | General Form | Example |
|--------|------|--------------|---------|
| 0 | Constant | $a_0$ | $f(x) = 5$ |
| 1 | Linear | $ax + b$ | $f(x) = 2x - 3$ |
| 2 | Quadratic | $ax^2 + bx + c$ | $f(x) = x^2 - 4x + 1$ |
| 3 | Cubic | $ax^3 + bx^2 + cx + d$ | $f(x) = x^3 - 2x$ |
| 4 | Quartic | $ax^4 + \cdots$ | $f(x) = x^4 - 1$ |
| 5 | Quintic | $ax^5 + \cdots$ | $f(x) = x^5 + x$ |

### Classifying by Number of Terms

| Number of Terms | Name | Example |
|-----------------|------|---------|
| 1 | Monomial | $5x^3$ |
| 2 | Binomial | $x^2 - 9$ |
| 3 | Trinomial | $x^2 + 5x + 6$ |
| 4+ | Polynomial | $x^4 + 2x^3 - x + 1$ |

---

## 📈 Section 2: End Behavior

### Understanding End Behavior

**End behavior** describes what happens to $f(x)$ as $x$ approaches positive or negative infinity.

We write:
- As $x \to +\infty$, $f(x) \to$ ?
- As $x \to -\infty$, $f(x) \to$ ?

### The End Behavior Rules

End behavior depends on TWO factors:
1. **Degree** (odd or even)
2. **Leading coefficient** (positive or negative)

### End Behavior Chart

| Degree | Leading Coefficient | Left End ($x \to -\infty$) | Right End ($x \to +\infty$) | Shape |
|--------|---------------------|---------------------------|----------------------------|-------|
| **Even** | Positive (+) | $f(x) \to +\infty$ | $f(x) \to +\infty$ | ↗ U ↗ |
| **Even** | Negative (−) | $f(x) \to -\infty$ | $f(x) \to -\infty$ | ↘ ∩ ↘ |
| **Odd** | Positive (+) | $f(x) \to -\infty$ | $f(x) \to +\infty$ | ↙ ↗ |
| **Odd** | Negative (−) | $f(x) \to +\infty$ | $f(x) \to -\infty$ | ↖ ↘ |

### Visual Representation

```
Even Degree, Positive Leading:     Even Degree, Negative Leading:
         ↗     ↗                          ↘     ↘
          \   /                            \   /
           \_/                              ‾‾‾
        "U shape"                      "Upside-down U"

Odd Degree, Positive Leading:      Odd Degree, Negative Leading:
              ↗                      ↖
             /                        \
        ____/                          \____
       /                                    \
      ↙                                      ↘
      "Rising"                          "Falling"
```

### Memory Trick

**"Even functions have MATCHING ends, Odd functions have OPPOSITE ends"**

For the leading coefficient:
- **Positive** = Right end goes UP ↗
- **Negative** = Right end goes DOWN ↘

### 💡 Example: Determining End Behavior

**Problem:** Determine the end behavior of $f(x) = -2x^5 + 4x^3 - x + 7$

**Solution:**
1. Identify degree: 5 (odd)
2. Identify leading coefficient: -2 (negative)
3. Apply rules for odd degree, negative leading coefficient:
   - As $x \to -\infty$, $f(x) \to +\infty$
   - As $x \to +\infty$, $f(x) \to -\infty$

**Answer:** Falls to the right, rises to the left

---

## 🎯 Section 3: Zeros, Multiplicity, and X-Intercepts

### What are Zeros?

**Zeros** (also called roots or x-intercepts) are the values of $x$ where $f(x) = 0$.

If $r$ is a zero of polynomial $P(x)$, then:
- $(x - r)$ is a factor of $P(x)$
- The point $(r, 0)$ is on the graph
- $P(r) = 0$

### Finding Zeros

For a polynomial in factored form:

$$P(x) = a(x - r_1)(x - r_2)(x - r_3)\cdots$$

The zeros are $r_1, r_2, r_3, \ldots$

### 💡 Example: Finding Zeros

**Problem:** Find the zeros of $f(x) = (x - 3)(x + 2)(x - 5)$

**Solution:**
Set each factor equal to zero:
- $x - 3 = 0 \Rightarrow x = 3$
- $x + 2 = 0 \Rightarrow x = -2$
- $x - 5 = 0 \Rightarrow x = 5$

**Zeros:** $x = -2, 3, 5$

### Multiplicity

**Multiplicity** is the number of times a factor appears in the polynomial.

$$P(x) = (x - 2)^3(x + 1)^2(x - 4)$$

| Zero | Factor | Multiplicity |
|------|--------|--------------|
| 2 | $(x-2)^3$ | 3 |
| -1 | $(x+1)^2$ | 2 |
| 4 | $(x-4)$ | 1 |

### Multiplicity and Graph Behavior

| Multiplicity | Graph Behavior at Zero | Visual |
|--------------|----------------------|--------|
| **Odd (1, 3, 5, ...)** | Crosses the x-axis | ╱ or ╲ |
| **Even (2, 4, 6, ...)** | Touches and bounces | ∪ or ∩ |

### Detailed Multiplicity Effects

| Multiplicity | Behavior | Description |
|--------------|----------|-------------|
| 1 | Straight cross | Line passes through |
| 2 | Bounce (parabola-like) | Touches, doesn't cross |
| 3 | Flatten and cross | S-curve through point |
| 4 | Flatten and bounce | Very flat touch |

### 💡 Example: Analyzing Multiplicity

**Problem:** Describe the behavior at each zero for $f(x) = (x + 1)^2(x - 3)^3(x - 5)$

**Solution:**

| Zero | Multiplicity | Behavior |
|------|--------------|----------|
| $x = -1$ | 2 (even) | Bounces off x-axis |
| $x = 3$ | 3 (odd) | Crosses x-axis (flattened) |
| $x = 5$ | 1 (odd) | Crosses x-axis (straight) |

### The Fundamental Theorem of Algebra

> A polynomial of degree $n$ has exactly $n$ zeros (counting multiplicity and complex zeros).

**Examples:**
- Degree 3 polynomial → exactly 3 zeros
- Degree 5 polynomial → exactly 5 zeros

---

## ➗ Section 4: Polynomial Division

### Long Division of Polynomials

Polynomial long division works like numerical long division.

### 💡 Example: Long Division

**Problem:** Divide $(2x^3 + 5x^2 - x + 6)$ by $(x + 2)$

**Solution:**
```
                2x² + x  - 3
            ___________________
    x + 2 ) 2x³ + 5x² - x + 6
            2x³ + 4x²
            ---------
                  x² - x
                  x² + 2x
                  --------
                      -3x + 6
                      -3x - 6
                      -------
                           12
```

**Answer:** $2x^2 + x - 3 + \frac{12}{x+2}$

### Division Algorithm

For polynomials $P(x)$ and divisor $D(x)$:

$$P(x) = D(x) \cdot Q(x) + R(x)$$

Where:
- $Q(x)$ = quotient
- $R(x)$ = remainder
- Degree of $R(x)$ < Degree of $D(x)$

### Synthetic Division

**Synthetic division** is a shortcut for dividing by $(x - c)$.

**Steps:**
1. Write coefficients of dividend
2. Write $c$ to the left (note: for $x - c$, use $c$; for $x + c$, use $-c$)
3. Bring down first coefficient
4. Multiply by $c$, add to next coefficient
5. Repeat

### 💡 Example: Synthetic Division

**Problem:** Divide $(x^3 - 4x^2 + 6x - 4)$ by $(x - 2)$

**Solution:**
```
    2 |  1   -4    6   -4
      |       2   -4    4
      |___________________
         1   -2    2    0
```

**Answer:** $x^2 - 2x + 2$ with remainder 0

**Interpretation:** $(x - 2)$ is a factor!

### When to Use Each Method

| Method | Use When |
|--------|----------|
| Long Division | Dividing by any polynomial |
| Synthetic Division | Dividing by $(x - c)$ only |

---

## 📐 Section 5: Remainder Theorem and Factor Theorem

### The Remainder Theorem

> When polynomial $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$.

$$P(x) = (x - c) \cdot Q(x) + P(c)$$

### 💡 Example: Using Remainder Theorem

**Problem:** Find the remainder when $P(x) = x^3 - 2x^2 + 5x - 3$ is divided by $(x - 2)$

**Solution:**
Instead of dividing, evaluate $P(2)$:
$$P(2) = (2)^3 - 2(2)^2 + 5(2) - 3$$
$$= 8 - 8 + 10 - 3 = 7$$

**Remainder:** 7

### The Factor Theorem

> $(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$.

**Connection:** If the remainder is 0, then $(x-c)$ is a factor.

### 💡 Example: Testing Factors

**Problem:** Is $(x + 3)$ a factor of $P(x) = x^3 + 2x^2 - 5x + 12$?

**Solution:**
Test if $P(-3) = 0$:
$$P(-3) = (-3)^3 + 2(-3)^2 - 5(-3) + 12$$
$$= -27 + 18 + 15 + 12 = 18$$

Since $P(-3) = 18 \neq 0$, $(x + 3)$ is **not** a factor.

### Using Factor Theorem to Factor Polynomials

**Strategy:**
1. Find a zero $c$ (by testing values)
2. Divide by $(x - c)$
3. Factor the quotient
4. Repeat until fully factored

### 💡 Example: Complete Factorization

**Problem:** Factor $P(x) = x^3 - 6x^2 + 11x - 6$

**Solution:**

**Step 1:** Test possible rational zeros: $\pm 1, \pm 2, \pm 3, \pm 6$
- $P(1) = 1 - 6 + 11 - 6 = 0$ ✓

**Step 2:** Since $P(1) = 0$, $(x - 1)$ is a factor. Divide:
```
    1 |  1   -6   11   -6
      |       1   -5    6
      |___________________
         1   -5    6    0
```

**Step 3:** Factor quotient $x^2 - 5x + 6 = (x - 2)(x - 3)$

**Answer:** $P(x) = (x - 1)(x - 2)(x - 3)$

---

## 🔢 Section 6: Rational Root Theorem

### The Rational Root Theorem

> If polynomial $P(x) = a_nx^n + \cdots + a_0$ has a rational zero $\frac{p}{q}$ (in lowest terms), then:
> - $p$ is a factor of the constant term $a_0$
> - $q$ is a factor of the leading coefficient $a_n$

### Finding Possible Rational Zeros

$$\text{Possible rational zeros} = \frac{\text{factors of } a_0}{\text{factors of } a_n}$$

### 💡 Example: Listing Possible Rational Zeros

**Problem:** List all possible rational zeros of $P(x) = 2x^3 - 3x^2 - 8x + 12$

**Solution:**
- Constant term: $a_0 = 12$, factors: $\pm 1, \pm 2, \pm 3, \pm 4, \pm 6, \pm 12$
- Leading coefficient: $a_n = 2$, factors: $\pm 1, \pm 2$

Possible rational zeros: $\pm\frac{1}{1}, \pm\frac{2}{1}, \pm\frac{3}{1}, \pm\frac{4}{1}, \pm\frac{6}{1}, \pm\frac{12}{1}, \pm\frac{1}{2}, \pm\frac{2}{2}, \pm\frac{3}{2}, \pm\frac{4}{2}, \pm\frac{6}{2}, \pm\frac{12}{2}$

Simplified: $\pm 1, \pm 2, \pm 3, \pm 4, \pm 6, \pm 12, \pm\frac{1}{2}, \pm\frac{3}{2}$

### Complete Example: Finding All Zeros

**Problem:** Find all zeros of $P(x) = 2x^3 - 3x^2 - 8x + 12$

**Solution:**

**Step 1:** List possible rational zeros (from above)

**Step 2:** Test systematically:
- $P(2) = 2(8) - 3(4) - 8(2) + 12 = 16 - 12 - 16 + 12 = 0$ ✓

**Step 3:** Divide by $(x - 2)$:
```
    2 |  2   -3   -8   12
      |       4    2  -12
      |___________________
         2    1   -6    0
```

**Step 4:** Factor $2x^2 + x - 6$:
$$2x^2 + x - 6 = (2x - 3)(x + 2)$$

**Step 5:** Find remaining zeros:
- $2x - 3 = 0 \Rightarrow x = \frac{3}{2}$
- $x + 2 = 0 \Rightarrow x = -2$

**All zeros:** $x = -2, \frac{3}{2}, 2$

---

## 🌀 Section 7: Complex Zeros

### Complex Numbers Review

A **complex number** has the form $a + bi$ where:
- $a$ is the real part
- $b$ is the imaginary part
- $i = \sqrt{-1}$, so $i^2 = -1$

### Complex Zeros of Polynomials

When $b^2 - 4ac < 0$ in the quadratic formula:
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

We get complex (imaginary) solutions.

### 💡 Example: Finding Complex Zeros

**Problem:** Find all zeros of $f(x) = x^2 + 4$

**Solution:**
$$x^2 + 4 = 0$$
$$x^2 = -4$$
$$x = \pm\sqrt{-4} = \pm 2i$$

**Zeros:** $x = 2i$ and $x = -2i$

### Complex Conjugate Zeros Theorem

> If polynomial $P(x)$ has real coefficients and $a + bi$ is a zero, then its conjugate $a - bi$ is also a zero.

**Key insight:** Complex zeros always come in conjugate pairs!

### 💡 Example: Using Conjugate Pairs

**Problem:** If $3 - 2i$ is a zero of a polynomial with real coefficients, what other zero must exist?

**Solution:** $3 + 2i$ (the complex conjugate)

### Building Polynomials from Complex Zeros

**Problem:** Find a polynomial with zeros $2, 3i, -3i$

**Solution:**
$$P(x) = (x - 2)(x - 3i)(x + 3i)$$
$$= (x - 2)(x^2 - 9i^2)$$
$$= (x - 2)(x^2 + 9)$$
$$= x^3 - 2x^2 + 9x - 18$$

### 💡 Example: Complete Zero Analysis

**Problem:** Find all zeros of $P(x) = x^4 - 2x^3 + 10x^2 - 18x + 9$

**Solution:**

**Step 1:** Try rational zeros. Test $x = 1$:
$P(1) = 1 - 2 + 10 - 18 + 9 = 0$ ✓

**Step 2:** Divide by $(x - 1)$ to get $x^3 - x^2 + 9x - 9$

**Step 3:** Test $x = 1$ again:
$1 - 1 + 9 - 9 = 0$ ✓

**Step 4:** Divide by $(x - 1)$ to get $x^2 + 9$

**Step 5:** Solve $x^2 + 9 = 0$:
$x = \pm 3i$

**All zeros:** $x = 1$ (multiplicity 2), $x = 3i$, $x = -3i$

---

## 📊 Section 8: Rational Functions

### Definition

A **rational function** is a ratio of two polynomials:

$$R(x) = \frac{P(x)}{Q(x)}$$

Where $P(x)$ and $Q(x)$ are polynomials and $Q(x) \neq 0$.

### Examples of Rational Functions

| Function | Numerator | Denominator |
|----------|-----------|-------------|
| $f(x) = \frac{1}{x}$ | 1 | $x$ |
| $g(x) = \frac{x+2}{x-3}$ | $x+2$ | $x-3$ |
| $h(x) = \frac{x^2-4}{x^2+1}$ | $x^2-4$ | $x^2+1$ |
| $k(x) = \frac{2x^3-x}{x^2-9}$ | $2x^3-x$ | $x^2-9$ |

### Domain of Rational Functions

The domain is all real numbers EXCEPT where the denominator equals zero.

### 💡 Example: Finding Domain

**Problem:** Find the domain of $f(x) = \frac{x + 1}{x^2 - 4}$

**Solution:**
Set denominator equal to zero:
$$x^2 - 4 = 0$$
$$(x-2)(x+2) = 0$$
$$x = 2 \text{ or } x = -2$$

**Domain:** All real numbers except $x = 2$ and $x = -2$

In interval notation: $(-\infty, -2) \cup (-2, 2) \cup (2, \infty)$

---

## 📏 Section 9: Vertical Asymptotes

### What is a Vertical Asymptote?

A **vertical asymptote** is a vertical line $x = a$ that the graph approaches but never touches. The function values approach $\pm\infty$ near the asymptote.

### Finding Vertical Asymptotes

**Steps:**
1. Factor numerator and denominator completely
2. Cancel common factors (these create holes, not asymptotes)
3. Set remaining denominator factors equal to zero
4. Solve for x

### 💡 Example: Finding Vertical Asymptotes

**Problem:** Find the vertical asymptotes of $f(x) = \frac{x + 3}{x^2 - 9}$

**Solution:**

**Step 1:** Factor:
$$f(x) = \frac{x + 3}{(x+3)(x-3)}$$

**Step 2:** Cancel common factor $(x+3)$:
$$f(x) = \frac{1}{x-3}, \quad x \neq -3$$

**Step 3:** Remaining denominator: $x - 3 = 0 \Rightarrow x = 3$

**Vertical asymptote:** $x = 3$

**Note:** $x = -3$ is a hole, not an asymptote!

### Behavior Near Vertical Asymptotes

| Approaching from | Function approaches |
|------------------|---------------------|
| Left of asymptote | $+\infty$ or $-\infty$ |
| Right of asymptote | $+\infty$ or $-\infty$ |

### 💡 Example: Analyzing Asymptote Behavior

**Problem:** Describe the behavior of $f(x) = \frac{2}{x - 1}$ near $x = 1$

**Solution:**
- As $x \to 1^-$ (from left): denominator $\to 0^-$, so $f(x) \to -\infty$
- As $x \to 1^+$ (from right): denominator $\to 0^+$, so $f(x) \to +\infty$

---

## ➡️ Section 10: Horizontal Asymptotes

### What is a Horizontal Asymptote?

A **horizontal asymptote** is a horizontal line $y = b$ that the graph approaches as $x \to \pm\infty$.

### Rules for Horizontal Asymptotes

Compare degrees of numerator ($n$) and denominator ($m$):

| Relationship | Horizontal Asymptote |
|--------------|---------------------|
| $n < m$ | $y = 0$ |
| $n = m$ | $y = \frac{\text{leading coeff. of numerator}}{\text{leading coeff. of denominator}}$ |
| $n > m$ | No horizontal asymptote |

### 💡 Examples: Finding Horizontal Asymptotes

**Example 1:** $f(x) = \frac{3x - 1}{x^2 + 2}$
- Degree of numerator: 1
- Degree of denominator: 2
- Since $1 < 2$: **HA: $y = 0$**

**Example 2:** $g(x) = \frac{4x^2 + 1}{2x^2 - 5}$
- Degrees are equal (both 2)
- Leading coefficients: 4 and 2
- **HA: $y = \frac{4}{2} = 2$**

**Example 3:** $h(x) = \frac{x^3 + 2}{x - 1}$
- Degree of numerator: 3
- Degree of denominator: 1
- Since $3 > 1$: **No horizontal asymptote**

### Memory Device: "BOBO BOTN EATS DC"

- **BOBO**: Bigger On Bottom = zero (y = 0)
- **BOTN**: Bigger On Top = None
- **EATS DC**: Exponents Are The Same = Divide Coefficients

---

## 📐 Section 11: Slant (Oblique) Asymptotes

### When Do Slant Asymptotes Occur?

A **slant asymptote** exists when the degree of the numerator is exactly ONE more than the degree of the denominator.

### Finding Slant Asymptotes

Divide the numerator by the denominator. The quotient (ignoring remainder) is the slant asymptote.

### 💡 Example: Finding a Slant Asymptote

**Problem:** Find the slant asymptote of $f(x) = \frac{x^2 + 3x - 2}{x - 1}$

**Solution:**

Divide using long division or synthetic division:
```
    1 |  1    3   -2
      |       1    4
      |______________
         1    4    2
```

Quotient: $x + 4$ (remainder 2)

**Slant asymptote:** $y = x + 4$

### 💡 Example 2: Another Slant Asymptote

**Problem:** Find the slant asymptote of $g(x) = \frac{2x^2 - 5x + 1}{x + 3}$

**Solution:**

Long division:
```
            2x  - 11
        _______________
x + 3 ) 2x² - 5x + 1
        2x² + 6x
        --------
            -11x + 1
            -11x - 33
            ----------
                  34
```

**Slant asymptote:** $y = 2x - 11$

### Summary: Types of Asymptotes

| Degree of Numerator vs Denominator | Type of End Behavior |
|-----------------------------------|---------------------|
| Numerator < Denominator | Horizontal: $y = 0$ |
| Numerator = Denominator | Horizontal: $y = \frac{a_n}{b_m}$ |
| Numerator = Denominator + 1 | Slant asymptote |
| Numerator > Denominator + 1 | No asymptote (polynomial-like) |

---

## ⭕ Section 12: Holes in Rational Functions

### What Creates a Hole?

A **hole** occurs when a factor cancels from both numerator and denominator.

At a hole:
- The function is undefined
- But the limit exists
- Graph has a "point missing"

### Finding Holes

**Steps:**
1. Factor numerator and denominator completely
2. Identify and cancel common factors
3. The canceled factor $(x - a)$ creates a hole at $x = a$
4. Find the y-coordinate by plugging $a$ into the simplified function

### 💡 Example: Finding Holes

**Problem:** Find any holes in $f(x) = \frac{x^2 - 4}{x^2 - x - 2}$

**Solution:**

**Step 1:** Factor completely:
$$f(x) = \frac{(x+2)(x-2)}{(x-2)(x+1)}$$

**Step 2:** Cancel common factor $(x-2)$:
$$f(x) = \frac{x+2}{x+1}, \quad x \neq 2$$

**Step 3:** Hole at $x = 2$

**Step 4:** Find y-coordinate:
$$y = \frac{2+2}{2+1} = \frac{4}{3}$$

**Hole:** $\left(2, \frac{4}{3}\right)$

### Holes vs. Vertical Asymptotes

| Feature | Hole | Vertical Asymptote |
|---------|------|-------------------|
| Cause | Factor cancels | Factor doesn't cancel |
| Graph behavior | Missing point | Graph goes to infinity |
| Limit exists? | Yes | No |
| Notation | Open circle | Dashed vertical line |

### 💡 Example: Complete Analysis

**Problem:** Analyze $f(x) = \frac{x^2 - 1}{x^2 - 2x - 3}$

**Solution:**

**Factor:**
$$f(x) = \frac{(x+1)(x-1)}{(x-3)(x+1)}$$

**Simplified:**
$$f(x) = \frac{x-1}{x-3}, \quad x \neq -1$$

**Analysis:**
- **Hole:** at $x = -1$; y-value = $\frac{-1-1}{-1-3} = \frac{-2}{-4} = \frac{1}{2}$
  - Hole at $\left(-1, \frac{1}{2}\right)$
- **Vertical asymptote:** $x = 3$
- **Horizontal asymptote:** $y = 1$ (degrees equal)

---

## 📈 Section 13: Graphing Rational Functions

### Complete Graphing Strategy

**Step 1: Domain**
- Find values where denominator = 0
- These are excluded from domain

**Step 2: Intercepts**
- **x-intercepts:** Set numerator = 0 (after simplifying)
- **y-intercept:** Evaluate $f(0)$

**Step 3: Asymptotes and Holes**
- Factor and simplify
- Identify holes from canceled factors
- Find vertical asymptotes from remaining denominator
- Determine horizontal or slant asymptote

**Step 4: Additional Points**
- Plot points in each region between asymptotes
- Check behavior near asymptotes

**Step 5: Sketch**
- Draw asymptotes as dashed lines
- Mark holes with open circles
- Connect points with smooth curves

### 💡 Complete Example: Graphing a Rational Function

**Problem:** Graph $f(x) = \frac{2x^2 - 8}{x^2 - x - 2}$

**Solution:**

**Step 1: Factor**
$$f(x) = \frac{2(x^2 - 4)}{(x-2)(x+1)} = \frac{2(x+2)(x-2)}{(x-2)(x+1)}$$

**Step 2: Simplify**
$$f(x) = \frac{2(x+2)}{x+1}, \quad x \neq 2$$

**Step 3: Domain**
Exclude $x = -1$ and $x = 2$
Domain: $(-\infty, -1) \cup (-1, 2) \cup (2, \infty)$

**Step 4: Hole**
At $x = 2$: $y = \frac{2(4)}{3} = \frac{8}{3}$
Hole at $\left(2, \frac{8}{3}\right)$

**Step 5: Vertical Asymptote**
$x = -1$

**Step 6: Horizontal Asymptote**
Degrees equal, HA: $y = \frac{2}{1} = 2$

**Step 7: Intercepts**
- x-intercept: $2(x+2) = 0 \Rightarrow x = -2$; point $(-2, 0)$
- y-intercept: $f(0) = \frac{2(2)}{1} = 4$; point $(0, 4)$

**Step 8: Sketch**
```
        y
        |
      4 +       *
        |      /
      2 +----/------------ HA: y = 2
        |   /    o (hole at (2, 8/3))
        |  /
  ------+-/----------------- x
       /| 
      / |
     /  | VA: x = -1
    *   |
   (-2,0)
```

### Graphing Checklist

| Feature | How to Find |
|---------|-------------|
| Domain | Set denominator ≠ 0 |
| x-intercepts | Set numerator = 0 |
| y-intercept | Evaluate f(0) |
| Holes | Canceled factors |
| Vertical asymptotes | Remaining denominator zeros |
| Horizontal asymptote | Compare degrees |
| Slant asymptote | Divide (if deg num = deg den + 1) |

---

## 🧮 Section 14: Solving Polynomial Equations

### Methods for Solving Polynomial Equations

| Degree | Primary Method |
|--------|----------------|
| 1 (Linear) | Isolate x |
| 2 (Quadratic) | Factor, complete square, or quadratic formula |
| 3+ (Higher) | Factor using Rational Root Theorem, then reduce degree |

### 💡 Example: Solving a Cubic Equation

**Problem:** Solve $x^3 - 3x^2 - 4x + 12 = 0$

**Solution:**

**Step 1:** Possible rational roots: $\pm 1, \pm 2, \pm 3, \pm 4, \pm 6, \pm 12$

**Step 2:** Test $x = 2$:
$8 - 12 - 8 + 12 = 0$ ✓

**Step 3:** Factor out $(x - 2)$:
```
    2 |  1   -3   -4   12
      |       2   -2  -12
      |___________________
         1   -1   -6    0
```

**Step 4:** Factor $x^2 - x - 6 = (x-3)(x+2)$

**Step 5:** All factors: $(x-2)(x-3)(x+2) = 0$

**Solutions:** $x = -2, 2, 3$

---

## 🧮 Section 15: Solving Rational Equations

### Strategy for Rational Equations

1. Find the LCD (Least Common Denominator)
2. Multiply both sides by LCD
3. Solve the resulting polynomial equation
4. Check for extraneous solutions (values that make original denominators = 0)

### 💡 Example: Solving a Rational Equation

**Problem:** Solve $\frac{2}{x-1} + \frac{3}{x+2} = \frac{5x}{x^2+x-2}$

**Solution:**

**Step 1:** Factor denominators:
$x^2 + x - 2 = (x-1)(x+2)$

**Step 2:** LCD = $(x-1)(x+2)$

**Step 3:** Multiply both sides by LCD:
$$2(x+2) + 3(x-1) = 5x$$

**Step 4:** Simplify:
$$2x + 4 + 3x - 3 = 5x$$
$$5x + 1 = 5x$$
$$1 = 0$$

**No solution!** (This is a contradiction)

### 💡 Example 2: Rational Equation with Solution

**Problem:** Solve $\frac{x}{x-2} - \frac{2}{x+1} = \frac{8}{x^2-x-2}$

**Solution:**

**Step 1:** Factor: $x^2 - x - 2 = (x-2)(x+1)$

**Step 2:** LCD = $(x-2)(x+1)$

**Step 3:** Multiply through:
$$x(x+1) - 2(x-2) = 8$$
$$x^2 + x - 2x + 4 = 8$$
$$x^2 - x - 4 = 0$$

**Step 4:** Quadratic formula:
$$x = \frac{1 \pm \sqrt{1 + 16}}{2} = \frac{1 \pm \sqrt{17}}{2}$$

**Step 5:** Check: Neither value makes denominators zero.

**Solutions:** $x = \frac{1 + \sqrt{17}}{2}$ and $x = \frac{1 - \sqrt{17}}{2}$

---

## 📊 Section 16: Polynomial Inequalities

### Solving Polynomial Inequalities

**Steps:**
1. Get inequality in form $P(x) > 0$, $< 0$, $\geq 0$, or $\leq 0$
2. Find all zeros of $P(x)$
3. Create sign chart using zeros
4. Test a value in each interval
5. Determine which intervals satisfy the inequality

### 💡 Example: Polynomial Inequality

**Problem:** Solve $x^3 - 4x^2 - x + 4 > 0$

**Solution:**

**Step 1:** Factor:
$x^3 - 4x^2 - x + 4 = x^2(x-4) - 1(x-4) = (x^2-1)(x-4) = (x+1)(x-1)(x-4)$

**Step 2:** Zeros: $x = -1, 1, 4$

**Step 3:** Sign chart:
```
Interval:   (-∞,-1)  |  (-1,1)  |  (1,4)  |  (4,∞)
Test point:   -2     |    0     |    2    |   5
Sign:          -     |    +     |    -    |   +
```

**Step 4:** For $> 0$, we need positive intervals.

**Solution:** $(-1, 1) \cup (4, \infty)$

---

## 📊 Section 17: Rational Inequalities

### Solving Rational Inequalities

**Steps:**
1. Get one side equal to zero
2. Combine into single fraction if needed
3. Find zeros (numerator = 0) and undefined points (denominator = 0)
4. Create sign chart
5. Include appropriate endpoints

### 💡 Example: Rational Inequality

**Problem:** Solve $\frac{x-3}{x+2} \geq 0$

**Solution:**

**Step 1:** Critical points:
- Numerator = 0: $x = 3$
- Denominator = 0: $x = -2$ (excluded)

**Step 2:** Sign chart:
```
Interval:   (-∞,-2)  |  (-2,3)  |  (3,∞)
Num sign:      -     |    -     |   +
Den sign:      -     |    +     |   +
Fraction:      +     |    -     |   +
```

**Step 3:** For $\geq 0$, need positive or zero.
- Include $x = 3$ (makes fraction = 0)
- Exclude $x = -2$ (undefined)

**Solution:** $(-\infty, -2) \cup [3, \infty)$

---

## 🎯 Section 18: Key Formulas and Theorems Summary

### Polynomial Theorems

| Theorem | Statement |
|---------|-----------|
| **Fundamental Theorem of Algebra** | A degree-n polynomial has exactly n zeros (counting multiplicity and complex) |
| **Remainder Theorem** | $P(x) \div (x-c)$ has remainder $P(c)$ |
| **Factor Theorem** | $(x-c)$ is a factor of $P(x)$ iff $P(c) = 0$ |
| **Rational Root Theorem** | Rational zeros are $\pm\frac{p}{q}$ where $p$ divides constant, $q$ divides leading coefficient |
| **Complex Conjugate Zeros** | Complex zeros of real polynomials come in conjugate pairs |

### Asymptote Rules

| Condition | Asymptote |
|-----------|-----------|
| deg(num) < deg(den) | HA: $y = 0$ |
| deg(num) = deg(den) | HA: $y = \frac{a_n}{b_n}$ |
| deg(num) = deg(den) + 1 | Slant asymptote |
| Remaining denominator factor $(x-a)$ | VA: $x = a$ |

### Multiplicity Behavior

| Multiplicity | At the Zero |
|--------------|-------------|
| Odd | Crosses x-axis |
| Even | Bounces off x-axis |

---

## ⚠️ Common Mistakes to Avoid

### Polynomial Mistakes

| Mistake | Correct Approach |
|---------|-----------------|
| Confusing zeros with factors | Zero is $r$; factor is $(x-r)$ |
| Wrong sign in Rational Root Theorem | Test both positive and negative possibilities |
| Forgetting multiplicity | Count repeated zeros |
| Ignoring complex zeros | Every degree-n polynomial has n zeros total |

### Rational Function Mistakes

| Mistake | Correct Approach |
|---------|-----------------|
| Calling holes "asymptotes" | Cancel factors first; holes are canceled factors |
| Wrong horizontal asymptote | Compare degrees correctly |
| Not checking extraneous solutions | Always verify solutions in original equation |
| Crossing horizontal asymptotes | Functions CAN cross HA in the middle of their domain |

---

## 🚀 AP Exam Tips

### Calculator Strategies

1. **Graph polynomials** to estimate zeros before solving algebraically
2. **Use table feature** to test possible rational zeros quickly
3. **Zoom appropriately** to see all features of rational functions
4. **Verify solutions** by substituting back into original equations

### Time-Saving Tips

1. For degree-n polynomials, expect n zeros (save time by knowing when to stop searching)
2. If $a + bi$ is a zero, immediately write $a - bi$ as another zero
3. Use synthetic division over long division when possible
4. Memorize the asymptote rules—don't derive them each time

### Common Free Response Elements

- Factor completely
- Find all zeros with multiplicity
- Identify all asymptotes
- Describe end behavior
- Sketch graphs with key features labeled

---

## 📝 Practice Problems

### Level 1: Basic

1. Find all zeros of $f(x) = x^3 - 7x + 6$
2. Identify the end behavior of $g(x) = -4x^6 + 2x^3 - 1$
3. Find vertical and horizontal asymptotes of $h(x) = \frac{3x}{x^2 - 4}$

### Level 2: Intermediate

4. Find all zeros (real and complex) of $P(x) = x^4 - 4x^3 + 4x^2 - 4x + 3$
5. Graph $R(x) = \frac{x^2 - 4}{x^2 - 1}$, identifying all key features
6. Solve $\frac{2x}{x-3} + \frac{1}{x+1} = \frac{10}{x^2-2x-3}$

### Level 3: AP Exam Style

7. Given $f(x) = \frac{2x^3 - 3x^2 - 8x + 12}{x^2 - 4}$:
   - Factor completely
   - Find all intercepts
   - Identify all asymptotes (including slant)
   - Locate any holes
   - Sketch the graph

8. The polynomial $P(x)$ has degree 4, leading coefficient 2, zeros at $x = 1$ (multiplicity 2) and $x = -3$. If $P(0) = 12$, find $P(x)$.

---

## 📚 Answers to Practice Problems

### Level 1 Answers

1. $f(x) = (x-1)(x-2)(x+3)$, zeros: $x = 1, 2, -3$

2. Even degree, negative leading coefficient: Both ends go to $-\infty$
   - As $x \to \pm\infty$, $g(x) \to -\infty$

3. VA: $x = 2$ and $x = -2$; HA: $y = 0$

### Level 2 Answers

4. Zeros: $x = 1$ (multiplicity 2), $x = 1+i\sqrt{2}$, $x = 1-i\sqrt{2}$

5. Key features: 
   - Holes: none (after simplifying)
   - VA: $x = 1$, $x = -1$
   - HA: $y = 1$
   - x-intercepts: $x = 2$, $x = -2$

6. Solution: $x = 4$ (check: $x = 3$ and $x = -1$ are excluded)

---

## 🎓 Unit Summary

**Polynomials** are functions built from non-negative integer powers of x. Their behavior is determined by:
- **Degree** → Number of zeros and end behavior pattern
- **Leading coefficient** → Direction of ends
- **Zeros and multiplicity** → x-intercepts and crossing/bouncing behavior

**Rational functions** are ratios of polynomials. Key features include:
- **Vertical asymptotes** from denominator zeros
- **Horizontal/slant asymptotes** from degree comparison
- **Holes** from canceled common factors

Mastering these concepts provides the foundation for limits, derivatives, and integration in calculus!

:::GUIDE:::
