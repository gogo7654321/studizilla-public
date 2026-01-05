# AP Statistics Unit 5 Study Guide

:::GUIDE:::
unit::=Unit 5
title::=📈 Unit 5: Sampling Distributions Complete Guide
desc::=Master sampling distributions, Central Limit Theorem, and the foundation for inference
diff::=Hard
time::=55 minutes
tags::=statistics, sampling distributions, CLT, sample mean, sample proportion
content::=

# 📈 Unit 5: Sampling Distributions

## 📋 Unit Overview

Sampling distributions are the bridge between probability and inference! This unit explores how sample statistics vary from sample to sample, laying the foundation for confidence intervals and hypothesis tests! 📊

:::TIMELINE:::
id::=history-sampling-distributions
title::=History of Sampling Distributions and the Central Limit Theorem
events::=[
  {"year": "1733", "event": "De Moivre's Discovery", "detail": "Abraham de Moivre discovered that binomial distributions approach a bell curve for large n, the first glimpse of the Central Limit Theorem."},
  {"year": "1809", "event": "Gauss's Error Theory", "detail": "Carl Friedrich Gauss showed that measurement errors follow a normal distribution, establishing the 'Gaussian' curve in scientific measurement."},
  {"year": "1810", "event": "Laplace's General Proof", "detail": "Pierre-Simon Laplace proved a general version of the Central Limit Theorem, showing means of large samples approach normality."},
  {"year": "1901", "event": "Pearson's Sampling Work", "detail": "Karl Pearson studied sampling distributions of statistics, developing the chi-square distribution and correlation coefficient."},
  {"year": "1908", "event": "Student's t-Distribution", "detail": "William Gosset (publishing as 'Student') discovered the t-distribution for small sample inference while working at Guinness Brewery."},
  {"year": "1920", "event": "Fisher's Contributions", "detail": "Ronald Fisher developed sampling distribution theory, showing how sample variance behaves and formalizing degrees of freedom."},
  {"year": "1922", "event": "Lindeberg's CLT Proof", "detail": "Jarl Lindeberg proved the CLT under general conditions, showing why it works for almost any population distribution."},
  {"year": "1935", "event": "Modern Sampling Theory", "detail": "Jerzy Neyman developed the theory of confidence intervals based on sampling distributions, connecting statistics to probability."}
]
:::/TIMELINE:::

### Essential Questions

| Question | Focus |
|----------|-------|
| What is a sampling distribution? | Distribution of a statistic |
| How does sample size matter? | Larger n = less variability |
| What is the Central Limit Theorem? | Distribution becomes normal |
| How does sampling distribution of p̂ behave? | Mean, spread, shape |
| How does sampling distribution of x̄ behave? | Mean, spread, shape |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Sampling distribution** | Distribution of sample statistic |
| **Standard error** | Standard deviation of statistic |
| **Central Limit Theorem** | Large n → normal distribution |
| **Unbiased estimator** | Mean equals parameter |
| **Variability** | Decreases with larger n |

---

## 📊 What is a Sampling Distribution?

### Definition

| Concept | Description |
|---------|-------------|
| **Sampling distribution** | Distribution of all possible values of a statistic |
| **From** | All possible samples of same size |
| **Key idea** | Statistics vary from sample to sample |

### Important Distinction

| Term | Description |
|------|-------------|
| **Population distribution** | Distribution of individual values |
| **Sample distribution** | Distribution of data in one sample |
| **Sampling distribution** | Distribution of a statistic |

### Why Sampling Distributions Matter

| Purpose | Description |
|---------|-------------|
| **Inference** | Basis for confidence intervals |
| **Probability** | Calculate likelihood of results |
| **Predict variability** | How much statistics vary |

---

## 🎯 Sampling Distribution of p̂ (Proportions)

### Setup

| Symbol | Meaning |
|--------|---------|
| **p** | Population proportion (parameter) |
| **p̂** | Sample proportion (statistic) |
| **n** | Sample size |

### Mean of p̂

| Formula | μ_p̂ = p |
|---------|---------|
| **Meaning** | p̂ is unbiased estimator of p |
| **On average** | p̂ equals p |

### Standard Deviation of p̂

| Formula | |
|---------|--|
| **σ_p̂** | = √[p(1-p)/n] |
| **Decreases as** | n increases |

