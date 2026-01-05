# AP Statistics Unit 1 Study Guide

:::GUIDE:::
unit::=Unit 1
title::=📈 Unit 1: Exploring One-Variable Data Complete Guide
desc::=Master categorical and quantitative data, distributions, measures of center and spread
diff::=Medium
time::=45 minutes
tags::=statistics, one-variable, distributions, center, spread, graphical displays
content::=

# 📈 Unit 1: Exploring One-Variable Data

## 📋 Unit Overview

Statistics begins with exploring data! This unit covers how to describe and analyze individual variables through graphs, numerical summaries, and understanding distributions. Get ready to become a data detective! 🔍

:::TIMELINE:::
id::=history-descriptive-statistics
title::=History of Descriptive Statistics
events::=[
  {"year": "1663", "event": "John Graunt's Life Tables", "detail": "English statistician John Graunt published 'Natural and Political Observations,' analyzing London mortality records - one of the first examples of descriptive statistics applied to demographic data."},
  {"year": "1713", "event": "Ars Conjectandi Published", "detail": "Jacob Bernoulli's work on probability laid foundations for understanding variation in data."},
  {"year": "1774", "event": "Laplace's Error Theory", "detail": "Pierre-Simon Laplace developed methods for dealing with measurement errors, contributing to understanding of data variability."},
  {"year": "1801", "event": "First Pie Chart", "detail": "William Playfair invented the pie chart in 'Statistical Breviary,' revolutionizing data visualization."},
  {"year": "1817", "event": "First Histogram Concept", "detail": "André-Michel Guerry created early versions of the histogram to display crime data in France."},
  {"year": "1833", "event": "Quetelet's Average Man", "detail": "Adolphe Quetelet introduced the concept of the 'average man' and applied the normal curve to social phenomena."},
  {"year": "1869", "event": "Galton's Hereditary Genius", "detail": "Francis Galton pioneered regression and correlation while studying heredity, introducing key statistical concepts."},
  {"year": "1891", "event": "Box-and-Whisker Plot Concept", "detail": "Early concepts of boxplots emerged from work on quartiles and data spread."},
  {"year": "1900", "event": "Karl Pearson's Chi-Square", "detail": "Pearson formalized measures of center and spread, including the standard deviation formula we use today."},
  {"year": "1977", "event": "Tukey's EDA Published", "detail": "John Tukey published 'Exploratory Data Analysis,' popularizing stem-and-leaf plots, boxplots, and the philosophy of exploring data before formal analysis."}
]
:::/TIMELINE:::

### Essential Questions

| Question | Focus |
|----------|-------|
| How do we display data? | Graphical representations |
| How do we describe distributions? | Shape, center, spread, outliers |
| What's the difference between data types? | Categorical vs. quantitative |
| How do we summarize numerically? | Mean, median, standard deviation |
| What makes data unusual? | Outliers and their effects |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Variable** | Characteristic that varies |
| **Distribution** | Pattern of values |
| **Center** | Typical or middle value |
| **Spread** | Variability of values |
| **Shape** | Symmetry and modality |

---

## 🏆 Famous Statisticians in Descriptive Statistics

| Statistician | Contribution | Era |
|--------------|--------------|-----|
| **John Graunt** | First demographic statistics, life tables | 1600s |
| **William Playfair** | Invented pie charts, bar charts, line graphs | 1800s |
| **Florence Nightingale** | Pioneer of statistical graphics in healthcare | 1800s |
| **Francis Galton** | Regression, percentiles, standard deviation | 1880s |
| **Karl Pearson** | Standard deviation formula, histograms | 1900s |
| **John Tukey** | Boxplots, stem-and-leaf, EDA philosophy | 1970s |

---

## 📊 Types of Variables

### Categorical Variables

| Concept | Description |
|---------|-------------|
| **Definition** | Places individuals into groups |
| **Examples** | Gender, eye color, zip code |
| **Summarized by** | Counts and percentages |
| **Displayed with** | Bar charts, pie charts |

### Quantitative Variables

