# AP Statistics Unit 8 Study Guide

:::GUIDE:::
unit::=Unit 8
title::=📈 Unit 8: Inference for Categorical Data - Chi-Square Complete Guide
desc::=Master chi-square tests for goodness of fit, independence, and homogeneity
diff::=Hard
time::=55 minutes
tags::=statistics, chi-square, categorical data, goodness of fit, independence, homogeneity
content::=

# 📈 Unit 8: Inference for Categorical Data - Chi-Square

## 📋 Unit Overview

Chi-square tests analyze categorical data! This unit covers three types of chi-square tests for comparing observed and expected counts. Master these procedures to analyze relationships between categorical variables! 📊

:::TIMELINE:::
id::=history-chi-square-tests
title::=History of Chi-Square Tests
events::=[
  {"year": "1863", "event": "Mendel's Genetics", "detail": "Gregor Mendel's famous pea experiments generated ratio data (3:1) that would later be analyzed using chi-square goodness of fit tests."},
  {"year": "1875", "event": "Early Contingency Tables", "detail": "Statisticians began organizing categorical data in two-way tables, setting the stage for tests of association."},
  {"year": "1900", "event": "Pearson's Chi-Square Test", "detail": "Karl Pearson published the chi-square test for goodness of fit, the first formal method to compare observed and expected frequencies."},
  {"year": "1904", "event": "Test for Independence", "detail": "Pearson extended chi-square to test independence in contingency tables, enabling analysis of association between categorical variables."},
  {"year": "1922", "event": "Fisher's Exact Test", "detail": "Ronald Fisher developed an exact test for 2×2 tables when expected counts are small, addressing limitations of the chi-square approximation."},
  {"year": "1934", "event": "Test for Homogeneity", "detail": "The chi-square test was formalized for comparing distributions across multiple populations, distinct from but mathematically similar to the test for independence."},
  {"year": "1954", "event": "Yates' Continuity Correction", "detail": "Frank Yates proposed a correction for 2×2 tables to improve the chi-square approximation when expected counts are borderline."},
  {"year": "1970s", "event": "Computer Implementation", "detail": "Statistical software made chi-square tests accessible to researchers, automatically computing expected counts and contributions."}
]
:::/TIMELINE:::

### Essential Questions

| Question | Focus |
|----------|-------|
| What is chi-square? | Test statistic for categorical data |
| When do we use goodness of fit? | Testing claimed distribution |
| When do we use independence? | Testing association in one sample |
| When do we use homogeneity? | Comparing distributions across groups |
| How do we calculate expected counts? | Based on null hypothesis |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Chi-square (χ²)** | Test statistic comparing O and E |
| **Observed (O)** | Actual counts |
| **Expected (E)** | Counts if H₀ true |
| **Degrees of freedom** | Varies by test type |
| **Right-tailed** | All chi-square tests |

---

## 📊 Chi-Square Distribution

### Properties

| Property | Description |
|----------|-------------|
| **Shape** | Right-skewed |
| **Range** | ≥ 0 only |
| **Changes with df** | Higher df → more symmetric |
| **Always right-tailed** | Large χ² → small P-value |

### Test Statistic Formula

| Formula | |
|---------|--|
| **χ²** | = Σ[(O - E)² / E] |

### Components

| Symbol | Meaning |
|--------|---------|
| **O** | Observed count |
| **E** | Expected count |
| **Σ** | Sum over all cells |

---

## 🎯 Chi-Square Goodness of Fit Test

### Purpose

| Use When | Testing if distribution matches a claimed distribution |
|----------|------------------------------------------------------|

### Example Scenarios

| Scenario | Description |
|----------|-------------|
| Die fairness | Each face = 1/6? |
| M&M colors | Match claimed percentages? |
| Genetic ratios | Match expected 3:1? |

### Hypotheses

| Null | H₀: Distribution matches claimed |
|------|----------------------------------|
| **Alternative** | Hₐ: Distribution differs |

### Example Hypotheses

| H₀ | The distribution of colors is 30% brown, 20% red, 20% yellow, 10% orange, 10% green, 10% blue |
|----|---------------------------------------------------------------------------------------------|
| **Hₐ** | The distribution differs from claimed |

### Calculating Expected Counts

| Formula | E = n × p |
|---------|-----------|
| **n** | Total sample size |
| **p** | Claimed proportion for category |

