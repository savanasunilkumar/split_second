# Split Second — Midjourney V1 Video Prompts

Prompts for the 4 scene videos referenced in `script.js`:
`dispatch.mp4`, `escalation.mp4`, `immediate.mp4`, `secure.mp4`.

---

## How Midjourney V1 Video Works (quick primer)

Midjourney video is a **two-step** pipeline:

1. **Generate a still image** on Midjourney (the "start frame"). Write a normal image prompt — composition, subject, lighting, lens, aesthetic — and set `--ar 16:9` for video.
2. **Animate that image.** Click the image, pick **Animate → Manual**, and paste a **motion prompt** that describes what happens over the next 4 seconds (camera movement + subject action + environmental motion). You can extend clips up to 16 seconds total.

### Key parameters
- `--ar 16:9` — widescreen video aspect ratio (use on the image prompt).
- `--motion low` — camera mostly still, subtle subject/environment motion. Ambient, cinematic.
- `--motion high` — active camera **and** subject movement. Chaotic, action-heavy.
- `--raw` — less Midjourney "house style," more literal prompt adherence.
- `--loop` — tries to make the last frame match the first (good for ambient B-roll, not story beats).

### Motion-prompt structure (manual mode)
Write one or two sentences, in this order:

> **[Camera movement]** + **[subject action]** + **[environmental motion]** + **[pacing cue]**

Example: *"Slow dolly-in toward the car, driver's hand falls limp against the window, smoke pulses thicker from the engine bay, tempo steady and tense."*

### Camera-move vocabulary that actually works
Pan, tilt, dolly-in / dolly-out, tracking shot, crane down, crane up, pedestal, steadicam, handheld, POV, over-the-shoulder, rack focus, whip pan, static lockdown, push-in, pull-back.

---

## Scene 1 — `dispatch.mp4`

**Beat:** 22:14. The call comes in. Responder in the cab, en route. Pre-arrival tension.
**Target length:** 4 seconds. **Motion intensity:** low.

### Image prompt (generate the start frame)
```
POV from inside the cab of an emergency response vehicle at night, driver's
hands on the steering wheel, dashboard glowing in soft red and amber, rain-
speckled windshield, empty rural highway ahead lit only by headlights, faint
red-and-blue light bar reflections bouncing off the hood, radio handset
mounted on the dash, moody cinematic lighting, shallow depth of field, 35mm
anamorphic lens, filmic grain, high contrast, realistic, photoreal --ar 16:9 --raw
```

### Motion prompt (for the Animate step)
```
Slow steady dolly forward down the dark highway, windshield wipers sweep
once across the glass, red and blue light-bar reflections pulse softly on
the dashboard, driver's hand tightens on the wheel, rain streaks drift past
the window, cinematic slow tempo.
```
**Parameters:** `--motion low`

### Alt take (dispatcher-at-console angle)
```
Image: Close-up of a 911 dispatcher at a console, face lit by the blue glow
of multiple monitors showing a map with a blinking incident marker, headset
on, hand hovering over a mic, dark operations room, shallow DOF, cinematic,
photoreal --ar 16:9 --raw

Motion: Slow push-in on the dispatcher's face as she leans toward the mic,
her eyes flick across the monitors, map marker pulses red, room stays quiet
and tense, --motion low
```

---

## Scene 2 — `escalation.mp4`

**Beat:** Arrival. Car on its side, smoke, fuel, bystanders. Hazards stacking.
**Target length:** 4–8 seconds. **Motion intensity:** high.

### Image prompt (start frame)
```
Wide cinematic shot of a silver sedan rolled onto its passenger side against
a highway guardrail at night, smoke pulsing from the engine bay, pooled fuel
glistening on wet asphalt reflecting red and blue emergency lights, broken
glass scattered across the road, two bystanders in dark jackets leaning
toward the shattered window, traffic creeping past with headlights flaring,
first-responder stepping out of frame foreground, overcast night sky, moody
atmospheric lighting, volumetric haze, anamorphic 35mm lens, shallow depth
of field, photoreal, cinematic, Denis Villeneuve tone --ar 16:9 --raw
```

### Motion prompt
```
Handheld tracking shot moving slowly from right to left around the
overturned sedan, smoke pulses thicker from the engine bay, fuel on the
asphalt ripples as a car drives past, bystander reaches toward the broken
window, red and blue light-bar strobes wash across the scene, tension
rising, pacing urgent but controlled.
```
**Parameters:** `--motion high`

### Alt take (low-angle hero shot)
```
Image: Low-angle hero shot of the responder's boots stepping into frame
past flares on wet asphalt, overturned car in mid-background, smoke curling
up, emergency lights flaring, shallow DOF, cinematic, photoreal --ar 16:9 --raw

Motion: Camera cranes up slowly from the boots to reveal the full scene —
overturned car, smoke, bystanders, creeping traffic — flares flicker in the
foreground, tempo builds, --motion high
```

---

