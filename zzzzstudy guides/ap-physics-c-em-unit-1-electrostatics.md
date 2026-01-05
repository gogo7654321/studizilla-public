:::GUIDE:::
unit::=1
title::=⚡ Unit 1: Electrostatics
desc::=Master electric charge, Coulomb's law, and electric fields with calculus
diff::=Very Hard
time::=65 min
tags::=physics-c,em,electrostatics,electric-field,gauss-law
content::=

# ⚡ Unit 1: Electrostatics

## Introduction to Electrostatics

Electrostatics is the study of electric charges at rest and the forces, fields, and potentials they create. This unit forms the foundation of electricity and magnetism, introducing the fundamental concepts that govern all electromagnetic phenomena.

**Why Electrostatics Matters:**
- Foundation for understanding circuits, electronics, and electromagnetic waves
- Essential for understanding atomic and molecular structure
- Applications in capacitors, xerography, electrostatic precipitators, and more
- Gateway to understanding Maxwell's equations

---

## 1. Electric Charge and Charge Conservation

### 1.1 Fundamental Properties of Electric Charge

Electric charge is a fundamental property of matter, much like mass. There are two types of charge:

**Positive charge (+):** Carried by protons
**Negative charge (−):** Carried by electrons

**Key Properties:**
1. **Quantization:** Charge comes in discrete units
   - Elementary charge: $e = 1.602 \times 10^{-19}$ C
   - Any charge: $q = ne$ where $n$ is an integer
   
2. **Conservation:** Total charge in an isolated system remains constant
   - Charge can be transferred but not created or destroyed
   - $\sum q_{\text{initial}} = \sum q_{\text{final}}$

3. **Additivity:** Total charge is the algebraic sum of individual charges
   - $Q_{\text{total}} = \sum_{i} q_i$

### 1.2 Charge Conservation Law

The conservation of electric charge is a fundamental law of physics:

$$\frac{dQ_{\text{enclosed}}}{dt} = -\oint \vec{J} \cdot d\vec{A}$$

This continuity equation states that the rate of change of charge in a region equals the negative of the current flowing out through the boundary.

**In differential form:**
$$\frac{\partial \rho}{\partial t} + \nabla \cdot \vec{J} = 0$$

Where:
- $\rho$ = charge density (C/m³)
- $\vec{J}$ = current density (A/m²)

### 1.3 Charging Methods

**Friction (Triboelectric Effect):**
- Electrons transfer between materials when rubbed together
- Materials ranked by triboelectric series

**Conduction:**
- Direct contact transfers charge
- Charges redistribute until equilibrium

**Induction:**
- Charge separation without contact
- Requires grounding for permanent charge transfer

---

## 2. Coulomb's Law

### 2.1 Scalar Form

The electrostatic force between two point charges is given by Coulomb's Law:

$$F = k_e \frac{|q_1||q_2|}{r^2}$$

Where:
- $k_e = \frac{1}{4\pi\varepsilon_0} = 8.99 \times 10^9$ N·m²/C²
- $\varepsilon_0 = 8.85 \times 10^{-12}$ C²/(N·m²) (permittivity of free space)
- $q_1, q_2$ = charges (Coulombs)
- $r$ = separation distance (meters)

### 2.2 Vector Form (Essential for AP Physics C)

The force on charge $q_2$ due to charge $q_1$:

$$\vec{F}_{12} = k_e \frac{q_1 q_2}{r^2}\hat{r}_{12} = k_e \frac{q_1 q_2}{|\vec{r}_{12}|^3}\vec{r}_{12}$$

Where:
- $\vec{r}_{12} = \vec{r}_2 - \vec{r}_1$ (position vector from 1 to 2)
- $\hat{r}_{12} = \frac{\vec{r}_{12}}{|\vec{r}_{12}|}$ (unit vector from 1 to 2)

**Important Sign Convention:**
- Positive result → repulsive force (like charges)
- Negative result → attractive force (unlike charges)

### 2.3 Component Form

In Cartesian coordinates, if $q_1$ is at origin and $q_2$ at $(x, y, z)$:

$$\vec{F} = k_e \frac{q_1 q_2}{(x^2 + y^2 + z^2)^{3/2}}(x\hat{i} + y\hat{j} + z\hat{k})$$

**Components:**
$$F_x = k_e \frac{q_1 q_2 \cdot x}{(x^2 + y^2 + z^2)^{3/2}}$$
$$F_y = k_e \frac{q_1 q_2 \cdot y}{(x^2 + y^2 + z^2)^{3/2}}$$
$$F_z = k_e \frac{q_1 q_2 \cdot z}{(x^2 + y^2 + z^2)^{3/2}}$$

