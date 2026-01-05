# AP Statistics Unit 6 Study Guide

:::GUIDE:::
unit::=Unit 6
title::=📈 Unit 6: Inference for Categorical Data - Proportions Complete Guide
desc::=Master confidence intervals and hypothesis tests for proportions
diff::=Hard
time::=60 minutes
tags::=statistics, inference, proportions, confidence intervals, hypothesis tests, z-test
content::=

# 📈 Unit 6: Inference for Categorical Data - Proportions

## 📋 Unit Overview

Now we use sampling distributions for inference! This unit covers confidence intervals and hypothesis tests for population proportions. Master these procedures to draw conclusions from data! 🎯

:::TIMELINE:::
id::=history-statistical-inference
title::=History of Statistical Inference
events::=[
  {"year": "1710", "event": "Arbuthnot's Significance Test", "detail": "John Arbuthnot performed the first statistical significance test, analyzing the ratio of male to female births in London over 82 years."},
  {"year": "1900", "event": "Pearson's Chi-Square", "detail": "Karl Pearson introduced the chi-square test for goodness of fit, enabling formal testing of categorical data."},
  {"year": "1908", "event": "Student's t-Test", "detail": "William Gosset published the t-test for small samples, revolutionizing inference when sample sizes are limited."},
  {"year": "1925", "event": "Fisher's Statistical Methods", "detail": "Ronald Fisher published 'Statistical Methods for Research Workers,' establishing P-values and significance testing framework."},
  {"year": "1928", "event": "Neyman-Pearson Theory", "detail": "Jerzy Neyman and Egon Pearson developed hypothesis testing theory with Type I/II errors and power."},
  {"year": "1934", "event": "Confidence Intervals", "detail": "Neyman introduced the formal theory of confidence intervals as an alternative to significance tests."},
  {"year": "1937", "event": "Neyman's Optimal Testing", "detail": "Neyman developed the theory of optimal tests, showing how to maximize power while controlling error rates."},
  {"year": "1945", "event": "Wald's Sequential Analysis", "detail": "Abraham Wald developed sequential testing methods, allowing decisions during data collection."}
]
:::/TIMELINE:::

### Essential Questions

| Question | Focus |
|----------|-------|
| What is a confidence interval? | Estimate with margin of error |
| What is hypothesis testing? | Test a claim about population |
| How do we test proportions? | One-sample z-procedures |
| What can go wrong? | Type I and II errors |
| How do we interpret results? | In context |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Confidence interval** | Range of plausible values |
| **Hypothesis test** | Procedure to test a claim |
| **p-value** | Probability of getting result or more extreme |
| **Significance level** | Threshold for rejecting H₀ |
| **Margin of error** | Half-width of CI |

---

## 📊 Confidence Intervals for Proportions

### The Idea

| Concept | Description |
|---------|-------------|
| **Point estimate** | Single value (p̂) |
| **Confidence interval** | Range of plausible values |
| **Formula** | Point estimate ± margin of error |

### Confidence Interval Formula

| Formula | |
|---------|--|
| **CI** | = p̂ ± z* × √[p̂(1-p̂)/n] |

### Components

| Component | Meaning |
|-----------|---------|
| **p̂** | Sample proportion |
| **z*** | Critical value |
| **√[p̂(1-p̂)/n]** | Standard error |
| **z* × SE** | Margin of error |

### Critical Values (z*)

| Confidence Level | z* |
|------------------|----|
| **90%** | 1.645 |
| **95%** | 1.960 |
| **99%** | 2.576 |

---

## ✅ Conditions for Proportion CI

### Three Conditions

| Condition | Check |
|-----------|-------|
| **Random** | Random sample or assignment |
| **10%** | n ≤ 10% of population |
| **Large counts** | np̂ ≥ 10 AND n(1-p̂) ≥ 10 |

### Why Each Condition?

| Condition | Purpose |
|-----------|---------|
| **Random** | Avoid bias |
| **10%** | Standard error formula valid |
| **Large counts** | Normal approximation valid |

---

## 📝 Interpreting Confidence Intervals

### Correct Interpretation

| Template | |
|----------|--|
| **Say** | "We are [C]% confident that the true proportion of [context] is between [lower] and [upper]." |

### What Confidence Level Means