| Concept | Description |
|---------|-------------|
| **Definition** | Takes numerical values |
| **Examples** | Height, weight, test scores |
| **Summarized by** | Mean, median, standard deviation |
| **Displayed with** | Histograms, boxplots, stemplots |

### Discrete vs. Continuous

| Type | Description | Examples |
|------|-------------|----------|
| **Discrete** | Countable values | Number of siblings |
| **Continuous** | Any value in an interval | Height, weight, time |

### Real-World Examples by Variable Type

| Context | Categorical Variables | Quantitative Variables |
|---------|----------------------|----------------------|
| **School** | Grade level, major, club membership | GPA, test scores, height |
| **Business** | Product type, region, customer segment | Revenue, sales volume, profit margin |
| **Healthcare** | Blood type, diagnosis, treatment type | Blood pressure, age, BMI |
| **Sports** | Team, position, league | Points scored, batting average, time |
| **Environment** | Climate zone, species type, soil category | Temperature, rainfall, elevation |

---

## 📈 Displaying Categorical Data

### Bar Charts

| Concept | Description |
|---------|-------------|
| **Purpose** | Compare frequencies of categories |
| **Bars** | Don't touch (categories separate) |
| **Height** | Represents count or percentage |
| **Can be** | Horizontal or vertical |

### Pie Charts

| Concept | Description |
|---------|-------------|
| **Purpose** | Show parts of a whole |
| **Total** | Must equal 100% |
| **Best for** | Few categories |
| **Limitation** | Hard to compare precisely |

### Two-Way Tables

| Concept | Description |
|---------|-------------|
| **Purpose** | Show relationship between two categorical variables |
| **Marginal** | Row/column totals |
| **Conditional** | Within a row or column |

### Marginal vs. Conditional Distributions

| Type | Description |
|------|-------------|
| **Marginal** | Distribution of one variable alone |
| **Conditional** | Distribution given a specific value of another variable |

### Two-Way Table Example

**Survey of 200 students: Favorite Sport by Gender**

| | Basketball | Soccer | Tennis | Total |
|--|-----------|--------|--------|-------|
| **Male** | 45 | 30 | 15 | 90 |
| **Female** | 25 | 40 | 45 | 110 |
| **Total** | 70 | 70 | 60 | 200 |

**Marginal Distribution of Sport:**
- Basketball: 70/200 = 35%
- Soccer: 70/200 = 35%
- Tennis: 60/200 = 30%

**Conditional Distribution of Sport given Female:**
- Basketball: 25/110 = 22.7%
- Soccer: 40/110 = 36.4%
- Tennis: 45/110 = 40.9%

### Practice: Interpreting Two-Way Tables

| Question Type | Example |
|--------------|---------|
| **Marginal** | "What percent of all students prefer soccer?" |
| **Conditional** | "What percent of males prefer soccer?" |
| **Comparison** | "Is the preference for tennis different between genders?" |

---

## 📊 Displaying Quantitative Data

### Dotplots

| Concept | Description |
|---------|-------------|
| **Purpose** | Show individual values |
| **Best for** | Small datasets |
| **Shows** | Each value as a dot |
| **Easy to see** | Clusters, gaps, outliers |

### Stemplots (Stem-and-Leaf)

| Concept | Description |
|---------|-------------|
| **Purpose** | Show distribution with actual values |
| **Stem** | Leading digits |
| **Leaf** | Final digit |
| **Advantage** | Preserves actual data values |

### Histograms

| Concept | Description |
|---------|-------------|
| **Purpose** | Show distribution of quantitative data |
| **Bars touch** | Continuous data |
| **Height** | Frequency or relative frequency |
| **Width** | Equal intervals (bins) |

### Boxplots (Box-and-Whisker)

| Component | Description |
|-----------|-------------|
| **Box** | Q1 to Q3 (middle 50%) |
| **Line in box** | Median |
| **Whiskers** | To min/max (or 1.5 × IQR) |
| **Points beyond** | Outliers |

### Cumulative Relative Frequency Graphs

