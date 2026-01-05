:::GUIDE:::
unit::=1
title::=🚀 Unit 1: Kinematics Complete Guide
desc::=Master all concepts of motion: position, velocity, acceleration, graphs, and equations for AP Physics 1
diff::=intermediate
time::=60 minutes
tags::=kinematics;;motion;;velocity;;acceleration;;graphs;;ap-physics-1
content::=
# 🚀 UNIT 1: KINEMATICS - MOTION IN ONE AND TWO DIMENSIONS

## 📋 TABLE OF CONTENTS
- Scalars vs Vectors
- Position, Displacement, Distance
- Velocity & Speed
- Acceleration
- Kinematic Equations
- Motion Graphs
- Free Fall Motion
- Projectile Motion
- Relative Motion

---

## 🎯 KEY CONCEPTS OVERVIEW

### SCALARS vs VECTORS

| Property | Scalar | Vector |
|----------|--------|--------|
| **Definition** | Magnitude only | Magnitude + Direction |
| **Examples** | Distance, Speed, Time, Mass | Displacement, Velocity, Acceleration, Force |
| **Math Operations** | Simple arithmetic | Vector addition/subtraction |
| **Notation** | Regular letters: $d, t, m$ | Bold or arrow: $\vec{v}, \vec{a}$ |

💡 **Memory Trick**: "VDAF" - Vectors have Direction And Focus!

---

## 📍 POSITION, DISPLACEMENT & DISTANCE

### DEFINITIONS

**Position ($x$)**: Location of an object relative to origin
- Scalar value with + or - indicating direction
- Units: meters (m)

**Displacement ($\Delta x$ or $\vec{d}$)**: Change in position
- Vector quantity: $\Delta x = x_f - x_i$
- Can be positive, negative, or zero
- Shortest path between two points

**Distance**: Total path length traveled
- Scalar quantity (always positive)
- Total ground covered

### COMPARISON TABLE

| Quantity | Type | Formula | Can be Zero? |
|----------|------|---------|--------------|
| Position | Vector | $x$ | Yes |
| Displacement | Vector | $\Delta x = x_f - x_i$ | Yes (round trip) |
| Distance | Scalar | Sum of all paths | Only if no motion |

**Example Problem:**
A student walks 5 m east, then 3 m west.
- Distance traveled = 5 m + 3 m = **8 m**
- Displacement = 5 m - 3 m = **2 m east** (or +2 m)

---

## 🏃 VELOCITY & SPEED

### AVERAGE VELOCITY

Formula: $\vec{v}_{avg} = \frac{\Delta x}{\Delta t} = \frac{x_f - x_i}{t_f - t_i}$

- Vector quantity
- Direction matters
- Can be positive, negative, or zero
- Units: m/s

### INSTANTANEOUS VELOCITY

- Velocity at a specific moment
- Slope of position-time graph at a point
- Calculus: $v = \frac{dx}{dt}$

### AVERAGE SPEED

Formula: $\text{speed}_{avg} = \frac{\text{total distance}}{\text{total time}}$

- Scalar quantity (no direction)
- Always positive
- Units: m/s

### VELOCITY vs SPEED TABLE

| Property | Velocity | Speed |
|----------|----------|-------|
| Type | Vector | Scalar |
| Direction? | Yes | No |
| Can be negative? | Yes | No |
| Formula | $\frac{\Delta x}{\Delta t}$ | $\frac{d}{t}$ |
| Graph slope | Position-time | Not applicable |

💡 **Pro Tip**: Velocity tells you WHERE you're going; speed tells you HOW FAST!

---

## ⚡ ACCELERATION

### DEFINITION

**Acceleration ($\vec{a}$)**: Rate of change of velocity

Formula: $\vec{a}_{avg} = \frac{\Delta v}{\Delta t} = \frac{v_f - v_i}{t_f - t_i}$

- Vector quantity
- Units: m/s²
- Positive: speeding up in positive direction OR slowing down in negative direction
- Negative: slowing down in positive direction OR speeding up in negative direction

### TYPES OF ACCELERATION

