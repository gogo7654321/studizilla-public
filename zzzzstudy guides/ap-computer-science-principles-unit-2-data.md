# AP Computer Science Principles Unit 2 Study Guide

:::GUIDE:::
unit::=Unit 2
title::=🖥️ Unit 2: Data Complete Guide
desc::=Master binary, data representation, compression, and information extraction from data
diff::=Medium
time::=50 minutes
tags::=computer science principles, data, binary, compression, information
content::=

# 🖥️ Unit 2: Data

## � Data and Computing History Timeline

:::TIMELINE:::
id::=data-computing-timeline
title::=The History of Data in Computing
events::=[
  {"year": "1890", "event": "Hollerith Tabulating Machine", "detail": "Punch cards for US Census; first data processing machine"},
  {"year": "1945", "event": "ENIAC Completed", "detail": "First general-purpose computer; data processing revolution"},
  {"year": "1956", "event": "First Hard Disk Drive", "detail": "IBM 305 RAMAC; 5MB storage; data persistence"},
  {"year": "1970", "event": "Relational Database Model", "detail": "Codd's paper; SQL coming; structured data"},
  {"year": "1973", "event": "Ethernet Invented", "detail": "Xerox PARC; data transmission between computers"},
  {"year": "1985", "event": "CD-ROM Standard", "detail": "680MB optical storage; multimedia data"},
  {"year": "1991", "event": "MP3 Standard Published", "detail": "Lossy audio compression; data compression mainstream"},
  {"year": "1992", "event": "JPEG Standard", "detail": "Image compression; photos on computers feasible"},
  {"year": "2000", "event": "USB Flash Drives", "detail": "Portable data storage; sneakernet renewed"},
  {"year": "2005", "event": "'Big Data' Term Coined", "detail": "Data sets too large for traditional processing"},
  {"year": "2006", "event": "Amazon Web Services", "detail": "Cloud storage; data anywhere; scalable"},
  {"year": "2007", "event": "iPhone Data Revolution", "detail": "Mobile data generation; location data; sensors"},
  {"year": "2010", "event": "Instagram/Photo Data Explosion", "detail": "Billions of images; metadata; visual data"},
  {"year": "2013", "event": "Snowden Revelations", "detail": "Mass data collection exposed; privacy concerns"},
  {"year": "2018", "event": "GDPR Implemented", "detail": "EU data protection; privacy rights; data governance"},
  {"year": "2020", "event": "5G Networks Launch", "detail": "Faster data transmission; IoT explosion"}
]
:::/TIMELINE:::

## 💻 Interactive Data Code Examples

:::CODE:::
id::=binary-conversion-demo
title::=Binary to Decimal Conversion
language::=python
runnable::=true
code::=# Binary to Decimal Conversion Demo
# Demonstrates how computers interpret binary numbers

def binary_to_decimal(binary_string):
    """Convert a binary string to decimal number"""
    decimal = 0
    for i, bit in enumerate(reversed(binary_string)):
        if bit == '1':
            decimal += 2 ** i
    return decimal

def decimal_to_binary(decimal_num):
    """Convert a decimal number to binary string"""
    if decimal_num == 0:
        return "0"
    binary = ""
    while decimal_num > 0:
        binary = str(decimal_num % 2) + binary
        decimal_num //= 2
    return binary

# Try converting some numbers
print("Binary to Decimal:")
print(f"  1010 = {binary_to_decimal('1010')}")  # Should be 10
print(f"  1111 = {binary_to_decimal('1111')}")  # Should be 15
print(f"  11001 = {binary_to_decimal('11001')}")  # Should be 25

print("\nDecimal to Binary:")
print(f"  10 = {decimal_to_binary(10)}")  # Should be 1010
print(f"  255 = {decimal_to_binary(255)}")  # Should be 11111111
print(f"  42 = {decimal_to_binary(42)}")  # Should be 101010

# Show place values
print("\nPlace values for 11001:")
print("  16  8  4  2  1")
print("   1  1  0  0  1")
print("  16 + 8 + 0 + 0 + 1 = 25")
expected_output::=Binary to Decimal:
  1010 = 10
  1111 = 15
  11001 = 25

