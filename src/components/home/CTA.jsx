'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.cta} ref={sectionRef}>
            <div className="container">
                <div className={`${styles.ctaCard} ${isVisible ? styles.visible : ''}`}>
                    {/* Glow Effects */}
                    <div className={styles.glowOrb1}></div>
                    <div className={styles.glowOrb2}></div>

                    {/* Content */}
                    <div className={styles.content}>
                        {/* Shield Animation */}
                        <div className={styles.shieldContainer}>
                            <div className={styles.shieldGlow}></div>
                            <div className={styles.shieldIcon}>
                                <svg viewBox="0 0 48 56" fill="none">
                                    <defs>
                                        <linearGradient id="ctaShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#7dd3fc" />
                                            <stop offset="50%" stopColor="#a78bfa" />
                                            <stop offset="100%" stopColor="#f0abfc" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M24 4L4 12V26C4 40 14 50 24 54C34 50 44 40 44 26V12L24 4Z"
                                        stroke="url(#ctaShieldGrad)"
                                        strokeWidth="3"
                                        fill="rgba(125, 211, 252, 0.1)"
                                    />
                                    <path
                                        d="M16 28L22 34L34 22"
                                        stroke="url(#ctaShieldGrad)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            {/* Orbiting Particles */}
                            <div className={styles.orbitRing}>
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className={styles.orbitParticle} style={{ '--i': i }}></div>
                                ))}
                            </div>
                        </div>

                        <h2 className={styles.title}>
                            Ready to <span className="text-gradient">Cloak</span> Your Photos?
                        </h2>
                        <p className={styles.subtitle}>
                            Your first 5 photos are free. No account required—just upload and protect.
                        </p>

                        <div className={styles.actions}>
                            <Link href="/protect" className={styles.primaryBtn}>
                                <span className={styles.btnGlow}></span>
                                <span className={styles.btnIcon}>🛡️</span>
                                <span>Start Protecting Now</span>
                            </Link>
                            <Link href="/pricing" className={styles.secondaryBtn}>
                                View Pricing Plans
                            </Link>
                        </div>

                        <div className={styles.trustBadges}>
                            <div className={styles.badge}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                <span>256-bit Encryption</span>
                            </div>
                            <div className={styles.badge}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                                </svg>
                                <span>No Data Stored</span>
                            </div>
                            <div className={styles.badge}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>Free Tier Available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
