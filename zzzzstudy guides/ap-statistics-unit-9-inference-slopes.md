# AP Statistics Unit 9 Study Guide

:::GUIDE:::
unit::=Unit 9
title::=📈 Unit 9: Inference for Quantitative Data - Slopes Complete Guide
desc::=Master linear regression inference, confidence intervals and hypothesis tests for slope
diff::=Hard
time::=55 minutes
tags::=statistics, regression, inference, slope, t-test, confidence interval
content::=

# 📈 Unit 9: Inference for Quantitative Data - Slopes

## 📋 Unit Overview

Is there really a linear relationship? This unit covers inference for regression slopes, allowing us to test whether there's evidence of a true linear relationship in the population. Master these procedures to draw conclusions about relationships! 📊

:::TIMELINE:::
id::=history-regression-inference
title::=History of Regression Inference
events::=[
  {"year": "1805", "event": "Legendre's Least Squares", "detail": "Adrien-Marie Legendre published the method of least squares, establishing how to find the best-fitting line through data points."},
  {"year": "1809", "event": "Gauss's Error Theory", "detail": "Carl Friedrich Gauss showed that least squares is optimal when errors follow a normal distribution, connecting regression to probability."},
  {"year": "1885", "event": "Galton's Regression", "detail": "Francis Galton discovered regression to the mean and coined the term 'regression,' studying heights of parents and children."},
  {"year": "1896", "event": "Pearson's Correlation", "detail": "Karl Pearson formalized the correlation coefficient and connected it mathematically to the regression slope."},
  {"year": "1908", "event": "Student's t-Distribution", "detail": "William Gosset's t-distribution became essential for inference about regression slopes with small samples."},
  {"year": "1922", "event": "Fisher's Regression Theory", "detail": "Ronald Fisher developed the complete theory of regression inference, including the sampling distribution of the slope and standard errors."},
  {"year": "1935", "event": "ANOVA and Regression", "detail": "Fisher showed the connection between regression and analysis of variance, unifying these approaches."},
  {"year": "1973", "event": "Regression Diagnostics", "detail": "Cook and Weisberg developed formal methods for checking regression assumptions, including residual analysis and influence measures."}
]
:::/TIMELINE:::

### Essential Questions

| Question | Focus |
|----------|-------|
| What is the regression model? | Population vs. sample |
| How do we test for linear relationship? | Test β = 0 |
| What is the confidence interval for slope? | Estimate true slope |
| What conditions must be checked? | LINE conditions |
| What does the output tell us? | Computer output interpretation |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **β (beta)** | Population slope |
| **b** | Sample slope |
| **Standard error of b** | Variability in slope |
| **t-test for slope** | Test if β = 0 |
| **LINE conditions** | Requirements for inference |

---

## 📊 The Regression Model

### Population Model

| Formula | μᵧ = α + βx |
|---------|-------------|
| **α** | Population y-intercept |
| **β** | Population slope |
| **μᵧ** | Mean y for given x |

### Full Model with Error

| Formula | y = α + βx + ε |
|---------|----------------|
| **ε** | Random error |
| **ε ~ N(0, σ)** | Errors are normal |

### Sample Estimates

| Population | Sample |
|------------|--------|
| **α** | a (intercept) |
| **β** | b (slope) |
| **σ** | s (residual std dev) |

---

## 📐 Hypothesis Test for Slope

### Hypotheses

| Null | H₀: β = 0 |
|------|-----------|
| **Alternative** | Hₐ: β ≠ 0, β < 0, or β > 0 |

### What H₀: β = 0 Means

| Interpretation | |
|----------------|--|
| **No linear relationship** | Slope is zero |
| **x doesn't predict y** | No linear association |
| **Horizontal line** | If true |

### Test Statistic

| Formula | |
|---------|--|
| **t** | = (b - 0) / SEᵦ |
| **df** | = n - 2 |

### Standard Error of Slope

| Symbol | SEᵦ or Sᵦ |
|--------|-----------|
| **Provided** | On computer output |
| **Measures** | Variability in b |

### P-Value

| Two-sided | 2 × P(T > |t|) |
|-----------|----------------|
| **One-sided** | P(T > t) or P(T < t) |

---

## 📊 Confidence Interval for Slope

### Formula

| CI | = b ± t* × SEᵦ |
|----|----------------|

