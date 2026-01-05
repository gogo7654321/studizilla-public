:::GUIDE:::
unit::=5
title::=🧬 Unit 5: Heredity Complete Guide
desc::=Master genetics from Mendel to modern inheritance patterns - Punnett squares, probability, and chromosomal inheritance
diff::=Hard
time::=45 min
tags::=genetics,mendel,heredity,inheritance,meiosis,chromosomes
content::=

# 🧬 Unit 5: Heredity

## 📚 Unit Overview

Welcome to heredity - where we learn how traits pass from parents to offspring! 🎯 This unit bridges the cell cycle concepts from Unit 4 with the molecular genetics of Unit 6. Understanding inheritance patterns is essential for both the AP exam and real-world applications in medicine and agriculture.

---

## 🔬 5.1 Meiosis

### Why Sexual Reproduction? 🤔

Sexual reproduction creates **genetic diversity** - essential for:
- Adaptation to changing environments
- Defense against pathogens
- Elimination of harmful mutations

### Meiosis Overview

| Feature | Meiosis I | Meiosis II |
|---------|-----------|------------|
| DNA Replication | Before (S phase) | None |
| Division Type | Reductional | Equational |
| Sister Chromatids | Stay together | Separate |
| Homologs | Separate | Already separated |
| Ploidy Change | 2n → n | n → n |
| Crossing Over | Yes (prophase I) | No |

### Stages of Meiosis I 📊

**Prophase I** (longest phase):
- Homologous chromosomes pair up (**synapsis**)
- Form **tetrads** (bivalents) = 4 chromatids
- **Crossing over** occurs at **chiasmata**
- Nuclear envelope breaks down

**Metaphase I**:
- Tetrads align at metaphase plate
- **Independent assortment** occurs
- Spindle fibers attach to kinetochores

**Anaphase I**:
- Homologs separate (NOT sister chromatids!)
- Reduces chromosome number by half

**Telophase I & Cytokinesis**:
- Two haploid cells form
- Each has one chromosome from each homologous pair

### Stages of Meiosis II 🔄

Meiosis II resembles mitosis:

| Stage | Events |
|-------|--------|
| Prophase II | Spindle reforms, chromosomes condense |
| Metaphase II | Chromosomes line up at metaphase plate |
| Anaphase II | Sister chromatids finally separate |
| Telophase II | Four haploid daughter cells form |

### Sources of Genetic Variation 🎲

```
╔══════════════════════════════════════════════════════════════╗
║              SOURCES OF GENETIC VARIATION                     ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  1. CROSSING OVER (Prophase I)                               ║
║     • Exchange of segments between homologs                   ║
║     • Creates recombinant chromosomes                         ║
║     • Occurs at chiasmata                                     ║
║                                                               ║
║  2. INDEPENDENT ASSORTMENT (Metaphase I)                     ║
║     • Random orientation of homologs                          ║
║     • Creates 2ⁿ possible combinations                        ║
║     • Humans: 2²³ = 8,388,608 combinations!                   ║
║                                                               ║
║  3. RANDOM FERTILIZATION                                      ║
║     • Any sperm can fertilize any egg                         ║
║     • (2²³)² = 70+ trillion combinations!                     ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

### Crossing Over Mechanism 🧬

$$\text{Recombination frequency} = \frac{\text{Recombinant offspring}}{\text{Total offspring}} \times 100\%$$

More crossing over = genes are farther apart on chromosome

---

## 🌱 5.2 Mendelian Genetics

### Gregor Mendel's Legacy 🔬

Mendel's work with **pea plants** established fundamental laws:

| Mendel's Law | Description | Modern Explanation |
|--------------|-------------|-------------------|
| **Law of Segregation** | Two alleles separate during gamete formation | Homologs separate in Anaphase I |
| **Law of Independent Assortment** | Alleles of different genes sort independently | Random orientation in Metaphase I |
| **Law of Dominance** | One allele can mask another | Dominant allele produces functional protein |

### Key Terminology 📖

| Term | Definition | Example |
|------|------------|---------|
| **Gene** | Unit of heredity | Eye color gene |
| **Allele** | Version of a gene | Brown (B) or blue (b) |
| **Locus** | Location on chromosome | Specific position |
| **Genotype** | Genetic makeup | BB, Bb, or bb |
| **Phenotype** | Physical expression | Brown eyes |
| **Homozygous** | Same alleles | BB or bb |
| **Heterozygous** | Different alleles | Bb |

### Monohybrid Crosses 🔢

A cross involving ONE gene:

```
        P:     Bb  ×  Bb
              (tall) (tall)
                 ↓
        Gametes: B, b  ×  B, b
                 ↓
             Punnett Square:
           ┌─────┬─────┬─────┐
           │     │  B  │  b  │
           ├─────┼─────┼─────┤
           │  B  │ BB  │ Bb  │
           ├─────┼─────┼─────┤
           │  b  │ Bb  │ bb  │
           └─────┴─────┴─────┘

     Genotypic ratio: 1 BB : 2 Bb : 1 bb
     Phenotypic ratio: 3 tall : 1 short
