# AP Statistics Unit 7 Study Guide

:::GUIDE:::
unit::=Unit 7
title::=📈 Unit 7: Inference for Quantitative Data - Means Complete Guide
desc::=Master confidence intervals and hypothesis tests for means using t-procedures
diff::=Hard
time::=60 minutes
tags::=statistics, inference, means, t-test, t-distribution, confidence intervals
content::=

# 📈 Unit 7: Inference for Quantitative Data - Means

## 📋 Unit Overview

Now we apply inference to means! This unit covers t-procedures for confidence intervals and hypothesis tests when working with quantitative data. The t-distribution accounts for extra uncertainty when σ is unknown! 📊

:::TIMELINE:::
id::=history-t-distribution
title::=History of the t-Distribution and Inference for Means
events::=[
  {"year": "1805", "event": "Early Error Theory", "detail": "Scientists began developing methods to analyze measurement error, leading to understanding of how sample means behave."},
  {"year": "1908", "event": "Student's t-Distribution", "detail": "William Gosset, working at Guinness Brewery and publishing as 'Student,' discovered the t-distribution for small sample inference when the population variance is unknown."},
  {"year": "1912", "event": "Fisher Proves Student's Work", "detail": "Ronald Fisher provided rigorous mathematical proof of Gosset's t-distribution, establishing it as a fundamental tool in statistics."},
  {"year": "1922", "event": "Degrees of Freedom Formalized", "detail": "Fisher introduced the concept of degrees of freedom, explaining why we divide by n-1 for sample variance."},
  {"year": "1925", "event": "Fisher's Statistical Methods", "detail": "Fisher published comprehensive methods for using t-tests and t-intervals, making these tools accessible to researchers."},
  {"year": "1935", "event": "Paired Comparisons Developed", "detail": "Methods for matched pairs and paired t-tests were formalized, enabling before-after and crossover study designs."},
  {"year": "1938", "event": "Welch's t-Test", "detail": "Bernard Welch developed the unequal variances t-test (Welch's t-test) for comparing two means without assuming equal variances."},
  {"year": "1947", "event": "Nonparametric Alternatives", "detail": "Frank Wilcoxon and Henry Mann developed rank-based alternatives for when t-test assumptions are violated."}
]
:::/TIMELINE:::

### Essential Questions

| Question | Focus |
|----------|-------|
| Why use t instead of z? | Unknown population σ |
| What is the t-distribution? | Wider than normal, depends on df |
| How do we construct CIs for means? | t-intervals |
| How do we test claims about means? | t-tests |
| How do we compare two means? | Two-sample t-procedures |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **t-distribution** | Used when σ unknown |
| **Degrees of freedom** | n - 1 for one sample |
| **Standard error** | s/√n |
| **t-interval** | CI for mean |
| **t-test** | Hypothesis test for mean |

---

## 📊 The t-Distribution

### Why Not z?

| Problem | Solution |
|---------|----------|
| **σ usually unknown** | Use s to estimate |
| **Extra uncertainty** | t-distribution is wider |
| **Depends on n** | Degrees of freedom |

### Properties of t-Distribution

| Property | Description |
|----------|-------------|
| **Symmetric** | Around 0 |
| **Bell-shaped** | Like normal |
| **Wider tails** | More spread than z |
| **Approaches z** | As df increases |

### Degrees of Freedom (df)

| For One Sample | df = n - 1 |
|----------------|------------|

### Comparison to Normal

| df | t-Distribution |
|----|----------------|
| **Small (< 30)** | Noticeably wider |
| **Large (≥ 30)** | Nearly same as z |
| **∞** | Identical to z |

---

## 📐 One-Sample t-Interval for Means

### Formula

| CI | = x̄ ± t* × (s/√n) |
|----|-------------------|

### Components

| Component | Meaning |
|-----------|---------|
| **x̄** | Sample mean |
| **t*** | Critical value (df = n-1) |
| **s** | Sample standard deviation |
| **s/√n** | Standard error |

