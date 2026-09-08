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
 *   link     - optional URL (external writeup, repo, etc.) — set to "" to omit
 *   image    - optional path to a photo/render, e.g. "assets/projects/uav-wing.jpg".
 *              Drop the file into the assets/projects/ folder and point to it here.
 *              Leave as "" to fall back to the plain initials plate.
 */

const PROJECTS = [
  {
    id: "uav-wing",
    title: "UAV Wing Design",
    org: "Independent Project",
    date: "Jul 2026 — Ongoing",
    tags: ["CFD", "Structures", "Aerodynamics"],
    tools: ["XFLR5", "SolidWorks", "SimScale"],
    summary: "Ground-up wing design for a fixed-wing disaster-reconnaissance UAV, from airfoil selection through structural FEA.",
    details: [
      "Self-studied UAV design fundamentals through online coursework and technical lectures.",
      "Designing the airfoil and wing planform and generating lift/drag polars in XFLR5.",
      "Running structural design and FEA in SolidWorks, with CFD validation in SimScale."
    ],
    link: "",
    image: ""
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
    link: "",
    image: ""
  }
];
