:::GUIDE:::
unit::=5
title::=🚀 Unit 5: Momentum Complete Guide
desc::=Master momentum, impulse, conservation of momentum, collisions (elastic & inelastic), and center of mass for AP Physics 1
diff::=intermediate
time::=65 minutes
tags::=momentum;;impulse;;collisions;;conservation;;elastic;;inelastic;;center-of-mass;;ap-physics-1
content::=
# 💥 UNIT 5: MOMENTUM & COLLISIONS

## 📋 TABLE OF CONTENTS
- What is Momentum?
- Impulse
- Impulse-Momentum Theorem
- Conservation of Momentum
- Types of Collisions
- Elastic Collisions
- Inelastic Collisions
- Explosions
- Center of Mass
- 2D Collisions
- Problem-Solving Strategies

---

## 🎯 WHAT IS MOMENTUM?

### DEFINITION

**Momentum ($\vec{p}$)**: The quantity of motion an object possesses

Formula: $$\vec{p} = m\vec{v}$$

Where:
- $p$ = momentum (kg·m/s)
- $m$ = mass (kg)
- $v$ = velocity (m/s)
- **Vector quantity** (has direction!)

### KEY CHARACTERISTICS

| Property | Details |
|----------|---------|
| **Type** | Vector (direction matters!) |
| **Units** | kg·m/s or N·s |
| **Depends on** | Mass AND velocity |
| **Direction** | Same as velocity |
| **Always?** | All moving objects have momentum |

### MOMENTUM INSIGHTS

1. **More mass OR more velocity** → More momentum
2. **Direction matters**: Opposite directions → Opposite momenta
3. **Stopped object**: Zero momentum (v = 0)
4. **Can be negative**: Depends on chosen + direction

💡 **Big Idea**: Momentum is "how hard it is to stop something"

### COMPARING MOMENTA

| Object | Mass (kg) | Velocity (m/s) | Momentum (kg·m/s) |
|--------|-----------|----------------|-------------------|
| Baseball | 0.15 | 40 | 6 |
| Bowling ball | 7 | 5 | 35 |
| Car | 1000 | 20 | 20,000 |
| Truck | 5000 | 20 | 100,000 |

**Example:**
2 kg object moving at 5 m/s east.

$\vec{p} = m\vec{v} = 2(5) = 10$ kg·m/s east ✓

---

## 💪 IMPULSE

### DEFINITION

**Impulse ($\vec{J}$)**: Change in momentum due to force over time

Formula: $$\vec{J} = \vec{F}\Delta t = \Delta \vec{p}$$

Where:
- $J$ = impulse (N·s or kg·m/s)
- $F$ = average force (N)
- $\Delta t$ = time interval (s)
- **Vector quantity**

### IMPULSE-MOMENTUM THEOREM

$$\vec{F}\Delta t = \Delta \vec{p} = m\vec{v}_f - m\vec{v}_i$$

**In words**: "Impulse equals change in momentum"

### GRAPHICAL INTERPRETATION

On **Force vs Time** graph:
**Area under curve = Impulse**

```
F |     /\
  |    /  \
  |   /    \
  |  /      \
  |_/________\____
     Time (t)
```

### WHY IMPULSE MATTERS

**Same momentum change can occur with:**
- **Large force, short time** (hitting wall)
- **Small force, long time** (catching with hands)

**Formula rearranged:** $F = \frac{\Delta p}{\Delta t}$

### APPLICATIONS

| Scenario | Strategy | Why |
|----------|----------|-----|
| **Catching ball** | Pull hands back | ↑Δt → ↓F (less painful) |
| **Car airbag** | Extends collision time | ↑Δt → ↓F (less injury) |
| **Karate chop** | Quick strike | ↓Δt → ↑F (break board) |
| **Jumping, bending knees** | Slow the stop | ↑Δt → ↓F (less impact) |
| **Egg drop protection** | Cushioning | ↑Δt → ↓F (egg survives) |

💡 **Key Insight**: Can't change Δp (fixed by velocities), but CAN change force by changing time!

**Example:**
1 kg ball hits wall at 10 m/s, bounces back at 8 m/s. Contact time 0.05 s. Find average force.

