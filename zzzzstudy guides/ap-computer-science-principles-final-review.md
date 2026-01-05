:::GUIDE:::
unit::=final-review
title::=AP Computer Science Principles Final Exam Review
desc::=Comprehensive review of all 5 Big Ideas covering creative development, data, algorithms, systems, networks, and computing impact
diff::=3
time::=150 min
tags::=AP CSP, computer science, programming, data, algorithms, networks, computing impact
content::=

# AP Computer Science Principles Final Exam Review

This comprehensive review covers all five Big Ideas of AP Computer Science Principles, preparing you for both the multiple-choice exam and the Create Performance Task.

---

## Computational Thinking Practices

Before diving into content, understand the six Computational Thinking Practices tested on the AP exam:

### Practice 1: Computational Solution Design
- Design and evaluate computational solutions for a purpose
- Identify the purpose of a computing innovation
- Describe the behavior of a given algorithm

### Practice 2: Algorithms and Program Development
- Determine the result of code segments
- Develop programs that incorporate multiple program constructs
- Write code that uses procedural abstraction

### Practice 3: Abstraction in Program Development
- Identify shared features among generalized solutions
- Describe the purpose of computing innovations
- Implement and apply abstractions in programs

### Practice 4: Code Analysis
- Determine the correctness of algorithms and programs
- Identify and correct errors in algorithms and programs
- Explain how a code segment or program functions

### Practice 5: Computing Innovations
- Explain how computing systems work
- Describe the role of hardware and software
- Analyze beneficial and harmful effects of computing

### Practice 6: Responsible Computing
- Describe the impact of collaboration
- Describe the impact of technologies on society
- Explain the trade-offs of computing innovations

---

# Big Idea 1: Creative Development

## 1.1 Collaboration in Computing

### Why Collaboration Matters
- **Diverse perspectives** lead to better solutions
- **Pair programming**: One driver (writes code), one navigator (reviews and guides)
- **Think-pair-share**: Individual thinking, then partner discussion, then group sharing
- **Code reviews**: Systematic examination of source code by peers

### Collaboration Tools
- Version control systems (Git, GitHub)
- Shared documents and project management tools
- Communication platforms for distributed teams
- Integrated development environments (IDEs) with collaboration features

### Benefits of Collaboration
- Reduces programmer bias
- Interprets problems from multiple perspectives
- Catches errors through multiple reviews
- Combines diverse skills and knowledge
- Produces more innovative solutions

## 1.2 Program Function and Purpose

### Defining Program Purpose
Every program exists to solve a problem or fulfill a need:
- **Problem identification**: What issue does this program address?
- **Target users**: Who will use this program?
- **Functionality**: What does the program actually do?
- **Output**: What results does the program produce?

### Program Inputs and Outputs
- **Inputs**: Data provided by users, sensors, files, or other programs
- **Processing**: Transformation of inputs using algorithms
- **Outputs**: Results displayed, stored, or sent to other systems

### Events and Event-Driven Programming
- Programs can respond to events (mouse clicks, key presses, timers)
- Event handlers are procedures triggered by specific events
- User interfaces typically use event-driven programming

## 1.3 Program Design and Development

### The Development Process
1. **Investigate and reflect**: Understand the problem
2. **Design**: Plan the solution using flowcharts, pseudocode
3. **Prototype**: Build initial versions
4. **Test**: Verify functionality
5. **Refine**: Improve based on testing and feedback

### Incremental and Iterative Development
- **Incremental**: Add features one at a time
- **Iterative**: Repeatedly refine and improve
- Start with a minimum viable product (MVP)
- Get feedback early and often

### Program Documentation
- **Comments**: Explain code functionality
- **Specifications**: Define what the program should do
- **User documentation**: Instructions for end users
- **API documentation**: How other programs can interact

## 1.4 Identifying and Correcting Errors

### Types of Errors

#### Syntax Errors
- Violations of programming language rules
- Detected by the compiler/interpreter before execution
- Examples: Missing parentheses, misspelled keywords

#### Logic Errors
- Program runs but produces incorrect results
- Most difficult to detect and fix
- Example: Using wrong operator (+ instead of -)

#### Runtime Errors
- Occur during program execution
- Examples: Division by zero, accessing invalid memory
- May cause program to crash

#### Overflow Errors
- Result exceeds maximum storable value
- Common with fixed-size integer types
- Example: Adding 1 to maximum integer value

### Debugging Strategies
1. **Print statements**: Display variable values at key points
2. **Debugger tools**: Step through code line by line
3. **Rubber duck debugging**: Explain code to find errors
4. **Binary search debugging**: Narrow down error location
5. **Test cases**: Systematic input testing

### Testing Approaches
- **Unit testing**: Test individual components
- **Integration testing**: Test component interactions
- **Edge cases**: Test boundary conditions
- **User testing**: Real users test the program

---