| Type | Velocity | Acceleration | Result |
|------|----------|--------------|--------|
| **Speeding Up** | + | + | Speed increases ➡️ |
| **Slowing Down** | + | - | Speed decreases ⬇️ |
| **Speeding Up (backwards)** | - | - | Speed increases ⬅️ |
| **Slowing Down (backwards)** | - | + | Speed decreases ⬇️ |
| **Constant Velocity** | Any | 0 | No change ➡️ |

### INSTANTANEOUS ACCELERATION

- Acceleration at specific moment
- Slope of velocity-time graph
- Calculus: $a = \frac{dv}{dt} = \frac{d^2x}{dt^2}$

**Example:**
A car moving at +20 m/s accelerates at +3 m/s² for 4 seconds.
$v_f = v_i + at = 20 + 3(4) = 32 \text{ m/s}$ ✓

---

## 📐 THE BIG 5: KINEMATIC EQUATIONS

### EQUATIONS (Constant Acceleration Only!)

1. $v_f = v_i + at$
2. $\Delta x = v_i t + \frac{1}{2}at^2$
3. $v_f^2 = v_i^2 + 2a\Delta x$
4. $\Delta x = \frac{1}{2}(v_i + v_f)t$
5. $\Delta x = v_f t - \frac{1}{2}at^2$

### EQUATION SELECTION GUIDE

| Missing Variable | Use Equation |
|-----------------|--------------|
| $\Delta x$ | Equation 1: $v_f = v_i + at$ |
| $v_f$ | Equation 2: $\Delta x = v_i t + \frac{1}{2}at^2$ |
| $a$ | Equation 4: $\Delta x = \frac{1}{2}(v_i + v_f)t$ |
| $t$ | Equation 3: $v_f^2 = v_i^2 + 2a\Delta x$ |
| $v_i$ | Equation 5: $\Delta x = v_f t - \frac{1}{2}at^2$ |

💡 **Memory Device**: "Very Fast Aliens Destroy Targets"
- **V**elocity final
- **F**irst velocity (initial)  
- **A**cceleration
- **D**isplacement
- **T**ime

### PROBLEM-SOLVING STRATEGY

1. ✏️ **List knowns**: Write down given values
2. 🎯 **Identify unknown**: What are you solving for?
3. 🔍 **Choose equation**: Which equation has all your knowns and your unknown?
4. 🧮 **Solve algebraically**: Isolate the unknown variable
5. 🔢 **Substitute numbers**: Plug in values with units
6. ✅ **Check**: Does the answer make physical sense?

**Example Problem:**
A car accelerates from rest at 2 m/s² for 5 seconds. How far does it travel?

Given:
- $v_i = 0$ m/s (from rest)
- $a = 2$ m/s²
- $t = 5$ s
- $\Delta x = ?$

Solution:
$\Delta x = v_i t + \frac{1}{2}at^2 = 0(5) + \frac{1}{2}(2)(5)^2 = 25 \text{ m}$ ✓

---

## 📊 MOTION GRAPHS

### POSITION-TIME (x-t) GRAPHS

| Graph Feature | Physical Meaning |
|--------------|------------------|
| **Slope** | Velocity (steep = fast) |
| **Positive slope** | Moving in + direction |
| **Negative slope** | Moving in - direction |
| **Zero slope (horizontal)** | At rest |
| **Curved line** | Acceleration (changing velocity) |
| **Straight line** | Constant velocity |

**Graph Relationships:**
- Steeper slope = Higher speed
- Upward slope = Positive velocity
- Downward slope = Negative velocity
- Parabola = Constant acceleration

### VELOCITY-TIME (v-t) GRAPHS

| Graph Feature | Physical Meaning |
|--------------|------------------|
| **Slope** | Acceleration |
| **Positive slope** | Speeding up (if v>0) or slowing down (if v<0) |
| **Negative slope** | Slowing down (if v>0) or speeding up (if v<0) |
| **Zero slope (horizontal)** | Constant velocity |
| **Area under curve** | Displacement |
| **Above x-axis** | Moving in + direction |
| **Below x-axis** | Moving in - direction |

💡 **CRITICAL**: Area under v-t graph = displacement, NOT distance!

