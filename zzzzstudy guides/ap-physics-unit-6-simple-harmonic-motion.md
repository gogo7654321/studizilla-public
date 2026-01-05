:::GUIDE:::
unit::=6
title::=🚀 Unit 6: Simple Harmonic Motion Complete Guide
desc::=Master oscillations, springs, pendulums, period, frequency, energy in SHM, and wave basics for AP Physics 1
diff::=intermediate
time::=60 minutes
tags::=simple-harmonic-motion;;shm;;oscillations;;springs;;pendulums;;waves;;ap-physics-1
content::=
# 🌊 UNIT 6: SIMPLE HARMONIC MOTION (SHM)

## 📋 TABLE OF CONTENTS
- What is Simple Harmonic Motion?
- Characteristics of SHM
- Mass-Spring Systems
- Pendulums (Simple & Physical)
- Energy in SHM
- Equations of Motion
- Damping & Resonance
- Wave Basics
- Problem-Solving Strategies

---

## 🎵 WHAT IS SIMPLE HARMONIC MOTION?

### DEFINITION

**Simple Harmonic Motion (SHM)**: Periodic motion where restoring force is proportional to displacement

**Key equation:** $F = -kx$

Where:
- $F$ = restoring force (always toward equilibrium)
- $k$ = constant (depends on system)
- $x$ = displacement from equilibrium
- Negative sign: force opposes displacement

### EXAMPLES IN NATURE

| System | What Oscillates |
|--------|----------------|
| 🎸 **Guitar string** | Vibrates back and forth |
| 🏗️ **Building in earthquake** | Sways side to side |
| 🌊 **Ocean waves** | Water surface rises/falls |
| 💓 **Heart beating** | Rhythmic pumping |
| 🪐 **Planet orbiting** | (Approximate for small angles) |
| 🔊 **Sound** | Air molecules vibrate |
| ⚛️ **Atoms in solid** | Vibrate around position |

💡 **SHM is everywhere!** It's one of the most common motions in nature.

### REQUIREMENTS FOR SHM

✅ **Restoring force** proportional to displacement ($F \propto -x$)
✅ **Equilibrium position** where net force is zero
✅ **Oscillation** about equilibrium
✅ **Periodic motion** (repeats)

---

## 📊 CHARACTERISTICS OF SHM

### KEY TERMS

| Term | Symbol | Definition | Units |
|------|--------|------------|-------|
| **Amplitude** | $A$ | Maximum displacement from equilibrium | m |
| **Period** | $T$ | Time for one complete oscillation | s |
| **Frequency** | $f$ | Number of oscillations per second | Hz (s⁻¹) |
| **Angular frequency** | $\omega$ | $2\pi f$ | rad/s |
| **Equilibrium** | $x=0$ | Position where net force is zero | m |

### RELATIONSHIPS

$$f = \frac{1}{T} \quad \text{or} \quad T = \frac{1}{f}$$

$$\omega = 2\pi f = \frac{2\pi}{T}$$

### POSITION, VELOCITY, ACCELERATION

For SHM starting at maximum displacement:

**Position:** $x(t) = A\cos(\omega t)$

**Velocity:** $v(t) = -A\omega\sin(\omega t)$

**Acceleration:** $a(t) = -A\omega^2\cos(\omega t) = -\omega^2 x$

### MAXIMA IN SHM

| Position | $x$ | $v$ | $a$ | $KE$ | $PE$ |
|----------|-----|-----|-----|------|------|
| **Maximum displacement** | $\pm A$ | 0 | Max | 0 | Max |
| **Equilibrium** | 0 | Max | 0 | Max | 0 |

💡 **At maximum displacement**: All energy is potential, velocity is zero
💡 **At equilibrium**: All energy is kinetic, acceleration is zero

### PHASE RELATIONSHIPS

- **Velocity leads position** by 90° (¼ period)
- **Acceleration** is 180° out of phase with position (opposite direction)
- When displacement is maximum → velocity is zero
- When velocity is maximum → displacement is zero

