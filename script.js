const assetPaths = {
  dispatch: "assets/dispatch.mp4",
  escalation: "assets/escalation.mp4",
  immediate: "assets/immediate.mp4",
  secure: "assets/secure.mp4",
};

const steps = [
  { id: "briefing", label: "Briefing" },
  { id: "dispatch", label: "Dispatch" },
  { id: "escalation", label: "Escalation" },
  { id: "decision", label: "Decision" },
  { id: "outcome", label: "Outcome" },
  { id: "debrief", label: "Debrief" },
];

const scenes = {
  start: {
    phaseLabel: "Briefing",
    title: "Train judgment under pressure.",
    kicker: "Simulation briefing",
    description:
      "Split Second puts the learner into a roadside rollover where urgency, fear, and incomplete information collide in seconds.",
    narration:
      "The learner is the first responder arriving at a highway rollover. A trapped driver, visible smoke, and an unstable scene create pressure before a single instruction is given.",
    objective: "Prime the learner for the arriving incident.",
    clock: "T-00:45",
    selection: "No decision yet",
    takeaway:
      "Focus on scene safety, patient condition, and the hazards that could escalate the incident.",
    riskLabel: "Simulation Ready",
    riskTone: "medium",
    mediaKey: null,
    fallbackScene: "start",
    timelineIndex: 0,
    debrief: null,
    choices: null,
    primary: { label: "Start Scenario", next: "dispatch" },
    secondary: null,
  },
  dispatch: {
    phaseLabel: "Dispatch",
    title: "A rollover call breaks the quiet.",
    kicker: "22:14 dispatch channel",
    description:
      "A sedan has rolled into the guardrail. The driver is still inside. Witnesses report smoke near the engine bay and a strong fuel odor.",
    narration:
      '"Unit 12, respond to a single-vehicle rollover on eastbound Highway 30 near mile marker 184. One trapped adult driver. Smoke visible. Unknown injuries. Law enforcement en route."',
    objective: "Arrive with an initial hazard picture in mind.",
    clock: "T-00:18",
    selection: "Awaiting scene size-up",
    takeaway:
      "Known hazards: trapped driver, smoke near the engine bay, and a possible fuel leak.",
    riskLabel: "Elevating",
    riskTone: "medium",
    mediaKey: "dispatch",
    fallbackScene: "dispatch",
    timelineIndex: 1,
    debrief: null,
    choices: null,
    primary: { label: "Arrive On Scene", next: "escalation" },
    secondary: { label: "Restart", next: "start" },
  },
  escalation: {
    phaseLabel: "Escalation",
    title: "The scene is unstable before the rescue begins.",
    kicker: "22:19 arrival",
    description:
      "The vehicle rests on its side. Fuel glistens under the engine bay. Traffic is still creeping past and a bystander is already reaching through broken glass to pull the driver free.",
    narration:
      "You are first on scene. Smoke builds in pulses from the hood. Bystanders are shouting to move faster. The driver is conscious, but pinned and disoriented.",
    objective: "Read the hazards before committing the team.",
    clock: "T+00:12",
    selection: "Decision approaching",
    takeaway:
      "Immediate concerns: ignition risk, moving traffic, and bystanders interfering with the rescue.",
    riskLabel: "High Risk",
    riskTone: "high",
    mediaKey: "escalation",
    fallbackScene: "escalation",
    timelineIndex: 2,
    debrief: null,
    choices: null,
    primary: { label: "Go To Decision Point", next: "decision" },
    secondary: { label: "Restart", next: "start" },
  },
  decision: {
    phaseLabel: "Decision Point",
    title: "What does the responder do first?",
    kicker: "Seconds to choose",
    description:
      "The victim is conscious and pleading for help. The scene is not stabilized. One action feels fast. The other feels slower, but safer.",
    narration:
      "This is the branching moment. The learner now decides whether to move immediately or control the hazards first.",
    objective: "Make a first move under pressure.",
    clock: "Decision live",
    selection: "Choose a branch",
    takeaway:
      "Choose the safest first action based on hazard control, not just urgency.",
    riskLabel: "Critical Choice",
    riskTone: "high",
    mediaKey: null,
    fallbackScene: "decision",
    timelineIndex: 3,
    debrief: null,
    choices: [
      {
        label: "Extract The Driver Immediately",
        detail:
          "Rush to pull the victim out before the scene is controlled, hoping speed outweighs the hazard.",
        next: "immediateOutcome",
        selection: "Immediate extraction",
      },
      {
        label: "Stabilize The Scene First",
        detail:
          "Block traffic, manage bystanders, request suppression coverage, and coordinate a controlled extrication.",
        next: "secureOutcome",
        selection: "Stabilize first",
      },
    ],
    primary: null,
    secondary: { label: "Restart", next: "start" },
  },
  immediateOutcome: {
    phaseLabel: "Outcome A",
    title: "The rushed rescue creates a second emergency.",
    kicker: "Branch A: uncontrolled extraction",
    description:
      "The hurried pull worsens the victim's condition and, as responders shift position, a brief flare at the engine bay forces everyone back from the car.",
    narration:
      "The victim is moved before hazards are controlled. In the confusion, the rescue loses coordination, the bystanders surge closer, and the team now has both a medical emergency and an active ignition threat.",
    objective: "Review what rushing cost the team.",
    clock: "After-action",
    selection: "Immediate extraction",
    takeaway:
      "Rushed action increased scene instability and reduced control of the rescue.",
    riskLabel: "Branch A",
    riskTone: "high",
    mediaKey: "immediate",
    fallbackScene: "immediateOutcome",
    timelineIndex: 4,
    debrief: {
      tone: "Outcome Review",
      heading: "Why this branch underperformed",
      summary:
        "The instinct to move fast is understandable, but scene instability turned the rescue into a more dangerous event for both the victim and the response team.",
      points: [
        "Hazards were not controlled before contact with the vehicle.",
        "Bystander pressure distorted the responder's decision-making.",
        "The team lost control of the incident before a safe extrication plan was in place.",
      ],
    },
    choices: null,
    primary: { label: "See The Safer Outcome", next: "secureOutcome" },
    secondary: { label: "Restart", next: "start" },
  },
  secureOutcome: {
    phaseLabel: "Outcome B",
    title: "Scene control buys time and protects the rescue.",
    kicker: "Branch B: controlled response",
    description:
      "Traffic is stopped, bystanders are moved back, suppression support is in place, and the victim is extricated in a coordinated, lower-risk sequence.",
    narration:
      "The responder slows the tempo just enough to control the hazards. With the scene stabilized, the team can remove the victim without turning one crisis into two.",
    objective: "Show why controlled action wins the incident.",
    clock: "After-action",
    selection: "Stabilize first",
    takeaway:
      "Controlling the environment first reduced avoidable risk for both patient and responders.",
    riskLabel: "Branch B",
    riskTone: "controlled",
    mediaKey: "secure",
    fallbackScene: "secureOutcome",
    timelineIndex: 5,
    debrief: {
      tone: "Debrief",
      heading: "Why this branch worked better",
      summary:
        "The responder managed the environment before committing to the rescue, which reduced avoidable risk and created a cleaner path to patient care.",
      points: [
        "Scene hazards were controlled before the extrication began.",
        "The responder resisted urgency from the crowd and followed a safer sequence.",
        "A controlled first move created a safer and more effective rescue path.",
      ],
    },
    choices: null,
    primary: { label: "Restart Simulation", next: "start" },
    secondary: { label: "Review Other Outcome", next: "immediateOutcome" },
  },
};

