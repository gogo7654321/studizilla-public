# AP Statistics Unit 2 Study Guide

:::GUIDE:::
unit::=Unit 2
title::=📈 Unit 2: Exploring Two-Variable Data Complete Guide
desc::=Master scatterplots, correlation, regression, and relationships between quantitative variables
diff::=Medium
time::=50 minutes
tags::=statistics, correlation, regression, scatterplots, two-variable, linear
content::=

# 📈 Unit 2: Exploring Two-Variable Data

## 📋 Unit Overview

How do two quantitative variables relate to each other? This unit explores scatterplots, correlation, and linear regression to understand and predict relationships! 📊

:::TIMELINE:::
id::=history-correlation-regression
title::=History of Correlation and Regression
events::=[
  {"year": "1805", "event": "Legendre's Least Squares", "detail": "Adrien-Marie Legendre published the method of least squares for fitting curves to data, though Gauss claimed to have used it earlier."},
  {"year": "1809", "event": "Gauss's Error Theory", "detail": "Carl Friedrich Gauss published work on the normal distribution and least squares method for astronomical calculations."},
  {"year": "1869", "event": "Galton Studies Heredity", "detail": "Francis Galton began studying heredity, comparing heights of parents and children, leading to the discovery of regression."},
  {"year": "1877", "event": "Regression to the Mean", "detail": "Galton coined 'regression to the mean' observing that tall parents tend to have children closer to average height."},
  {"year": "1886", "event": "Galton's Regression Line", "detail": "Galton published the first regression line relating heights of parents to children in his paper on hereditary stature."},
  {"year": "1888", "event": "Correlation Coefficient", "detail": "Galton introduced the concept of correlation (originally called 'co-relation') to measure the strength of relationships."},
  {"year": "1896", "event": "Pearson's Formula", "detail": "Karl Pearson developed the mathematical formula for the correlation coefficient (r) that we use today."},
  {"year": "1901", "event": "Biometrika Founded", "detail": "Pearson founded the journal Biometrika, establishing correlation and regression as fundamental statistical tools."},
  {"year": "1908", "event": "Student's t-Distribution", "detail": "William Gosset (Student) developed methods for inference with small samples, later applied to regression."},
  {"year": "1922", "event": "R.A. Fisher's Work", "detail": "Ronald Fisher formalized the mathematical theory of regression and introduced analysis of variance."}
]
:::/TIMELINE:::

### Essential Questions

| Question | Focus |
|----------|-------|
| How do we display two-variable data? | Scatterplots |
| How do we measure association? | Correlation coefficient |
| How do we model relationships? | Linear regression |
| How do we interpret regression? | Slope, intercept, r² |
| What are the dangers? | Extrapolation, lurking variables |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Scatterplot** | Graph of paired data |
| **Correlation (r)** | Strength and direction |
| **Regression line** | Prediction equation |
| **Residuals** | Observed - Predicted |
| **r²** | Variation explained |

---

## 🏆 Famous Statisticians in Regression

| Statistician | Contribution | Era |
|--------------|--------------|-----|
| **Carl Friedrich Gauss** | Least squares method, normal distribution | 1800s |
| **Adrien-Marie Legendre** | Published least squares method | 1805 |
| **Francis Galton** | Discovered regression, coined correlation | 1880s |
| **Karl Pearson** | Correlation coefficient formula | 1896 |
| **Ronald Fisher** | Modern regression theory | 1920s |

---

## 📊 Scatterplots

### Creating a Scatterplot

| Concept | Description |
|---------|-------------|
| **Explanatory variable (x)** | Independent, horizontal axis |
| **Response variable (y)** | Dependent, vertical axis |
| **Each point** | One (x, y) pair |

### Describing Scatterplots: DOFS

| Letter | Element | Description |
|--------|---------|-------------|
| **D** | Direction | Positive, negative, none |
| **O** | Outliers | Points away from pattern |
| **F** | Form | Linear, curved, clusters |
| **S** | Strength | Weak, moderate, strong |

### Direction

| Direction | Description |
|-----------|-------------|
| **Positive** | As x increases, y increases |
| **Negative** | As x increases, y decreases |
| **None** | No apparent pattern |

### Form

| Form | Description |
|------|-------------|
| **Linear** | Straight line pattern |
| **Curved** | Nonlinear relationship |
| **Clusters** | Groups of points |
| **No pattern** | Scattered randomly |

