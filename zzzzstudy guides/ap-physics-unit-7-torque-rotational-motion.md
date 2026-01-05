:::GUIDE:::
unit::=7
title::=🚀 Unit 7: Torque and Rotational Motion Complete Guide
desc::=Master rotational kinematics, torque, moment of inertia, angular momentum, conservation, and rolling motion for AP Physics 1
diff::=advanced
time::=75 minutes
tags::=torque;;rotational-motion;;angular-momentum;;moment-of-inertia;;rolling;;ap-physics-1
content::=
# 🔄 UNIT 7: TORQUE & ROTATIONAL MOTION

## 📋 TABLE OF CONTENTS
- Angular Kinematics
- Torque
- Moment of Inertia
- Rotational Dynamics
- Rotational Kinetic Energy
- Angular Momentum
- Conservation of Angular Momentum
- Rolling Motion
- Rotational vs Translational Comparison
- Problem-Solving Strategies

---

## 🌀 ANGULAR KINEMATICS

### ANGULAR QUANTITIES

| Quantity | Symbol | Linear Analog | Units |
|----------|--------|---------------|-------|
| **Angular position** | $\theta$ | $x$ | radians (rad) |
| **Angular displacement** | $\Delta\theta$ | $\Delta x$ | rad |
| **Angular velocity** | $\omega$ | $v$ | rad/s |
| **Angular acceleration** | $\alpha$ | $a$ | rad/s² |

### CONVERSIONS

**Radians and degrees:**
$$2\pi \text{ rad} = 360° \quad \Rightarrow \quad 1 \text{ rad} = 57.3°$$

**Revolutions:**
$$1 \text{ rev} = 2\pi \text{ rad} = 360°$$

💡 **Always use radians** in physics formulas!

### ANGULAR VELOCITY

**Average:** $\omega_{avg} = \frac{\Delta\theta}{\Delta t}$

**Instantaneous:** $\omega = \frac{d\theta}{dt}$

**Sign convention:**
- Counterclockwise (CCW) → Positive (+)
- Clockwise (CW) → Negative (-)

**Common example:** Earth rotates at $\omega = \frac{2\pi}{24 \text{ hr}} = 7.3 \times 10^{-5}$ rad/s

### ANGULAR ACCELERATION

**Average:** $\alpha_{avg} = \frac{\Delta\omega}{\Delta t}$

**Instantaneous:** $\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}$

---

## 📐 ROTATIONAL KINEMATICS EQUATIONS

### THE BIG 5 (for constant α)

**Exactly parallel to linear kinematics!**

| Rotational | Linear Equivalent |
|------------|-------------------|
| $\omega_f = \omega_i + \alpha t$ | $v_f = v_i + at$ |
| $\Delta\theta = \omega_i t + \frac{1}{2}\alpha t^2$ | $\Delta x = v_i t + \frac{1}{2}at^2$ |
| $\omega_f^2 = \omega_i^2 + 2\alpha\Delta\theta$ | $v_f^2 = v_i^2 + 2a\Delta x$ |
| $\Delta\theta = \frac{1}{2}(\omega_i + \omega_f)t$ | $\Delta x = \frac{1}{2}(v_i + v_f)t$ |
| $\Delta\theta = \omega_f t - \frac{1}{2}\alpha t^2$ | $\Delta x = v_f t - \frac{1}{2}at^2$ |

💡 **Same structure!** Just replace $(x, v, a)$ with $(\theta, \omega, \alpha)$

### RELATIONSHIP TO LINEAR MOTION

For point at distance $r$ from axis:

| Relationship | Formula |
|--------------|---------|
| **Arc length** | $s = r\theta$ |
| **Tangential speed** | $v_t = r\omega$ |
| **Tangential acceleration** | $a_t = r\alpha$ |
| **Centripetal acceleration** | $a_c = r\omega^2 = \frac{v_t^2}{r}$ |

**Total linear acceleration:**
$$a = \sqrt{a_t^2 + a_c^2}$$

**Example:**
Wheel rotates at 120 rpm (revolutions per minute). Find angular velocity.

