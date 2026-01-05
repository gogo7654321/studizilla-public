:::GUIDE:::
unit::=7
title::=🌊 Unit 7: Wave Optics
desc::=Master interference, diffraction, and polarization phenomena
diff::=Hard
time::=55 min
tags::=physics,wave-optics,interference,diffraction,polarization
content::=

# 🌊 Unit 7: Wave Optics (Physical Optics)

Wave optics, also called physical optics, describes light behavior that can only be explained by treating light as a wave. This unit explores interference, diffraction, and polarization—phenomena that demonstrate light's wave nature and have applications from anti-reflective coatings to fiber optics.

---

## 📚 Table of Contents

1. [Wave Nature of Light](#wave-nature-of-light)
2. [Superposition and Interference](#superposition-and-interference)
3. [Young's Double-Slit Experiment](#youngs-double-slit-experiment)
4. [Path Difference and Phase](#path-difference-and-phase)
5. [Single-Slit Diffraction](#single-slit-diffraction)
6. [Diffraction Gratings](#diffraction-gratings)
7. [Thin Film Interference](#thin-film-interference)
8. [Polarization of Light](#polarization-of-light)
9. [Polarizing Filters and Malus's Law](#polarizing-filters-and-maluss-law)
10. [Practice Problems](#practice-problems)
11. [Key Formulas Summary](#key-formulas-summary)

---

## Wave Nature of Light

### Historical Context

The debate between particle and wave theories of light lasted centuries:

| Scientist | Theory | Key Evidence |
|-----------|--------|--------------|
| Newton | Particle (corpuscles) | Reflection, sharp shadows |
| Huygens | Wave | Refraction, diffraction |
| Young | Wave confirmed | Interference patterns |
| Maxwell | Electromagnetic wave | Light is EM radiation |

### Light as an Electromagnetic Wave

Light is a transverse electromagnetic wave:

```
Electric Field (E)
       ↑
       │    ╭─╮    ╭─╮
       │   ╱   ╲  ╱   ╲
───────┼──╱─────╲╱─────╲────→ Direction of propagation
       │ ╱       ╲       ╲
       │╱         ╰─╯    ╰─
       ↓
Magnetic Field (B) - perpendicular to E and propagation
```

### Key Wave Properties

**Wavelength (λ)**: Distance between consecutive crests
- Visible light: 400 nm (violet) to 700 nm (red)
- 1 nm = 10⁻⁹ m

**Frequency (f)**: Number of oscillations per second
- Visible light: ~4 × 10¹⁴ Hz to 7.5 × 10¹⁴ Hz

**Speed of Light in Vacuum**:
$$c = 3.00 \times 10^8 \text{ m/s}$$

**Wave Equation**:
$$c = f\lambda$$

**Speed in a Medium**:
$$v = \frac{c}{n}$$

Where n = index of refraction (n > 1 for all materials)

### Wavelength in Different Media

When light enters a medium with index n:
- **Frequency stays constant**
- **Wavelength decreases**: $\lambda_n = \frac{\lambda_0}{n}$
- **Speed decreases**: $v = \frac{c}{n}$

```
Air (n = 1.00)          Glass (n = 1.5)
                        
  λ₀ = 600 nm            λₙ = 400 nm
  ╭──╮  ╭──╮             ╭─╮╭─╮╭─╮
 ╱    ╲╱    ╲    →      ╱  ╲╱  ╲╱  ╲
─────────────────────────────────────→
     ↑                      ↑
  Same frequency, shorter wavelength
```

---

## Superposition and Interference

### Principle of Superposition

When two or more waves overlap, the resultant displacement is the **algebraic sum** of individual displacements:

$$y_{total} = y_1 + y_2 + y_3 + ...$$

### Constructive Interference

Occurs when waves are **in phase** (crest meets crest):

```
Wave 1:     ╭───╮       ╭───╮
           ╱     ╲     ╱     ╲
──────────╱───────╲───╱───────╲─────
                   ╲ ╱
Wave 2:     ╭───╮   ╳   ╭───╮
           ╱     ╲ ╱ ╲ ╱     ╲
──────────╱───────╲───╲───────╲─────

Result:     ╭─────╮     ╭─────╮
           ╱       ╲   ╱       ╲
──────────╱─────────╲─╱─────────╲───
         ↑
    Amplitude DOUBLES (2A)
```

**Phase difference**: 0°, 360°, 720°, ... (0, 2π, 4π, ...)
**Path difference**: 0, λ, 2λ, 3λ, ... = mλ (m = 0, 1, 2, ...)

### Destructive Interference

Occurs when waves are **out of phase** (crest meets trough):

```
Wave 1:     ╭───╮       ╭───╮
           ╱     ╲     ╱     ╲
──────────╱───────╲───╱───────╲─────
                   
Wave 2:         ╲       ╲       
                 ╲     ╱ ╲     ╱
──────────────────╲───╱───╲───╱─────
                   ╰─╯     ╰─╯

Result:   ─────────────────────────────
                    ↑
            Amplitude = ZERO (cancellation)
```

**Phase difference**: 180°, 540°, ... (π, 3π, 5π, ...)
**Path difference**: λ/2, 3λ/2, 5λ/2, ... = (m + ½)λ

### Coherent Sources

For sustained interference patterns, sources must be **coherent**:
- Same frequency
- Constant phase relationship

> 💡 **Key Insight**: Two independent light sources (like two flashlights) cannot produce interference patterns because they're incoherent.

---

## Young's Double-Slit Experiment

### Experimental Setup

Thomas Young's 1801 experiment provided definitive proof of light's wave nature:

```
                                              Screen
Light    Single                Double
Source   Slit                  Slits         ║ Bright (m=2)
  ●────────║────────────────────║─────────────║ Dark
           ║                    ║      ╲      ║ Bright (m=1)
           ║                    ║       ╲     ║ Dark
                                ║        ╲    ║ Bright (m=0) ← Central max
                                ║         ╲   ║ Dark
                                         d    ║ Bright (m=1)
                                              ║ Dark
                                              ║ Bright (m=2)
           ←─────────────L─────────────→
```

### How It Works

1. Light passes through single slit (creates coherent source)
2. Light diffracts at double slits (two coherent sources)
3. Waves from both slits interfere on the screen
4. Pattern of bright and dark fringes appears

### Path Difference Analysis

```
                    S₁ ●───────────────────→ P (point on screen)
                       ╲                   ╱
                        ╲                 ╱
                    d    ╲               ╱
                          ╲             ╱  θ
                    S₂ ●───╲───────────→
                           ↑
                      Path difference = d sin θ
```

For small angles: tan θ ≈ sin θ ≈ y/L

**Path Difference**:
$$\Delta r = d \sin\theta \approx \frac{dy}{L}$$

Where:
- d = slit separation
- θ = angle from center
- y = distance from central maximum on screen
- L = distance from slits to screen

### Interference Conditions

**Bright Fringes (Constructive)**:
$$d \sin\theta = m\lambda \quad \text{where } m = 0, \pm1, \pm2, ...$$

**Dark Fringes (Destructive)**:
$$d \sin\theta = \left(m + \frac{1}{2}\right)\lambda \quad \text{where } m = 0, \pm1, \pm2, ...$$

### Position of Fringes

**Bright Fringe Position** (small angle approximation):
$$y_m = \frac{m\lambda L}{d}$$

**Dark Fringe Position**:
$$y_m = \frac{(m + \frac{1}{2})\lambda L}{d}$$

### Fringe Spacing

The distance between adjacent bright (or dark) fringes:
$$\Delta y = \frac{\lambda L}{d}$$

> 📝 **Important**: Fringe spacing increases with:
> - Longer wavelength (λ)
> - Greater screen distance (L)
> - Smaller slit separation (d)

### Intensity Pattern

```
Intensity
    ↑
    │     ▲           ▲           ▲           ▲           ▲
    │    ╱ ╲         ╱ ╲         ╱ ╲         ╱ ╲         ╱ ╲
    │   ╱   ╲       ╱   ╲       ╱   ╲       ╱   ╲       ╱   ╲
    │  ╱     ╲     ╱     ╲     ╱     ╲     ╱     ╲     ╱     ╲
    │ ╱       ╲   ╱       ╲   ╱       ╲   ╱       ╲   ╱       ╲
    │╱         ╲ ╱         ╲ ╱         ╲ ╱         ╲ ╱         ╲
────┼───────────┼───────────┼───────────┼───────────┼──────────→ Position
   m=-2       m=-1        m=0        m=1        m=2
                         (central)
```

Intensity at any point:
$$I = I_0 \cos^2\left(\frac{\pi d \sin\theta}{\lambda}\right)$$

---

## Path Difference and Phase

### Understanding Path Difference

Path difference (Δr) is the difference in distance traveled by two waves:

```
           Source 1
              ●─────────────────────→ r₁
                ╲                   ↗
                 ╲                 ╱  Point P
                  ╲               ╱
                   ╲─────────────→ r₂
           Source 2

Path Difference: Δr = r₂ - r₁ (or |r₁ - r₂|)
```

### Relationship Between Path Difference and Phase Difference

$$\Delta\phi = \frac{2\pi}{\lambda} \times \Delta r$$

Or equivalently:
$$\Delta\phi = \frac{2\pi \Delta r}{\lambda}$$

| Path Difference | Phase Difference | Result |
|-----------------|------------------|--------|
| 0 | 0 | Maximum constructive |
| λ/4 | π/2 (90°) | Partial constructive |
| λ/2 | π (180°) | Complete destructive |
| 3λ/4 | 3π/2 (270°) | Partial constructive |
| λ | 2π (360°) | Maximum constructive |

### Phase Shift on Reflection

When light reflects from a boundary:

**Higher to Lower n (external reflection)**: **180° (π) phase shift**
- Example: Air → Glass surface

**Lower to Higher n (internal reflection)**: **No phase shift**
- Example: Glass → Air surface

```
Incident light
      ↘
       ╲         ← 180° phase shift when reflecting
────────╲────────   from higher n material
   n₁    ╲     n₂ (n₂ > n₁)
          ↘
        (transmitted - no phase shift)
```

> ⚠️ **Critical Concept**: This phase shift is crucial for thin film interference!

---

## Single-Slit Diffraction

### What is Diffraction?

Diffraction is the spreading of waves when they pass through an opening or around an obstacle:

```
          Plane waves                    After slit
          approaching                    
    ═══════════════════                ╱    ╱    ╱
    ═══════════════════               ╱    ╱    ╱
    ═══════════════════              ╱    ╱ ╲  ╱
    ═══════════════════    ═══      (  (  )  )
    ═══════════════════    ═══       ╲    ╲ ╱  ╲
    ═══════════════════              ╲    ╲    ╲
    ═══════════════════               ╲    ╲    ╲
                          ↑
                      Slit width (a)
```

### Single-Slit Diffraction Pattern

Unlike double-slit, single-slit produces a **central maximum much wider and brighter** than secondary maxima:

```
Intensity
    ↑
    │                    ████
    │                   ██████
    │                  ████████
    │                 ██████████
    │                ████████████
    │   ██         ██████████████         ██
    │  ████       ████████████████       ████
    │ ██████     ████████████████████   ██████
────┼──────────────────┼──────────────────────→ Position
   m=-2  m=-1         m=0          m=1   m=2
    ↑     ↑      (Central Max)      ↑     ↑
  Dark  Dark                      Dark  Dark
```

### Conditions for Dark Fringes (Minima)

**Dark Fringes**:
$$a \sin\theta = m\lambda \quad \text{where } m = \pm1, \pm2, \pm3, ...$$

Note: m ≠ 0 (center is a bright maximum!)

Where:
- a = slit width
- θ = angle from center
- m = order number (non-zero integers)

### Position of Dark Fringes

$$y_m = \frac{m\lambda L}{a}$$

### Central Maximum Width

The central maximum extends from first minimum on one side to first minimum on other side:

$$\text{Angular width} = 2\theta_1 \approx \frac{2\lambda}{a}$$

$$\text{Linear width} = 2y_1 = \frac{2\lambda L}{a}$$

> 💡 **Key Insight**: The central maximum is **twice as wide** as the secondary maxima.

### Comparing Single and Double Slit

| Feature | Single Slit | Double Slit |
|---------|-------------|-------------|
| Central max | Widest, brightest | Same as others |
| Secondary maxima | Much dimmer | Nearly equal intensity |
| Pattern caused by | Diffraction only | Interference (with diffraction envelope) |
| Dark fringe condition | asinθ = mλ | dsinθ = (m+½)λ |

### Double-Slit with Diffraction Envelope

In reality, double-slit patterns are modulated by single-slit diffraction:

```
Intensity
    ↑
    │              ╱╲     Diffraction
    │             ╱  ╲    envelope
    │            ╱    ╲
    │     ▲  ▲  ▲  ▲  ▲  ▲  ▲     ← Interference fringes
    │    ╱ ╲╱ ╲╱ ╲╱ ╲╱ ╲╱ ╲╱ ╲      inside envelope
    │   ╱                    ╲
    │  ╱                      ╲
────┼──────────────────────────────→ Position
```

---

## Diffraction Gratings

### What is a Diffraction Grating?

A diffraction grating has many parallel slits (lines):
- Typically 300 to 10,000 lines per mm
- Creates very sharp, bright interference maxima
- Used in spectrometers

```
Grating (many slits)                    Screen

    ║                                    Bright (m=2)
    ║                                    
    ║    ╲                               Bright (m=1)
    ║     ╲╲
    ║      ╲╲╲                           Bright (m=0)
    ║       ╲╲╲                          ← Central max
    ║        ╲╲
    ║         ╲                          Bright (m=1)
    ║
    ║                                    Bright (m=2)
```

### Grating Equation

**Principal Maxima** occur at:
$$d \sin\theta = m\lambda$$

Where:
- d = distance between adjacent slits (grating spacing)
- m = 0, ±1, ±2, ... (order number)

### Grating Line Spacing

If grating has N lines per unit length:
$$d = \frac{1}{N}$$

**Example**: 500 lines/mm → d = 1/500 mm = 2 × 10⁻⁶ m = 2 μm

### Maximum Order Number

The highest order visible is limited by sin θ ≤ 1:
$$m_{max} = \text{floor}\left(\frac{d}{\lambda}\right)$$

### Why Gratings are Superior

| Property | Double Slit | Diffraction Grating |
|----------|-------------|---------------------|
| Number of slits | 2 | 100s to 1000s |
| Peak sharpness | Broad | Very sharp |
| Peak brightness | Dim | Bright |
| Spectral resolution | Low | High |

### Spectral Dispersion

Gratings separate white light into spectra:

```
White light → Grating → 

                        m=2: Violet ─────────────── Red
                        
                        m=1: Violet ─────────── Red
                        
                        m=0: White (central)
                        
                        m=-1: Violet ────────── Red
                        
                        m=-2: Violet ────────────── Red
```

> 📝 **Note**: Higher orders are more spread out (better dispersion) but may overlap.

### Angular Dispersion

The angular separation between different wavelengths:
$$\frac{d\theta}{d\lambda} = \frac{m}{d\cos\theta}$$

### Resolving Power

A grating's ability to distinguish nearby wavelengths:
$$R = \frac{\lambda}{\Delta\lambda} = mN$$

Where N = total number of slits illuminated

---

## Thin Film Interference

### The Phenomenon

When light hits a thin transparent film, interference occurs between:
1. Light reflected from the top surface
2. Light reflected from the bottom surface

```
Incident Light
       ↓
       ↘
────────╲───────────────────── n₁ (air)
         ╲    ↗ Reflected ray 1 (may have phase shift)
    Film  ╲  ╱
    (n₂)   ╲╱
           ╱╲
──────────╱──╲──────────────── n₂ (film)
         ╱    ╲  ↗ Reflected ray 2
        ╱      ╲╱               (longer path + possible phase shift)
       ╱
────────────────────────────── n₃ (substrate)
       ↑
   thickness t
```

### Phase Contributions

Two sources of phase difference:

1. **Path Difference**: Light ray 2 travels extra distance 2t in film
   - Optical path difference = 2nt (using wavelength in film)

2. **Phase Shift on Reflection**: 
   - 180° if reflecting from higher n material
   - 0° if reflecting from lower n material

### Interference Conditions

**Case 1: One phase shift (n₁ < n₂ > n₃ OR n₁ > n₂ < n₃)**

Constructive: $2n_2t = \left(m + \frac{1}{2}\right)\lambda$

Destructive: $2n_2t = m\lambda$

**Case 2: Zero or two phase shifts (n₁ < n₂ < n₃ OR n₁ > n₂ > n₃)**

Constructive: $2n_2t = m\lambda$

Destructive: $2n_2t = \left(m + \frac{1}{2}\right)\lambda$

Where:
- t = film thickness
- n₂ = film refractive index
- λ = wavelength in vacuum/air
- m = 0, 1, 2, 3, ...

### Minimum Thickness for Constructive Interference

For the first constructive interference (m = 0) with one phase shift:
$$t_{min} = \frac{\lambda}{4n_{film}}$$

This is the principle behind **anti-reflective coatings**!

### Common Examples

**Soap Bubbles and Oil Slicks**:
- Varying thickness creates rainbow colors
- Thinnest regions appear dark (destructive for all visible λ)

```
      Soap Bubble
    ╱             ╲
   ╱   thin        ╲
  ╱    (dark)       ╲
 │                   │
 │   medium          │
 │   (colors)        │
 │                   │
  ╲   thick         ╱
   ╲  (more colors)╱
    ╲             ╱
```

**Anti-Reflective (AR) Coatings**:
- Designed for destructive interference of reflected light
- Thickness = λ/(4n) for target wavelength (usually green ~550 nm)
- More light transmitted, less reflected

**Newton's Rings**:
- Air wedge between curved glass and flat glass
- Circular interference pattern

```
    Curved lens
         ↓
    ╭─────────╮
   ╱           ╲
  ╱    air      ╲  ← Variable air gap
─────────────────── Flat glass
  ↑           ↑
Dark rings  Bright rings
```

---

## Polarization of Light

### What is Polarization?

Light is a transverse wave with electric field oscillating perpendicular to propagation direction.

**Unpolarized Light**: Electric field oscillates in all directions perpendicular to propagation
**Polarized Light**: Electric field oscillates in only one plane

```
Unpolarized Light              Polarized Light (vertical)
                               
       ↑                              ↑
      ╱│╲                             │
     ╱ │ ╲                            │
←───●──●──●───→                   ←──●─│─●──→
     ╲ │ ╱                            │
      ╲│╱                             │
       ↓                              ↓

(All directions)               (One direction only)
```

### Methods of Polarization

**1. Polarization by Selective Absorption**
- Polaroid filters absorb one component
- Common in sunglasses, LCD screens

**2. Polarization by Reflection (Brewster's Angle)**
- At Brewster's angle, reflected light is completely polarized
- $\tan\theta_B = \frac{n_2}{n_1}$

```
        Incident        Reflected
        (unpolarized)   (polarized ⊙)
              ↘         ↗
               ╲       ╱
────────────────╲─────╱───────────── Surface
                 ╲   ╱
                  ╲ ╱ θ_B
                   ╳
                  ╱
                 ╱ Refracted
                ↓  (partially polarized)
```

**3. Polarization by Scattering**
- Why the sky is blue AND polarized
- Scattered light is polarized perpendicular to scattering direction

**4. Polarization by Double Refraction (Birefringence)**
- Crystals like calcite split light into two polarized beams

### Polarizers and Analyzers

A **polarizer** converts unpolarized light to polarized light.
An **analyzer** is a second polarizer that tests polarization state.

```
Unpolarized → [Polarizer] → Vertically → [Analyzer] → Transmitted
   light      (vertical)    polarized    (at angle)    intensity
                                                       depends on angle
```

---

## Polarizing Filters and Malus's Law

### Malus's Law

When polarized light passes through an analyzer at angle θ to the polarization direction:

$$I = I_0 \cos^2\theta$$

Where:
- I₀ = intensity of incident polarized light
- θ = angle between polarization direction and analyzer axis
- I = transmitted intensity

### Intensity Chart

| Angle θ | cos²θ | Transmitted Intensity |
|---------|-------|----------------------|
| 0° | 1.00 | 100% (maximum) |
| 30° | 0.75 | 75% |
| 45° | 0.50 | 50% |
| 60° | 0.25 | 25% |
| 90° | 0.00 | 0% (blocked) |

### Unpolarized Light Through One Polarizer

When unpolarized light passes through one ideal polarizer:
$$I = \frac{I_0}{2}$$

Half the intensity passes through (and becomes polarized).

### Multiple Polarizers in Series

**Example: Two polarizers at 90°**
```
Unpolarized → [Polarizer] → [Analyzer at 90°] → ZERO output
              │ vertical │   │ horizontal │
                  ↓              ↓
              I₀/2 (V)         0
```

**Example: Three polarizers (0°, 45°, 90°)**
```
Unpolarized → [0°] → [45°] → [90°] → Some light gets through!

I₀ → I₀/2 → (I₀/2)cos²45° → (I₀/4)cos²45°
         → I₀/4            → I₀/8
```

> 🤯 **Surprising Result**: Adding a polarizer between crossed polarizers can INCREASE transmission!

### Applications of Polarization

**1. Polarized Sunglasses**
- Reduce glare from horizontal surfaces (roads, water)
- Absorb horizontally polarized reflected light

**2. LCD Displays**
- Liquid crystals rotate polarization
- Crossed polarizers with controllable rotation

**3. 3D Movies**
- Different polarizations for left and right eye
- Glasses separate the two images

**4. Stress Analysis**
- Stressed plastics become birefringent
- Colors indicate stress patterns

**5. Photography**
- Reduce reflections from windows/water
- Enhance sky contrast

---

## Practice Problems

### Problem 1: Double-Slit Interference
**A double-slit experiment uses slits separated by 0.25 mm. Light of wavelength 600 nm creates an interference pattern on a screen 2.0 m away. Find:**
a) The position of the second bright fringe from center
b) The fringe spacing

**Solution:**
Given: d = 0.25 mm = 2.5 × 10⁻⁴ m, λ = 600 nm = 6.0 × 10⁻⁷ m, L = 2.0 m

a) Position of m = 2 bright fringe:
$$y_2 = \frac{m\lambda L}{d} = \frac{(2)(6.0 \times 10^{-7})(2.0)}{2.5 \times 10^{-4}}$$
$$y_2 = 9.6 \times 10^{-3} \text{ m} = 9.6 \text{ mm}$$

b) Fringe spacing:
$$\Delta y = \frac{\lambda L}{d} = \frac{(6.0 \times 10^{-7})(2.0)}{2.5 \times 10^{-4}} = 4.8 \text{ mm}$$

---

### Problem 2: Single-Slit Diffraction
**Light of wavelength 500 nm passes through a single slit of width 0.10 mm onto a screen 3.0 m away. Calculate the width of the central maximum.**

**Solution:**
Given: λ = 500 nm = 5.0 × 10⁻⁷ m, a = 0.10 mm = 1.0 × 10⁻⁴ m, L = 3.0 m

Position of first minimum (m = 1):
$$y_1 = \frac{\lambda L}{a} = \frac{(5.0 \times 10^{-7})(3.0)}{1.0 \times 10^{-4}} = 0.015 \text{ m} = 15 \text{ mm}$$

Width of central maximum = 2y₁ = 30 mm = 3.0 cm

---

### Problem 3: Diffraction Grating
**A diffraction grating has 600 lines per mm. Light of wavelength 550 nm shines on it. Find:**
a) The angle of the first-order maximum
b) The maximum order number visible

**Solution:**
Given: N = 600 lines/mm, λ = 550 nm = 5.5 × 10⁻⁷ m

Grating spacing: d = 1/N = 1/600 mm = 1.67 × 10⁻⁶ m

a) First order (m = 1):
$$\sin\theta_1 = \frac{m\lambda}{d} = \frac{(1)(5.5 \times 10^{-7})}{1.67 \times 10^{-6}} = 0.329$$
$$\theta_1 = \sin^{-1}(0.329) = 19.2°$$

b) Maximum order:
$$m_{max} = \text{floor}\left(\frac{d}{\lambda}\right) = \text{floor}\left(\frac{1.67 \times 10^{-6}}{5.5 \times 10^{-7}}\right) = \text{floor}(3.03) = 3$$

---

### Problem 4: Thin Film - Soap Bubble
**A soap bubble (n = 1.33) in air appears bright when viewed in reflected light of wavelength 600 nm. What is the minimum thickness?**

**Solution:**
Given: n = 1.33, λ = 600 nm

For a soap bubble in air: n_air(1.00) < n_bubble(1.33) > n_air(1.00)
- Reflection at top surface: phase shift (low to high n)
- Reflection at bottom surface: phase shift (high to low n, but internal reflection... wait, it's going from inside bubble to air)

Actually: At inside surface, light goes from film (n=1.33) to air (n=1.00), so NO phase shift.
Total: ONE phase shift.

For constructive interference with one phase shift:
$$2nt = \left(m + \frac{1}{2}\right)\lambda$$

Minimum thickness (m = 0):
$$t_{min} = \frac{\lambda}{4n} = \frac{600 \text{ nm}}{4(1.33)} = 113 \text{ nm}$$

---

### Problem 5: Anti-Reflective Coating
**A glass lens (n = 1.52) is coated with MgF₂ (n = 1.38) to reduce reflection. What minimum coating thickness will minimize reflection of 550 nm light?**

**Solution:**
Given: n_air = 1.00, n_coating = 1.38, n_glass = 1.52, λ = 550 nm

Since n_air < n_coating < n_glass: TWO phase shifts (one at each interface)

For destructive interference (minimum reflection) with two phase shifts:
$$2nt = \left(m + \frac{1}{2}\right)\lambda$$

Minimum thickness (m = 0):
$$t_{min} = \frac{\lambda}{4n_{coating}} = \frac{550 \text{ nm}}{4(1.38)} = 99.6 \text{ nm} \approx 100 \text{ nm}$$

---

### Problem 6: Polarization and Malus's Law
**Unpolarized light of intensity I₀ passes through two polarizers. The second is rotated 30° from the first. What fraction of the original intensity emerges?**

**Solution:**
After first polarizer: I₁ = I₀/2 (unpolarized → polarized)

After second polarizer (Malus's Law with θ = 30°):
$$I_2 = I_1 \cos^2(30°) = \frac{I_0}{2} \cdot \cos^2(30°) = \frac{I_0}{2} \cdot \left(\frac{\sqrt{3}}{2}\right)^2$$
$$I_2 = \frac{I_0}{2} \cdot \frac{3}{4} = \frac{3I_0}{8}$$

Fraction transmitted: **3/8 = 0.375 = 37.5%**

---

### Problem 7: Three Polarizers
**Unpolarized light passes through three polarizers oriented at 0°, 45°, and 90°. What fraction of the original intensity emerges?**

**Solution:**
After P₁ (0°): I₁ = I₀/2

After P₂ (45° relative to P₁):
$$I_2 = I_1 \cos^2(45°) = \frac{I_0}{2} \cdot \frac{1}{2} = \frac{I_0}{4}$$

After P₃ (90° relative to P₁, so 45° relative to P₂):
$$I_3 = I_2 \cos^2(45°) = \frac{I_0}{4} \cdot \frac{1}{2} = \frac{I_0}{8}$$

Fraction transmitted: **1/8 = 0.125 = 12.5%**

---

### Problem 8: Path Difference
**Two coherent light sources emit waves of wavelength 500 nm. Point P is 15.75 μm farther from source 2 than source 1. Is point P a maximum or minimum?**

**Solution:**
Path difference: Δr = 15.75 μm = 15,750 nm

Number of wavelengths: Δr/λ = 15,750/500 = 31.5

Since 31.5 = 31 + 0.5 = (m + ½), this is a half-wavelength path difference.

Point P is at a **minimum** (destructive interference).

---

### Problem 9: Diffraction Limit
**A slit is illuminated with 633 nm laser light. If the central maximum on a screen 2.0 m away is 2.0 cm wide, what is the slit width?**

**Solution:**
Given: λ = 633 nm, L = 2.0 m, central max width = 2.0 cm = 0.020 m

Central maximum width = 2y₁, so y₁ = 0.010 m

For first minimum: y₁ = λL/a

Solving for a:
$$a = \frac{\lambda L}{y_1} = \frac{(633 \times 10^{-9})(2.0)}{0.010} = 1.27 \times 10^{-4} \text{ m} = 127 \text{ μm}$$

---

### Problem 10: Brewster's Angle
**Light traveling in air strikes a glass surface (n = 1.50). At what angle of incidence is the reflected light completely polarized?**

**Solution:**
Brewster's angle:
$$\tan\theta_B = \frac{n_2}{n_1} = \frac{1.50}{1.00} = 1.50$$
$$\theta_B = \tan^{-1}(1.50) = 56.3°$$

---

## Key Formulas Summary

### Wave Properties
| Formula | Description |
|---------|-------------|
| c = fλ | Wave equation (in vacuum) |
| v = c/n | Speed in medium |
| λₙ = λ₀/n | Wavelength in medium |

### Double-Slit Interference
| Formula | Description |
|---------|-------------|
| d sin θ = mλ | Bright fringe condition |
| d sin θ = (m+½)λ | Dark fringe condition |
| yₘ = mλL/d | Bright fringe position |
| Δy = λL/d | Fringe spacing |

### Single-Slit Diffraction
| Formula | Description |
|---------|-------------|
| a sin θ = mλ | Dark fringe condition (m ≠ 0) |
| Central width = 2λL/a | Width of central maximum |

### Diffraction Grating
| Formula | Description |
|---------|-------------|
| d sin θ = mλ | Principal maximum condition |
| d = 1/N | Grating spacing (N = lines/length) |
| R = mN | Resolving power |

### Thin Film Interference
| Formula | Description |
|---------|-------------|
| 2nt = mλ | Constructive (0 or 2 phase shifts) |
| 2nt = (m+½)λ | Constructive (1 phase shift) |
| t_min = λ/(4n) | Minimum thickness (AR coating) |

### Polarization
| Formula | Description |
|---------|-------------|
| I = I₀/2 | Unpolarized through polarizer |
| I = I₀cos²θ | Malus's Law |
| tan θ_B = n₂/n₁ | Brewster's angle |

---

## Quick Reference: Interference Summary

```
┌──────────────────────────────────────────────────────────────┐
│                    INTERFERENCE TYPES                        │
├─────────────────────┬────────────────────────────────────────┤
│ CONSTRUCTIVE        │ DESTRUCTIVE                            │
├─────────────────────┼────────────────────────────────────────┤
│ Crest + Crest       │ Crest + Trough                         │
│ Path diff = mλ      │ Path diff = (m+½)λ                     │
│ Phase diff = 2mπ    │ Phase diff = (2m+1)π                   │
│ Amplitude doubles   │ Amplitude = 0                          │
│ BRIGHT fringe       │ DARK fringe                            │
└─────────────────────┴────────────────────────────────────────┘
```

---

## Common Mistakes to Avoid

❌ **Mistake 1**: Using wrong condition for thin film
- Remember to count phase shifts at EACH interface!

❌ **Mistake 2**: Forgetting wavelength changes in medium
- Use λₙ = λ/n when calculating optical path difference

❌ **Mistake 3**: Confusing single and double slit formulas
- Single slit: Dark at a sin θ = mλ
- Double slit: Bright at d sin θ = mλ

❌ **Mistake 4**: Wrong order of operations with polarizers
- Each polarizer's transmission depends on previous polarization direction

❌ **Mistake 5**: Not checking if small angle approximation applies
- sin θ ≈ tan θ ≈ θ only for θ < ~10°

---

## AP Exam Tips

1. **Know your conditions**: Memorize when to use mλ vs (m+½)λ
2. **Draw diagrams**: Path differences and phase shifts become clear
3. **Check phase shifts**: High-to-low n reflection = no shift
4. **Unit consistency**: Keep wavelength in meters or nm throughout
5. **Practice Malus's Law**: Multiple polarizer problems are common
6. **Understand concepts**: Why patterns look the way they do
7. **Grating vs double-slit**: Gratings give sharper, brighter peaks

---

## Concept Connections

```
Wave Optics connects to:

├── Electromagnetic Waves (Unit 6)
│   └── Light is EM radiation
│
├── Geometric Optics (Unit 6)
│   └── Wave effects when λ ~ obstacle size
│
├── Modern Physics
│   └── Wave-particle duality
│
└── Real-World Applications
    ├── Spectroscopy
    ├── Holography
    ├── Fiber optics
    ├── Anti-glare screens
    └── 3D movies
```

---

**You've completed Unit 7: Wave Optics! 🎉**

This unit reveals light's wave nature through interference, diffraction, and polarization. These phenomena have countless applications in technology, from the colors on soap bubbles to the screens we use daily.

:::GUIDE:::