### ACCELERATION-TIME (a-t) GRAPHS

| Graph Feature | Physical Meaning |
|--------------|------------------|
| **Height** | Magnitude of acceleration |
| **Positive** | Acceleration in + direction |
| **Negative** | Acceleration in - direction |
| **Zero (on x-axis)** | Constant velocity |
| **Area under curve** | Change in velocity |

### GRAPH COMPARISON

| Graph Type | Slope = | Area Under = |
|------------|---------|--------------|
| **Position-Time** | Velocity | N/A |
| **Velocity-Time** | Acceleration | Displacement |
| **Acceleration-Time** | Change in accel | Change in velocity |

---

## 🎈 FREE FALL MOTION

### CHARACTERISTICS

- **Only force**: Gravity
- **Acceleration**: $g = 9.8$ m/s² or $10$ m/s² (always downward)
- **No air resistance**: Idealized motion
- **Direction convention**: Usually +up, -down (or vice versa)

### KEY EQUATIONS (Free Fall)

Using $g = -9.8$ m/s² (taking up as positive):

1. $v_f = v_i - gt$
2. $\Delta y = v_i t - \frac{1}{2}gt^2$
3. $v_f^2 = v_i^2 - 2g\Delta y$
4. $\Delta y = \frac{1}{2}(v_i + v_f)t$

### SPECIAL CASES

| Scenario | $v_i$ | $v_f$ at peak | Time up = Time down? |
|----------|-------|--------------|---------------------|
| **Dropped** | 0 | N/A | N/A |
| **Thrown up** | + value | 0 at peak | YES ✓ |
| **Thrown down** | - value | N/A | N/A |

### SYMMETRY IN PROJECTILE MOTION

For object thrown straight up:
- Velocity at peak = 0
- Time to reach peak = Time to return to launch point
- Speed on return = Initial speed (but opposite direction)

**Example Problem:**
A ball is thrown upward at 20 m/s. How high does it go?

Given:
- $v_i = 20$ m/s
- $v_f = 0$ m/s (at peak)
- $g = -9.8$ m/s²
- $\Delta y = ?$

Solution:
$v_f^2 = v_i^2 + 2g\Delta y$
$0 = (20)^2 + 2(-9.8)\Delta y$
$\Delta y = \frac{400}{19.6} = 20.4 \text{ m}$ ✓

---

## 🎯 PROJECTILE MOTION (2D)

### KEY PRINCIPLES

1. **Independence of Motion**: Horizontal and vertical motions are independent
2. **Horizontal**: Constant velocity (no acceleration if no air resistance)
3. **Vertical**: Constant acceleration due to gravity
4. **Trajectory**: Parabolic path

### COMPONENT BREAKDOWN

| Component | Acceleration | Velocity |
|-----------|--------------|----------|
| **Horizontal (x)** | $a_x = 0$ | $v_x = v_0 \cos\theta$ (constant) |
| **Vertical (y)** | $a_y = -g$ | $v_y = v_0 \sin\theta - gt$ |

### INITIAL VELOCITY COMPONENTS

For launch angle $\theta$ and initial speed $v_0$:
- Horizontal: $v_{0x} = v_0 \cos\theta$
- Vertical: $v_{0y} = v_0 \sin\theta$

### PROJECTILE EQUATIONS

**Horizontal Motion:**
- $x = v_{0x}t = v_0 \cos\theta \cdot t$

**Vertical Motion:**
- $y = v_{0y}t - \frac{1}{2}gt^2 = v_0 \sin\theta \cdot t - \frac{1}{2}gt^2$
- $v_y = v_{0y} - gt = v_0 \sin\theta - gt$

### SPECIAL VALUES

| Angle | Best For |
|-------|----------|
| **45°** | Maximum range (on level ground) |
| **90°** | Maximum height |
| **< 45°** | Longer range than height |
| **> 45°** | Greater height than range |

### RANGE FORMULA

For level ground: $R = \frac{v_0^2 \sin(2\theta)}{g}$

### TIME OF FLIGHT

For level ground: $t_{total} = \frac{2v_0 \sin\theta}{g}$

