/*
 * Project data — edit this file to add, remove, or update projects.
 * No HTML/CSS knowledge needed: each object below is one project card.
 *
 * Fields:
 *   id       - unique short string, no spaces
 *   title    - project name
 *   org      - team / organization / "Independent Project"
 *   date     - date range shown on the card
 *   tags     - array of category strings, e.g. "CFD", "Structures", "Aerodynamics"
 *   tools    - array of software/tools used
 *   summary  - one or two sentence description shown on the card
 *   details  - array of bullet points shown when the card is expanded
 *   images   - optional array of photo/render paths, e.g.
 *              ["assets/projects/uav-wing-1.jpg", "assets/projects/uav-wing-2.jpg"].
 *              Drop the files into the assets/projects/ folder and list their paths here.
 *              The first image is used as the card's cover photo; if there's more than
 *              one, all of them appear as a clickable thumbnail gallery in the detail view.
 *              Leave as [] to fall back to the plain initials plate.
 *   resources - optional array of external links shown as buttons in the detail view,
 *              e.g. a Google Drive / OneDrive folder with documentation, CAD files, etc.
 *              Each entry is { label: "Documentation", url: "https://..." }.
 *              Leave as [] to show none.
 */

const PROJECTS = [
  {
    id: "astrix-testing-launch-ops",
    title: "Testing and Launch Operations",
    org: "HKUST Astrix (Rocketry and Satellite Club)",
    date: "Sep 2026 — Ongoing",
    tags: ["Testing", "Structures"],
    tools: [],
    summary: "Leading testing and launch operations for Astrix's CanSat 2027 competition entry, with ownership of the parachute recovery system and environmental test apparatuses.",
    details: [
      "Currently serving as Head of Testing and Launch Operations for Astrix's CanSat 2027 competition entry.",
      "Responsible for designing the parachute recovery system and environmental test apparatuses.",
      "Assisting in the overall design and manufacturing of the CanSat and PocketQube."
    ],
    images: [],
    resources: [
      { label: "Project Files (Drive)", url: "https://drive.google.com/drive/folders/1mU7JytxRK1mXBL0NNwzziBhaOkP9y6Z5?usp=drive_link" }
    ]
  },
  {
    id: "uav-wing",
    title: "UAV Wing Design",
    org: "Independent Project",
    date: "Jul 2026 — Ongoing",
    tags: ["CFD", "Structures", "Aerodynamics"],
    tools: ["XFLR5", "SolidWorks", "Ansys Student"],
    summary: "Ground-up wing design for a fixed-wing disaster-reconnaissance UAV, from airfoil selection through structural FEA.",
    details: [
      "Self-studied UAV design fundamentals through online coursework and technical lectures.",
      "Designing the airfoil and wing planform and generating lift/drag polars in XFLR5.",
      "Swept polars across a Reynolds number range of 100,000 to 500,000 to characterize performance across the UAV's expected flight envelope.",
      "Running structural design and FEA in SolidWorks, with CFD validation in Ansys Student."
    ],
    images: [
      "assets/projects/uav-wing-polar-cl-alpha.png",
      "assets/projects/uav-wing-polar-cl-cd.png",
      "assets/projects/uav-wing-polar-cm-alpha.png",
      "assets/projects/uav-wing-polar-cl-xtr.png"
    ],
    resources: [
      { label: "Project Files (Drive)", url: "https://drive.google.com/drive/folders/1uqsbCfUv1pxU10w9QZ87CBoY5JbS3daA?usp=drive_link" }
    ]
  },
  {
    id: "fsae-rear-wing",
    title: "FSAE Rear Wing Design",
    org: "HKUST Red Bird Racing Team",
    date: "Oct — Dec 2025",
    tags: ["Aerodynamics", "Structures"],
    tools: ["SolidWorks"],
    summary: "Formula-SAE rear wing module designed in SolidWorks, producing 200N+ of downforce at 50 km/h within FSAE legality constraints.",
    details: [
      "Designed a full rear wing assembly — main plane, flap, and endplates — engineered to generate over 200N of downforce at 50 km/h.",
      "Selected airfoil profiles using real-world aerodynamic data to balance downforce against drag across the car's operating speed range.",
      "Modeled and validated the assembly in SolidWorks to meet FSAE rulebook legality and mounting requirements."
    ],
    images: [
      "assets/projects/fsae-rear-wing-1.jpg",
      "assets/projects/fsae-rear-wing-2.jpg",
      "assets/projects/fsae-rear-wing-3.jpg"
    ],
    resources: [
      { label: "Project Files (Drive)", url: "https://drive.google.com/drive/folders/1oFxotgI9UycZVzVRzHgXffAjxBAhuqdM?usp=drive_link" }
    ]
  }
];