| Correct | Incorrect |
|---------|-----------|
| If we repeated sampling many times, [C]% of intervals would contain true p | There's a [C]% chance true p is in this interval |

### Common Mistakes

| Mistake | Why Wrong |
|---------|-----------|
| "[C]% probability p is in interval" | p is fixed, not random |
| "[C]% of data" | CI is about parameter, not data |
| "p̂ is in interval" | p̂ is always in center |

---

## 📐 Margin of Error and Sample Size

### Margin of Error

| Formula | ME = z* × √[p̂(1-p̂)/n] |
|---------|----------------------|

### Factors Affecting ME

| Factor | Effect |
|--------|--------|
| **Higher confidence** | Larger z* → larger ME |
| **Larger n** | Smaller ME |
| **p̂ closer to 0.5** | Larger ME |

### Choosing Sample Size

| Formula | |
|---------|--|
| **n** | = (z*/ME)² × p̂(1-p̂) |
| **Conservative** | Use p̂ = 0.5 for max n |

### Sample Size Formula (Conservative)

| Formula | n = (z*/ME)² × 0.25 |
|---------|---------------------|

---

## 🧪 Hypothesis Testing Overview

### The Logic

| Step | Description |
|------|-------------|
| **1** | Assume null hypothesis true |
| **2** | Calculate probability of data |
| **3** | If very unlikely, reject null |

### Hypotheses

| Hypothesis | Description |
|------------|-------------|
| **H₀ (null)** | No effect, no difference |
| **Hₐ (alternative)** | What we're trying to show |

### Types of Alternative Hypotheses

| Type | Symbols |
|------|---------|
| **Two-sided** | Hₐ: p ≠ p₀ |
| **One-sided (left)** | Hₐ: p < p₀ |
| **One-sided (right)** | Hₐ: p > p₀ |

---

## 📊 One-Sample z-Test for Proportions

### Hypotheses

| Null | H₀: p = p₀ |
|------|------------|
| **Alternative** | Hₐ: p ≠ p₀, p < p₀, or p > p₀ |

### Test Statistic

| Formula | |
|---------|--|
| **z** | = (p̂ - p₀) / √[p₀(1-p₀)/n] |

### Note on Standard Error

| For Test | For CI |
|----------|--------|
| Use p₀ (null value) | Use p̂ (sample value) |
| √[p₀(1-p₀)/n] | √[p̂(1-p̂)/n] |

### Conditions (Same as CI)

| Condition | Check |
|-----------|-------|
| **Random** | Random sample |
| **10%** | n ≤ 10% of population |
| **Large counts** | np₀ ≥ 10 AND n(1-p₀) ≥ 10 |

---

## 📈 P-Value

### Definition

| Concept | Description |
|---------|-------------|
| **P-value** | Probability of getting result as extreme or more extreme, assuming H₀ true |

### Calculating P-Value

| Alternative | P-value |
|-------------|---------|
| **Hₐ: p > p₀** | P(Z > z) |
| **Hₐ: p < p₀** | P(Z < z) |
| **Hₐ: p ≠ p₀** | 2 × P(Z > |z|) |

### Interpreting P-Value

| P-value | Interpretation |
|---------|----------------|
| **Small** | Strong evidence against H₀ |
| **Large** | Weak evidence against H₀ |
| **< α** | Statistically significant |
| **≥ α** | Not statistically significant |

---

## 📋 Significance Level (α)

### Definition

| Concept | Description |
|---------|-------------|
| **α** | Threshold for rejecting H₀ |
| **Common values** | 0.05, 0.01, 0.10 |

### Decision Rule

| If | Then |
|----|------|
| **P-value < α** | Reject H₀ |
| **P-value ≥ α** | Fail to reject H₀ |

### Connection to Confidence Intervals

| α | Confidence Level |
|---|-----------------|
| **0.05** | 95% |
| **0.01** | 99% |
| **0.10** | 90% |

---

## ✍️ Four-Step Process

### State

| Component | What to Write |
|-----------|---------------|
| **Hypotheses** | H₀ and Hₐ with context |
| **Parameter** | Define p in context |
| **Significance level** | State α |

### Plan

| Component | What to Write |
|-----------|---------------|
| **Name procedure** | One-sample z-test for proportions |
| **Check conditions** | Random, 10%, Large counts |

