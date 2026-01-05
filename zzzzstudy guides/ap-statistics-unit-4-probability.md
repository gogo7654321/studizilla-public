# AP Statistics Unit 4 Study Guide

:::GUIDE:::
unit::=Unit 4
title::=📈 Unit 4: Probability, Random Variables, and Probability Distributions Complete Guide
desc::=Master probability rules, random variables, binomial, and geometric distributions
diff::=Hard
time::=60 minutes
tags::=statistics, probability, random variables, binomial, geometric, expected value
content::=

# 📈 Unit 4: Probability, Random Variables, and Probability Distributions

## 📋 Unit Overview

Probability is the foundation of statistical inference! This unit covers probability rules, random variables, and important probability distributions. Master these concepts to understand sampling and inference! 🎲

:::TIMELINE:::
id::=history-probability-theory
title::=History of Probability Theory
events::=[
  {"year": "1654", "event": "Pascal-Fermat Correspondence", "detail": "Blaise Pascal and Pierre de Fermat exchanged letters about the 'problem of points,' founding modern probability theory through their analysis of gambling problems."},
  {"year": "1657", "event": "Huygens' Probability Book", "detail": "Christiaan Huygens published the first book on probability, 'De Ratiociniis in Ludo Aleae,' introducing expected value concepts."},
  {"year": "1713", "event": "Bernoulli's Ars Conjectandi", "detail": "Jacob Bernoulli's posthumous work introduced the Bernoulli distribution and the law of large numbers, connecting probability to long-run frequencies."},
  {"year": "1733", "event": "De Moivre's Normal Curve", "detail": "Abraham de Moivre discovered the normal curve as an approximation to the binomial distribution, laying groundwork for the Central Limit Theorem."},
  {"year": "1763", "event": "Bayes' Theorem Published", "detail": "Thomas Bayes' essay on inverse probability was published posthumously, introducing Bayes' theorem for updating probabilities with new evidence."},
  {"year": "1812", "event": "Laplace's Probability Theory", "detail": "Pierre-Simon Laplace published 'Théorie analytique des probabilités,' systematizing probability theory and popularizing Bayes' methods."},
  {"year": "1837", "event": "Poisson Distribution", "detail": "Siméon Denis Poisson introduced the Poisson distribution for modeling rare events in his work on criminal justice."},
  {"year": "1900", "event": "Bachelier's Financial Mathematics", "detail": "Louis Bachelier applied probability theory to stock market analysis, pioneering mathematical finance."},
  {"year": "1933", "event": "Kolmogorov's Axioms", "detail": "Andrey Kolmogorov published rigorous mathematical foundations for probability theory, establishing the axiomatic approach used today."}
]
:::/TIMELINE:::

### Essential Questions

| Question | Focus |
|----------|-------|
| How do we calculate probabilities? | Rules and methods |
| What is a random variable? | Variables with chance outcomes |
| What is expected value? | Long-run average |
| What are common distributions? | Binomial and geometric |
| How do we combine random variables? | Adding and scaling |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Probability** | Long-run relative frequency |
| **Random variable** | Variable with numerical outcomes |
| **Expected value** | Mean of distribution |
| **Binomial** | Fixed number of trials |
| **Geometric** | Trials until first success |

---

## 🎲 Basic Probability Concepts

### Definitions

| Term | Definition |
|------|------------|
| **Experiment** | Process with uncertain outcome |
| **Outcome** | Single result |
| **Sample space (S)** | All possible outcomes |
| **Event** | Collection of outcomes |

### Probability Rules

| Rule | Formula |
|------|---------|
| **Complement** | P(Aᶜ) = 1 - P(A) |
| **Range** | 0 ≤ P(A) ≤ 1 |
| **Certain event** | P(S) = 1 |
| **Impossible event** | P(∅) = 0 |

### Interpretations

| Interpretation | Meaning |
|----------------|---------|
| **Frequentist** | Long-run proportion |
| **Personal** | Degree of belief |
| **Classical** | Equally likely outcomes |

---

## ➕ Addition Rule

### Mutually Exclusive Events

| Concept | Description |
|---------|-------------|
| **Definition** | Cannot occur together |
| **P(A and B)** | = 0 |
| **Example** | Rolling 1 or 2 on a die |

### General Addition Rule