### Condition for Standard Deviation Formula

| Condition | |
|-----------|--|
| **10% condition** | n ≤ 10% of population |
| **Why** | Without replacement needs this |

### Shape of Sampling Distribution

| Condition for Normality | |
|-------------------------|--|
| **Large counts** | np ≥ 10 AND n(1-p) ≥ 10 |
| **If met** | Approximately normal |

### Summary: Sampling Distribution of p̂

| Property | Value |
|----------|-------|
| **Mean** | μ_p̂ = p |
| **Std Dev** | σ_p̂ = √[p(1-p)/n] |
| **Shape** | Normal if np ≥ 10 and n(1-p) ≥ 10 |

---

## 📈 Using the Sampling Distribution of p̂

### Finding Probability of p̂

| Step | Action |
|------|--------|
| **1** | Check conditions (10%, large counts) |
| **2** | Calculate μ_p̂ = p |
| **3** | Calculate σ_p̂ = √[p(1-p)/n] |
| **4** | Use normalcdf |

### Z-Score for p̂

| Formula | |
|---------|--|
| **z** | = (p̂ - p) / √[p(1-p)/n] |

### Example

| Given | |
|-------|--|
| **p = 0.6** | Population proportion |
| **n = 100** | Sample size |
| **Find P(p̂ < 0.55)** | |

| Step | Calculation |
|------|-------------|
| **μ_p̂** | = 0.6 |
| **σ_p̂** | = √[0.6(0.4)/100] = 0.049 |
| **z** | = (0.55 - 0.6)/0.049 = -1.02 |
| **P(p̂ < 0.55)** | = normalcdf(-∞, -1.02) ≈ 0.154 |

---

## 📊 Sampling Distribution of x̄ (Means)

### Setup

| Symbol | Meaning |
|--------|---------|
| **μ** | Population mean (parameter) |
| **x̄** | Sample mean (statistic) |
| **σ** | Population standard deviation |
| **n** | Sample size |

### Mean of x̄

| Formula | μ_x̄ = μ |
|---------|---------|
| **Meaning** | x̄ is unbiased estimator of μ |
| **On average** | x̄ equals μ |

### Standard Deviation of x̄

| Formula | |
|---------|--|
| **σ_x̄** | = σ / √n |
| **Called** | Standard error of the mean |
| **Decreases as** | n increases |

### 10% Condition

| Condition | |
|-----------|--|
| **n ≤ 10% of population** | For sampling without replacement |
| **If violated** | Formula needs adjustment |

---

## 🔔 Central Limit Theorem (CLT)

### The Theorem

| Statement | |
|-----------|--|
| **For large n** | Sampling distribution of x̄ is approximately normal |
| **Regardless of** | Population distribution shape |
| **How large?** | n ≥ 30 (rule of thumb) |

### When is n "Large Enough"?

| Population Shape | Required n |
|------------------|------------|
| **Normal** | Any n |
| **Slightly skewed** | n ≥ 15 |
| **Strongly skewed** | n ≥ 30 or more |
| **Outliers present** | Larger n needed |

### Why CLT Matters

| Importance | Description |
|------------|-------------|
| **Powerful** | Works for any population |
| **Foundation** | For inference procedures |
| **Universal** | Explains many phenomena |

---

## 📐 Summary: Sampling Distribution of x̄

### Three Properties

| Property | Value/Condition |
|----------|-----------------|
| **Mean** | μ_x̄ = μ |
| **Std Dev** | σ_x̄ = σ/√n (10% condition) |
| **Shape** | Normal if population normal OR n ≥ 30 |

### Comparison

| n Increases | Effect |
|-------------|--------|
| **Mean** | Stays same (μ) |
| **Standard error** | Decreases (σ/√n) |
| **Shape** | Becomes more normal |

---

## 📈 Using the Sampling Distribution of x̄

### Finding Probability of x̄

| Step | Action |
|------|--------|
| **1** | Check conditions (normal pop or n ≥ 30, 10%) |
| **2** | Calculate μ_x̄ = μ |
| **3** | Calculate σ_x̄ = σ/√n |
| **4** | Use normalcdf |

### Z-Score for x̄

| Formula | |
|---------|--|
| **z** | = (x̄ - μ) / (σ/√n) |

### Example

