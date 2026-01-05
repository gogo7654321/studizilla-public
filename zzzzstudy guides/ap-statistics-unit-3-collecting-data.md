# AP Statistics Unit 3 Study Guide

:::GUIDE:::
unit::=Unit 3
title::=📈 Unit 3: Collecting Data Complete Guide
desc::=Master sampling methods, experimental design, observational studies, and bias
diff::=Medium
time::=50 minutes
tags::=statistics, sampling, experiments, observational studies, bias, randomization
content::=

# 📈 Unit 3: Collecting Data

## 📋 Unit Overview

How data is collected matters! This unit explores sampling methods, experimental design, and the differences between observational studies and experiments. Good data collection is the foundation of valid conclusions! 🔬

:::TIMELINE:::
id::=history-experimental-design
title::=History of Experimental Design and Sampling
events::=[
  {"year": "1747", "event": "First Clinical Trial", "detail": "James Lind conducted the first controlled clinical trial, testing treatments for scurvy on sailors aboard HMS Salisbury, demonstrating the power of comparative experiments."},
  {"year": "1835", "event": "Quetelet's Social Physics", "detail": "Adolphe Quetelet pioneered the use of statistics in social science, developing concepts of the 'average man' and advocating for representative sampling."},
  {"year": "1895", "event": "Gallup's Early Work", "detail": "Early survey methodology began developing, laying groundwork for modern polling and sampling techniques."},
  {"year": "1919", "event": "Bowley's Random Sampling", "detail": "Arthur Bowley demonstrated that random sampling could produce accurate population estimates, validating probability sampling methods."},
  {"year": "1923", "event": "Fisher at Rothamsted", "detail": "Ronald A. Fisher joined Rothamsted Experimental Station and began revolutionizing experimental design, introducing randomization, replication, and blocking."},
  {"year": "1925", "event": "Statistical Methods Published", "detail": "Fisher published 'Statistical Methods for Research Workers,' establishing fundamental principles of experimental design."},
  {"year": "1935", "event": "The Design of Experiments", "detail": "Fisher's seminal book introduced factorial designs, Latin squares, and formalized the three principles of experimental design."},
  {"year": "1936", "event": "Literary Digest Debacle", "detail": "The Literary Digest poll predicted Landon over Roosevelt, failing due to voluntary response and undercoverage bias - a landmark lesson in sampling methodology."},
  {"year": "1948", "event": "Dewey vs Truman", "detail": "Pollsters predicted Dewey would win, but quota sampling failed. This led to adoption of probability sampling in political polling."},
  {"year": "1954", "event": "Salk Polio Vaccine Trial", "detail": "The largest randomized controlled trial in history tested the polio vaccine on 1.8 million children, establishing the gold standard for medical research."}
]
:::/TIMELINE:::

### Essential Questions

| Question | Focus |
|----------|-------|
| How do we collect representative data? | Sampling methods |
| What's the difference between studies? | Observational vs. experimental |
| How do we establish causation? | Experimental design |
| What can go wrong? | Bias and confounding |
| What are the key principles? | Randomization, replication, control |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Population** | Entire group of interest |
| **Sample** | Subset selected from population |
| **Bias** | Systematic error |
| **Randomization** | Using chance to select |
| **Experiment** | Imposes treatments |

---

## 👥 Population vs. Sample

### Definitions

| Term | Definition |
|------|------------|
| **Population** | Entire group we want to study |
| **Sample** | Subset actually studied |
| **Parameter** | Number describing population |
| **Statistic** | Number calculated from sample |

### Notation

| Population | Sample |
|------------|--------|
| **N** (size) | **n** (size) |
| **μ** (mean) | **x̄** (mean) |
| **σ** (std dev) | **s** (std dev) |
| **p** (proportion) | **p̂** (proportion) |

### Why Sample?

