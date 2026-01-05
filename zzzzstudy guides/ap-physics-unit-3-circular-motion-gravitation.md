:::GUIDE:::
unit::=3
title::=🚀 Unit 3: Circular Motion and Gravitation Complete Guide
desc::=Master centripetal force, uniform circular motion, gravitational force, orbits, and Kepler's Laws for AP Physics 1
diff::=intermediate
time::=55 minutes
tags::=circular-motion;;centripetal-force;;gravitation;;orbits;;keplers-laws;;ap-physics-1
content::=
# 🌍 UNIT 3: CIRCULAR MOTION & GRAVITATION

## 📋 TABLE OF CONTENTS
- Uniform Circular Motion (UCM)
- Centripetal Acceleration
- Centripetal Force
- Common Circular Motion Scenarios
- Vertical Circles
- Universal Gravitation
- Gravitational Field
- Orbital Motion
- Kepler's Laws
- Satellites and Orbits

---

## 🎡 UNIFORM CIRCULAR MOTION (UCM)

### DEFINITION

**Uniform Circular Motion**: Object moving in a circle at constant speed
- **Speed is constant** (magnitude)
- **Velocity is NOT constant** (direction changes)
- Acceleration is present! (direction changes → velocity changes)

### KEY CHARACTERISTICS

| Property | Value/Direction |
|----------|----------------|
| **Speed** | Constant magnitude |
| **Velocity** | Constant magnitude, changing direction |
| **Acceleration** | Toward center (centripetal) |
| **Net Force** | Toward center (centripetal) |

💡 **Critical Insight**: Even at constant speed, circular motion requires acceleration!

### PERIOD & FREQUENCY

**Period (T)**: Time for one complete revolution
- Units: seconds (s)
- Symbol: $T$

**Frequency (f)**: Number of revolutions per second
- Units: Hertz (Hz) or s⁻¹
- Symbol: $f$

**Relationship:** $f = \frac{1}{T}$ or $T = \frac{1}{f}$

### ANGULAR VELOCITY

**Angular velocity (ω)**: Rate of angular displacement
- Units: radians/second (rad/s)
- Symbol: $\omega$ (omega)

**Formula:** $\omega = \frac{2\pi}{T} = 2\pi f$

### SPEED IN CIRCULAR MOTION

**Tangential speed (v)**: Linear speed along the circle

Formulas:
- $v = \frac{2\pi r}{T}$ (circumference / period)
- $v = 2\pi r f$ (circumference × frequency)
- $v = r\omega$ (radius × angular velocity)

Where $r$ = radius of circle

**Example:**
A car goes around a 50 m radius track in 20 seconds. Find speed.

$v = \frac{2\pi r}{T} = \frac{2\pi(50)}{20} = 5\pi \approx 15.7$ m/s ✓

---

## 🎯 CENTRIPETAL ACCELERATION

### DEFINITION

**Centripetal Acceleration ($a_c$)**: Acceleration toward center of circle
- **Always points** toward center
- **Perpendicular** to velocity
- Changes **direction** of velocity (not magnitude)

### FORMULAS

$$a_c = \frac{v^2}{r} = r\omega^2 = 4\pi^2rf^2 = \frac{4\pi^2r}{T^2}$$

Most common: $a_c = \frac{v^2}{r}$

### FORMULA SELECTION

| Given | Use Formula |
|-------|-------------|
| Speed (v) and radius | $a_c = \frac{v^2}{r}$ |
| Angular velocity (ω) and radius | $a_c = r\omega^2$ |
| Period (T) and radius | $a_c = \frac{4\pi^2r}{T^2}$ |
| Frequency (f) and radius | $a_c = 4\pi^2rf^2$ |

### DIRECTION

🎯 **Always toward center** of circle
- Not in direction of motion
- Not "outward" (no centrifugal force in inertial frame!)
- Perpendicular to velocity vector

**Example:**
Ball on 2 m string moving at 6 m/s. Find centripetal acceleration.

$a_c = \frac{v^2}{r} = \frac{6^2}{2} = \frac{36}{2} = 18$ m/s² (toward center) ✓

---

## 💪 CENTRIPETAL FORCE

### DEFINITION

**Centripetal Force ($F_c$)**: Net force toward center causing circular motion
- **NOT a new type of force!**
- It's the NET force from existing forces
- **Always toward center**

### FORMULA

$$F_c = ma_c = \frac{mv^2}{r} = mr\omega^2$$