### PROJECTILE MOTION TIPS

✓ Always separate into x and y components
✓ Time is the same for both dimensions
✓ At peak: $v_y = 0$, but $v_x \neq 0$
✓ Symmetry: Time up = Time down (level ground)

**Example Problem:**
A ball is kicked at 25 m/s at 37° above horizontal. Find max height.

Given:
- $v_0 = 25$ m/s
- $\theta = 37°$
- $g = 10$ m/s²

Solution:
$v_{0y} = v_0 \sin\theta = 25 \sin(37°) = 25(0.6) = 15$ m/s
At max height: $v_y = 0$
$v_y^2 = v_{0y}^2 - 2g\Delta y$
$0 = 15^2 - 2(10)\Delta y$
$\Delta y = \frac{225}{20} = 11.25 \text{ m}$ ✓

---

## 🚗 RELATIVE MOTION

### CONCEPT

Motion depends on frame of reference (observer)

Formula: $\vec{v}_{AC} = \vec{v}_{AB} + \vec{v}_{BC}$

Where:
- A = Object of interest
- B = Intermediate reference frame
- C = Observer's reference frame

### COMMON SCENARIOS

| Situation | Relative Velocity |
|-----------|------------------|
| **Same direction** | Add speeds |
| **Opposite direction** | Subtract speeds |
| **Perpendicular** | Use Pythagorean theorem |

**Example:**
Car A moves east at 30 m/s. Car B moves east at 20 m/s.
Velocity of A relative to B: $v_{AB} = 30 - 20 = 10$ m/s east ✓

---

## 🎓 COMMON MISTAKES TO AVOID

❌ **Confusing distance with displacement**
✅ Remember: Distance is total path; displacement is straight-line change

❌ **Using kinematic equations when acceleration is NOT constant**
✅ Check if acceleration is constant first!

❌ **Forgetting to use negative for downward acceleration in free fall**
✅ Be consistent with your coordinate system

❌ **Mixing up velocity and speed**
✅ Velocity has direction; speed doesn't

❌ **Ignoring units**
✅ Always include units in your final answer

❌ **In projectile motion, thinking vertical velocity affects horizontal motion**
✅ They are independent!

---

## 🔥 EXAM STRATEGIES

### FOR MULTIPLE CHOICE
1. Draw a diagram or graph
2. List known and unknown variables
3. Eliminate obviously wrong answers
4. Check units and reasonableness

### FOR FREE RESPONSE
1. **Show all work** - partial credit is huge!
2. **Box or circle final answers**
3. **Include units** in every step
4. **Draw diagrams** when applicable
5. **Explain reasoning** in words

### TIME MANAGEMENT
- Spend 2-3 minutes per MC question
- Allocate 12-15 minutes per FRQ
- Skip hard questions, come back later
- Always guess (no penalty!)

---

## 📝 PRACTICE PROBLEMS

### Problem 1: Kinematics
A car starting from rest accelerates at 3 m/s² for 8 seconds, then maintains constant velocity for 10 seconds.
a) What is its velocity after 8 seconds?
b) What is its total displacement?

**Solution:**
a) $v_f = v_i + at = 0 + 3(8) = 24$ m/s ✓
b) Phase 1: $\Delta x_1 = v_i t + \frac{1}{2}at^2 = 0 + \frac{1}{2}(3)(8)^2 = 96$ m
   Phase 2: $\Delta x_2 = vt = 24(10) = 240$ m
   Total: $96 + 240 = 336$ m ✓

### Problem 2: Free Fall
A stone is dropped from a 45 m tall building. How long until it hits the ground?

**Solution:**
$\Delta y = v_i t + \frac{1}{2}at^2$
$-45 = 0 + \frac{1}{2}(-10)t^2$
$t^2 = 9$
$t = 3$ seconds ✓

### Problem 3: Projectile
A ball is thrown horizontally at 15 m/s from a 20 m tall cliff. Where does it land?

**Solution:**
Vertical: Find time
$\Delta y = -20$ m, $v_{0y} = 0$, $g = -10$ m/s²
$-20 = 0 - \frac{1}{2}(10)t^2$
$t = 2$ s

