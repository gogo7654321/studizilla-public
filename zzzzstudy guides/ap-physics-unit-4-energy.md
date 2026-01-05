:::GUIDE:::
unit::=4
title::=🚀 Unit 4: Energy Complete Guide
desc::=Master work, kinetic energy, potential energy, conservation of energy, power, and energy analysis for AP Physics 1
diff::=intermediate
time::=70 minutes
tags::=energy;;work;;kinetic-energy;;potential-energy;;conservation;;power;;ap-physics-1
content::=
# ⚡ UNIT 4: ENERGY - WORK, POWER & CONSERVATION

## 📋 TABLE OF CONTENTS
- What is Energy?
- Work (Mechanical)
- Kinetic Energy
- Potential Energy (Gravitational & Elastic)
- Conservation of Energy
- Work-Energy Theorem
- Power
- Energy Bar Charts
- Conservative vs Non-Conservative Forces
- Problem-Solving Strategies

---

## 🌟 WHAT IS ENERGY?

### DEFINITION

**Energy**: The capacity to do work or cause change
- Scalar quantity (no direction)
- Units: Joules (J) where $1 \text{ J} = 1 \text{ N·m} = 1 \text{ kg·m}^2\text{/s}^2$
- Conserved in isolated systems (most important concept!)
- Can be transformed from one form to another

### TYPES OF MECHANICAL ENERGY

| Type | Symbol | Depends On | Formula |
|------|--------|------------|---------|
| **Kinetic Energy** | $KE$ or $K$ | Motion (speed) | $\frac{1}{2}mv^2$ |
| **Gravitational Potential** | $PE_g$ or $U_g$ | Height | $mgh$ |
| **Elastic Potential** | $PE_s$ or $U_s$ | Spring compression | $\frac{1}{2}kx^2$ |

**Total Mechanical Energy:** $E = KE + PE$

💡 **Energy is neither created nor destroyed** - it only transforms! This is the most powerful concept in physics.

---

## 💪 WORK

### DEFINITION

**Work**: Energy transfer due to force acting through displacement

Formula: $$W = Fd\cos\theta = \vec{F} \cdot \vec{d}$$

Where:
- $F$ = force magnitude (N)
- $d$ = displacement magnitude (m)
- $\theta$ = angle between force and displacement
- $W$ = work (J)

### WORK IS A DOT PRODUCT

$W = \vec{F} \cdot \vec{d} = F_x d_x + F_y d_y + F_z d_z$

**Only the component of force parallel to displacement does work!**

### ANGLE DEPENDENCE

| Angle | $\cos\theta$ | Work | Meaning |
|-------|--------------|------|---------|
| **0°** | 1 | $W = Fd$ (maximum) | Force along motion |
| **90°** | 0 | $W = 0$ | Force ⟂ to motion |
| **180°** | -1 | $W = -Fd$ | Force opposite motion |
| **< 90°** | Positive | $W > 0$ | Force has component along motion |
| **> 90°** | Negative | $W < 0$ | Force opposes motion |

### SIGN OF WORK

| Work Sign | Energy Effect | Examples |
|-----------|---------------|----------|
| **Positive (+)** | Increases KE | Applied force accelerating object |
| **Negative (-)** | Decreases KE | Friction, air resistance |
| **Zero (0)** | No change in KE | Normal force, tension in UCM |

### FORCES THAT DO NO WORK

❌ **Normal force** (perpendicular to motion)
❌ **Centripetal force** (perpendicular to velocity in circular motion)
❌ **Carrying object horizontally** (no vertical displacement)
❌ **Static friction** (no displacement)

✅ **Forces that DO work:**
✓ Applied force in direction of motion
✓ Gravity (when object changes height)
✓ Friction (kinetic, opposes motion)
✓ Tension (if object moves along rope)

### WORK BY MULTIPLE FORCES

**Net work:** $W_{net} = W_1 + W_2 + W_3 + ...$

Or: $W_{net} = F_{net} \cdot d \cos\theta$

**Example:**
Push 10 kg box 5 m with 40 N. Friction = 15 N. Find net work.

$W_{applied} = Fd = 40(5) = 200$ J
$W_{friction} = -fd = -15(5) = -75$ J
$W_{net} = 200 + (-75) = 125$ J ✓

---

## 🏃 KINETIC ENERGY

### DEFINITION

**Kinetic Energy (KE)**: Energy of motion

Formula: $$KE = \frac{1}{2}mv^2$$

Where:
- $m$ = mass (kg)
- $v$ = speed (m/s)
- Always **positive** (squared velocity!)