$\omega = 120 \frac{\text{rev}}{\text{min}} \times \frac{2\pi \text{ rad}}{1 \text{ rev}} \times \frac{1 \text{ min}}{60 \text{ s}} = \frac{120(2\pi)}{60} = 4\pi$ rad/s ≈ 12.6 rad/s ✓

---

## 🔧 TORQUE

### DEFINITION

**Torque ($\tau$)**: Rotational equivalent of force; causes angular acceleration

Formula: $$\tau = rF\sin\theta = r_{\perp}F = rF_{\perp}$$

Where:
- $r$ = distance from axis to point where force applied
- $F$ = magnitude of force
- $\theta$ = angle between $\vec{r}$ and $\vec{F}$
- $r_{\perp}$ = perpendicular distance (lever arm)
- $F_{\perp}$ = component of force perpendicular to $r$

**Units:** N·m (NOT Joules, though dimensionally same!)

### LEVER ARM (Moment Arm)

**Lever arm ($r_{\perp}$)**: Perpendicular distance from axis to line of force

$$r_{\perp} = r\sin\theta$$

💡 **Maximum torque** when force is perpendicular to radius ($\theta = 90°$)
💡 **Zero torque** when force is along radius ($\theta = 0°$ or $180°$)

### SIGN CONVENTION

| Rotation Direction | Sign |
|-------------------|------|
| **Counterclockwise (CCW)** | Positive (+) |
| **Clockwise (CW)** | Negative (-) |

**Net torque:** $\tau_{net} = \sum \tau_i$ (add with signs!)

### EXAMPLES OF TORQUE

| Scenario | Large Torque? |
|----------|--------------|
| 🔧 **Long wrench** | YES (large $r$) |
| 🚪 **Push door at knob** | YES (large $r$, perpendicular) |
| 🚪 **Push door near hinge** | NO (small $r$) |
| ⚖️ **Weight far from fulcrum** | YES (large $r$) |
| 💪 **Push perpendicular** | YES ($\sin\theta = 1$) |
| 💪 **Push toward axis** | NO ($\sin\theta = 0$) |

### TORQUE vs FORCE

| Property | Force | Torque |
|----------|-------|--------|
| **Causes** | Linear acceleration | Angular acceleration |
| **Depends on** | Magnitude, direction | Magnitude, direction, position |
| **Vector?** | Yes | Yes (direction = axis) |
| **Units** | N | N·m |

**Example:**
Force of 50 N applied 0.3 m from axis at 60° to radius. Find torque.

$\tau = rF\sin\theta = 0.3(50)\sin(60°) = 15(0.866) = 13$ N·m ✓

---

## ⚖️ EQUILIBRIUM CONDITIONS

### STATIC EQUILIBRIUM

For object at rest (no translation, no rotation):

**1. Translational equilibrium:** $\sum \vec{F} = 0$
**2. Rotational equilibrium:** $\sum \tau = 0$

**Both conditions must be satisfied!**

### APPLICATIONS

| System | Conditions |
|--------|------------|
| 🌉 **Bridge** | Forces balanced, torques balanced |
| ⚖️ **Balance scale** | Torques equal on both sides |
| 🪜 **Ladder against wall** | No net force, no net torque |
| 🏗️ **Beam on supports** | Forces up = forces down, CCW = CW torques |

### PROBLEM-SOLVING STRATEGY

1. **Draw diagram** with all forces
2. **Choose axis** of rotation (smart choice simplifies!)
3. **Calculate torques** about chosen axis
4. **Set $\sum \tau = 0$** (rotational equilibrium)
5. **Set $\sum F = 0$** (translational equilibrium)
6. **Solve** system of equations

💡 **Pro Tip**: Choose axis through unknown force → that force produces zero torque!

**Example:**
2 m uniform beam (mass 10 kg) supported at left end. What force needed at right end to balance?

Axis at left support:
$\tau_{CCW} = \tau_{CW}$
$F(2) = mg(1)$ (weight acts at center)
$F = \frac{10(10)}{2} = 50$ N ✓

---

## 🎯 MOMENT OF INERTIA

