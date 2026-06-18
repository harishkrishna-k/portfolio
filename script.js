/* ============================================
   SKILLS DATA
   ============================================ */
const SKILLS_DATA = [
    {
        title: "Mechanical Design",
        tools: ["CAD Drafting", "Technical Drawing", "Rapid Prototyping", "Reverse Engineering", "DFM"],
        description: "Development of robust physical components and assemblies. Translating conceptual designs into functional hardware with high manufacturability.",
        tags: ["SolidWorks", "AutoCAD", "Prototyping", "DFM"]
    },
    {
        title: "Systems Validation",
        tools: ["System ID", "Instrumentation", "Exp Validation", "DOE", "Thermal Analysis"],
        description: "Applying first-principles thinking to validate system performance through rigorous experimentation and root cause analysis.",
        tags: ["First-Principles", "Data Acquisition", "Signal Processing", "DOE"]
    },
    {
        title: "Automation",
        tools: ["Sensor Data Acquisition", "MCU (Arduino/ESP)", "Python", "GenAI APIs", "n8n", "Streamlit"],
        description: "Bridging physical hardware and digital intelligence via automated diagnostic pipelines and LLM-ready document processors.",
        tags: ["Embedded", "IoT", "Scripting", "Real-time Monitoring"]
    },
    {
        title: "Operations",
        tools: ["Bottleneck Resolution", "Lean / Six Sigma", "Cross-Functional Coordination"],
        description: "Optimizing the engineering lifecycle from design to deployment using lean principles and strategic operational workflows.",
        tags: ["Lean Engineering", "Process Improvement", "Strategic Planning"]
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
});

/* ============================================
   CUSTOM CURSOR
   ============================================ */
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('a, button')) {
            cursor.style.transform += ' scale(2.5)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('a, button')) {
            cursor.style.transform += ' scale(1)';
        }
    });
}

/* ============================================
   NAVBAR SCROLL
   ============================================ */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

/* ============================================
   SCROLL REVEAL
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
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
}

/* ============================================
   SMOOTH SCROLL
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
   SKILLS INTERACTION
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
                currentIndex = null;
                defaultPanel.style.display = '';
                activePanel.style.display = 'none';
                buttons.forEach(b => { b.classList.remove('active'); });
                return;
            }

            currentIndex = idx;
            const skill = SKILLS_DATA[idx];

            activePanel.innerHTML = `
                <div class="skills-active-inner" style="background: #000; color: #fff; padding: 3rem; margin-top: 2rem; border: 2px solid #000;">
                    <p class="focus-text" style="color: #fff; font-size: 1.5rem; line-height: 1.2; margin-bottom: 2rem;">${skill.description}</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
                        ${skill.tools.map(t => `<span class="toolkit-pill" style="border: 1px solid rgba(255,255,255,0.3); color: #fff; padding: 0.5rem 1rem; font-family: var(--font-mono); font-size: 0.75rem;">${t}</span>`).join('')}
                    </div>
                    <div style="opacity: 0.5; font-family: var(--font-mono); font-size: 0.75rem;">
                        ${skill.tags.map(t => `<span style="margin-right: 1rem;">#${t}</span>`).join('')}
                    </div>
                </div>
            `;

            defaultPanel.style.display = 'none';
            activePanel.style.display = '';
            buttons.forEach(b => {
                b.classList.toggle('active', parseInt(b.dataset.skill) === idx);
            });
        });
    });
}