| Reason | Explanation |
|--------|-------------|
| **Cost** | Cheaper than census |
| **Time** | Faster than census |
| **Impossible** | Can't reach everyone |
| **Destructive testing** | Would destroy population |

---

## 📊 Sampling Methods

### Simple Random Sample (SRS)

| Concept | Description |
|---------|-------------|
| **Definition** | Every group of n has equal chance |
| **How** | Random number generator, drawing names |
| **Advantage** | Eliminates selection bias |
| **Disadvantage** | May miss subgroups |

### Stratified Random Sample

| Concept | Description |
|---------|-------------|
| **Definition** | Divide into groups (strata), SRS from each |
| **When to use** | Strata are similar within, different between |
| **Advantage** | Guarantees representation |
| **Example** | Sample proportionally by grade level |

### Cluster Sample

| Concept | Description |
|---------|-------------|
| **Definition** | Randomly select clusters, survey all in cluster |
| **When to use** | Natural groupings exist |
| **Advantage** | Cheaper, easier logistics |
| **Example** | Randomly select classrooms, survey all students |

### Systematic Sample

| Concept | Description |
|---------|-------------|
| **Definition** | Select every kth individual |
| **Starting point** | Random |
| **Advantage** | Easy to implement |
| **Risk** | Pattern in list could bias |

### Comparison of Methods

| Method | Pros | Cons |
|--------|------|------|
| **SRS** | Unbiased | May miss groups |
| **Stratified** | Ensures representation | Complex |
| **Cluster** | Practical | Higher variability |
| **Systematic** | Easy | Periodic patterns |

---

## ⚠️ Types of Bias

### Sampling Bias

| Type | Description | Example |
|------|-------------|---------|
| **Undercoverage** | Some groups left out | Phone survey excludes those without phones |
| **Convenience** | Use whoever is available | Survey people at mall |
| **Voluntary response** | Self-selected | Online poll |

### Response Bias

| Type | Description | Example |
|------|-------------|---------|
| **Social desirability** | Give "acceptable" answer | Lie about illegal behavior |
| **Leading questions** | Wording suggests answer | "Don't you agree..." |
| **Recall bias** | Memory errors | "How often did you exercise?" |

### Nonresponse Bias

| Type | Description |
|------|-------------|
| **Definition** | Selected individuals don't respond |
| **Problem** | Nonresponders may differ |
| **Solutions** | Follow-up, incentives |

### Detecting Bias

| Question | Purpose |
|----------|---------|
| **Who was sampled?** | Check coverage |
| **How were they selected?** | Check randomization |
| **How many responded?** | Check nonresponse |
| **What was asked?** | Check wording |

---

## 🔬 Observational Study vs. Experiment

### Observational Study

| Concept | Description |
|---------|-------------|
| **Definition** | Observe without intervention |
| **No treatment** | Just measure what exists |
| **Can show** | Association |
| **Cannot show** | Causation |

### Types of Observational Studies

| Type | Description |
|------|-------------|
| **Sample survey** | Question a sample |
| **Retrospective** | Look at past records |
| **Prospective** | Follow subjects into future |

### Experiment

| Concept | Description |
|---------|-------------|
| **Definition** | Impose treatments on subjects |
| **Control** | Experimenter controls |
| **Can show** | Causation (if well-designed) |
| **Key** | Random assignment |

### The Key Difference

| Study Type | Treatments | Causation? |
|------------|------------|------------|
| **Observational** | No | Cannot establish |
| **Experimental** | Yes | Can establish |

---

## 🧪 Experimental Design Vocabulary

### Basic Terms

| Term | Definition |
|------|------------|
| **Experimental units** | Objects being studied |
| **Subjects** | Experimental units if people |
| **Factor** | Explanatory variable |
| **Level** | Specific value of factor |
| **Treatment** | Specific condition imposed |
| **Response variable** | What is measured |

### Example