| Formula | |
|---------|--|
| **P(A or B)** | = P(A) + P(B) - P(A and B) |

### Special Case: Mutually Exclusive

| Formula | |
|---------|--|
| **P(A or B)** | = P(A) + P(B) |
| **When** | A and B mutually exclusive |

---

## ✖️ Multiplication Rule

### Independent Events

| Concept | Description |
|---------|-------------|
| **Definition** | Knowing one doesn't change probability of other |
| **Formula** | P(A and B) = P(A) × P(B) |
| **Example** | Two coin flips |

### General Multiplication Rule

| Formula | |
|---------|--|
| **P(A and B)** | = P(A) × P(B|A) |
| **Or** | = P(B) × P(A|B) |

### Testing Independence

| Events A and B are independent if: |
|-----------------------------------|
| P(A|B) = P(A) |
| P(B|A) = P(B) |
| P(A and B) = P(A) × P(B) |

---

## 🔄 Conditional Probability

### Definition

| Formula | |
|---------|--|
| **P(A|B)** | = P(A and B) / P(B) |
| **Read as** | "Probability of A given B" |

### Tree Diagrams

| Use | Description |
|-----|-------------|
| **Purpose** | Visualize sequential events |
| **Branches** | Show conditional probabilities |
| **Multiply along** | Path for joint probability |
| **Add across** | Final outcomes for total |

### Bayes' Theorem

| Formula | |
|---------|--|
| **P(A|B)** | = P(B|A) × P(A) / P(B) |
| **Expanded** | = P(B|A) × P(A) / [P(B|A)P(A) + P(B|Aᶜ)P(Aᶜ)] |

---

## 📊 Random Variables

### Definition

| Concept | Description |
|---------|-------------|
| **Random variable** | Variable whose value depends on chance |
| **Notation** | Capital letters (X, Y) |
| **Specific value** | Lowercase (x, y) |

### Types

| Type | Description | Example |
|------|-------------|---------|
| **Discrete** | Countable outcomes | Number of heads |
| **Continuous** | Any value in interval | Height, time |

---

## 📈 Discrete Random Variables

### Probability Distribution

| Requirements | |
|--------------|--|
| **All probabilities ≥ 0** | P(X = x) ≥ 0 |
| **Sum = 1** | ΣP(X = x) = 1 |

### Example Distribution

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X=x) | 0.1 | 0.3 | 0.4 | 0.2 |

### Expected Value (Mean)

| Formula | |
|---------|--|
| **μₓ = E(X)** | = Σ[x × P(X = x)] |
| **Interpretation** | Long-run average |

### Variance

| Formula | |
|---------|--|
| **σ²ₓ = Var(X)** | = Σ[(x - μ)² × P(X = x)] |
| **Alternate** | = E(X²) - [E(X)]² |

### Standard Deviation

| Formula | |
|---------|--|
| **σₓ** | = √Var(X) |

---

## 🔄 Combining Random Variables

### Linear Transformations: Y = a + bX

| Statistic | Transformation |
|-----------|----------------|
| **Mean** | μᵧ = a + bμₓ |
| **Variance** | σ²ᵧ = b²σ²ₓ |
| **Std Dev** | σᵧ = |b|σₓ |

### Adding Random Variables: W = X + Y

| Statistic | Formula |
|-----------|---------|
| **Mean** | μᵥᵥ = μₓ + μᵧ |
| **Variance (independent)** | σ²ᵥᵥ = σ²ₓ + σ²ᵧ |

### Subtracting Random Variables: W = X - Y

| Statistic | Formula |
|-----------|---------|
| **Mean** | μᵥᵥ = μₓ - μᵧ |
| **Variance (independent)** | σ²ᵥᵥ = σ²ₓ + σ²ᵧ |

### Key Insight

| For Variance | Always ADD |
|--------------|------------|
| **Even for subtraction** | Variances add |
| **Why** | Variability increases either way |

---

## 🎯 Binomial Distribution

### Conditions (BINS)

| Letter | Condition |
|--------|-----------|
| **B** | Binary outcomes (success/failure) |
| **I** | Independent trials |
| **N** | Fixed number of trials (n) |
| **S** | Same probability (p) each trial |

### Notation

| Symbol | Meaning |
|--------|---------|
| **X ~ Binomial(n, p)** | X follows binomial distribution |
| **n** | Number of trials |
| **p** | Probability of success |
| **k** | Number of successes |