### Degrees of Freedom

| df | = (number of categories) - 1 |
|----|------------------------------|

---

## ✅ Conditions for Chi-Square GOF

### Three Conditions

| Condition | Check |
|-----------|-------|
| **Random** | Random sample |
| **10%** | n ≤ 10% of population |
| **Large counts** | All expected counts ≥ 5 |

### Note on Large Counts

| Check | Expected counts, not observed |
|-------|------------------------------|
| **All E ≥ 5** | Required for valid test |

---

## 📋 Chi-Square GOF: Four Steps

### State

| Component | What to Write |
|-----------|---------------|
| **Hypotheses** | H₀ states claimed distribution |
| **α** | Significance level |

### Plan

| Component | What to Write |
|-----------|---------------|
| **Name** | Chi-square goodness of fit test |
| **Conditions** | Random, 10%, All E ≥ 5 |

### Do

| Component | What to Write |
|-----------|---------------|
| **Expected counts** | Show calculations |
| **Test statistic** | χ² = Σ[(O-E)²/E] |
| **P-value** | χ²cdf(χ², ∞, df) |

### Conclude

| Component | What to Write |
|-----------|---------------|
| **Compare** | P-value vs. α |
| **Decision** | Reject or fail to reject |
| **Context** | Evidence about distribution |

---

## 📊 Chi-Square Test for Independence

### Purpose

| Use When | Testing association between two categorical variables in ONE sample |
|----------|---------------------------------------------------------------------|

### Example Scenarios

| Scenario | Variables |
|----------|-----------|
| Smoking and lung cancer | Smoking status × Cancer status |
| Gender and political party | Gender × Party affiliation |
| Age group and opinion | Age × Opinion |

### Hypotheses

| Null | H₀: Variables are independent |
|------|------------------------------|
| **Alternative** | Hₐ: Variables are not independent (associated) |

### Example Hypotheses

| H₀ | There is no association between gender and political party preference |
|----|----------------------------------------------------------------------|
| **Hₐ** | There is an association between gender and political party preference |

### Data Format: Two-Way Table

| | Category A | Category B | Total |
|--|------------|------------|-------|
| **Group 1** | O₁₁ | O₁₂ | R₁ |
| **Group 2** | O₂₁ | O₂₂ | R₂ |
| **Total** | C₁ | C₂ | n |

---

## 📐 Calculating Expected Counts (Independence/Homogeneity)

### Formula

| E | = (Row total × Column total) / Grand total |
|---|-------------------------------------------|

### Alternative Formula

| E | = (Rᵢ × Cⱼ) / n |
|---|-----------------|

### Why This Formula?

| If Independent | P(both) = P(row) × P(column) |
|----------------|------------------------------|
| **Expected** | = n × P(row) × P(column) |

---

## 📊 Chi-Square Test for Homogeneity

### Purpose

| Use When | Comparing distributions across MULTIPLE populations/groups |
|----------|-----------------------------------------------------------|

### Example Scenarios

| Scenario | Description |
|----------|-------------|
| Compare schools | Same distribution of grades? |
| Compare years | Same distribution of opinions? |
| Compare treatments | Same distribution of outcomes? |

### Hypotheses

| Null | H₀: Distribution is the same across all groups |
|------|-----------------------------------------------|
| **Alternative** | Hₐ: Distribution differs for at least one group |

### Key Difference from Independence

| Independence | Homogeneity |
|--------------|-------------|
| One sample | Multiple samples/groups |
| Association question | Same distribution question |
| "Is there association?" | "Are distributions same?" |

---

## 🔄 Independence vs. Homogeneity

### How to Distinguish

| Ask | Independence | Homogeneity |
|-----|--------------|-------------|
| **Sampling** | One sample, two variables | Multiple samples, one variable |
| **Question** | Association? | Same distribution? |
| **Example** | Survey one group, ask gender AND preference | Survey each class, ask preference |

### Same Calculations!

| Aspect | Same |
|--------|------|
| **Expected counts** | Same formula |
| **Test statistic** | Same formula |
| **df** | Same formula |

---

## 📏 Degrees of Freedom

### For Independence and Homogeneity

| df | = (r - 1)(c - 1) |
|----|-----------------|
| **r** | Number of rows |
| **c** | Number of columns |