### Components

| Component | Meaning |
|-----------|---------|
| **b** | Sample slope |
| **t*** | Critical value with df = n-2 |
| **SEᵦ** | Standard error of slope |

### Degrees of Freedom

| df | = n - 2 |
|----|---------|
| **Why** | Two parameters estimated (α and β) |

### Interpretation

| Template | |
|----------|--|
| **Say** | "We are [C]% confident that the true slope of the relationship between [x] and [y] is between [lower] and [upper]." |

---

## ✅ Conditions for Regression Inference

### LINE Conditions

| Letter | Condition | Description |
|--------|-----------|-------------|
| **L** | Linear | Relationship is linear |
| **I** | Independent | Observations independent |
| **N** | Normal | Residuals are normal |
| **E** | Equal variance | Residual spread constant |

### Checking Conditions

| Condition | How to Check |
|-----------|--------------|
| **Linear** | Scatterplot and residual plot |
| **Independent** | Random sampling (10% rule) |
| **Normal** | Histogram/Normal plot of residuals |
| **Equal variance** | Residual plot - no fan shape |

### Residual Plot Analysis

| Pattern | Condition |
|---------|-----------|
| **Random scatter** | L ✓ and E ✓ |
| **Curved pattern** | L violated |
| **Fan/trumpet shape** | E violated |

---

## 📈 Reading Computer Output

### Typical Output Format

```
Predictor    Coef      SE Coef    T       P
Constant     12.345    2.567      4.81    0.000
x            1.234     0.234      5.27    0.000

S = 3.456    R-Sq = 65.4%    R-Sq(adj) = 64.1%
```

### Key Values

| Value | Location | Meaning |
|-------|----------|---------|
| **b** | Coef for x | Sample slope |
| **a** | Coef for Constant | Sample intercept |
| **SEᵦ** | SE Coef for x | Std error of slope |
| **t** | T column for x | Test statistic |
| **P** | P column for x | P-value (two-sided) |
| **s** | S = | Residual std dev |
| **r²** | R-Sq | Coefficient of determination |

### Example Reading

| From Output | Value |
|-------------|-------|
| **Slope (b)** | 1.234 |
| **Intercept (a)** | 12.345 |
| **SE of slope** | 0.234 |
| **t statistic** | 5.27 |
| **P-value** | 0.000 |
| **s** | 3.456 |
| **r²** | 65.4% |

---

## ✍️ Four-Step Process for Slope Inference

### State

| Component | What to Write |
|-----------|---------------|
| **Parameter** | β = true slope of relationship |
| **Hypotheses** | H₀: β = 0, Hₐ: β ≠ 0 |
| **α** | Significance level |

### Plan

| Component | What to Write |
|-----------|---------------|
| **Name** | t-test for regression slope |
| **Conditions** | Check LINE (with evidence) |

### Do

| Component | What to Write |
|-----------|---------------|
| **From output** | b, SEᵦ, or calculate t |
| **Test statistic** | t = b/SEᵦ |
| **P-value** | From output or calculate |

### Conclude

| Component | What to Write |
|-----------|---------------|
| **Compare** | P-value vs. α |
| **Decision** | Reject or fail to reject H₀ |
| **Context** | Evidence of linear relationship? |

---

## 📐 Standard Error of Residuals (s)

### Definition

| Formula | s = √[Σ(y - ŷ)²/(n-2)] |
|---------|------------------------|
| **Meaning** | Typical residual size |

### Interpretation

| Template | |
|----------|--|
| **Say** | "The typical distance of observed [y] from predicted [y] is about [s] [units]." |

### Relationship to r²

| 1 - r² | Proportion of variation unexplained |
|--------|-------------------------------------|
| **High s** | More scatter around line |
| **Low s** | Points close to line |

---

## 🔄 Relationship Between t and r

### Connection

| When n is same | |
|----------------|--|
| **t for slope** | Tests H₀: β = 0 |
| **t for correlation** | Tests H₀: ρ = 0 |
| **Same result** | Reject/don't reject together |

### Formula

| t | = r × √[(n-2)/(1-r²)] |
|---|------------------------|

---

## 📊 Confidence vs. Prediction Intervals

### Confidence Interval for Mean Response

| For | Mean y at specific x |
|-----|---------------------|
| **Narrower** | About the mean |
| **Use** | Estimate μᵧ at x |