```

### Probability Rules 🎲

**Rule of Multiplication** (AND):
$$P(A \text{ and } B) = P(A) \times P(B)$$

**Rule of Addition** (OR):
$$P(A \text{ or } B) = P(A) + P(B)$$

Example: What's the probability of getting Bb from Bb × Bb?
- P(B from parent 1) × P(b from parent 2) = 1/2 × 1/2 = 1/4
- P(b from parent 1) × P(B from parent 2) = 1/2 × 1/2 = 1/4
- Total P(Bb) = 1/4 + 1/4 = **1/2**

### Testcross 🧪

To determine if dominant phenotype is **homozygous** or **heterozygous**:

| Cross | Result | Conclusion |
|-------|--------|------------|
| B? × bb | All dominant offspring | Parent was BB |
| B? × bb | 1:1 ratio (dom:rec) | Parent was Bb |

---

## 🎯 5.3 Dihybrid Crosses

### Law of Independent Assortment in Action

Crossing individuals heterozygous for TWO genes:

```
        P:    RrYy  ×  RrYy
           (round,   (round,
            yellow)   yellow)

     FOIL Gametes: RY, Ry, rY, ry

              ┌──────┬──────┬──────┬──────┐
              │  RY  │  Ry  │  rY  │  ry  │
     ┌────────┼──────┼──────┼──────┼──────┤
     │   RY   │ RRYY │ RRYy │ RrYY │ RrYy │
     ├────────┼──────┼──────┼──────┼──────┤
     │   Ry   │ RRYy │ RRyy │ RrYy │ Rryy │
     ├────────┼──────┼──────┼──────┼──────┤
     │   rY   │ RrYY │ RrYy │ rrYY │ rrYy │
     ├────────┼──────┼──────┼──────┼──────┤
     │   ry   │ RrYy │ Rryy │ rrYy │ rryy │
     └────────┴──────┴──────┴──────┴──────┘

     Phenotypic Ratio: 9:3:3:1
     • 9 Round, Yellow (R_Y_)
     • 3 Round, Green (R_yy)
     • 3 Wrinkled, Yellow (rrY_)
     • 1 Wrinkled, Green (rryy)
