:::GUIDE:::
unit::=Final Review
title::=📊 AP Statistics Complete Final Exam Review
desc::=Comprehensive review of all 9 units for AP Statistics exam preparation
diff::=Medium
time::=120 min
tags::=statistics,final-review,ap-exam,comprehensive
content::=

# 📊 AP Statistics: Complete Final Exam Review

> **Exam Format:** 40 Multiple Choice (90 min) + 6 Free Response (90 min)
> **Scoring:** MC = 50%, FRQ = 50%

---

## 📋 Complete Formula Sheet Reference

### Descriptive Statistics Formulas

| Formula | Description | When to Use |
|---------|-------------|-------------|
| $\bar{x} = \frac{\sum x_i}{n}$ | Sample mean | Center of quantitative data |
| $s = \sqrt{\frac{\sum(x_i - \bar{x})^2}{n-1}}$ | Sample standard deviation | Spread of quantitative data |
| $z = \frac{x - \mu}{\sigma}$ | z-score (population) | Standardizing values |
| $z = \frac{x - \bar{x}}{s}$ | z-score (sample) | Finding relative position |
| $IQR = Q_3 - Q_1$ | Interquartile range | Resistant measure of spread |
| $\text{Outlier if } x < Q_1 - 1.5(IQR)$ or $x > Q_3 + 1.5(IQR)$ | Outlier rule | Identifying outliers |

### Linear Regression Formulas

| Formula | Description |
|---------|-------------|
| $\hat{y} = a + bx$ | Least squares regression line (LSRL) |
| $b = r \cdot \frac{s_y}{s_x}$ | Slope of LSRL |
| $a = \bar{y} - b\bar{x}$ | y-intercept of LSRL |
| $r = \frac{1}{n-1}\sum\left(\frac{x_i - \bar{x}}{s_x}\right)\left(\frac{y_i - \bar{y}}{s_y}\right)$ | Correlation coefficient |
| $r^2$ | Coefficient of determination |
| $\text{residual} = y - \hat{y}$ | Observed minus predicted |
| $s = \sqrt{\frac{\sum(y_i - \hat{y}_i)^2}{n-2}}$ | Standard error of residuals |

### Probability Formulas

| Formula | Description |
|---------|-------------|
| $P(A^c) = 1 - P(A)$ | Complement rule |
| $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | General addition rule |
| $P(A \cup B) = P(A) + P(B)$ | Addition rule (mutually exclusive) |
| $P(A \cap B) = P(A) \cdot P(B \mid A)$ | General multiplication rule |
| $P(A \cap B) = P(A) \cdot P(B)$ | Multiplication rule (independent) |
| $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$ | Conditional probability |

### Random Variable Formulas

| Formula | Description |
|---------|-------------|
| $\mu_X = E(X) = \sum x_i \cdot P(x_i)$ | Expected value (discrete) |
| $\sigma_X^2 = \sum (x_i - \mu_X)^2 \cdot P(x_i)$ | Variance (discrete) |
| $\mu_{aX+b} = a\mu_X + b$ | Linear transformation of mean |
| $\sigma_{aX+b} = \lvert a \rvert \sigma_X$ | Linear transformation of SD |
| $\mu_{X+Y} = \mu_X + \mu_Y$ | Mean of sum (always) |
| $\sigma_{X+Y}^2 = \sigma_X^2 + \sigma_Y^2$ | Variance of sum (independent only) |
| $\mu_{X-Y} = \mu_X - \mu_Y$ | Mean of difference |
| $\sigma_{X-Y}^2 = \sigma_X^2 + \sigma_Y^2$ | Variance of difference (independent) |

### Binomial Distribution Formulas

| Formula | Description |
|---------|-------------|
| $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$ | Binomial probability |
| $\mu = np$ | Binomial mean |
| $\sigma = \sqrt{np(1-p)}$ | Binomial standard deviation |

### Geometric Distribution Formulas

| Formula | Description |
|---------|-------------|
| $P(X = k) = (1-p)^{k-1} p$ | Geometric probability |
| $\mu = \frac{1}{p}$ | Geometric mean |
| $\sigma = \frac{\sqrt{1-p}}{p}$ | Geometric standard deviation |

### Sampling Distribution Formulas

| Parameter | Mean of Sampling Dist | Standard Error |
|-----------|----------------------|----------------|
| $\hat{p}$ | $\mu_{\hat{p}} = p$ | $\sigma_{\hat{p}} = \sqrt{\frac{p(1-p)}{n}}$ |
| $\bar{x}$ | $\mu_{\bar{x}} = \mu$ | $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$ |
| $\hat{p}_1 - \hat{p}_2$ | $\mu = p_1 - p_2$ | $\sigma = \sqrt{\frac{p_1(1-p_1)}{n_1} + \frac{p_2(1-p_2)}{n_2}}$ |
| $\bar{x}_1 - \bar{x}_2$ | $\mu = \mu_1 - \mu_2$ | $\sigma = \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$ |

### Confidence Interval Formulas

| Parameter | Formula | Conditions |
|-----------|---------|------------|
| 1-prop z-interval | $\hat{p} \pm z^* \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$ | $n\hat{p} \geq 10$, $n(1-\hat{p}) \geq 10$ |
| 2-prop z-interval | $(\hat{p}_1 - \hat{p}_2) \pm z^* \sqrt{\frac{\hat{p}_1(1-\hat{p}_1)}{n_1} + \frac{\hat{p}_2(1-\hat{p}_2)}{n_2}}$ | All counts ≥ 10 |
| 1-sample t-interval | $\bar{x} \pm t^* \frac{s}{\sqrt{n}}$ | Normal population or $n \geq 30$ |
| 2-sample t-interval | $(\bar{x}_1 - \bar{x}_2) \pm t^* \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}$ | Both normal or both $n \geq 30$ |
| Paired t-interval | $\bar{x}_d \pm t^* \frac{s_d}{\sqrt{n}}$ | Differences normal or $n \geq 30$ |
| LinReg t-interval for slope | $b \pm t^* SE_b$ | LINE conditions met |

