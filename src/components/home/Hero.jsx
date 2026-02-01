'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.hero}>
            {/* Background Effects */}
            <div className={styles.bgEffects}>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
                <div className={styles.gridOverlay}></div>
            </div>

            <div className={`${styles.heroContent} container`}>
                {/* Badge */}
                <div className={styles.badge}>
                    <span className={styles.badgeIcon}>🛡️</span>
                    <span>Military-Grade Photo Protection</span>
                </div>

                {/* Headline */}
                <h1 className={styles.headline}>
                    Protect Your Family Photos from{' '}
                    <span className={styles.gradientText}>AI Surveillance</span>
                </h1>

                {/* Subheadline */}
                <p className={styles.subheadline}>
                    Immunize your photos with invisible adversarial technology that confuses
                    facial recognition AI—while looking completely normal to human eyes.
                </p>

                {/* CTA Buttons */}
                <div className={styles.ctaGroup}>
                    <Link href="/protect" className={styles.primaryCta}>
                        <span className={styles.ctaIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L3 7V12C3 17.5 6.8 22.7 12 24C17.2 22.7 21 17.5 21 12V7L12 2Z" />
                                <path d="M9 12L11 14L15 10" />
                            </svg>
                        </span>
                        Protect a Photo Free
                    </Link>
                    <a href="#how-it-works" className={styles.secondaryCta}>
                        <span className={styles.playIcon}>▶</span>
                        See How It Works
                    </a>
                </div>

                {/* Trust Signals */}
                <div className={styles.trustSignals}>
                    <div className={styles.trustItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                        <span>No Account Required</span>
                    </div>
                    <div className={styles.trustItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        <span>Photos Never Stored</span>
                    </div>
                    <div className={styles.trustItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                        <span>&lt; 15 Seconds</span>
                    </div>
                </div>

                {/* Stats */}
                <div className={styles.stats} ref={statsRef}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>95%+</span>
                        <span className={styles.statLabel}>AI Confusion Rate</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>0.1%</span>
                        <span className={styles.statLabel}>Visual Change</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>100%</span>
                        <span className={styles.statLabel}>Metadata Removed</span>
                    </div>
                </div>
            </div>

            {/* Floating Shield Animation */}
            <div className={styles.floatingShield}>
                <div className={styles.shieldInner}>
                    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="heroShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00d9ff" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M50 5L10 25V55C10 85 30 105 50 115C70 105 90 85 90 55V25L50 5Z"
                            stroke="url(#heroShieldGrad)"
                            strokeWidth="3"
                            fill="rgba(0, 217, 255, 0.1)"
                        />
                        <path
                            d="M35 55L45 65L65 45"
                            stroke="url(#heroShieldGrad)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className={styles.shieldGlow}></div>
                </div>
            </div>
        </section>
    );
}