# Big Idea 2: Data

## 2.1 Binary Numbers

### Understanding Binary
- Computers use binary (base-2) because of electrical on/off states
- Each binary digit is called a **bit**
- 8 bits = 1 **byte**

### Binary to Decimal Conversion
Each position represents a power of 2:

| Position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|----------|---|---|---|---|---|---|---|---|
| Value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

**Example**: 10110101₂
- 1×128 + 0×64 + 1×32 + 1×16 + 0×8 + 1×4 + 0×2 + 1×1
- = 128 + 32 + 16 + 4 + 1 = **181₁₀**

### Decimal to Binary Conversion
Repeatedly divide by 2, record remainders:
- 45 ÷ 2 = 22 remainder 1
- 22 ÷ 2 = 11 remainder 0
- 11 ÷ 2 = 5 remainder 1
- 5 ÷ 2 = 2 remainder 1
- 2 ÷ 2 = 1 remainder 0
- 1 ÷ 2 = 0 remainder 1
- Read bottom to top: **101101₂**

### Binary Arithmetic
- **Addition**: 0+0=0, 0+1=1, 1+0=1, 1+1=10 (carry the 1)
- **Overflow**: When result exceeds available bits

## 2.2 Data Compression

### Why Compress Data?
- Reduce storage space requirements
- Decrease transmission time
- Lower bandwidth costs

### Lossless Compression
- **No data is lost** - original can be perfectly reconstructed
- Used for: Text files, programs, spreadsheets
- Techniques: Run-length encoding, Huffman coding
- Examples: ZIP, PNG, GIF

### Lossy Compression
- **Some data is permanently removed**
- Smaller file sizes than lossless
- Used for: Images, audio, video where small losses are acceptable
- Examples: JPEG, MP3, MP4

### Compression Trade-offs
| Factor | Lossless | Lossy |
|--------|----------|-------|
| File size | Larger | Smaller |
| Quality | Perfect | Reduced |
| Use cases | Text, code | Media |

## 2.3 Extracting Information from Data

### Data vs. Information
- **Data**: Raw facts and figures
- **Information**: Data processed to be meaningful
- **Knowledge**: Information applied with understanding

### Data Collection Methods
- Surveys and questionnaires
- Sensors and IoT devices
- Web scraping and APIs
- Transaction records
- Social media interactions

### Data Cleaning and Processing
- Remove duplicates
- Handle missing values
- Standardize formats
- Correct errors
- Validate accuracy

### Data Visualization
Effective visualizations help identify:
- **Patterns**: Recurring trends
- **Trends**: Changes over time
- **Correlations**: Relationships between variables
- **Outliers**: Unusual data points

Common visualization types:
- Bar charts: Compare categories
- Line graphs: Show trends over time
- Scatter plots: Show correlations
- Pie charts: Show proportions
- Heat maps: Show density or intensity

## 2.4 Using Programs with Data

### Metadata
- **Data about data**
- Examples: File creation date, image dimensions, author name
- Used for organization, searching, and rights management

### Data Processing with Programs
Programs can:
- Filter data based on criteria
- Transform data formats
- Aggregate and summarize
- Search and sort
- Generate visualizations

### Big Data Considerations
- Volume: Massive amounts of data
- Velocity: Rapid data generation
- Variety: Different data types and sources
- Veracity: Data quality and accuracy

---

# Big Idea 3: Algorithms and Programming

## 3.1 Variables and Assignments

### Understanding Variables
- Variables store data values
- Names should be descriptive and meaningful
- Values can change during program execution

### Assignment Operations
```
x ← 5          // Assigns value 5 to variable x
name ← "Alice" // Assigns string to variable name
y ← x + 3      // Assigns result of expression to y
```

### Data Types
- **Integer**: Whole numbers (42, -17, 0)
- **Float/Real**: Decimal numbers (3.14, -0.5)
- **String**: Text ("Hello", "CSP")
- **Boolean**: True or False
- **List/Array**: Collection of values

## 3.2 Data Abstraction

### Lists (Arrays)
- Ordered collection of elements
- Elements accessed by index (position)
- Index typically starts at 1 in AP CSP pseudocode

:::CODE:::
id::=list-operations
title::=List Operations in Pseudocode
language::=pseudocode
runnable::=false
code::=
// Creating and using lists
scores ← [85, 92, 78, 95, 88]

// Accessing elements (1-indexed in AP CSP)
firstScore ← scores[1]    // Gets 85
lastScore ← scores[5]     // Gets 88

// Modifying elements
scores[3] ← 80            // Changes 78 to 80

// List operations
APPEND(scores, 91)        // Adds 91 to end
LENGTH(scores)            // Returns 6

// Iterating through a list
FOR EACH score IN scores
    DISPLAY(score)
END FOR
expected_output::=Demonstrates list creation, access, modification, and iteration
:::/CODE:::