### Hypothesis Test Formulas

| Test | Test Statistic | df |
|------|---------------|-----|
| 1-prop z-test | $z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}$ | N/A |
| 2-prop z-test | $z = \frac{(\hat{p}_1 - \hat{p}_2) - 0}{\sqrt{\hat{p}_c(1-\hat{p}_c)\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}}$ | N/A |
| 1-sample t-test | $t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}$ | $df = n - 1$ |
| 2-sample t-test | $t = \frac{(\bar{x}_1 - \bar{x}_2) - 0}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}$ | Calculator df |
| Paired t-test | $t = \frac{\bar{x}_d - 0}{s_d/\sqrt{n}}$ | $df = n - 1$ |
| Chi-square GOF | $\chi^2 = \sum \frac{(O - E)^2}{E}$ | $df = \text{categories} - 1$ |
| Chi-square Independence | $\chi^2 = \sum \frac{(O - E)^2}{E}$ | $df = (r-1)(c-1)$ |
| LinReg t-test for slope | $t = \frac{b - 0}{SE_b}$ | $df = n - 2$ |

### Critical Values (Common)

| Confidence Level | $z^*$ |
|-----------------|-------|
| 90% | 1.645 |
| 95% | 1.960 |
| 99% | 2.576 |

---

## 📚 Unit-by-Unit Summary

### Unit 1: Exploring One-Variable Data (15-23%)

#### Key Concepts
- **Categorical vs. Quantitative variables**
- **Describing distributions:** Shape, Center, Spread, Outliers (SOCS)
- **Measures of center:** Mean (not resistant), Median (resistant)
- **Measures of spread:** Range, IQR (resistant), Standard deviation (not resistant)

#### Graphical Displays
| Display | Variable Type | Shows |
|---------|--------------|-------|
| Bar graph | Categorical | Frequencies/proportions |
| Pie chart | Categorical | Parts of whole |
| Dotplot | Quantitative | Individual values |
| Stemplot | Quantitative | Shape + values |
| Histogram | Quantitative | Distribution shape |
| Boxplot | Quantitative | 5-number summary |

#### Shape Descriptions
- **Symmetric:** Mean ≈ Median
- **Skewed right:** Mean > Median (tail to right)
- **Skewed left:** Mean < Median (tail to left)
- **Unimodal/Bimodal/Multimodal:** Number of peaks

#### Common Mistakes ⚠️
- Using "mean" and "average" interchangeably without specifying sample vs. population
- Forgetting to mention **context** when describing distributions
- Using standard deviation for skewed data (use IQR instead)
- Not identifying outliers using the 1.5×IQR rule

---

### Unit 2: Exploring Two-Variable Data (5-7%)

#### Key Concepts
- **Scatterplots:** Direction, Form, Strength, Outliers
- **Correlation (r):** Measures linear association, -1 ≤ r ≤ 1
- **Least Squares Regression Line (LSRL)**
- **Residuals:** residual = observed - predicted

#### Interpreting Slope
> "For each additional [1 unit of x], the predicted [y variable] increases/decreases by [slope] [units of y]."

#### Interpreting r²
> "[r² as %]% of the variation in [y variable] is explained by the linear relationship with [x variable]."

#### Interpreting y-intercept
> "When [x variable] is 0, the predicted [y variable] is [a]."
> *(Often not meaningful in context)*

#### Residual Analysis
- Residual plot should show **random scatter** (no pattern)
- Patterns indicate the linear model is not appropriate
- Curved pattern → try transformation

#### Common Mistakes ⚠️
- Saying correlation implies causation
- Using r² as a measure of strength (r is strength)
- Extrapolating beyond the data range
- Switching x and y in the regression equation
- Forgetting "predicted" when interpreting

---

### Unit 3: Collecting Data (12-15%)

#### Sampling Methods

| Method | Description | Pros/Cons |
|--------|-------------|-----------|
| **Simple Random Sample (SRS)** | Every sample of size n equally likely | Gold standard; may miss subgroups |
| **Stratified Random Sample** | Divide into strata, SRS from each | Guarantees representation; need known strata |
| **Cluster Sample** | Randomly select clusters, sample all | Cheaper; higher variability |
| **Systematic Sample** | Every kth individual | Easy; can miss patterns |
| **Convenience Sample** | Easy to reach individuals | Biased; avoid |
| **Voluntary Response** | Self-selected | Biased toward strong opinions |

#### Types of Bias

| Bias Type | Description | Example |
|-----------|-------------|---------|
| **Selection/Undercoverage** | Some groups excluded | Phone survey excludes those without phones |
| **Nonresponse** | Selected individuals don't respond | Mail survey with low return rate |
| **Response** | Answers differ from truth | Lying about embarrassing behaviors |
| **Wording** | Question influences answer | Leading or confusing questions |

#### Experimental Design

**Key Terms:**
- **Experimental unit:** Individual receiving treatment
- **Explanatory variable (factor):** What we manipulate
- **Response variable:** What we measure
- **Treatment:** Specific condition applied
- **Control group:** Baseline for comparison
- **Placebo:** Inactive treatment that looks real
- **Blinding:** Subjects don't know treatment; **Double-blind:** Neither subjects nor evaluators know