### Finding t*

| Method | Description |
|--------|-------------|
| **Table** | Use t-table with df |
| **Calculator** | invT(area, df) |

### Common t* Values

| Confidence | df = 10 | df = 20 | df = ∞ (z*) |
|------------|---------|---------|-------------|
| **90%** | 1.812 | 1.725 | 1.645 |
| **95%** | 2.228 | 2.086 | 1.960 |
| **99%** | 3.169 | 2.845 | 2.576 |

---

## ✅ Conditions for t-Procedures

### Three Conditions

| Condition | Check |
|-----------|-------|
| **Random** | Random sample or assignment |
| **10%** | n ≤ 10% of population |
| **Normal/Large Sample** | Population normal OR n ≥ 30 |

### Checking Normal/Large Sample

| Sample Size | Requirement |
|-------------|-------------|
| **n < 15** | Data should look normal (no outliers, roughly symmetric) |
| **15 ≤ n < 30** | Data should show no strong skewness or outliers |
| **n ≥ 30** | CLT applies (almost always OK) |

### How to Check

| Tool | Look For |
|------|----------|
| **Histogram** | Roughly symmetric? |
| **Boxplot** | Any outliers? |
| **Normal probability plot** | Roughly linear? |

---

## 📝 Interpreting t-Intervals

### Correct Interpretation

| Template | |
|----------|--|
| **Say** | "We are [C]% confident that the true mean [context] is between [lower] and [upper] [units]." |

### Example

| Statement | |
|-----------|--|
| **Context** | Sleep hours of college students |
| **CI** | (6.2, 7.8) hours |
| **Interpretation** | "We are 95% confident that the true mean sleep hours for college students is between 6.2 and 7.8 hours." |

---

## 🧪 One-Sample t-Test for Means

### Hypotheses

| Null | H₀: μ = μ₀ |
|------|------------|
| **Alternative** | Hₐ: μ ≠ μ₀, μ < μ₀, or μ > μ₀ |

### Test Statistic

| Formula | |
|---------|--|
| **t** | = (x̄ - μ₀) / (s/√n) |

### Degrees of Freedom

| df | = n - 1 |
|----|---------|

### P-Value Calculation

| Alternative | P-value |
|-------------|---------|
| **Hₐ: μ > μ₀** | P(T > t) |
| **Hₐ: μ < μ₀** | P(T < t) |
| **Hₐ: μ ≠ μ₀** | 2 × P(T > |t|) |

---

## ✍️ Four-Step Process for Means

### State

| Component | What to Write |
|-----------|---------------|
| **Parameter** | μ = true mean [context] |
| **Hypotheses** | H₀ and Hₐ |
| **Significance level** | α = 0.05 (or given) |

### Plan

| Component | What to Write |
|-----------|---------------|
| **Name** | One-sample t-test for μ |
| **Conditions** | Random, 10%, Normal/Large sample |

### Do

| Component | What to Write |
|-----------|---------------|
| **Statistics** | x̄, s, n |
| **Test statistic** | t = (x̄ - μ₀)/(s/√n) |
| **P-value** | From t-distribution with df |

### Conclude

| Component | What to Write |
|-----------|---------------|
| **Compare** | P-value vs. α |
| **Decision** | Reject or fail to reject H₀ |
| **Context** | In terms of problem |

---

## 📊 Paired t-Procedures

### When to Use

| Situation | Example |
|-----------|---------|
| **Two measurements on same subjects** | Before/after |
| **Matched pairs** | Twins, siblings |
| **Natural pairing** | Left/right hands |

### The Key Idea

| Step | Action |
|------|--------|
| **1** | Calculate differences: d = x₁ - x₂ |
| **2** | Treat differences as one sample |
| **3** | Do one-sample t-procedure on d |

### Hypotheses

| Null | H₀: μd = 0 |
|------|------------|
| **Alternative** | Hₐ: μd ≠ 0, μd < 0, or μd > 0 |

