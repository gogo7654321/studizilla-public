:::GUIDE:::
unit::=7
title::=⚡ Unit 7: Gravitation
desc::=Master gravitational fields, orbits, and Kepler's laws with calculus
diff::=Very Hard
time::=55 min
tags::=physics-c,mechanics,gravitation,orbits,kepler
content::=

# ⚡ Unit 7: Gravitation

## 📚 Introduction to Universal Gravitation

Gravitation is one of the four fundamental forces of nature and governs the motion of planets, stars, galaxies, and everything in between. In this unit, we apply calculus to derive and understand gravitational phenomena at a deep level.

---

## 🌍 Newton's Law of Universal Gravitation

### The Fundamental Law

Every particle in the universe attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them:

$$\vec{F} = -\frac{Gm_1m_2}{r^2}\hat{r}$$

Where:
- **G** = 6.674 × 10⁻¹¹ N·m²/kg² (gravitational constant)
- **m₁, m₂** = masses of the two objects
- **r** = distance between centers of mass
- **r̂** = unit vector pointing from one mass to the other
- Negative sign indicates attractive force

### Vector Form

For mass m₁ at position **r₁** and mass m₂ at position **r₂**:

$$\vec{F}_{12} = -\frac{Gm_1m_2}{|\vec{r}_2 - \vec{r}_1|^3}(\vec{r}_2 - \vec{r}_1)$$

This gives the force on mass 1 due to mass 2.

### Superposition Principle

For multiple masses, the net gravitational force is the vector sum:

$$\vec{F}_{net} = \sum_{i} \vec{F}_i = -Gm\sum_{i}\frac{m_i}{r_i^2}\hat{r}_i$$

```
    Superposition of Gravitational Forces
    
         m₂
          ●
         /|
        / |
    F₂ ↙  |
      /   |
     ●----+----● m₃
    m     |   → F₃
     \    |
      \   |
    F₁ ↘  |
        \ |
         \|
          ●
         m₁
    
    F_net = F₁ + F₂ + F₃ (vector sum)
```

---

## 🧲 Gravitational Field

### Definition of Gravitational Field

The gravitational field **g** at a point in space is the gravitational force per unit mass:

$$\vec{g} = \frac{\vec{F}}{m} = -\frac{GM}{r^2}\hat{r}$$

Where M is the source mass creating the field.

### Field as a Vector Field

The gravitational field is a **vector field** - it assigns a vector to every point in space:

```
    Gravitational Field Lines (Point Mass)
    
              ↓   ↓   ↓
            ↘   ↓   ↓   ↙
          ↘           ↙
        ↘       ●       ↙
          ↘    M     ↙
            ↘       ↙
              ↓   ↓
    
    Field lines point radially inward
    Density indicates field strength
```

### Gravitational Field of a Spherical Shell

For a uniform spherical shell of mass M and radius R:

**Outside the shell (r > R):**
$$g = \frac{GM}{r^2}$$

**Inside the shell (r < R):**
$$g = 0$$

This remarkable result means a particle inside a uniform spherical shell experiences no net gravitational force from the shell.

### Gravitational Field of a Solid Sphere

For a uniform solid sphere of mass M and radius R:

**Outside the sphere (r > R):**
$$g = \frac{GM}{r^2}$$

**Inside the sphere (r < R):**
$$g = \frac{GM}{R^3}r = \frac{4\pi G\rho}{3}r$$

Where ρ is the density of the sphere.

```
    Gravitational Field vs. Distance (Solid Sphere)
    
    g
    |
    |     /\
    |    /  \
    |   /    \_____
    |  /           \_____
    | /                  \____
    |/                        \___
    +--------------------------------→ r
    0    R
    
    Linear inside | Inverse square outside
```

### Derivation: Field Inside a Solid Sphere

Consider a uniform sphere of radius R and total mass M. For a point at distance r < R from the center:

Only the mass within radius r contributes (shell theorem):

$$M_{enclosed} = \frac{4}{3}\pi r^3 \rho = M\frac{r^3}{R^3}$$

Therefore:
$$g = \frac{GM_{enclosed}}{r^2} = \frac{GM}{R^3}r$$

The field increases linearly with distance from the center.

---

## ⚡ Gravitational Potential Energy

### Definition and Derivation

Gravitational potential energy is defined as the work done against gravity to bring a mass from infinity to position r:

$$U(r) = -\int_{\infty}^{r} \vec{F} \cdot d\vec{r}$$

For a point mass M:
$$U(r) = -\int_{\infty}^{r} \left(-\frac{GMm}{r'^2}\right) dr'$$

$$U(r) = -GMm\left[\frac{1}{r'}\right]_{\infty}^{r} = -\frac{GMm}{r}$$

### Key Properties

1. **Reference point**: U = 0 at r = ∞
2. **Always negative**: Objects are bound (lower energy) when closer
3. **Approaches zero**: As r → ∞, U → 0

```
    Gravitational Potential Energy vs. Distance
    
    U
    |
   0+------------------------→ r
    |         _____------
    |    ___--
    |  _-
    | /
    |/
    |
    -GMm/r
    
    U approaches 0 as r → ∞
    U → -∞ as r → 0
```

### Total Mechanical Energy

For an object in a gravitational field:

$$E = K + U = \frac{1}{2}mv^2 - \frac{GMm}{r}$$

The sign of E determines the type of orbit:
- **E < 0**: Bound orbit (elliptical or circular)
- **E = 0**: Parabolic trajectory (escape)
- **E > 0**: Hyperbolic trajectory (unbound)

---

## 🚀 Escape Velocity

### Derivation

Escape velocity is the minimum speed needed for an object to escape a gravitational field (reach infinity with zero kinetic energy).

Using conservation of energy:
$$E_i = E_f$$
$$\frac{1}{2}mv_{escape}^2 - \frac{GMm}{R} = 0 + 0$$

Solving for v_escape:
$$v_{escape} = \sqrt{\frac{2GM}{R}}$$

### Alternative Derivation Using Calculus

The work needed to move from R to infinity:
$$W = \int_{R}^{\infty} \frac{GMm}{r^2} dr = GMm\left[-\frac{1}{r}\right]_{R}^{\infty} = \frac{GMm}{R}$$

This work equals the initial kinetic energy:
$$\frac{1}{2}mv_{escape}^2 = \frac{GMm}{R}$$
$$v_{escape} = \sqrt{\frac{2GM}{R}}$$

### Important Values

| Body | Escape Velocity |
|------|----------------|
| Earth | 11.2 km/s |
| Moon | 2.4 km/s |
| Sun | 618 km/s |
| Jupiter | 60 km/s |

### Relationship to Orbital Velocity

For a circular orbit at radius R:
$$v_{orbital} = \sqrt{\frac{GM}{R}}$$

Therefore:
$$v_{escape} = \sqrt{2} \cdot v_{orbital} \approx 1.414 \cdot v_{orbital}$$

---

## 🔄 Orbital Motion

### Circular Orbits

For a circular orbit, gravity provides the centripetal force:

$$\frac{GMm}{r^2} = \frac{mv^2}{r}$$

Solving for orbital velocity:
$$v = \sqrt{\frac{GM}{r}}$$

### Orbital Period

$$T = \frac{2\pi r}{v} = 2\pi r\sqrt{\frac{r}{GM}} = 2\pi\sqrt{\frac{r^3}{GM}}$$

Squaring:
$$T^2 = \frac{4\pi^2}{GM}r^3$$

This is **Kepler's Third Law** for circular orbits!

### Energy of Circular Orbits

**Kinetic Energy:**
$$K = \frac{1}{2}mv^2 = \frac{1}{2}m\cdot\frac{GM}{r} = \frac{GMm}{2r}$$

**Potential Energy:**
$$U = -\frac{GMm}{r}$$

**Total Energy:**
$$E = K + U = \frac{GMm}{2r} - \frac{GMm}{r} = -\frac{GMm}{2r}$$

### Virial Theorem

For gravitationally bound systems:
$$K = -\frac{1}{2}U$$
$$E = -K = \frac{1}{2}U$$

```
    Energy Diagram for Circular Orbit
    
    Energy
      |
      |  K = GMm/2r -------- (positive)
     0+------------------------→ r
      |
      |  E = -GMm/2r -------- (total)
      |
      |  U = -GMm/r --------- (potential)
      |
    
    Note: |U| = 2K and E = -K
```

---

## 📐 Kepler's Laws

### Kepler's First Law: Law of Ellipses

Planets move in elliptical orbits with the Sun at one focus.

```
    Elliptical Orbit
    
                  b (semi-minor axis)
                    ↕
         .___________.__________.
       ,'     |      ●    |     `.
      /       |     Sun   |       \
     |        |           |        |
     |←--c---→|←----a----→|        |
     |        |           |        |
      \       |           |       /
       `._____|___________|_____.'
              ←------a------→
              (semi-major axis)
    
    c = ae (where e is eccentricity)
    b² = a²(1 - e²)
```

**Orbital Equation:**
$$r = \frac{a(1-e^2)}{1 + e\cos\theta}$$

Where:
- **a** = semi-major axis
- **e** = eccentricity (0 ≤ e < 1 for ellipse)
- **θ** = true anomaly (angle from perihelion)

**Special Points:**
- **Perihelion**: r_min = a(1 - e) (closest approach)
- **Aphelion**: r_max = a(1 + e) (farthest point)

### Kepler's Second Law: Law of Equal Areas

A line from the Sun to a planet sweeps equal areas in equal times.

```
    Equal Areas in Equal Times
    
              Slow (aphelion)
                   ↓
           .------●------.
         ,'   \   |   /   `.
        /      \  |  /      \
       |        \ | /        |
       |    ●----\|/         |   Equal areas
       |   Sun   /|\         |   ΔA₁ = ΔA₂
       |        / | \        |
        \      /  |  \      /
         `.   /   |   \   .'
           '-●---------'
            ↑
        Fast (perihelion)
```

**Mathematical Form:**
$$\frac{dA}{dt} = \frac{1}{2}r^2\frac{d\theta}{dt} = \frac{L}{2m} = \text{constant}$$

This is a consequence of **conservation of angular momentum**:
$$L = mr^2\dot{\theta} = \text{constant}$$

### Derivation of Kepler's Second Law

The area element swept in time dt:
$$dA = \frac{1}{2}r(r\,d\theta) = \frac{1}{2}r^2\,d\theta$$

Rate of area swept:
$$\frac{dA}{dt} = \frac{1}{2}r^2\frac{d\theta}{dt} = \frac{1}{2}r^2\omega$$

Since L = mr²ω:
$$\frac{dA}{dt} = \frac{L}{2m}$$

Angular momentum is conserved (central force), so dA/dt is constant.

### Kepler's Third Law: Harmonic Law

The square of the orbital period is proportional to the cube of the semi-major axis:

$$T^2 = \frac{4\pi^2}{GM}a^3$$

Or equivalently:
$$\frac{T^2}{a^3} = \frac{4\pi^2}{GM} = \text{constant for all planets}$$

### Derivation of Kepler's Third Law (Elliptical Orbits)

The area of an ellipse is:
$$A = \pi ab$$

Using Kepler's Second Law:
$$A = \frac{L}{2m}T$$

Therefore:
$$\pi ab = \frac{L}{2m}T$$

For an ellipse: b = a√(1 - e²)

Also, angular momentum can be written as:
$$L = m\sqrt{GMa(1-e^2)}$$

Substituting and simplifying:
$$T = 2\pi\sqrt{\frac{a^3}{GM}}$$

---

## 🌑 Orbital Mechanics

### Orbital Elements

An orbit is completely specified by six orbital elements:
1. **Semi-major axis (a)**: Size of orbit
2. **Eccentricity (e)**: Shape of orbit
3. **Inclination (i)**: Tilt relative to reference plane
4. **Longitude of ascending node (Ω)**: Orientation in space
5. **Argument of periapsis (ω)**: Orientation in orbital plane
6. **True anomaly (θ)**: Position in orbit

### Vis-Viva Equation

The **vis-viva equation** relates orbital speed to position:

$$v^2 = GM\left(\frac{2}{r} - \frac{1}{a}\right)$$

**Derivation:**

Total energy:
$$E = \frac{1}{2}mv^2 - \frac{GMm}{r} = -\frac{GMm}{2a}$$

Solving for v²:
$$\frac{1}{2}v^2 = \frac{GM}{r} - \frac{GM}{2a}$$
$$v^2 = GM\left(\frac{2}{r} - \frac{1}{a}\right)$$

### Special Cases of Vis-Viva

**Circular orbit (r = a):**
$$v = \sqrt{\frac{GM}{a}}$$

**At perihelion (r = a(1-e)):**
$$v_p = \sqrt{GM\cdot\frac{1+e}{a(1-e)}}$$

**At aphelion (r = a(1+e)):**
$$v_a = \sqrt{GM\cdot\frac{1-e}{a(1+e)}}$$

### Relationship Between Perihelion and Aphelion Velocities

Using conservation of angular momentum:
$$r_p v_p = r_a v_a$$
$$\frac{v_p}{v_a} = \frac{r_a}{r_p} = \frac{1+e}{1-e}$$

---

## 🛸 Orbital Transfers

### Hohmann Transfer Orbit

The most fuel-efficient transfer between two circular orbits is the **Hohmann transfer** - an elliptical orbit tangent to both circles.

```
    Hohmann Transfer
    
                  ○ Target orbit
               ,'   `.
             ,'       `.
           ,'     ⊕     `.
          |      Earth    |
          |               |
           `.           .'
        Δv₂ ↑`.       .' Transfer orbit
              `.   .'
                `○' Starting orbit
                 ↑
                Δv₁
```

**Transfer ellipse semi-major axis:**
$$a_t = \frac{r_1 + r_2}{2}$$

**Velocity changes:**

At departure (r₁):
$$\Delta v_1 = \sqrt{\frac{GM}{r_1}}\left(\sqrt{\frac{2r_2}{r_1+r_2}} - 1\right)$$

At arrival (r₂):
$$\Delta v_2 = \sqrt{\frac{GM}{r_2}}\left(1 - \sqrt{\frac{2r_1}{r_1+r_2}}\right)$$

**Transfer time:**
$$t_{transfer} = \frac{T_t}{2} = \pi\sqrt{\frac{a_t^3}{GM}}$$

### Bi-elliptic Transfer

For transfers with r₂/r₁ > 11.94, a bi-elliptic transfer can be more efficient:

```
    Bi-elliptic Transfer
    
                      ○ Intermediate point (r₃)
                    ,'  `.
                  ,'      `.
                ,'    ⊕    `.
               |            |
    Target →  ○'            `.
    orbit    /  `.          ,'
            |     `.      ,'
            |       `.  ,'
    Start → ○---------○'
    orbit
```

Requires three burns but can save fuel for large radius ratios.

---

## 💫 Gravitational Potential

### Scalar Gravitational Potential

The gravitational potential V at a point is the work done per unit mass to bring a test mass from infinity:

$$V = \frac{U}{m} = -\frac{GM}{r}$$

Units: J/kg or m²/s²

### Relationship to Field

The gravitational field is the negative gradient of the potential:

$$\vec{g} = -\nabla V = -\frac{dV}{dr}\hat{r}$$

For a point mass:
$$\vec{g} = -\frac{d}{dr}\left(-\frac{GM}{r}\right)\hat{r} = -\frac{GM}{r^2}\hat{r}$$

### Equipotential Surfaces

Surfaces of constant gravitational potential:

```
    Equipotential Lines (2D cross-section)
    
           V = -GM/r₃
         .----○----.
       ,'     |     `.     V = -GM/r₂
      /   .---○---.   \
     |  ,'    |    `.  |   V = -GM/r₁
     | /   .--●--.   \ |
     ||   |   M   |   ||
     | \   `-----'   / |
     |  `.         .'  |
      \   `-------'   /
       `.           .'
         `---------'
    
    Closer equipotentials = stronger field
```

### Potential Energy from Potential

$$U = mV = -\frac{GMm}{r}$$

### Gravitational Potential of Multiple Masses

Potentials add as scalars (not vectors):
$$V_{total} = \sum_i V_i = -G\sum_i \frac{m_i}{r_i}$$

---

## 🌊 Tidal Forces

### Origin of Tides

Tidal forces arise from the **differential gravitational force** across an extended body.

```
    Tidal Forces on Earth from Moon
    
                    To Moon →
    
         Tidal       Earth        Tidal
         bulge                    bulge
          ←━━━━━━━●━━━━━━━→
                  ⊕
    
    Near side: Pulled toward Moon
    Far side: "Left behind" (inertia)
```

### Tidal Acceleration

The tidal acceleration at distance d from Earth's center (Earth-Moon distance R):

$$a_{tidal} \approx \frac{2GMd}{R^3}$$

**Derivation:**

Gravitational acceleration at center:
$$g_c = \frac{GM}{R^2}$$

At near side (distance R - d):
$$g_{near} = \frac{GM}{(R-d)^2} \approx \frac{GM}{R^2}\left(1 + \frac{2d}{R}\right)$$

Differential:
$$\Delta g = g_{near} - g_c \approx \frac{2GMd}{R^3}$$

### Roche Limit

The minimum distance at which a celestial body, held together only by gravity, can approach a larger body without being torn apart:

$$d_{Roche} \approx 2.44 R_M \left(\frac{\rho_M}{\rho_m}\right)^{1/3}$$

Where:
- R_M = radius of the primary
- ρ_M = density of the primary
- ρ_m = density of the satellite

---

## 🔬 Advanced Topics

### Reduced Mass

For two-body problems, we can use the **reduced mass**:

$$\mu = \frac{m_1 m_2}{m_1 + m_2}$$

The two-body problem reduces to a one-body problem with reduced mass μ orbiting the center of mass.

### Center of Mass Motion

Both bodies orbit the center of mass (barycenter):

$$r_1 = \frac{m_2}{m_1 + m_2}r$$
$$r_2 = \frac{m_1}{m_1 + m_2}r$$

Where r is the separation.

```
    Two-Body System
    
         m₁                    m₂
          ●←——— r₁ ———→CM←—— r₂ ——→●
    
    m₁r₁ = m₂r₂ (definition of CM)
```

### Effective Potential

For motion with angular momentum L, the effective potential is:

$$U_{eff}(r) = -\frac{GMm}{r} + \frac{L^2}{2mr^2}$$

```
    Effective Potential
    
    U_eff
      |          L²/2mr²
      |         /
      |        /
      |       /
      |______|._____  ← E (bound orbit)
      |     /'`.
      |    /    `.___________  U_eff
      |   /
      |  /      -GMm/r
      | /
      |/
      +------------------------→ r
           r_min  r₀  r_max
    
    r₀ = circular orbit radius
```

### Conditions for Circular Orbit

At the minimum of U_eff:
$$\frac{dU_{eff}}{dr} = 0$$
$$\frac{GMm}{r^2} - \frac{L^2}{mr^3} = 0$$
$$r_0 = \frac{L^2}{GMm^2}$$

---

## 📊 Energy Diagrams for Different Orbits

```
    Total Energy and Orbit Types
    
    Energy
      |
      |  E > 0 ←——————————— Hyperbolic (unbound)
      |
     0+-------------------------
      |
      |  E = 0 ←——————————— Parabolic (escape)
      |
      |  E < 0 ←——————————— Elliptical (bound)
      |
      |  E = -GMm/2a ←————— Circular
      |
      
    For ellipse: E = -GMm/2a
    For circle: E = -GMm/2r
```

### Orbit Summary Table

| Orbit Type | Eccentricity | Total Energy | Shape |
|------------|--------------|--------------|-------|
| Circular | e = 0 | E = -GMm/2r | Circle |
| Elliptical | 0 < e < 1 | E < 0 | Ellipse |
| Parabolic | e = 1 | E = 0 | Parabola |
| Hyperbolic | e > 1 | E > 0 | Hyperbola |

---

## 🧮 Important Derivations Summary

### 1. Orbital Velocity (Circular)
$$F_{gravity} = F_{centripetal}$$
$$\frac{GMm}{r^2} = \frac{mv^2}{r}$$
$$v = \sqrt{\frac{GM}{r}}$$

### 2. Orbital Period
$$T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM}}$$

### 3. Escape Velocity
$$\frac{1}{2}mv^2 = \frac{GMm}{R}$$
$$v_{escape} = \sqrt{\frac{2GM}{R}}$$

### 4. Gravitational Potential Energy
$$U = -\int_{\infty}^{r} F \, dr = -\frac{GMm}{r}$$

### 5. Kepler's Third Law
$$T^2 = \frac{4\pi^2}{GM}a^3$$

---

## 🎯 AP Exam Tips

### Common Mistakes to Avoid

1. **Forgetting the negative sign** in potential energy
2. **Using diameter instead of radius** in formulas
3. **Confusing g (field) with G (constant)**
4. **Not using the center-to-center distance** for r
5. **Forgetting that E < 0 for bound orbits**

### Key Relationships to Memorize

- v_escape = √2 × v_orbital
- K = -E = -½U (for circular orbits)
- At perihelion: maximum speed, minimum distance
- At aphelion: minimum speed, maximum distance

### Problem-Solving Strategy

1. **Identify the type** of orbit (circular, elliptical, escape)
2. **Choose your conservation laws** (energy, angular momentum)
3. **Draw a clear diagram** with all relevant distances
4. **Check your answer**: Does the sign make sense? Units correct?

---

## 📝 Practice Problems

### Problem 1: Escape Velocity
A rocket is launched from a planet of mass M and radius R. Derive an expression for the minimum launch speed to escape the planet's gravity.

**Solution:**
Using energy conservation:
$$K_i + U_i = K_f + U_f$$
$$\frac{1}{2}mv^2 - \frac{GMm}{R} = 0 + 0$$
$$v = \sqrt{\frac{2GM}{R}}$$

### Problem 2: Orbital Energy Change
A satellite in a circular orbit of radius r₁ is moved to a circular orbit of radius r₂ = 2r₁. By what factor does its total energy change?

**Solution:**
$$E_1 = -\frac{GMm}{2r_1}$$
$$E_2 = -\frac{GMm}{2(2r_1)} = -\frac{GMm}{4r_1}$$
$$\frac{E_2}{E_1} = \frac{1}{2}$$

The energy becomes half as negative (less bound).

### Problem 3: Kepler's Second Law
A comet has perihelion distance of 1 AU and aphelion distance of 100 AU. What is the ratio of its speeds at these points?

**Solution:**
Using conservation of angular momentum:
$$r_p v_p = r_a v_a$$
$$\frac{v_p}{v_a} = \frac{r_a}{r_p} = \frac{100}{1} = 100$$

The comet moves 100 times faster at perihelion!

### Problem 4: Gravitational Field Inside Earth
Assuming Earth has uniform density, at what depth below the surface is the gravitational field half of its surface value?

**Solution:**
Inside Earth: g = (GM/R³)r = g₀(r/R)
For g = g₀/2: r/R = 1/2
Depth = R - r = R/2 ≈ 3,185 km

### Problem 5: Hohmann Transfer
Calculate the velocity changes required for a Hohmann transfer from Earth orbit (1 AU) to Mars orbit (1.52 AU) around the Sun.

**Solution:**
a_t = (1 + 1.52)/2 = 1.26 AU

Using vis-viva equation:
$$v_1 = \sqrt{\frac{GM}{r_1}} = 29.8 \text{ km/s}$$ (Earth's orbital speed)

At departure:
$$v_{t1} = \sqrt{GM\left(\frac{2}{1} - \frac{1}{1.26}\right)} = 32.7 \text{ km/s}$$
$$\Delta v_1 = 32.7 - 29.8 = 2.9 \text{ km/s}$$

---

## 🔑 Key Formulas Reference

| Quantity | Formula |
|----------|---------|
| Gravitational Force | F = GMm/r² |
| Gravitational Field | g = GM/r² |
| Gravitational PE | U = -GMm/r |
| Gravitational Potential | V = -GM/r |
| Orbital Velocity | v = √(GM/r) |
| Escape Velocity | v = √(2GM/r) |
| Orbital Period | T = 2π√(r³/GM) |
| Orbital Energy | E = -GMm/2a |
| Vis-Viva | v² = GM(2/r - 1/a) |
| Kepler's Third Law | T² = (4π²/GM)a³ |

---

## 🌟 Summary

### Newton's Law of Gravitation
- Universal inverse-square law
- Vector superposition for multiple masses
- Shell theorem for spherical distributions

### Gravitational Field and Potential
- g = -∇V (field is gradient of potential)
- Potential is scalar (adds algebraically)
- Equipotential surfaces perpendicular to field

### Orbital Motion
- Kepler's Laws derived from Newton's Laws
- Energy determines orbit type
- Angular momentum conservation gives equal areas

### Energy Considerations
- Bound orbits have E < 0
- Escape requires E ≥ 0
- Virial theorem: K = -E = -½U

### Problem-Solving
- Use conservation laws (energy, angular momentum)
- Apply vis-viva equation for orbital mechanics
- Remember sign conventions for potential energy

---

*Master these concepts and you'll be well-prepared for any gravitation problem on the AP Physics C: Mechanics exam!*

:::GUIDE:::
