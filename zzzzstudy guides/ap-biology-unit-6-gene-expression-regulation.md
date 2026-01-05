:::GUIDE:::
unit::=6
title::=🧬 Unit 6: Gene Expression and Regulation Complete Guide
desc::=Master the molecular genetics of DNA, RNA, and protein synthesis - from replication to gene control
diff::=Hard
time::=50 min
tags::=dna,rna,transcription,translation,gene-regulation,biotechnology
content::=

# 🧬 Unit 6: Gene Expression and Regulation

## 📚 Unit Overview

Welcome to molecular genetics! 🔬 This unit takes you inside the cell to understand how genetic information flows from DNA → RNA → Protein. You'll learn the Central Dogma, gene regulation, and biotechnology techniques that appear frequently on the AP exam.

---

## 🔬 6.1 DNA Structure and Function

### The Discovery of DNA 📜

| Scientist(s) | Contribution | Year |
|--------------|--------------|------|
| Frederick Griffith | Transformation principle | 1928 |
| Avery, MacLeod, McCarty | DNA is genetic material | 1944 |
| Hershey & Chase | DNA (not protein) carries genetic info | 1952 |
| Watson & Crick | Double helix structure | 1953 |
| Rosalind Franklin | X-ray crystallography data | 1952 |

### DNA Structure 🧬

```
╔════════════════════════════════════════════════════════════════╗
║                    DNA DOUBLE HELIX                             ║
╠════════════════════════════════════════════════════════════════╣
║                                                                 ║
║         5'─────────────────────────────────────────3'          ║
║            A═══════T                                            ║
║              G≡≡≡≡≡C                                            ║
║            T═══════A                                            ║
║              C≡≡≡≡≡G                                            ║
║            G≡≡≡≡≡C                                              ║
║              A═══════T                                          ║
║         3'─────────────────────────────────────────5'          ║
║                                                                 ║
║    ═══ = 2 hydrogen bonds (A-T)                                ║
║    ≡≡≡ = 3 hydrogen bonds (G-C)                                ║
║                                                                 ║
╚════════════════════════════════════════════════════════════════╝
```

### Nucleotide Components

| Component | Description |
|-----------|-------------|
| **Phosphate group** | Negatively charged, forms backbone |
| **Deoxyribose sugar** | 5-carbon sugar (DNA) |
| **Nitrogenous base** | A, T, G, or C |

### Base Pairing Rules (Chargaff's Rules) 🔗

| Purines (2 rings) | Pyrimidines (1 ring) |
|-------------------|---------------------|
| **A**denine | **T**hymine |
| **G**uanine | **C**ytosine |

$$\text{Purine + Pyrimidine = constant width}$$

**Memory trick**: "Pure As Gold" (Purines = A and G)

### DNA Features

| Feature | Description |
|---------|-------------|
| **Antiparallel** | Strands run 5' → 3' in opposite directions |
| **Complementary** | A pairs with T; G pairs with C |
| **Right-handed helix** | Twists clockwise when viewed from top |
| **Major & minor grooves** | Allow protein binding |

---

## 🔄 6.2 DNA Replication

### Semiconservative Replication

Meselson-Stahl experiment proved DNA replication is **semiconservative**:
- Each new DNA molecule has ONE original strand and ONE new strand

### Key Enzymes 🔧

| Enzyme | Function | Memory Tip |
|--------|----------|------------|
| **Helicase** | Unwinds double helix | "Helicase unzips" |
| **Topoisomerase** | Relieves tension ahead | "Releases twists on top" |
| **Primase** | Makes RNA primer | "Primer-ase" |
| **DNA Polymerase III** | Synthesizes new DNA (5'→3') | Main polymerase |
| **DNA Polymerase I** | Removes primers, fills gaps | "Cleanup crew" |
| **Ligase** | Joins Okazaki fragments | "Ligation = joining" |
| **SSB proteins** | Keep strands separated | "Single-strand binding" |

### The Replication Fork 🍴