### Strings as Sequences
- Strings are sequences of characters
- Can be indexed and sliced
- Common operations: concatenation, length, substring

## 3.3 Mathematical Expressions

### Arithmetic Operators
| Operation | Symbol | Example |
|-----------|--------|---------|
| Addition | + | 5 + 3 = 8 |
| Subtraction | - | 10 - 4 = 6 |
| Multiplication | * | 4 * 7 = 28 |
| Division | / | 15 / 3 = 5 |
| Modulus | MOD | 17 MOD 5 = 2 |

### Order of Operations
1. Parentheses
2. Exponents
3. Multiplication and Division (left to right)
4. Addition and Subtraction (left to right)

### The Modulus Operator
- Returns the remainder after division
- Useful for: Checking even/odd, cycling through values, extracting digits

## 3.4 Strings

### String Operations
```
text ← "Computer Science"
len ← LENGTH(text)           // 16
sub ← SUBSTRING(text, 1, 8)  // "Computer"
combined ← text + " is fun"  // Concatenation
```

### String Manipulation
- Searching for substrings
- Converting case
- Splitting and joining
- Pattern matching

## 3.5 Boolean Expressions

### Comparison Operators
| Operator | Meaning |
|----------|---------|
| = | Equal to |
| ≠ | Not equal to |
| > | Greater than |
| < | Less than |
| ≥ | Greater than or equal |
| ≤ | Less than or equal |

### Logical Operators
- **AND**: Both conditions must be true
- **OR**: At least one condition must be true
- **NOT**: Reverses the boolean value

### Truth Tables
**AND Truth Table**
| A | B | A AND B |
|---|---|---------|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

**OR Truth Table**
| A | B | A OR B |
|---|---|--------|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

**NOT Truth Table**
| A | NOT A |
|---|-------|
| T | F |
| F | T |

## 3.6 Conditionals (Selection)

### IF Statements
```
IF (condition)
{
    // Execute if condition is true
}
```

### IF-ELSE Statements
```
IF (condition)
{
    // Execute if true
}
ELSE
{
    // Execute if false
}
```

### Nested Conditionals
```
IF (grade ≥ 90)
{
    DISPLAY("A")
}
ELSE
{
    IF (grade ≥ 80)
    {
        DISPLAY("B")
    }
    ELSE
    {
        DISPLAY("C or below")
    }
}
```

## 3.7 Nested Conditionals

### Complex Decision Making
Multiple conditions can be combined:
```
IF (age ≥ 16 AND hasPermit)
{
    DISPLAY("Can drive with adult")
}
ELSE
{
    IF (age ≥ 18 AND hasLicense)
    {
        DISPLAY("Can drive alone")
    }
    ELSE
    {
        DISPLAY("Cannot drive")
    }
}
```

## 3.8 Iteration (Loops)

### REPEAT n TIMES
```
REPEAT 5 TIMES
{
    DISPLAY("Hello!")
}
```

### REPEAT UNTIL
```
count ← 0
REPEAT UNTIL (count = 10)
{
    DISPLAY(count)
    count ← count + 1
}
```

### FOR EACH Loop
```
colors ← ["red", "green", "blue"]
FOR EACH color IN colors
{
    DISPLAY(color)
}
```

## 3.9 Developing Algorithms

### Algorithm Characteristics
- **Sequencing**: Steps executed in order
- **Selection**: Decisions based on conditions
- **Iteration**: Repeating steps

### Algorithm Design Strategies
1. Identify inputs and outputs
2. Break problem into smaller steps
3. Use pseudocode or flowcharts
4. Test with sample inputs
5. Refine and optimize

### Common Algorithm Patterns
- **Accumulator**: Sum or count values
- **Search**: Find specific element
- **Filter**: Select elements meeting criteria
- **Transform**: Modify each element

## 3.10 Lists and Algorithms

### Traversing Lists
```
numbers ← [5, 2, 8, 1, 9]
FOR EACH num IN numbers
{
    DISPLAY(num)
}
```

### Finding Maximum Value
```
maximum ← numbers[1]
FOR EACH num IN numbers
{
    IF (num > maximum)
    {
        maximum ← num
    }
}
```

### Summing List Elements
```
total ← 0
FOR EACH num IN numbers
{
    total ← total + num
}
```

## 3.11 Binary Search

### Requirements
- List must be **sorted**
- More efficient than linear search for large lists

### How It Works
1. Start with entire list
2. Check middle element
3. If target found, return position
4. If target smaller, search left half
5. If target larger, search right half
6. Repeat until found or list exhausted

### Efficiency
- Linear search: O(n) - checks every element
- Binary search: O(log n) - halves search space each step

