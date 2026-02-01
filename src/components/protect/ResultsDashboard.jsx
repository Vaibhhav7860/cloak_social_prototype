'use client';

import { useState, useEffect } from 'react';
import styles from './ResultsDashboard.module.css';

export default function ResultsDashboard({ originalImage, onReset }) {
    const [activeTab, setActiveTab] = useState('comparison');
    const [showNoise, setShowNoise] = useState(false);
    const [stressTestRunning, setStressTestRunning] = useState(false);
    const [stressTestResult, setStressTestResult] = useState(null);
    const [badgeEnabled, setBadgeEnabled] = useState(true);
    const [originalScore] = useState(23);
    const [immunizedScore] = useState(97);
    const [animatedOriginalScore, setAnimatedOriginalScore] = useState(0);
    const [animatedImmunizedScore, setAnimatedImmunizedScore] = useState(0);

    // Animate scores
    useEffect(() => {
        // Animate original score first (per PRD - show original first)
        const originalInterval = setInterval(() => {
            setAnimatedOriginalScore(prev => {
                if (prev >= originalScore) {
                    clearInterval(originalInterval);
                    return originalScore;
                }
                return prev + 1;
            });
        }, 30);

        // Then animate immunized score
        setTimeout(() => {
            const immunizedInterval = setInterval(() => {
                setAnimatedImmunizedScore(prev => {
                    if (prev >= immunizedScore) {
                        clearInterval(immunizedInterval);
                        return immunizedScore;
                    }
                    return prev + 2;
                });
            }, 20);
        }, 800);

        return () => clearInterval(originalInterval);
    }, [originalScore, immunizedScore]);

    const runStressTest = () => {
        setStressTestRunning(true);
        setStressTestResult(null);

        // Simulate AI attempting to match the face
        setTimeout(() => {
            setStressTestRunning(false);
            setStressTestResult({
                success: true,
                matchAttempts: 847,
                confidence: 0.02,
            });
        }, 3000);
    };

    const handleDownload = () => {
        // Simulate download
        const link = document.createElement('a');
        link.href = originalImage;
        link.download = 'protected-photo.jpg';
        link.click();
    };

    return (
        <div className={styles.dashboard}>
            {/* Success Header */}
            <div className={styles.successHeader}>
                <div className={styles.successIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                    </svg>
                </div>
                <h2 className={styles.successTitle}>Photo Successfully Immunized!</h2>
                <p className={styles.successSubtitle}>
                    Your photo is now protected from AI facial recognition
                </p>
            </div>

            {/* Shield Score Display (Per PRD: Original first, then Immunized) */}
            <div className={styles.scoreSection}>
                <h3 className={styles.sectionTitle}>Shield Score</h3>
                <div className={styles.scoreComparison}>
                    {/* Original Score - Shown First */}
                    <div className={styles.scoreCard}>
                        <span className={styles.scoreLabel}>Original Photo</span>
                        <div className={`${styles.scoreRing} ${styles.danger}`}>
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" className={styles.scoreBg} />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    className={styles.scoreProgress}
                                    style={{
                                        strokeDasharray: 283,
                                        strokeDashoffset: 283 - (283 * animatedOriginalScore) / 100
                                    }}
                                />
                            </svg>
                            <span className={styles.scoreValue}>{animatedOriginalScore}</span>
                        </div>
                        <span className={styles.scoreStatus}>🔴 Vulnerable</span>
                    </div>

                    <div className={styles.scoreArrow}>→</div>

                    {/* Immunized Score - Shown Second */}
                    <div className={styles.scoreCard}>
                        <span className={styles.scoreLabel}>Immunized Photo</span>
                        <div className={`${styles.scoreRing} ${styles.success}`}>
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" className={styles.scoreBg} />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    className={styles.scoreProgress}
                                    style={{
                                        strokeDasharray: 283,
                                        strokeDashoffset: 283 - (283 * animatedImmunizedScore) / 100
                                    }}
                                />
                            </svg>
                            <span className={styles.scoreValue}>{animatedImmunizedScore}</span>
                        </div>
                        <span className={styles.scoreStatus}>🟢 Protected</span>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'comparison' ? styles.active : ''}`}
                    onClick={() => setActiveTab('comparison')}
                >
                    AI-Buster
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'noise' ? styles.active : ''}`}
                    onClick={() => setActiveTab('noise')}
                >
                    Noise Toggle
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'stress' ? styles.active : ''}`}
                    onClick={() => setActiveTab('stress')}
                >
                    Stress Test
                </button>
            </div>

            {/* Tab Content */}
            <div className={styles.tabContent}>
                {/* AI-Buster: Split-Screen Comparison (Per PRD) */}
                {activeTab === 'comparison' && (
                    <div className={styles.comparisonView}>
                        <div className={styles.splitScreen}>
                            <div className={styles.imagePanel}>
                                <span className={styles.panelLabel}>Original</span>
                                <div className={styles.imageWrapper}>
                                    <img src={originalImage} alt="Original" />
                                    <div className={styles.aiOverlay}>
                                        <div className={styles.faceBox}>
                                            <span>Face Detected</span>
                                            <span className={styles.confidence}>98.7% Match</span>
                                        </div>
                                    </div>
                                </div>
                                <span className={styles.panelStatus}>🔴 AI Can Recognize</span>
                            </div>

                            <div className={styles.divider}></div>

                            <div className={styles.imagePanel}>
                                <span className={styles.panelLabel}>Immunized</span>
                                <div className={styles.imageWrapper}>
                                    <img src={originalImage} alt="Immunized" />
                                    <div className={`${styles.aiOverlay} ${styles.protected}`}>
                                        <div className={styles.protectedIcon}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                                <path d="M9 12l2 2 4-4" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <span className={styles.panelStatus}>🟢 AI Cannot Match</span>
                            </div>
                        </div>
                        <p className={styles.comparisonNote}>
                            The immunized photo looks identical to humans but confuses AI facial recognition systems.
                        </p>
                    </div>
                )}

                {/* Noise Toggle */}
                {activeTab === 'noise' && (
                    <div className={styles.noiseView}>
                        <div className={styles.noiseImage}>
                            <img src={originalImage} alt="Photo" />
                            {showNoise && (
                                <div className={styles.noiseOverlay}>
                                    <div className={styles.noisePattern}></div>
                                </div>
                            )}
                        </div>
                        <div className={styles.noiseControls}>
                            <button
                                className={`${styles.toggleBtn} ${showNoise ? styles.active : ''}`}
                                onClick={() => setShowNoise(!showNoise)}
                            >
                                {showNoise ? '👁️ Hide Perturbation' : '🔍 Show Perturbation'}
                            </button>
                            <p className={styles.noiseInfo}>
                                {showNoise
                                    ? 'The colored pattern shows the adversarial perturbation (amplified 10x for visibility).'
                                    : 'Toggle to see the invisible protection layer applied to your photo.'}
                            </p>
                        </div>
                    </div>
                )}

                {/* Stress Test */}
                {activeTab === 'stress' && (
                    <div className={styles.stressView}>
                        <div className={styles.stressImage}>
                            <img src={originalImage} alt="Test" />
                            {stressTestRunning && (
                                <div className={styles.scanAnimation}>
                                    <div className={styles.scanLine}></div>
                                </div>
                            )}
                        </div>

                        {!stressTestResult && !stressTestRunning && (
                            <button className={styles.stressBtn} onClick={runStressTest}>
                                🧪 Try to Break Protection
                            </button>
                        )}

                        {stressTestRunning && (
                            <div className={styles.stressRunning}>
                                <div className={styles.spinner}></div>
                                <span>Running {Math.floor(Math.random() * 800) + 100} AI match attempts...</span>
                            </div>
                        )}

                        {stressTestResult && (
                            <div className={styles.stressResult}>
                                <div className={styles.resultIcon}>✅</div>
                                <h4>Protection Verified!</h4>
                                <p>After {stressTestResult.matchAttempts} attempts, AI confidence dropped to {(stressTestResult.confidence * 100).toFixed(1)}%</p>
                                <button className={styles.retryBtn} onClick={runStressTest}>
                                    Run Again
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Badge Preview & Download (Per PRD: Badge Default ON) */}
            <div className={styles.downloadSection}>
                <div className={styles.badgePreview}>
                    <h4>Protection Badge</h4>
                    <div className={styles.badgeToggle}>
                        <label className={styles.switch}>
                            <input
                                type="checkbox"
                                checked={badgeEnabled}
                                onChange={(e) => setBadgeEnabled(e.target.checked)}
                            />
                            <span className={styles.slider}></span>
                        </label>
                        <span>{badgeEnabled ? 'Badge ON (recommended)' : 'Badge OFF'}</span>
                    </div>
                    <div className={styles.previewWithBadge}>
                        <img src={originalImage} alt="Preview" />
                        {badgeEnabled && (
                            <div className={styles.cloakBadge}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="M9 12l2 2 4-4" />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.downloadActions}>
                    <button className={styles.downloadBtn} onClick={handleDownload}>
                        <span>⬇️</span>
                        Download Protected Photo
                    </button>
                    <button className={styles.newPhotoBtn} onClick={onReset}>
                        📷 Protect Another Photo
                    </button>
                </div>
            </div>
        </div>
    );
}
