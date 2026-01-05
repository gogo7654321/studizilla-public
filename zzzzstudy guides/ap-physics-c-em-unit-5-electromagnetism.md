:::GUIDE:::
unit::=5
title::=⚡ Unit 5: Electromagnetism
desc::=Faraday's Law, inductance, and Maxwell's equations
diff::=Hard
time::=60 min
tags::=physics,electromagnetism,faraday,inductance,maxwell,calculus
content::=

# ⚡ Unit 5: Electromagnetism

## 📚 Overview

Unit 5 covers electromagnetic induction, the unification of electricity and magnetism, and the foundation of modern electromagnetism. Topics include Faraday's Law, Lenz's Law, inductance, and Maxwell's equations.

---

## 🎯 Key Concepts

### 5.1 Electromagnetic Induction

**Faraday's discovery:** A changing magnetic flux through a circuit induces an electromotive force (EMF).

**Three ways to change flux:**
1. Change the magnetic field $B$
2. Change the area $A$
3. Change the angle $\theta$ between $\vec{B}$ and $\hat{n}$

---

## 🔋 Faraday's Law of Induction

### Mathematical Statement

$$\mathcal{E} = -\frac{d\Phi_B}{dt}$$

For a coil with $N$ turns:

$$\mathcal{E} = -N\frac{d\Phi_B}{dt}$$

Where $\Phi_B = \int \vec{B} \cdot d\vec{A} = BA\cos\theta$ for uniform fields.

### Integral Form

$$\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}$$

A changing magnetic flux induces a non-conservative electric field!

---

## ⚖️ Lenz's Law

### Statement

The induced EMF creates a current whose magnetic field **opposes the change** in magnetic flux.

### Application Rules

1. Determine if $\Phi_B$ is increasing or decreasing
2. Induced current creates $\vec{B}_{induced}$ to oppose this change
3. If $\Phi_B$ is increasing → $\vec{B}_{induced}$ opposes original $\vec{B}$
4. If $\Phi_B$ is decreasing → $\vec{B}_{induced}$ supports original $\vec{B}$

### Physical Basis

Lenz's Law is a consequence of **conservation of energy**. If the induced current supported the change, we'd have runaway energy creation!

---

## 🔄 Applications of Faraday's Law

### EMF from Changing Magnetic Field

A loop of area $A$ in a field $B(t) = B_0\sin(\omega t)$:

$$\Phi_B = BA\cos\theta = B_0 A \cos\theta \sin(\omega t)$$

$$\mathcal{E} = -\frac{d\Phi_B}{dt} = -B_0 A \omega \cos\theta \cos(\omega t)$$

Maximum EMF: $\mathcal{E}_{max} = B_0 A \omega$

---

### EMF from Changing Area (Motional EMF)

A rod of length $L$ moving with velocity $v$ through field $B$:

$$\mathcal{E} = BLv$$

**Derivation using Lorentz force:**
- Force on charge: $F = qvB$
- Work per charge: $W/q = vBL = \mathcal{E}$

**Derivation using flux:**
- $\Phi_B = BLx$
- $\mathcal{E} = -\frac{d\Phi_B}{dt} = -BL\frac{dx}{dt} = -BLv$

---

### EMF from Rotating Loop (AC Generator)

A loop of area $A$ rotating with angular velocity $\omega$ in field $B$:

$$\Phi_B = BA\cos(\omega t)$$

$$\mathcal{E} = BA\omega\sin(\omega t) = \mathcal{E}_0\sin(\omega t)$$

Where $\mathcal{E}_0 = BA\omega$ is the peak EMF.

This is the principle behind **AC generators**!

---

### Eddy Currents

When a conductor moves through a non-uniform magnetic field:
- Currents are induced within the conductor itself
- These **eddy currents** create forces that oppose the motion
- Applications: electromagnetic braking, induction heating

---

## 🌀 Induced Electric Fields

### Non-Conservative Nature

A changing magnetic field creates an electric field that is **non-conservative**:

$$\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} \neq 0$$

Unlike electrostatic fields, these induced fields form closed loops!

---

### Calculating Induced Electric Fields

For a cylindrical region with changing magnetic field:

**Inside ($r < R$):**

$$\oint \vec{E} \cdot d\vec{l} = E(2\pi r) = -\frac{d}{dt}(\pi r^2 B)$$

$$E = -\frac{r}{2}\frac{dB}{dt}$$

**Outside ($r > R$):**

$$E(2\pi r) = -\frac{d}{dt}(\pi R^2 B)$$

$$E = -\frac{R^2}{2r}\frac{dB}{dt}$$

---

## 🔌 Inductance

### Self-Inductance

When current through a coil changes, the changing flux induces an EMF in the coil itself:

$$\mathcal{E}_L = -L\frac{dI}{dt}$$

Where $L$ is the **self-inductance** (units: Henry, H).

### Definition of Inductance

$$L = \frac{\Phi_B}{I} = \frac{N\Phi_B}{I}$$

Where $\Phi_B$ is the flux through each turn.

---

### Inductance of a Solenoid

For a solenoid with $N$ turns, length $\ell$, and cross-sectional area $A$:

$$B = \mu_0 n I = \frac{\mu_0 N I}{\ell}$$

$$\Phi_B = BA = \frac{\mu_0 N I A}{\ell}$$

$$L = \frac{N\Phi_B}{I} = \frac{\mu_0 N^2 A}{\ell}$$

Using $n = N/\ell$:

$$L = \mu_0 n^2 A \ell$$

---

### Inductance of a Toroid

For a toroid with $N$ turns, rectangular cross-section (height $h$), inner radius $a$, outer radius $b$:

$$L = \frac{\mu_0 N^2 h}{2\pi}\ln\left(\frac{b}{a}\right)$$

---

### Inductance of a Coaxial Cable

For a coaxial cable with inner radius $a$ and outer radius $b$:

$$L = \frac{\mu_0 \ell}{2\pi}\ln\left(\frac{b}{a}\right)$$

per unit length: $\frac{L}{\ell} = \frac{\mu_0}{2\pi}\ln\left(\frac{b}{a}\right)$

---

## 🔗 Mutual Inductance

### Definition

When current in coil 1 creates flux through coil 2:

$$\Phi_{21} = M_{21} I_1$$

$$\mathcal{E}_2 = -M_{21}\frac{dI_1}{dt}$$

And vice versa:

$$\mathcal{E}_1 = -M_{12}\frac{dI_2}{dt}$$

**Key result:** $M_{12} = M_{21} = M$

---

### Mutual Inductance of Concentric Solenoids

For two coaxial solenoids (inner: $N_1$ turns, radius $R_1$; outer: $N_2$ turns, radius $R_2 > R_1$):

$$M = \mu_0 \frac{N_1 N_2}{\ell} \pi R_1^2$$

The flux linkage depends on the area of the smaller solenoid.

---

## ⚡ Energy Stored in an Inductor

### Energy Formula

$$U_L = \frac{1}{2}LI^2$$

### Energy Density in a Magnetic Field

$$u_B = \frac{B^2}{2\mu_0}$$

Total energy: $U = \int u_B \, dV$

Compare to electric field energy density: $u_E = \frac{1}{2}\epsilon_0 E^2$

---

### Derivation

Power delivered to inductor:
$$P = IV = I \cdot L\frac{dI}{dt}$$

Energy stored:
$$U = \int_0^I P \, dt = \int_0^I LI' \, dI' = \frac{1}{2}LI^2$$

---

## 🔋 RL Circuits

### Growth of Current (Switch Closed)

For a circuit with EMF $\mathcal{E}$, resistance $R$, and inductance $L$:

$$\mathcal{E} - IR - L\frac{dI}{dt} = 0$$

Solution:

$$I(t) = \frac{\mathcal{E}}{R}\left(1 - e^{-t/\tau}\right)$$

Where **time constant** $\tau = L/R$.

---

### Decay of Current

When the EMF is removed:

$$I(t) = I_0 e^{-t/\tau}$$

The current decays exponentially with the same time constant.

---

### Time Constant Significance