**Principles of Experimental Design:**
1. **Control:** Keep other variables constant
2. **Randomization:** Random assignment to treatments
3. **Replication:** Enough subjects to detect effect

**Blocking:** Group similar units, then randomize within blocks
- Reduces variability
- Similar to stratification in sampling

#### Matched Pairs Design
- Special type of blocking
- Each subject serves as their own control, OR
- Subjects matched on important characteristics

#### Common Mistakes ⚠️
- Confusing random sampling with random assignment
- Not identifying the correct type of study (observational vs. experiment)
- Claiming causation from observational studies
- Forgetting to explain HOW randomization is done

---

### Unit 4: Probability, Random Variables, and Probability Distributions (10-20%)

#### Probability Rules

| Rule | Formula | When to Use |
|------|---------|-------------|
| Complement | $P(A^c) = 1 - P(A)$ | "At least one" problems |
| Addition (general) | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | "Either A or B" |
| Addition (mutually exclusive) | $P(A \cup B) = P(A) + P(B)$ | When $P(A \cap B) = 0$ |
| Multiplication (general) | $P(A \cap B) = P(A) \cdot P(B \mid A)$ | "Both A and B" |
| Multiplication (independent) | $P(A \cap B) = P(A) \cdot P(B)$ | When $P(B \mid A) = P(B)$ |
| Conditional | $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$ | "Given that B occurred" |

#### Independence vs. Mutually Exclusive
- **Independent:** $P(A \mid B) = P(A)$ — knowing B doesn't change A's probability
- **Mutually exclusive:** $P(A \cap B) = 0$ — can't happen together
- ⚠️ **These are NOT the same!** If events are mutually exclusive (and both possible), they are NOT independent!

#### Discrete Random Variables
- List all possible values and their probabilities
- Probabilities must sum to 1
- $\mu = E(X) = \sum x_i \cdot P(x_i)$
- $\sigma^2 = \sum (x_i - \mu)^2 \cdot P(x_i)$

#### Binomial Distribution
**Conditions (BINS):**
- **B**inary outcomes (success/failure)
- **I**ndependent trials
- **N**umber of trials fixed
- **S**ame probability of success

$X \sim B(n, p)$

#### Geometric Distribution
**Conditions:**
- Binary outcomes
- Independent trials
- Same probability of success
- Counting trials until first success

$X \sim G(p)$

#### Normal Distribution
- $X \sim N(\mu, \sigma)$
- 68-95-99.7 Rule (Empirical Rule)
- Standardize: $z = \frac{x - \mu}{\sigma}$

#### Common Mistakes ⚠️
- Assuming independence without justification
- Using binomial when trials aren't independent
- Forgetting to check if sample size is < 10% of population for independence
- Adding standard deviations instead of variances

---

### Unit 5: Sampling Distributions (7-12%)

#### Key Concepts

**Sampling Distribution:** Distribution of a statistic over all possible samples of the same size

**Central Limit Theorem (CLT):**
> For sufficiently large sample sizes (n ≥ 30), the sampling distribution of $\bar{x}$ is approximately normal, regardless of population shape.

#### Sampling Distribution of $\hat{p}$

| Property | Value | Condition |
|----------|-------|-----------|
| Mean | $\mu_{\hat{p}} = p$ | Always |
| Standard Error | $\sigma_{\hat{p}} = \sqrt{\frac{p(1-p)}{n}}$ | Always |
| Shape | Approximately normal | $np \geq 10$ AND $n(1-p) \geq 10$ |

#### Sampling Distribution of $\bar{x}$

| Property | Value | Condition |
|----------|-------|-----------|
| Mean | $\mu_{\bar{x}} = \mu$ | Always |
| Standard Error | $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$ | Always |
| Shape | Approximately normal | Population normal OR $n \geq 30$ |

#### 10% Condition
When sampling without replacement:
> $n < 0.10N$ (sample size less than 10% of population)
> Required for standard error formulas to be valid

#### Common Mistakes ⚠️
- Confusing $\sigma$ (population SD) with $\sigma_{\bar{x}}$ (standard error)
- Using wrong conditions for normality
- Forgetting to check 10% condition
- Not using $\sqrt{n}$ in standard error formula

---

### Unit 6: Inference for Categorical Data: Proportions (12-15%)

#### One-Proportion Z-Interval

**Formula:** $\hat{p} \pm z^* \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$

**Conditions:**
1. **Random:** Data from random sample or random assignment
2. **10%:** $n < 0.10N$ (if sampling without replacement)
3. **Large Counts:** $n\hat{p} \geq 10$ AND $n(1-\hat{p}) \geq 10$

**Interpretation Template:**
> "We are [confidence level]% confident that the true proportion of [context] is between [lower] and [upper]."

#### One-Proportion Z-Test

**Hypotheses:**
- $H_0: p = p_0$
- $H_a: p < p_0$, $p > p_0$, or $p \neq p_0$

**Test Statistic:** $z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}$

**Conditions:**
1. **Random**
2. **10%**
3. **Large Counts:** $np_0 \geq 10$ AND $n(1-p_0) \geq 10$ (use $p_0$, not $\hat{p}$!)

#### Two-Proportion Z-Interval

**Formula:** $(\hat{p}_1 - \hat{p}_2) \pm z^* \sqrt{\frac{\hat{p}_1(1-\hat{p}_1)}{n_1} + \frac{\hat{p}_2(1-\hat{p}_2)}{n_2}}$

**Conditions:**
1. **Random:** Both samples random
2. **10%:** Both samples < 10% of populations
3. **Large Counts:** All four counts ≥ 10

#### Two-Proportion Z-Test