### Examples

| Table Size | df |
|------------|---|
| **2 × 2** | (2-1)(2-1) = 1 |
| **3 × 2** | (3-1)(2-1) = 2 |
| **3 × 4** | (3-1)(4-1) = 6 |

---

## ✅ Conditions for Independence/Homogeneity

### Three Conditions

| Condition | Check |
|-----------|-------|
| **Random** | Random sample(s) |
| **10%** | Sample ≤ 10% of population |
| **Large counts** | All expected counts ≥ 5 |

### Independence Specific

| Random sample | From one population |
|---------------|---------------------|

### Homogeneity Specific

| Random samples | From each population being compared |
|----------------|-------------------------------------|

---

## 📊 Calculator Commands

### Chi-Square GOF

| TI-84 | Steps |
|-------|-------|
| **Enter observed** | L1 |
| **Enter expected** | L2 |
| **χ²GOF-Test** | STAT → TESTS → D |

### Chi-Square Test (Independence/Homogeneity)

| TI-84 | Steps |
|-------|-------|
| **Enter observed** | Matrix [A] |
| **χ²-Test** | STAT → TESTS → C |
| **Expected** | Stored in Matrix [B] |

### Accessing Expected Counts

| After test | Matrix [B] contains expected counts |
|------------|-------------------------------------|

---

## 📝 Contributions to Chi-Square

### Individual Cell Contributions

| Formula | (O - E)² / E |
|---------|--------------|

### Using Contributions

| Purpose | Description |
|---------|-------------|
| **Identify** | Which cells differ most |
| **Explain** | What drives significance |
| **Largest** | Most discrepancy |

### Example Analysis

| Cell | O | E | (O-E)²/E |
|------|---|---|----------|
| A | 25 | 20 | 1.25 |
| B | 15 | 20 | 1.25 |
| C | 10 | 20 | 5.00 |

Cell C contributes most to χ².

---

## ⚠️ Follow-Up Analysis

### If Significant Result

| Do | Description |
|----|-------------|
| **Look at contributions** | Which cells differ? |
| **Compare O to E** | More or less than expected? |
| **Describe pattern** | What's the relationship? |

### Describing Relationships

| Comparison | O > E | O < E |
|------------|-------|-------|
| **Meaning** | More than expected | Fewer than expected |

---

## 📋 Summary Comparison

### Three Chi-Square Tests

| Test | Purpose | df | Samples |
|------|---------|---|---------|
| **GOF** | Match claimed distribution | k - 1 | One |
| **Independence** | Test association | (r-1)(c-1) | One |
| **Homogeneity** | Compare distributions | (r-1)(c-1) | Multiple |

### All Tests

| Share | |
|-------|--|
| **Same formula** | χ² = Σ[(O-E)²/E] |
| **Same condition** | Expected ≥ 5 |
| **Right-tailed** | Always |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Chi-square statistic** | Σ[(O-E)²/E] |
| **Observed count** | Actual data count |
| **Expected count** | Count if H₀ true |
| **Goodness of fit** | Test claimed distribution |
| **Independence** | Test association |
| **Homogeneity** | Compare distributions |
| **Degrees of freedom** | k-1 or (r-1)(c-1) |
| **Contribution** | (O-E)²/E for one cell |

---

## 🎯 AP Exam Strategies

### Free Response Tips

| Section | Key Points |
|---------|------------|
| **State** | Identify which test |
| **Plan** | Calculate and show expected counts |
| **Do** | Show χ², df, P-value |
| **Conclude** | Context about relationship |

### Common Mistakes

| Mistake | Correction |
|---------|------------|
| **Wrong test** | Check one vs. multiple samples |
| **Check observed ≥ 5** | Check EXPECTED ≥ 5 |
| **Two-tailed** | Always right-tailed |
| **Causation** | Association ≠ causation |

### Choosing the Right Test

| Question | Test |
|----------|------|
| "Does it match this distribution?" | GOF |
| "Are variables associated?" (one sample) | Independence |
| "Same distribution across groups?" | Homogeneity |

### After Rejection

| Always | Describe which cells differ |
|--------|----------------------------|
| **Look at** | Largest contributions |
| **Compare** | O vs. E |
| **Describe** | Pattern in context |

---

**Good luck on your AP Statistics exam! 🍀📈📊**