| Time | Current (Growth) | Current (Decay) |
|------|------------------|-----------------|
| $t = 0$ | $0$ | $I_0$ |
| $t = \tau$ | $0.632 I_{max}$ | $0.368 I_0$ |
| $t = 2\tau$ | $0.865 I_{max}$ | $0.135 I_0$ |
| $t = 5\tau$ | $0.993 I_{max}$ | $0.007 I_0$ |

---

### Energy Analysis in RL Circuits

**Power from EMF:** $P_{EMF} = \mathcal{E}I$

**Power dissipated in R:** $P_R = I^2R$

**Power stored in L:** $P_L = LI\frac{dI}{dt}$

Energy balance: $P_{EMF} = P_R + P_L$

---

## 🔄 LC Circuits

### Oscillatory Behavior

A circuit with only inductance and capacitance oscillates!

$$L\frac{d^2Q}{dt^2} + \frac{Q}{C} = 0$$

Solution:

$$Q(t) = Q_0 \cos(\omega_0 t + \phi)$$

Where **natural frequency:**

$$\omega_0 = \frac{1}{\sqrt{LC}}$$

$$f_0 = \frac{1}{2\pi\sqrt{LC}}$$

---

### Energy Oscillation

Total energy is constant and oscillates between:

**Capacitor:** $U_C = \frac{Q^2}{2C} = \frac{Q_0^2}{2C}\cos^2(\omega_0 t)$

**Inductor:** $U_L = \frac{1}{2}LI^2 = \frac{Q_0^2}{2C}\sin^2(\omega_0 t)$

**Total:** $U_{total} = \frac{Q_0^2}{2C} = \frac{1}{2}LI_0^2$

---

### Analogy to Simple Harmonic Motion

| Mechanical | Electrical |
|------------|-----------|
| Position $x$ | Charge $Q$ |
| Velocity $v$ | Current $I$ |
| Mass $m$ | Inductance $L$ |
| Spring constant $k$ | $1/C$ |
| KE: $\frac{1}{2}mv^2$ | Magnetic: $\frac{1}{2}LI^2$ |
| PE: $\frac{1}{2}kx^2$ | Electric: $\frac{Q^2}{2C}$ |
| $\omega = \sqrt{k/m}$ | $\omega = 1/\sqrt{LC}$ |

---

## 🌊 RLC Circuits

### Damped Oscillations

With resistance added:

$$L\frac{d^2Q}{dt^2} + R\frac{dQ}{dt} + \frac{Q}{C} = 0$$

### Three Regimes

**Underdamped** ($R < 2\sqrt{L/C}$):
$$Q(t) = Q_0 e^{-\gamma t}\cos(\omega' t + \phi)$$

Where $\gamma = R/2L$ and $\omega' = \sqrt{\omega_0^2 - \gamma^2}$

**Critically damped** ($R = 2\sqrt{L/C}$):
$$Q(t) = (A + Bt)e^{-\gamma t}$$

**Overdamped** ($R > 2\sqrt{L/C}$):
No oscillations—exponential decay

---

## 📡 Maxwell's Equations

### The Complete Set

#### 1. Gauss's Law for Electricity
$$\oint \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\epsilon_0}$$

Electric flux through a closed surface equals enclosed charge divided by $\epsilon_0$.

#### 2. Gauss's Law for Magnetism
$$\oint \vec{B} \cdot d\vec{A} = 0$$

Magnetic flux through any closed surface is zero (no magnetic monopoles).

#### 3. Faraday's Law
$$\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}$$

A changing magnetic flux induces an electric field.

#### 4. Ampere-Maxwell Law
$$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc} + \mu_0\epsilon_0\frac{d\Phi_E}{dt}$$

Magnetic field is created by currents AND changing electric flux.

---

## 💫 Displacement Current

### Maxwell's Addition

The term $\mu_0\epsilon_0\frac{d\Phi_E}{dt}$ is called the **displacement current**:

$$I_d = \epsilon_0\frac{d\Phi_E}{dt}$$

### Physical Significance

Between capacitor plates:
- No conduction current flows
- But $\vec{E}$ is changing, so $d\Phi_E/dt \neq 0$
- Displacement current maintains continuity

$$I_d = \epsilon_0 A \frac{dE}{dt} = \epsilon_0 A \frac{d}{dt}\left(\frac{\sigma}{\epsilon_0}\right) = A\frac{d\sigma}{dt} = \frac{dQ}{dt} = I$$