### KEY INSIGHTS

1. **Proportional to mass**: Double mass → Double KE
2. **Proportional to v²**: Double speed → **Quadruple** KE!
3. **Scalar**: No direction (unlike momentum)
4. **Frame dependent**: Different observers measure different KE

### VELOCITY DEPENDENCE

| Speed Change | KE Change | Example |
|--------------|-----------|---------|
| $v → 2v$ | $KE → 4KE$ | 4× the energy |
| $v → 3v$ | $KE → 9KE$ | 9× the energy |
| $v → \frac{v}{2}$ | $KE → \frac{KE}{4}$ | ¼ the energy |

💡 **This is why car crashes at high speed are so devastating!**

### WORK-ENERGY THEOREM

**"The net work done on an object equals its change in kinetic energy."**

$$W_{net} = \Delta KE = KE_f - KE_i$$

$$W_{net} = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$$

**Most powerful equation for solving dynamics problems!**

**Example:**
2 kg object accelerates from 3 m/s to 7 m/s. Find net work done.

$W_{net} = \Delta KE = \frac{1}{2}m(v_f^2 - v_i^2)$
$W_{net} = \frac{1}{2}(2)(7^2 - 3^2) = 1(49 - 9) = 40$ J ✓

---

## 🏔️ GRAVITATIONAL POTENTIAL ENERGY

### DEFINITION

**Gravitational Potential Energy (PE_g)**: Energy due to position in a gravitational field

Formula: $$PE_g = mgh$$

Where:
- $m$ = mass (kg)
- $g = 9.8$ m/s² (or 10 m/s²)
- $h$ = height above reference point (m)

### KEY CHARACTERISTICS

✓ **Depends on height** above reference level
✓ **Reference point is arbitrary** (choose convenient zero)
✓ **Relative**: Only changes matter, not absolute values
✓ **Can be negative** (below reference point)

### REFERENCE LEVELS

| System | Common Reference (h = 0) |
|--------|-------------------------|
| Ball thrown up | Ground level |
| Pendulum | Lowest point |
| Roller coaster | Ground or starting height |
| Object on table | Table surface or floor |

💡 **Only changes in PE matter!** Choose reference that simplifies problem.

### WORK BY GRAVITY

$W_g = -\Delta PE_g = -(mgh_f - mgh_i) = mg(h_i - h_f)$

- **Falling** (h decreases): $W_g > 0$ (gravity does positive work)
- **Rising** (h increases): $W_g < 0$ (gravity does negative work)

**Example:**
5 kg ball lifted from ground to 3 m height. Find change in PE.

$\Delta PE_g = mg\Delta h = 5(10)(3) = 150$ J ✓

---

## 🎯 ELASTIC POTENTIAL ENERGY (SPRINGS)

### HOOKE'S LAW

**"The force exerted by a spring is proportional to its displacement from equilibrium."**

Formula: $$F_s = -kx$$

Where:
- $F_s$ = spring force (N)
- $k$ = spring constant (N/m)
- $x$ = displacement from equilibrium (m)
- Negative sign: force opposes displacement

### ELASTIC POTENTIAL ENERGY

Formula: $$PE_s = \frac{1}{2}kx^2$$

Where:
- $k$ = spring constant (N/m)
- $x$ = displacement from equilibrium (m)
- Always **positive** (squared displacement!)

### SPRING CHARACTERISTICS

| Property | Stiff Spring | Soft Spring |
|----------|--------------|-------------|
| **Spring constant (k)** | Large (1000+ N/m) | Small (10-100 N/m) |
| **Force for same stretch** | Large | Small |
| **Energy stored for same stretch** | Large | Small |
| **Equilibrium length** | No force/energy | No force/energy |

### WORK DONE ON SPRING

To compress/stretch spring from $x_1$ to $x_2$:

$$W = \frac{1}{2}k(x_2^2 - x_1^2) = \Delta PE_s$$

**From equilibrium to displacement x:**
$$W = \frac{1}{2}kx^2$$

### SPRING FORCE DIRECTION

- **Compressed** (x < 0): Spring pushes outward
- **Stretched** (x > 0): Spring pulls inward
- **Equilibrium** (x = 0): No force

💡 **Spring force always acts toward equilibrium position!**

**Example:**
Spring with k = 200 N/m compressed 0.3 m. Find stored energy.

$PE_s = \frac{1}{2}kx^2 = \frac{1}{2}(200)(0.3)^2 = 100(0.09) = 9$ J ✓

---

## ⚖️ CONSERVATION OF ENERGY

### THE LAW