| Given | |
|-------|--|
| **μ = 500** | Population mean |
| **σ = 100** | Population std dev |
| **n = 25** | Sample size |
| **Find P(x̄ > 520)** | |

| Step | Calculation |
|------|-------------|
| **μ_x̄** | = 500 |
| **σ_x̄** | = 100/√25 = 20 |
| **z** | = (520 - 500)/20 = 1.00 |
| **P(x̄ > 520)** | = 1 - normalcdf(-∞, 1) ≈ 0.159 |

---

## ⚠️ Common Errors

### Individual vs. Sample Mean

| Question About | Use |
|----------------|-----|
| **One individual** | σ (population std dev) |
| **Sample mean** | σ/√n (standard error) |

### Example Distinction

| Scenario | Standard Deviation |
|----------|-------------------|
| **P(one score > 520)** | σ = 100 |
| **P(mean of 25 > 520)** | σ/√n = 20 |

### The Sample Mean is Less Variable

| Why | Explanation |
|-----|-------------|
| **Averaging** | Extreme values cancel |
| **Larger n** | More cancellation |
| **Result** | x̄ closer to μ than individuals |

---

## 🔄 Effect of Sample Size

### On Standard Error

| n | σ_x̄ = σ/√n | Effect |
|---|-------------|--------|
| **4** | σ/2 | Half of σ |
| **9** | σ/3 | Third of σ |
| **25** | σ/5 | Fifth of σ |
| **100** | σ/10 | Tenth of σ |

### Quadrupling Rule

| To Cut Error in Half | |
|---------------------|--|
| **Quadruple n** | √4 = 2 in denominator |
| **Example** | n: 25 → 100 halves σ_x̄ |

---

## 📊 Sampling Distribution of Difference

### Difference of Proportions (p̂₁ - p̂₂)

| Property | Formula |
|----------|---------|
| **Mean** | μ = p₁ - p₂ |
| **Std Dev** | σ = √[p₁(1-p₁)/n₁ + p₂(1-p₂)/n₂] |
| **Shape** | Normal if large counts for both |

### Difference of Means (x̄₁ - x̄₂)

| Property | Formula |
|----------|---------|
| **Mean** | μ = μ₁ - μ₂ |
| **Std Dev** | σ = √[σ₁²/n₁ + σ₂²/n₂] |
| **Shape** | Normal if both populations normal or large n |

---

## 📝 Conditions Summary

### For Proportions (p̂)

| Condition | Check |
|-----------|-------|
| **Random** | Random sample or assignment |
| **10%** | n ≤ 10% of population |
| **Large counts** | np ≥ 10 and n(1-p) ≥ 10 |

### For Means (x̄)

| Condition | Check |
|-----------|-------|
| **Random** | Random sample or assignment |
| **10%** | n ≤ 10% of population |
| **Normal/Large sample** | Population normal OR n ≥ 30 |

---

## 📈 Visualizing Sampling Distributions

### As n Increases

| Property | Change |
|----------|--------|
| **Center** | Stays at parameter |
| **Spread** | Decreases |
| **Shape** | Becomes more normal |

### Graph Comparison

| Small n | Large n |
|---------|---------|
| Wide distribution | Narrow distribution |
| May not be normal | Approximately normal |
| More variability | Less variability |

---

## 🔍 Bias vs. Variability

### Bias

| Concept | Description |
|---------|-------------|
| **Definition** | Systematic error |
| **Center off** | Mean ≠ parameter |
| **Caused by** | Bad sampling method |
| **Fixed by** | Better design |

### Variability

| Concept | Description |
|---------|-------------|
| **Definition** | Spread of sampling distribution |
| **High variability** | Wide distribution |
| **Reduced by** | Larger sample size |

### Ideal

| Goal | How |
|------|-----|
| **Low bias** | Random sampling |
| **Low variability** | Large sample size |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Sampling distribution** | Distribution of statistic from all samples |
| **Standard error** | Standard deviation of a statistic |
| **Unbiased** | Mean of statistic equals parameter |
| **Central Limit Theorem** | Large n → normal distribution |
| **10% condition** | Sample ≤ 10% of population |
| **Large counts** | np ≥ 10 and n(1-p) ≥ 10 |
| **Variability** | Spread of sampling distribution |
| **Bias** | Systematic deviation from parameter |