$\Delta p = m(v_f - v_i) = 1(-8 - 10) = -18$ kg·m/s (taking initial direction as +)
$F = \frac{\Delta p}{\Delta t} = \frac{-18}{0.05} = -360$ N (negative = wall pushes opposite to initial motion) ✓

---

## ⚖️ CONSERVATION OF MOMENTUM

### THE LAW

**"In an isolated system with no external forces, total momentum is conserved."**

$$\vec{p}_{total,i} = \vec{p}_{total,f}$$
$$m_1\vec{v}_{1i} + m_2\vec{v}_{2i} = m_1\vec{v}_{1f} + m_2\vec{v}_{2f}$$

### WHEN TO USE

✅ **Use conservation when:**
- Collisions or explosions
- No external forces (or they cancel)
- Internal forces only (N3L pairs)
- Need final velocities

❌ **Don't use when:**
- External forces present (friction, applied forces)
- Need forces during collision (use impulse)
- Only one object (nothing to conserve with)

### ISOLATED SYSTEM

**Requirements:**
- $\sum \vec{F}_{external} = 0$ (no net external force)
- Internal forces are N3L pairs (cancel in sum)

**Examples of isolated systems:**
✓ Two ice skaters pushing off
✓ Collision on frictionless surface
✓ Explosion breaking object apart
✗ Collision with friction present
✗ Rocket in gravity field (external force)

### COMPONENT FORM

For 2D problems:
$$p_{x,i} = p_{x,f} \quad \text{(x-component conserved)}$$
$$p_{y,i} = p_{y,f} \quad \text{(y-component conserved)}$$

### COMPARISON: MOMENTUM vs ENERGY

| Property | Momentum | Energy |
|----------|----------|--------|
| **Always conserved?** | In isolated system | Only with conservative forces |
| **Vector/Scalar** | Vector | Scalar |
| **Collisions** | Always conserved | Only in elastic collisions |
| **With friction** | Not conserved | Not conserved (mechanical) |

💡 **Critical**: Momentum conserved in ALL collisions; Energy only in elastic!

**Example:**
5 kg cart moving 4 m/s collides with stationary 3 kg cart. They stick. Find final velocity.

$m_1v_{1i} + m_2v_{2i} = (m_1 + m_2)v_f$
$5(4) + 3(0) = (5 + 3)v_f$
$20 = 8v_f$
$v_f = 2.5$ m/s ✓

---

## 🎯 TYPES OF COLLISIONS

### CLASSIFICATION

| Type | Characteristics | KE Conserved? | p Conserved? |
|------|----------------|---------------|--------------|
| **Elastic** | Objects bounce apart | ✅ YES | ✅ YES |
| **Inelastic** | Objects bounce apart (some KE lost) | ❌ NO | ✅ YES |
| **Perfectly Inelastic** | Objects stick together | ❌ NO (max loss) | ✅ YES |

### PERFECTLY INELASTIC

**Definition**: Objects stick together after collision
- **Maximum KE loss** (but some KE remains)
- **Same final velocity**: $v_f$ for both objects
- **Momentum still conserved**

Formula: $m_1v_{1i} + m_2v_{2i} = (m_1 + m_2)v_f$

### INELASTIC

**Definition**: Objects separate but KE is lost
- Some KE converted to heat, sound, deformation
- Objects have different final velocities
- Momentum conserved

### ELASTIC

**Definition**: Objects bounce apart with no KE loss
- Ideal collisions (rare in real world)
- Both momentum AND kinetic energy conserved
- Billiard balls, atoms (approximately elastic)

### ENERGY LOSS IN COLLISIONS

| Collision Type | KE Before | KE After | Energy Lost |
|---------------|-----------|----------|-------------|
| **Elastic** | 100 J | 100 J | 0 J |
| **Inelastic** | 100 J | 60 J | 40 J (heat, sound) |
| **Perfectly Inelastic** | 100 J | 30 J | 70 J (maximum loss) |

💡 **All collisions conserve momentum!** Energy is different story.

---

## 🎱 ELASTIC COLLISIONS

### CONSERVATION EQUATIONS

**1. Momentum conserved:**
$$m_1v_{1i} + m_2v_{2i} = m_1v_{1f} + m_2v_{2f}$$

