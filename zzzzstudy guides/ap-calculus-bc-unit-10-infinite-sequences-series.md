:::GUIDE:::
unit::=10
title::=📐 Unit 10: Infinite Sequences and Series
desc::=Master convergence tests, power series, and Taylor/Maclaurin series
diff::=Very Hard
time::=90 min
tags::=calculus,bc,series,sequences,taylor,convergence
content::=

# 📐 Unit 10: Infinite Sequences and Series

> ⚠️ **THE MOST IMPORTANT BC-ONLY UNIT!** This unit accounts for approximately 17-18% of the BC exam and contains the most challenging material unique to BC Calculus.

---

## 📋 Unit Overview

Infinite sequences and series form the cornerstone of advanced calculus and mathematical analysis. This unit explores how infinite processes can yield finite results—a profound concept that underlies much of modern mathematics, physics, and engineering.

### What You'll Master:
- 📊 Sequences and their convergence behavior
- ➕ Infinite series and partial sums
- 🧪 **ALL convergence tests** (the heart of this unit!)
- 🔌 Power series and intervals of convergence
- 📐 Taylor and Maclaurin series representations
- 📏 Error bounds and approximations

### Prerequisites:
- Strong understanding of limits (Unit 1)
- Derivative and integral techniques (Units 2-8)
- L'Hôpital's Rule
- Integration by parts

---

## 📊 Part 1: Sequences

### 1.1 What is a Sequence?

A **sequence** is an ordered list of numbers following a specific pattern:

$$\{a_n\} = a_1, a_2, a_3, \ldots, a_n, \ldots$$

**Examples:**
- $\{n\} = 1, 2, 3, 4, 5, \ldots$ (natural numbers)
- $\left\{\frac{1}{n}\right\} = 1, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \ldots$ (harmonic sequence)
- $\{(-1)^n\} = -1, 1, -1, 1, \ldots$ (alternating sequence)
- $\left\{\frac{n}{n+1}\right\} = \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5}, \ldots$

### 1.2 Sequence Convergence

A sequence $\{a_n\}$ **converges** to limit $L$ if:

$$\lim_{n \to \infty} a_n = L$$

If no such limit exists, the sequence **diverges**.

### 1.3 Key Limit Theorems for Sequences

| Limit | Value | Conditions |
|-------|-------|------------|
| $\lim_{n \to \infty} \frac{1}{n^p}$ | $0$ | $p > 0$ |
| $\lim_{n \to \infty} r^n$ | $0$ | $\|r\| < 1$ |
| $\lim_{n \to \infty} r^n$ | DNE | $\|r\| > 1$ or $r = -1$ |
| $\lim_{n \to \infty} \sqrt[n]{n}$ | $1$ | — |
| $\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n$ | $e$ | — |
| $\lim_{n \to \infty} \frac{n!}{n^n}$ | $0$ | — |
| $\lim_{n \to \infty} \frac{\ln n}{n}$ | $0$ | — |
| $\lim_{n \to \infty} \frac{x^n}{n!}$ | $0$ | Any fixed $x$ |

### 1.4 Techniques for Finding Sequence Limits

**Technique 1: Direct Substitution/Simplification**
$$\lim_{n \to \infty} \frac{3n^2 + 2n}{5n^2 - 1} = \lim_{n \to \infty} \frac{3 + \frac{2}{n}}{5 - \frac{1}{n^2}} = \frac{3}{5}$$

**Technique 2: L'Hôpital's Rule (treat n as continuous variable)**
$$\lim_{n \to \infty} \frac{\ln n}{n} = \lim_{n \to \infty} \frac{1/n}{1} = 0$$

**Technique 3: Squeeze Theorem**
$$-\frac{1}{n} \leq \frac{\sin n}{n} \leq \frac{1}{n} \implies \lim_{n \to \infty} \frac{\sin n}{n} = 0$$

**Technique 4: Dominant Term Analysis**
For polynomials: highest degree term dominates
For exponentials vs polynomials: exponentials dominate
For factorials vs exponentials: factorials dominate

> 💡 **Growth Rate Hierarchy:** $\ln n \ll n^p \ll a^n \ll n! \ll n^n$ (for $p > 0$, $a > 1$)

---

## ➕ Part 2: Infinite Series

### 2.1 Definition of an Infinite Series

An **infinite series** is the sum of the terms of an infinite sequence:

$$\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \cdots$$

### 2.2 Partial Sums

The **nth partial sum** is:
$$S_n = \sum_{k=1}^{n} a_k = a_1 + a_2 + \cdots + a_n$$

A series **converges** if $\lim_{n \to \infty} S_n = S$ (a finite value).
A series **diverges** if $\lim_{n \to \infty} S_n$ does not exist or is infinite.

### 2.3 Geometric Series ⭐

$$\sum_{n=0}^{\infty} ar^n = a + ar + ar^2 + ar^3 + \cdots$$

**Convergence:**
- **Converges** to $\frac{a}{1-r}$ if $|r| < 1$
- **Diverges** if $|r| \geq 1$

**Examples:**
| Series | $a$ | $r$ | Sum |
|--------|-----|-----|-----|
| $\sum_{n=0}^{\infty} \left(\frac{1}{2}\right)^n$ | $1$ | $\frac{1}{2}$ | $\frac{1}{1-\frac{1}{2}} = 2$ |
| $\sum_{n=1}^{\infty} \frac{3}{4^n}$ | $\frac{3}{4}$ | $\frac{1}{4}$ | $\frac{3/4}{1-1/4} = 1$ |
| $\sum_{n=0}^{\infty} \frac{(-2)^n}{3^n}$ | $1$ | $-\frac{2}{3}$ | $\frac{1}{1+\frac{2}{3}} = \frac{3}{5}$ |