### Test Statistic

| Formula | |
|---------|--|
| **t** | = (d̄ - 0) / (sd/√n) |

### Conditions

| Check on | Differences |
|----------|-------------|
| **Random** | Random sample of pairs |
| **10%** | Pairs ≤ 10% of population |
| **Normal/Large** | Differences approximately normal or n ≥ 30 |

---

## 📈 Two-Sample t-Procedures

### When to Use

| Situation | Description |
|-----------|-------------|
| **Two independent groups** | Compare means |
| **No pairing** | Separate random samples |
| **Example** | Males vs. females |

### Hypotheses

| Null | H₀: μ₁ - μ₂ = 0 (or μ₁ = μ₂) |
|------|------------------------------|
| **Alternative** | Hₐ: μ₁ - μ₂ ≠ 0, < 0, or > 0 |

### Test Statistic

| Formula | |
|---------|--|
| **t** | = (x̄₁ - x̄₂) - 0 / √(s₁²/n₁ + s₂²/n₂) |

### Degrees of Freedom

| Method | Formula |
|--------|---------|
| **Calculator** | Welch's approximation (messy) |
| **Conservative** | df = smaller of (n₁-1, n₂-1) |
| **Use calculator** | Always |

### Conditions

| Condition | Check |
|-----------|-------|
| **Random** | Both samples random |
| **10%** | Both n ≤ 10% of populations |
| **Normal/Large** | Both populations normal or both n ≥ 30 |

---

## 📐 Two-Sample t-Interval

### Formula

| CI | = (x̄₁ - x̄₂) ± t* × √(s₁²/n₁ + s₂²/n₂) |
|----|----------------------------------------|

### Interpretation

| Template | |
|----------|--|
| **Say** | "We are [C]% confident that the true difference in mean [context] (group 1 - group 2) is between [lower] and [upper]." |

### Does CI Include 0?

| If | Conclusion |
|----|------------|
| **0 in CI** | No significant difference |
| **0 not in CI** | Significant difference |

---

## 🔄 Pooled vs. Unpooled

### Pooled Procedure

| Assumption | σ₁ = σ₂ |
|------------|---------|
| **When to use** | If populations have equal variance |
| **AP Exam** | Generally don't use pooled |

### Unpooled (Welch's)

| Assumption | σ₁ may ≠ σ₂ |
|------------|-------------|
| **When to use** | Default on AP exam |
| **More conservative** | Slightly wider intervals |

### AP Exam Practice

| Recommendation | |
|----------------|--|
| **Use** | Two-sample t (unpooled) |
| **Calculator** | 2-SampTTest, Pooled: No |

---

## 📊 Calculator Commands

### One-Sample t-Interval

| TI-84 | Steps |
|-------|-------|
| **TInterval** | STAT → TESTS → 8 |
| **Input** | Stats or Data |
| **Enter** | x̄, s, n, C-Level |

### One-Sample t-Test

| TI-84 | Steps |
|-------|-------|
| **T-Test** | STAT → TESTS → 2 |
| **Enter** | μ₀, x̄, s, n, alternative |

### Two-Sample t-Interval

| TI-84 | Steps |
|-------|-------|
| **2-SampTInt** | STAT → TESTS → 0 |
| **Pooled** | No |

### Two-Sample t-Test

| TI-84 | Steps |
|-------|-------|
| **2-SampTTest** | STAT → TESTS → 4 |
| **Pooled** | No |

---

## ⚠️ Matched Pairs vs. Two-Sample

### Key Distinction

| Matched Pairs | Two-Sample |
|---------------|------------|
| Same subjects, two measurements | Different subjects |
| Calculate differences | Compare groups |
| One-sample t on d | Two-sample t |
| df = n - 1 (n pairs) | df from Welch's |

### How to Identify