**"In an isolated system with only conservative forces, total mechanical energy is constant."**

$$E_i = E_f$$
$$KE_i + PE_i = KE_f + PE_f$$
$$\frac{1}{2}mv_i^2 + mgh_i = \frac{1}{2}mv_f^2 + mgh_f$$

### WHEN TO USE

✅ **Use conservation when:**
- Only conservative forces (gravity, springs)
- No friction or air resistance
- Isolated system
- Asked about speeds at different positions

❌ **Don't use when:**
- Non-conservative forces present (friction, air resistance)
- External work done on system
- Need forces or accelerations (use F=ma instead)

### WITH NON-CONSERVATIVE FORCES

$$E_i + W_{non-conservative} = E_f$$
$$KE_i + PE_i + W_{friction} = KE_f + PE_f$$

**Note:** $W_{friction}$ is negative (removes energy from system)

### PROBLEM-SOLVING STRATEGY

1. 📍 **Choose reference level** for PE (h = 0)
2. 📋 **List initial energies**: $KE_i$, $PE_{g,i}$, $PE_{s,i}$
3. 📋 **List final energies**: $KE_f$, $PE_{g,f}$, $PE_{s,f}$
4. ➕ **Set equal**: $E_i = E_f$ (or add $W_{nc}$ if friction present)
5. 🧮 **Solve** for unknown
6. ✅ **Check** reasonableness

### ENERGY BAR CHARTS

Visual representation of energy at different positions:

```
Initial:    [████] KE    [██████] PE_g    [  ] PE_s
            
Final:      [████████] KE    [  ] PE_g    [  ] PE_s
```

Height represents energy amount. Useful for visualizing transformations!

**Example:**
Ball dropped from 5 m. Find speed when it hits ground.

$E_i = E_f$
$KE_i + PE_{g,i} = KE_f + PE_{g,f}$
$0 + mgh_i = \frac{1}{2}mv_f^2 + 0$
$gh_i = \frac{1}{2}v_f^2$
$v_f = \sqrt{2gh_i} = \sqrt{2(10)(5)} = \sqrt{100} = 10$ m/s ✓

---

## 🎢 APPLICATIONS OF CONSERVATION

### 1. PENDULUM

At highest point: Maximum PE, Zero KE
At lowest point: Zero PE (if reference), Maximum KE

$$mgh_{max} = \frac{1}{2}mv_{max}^2$$
$$v_{max} = \sqrt{2gh_{max}}$$

### 2. ROLLER COASTER

At top of hill: High PE, Low KE
At bottom of valley: Low PE, High KE

Energy conserved (ignoring friction):
$$mgh_1 + \frac{1}{2}mv_1^2 = mgh_2 + \frac{1}{2}mv_2^2$$

### 3. SPRING LAUNCH

Compressed spring: $PE_s = \frac{1}{2}kx^2$
Released object: $KE = \frac{1}{2}mv^2$

$$\frac{1}{2}kx^2 = \frac{1}{2}mv^2$$
$$v = x\sqrt{\frac{k}{m}}$$

### 4. OBJECT SLIDING DOWN RAMP

With friction:
$$mgh = \frac{1}{2}mv^2 + f \cdot d$$

Without friction:
$$mgh = \frac{1}{2}mv^2$$
$$v = \sqrt{2gh}$$

**Note:** Final speed independent of mass and angle!

**Example:**
Block slides down frictionless 10 m high ramp. Find speed at bottom.

$v = \sqrt{2gh} = \sqrt{2(10)(10)} = \sqrt{200} = 14.1$ m/s ✓

---

## ⚡ POWER

### DEFINITION

**Power**: Rate of energy transfer or work done

Formula: $$P = \frac{W}{t} = \frac{E}{t}$$

Also: $$P = Fv\cos\theta$$

Where:
- $P$ = power (Watts, W)
- $W$ = work (J)
- $t$ = time (s)
- $1 \text{ W} = 1 \text{ J/s}$

### KEY INSIGHTS

1. **Power ≠ Energy**: Power is the *rate* of energy transfer
2. **Same work, less time** → More power
3. **More powerful** = Can do work faster
4. **Constant power**: $W = Pt$

### POWER UNITS

| Unit | Equivalent | Usage |
|------|------------|-------|
| **Watt (W)** | 1 J/s | SI unit |
| **Kilowatt (kW)** | 1000 W | Large appliances |
| **Megawatt (MW)** | 10⁶ W | Power plants |
| **Horsepower (hp)** | 746 W | Engines (1 hp ≈ 750 W) |