### Do

| Component | What to Write |
|-----------|---------------|
| **Calculate test statistic** | Show z formula and value |
| **Calculate P-value** | Show calculation |

### Conclude

| Component | What to Write |
|-----------|---------------|
| **Compare P-value to α** | State comparison |
| **Decision** | Reject or fail to reject H₀ |
| **Context** | Answer in context of problem |

---

## 📝 Writing Conclusions

### Reject H₀

| Template | |
|----------|--|
| **Say** | "Since P-value = [value] < α = [α], we reject H₀. We have convincing evidence that [Hₐ in context]." |

### Fail to Reject H₀

| Template | |
|----------|--|
| **Say** | "Since P-value = [value] ≥ α = [α], we fail to reject H₀. We do not have convincing evidence that [Hₐ in context]." |

### Never Say "Accept H₀"

| Wrong | Right |
|-------|-------|
| "Accept H₀" | "Fail to reject H₀" |
| "Prove H₀" | "Not enough evidence against H₀" |

---

## ⚠️ Type I and Type II Errors

### Error Types

| Error | Description |
|-------|-------------|
| **Type I** | Reject H₀ when H₀ is true |
| **Type II** | Fail to reject H₀ when H₀ is false |

### Error Table

| | H₀ True | H₀ False |
|--|---------|----------|
| **Reject H₀** | Type I Error (α) | Correct ✓ |
| **Fail to Reject** | Correct ✓ | Type II Error (β) |

### Probabilities

| Symbol | Meaning |
|--------|---------|
| **α** | P(Type I Error) |
| **β** | P(Type II Error) |
| **1 - β** | Power |

### Context Examples

| Scenario | Type I Error | Type II Error |
|----------|--------------|---------------|
| **Drug trial** | Say drug works when it doesn't | Say drug doesn't work when it does |
| **Court trial** | Convict innocent | Acquit guilty |

---

## 💪 Power

### Definition

| Concept | Description |
|---------|-------------|
| **Power** | P(Reject H₀ | H₀ is false) |
| **Formula** | Power = 1 - β |
| **Meaning** | Ability to detect effect |

### Factors Affecting Power

| Factor | Effect on Power |
|--------|-----------------|
| **Larger n** | ↑ Power |
| **Larger α** | ↑ Power |
| **Larger effect size** | ↑ Power |
| **Less variability** | ↑ Power |

### Trade-offs

| α | Type I Error | Power |
|---|--------------|-------|
| **↓** | ↓ | ↓ |
| **↑** | ↑ | ↑ |

---

## 🔄 Confidence Interval vs. Hypothesis Test

### Duality

| If | Then |
|----|------|
| **p₀ not in 95% CI** | Reject H₀ at α = 0.05 |
| **p₀ in 95% CI** | Fail to reject H₀ at α = 0.05 |

### When to Use Each

| Use CI When | Use Test When |
|-------------|---------------|
| Estimating unknown p | Testing specific value |
| Want range of values | Have claim to test |
| No specific claim | Need P-value |

---

## 📊 Calculator Commands

### Confidence Interval

| TI-84 | Steps |
|-------|-------|
| **1-PropZInt** | STAT → TESTS → A |
| **Enter** | x (successes), n, C-Level |

### Hypothesis Test

| TI-84 | Steps |
|-------|-------|
| **1-PropZTest** | STAT → TESTS → 5 |
| **Enter** | p₀, x, n, alternative |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Confidence interval** | Range of plausible parameter values |
| **Margin of error** | Half-width of CI |
| **Confidence level** | % of intervals containing parameter |
| **Critical value** | z* for given confidence |
| **Point estimate** | Single value estimate (p̂) |
| **Null hypothesis** | Claim of no effect |
| **Alternative hypothesis** | What we're trying to show |
| **P-value** | Probability of result assuming H₀ |
| **Significance level** | Threshold for rejecting H₀ |
| **Type I error** | Reject true H₀ |
| **Type II error** | Fail to reject false H₀ |
| **Power** | Probability of rejecting false H₀ |
| **Statistically significant** | P-value < α |

---

## 🎯 AP Exam Strategies

### Free Response Tips

| Section | Key Points |
|---------|------------|
| **State** | Define parameter in context |
| **Plan** | Check all three conditions |
| **Do** | Show formulas and calculations |
| **Conclude** | Answer in context |