---

## 🔩 MASS-SPRING SYSTEMS

### HOOKE'S LAW

$$F_s = -kx$$

- $k$ = spring constant (N/m)
- Stiffer spring → larger $k$
- $x$ = displacement from equilibrium (not total length!)

### PERIOD OF MASS-SPRING SYSTEM

$$T = 2\pi\sqrt{\frac{m}{k}}$$

**Key insights:**
- **More mass** → Longer period (slower oscillation)
- **Stiffer spring (larger k)** → Shorter period (faster oscillation)
- **Independent of amplitude** (for ideal spring)
- **Independent of gravity** (horizontal or vertical!)

### FREQUENCY

$$f = \frac{1}{T} = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$

### ANGULAR FREQUENCY

$$\omega = 2\pi f = \sqrt{\frac{k}{m}}$$

### PERIOD RELATIONSHIPS

| Change | Period Effect |
|--------|---------------|
| Double mass ($m → 2m$) | $T → \sqrt{2}T$ (≈1.41×) |
| Quadruple mass ($m → 4m$) | $T → 2T$ |
| Double spring constant ($k → 2k$) | $T → \frac{T}{\sqrt{2}}$ (≈0.71×) |
| Quadruple $k$ | $T → \frac{T}{2}$ |

### VERTICAL SPRING

**Important**: Period is **same** as horizontal spring!
- Gravity changes equilibrium position
- But doesn't affect period
- $T = 2\pi\sqrt{\frac{m}{k}}$ still applies

**New equilibrium**: $y_0 = \frac{mg}{k}$ (below natural length)

**Example:**
0.5 kg mass on spring with k = 200 N/m. Find period.

$T = 2\pi\sqrt{\frac{m}{k}} = 2\pi\sqrt{\frac{0.5}{200}} = 2\pi\sqrt{0.0025} = 2\pi(0.05) = 0.314$ s ✓

$f = \frac{1}{T} = 3.18$ Hz ✓

---

## ⏱️ PENDULUMS

### SIMPLE PENDULUM

**Setup**: Mass (bob) on massless string swinging in arc

**Period formula:**
$$T = 2\pi\sqrt{\frac{L}{g}}$$

Where:
- $L$ = length of string (m)
- $g$ = gravitational acceleration (m/s²)
- **Valid for small angles** (< 15°)

### KEY INSIGHTS