### 2.4 Superposition Principle

The net force on a charge due to multiple charges is the vector sum:

$$\vec{F}_{\text{net}} = \sum_{i} \vec{F}_i = k_e q_0 \sum_{i} \frac{q_i}{|\vec{r}_i|^2}\hat{r}_i$$

This is a crucial principle—forces add as vectors!

---

## 3. Worked Example: Coulomb's Law

### Example 1: Three Charges in a Line

**Problem:** Three charges are placed on the x-axis: $q_1 = +3$ μC at $x = 0$, $q_2 = -2$ μC at $x = 4$ m, and $q_3 = +1$ μC at $x = 6$ m. Find the net force on $q_2$.

**Solution:**

Step 1: Find force from $q_1$ on $q_2$
$$\vec{F}_{12} = k_e \frac{q_1 q_2}{r_{12}^2}\hat{r}_{12}$$
$$\vec{F}_{12} = (8.99 \times 10^9) \frac{(3 \times 10^{-6})(-2 \times 10^{-6})}{(4)^2}(+\hat{i})$$
$$\vec{F}_{12} = -3.37 \times 10^{-3}\hat{i} \text{ N}$$

The negative sign indicates attraction (toward $q_1$, in $-\hat{i}$ direction).

Step 2: Find force from $q_3$ on $q_2$
$$\vec{F}_{32} = k_e \frac{q_3 q_2}{r_{32}^2}\hat{r}_{32}$$
$$\vec{F}_{32} = (8.99 \times 10^9) \frac{(1 \times 10^{-6})(-2 \times 10^{-6})}{(2)^2}(-\hat{i})$$
$$\vec{F}_{32} = +4.50 \times 10^{-3}\hat{i} \text{ N}$$

Step 3: Net force
$$\vec{F}_{\text{net}} = \vec{F}_{12} + \vec{F}_{32} = (-3.37 + 4.50) \times 10^{-3}\hat{i}$$
$$\vec{F}_{\text{net}} = 1.13 \times 10^{-3}\hat{i} \text{ N}$$

### Example 2: Two-Dimensional Force Calculation

**Problem:** Charge $q_1 = +5$ μC is at the origin. Charge $q_2 = -3$ μC is at position (3 m, 4 m). Find the force on $q_2$.

**Solution:**

Step 1: Find the separation vector
$$\vec{r} = 3\hat{i} + 4\hat{j}$$
$$|\vec{r}| = \sqrt{3^2 + 4^2} = 5 \text{ m}$$

Step 2: Apply Coulomb's Law in vector form
$$\vec{F} = k_e \frac{q_1 q_2}{|\vec{r}|^3}\vec{r}$$
$$\vec{F} = (8.99 \times 10^9) \frac{(5 \times 10^{-6})(-3 \times 10^{-6})}{(5)^3}(3\hat{i} + 4\hat{j})$$
$$\vec{F} = (8.99 \times 10^9) \frac{-1.5 \times 10^{-11}}{125}(3\hat{i} + 4\hat{j})$$
$$\vec{F} = -1.08 \times 10^{-3}(3\hat{i} + 4\hat{j})$$
$$\vec{F} = -3.24 \times 10^{-3}\hat{i} - 4.32 \times 10^{-3}\hat{j} \text{ N}$$

The force points toward $q_1$ (attraction between opposite charges).

---

## 4. Electric Field

### 4.1 Definition

The electric field is defined as the force per unit positive test charge:

$$\vec{E} = \frac{\vec{F}}{q_0} = \lim_{q_0 \to 0} \frac{\vec{F}}{q_0}$$

**Units:** N/C or V/m

The electric field is a vector field—it has magnitude and direction at every point in space.

### 4.2 Electric Field Due to a Point Charge

For a point charge $q$:

$$\vec{E} = k_e \frac{q}{r^2}\hat{r} = \frac{1}{4\pi\varepsilon_0} \frac{q}{r^2}\hat{r}$$

**In component form:**
$$\vec{E} = k_e \frac{q}{(x^2 + y^2 + z^2)^{3/2}}(x\hat{i} + y\hat{j} + z\hat{k})$$

**Direction:**
- Points radially outward for positive charges
- Points radially inward for negative charges

### 4.3 Superposition of Electric Fields

The total electric field due to multiple point charges:

$$\vec{E}_{\text{total}} = \sum_{i} \vec{E}_i = k_e \sum_{i} \frac{q_i}{|\vec{r}_i|^2}\hat{r}_i$$