From Newton's 2nd Law: $F_c = ma_c$

### WHAT PROVIDES CENTRIPETAL FORCE?

| Situation | Centripetal Force Provided By |
|-----------|-------------------------------|
| Car turning | Friction between tires and road |
| Moon orbiting Earth | Gravitational force |
| Ball on string | Tension in string |
| Loop-the-loop | Normal force + component of weight |
| Banked curve | Component of normal force |
| Clothes in dryer | Normal force from drum |

💡 **Key Concept**: Centripetal force is provided by real forces (tension, friction, gravity, normal, etc.)

### PROBLEM-SOLVING STRATEGY

1. **Draw FBD** showing all real forces
2. **Choose coordinates**: Radial (toward center) and tangential
3. **Apply F=ma** in radial direction: $\sum F_r = \frac{mv^2}{r}$
4. **Identify** which force(s) provide $F_c$
5. **Solve** for unknown

**Example:**
0.5 kg ball swung in horizontal circle, radius 1.5 m, at 4 m/s. Find tension.

$T = F_c = \frac{mv^2}{r} = \frac{0.5(4)^2}{1.5} = \frac{8}{1.5} = 5.33$ N ✓

---

## 🎢 COMMON CIRCULAR MOTION SCENARIOS

### 1. CAR ON FLAT CURVE

**Centripetal force = Friction**

$f = \frac{mv^2}{r}$

**Maximum speed** without slipping:
$f_{max} = \mu_s N = \mu_s mg$

$v_{max} = \sqrt{\mu_s gr}$

**Example:**
Car on curve with radius 50 m, $\mu_s = 0.6$. Find max safe speed.

$v_{max} = \sqrt{0.6(10)(50)} = \sqrt{300} \approx 17.3$ m/s ✓

### 2. BANKED CURVE (No Friction)

**Normal force provides centripetal force**

For banking angle $\theta$:
$\tan\theta = \frac{v^2}{rg}$

- Designed for specific speed
- Cars can turn without friction
- Safer in ice/rain

**Example:**
Bank angle for 100 m radius curve at 20 m/s?

$\tan\theta = \frac{20^2}{100(10)} = \frac{400}{1000} = 0.4$
$\theta = \tan^{-1}(0.4) \approx 22°$ ✓

### 3. BALL ON STRING (Horizontal Circle)

**Tension provides centripetal force**

$T = \frac{mv^2}{r}$

If string breaks: Object flies off **tangent** to circle (not radially outward!)

### 4. CONICAL PENDULUM

Ball on string moves in horizontal circle while string makes angle $\theta$ with vertical.

**Vertical equilibrium:**
$T\cos\theta = mg$

**Horizontal (centripetal):**
$T\sin\theta = \frac{mv^2}{r}$

**Divide equations:**
$\tan\theta = \frac{v^2}{rg}$

---

## 🎪 VERTICAL CIRCLES

### AT THE TOP

Forces toward center:
$F_c = F_g + N = mg + N$

$\frac{mv^2}{r} = mg + N$

**Minimum speed** at top (when N = 0):
$v_{min} = \sqrt{gr}$

If slower than this: String goes slack or object falls!

### AT THE BOTTOM

Forces toward center:
$F_c = N - F_g = N - mg$

$\frac{mv^2}{r} = N - mg$

$N = mg + \frac{mv^2}{r}$ (tension maximum here!)

### AT THE SIDE

Only horizontal component of tension provides $F_c$
Weight doesn't contribute to centripetal force

### VERTICAL CIRCLE SUMMARY

| Position | Net Force Toward Center | Speed Needed |
|----------|------------------------|--------------|
| **Top** | $N + mg$ | Minimum (lowest) |
| **Bottom** | $N - mg$ | Maximum (highest) |
| **Side** | $N$ (horizontally) | Medium |

💡 **Energy conservation** determines speeds at different heights!

**Example:**
Ball on 0.8 m string. Minimum speed at top of vertical circle?

$v_{min} = \sqrt{gr} = \sqrt{10(0.8)} = \sqrt{8} \approx 2.83$ m/s ✓

---

## 🌌 UNIVERSAL GRAVITATION

### NEWTON'S LAW OF UNIVERSAL GRAVITATION

**"Every mass attracts every other mass with a force proportional to their masses and inversely proportional to the square of the distance between them."**

Formula: $$F_g = G\frac{m_1m_2}{r^2}$$