✓ **Independent of mass** (bob mass doesn't matter!)
✓ **Independent of amplitude** (for small angles)
✓ **Depends on length**: Longer → Slower
✓ **Depends on gravity**: Stronger g → Faster

### PERIOD RELATIONSHIPS

| Change | Period Effect |
|--------|---------------|
| Double length ($L → 2L$) | $T → \sqrt{2}T$ |
| Quadruple length | $T → 2T$ |
| On Moon (g/6) | $T → \sqrt{6}T$ |
| Move to Jupiter (2.5g) | $T → \frac{T}{\sqrt{2.5}}$ |

### RESTORING FORCE

For small angles: $F = -mg\sin\theta \approx -mg\theta = -\frac{mg}{L}x$

This is proportional to displacement → SHM!

### FREQUENCY

$$f = \frac{1}{2\pi}\sqrt{\frac{g}{L}}$$

### PHYSICAL PENDULUM

**Any rigid body** swinging about pivot point (not just bob on string)

**Period:**
$$T = 2\pi\sqrt{\frac{I}{mgd}}$$

Where:
- $I$ = moment of inertia about pivot
- $m$ = mass
- $d$ = distance from pivot to center of mass

**Simple pendulum is special case** where $I = mL^2$ and $d = L$

**Example:**
1 m long pendulum on Earth. Find period.

$T = 2\pi\sqrt{\frac{L}{g}} = 2\pi\sqrt{\frac{1}{10}} = 2\pi(0.316) = 2.0$ s ✓

(Interesting fact: 1 m pendulum has ~2 s period on Earth!)

---

## ⚡ ENERGY IN SHM

### ENERGY FORMS

**Kinetic Energy:**
$$KE = \frac{1}{2}mv^2$$

**Potential Energy (spring):**
$$PE = \frac{1}{2}kx^2$$

**Potential Energy (pendulum):**
$$PE = mgh = mgL(1 - \cos\theta)$$

For small angles: $PE \approx \frac{1}{2}mg\frac{x^2}{L}$

### TOTAL MECHANICAL ENERGY

$$E_{total} = KE + PE = \frac{1}{2}kA^2 = \text{constant}$$

**At any point:**
$$E = \frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \frac{1}{2}kA^2$$

### ENERGY AT KEY POSITIONS

| Position | x | KE | PE | Total E |
|----------|---|----|----|---------|
| **Max displacement** | $\pm A$ | 0 | $\frac{1}{2}kA^2$ | $\frac{1}{2}kA^2$ |
| **Equilibrium** | 0 | $\frac{1}{2}mv_{max}^2$ | 0 | $\frac{1}{2}kA^2$ |
| **Halfway** | $\pm\frac{A}{2}$ | $\frac{3}{8}kA^2$ | $\frac{1}{8}kA^2$ | $\frac{1}{2}kA^2$ |

### MAXIMUM SPEED

At equilibrium, all energy is kinetic:
$$\frac{1}{2}mv_{max}^2 = \frac{1}{2}kA^2$$

$$v_{max} = A\sqrt{\frac{k}{m}} = A\omega$$

### SPEED AT ANY POSITION

$$v = \omega\sqrt{A^2 - x^2}$$

Or using energy:
$$\frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \frac{1}{2}kA^2$$

$$v = \sqrt{\frac{k}{m}(A^2 - x^2)}$$

### ENERGY GRAPHS

**Position vs Time**: Cosine curve
**KE vs Time**: $\cos^2$ curve (always positive)
**PE vs Time**: $\sin^2$ curve (always positive)
**Total E vs Time**: Horizontal line (constant!)

💡 **Energy sloshes back and forth** between KE and PE, but total stays constant!

**Example:**
0.2 kg mass on spring (k = 80 N/m) with amplitude 0.1 m. Find maximum speed.

$v_{max} = A\omega = A\sqrt{\frac{k}{m}} = 0.1\sqrt{\frac{80}{0.2}} = 0.1\sqrt{400} = 0.1(20) = 2$ m/s ✓

Total energy: $E = \frac{1}{2}kA^2 = \frac{1}{2}(80)(0.1)^2 = 0.4$ J ✓

---

## 📈 EQUATIONS OF MOTION FOR SHM

### POSITION AS FUNCTION OF TIME

**Starting at maximum displacement:**
$$x(t) = A\cos(\omega t) = A\cos(2\pi ft)$$

**Starting at equilibrium (moving in + direction):**
$$x(t) = A\sin(\omega t)$$

**General form:**
$$x(t) = A\cos(\omega t + \phi)$$

Where $\phi$ = phase constant (depends on initial conditions)

### VELOCITY

$$v(t) = -A\omega\sin(\omega t) = \frac{dx}{dt}$$

**Maximum velocity:** $v_{max} = A\omega$ (at equilibrium)

### ACCELERATION

$$a(t) = -A\omega^2\cos(\omega t) = -\omega^2 x = \frac{d^2x}{dt^2}$$

**Key equation:** $a = -\omega^2 x$

This defines SHM! Acceleration proportional to (and opposite to) displacement.

**Maximum acceleration:** $a_{max} = A\omega^2$ (at max displacement)

### RELATIONSHIP BETWEEN a, v, x

| Quantity | Maximum | Where |
|----------|---------|-------|
| **$|x|$** | $A$ | Endpoints |
| **$|v|$** | $A\omega$ | Equilibrium |
| **$|a|$** | $A\omega^2$ | Endpoints |

### USING EQUATIONS

**To find position:** Use $x(t) = A\cos(\omega t)$
**To find velocity:** Use $v = \pm\omega\sqrt{A^2 - x^2}$
**To find acceleration:** Use $a = -\omega^2 x$

---

## 🌡️ DAMPING & RESONANCE

### DAMPING

**Damped oscillation**: Amplitude decreases over time due to friction/air resistance
- Energy dissipated as heat
- Period remains approximately constant (for light damping)
- Eventually comes to rest at equilibrium

**Types:**
- **Underdamped**: Oscillates with decreasing amplitude
- **Critically damped**: Returns to equilibrium fastest without oscillating
- **Overdamped**: Returns to equilibrium slowly without oscillating

### APPLICATIONS OF DAMPING

| System | Damping Mechanism |
|--------|------------------|
| **Car shock absorbers** | Hydraulic fluid resistance |
| **Door closer** | Air/fluid resistance |
| **Earthquake building** | Energy-absorbing materials |
| **Musical instrument** | Air resistance, energy transfer |

### RESONANCE

**Resonance**: Large amplitude oscillations when driving frequency matches natural frequency

**Natural frequency**: $f_0$ (frequency system oscillates on its own)

**Driving frequency**: $f_d$ (frequency of external force)

**Resonance condition:** $f_d = f_0$

### RESONANCE EXAMPLES

✓ **Pushing swing** at right time → large amplitude
✓ **Shattering glass** with sound at resonant frequency
✓ **Tacoma Narrows Bridge** collapse (wind matching bridge frequency)
✓ **Radio tuning** to station frequency
✓ **MRI machines** using resonance of atoms

### RESONANCE DANGERS

⚠️ **Bridges**: Must avoid frequencies from wind/traffic
⚠️ **Buildings**: Must survive earthquake frequencies
⚠️ **Machinery**: Avoid operating at resonant frequencies

💡 **Damping helps prevent dangerous resonance!**

---

## 🌊 WAVE BASICS

### WAVE PROPERTIES

| Property | Symbol | Definition | Units |
|----------|--------|------------|-------|
| **Wavelength** | $\lambda$ | Distance between peaks | m |
| **Frequency** | $f$ | Oscillations per second | Hz |
| **Period** | $T$ | Time for one oscillation | s |
| **Wave speed** | $v$ | Speed of wave propagation | m/s |
| **Amplitude** | $A$ | Maximum displacement | m |

### WAVE EQUATION

$$v = f\lambda = \frac{\lambda}{T}$$

**Key relationship**: Wave speed = Frequency × Wavelength

### TYPES OF WAVES

| Type | Motion | Examples |
|------|--------|----------|
| **Transverse** | Perpendicular to propagation | Light, string waves |
| **Longitudinal** | Parallel to propagation | Sound, compression waves |

### STANDING WAVES

**Nodes**: Points of zero amplitude (no motion)
**Antinodes**: Points of maximum amplitude

**String fixed at both ends:**
$$\lambda_n = \frac{2L}{n}$$ where $n = 1, 2, 3, ...$

**Fundamental frequency** (n=1): Longest wavelength, lowest frequency
**Harmonics** (n>1): Integer multiples of fundamental

---

## 🧮 PROBLEM-SOLVING STRATEGIES

### GENERAL APPROACH

1. **🔍 Identify system**: Spring or pendulum?
2. **📝 List knowns**: m, k, L, g, A, etc.
3. **🎯 Choose formula**: Period, energy, or motion equation?
4. **🧮 Solve**: Algebraically first, then substitute
5. **✅ Check**: Units and reasonableness

### FOR PERIOD/FREQUENCY

**Mass-spring:** $T = 2\pi\sqrt{\frac{m}{k}}$
**Simple pendulum:** $T = 2\pi\sqrt{\frac{L}{g}}$

### FOR ENERGY

**Total energy:** $E = \frac{1}{2}kA^2$
**At position x:** $\frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \frac{1}{2}kA^2$
**Max speed:** $v_{max} = A\omega$

### FOR POSITION/VELOCITY

**If given time:** Use $x(t) = A\cos(\omega t)$
**If given position:** Use $v = \omega\sqrt{A^2 - x^2}$
**If given velocity:** Use energy conservation

### COMMON MISTAKES TO AVOID

❌ **Using total spring length for x**
✅ Use displacement from equilibrium!

❌ **Including mass in pendulum period**
✅ Period independent of mass: $T = 2\pi\sqrt{\frac{L}{g}}$

❌ **Thinking amplitude affects period**
✅ Period independent of amplitude (for ideal SHM)

❌ **Confusing angular frequency ω with angular velocity**
✅ Different concepts! $\omega = 2\pi f$ for SHM

---

## 💡 WORKED EXAMPLES

### Example 1: Mass-Spring Period

**Problem:** 0.8 kg mass on spring oscillates with period 1.6 s. Find spring constant.

**Solution:**
$T = 2\pi\sqrt{\frac{m}{k}}$
$1.6 = 2\pi\sqrt{\frac{0.8}{k}}$
$\frac{1.6}{2\pi} = \sqrt{\frac{0.8}{k}}$
$\left(\frac{1.6}{2\pi}\right)^2 = \frac{0.8}{k}$
$k = \frac{0.8}{\left(\frac{1.6}{2\pi}\right)^2} = \frac{0.8}{0.065} \approx 12.3$ N/m ✓

### Example 2: Pendulum on Moon

**Problem:** Pendulum has period 2 s on Earth. What's period on Moon (g = 1.6 m/s²)?

**Solution:**
$T_{Earth} = 2\pi\sqrt{\frac{L}{g_{Earth}}}$, $T_{Moon} = 2\pi\sqrt{\frac{L}{g_{Moon}}}$

$\frac{T_{Moon}}{T_{Earth}} = \sqrt{\frac{g_{Earth}}{g_{Moon}}} = \sqrt{\frac{10}{1.6}} = \sqrt{6.25} = 2.5$

$T_{Moon} = 2.5(2) = 5$ s ✓

### Example 3: Energy in SHM

**Problem:** 0.3 kg mass on spring (k = 120 N/m) with amplitude 0.05 m. Find:
a) Total energy
b) Maximum speed
c) Speed at x = 0.03 m