Horizontal: Find range
$x = v_x t = 15(2) = 30$ m ✓

---

## 🧠 MEMORY AIDS & FORMULAS

### THE KINEMATIC BIG 5
1. $v_f = v_i + at$
2. $\Delta x = v_i t + \frac{1}{2}at^2$
3. $v_f^2 = v_i^2 + 2a\Delta x$
4. $\Delta x = \frac{1}{2}(v_i + v_f)t$
5. $\Delta x = v_f t - \frac{1}{2}at^2$

### ESSENTIAL FACTS
- Gravity: $g = 9.8$ m/s² (or 10 m/s² for estimates)
- At projectile peak: $v_y = 0$
- Slope of x-t graph = velocity
- Slope of v-t graph = acceleration
- Area under v-t graph = displacement

### VECTOR COMPONENTS
- $v_x = v \cos\theta$
- $v_y = v \sin\theta$
- $v = \sqrt{v_x^2 + v_y^2}$
- $\theta = \tan^{-1}\left(\frac{v_y}{v_x}\right)$

---

## ✨ FINAL TIPS

🎯 **Master the basics**: Understand the difference between scalars and vectors cold.

📊 **Graph literacy**: Be able to sketch and interpret all three motion graphs.

🧮 **Equation selection**: Practice choosing the right kinematic equation quickly.

⚡ **Free fall**: Remember gravity always acts downward at 9.8 m/s².

🎯 **Projectile motion**: Always split into x and y components immediately.

📐 **Draw diagrams**: Visual representation helps organize your thinking.

⏱️ **Practice timed**: Do problems under time pressure before the exam.

🔄 **Review mistakes**: Learn from every error - that's where growth happens!

---

## 🎉 YOU'VE GOT THIS!

Kinematics is the foundation of all physics mechanics. Master this unit and you'll have the skills and confidence for everything that follows. Practice regularly, understand the concepts deeply (not just memorizing), and you'll ace this unit! 🚀

**Remember:** Physics is about understanding how things move and why. Every equation tells a story about motion in our universe. Happy studying! 📚✨

---

## 📅 History of Motion Study Timeline

:::TIMELINE:::
id::=kinematics-history-timeline
title::=The History of Understanding Motion
events::=[
  {"year": "350 BCE", "title": "Aristotle's Physics", "description": "Believed heavier objects fall faster; natural vs. violent motion; dominated for 2000 years"},
  {"year": "1589", "title": "Galileo's Leaning Tower", "description": "Legendary experiment dropping balls; showed all objects fall at same rate (air resistance aside)"},
  {"year": "1604", "title": "Galileo's Inclined Plane", "description": "Measured acceleration using inclined planes; discovered constant acceleration in free fall"},
  {"year": "1609", "title": "Kepler's Laws Published", "description": "Described planetary motion mathematically; elliptical orbits; inspired Newton"},
  {"year": "1638", "title": "Galileo's 'Two New Sciences'", "description": "Published theory of projectile motion; parabolic trajectories; foundation of kinematics"},
  {"year": "1687", "title": "Newton's Principia", "description": "Laws of motion and universal gravitation; mathematical physics established"},
  {"year": "1905", "title": "Einstein's Special Relativity", "description": "Showed motion is relative; time dilation; speed of light as cosmic speed limit"},
  {"year": "1915", "title": "Einstein's General Relativity", "description": "Gravity as curvature of spacetime; extended understanding of accelerated motion"}
]
:::/TIMELINE:::

---

## 🔬 Advanced Problem-Solving Strategies

### Multi-Step Problem Framework

| Step | Action | Purpose |
|------|--------|---------|
| **1. Read carefully** | Identify what's given and asked | Understand the problem |
| **2. Draw a diagram** | Sketch the situation with vectors | Visualize the physics |
| **3. Choose coordinates** | Define positive direction | Consistent calculations |
| **4. List variables** | Write knowns and unknowns | Organize information |
| **5. Select equation(s)** | Match variables to equations | Strategic approach |
| **6. Solve symbolically** | Keep letters before numbers | Reduce calculation errors |
| **7. Substitute values** | Plug in numbers with units | Get numerical answer |
| **8. Check reasonableness** | Does answer make sense? | Catch mistakes |