### DEFINITION

**Moment of Inertia ($I$)**: Rotational analog of mass; resistance to angular acceleration

**Formula:** $$I = \sum m_ir_i^2$$

Where:
- $m_i$ = mass of particle $i$
- $r_i$ = distance of particle $i$ from axis

**Units:** kg·m²

💡 **Key Insight**: Mass farther from axis contributes MORE to $I$ (due to $r^2$)

### MOMENTS OF INERTIA (Common Shapes)

**About center of mass:**

| Shape | $I_{cm}$ |
|-------|----------|
| **Point mass** (distance $r$) | $mr^2$ |
| **Thin rod** (through center, ⟂) | $\frac{1}{12}mL^2$ |
| **Thin rod** (through end, ⟂) | $\frac{1}{3}mL^2$ |
| **Solid disk/cylinder** (through center) | $\frac{1}{2}mr^2$ |
| **Hollow cylinder** (through center) | $mr^2$ |
| **Solid sphere** | $\frac{2}{5}mr^2$ |
| **Hollow sphere** | $\frac{2}{3}mr^2$ |
| **Rectangular plate** (through center, ⟂) | $\frac{1}{12}m(a^2 + b^2)$ |

### PARALLEL AXIS THEOREM

**For axis parallel to axis through CM:**

$$I = I_{cm} + md^2$$

Where:
- $I_{cm}$ = moment of inertia through center of mass
- $d$ = distance between axes
- $m$ = total mass

**Example:** Rod rotating about end
$I_{end} = I_{cm} + md^2 = \frac{1}{12}mL^2 + m\left(\frac{L}{2}\right)^2 = \frac{1}{12}mL^2 + \frac{1}{4}mL^2 = \frac{1}{3}mL^2$ ✓

### COMPARING MOMENTS OF INERTIA

For same mass and radius:
- **Hollow cylinder** > **Solid cylinder** (mass farther out)
- **Hollow sphere** > **Solid sphere** (mass farther out)

**General rule:** Mass distributed farther from axis → Larger $I$

---

## 🚀 ROTATIONAL DYNAMICS

### NEWTON'S SECOND LAW (Rotational)

$$\sum \tau = I\alpha$$

**Exactly analogous to:** $\sum F = ma$

Where:
- $\tau$ = torque (N·m)
- $I$ = moment of inertia (kg·m²)
- $\alpha$ = angular acceleration (rad/s²)

### PROBLEM-SOLVING WITH ROTATIONAL DYNAMICS

1. **Draw diagram** showing forces and rotation
2. **Calculate $I$** for the object
3. **Find net torque**: $\sum \tau = \tau_1 + \tau_2 + ...$
4. **Apply $\tau = I\alpha$**
5. **Solve for unknown** ($\alpha$, $F$, etc.)

### ROTATIONAL vs TRANSLATIONAL

| Translational | Rotational |
|--------------|------------|
| $\sum F = ma$ | $\sum \tau = I\alpha$ |
| $m$ (mass) | $I$ (moment of inertia) |
| $a$ (acceleration) | $\alpha$ (angular acceleration) |
| $F$ (force) | $\tau$ (torque) |

💡 **Same physics, different variables!**

**Example:**
Solid disk (m = 2 kg, r = 0.5 m) has torque of 3 N·m applied. Find angular acceleration.

$I = \frac{1}{2}mr^2 = \frac{1}{2}(2)(0.5)^2 = 0.25$ kg·m²

$\alpha = \frac{\tau}{I} = \frac{3}{0.25} = 12$ rad/s² ✓

---

## ⚡ ROTATIONAL KINETIC ENERGY

### FORMULA

$$KE_{rot} = \frac{1}{2}I\omega^2$$

**Analogous to:** $KE_{trans} = \frac{1}{2}mv^2$

**Units:** Joules (J)

### TOTAL KINETIC ENERGY (Rolling Object)

$$KE_{total} = KE_{trans} + KE_{rot} = \frac{1}{2}mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$$

For rolling without slipping: $v_{cm} = r\omega$

### WORK-ENERGY THEOREM (Rotational)

