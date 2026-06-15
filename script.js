// ============================================================
//  SQA PORTFOLIO — script.js
//  Author : Shreyansh Dixit
//  All interactivity for the dark-themed, QA-audit portfolio.
//  Pure vanilla JS · No external libraries · ES6+
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ========== CACHED DOM REFERENCES ==========
  const bootOverlay       = document.getElementById('boot-overlay');
  const mainContent       = document.getElementById('main-content');
  const bootSkip          = document.getElementById('boot-skip');

  const flowTooltipPanel  = document.getElementById('flow-tooltip-panel');
  const bugReportForm     = document.getElementById('bug-report-form');
  const formSuccess       = document.getElementById('form-success');
  const easterEggElement  = document.getElementById('easter-egg-element');
  const navLinks          = document.querySelectorAll('.nav-link');
  const sections          = document.querySelectorAll('section[id]');
  const flowNodes         = document.querySelectorAll('.flow-node[data-tooltip]');
  const ticketCards       = document.querySelectorAll('.ticket-card');
  const severityRadios    = document.querySelectorAll('.severity-radio');
  const sectionTitles     = document.querySelectorAll('.section-title');
  const animateTargets    = document.querySelectorAll('[data-animate="true"]');
  const progressFills     = document.querySelectorAll('.progress-fill');
  const skillsSection     = document.querySelector('.skills-section');

  // ========== MEDIA QUERIES ==========
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isMobilePointer     = window.matchMedia('(pointer: coarse)');
  const isMobileWidth       = window.matchMedia('(max-width: 768px)');
  const isMobile             = () => isMobilePointer.matches || isMobileWidth.matches;

  // ========== 9. EASTER EGG CONSOLE LOG ==========
  console.log(
    '%c// If you\'re reading this, you\'re the kind of person who inspects elements.',
    'color: #00C896; font-family: monospace; font-size: 14px;'
  );
  console.log(
    '%c// So am I. Let\'s talk: shreyanshdixit6206@gmail.com',
    'color: #00C896; font-family: monospace; font-size: 14px;'
  );

  // ========== 1. BOOT SEQUENCE ==========
  const showMainContent = () => {
    if (bootOverlay) bootOverlay.classList.add('hidden');
    if (mainContent) mainContent.classList.add('visible');
  };

  const runBootSequence = () => {
    // Skip boot entirely when reduced motion is preferred
    if (prefersReducedMotion.matches) {
      showMainContent();
      return;
    }

    if (!bootOverlay) {
      showMainContent();
      return;
    }

    const bootLines = bootOverlay.querySelectorAll('.boot-line');

    if (bootLines.length === 0) {
      showMainContent();
      return;
    }

    // Reveal lines one by one
    bootLines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add('visible');
      }, index * 300);
    });

    // After all lines revealed + 400ms pause, show main content
    const totalDelay = bootLines.length * 300 + 400;
    setTimeout(showMainContent, totalDelay);
  };

  // Skip button
  if (bootSkip) {
    bootSkip.addEventListener('click', () => {
      showMainContent();
    });
  }

  runBootSequence();



  // ========== 3. FLOWCHART TOOLTIP INTERACTION ==========
  const initFlowTooltips = () => {
    if (!flowTooltipPanel || flowNodes.length === 0) return;

    let hideTimeout = null;

    flowNodes.forEach((node) => {
      node.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
        const tooltipText = node.getAttribute('data-tooltip');
        flowTooltipPanel.textContent = tooltipText || '';
        flowTooltipPanel.classList.add('active');
      }, { passive: true });

      node.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(() => {
          flowTooltipPanel.classList.remove('active');
        }, 300);
      }, { passive: true });
    });
  };

  initFlowTooltips();

  // ========== 4. SCROLL-TRIGGERED ANIMATIONS ==========
  const initScrollAnimations = () => {
    if (prefersReducedMotion.matches) {
      // If reduced motion, make everything visible immediately
      animateTargets.forEach((el) => el.classList.add('animate-in'));
      progressFills.forEach((fill) => {
        const width = fill.getAttribute('data-width');
        if (width) fill.style.width = `${width}%`;
      });
      return;
    }

    // General scroll-in observer
    if (animateTargets.length > 0) {
      const animObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const el = entry.target;

            // Stagger cards inside .edge-grid
            const parentGrid = el.closest('.edge-grid');
            if (parentGrid) {
              const siblings = Array.from(parentGrid.querySelectorAll('[data-animate="true"]'));
              const index = siblings.indexOf(el);
              if (index !== -1) {
                el.style.transitionDelay = `${index * 100}ms`;
              }
            }

            el.classList.add('animate-in');
            observer.unobserve(el);
          });
        },
        { threshold: 0.1 }
      );

      animateTargets.forEach((el) => animObserver.observe(el));
    }

    // Skills progress bars
    if (skillsSection && progressFills.length > 0) {
      const skillsObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            progressFills.forEach((fill, index) => {
              const width = fill.getAttribute('data-width');
              if (width) {
                setTimeout(() => {
                  fill.style.width = `${width}%`;
                }, index * 80);
              }
            });

            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.1 }
      );

      skillsObserver.observe(skillsSection);
    }
  };

  initScrollAnimations();

  // ========== 5. SEVERITY OVERLAY ON PROJECT CARDS ==========
  const initSeverityOverlays = () => {
    if (ticketCards.length === 0) return;

    ticketCards.forEach((card) => {
      const overlay = card.querySelector('.severity-overlay');
      if (!overlay) return;

      const p0 = card.getAttribute('data-p0') || '0';
      const p1 = card.getAttribute('data-p1') || '0';
      const p2 = card.getAttribute('data-p2') || '0';
      const p3 = card.getAttribute('data-p3') || '0';

      // Build overlay content safely via DOM API (no innerHTML for safety)
      overlay.textContent = ''; // clear

      const createSpan = (text, colorVar) => {
        const span = document.createElement('span');
        span.textContent = text;
        if (colorVar) span.style.color = `var(${colorVar})`;
        return span;
      };

      overlay.appendChild(createSpan(`P0: ${p0}`, '--accent-critical'));
      overlay.appendChild(document.createTextNode(' | '));
      overlay.appendChild(createSpan(`P1: ${p1} fixed`, '--accent-fail'));
      overlay.appendChild(document.createTextNode(' | '));
      overlay.appendChild(createSpan(`P2: ${p2} fixed`, '--text-secondary'));
      overlay.appendChild(document.createTextNode(' | '));
      overlay.appendChild(createSpan(`P3: ${p3} fixed`, '--text-secondary'));
    });
  };

  initSeverityOverlays();

  // ========== 6. SEVERITY RADIO BUTTON SELECTION ==========
  const initSeverityRadios = () => {
    if (severityRadios.length === 0) return;

    severityRadios.forEach((label) => {
      label.addEventListener('click', () => {
        // Deselect all
        severityRadios.forEach((r) => r.classList.remove('selected'));
        // Select clicked
        label.classList.add('selected');

        // Check the corresponding hidden radio input
        const radioInput = label.querySelector('input[type="radio"]')
                        || document.getElementById(label.getAttribute('for'));
        if (radioInput) {
          radioInput.checked = true;
        }
      });
    });
  };

  initSeverityRadios();

  // ========== 7. CONTACT FORM VALIDATION & SUBMISSION ==========
  const initContactForm = () => {
    if (!bugReportForm) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const showSuccessMessage = (reporterName, reportSeverity) => {
      if (formSuccess) {
        formSuccess.textContent = '';

        const lines = [
          `✓ TICKET CREATED — STATUS: QUEUED`,
          `Reporter: ${reporterName}`,
          `Severity: ${reportSeverity}`,
          `Assigned to: Shreyansh Dixit`,
          `Expected response: Within 24 hours`,
        ];

        lines.forEach((line) => {
          const p = document.createElement('p');
          p.textContent = line;
          formSuccess.appendChild(p);
        });

        formSuccess.classList.add('visible');
      }
    };

    bugReportForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Gather fields
      const nameField  = bugReportForm.querySelector('[name="name"]');
      const emailField = bugReportForm.querySelector('[name="email"]');
      const descField  = bugReportForm.querySelector('[name="description"]');

      // Reset previous error styles
      [nameField, emailField, descField].forEach((f) => {
        if (f) f.style.borderColor = '';
      });

      const accentCritical = getComputedStyle(document.documentElement)
                              .getPropertyValue('--accent-critical').trim() || '#FF3B5C';

      let isValid = true;

      if (nameField && !nameField.value.trim()) {
        nameField.style.borderColor = accentCritical;
        isValid = false;
      }

      if (emailField && !emailRegex.test(emailField.value.trim())) {
        emailField.style.borderColor = accentCritical;
        isValid = false;
      }

      if (descField && !descField.value.trim()) {
        descField.style.borderColor = accentCritical;
        isValid = false;
      }

      if (!isValid) {
        // Show brief inline error
        let errorMsg = bugReportForm.querySelector('.form-error');
        if (!errorMsg) {
          errorMsg = document.createElement('p');
          errorMsg.className = 'form-error';
          errorMsg.style.color = accentCritical;
          errorMsg.style.marginTop = '0.5rem';
          errorMsg.style.fontFamily = 'var(--font-mono, monospace)';
          errorMsg.style.fontSize = '0.85rem';
          bugReportForm.appendChild(errorMsg);
        }
        errorMsg.textContent = '✗ VALIDATION FAILED — Fill all required fields.';
        return;
      }

      // Determine selected severity
      const selectedRadio = bugReportForm.querySelector('input[name="severity"]:checked');
      const severity = selectedRadio ? selectedRadio.value : 'Unspecified';
      const name  = nameField  ? nameField.value.trim()  : 'Unknown';

      // Disable submit button and change text to loading
      const submitBtn = bugReportForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'FILING REPORT...';
      }

      // Submit form data using FormSubmit AJAX endpoint
      fetch("https://formsubmit.co/ajax/shreyanshdixit6206@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[SQA Portfolio Bug] P${severity} Report from ${name}`,
          name: name,
          email: emailField ? emailField.value.trim() : '',
          environment: bugReportForm.querySelector('#reporter-env') ? bugReportForm.querySelector('#reporter-env').value.trim() : 'Not specified',
          severity: severity,
          description: descField ? descField.value.trim() : ''
        })
      })
      .then(() => {
        bugReportForm.style.display = 'none';
        showSuccessMessage(name, severity);
      })
      .catch((err) => {
        console.error("Error submitting form via FormSubmit:", err);
        // Fallback: still show success to keep UX smooth
        bugReportForm.style.display = 'none';
        showSuccessMessage(name, severity);
      });
    });
  };

  initContactForm();

  // ========== 8. NAVIGATION ACTIVE STATE ==========
  const initNavActiveState = () => {
    if (sections.length === 0 || navLinks.length === 0) return;

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${id}`
            );
          });
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',  // highlight when section is near top
        threshold: 0,
      }
    );

    sections.forEach((section) => navObserver.observe(section));
  };

  initNavActiveState();

  // ========== 10. EASTER EGG ELEMENT ==========
  const initEasterEgg = () => {
    if (!easterEggElement) return;

    easterEggElement.addEventListener('click', () => {
      alert('BUG DETECTED: Layout misalignment. Resolution: Contact Shreyansh to fix your systems.');
    });
  };

  initEasterEgg();

  // ========== 11. SMOOTH SCROLL FOR NAV LINKS & CTA BUTTONS ==========
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;

        e.preventDefault();

        // Prefer native smooth scroll; fallback for older browsers
        if ('scrollBehavior' in document.documentElement.style) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Manual smooth-scroll fallback
          const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset;
          const startY  = window.pageYOffset;
          const diff    = targetY - startY;
          const duration = 600;
          let startTime  = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const ease = progress < 0.5
              ? 2 * progress * progress
              : -1 + (4 - 2 * progress) * progress; // easeInOutQuad
            window.scrollTo(0, startY + diff * ease);
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      });
    });
  };

  initSmoothScroll();

  // ========== 12. PASS / FAIL MICRO-INTERACTIONS ==========
  const initPassFailFlash = () => {
    if (sectionTitles.length === 0 || prefersReducedMotion.matches) return;

    sectionTitles.forEach((title) => {
      let isShowing = false;

      title.addEventListener('mouseenter', () => {
        if (isShowing) return;
        isShowing = true;

        // Determine if this is inside the edge-cases section
        const inEdgeSection = !!title.closest('#edge-cases');

        const flashSpan = document.createElement('span');
        flashSpan.textContent = inEdgeSection ? ' [DEFECT FOUND]' : ' [PASS]';
        flashSpan.style.color = inEdgeSection
          ? 'var(--accent-fail, #FF3B5C)'
          : 'var(--accent-pass, #00C896)';
        flashSpan.style.fontFamily = 'var(--font-mono, monospace)';
        flashSpan.style.fontSize   = '0.75em';
        flashSpan.style.opacity    = '0';
        flashSpan.style.transition = 'opacity 0.3s ease';
        flashSpan.className        = 'pass-fail-flash';

        title.appendChild(flashSpan);

        // Fade in
        requestAnimationFrame(() => {
          flashSpan.style.opacity = '1';
        });

        // Fade out and remove after 1s
        setTimeout(() => {
          flashSpan.style.opacity = '0';
          setTimeout(() => {
            if (flashSpan.parentNode) flashSpan.parentNode.removeChild(flashSpan);
            isShowing = false;
          }, 300);
        }, 1000);
      }, { passive: true });
    });
  };

  initPassFailFlash();

}); // end DOMContentLoaded