```
                    REPLICATION FORK
                    
            5' ←────────────────────── 3'
                         ↑
                      Helicase
                    (unwinds DNA)
                         ↓
    ────────────────────╱╲────────────────────
                       ╱  ╲
    LEADING STRAND    ╱    ╲   LAGGING STRAND
    (continuous)     ╱      ╲  (discontinuous)
                    ╱        ╲
    5' ←─────────←╱          ╲→ 5'  3'  5'  3'
                 3'            ←──  ←──  ←──
                              Okazaki fragments
                              
    DNA Pol III synthesizes ONLY in 5' → 3' direction!
```

### Leading vs Lagging Strand

| Feature | Leading Strand | Lagging Strand |
|---------|---------------|----------------|
| Direction | Toward fork | Away from fork |
| Synthesis | Continuous | Discontinuous |
| Primers needed | One | Many |
| Okazaki fragments | No | Yes |
| Speed | Faster | Slower |

### Replication Steps

1. **Initiation**: Helicase binds origin of replication (ori)
2. **Primer synthesis**: Primase adds RNA primers
3. **Elongation**: DNA Pol III adds nucleotides (5'→3')
4. **Primer removal**: DNA Pol I replaces RNA with DNA
5. **Ligation**: Ligase seals gaps

### Proofreading & Repair 🔍

| Mechanism | Function | Error Rate |
|-----------|----------|------------|
| **DNA Pol proofreading** | 3'→5' exonuclease activity | 10⁻⁷ |
| **Mismatch repair** | Fixes errors after replication | 10⁻⁹ |
| **Nucleotide excision repair** | Removes bulky lesions (UV damage) | Variable |

$$\text{Final error rate} \approx 1 \text{ error per } 10^9 \text{ nucleotides}$$

---

## 📝 6.3 Transcription

### The Central Dogma 🔄

$$\text{DNA} \xrightarrow{\text{Transcription}} \text{RNA} \xrightarrow{\text{Translation}} \text{Protein}$$

### RNA vs DNA

| Feature | DNA | RNA |
|---------|-----|-----|
| Sugar | Deoxyribose | Ribose |
| Bases | A, T, G, C | A, **U**, G, C |
| Structure | Double helix | Single strand |
| Location | Nucleus | Nucleus → Cytoplasm |
| Function | Genetic storage | Protein synthesis |

### Types of RNA 📋

| RNA Type | Function | Structure |
|----------|----------|-----------|
| **mRNA** | Carries genetic code | Linear, codons |
| **tRNA** | Brings amino acids | Cloverleaf shape |
| **rRNA** | Forms ribosomes | Complex folding |

### Transcription Process (Prokaryotes) 🔄

```
╔════════════════════════════════════════════════════════════════╗
║                    TRANSCRIPTION STEPS                          ║
╠════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  1. INITIATION                                                  ║
║     • RNA polymerase binds PROMOTER                            ║
║     • Promoter = -10 (TATA box) and -35 sequences              ║
║     • DNA unwinds locally                                       ║
║                                                                 ║
║  2. ELONGATION                                                  ║
║     • RNA Pol reads TEMPLATE strand (3' → 5')                  ║
║     • Synthesizes mRNA (5' → 3')                               ║
║     • Coding strand = same sequence as mRNA (except T→U)       ║
║                                                                 ║
║  3. TERMINATION                                                 ║
║     • RNA Pol reaches TERMINATOR sequence                      ║
║     • mRNA released                                             ║
║     • RNA Pol dissociates                                       ║
║                                                                 ║
╚════════════════════════════════════════════════════════════════╝
```

### Template vs Coding Strand

| Strand | Direction Read | Relationship to mRNA |
|--------|---------------|---------------------|
| **Template strand** | 3' → 5' | Complementary |
| **Coding strand** | 5' → 3' | Same sequence (T→U) |

**Example**:
- Template: 3'-TACGGATCC-5'
- mRNA: 5'-AUGCCUAGG-3'
- Coding: 5'-ATGCCTAGG-3'

---

## 🔧 6.4 RNA Processing (Eukaryotes)

