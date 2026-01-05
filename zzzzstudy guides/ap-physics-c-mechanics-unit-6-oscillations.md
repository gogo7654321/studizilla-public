:::GUIDE:::
unit::=6
title::=⚡ Unit 6: Oscillations
desc::=Master simple harmonic motion with calculus-based analysis
diff::=Very Hard
time::=55 min
tags::=physics-c,mechanics,oscillations,shm,springs,pendulum
content::=

# ⚡ Unit 6: Oscillations

## 📚 Overview

Oscillatory motion is one of the most fundamental phenomena in physics. From atomic vibrations to planetary orbits, oscillations appear everywhere. This unit develops the complete calculus-based framework for analyzing simple harmonic motion, pendulum systems, and the effects of damping and driving forces.

---

## 🎯 Learning Objectives

By the end of this unit, you will be able to:
- Derive and solve the differential equation for simple harmonic motion
- Analyze mass-spring systems using calculus techniques
- Apply energy methods to oscillatory systems
- Derive period formulas for pendulums from first principles
- Understand damped and forced oscillations qualitatively and quantitatively

---

## 📖 Section 1: Simple Harmonic Motion (SHM)

### 1.1 Definition of Simple Harmonic Motion

**Simple Harmonic Motion (SHM)** is oscillatory motion in which the restoring force is directly proportional to the displacement from equilibrium and directed toward the equilibrium position.

$$F = -kx$$

Where:
- $F$ = restoring force (N)
- $k$ = force constant or spring constant (N/m)
- $x$ = displacement from equilibrium (m)

The negative sign indicates the force opposes the displacement.

### 1.2 Key Characteristics of SHM

| Property | Symbol | Description |
|----------|--------|-------------|
| Amplitude | $A$ | Maximum displacement from equilibrium |
| Period | $T$ | Time for one complete oscillation |
| Frequency | $f$ | Number of oscillations per second ($f = 1/T$) |
| Angular Frequency | $\omega$ | Rate of oscillation in radians ($\omega = 2\pi f$) |
| Phase Constant | $\phi$ | Initial phase angle at $t = 0$ |

### 1.3 Recognizing SHM

A system exhibits SHM if and only if:
1. There is a stable equilibrium position
2. The restoring force is proportional to displacement
3. The restoring force is directed toward equilibrium

> 💡 **Key Insight**: Any system with $F \propto -x$ will undergo SHM!

---

## 📖 Section 2: The Differential Equation of SHM

### 2.1 Deriving the Equation of Motion

Starting with Newton's second law and Hooke's law:

$$F = ma = -kx$$

Since $a = \frac{d^2x}{dt^2}$:

$$m\frac{d^2x}{dt^2} = -kx$$

Rearranging:

$$\frac{d^2x}{dt^2} + \frac{k}{m}x = 0$$

Define angular frequency $\omega = \sqrt{\frac{k}{m}}$:

$$\boxed{\frac{d^2x}{dt^2} + \omega^2 x = 0}$$

This is the **fundamental differential equation of SHM**.

### 2.2 The General Solution

The general solution to this second-order linear differential equation is:

$$\boxed{x(t) = A\cos(\omega t + \phi)}$$

**Verification by substitution:**

$$\frac{dx}{dt} = -A\omega\sin(\omega t + \phi)$$

$$\frac{d^2x}{dt^2} = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x$$

Substituting into the differential equation:
$$-\omega^2 x + \omega^2 x = 0 \checkmark$$

### 2.3 Alternative Forms of the Solution

**Cosine form:**
$$x(t) = A\cos(\omega t + \phi)$$