| Concept | Description |
|---------|-------------|
| **Also called** | Ogive |
| **Y-axis** | Cumulative percent |
| **Used for** | Finding percentiles |
| **Shape** | Always increasing |

### Creating Graphical Displays: Step-by-Step

**Histogram Construction:**
1. Determine the range (max - min)
2. Choose appropriate bin width (5-15 bins typically)
3. Count frequencies for each bin
4. Draw bars with height = frequency

**Stemplot Construction:**
1. Order data from smallest to largest
2. Choose stems (leading digits)
3. Write leaves (trailing digits) in order
4. Include a key (e.g., 5|3 = 53)

### Choosing the Right Display

| Graph Type | Best For | Avoid When |
|------------|----------|------------|
| **Dotplot** | Small datasets (n < 30), seeing individual values | Large datasets |
| **Stemplot** | Medium datasets, preserving actual values | Very large or very small numbers |
| **Histogram** | Large datasets, overall shape | Small datasets, need exact values |
| **Boxplot** | Comparing distributions, showing outliers | Seeing modality, exact shape |

---

## 📐 Describing Distributions: SOCS

### The SOCS Framework

| Letter | Element | Description |
|--------|---------|-------------|
| **S** | Shape | Symmetric, skewed, modes |
| **O** | Outliers | Unusual values |
| **C** | Center | Mean or median |
| **S** | Spread | Range, IQR, standard deviation |

### Shape Descriptions

| Shape | Description |
|-------|-------------|
| **Symmetric** | Left and right sides mirror |
| **Skewed right** | Tail stretches to high values |
| **Skewed left** | Tail stretches to low values |
| **Unimodal** | One peak |
| **Bimodal** | Two peaks |
| **Uniform** | Approximately flat |

### Identifying Skewness

| If | Then |
|----|------|
| **Mean > Median** | Skewed right |
| **Mean < Median** | Skewed left |
| **Mean ≈ Median** | Approximately symmetric |

### Visual Guide to Distribution Shapes

```
Symmetric:           Skewed Right:        Skewed Left:
    ▲                    ▲                        ▲
   ███                  ██▌                      ▐██
  █████                ███▌                     ▐███
 ███████              ████▌▌                  ▌▐████
███████████          █████▌▌▌▌            ▌▌▌▐█████
```

### Real-World Examples of Shapes

| Shape | Real-World Examples |
|-------|---------------------|
| **Symmetric** | Heights, IQ scores, measurement errors |
| **Skewed Right** | Income, home prices, wait times |
| **Skewed Left** | Age at retirement, test scores (easy test) |
| **Bimodal** | Heights of mixed gender group, eruption durations |
| **Uniform** | Random number generator, birth months |

### Practice: Describing Distributions

**Example Dataset:** Test Scores (out of 100)
45, 52, 58, 62, 65, 68, 70, 72, 73, 75, 78, 80, 82, 84, 85, 88, 90, 92, 95, 98

**SOCS Description:**
- **Shape:** Roughly symmetric with a slight left skew
- **Outliers:** The score of 45 is potentially an outlier
- **Center:** Median ≈ 76.5, Mean ≈ 75.6
- **Spread:** Range = 53, IQR = 85 - 65 = 20

---

## 📏 Measures of Center

### Mean (x̄)

| Concept | Description |
|---------|-------------|
| **Formula** | x̄ = Σx / n |
| **Meaning** | Arithmetic average |
| **Sensitive to** | Outliers |
| **Best for** | Symmetric distributions |

### Median (M)

| Concept | Description |
|---------|-------------|
| **Definition** | Middle value when sorted |
| **Position** | (n+1)/2 |
| **Resistant** | Not affected by outliers |
| **Best for** | Skewed distributions |

### Mode

| Concept | Description |
|---------|-------------|
| **Definition** | Most frequent value |
| **Can be** | Multiple modes |
| **Used for** | Categorical data mainly |

### Comparing Mean and Median