The displacement current equals the conduction current!

---

### Magnetic Field Between Capacitor Plates

At radius $r$ from the axis of a circular capacitor:

**For $r < R$:**
$$B = \frac{\mu_0 I r}{2\pi R^2}$$

**For $r > R$:**
$$B = \frac{\mu_0 I}{2\pi r}$$

Same form as for a current-carrying wire!

---

## 🌈 Electromagnetic Waves

### Wave Equation

From Maxwell's equations in free space:

$$\nabla^2 \vec{E} = \mu_0\epsilon_0\frac{\partial^2 \vec{E}}{\partial t^2}$$

$$\nabla^2 \vec{B} = \mu_0\epsilon_0\frac{\partial^2 \vec{B}}{\partial t^2}$$

### Speed of Light

$$c = \frac{1}{\sqrt{\mu_0\epsilon_0}} = 3.00 \times 10^8 \text{ m/s}$$

Maxwell's equations predict light is an electromagnetic wave!

---

### Properties of EM Waves

1. $\vec{E} \perp \vec{B} \perp \vec{v}$ (all mutually perpendicular)
2. $E = cB$ (magnitudes related)
3. In phase (crests and troughs aligned)
4. Travel at speed $c$ in vacuum
5. Carry energy and momentum

---

### Energy in EM Waves

**Energy density:**
$$u = \frac{1}{2}\epsilon_0 E^2 + \frac{B^2}{2\mu_0} = \epsilon_0 E^2 = \frac{B^2}{\mu_0}$$

**Poynting vector (energy flux):**
$$\vec{S} = \frac{1}{\mu_0}\vec{E} \times \vec{B}$$

**Intensity (average power per area):**
$$I = \frac{1}{2}\epsilon_0 c E_0^2 = \frac{E_0^2}{2\mu_0 c}$$

---

## 🧪 Practice Problems

### Problem 1: Faraday's Law

A circular loop of radius 0.10 m is in a magnetic field that changes from 0.5 T to 0.2 T in 0.05 s. The field is perpendicular to the loop.

Find the induced EMF.

**Solution:**

$$\Phi_i = BA = (0.5)(\pi)(0.10)^2 = 0.0157 \text{ Wb}$$
$$\Phi_f = (0.2)(\pi)(0.10)^2 = 0.00628 \text{ Wb}$$

$$\mathcal{E} = -\frac{\Delta\Phi}{\Delta t} = -\frac{0.00628 - 0.0157}{0.05} = 0.19 \text{ V}$$

---

### Problem 2: Motional EMF with Force

A 0.5 m rod slides along rails separated by 0.5 m in a 0.4 T field. The rod has resistance 2 Ω and the rails have negligible resistance.

If the rod moves at 3 m/s, find: (a) EMF, (b) current, (c) force needed to maintain constant velocity.

**Solution:**

(a) $\mathcal{E} = BLv = (0.4)(0.5)(3) = 0.6$ V

(b) $I = \mathcal{E}/R = 0.6/2 = 0.3$ A

(c) Magnetic force on rod: $F = BIL = (0.4)(0.3)(0.5) = 0.06$ N

Applied force must equal this to maintain constant velocity: $F_{applied} = 0.06$ N

---

### Problem 3: RL Circuit

A 12 V battery is connected to a 100 Ω resistor and 50 mH inductor in series.

Find: (a) time constant, (b) current at $t = 0$, (c) current at $t = \tau$, (d) time to reach 90% of maximum.

**Solution:**

(a) $\tau = L/R = 0.050/100 = 5 \times 10^{-4}$ s = 0.5 ms

(b) $I(0) = 0$ (inductor opposes sudden changes)

(c) $I(\tau) = \frac{\mathcal{E}}{R}(1 - e^{-1}) = \frac{12}{100}(0.632) = 0.076$ A

(d) $0.9 = 1 - e^{-t/\tau}$
$e^{-t/\tau} = 0.1$
$t = -\tau \ln(0.1) = 2.3\tau = 1.15$ ms

---

### Problem 4: LC Circuit