### Common Mistakes

| Mistake | Correction |
|---------|------------|
| **Use p̂ in test SE** | Use p₀ for test statistic |
| **"Accept H₀"** | Say "fail to reject" |
| **Skip conditions** | Always state and verify |
| **No context in conclusion** | Must relate to problem |

### Checklist

| Task | Check |
|------|-------|
| ☐ | Define parameter |
| ☐ | State hypotheses |
| ☐ | Check conditions |
| ☐ | Calculate z and P-value |
| ☐ | Compare to α |
| ☐ | Conclude in context |

---

**Good luck on your AP Statistics exam! 🍀📈🎯**

Remember: Always use p₀ for the test statistic denominator. Always interpret in context. Never say "accept H₀"!

---

## 🏆 Famous Statisticians in Inference

| Statistician | Contribution | Era |
|--------------|--------------|-----|
| **Karl Pearson** | Chi-square test, P-values concept | 1900 |
| **Ronald A. Fisher** | P-values, significance testing | 1920s |
| **Jerzy Neyman** | Confidence intervals, hypothesis testing theory | 1930s |
| **Egon Pearson** | Neyman-Pearson hypothesis testing | 1930s |
| **Abraham Wald** | Sequential analysis, decision theory | 1940s |

---

## 📊 Complete Worked Example: Confidence Interval

**Problem:** A polling organization surveys 1,200 randomly selected registered voters and finds that 564 favor a ballot proposition. Construct and interpret a 95% confidence interval for the true proportion of all registered voters who favor the proposition.

### Step 1: Calculate Point Estimate
$$\hat{p} = \frac{564}{1200} = 0.47$$

### Step 2: Check Conditions
- **Random:** Random sample of registered voters ✓
- **10%:** 1,200 < 10% of all registered voters ✓  
- **Large counts:** 
  - $n\hat{p} = 1200(0.47) = 564 \geq 10$ ✓
  - $n(1-\hat{p}) = 1200(0.53) = 636 \geq 10$ ✓

### Step 3: Calculate Confidence Interval
$$SE = \sqrt{\frac{\hat{p}(1-\hat{p})}{n}} = \sqrt{\frac{0.47(0.53)}{1200}} = \sqrt{0.000208} = 0.0144$$

For 95% confidence: $z^* = 1.96$

$$CI = \hat{p} \pm z^* \cdot SE = 0.47 \pm 1.96(0.0144) = 0.47 \pm 0.0282$$

$$CI = (0.442, 0.498)$$

### Step 4: Interpretation
"We are 95% confident that the true proportion of all registered voters who favor the proposition is between 0.442 (44.2%) and 0.498 (49.8%)."

**TI-84:** STAT → TESTS → A:1-PropZInt
Enter: x = 564, n = 1200, C-Level = 0.95
Result: (0.4418, 0.4982)

---

## 🧪 Complete Worked Example: Hypothesis Test

**Problem:** A company claims that at least 90% of its packages are delivered on time. A consumer group surveys 400 randomly selected packages and finds that 348 were delivered on time. At α = 0.05, is there convincing evidence that the true proportion is less than 90%?

### STATE
**Parameter:** p = true proportion of all packages delivered on time

**Hypotheses:**
- $H_0: p = 0.90$ (company's claim is true)
- $H_a: p < 0.90$ (proportion is less than claimed)

**Significance level:** α = 0.05

### PLAN
**Procedure:** One-sample z-test for a proportion

**Conditions:**
- **Random:** Random sample of 400 packages ✓
- **10%:** 400 < 10% of all packages delivered ✓
- **Large counts:** 
  - $np_0 = 400(0.90) = 360 \geq 10$ ✓
  - $n(1-p_0) = 400(0.10) = 40 \geq 10$ ✓

### DO
**Sample statistic:** $\hat{p} = \frac{348}{400} = 0.87$

**Test statistic:**
$$z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}} = \frac{0.87 - 0.90}{\sqrt{\frac{0.90(0.10)}{400}}} = \frac{-0.03}{\sqrt{0.000225}} = \frac{-0.03}{0.015} = -2.00$$

**P-value:**
$$P(Z < -2.00) = 0.0228$$

