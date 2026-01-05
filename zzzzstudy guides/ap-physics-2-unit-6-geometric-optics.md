:::GUIDE:::
unit::=6
title::=🔦 Unit 6: Geometric Optics
desc::=Master reflection, refraction, mirrors, and lenses
diff::=Medium-Hard
time::=50 min
tags::=physics,optics,mirrors,lenses,refraction
content::=

# 🔦 Unit 6: Geometric Optics

## 📚 Introduction to Geometric Optics

Geometric optics treats light as rays that travel in straight lines. This approximation works well when objects are much larger than the wavelength of light (~500 nm). Understanding how light reflects and refracts allows us to analyze mirrors, lenses, and optical instruments.

---

## 🌟 Key Concepts Overview

| Topic | Key Equations | Importance |
|-------|---------------|------------|
| Reflection | θᵢ = θᵣ | ⭐⭐⭐⭐⭐ |
| Refraction | n₁sin θ₁ = n₂sin θ₂ | ⭐⭐⭐⭐⭐ |
| Critical Angle | sin θc = n₂/n₁ | ⭐⭐⭐⭐ |
| Mirror/Lens Equation | 1/f = 1/dₒ + 1/dᵢ | ⭐⭐⭐⭐⭐ |
| Magnification | M = -dᵢ/dₒ = hᵢ/hₒ | ⭐⭐⭐⭐⭐ |
| Lens Power | P = 1/f (in diopters) | ⭐⭐⭐ |

---

## 🔄 The Nature of Light

### Light as Rays
- In geometric optics, light travels in straight lines called **rays**
- Rays are perpendicular to wavefronts
- Light travels at different speeds in different media

### Speed of Light in Media
```
Speed in vacuum:     c = 3.00 × 10⁸ m/s
Speed in medium:     v = c/n

Where n = index of refraction
```

### Index of Refraction Values

| Medium | Index (n) |
|--------|-----------|
| Vacuum | 1.000 |
| Air | 1.0003 ≈ 1.00 |
| Water | 1.33 |
| Glass (crown) | 1.52 |
| Glass (flint) | 1.66 |
| Diamond | 2.42 |
| Acrylic | 1.49 |

---

## 🪞 Law of Reflection

### The Fundamental Law

**The angle of incidence equals the angle of reflection**

```
                    Normal
                      │
                      │
         Incident     │     Reflected
           Ray   \    │    /   Ray
                  \   │   /
                   \  │  /
                    \ │ /
                     \│/
        θᵢ ←─────────●─────────→ θᵣ
        ══════════════════════════════
              Reflecting Surface
```

### Key Points
- **Angles measured from the normal** (perpendicular to surface)
- **θᵢ = θᵣ** (always!)
- Incident ray, reflected ray, and normal all lie in the same plane
- Works for all reflective surfaces (smooth or rough)

### Types of Reflection

**Specular Reflection** (Smooth surfaces)
```
    \  \  \        /  /  /
     \  \  \      /  /  /
      \  \  \    /  /  /
       \  \  \  /  /  /
    ════════════════════════
         Smooth mirror
    
    Parallel rays → Parallel reflected rays
```

**Diffuse Reflection** (Rough surfaces)
```
    \  \  \       / | \
     \  \  \     /  |  \
      \  \  \   /   |   \
       \  \  \ /    |    \
    ∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿
         Rough surface
    
    Parallel rays → Scattered reflected rays
```

---

## 🌊 Refraction and Snell's Law

### What is Refraction?
Refraction is the **bending of light** when it passes from one medium to another. This occurs because light travels at different speeds in different media.

### Snell's Law

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

```
    Medium 1 (n₁)
         \
          \  Incident ray
           \ θ₁
            \│
    ─────────●──────────── Interface
             │\
          θ₂ │ \
             │  \  Refracted ray
                 \
    Medium 2 (n₂)
```

### Bending Rules

**Light bends TOWARD the normal when:**
- Entering a denser medium (n₂ > n₁)
- Speed decreases

**Light bends AWAY from the normal when:**
- Entering a less dense medium (n₂ < n₁)
- Speed increases

```
    Air (n=1.00)              Air (n=1.00)
         \                         /
          \                       /
           \                     │
    ─────────────────    ─────────────────
             \                  /
              \                /
               \              /
    Glass (n=1.52)         Glass (n=1.52)
    
    Air → Glass            Glass → Air
    (bends toward)         (bends away)
```