### 4.4 Electric Field and Force

Once the electric field is known, the force on any charge $q$ is:

$$\vec{F} = q\vec{E}$$

This is why the field concept is so powerful—calculate $\vec{E}$ once, then find force on any charge easily.

---

## 5. Electric Field from Continuous Charge Distributions

### 5.1 The General Approach

For continuous distributions, we replace the sum with an integral:

$$\vec{E} = k_e \int \frac{dq}{r^2}\hat{r}$$

**Steps for calculating electric fields:**
1. Identify the charge distribution (linear, surface, or volume)
2. Choose appropriate coordinates
3. Express $dq$ in terms of charge density
4. Find $\vec{r}$ from source to field point
5. Set up and evaluate the integral
6. Use symmetry to simplify when possible

### 5.2 Charge Densities

**Linear charge density:** $\lambda = \frac{dq}{d\ell}$ (C/m)
$$dq = \lambda \, d\ell$$

**Surface charge density:** $\sigma = \frac{dq}{dA}$ (C/m²)
$$dq = \sigma \, dA$$

**Volume charge density:** $\rho = \frac{dq}{dV}$ (C/m³)
$$dq = \rho \, dV$$

### 5.3 Electric Field on Axis of a Charged Ring

**Setup:** Ring of radius $R$ with total charge $Q$, uniformly distributed. Find $\vec{E}$ at point P on the axis, distance $z$ from center.

**Solution:**

By symmetry, horizontal components cancel. Only the z-component survives.

For element $dq$:
$$dE_z = k_e \frac{dq}{r^2}\cos\theta = k_e \frac{dq}{(R^2 + z^2)} \cdot \frac{z}{\sqrt{R^2 + z^2}}$$

$$dE_z = k_e \frac{z \, dq}{(R^2 + z^2)^{3/2}}$$

Integrating around the ring:
$$E_z = k_e \frac{z}{(R^2 + z^2)^{3/2}} \int dq = k_e \frac{Qz}{(R^2 + z^2)^{3/2}}$$

$$\boxed{\vec{E} = \frac{Qz}{4\pi\varepsilon_0(R^2 + z^2)^{3/2}}\hat{k}}$$

**Special Cases:**
- At center ($z = 0$): $E = 0$ (by symmetry)
- Far from ring ($z >> R$): $E \approx \frac{kQ}{z^2}$ (point charge behavior)

### 5.4 Electric Field on Axis of a Uniformly Charged Disk

**Setup:** Disk of radius $R$ with uniform surface charge density $\sigma$. Find $\vec{E}$ on the axis at distance $z$.

**Solution:**

Treat the disk as a collection of concentric rings. For a ring of radius $r'$ and width $dr'$:
$$dq = \sigma \cdot 2\pi r' \, dr'$$