### 2.4 Telescoping Series

A **telescoping series** has terms that cancel when expanded:

$$\sum_{n=1}^{\infty} \left(\frac{1}{n} - \frac{1}{n+1}\right) = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{4}\right) + \cdots = 1$$

**Strategy:** Use partial fractions to reveal telescoping structure.

### 2.5 p-Series ⭐

$$\sum_{n=1}^{\infty} \frac{1}{n^p}$$

**Convergence:**
- **Converges** if $p > 1$
- **Diverges** if $p \leq 1$

**Key Examples:**
| Series | $p$ | Convergence |
|--------|-----|-------------|
| $\sum \frac{1}{n}$ (Harmonic) | $1$ | Diverges |
| $\sum \frac{1}{n^2}$ | $2$ | Converges (to $\frac{\pi^2}{6}$) |
| $\sum \frac{1}{n^3}$ | $3$ | Converges |
| $\sum \frac{1}{\sqrt{n}}$ | $\frac{1}{2}$ | Diverges |

---

## 🧪 Part 3: Convergence Tests

### 🔄 THE CONVERGENCE TEST FLOWCHART

```
                    ┌─────────────────────────────────────┐
                    │       GIVEN: Σaₙ                    │
                    │   Does lim(n→∞) aₙ = 0?             │
                    └─────────────────┬───────────────────┘
                                      │
                    ┌─────────────────┴───────────────────┐
                    │ NO                                  │ YES
                    ▼                                     ▼
        ┌───────────────────┐              ┌──────────────────────────┐
        │  DIVERGES         │              │  Continue testing...     │
        │  (nth Term Test)  │              │  (nth Term Test passed)  │
        └───────────────────┘              └────────────┬─────────────┘
                                                        │
                    ┌───────────────────────────────────┼───────────────────────────────────┐
                    │                                   │                                   │
                    ▼                                   ▼                                   ▼
        ┌───────────────────┐              ┌───────────────────────┐          ┌────────────────────┐
        │  GEOMETRIC?       │              │  p-SERIES?            │          │  ALTERNATING?      │
        │  Σar^n            │              │  Σ1/n^p               │          │  Σ(-1)^n bₙ        │
        └─────────┬─────────┘              └──────────┬────────────┘          └─────────┬──────────┘
                  │                                   │                                 │
                  ▼                                   ▼                                 ▼
        ┌───────────────────┐              ┌───────────────────────┐          ┌────────────────────┐
        │ |r| < 1: CONVERGES│              │ p > 1: CONVERGES      │          │ Use Alternating    │
        │ |r| ≥ 1: DIVERGES │              │ p ≤ 1: DIVERGES       │          │ Series Test        │
        └───────────────────┘              └───────────────────────┘          └────────────────────┘
                                                        
                    ┌───────────────────────────────────────────────────────────────────────────┐
                    │                     FOR OTHER SERIES:                                     │
                    └───────────────────────────────────────────────────────────────────────────┘
                                                        │
                    ┌───────────────┬───────────────────┼───────────────────┬───────────────────┐
                    │               │                   │                   │                   │
                    ▼               ▼                   ▼                   ▼                   ▼
        ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐
        │  Has n! or    │  │  Can compare  │  │  Can integrate│  │  Has n^n      │  │  None of      │
        │  r^n terms?   │  │  to known     │  │  f(x)?        │  │  terms?       │  │  the above?   │
        │               │  │  series?      │  │               │  │               │  │               │
        │  Use RATIO    │  │  Use DIRECT   │  │  Use INTEGRAL │  │  Use ROOT     │  │  Try multiple │
        │  TEST         │  │  or LIMIT     │  │  TEST         │  │  TEST         │  │  tests!       │
        └───────────────┘  │  COMPARISON   │  └───────────────┘  └───────────────┘  └───────────────┘
                           └───────────────┘
```

---

### 3.1 The nth Term Test (Divergence Test)

> ⚠️ **THE MOST IMPORTANT FIRST STEP!**

$$\text{If } \lim_{n \to \infty} a_n \neq 0, \text{ then } \sum a_n \text{ DIVERGES}$$

**CAUTION:** If $\lim_{n \to \infty} a_n = 0$, the test is **INCONCLUSIVE** (the series may converge or diverge).

**Example 1:** $\sum_{n=1}^{\infty} \frac{n}{2n+1}$
$$\lim_{n \to \infty} \frac{n}{2n+1} = \frac{1}{2} \neq 0 \implies \text{DIVERGES}$$

**Example 2:** $\sum_{n=1}^{\infty} \frac{1}{n}$ (Harmonic series)
$$\lim_{n \to \infty} \frac{1}{n} = 0 \implies \text{TEST INCONCLUSIVE}$$
(This series actually diverges, but the nth term test cannot show this!)

---

### 3.2 The Integral Test

If $f(x)$ is **continuous**, **positive**, and **decreasing** for $x \geq 1$, and $a_n = f(n)$, then:

$$\sum_{n=1}^{\infty} a_n \text{ and } \int_1^{\infty} f(x)\,dx \text{ either both converge or both diverge}$$

**Example:** Does $\sum_{n=1}^{\infty} \frac{1}{n^2}$ converge?