**2. Kinetic energy conserved:**
$$\frac{1}{2}m_1v_{1i}^2 + \frac{1}{2}m_2v_{2i}^2 = \frac{1}{2}m_1v_{1f}^2 + \frac{1}{2}m_2v_{2f}^2$$

**Two equations, two unknowns** ($v_{1f}$ and $v_{2f}$)

### SPECIAL CASES

#### Equal Masses (m₁ = m₂)

**Head-on collision:** Objects **exchange velocities**
- Object 1: $v_{1f} = v_{2i}$
- Object 2: $v_{2f} = v_{1i}$

**Example:** Billiard balls of equal mass swap speeds!

#### One Object Initially at Rest (v₂ᵢ = 0)

**General formulas:**
$$v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}v_{1i}$$
$$v_{2f} = \frac{2m_1}{m_1 + m_2}v_{1i}$$

#### Very Massive Target (m₂ >> m₁, v₂ᵢ = 0)

- Light object bounces back: $v_{1f} \approx -v_{1i}$ (reverses)
- Heavy object barely moves: $v_{2f} \approx 0$

**Example:** Ball bouncing off wall

#### Very Massive Projectile (m₁ >> m₂, v₂ᵢ = 0)

- Heavy object continues: $v_{1f} \approx v_{1i}$
- Light object flies away: $v_{2f} \approx 2v_{1i}$

**Example:** Bowling ball hitting ping pong ball

### ELASTIC COLLISION SUMMARY

| m₁ vs m₂ | m₂ initially at rest | Result |
|----------|---------------------|--------|
| **m₁ = m₂** | Yes | Exchange velocities |
| **m₁ >> m₂** | Yes | m₁ continues, m₂ flies at 2v₁ᵢ |
| **m₁ << m₂** | Yes | m₁ bounces back, m₂ barely moves |

**Example:**
2 kg ball at 6 m/s hits stationary 2 kg ball (elastic). Find final velocities.

Equal masses → exchange velocities
$v_{1f} = 0$ m/s
$v_{2f} = 6$ m/s ✓

---

## 💥 PERFECTLY INELASTIC COLLISIONS

### KEY EQUATION

Objects stick together: **Same final velocity**

$$m_1v_{1i} + m_2v_{2i} = (m_1 + m_2)v_f$$

Solve for final velocity:
$$v_f = \frac{m_1v_{1i} + m_2v_{2i}}{m_1 + m_2}$$

### KINETIC ENERGY LOSS

Initial KE: $KE_i = \frac{1}{2}m_1v_{1i}^2 + \frac{1}{2}m_2v_{2i}^2$

Final KE: $KE_f = \frac{1}{2}(m_1 + m_2)v_f^2$

**Energy lost**: $\Delta KE = KE_f - KE_i$ (always negative!)

### APPLICATIONS

| Scenario | Type |
|----------|------|
| Car crash (cars crumple together) | Perfectly inelastic |
| Clay balls colliding | Perfectly inelastic |
| Bullet embedding in block | Perfectly inelastic |
| Asteroid impact | Perfectly inelastic |
| Football tackle | Perfectly inelastic |

💡 **Most real collisions** are somewhere between perfectly inelastic and elastic!

### BALLISTIC PENDULUM

**Classic problem**: Bullet embeds in block, block swings up.

**Step 1**: Bullet enters (perfectly inelastic)
- Momentum conserved: $m_b v_b = (m_b + m_B)v_f$

**Step 2**: Block swings (energy conserved)
- Energy conserved: $\frac{1}{2}(m_b + m_B)v_f^2 = (m_b + m_B)gh$

Combine to find bullet's initial speed!

**Example:**
4 kg cart at 8 m/s collides and sticks with 2 kg cart at 2 m/s (same direction). Find final velocity.

$v_f = \frac{m_1v_{1i} + m_2v_{2i}}{m_1 + m_2} = \frac{4(8) + 2(2)}{4 + 2} = \frac{36}{6} = 6$ m/s ✓

---

## 💣 EXPLOSIONS

### CHARACTERISTICS

**Explosion**: Internal forces push objects apart
- **Before**: Objects together (or at rest)
- **After**: Objects separate
- **Momentum conserved**: $\vec{p}_i = \vec{p}_f$
- **Energy added**: Chemical/stored energy → KE

### SPECIAL CASE: Starting at Rest