A 20 μF capacitor charged to 100 V is connected to a 50 mH inductor.

Find: (a) natural frequency, (b) maximum current, (c) energy stored.

**Solution:**

(a) $\omega_0 = 1/\sqrt{LC} = 1/\sqrt{(0.050)(20 \times 10^{-6})} = 1000$ rad/s
$f = \omega_0/2\pi = 159$ Hz

(b) Initial energy: $U = \frac{1}{2}CV^2 = \frac{1}{2}(20 \times 10^{-6})(100)^2 = 0.1$ J

At max current: $\frac{1}{2}LI_{max}^2 = 0.1$
$I_{max} = \sqrt{2(0.1)/0.050} = 2$ A

(c) Total energy = 0.1 J (constant)

---

### Problem 5: Mutual Inductance

Two coaxial solenoids: inner has 300 turns, radius 2 cm; outer has 400 turns, radius 3 cm. Both are 20 cm long.

Find: (a) mutual inductance, (b) EMF in outer coil if current in inner changes at 50 A/s.

**Solution:**

(a) $M = \mu_0 \frac{N_1 N_2}{\ell} \pi R_1^2$
$M = (4\pi \times 10^{-7})\frac{(300)(400)}{0.20}\pi(0.02)^2$
$M = 9.5 \times 10^{-4}$ H = 0.95 mH

(b) $\mathcal{E} = -M\frac{dI}{dt} = -(0.95 \times 10^{-3})(50) = -0.047$ V

---

### Problem 6: Displacement Current

A parallel-plate capacitor with circular plates of radius 5 cm is charging at a rate $dQ/dt = 2$ A.

Find: (a) displacement current, (b) magnetic field at $r = 3$ cm from axis.

**Solution:**

(a) $I_d = \frac{dQ}{dt} = 2$ A

(b) Using Ampere-Maxwell law for $r < R$:
$B(2\pi r) = \mu_0 I_d \frac{\pi r^2}{\pi R^2}$
$B = \frac{\mu_0 I_d r}{2\pi R^2} = \frac{(4\pi \times 10^{-7})(2)(0.03)}{2\pi(0.05)^2}$
$B = 4.8 \times 10^{-6}$ T

---

## 🔑 Key Formulas Summary

### Faraday's Law
$$\mathcal{E} = -N\frac{d\Phi_B}{dt}$$

### Motional EMF
$$\mathcal{E} = BLv$$

### Inductance

| Quantity | Formula |
|----------|---------|
| Self-inductance | $L = N\Phi_B/I$ |
| Induced EMF | $\mathcal{E} = -L\frac{dI}{dt}$ |
| Solenoid | $L = \mu_0 n^2 A\ell$ |
| Energy | $U = \frac{1}{2}LI^2$ |
| Energy density | $u_B = \frac{B^2}{2\mu_0}$ |

### RL Circuits

| Quantity | Formula |
|----------|---------|
| Time constant | $\tau = L/R$ |
| Current growth | $I = \frac{\mathcal{E}}{R}(1-e^{-t/\tau})$ |
| Current decay | $I = I_0 e^{-t/\tau}$ |

### LC Circuits

| Quantity | Formula |
|----------|---------|
| Angular frequency | $\omega_0 = 1/\sqrt{LC}$ |
| Charge | $Q = Q_0\cos(\omega_0 t)$ |
| Current | $I = -\omega_0 Q_0\sin(\omega_0 t)$ |

### Maxwell's Equations

| Law | Equation |
|-----|----------|
| Gauss (E) | $\oint \vec{E} \cdot d\vec{A} = Q_{enc}/\epsilon_0$ |
| Gauss (B) | $\oint \vec{B} \cdot d\vec{A} = 0$ |
| Faraday | $\oint \vec{E} \cdot d\vec{l} = -d\Phi_B/dt$ |
| Ampere-Maxwell | $\oint \vec{B} \cdot d\vec{l} = \mu_0(I + I_d)$ |

### Electromagnetic Waves

| Quantity | Formula |
|----------|---------|
| Speed of light | $c = 1/\sqrt{\mu_0\epsilon_0}$ |
| E-B relation | $E = cB$ |
| Poynting vector | $\vec{S} = \frac{1}{\mu_0}\vec{E} \times \vec{B}$ |
| Intensity | $I = \frac{1}{2}\epsilon_0 c E_0^2$ |