Let $f(x) = \frac{1}{x^2}$ (continuous, positive, decreasing for $x \geq 1$)

$$\int_1^{\infty} \frac{1}{x^2}\,dx = \lim_{b \to \infty} \left[-\frac{1}{x}\right]_1^b = \lim_{b \to \infty} \left(-\frac{1}{b} + 1\right) = 1$$

The integral converges, so the series **CONVERGES**.

**Example:** Does $\sum_{n=2}^{\infty} \frac{1}{n \ln n}$ converge?

Let $f(x) = \frac{1}{x \ln x}$

$$\int_2^{\infty} \frac{1}{x \ln x}\,dx = \lim_{b \to \infty} [\ln(\ln x)]_2^b = \infty$$

The integral diverges, so the series **DIVERGES**.

---

### 3.3 Direct Comparison Test

Given series $\sum a_n$ with $a_n > 0$, compare to a known series $\sum b_n$ with $b_n > 0$:

| If... | And... | Then... |
|-------|--------|---------|
| $a_n \leq b_n$ | $\sum b_n$ converges | $\sum a_n$ **CONVERGES** |
| $a_n \geq b_n$ | $\sum b_n$ diverges | $\sum a_n$ **DIVERGES** |

**Example:** Does $\sum_{n=1}^{\infty} \frac{1}{n^2 + 1}$ converge?

Compare to $\sum \frac{1}{n^2}$ (which converges, p-series with $p = 2$):

$$\frac{1}{n^2 + 1} < \frac{1}{n^2}$$

Since $\sum \frac{1}{n^2}$ converges and our terms are smaller, $\sum \frac{1}{n^2 + 1}$ **CONVERGES**.

**Example:** Does $\sum_{n=1}^{\infty} \frac{1}{\sqrt{n} - 0.5}$ converge?

Compare to $\sum \frac{1}{\sqrt{n}}$ (which diverges, p-series with $p = 0.5$):

$$\frac{1}{\sqrt{n} - 0.5} > \frac{1}{\sqrt{n}}$$

Since $\sum \frac{1}{\sqrt{n}}$ diverges and our terms are larger, $\sum \frac{1}{\sqrt{n} - 0.5}$ **DIVERGES**.

---

### 3.4 Limit Comparison Test ⭐

For $\sum a_n$ and $\sum b_n$ with all positive terms:

$$\text{If } \lim_{n \to \infty} \frac{a_n}{b_n} = L, \text{ where } 0 < L < \infty$$

Then both series **converge or both diverge**.

> 💡 **When to use:** When direct comparison is tricky (inequalities are hard to establish), but the series "looks like" a known series.

**Example:** Does $\sum_{n=1}^{\infty} \frac{3n^2 + 2n}{n^4 - n + 5}$ converge?

The dominant behavior is $\frac{n^2}{n^4} = \frac{1}{n^2}$. Compare to $b_n = \frac{1}{n^2}$:

$$\lim_{n \to \infty} \frac{\frac{3n^2 + 2n}{n^4 - n + 5}}{\frac{1}{n^2}} = \lim_{n \to \infty} \frac{3n^4 + 2n^3}{n^4 - n + 5} = 3$$

Since $0 < 3 < \infty$ and $\sum \frac{1}{n^2}$ converges, the series **CONVERGES**.

**Example:** Does $\sum_{n=1}^{\infty} \frac{\sin(1/n)}{1}$ converge?

Recall: $\lim_{x \to 0} \frac{\sin x}{x} = 1$, so $\sin(1/n) \approx \frac{1}{n}$ for large $n$.

Compare to $b_n = \frac{1}{n}$:

$$\lim_{n \to \infty} \frac{\sin(1/n)}{1/n} = 1$$

Since $\sum \frac{1}{n}$ diverges, the series **DIVERGES**.

---

### 3.5 Ratio Test ⭐⭐

$$L = \lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right|$$

| Result | Conclusion |
|--------|------------|
| $L < 1$ | Series **CONVERGES** (absolutely) |
| $L > 1$ | Series **DIVERGES** |
| $L = 1$ | **INCONCLUSIVE** |

> 💡 **Best for:** Series with factorials ($n!$), exponentials ($r^n$), or products of both.

**Example 1:** Does $\sum_{n=1}^{\infty} \frac{n!}{3^n}$ converge?

$$L = \lim_{n \to \infty} \left|\frac{(n+1)!/3^{n+1}}{n!/3^n}\right| = \lim_{n \to \infty} \frac{(n+1)! \cdot 3^n}{3^{n+1} \cdot n!} = \lim_{n \to \infty} \frac{n+1}{3} = \infty$$

Since $L > 1$, the series **DIVERGES**.

**Example 2:** Does $\sum_{n=1}^{\infty} \frac{2^n}{n!}$ converge?

$$L = \lim_{n \to \infty} \left|\frac{2^{n+1}/(n+1)!}{2^n/n!}\right| = \lim_{n \to \infty} \frac{2^{n+1} \cdot n!}{(n+1)! \cdot 2^n} = \lim_{n \to \infty} \frac{2}{n+1} = 0$$

Since $L < 1$, the series **CONVERGES**.

**Example 3:** Does $\sum_{n=1}^{\infty} \frac{n^{100}}{5^n}$ converge?

$$L = \lim_{n \to \infty} \frac{(n+1)^{100}/5^{n+1}}{n^{100}/5^n} = \lim_{n \to \infty} \frac{(n+1)^{100}}{5 \cdot n^{100}} = \frac{1}{5} \lim_{n \to \infty} \left(\frac{n+1}{n}\right)^{100} = \frac{1}{5}$$