### Prediction Interval for Individual Response

| For | Individual y at specific x |
|-----|---------------------------|
| **Wider** | Individual varies more |
| **Use** | Predict specific y |

### Key Difference

| CI for mean | Narrower |
|-------------|----------|
| **PI for individual** | Wider (more uncertainty) |

---

## ⚠️ Cautions and Limitations

### Extrapolation

| Warning | Don't predict outside data range |
|---------|----------------------------------|
| **Why** | Relationship may not continue |

### Causation

| Correlation | ≠ Causation |
|-------------|-------------|
| **Even significant** | Doesn't prove cause |
| **Need** | Controlled experiment |

### Influential Points

| Check | For outliers and leverage |
|-------|--------------------------|
| **Effect** | May dramatically change results |
| **Consider** | Report with and without |

### Conditions

| Must check | All four LINE conditions |
|------------|-------------------------|
| **If violated** | Results unreliable |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **β (beta)** | Population slope |
| **b** | Sample slope estimate |
| **SEᵦ** | Standard error of slope |
| **Residual** | y - ŷ |
| **s** | Standard deviation of residuals |
| **LINE** | Linear, Independent, Normal, Equal variance |
| **df** | n - 2 for regression |
| **r²** | Proportion of variance explained |

---

## 📊 Connecting to Earlier Units

### From Unit 2

| Concept | Use in Unit 9 |
|---------|---------------|
| **LSRL** | Same equation ŷ = a + bx |
| **Residuals** | Check conditions |
| **r²** | Still interpretation of fit |

### Key Addition

| Unit 9 adds | |
|-------------|--|
| **Inference** | CI and tests |
| **Generalization** | To population |
| **Uncertainty** | About slope |

---

## 🎯 AP Exam Strategies

### Free Response Tips

| Section | Key Points |
|---------|------------|
| **State** | Define β in context |
| **Plan** | Check all LINE with evidence |
| **Do** | Use computer output values |
| **Conclude** | Linear relationship in context |

### Common Mistakes

| Mistake | Correction |
|---------|------------|
| **df = n - 1** | df = n - 2 for regression |
| **Skip conditions** | Must check LINE with graphs |
| **Accept H₀: β = 0** | "Fail to reject" or "no evidence" |
| **Causation conclusion** | Regression doesn't prove cause |

### Reading Computer Output

| Task | Look For |
|------|----------|
| **Slope** | Coef for predictor (not Constant) |
| **SE of slope** | SE Coef for predictor |
| **P-value for slope** | P for predictor row |
| **s** | S value (not SE Coef) |

### Interpreting Results

| If P-value < α | There IS evidence of linear relationship |
|----------------|------------------------------------------|
| **If P-value ≥ α** | NO evidence of linear relationship |

---

## 📋 Complete Checklist

| Step | Check |
|------|-------|
| ☐ | Define β in context |
| ☐ | State hypotheses correctly |
| ☐ | Check Linear (scatterplot/residual plot) |
| ☐ | Check Independent (random, 10%) |
| ☐ | Check Normal (residual histogram/NPP) |
| ☐ | Check Equal variance (residual plot) |
| ☐ | Calculate or state t and df |
| ☐ | Find P-value |
| ☐ | Make decision (compare to α) |
| ☐ | State conclusion in context |

---

**Congratulations on completing AP Statistics! 🍀📈📊**

Remember: Inference for slopes tests whether there's evidence of a true linear relationship. Always check LINE conditions with actual evidence from graphs. Use computer output to find b and SEᵦ!

**Good luck on your AP Statistics exam! You've got this! 🎯**

---

## 🏆 Famous Statisticians in Regression Analysis

| Statistician | Contribution | Era |
|--------------|--------------|-----|
| **Adrien-Marie Legendre** | Method of least squares | 1805 |
| **Carl Friedrich Gauss** | Normal distribution and regression | 1809 |
| **Francis Galton** | Discovered regression, coined the term | 1885 |
| **Karl Pearson** | Correlation coefficient | 1896 |
| **Ronald A. Fisher** | Regression inference theory | 1920s |
| **John Tukey** | Regression diagnostics | 1970s |

---

## 📊 Complete Worked Example: Hypothesis Test for Slope

**Problem:** A study examines the relationship between study time (hours) and test scores for 20 randomly selected students. Computer output is shown:

```
Predictor     Coef    SE Coef     T       P
Constant     52.34      4.821   10.86   0.000
Study_Time    4.85      0.892    5.44   0.000

S = 7.234    R-Sq = 62.2%    R-Sq(adj) = 60.1%
```

At α = 0.05, is there convincing evidence of a linear relationship between study time and test scores?

### STATE

**Parameter:** β = true slope of the population regression line relating study time (x) to test score (y)

**Hypotheses:**
- $H_0: \beta = 0$ (no linear relationship between study time and test scores)
- $H_a: \beta \neq 0$ (there is a linear relationship)

**Significance level:** α = 0.05

### PLAN

**Procedure:** t-test for regression slope

**Conditions (LINE):**
- **L (Linear):** Scatterplot shows a linear pattern with no obvious curvature. Residual plot shows random scatter around zero. ✓
- **I (Independent):** Random sample of 20 students; 20 < 10% of all students ✓
- **N (Normal):** Histogram of residuals is approximately symmetric and bell-shaped with no outliers ✓
- **E (Equal variance):** Residual plot shows consistent spread across all x-values (no funnel shape) ✓

### DO

**From output:**
- Sample slope: b = 4.85
- Standard error of slope: $SE_b$ = 0.892
- Test statistic: t = 5.44
- Degrees of freedom: df = n - 2 = 20 - 2 = 18
- P-value = 0.000 (two-tailed)

**Verify test statistic:**
$$t = \frac{b - 0}{SE_b} = \frac{4.85 - 0}{0.892} = 5.44 ✓$$

### CONCLUDE

Since P-value ≈ 0 < α = 0.05, we reject $H_0$.

**Conclusion in context:** We have very strong convincing evidence that there is a linear relationship between study time and test score. For each additional hour of studying, we estimate that test scores increase by about 4.85 points on average.

---

## 📊 Complete Worked Example: Confidence Interval for Slope

**Problem:** Using the same data, construct and interpret a 95% confidence interval for the true slope.

### Check Conditions
Same LINE conditions as above (already verified) ✓

### Calculate

**From output:** b = 4.85, $SE_b$ = 0.892, df = 18

**Critical value:** $t^*$ = 2.101 (for 95% CI with df = 18)

**Confidence Interval:**
$$CI = b \pm t^* \cdot SE_b = 4.85 \pm 2.101(0.892)$$
$$= 4.85 \pm 1.874 = (2.976, 6.724)$$

### Interpretation

"We are 95% confident that the true slope of the relationship between study time and test score is between 2.98 and 6.72. That is, for each additional hour of studying, we are 95% confident that test scores increase by between 2.98 and 6.72 points on average."

---

## 📐 Reading Computer Output: Detailed Guide

### Typical Computer Output Format

```
Predictor      Coef     SE Coef      T       P
Constant     23.456      3.567    6.58   0.000
height        1.234      0.345    3.58   0.002

S = 5.678    R-Sq = 45.3%    R-Sq(adj) = 42.1%

Analysis of Variance
Source          DF       SS        MS        F        P
Regression       1    412.34    412.34   12.80    0.002
Residual Error  18    580.00     32.22
Total           19    992.34
```

### Key Values Location Guide

| What You Need | Where to Find It | Example Value |
|---------------|------------------|---------------|
| Sample slope (b) | Coef for predictor (NOT Constant) | 1.234 |
| y-intercept (a) | Coef for Constant | 23.456 |
| SE of slope ($SE_b$) | SE Coef for predictor | 0.345 |
| t-statistic | T column for predictor | 3.58 |
| P-value (two-sided) | P column for predictor | 0.002 |
| Standard deviation of residuals (s) | S = | 5.678 |
| Coefficient of determination | R-Sq | 45.3% |
| Sample size | Calculate: df + 2 | 18 + 2 = 20 |
| Degrees of freedom | DF for Residual Error | 18 |

### What Each Value Means

| Value | Interpretation |
|-------|----------------|
| **b = 1.234** | For each 1-unit increase in x, y increases by 1.234 on average |
| **a = 23.456** | When x = 0, predicted y = 23.456 |
| **$SE_b$ = 0.345** | The standard error of the sampling distribution of b |
| **t = 3.58** | The test statistic = b/$SE_b$ |
| **P = 0.002** | Two-sided P-value for testing β = 0 |
| **s = 5.678** | Typical distance of points from regression line |
| **R-Sq = 45.3%** | 45.3% of variation in y is explained by x |