Remember: Chi-square tests compare observed to expected counts. Check that all EXPECTED counts ≥ 5. Always use context when describing relationships!

---

## 🏆 Famous Statisticians in Chi-Square Analysis

| Statistician | Contribution | Era |
|--------------|--------------|-----|
| **Karl Pearson** | Chi-square test for goodness of fit and independence | 1900 |
| **Ronald A. Fisher** | Fisher's exact test, refined chi-square theory | 1920s |
| **Frank Yates** | Yates' continuity correction | 1934 |
| **Gregor Mendel** | Genetic ratios (analyzed with chi-square) | 1865 |

---

## 📊 Complete Worked Example: Goodness of Fit Test

**Problem:** A die manufacturer claims their dice are fair. You roll a die 120 times and record the following results:

| Face | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| Observed | 25 | 17 | 15 | 22 | 18 | 23 |

At α = 0.05, is there evidence that the die is not fair?

### STATE

**Hypotheses:**
- $H_0$: The die is fair (each face has probability 1/6)
- $H_a$: The die is not fair (at least one probability differs from 1/6)

**Significance level:** α = 0.05

### PLAN

**Procedure:** Chi-square test for goodness of fit

**Conditions:**
- **Random:** We assume rolls are random and independent ✓
- **10%:** N/A (not sampling from population) ✓
- **Large counts:** All expected counts = 120 × (1/6) = 20 ≥ 5 ✓

### DO

**Expected counts:** Each face: E = 120 × (1/6) = 20

**Chi-square calculation:**

| Face | O | E | (O-E)² | (O-E)²/E |
|------|---|---|--------|----------|
| 1 | 25 | 20 | 25 | 1.25 |
| 2 | 17 | 20 | 9 | 0.45 |
| 3 | 15 | 20 | 25 | 1.25 |
| 4 | 22 | 20 | 4 | 0.20 |
| 5 | 18 | 20 | 4 | 0.20 |
| 6 | 23 | 20 | 9 | 0.45 |
| **Total** | 120 | 120 | | **χ² = 3.80** |

**Degrees of freedom:** df = k - 1 = 6 - 1 = 5

**P-value:** $P(\chi^2 > 3.80)$ with df = 5 = 0.578

**TI-84:** 
- Enter observed in L1, expected in L2
- STAT → TESTS → D:χ²GOF-Test
- Result: χ² = 3.80, p = 0.578

### CONCLUDE

Since P-value = 0.578 > α = 0.05, we fail to reject $H_0$.

**Conclusion in context:** We do not have convincing evidence that the die is unfair. The observed frequencies are consistent with a fair die.

---

## 📊 Complete Worked Example: Test for Independence

**Problem:** A researcher surveys 500 randomly selected adults about their education level and political affiliation. Results are shown below. At α = 0.05, is there an association between education level and political affiliation?

| | Democrat | Republican | Independent | Total |
|--|----------|------------|-------------|-------|
| **High School** | 60 | 70 | 40 | 170 |
| **College** | 90 | 80 | 50 | 220 |
| **Graduate** | 50 | 30 | 30 | 110 |
| **Total** | 200 | 180 | 120 | 500 |

### STATE

**Hypotheses:**
- $H_0$: There is no association between education level and political affiliation
- $H_a$: There is an association between education level and political affiliation

**Significance level:** α = 0.05

### PLAN

**Procedure:** Chi-square test for independence

**Conditions:**
- **Random:** Random sample of 500 adults ✓
- **10%:** 500 < 10% of all adults ✓
- **Large counts:** All expected counts ≥ 5 (check below) ✓

### DO

**Expected counts:** E = (Row total × Column total) / Grand total

| | Democrat | Republican | Independent |
|--|----------|------------|-------------|
| **High School** | (170×200)/500 = 68 | (170×180)/500 = 61.2 | (170×120)/500 = 40.8 |
| **College** | (220×200)/500 = 88 | (220×180)/500 = 79.2 | (220×120)/500 = 52.8 |
| **Graduate** | (110×200)/500 = 44 | (110×180)/500 = 39.6 | (110×120)/500 = 26.4 |

All expected counts ≥ 5 ✓

**Chi-square calculation:**