If total initial momentum is zero:
$$0 = m_1\vec{v}_{1f} + m_2\vec{v}_{2f}$$
$$m_1\vec{v}_{1f} = -m_2\vec{v}_{2f}$$

**Objects move in opposite directions with momenta of equal magnitude!**

### VELOCITY RELATIONSHIP

$$\frac{v_1}{v_2} = \frac{m_2}{m_1}$$

**Inverse relationship**: Lighter object moves faster!

### EXPLOSION EXAMPLES

| Scenario | Initial p | Final p |
|----------|-----------|---------|
| **Cannon firing** | 0 | Cannon recoils ← Ball flies → |
| **Firework exploding** | Moving up | Fragments spread out |
| **Ice skaters pushing** | 0 | Both move apart |
| **Rocket ejecting gas** | 0 | Rocket up ↑ Gas down ↓ |

**Example:**
1000 kg cannon fires 5 kg ball at 400 m/s. Find cannon's recoil velocity.

$0 = m_{cannon}v_{cannon} + m_{ball}v_{ball}$
$0 = 1000v_{cannon} + 5(400)$
$v_{cannon} = -2$ m/s (opposite direction to ball) ✓

---

## 📍 CENTER OF MASS

### DEFINITION

**Center of Mass (CM)**: Point where all mass can be considered concentrated
- Average position of mass in system
- Motion of system as a whole
- **Moves as if all forces act on it**

### FORMULA (1D)

$$x_{cm} = \frac{m_1x_1 + m_2x_2 + ...}{m_1 + m_2 + ...} = \frac{\sum m_ix_i}{\sum m_i}$$

### FORMULA (2D)

$$x_{cm} = \frac{\sum m_ix_i}{M_{total}}$$
$$y_{cm} = \frac{\sum m_iy_i}{M_{total}}$$

### VELOCITY OF CENTER OF MASS

$$\vec{v}_{cm} = \frac{m_1\vec{v}_1 + m_2\vec{v}_2 + ...}{m_1 + m_2 + ...}$$

### KEY PROPERTIES

1. **No external forces**: CM moves at constant velocity
2. **External force**: CM accelerates by $\vec{F}_{ext} = M_{total}\vec{a}_{cm}$
3. **Internal forces**: Don't affect CM motion
4. **Explosion/collision**: CM velocity unchanged!

### CENTER OF MASS IN COLLISIONS

**Critical Insight**: Regardless of collision type (elastic, inelastic), **CM velocity stays constant**!

**Before and after any collision:**
$$\vec{v}_{cm} = \frac{m_1\vec{v}_{1i} + m_2\vec{v}_{2i}}{m_1 + m_2} = \frac{m_1\vec{v}_{1f} + m_2\vec{v}_{2f}}{m_1 + m_2}$$

💡 **CM motion is independent of internal interactions!**

**Example:**
3 kg mass at position 2 m, 5 kg mass at position 8 m. Find CM position.

$x_{cm} = \frac{m_1x_1 + m_2x_2}{m_1 + m_2} = \frac{3(2) + 5(8)}{3 + 5} = \frac{46}{8} = 5.75$ m ✓

---

## 🎯 2D COLLISIONS

### MOMENTUM CONSERVATION IN 2D

**x-component:** $p_{x,i} = p_{x,f}$
**y-component:** $p_{y,i} = p_{y,f}$

### STRATEGY

1. **Set up coordinates** (usually x = initial direction)
2. **Break velocities** into components
3. **Apply conservation** to each axis separately
4. **Solve system** of two equations

### COMMON SCENARIO: Glancing Collision

Object 1 hits stationary object 2, both scatter at angles.

**x-direction:**
$$m_1v_{1i} = m_1v_{1f}\cos\theta_1 + m_2v_{2f}\cos\theta_2$$

**y-direction:**
$$0 = m_1v_{1f}\sin\theta_1 - m_2v_{2f}\sin\theta_2$$

(Assuming object 2 initially at rest)

### ELASTIC 2D SPECIAL CASE

**Equal masses, one at rest:**
- After collision, objects move at **90° to each other**!
- $\theta_1 + \theta_2 = 90°$

**Example:** Billiard ball hits stationary ball → they separate at right angle

**Example:**
2 kg ball moving at 5 m/s (x-direction) hits stationary 2 kg ball. After collision, first ball moves at 3 m/s at 30° above x-axis. Find second ball's velocity.