### Common Problem Types and Approaches

| Problem Type | Key Strategy | Watch Out For |
|--------------|--------------|---------------|
| **Objects meeting** | Set positions equal | Different starting times |
| **Catching up** | Relative velocity | Initial separation |
| **Two-stage motion** | Solve stages separately | Final v of stage 1 = initial v of stage 2 |
| **Maximum height** | At peak: $v_y = 0$ | Still has horizontal velocity |
| **Time in air** | Vertical motion only | Symmetry for level ground |
| **Range problems** | Separate x and y | Time links both components |

---

## 📐 Vector Components Deep Dive

### Breaking Vectors into Components

For a vector $\vec{v}$ at angle $\theta$ above horizontal:

```
                    ↑ v_y = v sin θ
                    │
                    │  ╱ ⟵ v (magnitude)
                    │ ╱
                    │╱ θ
           ─────────┴───────→ v_x = v cos θ
```

### Component Formulas Summary

| Given | Find | Formula |
|-------|------|---------|
| $v$ and $\theta$ | $v_x$ | $v_x = v \cos\theta$ |
| $v$ and $\theta$ | $v_y$ | $v_y = v \sin\theta$ |
| $v_x$ and $v_y$ | $v$ | $v = \sqrt{v_x^2 + v_y^2}$ |
| $v_x$ and $v_y$ | $\theta$ | $\theta = \tan^{-1}\left(\frac{v_y}{v_x}\right)$ |

### Special Angle Values

| Angle | sin θ | cos θ | tan θ |
|-------|-------|-------|-------|
| 0° | 0 | 1 | 0 |
| 30° | 0.5 | 0.866 | 0.577 |
| 37° | 0.6 | 0.8 | 0.75 |
| 45° | 0.707 | 0.707 | 1 |
| 53° | 0.8 | 0.6 | 1.33 |
| 60° | 0.866 | 0.5 | 1.73 |
| 90° | 1 | 0 | undefined |

---

## 🎯 Projectile Motion: Complete Analysis

### Horizontal Launch (θ = 0°)

| Component | Initial | During Flight | At Landing |
|-----------|---------|---------------|------------|
| **Horizontal** | $v_x = v_0$ | $v_x = v_0$ (constant) | $v_x = v_0$ |
| **Vertical** | $v_y = 0$ | $v_y = -gt$ | $v_y = -\sqrt{2gh}$ |

**Key equations for horizontal launch:**
- Time to fall: $t = \sqrt{\frac{2h}{g}}$
- Range: $R = v_0 \cdot t = v_0\sqrt{\frac{2h}{g}}$

### Angled Launch Analysis

| Quantity | Formula | Notes |
|----------|---------|-------|
| **Time to peak** | $t_{peak} = \frac{v_0 \sin\theta}{g}$ | Vertical velocity = 0 |
| **Total time (level)** | $t_{total} = \frac{2v_0 \sin\theta}{g}$ | Double time to peak |
| **Maximum height** | $h_{max} = \frac{v_0^2 \sin^2\theta}{2g}$ | Use $v_y^2 = v_{0y}^2 - 2gh$ |
| **Range (level)** | $R = \frac{v_0^2 \sin(2\theta)}{g}$ | Maximum at 45° |

### Complementary Angles

For level ground, angles that add to 90° give the same range:

| Angle Pair | Same Range? | Height Comparison |
|------------|-------------|-------------------|
| 30° and 60° | Yes ✓ | 60° goes higher |
| 40° and 50° | Yes ✓ | 50° goes higher |
| 15° and 75° | Yes ✓ | 75° goes higher |
| 45° | Maximum range | Unique |

---

## 📊 Interpreting Complex Motion Graphs

### Position-Time Graph Patterns

| Graph Shape | Velocity | Acceleration | Description |
|-------------|----------|--------------|-------------|
| Horizontal line | Zero | Zero | At rest |
| Straight line (+ slope) | Constant positive | Zero | Moving right at constant speed |
| Straight line (- slope) | Constant negative | Zero | Moving left at constant speed |
| Parabola (concave up) | Increasing | Positive | Speeding up (rightward) |
| Parabola (concave down) | Decreasing | Negative | Slowing down OR speeding up leftward |