| Cell | O | E | (O-E)²/E |
|------|---|---|----------|
| HS-Dem | 60 | 68 | 0.941 |
| HS-Rep | 70 | 61.2 | 1.264 |
| HS-Ind | 40 | 40.8 | 0.016 |
| Col-Dem | 90 | 88 | 0.045 |
| Col-Rep | 80 | 79.2 | 0.008 |
| Col-Ind | 50 | 52.8 | 0.148 |
| Grad-Dem | 50 | 44 | 0.818 |
| Grad-Rep | 30 | 39.6 | 2.327 |
| Grad-Ind | 30 | 26.4 | 0.491 |
| **Total** | | | **χ² = 6.058** |

**Degrees of freedom:** df = (r-1)(c-1) = (3-1)(3-1) = 4

**P-value:** $P(\chi^2 > 6.058)$ with df = 4 = 0.195

**TI-84:** 
- Enter observed counts in Matrix [A] (3×3)
- STAT → TESTS → C:χ²-Test
- Result: χ² = 6.058, p = 0.195, df = 4
- Expected counts stored in Matrix [B]

### CONCLUDE

Since P-value = 0.195 > α = 0.05, we fail to reject $H_0$.

**Conclusion in context:** We do not have convincing evidence of an association between education level and political affiliation among adults.

---

## 📊 Complete Worked Example: Test for Homogeneity

**Problem:** A study compares customer satisfaction ratings (Satisfied, Neutral, Dissatisfied) across three store locations. Results are:

| | Location A | Location B | Location C | Total |
|--|------------|------------|------------|-------|
| **Satisfied** | 80 | 65 | 55 | 200 |
| **Neutral** | 40 | 50 | 45 | 135 |
| **Dissatisfied** | 30 | 35 | 50 | 115 |
| **Total** | 150 | 150 | 150 | 450 |

At α = 0.05, is the distribution of satisfaction ratings the same across all three locations?

### STATE

**Hypotheses:**
- $H_0$: The distribution of satisfaction ratings is the same across all three locations
- $H_a$: The distribution of satisfaction ratings differs for at least one location

**Significance level:** α = 0.05

### PLAN

**Procedure:** Chi-square test for homogeneity

**Conditions:**
- **Random:** Random samples from each location ✓
- **10%:** Each sample < 10% of that location's customers ✓
- **Large counts:** All expected counts ≥ 5 (check below) ✓

### DO

**Expected counts:**

| | Location A | Location B | Location C |
|--|------------|------------|------------|
| **Satisfied** | 66.67 | 66.67 | 66.67 |
| **Neutral** | 45 | 45 | 45 |
| **Dissatisfied** | 38.33 | 38.33 | 38.33 |

All expected counts ≥ 5 ✓

**Test statistic:** χ² = 14.99

**Degrees of freedom:** df = (r-1)(c-1) = (3-1)(3-1) = 4

**P-value:** $P(\chi^2 > 14.99)$ with df = 4 = 0.0047

### CONCLUDE

Since P-value = 0.0047 < α = 0.05, we reject $H_0$.

**Conclusion in context:** We have convincing evidence that the distribution of customer satisfaction ratings differs across the three store locations.

### Follow-Up Analysis

The largest contributions to χ² are:
- Location A Satisfied: (80-66.67)²/66.67 = 2.67 → **More satisfied than expected**
- Location C Dissatisfied: (50-38.33)²/38.33 = 3.55 → **More dissatisfied than expected**

**Interpretation:** Location A appears to have more satisfied customers than expected, while Location C has more dissatisfied customers than expected.

---

## 🔄 Choosing the Right Chi-Square Test

```
┌─────────────────────────────────────────┐
│   How many samples/populations?         │
└─────────────────┬───────────────────────┘
           ┌──────┴──────┐
          ONE         MULTIPLE
           │              │
           ▼              ▼
┌─────────────────┐   ┌──────────────────┐
│ How many        │   │ Test for         │
│ categorical     │   │ HOMOGENEITY      │
│ variables?      │   │ (same dist?)     │
└────────┬────────┘   └──────────────────┘
    ┌────┴────┐
   ONE       TWO
    │         │
    ▼         ▼
┌─────────┐ ┌─────────────┐
│Goodness │ │Test for     │
│of Fit   │ │INDEPENDENCE │
│(matches │ │(associated?)│
│claimed?)│ └─────────────┘
└─────────┘
```