:::CODE:::
id::=binary-search-algorithm
title::=Binary Search Algorithm
language::=pseudocode
runnable::=false
code::=
PROCEDURE binarySearch(sortedList, target)
{
    low ← 1
    high ← LENGTH(sortedList)
    
    REPEAT UNTIL (low > high)
    {
        mid ← (low + high) / 2
        
        IF (sortedList[mid] = target)
        {
            RETURN mid
        }
        ELSE
        {
            IF (sortedList[mid] > target)
            {
                high ← mid - 1
            }
            ELSE
            {
                low ← mid + 1
            }
        }
    }
    
    RETURN -1   // Target not found
}

// Example usage:
numbers ← [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91]
position ← binarySearch(numbers, 23)
DISPLAY(position)   // Displays 6
expected_output::=Returns the index of the target value in a sorted list, or -1 if not found
:::/CODE:::

## 3.12 Calling Procedures

### Procedure Basics
- Procedures are reusable blocks of code
- Can accept parameters (inputs)
- May return values

### Procedure Calls
```
result ← calculateArea(5, 10)
displayMessage("Hello")
```

## 3.13 Developing Procedures

### Procedural Abstraction
- Hide implementation details
- Focus on what, not how
- Reuse code efficiently
- Improve readability

### Creating Procedures
```
PROCEDURE greet(name)
{
    DISPLAY("Hello, " + name + "!")
}

greet("Alice")   // Displays "Hello, Alice!"
```

### Procedures with Return Values
```
PROCEDURE calculateSum(a, b)
{
    sum ← a + b
    RETURN sum
}

result ← calculateSum(5, 3)   // result = 8
```

## 3.14 Libraries

### What Are Libraries?
- Collections of pre-written procedures
- Save development time
- Provide tested, reliable code
- Examples: Math libraries, graphics libraries

### Using Libraries
- Import or include the library
- Call library procedures as needed
- Understand the API (Application Programming Interface)

### Benefits of Libraries
- Don't reinvent the wheel
- Leverage expert code
- Focus on problem-specific logic
- Maintain consistency

## 3.15 Random Values

### Generating Random Numbers
```
// Random integer between a and b (inclusive)
randomNum ← RANDOM(1, 100)

// Simulating dice roll
dieRoll ← RANDOM(1, 6)

// Simulating coin flip
IF (RANDOM(1, 2) = 1)
{
    DISPLAY("Heads")
}
ELSE
{
    DISPLAY("Tails")
}
```

### Applications of Randomness
- Games and simulations
- Cryptography
- Statistical sampling
- AI and machine learning

## 3.16 Simulations

### What Are Simulations?
- Models of real-world processes
- Allow experimentation without real-world consequences
- Can reveal patterns and test hypotheses

### Simulation Benefits
- Test dangerous scenarios safely
- Reduce costs
- Speed up time (simulate years in seconds)
- Repeat experiments easily

### Simulation Limitations
- Simplified models may miss details
- Results depend on model accuracy
- Random elements may require many runs
- Cannot perfectly replicate reality

## 3.17 Algorithm Efficiency

### Measuring Efficiency
- **Time complexity**: How long does it run?
- **Space complexity**: How much memory does it use?

### Reasonable vs. Unreasonable Time
- **Reasonable**: Polynomial time (n, n², n³)
- **Unreasonable**: Exponential time (2ⁿ, n!)

### Comparing Algorithms
| Algorithm | Time Complexity | Example |
|-----------|-----------------|---------|
| Constant | O(1) | Array access |
| Logarithmic | O(log n) | Binary search |
| Linear | O(n) | Linear search |
| Linearithmic | O(n log n) | Merge sort |
| Quadratic | O(n²) | Bubble sort |
| Exponential | O(2ⁿ) | Some recursive algorithms |

### Heuristics
- Approximate solutions when exact solutions are impractical
- Trade optimality for efficiency
- Used for NP-hard problems

## 3.18 Undecidable Problems

### What Are Undecidable Problems?
- Problems with no algorithm that can solve all instances
- Cannot determine answer in finite time for all inputs

### The Halting Problem
- Given a program and input, will the program eventually halt?
- Proven to be undecidable by Alan Turing
- No algorithm can solve this for all programs

### Implications
- Some problems have fundamental limits
- Not all questions can be answered computationally
- Theoretical basis for understanding computation limits

---

# Big Idea 4: Computer Systems and Networks

## 4.1 The Internet

### What Is the Internet?
- Global network of interconnected networks
- Uses standardized protocols
- Decentralized design
- Fault-tolerant architecture

### Key Concepts
- **Packet switching**: Data divided into packets
- **Routing**: Finding paths through the network
- **Redundancy**: Multiple paths for reliability

### Internet History
- ARPANET (1969): Original network
- TCP/IP adoption (1983)
- World Wide Web (1991)
- Continuous growth and evolution

## 4.2 Fault Tolerance

### Designing for Failure
- Networks must handle failures gracefully
- Redundant connections provide backup paths
- No single point of failure

### Redundancy Examples
- Multiple cables between locations
- Backup servers
- Data replication
- Multiple Internet Service Providers