### POWER COMPARISONS

| Device/Person | Typical Power |
|---------------|---------------|
| Human (sustained) | 100 W |
| Lightbulb | 10-100 W |
| Microwave | 1000 W (1 kW) |
| Car engine | 75,000-150,000 W |
| Power plant | 10⁹ W (1 GW) |

### POWER AT CONSTANT VELOCITY

For object moving at constant velocity:
$$P = Fv$$

Where:
- $F$ = force applied (N)
- $v$ = velocity (m/s)

**Example:**
Engine produces 60 kW to maintain car at 30 m/s. Find force.

$F = \frac{P}{v} = \frac{60,000}{30} = 2,000$ N ✓

---

## 🔄 CONSERVATIVE VS NON-CONSERVATIVE FORCES

### CONSERVATIVE FORCES

**Definition**: Work done is **path-independent**
- Only initial and final positions matter
- Work in closed loop = 0
- Energy can be stored and recovered

**Examples:**
- ✅ Gravity
- ✅ Spring force
- ✅ Electric force (AP Physics 2)

**Characteristic:** Have associated potential energy

### NON-CONSERVATIVE FORCES

**Definition**: Work done is **path-dependent**
- Path matters, not just endpoints
- Work in closed loop ≠ 0
- Energy cannot be recovered (dissipated as heat)

**Examples:**
- ❌ Friction
- ❌ Air resistance
- ❌ Tension (usually)
- ❌ Normal force (does no work anyway)

**Characteristic:** No associated potential energy

### COMPARISON TABLE

| Property | Conservative | Non-Conservative |
|----------|-------------|------------------|
| **Path dependence** | Independent | Dependent |
| **Closed loop work** | Zero | Non-zero |
| **Energy recovery** | Yes | No (dissipated) |
| **Potential energy** | Yes | No |
| **Mechanical energy** | Conserved | Not conserved |

### WITH FRICTION

$$E_i = E_f + |W_{friction}|$$
$$KE_i + PE_i = KE_f + PE_f + f \cdot d$$

**Note:** Friction always removes energy from mechanical system (becomes thermal)

**Example:**
5 kg block slides 8 m on rough surface (μ = 0.2) starting at 10 m/s. Find final speed.

$\frac{1}{2}mv_i^2 = \frac{1}{2}mv_f^2 + \mu mg d$
$\frac{1}{2}v_i^2 = \frac{1}{2}v_f^2 + \mu g d$
$\frac{1}{2}(100) = \frac{1}{2}v_f^2 + 0.2(10)(8)$
$50 = \frac{1}{2}v_f^2 + 16$
$v_f^2 = 68$
$v_f = 8.25$ m/s ✓

---

## 💡 WORKED EXAMPLES

### Example 1: Roller Coaster

**Problem:** 500 kg cart starts from rest at 20 m height. Find speed at 5 m height (frictionless).

**Solution:**
Reference: ground (h = 0)
$E_i = E_f$
$mgh_i + 0 = mgh_f + \frac{1}{2}mv_f^2$
$gh_i = gh_f + \frac{1}{2}v_f^2$
$10(20) = 10(5) + \frac{1}{2}v_f^2$
$200 = 50 + \frac{1}{2}v_f^2$
$v_f = \sqrt{300} = 17.3$ m/s ✓

### Example 2: Spring Launch

**Problem:** 0.2 kg ball launched by spring (k = 400 N/m) compressed 0.15 m. Find launch speed.

**Solution:**
$PE_s = KE$
$\frac{1}{2}kx^2 = \frac{1}{2}mv^2$
$kx^2 = mv^2$
$v = x\sqrt{\frac{k}{m}} = 0.15\sqrt{\frac{400}{0.2}} = 0.15\sqrt{2000}$
$v = 6.7$ m/s ✓

### Example 3: Work-Energy with Friction

**Problem:** 10 kg box pushed 6 m with 50 N on rough surface (f = 20 N). Starts from rest. Find final speed.

**Solution:**
$W_{net} = \Delta KE$
$(F - f)d = \frac{1}{2}mv_f^2 - 0$
$(50 - 20)(6) = \frac{1}{2}(10)v_f^2$
$180 = 5v_f^2$
$v_f = 6$ m/s ✓

### Example 4: Power

**Problem:** Crane lifts 2000 kg load 15 m in 30 s. Find average power.

**Solution:**
$W = mgh = 2000(10)(15) = 300,000$ J
$P = \frac{W}{t} = \frac{300,000}{30} = 10,000$ W = 10 kW ✓

---

## 🧠 KEY FORMULAS SUMMARY