### Probability Formula

| Formula | |
|---------|--|
| **P(X = k)** | = C(n,k) × pᵏ × (1-p)ⁿ⁻ᵏ |
| **C(n,k)** | = n! / [k!(n-k)!] |

### Mean and Standard Deviation

| Statistic | Formula |
|-----------|---------|
| **Mean** | μ = np |
| **Std Dev** | σ = √[np(1-p)] |

### Calculator

| Function | Command |
|----------|---------|
| **P(X = k)** | binompdf(n, p, k) |
| **P(X ≤ k)** | binomcdf(n, p, k) |
| **P(X ≥ k)** | 1 - binomcdf(n, p, k-1) |

---

## 📈 Geometric Distribution

### Conditions

| Condition | Description |
|-----------|-------------|
| **Binary** | Success or failure |
| **Independent** | Each trial independent |
| **Same p** | Probability constant |
| **Count** | Trials until first success |

### Notation

| Symbol | Meaning |
|--------|---------|
| **X ~ Geometric(p)** | X follows geometric distribution |
| **p** | Probability of success |
| **k** | Trial number of first success |

### Probability Formula

| Formula | |
|---------|--|
| **P(X = k)** | = (1-p)ᵏ⁻¹ × p |
| **First success on trial k** | |

### Mean and Standard Deviation

| Statistic | Formula |
|-----------|---------|
| **Mean** | μ = 1/p |
| **Std Dev** | σ = √[(1-p)/p²] |

### Calculator

| Function | Command |
|----------|---------|
| **P(X = k)** | geometpdf(p, k) |
| **P(X ≤ k)** | geometcdf(p, k) |

### P(X > k) Shortcut

| Formula | |
|---------|--|
| **P(X > k)** | = (1-p)ᵏ |
| **Memoryless** | Property of geometric |

---

## 📊 Continuous Random Variables

### Probability Density Function (pdf)

| Concept | Description |
|---------|-------------|
| **Height** | Not probability |
| **Area** | Probability |
| **Total area** | = 1 |

### Key Properties

| Property | Description |
|----------|-------------|
| **P(X = c)** | = 0 (any single value) |
| **P(a ≤ X ≤ b)** | = area under curve |
| **P(X < a) = P(X ≤ a)** | Same for continuous |

---

## 🔔 Normal Distribution

### Properties

| Property | Description |
|----------|-------------|
| **Shape** | Symmetric, bell-shaped |
| **Center** | Mean (μ) |
| **Spread** | Standard deviation (σ) |
| **Notation** | X ~ N(μ, σ) |

### Standard Normal (Z)

| Property | Value |
|----------|-------|
| **Mean** | μ = 0 |
| **Std Dev** | σ = 1 |
| **Notation** | Z ~ N(0, 1) |

### Z-Score

| Formula | |
|---------|--|
| **z** | = (x - μ) / σ |
| **Interpretation** | Number of std devs from mean |

### 68-95-99.7 Rule (Empirical Rule)

| Interval | Percentage |
|----------|------------|
| **μ ± 1σ** | ≈ 68% |
| **μ ± 2σ** | ≈ 95% |
| **μ ± 3σ** | ≈ 99.7% |

### Calculator Commands

| Task | Command |
|------|---------|
| **Area left of x** | normalcdf(-∞, x, μ, σ) |
| **Area between** | normalcdf(a, b, μ, σ) |
| **Find x from area** | invNorm(area, μ, σ) |

---

## 🔍 Normal Probability Calculations

### Finding Probability

| Step | Action |
|------|--------|
| **1** | State the problem in terms of X |
| **2** | Convert to Z (or use calculator directly) |
| **3** | Use table or calculator |
| **4** | Interpret in context |

### Finding Values

| Step | Action |
|------|--------|
| **1** | State the percentile or area |
| **2** | Use invNorm or table |
| **3** | Convert back if needed |
| **4** | Interpret in context |

---

## ✅ Checking Normal Conditions

### Normal Probability Plot

| Pattern | Interpretation |
|---------|----------------|
| **Roughly linear** | Approximately normal |
| **Curved** | Not normal |
| **Outliers off line** | Outliers present |

### Assessing Normality