Since $L < 1$, the series **CONVERGES**.

---

### 3.6 Root Test

$$L = \lim_{n \to \infty} \sqrt[n]{|a_n|} = \lim_{n \to \infty} |a_n|^{1/n}$$

| Result | Conclusion |
|--------|------------|
| $L < 1$ | Series **CONVERGES** (absolutely) |
| $L > 1$ | Series **DIVERGES** |
| $L = 1$ | **INCONCLUSIVE** |

> 💡 **Best for:** Series where terms have the form $(...)^n$.

**Example:** Does $\sum_{n=1}^{\infty} \left(\frac{2n+1}{5n-2}\right)^n$ converge?

$$L = \lim_{n \to \infty} \sqrt[n]{\left(\frac{2n+1}{5n-2}\right)^n} = \lim_{n \to \infty} \frac{2n+1}{5n-2} = \frac{2}{5}$$

Since $L < 1$, the series **CONVERGES**.

**Example:** Does $\sum_{n=1}^{\infty} \frac{n^n}{3^n \cdot n!}$ converge?

$$L = \lim_{n \to \infty} \sqrt[n]{\frac{n^n}{3^n \cdot n!}} = \lim_{n \to \infty} \frac{n}{3 \cdot \sqrt[n]{n!}}$$

Using Stirling's approximation, $\sqrt[n]{n!} \approx \frac{n}{e}$:

$$L = \lim_{n \to \infty} \frac{n}{3 \cdot n/e} = \frac{e}{3} \approx 0.906 < 1$$

The series **CONVERGES**.

---

### 3.7 Alternating Series Test ⭐

For an alternating series $\sum_{n=1}^{\infty} (-1)^{n+1} b_n$ or $\sum_{n=1}^{\infty} (-1)^n b_n$ where $b_n > 0$:

The series **CONVERGES** if BOTH conditions are met:
1. $\lim_{n \to \infty} b_n = 0$
2. $b_{n+1} \leq b_n$ for all $n$ (terms are decreasing)

**Example 1:** Does $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$ (Alternating Harmonic Series) converge?

Let $b_n = \frac{1}{n}$:
1. $\lim_{n \to \infty} \frac{1}{n} = 0$ ✓
2. $\frac{1}{n+1} < \frac{1}{n}$ ✓ (decreasing)

The series **CONVERGES**.

**Example 2:** Does $\sum_{n=1}^{\infty} \frac{(-1)^n n}{n+1}$ converge?

Let $b_n = \frac{n}{n+1}$:
1. $\lim_{n \to \infty} \frac{n}{n+1} = 1 \neq 0$ ✗

The series **DIVERGES** (fails nth term test, actually).

---

### 3.8 Alternating Series Error Bound ⭐

For a convergent alternating series, if $S$ is the sum and $S_n$ is the nth partial sum:

$$|S - S_n| \leq b_{n+1}$$

The error is bounded by the **first omitted term**.

**Example:** Estimate $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^3}$ with error $< 0.01$.

We need $b_{n+1} = \frac{1}{(n+1)^3} < 0.01$

$(n+1)^3 > 100$
$n+1 > 4.64$
$n \geq 4$

So $S_4 = 1 - \frac{1}{8} + \frac{1}{27} - \frac{1}{64} \approx 0.9014$ with error $< 0.01$.

---

## ⚖️ Part 4: Absolute vs. Conditional Convergence

### 4.1 Definitions

**Absolute Convergence:** $\sum a_n$ converges **absolutely** if $\sum |a_n|$ converges.

**Conditional Convergence:** $\sum a_n$ converges **conditionally** if:
- $\sum a_n$ converges, BUT
- $\sum |a_n|$ diverges

> 💡 **Key Theorem:** If a series converges absolutely, it also converges (normally). The converse is NOT true!

### 4.2 Classification Examples

| Series | $\sum a_n$ | $\sum \|a_n\|$ | Classification |
|--------|-----------|---------------|----------------|
| $\sum \frac{(-1)^n}{n}$ | Converges | $\sum \frac{1}{n}$ diverges | **Conditionally convergent** |
| $\sum \frac{(-1)^n}{n^2}$ | Converges | $\sum \frac{1}{n^2}$ converges | **Absolutely convergent** |
| $\sum \frac{(-1)^n}{2^n}$ | Converges | $\sum \frac{1}{2^n}$ converges | **Absolutely convergent** |

### 4.3 Testing for Absolute Convergence

To test for absolute convergence:
1. Take the absolute value of all terms: $\sum |a_n|$
2. Apply convergence tests to this new series
3. If $\sum |a_n|$ converges → original series converges absolutely
4. If $\sum |a_n|$ diverges → test original series for conditional convergence

---

## 🔌 Part 5: Power Series

### 5.1 Definition

A **power series** centered at $x = c$ is:

$$\sum_{n=0}^{\infty} a_n(x-c)^n = a_0 + a_1(x-c) + a_2(x-c)^2 + a_3(x-c)^3 + \cdots$$

When $c = 0$, this is a **Maclaurin series**:
$$\sum_{n=0}^{\infty} a_n x^n$$

### 5.2 Radius and Interval of Convergence ⭐

Every power series has a **radius of convergence** $R$ where:
- The series converges absolutely for $|x - c| < R$
- The series diverges for $|x - c| > R$
- At $|x - c| = R$ (endpoints), you must test separately

**Finding R using the Ratio Test:**