---

## 📐 Degrees of Freedom Quick Reference

| Test | Formula | Example |
|------|---------|---------|
| **Goodness of Fit** | k - 1 | 6 categories → df = 5 |
| **Independence** | (r-1)(c-1) | 3×4 table → df = 6 |
| **Homogeneity** | (r-1)(c-1) | 2×3 table → df = 2 |

---

## 📊 TI-84 Calculator Commands: Complete Reference

### Goodness of Fit Test

| Step | Command |
|------|---------|
| 1. Enter observed counts in L1 | STAT → Edit |
| 2. Enter expected counts in L2 | STAT → Edit |
| 3. Run test | STAT → TESTS → D:χ²GOF-Test |
| 4. Input: L1, L2, df | Enter and Calculate |

### Independence/Homogeneity Test

| Step | Command |
|------|---------|
| 1. Enter observed in Matrix [A] | 2nd → MATRIX → Edit → [A] |
| 2. Set dimensions | Rows × Columns |
| 3. Enter data | Fill in observed counts |
| 4. Run test | STAT → TESTS → C:χ²-Test |
| 5. View expected | 2nd → MATRIX → [B] |

### Finding P-values

| Task | Command |
|------|---------|
| P-value from χ² | χ²cdf(χ², 1E99, df) |
| Example | χ²cdf(6.058, 1E99, 4) = 0.195 |

---

## ⚠️ Common AP Exam Mistakes

| Mistake | Why Wrong | Correct Approach |
|---------|-----------|------------------|
| Checking observed ≥ 5 | Condition is about EXPECTED counts | Check expected counts ≥ 5 |
| Using wrong df formula | Different tests have different df | GOF: k-1; Others: (r-1)(c-1) |
| Two-tailed P-value | Chi-square is ALWAYS right-tailed | Use χ²cdf(χ², ∞, df) |
| Causation language | Chi-square shows association, not cause | Say "associated" not "causes" |
| Wrong test identification | Independence vs. Homogeneity | Check: one sample or multiple? |
| No follow-up analysis | After rejecting, explain WHERE differences are | Look at largest contributions |

---

## 📊 Interpreting Contributions

When χ² test is significant, identify which cells drive the result:

| Contribution | Interpretation |
|--------------|----------------|
| **Large (O-E)²/E** | This cell differs most from expected |
| **O > E** | Observed MORE than expected under null |
| **O < E** | Observed LESS than expected under null |

### Example Follow-Up

If testing die fairness and rejecting $H_0$:

| Face | O | E | (O-E)²/E | Interpretation |
|------|---|---|----------|----------------|
| 1 | 35 | 20 | 11.25 | **Much more 1s than expected** |
| 6 | 8 | 20 | 7.20 | **Fewer 6s than expected** |

"The die appears biased toward rolling 1 (35 observed vs 20 expected) and against rolling 6 (8 observed vs 20 expected)."

---

## 🔗 Connection to Other Units

| Unit | Connection |
|------|------------|
| **Unit 3** | Chi-square analyzes data from well-designed studies |
| **Unit 4** | Expected counts based on probability under null |
| **Unit 6** | Similar hypothesis testing framework |

---

## 📝 Free Response Template: Chi-Square Tests

### STATE
**Type of test:** Chi-square test for [goodness of fit / independence / homogeneity]

**Hypotheses:**
- For GOF: $H_0$: Distribution matches claimed / $H_a$: Distribution differs
- For Independence: $H_0$: No association / $H_a$: There is an association
- For Homogeneity: $H_0$: Same distribution / $H_a$: Different distribution(s)

**Significance level:** α = [value]

### PLAN
**Conditions:**
- Random: [how data was collected randomly]
- 10%: [n] < 10% of [population]
- Large counts: All expected counts ≥ 5 [show expected counts]

### DO
**Expected counts:** [show calculation or table]

**Test statistic:** χ² = Σ(O-E)²/E = [value]

**Degrees of freedom:** df = [formula] = [value]

**P-value:** [value]

### CONCLUDE
Since P-value = [value] [< or ≥] α = [value], we [reject / fail to reject] $H_0$.

We [have / do not have] convincing evidence that [conclusion in context].

**If rejected:** The largest contributions to χ² come from [cells], indicating [interpretation of direction].