### Pre-mRNA Modifications

Eukaryotic mRNA undergoes processing before leaving nucleus:

```
           PRE-mRNA PROCESSING
           
     5'──[Exon 1]─[Intron]─[Exon 2]─[Intron]─[Exon 3]──3'
              ↓
         1. 5' Cap added (modified G)
         2. 3' Poly-A tail added
         3. Introns spliced out
              ↓
     5' Cap──[Exon 1]─[Exon 2]─[Exon 3]──AAAAAAA 3'
                    ↓
               Mature mRNA
               (exits nucleus)
```

### Processing Steps

| Modification | Function |
|--------------|----------|
| **5' Cap** (7-methylguanosine) | Protects from degradation, ribosome recognition |
| **3' Poly-A tail** | Stability, export from nucleus |
| **Splicing** | Removes introns, joins exons |

### Splicing Mechanism 🔪

- **Introns**: Non-coding sequences ("In-trons stay IN the nucleus")
- **Exons**: Coding sequences ("Ex-ons are Ex-pressed")
- **Spliceosome**: Complex of snRNPs that cuts and joins

### Alternative Splicing 🎭

One gene can produce **multiple proteins**!

$$\text{Same pre-mRNA} \rightarrow \text{Different exon combinations} \rightarrow \text{Different proteins}$$

Example: Human genes average ~3 different proteins per gene through alternative splicing

---

## 🏭 6.5 Translation

### The Genetic Code 📖

| Feature | Description |
|---------|-------------|
| **Codon** | 3 nucleotides = 1 amino acid |
| **64 codons** | 4³ = 64 possible combinations |
| **Degeneracy** | Multiple codons → same amino acid |
| **Universal** | Same code in almost all organisms |
| **Non-overlapping** | Codons read sequentially |

### Important Codons 🔑

| Codon | Function |
|-------|----------|
| **AUG** | Start codon (Methionine) |
| **UAA, UAG, UGA** | Stop codons |

**Memory trick**: "U Are Annoying, U Are Gone, U Go Away"

### tRNA Structure 🍀

```
         AMINO ACID
              │
          ═══════
         │       │
         │ A     │  ← Acceptor stem (CCA)
         │  C    │
         │   C   │
         └───┬───┘
             │
         ┌───┴───┐
         │       │
         │       │  ← D loop
         │       │
         └───┬───┘
             │
         ┌───┴───┐
         │       │  ← Anticodon loop
         │  UAC  │  ← Anticodon (pairs with AUG)
         └───────┘
```

### Ribosome Structure 🏛️

| Component | Function |
|-----------|----------|
| **Small subunit (40S/30S)** | mRNA binding, codon reading |
| **Large subunit (60S/50S)** | Peptide bond formation |
| **P site** | Holds tRNA with growing polypeptide |
| **A site** | Accepts incoming aminoacyl-tRNA |
| **E site** | Exit site for empty tRNA |

### Translation Steps

```
╔════════════════════════════════════════════════════════════════╗
║                    TRANSLATION STEPS                            ║
╠════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  1. INITIATION                                                  ║
║     • Small subunit binds mRNA at 5' cap                       ║
║     • Scans for AUG start codon                                ║
║     • Initiator tRNA (Met) binds P site                        ║
║     • Large subunit joins                                       ║
║                                                                 ║
║  2. ELONGATION (repeating cycle)                               ║
║     • Charged tRNA enters A site                               ║
║     • Peptide bond forms (peptidyl transferase)                ║
║     • Ribosome translocates (P→E, A→P)                         ║
║     • Empty tRNA exits E site                                   ║
║                                                                 ║
║  3. TERMINATION                                                 ║
║     • Stop codon (UAA, UAG, UGA) reaches A site                ║
║     • Release factor binds                                      ║
║     • Polypeptide released                                      ║
║     • Ribosome dissociates                                      ║
║                                                                 ║
╚════════════════════════════════════════════════════════════════╝
```

### Polyribosomes (Polysomes) 🔗