Using the ring result:
$$dE_z = k_e \frac{z \cdot \sigma \cdot 2\pi r' \, dr'}{(r'^2 + z^2)^{3/2}}$$

Integrate from $r' = 0$ to $r' = R$:
$$E_z = 2\pi k_e \sigma z \int_0^R \frac{r' \, dr'}{(r'^2 + z^2)^{3/2}}$$

Let $u = r'^2 + z^2$, $du = 2r' \, dr'$:
$$E_z = \pi k_e \sigma z \int_{z^2}^{R^2 + z^2} u^{-3/2} \, du$$
$$E_z = \pi k_e \sigma z \left[-2u^{-1/2}\right]_{z^2}^{R^2 + z^2}$$
$$E_z = 2\pi k_e \sigma z \left(\frac{1}{z} - \frac{1}{\sqrt{R^2 + z^2}}\right)$$

$$\boxed{E_z = \frac{\sigma}{2\varepsilon_0}\left(1 - \frac{z}{\sqrt{R^2 + z^2}}\right)}$$

**Special Case - Infinite Plane ($R \to \infty$):**
$$E = \frac{\sigma}{2\varepsilon_0}$$

This is constant—independent of distance! Important result.

### 5.5 Electric Field Due to a Uniformly Charged Rod

**Setup:** Rod of length $L$ with uniform linear charge density $\lambda$. Find $\vec{E}$ at point P perpendicular to the rod at distance $d$ from its center.

**Solution:**

Place the rod along the x-axis from $-L/2$ to $+L/2$. Point P is at $(0, d, 0)$.

For element $dx$ at position $x$:
$$dq = \lambda \, dx$$
$$r = \sqrt{x^2 + d^2}$$

By symmetry, x-components cancel. Only y-component survives:
$$dE_y = k_e \frac{\lambda \, dx}{x^2 + d^2} \cdot \frac{d}{\sqrt{x^2 + d^2}}$$
$$dE_y = k_e \lambda d \frac{dx}{(x^2 + d^2)^{3/2}}$$

Using the integral: $\int \frac{dx}{(x^2 + d^2)^{3/2}} = \frac{x}{d^2\sqrt{x^2 + d^2}}$

$$E_y = k_e \lambda d \left[\frac{x}{d^2\sqrt{x^2 + d^2}}\right]_{-L/2}^{L/2}$$

$$\boxed{E_y = \frac{\lambda L}{2\pi\varepsilon_0 d\sqrt{L^2 + 4d^2}}}$$

**For an Infinite Line ($L \to \infty$):**
$$E = \frac{\lambda}{2\pi\varepsilon_0 d}$$

This is inversely proportional to distance—another key result!

---

## 6. Electric Field Lines

### 6.1 Properties of Electric Field Lines

Electric field lines are visual representations of the electric field with these properties:

1. **Direction:** Tangent to field line at any point gives $\vec{E}$ direction
2. **Start/End:** Begin on positive charges, end on negative charges (or infinity)
3. **Density:** Number of lines per unit area ∝ field strength
4. **No Crossing:** Lines never cross (field has unique direction at each point)
5. **Perpendicular to Conductors:** Lines meet conductor surfaces at right angles

### 6.2 Field Line Patterns

**Point Charge:**
- Radial lines
- Density decreases as $1/r^2$
- Outward for positive, inward for negative

**Electric Dipole:**
- Lines curve from + to −
- Strongest between charges
- Far away: resembles single charge

**Parallel Plates:**
- Uniform, parallel lines between plates
- Edge effects (fringing) at boundaries

**Two Like Charges:**
- Lines repel each other
- Neutral point between charges where $E = 0$

### 6.3 Relationship Between Field Lines and Flux

The number of field lines through a surface is proportional to the electric flux:

$$\Phi_E = \int \vec{E} \cdot d\vec{A}$$

This concept leads directly to Gauss's Law.

---

## 7. Electric Flux

### 7.1 Definition

Electric flux measures how much electric field passes through a surface:

$$\Phi_E = \vec{E} \cdot \vec{A} = EA\cos\theta$$

For a non-uniform field or curved surface:

$$\Phi_E = \int \vec{E} \cdot d\vec{A}$$

**Units:** N·m²/C or V·m

### 7.2 Understanding Flux

- $\Phi_E > 0$: Net field lines leaving the surface
- $\Phi_E < 0$: Net field lines entering the surface
- $\Phi_E = 0$: Equal lines entering and leaving

**Area Vector Convention:**
- For closed surfaces: $d\vec{A}$ points outward
- For open surfaces: direction must be specified

### 7.3 Flux Through a Closed Surface

For a closed surface enclosing charge:

$$\Phi_E = \oint \vec{E} \cdot d\vec{A}$$

The circle on the integral sign indicates integration over a closed surface.

---

## 8. Gauss's Law

### 8.1 Statement of Gauss's Law

The total electric flux through any closed surface equals the net charge enclosed divided by $\varepsilon_0$:

$$\boxed{\oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}}$$

This is one of Maxwell's four equations and is equivalent to Coulomb's Law.

### 8.2 Mathematical Derivation

Consider a point charge $q$ at the center of a sphere of radius $r$:

$$\oint \vec{E} \cdot d\vec{A} = \oint E \, dA = E \oint dA = E(4\pi r^2)$$

Since $E = \frac{kq}{r^2} = \frac{q}{4\pi\varepsilon_0 r^2}$:

$$\Phi_E = \frac{q}{4\pi\varepsilon_0 r^2} \cdot 4\pi r^2 = \frac{q}{\varepsilon_0}$$

### 8.3 Gauss's Law in Differential Form

$$\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}$$

Where $\rho$ is the charge density. This relates the divergence of $\vec{E}$ to local charge density.

### 8.4 Choosing Gaussian Surfaces

For Gauss's Law to be useful, choose surfaces where:
1. $\vec{E}$ is constant on the surface (or parts of it)
2. $\vec{E}$ is perpendicular or parallel to the surface

**Common Gaussian Surfaces:**
- **Sphere:** Point charges, spherical distributions
- **Cylinder:** Infinite lines, cylindrical distributions
- **Pillbox:** Infinite planes, sheets of charge

---

## 9. Applications of Gauss's Law

### 9.1 Uniformly Charged Sphere (Conducting)

**Setup:** Conducting sphere of radius $R$ with total charge $Q$.

**Outside the sphere ($r > R$):**

Gaussian surface: sphere of radius $r$

$$\oint \vec{E} \cdot d\vec{A} = E(4\pi r^2) = \frac{Q}{\varepsilon_0}$$

$$\boxed{E = \frac{Q}{4\pi\varepsilon_0 r^2} = \frac{kQ}{r^2}}$$

Same as a point charge at the center!

**Inside the sphere ($r < R$):**

Since all charge resides on the surface of a conductor, $Q_{\text{enc}} = 0$

$$\boxed{E = 0}$$

### 9.2 Uniformly Charged Sphere (Insulating)

**Setup:** Insulating sphere of radius $R$ with uniform volume charge density $\rho$ and total charge $Q = \frac{4}{3}\pi R^3 \rho$.

**Outside the sphere ($r > R$):**

$$E(4\pi r^2) = \frac{Q}{\varepsilon_0}$$

$$\boxed{E = \frac{Q}{4\pi\varepsilon_0 r^2}}$$

**Inside the sphere ($r < R$):**

Charge enclosed: $Q_{\text{enc}} = \rho \cdot \frac{4}{3}\pi r^3 = Q\left(\frac{r}{R}\right)^3$

$$E(4\pi r^2) = \frac{Q_{\text{enc}}}{\varepsilon_0} = \frac{Q}{\varepsilon_0}\left(\frac{r}{R}\right)^3$$

$$\boxed{E = \frac{Qr}{4\pi\varepsilon_0 R^3} = \frac{\rho r}{3\varepsilon_0}}$$

The field increases linearly with $r$ inside!

### 9.3 Infinite Line of Charge

**Setup:** Infinite line with uniform linear charge density $\lambda$.

**Gaussian surface:** Cylinder of radius $r$ and length $L$

Flux through ends: $\Phi_{\text{ends}} = 0$ ($\vec{E} \perp d\vec{A}$)

Flux through curved surface:
$$\Phi_{\text{curved}} = E(2\pi rL)$$

Charge enclosed: $Q_{\text{enc}} = \lambda L$

$$E(2\pi rL) = \frac{\lambda L}{\varepsilon_0}$$

$$\boxed{E = \frac{\lambda}{2\pi\varepsilon_0 r}}$$

Field decreases as $1/r$ (not $1/r^2$).

### 9.4 Infinite Plane of Charge

**Setup:** Infinite plane with uniform surface charge density $\sigma$.

**Gaussian surface:** Pillbox (cylinder) with ends parallel to plane

Flux through curved surface: $\Phi_{\text{curved}} = 0$

Flux through both ends: $\Phi = E \cdot A + E \cdot A = 2EA$

Charge enclosed: $Q_{\text{enc}} = \sigma A$

$$2EA = \frac{\sigma A}{\varepsilon_0}$$

$$\boxed{E = \frac{\sigma}{2\varepsilon_0}}$$

Field is constant—independent of distance!

### 9.5 Parallel Plate Capacitor

**Setup:** Two parallel plates with charge densities $+\sigma$ and $-\sigma$.

Between the plates, fields add:
$$E = \frac{\sigma}{2\varepsilon_0} + \frac{\sigma}{2\varepsilon_0} = \frac{\sigma}{\varepsilon_0}$$

Outside the plates, fields cancel:
$$E = \frac{\sigma}{2\varepsilon_0} - \frac{\sigma}{2\varepsilon_0} = 0$$

$$\boxed{E_{\text{between}} = \frac{\sigma}{\varepsilon_0}, \quad E_{\text{outside}} = 0}$$

### 9.6 Coaxial Cable

**Setup:** Inner cylinder (radius $a$) with charge $+\lambda$, outer cylinder (radius $b$) with charge $-\lambda$.

**For $r < a$:** $E = 0$ (inside conductor)

**For $a < r < b$:**
$$\boxed{E = \frac{\lambda}{2\pi\varepsilon_0 r}}$$

**For $r > b$:** $E = 0$ (charges cancel)

---

## 10. Conductors in Electrostatic Equilibrium

### 10.1 Properties of Conductors

In electrostatic equilibrium, conductors have these properties:

1. **$\vec{E} = 0$ inside the conductor**
   - If not, free charges would move → not equilibrium
   
2. **Excess charge resides on the surface**
   - Consequence of zero internal field (Gauss's Law)
   
3. **$\vec{E}$ is perpendicular to the surface**
   - Any tangential component would move surface charges
   
4. **Surface field: $E = \sigma/\varepsilon_0$**
   - From Gauss's Law with pillbox surface

### 10.2 Surface Charge Density

The electric field just outside a conductor:

$$\vec{E} = \frac{\sigma}{\varepsilon_0}\hat{n}$$

Where $\hat{n}$ is the outward normal. Note: this is twice the field of an infinite plane because there's no field inside the conductor.

### 10.3 Charge Distribution on Conductors

**Important Observations:**
- Charge concentrates at sharp points (highest curvature)
- Charge density is lowest on flat surfaces
- For a sphere: $\sigma = Q/(4\pi R^2)$ (uniform)

**Why Sharp Points?**
At equilibrium, the entire conductor is at the same potential. At sharp points, charges must be closer together to maintain this potential, resulting in higher $\sigma$.

### 10.4 Cavities in Conductors

**Cavity with no charge inside:**
- $E = 0$ everywhere in cavity
- Complete electrostatic shielding (Faraday cage)

**Cavity with charge $q$ inside:**
- Inner surface has induced charge $-q$
- Outer surface has charge $Q + q$ (if total charge is $Q$)
- Field in cavity exists; field outside sees only outer surface charge

### 10.5 Electrostatic Shielding

A conductor shell shields its interior from external fields:

$$\vec{E}_{\text{inside}} = 0 \text{ (regardless of external field)}$$

This is the principle behind:
- Faraday cages
- Shielded cables
- Electrostatic protection of sensitive electronics

---

## 11. Worked Examples: Gauss's Law

### Example 1: Spherical Shell

**Problem:** A spherical shell of inner radius $a$ and outer radius $b$ has a uniform volume charge density $\rho$. Find $E(r)$ for all $r$.

**Solution:**

**Region 1: $r < a$ (inside cavity)**
$Q_{\text{enc}} = 0$
$$E = 0$$

**Region 2: $a < r < b$ (within shell)**
$$Q_{\text{enc}} = \rho \cdot \frac{4}{3}\pi(r^3 - a^3)$$
$$E(4\pi r^2) = \frac{\rho}{\varepsilon_0} \cdot \frac{4}{3}\pi(r^3 - a^3)$$
$$E = \frac{\rho}{3\varepsilon_0}\left(r - \frac{a^3}{r^2}\right)$$

**Region 3: $r > b$ (outside shell)**
$$Q_{\text{total}} = \rho \cdot \frac{4}{3}\pi(b^3 - a^3)$$
$$E = \frac{\rho(b^3 - a^3)}{3\varepsilon_0 r^2}$$

### Example 2: Non-Uniform Charge Distribution

**Problem:** A sphere of radius $R$ has charge density $\rho(r) = \rho_0(1 - r/R)$. Find $E$ inside and outside.

**Solution:**

**Inside ($r < R$):**

Find enclosed charge:
$$Q_{\text{enc}} = \int_0^r \rho_0\left(1 - \frac{r'}{R}\right) 4\pi r'^2 \, dr'$$
$$Q_{\text{enc}} = 4\pi\rho_0 \left[\frac{r'^3}{3} - \frac{r'^4}{4R}\right]_0^r$$
$$Q_{\text{enc}} = 4\pi\rho_0 r^3\left(\frac{1}{3} - \frac{r}{4R}\right)$$

Apply Gauss's Law:
$$E = \frac{Q_{\text{enc}}}{4\pi\varepsilon_0 r^2} = \frac{\rho_0 r}{\varepsilon_0}\left(\frac{1}{3} - \frac{r}{4R}\right)$$

**Outside ($r > R$):**

Total charge:
$$Q = 4\pi\rho_0 R^3\left(\frac{1}{3} - \frac{1}{4}\right) = \frac{\pi\rho_0 R^3}{3}$$

$$E = \frac{Q}{4\pi\varepsilon_0 r^2} = \frac{\rho_0 R^3}{12\varepsilon_0 r^2}$$

### Example 3: Cylindrical Symmetry with Cavity

**Problem:** An infinitely long cylinder of radius $R$ has uniform charge density $\rho$. A cylindrical cavity of radius $a$ runs parallel to the axis, with its center at distance $d$ from the main axis ($d + a < R$). Find $\vec{E}$ inside the cavity.

**Solution:**

Use superposition: The actual field = field from solid cylinder − field from "negative" cylinder filling cavity.

For a point inside cavity at position $\vec{r}$ from main axis:

Field from full solid cylinder (at position $\vec{r}$):
$$\vec{E}_1 = \frac{\rho}{2\varepsilon_0}\vec{r}$$

Let $\vec{r}'$ be position from cavity center. Field from negative cylinder:
$$\vec{E}_2 = -\frac{\rho}{2\varepsilon_0}\vec{r}'$$

Net field:
$$\vec{E} = \vec{E}_1 + \vec{E}_2 = \frac{\rho}{2\varepsilon_0}(\vec{r} - \vec{r}')$$

Since $\vec{r} - \vec{r}' = \vec{d}$ (constant vector from cavity center to main axis):

$$\boxed{\vec{E} = \frac{\rho \vec{d}}{2\varepsilon_0}}$$

The field inside the cavity is uniform!

---

## 12. Common Mistakes to Avoid

### 12.1 Coulomb's Law Errors

❌ **Forgetting vector nature**
- Always consider direction, not just magnitude
- Use superposition carefully with components

❌ **Sign errors with charges**
- Positive F → repulsion, Negative F → attraction
- Keep track of directions with unit vectors

❌ **Using wrong distance**
- Use center-to-center distance for spheres
- For continuous distributions, integrate properly

### 12.2 Electric Field Errors

❌ **Confusing E and F**
- $\vec{E}$ exists independent of test charge
- $\vec{F} = q\vec{E}$ depends on the charge experiencing field

❌ **Forgetting to integrate**
- For continuous distributions, you must integrate
- Can't just use $E = kQ/r^2$ for extended objects (except from far away)

### 12.3 Gauss's Law Errors

❌ **Using Gauss's Law when inappropriate**
- Only use when high symmetry exists
- For arbitrary distributions, must integrate Coulomb's Law

❌ **Wrong Gaussian surface**
- Surface must match symmetry of charge distribution
- E must be constant on (parts of) surface

❌ **Confusing flux and field**
- Flux depends on enclosed charge only
- Field depends on all charges (inside and outside)

❌ **Forgetting $\vec{E} \cdot d\vec{A}$ is a dot product**
- Zero contribution when E ⊥ surface
- Full contribution when E ∥ normal

### 12.4 Conductor Errors

❌ **Thinking E = 0 everywhere for conductor**
- E = 0 only inside the conducting material
- E ≠ 0 in cavities with charges or outside conductor

❌ **Charge on inner surface = outer surface**
- They're independent; determined by cavity charge and total charge
- Inner surface: $-q_{\text{cavity}}$, Outer: $Q_{\text{total}} + q_{\text{cavity}}$

---

## 13. Key Formulas Summary

### Coulomb's Law
$$\vec{F}_{12} = k_e \frac{q_1 q_2}{r^2}\hat{r}_{12}, \quad k_e = 8.99 \times 10^9 \text{ N·m}^2/\text{C}^2$$

### Electric Field
$$\vec{E} = k_e \frac{q}{r^2}\hat{r} = \frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}\hat{r}$$

### Continuous Distributions
$$\vec{E} = k_e \int \frac{dq}{r^2}\hat{r}$$

### Important Results
| Configuration | Electric Field |
|--------------|----------------|
| Point charge | $E = \frac{kq}{r^2}$ |
| Infinite line ($\lambda$) | $E = \frac{\lambda}{2\pi\varepsilon_0 r}$ |
| Infinite plane ($\sigma$) | $E = \frac{\sigma}{2\varepsilon_0}$ |
| Parallel plates | $E = \frac{\sigma}{\varepsilon_0}$ (between) |
| Conducting sphere (outside) | $E = \frac{kQ}{r^2}$ |
| Conducting sphere (inside) | $E = 0$ |
| Insulating sphere (inside) | $E = \frac{kQr}{R^3}$ |
| Ring on axis | $E = \frac{kQz}{(R^2+z^2)^{3/2}}$ |

### Gauss's Law
$$\oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}$$

### Conductors in Equilibrium
- $E_{\text{inside}} = 0$
- $E_{\text{surface}} = \frac{\sigma}{\varepsilon_0}$
- All excess charge on surface

---

## 14. AP Exam Tips

### Free Response Strategies

1. **Draw clear diagrams** with labeled vectors, distances, and coordinates
2. **State the law** you're using before applying it
3. **Show all integration steps** for continuous distributions
4. **Justify symmetry arguments** explicitly
5. **Check units** at each step
6. **Verify limiting cases** (e.g., far away → point charge behavior)

### Multiple Choice Strategies

1. **Eliminate obviously wrong answers** using dimensional analysis
2. **Use proportional reasoning**: If $r$ doubles, what happens to $E$?
3. **Sketch field lines** to visualize direction
4. **Remember key results**: infinite plane is constant, line is $1/r$, point is $1/r^2$

### Common AP Topics

- Vector addition of electric fields
- Field due to charge distributions
- Applications of Gauss's Law
- Conductors and induced charges
- Comparing fields at different points

---

## 15. Practice Problems

### Problem Set A: Coulomb's Law

1. Three charges form an equilateral triangle (side $a$). Find the net force on each charge if all have charge $+q$.

2. At what point on the line between $q_1 = +4$ μC and $q_2 = +9$ μC (separated by 1 m) is the electric field zero?

3. Four charges are at corners of a square. Two diagonal corners have $+Q$, the other two have $-Q$. Find the force on one of the positive charges.

### Problem Set B: Electric Fields

4. A semicircular arc of radius $R$ has uniform charge $Q$. Find $\vec{E}$ at the center of curvature.

5. Find the electric field at the center of a uniformly charged square loop (side $a$, total charge $Q$).

6. A rod of length $L$ has non-uniform charge density $\lambda(x) = \lambda_0 x/L$. Find $\vec{E}$ on the axis, distance $d$ from one end.

### Problem Set C: Gauss's Law

7. A solid sphere has charge density $\rho(r) = \rho_0 e^{-r/a}$. Find $E(r)$ for all $r$.

8. A cylindrical shell (inner radius $a$, outer radius $b$) has uniform charge density $\rho$. Find $E(r)$ for all $r$.

9. An infinite slab of thickness $2d$ has uniform charge density $\rho$. Find $E$ as a function of position.

### Problem Set D: Conductors

10. A conducting sphere (radius $R$, charge $Q$) is surrounded by a concentric conducting shell (inner radius $2R$, outer radius $3R$, charge $-2Q$). Find charge on each surface and $E(r)$ everywhere.

11. Two parallel conducting plates have charges $+Q$ and $+3Q$. Find the charge on each of the four surfaces.

12. A point charge $q$ is placed inside a conducting shell. Find the field outside and the force on $q$.

---

## 16. Solutions to Selected Problems

### Solution to Problem 2

**Given:** $q_1 = +4$ μC at $x = 0$, $q_2 = +9$ μC at $x = 1$ m. Find where $E = 0$.

Let $E = 0$ at position $x$ (must be between charges since both are positive).

$$\frac{kq_1}{x^2} = \frac{kq_2}{(1-x)^2}$$

$$\frac{4}{x^2} = \frac{9}{(1-x)^2}$$

$$\frac{2}{x} = \frac{3}{1-x}$$

$$2(1-x) = 3x$$

$$x = 0.4 \text{ m}$$

### Solution to Problem 4

**Semicircular arc:** By symmetry, components perpendicular to the diameter cancel.

For element $d\theta$ at angle $\theta$:
$$dq = \frac{Q}{\pi R} \cdot R \, d\theta = \frac{Q}{\pi}d\theta$$

$$dE_y = k_e \frac{dq}{R^2}\sin\theta = \frac{kQ}{\pi R^2}\sin\theta \, d\theta$$

$$E_y = \frac{kQ}{\pi R^2} \int_0^\pi \sin\theta \, d\theta = \frac{kQ}{\pi R^2}[-\cos\theta]_0^\pi = \frac{2kQ}{\pi R^2}$$

$$\boxed{\vec{E} = \frac{2kQ}{\pi R^2}\hat{j}}$$

### Solution to Problem 10

**Concentric spheres:**

Inner sphere (radius $R$): charge $Q$
Shell (radii $2R$ to $3R$): charge $-2Q$

By induction on shell:
- Inner surface of shell: $-Q$ (to shield cavity)
- Outer surface of shell: $-2Q - (-Q) = -Q$

**Electric field:**

$r < R$: $E = 0$ (inside conductor)

$R < r < 2R$: $E = \frac{kQ}{r^2}$ (Gauss's Law, $Q$ enclosed)

$2R < r < 3R$: $E = 0$ (inside conductor)

$r > 3R$: Total charge = $Q + (-2Q) = -Q$
$$E = \frac{k(-Q)}{r^2}$$ (field points inward)

---

## Conclusion

Electrostatics provides the foundation for all of E&M. Master these concepts:

✅ **Coulomb's Law** in vector form with superposition

✅ **Electric fields** from point charges and continuous distributions

✅ **Gauss's Law** and when to apply it

✅ **Conductor properties** in electrostatic equilibrium

✅ **Integration techniques** for charge distributions

The key to success is practice—work through many problems, especially those requiring integration and vector analysis. These skills will be essential for the remaining units on electric potential, capacitance, and magnetism.

**Next Unit Preview:** Unit 2 covers Electric Potential—the scalar counterpart to the electric field that makes many calculations easier!

:::GUIDE:::