**Solution:**
a) $E = \frac{1}{2}kA^2 = \frac{1}{2}(120)(0.05)^2 = 0.15$ J ✓

b) $v_{max} = A\sqrt{\frac{k}{m}} = 0.05\sqrt{\frac{120}{0.3}} = 0.05(20) = 1$ m/s ✓

c) $\frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \frac{1}{2}kA^2$
$v^2 = \frac{k}{m}(A^2 - x^2) = \frac{120}{0.3}(0.05^2 - 0.03^2)$
$v^2 = 400(0.0025 - 0.0009) = 400(0.0016) = 0.64$
$v = 0.8$ m/s ✓

### Example 4: Wave Speed

**Problem:** Wave has frequency 50 Hz and wavelength 0.6 m. Find wave speed.

**Solution:**
$v = f\lambda = 50(0.6) = 30$ m/s ✓

---

## 🧠 KEY FORMULAS SUMMARY

### Mass-Spring System
- **Period:** $T = 2\pi\sqrt{\frac{m}{k}}$
- **Frequency:** $f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$
- **Angular frequency:** $\omega = \sqrt{\frac{k}{m}}$

### Simple Pendulum
- **Period:** $T = 2\pi\sqrt{\frac{L}{g}}$
- **Frequency:** $f = \frac{1}{2\pi}\sqrt{\frac{g}{L}}$

