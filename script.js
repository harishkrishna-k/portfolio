import { prepareWithSegments, walkLineRanges } from 'https://esm.sh/@chenglou/pretext@0.0.5';

/* ============================================
   SKILLS DATA
   ============================================ */
const SKILLS_DATA = [
    {
        title: "Mechanical Design & CAD",
        tools: ["CAD Drafting", "Technical Drawing", "Rapid Prototyping (3D Printing)", "Reverse Engineering", "Design for Manufacturing (DFM)"],
        description: "Specializing in the development of robust physical components and assemblies. I use CAD and rapid prototyping to translate conceptual designs into functional hardware, ensuring manufacturability and performance.",
        tags: ["SolidWorks", "AutoCAD", "Prototyping", "DFM", "Technical Documentation"]
    },
    {
        title: "Systems Engineering & Validation",
        tools: ["System Identification", "Instrumentation", "Experimental Validation", "Design of Experiments (DOE)", "Thermal Analysis", "Root Cause Analysis"],
        description: "Applying first-principles thinking to validate system performance. I design and execute experiments to identify system behavior, analyze thermal characteristics, and resolve root causes of failure.",
        tags: ["First-Principles", "Data Acquisition", "Signal Processing", "Thermal Management", "DOE"]
    },
    {
        title: "Automation & Integration",
        tools: ["Sensor Data Acquisition", "Microcontroller Integration (Arduino/ESP)", "Python", "GenAI APIs", "Workflow Automation (n8n)"],
        description: "Bridging the gap between physical hardware and digital intelligence. I build automated diagnostic pipelines and sensor integration platforms that enhance system observability and control.",
        tags: ["Embedded Systems", "IoT", "Scripting", "API Integration", "Real-time Monitoring"]
    },
    {
        title: "Operations & Deployment",
        tools: ["Process Bottleneck Resolution", "Lean / Six Sigma", "Cross-Functional Coordination"],
        description: "Optimizing the lifecycle of engineering projects from design to deployment. I apply lean principles to identify bottlenecks and streamline operational workflows for complex systems.",
        tags: ["Lean Engineering", "Process Improvement", "Strategic Planning", "Resource Allocation"]
    }
];

/* ============================================
   INITIALIZATION
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initNavbarScroll();
    initScrollReveal();
    initSmoothScroll();
    initSkillsInteraction();
    initCopyEmail();

    // Pretext: shrink-wrap hero text after fonts load
    document.fonts.ready.then(() => {
        applyHeroShrinkWrap();
    });
});

/* ============================================
   CUSTOM CURSOR (LERP-based, invert effect)
   ============================================ */
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

    const mousePos = { x: -100, y: -100 };
    const currentPos = { x: -100, y: -100 };
    let targetScale = 0.4;
    let currentScale = 0.4;
    let hasMoved = false;
    const posEasing = 0.6;
    const scaleEasing = 0.2;

    document.addEventListener('mousemove', (e) => {
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;
        if (!hasMoved) {
            hasMoved = true;
            currentPos.x = e.clientX;
            currentPos.y = e.clientY;
            cursor.style.opacity = '1';
        }
    });

    document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { if (hasMoved) cursor.style.opacity = '1'; });

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('[data-cursor="nav"]')) {
            targetScale = 0.2;
        } else if (e.target.closest('a, button')) {
            targetScale = 1;
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('a, button, [data-cursor]')) {
            targetScale = 0.4;
        }
    });

    window.addEventListener('mousedown', () => { targetScale = Math.min(targetScale, 0.2); });
    window.addEventListener('mouseup', () => { targetScale = 0.4; });

    function animate() {
        currentPos.x += (mousePos.x - currentPos.x) * posEasing;
        currentPos.y += (mousePos.y - currentPos.y) * posEasing;
        currentScale += (targetScale - currentScale) * scaleEasing;
        cursor.style.transform = `translate3d(${currentPos.x - 24}px, ${currentPos.y - 24}px, 0) scale(${currentScale})`;
        requestAnimationFrame(animate);
    }

    animate();
}

