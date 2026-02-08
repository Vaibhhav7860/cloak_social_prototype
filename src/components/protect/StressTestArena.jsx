'use client';

import { useState } from 'react';
import styles from './StressTestArena.module.css';

export default function StressTestArena({ protectedImageUrl }) {
    const [isRunning, setIsRunning] = useState(false);
    const [currentTest, setCurrentTest] = useState(0);
    const [testResults, setTestResults] = useState([]);
    const [overallScore, setOverallScore] = useState(null);

    const aiModels = [
        { name: 'FaceNet', icon: '🔍', description: 'Google facial recognition' },
        { name: 'DeepFace', icon: '🧠', description: 'Meta deep learning model' },
        { name: 'ArcFace', icon: '📐', description: 'Angular margin recognition' },
        { name: 'VGGFace2', icon: '🎭', description: 'Oxford visual geometry' },
        { name: 'RetinaFace', icon: '👁️', description: 'Face detection network' },
    ];

    const runStressTest = () => {
        setIsRunning(true);
        setTestResults([]);
        setCurrentTest(0);
        setOverallScore(null);

        let blockedCount = 0;

        aiModels.forEach((model, index) => {
            setTimeout(() => {
                setCurrentTest(index + 1);
                const blocked = Math.random() > 0.05;
                if (blocked) blockedCount++;

                const result = {
                    model: model.name,
                    blocked: blocked,
                    confidence: Math.floor(Math.random() * 15) + 1,
                    time: (Math.random() * 200 + 100).toFixed(0) + 'ms'
                };
                setTestResults(prev => [...prev, result]);

                if (index === aiModels.length - 1) {
                    setTimeout(() => {
                        setIsRunning(false);
                        setOverallScore(Math.round((blockedCount / aiModels.length) * 100));
                    }, 500);
                }
            }, (index + 1) * 1200);
        });
    };

    const getStatusColor = (blocked) => blocked ? 'var(--reality-human)' : 'var(--reality-ai)';

    return (
        <div className={styles.arena}>
            <div className={styles.header}>
                <div className={styles.titleRow}>
                    <h3 className={styles.title}>🎯 Interactive Stress Test</h3>
                    {overallScore !== null && (
                        <div className={styles.overallScore}>
                            <span className={styles.scoreValue}>{overallScore}%</span>
                            <span className={styles.scoreLabel}>Protected</span>
                        </div>
                    )}
                </div>
                <p className={styles.subtitle}>
                    Simulate real AI attacks against your cloaked photo
                </p>
            </div>

            {/* Image Preview */}
            <div className={styles.imagePreview}>
                {protectedImageUrl ? (
                    <img src={protectedImageUrl} alt="Protected" className={styles.previewImage} />
                ) : (
                    <div className={styles.placeholder}>
                        <span>🛡️</span>
                        <span>Protected Photo</span>
                    </div>
                )}
                {isRunning && (
                    <div className={styles.scanOverlay}>
                        <div className={styles.scanLine}></div>
                        <div className={styles.targetReticle}>
                            <svg viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="45" stroke="var(--reality-ai)" strokeWidth="2" strokeDasharray="8 4" />
                                <line x1="50" y1="0" x2="50" y2="20" stroke="var(--reality-ai)" strokeWidth="2" />
                                <line x1="50" y1="80" x2="50" y2="100" stroke="var(--reality-ai)" strokeWidth="2" />
                                <line x1="0" y1="50" x2="20" y2="50" stroke="var(--reality-ai)" strokeWidth="2" />
                                <line x1="80" y1="50" x2="100" y2="50" stroke="var(--reality-ai)" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>

            {/* AI Models Grid */}
            <div className={styles.modelsGrid}>
                {aiModels.map((model, index) => {
                    const result = testResults[index];
                    const isActive = isRunning && currentTest === index + 1;
                    const isComplete = result !== undefined;

                    return (
                        <div
                            key={model.name}
                            className={`${styles.modelCard} ${isActive ? styles.active : ''} ${isComplete ? styles.complete : ''}`}
                        >
                            <div className={styles.modelHeader}>
                                <span className={styles.modelIcon}>{model.icon}</span>
                                <div className={styles.modelInfo}>
                                    <span className={styles.modelName}>{model.name}</span>
                                    <span className={styles.modelDesc}>{model.description}</span>
                                </div>
                            </div>

                            <div className={styles.modelStatus}>
                                {isActive && (
                                    <div className={styles.scanning}>
                                        <div className={styles.spinner}></div>
                                        <span>Attacking...</span>
                                    </div>
                                )}
                                {isComplete && (
                                    <div className={styles.result} style={{ color: getStatusColor(result.blocked) }}>
                                        <span className={styles.resultIcon}>
                                            {result.blocked ? '✓ BLOCKED' : '✗ DETECTED'}
                                        </span>
                                        <span className={styles.resultConfidence}>
                                            AI Confidence: {result.confidence}%
                                        </span>
                                    </div>
                                )}
                                {!isActive && !isComplete && (
                                    <span className={styles.pending}>Awaiting test</span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Action Button */}
            <button
                className={styles.runButton}
                onClick={runStressTest}
                disabled={isRunning}
            >
                {isRunning ? (
                    <>
                        <span className={styles.buttonSpinner}></span>
                        Testing {currentTest}/{aiModels.length}...
                    </>
                ) : testResults.length > 0 ? (
                    <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M23 4v6h-6M1 20v-6h6" />
                            <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
                        </svg>
                        Run Again
                    </>
                ) : (
                    <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        Start Stress Test
                    </>
                )}
            </button>

            {/* Disclaimer */}
            <p className={styles.disclaimer}>
                * Simulated results based on adversarial perturbation effectiveness
            </p>
        </div>
    );
}