### Trade-offs
- More redundancy = more reliability
- More redundancy = higher cost
- Balance based on requirements

## 4.3 Parallel and Distributed Computing

### Sequential Computing
- One operation at a time
- Simple but potentially slow
- Limited by single processor speed

### Parallel Computing
- Multiple operations simultaneously
- Uses multiple processors/cores
- Faster for parallelizable problems

### Distributed Computing
- Computation spread across multiple computers
- Connected via network
- Examples: Cloud computing, volunteer computing (SETI@home)

### Speedup Considerations
- Not all problems parallelize well
- Communication overhead
- Some parts must be sequential

:::CODE:::
id::=parallel-vs-sequential
title::=Parallel vs Sequential Processing
language::=pseudocode
runnable::=false
code::=
// Sequential Processing Example
// Process 4 images one at a time
// Each takes 5 seconds
// Total time: 20 seconds

PROCEDURE processSequentially(images)
{
    FOR EACH image IN images
    {
        processImage(image)    // Takes 5 seconds
    }
}
// Total time = 4 × 5 = 20 seconds

// Parallel Processing Example
// Process 4 images simultaneously
// Using 4 processors
// Each still takes 5 seconds
// Total time: 5 seconds

PROCEDURE processInParallel(images)
{
    // All images processed at same time
    // on different processors
    parallelForEach(images, processImage)
}
// Total time = 5 seconds (all run at once)

// Speedup = Sequential Time / Parallel Time
// Speedup = 20 / 5 = 4x faster
expected_output::=Demonstrates how parallel processing can significantly reduce total processing time by executing tasks simultaneously
:::/CODE:::

## 4.4 The Internet Protocol (IP)

### IP Addresses
- Unique identifier for each device
- IPv4: 32-bit (e.g., 192.168.1.1)
- IPv6: 128-bit (e.g., 2001:0db8:85a3::8a2e:0370:7334)

### Packets
- Data divided into small chunks
- Each packet contains:
  - Source IP address
  - Destination IP address
  - Sequence number
  - Data payload
  - Error checking information

### Routing
- Packets may take different paths
- Routers forward packets toward destination
- Best path determined dynamically

## 4.5 The Internet Protocol Stack

### Layers of the Internet

| Layer | Function | Protocols |
|-------|----------|-----------|
| Application | User-facing services | HTTP, HTTPS, DNS, FTP, SMTP |
| Transport | Reliable data transfer | TCP, UDP |
| Internet | Addressing and routing | IP |
| Network Access | Physical transmission | Ethernet, Wi-Fi |

### Application Layer Protocols
- **HTTP/HTTPS**: Web browsing (HTTPS is encrypted)
- **DNS**: Translates domain names to IP addresses
- **FTP**: File transfer
- **SMTP/POP/IMAP**: Email

### Transport Layer
- **TCP**: Reliable, ordered delivery (guarantees delivery)
- **UDP**: Fast but unreliable (no guarantee)

### How a Web Request Works
1. User enters URL in browser
2. DNS converts URL to IP address
3. TCP connection established
4. HTTP request sent
5. Server processes request
6. HTTP response sent back
7. Browser renders page

## 4.6 The World Wide Web

### Web vs. Internet
- **Internet**: Physical network infrastructure
- **Web**: Application running on the Internet
- Web uses HTTP/HTTPS protocols
- Web consists of linked documents

### Key Web Technologies
- **HTML**: Structure of web pages
- **CSS**: Styling and layout
- **JavaScript**: Interactivity
- **URLs**: Resource addresses

### HTTP Methods
- **GET**: Retrieve data
- **POST**: Send data
- **PUT**: Update data
- **DELETE**: Remove data

---

# Big Idea 5: Impact of Computing

## 5.1 Beneficial and Harmful Effects

### Positive Impacts
- **Healthcare**: Improved diagnostics, telemedicine
- **Education**: Online learning, accessibility
- **Communication**: Global connectivity
- **Efficiency**: Automation, productivity
- **Science**: Research capabilities, simulations

### Negative Impacts
- **Privacy concerns**: Data collection, surveillance
- **Digital divide**: Unequal access to technology
- **Job displacement**: Automation replacing workers
- **Addiction**: Social media, gaming
- **Misinformation**: Fake news, manipulation

### Unintended Consequences
- Technology often has unexpected effects
- Social media originally for connection, now linked to mental health issues
- GPS helped navigation but reduced spatial awareness skills

## 5.2 Digital Divide

### What Is the Digital Divide?
- Gap between those with and without technology access
- Includes access to devices and internet
- Also includes digital literacy skills

### Factors Contributing to Digital Divide
- **Geographic**: Rural vs. urban areas
- **Economic**: Income levels
- **Age**: Generational differences
- **Education**: Digital literacy levels
- **Disability**: Accessibility challenges