| Look For | Type |
|----------|------|
| Before/after | Paired |
| Left vs. right | Paired |
| Twins | Paired |
| Male vs. female | Two-sample |
| Treatment vs. control groups | Two-sample |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **t-distribution** | Distribution when σ unknown |
| **Degrees of freedom** | n - 1 for one sample |
| **Standard error** | s/√n (estimate of σ/√n) |
| **t*** | Critical value from t-distribution |
| **Paired data** | Two measurements on same subjects |
| **Two-sample** | Comparing two independent groups |
| **Pooled** | Assuming equal variances |
| **Robust** | Works even if conditions somewhat violated |

---

## 🔍 Robustness

### t-Procedures Are Robust

| To | Not Robust To |
|----|---------------|
| **Mild non-normality** | Strong skewness with small n |
| **Large samples** | Outliers |

### Checking Robustness

| n | What's OK |
|---|-----------|
| **n < 15** | No outliers, roughly symmetric |
| **15 ≤ n < 30** | No extreme skewness |
| **n ≥ 30** | Almost always OK |

---

## 🎯 AP Exam Strategies

### Free Response Tips

| Section | Key Points |
|---------|------------|
| **State** | Define μ in context |
| **Plan** | Name procedure, check conditions |
| **Do** | Show t and P-value |
| **Conclude** | Context, context, context! |

### Common Mistakes

| Mistake | Correction |
|---------|------------|
| **Use z instead of t** | Use t when σ unknown |
| **Forget df** | Always include df = n-1 |
| **Paired vs. two-sample confusion** | Check if paired |
| **Skip Normal check** | Describe data shape for small n |

### Comparison Summary

| Procedure | When | df |
|-----------|------|-----|
| **One-sample t** | One mean, σ unknown | n - 1 |
| **Paired t** | Differences | n - 1 (pairs) |
| **Two-sample t** | Compare two means | Welch's |

---

**Good luck on your AP Statistics exam! 🍀📈📊**

Remember: Use t-procedures when σ is unknown (almost always!). For paired data, work with the differences. Always check conditions and use context!

---

## 🏆 Famous Statisticians in t-Procedures

| Statistician | Contribution | Era |
|--------------|--------------|-----|
| **William Gosset (Student)** | Discovered t-distribution | 1908 |
| **Ronald A. Fisher** | Proved t-distribution theory, degrees of freedom | 1912-25 |
| **Bernard Welch** | Welch's t-test for unequal variances | 1938 |
| **Frank Wilcoxon** | Nonparametric alternative (Wilcoxon test) | 1947 |
| **Henry Mann & Donald Whitney** | Mann-Whitney U test | 1947 |

---

## 📊 Complete Worked Example: One-Sample t-Interval

**Problem:** A researcher wants to estimate the mean time college students spend on social media per day. A random sample of 40 students reveals a mean of 2.8 hours with a standard deviation of 1.2 hours. Construct and interpret a 95% confidence interval.

### Step 1: Check Conditions
- **Random:** Random sample of college students ✓
- **10%:** 40 is less than 10% of all college students ✓
- **Normal/Large sample:** n = 40 ≥ 30, so CLT applies ✓

### Step 2: Calculate Confidence Interval

**Statistics:** $\bar{x} = 2.8$, $s = 1.2$, $n = 40$

**Degrees of freedom:** $df = n - 1 = 39$

**Critical value:** $t^* = 2.023$ (from t-table or invT(0.975, 39))

**Standard error:** $SE = \frac{s}{\sqrt{n}} = \frac{1.2}{\sqrt{40}} = \frac{1.2}{6.32} = 0.190$

**Margin of error:** $ME = t^* \cdot SE = 2.023 \times 0.190 = 0.384$

**Confidence interval:** 
$$CI = \bar{x} \pm ME = 2.8 \pm 0.384 = (2.416, 3.184)$$

### Step 3: Interpretation
"We are 95% confident that the true mean time college students spend on social media per day is between 2.416 and 3.184 hours."