| Method | How |
|--------|-----|
| **Histogram** | Bell-shaped? |
| **Normal plot** | Linear? |
| **Mean ≈ Median** | Symmetric? |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Sample space** | All possible outcomes |
| **Event** | Collection of outcomes |
| **Complement** | Everything not in event |
| **Mutually exclusive** | Cannot occur together |
| **Independent** | One doesn't affect other |
| **Conditional probability** | P(A|B), probability given |
| **Random variable** | Numerical outcome of chance |
| **Expected value** | Long-run average (μ) |
| **Variance** | Average squared deviation |
| **Binomial** | Fixed n, count successes |
| **Geometric** | Count until first success |
| **Normal distribution** | Bell-shaped continuous |
| **Z-score** | Standard deviations from mean |

---

## 🎯 AP Exam Strategies

### Free Response Tips

| Task | How to Answer |
|------|---------------|
| **Binomial setup** | Check BINS conditions |
| **Normal calculation** | Show z-score or calculator syntax |
| **Interpret expected value** | "On average..." or "In the long run..." |
| **Combine variables** | Show formulas for mean, variance |

### Common Mistakes

| Mistake | Correction |
|---------|------------|
| **Add std devs** | Add variances, then take √ |
| **Subtract variances** | Always add variances |
| **Binomial without BINS** | Always verify conditions |
| **P(X = x) for continuous** | Always 0 for continuous |

### Calculator Efficiency

| Know | Command |
|------|---------|
| **Binomial** | binompdf, binomcdf |
| **Geometric** | geometpdf, geometcdf |
| **Normal** | normalcdf, invNorm |

---

**Good luck on your AP Statistics exam! 🍀📈🎲**

Remember: Mean of sum = sum of means. Variance of sum (independent) = sum of variances. NEVER add standard deviations directly!

---

## 🏆 Famous Mathematicians in Probability

| Mathematician | Contribution | Era |
|---------------|--------------|-----|
| **Blaise Pascal** | Founded probability theory | 1654 |
| **Pierre de Fermat** | Co-founded probability theory | 1654 |
| **Jacob Bernoulli** | Bernoulli trials, law of large numbers | 1713 |
| **Abraham de Moivre** | Normal approximation to binomial | 1733 |
| **Thomas Bayes** | Bayes' theorem for conditional probability | 1763 |
| **Carl Friedrich Gauss** | Normal distribution, "Gaussian curve" | 1800s |
| **Siméon Poisson** | Poisson distribution for rare events | 1837 |
| **Andrey Kolmogorov** | Axiomatic foundations of probability | 1933 |

---

## 📊 Worked Examples: Probability Rules

### Example 1: Complement Rule

**Problem:** The probability that a randomly selected student passes an exam is 0.78. What is the probability that a student does NOT pass?

**Solution:**
$$P(\text{Not Pass}) = 1 - P(\text{Pass}) = 1 - 0.78 = 0.22$$

### Example 2: Addition Rule (Mutually Exclusive)

**Problem:** A die is rolled. What is P(1 or 2)?

**Solution:** Since rolling 1 and rolling 2 are mutually exclusive:
$$P(1 \text{ or } 2) = P(1) + P(2) = \frac{1}{6} + \frac{1}{6} = \frac{2}{6} = \frac{1}{3}$$

### Example 3: Addition Rule (Not Mutually Exclusive)

**Problem:** In a class of 30 students, 18 play soccer, 15 play basketball, and 10 play both. What is the probability a randomly selected student plays soccer OR basketball?

**Solution:**
$$P(S \text{ or } B) = P(S) + P(B) - P(S \text{ and } B)$$
$$= \frac{18}{30} + \frac{15}{30} - \frac{10}{30} = \frac{23}{30} \approx 0.767$$

### Example 4: Multiplication Rule (Independent Events)

**Problem:** A coin is flipped 3 times. What is P(all heads)?

**Solution:** Flips are independent:
$$P(HHH) = P(H) \times P(H) \times P(H) = 0.5 \times 0.5 \times 0.5 = 0.125$$

### Example 5: Conditional Probability

**Problem:** Given P(A) = 0.4, P(B) = 0.5, and P(A and B) = 0.2. Find P(A|B).

**Solution:**
$$P(A|B) = \frac{P(A \text{ and } B)}{P(B)} = \frac{0.2}{0.5} = 0.4$$

