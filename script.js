import { prepare, layout, prepareWithSegments, walkLineRanges } from 'https://esm.sh/@chenglou/pretext@0.0.5';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Logic (Existing)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Wait for fonts to load before doing canvas measurements!
    document.fonts.ready.then(() => {
        applyHeroShrinkWrap();
        analyzeProjectCardHeights();
    });
});

/**
 * Feature 1: Perfect Multiline Shrink-Wrap for the Hero Description
 */
function applyHeroShrinkWrap() {
    const heroDesc = document.querySelector('.hero-description');
    if (!heroDesc) return;

    const text = heroDesc.textContent.trim();
    const computedStyle = window.getComputedStyle(heroDesc);
    const font = `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;
    
    // Measure available width
    const maxWidth = heroDesc.parentElement.getBoundingClientRect().width;

    // Use pretext's richer segment API to find the widest line
    const prepared = prepareWithSegments(text, font);
    let bestWidth = 0;
    
    walkLineRanges(prepared, maxWidth, line => {
        if (line.width > bestWidth) bestWidth = line.width;
    });

    // Apply the tightest possible width to balance the text perfectly
    heroDesc.style.maxWidth = `${bestWidth + 2}px`; // +2px safe buffer
}

/**
 * Feature 2: Smart Line Counting for Project Cards
 * Avoids DOM reflows by calculating text height purely in JavaScript
 */
function analyzeProjectCardHeights() {
    const projectDescriptions = document.querySelectorAll('.project-card p:not(.project-date)');
    
    projectDescriptions.forEach(desc => {
        const text = desc.textContent.trim();
        const computedStyle = window.getComputedStyle(desc);
        const font = `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;
        const lineHeight = parseFloat(computedStyle.lineHeight) || (parseFloat(computedStyle.fontSize) * 1.6);
        const containerWidth = desc.getBoundingClientRect().width;

        // Measure text without touching DOM layout
        const prepared = prepare(text, font);
        const stats = layout(prepared, containerWidth, lineHeight);

        // If the text naturally takes more than 2 lines, we can flag it for a "Read More" UI
        if (stats.lineCount > 2) {
            // Add a visual indicator or toggle logic
            desc.style.borderLeft = "2px solid var(--accent-color)";
            desc.style.paddingLeft = "10px";
            desc.setAttribute('title', `Measured by Pretext: ${stats.lineCount} lines, ${stats.height}px tall`);
        }
    });
}