const elements = {
  phaseLabel: document.getElementById("phaseLabel"),
  sceneTitle: document.getElementById("sceneTitle"),
  sceneKicker: document.getElementById("sceneKicker"),
  sceneDescription: document.getElementById("sceneDescription"),
  fallbackTitle: document.getElementById("fallbackTitle"),
  fallbackBadge: document.getElementById("fallbackBadge"),
  narrationText: document.getElementById("narrationText"),
  riskBadge: document.getElementById("riskBadge"),
  objectiveText: document.getElementById("objectiveText"),
  clockText: document.getElementById("clockText"),
  selectionText: document.getElementById("selectionText"),
  takeawayText: document.getElementById("takeawayText"),
  timeline: document.getElementById("timeline"),
  sceneVideo: document.getElementById("sceneVideo"),
  sceneFallback: document.getElementById("sceneFallback"),
  decisionZone: document.getElementById("decisionZone"),
  choiceGrid: document.getElementById("choiceGrid"),
  debriefZone: document.getElementById("debriefZone"),
  debriefTone: document.getElementById("debriefTone"),
  debriefHeading: document.getElementById("debriefHeading"),
  debriefSummary: document.getElementById("debriefSummary"),
  debriefList: document.getElementById("debriefList"),
  primaryAction: document.getElementById("primaryAction"),
  secondaryAction: document.getElementById("secondaryAction"),
};
let currentSceneKey = "start";
let loadToken = 0;
let hasUserInteracted = false;