---

## ✅ AP Exam Tips

1. **Lenz's Law is crucial!**
   - Always check: Does your answer conserve energy?
   - Induced effects oppose changes

2. **Know the analogies:**
   - RL circuit ↔ RC circuit
   - LC circuit ↔ Simple harmonic oscillator

3. **Maxwell's equations:**
   - Understand physical meaning, not just math
   - Know which equation applies in each situation

4. **Common mistakes:**
   - Forgetting negative sign in Faraday's Law
   - Confusing $\tau_{RL} = L/R$ with $\tau_{RC} = RC$
   - Not recognizing when displacement current matters

5. **Units to remember:**
   - Henry (H) = V·s/A = Ω·s
   - 1 T = 1 Wb/m²

---

## 📊 Comparison Table: RC vs RL Circuits

| Property | RC Circuit | RL Circuit |
|----------|-----------|-----------|
| Time constant | $\tau = RC$ | $\tau = L/R$ |
| Charging | $Q = Q_f(1-e^{-t/\tau})$ | $I = I_f(1-e^{-t/\tau})$ |
| Discharging | $Q = Q_0 e^{-t/\tau}$ | $I = I_0 e^{-t/\tau}$ |
| Energy storage | $U = \frac{1}{2}CV^2$ | $U = \frac{1}{2}LI^2$ |
| What's stored | Electric field | Magnetic field |
| Initial behavior | $I = V/R$ (capacitor as wire) | $I = 0$ (inductor as break) |
| Final behavior | $I = 0$ (capacitor as break) | $I = V/R$ (inductor as wire) |

---

## 🎓 Conceptual Understanding Check

1. **Why does an inductor oppose changes in current?**
   A changing current creates a changing magnetic flux, which by Lenz's Law induces an EMF opposing that change.

2. **Why do LC circuits oscillate?**
   Energy continuously converts between electric (capacitor) and magnetic (inductor) forms, like a pendulum.

3. **What is the physical meaning of displacement current?**
   A changing electric field creates a magnetic field, just as a current does. This maintains the continuity of magnetic field lines.

4. **How do Maxwell's equations predict light?**
   A changing $\vec{E}$ creates $\vec{B}$, and a changing $\vec{B}$ creates $\vec{E}$. These self-sustaining fields propagate as waves at speed $c$.

5. **Why is $c = 1/\sqrt{\mu_0\epsilon_0}$ so significant?**
   It connects magnetism ($\mu_0$), electricity ($\epsilon_0$), and light ($c$), showing they're all aspects of electromagnetism.

---

## 📝 Quick Reference: Circuit Behavior

### Inductor Behavior at Key Times

**At $t = 0$:** Acts like an open circuit (opposes sudden current change)

**At $t = \infty$:** Acts like a short circuit (steady current, no $dI/dt$)

### Capacitor Behavior at Key Times

**At $t = 0$:** Acts like a short circuit (uncharged, no voltage)

**At $t = \infty$:** Acts like an open circuit (fully charged, no current)

### Memory Aid
- **C**apacitor blocks D**C** (eventually)
- **L** (inductor) blocks A**C** initially

---

## 🔬 Advanced Topics (For Enrichment)

### Poynting's Theorem

$$-\frac{\partial u}{\partial t} = \nabla \cdot \vec{S} + \vec{J} \cdot \vec{E}$$

This is conservation of electromagnetic energy:
- Left side: Rate of energy decrease
- First term on right: Energy flow (Poynting vector)
- Second term: Work done on charges

### Electromagnetic Momentum

EM waves carry momentum:
$$p = \frac{U}{c} = \frac{S}{c^2}$$

Radiation pressure: $P = \frac{S}{c}$ (absorbed) or $\frac{2S}{c}$ (reflected)

### Skin Effect

AC current flows primarily near the surface of a conductor.

Skin depth: $\delta = \sqrt{\frac{2}{\omega\mu\sigma}}$

At high frequencies, current is confined to a thin surface layer.

---

:::GUIDE:::