### Example Problem

**A light ray in air strikes water at 45°. Find the refraction angle.**

Given: n₁ = 1.00, n₂ = 1.33, θ₁ = 45°

Solution:
```
n₁ sin θ₁ = n₂ sin θ₂
(1.00)(sin 45°) = (1.33)(sin θ₂)
sin θ₂ = (1.00)(0.707)/(1.33)
sin θ₂ = 0.532
θ₂ = 32.1°
```

---

## 💎 Total Internal Reflection

### Critical Angle

When light travels from a denser to less dense medium, there's a maximum angle of incidence beyond which **all light is reflected back**.

$$\sin\theta_c = \frac{n_2}{n_1}$$

(Only when n₁ > n₂)

### Visualizing Total Internal Reflection

```
    Less dense (n₂)           Less dense (n₂)          Less dense (n₂)
           │                       ╱                   
           │ Refracted            ╱ Refracted              (no refraction)
           │                     ╱                     
    ───────●───────────    ─────●─────────────    ─────●─────────────
          ╱│                   ╱│                     ╱│\
         ╱ │                  ╱ │                    ╱ │ \
        ╱  │                 ╱  │                   ╱  │  \ Reflected
       ╱   │                ╱   │                  ╱   │   \
    Incident              Incident              Incident
    θ < θc                θ = θc                θ > θc
    
    Partial reflection    Critical angle       Total internal
                         (90° refraction)       reflection
```

### Applications of Total Internal Reflection

1. **Fiber Optics**
```
    Light input →  ╱‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾╲→→→→→→→→→╲
                  ╱  →→→→→→→→→→→→→→→→→→→→→→→  ╲→ Light output
                  ╲  →→→→→→→→→→→→→→→→→→→→→→→  ╱
                   ╲_______________╱→→→→→→→→→╱
    Light bounces along the fiber core
```

2. **Prisms in binoculars**
3. **Diamond brilliance**

### Example: Critical Angle Calculation

**Find the critical angle for a glass-air interface (n_glass = 1.50)**

```
sin θc = n₂/n₁ = 1.00/1.50 = 0.667
θc = 41.8°
```

Any angle greater than 41.8° will undergo total internal reflection!

---

## 🪞 Plane Mirrors

### Image Formation

Plane mirrors produce images that are:
- **Virtual** (cannot be projected on a screen)
- **Upright** (same orientation as object)
- **Same size** as object (M = 1)
- **Laterally inverted** (left-right reversed)
- Located at the **same distance behind** the mirror as the object is in front

```
                    Mirror
                      │
    Object            │           Image
       ↑              │              ↑
       │              │              │
       ●──────────────┼──────────────● (virtual)
       │     dₒ       │      dᵢ      │
       │              │              │
       ↓              │              ↓
                      │
    
    Object distance = Image distance
    dₒ = |dᵢ|
```

### Ray Diagram for Plane Mirror

```
                         Mirror
                           │
    Object                 │
       ●←─────────Top      │        ─ ─ ─ ─ ─ ● Image
      /│                   │                  │  (virtual)
     / │                   │                 /│
    /  │                   │                / │
   ↙   ↓                   │               ↙  │
  Eye sees               Reflected rays appear
  reflected rays         to come from behind mirror
```

### Multiple Plane Mirrors

When two plane mirrors meet at angle θ, the number of images formed:

$$N = \frac{360°}{\theta} - 1$$

(if 360°/θ is an integer)

| Angle | Number of Images |
|-------|-----------------|
| 90° | 3 |
| 60° | 5 |
| 45° | 7 |
| 30° | 11 |

---

## 🔮 Curved Mirrors: Concave

### Anatomy of a Concave Mirror

```
                    Principal Axis
    ←─────────────────────────────────────────→
                                 
         \                                C = Center of curvature
          \                               F = Focal point
           \                              V = Vertex
            \         C         F         V
             ●────────●─────────●─────────●
            /         │         │
           /          │←───────→│
          /           │    f    │
         /            │←────────────────→│
                      │         R        │
    
    Focal length: f = R/2
    (f and R are positive for concave mirrors)
```

### Sign Conventions for Mirrors

| Quantity | Positive (+) | Negative (-) |
|----------|-------------|--------------|
| Object distance (dₒ) | In front of mirror | Behind mirror (rare) |
| Image distance (dᵢ) | In front of mirror (real) | Behind mirror (virtual) |
| Focal length (f) | Concave mirror | Convex mirror |
| Height/Magnification | Upright image | Inverted image |