**TI-84:** STAT → TESTS → 5:1-PropZTest
Enter: p₀ = 0.90, x = 348, n = 400, prop < p₀
Result: z = -2.00, p = 0.0228

### CONCLUDE
Since P-value = 0.0228 < α = 0.05, we reject $H_0$.

**Conclusion in context:** We have convincing evidence that the true proportion of packages delivered on time is less than 90%. The company's claim appears to be overstated.

---

## 📐 Sample Size Determination: Worked Example

**Problem:** A politician wants to estimate the proportion of voters who favor a new policy with a margin of error of at most 3 percentage points with 95% confidence. What sample size is needed?

### Method 1: Conservative Approach (use p̂ = 0.5)

$$n = \left(\frac{z^*}{ME}\right)^2 \cdot \hat{p}(1-\hat{p}) = \left(\frac{1.96}{0.03}\right)^2 \cdot (0.5)(0.5)$$

$$n = (65.33)^2 \cdot 0.25 = 4268.4 \cdot 0.25 = 1067.1$$

**Answer:** n = 1,068 (always round UP)

### Method 2: If Prior Estimate Available

If previous polls suggest p ≈ 0.60:

$$n = \left(\frac{1.96}{0.03}\right)^2 \cdot (0.60)(0.40) = 4268.4 \cdot 0.24 = 1024.4$$

**Answer:** n = 1,025

**Note:** Using p̂ = 0.5 is conservative because 0.5(0.5) = 0.25 is the maximum value of p(1-p).

---

## ⚖️ Type I and Type II Errors: Detailed Examples

### Medical Testing Example

**Context:** Testing if a new drug is effective
- $H_0$: Drug is not effective
- $H_a$: Drug is effective

| Error Type | What Happens | Consequence |
|------------|--------------|-------------|
| **Type I** | Conclude drug works when it doesn't | Patients take ineffective drug, wasted resources |
| **Type II** | Fail to detect effective drug | Patients miss beneficial treatment |

### Quality Control Example

**Context:** Testing if defect rate exceeds acceptable level
- $H_0$: Defect rate ≤ 5%
- $H_a$: Defect rate > 5%

| Error Type | What Happens | Consequence |
|------------|--------------|-------------|
| **Type I** | Stop production unnecessarily | Lost productivity, investigation costs |
| **Type II** | Ship defective products | Customer complaints, recalls, liability |

### Balancing Errors

| To Decrease | Effect on Other Error |
|-------------|----------------------|
| Type I error (lower α) | Type II error increases |
| Type II error (increase power) | Need larger n or higher α |

---

## 💪 Power Analysis: Worked Example

**Problem:** A researcher plans to test $H_0: p = 0.50$ vs. $H_a: p > 0.50$ at α = 0.05. If the true proportion is 0.60, what is the power of the test with n = 100?

### Step 1: Find Critical Value
Under $H_0$: $\sigma_{\hat{p}} = \sqrt{\frac{0.50(0.50)}{100}} = 0.05$

Critical value: $\hat{p}^* = p_0 + z^* \cdot \sigma_0 = 0.50 + 1.645(0.05) = 0.582$

(Reject $H_0$ if $\hat{p} > 0.582$)

### Step 2: Calculate Power
Under $H_a$ (p = 0.60): $\sigma_{\hat{p}} = \sqrt{\frac{0.60(0.40)}{100}} = 0.049$

$$z = \frac{0.582 - 0.60}{0.049} = -0.37$$

$$\text{Power} = P(Z > -0.37) = 0.644$$

**Interpretation:** If the true proportion is 0.60, there's a 64.4% chance of correctly rejecting $H_0$.

### Increasing Power

| Strategy | Effect |
|----------|--------|
| Increase n to 200 | Power ≈ 0.83 |
| Increase α to 0.10 | Power ≈ 0.74 |
| True p further from 0.50 | Power increases |

---

## 🔄 Two-Sample z-Test for Proportions

### When to Use
Comparing proportions from two independent groups.

### Hypotheses
- $H_0: p_1 = p_2$ (or $p_1 - p_2 = 0$)
- $H_a: p_1 \neq p_2$ (or $<$ or $>$)

### Pooled Proportion
$$\hat{p}_c = \frac{x_1 + x_2}{n_1 + n_2}$$