---

## ✅ Checking LINE Conditions: Visual Guide

### L - Linear

**Scatterplot Check:**
```
Good (Linear):           Bad (Curved):
    •   •                     •  •  •
  •   •   •                      •
    •   •   •               •       •
  •   •   •                     •
    •   •                   •
```

**Residual Plot Check:**
```
Good (Random scatter):    Bad (Pattern):
  +  |  •    •    •          |        •  •
     |    •    •             |     •
  0 -|--•----•----•--      0 |--•-------
     |  •    •  •             | •
  -  |    •                  |
```

### I - Independent

| Check | What to Look For |
|-------|------------------|
| Random sample/assignment | Stated in problem |
| 10% condition | n < 10% of population |
| No repeated measures | Not same subjects measured twice |

### N - Normal

**Histogram of Residuals:**
```
Good (Approximately normal):    Bad (Skewed):
      ███                           █
    ███████                        ██
   █████████                      ████
    ███████                     ███████
      ███                      ██████████
```

**Normal Probability Plot of Residuals:**
```
Good (Linear pattern):      Bad (Curved pattern):
  •••                           ••••
 ••                                 •••
••                                     •••
```

### E - Equal Variance

**Residual Plot Check:**
```
Good (Constant spread):    Bad (Fan shape):
  +  |  •    •    •          |          •  •
     |    •    •             |       •  •
  0 -|--•----•----•--      0 |--•--•-------
     |  •    •  •            |   •
  -  |    •                  |
     +-----------------x     +-----------------x
```

---

## 🔍 When Conditions Are Violated

| Condition | If Violated | What to Do |
|-----------|-------------|------------|
| **Linear** | Curved relationship | Consider transformation (log, square root) |
| **Independent** | Dependence between observations | Different analysis method needed |
| **Normal** | Residuals not normal | If n is large, may still proceed (robust); if small n, be cautious |
| **Equal Variance** | Fan-shaped residuals | Consider weighted regression or transformation |

---

## 📊 Interpreting Results: Templates

### Slope Interpretation

**Template:** "For each additional [1 unit of x], we predict/estimate [y] to [increase/decrease] by [b] [units of y], on average."

**Example:** "For each additional hour of study time, we predict test scores to increase by 4.85 points, on average."

### Intercept Interpretation

**Template:** "When [x] = 0, we predict [y] to be [a] [units]."

**Example:** "When study time is 0 hours, we predict a test score of 52.34 points."

**Caution:** If x = 0 is outside the range of data or doesn't make sense, note that the intercept is just a mathematical baseline.

### R-squared Interpretation

**Template:** "[R²]% of the variation in [y] is explained by the linear relationship with [x]."

**Example:** "62.2% of the variation in test scores is explained by the linear relationship with study time."

### S (Standard Deviation of Residuals) Interpretation

**Template:** "The typical distance between observed [y] values and predicted [y] values is about [s] [units]."

**Example:** "The typical distance between actual test scores and predicted test scores is about 7.23 points."

---

## 📐 Confidence vs. Prediction Intervals

| Type | For | Width | Use When |
|------|-----|-------|----------|
| **Confidence Interval for μᵧ** | Mean y at specific x | Narrower | Predicting average response |
| **Prediction Interval for y** | Individual y at specific x | Wider | Predicting one individual |

### Why Prediction Intervals Are Wider

```
                    Prediction Interval
                   |←───────────────────→|
                        Confidence Interval
                       |←─────────────→|
                             •
                           /
                          /•
                       • /
                        /
                       /•
                      /
                   • /
                    /
```

An individual observation has both:
1. Uncertainty about the true mean (captured in CI)
2. Individual variation around that mean (adds extra width for PI)

---

## ⚠️ Common AP Exam Mistakes

| Mistake | Why Wrong | Correct Approach |
|---------|-----------|------------------|
| Using df = n - 1 | For regression, df = n - 2 | Use df = n - 2 (two parameters estimated) |
| Skipping LINE conditions | Must verify with graphs | Describe what you see in scatterplot and residual plot |
| Saying "accept $H_0$" | Never "accept," only "fail to reject" | "No convincing evidence of linear relationship" |
| Claiming causation | Regression shows association | Only use causal language if experiment |
| Missing context in interpretation | Must use variable names | "test score" not just "y" |
| Reading wrong row of output | Slope is NOT the Constant row | Look for predictor variable row |