Decimal to Binary:
  10 = 1010
  255 = 11111111
  42 = 101010

Place values for 11001:
  16  8  4  2  1
   1  1  0  0  1
  16 + 8 + 0 + 0 + 1 = 25
:::/CODE:::

:::CODE:::
id::=data-compression-demo
title::=Simple Run-Length Encoding Compression
language::=python
runnable::=true
code::=# Run-Length Encoding (RLE) Compression Demo
# A simple lossless compression algorithm

def compress_rle(data):
    """Compress using run-length encoding"""
    if not data:
        return ""
    
    compressed = ""
    count = 1
    current = data[0]
    
    for char in data[1:]:
        if char == current:
            count += 1
        else:
            compressed += f"{current}{count}"
            current = char
            count = 1
    compressed += f"{current}{count}"
    
    return compressed

def decompress_rle(compressed):
    """Decompress run-length encoded data"""
    decompressed = ""
    i = 0
    while i < len(compressed):
        char = compressed[i]
        count = int(compressed[i + 1])
        decompressed += char * count
        i += 2
    return decompressed

# Example: Image row with black (B) and white (W) pixels
original = "WWWWWBBBWWWWWWWWWBBB"
print(f"Original: {original}")
print(f"Original length: {len(original)} characters")

compressed = compress_rle(original)
print(f"\nCompressed: {compressed}")
print(f"Compressed length: {len(compressed)} characters")

ratio = (1 - len(compressed)/len(original)) * 100
print(f"\nSpace saved: {ratio:.1f}%")

# Verify decompression
decompressed = decompress_rle(compressed)
print(f"\nDecompressed: {decompressed}")
print(f"Matches original: {original == decompressed}")
expected_output::=Original: WWWWWBBBWWWWWWWWWBBB
Original length: 20 characters

Compressed: W5B3W9B3
Compressed length: 8 characters

Space saved: 60.0%

Decompressed: WWWWWBBBWWWWWWWWWBBB
Matches original: True
:::/CODE:::

## �📋 Unit Overview

Everything in computers is data! This unit covers binary numbers, data representation, storage, compression, and extracting information. Data is fundamental! 📊

### Essential Questions

| Question | Focus |
|----------|-------|
| What is data? | Information representation |
| How do computers store data? | Binary system |
| What is compression? | Reducing data size |
| How to extract information? | Processing data |
| What are metadata? | Data about data |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Binary** | Base-2 number system |
| **Bit** | 0 or 1 |
| **Byte** | 8 bits |
| **Compression** | Reduce data size |
| **Metadata** | Data about data |

---

## 🔢 Binary Number System

### Decimal vs. Binary

| System | Base | Digits |
|--------|------|--------|
| **Decimal** | 10 | 0-9 |
| **Binary** | 2 | 0, 1 |

### Place Values (Binary)

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|-------|---|---|---|---|
| 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |

### Converting Binary to Decimal

| Binary | Calculation | Decimal |
|--------|-------------|---------|
| 1010 | 8 + 0 + 2 + 0 | 10 |
| 1111 | 8 + 4 + 2 + 1 | 15 |
| 10000 | 16 | 16 |

### Converting Decimal to Binary

| Decimal | Process | Binary |
|---------|---------|--------|
| 13 | 8 + 4 + 1 | 1101 |
| 25 | 16 + 8 + 1 | 11001 |
| 7 | 4 + 2 + 1 | 111 |

---

## 💾 Data Units

### Bit and Byte

| Unit | Definition |
|------|------------|
| **Bit** | Single binary digit (0 or 1) |
| **Byte** | 8 bits |

### Data Sizes

| Unit | Size |
|------|------|
| **Byte (B)** | 8 bits |
| **Kilobyte (KB)** | 1,024 bytes |
| **Megabyte (MB)** | 1,024 KB |
| **Gigabyte (GB)** | 1,024 MB |
| **Terabyte (TB)** | 1,024 GB |

### Number of Values

| Bits | Possible Values |
|------|-----------------|
| 1 | 2 (2¹) |
| 2 | 4 (2²) |
| 3 | 8 (2³) |
| 8 | 256 (2⁸) |
| n | 2ⁿ |

---

## 🎨 Representing Data

### Text