**Hypotheses:**
- $H_0: p_1 = p_2$ (or $p_1 - p_2 = 0$)
- $H_a: p_1 < p_2$, $p_1 > p_2$, or $p_1 \neq p_2$

**Pooled Proportion:** $\hat{p}_c = \frac{x_1 + x_2}{n_1 + n_2}$

**Test Statistic:** $z = \frac{(\hat{p}_1 - \hat{p}_2) - 0}{\sqrt{\hat{p}_c(1-\hat{p}_c)\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}}$

**Large Counts:** Use $\hat{p}_c$ for checking conditions

#### Common Mistakes ⚠️
- Using $\hat{p}$ instead of $p_0$ in hypothesis test standard error
- Using $p_0$ instead of $\hat{p}$ in confidence interval
- Forgetting to use pooled proportion for two-proportion z-test
- Not stating hypotheses in terms of parameters

---

### Unit 7: Inference for Quantitative Data: Means (10-18%)

#### One-Sample T-Interval

**Formula:** $\bar{x} \pm t^* \frac{s}{\sqrt{n}}$

**Conditions:**
1. **Random:** Data from random sample
2. **10%:** $n < 0.10N$
3. **Normal/Large Sample:** Population normal OR $n \geq 30$
   - $n < 15$: Need population approximately normal (no outliers/skewness)
   - $15 \leq n < 30$: Can have moderate skewness, no outliers
   - $n \geq 30$: CLT applies

**Degrees of Freedom:** $df = n - 1$

#### One-Sample T-Test

**Hypotheses:**
- $H_0: \mu = \mu_0$
- $H_a: \mu < \mu_0$, $\mu > \mu_0$, or $\mu \neq \mu_0$

**Test Statistic:** $t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}$

#### Two-Sample T-Interval

**Formula:** $(\bar{x}_1 - \bar{x}_2) \pm t^* \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}$

**Conditions:**
1. **Random:** Both samples random and independent
2. **10%:** Both < 10% of populations
3. **Normal/Large Sample:** Both populations normal OR both $n \geq 30$

**df:** Use calculator (Welch's approximation) or $df = \min(n_1 - 1, n_2 - 1)$

#### Two-Sample T-Test

**Hypotheses:**
- $H_0: \mu_1 = \mu_2$ (or $\mu_1 - \mu_2 = 0$)
- $H_a: \mu_1 < \mu_2$, $\mu_1 > \mu_2$, or $\mu_1 \neq \mu_2$

**Test Statistic:** $t = \frac{(\bar{x}_1 - \bar{x}_2) - 0}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}$

#### Paired T-Procedures

**When to Use:** Matched pairs design or before/after measurements

**Key:** Calculate differences first, then do one-sample t on differences

**Formula:** $\bar{x}_d \pm t^* \frac{s_d}{\sqrt{n}}$

**Test Statistic:** $t = \frac{\bar{x}_d - 0}{s_d/\sqrt{n}}$

**df:** $n - 1$ (number of pairs minus 1)

#### Common Mistakes ⚠️
- Using z instead of t for means
- Not recognizing paired data
- Using two-sample t when data is paired
- Not checking Normal/Large Sample condition properly
- Forgetting to use $n - 1$ for degrees of freedom

---

### Unit 8: Inference for Categorical Data: Chi-Square (2-5%)

#### Chi-Square Goodness of Fit Test

**Purpose:** Test if observed distribution matches expected distribution

**Hypotheses:**
- $H_0:$ The distribution matches the expected proportions
- $H_a:$ The distribution does not match

**Test Statistic:** $\chi^2 = \sum \frac{(O - E)^2}{E}$

**Degrees of Freedom:** $df = \text{number of categories} - 1$

**Conditions:**
1. **Random:** Data from random sample
2. **10%:** $n < 0.10N$
3. **Large Counts:** All expected counts ≥ 5

#### Chi-Square Test for Independence

**Purpose:** Test if two categorical variables are independent

**Hypotheses:**
- $H_0:$ The variables are independent
- $H_a:$ The variables are not independent

**Expected Count Formula:** $E = \frac{\text{row total} \times \text{column total}}{\text{grand total}}$

**Test Statistic:** $\chi^2 = \sum \frac{(O - E)^2}{E}$

**Degrees of Freedom:** $df = (r - 1)(c - 1)$

**Conditions:**
1. **Random:** Data from random sample
2. **10%:** $n < 0.10N$
3. **Large Counts:** All expected counts ≥ 5

#### Chi-Square Test for Homogeneity

**Purpose:** Test if distributions are the same across populations

**Hypotheses:**
- $H_0:$ The distributions are the same across populations
- $H_a:$ The distributions are different

**Same calculation as independence test!**

#### Distinguishing Independence vs. Homogeneity
- **Independence:** One sample, two variables measured on each individual
- **Homogeneity:** Multiple samples (populations), one variable measured

#### Common Mistakes ⚠️
- Using observed counts instead of expected for Large Counts condition
- Confusing independence and homogeneity
- Forgetting chi-square is always right-tailed
- Not computing expected counts correctly
- Stating conclusions about association vs. causation

---

### Unit 9: Inference for Quantitative Data: Slopes (2-5%)

#### Linear Regression T-Interval for Slope

**Formula:** $b \pm t^* SE_b$

**Degrees of Freedom:** $df = n - 2$

**Interpretation:**
> "We are [confidence level]% confident that the true slope of the relationship between [x] and [y] is between [lower] and [upper]. For each additional [1 unit of x], the [y] is predicted to change by between [lower] and [upper] [units]."

#### Linear Regression T-Test for Slope

**Hypotheses:**
- $H_0: \beta = 0$ (no linear relationship)
- $H_a: \beta < 0$, $\beta > 0$, or $\beta \neq 0$