```

### Shortcut for Phenotypic Ratios 🚀

For independent genes, multiply monohybrid ratios:

$$\text{Dihybrid ratio} = \text{(3:1)} \times \text{(3:1)} = 9:3:3:1$$

For n independent genes:
$$\text{Number of phenotypes} = 2^n$$
$$\text{Number of genotypes} = 3^n$$

---

## 🔗 5.4 Non-Mendelian Inheritance

### Incomplete Dominance 🌸

Neither allele is completely dominant - **heterozygote shows intermediate phenotype**

| Genotype | Phenotype | Example |
|----------|-----------|---------|
| RR | Red | Snapdragon flowers |
| Rr | **Pink** | Blend of red and white |
| rr | White | No pigment |

**Ratio**: 1 red : 2 pink : 1 white (genotypic = phenotypic!)

### Codominance 🩸

Both alleles fully expressed - **heterozygote shows BOTH phenotypes**

Example: ABO Blood Types

| Alleles | Blood Type | Antigens | Antibodies |
|---------|------------|----------|------------|
| I^A I^A or I^A i | Type A | A | Anti-B |
| I^B I^B or I^B i | Type B | B | Anti-A |
| I^A I^B | Type AB | Both A and B | Neither |
| ii | Type O | Neither | Both |

### Multiple Alleles 🎨

More than 2 alleles exist in population (but individual still has only 2):

```
╔════════════════════════════════════════════════════════════╗
║                 ABO BLOOD TYPE GENETICS                     ║
╠════════════════════════════════════════════════════════════╣
║                                                             ║
║  Three alleles: Iᴬ, Iᴮ, i                                   ║
║                                                             ║
║  Dominance: Iᴬ = Iᴮ (codominant) > i (recessive)           ║
║                                                             ║
║  Possible genotypes: 6 (Iᴬ Iᴬ, Iᴬ Iᴮ, Iᴬi, Iᴮ Iᴮ, Iᴮi, ii)  ║
║  Possible phenotypes: 4 (A, B, AB, O)                       ║
║                                                             ║
╚════════════════════════════════════════════════════════════╝
```

### Polygenic Inheritance 📊

Multiple genes contribute to ONE trait - creates **continuous variation**

Examples:
- Human skin color (3+ genes)
- Height (many genes)
- Eye color (multiple genes)

$$\text{Phenotype} = G_1 + G_2 + G_3 + ... + G_n + \text{Environment}$$

Distribution follows **bell curve** (normal distribution)

### Epistasis 🎭

One gene affects expression of another gene:

| Type | Description | Example |
|------|-------------|---------|
| **Recessive epistasis** | Homozygous recessive masks other gene | Labrador coat color |
| **Dominant epistasis** | Dominant allele masks other gene | Squash color |

**Labrador Example**:
- E gene controls pigment deposition
- B gene controls pigment color (black vs brown)
- ee = yellow (no pigment deposited, regardless of B)

Modified ratios: 9:3:4 or 12:3:1 instead of 9:3:3:1

### Pleiotropy 🕸️

ONE gene affects MULTIPLE traits:

Example: Sickle Cell Allele (HbS)
- Changes hemoglobin shape
- Causes anemia
- Provides malaria resistance
- Affects multiple organ systems

---

## 🎲 5.5 Chromosomal Inheritance

### Sex Chromosomes 👫

| Feature | Females | Males |
|---------|---------|-------|
| Sex chromosomes | XX | XY |
| X chromosomes | 2 | 1 |
| Y chromosome | 0 | 1 |
| X-linked traits | 2 copies | 1 copy (hemizygous) |

### Sex-Linked Inheritance ♂️♀️

X-linked recessive disorders are more common in males:

```
     X-LINKED RECESSIVE (Color Blindness)
     
     Cross: XᴮXᵇ (carrier ♀) × XᴮY (normal ♂)
     
              ┌────────┬────────┐
              │   Xᴮ   │   Y    │
     ┌────────┼────────┼────────┤
     │   Xᴮ   │  XᴮXᴮ  │  XᴮY   │
     │        │ normal │ normal │
     │        │   ♀    │   ♂    │
     ├────────┼────────┼────────┤
     │   Xᵇ   │  XᴮXᵇ  │  XᵇY   │
     │        │ carrier│affected│
     │        │   ♀    │   ♂    │
     └────────┴────────┴────────┘
     
     Result: 50% chance of affected son
             50% of daughters are carriers