---

## 📊 TI-84 Calculator Commands

### Linear Regression with Inference

| Step | Command |
|------|---------|
| 1. Enter data | STAT → Edit → L1 (x), L2 (y) |
| 2. Run regression | STAT → TESTS → F:LinRegTTest |
| 3. Input | Xlist: L1, Ylist: L2, Freq: 1 |
| 4. Select alternative | β ≠ 0, β < 0, or β > 0 |
| 5. Store RegEq | Optional |
| 6. Calculate | Get t, P-value, df, a, b, s, r², r |

### Output from LinRegTTest

| What | Where |
|------|-------|
| Slope (b) | b = |
| Intercept (a) | a = |
| Standard error of slope | s = (listed, but you need to calculate $SE_b$ = s/√Σ(x-x̄)²) |
| t-statistic | t = |
| P-value | p = |
| Degrees of freedom | df = |
| r and r² | r =, r² = |

### Note About Calculator
The TI-84 gives the t-statistic and P-value directly, but you may need computer output format for the AP exam. Practice reading both formats!

---

## 🔗 Connection to Earlier Units

| Unit | Connection |
|------|------------|
| **Unit 2** | Same LSRL equation: ŷ = a + bx, residuals, r² |
| **Unit 5** | Slope b has a sampling distribution |
| **Unit 6** | Same hypothesis testing logic |
| **Unit 7** | Uses t-distribution for inference |

---

## 📝 Free Response Template: Regression Inference

### STATE

**Parameter:** β = true slope of the population regression line relating [x] to [y]

**Hypotheses:**
- $H_0: \beta = 0$ (no linear relationship between [x] and [y])
- $H_a: \beta \neq 0$ (there is a linear relationship) [or < 0 / > 0]

**Significance level:** α = [value]

### PLAN

**Procedure:** t-test for regression slope

**Conditions:**
- **Linear:** The scatterplot shows [describe] and the residual plot shows [describe random scatter]
- **Independent:** [Random sample stated], n < 10% of population
- **Normal:** Histogram/normal probability plot of residuals shows [describe approximately normal]
- **Equal variance:** Residual plot shows [describe constant spread]

### DO

**From computer output:**
- b = [value], $SE_b$ = [value]
- t = b/$SE_b$ = [value]
- df = n - 2 = [value]
- P-value = [value]

### CONCLUDE

Since P-value = [value] [< or ≥] α = [value], we [reject / fail to reject] $H_0$.

We [have / do not have] convincing evidence that there is a linear relationship between [x] and [y].

[Additional interpretation of slope in context if appropriate]

---

## 🎯 Final Exam Review Checklist

| Topic | Can You... |
|-------|------------|
| **Read output** | Find b, $SE_b$, t, P-value, s, r² from computer output? |
| **Check LINE** | Describe what to look for in each condition? |
| **Interpret slope** | Write interpretation with context and "on average"? |
| **Interpret r²** | Explain variation in context? |
| **Interpret s** | Describe typical residual size? |
| **Do hypothesis test** | Complete all four steps with context? |
| **Build CI** | Calculate b ± t* × $SE_b$? |
| **Avoid mistakes** | Use correct df, avoid causation language? |

---

## 🎓 AP Statistics Course Summary

You've now learned the complete AP Statistics curriculum:

| Unit | Topic | Key Skill |
|------|-------|-----------|
| 1 | One-Variable Data | Describe distributions (SOCS) |
| 2 | Two-Variable Data | Regression, correlation |
| 3 | Collecting Data | Design studies & experiments |
| 4 | Probability | Calculate and interpret probabilities |
| 5 | Sampling Distributions | Understand sampling variability |
| 6 | Inference for Proportions | CI and tests for p |
| 7 | Inference for Means | CI and tests for μ |
| 8 | Chi-Square | Tests for categorical data |
| 9 | Inference for Slopes | Tests for linear relationships |

**Key Themes Throughout:**
- Always check conditions
- Use context in interpretations
- Understand the difference between association and causation
- Random sampling → generalization; Random assignment → causation

**You're ready for the AP exam! 🎉**