---

## 🌳 Tree Diagram Example

**Scenario:** 60% of customers order coffee, 40% order tea. Of those who order coffee, 30% add cream. Of those who order tea, 10% add cream. Find the probability a randomly selected customer adds cream.

**Tree Diagram:**
```
                    ┌── Cream (0.30) → P = 0.6 × 0.3 = 0.18
           ┌── Coffee (0.60)
           │        └── No Cream (0.70) → P = 0.6 × 0.7 = 0.42
Start ─────┤
           │        ┌── Cream (0.10) → P = 0.4 × 0.1 = 0.04
           └── Tea (0.40)
                    └── No Cream (0.90) → P = 0.4 × 0.9 = 0.36
```

**P(Cream)** = 0.18 + 0.04 = **0.22**

**P(Coffee | Cream)** using Bayes:
$$P(\text{Coffee}|\text{Cream}) = \frac{0.18}{0.22} = 0.818$$

---

## 📈 Worked Examples: Random Variables

### Example 1: Expected Value

**Problem:** A game costs $5 to play. You roll a die and win $10 if you roll a 6, $3 if you roll 4 or 5, and $0 otherwise. Find the expected value of your net gain.

**Solution:**

| Outcome | Net Gain (X) | P(X) |
|---------|--------------|------|
| Roll 1, 2, or 3 | -$5 | 3/6 = 0.5 |
| Roll 4 or 5 | $3 - $5 = -$2 | 2/6 = 1/3 |
| Roll 6 | $10 - $5 = $5 | 1/6 |

$$E(X) = (-5)(0.5) + (-2)(1/3) + (5)(1/6)$$
$$= -2.5 - 0.667 + 0.833 = -2.33$$

**Interpretation:** On average, you lose $2.33 per game in the long run.

### Example 2: Variance and Standard Deviation

**Problem:** Using the game above, find the variance and standard deviation.

**Solution:**
$$E(X^2) = (-5)^2(0.5) + (-2)^2(1/3) + (5)^2(1/6)$$
$$= 12.5 + 1.33 + 4.17 = 18$$

$$\text{Var}(X) = E(X^2) - [E(X)]^2 = 18 - (-2.33)^2 = 18 - 5.44 = 12.56$$

$$\sigma_X = \sqrt{12.56} \approx 3.54$$

---

## 🔄 Linear Transformations: Complete Example

**Problem:** Test scores X have mean 72 and standard deviation 8. Scores are curved using Y = 1.5X + 10. Find the mean and standard deviation of Y.

**Solution:**

For Y = a + bX where a = 10, b = 1.5:

$$\mu_Y = a + b\mu_X = 10 + 1.5(72) = 10 + 108 = 118$$

$$\sigma_Y = |b|\sigma_X = 1.5(8) = 12$$

---

## ➕ Combining Random Variables: Complete Example

**Problem:** Sara earns X dollars per hour at her first job (μ = 15, σ = 2) and Y dollars per hour at her second job (μ = 12, σ = 3). She works 10 hours at job 1 and 8 hours at job 2. Find her expected total earnings and standard deviation (assume independence).

**Solution:**

Total = 10X + 8Y

**Mean:**
$$\mu_{10X + 8Y} = 10\mu_X + 8\mu_Y = 10(15) + 8(12) = 150 + 96 = 246$$

**Variance (since independent):**
$$\sigma^2_{10X + 8Y} = 10^2\sigma^2_X + 8^2\sigma^2_Y = 100(4) + 64(9) = 400 + 576 = 976$$

**Standard Deviation:**
$$\sigma = \sqrt{976} \approx 31.24$$

---

## 🎯 Binomial Distribution: Complete Worked Example

**Problem:** A basketball player makes 70% of her free throws. She shoots 10 free throws. Find:
a) P(exactly 7 made)
b) P(at least 8 made)
c) Expected number made and standard deviation

**Check BINS:**
- **B**inary: Make or miss ✓
- **I**ndependent: Each shot independent ✓
- **N**umber fixed: n = 10 ✓
- **S**ame probability: p = 0.70 ✓

**Solution:**

a) $P(X = 7) = C(10,7)(0.70)^7(0.30)^3 = 120(0.0824)(0.027) = 0.267$

**TI-84:** binompdf(10, 0.70, 7) = 0.267