$$W = \Delta KE_{rot} = \frac{1}{2}I\omega_f^2 - \frac{1}{2}I\omega_i^2$$

**Also:** $W = \tau \Delta\theta$ (for constant torque)

### COMPARING OBJECTS ROLLING DOWN RAMP

**Starting from rest, same height:**

**Speed at bottom depends on shape!**

$$v = \sqrt{\frac{2gh}{1 + \frac{I}{mr^2}}}$$

| Shape | Arrives First? | Why |
|-------|---------------|-----|
| **Sliding block** (no rotation) | FASTEST | All PE → translational KE |
| **Solid sphere** | Fast | Small $I/mr^2 = \frac{2}{5}$ |
| **Solid cylinder** | Medium | $I/mr^2 = \frac{1}{2}$ |
| **Hollow cylinder** | Slow | Large $I/mr^2 = 1$ |

💡 **More mass at edge** → More rotational KE → Less translational KE → Slower!

**Example:**
Solid sphere (m = 1 kg, r = 0.1 m) rolling at 5 rad/s. Find rotational KE.

$I = \frac{2}{5}mr^2 = \frac{2}{5}(1)(0.1)^2 = 0.004$ kg·m²

$KE_{rot} = \frac{1}{2}I\omega^2 = \frac{1}{2}(0.004)(5)^2 = 0.05$ J ✓

---

## 🔄 ANGULAR MOMENTUM

### DEFINITION

**Angular momentum ($\vec{L}$)**: Rotational analog of linear momentum

**For rotating object:** $$L = I\omega$$

**For point mass:** $$L = mvr\sin\theta = r_{\perp}mv$$

**Units:** kg·m²/s

**Direction:** Right-hand rule (fingers curl with rotation, thumb = $\vec{L}$)

### ANGULAR MOMENTUM vs LINEAR MOMENTUM

| Linear | Angular |
|--------|---------|
| $\vec{p} = m\vec{v}$ | $\vec{L} = I\vec{\omega}$ |
| $\sum \vec{F} = \frac{d\vec{p}}{dt}$ | $\sum \vec{\tau} = \frac{d\vec{L}}{dt}$ |
| Conserved if $\sum F = 0$ | Conserved if $\sum \tau = 0$ |

### TORQUE AND ANGULAR MOMENTUM

$$\sum \tau = \frac{dL}{dt} = I\alpha$$

If $I$ is constant: $\tau = I\frac{d\omega}{dt} = I\alpha$ ✓

---

## ⚖️ CONSERVATION OF ANGULAR MOMENTUM

### THE LAW

**"In an isolated system with no external torque, total angular momentum is conserved."**

$$L_i = L_f$$
$$I_i\omega_i = I_f\omega_f$$

### WHEN TO USE

✅ **Use conservation when:**
- No external torques (or they cancel)
- System is isolated
- Moment of inertia changes (key!)
- Need final angular velocity

### APPLICATIONS

| Scenario | What Happens |
|----------|--------------|
| ⛸️ **Ice skater** pulls arms in | $I$ ↓ → $\omega$ ↑ (spins faster) |
| 🤸 **Diver** tucks body | $I$ ↓ → $\omega$ ↑ (rotates faster) |
| 🪐 **Star collapse** | $I$ ↓ → $\omega$ ↑ (neutron star spins rapidly) |
| 🚁 **Helicopter** tail rotor | Cancels torque from main rotor |
| 🌍 **Earth-Moon** system | Angular momentum conserved (Moon receding!) |

### SKATER PROBLEM (Classic!)

**Skater spinning with arms out:**
- $I_i$ = large (mass far from axis)
- $\omega_i$ = slow

**Pulls arms in:**
- $I_f$ = small (mass close to axis)
- $\omega_f$ = fast!

$$I_i\omega_i = I_f\omega_f \quad \Rightarrow \quad \omega_f = \frac{I_i}{I_f}\omega_i$$

Since $I_i > I_f$, we get $\omega_f > \omega_i$ ✓

### ENERGY IN CONSERVATION