**x-component:**
$2(5) = 2(3)\cos(30°) + 2v_{2f}\cos\theta_2$
$10 = 5.2 + 2v_{2f}\cos\theta_2$
$2v_{2f}\cos\theta_2 = 4.8$

**y-component:**
$0 = 2(3)\sin(30°) - 2v_{2f}\sin\theta_2$
$2v_{2f}\sin\theta_2 = 3$

Solve system → $v_{2f} \approx 2.87$ m/s, $\theta_2 \approx -32°$ (below x-axis) ✓

---

## 🧮 PROBLEM-SOLVING STRATEGIES

### GENERAL APPROACH

1. **📊 Draw diagram** showing before and after
2. **🔍 Identify system** (what objects?)
3. **✅ Check isolation** (external forces?)
4. **➕ Choose + direction** (usually initial motion)
5. **📝 Write conservation**: $\sum p_i = \sum p_f$
6. **🧮 Solve** for unknown
7. **✅ Check** sign and reasonableness

### COLLISION CHECKLIST

- [ ] Draw before/after diagrams with velocities
- [ ] Assign positive direction
- [ ] Write momentum conservation equation
- [ ] If elastic: also write energy conservation
- [ ] If perfectly inelastic: set final velocities equal
- [ ] Solve algebraically before substituting numbers
- [ ] Check if answer makes physical sense

### COMMON PROBLEM TYPES

| Problem Type | Key Strategy |
|--------------|--------------|
| **Perfectly inelastic** | Objects stick: same $v_f$ |
| **Elastic, equal masses** | Exchange velocities |
| **Explosion from rest** | Momenta equal and opposite |
| **Ballistic pendulum** | Momentum then energy |
| **2D collision** | Separate into x and y components |

---

## 💡 WORKED EXAMPLES

### Example 1: Perfectly Inelastic

**Problem:** 1500 kg car at 20 m/s rear-ends 1000 kg car at 15 m/s (same direction). They lock bumpers. Find final velocity and energy lost.

**Solution:**
$v_f = \frac{m_1v_{1i} + m_2v_{2i}}{m_1 + m_2} = \frac{1500(20) + 1000(15)}{2500} = \frac{45000}{2500} = 18$ m/s ✓

$KE_i = \frac{1}{2}(1500)(20)^2 + \frac{1}{2}(1000)(15)^2 = 300,000 + 112,500 = 412,500$ J
$KE_f = \frac{1}{2}(2500)(18)^2 = 405,000$ J
$\Delta KE = -7,500$ J (lost to crumpling, heat) ✓

### Example 2: Elastic, One at Rest

**Problem:** 3 kg ball at 8 m/s hits stationary 1 kg ball elastically. Find final velocities.

**Solution:**
$v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}v_{1i} = \frac{3-1}{3+1}(8) = \frac{2}{4}(8) = 4$ m/s ✓

$v_{2f} = \frac{2m_1}{m_1 + m_2}v_{1i} = \frac{2(3)}{4}(8) = \frac{6}{4}(8) = 12$ m/s ✓

### Example 3: Explosion

**Problem:** 60 kg astronaut and 40 kg tool box initially at rest. Astronaut pushes box, which moves at 3 m/s. Find astronaut's velocity.

**Solution:**
$0 = m_av_a + m_bv_b$
$0 = 60v_a + 40(3)$
$v_a = -2$ m/s (opposite direction to box) ✓

### Example 4: Impulse

**Problem:** 0.4 kg baseball moving at 30 m/s is hit back at 40 m/s. Bat in contact for 0.001 s. Find average force.

**Solution:**
Taking initial direction as +:
$\Delta p = m(v_f - v_i) = 0.4(-40 - 30) = 0.4(-70) = -28$ kg·m/s
$F = \frac{\Delta p}{\Delta t} = \frac{-28}{0.001} = -28,000$ N (force by bat opposite to initial motion) ✓
Magnitude: 28,000 N = 28 kN!

---

## 🧠 KEY FORMULAS SUMMARY

### Momentum & Impulse
- **Momentum:** $\vec{p} = m\vec{v}$
- **Impulse:** $\vec{J} = \vec{F}\Delta t = \Delta\vec{p}$
- **Impulse-Momentum:** $\vec{F}\Delta t = m\vec{v}_f - m\vec{v}_i$