**TI-84:** STAT → TESTS → 8:TInterval
Enter: Stats, $\bar{x}$ = 2.8, $s_x$ = 1.2, n = 40, C-Level = 0.95
Result: (2.416, 3.184)

---

## 🧪 Complete Worked Example: One-Sample t-Test

**Problem:** A manufacturer claims batteries last an average of 500 hours. A quality control engineer tests a random sample of 25 batteries and finds a mean of 485 hours with a standard deviation of 40 hours. At α = 0.05, is there evidence that batteries last less than claimed?

### STATE

**Parameter:** μ = true mean battery life (in hours)

**Hypotheses:**
- $H_0: \mu = 500$ (batteries last 500 hours as claimed)
- $H_a: \mu < 500$ (batteries last less than claimed)

**Significance level:** α = 0.05

### PLAN

**Procedure:** One-sample t-test for μ

**Conditions:**
- **Random:** Random sample of batteries ✓
- **10%:** 25 < 10% of all batteries produced ✓
- **Normal/Large sample:** n = 25 < 30, so we need to check the data. Assuming no strong skewness or outliers in battery life data ✓

### DO

**Sample statistics:** $\bar{x} = 485$, $s = 40$, $n = 25$, $df = 24$

**Test statistic:**
$$t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}} = \frac{485 - 500}{40/\sqrt{25}} = \frac{-15}{40/5} = \frac{-15}{8} = -1.875$$

**P-value:** $P(T < -1.875)$ with df = 24 = 0.0367

**TI-84:** STAT → TESTS → 2:T-Test
Enter: μ₀ = 500, $\bar{x}$ = 485, $s_x$ = 40, n = 25, μ < μ₀
Result: t = -1.875, p = 0.0367

### CONCLUDE

Since P-value = 0.0367 < α = 0.05, we reject $H_0$.

**Conclusion in context:** We have convincing evidence that the true mean battery life is less than 500 hours. The manufacturer's claim appears to be overstated.

---

## 🔄 Complete Worked Example: Paired t-Test

**Problem:** A fitness program claims to increase vertical jump height. 12 athletes are measured before and after completing the program. Here are the differences (After - Before) in inches: 1.5, 2.0, 0.5, 3.0, 1.0, 2.5, 1.5, 0, 2.0, 1.0, 3.5, 2.0. At α = 0.05, is there evidence the program increases jump height?

### STATE

**Parameter:** $\mu_d$ = true mean difference in vertical jump height (After - Before)

**Hypotheses:**
- $H_0: \mu_d = 0$ (no change)
- $H_a: \mu_d > 0$ (program increases jump height)

**Significance level:** α = 0.05

### PLAN

**Procedure:** Paired t-test

**Conditions:**
- **Random:** Random sample of athletes (or random assignment) ✓
- **10%:** 12 < 10% of all potential athletes ✓
- **Normal/Large sample:** n = 12 < 30, so we check the differences. The data shows no strong skewness or outliers ✓

### DO

**Calculate from differences:**
- $\bar{d} = \frac{1.5+2+0.5+3+1+2.5+1.5+0+2+1+3.5+2}{12} = \frac{20.5}{12} = 1.708$
- $s_d = 1.02$ (calculated or from calculator)
- $n = 12$, $df = 11$

**Test statistic:**
$$t = \frac{\bar{d} - 0}{s_d/\sqrt{n}} = \frac{1.708 - 0}{1.02/\sqrt{12}} = \frac{1.708}{0.294} = 5.81$$

**P-value:** $P(T > 5.81)$ with df = 11 ≈ 0.00006

### CONCLUDE

Since P-value ≈ 0.00006 < α = 0.05, we reject $H_0$.

**Conclusion in context:** We have very strong convincing evidence that the fitness program increases mean vertical jump height for athletes like these.

---

## 📐 Complete Worked Example: Two-Sample t-Test