## Scene 3 — `immediate.mp4` (Branch A: rushed extraction — bad outcome)

**Beat:** The panicked pull. A flare-up at the engine bay. Chaos. Bystanders surge.
**Target length:** 4–8 seconds. **Motion intensity:** high.

### Image prompt (start frame)
```
Chaotic nighttime highway emergency scene, two responders and a bystander
hauling a semi-conscious driver out of an overturned sedan, bright orange
flash erupting from the engine bay, thick black smoke billowing up, sparks
flying, panicked bystanders crowding in from the edges of frame, fuel
reflections catching fire light, responder's face mid-shout, motion blur
on hands, red and blue lights strobing, lens flare, disorienting wide
shot, handheld documentary style, high ISO grain, photoreal,
cinematic --ar 16:9 --raw
```

### Motion prompt
```
Aggressive handheld shake, quick whip pan from the engine-bay flare to the
responders dragging the victim across wet asphalt, orange flash expands and
drops quickly, smoke surges forward toward the camera, a bystander lunges
into frame, everyone recoils from the heat, lens briefly flares and
refocuses, fast chaotic tempo.
```
**Parameters:** `--motion high`

### Alt take (over-the-shoulder of the rushed responder)
```
Image: Over-the-shoulder shot of a responder gripping the driver under the
arms, pulling him out through a shattered window, engine bay fireball
beginning in background, other responder stumbling backward, bystander's
phone camera in frame, chaotic, photoreal, cinematic --ar 16:9 --raw

Motion: Handheld camera stumbles backward with the responder, driver's
body comes free from the window, fireball flares brighter and sends a
shockwave of heat haze past the lens, responder flinches, fast panicked
pacing, --motion high
```

---

## Scene 4 — `secure.mp4` (Branch B: controlled response — good outcome)

**Beat:** Slowed tempo. Traffic stopped. Flares set. Coordinated extrication.
**Target length:** 6–10 seconds. **Motion intensity:** low.

### Image prompt (start frame)
```
Wide cinematic nighttime highway scene, line of red flares burning on wet
asphalt in a neat arc, traffic stopped behind them with headlights dimmed,
two patrol cars angled to block the lane, four responders working in a
coordinated team around an overturned sedan, one stabilizing the vehicle
with cribbing blocks, one with hydraulic spreader at the door, a medic
kneeling near the driver's window with a cervical collar ready, suppression
support standing by with an extinguisher, calm professional body language,
soft volumetric haze, measured composition, symmetrical framing, anamorphic
lens, cinematic, photoreal, muted color grade --ar 16:9 --raw
```

### Motion prompt
```
Slow smooth crane-up behind the flares revealing the full stabilized scene,
flares flicker softly, medic nods to the spreader operator, one responder
gestures bystanders further back, driver's hand is gently supported through
the window, smoke from the engine bay has thinned to a wisp, everything
moves with calm deliberate rhythm, tempo steady and professional.
```
**Parameters:** `--motion low`

### Alt take (medic's POV, patient-centered)
```
Image: Close-up over the medic's shoulder as she steadies the driver's head
through the shattered side window, gloved hands holding a cervical collar,
responder in background visible through the opposite window operating a
spreader tool, soft key light on the patient's face, calm, photoreal,
cinematic --ar 16:9 --raw

Motion: Slow push-in past the medic's shoulder toward the driver's face,
driver blinks and focuses, medic's hands move in to place the collar,
background responder's tool opens the door frame with a controlled motion,
tempo slow and reassuring, --motion low
```

---

## Production tips for this pack

- **Keep lighting consistent across all 4 clips** so the scene feels like one incident — same wet asphalt, same red/blue strobes, same overcast night. Reuse phrases like *"red and blue light-bar reflections on wet asphalt"* and *"overcast night, volumetric haze."*
- **Lens language matters.** `anamorphic 35mm`, `shallow depth of field`, and `filmic grain` consistently steer Midjourney toward a cinematic, non-cartoony look.
- **Use `--raw`** on every image prompt — it keeps Midjourney from pushing the scene toward its default painterly style.
- **Motion intensity is your emotional dial.** `--motion low` = controlled / tense / professional. `--motion high` = chaos, panic, escalation. You already have that contrast mapped to your narrative branches (secure = low, immediate = high).
- **Extend to 8–12 seconds** for `escalation` and `secure` (they're the dramatic anchors). Keep `dispatch` short (4s) so the user hits the decision screen faster.
- **Export at 1080p** from Midjourney and convert to `.mp4` (H.264, ~8 Mbps) so your `<video>` tag loads quickly on web.
- **Match duration to gameplay pacing.** Your `script.js` doesn't auto-advance on video end, so long clips are fine — but users will click past ~10s. Under 10s per clip is the sweet spot.

---

## Sources
- Midjourney V1 Video Model announcement and documentation (June 2025 launch)
- Community guides on `--motion low/high`, `--raw`, `--loop`, and manual vs automatic motion prompts
