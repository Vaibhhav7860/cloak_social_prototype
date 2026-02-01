'use client';

import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
    return (
        <section className={styles.cta}>
            <div className={styles.bgGlow}></div>
            <div className={`${styles.ctaContent} container`}>
                <div className={styles.shield}>
                    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="ctaShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00d9ff" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M50 5L10 25V55C10 85 30 105 50 115C70 105 90 85 90 55V25L50 5Z"
                            stroke="url(#ctaShieldGrad)"
                            strokeWidth="3"
                            fill="rgba(0, 217, 255, 0.1)"
                        />
                        <path
                            d="M35 55L45 65L65 45"
                            stroke="url(#ctaShieldGrad)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <h2 className={styles.title}>
                    Ready to Protect Your Photos?
                </h2>
                <p className={styles.description}>
                    Join thousands of privacy-conscious users who trust CloakSocial to keep their
                    family photos safe from AI surveillance.
                </p>

                <div className={styles.buttons}>
                    <Link href="/protect" className={styles.primaryBtn}>
                        🛡️ Start Protecting Free
                    </Link>
                    <Link href="/pricing" className={styles.secondaryBtn}>
                        View Pricing Plans
                    </Link>
                </div>

                <p className={styles.disclaimer}>
                    No credit card required • 3 free photos per month • Cancel anytime
                </p>
            </div>
        </section>
    );
}