### Energy
- **Total:** $E = \frac{1}{2}kA^2$
- **Kinetic:** $KE = \frac{1}{2}mv^2$
- **Potential:** $PE = \frac{1}{2}kx^2$
- **Max speed:** $v_{max} = A\omega$

### Motion Equations
- **Position:** $x(t) = A\cos(\omega t)$
- **Velocity:** $v(t) = -A\omega\sin(\omega t)$
- **Acceleration:** $a(t) = -\omega^2 x$
- **Speed at position:** $v = \omega\sqrt{A^2 - x^2}$

### Waves
- **Wave equation:** $v = f\lambda$
- **Period-frequency:** $f = \frac{1}{T}$

---

## ❌ COMMON MISTAKES TO AVOID

❌ **Thinking heavier mass swings slower (pendulum)**
✅ Pendulum period independent of mass!

❌ **Including amplitude in period formula**
✅ Period doesn't depend on amplitude (for ideal SHM)

❌ **Confusing displacement x with spring length**
✅ x = 0 at equilibrium, not when spring is unstretched

❌ **Forgetting energy is constant in SHM**
✅ $E_{total} = \frac{1}{2}kA^2$ = constant

❌ **Using degrees instead of radians**
✅ $\omega$ is in rad/s, angles in radians for formulas