### The Mirror Equation

$$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$$

### Magnification

$$M = -\frac{d_i}{d_o} = \frac{h_i}{h_o}$$

- |M| > 1: Image is **enlarged**
- |M| < 1: Image is **reduced**
- |M| = 1: Image is **same size**
- M > 0: Image is **upright**
- M < 0: Image is **inverted**

### Principal Rays for Concave Mirrors

```
    Ray 1: Parallel to axis → Reflects through F
    Ray 2: Through F → Reflects parallel to axis
    Ray 3: Through C → Reflects back on itself
    Ray 4: To vertex → Reflects at equal angle
```

### Concave Mirror: Object Beyond C

```
         Object
           │↑
           │
    ───────●──────C─────F─────V
           ↑      │     │     │╲
           │      ●─────┼─────┼─╲────→
           │   Image    │     │  ╲
           │  (inverted,│     │   ╲
              smaller,  │     │
              real)     │     │
    
    Object: Beyond C
    Image: Between C and F
    Properties: Real, inverted, reduced
```

### Concave Mirror: Object at C

```
              Object
                │↑
                │
    ────────────●C────F─────V
                ↑↓    │     │╲
                │     │     │ ╲────→
             Image    │     │  ╲
            (same     │     │
             size)    │     │
    
    Object: At C
    Image: At C
    Properties: Real, inverted, same size
```

### Concave Mirror: Object Between C and F

```
    Object
      │↑
      │
    ──●───────C─────F─────V
      ↑       │     │     │╲
      │       │     │     │ ╲────→
      │       │     ●─────┼──╲
              │   Image   │
              │  (larger, │
                 real)    │
    
    Object: Between C and F
    Image: Beyond C
    Properties: Real, inverted, enlarged
```

### Concave Mirror: Object at F

```
         Object
           │↑
           │
    ───────┼─────C─────●F────V
           │     │     ↑     │╲
           │     │     │     │ ╲────→
           │     │     │     │  ╲
                       │     │
    Image at infinity! │     │
    (Rays are parallel)│     │
    
    Object: At F
    Image: At infinity (no image)
```

### Concave Mirror: Object Inside F

```
              Object
                │↑
                │
    ────────C───┼──F──●──V
            │   │  │  ↑  │╲
    ←─ ─ ─ ─│─ ─│──│──│──│─╲── ─ ─ →
            │   │  │  │  │  ╲
        Virtual │  │  │  │
        Image   │  │  │  │
        (behind │  │     │
        mirror, │  │     │
        upright,│  │     │
        larger) │  │     │
    
    Object: Inside F
    Image: Behind mirror
    Properties: Virtual, upright, enlarged
```

---

## 🔮 Curved Mirrors: Convex

### Anatomy of a Convex Mirror

```
                    Principal Axis
    ←─────────────────────────────────────────→
                                 
                      V         F         C
    ─────────────────●─────────●─────────●────
                    ╱│         │         │
                   ╱ │←───────→│         │
                  ╱  │    f    │         │
                 ╱   │←────────────────→ │
                     │         R         │
    
    Note: F and C are BEHIND the mirror
    Focal length f is NEGATIVE for convex mirrors
```

### Convex Mirror Image Formation

Convex mirrors **always** produce images that are:
- Virtual (behind the mirror)
- Upright
- Reduced in size

```
    Object
      │↑                      V
      │                       │╲
      ●───────────────────────┼─╲── ─ ─ ●─────────F
      │                       │  ╲     Image
      │                       │   ╲   (virtual,
      ↓                       │    ╲   upright,
                              │     ╲  smaller)
    
    Convex mirrors are used as:
    - Car side mirrors
    - Store security mirrors
    - Parking lot mirrors
```

### Ray Diagram for Convex Mirror

```
    Object                    V
      ●─────────────────────→│╲
      │  ↘                   │ ╲────────→
      │    ↘                 │  ╲
      │      ↘               │   ╲
      │        ↘             │    ╲
      │          ↘           │     F
      ●─────────────────────→│ ─ ─●
                             │    ↑
              Ray appears to  │   Virtual
              come from F     │   Image
    
    Ray 1: Parallel ray → Reflects as if from F
    Ray 2: Aimed at F → Reflects parallel
```

