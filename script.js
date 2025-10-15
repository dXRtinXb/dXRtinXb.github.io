// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Download function
function downloadResume() {
    const resumeContent = `
BRUH
Creative Developer & Digital Strategist

CONTACT:
Email: alex@alexmorgan.co
Phone: +1 (555) 234-5678
Portfolio: alexmorgan.co
Location: San Francisco, CA

ABOUT:
Passionate full-stack developer with over 5 years of experience creating elegant, user-centered digital solutions. I believe in the power of clean code, thoughtful design, and meaningful user experiences.

EXPERIENCE:

Senior Full-Stack Developer | Innovate Digital Solutions | 2022 - Present
• Leading development of scalable web applications serving over 100,000 users
• Spearheaded migration to modern architecture, resulting in 40% improved performance
• Mentoring junior developers and establishing coding standards

Frontend Developer | Creative Tech Studio | 2020 - 2022
• Developed responsive, accessible web applications using React and modern CSS
• Collaborated closely with designers to implement pixel-perfect interfaces
• Reduced page load times by 35% through performance optimization

Web Developer | Digital Ventures | 2019 - 2020
• Built and maintained client websites using modern JavaScript frameworks
• Participated in agile development processes and contributed to code reviews
• Gained expertise in full-stack development and database management

SKILLS:

Programming & Data: Python (Django, pandas, matplotlib, seaborn), JavaScript, Java, Kotlin
Systems & Networking: Linux (Kali, Ubuntu), Network+ basics, VMware
Design & Media: Photoshop, Illustrator, After Effects, Premiere, InDesign, Figma

EDUCATION:

Bachelor of Computer Science | University of California, San Francisco | 2015 - 2019
Graduated Magna Cum Laude with a focus on software engineering and web technologies. Active member of the Computer Science Society and winner of multiple hackathons.
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Bruh_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Custom cursor functionality
let cursor = document.querySelector('.custom-cursor');
let trails = [];

document.addEventListener('mousemove', (e) => {
    // Use transform for better performance and instant response
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Create trail effect with reduced frequency for better performance
    if (trails.length > 6) {
        let oldTrail = trails.shift();
        if (oldTrail.parentNode) {
            document.body.removeChild(oldTrail);
        }
    }

    let trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.clientX - 3 + 'px';
    trail.style.top = e.clientY - 3 + 'px';
    document.body.appendChild(trail);
    trails.push(trail);

    setTimeout(() => {
        if (trail.parentNode) {
            trail.style.opacity = '0';
            setTimeout(() => {
                if (trail.parentNode) {
                    document.body.removeChild(trail);
                }
            }, 150);
        }
    }, 50);
});

// Parallax effect for floating elements
document.addEventListener('mousemove', (e) => {
    const circles = document.querySelectorAll('.floating-circle');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.5;
        const xPos = (x - 0.5) * speed * 20;
        const yPos = (y - 0.5) * speed * 20;
        circle.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// Enhanced scroll animations
let ticking = false;

function updateScrollAnimations() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    document.querySelector('.floating-elements').style.transform = `translateY(${rate}px)`;
    ticking = false;
}

document.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollAnimations);
        ticking = true;
    }
});

// Magnetic effect for interactive elements
document.querySelectorAll('.contact-item, .timeline-item, .skill-category').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        item.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = '';
    });
});

// Smooth scrolling + typing effect
document.addEventListener('DOMContentLoaded', function () {
    // Add smooth reveal for hero elements
    setTimeout(() => {
        document.querySelectorAll('.contact-item').forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        });
    }, 500);

    // Add typing effect to title
    const title = document.querySelector('.title');
    const text = title.textContent;
    title.textContent = '';

    setTimeout(() => {
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        typeWriter();
    }, 1000);
});

// THEME TOGGLE (non-destructive)
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const themeIcon = document.getElementById('themeIcon');

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeLabel.textContent = 'Light';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeLabel.textContent = 'Dark';
    }
}

// Load stored theme preference
(function initTheme() {
    const stored = localStorage.getItem('preferred-theme');
    if (stored === 'dark') {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
})();

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark') {
        applyTheme('light');
        localStorage.setItem('preferred-theme', 'light');
    } else {
        applyTheme('dark');
        localStorage.setItem('preferred-theme', 'dark');
    }
});