### Strength

| Strength | Description |
|----------|-------------|
| **Strong** | Points close to pattern |
| **Moderate** | Some scatter around pattern |
| **Weak** | Points far from pattern |

### Example Scatterplot Descriptions

| Scenario | DOFS Description |
|----------|------------------|
| Height vs. Weight | Positive, linear, moderate to strong, no obvious outliers |
| Age vs. Reaction Time | Positive, linear, moderate (older = slower), possible outliers among elderly |
| Study Hours vs. Test Score | Positive, linear, moderate, possible ceiling effect at high hours |
| Temperature vs. Ice Cream Sales | Positive, possibly curved (levels off at extremes), strong |
| Car Age vs. Price | Negative, curved (exponential decay), strong |

### Real-World Two-Variable Relationships

| Relationship | Direction | Form | Strength |
|--------------|-----------|------|----------|
| Education level vs. Income | Positive | Linear | Moderate |
| Speed vs. Fuel efficiency | Negative | Curved | Strong |
| Exercise vs. Resting heart rate | Negative | Linear | Moderate |
| Hours of sleep vs. Test performance | Positive | Linear (with threshold) | Moderate |
| Altitude vs. Temperature | Negative | Linear | Strong |

---

## 📏 Correlation Coefficient (r)

### Definition

| Concept | Description |
|---------|-------------|
| **Symbol** | r |
| **Range** | -1 ≤ r ≤ 1 |
| **Measures** | Strength and direction of LINEAR relationship |

### Formula

| Formula | |
|---------|--|
| **r** | = (1/(n-1)) Σ[(x - x̄)/sₓ][(y - ȳ)/sᵧ] |
| **Or** | = Σzₓzᵧ / (n-1) |

### Interpreting r

| r Value | Interpretation |
|---------|----------------|
| **r = 1** | Perfect positive linear |
| **r = -1** | Perfect negative linear |
| **r = 0** | No linear relationship |
| **0.8 < |r| ≤ 1** | Strong |
| **0.5 < |r| ≤ 0.8** | Moderate |
| **|r| ≤ 0.5** | Weak |

### Properties of r

| Property | Explanation |
|----------|-------------|
| **No units** | Standardized |
| **Symmetric** | r(x,y) = r(y,x) |
| **Linear only** | Doesn't detect curved relationships |
| **Affected by outliers** | Not resistant |

### r Does NOT Tell You

| What r Misses | Example |
|---------------|---------|
| **Curved patterns** | Quadratic with r ≈ 0 |
| **Appropriateness** | May be linear by chance |
| **Causation** | Correlation ≠ causation |

### Visual Guide to Correlation Values

| r Value | Description | Visual Pattern |
|---------|-------------|----------------|
| r = 1.0 | Perfect positive | All points on upward line |
| r = 0.9 | Strong positive | Points tightly clustered, upward |
| r = 0.6 | Moderate positive | Points scattered, upward trend |
| r = 0.3 | Weak positive | Points very scattered, slight upward |
| r = 0.0 | No linear relationship | Random scatter |
| r = -0.5 | Moderate negative | Points scattered, downward trend |
| r = -1.0 | Perfect negative | All points on downward line |

### Common Mistakes with Correlation

| Mistake | Reality |
|---------|---------|
| "r = 0 means no relationship" | r = 0 means no LINEAR relationship |
| "High r proves causation" | Correlation never proves causation |
| "r measures any pattern" | r only measures linear patterns |
| "r can be greater than 1" | r is always between -1 and 1 |

---

## 📐 Least Squares Regression Line (LSRL)

### Definition

| Concept | Description |
|---------|-------------|
| **LSRL** | Line that minimizes sum of squared residuals |
| **Equation** | ŷ = a + bx (or ŷ = b₀ + b₁x) |
| **ŷ** | Predicted y value |

### Calculating Slope (b)

| Formula | |
|---------|--|
| **b** | = r × (sᵧ/sₓ) |

### Calculating Intercept (a)

| Formula | |
|---------|--|
| **a** | = ȳ - b × x̄ |

### The Line Always Passes Through

| Point | (x̄, ȳ) |
|-------|---------|
| **The means** | Center of the data |

### Complete Example: Finding the LSRL

**Data:** Hours studied (x) vs. Test Score (y)