function renderTimeline(activeIndex) {
  elements.timeline.innerHTML = "";

  steps.forEach((step, index) => {
    const row = document.createElement("div");
    row.className = "timeline-step";

    if (index < activeIndex) {
      row.classList.add("is-complete");
    } else if (index === activeIndex) {
      row.classList.add("is-active");
    }

    const dot = document.createElement("span");
    dot.className = "timeline-dot";
    dot.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");
    label.className = "timeline-label";
    label.textContent = step.label;

    row.append(dot, label);
    elements.timeline.appendChild(row);
  });
}

function setRiskBadge(label, tone) {
  elements.riskBadge.textContent = label;
  elements.riskBadge.className = `risk-badge risk-badge--${tone}`;
}

function setFallbackState(scene, message) {
  elements.sceneFallback.hidden = false;
  elements.sceneFallback.dataset.scene = scene.fallbackScene;
  elements.fallbackBadge.textContent = message;
}

function hideVideo() {
  elements.sceneVideo.pause();
  elements.sceneVideo.hidden = true;
  elements.sceneVideo.removeAttribute("src");
  elements.sceneVideo.load();
}

function attemptPlay() {
  if (!hasUserInteracted || elements.sceneVideo.hidden) {
    return;
  }

  const playPromise = elements.sceneVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

function loadSceneMedia(scene) {
  const mediaKey = scene.mediaKey;
  loadToken += 1;
  const token = loadToken;

  if (!mediaKey) {
    hideVideo();
    setFallbackState(scene, "Scenario preview");
    return;
  }

  const source = assetPaths[mediaKey];

  setFallbackState(scene, "Loading scene");
  elements.sceneVideo.hidden = true;

  elements.sceneVideo.oncanplay = () => {
    if (token !== loadToken) {
      return;
    }

    elements.sceneVideo.hidden = false;
    elements.sceneFallback.hidden = true;
    attemptPlay();
  };

  elements.sceneVideo.onerror = () => {
    if (token !== loadToken) {
      return;
    }

    hideVideo();
    setFallbackState(scene, "Scenario preview");
  };

  elements.sceneVideo.src = source;
  elements.sceneVideo.load();
}

function renderChoices(scene) {
  elements.choiceGrid.innerHTML = "";

  if (!scene.choices) {
    elements.decisionZone.hidden = true;
    return;
  }

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-card";
    button.innerHTML = `<strong>${choice.label}</strong><span>${choice.detail}</span>`;
    button.addEventListener("click", () => {
      hasUserInteracted = true;
      elements.selectionText.textContent = choice.selection;
      showScene(choice.next);
    });
    elements.choiceGrid.appendChild(button);
  });

  elements.decisionZone.hidden = false;
}

function renderDebrief(scene) {
  if (!scene.debrief) {
    elements.debriefZone.hidden = true;
    elements.debriefList.innerHTML = "";
    return;
  }

  elements.debriefTone.textContent = scene.debrief.tone;
  elements.debriefHeading.textContent = scene.debrief.heading;
  elements.debriefSummary.textContent = scene.debrief.summary;
  elements.debriefList.innerHTML = "";

  scene.debrief.points.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    elements.debriefList.appendChild(item);
  });

  elements.debriefZone.hidden = false;
}

function renderActions(scene) {
  if (scene.primary) {
    elements.primaryAction.hidden = false;
    elements.primaryAction.textContent = scene.primary.label;
    elements.primaryAction.onclick = () => {
      hasUserInteracted = true;
      showScene(scene.primary.next);
    };
  } else {
    elements.primaryAction.hidden = true;
    elements.primaryAction.onclick = null;
  }

  if (scene.secondary) {
    elements.secondaryAction.hidden = false;
    elements.secondaryAction.textContent = scene.secondary.label;
    elements.secondaryAction.onclick = () => {
      hasUserInteracted = true;
      showScene(scene.secondary.next);
    };
  } else {
    elements.secondaryAction.hidden = true;
    elements.secondaryAction.onclick = null;
  }
}

function showScene(sceneKey) {
  currentSceneKey = sceneKey;
  const scene = scenes[sceneKey];

  elements.phaseLabel.textContent = scene.phaseLabel;
  elements.sceneTitle.textContent = scene.title;
  elements.sceneKicker.textContent = scene.kicker;
  elements.sceneDescription.textContent = scene.description;
  elements.fallbackTitle.textContent = scene.title;
  elements.narrationText.textContent = scene.narration;
  elements.objectiveText.textContent = scene.objective;
  elements.clockText.textContent = scene.clock;
  elements.selectionText.textContent = scene.selection;
  elements.takeawayText.textContent = scene.takeaway;

  setRiskBadge(scene.riskLabel, scene.riskTone);
  renderTimeline(scene.timelineIndex);
  renderChoices(scene);
  renderDebrief(scene);
  renderActions(scene);
  loadSceneMedia(scene);
}

renderTimeline(0);
showScene("start");