---

## 🔍 Mirror Problem-Solving Strategy

### Step-by-Step Approach

1. **Identify** the type of mirror (concave/convex)
2. **Draw** a ray diagram (at least 2 rays)
3. **Assign signs** according to convention
4. **Apply** the mirror equation
5. **Calculate** magnification
6. **Interpret** the results

### Complete Example Problem

**A 4.0 cm tall object is placed 30 cm from a concave mirror with focal length 10 cm. Find the image location, size, and characteristics.**

**Given:**
- hₒ = 4.0 cm
- dₒ = 30 cm
- f = +10 cm (concave)

**Step 1: Apply mirror equation**
```
1/f = 1/dₒ + 1/dᵢ
1/10 = 1/30 + 1/dᵢ
1/dᵢ = 1/10 - 1/30
1/dᵢ = 3/30 - 1/30 = 2/30 = 1/15
dᵢ = +15 cm
```

**Step 2: Calculate magnification**
```
M = -dᵢ/dₒ = -15/30 = -0.5
```

**Step 3: Calculate image height**
```
hᵢ = M × hₒ = (-0.5)(4.0 cm) = -2.0 cm
```

**Step 4: Interpret results**
- dᵢ = +15 cm → Image is **real** (in front of mirror)
- M = -0.5 → Image is **inverted** and **reduced**
- hᵢ = -2.0 cm → Confirms inverted, 2.0 cm tall

---

## 🔎 Thin Lenses: Converging (Convex)

### Anatomy of a Converging Lens

```
              │
              │         Parallel rays converge
         ╱────│────╲        at focal point
        │     │     │
        │     F     │   F
    ←───┼─────●─────┼───●────────→ Principal Axis
        │     │     │
        │     │     │
         ╲────│────╱
              │
              │
    
    Thicker in the middle
    Positive focal length
    Also called "convex lens"
```

### Sign Conventions for Lenses

| Quantity | Positive (+) | Negative (-) |
|----------|-------------|--------------|
| Object distance (dₒ) | Same side as incoming light | Opposite side (rare) |
| Image distance (dᵢ) | Opposite side from object (real) | Same side as object (virtual) |
| Focal length (f) | Converging lens | Diverging lens |
| Height/Magnification | Upright image | Inverted image |

### The Thin Lens Equation

$$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$$

(Same form as mirror equation!)

### Magnification

$$M = -\frac{d_i}{d_o} = \frac{h_i}{h_o}$$

### Principal Rays for Converging Lens

```
    Ray 1: Parallel to axis → Refracts through F (far side)
    Ray 2: Through center → Continues straight
    Ray 3: Through F (near side) → Refracts parallel
```

### Converging Lens: Object Beyond 2F

```
    Object
      │↑
      │
    ──●───────2F──────F──────│──────F──────2F
                             │        ↓
                             │        ●
                             │      Image
                             │    (inverted,
                             │     smaller,
                             │     real)
    
    Object: Beyond 2F
    Image: Between F and 2F
    Properties: Real, inverted, reduced
```

### Converging Lens: Object at 2F

```
              Object
                │↑
                │
    ────────────●2F───F──────│──────F──────2F
                             │             ↓
                             │             ●
                             │           Image
                             │         (inverted,
                             │          same size,
                             │          real)
    
    Object: At 2F
    Image: At 2F (other side)
    Properties: Real, inverted, same size
```

### Converging Lens: Object Between F and 2F

```
         Object
           │↑
           │
    ───────┼──2F──●───F──────│──────F──────2F───────
           │      ↑          │                    ↓
           │                 │                    ●
           │                 │                  Image
                             │                (inverted,
                             │                 larger,
                             │                 real)
    
    Object: Between F and 2F
    Image: Beyond 2F
    Properties: Real, inverted, enlarged
```

### Converging Lens: Object at F

```
              Object
                │↑
                │
    ─────2F─────●F───────────│──────F──────2F
                ↑            │
                             │
    No image forms!          │
    Rays emerge parallel     │
    (Image at infinity)      │
```

### Converging Lens: Object Inside F (Magnifying Glass!)

```
                   Object
                     │↑
                     │
    ─────2F────F─────●───────│──────F──────2F
                     ↑       │
         ● ─ ─ ─ ─ ─         │
       Image                 │
    (virtual,                │
     upright,                │
     larger)                 │
                             │
    This is how a magnifying glass works!
```