| x (hours) | y (score) |
|-----------|-----------|
| 2 | 65 |
| 3 | 70 |
| 4 | 75 |
| 5 | 82 |
| 6 | 88 |

**Step 1:** Calculate summary statistics
- x̄ = 4, ȳ = 76
- sₓ = 1.58, sᵧ = 9.08
- r = 0.995

**Step 2:** Calculate slope
b = r × (sᵧ/sₓ) = 0.995 × (9.08/1.58) = 5.72

**Step 3:** Calculate intercept
a = ȳ - b × x̄ = 76 - 5.72 × 4 = 53.12

**LSRL:** ŷ = 53.12 + 5.72x

**Interpretation:** 
- Slope: For each additional hour of studying, we predict the test score to increase by 5.72 points
- Intercept: When study hours = 0, we predict a score of 53.12 (extrapolation - be cautious!)

---

## 📝 Interpreting Regression

### Interpreting Slope

| Template | |
|----------|--|
| **Say** | "For each additional [unit of x], we predict [y] to [increase/decrease] by [b] [units of y]." |
| **Example** | "For each additional year of education, we predict income to increase by $5,000." |

### Interpreting Intercept

| Template | |
|----------|--|
| **Say** | "When [x] = 0, we predict [y] to be [a] [units]." |
| **Caution** | Often meaningless (extrapolation) |
| **Example** | "When study hours = 0, we predict a score of 45." |

### When Intercept Makes Sense

| If | Then |
|----|------|
| **x = 0 is in data range** | Intercept is meaningful |
| **x = 0 is outside range** | Intercept is extrapolation |

---

## 📊 Residuals

### Definition

| Concept | Description |
|---------|-------------|
| **Residual** | Observed - Predicted = y - ŷ |
| **Positive residual** | Observed above line |
| **Negative residual** | Observed below line |

### Properties of Residuals

| Property | Explanation |
|----------|-------------|
| **Sum to zero** | Σ(residuals) = 0 |
| **Mean = 0** | Always |
| **Measure fit** | Smaller = better fit |

### Residual Plots

| Purpose | Description |
|---------|-------------|
| **Check linearity** | Random scatter = good |
| **X-axis** | x values (or fitted values) |
| **Y-axis** | Residuals |

### Patterns in Residual Plots

| Pattern | Interpretation |
|---------|----------------|
| **Random scatter** | Linear model appropriate |
| **Curved pattern** | Nonlinear relationship |
| **Fan shape** | Changing spread |
| **Outliers** | Individual unusual points |

### Residual Plot Examples

**Good Residual Plot (Random Scatter):**
```
    +  |     •    •
       |  •    •      •
 0  ---|----•----•----•---
       |     •  •   •
    -  | •       •
       +-----------------→ x
```
Linear model is appropriate.

**Bad Residual Plot (Curved Pattern):**
```
    +  |           •  •
       |        •
 0  ---|--•--•--------•--
       |   •  •
    -  | •
       +-----------------→ x
```
Relationship is not linear - consider transformation.

**Bad Residual Plot (Fan Shape):**
```
    +  |           •
       |     •   •  •
 0  ---|--•--•-------•---
       |     •   •  •
    -  |           •
       +-----------------→ x
```
Variance is not constant - indicates heteroscedasticity.

---

## 📈 Coefficient of Determination (r²)

### Definition

| Concept | Description |
|---------|-------------|
| **r²** | Proportion of variation in y explained by x |
| **Range** | 0 ≤ r² ≤ 1 |
| **Calculation** | r² = (r)² |

### Interpreting r²

| Template | |
|----------|--|
| **Say** | "[r² × 100]% of the variation in [y] is explained by the linear relationship with [x]." |
| **Example** | "64% of the variation in test scores is explained by the linear relationship with study hours." |

### What r² Tells You

| r² Value | Interpretation |
|----------|----------------|
| **r² = 0.81** | 81% of y variation explained |
| **1 - r² = 0.19** | 19% unexplained (residual) |
| **Higher = better** | Model explains more |

---

## ⚠️ Cautions in Regression

### Extrapolation

| Concept | Description |
|---------|-------------|
| **Definition** | Predicting outside data range |
| **Problem** | Pattern may not continue |
| **Dangerous** | Often leads to bad predictions |

### Interpolation