### Energy
- **Kinetic:** $KE = \frac{1}{2}mv^2$
- **Gravitational Potential:** $PE_g = mgh$
- **Elastic Potential:** $PE_s = \frac{1}{2}kx^2$
- **Total Mechanical:** $E = KE + PE$

### Work
- **Work:** $W = Fd\cos\theta$
- **Work-Energy Theorem:** $W_{net} = \Delta KE$
- **By gravity:** $W_g = -\Delta PE_g$

### Conservation
- **Mechanical Energy:** $KE_i + PE_i = KE_f + PE_f$
- **With friction:** $E_i = E_f + |W_{friction}|$

### Power
- **Power:** $P = \frac{W}{t} = Fv$
- **Units:** 1 W = 1 J/s

### Springs
- **Force:** $F_s = -kx$
- **Potential Energy:** $PE_s = \frac{1}{2}kx^2$

---

## ❌ COMMON MISTAKES TO AVOID

❌ **Confusing work and energy**
✅ Work is energy *transfer*; energy is the *capacity* to do work

❌ **Forgetting work can be negative**
✅ Work opposing motion is negative!

❌ **Using conservation with friction present**
✅ Include friction work: $E_i = E_f + |W_f|$

❌ **Thinking heavier objects fall faster (energy perspective)**
✅ $v = \sqrt{2gh}$ is mass-independent!

❌ **Confusing power with energy**
✅ Power is the *rate* of energy transfer

❌ **Setting KE = PE at all points**
✅ Only total energy is conserved, not individual types

❌ **Forgetting PE is relative to reference**
✅ Choose convenient reference; only ΔPE matters

❌ **Using wrong sign for PE change**
✅ Increasing height → ΔPE positive; Decreasing → negative

---

## 🔥 EXAM STRATEGIES

### WHEN TO USE ENERGY

✅ **Energy methods when:**
- Asked about speeds at different positions
- Only care about initial and final states
- Conservative forces only (or can calculate friction work)
- Problem involves springs or height changes

❌ **Don't use energy for:**
- Finding forces or accelerations (use F=ma)
- Time is involved (use kinematics)
- Need velocity as function of position during motion

### PROBLEM-SOLVING FLOWCHART

1. **Conservative forces only?**
   - YES → Use conservation: $E_i = E_f$
   - NO → Use work-energy: $W_{net} = \Delta KE$

2. **Draw energy bar chart** (initial vs final)

3. **Choose reference** for PE (convenient h = 0)

4. **Write energy equation**

5. **Solve algebraically** before numbers

6. **Check units and reasonableness**

### TIME SAVERS

- Mass often cancels in energy problems!
- $v = \sqrt{2gh}$ for frictionless drops
- Spring launch: $v = x\sqrt{k/m}$
- Pendulum: Energy conserved between endpoints

---

## 📝 PRACTICE CHECKLIST

Before the exam, make sure you can:
- ✅ Calculate work for various force angles
- ✅ Apply work-energy theorem
- ✅ Use conservation of energy correctly
- ✅ Solve problems with springs (Hooke's Law)
- ✅ Handle situations with friction
- ✅ Calculate power in multiple ways
- ✅ Draw and interpret energy bar charts
- ✅ Distinguish conservative vs non-conservative forces
- ✅ Choose appropriate reference levels for PE

---

## 🎯 FINAL TIPS

⚡ **Energy is conserved** - this principle solves countless problems!

🎢 **Think transformations**: PE ↔ KE is the key to roller coasters, pendulums, etc.

🔄 **Work-energy theorem** is often faster than F=ma + kinematics!

📊 **Draw energy bar charts** - visualize before calculating.

🎯 **Choose smart references** - make PE zero somewhere convenient.

💪 **Power = Rate**: Same work in less time needs more power.

🌊 **Mass cancels** in many energy problems - notice when!

⚖️ **Check energy makes sense**: PE increases going up, KE increases speeding up.

🚀 **You've got this!** Energy is one of the most elegant and powerful concepts in physics. Master it and you'll have a tool that works across all of science! 💪

---

## ✨ FINAL THOUGHTS

Energy is the currency of the universe - everything that happens involves energy transformation. From a ball bouncing to a star shining, it's all about energy changing forms while the total remains constant. You're learning the most fundamental conservation law in physics! 🌟

**Remember:** Energy can't be created or destroyed, only transformed. This simple idea explains everything from why roller coasters work to how the Sun powers life on Earth. Master energy and you've mastered one of physics' greatest insights! 🌌

Happy studying! 📚✨