### Addressing the Digital Divide
- Infrastructure investment
- Affordable device programs
- Digital literacy education
- Accessible design standards

## 5.3 Computing Bias

### Sources of Bias
- **Data bias**: Training data reflects historical biases
- **Algorithmic bias**: Design choices embed biases
- **Selection bias**: Non-representative samples
- **Confirmation bias**: Seeking confirming evidence

### Examples of Computing Bias
- Facial recognition less accurate for darker skin tones
- Resume screening favoring male candidates
- Loan algorithms discriminating against minorities
- Search results reinforcing stereotypes

### Mitigating Bias
- Diverse development teams
- Representative training data
- Regular bias audits
- Transparent algorithms
- Human oversight

## 5.4 Crowdsourcing

### What Is Crowdsourcing?
- Obtaining input from large groups
- Leverages collective intelligence
- Can be volunteer or paid

### Examples
- **Wikipedia**: Collaborative encyclopedia
- **Citizen science**: Public participation in research
- **Crowdfunding**: Kickstarter, GoFundMe
- **Open source software**: Community development

### Benefits
- Diverse perspectives
- Large-scale data collection
- Cost-effective
- Community engagement

### Challenges
- Quality control
- Coordination
- Motivation
- Exploitation concerns

## 5.5 Legal and Ethical Concerns

### Intellectual Property

#### Copyright
- Protects original creative works
- Automatic upon creation
- Lasts life of author + 70 years
- Gives creator exclusive rights

#### Creative Commons
- Alternative to traditional copyright
- Allows creators to specify permissions
- Various license types (CC BY, CC BY-SA, etc.)
- Promotes sharing and collaboration

#### Open Source
- Source code freely available
- Can be modified and redistributed
- Licenses (MIT, GPL, Apache)
- Community-driven development

### Software Licensing
- **Proprietary**: Restricted use, no source code
- **Open source**: Free to use, modify, share
- **Freeware**: Free to use but not modify
- **Shareware**: Try before you buy

### Plagiarism and Citation
- Always attribute sources
- Understand fair use
- Cite code from others
- Document borrowed algorithms

## 5.6 Safe Computing

### Personally Identifiable Information (PII)
- Name, address, phone number
- Social Security Number
- Email, usernames
- Biometric data
- Financial information

### Protecting PII
- Strong, unique passwords
- Two-factor authentication
- Limit sharing online
- Review privacy settings
- Be cautious with public Wi-Fi

### Types of Cyber Attacks

#### Phishing
- Deceptive messages to steal information
- Looks like legitimate sources
- Often contains malicious links

#### Malware
- **Virus**: Spreads by attaching to files
- **Worm**: Self-replicating, spreads via network
- **Trojan**: Disguised as legitimate software
- **Ransomware**: Encrypts files, demands payment
- **Spyware**: Secretly collects information

#### Social Engineering
- Manipulating people to reveal information
- Exploits human psychology
- Includes pretexting, baiting, tailgating

### Authentication Methods
- **Single-factor**: Something you know (password)
- **Multi-factor**: Combines multiple methods
  - Something you know (password)
  - Something you have (phone, key)
  - Something you are (fingerprint, face)

### Encryption

#### Symmetric Encryption
- Same key for encryption and decryption
- Fast but key distribution is a challenge
- Used for bulk data encryption

#### Public Key (Asymmetric) Encryption
- Two keys: public and private
- Public key encrypts, private key decrypts
- Enables secure communication without shared secret
- Used for digital signatures and secure key exchange

#### Digital Certificates
- Verify identity of websites
- Issued by Certificate Authorities (CA)
- Enable HTTPS connections
- Create chain of trust

### Password Security
- Use long, complex passwords
- Include letters, numbers, symbols
- Don't reuse passwords
- Consider password managers
- Enable two-factor authentication

:::CODE:::
id::=password-strength-checker
title::=Password Strength Checker Algorithm
language::=pseudocode
runnable::=false
code::=
PROCEDURE checkPasswordStrength(password)
{
    score ← 0
    
    // Check length
    IF (LENGTH(password) ≥ 8)
    {
        score ← score + 1
    }
    IF (LENGTH(password) ≥ 12)
    {
        score ← score + 1
    }
    
    // Check for uppercase letters
    hasUpper ← false
    FOR EACH char IN password
    {
        IF (char ≥ "A" AND char ≤ "Z")
        {
            hasUpper ← true
        }
    }
    IF (hasUpper)
    {
        score ← score + 1
    }
    
    // Check for lowercase letters
    hasLower ← false
    FOR EACH char IN password
    {
        IF (char ≥ "a" AND char ≤ "z")
        {
            hasLower ← true
        }
    }
    IF (hasLower)
    {
        score ← score + 1
    }
    
    // Check for numbers
    hasNumber ← false
    FOR EACH char IN password
    {
        IF (char ≥ "0" AND char ≤ "9")
        {
            hasNumber ← true
        }
    }
    IF (hasNumber)
    {
        score ← score + 1
    }
    
    // Check for special characters
    specialChars ← "!@#$%^&*()_+-=[]{}|;:,.<>?"
    hasSpecial ← false
    FOR EACH char IN password
    {
        IF (char IN specialChars)
        {
            hasSpecial ← true
        }
    }
    IF (hasSpecial)
    {
        score ← score + 1
    }
    
    // Return strength rating
    IF (score ≤ 2)
    {
        RETURN "Weak"
    }
    ELSE
    {
        IF (score ≤ 4)
        {
            RETURN "Medium"
        }
        ELSE
        {
            RETURN "Strong"
        }
    }
}