| Distribution | Relationship |
|--------------|--------------|
| **Symmetric** | Mean ≈ Median |
| **Skewed right** | Mean > Median |
| **Skewed left** | Mean < Median |

### Choosing the Appropriate Measure of Center

| Situation | Best Measure | Reason |
|-----------|--------------|--------|
| Symmetric distribution | Mean | Uses all data, most efficient |
| Skewed distribution | Median | Resistant to outliers |
| Outliers present | Median | Not pulled by extreme values |
| Categorical data | Mode | Only option for categories |
| Want typical value | Median | Middle of ordered data |
| Need for calculations | Mean | Used in further statistics |

### Step-by-Step: Finding the Median

**Example:** Find the median of: 12, 8, 15, 22, 18, 9, 14

1. **Order the data:** 8, 9, 12, 14, 15, 18, 22
2. **Count values:** n = 7 (odd)
3. **Find position:** (7+1)/2 = 4th value
4. **Median = 14**

**Example with even n:** 8, 9, 12, 14, 15, 18

1. **Order the data:** 8, 9, 12, 14, 15, 18
2. **Count values:** n = 6 (even)
3. **Find positions:** 3rd and 4th values
4. **Median = (12 + 14)/2 = 13**

---

## 📐 Measures of Spread

### Range

| Concept | Description |
|---------|-------------|
| **Formula** | Max - Min |
| **Advantage** | Simple to calculate |
| **Disadvantage** | Sensitive to outliers |

### Interquartile Range (IQR)

| Concept | Description |
|---------|-------------|
| **Formula** | IQR = Q3 - Q1 |
| **Meaning** | Middle 50% of data |
| **Resistant** | Not affected by outliers |

### Quartiles

| Quartile | Meaning |
|----------|---------|
| **Q1** | 25th percentile |
| **Q2 (Median)** | 50th percentile |
| **Q3** | 75th percentile |

### Five-Number Summary

| Component | Description |
|-----------|-------------|
| **Minimum** | Smallest value |
| **Q1** | First quartile |
| **Median** | Middle value |
| **Q3** | Third quartile |
| **Maximum** | Largest value |

### Complete Example: Five-Number Summary

**Data:** Daily coffee sales (cups): 45, 52, 48, 67, 55, 72, 50, 58, 63, 49, 71, 54

**Step 1:** Order the data
45, 48, 49, 50, 52, 54, 55, 58, 63, 67, 71, 72

**Step 2:** Find the median (n = 12, even)
Median = (54 + 55)/2 = 54.5

**Step 3:** Find Q1 (median of lower half: 45, 48, 49, 50, 52, 54)
Q1 = (49 + 50)/2 = 49.5

**Step 4:** Find Q3 (median of upper half: 55, 58, 63, 67, 71, 72)
Q3 = (63 + 67)/2 = 65

**Five-Number Summary:**
| Statistic | Value |
|-----------|-------|
| Min | 45 |
| Q1 | 49.5 |
| Median | 54.5 |
| Q3 | 65 |
| Max | 72 |

**IQR = 65 - 49.5 = 15.5**

---

## 📉 Variance and Standard Deviation

### Variance (s²)

| Concept | Description |
|---------|-------------|
| **Formula** | s² = Σ(x - x̄)² / (n-1) |
| **Meaning** | Average squared deviation |
| **Units** | Squared units of data |

### Standard Deviation (s)

| Concept | Description |
|---------|-------------|
| **Formula** | s = √[Σ(x - x̄)² / (n-1)] |
| **Meaning** | Typical distance from mean |
| **Units** | Same as data |
| **Always ≥ 0** | Zero only if all values equal |

### Why n-1?

| Concept | Description |
|---------|-------------|
| **Degrees of freedom** | One less than sample size |
| **Reason** | Better estimate of population |
| **Called** | Bessel's correction |

### Interpretation of s

| s Value | Interpretation |
|---------|----------------|
| **Small s** | Values close to mean |
| **Large s** | Values spread from mean |
| **s = 0** | All values identical |

### Complete Example: Calculating Standard Deviation