$$R = \lim_{n \to \infty} \left|\frac{a_n}{a_{n+1}}\right|$$

Or equivalently:
$$\frac{1}{R} = \lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right|$$

### 5.3 Finding Interval of Convergence - Complete Process ⭐⭐

**Step 1:** Find R using the Ratio Test
**Step 2:** Determine the interval $(c-R, c+R)$
**Step 3:** Check each endpoint separately by substituting into the series
**Step 4:** Write the final interval with appropriate brackets

**Example:** Find the interval of convergence for $\sum_{n=1}^{\infty} \frac{x^n}{n}$

**Step 1:** Ratio Test
$$L = \lim_{n \to \infty} \left|\frac{x^{n+1}/(n+1)}{x^n/n}\right| = \lim_{n \to \infty} |x| \cdot \frac{n}{n+1} = |x|$$

For convergence: $|x| < 1$, so $R = 1$

**Step 2:** Open interval: $(-1, 1)$

**Step 3:** Check endpoints:
- At $x = 1$: $\sum \frac{1}{n}$ (harmonic series) → **DIVERGES**
- At $x = -1$: $\sum \frac{(-1)^n}{n}$ (alternating harmonic) → **CONVERGES**

**Step 4:** Interval of Convergence: $[-1, 1)$

### 5.4 More Examples

**Example 2:** $\sum_{n=0}^{\infty} \frac{(x-2)^n}{3^n}$

$$L = \lim_{n \to \infty} \left|\frac{(x-2)^{n+1}/3^{n+1}}{(x-2)^n/3^n}\right| = \frac{|x-2|}{3}$$

For convergence: $\frac{|x-2|}{3} < 1 \implies |x-2| < 3$

Center: $c = 2$, Radius: $R = 3$

Open interval: $(-1, 5)$

Endpoints:
- At $x = 5$: $\sum 1$ → **DIVERGES**
- At $x = -1$: $\sum (-1)^n$ → **DIVERGES**

**Interval of Convergence: $(-1, 5)$**

**Example 3:** $\sum_{n=0}^{\infty} \frac{n! \cdot x^n}{2^n}$

$$L = \lim_{n \to \infty} \left|\frac{(n+1)! \cdot x^{n+1}/2^{n+1}}{n! \cdot x^n/2^n}\right| = \lim_{n \to \infty} \frac{(n+1)|x|}{2} = \infty \text{ (for } x \neq 0)$$

**Interval of Convergence: $\{0\}$** (only converges at center)

**Example 4:** $\sum_{n=0}^{\infty} \frac{x^n}{n!}$

$$L = \lim_{n \to \infty} \left|\frac{x^{n+1}/(n+1)!}{x^n/n!}\right| = \lim_{n \to \infty} \frac{|x|}{n+1} = 0$$

Since $L = 0 < 1$ for all $x$:

**Interval of Convergence: $(-\infty, \infty)$** (converges everywhere!)

---

### 5.5 Operations on Power Series

Power series can be manipulated like polynomials within their interval of convergence:

**Differentiation:**
$$\frac{d}{dx}\left[\sum_{n=0}^{\infty} a_n x^n\right] = \sum_{n=1}^{\infty} n \cdot a_n x^{n-1}$$

**Integration:**
$$\int \left[\sum_{n=0}^{\infty} a_n x^n\right] dx = C + \sum_{n=0}^{\infty} \frac{a_n x^{n+1}}{n+1}$$

**Addition/Subtraction:** Add/subtract corresponding terms

**Multiplication:** Multiply like polynomials (Cauchy product)

> 💡 **Important:** The radius of convergence is preserved under differentiation and integration (endpoints may change).

---

## 📐 Part 6: Taylor and Maclaurin Series

### 6.1 Taylor Series Definition ⭐⭐

The **Taylor series** of $f(x)$ centered at $x = c$ is:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(c)}{n!}(x-c)^n$$

$$= f(c) + f'(c)(x-c) + \frac{f''(c)}{2!}(x-c)^2 + \frac{f'''(c)}{3!}(x-c)^3 + \cdots$$

### 6.2 Maclaurin Series (Taylor at c = 0)

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots$$

---

### 6.3 ESSENTIAL MACLAURIN SERIES TABLE ⭐⭐⭐

> 📝 **MEMORIZE THESE!** They appear on every AP exam!

| Function | Maclaurin Series | Interval |
|----------|------------------|----------|
| $e^x$ | $\displaystyle\sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$ | $(-\infty, \infty)$ |
| $\sin x$ | $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$ | $(-\infty, \infty)$ |
| $\cos x$ | $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$ | $(-\infty, \infty)$ |
| $\frac{1}{1-x}$ | $\displaystyle\sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \cdots$ | $(-1, 1)$ |
| $\frac{1}{1+x}$ | $\displaystyle\sum_{n=0}^{\infty} (-1)^n x^n = 1 - x + x^2 - x^3 + \cdots$ | $(-1, 1)$ |
| $\ln(1+x)$ | $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1} x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$ | $(-1, 1]$ |
| $\arctan x$ | $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots$ | $[-1, 1]$ |
| $(1+x)^k$ | $\displaystyle\sum_{n=0}^{\infty} \binom{k}{n} x^n = 1 + kx + \frac{k(k-1)}{2!}x^2 + \cdots$ | $(-1, 1)$ |

---

### 6.4 Deriving New Series from Known Series ⭐

**Strategy:** Use substitution, differentiation, or integration on known series.

**Example 1:** Find the Maclaurin series for $e^{-x^2}$