**Sine form:**
$$x(t) = A\sin(\omega t + \phi')$$

where $\phi' = \phi + \frac{\pi}{2}$

**Exponential form (complex):**
$$x(t) = \text{Re}\left[Ae^{i(\omega t + \phi)}\right]$$

**Sum form:**
$$x(t) = B\cos(\omega t) + C\sin(\omega t)$$

where $A = \sqrt{B^2 + C^2}$ and $\tan\phi = -\frac{C}{B}$

### 2.4 Determining Constants from Initial Conditions

Given initial position $x_0 = x(0)$ and initial velocity $v_0 = v(0)$:

**From the general solution:**
$$x(0) = A\cos\phi = x_0$$
$$v(0) = -A\omega\sin\phi = v_0$$

**Solving for amplitude:**
$$A = \sqrt{x_0^2 + \left(\frac{v_0}{\omega}\right)^2}$$

**Solving for phase:**
$$\tan\phi = -\frac{v_0}{\omega x_0}$$

> ⚠️ **Common Mistake**: When finding $\phi$ from $\tan\phi$, remember to check the quadrant based on the signs of $\cos\phi$ and $\sin\phi$.

---

## 📖 Section 3: Kinematics of SHM

### 3.1 Position, Velocity, and Acceleration

Starting with position:
$$x(t) = A\cos(\omega t + \phi)$$

**Velocity** (first derivative):
$$v(t) = \frac{dx}{dt} = -A\omega\sin(\omega t + \phi)$$

Maximum velocity: $v_{max} = A\omega$

**Acceleration** (second derivative):
$$a(t) = \frac{dv}{dt} = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x$$

Maximum acceleration: $a_{max} = A\omega^2$

### 3.2 Phase Relationships

```
Position:     x(t) = A cos(ωt + φ)        ← Reference
Velocity:     v(t) = -Aω sin(ωt + φ)      ← Leads position by π/2
Acceleration: a(t) = -Aω² cos(ωt + φ)     ← Leads position by π
```

**Phase diagram representation:**

```
                    +x (max displacement)
                         ↑
                         |
          v = 0          |          v = 0
         a = -max        |         a = +max
                         |
    ←────────────────────●────────────────────→ time
                         |
          v = +max       |          v = -max
          a = 0          |          a = 0
                         |
                         ↓
                    -x (max displacement)
```

### 3.3 Relationships Between Quantities

| At equilibrium (x = 0) | At maximum displacement (x = ±A) |
|------------------------|----------------------------------|
| $v = \pm v_{max} = \pm A\omega$ | $v = 0$ |
| $a = 0$ | $a = \mp A\omega^2 = \mp a_{max}$ |
| $KE = KE_{max}$ | $KE = 0$ |
| $PE = 0$ | $PE = PE_{max}$ |

### 3.4 Velocity as a Function of Position

From energy conservation or direct calculation:

$$v = \pm\omega\sqrt{A^2 - x^2}$$

This describes an ellipse in phase space (x-v plane).

---

## 📖 Section 4: Mass-Spring Systems

### 4.1 Horizontal Mass-Spring System

**Setup:** Mass $m$ attached to spring with constant $k$ on frictionless surface.

**Equation of motion:**
$$m\frac{d^2x}{dt^2} = -kx$$

**Angular frequency:**
$$\omega = \sqrt{\frac{k}{m}}$$

**Period:**
$$\boxed{T = 2\pi\sqrt{\frac{m}{k}}}$$

**Frequency:**
$$f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$

### 4.2 Vertical Mass-Spring System

**Setup:** Mass $m$ hanging from vertical spring.

**Forces at displacement $y$ from new equilibrium:**
$$F = -ky$$

(The gravitational force $mg$ is balanced by the spring's equilibrium stretch.)

**Key insight:** The period is the same as horizontal:
$$T = 2\pi\sqrt{\frac{m}{k}}$$

**New equilibrium position:**
At equilibrium, $mg = k\Delta L$, so:
$$\Delta L = \frac{mg}{k}$$

### 4.3 Springs in Series and Parallel

**Springs in Parallel:**
$$k_{eff} = k_1 + k_2 + k_3 + ...$$

```
    ┌──/\/\/──┐
    │   k₁    │
────┤         ├────[m]
    │   k₂    │
    └──/\/\/──┘
```

**Springs in Series:**
$$\frac{1}{k_{eff}} = \frac{1}{k_1} + \frac{1}{k_2} + \frac{1}{k_3} + ...$$

```
────/\/\/──/\/\/──/\/\/────[m]
     k₁      k₂      k₃
```

### 4.4 Two-Spring Systems

**Mass between two springs (both attached to walls):**
$$k_{eff} = k_1 + k_2$$

Both springs contribute restoring force in the same direction.

---

## 📖 Section 5: Energy in Simple Harmonic Motion

### 5.1 Potential Energy

For a spring system:
$$U = \frac{1}{2}kx^2 = \frac{1}{2}kA^2\cos^2(\omega t + \phi)$$

Since $k = m\omega^2$:
$$U = \frac{1}{2}m\omega^2 A^2\cos^2(\omega t + \phi)$$

### 5.2 Kinetic Energy

$$K = \frac{1}{2}mv^2 = \frac{1}{2}m\omega^2 A^2\sin^2(\omega t + \phi)$$

### 5.3 Total Mechanical Energy

$$E = K + U = \frac{1}{2}m\omega^2 A^2\left[\sin^2(\omega t + \phi) + \cos^2(\omega t + \phi)\right]$$

$$\boxed{E = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2 = \text{constant}}$$

### 5.4 Energy as a Function of Position

$$K = \frac{1}{2}m\omega^2(A^2 - x^2) = \frac{1}{2}k(A^2 - x^2)$$

$$U = \frac{1}{2}kx^2$$

$$E = K + U = \frac{1}{2}kA^2$$

### 5.5 Energy Diagrams

```
Energy
  ↑
  │    ╱╲      ╱╲      ╱╲     Total E = ½kA²
  │───/──\────/──\────/──\─── ─ ─ ─ ─ ─
  │  /    \  /    \  /    \   
  │ / PE   \/      \/      \  PE = ½kx²
  │/        \      /        
  │    KE    \    /    KE     KE = ½mv²
  └────────────────────────→ x
       -A    0    +A
```

**Energy vs. Position Graph:**
```
Energy
  ↑
  │         ╱│╲
  │        ╱ │ ╲      Total E
  │───────/──│──\─────────────
  │      ╱   │   ╲
  │     ╱ KE │ KE ╲
  │    ╱     │     ╲
  │   ╱      │      ╲
  │  ╱   PE  │  PE   ╲
  │ ╱        │        ╲
  └──────────┼──────────→ x
       -A    0    +A
```

### 5.6 Average Energies

Over one complete cycle:
$$\langle K \rangle = \langle U \rangle = \frac{1}{2}E = \frac{1}{4}kA^2$$

**Proof using time averages:**
$$\langle \cos^2(\omega t + \phi) \rangle = \langle \sin^2(\omega t + \phi) \rangle = \frac{1}{2}$$

---

## 📖 Section 6: The Simple Pendulum

### 6.1 Setup and Forces

A point mass $m$ suspended by a massless string of length $L$.

**Tangential restoring force:**
$$F_t = -mg\sin\theta$$

### 6.2 Equation of Motion

Using arc length $s = L\theta$:
$$m\frac{d^2s}{dt^2} = -mg\sin\theta$$

$$L\frac{d^2\theta}{dt^2} = -g\sin\theta$$

$$\frac{d^2\theta}{dt^2} + \frac{g}{L}\sin\theta = 0$$

### 6.3 Small Angle Approximation

For small angles ($\theta \ll 1$ radian, typically $\theta < 15°$):
$$\sin\theta \approx \theta$$

The equation becomes:
$$\frac{d^2\theta}{dt^2} + \frac{g}{L}\theta = 0$$

This is the SHM equation with $\omega^2 = \frac{g}{L}$

### 6.4 Period of Simple Pendulum

$$\omega = \sqrt{\frac{g}{L}}$$

$$\boxed{T = 2\pi\sqrt{\frac{L}{g}}}$$

> 💡 **Key Insight**: The period is independent of mass and (for small angles) independent of amplitude!

### 6.5 Energy in a Simple Pendulum

Taking the lowest point as $U = 0$:

**Height:** $h = L(1 - \cos\theta) \approx \frac{L\theta^2}{2}$ for small $\theta$

**Potential Energy:**
$$U = mgL(1 - \cos\theta) \approx \frac{1}{2}mgL\theta^2$$

**Total Energy:**
$$E = \frac{1}{2}mL^2\dot{\theta}^2 + mgL(1 - \cos\theta)$$

For small angles:
$$E = \frac{1}{2}mL^2\dot{\theta}^2 + \frac{1}{2}mgL\theta^2 = \frac{1}{2}mgL\theta_{max}^2$$

### 6.6 Solution for Angular Position

$$\theta(t) = \theta_{max}\cos(\omega t + \phi)$$

Where $\omega = \sqrt{g/L}$

---

## 📖 Section 7: The Physical Pendulum

### 7.1 Definition

A **physical pendulum** is any rigid body that oscillates about a fixed pivot point.

### 7.2 Equation of Motion

Using rotational form of Newton's second law:
$$\tau = I\alpha$$

Where:
- $\tau$ = torque about pivot
- $I$ = moment of inertia about pivot
- $\alpha = \frac{d^2\theta}{dt^2}$

**Restoring torque:**
$$\tau = -Mgd\sin\theta$$

Where:
- $M$ = total mass
- $d$ = distance from pivot to center of mass

**Equation of motion:**
$$I\frac{d^2\theta}{dt^2} = -Mgd\sin\theta$$

### 7.3 Small Angle Solution

For small angles:
$$\frac{d^2\theta}{dt^2} + \frac{Mgd}{I}\theta = 0$$

**Angular frequency:**
$$\omega = \sqrt{\frac{Mgd}{I}}$$

**Period:**
$$\boxed{T = 2\pi\sqrt{\frac{I}{Mgd}}}$$

### 7.4 Equivalent Length

The **equivalent length** $L_{eq}$ is the length of a simple pendulum with the same period:

$$L_{eq} = \frac{I}{Md}$$

### 7.5 Common Physical Pendulums

**Uniform rod pivoted at end:**
- $I = \frac{1}{3}ML^2$
- $d = \frac{L}{2}$
- $T = 2\pi\sqrt{\frac{2L}{3g}}$

**Uniform rod pivoted at center:**
- Not a pendulum (no restoring torque)

**Disk pivoted at edge:**
- $I = \frac{3}{2}MR^2$ (parallel axis theorem)
- $d = R$
- $T = 2\pi\sqrt{\frac{3R}{2g}}$

**Hoop pivoted at edge:**
- $I = 2MR^2$
- $d = R$  
- $T = 2\pi\sqrt{\frac{2R}{g}}$

### 7.6 Comparison Table

| System | Period Formula |
|--------|---------------|
| Mass-Spring | $T = 2\pi\sqrt{\frac{m}{k}}$ |
| Simple Pendulum | $T = 2\pi\sqrt{\frac{L}{g}}$ |
| Physical Pendulum | $T = 2\pi\sqrt{\frac{I}{Mgd}}$ |

---

## 📖 Section 8: Damped Oscillations

### 8.1 Damping Force

Real oscillators experience resistive forces. For viscous damping:
$$F_{damping} = -bv = -b\frac{dx}{dt}$$

Where $b$ is the damping coefficient (kg/s).

### 8.2 Equation of Motion

$$m\frac{d^2x}{dt^2} = -kx - b\frac{dx}{dt}$$

$$\frac{d^2x}{dt^2} + \frac{b}{m}\frac{dx}{dt} + \frac{k}{m}x = 0$$

Define:
- $\gamma = \frac{b}{2m}$ (damping parameter)
- $\omega_0 = \sqrt{\frac{k}{m}}$ (natural frequency)

$$\frac{d^2x}{dt^2} + 2\gamma\frac{dx}{dt} + \omega_0^2 x = 0$$

### 8.3 Solution Method

Assume solution of form $x = Ae^{rt}$:
$$r^2 + 2\gamma r + \omega_0^2 = 0$$

$$r = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$$

### 8.4 Three Damping Regimes

**1. Underdamped ($\gamma < \omega_0$, equivalently $b < 2\sqrt{km}$):**

$$x(t) = Ae^{-\gamma t}\cos(\omega' t + \phi)$$

Where the damped frequency is:
$$\omega' = \sqrt{\omega_0^2 - \gamma^2}$$

The amplitude decays exponentially while the system oscillates.

```
x(t)
  ↑
  │    ╭─╮
  │   ╱   ╲      ╭─╮
  │  ╱     ╲    ╱   ╲     ╭─╮
  │ ╱       ╲  ╱     ╲   ╱   ╲
  ├─────────────────────────────→ t
  │           ╲       ╱     ╲   ╱
  │            ╲     ╱       ╲ ╱
  │             ╲   ╱         
  │              ╰─╯
  
  Envelope: ±Ae^(-γt)
```

**2. Critically Damped ($\gamma = \omega_0$, equivalently $b = 2\sqrt{km}$):**

$$x(t) = (A + Bt)e^{-\gamma t}$$

Returns to equilibrium in minimum time without oscillating.

```
x(t)
  ↑
  │ ╲
  │  ╲
  │   ╲
  │    ╲__
  │       ──────────────────→ t
  │
  
  Fastest return without overshoot
```

**3. Overdamped ($\gamma > \omega_0$, equivalently $b > 2\sqrt{km}$):**

$$x(t) = Ae^{r_1 t} + Be^{r_2 t}$$

Where $r_1$ and $r_2$ are both negative real numbers.

Returns slowly to equilibrium without oscillating.

```
x(t)
  ↑
  │ ╲
  │  ╲
  │    ╲
  │      ╲___
  │          ─────__________→ t
  │
  
  Slow exponential decay
```

### 8.5 Quality Factor

The **quality factor** $Q$ measures how underdamped a system is:

$$Q = \frac{\omega_0}{2\gamma} = \frac{\omega_0 m}{b}$$

- High $Q$: lightly damped, many oscillations before amplitude decays
- Low $Q$: heavily damped, few oscillations
- $Q = \frac{1}{2}$: critically damped

**Energy decay:**
$$E(t) = E_0 e^{-2\gamma t} = E_0 e^{-t/\tau}$$

Where $\tau = \frac{1}{2\gamma} = \frac{m}{b}$ is the time constant.

---

## 📖 Section 9: Forced Oscillations and Resonance

### 9.1 Driven Harmonic Oscillator

Apply a periodic driving force:
$$F_{drive} = F_0\cos(\omega_d t)$$

**Equation of motion:**
$$m\frac{d^2x}{dt^2} + b\frac{dx}{dt} + kx = F_0\cos(\omega_d t)$$

### 9.2 Steady-State Solution

After transients die out, the system oscillates at the driving frequency:
$$x(t) = A(\omega_d)\cos(\omega_d t - \delta)$$

**Amplitude:**
$$A(\omega_d) = \frac{F_0/m}{\sqrt{(\omega_0^2 - \omega_d^2)^2 + (2\gamma\omega_d)^2}}$$

**Phase lag:**
$$\tan\delta = \frac{2\gamma\omega_d}{\omega_0^2 - \omega_d^2}$$

### 9.3 Resonance

**Resonance** occurs when the driving frequency matches the natural frequency, maximizing energy transfer.

**Resonance frequency** (for amplitude):
$$\omega_r = \sqrt{\omega_0^2 - 2\gamma^2}$$

For light damping ($\gamma \ll \omega_0$):
$$\omega_r \approx \omega_0$$

**At resonance:**
$$A_{max} = \frac{F_0}{2m\gamma\omega_0} = \frac{F_0 Q}{k}$$

### 9.4 Resonance Curves

```
Amplitude
    ↑
    │           ╱╲ Q = 10 (light damping)
    │          ╱  ╲
    │         ╱    ╲
    │        ╱      ╲     Q = 5
    │       ╱   ╱────╲────╲
    │      ╱  ╱        ╲    ╲
    │    ╱──╱            ╲────╲  Q = 2 (heavy damping)
    │  ╱ ╱                  ╲   ╲
    │╱_╱______________________╲___╲_____→ ωd
                  ω₀
    
Higher Q = sharper peak = more selective resonance
```

### 9.5 Phase Response

```
Phase δ
    ↑
  π │                    ─────────
    │                  ╱
    │                ╱
 π/2│              ╱ ← At ω₀, phase = π/2
    │            ╱     regardless of damping
    │          ╱
  0 │────────╱
    └────────────────────────────→ ωd
                  ω₀
```

At resonance ($\omega_d = \omega_0$): $\delta = \frac{\pi}{2}$

The velocity is in phase with the driving force at resonance, allowing maximum power transfer.

### 9.6 Power and Resonance

**Average power absorbed:**
$$\langle P \rangle = \frac{F_0^2 \gamma \omega_d^2}{m[(\omega_0^2 - \omega_d^2)^2 + (2\gamma\omega_d)^2]}$$

Maximum power absorption occurs exactly at $\omega_d = \omega_0$.

**Full width at half maximum (FWHM):**
$$\Delta\omega = 2\gamma = \frac{\omega_0}{Q}$$

---

## 📖 Section 10: Advanced Topics

### 10.1 Coupled Oscillators

Two masses connected by springs exhibit two **normal modes**:

**Symmetric mode:** Both masses move in phase
**Antisymmetric mode:** Masses move in opposite phase

The general motion is a superposition of normal modes, leading to phenomena like **beats**.

### 10.2 Torsional Oscillator

A disk suspended by a wire exhibits angular SHM:
$$I\frac{d^2\theta}{dt^2} = -\kappa\theta$$

Where $\kappa$ is the torsion constant.

$$T = 2\pi\sqrt{\frac{I}{\kappa}}$$

### 10.3 LC Circuit Analogy

The LC circuit is the electrical analog of mechanical SHM:

| Mechanical | Electrical |
|------------|------------|
| Position $x$ | Charge $q$ |
| Velocity $v$ | Current $i$ |
| Mass $m$ | Inductance $L$ |
| Spring constant $k$ | $1/C$ (Capacitance⁻¹) |
| Damping $b$ | Resistance $R$ |
| Force $F$ | EMF $\mathcal{E}$ |

$$L\frac{d^2q}{dt^2} + \frac{q}{C} = 0 \quad \Leftrightarrow \quad m\frac{d^2x}{dt^2} + kx = 0$$

### 10.4 Anharmonic Oscillations

For larger amplitudes, nonlinear terms become important:
$$\frac{d^2x}{dt^2} + \omega_0^2 x + \alpha x^2 + \beta x^3 + ... = 0$$

These lead to:
- Amplitude-dependent frequency
- Generation of harmonics
- Complex dynamics (chaos in extreme cases)

---

## 📖 Section 11: Problem-Solving Strategies

### 11.1 Identifying SHM Problems

1. Look for restoring forces proportional to displacement
2. Identify the equilibrium position
3. Check for small oscillation conditions
4. Determine if energy methods or force methods are more efficient

### 11.2 Finding Period/Frequency

**Force Method:**
1. Write $F = ma$ or $\tau = I\alpha$
2. Get equation in form $\ddot{x} + \omega^2 x = 0$
3. Read off $\omega$, compute $T = 2\pi/\omega$

**Energy Method:**
1. Write total energy $E = K + U$
2. Express both in terms of position and velocity
3. Compare with standard form $E = \frac{1}{2}m\dot{x}^2 + \frac{1}{2}kx^2$
4. Identify effective $m$ and $k$

### 11.3 Using Initial Conditions

Given $x_0$ and $v_0$:
1. Write general solution: $x(t) = A\cos(\omega t + \phi)$
2. Apply $x(0) = x_0$: $A\cos\phi = x_0$
3. Apply $v(0) = v_0$: $-A\omega\sin\phi = v_0$
4. Solve for $A$ and $\phi$

### 11.4 Energy Conservation Checks

Always verify:
- $E = \frac{1}{2}kA^2$ is constant
- $K + U = E$ at all positions
- At turning points: $K = 0$, $U = E$
- At equilibrium: $U = 0$ (if chosen as reference), $K = E$

---

## 📝 Key Equations Summary

### Fundamental SHM

| Quantity | Equation |
|----------|----------|
| Differential Equation | $\ddot{x} + \omega^2 x = 0$ |
| Position | $x(t) = A\cos(\omega t + \phi)$ |
| Velocity | $v(t) = -A\omega\sin(\omega t + \phi)$ |
| Acceleration | $a(t) = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x$ |
| Maximum Velocity | $v_{max} = A\omega$ |
| Maximum Acceleration | $a_{max} = A\omega^2$ |
| Velocity vs Position | $v = \pm\omega\sqrt{A^2 - x^2}$ |

### Energy

| Quantity | Equation |
|----------|----------|
| Kinetic Energy | $K = \frac{1}{2}mv^2 = \frac{1}{2}m\omega^2(A^2 - x^2)$ |
| Potential Energy | $U = \frac{1}{2}kx^2$ |
| Total Energy | $E = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2$ |

### Periods

| System | Period |
|--------|--------|
| Mass-Spring | $T = 2\pi\sqrt{\frac{m}{k}}$ |
| Simple Pendulum | $T = 2\pi\sqrt{\frac{L}{g}}$ |
| Physical Pendulum | $T = 2\pi\sqrt{\frac{I}{Mgd}}$ |
| Torsional | $T = 2\pi\sqrt{\frac{I}{\kappa}}$ |

### Damped Oscillations

| Quantity | Equation |
|----------|----------|
| Equation of Motion | $\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = 0$ |
| Damped Frequency | $\omega' = \sqrt{\omega_0^2 - \gamma^2}$ |
| Underdamped Solution | $x(t) = Ae^{-\gamma t}\cos(\omega' t + \phi)$ |
| Quality Factor | $Q = \frac{\omega_0}{2\gamma}$ |
| Critical Damping | $b_c = 2\sqrt{km}$ |

### Forced Oscillations

| Quantity | Equation |
|----------|----------|
| Resonance Amplitude | $A_{max} = \frac{F_0 Q}{k}$ |
| Resonance Frequency | $\omega_r \approx \omega_0$ (light damping) |
| Phase at Resonance | $\delta = \frac{\pi}{2}$ |
| Bandwidth | $\Delta\omega = \frac{\omega_0}{Q}$ |

---

## 🎯 AP Exam Tips

### Multiple Choice Strategies

1. **Period relationships**: Remember $T$ depends on:
   - Mass-spring: $T \propto \sqrt{m}$, $T \propto 1/\sqrt{k}$
   - Pendulum: $T \propto \sqrt{L}$, independent of $m$

2. **Phase relationships**: Velocity leads position by $\pi/2$; acceleration leads by $\pi$

3. **Energy at extreme positions**:
   - At $x = \pm A$: All PE, no KE
   - At $x = 0$: All KE, no PE

### Free Response Strategies

1. **Always start** with a clear free-body diagram
2. **Define coordinate system** and equilibrium position explicitly
3. **Show derivation** of the differential equation
4. **Apply small angle approximation** when appropriate and state it
5. **Check dimensions** of your final answer
6. **Verify limiting cases** (e.g., as $m \to 0$, $k \to \infty$)

### Common Mistakes to Avoid

❌ Forgetting the small angle approximation for pendulums
❌ Using wrong reference point for potential energy
❌ Confusing angular frequency $\omega$ with regular frequency $f$
❌ Dropping the negative sign in the restoring force
❌ Forgetting to include the phase constant $\phi$
❌ Using the wrong moment of inertia (remember parallel axis theorem!)

---

## 🧪 Practice Problems

### Problem 1: Mass-Spring System
A 0.50 kg mass is attached to a spring with $k = 20$ N/m. It is pulled 0.10 m from equilibrium and released from rest.

a) Find the period and frequency
b) Write the equation $x(t)$
c) Find the maximum velocity and acceleration
d) Find the position and velocity at $t = 0.2$ s

