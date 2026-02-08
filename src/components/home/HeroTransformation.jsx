'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './HeroTransformation.module.css';

export default function HeroTransformation() {
    const [isVisible, setIsVisible] = useState(false);
    const [viewMode, setViewMode] = useState('human'); // 'human' or 'ai'
    const [sliderPosition, setSliderPosition] = useState(50);
    const sliderRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSliderMove = (e) => {
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX || e.touches?.[0]?.clientX;
        const position = ((x - rect.left) / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 5), 95));
    };

    const stats = [
        { value: '95%+', label: 'AI Confusion Rate', icon: '🛡️' },
        { value: '<0.1%', label: 'Visual Change', icon: '👁️' },
        { value: '100%', label: 'Metadata Removed', icon: '🧹' },
    ];

    return (
        <section className={styles.hero}>
            {/* Animated Background */}
            <div className={styles.bgEffects}>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
                <div className={styles.gridOverlay}></div>
            </div>

            <div className={`${styles.heroContent} container`}>
                {/* Badge */}
                <div className={`${styles.badge} ${isVisible ? styles.visible : ''}`}>
                    <span className={styles.badgePulse}></span>
                    <span>✨ Military-Grade Photo Protection</span>
                </div>

                {/* Headline */}
                <h1 className={`${styles.headline} ${isVisible ? styles.visible : ''}`}>
                    Invisible to <span className={styles.aiText}>AI</span>.{' '}
                    <br className={styles.desktopBreak} />
                    <span className={styles.gradientText}>Identical to Humans.</span>
                </h1>

                {/* Subheadline */}
                <p className={`${styles.subheadline} ${isVisible ? styles.visible : ''}`}>
                    Cloak your photos with adversarial perturbations that confuse facial recognition
                    and deepfake systems—while remaining completely invisible to the human eye.
                </p>

                {/* CTA Buttons */}
                <div className={`${styles.ctaGroup} ${isVisible ? styles.visible : ''}`}>
                    <Link href="/protect" className={styles.primaryCta}>
                        <span className={styles.ctaGlow}></span>
                        <span className={styles.ctaIcon}>🛡️</span>
                        <span>Cloak Your Photo</span>
                    </Link>
                    <Link href="#how-it-works" className={styles.secondaryCta}>
                        <span className={styles.playIcon}>▶</span>
                        See How It Works
                    </Link>
                </div>

                {/* Dual Reality Viewer */}
                <div className={`${styles.dualReality} ${isVisible ? styles.visible : ''}`}>
                    <div className={styles.viewerHeader}>
                        <h3>Dual Reality Preview</h3>
                        <div className={styles.viewToggle}>
                            <button
                                className={`${styles.toggleBtn} ${viewMode === 'human' ? styles.active : ''}`}
                                onClick={() => setViewMode('human')}
                            >
                                👁️ Human View
                            </button>
                            <button
                                className={`${styles.toggleBtn} ${viewMode === 'ai' ? styles.active : ''}`}
                                onClick={() => setViewMode('ai')}
                            >
                                🤖 AI View
                            </button>
                        </div>
                    </div>

                    <div
                        className={styles.sliderContainer}
                        ref={sliderRef}
                        onMouseMove={(e) => e.buttons === 1 && handleSliderMove(e)}
                        onTouchMove={handleSliderMove}
                    >
                        {/* Human View (Left) */}
                        <div className={styles.viewPanel} style={{ width: `${sliderPosition}%` }}>
                            <div className={styles.viewContent}>
                                <div className={styles.demoImage} style={{ backgroundColor: '#1a1a24' }}>
                                    <div className={styles.faceOutline}>
                                        <svg viewBox="0 0 100 100" fill="none">
                                            <circle cx="50" cy="40" r="25" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                                            <circle cx="42" cy="38" r="3" fill="currentColor" />
                                            <circle cx="58" cy="38" r="3" fill="currentColor" />
                                            <path d="M40 50 Q50 58 60 50" stroke="currentColor" strokeWidth="2" fill="none" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.viewLabel}>
                                    <span className={styles.humanIndicator}>👁️</span>
                                    Perfect Quality
                                </div>
                            </div>
                        </div>

                        {/* AI View (Right) */}
                        <div className={styles.viewPanelAI} style={{ width: `${100 - sliderPosition}%` }}>
                            <div className={styles.viewContentAI}>
                                <div className={styles.demoImageAI}>
                                    <div className={styles.glitchEffect}>
                                        <div className={styles.scanLines}></div>
                                        <div className={styles.noiseOverlay}></div>
                                        <div className={styles.errorIcon}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.viewLabelAI}>
                                    <span className={styles.aiIndicator}>🤖</span>
                                    Recognition Failed
                                </div>
                            </div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className={styles.sliderHandle}
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className={styles.handleLine}></div>
                            <div className={styles.handleGrip}>
                                <span>⟷</span>
                            </div>
                        </div>
                    </div>

                    <p className={styles.viewerNote}>
                        ← Drag to compare →
                    </p>
                </div>

                {/* Stats */}
                <div className={`${styles.stats} ${isVisible ? styles.visible : ''}`}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <span className={styles.statIcon}>{stat.icon}</span>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Trust Signals */}
                <div className={`${styles.trustRow} ${isVisible ? styles.visible : ''}`}>
                    <div className={styles.trustItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>No Account Required</span>
                    </div>
                    <div className={styles.trustItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                        </svg>
                        <span>Photos Never Stored</span>
                    </div>
                    <div className={styles.trustItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span>256-bit Encryption</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