---

## 🔎 Thin Lenses: Diverging (Concave)

### Anatomy of a Diverging Lens

```
              │
              │         Parallel rays diverge
         ╲────│────╱        as if from focal point
          │   │   │
          │   F   │   F
    ←─────●───┼───┼───●───────→ Principal Axis
          │   │   │
          │   │   │
         ╱────│────╲
              │
              │
    
    Thinner in the middle
    Negative focal length
    Also called "concave lens"
```

### Diverging Lens Image Formation

Diverging lenses **always** produce images that are:
- Virtual (same side as object)
- Upright
- Reduced in size

```
    Object                          │
      │↑                            │
      │                             │
      ●─────────────────────────────│
      │    ↘                        │
      │      ● ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─│
      ↓    Image                    │
          (virtual,                 │
           upright,                 │
           smaller)                 │
    
    Image is ALWAYS:
    - Virtual
    - Upright  
    - Reduced
    - Between object and lens
```

### Ray Diagram for Diverging Lens

```
    Object                          │
      ●──────────────────────────→─→│─ ─ ─ ─ ─ ─ ─→
      │                      ↗      │
      │                   ↗         │
      │         ●──────●────────────│─────────────→
      │       Image   F             │
      │                             │
      ↓                             │
    
    Ray 1: Parallel ray → Diverges as if from F
    Ray 2: Through center → Continues straight
```

---

## 💡 Lens Power

### Definition

The power of a lens is the reciprocal of focal length (in meters):

$$P = \frac{1}{f}$$

**Unit: Diopter (D)** where 1 D = 1 m⁻¹

### Properties
- **Converging lens**: Positive power (+D)
- **Diverging lens**: Negative power (-D)
- Stronger lens = shorter focal length = higher power

### Example
```
f = 20 cm = 0.20 m
P = 1/0.20 = +5.0 D (converging)

f = -50 cm = -0.50 m  
P = 1/(-0.50) = -2.0 D (diverging)
```

### Combining Lenses in Contact

When lenses are in contact (touching):

$$P_{total} = P_1 + P_2$$

Or equivalently:

$$\frac{1}{f_{total}} = \frac{1}{f_1} + \frac{1}{f_2}$$

---

## 🔬 Multiple Lens Systems

### Two Lenses Not in Contact

For lenses separated by distance d:

**Step-by-step method:**
1. Find image from first lens (this becomes object for second lens)
2. Calculate new object distance for second lens
3. Find final image from second lens
4. Calculate total magnification: M_total = M₁ × M₂

```
    Object     Lens 1        Lens 2     Final
      ●──────────│────────────│──────────●
      │    d₁    │     d      │    d₂    │
      │←───────→ │←─────────→ │←───────→ │
      
    Object distance    Separation    Image from
    for lens 1                       lens 2
```

### Example: Two-Lens System

**A converging lens (f₁ = 10 cm) is 30 cm from a second converging lens (f₂ = 20 cm). An object is 15 cm from the first lens. Find the final image.**

**Step 1: Image from lens 1**
```
1/f₁ = 1/dₒ₁ + 1/dᵢ₁
1/10 = 1/15 + 1/dᵢ₁
1/dᵢ₁ = 1/10 - 1/15 = 3/30 - 2/30 = 1/30
dᵢ₁ = +30 cm (real image, 30 cm past lens 1)
```

**Step 2: Object distance for lens 2**
```
The image from lens 1 is 30 cm past lens 1
Lens 2 is 30 cm from lens 1
So the image from lens 1 is AT lens 2!
dₒ₂ = 0... wait, that's not physical.

Actually: dₒ₂ = separation - dᵢ₁ = 30 - 30 = 0 cm
This is a special case - image forms at lens 2!
```

Let's try with separation = 40 cm instead:

**Step 2 (revised): Object distance for lens 2**
```
dₒ₂ = separation - dᵢ₁ = 40 - 30 = 10 cm
```

**Step 3: Image from lens 2**
```
1/f₂ = 1/dₒ₂ + 1/dᵢ₂
1/20 = 1/10 + 1/dᵢ₂
1/dᵢ₂ = 1/20 - 1/10 = 1/20 - 2/20 = -1/20
dᵢ₂ = -20 cm (virtual image, 20 cm in front of lens 2)
```