**Important:** When $I$ changes, **energy is NOT conserved!**
- Skater does work pulling arms in
- KE increases: $KE_f > KE_i$
- But $L$ stays constant!

**Example:**
Skater with $I_i = 5$ kg·m² spins at 2 rad/s. Pulls arms in to $I_f = 2$ kg·m². Find final ω.

$I_i\omega_i = I_f\omega_f$
$5(2) = 2\omega_f$
$\omega_f = 5$ rad/s ✓

(Spins 2.5× faster!)

---

## 🎳 ROLLING MOTION

### ROLLING WITHOUT SLIPPING

**Constraint:** $v_{cm} = r\omega$

- Point of contact instantaneously at rest
- Top of wheel moves at $2v_{cm}$
- Rolling = translation + rotation

### KINETIC ENERGY OF ROLLING OBJECT

$$KE_{total} = \frac{1}{2}mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$$

Using $v_{cm} = r\omega$:

$$KE_{total} = \frac{1}{2}mv_{cm}^2\left(1 + \frac{I_{cm}}{mr^2}\right)$$

### ROLLING DOWN INCLINE

**Energy conservation:**
$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2$$

Using $v = r\omega$ and solving:

$$v = \sqrt{\frac{2gh}{1 + \frac{I}{mr^2}}}$$

**Notice:** Speed **independent of mass and radius**! Only depends on **shape** (via $I/mr^2$)!

### ACCELERATION DOWN RAMP

$$a = \frac{g\sin\theta}{1 + \frac{I}{mr^2}}$$

### ROLLING RACE

**Down same incline, which wins?**

Smallest $\frac{I}{mr^2}$ → Fastest!

1. 🧊 **Sliding block**: $\frac{I}{mr^2} = 0$ → $a = g\sin\theta$ (FASTEST)
2. ⚪ **Solid sphere**: $\frac{I}{mr^2} = \frac{2}{5}$ → $a = \frac{5}{7}g\sin\theta$
3. 🥏 **Solid disk**: $\frac{I}{mr^2} = \frac{1}{2}$ → $a = \frac{2}{3}g\sin\theta$
4. ⭕ **Hollow cylinder**: $\frac{I}{mr^2} = 1$ → $a = \frac{1}{2}g\sin\theta$ (SLOWEST)

💡 **Shape matters, not mass or size!**

**Example:**
Solid sphere rolls down 10 m high ramp. Find speed at bottom.

$v = \sqrt{\frac{2gh}{1 + \frac{2}{5}}} = \sqrt{\frac{2(10)(10)}{1.4}} = \sqrt{\frac{200}{1.4}} = \sqrt{142.9} \approx 12$ m/s ✓

(Compare to free fall: $v = \sqrt{2gh} = \sqrt{200} = 14.1$ m/s)

---

## 🔄 ROTATIONAL vs TRANSLATIONAL COMPARISON

### COMPLETE ANALOGY TABLE

| Translational | Rotational | Relationship |
|--------------|------------|--------------|
| Position ($x$) | Angle ($\theta$) | $s = r\theta$ |
| Velocity ($v$) | Angular velocity ($\omega$) | $v = r\omega$ |
| Acceleration ($a$) | Angular acceleration ($\alpha$) | $a_t = r\alpha$ |
| Mass ($m$) | Moment of inertia ($I$) | $I = \sum mr^2$ |
| Force ($F$) | Torque ($\tau$) | $\tau = rF$ |
| $F = ma$ | $\tau = I\alpha$ | Newton's 2nd Law |
| $p = mv$ | $L = I\omega$ | Momentum |
| $KE = \frac{1}{2}mv^2$ | $KE = \frac{1}{2}I\omega^2$ | Kinetic energy |
| $W = Fd$ | $W = \tau\theta$ | Work |
| $P = Fv$ | $P = \tau\omega$ | Power |

💡 **Perfect parallel!** Learn one, understand both!

---

## 🧮 PROBLEM-SOLVING STRATEGIES

### GENERAL APPROACH

