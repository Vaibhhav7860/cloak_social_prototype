'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Features.module.css';

export default function Features() {
    const [visibleCards, setVisibleCards] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('[data-feature-index]');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                setVisibleCards((prev) => [...prev, index]);
                            }, index * 100);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8v4M12 16h.01" />
                </svg>
            ),
            title: 'Adversarial Protection',
            description: 'Military-grade perturbation technology that confuses AI facial recognition models at the pixel level.',
            highlight: '95%+ Confusion Rate',
            color: 'cyan',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                </svg>
            ),
            title: 'Zero Visual Impact',
            description: 'Protection is completely invisible to the human eye—your photos look exactly the same.',
            highlight: '<0.1% Visual Change',
            color: 'purple',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            title: 'Deepfake Defense',
            description: 'Prevents your likeness from being used to train AI models or create synthetic media.',
            highlight: 'Future-Proof Protection',
            color: 'pink',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
            ),
            title: 'Metadata Scrubbing',
            description: 'Automatically removes GPS coordinates, device info, and hidden tracking data from images.',
            highlight: '100% Data Removed',
            color: 'cyan',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            title: 'Instant Processing',
            description: 'Lightning-fast cloud processing delivers your protected photo in seconds.',
            highlight: '<15 Second Processing',
            color: 'purple',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
            ),
            title: 'Privacy-First Design',
            description: 'Your photos are never stored—processed locally and deleted immediately after.',
            highlight: 'Zero Data Retention',
            color: 'pink',
        },
    ];

    return (
        <section className={styles.features} id="features" ref={sectionRef}>
            <div className="container">
                {/* Section Header */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Protection Features</span>
                    <h2 className={styles.title}>
                        Advanced <span className="text-gradient">Cloaking Technology</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Combining cutting-edge adversarial AI with user-friendly design to deliver
                        uncompromising photo protection.
                    </p>
                </div>

                {/* Features Grid */}
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${styles.featureCard} ${styles[feature.color]} ${visibleCards.includes(index) ? styles.visible : ''}`}
                            data-feature-index={index}
                        >
                            <div className={styles.iconWrapper}>
                                <div className={styles.iconGlow}></div>
                                {feature.icon}
                            </div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDescription}>{feature.description}</p>
                            <div className={styles.highlight}>
                                <span className={styles.highlightDot}></span>
                                {feature.highlight}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