**Step 4: Magnification**
```
M₁ = -dᵢ₁/dₒ₁ = -30/15 = -2
M₂ = -dᵢ₂/dₒ₂ = -(-20)/10 = +2
M_total = M₁ × M₂ = (-2)(+2) = -4
```

Final image is inverted, 4× larger, and virtual!

---

## 📊 Comparison: Mirrors vs Lenses

| Feature | Concave Mirror | Convex Mirror | Converging Lens | Diverging Lens |
|---------|----------------|---------------|-----------------|----------------|
| Shape | Curves inward | Curves outward | Thick middle | Thin middle |
| f | Positive | Negative | Positive | Negative |
| Can form real image? | Yes | No | Yes | No |
| Can form virtual image? | Yes | Yes | Yes | Yes |
| Image variety | 5 cases | 1 case | 5 cases | 1 case |

---

## 📐 Ray Diagram Summary

### Essential Rays for Mirrors

```
    CONCAVE MIRROR RAYS:
    
    1. Parallel ray → Through F
       ─────────────→╲
                      │ → → ●F
    
    2. Through F → Parallel
       ────●F────────→╲
                      │─────────→
    
    3. Through C → Back on itself
       ────●C────────→╲
       ←────────────────
    
    4. To vertex → Equal angle reflection
```

### Essential Rays for Lenses

```
    CONVERGING LENS RAYS:
    
    1. Parallel ray → Through far F
       ─────────────→│
                     │────→●F
    
    2. Through center → Straight
       ─────────────→│─────────────→
    
    3. Through near F → Parallel
       ●F────────────│─────────────→
```

---

## 🎯 Common Applications

### The Eye

```
    Cornea    Lens    Retina
      │        │        │
      ╲────────│────────╱
       ╲       │       ╱
        ╲      │      ╱
         ╲     │     ╱
          ╲    │    ╱
           ╲   │   ╱
            ╲  │  ╱
             ╲ │ ╱
              ╲│╱
               ●  Image (real, inverted)
    
    The eye acts as a converging lens system
    Focus is adjusted by changing lens shape
```

### Vision Correction

**Nearsightedness (Myopia)**
- Can't see distant objects clearly
- Image forms in front of retina
- **Corrected with diverging lens**

**Farsightedness (Hyperopia)**
- Can't see close objects clearly  
- Image forms behind retina
- **Corrected with converging lens**

### Camera

```
    Object       Lens          Sensor
      ●──────────│─────────────│●
      │          │             │
    Far away     │             Inverted
                 │             real image
```

### Telescope (Refracting)

```
    Objective lens         Eyepiece
    (large, long f)       (small, short f)
         │                      │
    ─────│──────────────────────│─────→ Eye
         │                      │
    
    Magnification = -fₒ/fₑ
```

### Microscope

```
    Eyepiece (short f)
         │
    ─────│
         │              Intermediate image
         │                    ↓
    ─────│──────────────────────
         │                      │
                          Objective lens
                          (very short f)
                                │
                            ────●──── Object (very close)
    
    Magnification = (L/fₒ)(25cm/fₑ)
    where L = tube length
```

---

## ⚡ Quick Problem-Solving Guide

### For Any Mirror Problem:
1. Identify: Concave (f > 0) or Convex (f < 0)
2. Use: 1/f = 1/dₒ + 1/dᵢ
3. Use: M = -dᵢ/dₒ
4. Interpret signs

### For Any Lens Problem:
1. Identify: Converging (f > 0) or Diverging (f < 0)
2. Use: 1/f = 1/dₒ + 1/dᵢ
3. Use: M = -dᵢ/dₒ
4. Interpret signs

### Quick Reference: Image Interpretation

| dᵢ | Image is... |
|-----|-------------|
| + (mirror) | Real, in front |
| - (mirror) | Virtual, behind |
| + (lens) | Real, opposite side |
| - (lens) | Virtual, same side |

| M | Image is... |
|-----|-------------|
| + | Upright |
| - | Inverted |
| |M| > 1 | Enlarged |
| |M| < 1 | Reduced |

---

## 🧪 Practice Problems

### Problem 1: Snell's Law
A light ray travels from air into glass (n = 1.50) at an angle of 30°. What is the refraction angle?

**Solution:**
```
n₁ sin θ₁ = n₂ sin θ₂
(1.00)(sin 30°) = (1.50)(sin θ₂)
sin θ₂ = (1.00)(0.500)/(1.50) = 0.333
θ₂ = 19.5°
```