### Test Statistic
$$z = \frac{(\hat{p}_1 - \hat{p}_2) - 0}{\sqrt{\hat{p}_c(1-\hat{p}_c)\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}}$$

### Worked Example

**Problem:** In a study, 84 of 200 patients given Drug A improved, while 112 of 250 patients given Drug B improved. Is there a significant difference at α = 0.05?

**Calculations:**
- $\hat{p}_1 = 84/200 = 0.42$
- $\hat{p}_2 = 112/250 = 0.448$
- $\hat{p}_c = (84+112)/(200+250) = 196/450 = 0.436$

$$SE = \sqrt{0.436(0.564)\left(\frac{1}{200} + \frac{1}{250}\right)} = \sqrt{0.246 \cdot 0.009} = 0.047$$

$$z = \frac{0.42 - 0.448}{0.047} = -0.60$$

**P-value:** $2P(Z < -0.60) = 2(0.2743) = 0.549$

**Conclusion:** Since P-value = 0.549 > 0.05, we fail to reject $H_0$. There is not convincing evidence of a difference in improvement rates between the two drugs.

---

## 📊 TI-84 Calculator Commands: Complete Reference

### One-Sample Proportion

| Task | Command | Location |
|------|---------|----------|
| **Confidence Interval** | 1-PropZInt | STAT → TESTS → A |
| **Hypothesis Test** | 1-PropZTest | STAT → TESTS → 5 |

**1-PropZInt Input:**
- x: number of successes
- n: sample size  
- C-Level: confidence level (e.g., 0.95)

**1-PropZTest Input:**
- p₀: hypothesized proportion
- x: number of successes
- n: sample size
- Alternative: ≠p₀, <p₀, or >p₀

### Two-Sample Proportion

| Task | Command | Location |
|------|---------|----------|
| **Confidence Interval** | 2-PropZInt | STAT → TESTS → B |
| **Hypothesis Test** | 2-PropZTest | STAT → TESTS → 6 |

---

## ⚠️ Common AP Exam Mistakes and Corrections

| Mistake | Why Wrong | Correct Approach |
|---------|-----------|------------------|
| Using p̂ in test statistic SE | Under $H_0$, we assume p = p₀ | Use $\sqrt{p_0(1-p_0)/n}$ for SE |
| "Accept $H_0$" | We never prove $H_0$ true | Say "fail to reject $H_0$" |
| Checking n(1-p̂) for test | Conditions for test use p₀ | Check $np_0$ and $n(1-p_0)$ |
| P-value interpretation wrong | P-value is probability of data, not hypothesis | "Probability of getting this result or more extreme IF $H_0$ is true" |
| No context in conclusion | Must relate to original question | "convincing evidence that [context]" |
| Wrong direction for one-sided | Must match $H_a$ direction | Check: is z in the direction of $H_a$? |

---

## 🔗 Connection to Other Units

| Unit | Connection |
|------|------------|
| **Unit 5** | Sampling distribution of p̂ provides foundation |
| **Unit 7** | Same logic applies to means (with t) |
| **Unit 8** | Chi-square uses similar hypothesis testing structure |
| **Unit 9** | Same four-step process for regression inference |

---

## 📝 Free Response Template

### For Confidence Interval:

**Identify:** We will construct a __% confidence interval for p = [parameter in context].

**Conditions:**
- Random: [state how sample was random]
- 10%: [n] < 10% of [population]
- Large counts: $n\hat{p}$ = [value] ≥ 10 and $n(1-\hat{p})$ = [value] ≥ 10 ✓

**Calculate:** 
$\hat{p}$ = [value], $SE$ = [formula and value], $z^*$ = [value]
$CI$ = [interval]

**Interpret:** We are __% confident that the true proportion of [context] is between [lower] and [upper].

### For Hypothesis Test:

**State:** 
- $H_0$: p = [value] where p = [context]
- $H_a$: p [<, >, ≠] [value]
- α = [value]

**Plan:** One-sample z-test for proportion
- Random: ✓
- 10%: ✓
- Large counts: ✓

**Do:** $\hat{p}$ = [value], $z$ = [value], P-value = [value]

**Conclude:** Since P-value [<, ≥] α, we [reject/fail to reject] $H_0$. We [have/don't have] convincing evidence that [conclusion in context].
