'use client';

import { useState, useEffect } from 'react';
import styles from './MetamorphosisScreen.module.css';

export default function MetamorphosisScreen({ imageUrl, onComplete }) {
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { label: 'Analyzing facial features...', icon: '🔍' },
        { label: 'Generating adversarial patterns...', icon: '⚡' },
        { label: 'Wrapping protection layer...', icon: '🛡️' },
        { label: 'Scrubbing metadata...', icon: '🧹' },
        { label: 'Finalizing protection...', icon: '✨' },
    ];

    useEffect(() => {
        const duration = 8000; // 8 seconds total
        const startTime = Date.now();

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);
            setProgress(newProgress);

            // Update current step based on progress
            const stepIndex = Math.min(
                Math.floor((newProgress / 100) * steps.length),
                steps.length - 1
            );
            setCurrentStep(stepIndex);

            if (newProgress < 100) {
                requestAnimationFrame(updateProgress);
            } else {
                setTimeout(() => onComplete(), 500);
            }
        };

        requestAnimationFrame(updateProgress);
    }, [onComplete, steps.length]);

    return (
        <div className={styles.screen}>
            {/* Background Effects */}
            <div className={styles.bgEffects}>
                <div className={styles.glowOrb1}></div>
                <div className={styles.glowOrb2}></div>
            </div>

            {/* Header */}
            <div className={styles.header}>
                <h2 className={styles.title}>Cloaking in Progress</h2>
                <p className={styles.subtitle}>Your photo is being protected</p>
            </div>

            {/* Image with Processing Effect */}
            <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                    {imageUrl && (
                        <img src={imageUrl} alt="Processing" className={styles.image} />
                    )}

                    {/* Particle Overlay */}
                    <div className={styles.particleOverlay}>
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className={styles.particle}
                                style={{
                                    '--x': `${Math.random() * 100}%`,
                                    '--y': `${Math.random() * 100}%`,
                                    '--duration': `${2 + Math.random() * 2}s`,
                                    '--delay': `${Math.random() * 2}s`
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Scan Line */}
                    <div className={styles.scanLine} style={{ top: `${progress}%` }}></div>

                    {/* Shield Effect */}
                    <div className={styles.shieldEffect} style={{ opacity: progress / 100 }}>
                        <svg viewBox="0 0 48 56" fill="none">
                            <path
                                d="M24 4L4 12V26C4 40 14 50 24 54C34 50 44 40 44 26V12L24 4Z"
                                stroke="url(#shieldGrad)"
                                strokeWidth="2"
                                fill="rgba(125, 211, 252, 0.1)"
                            />
                            <defs>
                                <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#7dd3fc" />
                                    <stop offset="100%" stopColor="#a78bfa" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Progress Section */}
            <div className={styles.progressSection}>
                {/* Progress Ring */}
                <div className={styles.progressRing}>
                    <svg viewBox="0 0 120 120">
                        <circle
                            cx="60" cy="60" r="54"
                            className={styles.ringBg}
                        />
                        <circle
                            cx="60" cy="60" r="54"
                            className={styles.ringProgress}
                            style={{
                                strokeDasharray: 339.3,
                                strokeDashoffset: 339.3 * (1 - progress / 100)
                            }}
                        />
                    </svg>
                    <div className={styles.progressValue}>
                        <span className={styles.progressNumber}>{Math.round(progress)}</span>
                        <span className={styles.progressPercent}>%</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Current Step */}
                <div className={styles.currentStep}>
                    <span className={styles.stepIcon}>{steps[currentStep].icon}</span>
                    <span className={styles.stepLabel}>{steps[currentStep].label}</span>
                </div>

                {/* All Steps */}
                <div className={styles.stepsList}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${styles.step} ${index <= currentStep ? styles.completed : ''} ${index === currentStep ? styles.active : ''}`}
                        >
                            <div className={styles.stepDot}>
                                {index < currentStep && (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                )}
                            </div>
                            <span>{step.label.replace('...', '')}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trust Signal */}
            <div className={styles.trustSignal}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                <span>Your photo is processed securely and never stored</span>
            </div>
        </div>
    );
}