Start with $e^u = \sum \frac{u^n}{n!}$

Substitute $u = -x^2$:
$$e^{-x^2} = \sum_{n=0}^{\infty} \frac{(-x^2)^n}{n!} = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{n!} = 1 - x^2 + \frac{x^4}{2!} - \frac{x^6}{3!} + \cdots$$

**Example 2:** Find the Maclaurin series for $x \cos(x^2)$

Start with $\cos u = \sum \frac{(-1)^n u^{2n}}{(2n)!}$

Substitute $u = x^2$:
$$\cos(x^2) = \sum_{n=0}^{\infty} \frac{(-1)^n (x^2)^{2n}}{(2n)!} = \sum_{n=0}^{\infty} \frac{(-1)^n x^{4n}}{(2n)!}$$

Multiply by $x$:
$$x\cos(x^2) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{4n+1}}{(2n)!} = x - \frac{x^5}{2!} + \frac{x^9}{4!} - \cdots$$

**Example 3:** Find the Maclaurin series for $\frac{1}{1+x^2}$

Start with $\frac{1}{1-u} = \sum u^n$

Substitute $u = -x^2$:
$$\frac{1}{1+x^2} = \sum_{n=0}^{\infty} (-x^2)^n = \sum_{n=0}^{\infty} (-1)^n x^{2n} = 1 - x^2 + x^4 - x^6 + \cdots$$

**Example 4:** Find the Maclaurin series for $\arctan x$ by integration

$$\arctan x = \int \frac{1}{1+x^2}\,dx = \int \sum_{n=0}^{\infty} (-1)^n x^{2n}\,dx$$

$$= C + \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1}$$

Since $\arctan(0) = 0$, we have $C = 0$:
$$\arctan x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots$$

---

### 6.5 Constructing Taylor Series from Derivatives

**Example:** Find the Taylor series for $f(x) = \ln x$ centered at $c = 1$.

**Step 1:** Calculate derivatives at $x = 1$

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(1)$ |
|-----|--------------|--------------|
| 0 | $\ln x$ | $0$ |
| 1 | $\frac{1}{x}$ | $1$ |
| 2 | $-\frac{1}{x^2}$ | $-1$ |
| 3 | $\frac{2}{x^3}$ | $2$ |
| 4 | $-\frac{6}{x^4}$ | $-6$ |
| $n$ | $\frac{(-1)^{n+1}(n-1)!}{x^n}$ | $(-1)^{n+1}(n-1)!$ |

**Step 2:** Write the series
$$\ln x = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}(n-1)!}{n!}(x-1)^n = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}(x-1)^n}{n}$$

$$= (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} - \frac{(x-1)^4}{4} + \cdots$$

**Interval of convergence:** $(0, 2]$

---

## 📊 Part 7: Taylor Polynomials and Approximations

### 7.1 Taylor Polynomial of Degree n

The **nth-degree Taylor polynomial** approximates $f(x)$ near $x = c$:

$$P_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(c)}{k!}(x-c)^k$$

$$= f(c) + f'(c)(x-c) + \frac{f''(c)}{2!}(x-c)^2 + \cdots + \frac{f^{(n)}(c)}{n!}(x-c)^n$$

**Example:** Find $P_4(x)$ for $f(x) = \cos x$ centered at $c = 0$

$$P_4(x) = \cos(0) + (-\sin 0)x + \frac{-\cos 0}{2!}x^2 + \frac{\sin 0}{3!}x^3 + \frac{\cos 0}{4!}x^4$$

$$= 1 - \frac{x^2}{2} + \frac{x^4}{24}$$

### 7.2 Using Taylor Polynomials for Approximation

**Example:** Approximate $\cos(0.1)$ using $P_4(x)$

$$\cos(0.1) \approx 1 - \frac{(0.1)^2}{2} + \frac{(0.1)^4}{24} = 1 - 0.005 + 0.0000042 \approx 0.995004$$

(Actual value: $\cos(0.1) \approx 0.9950042...$)

---

## 📏 Part 8: Lagrange Error Bound ⭐⭐⭐

### 8.1 The Lagrange Error Bound Formula

If $P_n(x)$ is the nth Taylor polynomial of $f(x)$ centered at $c$, then the error (remainder) is:

$$|R_n(x)| = |f(x) - P_n(x)| \leq \frac{M \cdot |x-c|^{n+1}}{(n+1)!}$$

Where $M = \max|f^{(n+1)}(z)|$ for all $z$ between $x$ and $c$.

> 💡 **Key insight:** The error depends on:
> - The maximum of the **next derivative** $f^{(n+1)}$
> - The distance from center $|x-c|$
> - The factorial $(n+1)!$ (which grows very fast!)

### 8.2 Finding M (The Maximum)

For common functions:
- $e^x$: $M = e^{\max(x,c)}$ (all derivatives are $e^x$)
- $\sin x$, $\cos x$: $M = 1$ (derivatives bounded by 1)
- Polynomials: Calculate the actual derivative

### 8.3 Lagrange Error Bound Examples

**Example 1:** Bound the error when using $P_3(x)$ for $e^x$ centered at 0 to approximate $e^{0.5}$.

For $e^x$: $f^{(4)}(x) = e^x$

On $[0, 0.5]$: $M = e^{0.5} < e^1 = e \approx 2.72$ (use upper bound)

$$|R_3(0.5)| \leq \frac{e \cdot (0.5)^4}{4!} = \frac{2.72 \cdot 0.0625}{24} \approx 0.0071$$