| Component | Example |
|-----------|---------|
| **Factor** | Type of fertilizer |
| **Levels** | Brand A, Brand B, none |
| **Treatments** | 3 (one for each level) |
| **Experimental units** | Plants |
| **Response** | Plant height |

### Multiple Factors

| Factors | Levels | Treatments |
|---------|--------|------------|
| **2 factors, 3 levels each** | 3 × 3 = 9 treatments |
| **Factor 1: Fertilizer (A, B, C)** | 3 levels |
| **Factor 2: Water (low, high)** | 2 levels |
| **Total treatments** | 3 × 2 = 6 |

---

## 🎯 Principles of Experimental Design

### Three Key Principles

| Principle | Description |
|-----------|-------------|
| **Control** | Compare treatments to a control |
| **Randomization** | Use chance to assign treatments |
| **Replication** | Multiple experimental units |

### Control

| Purpose | Description |
|---------|-------------|
| **Control group** | No treatment or standard treatment |
| **Comparison** | Measure effect against control |
| **Reduces** | Confounding |

### Randomization

| Purpose | Description |
|---------|-------------|
| **Eliminates bias** | No systematic differences |
| **Balances** | Unknown confounders |
| **Key** | Essential for causation |

### Replication

| Purpose | Description |
|---------|-------------|
| **Multiple units** | Each treatment on many units |
| **Reduces** | Chance variation |
| **More is better** | Larger n = more precise |

### Fourth Principle: Blocking (Optional but Important)

| Concept | Description |
|---------|-------------|
| **Block** | Group of similar experimental units |
| **Purpose** | Control for known sources of variation |
| **How** | Random assignment within blocks |
| **Example** | Block by gender, then randomize |

---

## 📐 Experimental Designs

### Completely Randomized Design (CRD)

| Concept | Description |
|---------|-------------|
| **Definition** | Random assignment to all treatments |
| **Simplest** | Most basic design |
| **When to use** | Experimental units are similar |

### Randomized Block Design

| Concept | Description |
|---------|-------------|
| **Definition** | Group into blocks, randomize within |
| **Purpose** | Control for blocking variable |
| **Example** | Block by age, randomize drug vs. placebo within each age group |

### Matched Pairs Design

| Concept | Description |
|---------|-------------|
| **Definition** | Pairs of similar units, one gets each treatment |
| **Special case** | Block of size 2 |
| **Or** | Same subject gets both treatments (crossover) |

### Comparison

| Design | Best When |
|--------|-----------|
| **CRD** | Units homogeneous |
| **Block** | Known source of variation |
| **Matched pairs** | Can create pairs; two treatments |

---

## 💊 Placebos and Blinding

### Placebo

| Concept | Description |
|---------|-------------|
| **Definition** | Fake treatment with no effect |
| **Purpose** | Control for placebo effect |
| **Example** | Sugar pill |

### Placebo Effect

| Concept | Description |
|---------|-------------|
| **Definition** | Improvement just from thinking you're treated |
| **Powerful** | Can be substantial |
| **Why control** | Need true drug effect, not just belief |

### Blinding

| Type | Who is Blinded |
|------|----------------|
| **Single-blind** | Subjects don't know treatment |
| **Double-blind** | Subjects AND researchers don't know |

### Why Double-Blind?

| Reason | Description |
|--------|-------------|
| **Subjects** | Prevent placebo effect |
| **Researchers** | Prevent unconscious bias in measurement |
| **Gold standard** | Best for valid results |

---

## ⚠️ Confounding and Lurking Variables

### Confounding Variable

| Concept | Description |
|---------|-------------|
| **Definition** | Variable whose effect can't be separated from treatment |
| **Problem** | Can't tell what caused result |
| **Solution** | Randomization, blocking |

### Example of Confounding

| Scenario | Problem |
|----------|---------|
| **Volunteer for treatment** | Motivation confounded with treatment |
| **Morning vs. afternoon classes** | Time confounded with class |

### How Randomization Helps