| System | Description |
|--------|-------------|
| **ASCII** | 7-bit character encoding |
| **Unicode** | International characters |

### Images

| Type | Description |
|------|-------------|
| **Raster** | Grid of pixels |
| **Vector** | Mathematical descriptions |
| **Pixel** | Picture element |
| **RGB** | Red, Green, Blue values |

### Colors

| Color | Red | Green | Blue |
|-------|-----|-------|------|
| **Black** | 0 | 0 | 0 |
| **White** | 255 | 255 | 255 |
| **Red** | 255 | 0 | 0 |
| **Green** | 0 | 255 | 0 |
| **Blue** | 0 | 0 | 255 |

### Sound

| Property | Description |
|----------|-------------|
| **Analog** | Continuous wave |
| **Digital** | Sampled points |
| **Sample rate** | Samples per second |
| **Bit depth** | Bits per sample |

---

## 📦 Data Compression

### Why Compress?

| Reason | Benefit |
|--------|---------|
| **Save space** | Less storage needed |
| **Faster transfer** | Reduced bandwidth |
| **Cost** | Less expensive |

### Types of Compression

| Type | Description | Example |
|------|-------------|---------|
| **Lossless** | Perfect reconstruction | ZIP, PNG |
| **Lossy** | Some data lost | JPEG, MP3 |

### Lossless Compression

| Method | Description |
|--------|-------------|
| **Run-length encoding** | Repeat sequences |
| **Dictionary** | Replace with codes |
| **Huffman coding** | Variable-length codes |

### Run-Length Encoding Example

| Original | Compressed |
|----------|------------|
| AAAAAABBBBCC | 6A4B2C |
| 0000111100 | 4(0)4(1)2(0) |

### Lossy Compression

| Trade-off | Quality for size |
|-----------|------------------|

| Format | Type |
|--------|------|
| **JPEG** | Image (lossy) |
| **MP3** | Audio (lossy) |
| **PNG** | Image (lossless) |
| **FLAC** | Audio (lossless) |

---

## 📊 Extracting Information

### From Data to Information

| Process | Description |
|---------|-------------|
| **Collect** | Gather data |
| **Process** | Analyze data |
| **Extract** | Find patterns |
| **Interpret** | Understand meaning |

### Data Analysis

| Method | Purpose |
|--------|---------|
| **Filtering** | Select relevant data |
| **Sorting** | Organize data |
| **Searching** | Find specific data |
| **Aggregating** | Summarize data |

### Patterns and Trends

| Pattern | Description |
|---------|-------------|
| **Correlation** | Relationship between variables |
| **Trend** | Direction over time |
| **Outlier** | Unusual data point |

---

## 🏷️ Metadata

### Definition

| Metadata | Data about data |
|----------|----------------|

### Examples

| File Type | Metadata |
|-----------|----------|
| **Photo** | Date, location, camera |
| **Document** | Author, date, title |
| **Music** | Artist, album, genre |
| **Video** | Duration, resolution, codec |

### Uses

| Use | Description |
|-----|-------------|
| **Organization** | Sort and find files |
| **Search** | Locate information |
| **Context** | Understand data origin |
| **Privacy** | Track information |

---

## 🔐 Data Storage

### File Systems

| Component | Description |
|-----------|-------------|
| **File** | Named collection of data |
| **Directory** | Folder for organization |
| **Path** | Location of file |

### Cloud Storage

| Advantage | Description |
|-----------|-------------|
| **Accessibility** | Access anywhere |
| **Backup** | Redundancy |
| **Collaboration** | Share easily |
| **Scalability** | Expand as needed |

---

## 📈 Data Visualization

### Purpose

| Goal | Benefit |
|------|---------|
| **Understand** | See patterns |
| **Communicate** | Share insights |
| **Explore** | Discover relationships |

### Types

| Type | Best For |
|------|----------|
| **Bar chart** | Compare categories |
| **Line graph** | Show trends over time |
| **Pie chart** | Show proportions |
| **Scatter plot** | Show relationships |

---

## 🧮 Hexadecimal

### Base 16

| System | Digits |
|--------|--------|
| **Hexadecimal** | 0-9, A-F |

### Hex Digits