**Test Statistic:** $t = \frac{b - 0}{SE_b}$

**Degrees of Freedom:** $df = n - 2$

#### Conditions (LINE)

| Condition | Check | Description |
|-----------|-------|-------------|
| **L**inear | Scatterplot, residual plot | Relationship is linear (no pattern in residuals) |
| **I**ndependent | Context, 10% condition | Observations independent |
| **N**ormal | Residual histogram/plot | Residuals approximately normal |
| **E**qual variance | Residual plot | Residuals have constant spread |

#### Reading Computer Output

Typical output includes:
- **Predictor/Coefficient:** Variable names
- **Coef:** The estimated coefficients (a and b)
- **SE Coef:** Standard error of coefficients
- **T:** Test statistic for $H_0: \text{coefficient} = 0$
- **P:** P-value for two-tailed test
- **S:** Standard error of residuals
- **R-Sq:** Coefficient of determination

#### Common Mistakes ⚠️
- Using $n - 1$ instead of $n - 2$ for df
- Confusing $b$ (sample slope) with $\beta$ (population slope)
- Not checking all four LINE conditions
- Misreading computer output

---

## 🔀 Inference Procedure Selection Flowchart

### Step 1: What Type of Data?

```
What are you analyzing?
├── CATEGORICAL data (proportions)
│   ├── One variable → Go to Step 2A
│   └── Two variables → Go to Step 2B
│
├── QUANTITATIVE data (means)
│   ├── One sample or paired data → Go to Step 2C
│   └── Two independent samples → Go to Step 2D
│
└── RELATIONSHIP between two quantitative variables → Go to Step 2E
```

### Step 2A: One Categorical Variable
```
How many categories?
├── TWO categories (success/failure)
│   ├── Confidence interval → 1-Prop Z-Interval
│   └── Hypothesis test → 1-Prop Z-Test
│
└── MORE than two categories
    └── Hypothesis test → Chi-Square Goodness of Fit
```

### Step 2B: Two Categorical Variables
```
How was data collected?
├── ONE sample, both variables measured → Chi-Square Test for Independence
└── MULTIPLE samples, one variable each → Chi-Square Test for Homogeneity
```

### Step 2C: One Sample or Paired Quantitative
```
Is the data paired (matched)?
├── YES (before/after, twins, etc.)
│   ├── Calculate differences first
│   ├── Confidence interval → Paired T-Interval
│   └── Hypothesis test → Paired T-Test
│
└── NO (single sample)
    ├── Confidence interval → 1-Sample T-Interval
    └── Hypothesis test → 1-Sample T-Test
```

### Step 2D: Two Independent Samples (Quantitative)
```
Are the samples independent?
├── YES
│   ├── Confidence interval → 2-Sample T-Interval
│   └── Hypothesis test → 2-Sample T-Test
│
└── NO → Use Paired T-Procedures (Step 2C)
```

### Step 2E: Relationship (Regression)
```
Is there a linear relationship between x and y?
├── Confidence interval for slope → LinReg T-Interval
└── Hypothesis test for slope → LinReg T-Test
```

### Quick Reference Table

| Scenario | CI Procedure | Test Procedure |
|----------|--------------|----------------|
| One proportion | 1-Prop Z-Int | 1-Prop Z-Test |
| Two proportions | 2-Prop Z-Int | 2-Prop Z-Test |
| One mean | 1-Sample T-Int | 1-Sample T-Test |
| Two means (independent) | 2-Sample T-Int | 2-Sample T-Test |
| Paired data | Paired T-Int | Paired T-Test |
| Distribution fit | — | χ² Goodness of Fit |
| Two categorical variables | — | χ² Independence/Homogeneity |
| Linear regression slope | LinReg T-Int | LinReg T-Test |

---

## 🧮 TI-84 Calculator Commands

### Descriptive Statistics
| Command | Path | Purpose |
|---------|------|---------|
| 1-Var Stats | STAT → CALC → 1 | Mean, SD, 5-number summary |
| 2-Var Stats | STAT → CALC → 2 | Paired data statistics |
| LinReg(a+bx) | STAT → CALC → 8 | Regression equation, r, r² |

### Probability Distributions
| Command | Path | Purpose |
|---------|------|---------|
| normalcdf(lower, upper, μ, σ) | 2nd DISTR → 2 | P(lower < X < upper) |
| invNorm(area, μ, σ) | 2nd DISTR → 3 | Find x for given percentile |
| binompdf(n, p, x) | 2nd DISTR → A | P(X = x) for binomial |
| binomcdf(n, p, x) | 2nd DISTR → B | P(X ≤ x) for binomial |
| geometpdf(p, x) | 2nd DISTR → D | P(X = x) for geometric |
| geometcdf(p, x) | 2nd DISTR → E | P(X ≤ x) for geometric |

### Confidence Intervals
| Command | Path | Purpose |
|---------|------|---------|
| ZInterval | STAT → TESTS → 7 | 1-sample z-interval (σ known) |
| TInterval | STAT → TESTS → 8 | 1-sample t-interval |
| 2-SampZInt | STAT → TESTS → 9 | 2-sample z-interval |
| 2-SampTInt | STAT → TESTS → 0 | 2-sample t-interval |
| 1-PropZInt | STAT → TESTS → A | 1-proportion z-interval |
| 2-PropZInt | STAT → TESTS → B | 2-proportion z-interval |
| LinRegTInt | STAT → TESTS → G | Regression slope t-interval |