/* ============================================
   NAVBAR SCROLL (frosted glass on scroll)
   ============================================ */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

/* ============================================
   SCROLL REVEAL (Intersection Observer)
   ============================================ */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
}

/* ============================================
   SMOOTH SCROLL (anchor links)
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/* ============================================
   SKILLS INTERACTION (click to reveal details)
   ============================================ */
function initSkillsInteraction() {
    const buttons = document.querySelectorAll('.skill-title');
    const defaultPanel = document.getElementById('skillsDefault');
    const activePanel = document.getElementById('skillsActive');
    let currentIndex = null;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.skill);

            if (currentIndex === idx) {
                // Deselect
                currentIndex = null;
                defaultPanel.style.display = '';
                activePanel.style.display = 'none';
                buttons.forEach(b => { b.classList.remove('active', 'dimmed'); });
                return;
            }

            currentIndex = idx;
            const skill = SKILLS_DATA[idx];

            // Update panel
            activePanel.innerHTML = `
                <div class="skills-active-inner">
                    <div>
                        <div class="toolkit-label">Toolkit</div>
                        <div class="toolkit-pills">
                            ${skill.tools.map(t => `<span class="toolkit-pill">${t}</span>`).join('')}
                        </div>
                    </div>
                    <div>
                        <div class="toolkit-label">Focus</div>
                        <p class="focus-text">${skill.description}</p>
                    </div>
                    <div>
                        <div class="toolkit-label">Keywords</div>
                        <div class="tag-list">
                            ${skill.tags.map(t => `<span class="tag-item">${t}</span>`).join('')}
                        </div>
                    </div>
                    <button class="close-detail" id="closeSkillDetail">&larr; Close Details</button>
                </div>
            `;

            defaultPanel.style.display = 'none';
            activePanel.style.display = '';

            // Update button states
            buttons.forEach(b => {
                const bIdx = parseInt(b.dataset.skill);
                b.classList.toggle('active', bIdx === idx);
                b.classList.toggle('dimmed', bIdx !== idx);
            });

            // Close button
            document.getElementById('closeSkillDetail')?.addEventListener('click', () => {
                currentIndex = null;
                defaultPanel.style.display = '';
                activePanel.style.display = 'none';
                buttons.forEach(b => { b.classList.remove('active', 'dimmed'); });
            });
        });
    });
}

/* ============================================
   COPY EMAIL
   ============================================ */
function initCopyEmail() {
    const btn = document.getElementById('copyEmailBtn');
    const toast = document.getElementById('copyToast');
    if (!btn || !toast) return;

    btn.addEventListener('click', () => {
        navigator.clipboard.writeText('harishkrishna.k@outlook.com');
        toast.classList.add('visible');
        setTimeout(() => toast.classList.remove('visible'), 2500);
    });
}

/* ============================================
   PRETEXT: Hero Text Shrink-Wrap
   ============================================ */
function applyHeroShrinkWrap() {
    const heading = document.querySelector('.hero-heading');
    if (!heading) return;

    // Measure each hero-line and balance widths
    const lines = heading.querySelectorAll('.hero-line');
    lines.forEach(line => {
        const text = line.textContent.trim();
        const style = window.getComputedStyle(line);
        const font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
        const maxWidth = line.parentElement.getBoundingClientRect().width;

        try {
            const prepared = prepareWithSegments(text, font);
            let bestWidth = 0;
            walkLineRanges(prepared, maxWidth, (l) => {
                if (l.width > bestWidth) bestWidth = l.width;
            });
            // No shrink-wrap needed for centered hero, but data attribute for debugging
            line.dataset.pretextWidth = Math.round(bestWidth);
        } catch (e) {
            // Pretext may fail on certain fonts; gracefully degrade
        }
    });
}

/* ── Resize handler ── */
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.fonts.ready.then(applyHeroShrinkWrap);
    }, 250);
}, { passive: true });