**Example 2:** How many terms are needed to approximate $\sin(1)$ with error $< 0.0001$?

$P_n(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$ (only odd terms for sin)

For $\sin x$: $|f^{(n+1)}(x)| \leq 1$

We need: $\frac{1 \cdot 1^{n+1}}{(n+1)!} < 0.0001$

$(n+1)! > 10000$

Try values: $7! = 5040$, $8! = 40320$

So $n + 1 = 8$, meaning $n = 7$ (use $P_7$, which includes terms up to $x^7$).

Terms needed: $x$, $-\frac{x^3}{6}$, $\frac{x^5}{120}$, $-\frac{x^7}{5040}$ (4 terms)

**Example 3:** Using the 3rd-degree Taylor polynomial for $\ln x$ about $x = 1$, approximate $\ln(1.2)$ and bound the error.

$$P_3(x) = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3}$$

$$P_3(1.2) = 0.2 - \frac{0.04}{2} + \frac{0.008}{3} = 0.2 - 0.02 + 0.00267 = 0.18267$$

For error bound: $f^{(4)}(x) = \frac{-6}{x^4}$

On $[1, 1.2]$: $|f^{(4)}(x)| \leq 6$ (maximum at $x = 1$)

$$|R_3(1.2)| \leq \frac{6 \cdot (0.2)^4}{4!} = \frac{6 \cdot 0.0016}{24} = 0.0004$$

---

## 🎯 Part 9: AP Exam Strategies

### 9.1 Common FRQ Types

**Type 1: Write a Taylor/Maclaurin Series**
- Use known series with substitution, OR
- Calculate derivatives and use the formula

**Type 2: Find Interval of Convergence**
- Use Ratio Test for radius
- Check both endpoints separately
- Write interval with correct brackets

**Type 3: Error Bound Questions**
- Identify which error bound to use (Lagrange vs. Alternating Series)
- For Lagrange: Find M, calculate the bound
- For Alternating: Use the first omitted term

**Type 4: Convergence Test Questions**
- Apply the flowchart
- Show ALL work and state conclusions

### 9.2 Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Using nth term test to prove convergence | It only proves divergence! |
| Forgetting to check endpoints | Always check both! |
| Wrong interval of convergence | Use brackets carefully: [ ] vs ( ) |
| Confusing absolute/conditional | Check $\sum\|a_n\|$ separately |
| Wrong Lagrange bound setup | Use $(n+1)$th derivative, not $n$th |
| Forgetting factorials | Include $n!$ in Taylor terms |

### 9.3 Calculator Tips

On the **calculator-active section**:
- Use partial sums to estimate series values
- Graph Taylor polynomials vs. original functions
- Use numerical integration to verify convergence

On the **no-calculator section**:
- Memorize the essential series table
- Practice mental arithmetic with factorials
- Know common convergence results

---

## 📝 Part 10: Practice Problems

### Level 1: Basic Convergence

**Problem 1:** Determine if $\sum_{n=1}^{\infty} \frac{n+1}{n^2}$ converges or diverges.

<details>
<summary>Solution</summary>

**Limit Comparison with $\sum \frac{1}{n}$:**

$$\lim_{n \to \infty} \frac{\frac{n+1}{n^2}}{\frac{1}{n}} = \lim_{n \to \infty} \frac{n+1}{n} = 1$$

Since $0 < 1 < \infty$ and $\sum \frac{1}{n}$ diverges, the series **DIVERGES**.

</details>

**Problem 2:** Determine if $\sum_{n=1}^{\infty} \frac{3^n}{n!}$ converges or diverges.

<details>
<summary>Solution</summary>

**Ratio Test:**

$$L = \lim_{n \to \infty} \frac{3^{n+1}/(n+1)!}{3^n/n!} = \lim_{n \to \infty} \frac{3}{n+1} = 0 < 1$$

The series **CONVERGES**.

</details>

### Level 2: Interval of Convergence

**Problem 3:** Find the interval of convergence for $\sum_{n=1}^{\infty} \frac{(-1)^n (x-3)^n}{n \cdot 2^n}$

<details>
<summary>Solution</summary>

**Step 1: Ratio Test**
$$L = \lim_{n \to \infty} \left|\frac{(x-3)^{n+1}}{(n+1) \cdot 2^{n+1}} \cdot \frac{n \cdot 2^n}{(x-3)^n}\right| = \frac{|x-3|}{2}$$

Converges when $\frac{|x-3|}{2} < 1$, so $|x-3| < 2$

**Step 2:** Center = 3, Radius = 2, Open interval: $(1, 5)$

**Step 3: Check endpoints**
- At $x = 5$: $\sum \frac{(-1)^n \cdot 2^n}{n \cdot 2^n} = \sum \frac{(-1)^n}{n}$ → **Converges** (Alt. Harmonic)
- At $x = 1$: $\sum \frac{(-1)^n \cdot (-2)^n}{n \cdot 2^n} = \sum \frac{(-1)^n \cdot (-1)^n}{n} = \sum \frac{1}{n}$ → **Diverges**

**Interval of Convergence: $(1, 5]$**

</details>

### Level 3: Taylor Series

**Problem 4:** Find the Maclaurin series for $f(x) = \frac{x}{1+x^3}$

<details>
<summary>Solution</summary>

Start with $\frac{1}{1-u} = \sum_{n=0}^{\infty} u^n$

Let $u = -x^3$:
$$\frac{1}{1+x^3} = \sum_{n=0}^{\infty} (-x^3)^n = \sum_{n=0}^{\infty} (-1)^n x^{3n}$$