Multiple ribosomes translate same mRNA simultaneously:
- Increases protein production efficiency
- Can produce many copies of same protein quickly

---

## ⚠️ 6.6 Mutations

### Types of Point Mutations 🔴

| Mutation Type | Change | Effect |
|---------------|--------|--------|
| **Silent** | Codon changes, same amino acid | No effect (degeneracy) |
| **Missense** | Different amino acid | Variable effect |
| **Nonsense** | Creates stop codon | Truncated protein |

### Frameshift Mutations 📐

| Mutation | Effect |
|----------|--------|
| **Insertion** | Adds nucleotide(s), shifts reading frame |
| **Deletion** | Removes nucleotide(s), shifts reading frame |

**Frameshift example**:
```
Original:    THE CAT SAT
Deletion:    TH_ CAT SAT → THC ATS AT (nonsense!)
Insertion:   THE XCA TSA T → Different reading frame
```

### Chromosomal Mutations 🧬

| Type | Description |
|------|-------------|
| **Deletion** | Loss of chromosome segment |
| **Duplication** | Extra copy of segment |
| **Inversion** | Segment reversed |
| **Translocation** | Segment moved to different chromosome |

### Causes of Mutations

| Mutagen Type | Examples |
|--------------|----------|
| **Chemical** | Benzene, nitrous acid, base analogs |
| **Physical** | UV light, X-rays, gamma rays |
| **Biological** | Transposons, viruses |
| **Spontaneous** | Replication errors, deamination |

---

## 🎛️ 6.7 Gene Regulation

### Why Regulate Genes? 🤔

- Cells don't need all proteins all the time
- Saves energy and resources
- Allows cellular differentiation
- Responds to environmental signals

### Levels of Gene Regulation

```
╔═══════════════════════════════════════════════════════════════╗
║               LEVELS OF GENE REGULATION                        ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  1. EPIGENETIC (DNA accessibility)                            ║
║     • DNA methylation                                          ║
║     • Histone modification                                     ║
║                                                                ║
║  2. TRANSCRIPTIONAL (most common)                              ║
║     • Promoters and enhancers                                  ║
║     • Transcription factors                                    ║
║     • Operons (prokaryotes)                                    ║
║                                                                ║
║  3. POST-TRANSCRIPTIONAL                                       ║
║     • RNA splicing                                             ║
║     • mRNA stability                                           ║
║     • RNA interference (miRNA, siRNA)                          ║
║                                                                ║
║  4. TRANSLATIONAL                                              ║
║     • Initiation factors                                       ║
║     • mRNA localization                                        ║
║                                                                ║
║  5. POST-TRANSLATIONAL                                         ║
║     • Protein modification (phosphorylation)                   ║
║     • Protein degradation (ubiquitin)                          ║
║                                                                ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 🦠 6.8 Prokaryotic Gene Regulation (Operons)

### Operon Structure 🏗️

| Component | Function |
|-----------|----------|
| **Promoter** | RNA polymerase binding site |
| **Operator** | Repressor binding site |
| **Structural genes** | Genes being regulated (often related function) |
| **Regulator gene** | Encodes repressor protein |

### The lac Operon (Inducible) 🥛

Controls lactose metabolism in E. coli:

**Without Lactose (OFF)**:
```
    Regulator  Promoter  Operator    lacZ   lacY   lacA
    ───────────────────────────────────────────────────
        ↓           ↑       🚫
    Repressor ──────┴──► BLOCKS
    (active)            transcription
```

**With Lactose (ON)**:
```
    Regulator  Promoter  Operator    lacZ   lacY   lacA
    ───────────────────────────────────────────────────
        ↓           ↑       ✓
    Repressor + Lactose → Inactive
    (allolactose)    
                   RNA Pol → Transcription proceeds!