```

### Common X-Linked Disorders

| Disorder | Gene/Protein Affected | Symptoms |
|----------|----------------------|----------|
| Hemophilia | Clotting factors | Uncontrolled bleeding |
| Color blindness | Cone photopigments | Can't distinguish colors |
| Duchenne MD | Dystrophin | Muscle degeneration |

### Y-Linked Traits

- Very few genes on Y chromosome
- Pass only from father to son
- Examples: SRY gene (male determination), some forms of infertility

### X-Inactivation 🔇

In females, one X chromosome is inactivated in each cell:
- Creates **Barr body**
- Random which X is inactivated
- Results in **mosaic** expression

Example: Calico cats (X^O X^B)
- Some cells express orange
- Some cells express black
- Creates patchy coat pattern

---

## 🔬 5.6 Linked Genes

### What is Linkage? 🔗

Genes on the **same chromosome** tend to be inherited together:

| Situation | Behavior | Ratio |
|-----------|----------|-------|
| **Unlinked genes** | Assort independently | 9:3:3:1 |
| **Linked genes (no CO)** | Always together | Parental only |
| **Linked genes (with CO)** | Mostly together | Mostly parental |

### Recombination and Map Distance 📏

$$\text{Recombination frequency (RF)} = \frac{\text{Recombinant offspring}}{\text{Total offspring}} \times 100\%$$

**1% RF = 1 map unit (centiMorgan, cM)**

```
╔═══════════════════════════════════════════════════════════════╗
║                    GENE MAPPING EXAMPLE                        ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║   If RF between genes A and B = 15%                           ║
║   And RF between genes B and C = 10%                          ║
║   And RF between genes A and C = 25%                          ║
║                                                                ║
║   Then gene order is:  A ←15→ B ←10→ C                        ║
║                                                                ║
║   ────────●──────────────●────────●────────                   ║
║           A              B        C                            ║
║           └────15 cM────┘└─10 cM─┘                            ║
║           └────────25 cM─────────┘                            ║
║                                                                ║
╚═══════════════════════════════════════════════════════════════╝
```

### Maximum Recombination

RF cannot exceed 50% (would look like independent assortment)
- Very far apart on same chromosome
- Or on different chromosomes

---

## ⚠️ 5.7 Chromosomal Abnormalities

### Nondisjunction 🚫

Failure of chromosomes to separate properly:

| Stage | Result | Example |
|-------|--------|---------|
| Meiosis I | Both homologs go to same cell | All gametes abnormal |
| Meiosis II | Sister chromatids fail to separate | Half gametes normal |

### Aneuploidy Conditions

| Condition | Chromosomes | Features |
|-----------|-------------|----------|
| **Down syndrome** | Trisomy 21 | Intellectual disability, heart defects |
| **Klinefelter** | XXY | Male, tall, infertile |
| **Turner** | XO | Female, short, infertile |
| **Triple X** | XXX | Female, often normal phenotype |

$$\text{Monosomy: } 2n - 1 = 45$$
$$\text{Trisomy: } 2n + 1 = 47$$

### Chromosomal Mutations 🧬

| Type | Description | Effect |
|------|-------------|--------|
| **Deletion** | Loss of chromosome segment | Usually harmful |
| **Duplication** | Extra copy of segment | Variable effects |
| **Inversion** | Segment flipped 180° | May affect linked genes |
| **Translocation** | Segment moves to different chromosome | May cause cancer |

---

## 📊 5.8 Chi-Square Analysis

### Testing Genetic Hypotheses 🧮

Chi-square test determines if observed results match expected ratios:

$$\chi^2 = \sum \frac{(O - E)^2}{E}$$

Where:
- O = Observed value
- E = Expected value

### Chi-Square Example

Expected 3:1 ratio from Bb × Bb cross (total 100 offspring):

| Phenotype | Observed (O) | Expected (E) | (O-E)² | (O-E)²/E |
|-----------|--------------|--------------|--------|----------|
| Tall | 68 | 75 | 49 | 0.65 |
| Short | 32 | 25 | 49 | 1.96 |
| **Total** | 100 | 100 | — | **χ² = 2.61** |

### Degrees of Freedom

$$df = \text{number of categories} - 1$$

For 2 phenotypes: df = 2 - 1 = 1

### Using the Chi-Square Table 📋

| df | p = 0.05 | p = 0.01 |
|----|----------|----------|
| 1 | 3.84 | 6.63 |
| 2 | 5.99 | 9.21 |
| 3 | 7.81 | 11.34 |
| 4 | 9.49 | 13.28 |

**Interpretation**:
- If χ² < critical value → **Accept null hypothesis** (results match expected)
- If χ² > critical value → **Reject null hypothesis** (results differ significantly)

Our χ² = 2.61 < 3.84, so we accept that our data fits a 3:1 ratio ✓

---

## 🧪 5.9 Pedigree Analysis

### Reading Pedigrees 📖

```
     PEDIGREE SYMBOLS
     
     □ = Unaffected male
     ○ = Unaffected female
     ■ = Affected male
     ● = Affected female
     ◐ = Carrier female
     ◑ = Carrier male
     ─ = Mating
     │ = Offspring