❌ **Not checking if pendulum angle is small**
✅ Formula only valid for small angles (< 15°)

❌ **Mixing up ω (angular frequency) and ω (angular velocity)**
✅ Context matters - in SHM, $\omega = 2\pi f$

---

## 🔥 EXAM STRATEGIES

### QUICK IDENTIFICATION

| Given | System | Use Formula |
|-------|--------|-------------|
| Mass + spring constant | Mass-spring | $T = 2\pi\sqrt{\frac{m}{k}}$ |
| Length + gravity | Pendulum | $T = 2\pi\sqrt{\frac{L}{g}}$ |
| Amplitude + speed | Energy | $\frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \frac{1}{2}kA^2$ |

### FOR FREE RESPONSE

- **Draw diagram** showing equilibrium and amplitude
- **Label all quantities** clearly
- **Show all work** for partial credit
- **Include units** always
- **Check if answer makes sense**

### TIME SAVERS

- $\omega = \sqrt{\frac{k}{m}}$ or $\sqrt{\frac{g}{L}}$
- $v_{max} = A\omega$ (quick!)
- Energy: $E = \frac{1}{2}kA^2$ (total always)
- For pendulum: mass doesn't matter!

---

## 📝 PRACTICE CHECKLIST

Before the exam, make sure you can:
- ✅ Calculate period for mass-spring systems
- ✅ Calculate period for pendulums
- ✅ Recognize when to use each formula
- ✅ Apply energy conservation in SHM
- ✅ Find speed at any position
- ✅ Find maximum speed and acceleration
- ✅ Understand damping and resonance concepts
- ✅ Apply wave equation ($v = f\lambda$)
- ✅ Distinguish transverse and longitudinal waves

---

## 🎯 FINAL TIPS

🌊 **SHM is all about restoring force** proportional to displacement!

⏱️ **Period formulas** - memorize both (spring and pendulum)!

⚡ **Energy is conserved** - sloshes between KE and PE.

🎯 **At equilibrium**: Maximum speed, zero acceleration

📍 **At amplitude**: Zero speed, maximum acceleration

🔄 **Period independent** of amplitude (ideal SHM)

🪐 **Pendulum period** independent of mass

📊 **Draw energy diagrams** - visualize the oscillation

🎵 **Resonance** = driving frequency matches natural frequency

🚀 **You've got this!** SHM describes countless phenomena from atoms to bridges. Master these concepts and you'll understand oscillations everywhere! 💪

---

## ✨ FINAL THOUGHTS

Simple Harmonic Motion is one of the most elegant phenomena in physics - from the swing of a pendulum to vibrating atoms to the oscillations of electromagnetic fields. Understanding SHM gives you insight into waves, sound, light, and quantum mechanics! 🌟

**Remember:** Nature loves to oscillate. Disturb almost any system from equilibrium, and it will oscillate. SHM is the simplest form of this universal tendency. Master it and you've unlocked a fundamental pattern in the universe! 🌌

Happy studying! 📚✨
