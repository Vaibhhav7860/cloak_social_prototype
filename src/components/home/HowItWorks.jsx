'use client';

import styles from './HowItWorks.module.css';

const steps = [
    {
        number: '01',
        title: 'Upload Your Photo',
        description: 'Simply drag and drop or select any photo you want to protect. We support JPEG, PNG, and HEIC formats up to 20MB.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'AI Immunization',
        description: 'Our engine applies invisible adversarial perturbations that confuse AI facial recognition while keeping the image perfect for humans.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Verify & Download',
        description: 'See proof that AI cannot recognize your photo with our Shield Score and AI-Buster demo. Then download and share with confidence.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
    },
];

export default function HowItWorks() {
    return (
        <section className={styles.howItWorks} id="how-it-works">
            <div className="container">
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <span className={styles.eyebrow}>Simple Process</span>
                    <h2 className={styles.title}>
                        Protect Your Photos in <span className="text-gradient">3 Easy Steps</span>
                    </h2>
                    <p className={styles.subtitle}>
                        No technical knowledge required. Just upload, protect, and download.
                    </p>
                </div>

                {/* Steps */}
                <div className={styles.stepsContainer}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.stepIcon}>
                                <div className={styles.iconCircle}>
                                    {step.icon}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={styles.connector}>
                                        <div className={styles.connectorLine}></div>
                                        <div className={styles.connectorArrow}>→</div>
                                    </div>
                                )}
                            </div>
                            <div className={styles.stepContent}>
                                <span className={styles.stepNumber}>{step.number}</span>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Visual Demo */}
                <div className={styles.demoWrapper}>
                    <div className={styles.demoCard}>
                        <div className={styles.demoHeader}>
                            <span className={styles.demoLabel}>Before</span>
                            <span className={styles.demoStatus}>🔴 Vulnerable to AI</span>
                        </div>
                        <div className={styles.demoImage}>
                            <div className={styles.placeholderImage}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <path d="M21 15l-5-5L5 21" />
                                </svg>
                                <span>Original Photo</span>
                            </div>
                            <div className={styles.scanLine}></div>
                        </div>
                    </div>

                    <div className={styles.arrowIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>

                    <div className={styles.demoCard}>
                        <div className={styles.demoHeader}>
                            <span className={styles.demoLabel}>After</span>
                            <span className={`${styles.demoStatus} ${styles.protected}`}>🟢 Protected</span>
                        </div>
                        <div className={`${styles.demoImage} ${styles.protected}`}>
                            <div className={styles.placeholderImage}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <path d="M21 15l-5-5L5 21" />
                                </svg>
                                <span>Immunized Photo</span>
                            </div>
                            <div className={styles.shieldOverlay}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="M9 12l2 2 4-4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