---

## 🎯 AP Exam Strategies

### Free Response Tips

| Task | How to Answer |
|------|---------------|
| **Describe sampling distribution** | Mean, std dev, shape |
| **Check conditions** | State and verify each |
| **Calculate probability** | Show work with formula |
| **Explain CLT** | Large n → approx. normal |

### Common Mistakes

| Mistake | Correction |
|---------|------------|
| **Use σ instead of σ/√n** | For means, divide by √n |
| **Skip conditions** | Always state and check |
| **Normal without justification** | Need normal pop or n ≥ 30 |
| **Confuse p and p̂** | p = parameter, p̂ = statistic |

### Key Formulas

| Statistic | Mean | Std Dev | Normal If |
|-----------|------|---------|-----------|
| **p̂** | p | √[p(1-p)/n] | np ≥ 10, n(1-p) ≥ 10 |
| **x̄** | μ | σ/√n | Normal pop or n ≥ 30 |

---

**Good luck on your AP Statistics exam! 🍀📈📊**

Remember: The Central Limit Theorem is incredibly powerful - no matter the population shape, large samples give approximately normal sampling distributions!

---

## 🏆 Famous Statisticians in Sampling Theory

| Statistician | Contribution | Era |
|--------------|--------------|-----|
| **Abraham de Moivre** | First discovered normal approximation | 1733 |
| **Pierre-Simon Laplace** | Proved Central Limit Theorem | 1810 |
| **Carl Friedrich Gauss** | Normal distribution (Gaussian curve) | 1809 |
| **William Gosset (Student)** | t-distribution for small samples | 1908 |
| **Ronald A. Fisher** | Sampling distribution theory | 1920s |
| **Jerzy Neyman** | Confidence interval framework | 1930s |

---

## 📊 Worked Examples: Sampling Distribution of p̂

### Example 1: Check Conditions and Find Probability

**Problem:** A large company claims 80% of customers are satisfied. In a random sample of 200 customers, what is the probability that less than 75% are satisfied?

**Check Conditions:**
1. **Random:** Random sample stated ✓
2. **10%:** 200 is less than 10% of all customers (assuming large company) ✓
3. **Large counts:** np = 200(0.80) = 160 ≥ 10 ✓
   n(1-p) = 200(0.20) = 40 ≥ 10 ✓

**Sampling Distribution:**
- Mean: $\mu_{\hat{p}} = p = 0.80$
- Standard deviation: $\sigma_{\hat{p}} = \sqrt{\frac{p(1-p)}{n}} = \sqrt{\frac{0.80(0.20)}{200}} = \sqrt{0.0008} = 0.0283$
- Shape: Approximately normal (conditions met)

**Calculate:**
$$z = \frac{0.75 - 0.80}{0.0283} = \frac{-0.05}{0.0283} = -1.77$$

$$P(\hat{p} < 0.75) = P(Z < -1.77) = 0.0384$$

**TI-84:** normalcdf(-1E99, 0.75, 0.80, 0.0283) = 0.0384

**Interpretation:** If truly 80% are satisfied, there's only a 3.84% chance of getting a sample proportion below 75%. This would be surprising evidence against the company's claim.

### Example 2: Finding Critical Values

**Problem:** Using the same scenario, what sample proportion would be so low that only 5% of samples would have a proportion that low or lower?

**Solution:**
Find $\hat{p}$ such that $P(\hat{p} < x) = 0.05$

From standard normal: z = -1.645

$$\hat{p} = \mu_{\hat{p}} + z \cdot \sigma_{\hat{p}} = 0.80 + (-1.645)(0.0283) = 0.80 - 0.0465 = 0.7535$$

**TI-84:** invNorm(0.05, 0.80, 0.0283) = 0.7534

---

## 📈 Worked Examples: Sampling Distribution of x̄

### Example 1: Normal Population

**Problem:** IQ scores are normally distributed with μ = 100 and σ = 15. A random sample of 25 people is selected. What is the probability that the sample mean IQ exceeds 105?

**Check Conditions:**
1. **Random:** Stated ✓
2. **10%:** 25 < 10% of all people ✓
3. **Normal:** Population is normal (stated) ✓

**Sampling Distribution:**
- Mean: $\mu_{\bar{x}} = \mu = 100$
- Standard deviation: $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}} = \frac{15}{\sqrt{25}} = \frac{15}{5} = 3$
- Shape: Normal (population is normal)