**Data:** Quiz scores: 7, 8, 8, 9, 10

**Step 1:** Calculate the mean
x̄ = (7 + 8 + 8 + 9 + 10) / 5 = 42/5 = 8.4

**Step 2:** Calculate deviations and squared deviations

| x | (x - x̄) | (x - x̄)² |
|---|---------|----------|
| 7 | -1.4 | 1.96 |
| 8 | -0.4 | 0.16 |
| 8 | -0.4 | 0.16 |
| 9 | 0.6 | 0.36 |
| 10 | 1.6 | 2.56 |
| **Sum** | 0 | 5.20 |

**Step 3:** Calculate variance
s² = 5.20 / (5-1) = 5.20 / 4 = 1.30

**Step 4:** Calculate standard deviation
s = √1.30 ≈ 1.14

**Interpretation:** The typical quiz score is about 1.14 points away from the mean of 8.4.

### Comparing Spread Measures

| Measure | Formula | Resistant? | Uses All Data? |
|---------|---------|------------|----------------|
| Range | Max - Min | No | No (only 2 values) |
| IQR | Q3 - Q1 | Yes | No (only 2 values) |
| Standard Deviation | √[Σ(x-x̄)²/(n-1)] | No | Yes |
| Variance | Σ(x-x̄)²/(n-1) | No | Yes |

---

## 🎯 Identifying Outliers

### IQR Method

| Step | Calculation |
|------|-------------|
| **1** | Calculate IQR = Q3 - Q1 |
| **2** | Lower fence = Q1 - 1.5 × IQR |
| **3** | Upper fence = Q3 + 1.5 × IQR |
| **4** | Values outside fences are outliers |

### Example

| Given | Value |
|-------|-------|
| **Q1** | 20 |
| **Q3** | 40 |
| **IQR** | 40 - 20 = 20 |
| **Lower fence** | 20 - 1.5(20) = -10 |
| **Upper fence** | 40 + 1.5(20) = 70 |

### Effect of Outliers on Statistics

| Statistic | Effect of Outliers |
|-----------|-------------------|
| Mean | Pulled toward outlier (not resistant) |
| Median | Little to no effect (resistant) |
| Standard Deviation | Increases significantly (not resistant) |
| IQR | Little to no effect (resistant) |
| Range | Increases significantly (not resistant) |

### Example: Outlier Impact

**Original Data:** 10, 12, 14, 15, 16, 18, 20

| Statistic | Original | With Outlier (100 added) |
|-----------|----------|--------------------------|
| Mean | 15 | 25.6 |
| Median | 15 | 15.5 |
| Std Dev | 3.42 | 30.8 |
| IQR | 6 | 7 |

The mean and standard deviation are dramatically affected by the outlier, while the median and IQR remain relatively stable.

---

## 🔄 Effect of Transformations

### Adding a Constant (x + a)

| Measure | Effect |
|---------|--------|
| **Mean** | Adds a |
| **Median** | Adds a |
| **Standard deviation** | No change |
| **IQR** | No change |
| **Range** | No change |

### Multiplying by a Constant (x × b)

| Measure | Effect |
|---------|--------|
| **Mean** | Multiplies by b |
| **Median** | Multiplies by b |
| **Standard deviation** | Multiplies by |b| |
| **IQR** | Multiplies by |b| |
| **Range** | Multiplies by |b| |

### General Linear Transformation (bx + a)

| Measure | Effect |
|---------|--------|
| **Mean** | b × mean + a |
| **Median** | b × median + a |
| **Standard deviation** | |b| × s |

---

## 📊 Percentiles

### Definition

| Concept | Description |
|---------|-------------|
| **kth percentile** | Value below which k% of data falls |
| **Example** | 90th percentile: 90% below |

### Common Percentiles

| Percentile | Name |
|------------|------|
| **25th** | Q1 (first quartile) |
| **50th** | Q2 (median) |
| **75th** | Q3 (third quartile) |
| **0th** | Minimum |
| **100th** | Maximum |

### Calculating Percentile from Data