| Effect | Description |
|--------|-------------|
| **Balances groups** | Known and unknown confounders |
| **No systematic differences** | Between treatment groups |
| **Attributes difference to** | Treatment, not confounders |

---

## 📊 Scope of Inference

### Two Questions

| Question | Answered By |
|----------|-------------|
| **Causation?** | Random assignment (experiment) |
| **Generalization?** | Random sampling |

### Inference Table

| | Random Assignment | No Random Assignment |
|---|-------------------|---------------------|
| **Random Sampling** | Cause + Generalize | Generalize only |
| **No Random Sampling** | Cause only (to subjects) | Neither |

### Examples

| Design | What Can Conclude |
|--------|-------------------|
| **Random sample + experiment** | Cause effect generalizes to population |
| **Convenience + experiment** | Cause effect, but only for subjects |
| **Random sample + observational** | Association generalizes |
| **Convenience + observational** | Association for subjects only |

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Population** | Entire group of interest |
| **Sample** | Subset selected |
| **Parameter** | Population number |
| **Statistic** | Sample number |
| **SRS** | Simple random sample |
| **Stratified** | Divide then sample |
| **Cluster** | Sample groups |
| **Bias** | Systematic error |
| **Undercoverage** | Groups left out |
| **Nonresponse** | Selected don't respond |
| **Observational study** | Observe without intervention |
| **Experiment** | Impose treatments |
| **Experimental unit** | Object receiving treatment |
| **Factor** | Explanatory variable manipulated |
| **Treatment** | Specific condition |
| **Control group** | Comparison group |
| **Placebo** | Fake treatment |
| **Blinding** | Hiding treatment assignment |
| **Confounding** | Can't separate effects |
| **Block** | Group of similar units |

---

## 🎯 AP Exam Strategies

### Free Response Tips

| Task | How to Answer |
|------|---------------|
| **Design experiment** | State control, random assignment, treatments, response |
| **Identify bias** | Name type and direction |
| **Compare study types** | Observational can't show causation |
| **Scope of inference** | Generalize? Causation? |

### Common Mistakes

| Mistake | Correction |
|---------|------------|
| **Observational → causation** | Never conclude cause from observational |
| **Convenience = SRS** | Not the same |
| **Random sample = random assignment** | Different purposes |
| **Block = stratify** | Blocking for experiments, stratifying for sampling |

### Blocking vs. Stratifying

| Concept | When Used | Purpose |
|---------|-----------|---------|
| **Stratify** | Sampling | Ensure representation |
| **Block** | Experiments | Control variation |

---

## 🏆 Famous Statisticians in Experimental Design

| Statistician | Contribution | Era |
|--------------|--------------|-----|
| **James Lind** | First controlled clinical trial (scurvy) | 1747 |
| **Ronald A. Fisher** | Randomization, replication, blocking, factorial design | 1920s-30s |
| **Jerzy Neyman** | Confidence intervals, survey sampling theory | 1930s |
| **William Cochran** | Sampling techniques, experimental design | 1940s-50s |
| **David Cox** | Proportional hazards model, experimental design | 1960s+ |

---

## 📊 Worked Examples: Sampling Methods

### Example 1: Simple Random Sample

**Scenario:** A school principal wants to survey 50 students from a school of 1,200 about their lunch preferences.

**Method:**
1. Obtain a numbered list of all 1,200 students (1 to 1200)
2. Use a random number generator to select 50 unique numbers between 1-1200
3. Survey the students corresponding to those numbers

**TI-84 Instructions:**
- MATH → PRB → 5:randInt(1, 1200, 50)
- Store results and remove duplicates if any

### Example 2: Stratified Random Sample

**Scenario:** A researcher wants to study exercise habits of 100 college students, ensuring representation by class year.

**Population breakdown:**
- Freshmen: 400 (40%)
- Sophomores: 300 (30%)
- Juniors: 200 (20%)
- Seniors: 100 (10%)