### Velocity-Time Graph Analysis

| Graph Feature | Meaning | How to Calculate |
|---------------|---------|------------------|
| Slope | Acceleration | Rise/run |
| Area above axis | Positive displacement | Geometric area |
| Area below axis | Negative displacement | Geometric area (subtract) |
| x-intercept | Direction change | Where v = 0 |
| Horizontal line | Constant velocity | No acceleration |

### Connecting All Three Graphs

```
Position-Time    →    Velocity-Time    →    Acceleration-Time
                SLOPE               SLOPE
                
Velocity-Time    →    Position-Time
               AREA UNDER CURVE
               
Acceleration-Time    →    Velocity-Time
                    AREA UNDER CURVE
```

---

## 🚀 Advanced Projectile Problems

### Problem: Landing on Different Heights

**An object is launched at angle θ with initial speed $v_0$ from height $h_1$ and lands at height $h_2$.**

Setup:
- $\Delta y = h_2 - h_1$
- Use $\Delta y = v_{0y}t - \frac{1}{2}gt^2$
- Solve quadratic for time
- Then find range: $x = v_{0x} \cdot t$

### Problem: Finding Launch Angle for Target

**Hit a target at horizontal distance $R$ and height $h$ above launch point.**

Method:
1. $R = v_0 \cos\theta \cdot t$ → $t = \frac{R}{v_0 \cos\theta}$
2. $h = v_0 \sin\theta \cdot t - \frac{1}{2}gt^2$
3. Substitute and solve for θ (usually gives two solutions)

### Problem: Projectile Hitting Moving Target

**A ball is thrown to hit a cart moving at constant velocity.**

Strategy:
1. Find where the cart will be at various times
2. Determine where projectile lands at various times
3. Set positions equal and solve for launch parameters

---

## 🧮 Dimensional Analysis Review

### Using Units to Check Answers

| Quantity | SI Units | Dimensions |
|----------|----------|------------|
| Position | m | [L] |
| Velocity | m/s | [L][T]⁻¹ |
| Acceleration | m/s² | [L][T]⁻² |
| Time | s | [T] |

### Checking Kinematic Equations

**Example: Check $\Delta x = v_i t + \frac{1}{2}at^2$**

- Left side: $[L]$
- Right side: $[L][T]^{-1} \cdot [T] + [L][T]^{-2} \cdot [T]^2 = [L] + [L] = [L]$ ✓

---

## 📝 Additional Practice Problems

### Problem Set A: One-Dimensional Motion

**1. Meeting Point Problem**
Car A starts from rest and accelerates at 2 m/s². Car B starts 100 m ahead, moving at constant 10 m/s. When do they meet?

**Solution:**
- Position of A: $x_A = \frac{1}{2}(2)t^2 = t^2$
- Position of B: $x_B = 100 + 10t$
- Set equal: $t^2 = 100 + 10t$
- $t^2 - 10t - 100 = 0$
- $t = \frac{10 + \sqrt{100 + 400}}{2} = \frac{10 + 22.4}{2} = 16.2$ s ✓

**2. Two-Stage Rocket**
A rocket accelerates at 15 m/s² for 10 s, then the engine cuts off. How high does it rise?

**Solution:**
- Stage 1: $v_f = 15(10) = 150$ m/s, $h_1 = \frac{1}{2}(15)(10)^2 = 750$ m
- Stage 2: Free fall up, $0 = 150^2 - 2(10)h_2$, $h_2 = 1125$ m
- Total: $750 + 1125 = 1875$ m ✓

### Problem Set B: Projectile Motion

**3. Cliff Jump**
A diver runs horizontally off a 20 m cliff at 5 m/s. How far from the base does she land?

**Solution:**
- Time to fall: $t = \sqrt{\frac{2(20)}{10}} = 2$ s
- Range: $x = 5(2) = 10$ m ✓