| Formula | |
|---------|--|
| **Position** | (k/100) × (n+1) |
| **Interpolate** | If position isn't whole number |

### Z-Scores to Percentiles

| Concept | Description |
|---------|-------------|
| **Use** | Standard normal table |
| **Requires** | Normal distribution |

---

## 📈 Comparing Distributions

### What to Compare

| Element | Compare |
|---------|---------|
| **Shape** | Both skewed same direction? |
| **Center** | Which is higher? |
| **Spread** | Which is more variable? |
| **Outliers** | Any unusual values? |

### Context is Key

| Always | Include context |
|--------|-----------------|
| **Say** | "The distribution of heights..." |
| **Not** | "The distribution is..." |
| **Include** | Units and meaningful comparisons |

---

## 📝 Z-Scores and Standardized Values

### Definition

| Concept | Description |
|---------|-------------|
| **Z-score** | Number of standard deviations from the mean |
| **Formula** | z = (x - x̄) / s |
| **Interpretation** | How unusual a value is |

### Z-Score Interpretation Table

| Z-Score | Meaning | Percentile (approx.) |
|---------|---------|---------------------|
| z = 0 | At the mean | 50th |
| z = 1 | One SD above mean | 84th |
| z = -1 | One SD below mean | 16th |
| z = 2 | Two SDs above mean | 97.5th |
| z = -2 | Two SDs below mean | 2.5th |
| z = 3 | Three SDs above mean | 99.9th |

### Example: Comparing with Z-Scores

**Problem:** Sarah scored 85 on a math test (mean = 75, SD = 5) and 90 on an English test (mean = 82, SD = 8). Which score is relatively better?

**Math z-score:** z = (85 - 75) / 5 = 2.0
**English z-score:** z = (90 - 82) / 8 = 1.0

**Conclusion:** Sarah's math score is relatively better (2 SDs above mean vs. 1 SD above mean)

### Using Z-Scores to Compare Distributions

| Use Case | Method |
|----------|--------|
| Compare scores from different tests | Calculate z-scores |
| Identify unusual values | |z| > 2 is unusual |
| Standardize for comparison | Convert all values to z-scores |

---

## 📊 Technology Tips

### Calculator Functions

| Function | Purpose |
|----------|---------|
| **1-Var Stats** | Mean, s, quartiles |
| **Histogram** | Plot distribution |
| **Boxplot** | Five-number summary visual |

### Common Mistakes

| Mistake | Correction |
|---------|------------|
| **Connecting histogram bars** | Bars touch but don't overlap |
| **Bar chart for quantitative** | Use histogram instead |
| **Forgetting context** | Always mention variable name |

---

## 📚 Practice Problems with Solutions

### Practice Problem 1: SOCS Description

**Problem:** The following data shows the number of hours students studied for an exam:
2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8, 12

Describe the distribution using SOCS.

**Solution:**
- **Shape:** Skewed right (tail extends toward higher values)
- **Outliers:** 12 hours may be a potential outlier (calculate: Q1=3.5, Q3=6.5, IQR=3, Upper fence = 6.5 + 1.5(3) = 11, so 12 > 11 is an outlier)
- **Center:** Median = 5 hours (use median since skewed)
- **Spread:** IQR = 6.5 - 3.5 = 3 hours

### Practice Problem 2: Calculating Statistics

**Problem:** Calculate the mean, median, and standard deviation for: 15, 18, 22, 24, 26, 28, 32

**Solution:**
- **Mean:** (15+18+22+24+26+28+32)/7 = 165/7 = 23.57
- **Median:** 24 (middle value, 4th of 7)
- **Standard Deviation:** 
  - Deviations: -8.57, -5.57, -1.57, 0.43, 2.43, 4.43, 8.43
  - Sum of squared deviations: 73.43 + 31.02 + 2.46 + 0.18 + 5.90 + 19.62 + 71.06 = 203.67
  - s² = 203.67/6 = 33.95
  - s = √33.95 ≈ 5.83