// Example usage
strength ← checkPasswordStrength("MyP@ssw0rd123!")
DISPLAY(strength)    // Displays "Strong"
expected_output::=Evaluates password strength based on length, character variety, and returns "Weak", "Medium", or "Strong"
:::/CODE:::

---

# Create Performance Task (CPT)

## Overview
- 30% of AP score
- Create a program demonstrating skills
- Submit code and written responses
- Completed during class time

## Requirements

### Program Requirements
1. Must include a **list** that manages complexity
2. Must include a **student-developed procedure** with:
   - At least one parameter
   - An algorithm using sequencing, selection, AND iteration

### Written Responses

#### 3a: Program Purpose and Function (150 words max)
- Describe the overall purpose
- Describe the program's functionality
- Describe the input and output

#### 3b: Data Abstraction (200 words max)
- Show code segment with list being created with data
- Show code segment using the list
- Identify the list name
- Describe what the list represents
- Explain how the list manages complexity

#### 3c: Managing Complexity (200 words max)
- Explain how the list manages complexity
- Describe what would happen without the list

#### 3d: Procedural Abstraction (200 words max)
- Show code segment with procedure definition
- Show code segment calling the procedure
- Describe the procedure's contribution to the program

#### 3e: Algorithm Implementation (200 words max)
- Explain how the algorithm includes sequencing, selection, and iteration
- Describe how it works in detail

#### 3f: Testing (200 words max)
- Describe two calls to your procedure
- Describe the conditions being tested
- Identify the results of each call

## CPT Tips

### Do's
- Start early and iterate
- Use meaningful variable and procedure names
- Add comments to your code
- Test thoroughly with different inputs
- Get feedback from peers

### Don'ts
- Don't copy code from others
- Don't use APIs or libraries for core functionality
- Don't make your program too simple
- Don't wait until the last minute
- Don't submit code you don't understand

---

# Pseudocode Reference Guide

## AP CSP Pseudocode Conventions

### Variables and Assignment
```
a ← expression        // Assigns value to a
```

### Display Output
```
DISPLAY(expression)   // Shows value on screen
```

### Input
```
INPUT()               // Gets value from user
```

### Arithmetic Operators
```
a + b                 // Addition
a - b                 // Subtraction
a * b                 // Multiplication
a / b                 // Division
a MOD b               // Modulus (remainder)
```

### Comparison Operators
```
a = b                 // Equal to
a ≠ b                 // Not equal to
a > b                 // Greater than
a < b                 // Less than
a ≥ b                 // Greater than or equal
a ≤ b                 // Less than or equal
```

### Boolean Operators
```
NOT condition         // Logical NOT
condition1 AND condition2  // Logical AND
condition1 OR condition2   // Logical OR
```

### Selection (Conditionals)
```
IF (condition)
{
    // statements
}

IF (condition)
{
    // statements
}
ELSE
{
    // statements
}
```

### Iteration (Loops)
```
REPEAT n TIMES
{
    // statements
}

REPEAT UNTIL (condition)
{
    // statements
}

FOR EACH item IN list
{
    // statements
}
```

### Lists
```
list ← [item1, item2, item3]  // Create list
list[index]                    // Access element (1-indexed)
LENGTH(list)                   // Number of elements
APPEND(list, value)            // Add to end
INSERT(list, index, value)     // Insert at position
REMOVE(list, index)            // Remove at position
FOR EACH item IN list          // Iterate through list
```

### Procedures
```
PROCEDURE name(parameter1, parameter2)
{
    // statements
}

PROCEDURE name(parameter1, parameter2)
{
    // statements
    RETURN expression
}

result ← procedureName(arg1, arg2)  // Call procedure
```

### Robot Commands (if applicable)
```
MOVE_FORWARD()        // Move one space forward
ROTATE_LEFT()         // Rotate 90 degrees left
ROTATE_RIGHT()        // Rotate 90 degrees right
CAN_MOVE(direction)   // Check if can move in direction
```

---

# Number Systems Quick Reference

## Binary (Base 2)
- Digits: 0, 1
- Used internally by computers
- Each position is a power of 2