### Hypothesis Tests
| Command | Path | Purpose |
|---------|------|---------|
| Z-Test | STAT → TESTS → 1 | 1-sample z-test (σ known) |
| T-Test | STAT → TESTS → 2 | 1-sample t-test |
| 2-SampZTest | STAT → TESTS → 3 | 2-sample z-test |
| 2-SampTTest | STAT → TESTS → 4 | 2-sample t-test |
| 1-PropZTest | STAT → TESTS → 5 | 1-proportion z-test |
| 2-PropZTest | STAT → TESTS → 6 | 2-proportion z-test |
| χ²-Test | STAT → TESTS → C | Chi-square test (matrix) |
| χ²GOF-Test | STAT → TESTS → D | Chi-square goodness of fit |
| LinRegTTest | STAT → TESTS → F | Regression slope t-test |

### Graphing
| Command | Path | Purpose |
|---------|------|---------|
| Plot1 | 2nd STAT PLOT → 1 | Set up scatter/histogram |
| ZoomStat | ZOOM → 9 | Auto-scale to data |
| RESID | 2nd LIST → RESID | Access residuals after LinReg |

### Tips for Calculator Use
1. **Store data in lists:** L1, L2, etc.
2. **After LinReg:** Residuals stored automatically in RESID
3. **For chi-square:** Enter observed in Matrix A, expected will be calculated to Matrix B
4. **Pooled option:** Never use for 2-sample t-procedures
5. **Use 1E99** for ∞ and **-1E99** for -∞ in normalcdf

---

## 📝 Interpretation Templates

### Confidence Interval Interpretations

#### General Template
> "We are [C%] confident that the true [parameter in context] is between [lower bound] and [upper bound]."

#### One-Proportion Z-Interval
> "We are 95% confident that the true proportion of [population] who [characteristic] is between 0.42 and 0.58."

#### Two-Proportion Z-Interval
> "We are 95% confident that the true difference in proportions (group 1 - group 2) who [characteristic] is between -0.15 and 0.05."

#### One-Sample T-Interval
> "We are 95% confident that the true mean [variable] for [population] is between 45.2 and 52.8 [units]."

#### Two-Sample T-Interval
> "We are 95% confident that the true difference in mean [variable] between [group 1] and [group 2] is between 3.1 and 8.7 [units]."

#### Regression Slope Interval
> "We are 95% confident that the true slope of the regression line relating [x] to [y] is between 1.2 and 2.4. For each additional [unit of x], [y] is predicted to increase by between 1.2 and 2.4 [units]."

### Hypothesis Test Interpretations

#### P-value Interpretation
> "If [null hypothesis in context] were true, there is a [p-value] probability of obtaining a sample [statistic] as extreme as or more extreme than [observed value] purely by chance."

#### Conclusion (Reject H₀)
> "Because the p-value ([value]) is less than α = [significance level], we reject H₀. We have convincing evidence that [alternative hypothesis in context]."

#### Conclusion (Fail to Reject H₀)
> "Because the p-value ([value]) is greater than α = [significance level], we fail to reject H₀. We do not have convincing evidence that [alternative hypothesis in context]."

### Other Key Interpretations

#### Correlation (r)
> "There is a [strong/moderate/weak] [positive/negative] linear relationship between [x] and [y]."

#### Coefficient of Determination (r²)
> "[r² × 100]% of the variation in [y] is explained by the linear relationship with [x]."

#### Slope
> "For each additional [1 unit of x], the predicted [y] increases/decreases by [slope] [units]."

#### Standard Deviation
> "The [values] typically vary from the mean by about [s] [units]."

---

## ⚠️ Common Mistakes by Topic

### Vocabulary Errors
| Wrong | Right |
|-------|-------|
| "Accept H₀" | "Fail to reject H₀" |
| "Proves" | "Provides evidence" |
| "The probability that H₀ is true" | "The probability of getting this result if H₀ is true" |
| "Average" without context | "Mean" or "median" (specify) |

### Condition Checking Errors
| Test | Common Error | Correct Approach |
|------|--------------|------------------|
| 1-prop z-test | Using $\hat{p}$ for Large Counts | Use $p_0$ |
| 1-prop z-interval | Using $p_0$ for Large Counts | Use $\hat{p}$ |
| 2-prop z-test | Not using pooled proportion | Use $\hat{p}_c$ |
| Chi-square | Using observed counts | Check expected counts ≥ 5 |
| T-tests | Requiring normality always | n ≥ 30 uses CLT |

### Formula Errors
| Error | Correction |
|-------|------------|
| Adding standard deviations | Add variances, then take square root |
| Using $n$ instead of $n-1$ for sample variance | Divide by $n-1$ |
| $\sigma_{\bar{x}} = \sigma$ | $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$ |
| LinReg df = n - 1 | LinReg df = n - 2 |

### Interpretation Errors
| Error | Correction |
|-------|------------|
| "95% of samples fall in the interval" | "We are 95% confident the true parameter is in the interval" |
| "The mean is between..." | "We are confident the TRUE mean is between..." |
| "There is a 95% chance the true mean is..." | Confidence is about the method, not the interval |
| Interpreting slope without "predicted" | Always say "predicted [y]" |

### Conceptual Errors
| Error | Correction |
|-------|------------|
| Correlation implies causation | Only experiments establish causation |
| Random sample = random assignment | Different! Sampling vs. experiments |
| Independent = mutually exclusive | Independent: P(A|B) = P(A); Mutually exclusive: P(A∩B) = 0 |
| Type I error when we fail to reject | Type I only possible when we reject H₀ |

---

## 📊 Sample FRQ Responses

### Sample 1: Inference for Proportions

**Problem:** A company claims that 80% of customers are satisfied. A survey of 200 randomly selected customers found 148 satisfied. Test at α = 0.05.