| Concept | Description |
|---------|-------------|
| **Definition** | Predicting within data range |
| **Safer** | Pattern observed in this range |

### Outliers and Influential Points

| Term | Definition |
|------|------------|
| **Outlier** | Point far from regression line |
| **High leverage** | Point with extreme x value |
| **Influential** | Removing changes line significantly |

### Influential Point Effects

| If | Effect |
|----|--------|
| **Point has high leverage** | May be influential |
| **Influential point present** | Report with and without |

### Types of Unusual Points

| Type | Definition | Example |
|------|------------|---------|
| **Outlier** | Point far from the regression line (large residual) | Student who studied 5 hours but scored only 50 |
| **High Leverage** | Point with extreme x-value | Student who studied 15 hours when others studied 2-6 |
| **Influential** | Point that significantly changes the regression line when removed | High-leverage point that pulls the line |

### Identifying Influential Points

| Check | Method |
|-------|--------|
| Calculate regression with point | Note slope, intercept, r |
| Calculate regression without point | Compare slope, intercept, r |
| If substantial change | Point is influential |

### Example: Influential Point Analysis

**Original LSRL:** ŷ = 10 + 2.5x, r² = 0.85

**Remove suspected influential point:**
**New LSRL:** ŷ = 15 + 1.8x, r² = 0.72

The slope changed from 2.5 to 1.8 and r² dropped from 0.85 to 0.72. This point is influential!

---

## 🔄 Lurking Variables and Causation

### Lurking Variable

| Concept | Description |
|---------|-------------|
| **Definition** | Variable not in study that affects both x and y |
| **Effect** | Can create false correlation |
| **Example** | Ice cream sales and drowning (lurking: temperature) |

### Confounding Variable

| Concept | Description |
|---------|-------------|
| **Definition** | Variable whose effect can't be separated from x |
| **Problem** | Can't determine which causes y |

### Classic Examples of Lurking/Confounding Variables

| Observed Correlation | Lurking Variable |
|---------------------|------------------|
| Ice cream sales ↔ Drowning deaths | Temperature (summer) |
| Shoe size ↔ Reading ability | Age of child |
| Number of firefighters ↔ Fire damage | Size of fire |
| Coffee drinking ↔ Heart disease | Smoking habits |
| TV ownership ↔ Life expectancy | Country's wealth |

### Why Correlation ≠ Causation

| Issue | Explanation |
|-------|-------------|
| **Lurking variables** | Third variable causes both |
| **Reverse causation** | y might cause x instead |
| **Coincidence** | Random chance, no real connection |
| **Common response** | Both respond to same cause |

### Establishing Causation

| Method | Description |
|--------|-------------|
| **Randomized experiment** | Gold standard |
| **Control** | Lurking variables |
| **Temporal order** | Cause before effect |
| **Mechanism** | Logical explanation |

---

## 📚 Practice Problems with Solutions

### Practice Problem 1: Interpret Slope

**Problem:** A regression equation relating hours of sleep (x) to GPA (y) is: ŷ = 1.5 + 0.25x

Interpret the slope in context.

**Solution:** For each additional hour of sleep per night, we predict GPA to increase by 0.25 points.

### Practice Problem 2: Calculate Residual

**Problem:** Using the equation ŷ = 10 + 3x, find the residual for the point (5, 28).

**Solution:**
- Predicted value: ŷ = 10 + 3(5) = 25
- Residual = Observed - Predicted = 28 - 25 = 3
- The actual value is 3 units above the predicted value.

### Practice Problem 3: Interpret r²

**Problem:** The correlation between study time and exam score is r = 0.8. Interpret r².

**Solution:**
- r² = (0.8)² = 0.64
- Interpretation: 64% of the variation in exam scores is explained by the linear relationship with study time.
- The remaining 36% is due to other factors.

### Practice Problem 4: Identify Extrapolation

**Problem:** Data was collected on cars with ages 2-10 years. The regression equation is: ŷ = 25000 - 2000x (where y = price, x = age). Predict the price for a 1-year-old car and a 15-year-old car.

**Solution:**
- 1-year-old: ŷ = 25000 - 2000(1) = $23,000 (extrapolation - outside data range)
- 15-year-old: ŷ = 25000 - 2000(15) = -$5,000 (extrapolation - impossible value!)

