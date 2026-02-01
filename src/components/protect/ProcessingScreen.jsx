'use client';

import { useState, useEffect } from 'react';
import styles from './ProcessingScreen.module.css';

const steps = [
    { id: 1, text: 'Analyzing image...', duration: 1500 },
    { id: 2, text: 'Detecting faces...', duration: 1200 },
    { id: 3, text: 'Generating adversarial perturbations...', duration: 2000 },
    { id: 4, text: 'Applying invisible protection...', duration: 1500 },
    { id: 5, text: 'Scrubbing metadata...', duration: 800 },
    { id: 6, text: 'Calculating Shield Score...', duration: 1000 },
    { id: 7, text: 'Verifying protection quality...', duration: 1000 },
];

export default function ProcessingScreen({ imagePreview, onComplete }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let stepIndex = 0;
        let totalTime = 0;
        const totalDuration = steps.reduce((acc, s) => acc + s.duration, 0);

        const runStep = () => {
            if (stepIndex >= steps.length) {
                setTimeout(() => onComplete(), 500);
                return;
            }

            setCurrentStep(stepIndex);
            const stepDuration = steps[stepIndex].duration;

            // Animate progress during this step
            const startProgress = (totalTime / totalDuration) * 100;
            const endProgress = ((totalTime + stepDuration) / totalDuration) * 100;
            const frames = 30;
            const frameTime = stepDuration / frames;
            let frame = 0;

            const animateProgress = setInterval(() => {
                frame++;
                const frameProgress = startProgress + ((endProgress - startProgress) * (frame / frames));
                setProgress(Math.min(frameProgress, 100));

                if (frame >= frames) {
                    clearInterval(animateProgress);
                }
            }, frameTime);

            totalTime += stepDuration;
            stepIndex++;

            setTimeout(runStep, stepDuration);
        };

        runStep();
    }, [onComplete]);

    return (
        <div className={styles.processingContainer}>
            {/* Image Preview */}
            <div className={styles.imagePreview}>
                <img src={imagePreview} alt="Processing" className={styles.previewImage} />
                <div className={styles.scanOverlay}>
                    <div className={styles.scanLine}></div>
                </div>
                <div className={styles.shieldPulse}></div>
            </div>

            {/* Progress Ring */}
            <div className={styles.progressWrapper}>
                <svg className={styles.progressRing} viewBox="0 0 120 120">
                    <circle
                        className={styles.progressBg}
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        strokeWidth="6"
                    />
                    <circle
                        className={styles.progressBar}
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        strokeWidth="6"
                        strokeDasharray={339.292}
                        strokeDashoffset={339.292 - (339.292 * progress) / 100}
                    />
                </svg>
                <div className={styles.progressText}>
                    <span className={styles.progressNumber}>{Math.round(progress)}%</span>
                </div>
            </div>

            {/* Status */}
            <div className={styles.statusContainer}>
                <h3 className={styles.statusTitle}>Immunizing Your Photo</h3>
                <p className={styles.currentStep}>
                    {steps[currentStep]?.text || 'Finalizing...'}
                </p>

                {/* Steps List */}
                <div className={styles.stepsList}>
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`${styles.stepItem} ${index < currentStep ? styles.completed :
                                    index === currentStep ? styles.active : ''
                                }`}
                        >
                            <span className={styles.stepIcon}>
                                {index < currentStep ? '✓' : index === currentStep ? '⟳' : '○'}
                            </span>
                            <span>{step.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trust Message */}
            <p className={styles.trustMessage}>
                🔒 Your photo is being processed securely and will not be stored
            </p>
        </div>
    );
}
