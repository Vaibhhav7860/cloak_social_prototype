'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);
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
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 3);
        }, 3000);

        return () => clearInterval(interval);
    }, [isVisible]);

    const steps = [
        {
            number: '01',
            title: 'Upload Your Photo',
            description: 'Simply drag and drop or select any JPEG, PNG, or HEIC photo. Your file stays on your device until processing.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
            ),
            visual: 'upload',
        },
        {
            number: '02',
            title: 'AI Cloaking Process',
            description: 'Our engine applies invisible adversarial perturbations that confuse facial recognition while looking identical to humans.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            visual: 'process',
        },
        {
            number: '03',
            title: 'Verify & Download',
            description: 'See proof that AI cannot recognize your photo with our Dual Reality viewer, then download your protected image.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            ),
            visual: 'download',
        },
    ];

    return (
        <section className={styles.howItWorks} id="how-it-works" ref={sectionRef}>
            <div className="container">
                {/* Header */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>How It Works</span>
                    <h2 className={styles.title}>
                        Protection in <span className="text-gradient">3 Simple Steps</span>
                    </h2>
                    <p className={styles.subtitle}>
                        No technical expertise required. Upload, protect, download—it's that simple.
                    </p>
                </div>

                {/* Steps Container */}
                <div className={styles.stepsContainer}>
                    {/* Connection Line */}
                    <div className={styles.connectionLine}>
                        <div
                            className={styles.lineProgress}
                            style={{ width: `${(activeStep / 2) * 100}%` }}
                        ></div>
                    </div>

                    {/* Steps */}
                    <div className={styles.steps}>
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`${styles.step} ${activeStep === index ? styles.active : ''} ${isVisible ? styles.visible : ''}`}
                                style={{ transitionDelay: `${index * 0.15}s` }}
                                onClick={() => setActiveStep(index)}
                            >
                                <div className={styles.stepNumber}>
                                    <span className={styles.numberText}>{step.number}</span>
                                    {activeStep === index && <div className={styles.numberPulse}></div>}
                                </div>
                                <div className={styles.stepIcon}>
                                    {step.icon}
                                </div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual Demo */}
                <div className={`${styles.visualDemo} ${isVisible ? styles.visible : ''}`}>
                    <div className={styles.demoCard}>
                        {/* Upload Visual */}
                        <div className={`${styles.demoScene} ${activeStep === 0 ? styles.active : ''}`}>
                            <div className={styles.uploadVisual}>
                                <div className={styles.dropZone}>
                                    <div className={styles.dropIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                            <polyline points="17 8 12 3 7 8" />
                                            <line x1="12" y1="3" x2="12" y2="15" />
                                        </svg>
                                    </div>
                                    <span>Drop your photo here</span>
                                </div>
                            </div>
                        </div>

                        {/* Processing Visual */}
                        <div className={`${styles.demoScene} ${activeStep === 1 ? styles.active : ''}`}>
                            <div className={styles.processVisual}>
                                <div className={styles.processRing}>
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" className={styles.ringBg} />
                                        <circle cx="50" cy="50" r="45" className={styles.ringProgress} />
                                    </svg>
                                    <div className={styles.shieldIcon}>🛡️</div>
                                </div>
                                <div className={styles.processParticles}>
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className={styles.particle} style={{ '--i': i }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Download Visual */}
                        <div className={`${styles.demoScene} ${activeStep === 2 ? styles.active : ''}`}>
                            <div className={styles.downloadVisual}>
                                <div className={styles.checkmark}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <div className={styles.downloadLabel}>Protected!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