1. **🔍 Identify**: Rotation? Translation? Both?
2. **🎨 Draw diagram**: Forces, torques, rotation direction
3. **📝 Choose axis**: Smart choice simplifies calculations
4. **🧮 Calculate $I$**: Use formulas or parallel axis theorem
5. **⚖️ Apply laws**: $\sum F = ma$ and/or $\sum \tau = I\alpha$
6. **✅ Check**: Units, signs, reasonableness

### FOR EQUILIBRIUM PROBLEMS

- Choose axis to eliminate unknown forces
- Set $\sum \tau = 0$ and $\sum F = 0$
- Solve system of equations

### FOR CONSERVATION OF ANGULAR MOMENTUM

- Check for external torques (if none, conserve L!)
- $I_i\omega_i = I_f\omega_f$
- Remember: Energy usually NOT conserved when I changes

### FOR ROLLING MOTION

- Use constraint: $v_{cm} = r\omega$
- Energy: Include both translational and rotational KE
- Down ramp: Smaller $I/mr^2$ wins the race!

---

## 💡 WORKED EXAMPLES

### Example 1: Torque and Angular Acceleration

**Problem:** Solid disk (m = 3 kg, r = 0.4 m) has 20 N force applied tangentially at edge. Find angular acceleration.

**Solution:**
$I = \frac{1}{2}mr^2 = \frac{1}{2}(3)(0.4)^2 = 0.24$ kg·m²

$\tau = rF = 0.4(20) = 8$ N·m (tangential → $\sin\theta = 1$)

$\alpha = \frac{\tau}{I} = \frac{8}{0.24} = 33.3$ rad/s² ✓

### Example 2: Conservation of Angular Momentum

**Problem:** Merry-go-round ($I = 500$ kg·m², $\omega = 0.5$ rad/s) has 50 kg child jump on edge (r = 2 m). Find new ω.

**Solution:**
$L_i = L_f$
$I_i\omega_i = (I_{mgr} + I_{child})\omega_f$

$I_{child} = mr^2 = 50(2)^2 = 200$ kg·m²

$500(0.5) = (500 + 200)\omega_f$
$250 = 700\omega_f$
$\omega_f = 0.357$ rad/s ✓

(Slows down because total I increased!)

### Example 3: Rolling Down Ramp

**Problem:** Solid cylinder rolls down 30° ramp from height 5 m. Find speed at bottom.

**Solution:**
For solid cylinder: $\frac{I}{mr^2} = \frac{1}{2}$

$v = \sqrt{\frac{2gh}{1 + \frac{1}{2}}} = \sqrt{\frac{2(10)(5)}{1.5}} = \sqrt{\frac{100}{1.5}} = \sqrt{66.7} \approx 8.2$ m/s ✓

### Example 4: Equilibrium

**Problem:** 4 m uniform beam (mass 20 kg) rests on fulcrum at center. 30 kg child sits 1.5 m from left end. Where should 40 kg child sit to balance?

**Solution:**
Axis at fulcrum:
$\tau_{CCW} = \tau_{CW}$

Left: 30 kg at 0.5 m from center (30 kg at 1.5 m from left = 0.5 m from center)
$\tau_L = 30(10)(0.5) = 150$ N·m

Right: 40 kg at distance $d$ from center
$\tau_R = 40(10)d = 400d$ N·m

$150 = 400d$
$d = 0.375$ m from center (right side) ✓

---

## 🧠 KEY FORMULAS SUMMARY

### Angular Kinematics
- $\omega_f = \omega_i + \alpha t$
- $\Delta\theta = \omega_i t + \frac{1}{2}\alpha t^2$
- $\omega_f^2 = \omega_i^2 + 2\alpha\Delta\theta$
- $v = r\omega$, $a_t = r\alpha$

### Torque
- $\tau = rF\sin\theta = r_{\perp}F$
- $\sum \tau = I\alpha$

### Moment of Inertia
- Point mass: $I = mr^2$
- Solid disk: $I = \frac{1}{2}mr^2$
- Solid sphere: $I = \frac{2}{5}mr^2$
- Rod (center): $I = \frac{1}{12}mL^2$