**Method:**
1. Take proportional samples from each stratum:
   - Freshmen: 100 × 0.40 = 40 students
   - Sophomores: 100 × 0.30 = 30 students
   - Juniors: 100 × 0.20 = 20 students
   - Seniors: 100 × 0.10 = 10 students
2. Use SRS within each class year

### Example 3: Cluster Sample

**Scenario:** Survey opinions of residents in a large city with 500 neighborhoods.

**Method:**
1. Randomly select 25 neighborhoods (clusters)
2. Survey ALL households in those 25 neighborhoods

**When Cluster is Better:** When it's impractical to list all individuals but natural groups exist, and traveling to dispersed individuals would be costly.

### Example 4: Systematic Sample

**Scenario:** Quality control in a factory producing 10,000 items per day, need to inspect 200.

**Method:**
1. Calculate k = 10,000/200 = 50
2. Randomly select starting point between 1-50 (e.g., 23)
3. Select every 50th item: 23, 73, 123, 173, ...

**Risk:** If production line has a pattern with period 50, bias could result.

---

## 🔬 Worked Examples: Experimental Design

### Example 1: Completely Randomized Design

**Research Question:** Does a new fertilizer increase tomato plant yield?

**Design:**
```
50 Tomato Plants
       │
       ▼
  Random Assignment
    ┌────┴────┐
    ▼         ▼
 25 plants  25 plants
   │           │
   ▼           ▼
 New       Standard
Fertilizer Fertilizer
   │           │
   ▼           ▼
 Measure     Measure
  Yield       Yield
   │           │
   └─────┬─────┘
         ▼
     Compare
```

### Example 2: Randomized Block Design

**Research Question:** Does tutoring method affect test scores? (Block by prior ability)

**Design:**
1. Divide students into blocks by GPA (High, Medium, Low)
2. Within each block, randomly assign to Method A or Method B
3. Compare test scores within each block

```
All Students
     │
     ▼
Divide by GPA
┌────┼────┐
▼    ▼    ▼
High Med  Low
 │    │    │
 ▼    ▼    ▼
Random assignment within each block
 │    │    │
 ▼    ▼    ▼
Compare outcomes
```

### Example 3: Matched Pairs Design

**Research Question:** Does caffeine improve reaction time?

**Design:**
- Each subject tested TWICE (crossover design)
- Day 1: Half get caffeine, half get placebo
- Day 2: Switch treatments
- Compare each person's reaction time with vs. without caffeine

**Advantage:** Each subject serves as their own control, eliminating person-to-person variability.

---

## 📐 Identifying Bias: Practice Problems

### Problem 1: Online Poll
**Scenario:** A news website asks visitors to vote on whether they support a new policy. 10,000 respond.

**Bias:** Voluntary response bias
**Explanation:** People with strong opinions (often negative) are more likely to respond. The sample is not representative of the population.

### Problem 2: Mall Survey
**Scenario:** A researcher surveys shoppers at a mall on a Tuesday afternoon about their shopping habits.

**Bias:** Convenience sampling / Undercoverage
**Explanation:** Misses people who work during the day, don't shop at that mall, or avoid malls entirely.

### Problem 3: Phone Survey
**Scenario:** A pollster calls landline numbers to predict election results.

**Bias:** Undercoverage bias
**Explanation:** Young people and lower-income households are less likely to have landlines, underrepresenting these groups.

### Problem 4: Wording Effect
**Scenario:** "Do you support the irresponsible spending proposed in this bill?"

**Bias:** Response bias (leading question)
**Explanation:** The word "irresponsible" suggests the expected answer, biasing responses against the bill.

---

## 🧪 Practice: Observational vs. Experimental