**Calculate:**
$$z = \frac{105 - 100}{3} = \frac{5}{3} = 1.67$$

$$P(\bar{x} > 105) = P(Z > 1.67) = 1 - 0.9525 = 0.0475$$

**TI-84:** normalcdf(105, 1E99, 100, 3) = 0.0478

### Example 2: Non-Normal Population (CLT Application)

**Problem:** A company's call times are right-skewed with μ = 8 minutes and σ = 4 minutes. For a random sample of 50 calls, find P(x̄ < 7 minutes).

**Check Conditions:**
1. **Random:** Stated ✓
2. **10%:** 50 < 10% of all calls ✓
3. **Normal/Large sample:** n = 50 ≥ 30, so CLT applies ✓

**Sampling Distribution:**
- Mean: $\mu_{\bar{x}} = 8$
- Standard deviation: $\sigma_{\bar{x}} = \frac{4}{\sqrt{50}} = \frac{4}{7.07} = 0.566$
- Shape: Approximately normal by CLT

**Calculate:**
$$z = \frac{7 - 8}{0.566} = \frac{-1}{0.566} = -1.77$$

$$P(\bar{x} < 7) = P(Z < -1.77) = 0.0384$$

### Example 3: Individual vs. Sample Mean

**Problem:** Heights of adult women have μ = 64.5 inches and σ = 2.5 inches.

a) What is P(one randomly selected woman > 67 inches)?
b) What is P(sample mean of 36 women > 67 inches)?

**Solution:**

**Part a) Individual:**
$$z = \frac{67 - 64.5}{2.5} = 1.00$$
$$P(X > 67) = 0.1587$$

**Part b) Sample Mean:**
$$\sigma_{\bar{x}} = \frac{2.5}{\sqrt{36}} = 0.417$$
$$z = \frac{67 - 64.5}{0.417} = 6.00$$
$$P(\bar{x} > 67) \approx 0$$

**Key Insight:** It's common for an individual to be 67+ inches, but virtually impossible for a sample mean of 36 women to exceed 67 inches. This shows the power of averaging!

---

## 📐 Visualizing the Central Limit Theorem

```
Population Distribution (Right-Skewed):
▐
▐█
▐██
▐███
▐████▌
▐█████▌▌▌
▐██████▌▌▌▌▌▌
▐██████████▌▌▌▌▌▌▌▌▌

Sampling Distribution of x̄ (n = 30):
         ▐▌
        ▐██▌
       ▐████▌
      ▐██████▌
     ▐████████▌
    ▐██████████▌
   ▐████████████▌
  ▐██████████████▌
 ▐████████████████▌
▐██████████████████▌

Key observations:
• Same center (mean stays at μ)
• Much narrower spread (σ/√n)
• Approximately normal shape (CLT!)
```

---

## 🔢 Effect of Sample Size: Detailed Analysis

| Sample Size (n) | Standard Error (σ/√n) | Width Relative to σ |
|-----------------|----------------------|---------------------|
| 1 | σ/1 = σ | 100% |
| 4 | σ/2 = 0.5σ | 50% |
| 9 | σ/3 = 0.33σ | 33% |
| 16 | σ/4 = 0.25σ | 25% |
| 25 | σ/5 = 0.2σ | 20% |
| 36 | σ/6 = 0.167σ | 17% |
| 100 | σ/10 = 0.1σ | 10% |
| 400 | σ/20 = 0.05σ | 5% |

**Important Pattern:** To halve the standard error, you must QUADRUPLE the sample size!

---

## 📊 Difference of Two Proportions: Worked Example

**Problem:** In a poll, 65% of 400 adults (sample 1) favor a policy, and 58% of 350 adults (sample 2) favor it. Assuming these are the true proportions, what is P(p̂₁ - p̂₂ > 0.10)?

**Check Conditions:**
- Both samples random ✓
- Both satisfy 10% condition ✓
- Large counts for both: 400(0.65) = 260, 400(0.35) = 140, 350(0.58) = 203, 350(0.42) = 147 ✓

**Sampling Distribution of p̂₁ - p̂₂:**

Mean: $\mu = p_1 - p_2 = 0.65 - 0.58 = 0.07$