**Problem:** Researchers want to compare the mean reaction times of people who slept 6 hours vs. 8 hours. Group 1 (6 hours): n₁ = 30, $\bar{x}_1$ = 0.52 seconds, $s_1$ = 0.08 seconds. Group 2 (8 hours): n₂ = 35, $\bar{x}_2$ = 0.45 seconds, $s_2$ = 0.06 seconds. At α = 0.05, is there a significant difference?

### STATE

**Parameters:** 
- $\mu_1$ = true mean reaction time for 6-hour sleep group
- $\mu_2$ = true mean reaction time for 8-hour sleep group

**Hypotheses:**
- $H_0: \mu_1 - \mu_2 = 0$ (no difference)
- $H_a: \mu_1 - \mu_2 \neq 0$ (there is a difference)

**Significance level:** α = 0.05

### PLAN

**Procedure:** Two-sample t-test (unpooled/Welch's)

**Conditions:**
- **Random:** Random assignment to groups ✓
- **10%:** Both samples < 10% of all potential participants ✓
- **Normal/Large sample:** Both n ≥ 30, CLT applies ✓

### DO

**Test statistic:**
$$SE = \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}} = \sqrt{\frac{0.08^2}{30} + \frac{0.06^2}{35}} = \sqrt{0.000213 + 0.000103} = 0.0178$$

$$t = \frac{(\bar{x}_1 - \bar{x}_2) - 0}{SE} = \frac{0.52 - 0.45}{0.0178} = \frac{0.07}{0.0178} = 3.93$$

**Degrees of freedom:** Using Welch's approximation (calculator): df ≈ 52.4

**P-value:** $2P(T > 3.93)$ ≈ 0.0002

**TI-84:** STAT → TESTS → 4:2-SampTTest
Enter: Stats, $\bar{x}_1$ = 0.52, $s_1$ = 0.08, $n_1$ = 30, $\bar{x}_2$ = 0.45, $s_2$ = 0.06, $n_2$ = 35, μ₁ ≠ μ₂, Pooled: No
Result: t = 3.93, p = 0.0002

### CONCLUDE

Since P-value = 0.0002 < α = 0.05, we reject $H_0$.

**Conclusion in context:** We have convincing evidence that there is a significant difference in mean reaction times between people who slept 6 hours and those who slept 8 hours. Those with more sleep had faster (lower) reaction times.

---

## 🔍 Paired vs. Two-Sample: Decision Flowchart

```
┌─────────────────────────────────────┐
│  Are the two groups INDEPENDENT?   │
└─────────────────┬───────────────────┘
           ┌──────┴──────┐
          YES            NO
           │              │
           ▼              ▼
  ┌────────────────┐  ┌────────────────────┐
  │  Two-Sample    │  │  Is there natural  │
  │    t-Test      │  │  pairing?          │
  └────────────────┘  └────────┬───────────┘
                          ┌────┴────┐
                         YES       NO
                          │         │
                          ▼         ▼
                    ┌──────────┐ ┌──────────────┐
                    │ Paired   │ │ Two-Sample   │
                    │ t-Test   │ │ t-Test       │
                    └──────────┘ └──────────────┘
```

### Examples

| Scenario | Test Type | Why |
|----------|-----------|-----|
| Before/after treatment on same people | Paired | Same subjects measured twice |
| Left eye vs. right eye | Paired | Natural pairing within person |
| Twins, one in each group | Paired | Matched pairs |
| Males vs. females | Two-sample | Different individuals |
| Treatment A vs. Treatment B groups | Two-sample | Independent groups |
| Morning class vs. afternoon class | Two-sample | Different students |

---

## 📊 t-Distribution Critical Values Table

| Confidence Level | df = 5 | df = 10 | df = 20 | df = 30 | df = ∞ (z*) |
|------------------|--------|---------|---------|---------|-------------|
| **90%** | 2.015 | 1.812 | 1.725 | 1.697 | 1.645 |
| **95%** | 2.571 | 2.228 | 2.086 | 2.042 | 1.960 |
| **99%** | 4.032 | 3.169 | 2.845 | 2.750 | 2.576 |