**STATE:**
> $H_0: p = 0.80$ (The true proportion of satisfied customers is 0.80)
> $H_a: p < 0.80$ (The true proportion of satisfied customers is less than 0.80)
> where p = the true proportion of all customers who are satisfied

**PLAN:**
> We will use a one-proportion z-test.
> 
> **Conditions:**
> - **Random:** The problem states customers were randomly selected. ✓
> - **10%:** 200 is less than 10% of all customers (assuming more than 2000 customers). ✓
> - **Large Counts:** $np_0 = 200(0.80) = 160 ≥ 10$ ✓ and $n(1-p_0) = 200(0.20) = 40 ≥ 10$ ✓

**DO:**
> $\hat{p} = \frac{148}{200} = 0.74$
> 
> $z = \frac{0.74 - 0.80}{\sqrt{\frac{0.80(0.20)}{200}}} = \frac{-0.06}{0.0283} = -2.12$
> 
> p-value = $P(Z < -2.12) = 0.017$

**CONCLUDE:**
> Because the p-value (0.017) < α (0.05), we reject H₀. We have convincing evidence that the true proportion of satisfied customers is less than 0.80.

---

### Sample 2: Two-Sample T-Test

**Problem:** Researchers want to compare the mean study hours of students at two schools. School A: n=35, x̄=4.2, s=1.5. School B: n=40, x̄=3.6, s=1.8. Test if there's a significant difference at α = 0.05.

**STATE:**
> $H_0: \mu_A = \mu_B$ (The true mean study hours are equal for both schools)
> $H_a: \mu_A \neq \mu_B$ (The true mean study hours are different)
> where $\mu_A$ = true mean study hours for School A students
> and $\mu_B$ = true mean study hours for School B students

**PLAN:**
> We will use a two-sample t-test.
> 
> **Conditions:**
> - **Random:** We assume both are random samples from their schools. ✓
> - **10%:** 35 < 10% of School A students and 40 < 10% of School B students (assuming each school has > 400 students). ✓
> - **Normal/Large Sample:** Both $n_A = 35 ≥ 30$ and $n_B = 40 ≥ 30$, so CLT applies. ✓

**DO:**
> $t = \frac{(4.2 - 3.6) - 0}{\sqrt{\frac{1.5^2}{35} + \frac{1.8^2}{40}}} = \frac{0.6}{\sqrt{0.0643 + 0.081}} = \frac{0.6}{0.381} = 1.57$
> 
> df ≈ 72.4 (using calculator)
> 
> p-value = 2P(t > 1.57) = 0.121

**CONCLUDE:**
> Because the p-value (0.121) > α (0.05), we fail to reject H₀. We do not have convincing evidence of a difference in true mean study hours between students at the two schools.

---

### Sample 3: Chi-Square Test for Independence

**Problem:** Is there an association between gender and preferred study location?

| | Library | Home | Coffee Shop |
|---|---------|------|-------------|
| Male | 45 | 65 | 40 |
| Female | 55 | 45 | 50 |

**STATE:**
> $H_0:$ Gender and preferred study location are independent
> $H_a:$ Gender and preferred study location are not independent

**PLAN:**
> We will use a chi-square test for independence.
> 
> **Conditions:**
> - **Random:** Assume data from random sample of students. ✓
> - **10%:** 300 students < 10% of all students. ✓
> - **Large Counts:** All expected counts ≥ 5 (see table below). ✓

**Expected Counts:**
| | Library | Home | Coffee Shop | Row Total |
|---|---------|------|-------------|-----------|
| Male | 50 | 55 | 45 | 150 |
| Female | 50 | 55 | 45 | 150 |
| Col Total | 100 | 110 | 90 | 300 |

**DO:**
> $\chi^2 = \frac{(45-50)^2}{50} + \frac{(65-55)^2}{55} + \frac{(40-45)^2}{45} + \frac{(55-50)^2}{50} + \frac{(45-55)^2}{55} + \frac{(50-45)^2}{45}$
> 
> $\chi^2 = 0.5 + 1.82 + 0.56 + 0.5 + 1.82 + 0.56 = 5.76$
> 
> df = (2-1)(3-1) = 2
> 
> p-value = P(χ² > 5.76) = 0.056

**CONCLUDE:**
> Because the p-value (0.056) > α (0.05), we fail to reject H₀. We do not have convincing evidence of an association between gender and preferred study location.

---

### Sample 4: Linear Regression T-Test

**Problem:** Computer output shows: b = 2.34, SE_b = 0.56, n = 25. Is there a significant linear relationship?

**STATE:**
> $H_0: \beta = 0$ (There is no linear relationship between x and y)
> $H_a: \beta \neq 0$ (There is a linear relationship between x and y)
> where β = the true slope of the population regression line

**PLAN:**
> We will use a linear regression t-test for slope.
> 
> **Conditions (LINE):**
> - **Linear:** Scatterplot shows linear pattern; residual plot shows no pattern. ✓
> - **Independent:** Observations are independent; n < 10% of population. ✓
> - **Normal:** Histogram of residuals is approximately normal. ✓
> - **Equal variance:** Residual plot shows consistent spread. ✓

**DO:**
> $t = \frac{b - 0}{SE_b} = \frac{2.34}{0.56} = 4.18$
> 
> df = n - 2 = 25 - 2 = 23
> 
> p-value = 2P(t > 4.18) < 0.001

**CONCLUDE:**
> Because the p-value (< 0.001) < α (0.05), we reject H₀. We have convincing evidence of a linear relationship between x and y in the population.

---

## 🎯 FRQ Scoring Tips

### The 4-Step Process (Earn Full Credit!)