Standard Deviation: 
$$\sigma = \sqrt{\frac{p_1(1-p_1)}{n_1} + \frac{p_2(1-p_2)}{n_2}} = \sqrt{\frac{0.65(0.35)}{400} + \frac{0.58(0.42)}{350}}$$
$$= \sqrt{0.000569 + 0.000696} = \sqrt{0.001265} = 0.0356$$

**Calculate:**
$$z = \frac{0.10 - 0.07}{0.0356} = 0.84$$

$$P(\hat{p}_1 - \hat{p}_2 > 0.10) = P(Z > 0.84) = 0.2005$$

---

## 📈 Difference of Two Means: Worked Example

**Problem:** Factory A produces bolts with μ₁ = 10.0 mm, σ₁ = 0.2 mm. Factory B produces bolts with μ₂ = 10.1 mm, σ₂ = 0.3 mm. If 40 bolts are sampled from each, what is P(x̄₁ > x̄₂)?

**Sampling Distribution of x̄₁ - x̄₂:**

Mean: $\mu = \mu_1 - \mu_2 = 10.0 - 10.1 = -0.1$

Standard Deviation:
$$\sigma = \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}} = \sqrt{\frac{0.04}{40} + \frac{0.09}{40}} = \sqrt{0.00325} = 0.057$$

**Find P(x̄₁ - x̄₂ > 0):**
$$z = \frac{0 - (-0.1)}{0.057} = \frac{0.1}{0.057} = 1.75$$

$$P(\bar{x}_1 > \bar{x}_2) = P(Z > 1.75) = 0.0401$$

---

## 🎯 Conditions Checklist for AP Exam

### For Proportions (p̂)

| Condition | How to Check | How to Write |
|-----------|--------------|--------------|
| **Random** | SRS or random assignment | "The sample is a random sample of [population]" |
| **10%** | n ≤ 0.10N | "200 is less than 10% of all [population]" |
| **Large Counts** | np ≥ 10 AND n(1-p) ≥ 10 | "np = 200(0.8) = 160 ≥ 10 and n(1-p) = 200(0.2) = 40 ≥ 10" |

### For Means (x̄)

| Condition | How to Check | How to Write |
|-----------|--------------|--------------|
| **Random** | SRS or random assignment | "The sample is a random sample of [population]" |
| **10%** | n ≤ 0.10N | "50 is less than 10% of all [population]" |
| **Normal/Large Sample** | Pop normal OR n ≥ 30 | "n = 50 ≥ 30, so CLT ensures approximately normal distribution" |

---

## ⚠️ Common AP Exam Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| Using σ instead of σ/√n | For sample means, standard error is σ/√n | Always divide σ by √n for means |
| Checking np̂ instead of np | Conditions use PARAMETER p, not statistic p̂ | Use claimed/true p value |
| Saying "population is normal" without evidence | Need justification | Check graph or state n ≥ 30 |
| Confusing p with p̂ | p = parameter (true), p̂ = statistic (sample) | p is what we assume, p̂ is what we observe |
| Skipping condition checks | Must show all conditions | State each condition with verification |

---

## 📊 TI-84 Calculator Commands

| Task | Command | Example |
|------|---------|---------|
| P(X < value) for normal | normalcdf(-1E99, value, μ, σ) | normalcdf(-1E99, 0.75, 0.80, 0.0283) |
| P(X > value) for normal | normalcdf(value, 1E99, μ, σ) | normalcdf(105, 1E99, 100, 3) |
| P(a < X < b) for normal | normalcdf(a, b, μ, σ) | normalcdf(97, 103, 100, 3) |
| Find value from percentile | invNorm(area, μ, σ) | invNorm(0.05, 0.80, 0.0283) |

---

## 🔗 Connection to Later Units

| Unit | Connection to Sampling Distributions |
|------|-------------------------------------|
| **Unit 6** | CI and tests for proportions use sampling distribution of p̂ |
| **Unit 7** | CI and tests for means use sampling distribution of x̄ |
| **Unit 8** | Chi-square based on sampling distribution of test statistic |
| **Unit 9** | Regression inference uses sampling distribution of slope b |

**The Big Picture:** Understanding sampling distributions is ESSENTIAL because ALL of statistical inference is based on knowing how sample statistics behave when we take repeated samples!