Multiply by $x$:
$$\frac{x}{1+x^3} = \sum_{n=0}^{\infty} (-1)^n x^{3n+1} = x - x^4 + x^7 - x^{10} + \cdots$$

**Interval:** $|x^3| < 1 \Rightarrow |x| < 1$

</details>

**Problem 5:** Find the first four nonzero terms of the Maclaurin series for $e^x \sin x$.

<details>
<summary>Solution</summary>

$$e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \cdots$$
$$\sin x = x - \frac{x^3}{6} + \cdots$$

Multiply (collecting terms by degree):
$$e^x \sin x = (1)(x) + (x)(x) + \left(1 \cdot (-\frac{x^3}{6}) + \frac{x^2}{2} \cdot x\right) + (x)(-\frac{x^3}{6}) + (\frac{x^2}{2})(-\frac{x^3}{6}) + \cdots$$

$$= x + x^2 + \frac{x^3}{3} - \frac{x^5}{30} + \cdots$$

Wait, let me recalculate more carefully:

$e^x \sin x$:
- $x^1$: $1 \cdot x = x$
- $x^2$: $x \cdot x = x^2$  
- $x^3$: $\frac{x^2}{2} \cdot x + 1 \cdot (-\frac{x^3}{6}) = \frac{x^3}{2} - \frac{x^3}{6} = \frac{x^3}{3}$
- $x^4$: $\frac{x^3}{6} \cdot x + x \cdot (-\frac{x^3}{6}) = \frac{x^4}{6} - \frac{x^4}{6} = 0$
- $x^5$: Need more terms...

**First four nonzero terms:** $x + x^2 + \frac{x^3}{3} - \frac{x^5}{30}$

</details>

### Level 4: Error Bounds

**Problem 6:** Use the Lagrange error bound to find the maximum error when $P_5(x) = x - \frac{x^3}{6} + \frac{x^5}{120}$ is used to approximate $\sin(0.5)$.

<details>
<summary>Solution</summary>

$f(x) = \sin x$, $c = 0$, $n = 5$, $x = 0.5$

$f^{(6)}(x) = -\sin x$, so $|f^{(6)}(x)| \leq 1$ for all $x$

$$|R_5(0.5)| \leq \frac{1 \cdot (0.5)^6}{6!} = \frac{0.015625}{720} \approx 0.0000217$$

**Maximum error: approximately $2.17 \times 10^{-5}$**

</details>

**Problem 7:** How many terms of the series $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^4}$ are needed to approximate the sum with error $< 0.001$?

<details>
<summary>Solution</summary>

This is an alternating series, so the error is bounded by the first omitted term.

We need: $\frac{1}{(n+1)^4} < 0.001$

$(n+1)^4 > 1000$
$n+1 > 5.62$
$n \geq 5$

**Answer: 5 terms** (using $S_5$)

</details>

---

## 🔑 Quick Reference Sheet

### Convergence Tests Summary

| Test | When to Use | Convergence Condition |
|------|-------------|----------------------|
| **nth Term** | ALWAYS first | $\lim a_n \neq 0 \Rightarrow$ Diverges |
| **Geometric** | $\sum ar^n$ | $\|r\| < 1$ |
| **p-Series** | $\sum \frac{1}{n^p}$ | $p > 1$ |
| **Integral** | Positive, decreasing $f(n)$ | $\int_1^\infty f(x)dx$ converges |
| **Comparison** | Compare to known series | Smaller than conv. / Larger than div. |
| **Limit Comp.** | "Looks like" known series | $0 < L < \infty$ with known series |
| **Ratio** | Factorials, exponentials | $L < 1$ |
| **Root** | $n$th powers | $L < 1$ |
| **Alt. Series** | $\sum (-1)^n b_n$ | $b_n \to 0$ and decreasing |

### Essential Series

| Series | Sum/Convergence |
|--------|-----------------|
| $\sum_{n=0}^{\infty} r^n$ | $\frac{1}{1-r}$ for $\|r\| < 1$ |
| $\sum_{n=1}^{\infty} \frac{1}{n}$ | Diverges |
| $\sum_{n=1}^{\infty} \frac{1}{n^2}$ | Converges to $\frac{\pi^2}{6}$ |
| $\sum_{n=0}^{\infty} \frac{1}{n!}$ | Converges to $e$ |

### Taylor Series Formulas

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(c)}{n!}(x-c)^n$$

**Lagrange Error:** $|R_n(x)| \leq \frac{M|x-c|^{n+1}}{(n+1)!}$

**Alternating Series Error:** $|S - S_n| \leq |a_{n+1}|$

---

## 🎓 Final Exam Tips

1. **Always start with the nth term test** - it takes 5 seconds and catches many divergent series

2. **Know your series by heart** - $e^x$, $\sin x$, $\cos x$, $\frac{1}{1-x}$, $\ln(1+x)$

3. **For interval of convergence** - Don't forget the endpoints!

4. **Ratio test is your friend** - Works for most complex series

5. **Error bounds** - Know when to use Lagrange vs. Alternating Series bound

6. **Substitution is powerful** - Many series come from $\frac{1}{1-x}$ or $e^x$

7. **Practice, practice, practice** - This unit needs repetition to master

---

> 💪 **You've got this!** Series and sequences are challenging, but with practice, they become systematic. Trust the tests, check your endpoints, and remember: if it has factorials, try the ratio test!

:::GUIDE:::