```

### Negative vs Positive Regulation

| Type | Regulatory Protein | Effect |
|------|-------------------|--------|
| **Negative** | Repressor | Blocks transcription |
| **Positive** | Activator | Enhances transcription |

### The trp Operon (Repressible) 🧪

Controls tryptophan synthesis:

| Tryptophan Level | Repressor State | Transcription |
|------------------|-----------------|---------------|
| Low | Inactive (no trp bound) | ON |
| High | Active (trp = corepressor) | OFF |

**Key difference from lac**:
- lac operon: **inducer** (lactose) turns it ON
- trp operon: **corepressor** (trp) turns it OFF

---

## 🧫 6.9 Eukaryotic Gene Regulation

### Epigenetic Regulation 🔐

**DNA Methylation**:
- Adding -CH₃ to cytosine
- Usually silences genes
- Heritable but reversible

**Histone Modification**:

| Modification | Effect | Result |
|--------------|--------|--------|
| **Acetylation** | Loosens chromatin | Gene ON |
| **Deacetylation** | Tightens chromatin | Gene OFF |
| **Methylation** | Variable | Context-dependent |

```
    CHROMATIN STATES
    
    Heterochromatin (tight)     Euchromatin (loose)
         Gene OFF                  Gene ON
           ↓                         ↓
    ╭──────────────╮           ~~~~~~~~~~~~
    │ ⚫⚫⚫⚫⚫⚫⚫ │           ○   ○   ○   ○
    ╰──────────────╯           ~~~~~~~~~~~~
    Condensed, inactive        Open, accessible
```

### Transcription Factors 🎛️

| Type | Function | Example |
|------|----------|---------|
| **General TFs** | Required for all genes | TFIID, TFIIB |
| **Specific TFs** | Activate specific genes | Homeodomain proteins |
| **Activators** | Increase transcription | cAMP response element |
| **Repressors** | Decrease transcription | REST (neural genes) |

### Enhancers and Silencers 🎚️

| Element | Location | Effect |
|---------|----------|--------|
| **Enhancer** | Far from promoter | Increases transcription |
| **Silencer** | Far from promoter | Decreases transcription |

Both work through **DNA looping** to bring regulatory proteins close to promoter

### RNA Interference (RNAi) 🔇

Post-transcriptional silencing mechanism:

| RNA Type | Size | Function |
|----------|------|----------|
| **miRNA** | ~22 nt | Cellular regulation |
| **siRNA** | ~21 nt | Defense against viruses |

Mechanism:
$$\text{dsRNA} \rightarrow \text{Dicer} \rightarrow \text{siRNA/miRNA} \rightarrow \text{RISC} \rightarrow \text{mRNA degradation}$$

---

## 🔬 6.10 Biotechnology

### Recombinant DNA Technology 🧬

**Restriction Enzymes (Endonucleases)**:
- Cut DNA at specific palindromic sequences
- Create "sticky ends" or "blunt ends"

| Enzyme | Recognition Sequence | Cut |
|--------|---------------------|-----|
| EcoRI | 5'-GAATTC-3' | G↓AATTC |
| HindIII | 5'-AAGCTT-3' | A↓AGCTT |
| BamHI | 5'-GGATCC-3' | G↓GATCC |

### Gel Electrophoresis 📊

Separates DNA fragments by size:

```
    ⊖ Negative electrode (DNA loaded here)
    ═══════════════════════════
    ┌─────────────────────────┐
    │  ●                      │  ← Large fragments (slow)
    │                         │
    │     ●                   │  ← Medium fragments
    │                         │
    │         ●               │  ← Small fragments (fast)
    └─────────────────────────┘
    ═══════════════════════════
    ⊕ Positive electrode
    
    DNA is negative → moves toward positive
    Smaller = faster through gel matrix