| Scenario | Type | Why? |
|----------|------|------|
| Researchers follow smokers and non-smokers for 20 years to compare lung cancer rates | Observational | No treatment imposed |
| Patients randomly assigned to receive new drug or placebo | Experiment | Random treatment assignment |
| Survey asking about exercise habits and weight | Observational | Just measuring, not imposing |
| Randomly assigning students to morning or afternoon sections to compare performance | Experiment | Treatment (time) randomly assigned |
| Comparing grades of students who choose to use tutoring vs. those who don't | Observational | Self-selection, not random assignment |

---

## 📋 Experimental Design Template

**When asked to design an experiment, include:**

1. **Experimental units/subjects:** What/who is being studied?
2. **Explanatory variable(s):** What are the treatments?
3. **Response variable:** What is measured?
4. **Random assignment:** How? (Draw names, random numbers)
5. **Control/comparison:** What is the control group?
6. **Replication:** How many per group?
7. **Blinding:** Single or double-blind?

**Template Response:**
"Randomly assign [n] subjects to [treatment groups]. Have [control group description]. After [duration], measure [response variable]. Compare [outcomes] between groups."

---

## 🔍 Connection to Other Units

| Unit | Connection to Data Collection |
|------|-------------------------------|
| **Unit 5** | Sampling distribution assumes random sample |
| **Unit 6** | Inference for proportions requires random sample |
| **Unit 7** | t-tests require random sample or random assignment |
| **Unit 9** | Regression inference requires random sample |

---

## ⚠️ Common AP Exam Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| Confusing stratified with cluster | Stratified = SRS from EACH group; Cluster = ALL from SOME groups | Remember: Stratified samples within groups, cluster samples whole groups |
| Saying observational study can prove causation | Only experiments with random assignment can establish causation | Say "associated with" not "caused by" |
| Not mentioning random assignment | Random assignment is THE key for experiments | Always specify HOW you randomly assign |
| Confusing sample and population | Sample is subset we study; population is whole group of interest | Define both clearly |

---

## 📊 Calculator Tips for Random Selection

### TI-84 Random Number Generation

| Task | Command |
|------|---------|
| **One random integer** | MATH → PRB → 5:randInt(low, high) |
| **Multiple random integers** | randInt(low, high, n) |
| **Set seed for reproducibility** | Store number to rand: 123 → rand |
| **Random sample without replacement** | Use L1, then seq and SortA |

### Creating an SRS with TI-84
1. Enter population numbers 1 to N in L1
2. Store rand(N) in L2: rand(N) → L2
3. Sort both lists by L2: SortA(L2, L1)
4. Take first n numbers from sorted L1

---

**Good luck on your AP Statistics exam! 🍀📈🔬**

Remember: Random SAMPLING allows generalization. Random ASSIGNMENT allows causation. You need BOTH for full inference!

---

## 📚 Practice Free Response Problems

### FRQ Practice 1: Design an Experiment

**Question:** A company wants to test whether a new training program improves employee productivity. They have 60 employees available. Design an experiment to test the effectiveness of the new training program.

**Model Answer:**

**STATE:** We want to determine if the new training program causes an increase in employee productivity compared to the current training.

**PLAN:** 
- Use a completely randomized design
- Experimental units: 60 employees
- Treatments: New training program vs. Current training (control)
- Response variable: Productivity score after training

**DO:**
1. Number all 60 employees from 1 to 60
2. Use a random number generator to select 30 numbers without replacement
3. Employees with those numbers receive the new training program
4. Remaining 30 employees receive the current training (control)
5. After training, measure productivity for all employees
6. Compare mean productivity between the two groups

**CONCLUDE:** If the new training group has significantly higher mean productivity, we have evidence that the new training program is more effective.

### FRQ Practice 2: Identify and Explain Bias

**Question:** A local newspaper wants to determine public opinion on a proposed tax increase. They publish a phone number for readers to call and record their opinion. After one week, 2,345 people have called, with 78% opposing the tax increase. The newspaper reports "Community overwhelmingly opposes tax increase."