| Step | What to Include | Points Lost For |
|------|-----------------|-----------------|
| **STATE** | Hypotheses with parameter definitions | Wrong symbols, no context |
| **PLAN** | Name the procedure, check ALL conditions | Missing conditions, wrong procedure |
| **DO** | Show work, give test statistic and p-value | Calculation errors, no p-value |
| **CONCLUDE** | Decision + conclusion in context | No context, wrong decision, "accept H₀" |

### Condition Checking Rubric

To earn full credit for conditions:
1. **Name** the condition
2. **Check** it with numbers/context
3. **Conclude** that it's satisfied (✓)

**Example:**
> "**Large Counts:** $np_0 = 200(0.80) = 160 ≥ 10$ and $n(1-p_0) = 200(0.20) = 40 ≥ 10$, so the condition is satisfied."

### Interpretation Rubric Requirements

For confidence intervals, include:
- ✓ Confidence level
- ✓ "True" parameter (not sample statistic)
- ✓ Context
- ✓ Interval bounds with units

For hypothesis tests, include:
- ✓ Compare p-value to α
- ✓ Decision (reject or fail to reject)
- ✓ "Convincing evidence" language
- ✓ Conclusion in context

### Partial Credit Strategies

1. **Always write something** — partial credit is possible
2. **Define your variables** — even if calculations are wrong
3. **State conditions** — even if you can't fully check them
4. **Write a conclusion** — even if p-value is wrong
5. **Use correct notation** — $\hat{p}$, $\bar{x}$, μ, σ, etc.

---

## 📋 Quick Reference Cards

### Symbols and Notation

| Symbol | Meaning | Sample/Population |
|--------|---------|-------------------|
| $\mu$ | Population mean | Population |
| $\bar{x}$ | Sample mean | Sample |
| $\sigma$ | Population standard deviation | Population |
| $s$ | Sample standard deviation | Sample |
| $p$ | Population proportion | Population |
| $\hat{p}$ | Sample proportion | Sample |
| $n$ | Sample size | Sample |
| $N$ | Population size | Population |
| $\beta$ | Population slope | Population |
| $b$ | Sample slope | Sample |

### When to Use Z vs. T

| Use Z when... | Use T when... |
|---------------|---------------|
| Dealing with proportions | Dealing with means |
| Population σ is known (rare) | Population σ is unknown |
| — | Always for means in AP Stats |

### Type I and Type II Errors

| | H₀ True | H₀ False |
|---|---------|----------|
| **Reject H₀** | Type I Error (α) | Correct! (Power) |
| **Fail to Reject H₀** | Correct! | Type II Error (β) |

- **Type I Error:** Rejecting H₀ when it's true (false positive)
- **Type II Error:** Failing to reject H₀ when it's false (false negative)
- **Power = 1 - β:** Probability of correctly rejecting false H₀

### Factors That Increase Power
1. ↑ Sample size (n)
2. ↑ Significance level (α)
3. ↑ True parameter farther from H₀ value
4. ↓ Population standard deviation (σ)

---

## 🔢 Must-Know Facts

### Normal Distribution
- **68-95-99.7 Rule:** Within 1, 2, 3 standard deviations
- z-scores: z = 1.645 (90%), z = 1.96 (95%), z = 2.576 (99%)

### Correlation Facts
- $-1 ≤ r ≤ 1$
- r has no units
- Switching x and y doesn't change r
- r measures LINEAR association only
- Outliers can strongly affect r

### Regression Facts
- LSRL always passes through $(\bar{x}, \bar{y})$
- Sum of residuals = 0
- r² = explained variation / total variation
- Extrapolation is risky!

### Sampling Distribution Facts
- Larger n → smaller standard error
- Larger n → more normal distribution
- Standard error = standard deviation of sampling distribution

### Experimental Design Facts
- Only experiments can show causation
- Randomization reduces confounding
- Blocking reduces variability
- Replication increases reliability

---

## ✅ Final Exam Checklist

### Before the Exam
- [ ] Fresh batteries in calculator
- [ ] Know all calculator procedures
- [ ] Review formula sheet
- [ ] Practice FRQ responses

### During Multiple Choice
- [ ] Read all answer choices
- [ ] Watch for "all of the above" / "none of the above"
- [ ] Check for negative signs
- [ ] Verify units match

### During Free Response
- [ ] Read the entire question first
- [ ] Identify the procedure before calculating
- [ ] Show ALL work
- [ ] Use CONTEXT in every answer
- [ ] Check conditions completely
- [ ] Use proper notation
- [ ] Never say "accept H₀"
- [ ] Round appropriately (3-4 decimal places)

### Common FRQ Triggers

| If the question says... | You probably need... |
|------------------------|----------------------|
| "Is there evidence..." | Hypothesis test |
| "Estimate..." | Confidence interval |
| "Is there an association..." | Chi-square test |
| "Compare two groups..." | Two-sample procedure |
| "Before and after..." | Paired t-procedure |
| "Linear relationship..." | Regression t-test |
| "What proportion..." | Proportion procedure |
| "What is the average..." | Mean procedure |

---

## 🎓 Final Words of Wisdom

1. **Context is everything** — Always refer to the specific variables and situation
2. **Conditions are required** — You WILL lose points for skipping them
3. **Show your work** — Partial credit depends on visible reasoning
4. **"Fail to reject" never "accept"** — This is an automatic deduction
5. **Interpret, don't just calculate** — Numbers without meaning earn fewer points
6. **Check your conditions with the right values** — $p_0$ for tests, $\hat{p}$ for intervals
7. **Read the question twice** — Make sure you answer what's asked
8. **Manage your time** — Don't spend too long on any one problem

**Good luck on your AP Statistics exam! 📊**

:::GUIDE:::
