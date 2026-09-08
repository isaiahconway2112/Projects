(function () {
  "use strict";

  document.getElementById("footer-year").textContent = new Date().getFullYear();

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Top nav background on scroll ---------- */
  const topNav = document.getElementById("top-nav");
  window.addEventListener("scroll", function () {
    topNav.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  /* ---------- Project rendering ---------- */
  const projectGrid = document.getElementById("project-grid");
  const projectFilter = document.getElementById("project-filter");
  const modalOverlay = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  const modalClose = document.getElementById("modal-close");

  const allTags = Array.from(
    new Set(PROJECTS.flatMap(function (p) { return p.tags; }))
  ).sort();

  allTags.forEach(function (tag) {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.tag = tag;
    btn.textContent = tag;
    projectFilter.appendChild(btn);
  });

  function renderProjects(activeTag) {
    projectGrid.innerHTML = "";
    const list = activeTag === "all"
      ? PROJECTS
      : PROJECTS.filter(function (p) { return p.tags.indexOf(activeTag) !== -1; });

    list.forEach(function (project) {
      const card = document.createElement("article");
      card.className = "project-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "View details for " + project.title);

      const media = project.image
        ? '<img class="project-card-image" src="' + project.image + '" alt="' + project.title + '">'
        : '<div class="project-card-plate" aria-hidden="true"><span>' + initials(project.title) + '</span></div>';

      card.innerHTML =
        media +
        '<div class="project-card-body">' +
          '<div class="chip-row">' + project.tags.map(function (t) { return '<span class="badge-pill">' + t + '</span>'; }).join("") + '</div>' +
          '<h3 class="project-card-title">' + project.title + '</h3>' +
          '<p class="project-card-meta">' + project.org + ' · ' + project.date + '</p>' +
          '<p class="project-card-summary">' + project.summary + '</p>' +
          '<span class="project-card-cta">View details →</span>' +
        '</div>';

      card.addEventListener("click", function () { openModal(project); });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(project);
        }
      });

      projectGrid.appendChild(card);
    });
  }

  function initials(title) {
    return title
      .split(" ")
      .filter(function (w) { return /^[A-Za-z]/.test(w); })
      .slice(0, 2)
      .map(function (w) { return w[0].toUpperCase(); })
      .join("");
  }

  projectFilter.addEventListener("click", function (e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    projectFilter.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.remove("is-active");
    });
    btn.classList.add("is-active");
    renderProjects(btn.dataset.tag);
  });

  function openModal(project) {
    modalContent.innerHTML =
      (project.image
        ? '<img class="modal-image" src="' + project.image + '" alt="' + project.title + '">'
        : "") +
      '<p class="eyebrow">' + project.org + ' · ' + project.date + '</p>' +
      '<h2 class="modal-title" id="modal-title">' + project.title + '</h2>' +
      '<div class="chip-row">' + project.tags.map(function (t) { return '<span class="badge-pill">' + t + '</span>'; }).join("") + '</div>' +
      '<p class="body-text">' + project.summary + '</p>' +
      '<ul class="modal-details">' + project.details.map(function (d) { return '<li>' + d + '</li>'; }).join("") + '</ul>' +
      (project.tools && project.tools.length
        ? '<p class="caption-label">Tools</p><div class="chip-row">' + project.tools.map(function (t) { return '<span class="badge-pill">' + t + '</span>'; }).join("") + '</div>'
        : "") +
      (project.resources && project.resources.length
        ? '<div class="modal-resources">' + project.resources.map(function (r) {
            return '<a href="' + r.url + '" target="_blank" rel="noopener" class="btn btn-outline">' + r.label + ' ↗</a>';
          }).join("") + '</div>'
        : "");

    modalOverlay.classList.add("is-open");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("is-open");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  renderProjects("all");

  /* ---------- Contact form (Formspree) ---------- */
  const form = document.getElementById("contact-form");
  const formNote = document.getElementById("form-note");

  form.addEventListener("submit", function (e) {
    if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
      e.preventDefault();
      formNote.textContent = "Form isn't wired up yet — email me directly at itconway@connect.ust.hk.";
      formNote.classList.add("form-note-warning");
      return;
    }

    e.preventDefault();
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    }).then(function (response) {
      if (response.ok) {
        form.reset();
        formNote.textContent = "Thanks — your message is on its way.";
      } else {
        formNote.textContent = "Something went wrong. Please email itconway@connect.ust.hk directly.";
        formNote.classList.add("form-note-warning");
      }
    }).catch(function () {
      formNote.textContent = "Something went wrong. Please email itconway@connect.ust.hk directly.";
      formNote.classList.add("form-note-warning");
    });
  });
})();