Where:
- $F_g$ = gravitational force (N)
- $G = 6.67 \times 10^{-11}$ N·m²/kg² (universal constant)
- $m_1, m_2$ = masses (kg)
- $r$ = distance between centers (m)

### KEY CHARACTERISTICS

| Property | Details |
|----------|---------|
| **Type** | Always attractive (never repulsive) |
| **Range** | Infinite (but weakens with distance) |
| **Action-Reaction** | Equal and opposite (N3L) |
| **Distance dependence** | Inverse square law: $F \propto \frac{1}{r^2}$ |

### INVERSE SQUARE LAW

If distance doubles: $r → 2r$
Force becomes: $F → \frac{F}{4}$ (¼ of original)

If distance triples: $r → 3r$
Force becomes: $F → \frac{F}{9}$ (1/9 of original)

**General:** $\frac{F_2}{F_1} = \left(\frac{r_1}{r_2}\right)^2$

### GRAVITATIONAL CONSTANT

$G = 6.67 \times 10^{-11}$ N·m²/kg²

- Very small number!
- Gravity is weakest fundamental force
- Same everywhere in universe

**Example:**
Two 1000 kg masses 10 m apart. Find gravitational force.

$F_g = G\frac{m_1m_2}{r^2} = 6.67 \times 10^{-11} \frac{(1000)(1000)}{10^2}$
$F_g = 6.67 \times 10^{-11} \times 10^4 = 6.67 \times 10^{-7}$ N (tiny!) ✓

---

## 🌍 GRAVITATIONAL FIELD

### DEFINITION

**Gravitational Field (g)**: Force per unit mass at a location

Formula: $$g = \frac{F_g}{m} = \frac{GM}{r^2}$$

Where:
- $M$ = mass creating field (e.g., Earth)
- $r$ = distance from center of M

### AT EARTH'S SURFACE

$g = \frac{GM_E}{R_E^2} = 9.8$ m/s²

Where:
- $M_E = 5.97 \times 10^{24}$ kg (Earth's mass)
- $R_E = 6.37 \times 10^6$ m (Earth's radius)

### VARIATION WITH ALTITUDE

At height $h$ above surface:
$$g_h = \frac{GM_E}{(R_E + h)^2}$$

**Ratio:** $\frac{g_h}{g_0} = \left(\frac{R_E}{R_E + h}\right)^2$

### GRAVITATIONAL FIELD COMPARISON

| Location | g (m/s²) | Relative to Earth |
|----------|----------|-------------------|
| **Earth surface** | 9.8 | 1.0 |
| **Moon surface** | 1.6 | 0.16 |
| **Mars surface** | 3.7 | 0.38 |
| **Jupiter surface** | 25 | 2.5 |
| **Sun surface** | 274 | 28 |

💡 Your weight = $mg$, so weight changes with g, but mass stays the same!

**Example:**
At 2 Earth radii from center, what is g?

$r = 2R_E$
$g = \frac{GM_E}{(2R_E)^2} = \frac{GM_E}{4R_E^2} = \frac{1}{4}g_0 = 2.45$ m/s² ✓

---

## 🛰️ ORBITAL MOTION

### SATELLITES IN ORBIT

For circular orbit:
**Gravitational force = Centripetal force**

$$\frac{GMm}{r^2} = \frac{mv^2}{r}$$

Simplifies to: $$v = \sqrt{\frac{GM}{r}}$$

### ORBITAL SPEED

$$v_{orbit} = \sqrt{\frac{GM}{r}}$$

**Key Insight:** Orbital speed depends on:
- ✓ Mass of central body (M)
- ✓ Orbital radius (r)
- ✗ NOT on satellite's mass (m)!

**Closer orbit** → **Faster speed**
**Farther orbit** → **Slower speed**

### ORBITAL PERIOD

$$T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM}}$$

Or: $$T^2 = \frac{4\pi^2}{GM}r^3$$

### ORBITAL ENERGY

**Total mechanical energy:**
$$E = -\frac{GMm}{2r}$$

- Negative (bound orbit)
- Half the gravitational potential energy
- More negative = more tightly bound

### GEOSYNCHRONOUS ORBIT

- **Period = 24 hours** (1 Earth day)
- Stays above same point on Earth
- Orbital radius ≈ 42,000 km from center (≈ 36,000 km altitude)
- Used for communication satellites

**Example:**
Find orbital speed of ISS at 400 km altitude. ($R_E = 6400$ km, $M_E = 6 \times 10^{24}$ kg)