## Decimal (Base 10)
- Digits: 0-9
- Human-readable numbers
- Each position is a power of 10

## Hexadecimal (Base 16)
- Digits: 0-9, A-F (A=10, B=11, C=12, D=13, E=14, F=15)
- Compact representation of binary
- 4 binary digits = 1 hex digit

### Conversion Examples

**Binary to Hex**
1010 1111₂ = AF₁₆
- 1010 = A (10)
- 1111 = F (15)

**Hex to Binary**
3C₁₆ = 0011 1100₂
- 3 = 0011
- C = 1100

**Common Values**
| Decimal | Binary | Hex |
|---------|--------|-----|
| 0 | 0000 | 0 |
| 8 | 1000 | 8 |
| 15 | 1111 | F |
| 16 | 10000 | 10 |
| 255 | 11111111 | FF |

---

# Data Representation

## Text Representation
- **ASCII**: 7-bit encoding (128 characters)
- **Unicode**: Supports all world languages
- Each character has a unique code point

## Color Representation
- **RGB**: Red, Green, Blue (0-255 each)
- **Hex colors**: #RRGGBB format
- Example: #FF0000 = pure red

## Image Representation
- **Pixels**: Smallest unit of image
- **Resolution**: Width × Height in pixels
- **Bit depth**: Bits per pixel for color
- **Metadata**: Information about the image

## Audio Representation
- **Sampling**: Converting analog to digital
- **Sample rate**: Samples per second (Hz)
- **Bit depth**: Bits per sample
- Higher rates/depths = better quality = larger files

---

# Final Exam Strategies

## Multiple Choice Tips
1. Read questions carefully
2. Trace through code step by step
3. Watch for off-by-one errors
4. Check all answer choices
5. Use process of elimination
6. Manage your time (about 1.5 min per question)

## Common Mistakes to Avoid
- Forgetting lists are 1-indexed in AP CSP
- Confusing = (equality) with ← (assignment)
- Not considering edge cases
- Misunderstanding loop termination conditions
- Forgetting return statements in procedures

## Key Topics to Review
1. Binary and hexadecimal conversions
2. Boolean logic and truth tables
3. List operations and algorithms
4. Procedure calls and parameters
5. Internet protocols and structure
6. Cybersecurity concepts
7. Computing ethics and impact

## Practice Recommendations
- Complete past AP exam questions
- Trace code by hand
- Write and test your own programs
- Review Create Task requirements
- Study vocabulary and concepts

---

# Vocabulary Quick Reference

| Term | Definition |
|------|------------|
| Algorithm | Step-by-step instructions to solve a problem |
| Abstraction | Simplifying complexity by hiding details |
| API | Application Programming Interface |
| Binary | Base-2 number system |
| Bit | Single binary digit (0 or 1) |
| Byte | 8 bits |
| CPU | Central Processing Unit |
| DNS | Domain Name System |
| Encryption | Converting data to unreadable form |
| HTTP | Hypertext Transfer Protocol |
| IP Address | Unique identifier for network devices |
| Iteration | Repeating a process |
| Library | Pre-written code collection |
| Lossless | Compression without data loss |
| Lossy | Compression with data loss |
| Metadata | Data about data |
| Packet | Unit of data transmitted over network |
| Parameter | Input variable for a procedure |
| Phishing | Fraudulent attempt to obtain information |
| PII | Personally Identifiable Information |
| Procedure | Named group of instructions |
| Protocol | Rules for data transmission |
| RAM | Random Access Memory |
| Redundancy | Backup systems for fault tolerance |
| Router | Device that forwards data packets |
| Simulation | Model of real-world process |
| TCP | Transmission Control Protocol |
| URL | Uniform Resource Locator |
| Variable | Named storage for data |

---

# Summary by Big Idea

## Big Idea 1: Creative Development
- Collaboration improves programs through diverse perspectives
- Programs have specific purposes and functions
- Development is iterative and incremental
- Testing and debugging are essential

## Big Idea 2: Data
- Data is represented in binary
- Compression reduces file sizes (lossless vs. lossy)
- Information is extracted from data through processing
- Programs can filter, transform, and visualize data

## Big Idea 3: Algorithms and Programming
- Algorithms use sequencing, selection, and iteration
- Variables store and manage data
- Lists organize collections of data
- Procedures enable abstraction and reuse
- Efficiency matters for large-scale problems

## Big Idea 4: Computer Systems and Networks
- The Internet is a network of networks
- Protocols enable communication (TCP/IP, HTTP)
- Fault tolerance ensures reliability
- Parallel computing enables faster processing

## Big Idea 5: Impact of Computing
- Computing has both beneficial and harmful effects
- The digital divide creates inequalities
- Bias can be embedded in algorithms
- Security and privacy are critical concerns
- Legal and ethical considerations guide responsible computing

---

**Good luck on your AP Computer Science Principles exam!**

:::/GUIDE:::