### Problem 2: Critical Angle
Find the critical angle for water (n = 1.33) surrounded by air.

**Solution:**
```
sin θc = n₂/n₁ = 1.00/1.33 = 0.752
θc = 48.8°
```

### Problem 3: Concave Mirror
An object is placed 20 cm from a concave mirror with radius R = 30 cm. Find the image.

**Solution:**
```
f = R/2 = 30/2 = 15 cm

1/f = 1/dₒ + 1/dᵢ
1/15 = 1/20 + 1/dᵢ
1/dᵢ = 1/15 - 1/20 = 4/60 - 3/60 = 1/60
dᵢ = +60 cm (real, in front)

M = -dᵢ/dₒ = -60/20 = -3
Image is inverted, 3× larger, real
```

### Problem 4: Convex Mirror
An object is 40 cm from a convex mirror with f = -20 cm. Describe the image.

**Solution:**
```
1/f = 1/dₒ + 1/dᵢ
1/(-20) = 1/40 + 1/dᵢ
1/dᵢ = -1/20 - 1/40 = -2/40 - 1/40 = -3/40
dᵢ = -13.3 cm (virtual, behind mirror)

M = -dᵢ/dₒ = -(-13.3)/40 = +0.33
Image is upright, 1/3 size, virtual
```

### Problem 5: Converging Lens
A 6.0 cm object is 45 cm from a converging lens with f = 15 cm. Find the image height.

**Solution:**
```
1/f = 1/dₒ + 1/dᵢ
1/15 = 1/45 + 1/dᵢ
1/dᵢ = 1/15 - 1/45 = 3/45 - 1/45 = 2/45
dᵢ = +22.5 cm (real)

M = -dᵢ/dₒ = -22.5/45 = -0.5

hᵢ = M × hₒ = (-0.5)(6.0 cm) = -3.0 cm
Image is inverted, 3.0 cm tall
```

### Problem 6: Diverging Lens
An object is 30 cm from a diverging lens with f = -15 cm. Find the image location.

**Solution:**
```
1/f = 1/dₒ + 1/dᵢ
1/(-15) = 1/30 + 1/dᵢ
1/dᵢ = -1/15 - 1/30 = -2/30 - 1/30 = -3/30 = -1/10
dᵢ = -10 cm (virtual, same side as object)

M = -dᵢ/dₒ = -(-10)/30 = +0.33
Image is virtual, upright, reduced
```

---

## 📝 Key Equations Summary

### Refraction
$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$
$$v = \frac{c}{n}$$
$$\sin\theta_c = \frac{n_2}{n_1}$$

### Mirrors and Lenses
$$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$$
$$M = -\frac{d_i}{d_o} = \frac{h_i}{h_o}$$
$$f = \frac{R}{2} \text{ (mirrors only)}$$
$$P = \frac{1}{f} \text{ (in diopters)}$$

### Multiple Lenses
$$M_{total} = M_1 \times M_2 \times ...$$
$$P_{total} = P_1 + P_2 + ... \text{ (lenses in contact)}$$

---

## 🎓 AP Exam Tips

1. **Always draw a ray diagram** - even rough sketches help!
2. **Watch your signs** - most errors come from sign mistakes
3. **Check your answer** - does it make physical sense?
4. **Know the special cases**:
   - Object at F → image at infinity
   - Object at C (or 2F) → image same size
   - Convex mirror/diverging lens → always virtual, upright, reduced

5. **Remember**: The mirror and lens equations are IDENTICAL in form!

6. **Common FRQ topics**:
   - Snell's law calculations
   - Total internal reflection applications
   - Ray diagrams with image description
   - Two-lens systems
   - Real-world applications (cameras, eyes, corrective lenses)

---

## 🔑 Memory Aids

**"Real Is Inverted"** - Real images are always inverted (for single mirrors/lenses)

**"Virtual Is Upright"** - Virtual images are always upright

**"CONvex = CONtract"** - Convex mirrors/diverging lenses always make images smaller

**"LARS"** - Lens Apparent, Real Side (for positive dᵢ in lenses)

**For Refraction Direction:**
- "Slow down = bend toward" (entering denser medium)
- "Speed up = bend away" (entering less dense medium)

---

*Good luck with Unit 6! Remember: Optics is about tracking rays and applying the equations consistently. Practice ray diagrams until they become second nature!* 🔦✨

:::GUIDE:::