| Hex | Decimal | Binary |
|-----|---------|--------|
| 0 | 0 | 0000 |
| 1 | 1 | 0001 |
| ... | ... | ... |
| 9 | 9 | 1001 |
| A | 10 | 1010 |
| B | 11 | 1011 |
| C | 12 | 1100 |
| D | 13 | 1101 |
| E | 14 | 1110 |
| F | 15 | 1111 |

### Uses

| Use | Example |
|-----|---------|
| **Colors** | #FF0000 (red) |
| **Memory addresses** | 0x1A2B |
| **MAC addresses** | 00:1B:44:11:3A:B7 |

---

## 💻 Overflow and Rounding

### Overflow

| Definition | Value too large for bits |
|------------|--------------------------|

| Example | 8 bits can't store 256 |
|---------|------------------------|

### Rounding Errors

| Cause | Finite precision |
|-------|-----------------|

| Example | 0.1 + 0.2 ≠ 0.3 (exactly) |
|---------|---------------------------|

---

## 📝 Key Terms Glossary

| Term | Definition |
|------|------------|
| **Binary** | Base-2 number system |
| **Bit** | Single binary digit |
| **Byte** | 8 bits |
| **ASCII** | Character encoding |
| **Pixel** | Picture element |
| **Compression** | Reducing data size |
| **Lossless** | No data lost |
| **Lossy** | Some data lost |
| **Metadata** | Data about data |
| **Overflow** | Value exceeds capacity |
| **Hexadecimal** | Base-16 number system |

---

## 🎯 AP Exam Strategies

### Common Question Types

| Type | Focus |
|------|-------|
| **Binary conversions** | Binary ↔ decimal |
| **Data representation** | How data stored |
| **Compression** | Lossless vs. lossy |
| **Metadata** | Purpose and examples |

### Key Things to Remember

| Topic | Remember |
|-------|----------|
| **n bits** | 2ⁿ values |
| **Byte** | 8 bits |
| **Lossless** | Perfect reconstruction |
| **Lossy** | Quality trade-off |

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Confuse bit/byte | 8 bits = 1 byte |
| Wrong compression type | Know lossless vs. lossy |
| Forget 2ⁿ | Calculate possible values |

### Exam Tips

| Tip | Explanation |
|-----|-------------|
| **Practice conversions** | Binary ↔ decimal |
| **Know examples** | File formats |
| **Understand trade-offs** | Compression types |

---

## 🧩 Practice Problems

### Problem 1: Binary to Decimal

| Binary | Decimal |
|--------|---------|
| 1011 | 8 + 2 + 1 = **11** |
| 10101 | 16 + 4 + 1 = **21** |

### Problem 2: Possible Values

| Bits | Values |
|------|--------|
| 4 bits | 2⁴ = **16** |
| 6 bits | 2⁶ = **64** |

### Problem 3: Compression

| Scenario | Type |
|----------|------|
| Photo editing | **Lossless** (PNG) |
| Streaming music | **Lossy** (MP3) |

---

## 🌐 Real-World Applications

### Image Formats

| Format | Type | Use |
|--------|------|-----|
| **JPEG** | Lossy | Photos |
| **PNG** | Lossless | Graphics |
| **GIF** | Lossless | Animations |

### Audio Formats

| Format | Type | Use |
|--------|------|-----|
| **MP3** | Lossy | Music |
| **FLAC** | Lossless | Audiophile |
| **WAV** | Uncompressed | Professional |

---

## 📊 Data in Society

### Big Data

| Characteristic | Description |
|----------------|-------------|
| **Volume** | Large amounts |
| **Velocity** | Fast generation |
| **Variety** | Different types |

### Data Mining

| Purpose | Extract patterns |
|---------|-----------------|

### Privacy Concerns

| Issue | Description |
|-------|-------------|
| **Personal data** | Information collected |
| **Tracking** | Behavior monitoring |
| **Security** | Data breaches |

---

**Good luck on your AP Computer Science Principles exam! 🍀🖥️📊**

Remember: Binary uses base-2 with only 0s and 1s. n bits can represent 2ⁿ different values. Lossless compression allows perfect reconstruction, lossy trades quality for smaller size. Metadata is data about data!