```

### Identifying Inheritance Patterns 🔍

| Pattern | Key Indicators |
|---------|----------------|
| **Autosomal Dominant** | Every affected person has affected parent; ~50% of offspring affected |
| **Autosomal Recessive** | Can skip generations; affected offspring from unaffected parents |
| **X-linked Dominant** | No father-to-son transmission; affected fathers have all affected daughters |
| **X-linked Recessive** | More males affected; carrier mothers pass to sons |
| **Y-linked** | Only males affected; all sons of affected fathers are affected |

### Autosomal Recessive Pedigree Example

```
                ◑────○
               (Aa)  (Aa)
                 │
         ┌───┬──┴──┬───┐
         │   │     │   │
         ■   □     ○   ◐
        (aa) (A_)  (A_) (Aa)
```

Clues it's autosomal recessive:
- ✓ Affected individual from unaffected parents
- ✓ Both sexes equally affected
- ✓ Trait can skip generations

### Calculating Carrier Probability

If both parents are carriers (Aa × Aa):
- P(affected) = 1/4
- P(carrier) = 2/4 = 1/2
- P(homozygous dominant) = 1/4

For unaffected offspring:
$$P(\text{carrier} | \text{unaffected}) = \frac{2/4}{3/4} = \frac{2}{3}$$

---

## 📝 Unit 5 Summary Table

| Topic | Key Concept | AP Exam Focus |
|-------|-------------|---------------|
| Meiosis | Creates genetic diversity | Crossing over, independent assortment |
| Mendel's Laws | Segregation & independent assortment | Punnett squares, probability |
| Monohybrid | Single gene crosses | 3:1 phenotypic ratio |
| Dihybrid | Two gene crosses | 9:3:3:1 ratio |
| Incomplete Dominance | Intermediate phenotype | 1:2:1 ratio |
| Codominance | Both alleles expressed | Blood types |
| Epistasis | Gene interaction | Modified ratios |
| Sex-linkage | X-linked inheritance | Males more affected |
| Chi-square | Statistical analysis | Hypothesis testing |
| Pedigrees | Family inheritance | Pattern recognition |

---

## 🎯 AP Exam Tips

### Common Free Response Topics 📝

1. **Meiosis vs Mitosis comparisons**
2. **Punnett square calculations with probability**
3. **Chi-square analysis**
4. **Pedigree interpretation**
5. **Non-Mendelian inheritance patterns**

### Key Equations to Know 🔢

$$P(A \text{ and } B) = P(A) \times P(B)$$

$$P(A \text{ or } B) = P(A) + P(B)$$

$$\chi^2 = \sum \frac{(O - E)^2}{E}$$

$$\text{RF} = \frac{\text{recombinants}}{\text{total}} \times 100\%$$

### Ratio Recognition 📊

| Ratio | Inheritance Pattern |
|-------|---------------------|
| 3:1 | Monohybrid, complete dominance |
| 1:2:1 | Incomplete dominance or codominance |
| 9:3:3:1 | Dihybrid, independent assortment |
| 9:3:4 | Recessive epistasis |
| 9:7 | Duplicate recessive epistasis |
| 12:3:1 | Dominant epistasis |
| 1:1:1:1 | Testcross (AaBb × aabb) |

---

## 🔬 Practice Problem

**Question**: In peas, tall (T) is dominant to short (t), and yellow seeds (Y) is dominant to green (y). If a plant heterozygous for both traits is crossed with a plant heterozygous for height but homozygous recessive for seed color, what fraction of offspring will be tall with green seeds?

**Solution**:

Cross: TtYy × Ttyy

For height (Tt × Tt):
- P(tall) = 3/4

For seed color (Yy × yy):
- P(green = yy) = 1/2

Combined: 
$$P(\text{tall, green}) = \frac{3}{4} \times \frac{1}{2} = \frac{3}{8}$$

**Answer**: 3/8 of offspring will be tall with green seeds 🎯

---

## 🔗 Connection to Other Units

| Unit | Connection |
|------|------------|
| **Unit 4** | Meiosis builds on cell cycle concepts |
| **Unit 6** | Molecular basis of inheritance (DNA) |
| **Unit 7** | Genetic variation drives evolution |
| **Unit 8** | Genetics affects population dynamics |

---

*Happy studying! Remember: Practice Punnett squares until they're automatic, and ALWAYS check your math on probability problems!* 🧬✨

:::GUIDE:::