$r = R_E + h = 6400 + 400 = 6800$ km $= 6.8 \times 10^6$ m
$v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{6.67 \times 10^{-11} \times 6 \times 10^{24}}{6.8 \times 10^6}}$
$v \approx 7,700$ m/s $\approx 7.7$ km/s ✓

---

## 🪐 KEPLER'S THREE LAWS

### KEPLER'S FIRST LAW: Law of Orbits

**"Planets orbit the Sun in ellipses, with the Sun at one focus."**

- Orbits are ellipses (not perfect circles)
- Sun is at one of two foci
- Closest point: **Perihelion**
- Farthest point: **Aphelion**

### KEPLER'S SECOND LAW: Law of Areas

**"A line joining a planet and the Sun sweeps out equal areas in equal times."**

- Planet moves **faster** when closer to Sun
- Planet moves **slower** when farther from Sun
- Angular momentum is conserved

**Consequence:**
- Speed at perihelion > Speed at aphelion
- $v_p r_p = v_a r_a$ (conservation of angular momentum)

### KEPLER'S THIRD LAW: Law of Periods

**"The square of the orbital period is proportional to the cube of the semi-major axis."**

Formula: $$T^2 = \frac{4\pi^2}{GM}r^3$$

Or: $$\frac{T^2}{r^3} = \frac{4\pi^2}{GM} = \text{constant}$$

**For comparing two orbits:**
$$\frac{T_1^2}{T_2^2} = \frac{r_1^3}{r_2^3}$$

### KEPLER'S LAWS TABLE

| Law | What it describes | Key Equation |
|-----|-------------------|--------------|
| **First** | Shape of orbit | Ellipse with Sun at focus |
| **Second** | Speed variation | Equal areas in equal times |
| **Third** | Period vs radius | $T^2 \propto r^3$ |

💡 **Remember**: All three laws apply to any orbital system, not just planets!