### Energy & Momentum
- $KE_{rot} = \frac{1}{2}I\omega^2$
- $L = I\omega$
- Conservation: $I_i\omega_i = I_f\omega_f$

### Rolling
- $v_{cm} = r\omega$ (no slipping)
- $KE_{total} = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2$

---

## ❌ COMMON MISTAKES TO AVOID

❌ **Using degrees instead of radians**
✅ Always convert to radians in formulas!

❌ **Confusing torque with work** (both N·m)
✅ Torque causes rotation; work transfers energy

❌ **Forgetting $r^2$ in moment of inertia**
✅ $I = mr^2$, not $mr$!

❌ **Thinking energy conserved when I changes**
✅ Angular momentum conserved; energy usually not!

❌ **Using wrong I formula for axis**
✅ Check if axis through center or end!

❌ **Forgetting rotational KE in rolling**
✅ Total KE = translational + rotational

❌ **Thinking all shapes roll at same speed**
✅ Shape matters! Sphere beats cylinder!

❌ **Not using $v = r\omega$ for rolling**
✅ This constraint is crucial for rolling problems!

---

## 🔥 EXAM STRATEGIES

### QUICK IDENTIFICATION

| Given | Use |
|-------|-----|
| Forces and rotation | Torque: $\tau = I\alpha$ |
| No external torque | Conservation: $I_i\omega_i = I_f\omega_f$ |
| Rolling down ramp | Energy with both KE types |
| Static beam/lever | Equilibrium: $\sum \tau = 0$ |

### FOR FREE RESPONSE

- **Always show moment of inertia calculation**
- **Draw rotation direction** clearly
- **Label all torques** (sign matters!)
- **Show all energy types** in rolling problems
- **State conservation laws** explicitly

### FORMULAS TO MEMORIZE

- $\tau = rF\sin\theta$
- $\sum \tau = I\alpha$
- $L = I\omega$
- $KE_{rot} = \frac{1}{2}I\omega^2$
- $v = r\omega$ (rolling)
- Common I formulas (disk, sphere, rod)

---

## 📝 PRACTICE CHECKLIST

Before the exam, make sure you can:
- ✅ Convert between angular and linear quantities
- ✅ Calculate torque in various scenarios
- ✅ Find moments of inertia for common shapes
- ✅ Apply rotational dynamics ($\tau = I\alpha$)
- ✅ Solve equilibrium problems (both force and torque)
- ✅ Calculate rotational kinetic energy
- ✅ Use conservation of angular momentum
- ✅ Analyze rolling motion (energy and forces)
- ✅ Compare races between different rolling objects
- ✅ Apply parallel axis theorem

---

## 🎯 FINAL TIPS

🔄 **Rotation parallels translation** - use the analogy!

🔧 **Torque = rotational force** - needs distance from axis

⚡ **$I$ depends on axis** - same object, different I for different axes

⛸️ **Pull arms in → spin faster** - angular momentum conservation

🎳 **Sphere beats cylinder** rolling down ramp - shape matters!

📊 **Draw everything** - forces, torques, rotation direction

⚖️ **Equilibrium needs two conditions** - forces AND torques zero

🌀 **Use radians** always in rotational formulas

💡 **Energy NOT conserved** when I changes (but L is!)

🚀 **You've got this!** Rotational motion extends all of mechanics into a new dimension. Master these concepts and you've completed the core of classical physics! 💪

---

## ✨ FINAL THOUGHTS

Rotational motion is everywhere - from spinning electrons to rotating galaxies, from bicycle wheels to planetary orbits. Understanding rotation completes your grasp of classical mechanics and prepares you for more advanced physics! 🌟

**Remember:** The universe rotates. Stars spin, planets orbit, electrons have angular momentum. The principles you've learned govern motion at every scale. You've mastered the fundamental laws that describe how everything moves and spins in our cosmos! 🌌

**Congratulations on completing all 7 units of AP Physics 1!** You now have the tools to understand the physical world from falling apples to orbiting satellites. Keep practicing, stay curious, and remember - physics is the language of the universe! 🎓✨

Happy studying and best of luck on your exam! 📚🚀