### Practice Problem 3: Transformation Effects

**Problem:** A dataset has mean = 50 and standard deviation = 10. If we transform each value by multiplying by 2 and adding 15, what are the new mean and standard deviation?

**Solution:**
- **New mean:** 2(50) + 15 = 115
- **New standard deviation:** |2|(10) = 20 (adding constant doesn't change SD)

### Practice Problem 4: Comparing Distributions

**Problem:** Two classes took the same test.
- Class A: Mean = 78, Median = 80, SD = 8
- Class B: Mean = 75, Median = 74, SD = 12

Compare the two distributions.

**Solution:**
- **Center:** Class A performed better on average (mean 78 vs 75)
- **Shape:** Class A is slightly left-skewed (mean < median), Class B is slightly right-skewed (mean > median)
- **Spread:** Class B has more variability (SD = 12 vs 8), meaning scores are more spread out

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Variable** | Characteristic that varies |
| **Categorical** | Groups individuals |
| **Quantitative** | Numerical values |
| **Distribution** | Pattern of values |
| **Mean** | Arithmetic average |
| **Median** | Middle value |
| **Mode** | Most frequent value |
| **Range** | Max - Min |
| **IQR** | Q3 - Q1 |
| **Standard deviation** | Typical distance from mean |
| **Variance** | Average squared deviation |
| **Outlier** | Unusual value |
| **Percentile** | Percent below a value |
| **Skewed** | Distribution pulled toward tail |
| **Symmetric** | Left and right mirror |

---

## 🎯 AP Exam Strategies

### Free Response Tips

| Tip | Description |
|-----|-------------|
| **Use SOCS** | Shape, Outliers, Center, Spread |
| **Context** | Name the variable |
| **Compare** | If multiple distributions |
| **Outliers** | Identify and address |

### Common Mistakes

| Mistake | Correction |
|---------|------------|
| **Mean for skewed** | Use median for skewed data |
| **s for outliers present** | Use IQR instead |
| **No context** | Always name variable |
| **No comparison** | Compare when asked |

### Key Formulas

| Measure | Formula |
|---------|---------|
| **Mean** | x̄ = Σx / n |
| **Standard deviation** | s = √[Σ(x - x̄)² / (n-1)] |
| **IQR** | Q3 - Q1 |
| **Outlier boundary** | Q1 - 1.5(IQR) or Q3 + 1.5(IQR) |

---

## 🔢 Quick Reference: Calculator Commands (TI-84)

| Task | Command |
|------|---------|
| Enter data | STAT → Edit → L1 |
| 1-Variable Stats | STAT → CALC → 1-Var Stats L1 |
| Histogram | 2nd → STATPLOT → Type: Histogram |
| Boxplot | 2nd → STATPLOT → Type: Boxplot |
| Sort data | STAT → Edit → SortA(L1) |

### Calculator Output Interpretation

When you run 1-Var Stats, you see:
| Output | Meaning |
|--------|---------|
| x̄ | Mean |
| Σx | Sum of all values |
| Σx² | Sum of squared values |
| Sx | Sample standard deviation |
| σx | Population standard deviation |
| n | Sample size |
| minX | Minimum |
| Q1 | First quartile |
| Med | Median |
| Q3 | Third quartile |
| maxX | Maximum |

---

## 📊 Common Mistakes to Avoid

| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| Using mean for skewed data | Mean is pulled by outliers | Use median instead |
| Using range for spread | Range uses only 2 values | Use IQR or SD |
| Forgetting units | Statistics need context | Always include units |
| Saying "average" ambiguously | Could mean mean, median, or mode | Specify which measure |
| Connecting bars in histogram | Bars should touch but not overlap | Keep bars adjacent |
| Making bar chart for quantitative data | Bar charts are for categorical | Use histogram |
| Ignoring outliers | Outliers affect interpretation | Identify and address |

---

**Good luck on your AP Statistics exam! 🍀📈**

Remember: Always describe distributions using SOCS - Shape, Outliers, Center, and Spread. Include context by naming the variable!