The 15-year prediction shows why extrapolation is dangerous - the linear pattern doesn't continue.

### Practice Problem 5: LSRL Calculation

**Problem:** Given: x̄ = 10, ȳ = 50, sₓ = 2, sᵧ = 8, r = 0.75. Find the LSRL.

**Solution:**
- Slope: b = r(sᵧ/sₓ) = 0.75(8/2) = 3
- Intercept: a = ȳ - bx̄ = 50 - 3(10) = 20
- LSRL: ŷ = 20 + 3x

---

### Correlation Does NOT Imply Causation

| Can Prove | Cannot Prove |
|-----------|--------------|
| **Association** | Causation |
| **Relationship** | Direction of cause |
| **Prediction** | Mechanism |

### Establishing Causation

| Method | Description |
|--------|-------------|
| **Randomized experiment** | Gold standard |
| **Control** | Lurking variables |
| **Temporal order** | Cause before effect |
| **Mechanism** | Logical explanation |

---

## 📊 Transforming Data

### Why Transform?

| Reason | Description |
|--------|-------------|
| **Curved relationship** | Make it linear |
| **Fan-shaped residuals** | Stabilize variance |

### Common Transformations

| Transformation | When to Use |
|----------------|-------------|
| **log(y)** | Exponential growth |
| **log(x)** | Power relationship |
| **log(x) and log(y)** | Power model |
| **√y** | Variance stabilization |

### Exponential Model

| Original | y = ab^x |
|----------|----------|
| **Transform** | log(y) = log(a) + x·log(b) |
| **Plot** | x vs. log(y) should be linear |

### Power Model

| Original | y = ax^b |
|----------|----------|
| **Transform** | log(y) = log(a) + b·log(x) |
| **Plot** | log(x) vs. log(y) should be linear |

---

## 📐 Regression Inference (Preview)

### Regression Model

| Population | Sample |
|------------|--------|
| **μᵧ = α + βx** | ŷ = a + bx |
| **β (population slope)** | b (sample slope) |
| **α (population intercept)** | a (sample intercept) |

### Standard Error of Slope

| Symbol | sᵦ |
|--------|-----|
| **Measures** | Variability in slope estimate |
| **Used for** | Confidence intervals and tests |

---

## 📊 Comparing Regression Models

### Which Model is Better?

| Criterion | Description |
|-----------|-------------|
| **Higher r²** | Explains more variation |
| **Random residuals** | No pattern |
| **Smaller s** | Less prediction error |
| **Makes sense** | Context appropriate |

### Standard Deviation of Residuals (s)

| Concept | Description |
|---------|-------------|
| **Symbol** | s |
| **Measures** | Typical residual size |
| **Smaller = better** | Predictions closer to actual |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Scatterplot** | Graph of paired (x, y) data |
| **Explanatory variable** | x, independent |
| **Response variable** | y, dependent |
| **Correlation (r)** | Linear strength and direction |
| **LSRL** | Best-fit line |
| **Residual** | Observed - Predicted |
| **r²** | Proportion of variation explained |
| **Extrapolation** | Predicting outside data range |
| **Lurking variable** | Hidden variable affecting both |
| **Influential point** | Point that changes regression |
| **High leverage** | Extreme x value |

---

## 🎯 AP Exam Strategies

### Free Response Tips

| Task | How to Answer |
|------|---------------|
| **Describe scatterplot** | DOFS (direction, outliers, form, strength) |
| **Interpret slope** | "For each additional [x], [y] changes by [b]" |
| **Interpret r²** | "[r²]% of variation in [y] explained by [x]" |
| **Residual plot** | Describe pattern (or lack thereof) |

### Common Mistakes

| Mistake | Correction |
|---------|------------|
| **Correlation = causation** | Never conclude causation from r |
| **Extrapolate** | Only interpolate |
| **Forget context** | Name both variables |
| **Ignore residual plot** | Always check |

### Calculator Steps (TI-84)

| Task | Steps |
|------|-------|
| **Enter data** | STAT → Edit |
| **Regression** | STAT → CALC → LinReg(a+bx) |
| **Scatterplot** | 2nd → STATPLOT |
| **Residual list** | RESID in NAMES menu |

---

**Good luck on your AP Statistics exam! 🍀📈📊**

Remember: Correlation measures LINEAR relationships only. Always check residual plots before trusting your regression!