### Problem 2: Physical Pendulum
A uniform meter stick is pivoted at the 20 cm mark. Find the period of small oscillations.

### Problem 3: Damped Oscillator
A damped oscillator has $m = 0.25$ kg, $k = 16$ N/m, and $b = 0.50$ kg/s.

a) Is this underdamped, critically damped, or overdamped?
b) Find the natural and damped frequencies
c) How long until the amplitude decreases to 10% of its initial value?

### Problem 4: Energy Analysis
A mass on a spring oscillates with amplitude 0.15 m. The spring constant is 25 N/m.

a) Find the total energy
b) At what position is $KE = PE$?
c) Find the velocity at this position if $m = 0.50$ kg

---

## ✅ Concept Checklist

Before the exam, make sure you can:

- [ ] Derive the differential equation for SHM from Newton's second law
- [ ] Solve the SHM differential equation with initial conditions
- [ ] Calculate period, frequency, and angular frequency for any oscillator
- [ ] Apply energy conservation to find velocity at any position
- [ ] Derive the period of a simple pendulum using small angle approximation
- [ ] Set up and solve physical pendulum problems
- [ ] Identify the three damping regimes and their characteristics
- [ ] Explain resonance and predict resonance behavior
- [ ] Convert between position, velocity, and acceleration in SHM
- [ ] Draw and interpret energy diagrams for oscillating systems
- [ ] Use the parallel axis theorem for physical pendulums
- [ ] Explain the phase relationships between x, v, and a

---

*Oscillations are the heartbeat of physics—from atoms to galaxies, the universe dances to periodic rhythms. Master this unit, and you'll see these patterns everywhere!* 🌊

:::GUIDE:::