### Conservation
- **Momentum Conservation:** $\sum p_i = \sum p_f$
- **Two objects:** $m_1v_{1i} + m_2v_{2i} = m_1v_{1f} + m_2v_{2f}$

### Collisions
- **Perfectly Inelastic:** $m_1v_{1i} + m_2v_{2i} = (m_1+m_2)v_f$
- **Elastic (general):** Conserve both p and KE
- **Elastic (equal mass, one at rest):** Exchange velocities

### Center of Mass
- **Position:** $x_{cm} = \frac{\sum m_ix_i}{\sum m_i}$
- **Velocity:** $v_{cm} = \frac{\sum m_iv_i}{\sum m_i}$

---

## ❌ COMMON MISTAKES TO AVOID

❌ **Forgetting momentum is a vector**
✅ Pay attention to directions (use + and - signs)

❌ **Thinking KE is conserved in all collisions**
✅ Only elastic collisions conserve KE; ALL conserve momentum

❌ **Using energy conservation in inelastic collisions**
✅ Only use momentum conservation (unless told "elastic")

❌ **Confusing impulse with force**
✅ Impulse = Force × Time (not just force)

❌ **Not checking if system is isolated**
✅ External forces → momentum NOT conserved

❌ **In perfectly inelastic, not setting velocities equal**
✅ Key feature: objects stick together (same $v_f$)

❌ **Forgetting signs in explosions**
✅ Objects move in opposite directions

❌ **Mixing up mass and velocity relationships**
✅ Same momentum: heavier → slower, lighter → faster

---

## 🔥 EXAM STRATEGIES

### MOMENTUM vs ENERGY - WHEN TO USE WHAT?

| Use Momentum When... | Use Energy When... |
|---------------------|-------------------|
| Collisions | Heights involved |
| Explosions | Springs involved |
| Need velocities after event | Frictionless motion |
| External forces cancel | Conservative forces only |

### FOR FREE RESPONSE

1. **Always draw before/after diagrams**
2. **Label all masses and velocities clearly**
3. **Show momentum is conserved** (write equation)
4. **Include units** in every step
5. **For elastic**: Must show both p and KE conserved

### QUICK CHECKS

- Does momentum point right direction?
- If perfectly inelastic, is $v_f$ between initial speeds?
- If elastic with equal masses, did they swap speeds?
- In explosion, do momenta point opposite ways?
- Is energy lost in inelastic collision? (Should be!)

---

## 📝 PRACTICE CHECKLIST

Before the exam, make sure you can:
- ✅ Calculate momentum as a vector
- ✅ Apply impulse-momentum theorem
- ✅ Use conservation of momentum correctly
- ✅ Distinguish elastic, inelastic, and perfectly inelastic
- ✅ Solve perfectly inelastic collision problems
- ✅ Solve elastic collision problems
- ✅ Analyze explosions
- ✅ Find center of mass
- ✅ Handle 2D collisions

---

## 🎯 FINAL TIPS

💥 **Momentum is ALWAYS conserved** in isolated systems - memorize this!

🎯 **Direction matters** - momentum is a vector!

⚡ **Impulse = changing momentum** - same Δp, different time → different force.

🎱 **Equal masses in elastic collision** → exchange velocities (easy!).

💥 **Perfectly inelastic loses most KE** but still conserves momentum.

🚀 **Explosions**: lighter objects fly faster, heavier move slower.

📊 **Draw diagrams** - before and after with arrows for velocities.

🧮 **Check algebra** before plugging numbers - catch errors early!

⚖️ **Center of mass** moves as if all forces act on it - powerful concept!

🎯 **You've got this!** Momentum is one of the most fundamental conserved quantities in physics. Master it and you understand collisions from atoms to galaxies! 💪

---

## ✨ FINAL THOUGHTS

Momentum conservation is one of nature's most fundamental laws - it holds from subatomic particles to colliding galaxies. Every collision, explosion, and interaction follows these rules. You're learning a principle that governs the universe! 🌟

**Remember:** While energy can be lost to heat and sound, momentum is always conserved in isolated systems. This makes momentum your most reliable tool for analyzing interactions! 🌌

Happy studying! 📚✨