**4. Angled Throw**
A ball is thrown at 20 m/s at 53° above horizontal. Find maximum height and range.

**Solution:**
- $v_{0y} = 20(0.8) = 16$ m/s, $v_{0x} = 20(0.6) = 12$ m/s
- Max height: $h = \frac{16^2}{2(10)} = 12.8$ m
- Total time: $t = \frac{2(16)}{10} = 3.2$ s
- Range: $R = 12(3.2) = 38.4$ m ✓

### Problem Set C: Relative Motion

**5. River Crossing**
A boat can travel at 8 m/s in still water. The river flows at 6 m/s. If the boat points directly across, what is the actual velocity and how far downstream does it land if the river is 100 m wide?

**Solution:**
- Actual speed: $v = \sqrt{8^2 + 6^2} = 10$ m/s
- Time to cross: $t = \frac{100}{8} = 12.5$ s
- Downstream drift: $d = 6(12.5) = 75$ m ✓

---

## 🎓 AP Exam FRQ Strategies

### Scoring Guidelines Insight

| What Earns Points | What Loses Points |
|-------------------|-------------------|
| Correct physics principles stated | Wrong formula with no explanation |
| Proper variable definitions | Unexplained numbers appearing |
| Clear mathematical work | Illegible work |
| Units in final answer | Unit errors (especially g = 10 vs 9.8) |
| Reasonable answer checked | Answers without work |

### FRQ Response Template

1. **State the physics principle** (1 point often)
2. **Write the relevant equation** (shows understanding)
3. **Define your variables** (what each symbol means)
4. **Show substitution** (numbers replacing symbols)
5. **Calculate** (show intermediate steps)
6. **Box final answer with units** (easy to find/grade)
7. **Brief reasonableness check** (optional but helpful)

---

## 📚 Conceptual Understanding Check

### True/False with Explanations

| Statement | T/F | Explanation |
|-----------|-----|-------------|
| An object at rest has zero acceleration | T or F | F if forces act on it, T if in equilibrium |
| A ball thrown up is accelerating at the peak | T | Acceleration is always g downward |
| Velocity and acceleration must be in same direction | F | Opposite when slowing down |
| Projectile's horizontal velocity changes | F | No horizontal acceleration (ideal) |
| Objects fall at same rate regardless of mass | T | In vacuum; air resistance changes this |
| Average velocity equals average of velocities | F | Only for constant acceleration |

### Ranking Tasks

**Rank from greatest to least displacement:**
- A: v = 10 m/s for 5 s
- B: v₀ = 0, a = 4 m/s² for 5 s  
- C: v₀ = 20 m/s, a = -2 m/s² for 5 s

**Answer:**
- A: Δx = 10(5) = 50 m
- B: Δx = ½(4)(25) = 50 m
- C: Δx = 20(5) - ½(2)(25) = 100 - 25 = 75 m

**Ranking: C > A = B**

---

## 🔗 Connections to Other AP Physics Units

| Future Unit | Connection to Kinematics |
|-------------|-------------------------|
| **Unit 2: Dynamics** | Forces cause acceleration we studied |
| **Unit 3: Circular Motion** | Centripetal acceleration; projectile at angle |
| **Unit 4: Energy** | Work-energy uses displacement, velocity |
| **Unit 5: Momentum** | Velocity changes in collisions |
| **Unit 6: Rotation** | Angular kinematics mirrors linear |
| **Unit 7: Oscillations** | Position, velocity, acceleration vary with time |

---

## 🏆 Final Exam Preparation Checklist

### Must-Know Equations
- [ ] All 5 kinematic equations memorized
- [ ] Vector component formulas
- [ ] Range and time of flight for projectiles

### Must-Do Problems
- [ ] Solving for unknown using correct equation
- [ ] Multi-step problems with phases
- [ ] Projectile motion (horizontal and angled launch)
- [ ] Graph interpretation and creation

### Must-Understand Concepts
- [ ] Difference between velocity and acceleration
- [ ] When to use each kinematic equation
- [ ] Independence of horizontal and vertical motion
- [ ] What graphs slopes and areas represent

**You're ready to conquer kinematics! 🚀🏆**