```

### PCR (Polymerase Chain Reaction) 🔥

Amplifies specific DNA sequences:

| Step | Temperature | Process |
|------|-------------|---------|
| **Denaturation** | 95°C | Separates DNA strands |
| **Annealing** | 55-65°C | Primers bind |
| **Extension** | 72°C | Taq polymerase synthesizes |

$$\text{Copies after } n \text{ cycles} = 2^n$$

After 30 cycles: 2³⁰ = ~1 billion copies!

### DNA Cloning 🧫

```
╔════════════════════════════════════════════════════════════════╗
║                    DNA CLONING STEPS                            ║
╠════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  1. Cut target gene and plasmid with same restriction enzyme  ║
║  2. Mix together → sticky ends hybridize                       ║
║  3. Ligate with DNA ligase → recombinant plasmid              ║
║  4. Transform into bacteria (heat shock or electroporation)    ║
║  5. Select transformed bacteria (antibiotic resistance)        ║
║  6. Grow bacteria → many copies of gene                        ║
║                                                                 ║
╚════════════════════════════════════════════════════════════════╝
```

### CRISPR-Cas9 ✂️

Revolutionary gene editing tool:

| Component | Function |
|-----------|----------|
| **Guide RNA (gRNA)** | Directs Cas9 to target sequence |
| **Cas9 nuclease** | Cuts both DNA strands |
| **Repair mechanisms** | NHEJ (errors) or HDR (precise editing) |

Applications:
- Gene knockout
- Gene insertion
- Gene correction
- Epigenetic modification

---

## 📊 6.11 Analyzing Genetic Data

### DNA Fingerprinting 🔍

Uses **STRs** (Short Tandem Repeats):
- Variable number of repeats at each locus
- Unique pattern for each individual
- Used in forensics and paternity testing

### Genomics and Bioinformatics 💻

| Technology | Purpose |
|------------|---------|
| **DNA sequencing** | Determine nucleotide order |
| **Microarrays** | Gene expression profiling |
| **RNA-seq** | Quantify RNA levels |
| **BLAST** | Compare sequences across species |

---

## 📝 Unit 6 Summary Table

| Topic | Key Concept | AP Exam Focus |
|-------|-------------|---------------|
| DNA Structure | Antiparallel, complementary | Base pairing rules |
| Replication | Semiconservative, 5'→3' | Enzyme functions |
| Transcription | Template strand, promoter | Prokaryotic process |
| RNA Processing | Splicing, caps, poly-A | Eukaryotic modifications |
| Translation | Codons, ribosomes, tRNA | Start/stop codons |
| Mutations | Frameshift vs point | Phenotypic effects |
| Operons | lac (inducible), trp (repressible) | Regulation logic |
| Eukaryotic regulation | Epigenetics, enhancers | Multi-level control |
| Biotechnology | PCR, cloning, CRISPR | Techniques and applications |

---

## 🎯 AP Exam Tips

### Common FRQ Topics 📝

1. **Trace information flow** from DNA → RNA → Protein
2. **Compare prokaryotic vs eukaryotic** gene expression
3. **Explain operon regulation** with diagrams
4. **Describe biotechnology applications**
5. **Analyze mutation effects** on protein function

### Key Comparisons to Know

| Feature | Prokaryotes | Eukaryotes |
|---------|-------------|------------|
| Transcription location | Cytoplasm | Nucleus |
| Translation timing | Coupled with transcription | After mRNA processing |
| mRNA processing | None | Cap, poly-A, splicing |
| Regulation | Operons | Multiple levels |
| Ribosomes | 70S | 80S |

### Critical Calculations 🔢

**Complementary Strand**:
- Template: 3'-TACGCATGG-5'
- mRNA: 5'-AUGCGUACC-3'

**Amino Acids from mRNA**:
- mRNA: AUG-CGU-ACC
- AA: Met-Arg-Thr

**PCR Amplification**:
$$\text{Final copies} = \text{Initial copies} \times 2^n$$

---

## 🔗 Connection to Other Units

| Unit | Connection |
|------|------------|
| **Unit 2** | Ribosomes, nucleus, ER for protein synthesis |
| **Unit 4** | Cell signaling affects gene expression |
| **Unit 5** | Genetic basis of inheritance |
| **Unit 7** | Mutations drive evolution |
| **Unit 8** | Gene expression affects organism ecology |

---

*Happy studying! Remember: The Central Dogma is the backbone of molecular biology - master it and everything else falls into place!* 🧬✨

:::GUIDE:::