b) $P(X \geq 8) = P(X = 8) + P(X = 9) + P(X = 10)$

**TI-84:** 1 - binomcdf(10, 0.70, 7) = 0.383

c) $$\mu = np = 10(0.70) = 7$$
$$\sigma = \sqrt{np(1-p)} = \sqrt{10(0.70)(0.30)} = \sqrt{2.1} \approx 1.45$$

**Interpretation:** She's expected to make 7 free throws on average, typically varying by about 1.45 shots.

---

## 📈 Geometric Distribution: Complete Worked Example

**Problem:** A telemarketer has a 5% success rate on calls. Find:
a) P(first success on the 10th call)
b) P(first success within 5 calls)
c) Expected number of calls until first success

**Solution:**

a) $P(X = 10) = (1-0.05)^{10-1}(0.05) = (0.95)^9(0.05) = 0.0315$

**TI-84:** geometpdf(0.05, 10) = 0.0315

b) $P(X \leq 5) = P(X=1) + P(X=2) + ... + P(X=5)$

**TI-84:** geometcdf(0.05, 5) = 0.226

c) $$\mu = \frac{1}{p} = \frac{1}{0.05} = 20 \text{ calls}$$

---

## 🔔 Normal Distribution: Complete Worked Examples

### Example 1: Finding Probabilities

**Problem:** Heights of adult males are normally distributed with μ = 70 inches and σ = 3 inches. Find P(height > 73 inches).

**Solution:**
$$z = \frac{73 - 70}{3} = 1.00$$

$P(Z > 1) = 1 - P(Z < 1) = 1 - 0.8413 = 0.1587$

**TI-84:** normalcdf(73, 1E99, 70, 3) = 0.1587

**Interpretation:** About 15.87% of adult males are taller than 73 inches.

### Example 2: Finding Values (Inverse Normal)

**Problem:** Using the same distribution, what height marks the 90th percentile?

**Solution:**
Find z such that P(Z < z) = 0.90

From table: z ≈ 1.28

$$x = \mu + z\sigma = 70 + 1.28(3) = 73.84 \text{ inches}$$

**TI-84:** invNorm(0.90, 70, 3) = 73.84

### Example 3: Between Two Values

**Problem:** P(67 < X < 73)?

**Solution:**

**TI-84:** normalcdf(67, 73, 70, 3) = 0.6827

(This is approximately 68% - the empirical rule for ±1σ!)

---

## 📊 TI-84 Calculator Reference

| Distribution | Command | Purpose |
|--------------|---------|---------|
| **Binomial** | binompdf(n, p, k) | P(X = k) |
| **Binomial** | binomcdf(n, p, k) | P(X ≤ k) |
| **Geometric** | geometpdf(p, k) | P(X = k) |
| **Geometric** | geometcdf(p, k) | P(X ≤ k) |
| **Normal** | normalcdf(low, high, μ, σ) | P(low < X < high) |
| **Normal** | invNorm(area, μ, σ) | Find x for given percentile |

### Calculator Tips

- For P(X > k) binomial: 1 - binomcdf(n, p, k)
- For P(X ≥ k) binomial: 1 - binomcdf(n, p, k-1)
- For normal "greater than": normalcdf(value, 1E99, μ, σ)
- For normal "less than": normalcdf(-1E99, value, μ, σ)

---

## ⚠️ Common Probability Mistakes

| Mistake | Correction |
|---------|------------|
| Adding probabilities that aren't mutually exclusive without subtracting overlap | Use: P(A or B) = P(A) + P(B) - P(A and B) |
| Multiplying probabilities that aren't independent | Use: P(A and B) = P(A) × P(B\|A) |
| Adding standard deviations | Add VARIANCES, then take square root |
| Using wrong n for binomial | n = number of trials, not probability |
| Forgetting P(X = k) = 0 for continuous | For continuous, find P(a < X < b) |
| Using binomial without checking BINS | Always verify all four conditions |

---

## 🔗 Connection to Other Units

| Unit | How Probability Connects |
|------|-------------------------|
| **Unit 5** | Sampling distributions built on probability |
| **Unit 6** | z-tests use normal distribution |
| **Unit 7** | t-tests use t-distribution |
| **Unit 8** | Chi-square uses chi-square distribution |
| **Unit 9** | Regression uses normal/t-distributions |