**a) Identify the sampling method used.**
**b) Explain why this method may produce biased results.**
**c) Describe a better sampling method.**

**Model Answer:**

a) This is **voluntary response sampling** - people choose whether to participate.

b) This produces **voluntary response bias** because:
- People with strong opinions (especially negative ones) are more likely to take the time to call
- Only newspaper readers can participate (undercoverage)
- The sample only includes people who saw the poll and felt motivated to respond
- The 78% opposition likely overestimates true opposition in the community

c) A better method would be a **simple random sample**:
- Obtain a list of all registered voters/residents
- Use a random number generator to select a sample (e.g., 500 people)
- Contact each selected person and record their opinion
- This ensures every member of the population has an equal chance of being selected

### FRQ Practice 3: Scope of Inference

**Question:** Researchers wanted to study whether a new medication reduces blood pressure. They recruited 100 volunteers from a local hospital and randomly assigned them to receive either the new medication or a placebo. After 8 weeks, they found the medication group had significantly lower blood pressure.

**a) Can the researchers conclude that the medication caused the reduction in blood pressure? Explain.**
**b) Can the researchers generalize these results to all adults? Explain.**

**Model Answer:**

a) **Yes, they can conclude causation** because:
- This is a controlled experiment, not an observational study
- Random assignment was used to assign treatments
- Random assignment balances confounding variables between groups
- The placebo controls for the placebo effect
- Any significant difference can be attributed to the treatment

b) **No, they cannot generalize to all adults** because:
- The subjects were volunteers from one hospital (not a random sample)
- They may differ systematically from the general population
- Hospital patients may have different health characteristics
- Results apply only to similar individuals, not all adults
- To generalize, they would need a random sample from the population of interest

---

## 📊 Vocabulary Comparison Chart

| Sampling Term | Experiment Term | Key Difference |
|---------------|-----------------|----------------|
| Population | All experimental units | Target group |
| Sample | Treatment groups | Selected/assigned subset |
| Stratified sample | Blocked design | Group by characteristic, then select/assign |
| Random sampling | Random assignment | Selection vs. treatment assignment |
| Undercoverage | No control group | Missing groups vs. missing comparison |
| Nonresponse | Attrition/dropout | Refusal to participate vs. leaving study |

---

## 🎯 Quick Reference: Three Principles of Experimental Design

```
┌─────────────────────────────────────────────────────────┐
│              EXPERIMENTAL DESIGN PRINCIPLES              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. CONTROL                                             │
│     • Compare treatment to control group                │
│     • Use placebo when possible                         │
│     • Reduces effect of confounding variables           │
│                                                         │
│  2. RANDOMIZATION                                       │
│     • Use chance to assign treatments                   │
│     • Balances known AND unknown confounders            │
│     • Essential for establishing causation              │
│                                                         │
│  3. REPLICATION                                         │
│     • Apply each treatment to many units                │
│     • Larger n = more precise estimates                 │
│     • Allows detection of real effects                  │
│                                                         │
│  (+ BLOCKING when there's known source of variation)    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🔄 Inference Flowchart

```
           ┌─────────────────────┐
           │   Was there random  │
           │     ASSIGNMENT?     │
           └─────────┬───────────┘
                ┌────┴────┐
               YES        NO
                │          │
                ▼          ▼
          ┌─────────┐  ┌─────────┐
          │CAN claim│  │CANNOT   │
          │causation│  │claim    │
          └────┬────┘  │causation│
               │       └─────────┘
               ▼
     ┌─────────────────────┐
     │  Was there random   │
     │     SAMPLING?       │
     └─────────┬───────────┘
          ┌────┴────┐
         YES        NO
          │          │
          ▼          ▼
    ┌──────────┐  ┌──────────┐
    │CAN       │  │CANNOT    │
    │generalize│  │generalize│
    │to pop.   │  │to pop.   │
    └──────────┘  └──────────┘
```