**Example:**
Planet A orbits at 1 AU (Earth's distance), Planet B at 4 AU. Compare periods.

$\frac{T_B^2}{T_A^2} = \frac{r_B^3}{r_A^3} = \frac{4^3}{1^3} = 64$

$T_B = 8T_A$ → Planet B takes 8 Earth years to orbit! ✓

---

## 🎯 PROBLEM-SOLVING STRATEGIES

### FOR CIRCULAR MOTION

1. 🎨 **Draw diagram** with forces and velocity
2. 🧭 **Identify center** of circular path
3. ➡️ **Mark centripetal direction** (toward center)
4. 📋 **List forces** toward and away from center
5. 🧮 **Apply:** $\sum F_c = \frac{mv^2}{r}$
6. ✅ **Solve** for unknown

### FOR GRAVITATION

1. 📐 **Identify masses** and distance between centers
2. 📝 **Use** $F_g = G\frac{m_1m_2}{r^2}$ for force
3. 🌍 **Use** $g = \frac{GM}{r^2}$ for field
4. 🛰️ **For orbits:** Set $F_g = F_c$
5. ✅ **Check units** and reasonableness

### FOR KEPLER'S LAWS

1. 🪐 **Identify orbital parameters** (r, T, v)
2. 📊 **Choose appropriate law**
3. 🔄 **For comparisons:** Use ratios
4. ✅ **Verify** with dimensional analysis

---

## 💡 WORKED EXAMPLES

### Example 1: Car on Curve

**Problem:** 1200 kg car takes 80 m radius curve at 25 m/s. Find friction force needed.

**Solution:**
$F_c = \frac{mv^2}{r} = \frac{1200(25)^2}{80} = \frac{750,000}{80} = 9,375$ N ✓

### Example 2: Vertical Circle

**Problem:** 0.5 kg ball on 1.2 m string swings in vertical circle. At top, tension is 3 N. Find speed.

**Solution:**
At top: $\frac{mv^2}{r} = T + mg$
$\frac{0.5v^2}{1.2} = 3 + 0.5(10)$
$\frac{0.5v^2}{1.2} = 8$
$v^2 = 19.2$
$v \approx 4.4$ m/s ✓

### Example 3: Satellite Orbit

**Problem:** Satellite orbits Earth at 2 Earth radii from center. Find orbital period. ($R_E = 6.4 \times 10^6$ m)

**Solution:**
$T = 2\pi\sqrt{\frac{r^3}{GM}} = 2\pi\sqrt{\frac{(2R_E)^3}{gR_E^2}}$ (using $GM = gR_E^2$)
$T = 2\pi\sqrt{\frac{8R_E}{g}} = 2\pi\sqrt{\frac{8(6.4 \times 10^6)}{10}}$
$T \approx 14,300$ s $\approx 4$ hours ✓

---

## 🧠 KEY FORMULAS SUMMARY

### Circular Motion
- **Centripetal acceleration:** $a_c = \frac{v^2}{r} = r\omega^2$
- **Centripetal force:** $F_c = \frac{mv^2}{r} = mr\omega^2$
- **Speed:** $v = \frac{2\pi r}{T} = r\omega$
- **Angular velocity:** $\omega = \frac{2\pi}{T} = 2\pi f$

### Gravitation
- **Gravitational force:** $F_g = G\frac{m_1m_2}{r^2}$
- **Gravitational field:** $g = \frac{GM}{r^2}$
- **Orbital speed:** $v = \sqrt{\frac{GM}{r}}$
- **Orbital period:** $T = 2\pi\sqrt{\frac{r^3}{GM}}$

### Constants
- $G = 6.67 \times 10^{-11}$ N·m²/kg²
- $g_{Earth} = 9.8$ m/s²
- $M_E = 5.97 \times 10^{24}$ kg
- $R_E = 6.37 \times 10^6$ m

---

## ❌ COMMON MISTAKES TO AVOID

❌ **Thinking centrifugal force is real in inertial frame**
✅ There's only centripetal force toward center!

❌ **Confusing mass and weight in gravity problems**
✅ Mass is intrinsic; weight = mg (changes with location)

❌ **Using surface g for orbital calculations**
✅ Use $g = \frac{GM}{r^2}$ with actual distance from center

❌ **Forgetting to square the distance change**
✅ Gravity follows inverse square law: $F \propto \frac{1}{r^2}$

❌ **Thinking faster orbit means farther from planet**
✅ Closer orbits are faster! $v = \sqrt{\frac{GM}{r}}$

❌ **Using diameter instead of radius**
✅ All circular motion formulas use radius!

❌ **Forgetting centripetal acceleration even at constant speed**
✅ Changing direction = acceleration!

---

## 🔥 EXAM STRATEGIES

### FOR MULTIPLE CHOICE
- Sketch circular path and forces
- Check if inverse square law applies
- Use limiting cases (what if r→∞?)
- Dimensional analysis catches errors

### FOR FREE RESPONSE
- Always draw force diagram
- Show centripetal direction clearly
- Write $\sum F_c = \frac{mv^2}{r}$ explicitly
- For gravitation, show all substitutions
- Check units at every step

### COMMON SCENARIOS
- Car on curve → friction provides $F_c$
- Vertical circle → find minimum speed at top
- Satellite orbit → set $F_g = F_c$
- Kepler's 3rd Law → use ratios for comparisons

---

## 📝 PRACTICE CHECKLIST

Before the exam, make sure you can:
- ✅ Calculate centripetal force in various scenarios
- ✅ Find minimum/maximum speeds in vertical circles
- ✅ Apply Newton's Law of Gravitation
- ✅ Calculate gravitational field strength
- ✅ Determine orbital speed and period
- ✅ Apply all three Kepler's Laws
- ✅ Recognize what provides centripetal force
- ✅ Use inverse square law correctly

---

## 🎯 FINAL TIPS

🎯 **Centripetal is toward center** - always, no exceptions!

🌍 **Gravity is universal** - applies to all masses everywhere.

🛰️ **Closer orbits are faster** - counterintuitive but true!

📊 **Draw diagrams** - visualize the circular motion.

🔄 **Conservation laws** connect vertical circle positions.

📐 **Inverse square law** - distance matters A LOT!

⚡ **Practice variety** - cars, planets, balls on strings - same physics!

🚀 **You've got this!** Circular motion and gravitation explain everything from carnival rides to planetary orbits. Master these concepts and you'll understand the motion of the cosmos! 🌌

---

## ✨ FINAL THOUGHTS

From a ball on a string to planets orbiting stars, circular motion is everywhere! Gravity keeps the Moon in orbit, keeps us on Earth, and governs the structure of galaxies. You're learning the physics that explains the universe! 🌟

**Remember:** Newton figured this out with just mathematics and observation - no computers, no calculators. If he could do it with a quill pen, you can ace this unit with modern tools! 💪

Happy studying! 📚✨