**Observation:** As df increases, t* approaches z* (normal distribution).

---

## 🎯 Checking the Normal/Large Sample Condition

```
                    ┌───────────────────┐
                    │  Sample size n?   │
                    └────────┬──────────┘
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
         n < 15        15 ≤ n < 30        n ≥ 30
              │              │              │
              ▼              ▼              ▼
    ┌───────────────┐ ┌───────────────┐ ┌───────────────┐
    │Check for:     │ │Check for:     │ │CLT applies!   │
    │- Outliers     │ │- Extreme      │ │Condition met. │
    │- Strong skew  │ │  outliers     │ │               │
    │- Normality    │ │- Strong skew  │ │               │
    └───────┬───────┘ └───────┬───────┘ └───────────────┘
            │                 │
            ▼                 ▼
    Data should look   Mild skewness
    approximately      is acceptable
    normal            
```

---

## 📊 TI-84 Calculator Commands: Complete Reference

### One-Sample t-Procedures

| Task | Command | Location | Input |
|------|---------|----------|-------|
| **t-Interval** | TInterval | STAT → TESTS → 8 | Stats or Data; $\bar{x}$, $s_x$, n, C-Level |
| **t-Test** | T-Test | STAT → TESTS → 2 | μ₀, $\bar{x}$, $s_x$, n, alternative |

### Two-Sample t-Procedures

| Task | Command | Location | Notes |
|------|---------|----------|-------|
| **2-Sample t-Int** | 2-SampTInt | STAT → TESTS → 0 | Set Pooled: No |
| **2-Sample t-Test** | 2-SampTTest | STAT → TESTS → 4 | Set Pooled: No |

### Finding Critical Values

| Task | Command | Input |
|------|---------|-------|
| Find t* for C% | invT((1+C)/2, df) | e.g., invT(0.975, 24) for 95% |
| Find P-value | tcdf(t, 1E99, df) | For one-tailed right |
| Find P-value | tcdf(-1E99, t, df) | For one-tailed left |
| Find P-value | 2*tcdf(|t|, 1E99, df) | For two-tailed |

---

## ⚠️ Common Mistakes on AP Exam

| Mistake | Why Wrong | Correct Approach |
|---------|-----------|------------------|
| Using z instead of t | When σ unknown, use t | Almost always use t for means |
| df = n for one sample | Off by one | df = n - 1 |
| Pooled without justification | Assuming equal variances | Use unpooled (Pooled: No) on AP |
| Paired when should be two-sample | Misidentifying study design | Check: same subjects? |
| Two-sample when should be paired | Missing natural pairing | Look for before/after, matched |
| Skipping normality check for small n | Can't rely on CLT | Describe data shape for n < 30 |

---

## 🔗 Connection to Other Units

| Unit | Connection |
|------|------------|
| **Unit 5** | Sampling distribution of x̄ is the foundation |
| **Unit 6** | Same logic and structure, different statistic |
| **Unit 9** | Slope inference uses t-distribution |

---

## 📝 Free Response Template: t-Test

### STATE
- **Parameter:** μ = true mean [context] (OR μ_d for paired)
- **Hypotheses:** $H_0: \mu = $ [value] vs. $H_a: \mu$ [<, >, ≠] [value]
- **α =** [significance level]

### PLAN
- **Name:** [One-sample / Paired / Two-sample] t-test
- **Conditions:**
  - Random: [how sample was random]
  - 10%: [n] < 10% of [population]
  - Normal/Large sample: [n ≥ 30 OR describe data shape]

### DO
- **Statistics:** $\bar{x}$ = [value], s = [value], n = [value]
- **Test statistic:** t = [formula] = [value], df = [value]
- **P-value:** [value]

### CONCLUDE
Since P-value = [value] [< or ≥] α = [value], we [reject / fail to reject] $H_0$.
We [have / do not have] convincing evidence that [conclusion in context].
