import { prepare, layout, prepareWithSegments, walkLineRanges } from 'https://esm.sh/@chenglou/pretext@0.0.5';

document.addEventListener('DOMContentLoaded', () => {

    // ── Mobile Menu ──
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('#navLinks a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // ── Navbar scroll effect ──
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        navbar.classList.toggle('scrolled', currentScroll > 50);
        lastScroll = currentScroll;
    }, { passive: true });

    // ── Cursor glow ──
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        }, { passive: true });
    }

    // ── Scroll reveal (Intersection Observer) ──
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ── Pretext: Smart hero text layout ──
    document.fonts.ready.then(() => {
        applyHeroShrinkWrap();
        measureProjectDescriptions();
    });
});

/**
 * Uses Pretext to calculate the optimal shrink-wrap width for the hero description,
 * ensuring perfectly balanced multiline text without any DOM reflows.
 */
function applyHeroShrinkWrap() {
    const heroDesc = document.getElementById('heroDescription');
    if (!heroDesc) return;

    const text = heroDesc.textContent.trim();
    const computedStyle = window.getComputedStyle(heroDesc);
    const font = `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;
    const maxWidth = heroDesc.parentElement.getBoundingClientRect().width;

    const prepared = prepareWithSegments(text, font);
    let bestWidth = 0;

    walkLineRanges(prepared, maxWidth, line => {
        if (line.width > bestWidth) bestWidth = line.width;
    });

    // Apply tightest width for balanced text
    if (bestWidth > 0 && bestWidth < maxWidth) {
        heroDesc.style.maxWidth = `${bestWidth + 2}px`;
    }
}

/**
 * Uses Pretext to measure project description heights without DOM reflows.
 * Adds data attributes for potential "read more" interactions.
 */
function measureProjectDescriptions() {
    const descriptions = document.querySelectorAll('.project-desc');

    descriptions.forEach(desc => {
        const text = desc.textContent.trim();
        const computedStyle = window.getComputedStyle(desc);
        const font = `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;
        const lineHeight = parseFloat(computedStyle.lineHeight) || (parseFloat(computedStyle.fontSize) * 1.6);
        const containerWidth = desc.getBoundingClientRect().width;

        if (containerWidth <= 0) return;

        const prepared = prepare(text, font);
        const stats = layout(prepared, containerWidth, lineHeight);

        desc.dataset.lines = stats.lineCount;
        desc.dataset.measuredHeight = Math.round(stats.height);
    });
}

// Re-measure on resize (debounced)
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.fonts.ready.then(() => {
            applyHeroShrinkWrap();
            measureProjectDescriptions();
        });
    }, 250);
}, { passive: true });
