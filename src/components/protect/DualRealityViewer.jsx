'use client';

import { useState, useRef } from 'react';
import styles from './DualRealityViewer.module.css';

export default function DualRealityViewer({ originalUrl, protectedUrl }) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [viewMode, setViewMode] = useState('compare'); // 'compare', 'human', 'ai'
    const containerRef = useRef(null);

    const handleSliderMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX || e.touches?.[0]?.clientX;
        const position = ((x - rect.left) / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 5), 95));
    };

    return (
        <div className={styles.viewer}>
            {/* Header */}
            <div className={styles.header}>
                <h3 className={styles.title}>Dual Reality Viewer</h3>
                <div className={styles.viewToggle}>
                    <button
                        className={`${styles.toggleBtn} ${viewMode === 'compare' ? styles.active : ''}`}
                        onClick={() => setViewMode('compare')}
                    >
                        ⟷ Compare
                    </button>
                    <button
                        className={`${styles.toggleBtn} ${viewMode === 'human' ? styles.active : ''}`}
                        onClick={() => setViewMode('human')}
                    >
                        👁️ Human
                    </button>
                    <button
                        className={`${styles.toggleBtn} ${viewMode === 'ai' ? styles.active : ''}`}
                        onClick={() => setViewMode('ai')}
                    >
                        🤖 AI
                    </button>
                </div>
            </div>

            {/* Comparison Container */}
            <div
                className={styles.comparisonContainer}
                ref={containerRef}
                onMouseMove={(e) => viewMode === 'compare' && e.buttons === 1 && handleSliderMove(e)}
                onTouchMove={(e) => viewMode === 'compare' && handleSliderMove(e)}
            >
                {/* Human View (Full) */}
                <div className={`${styles.viewPanel} ${styles.humanPanel}`}>
                    <div className={styles.imageContainer}>
                        {protectedUrl ? (
                            <img src={protectedUrl} alt="Protected" className={styles.image} />
                        ) : (
                            <div className={styles.placeholder}>
                                <span className={styles.placeholderIcon}>👁️</span>
                                <span>Human View</span>
                            </div>
                        )}
                    </div>
                    <div className={styles.viewIndicator}>
                        <span className={styles.indicatorDot} style={{ background: 'var(--reality-human)' }}></span>
                        <span className={styles.indicatorText}>Perfect Quality</span>
                    </div>
                </div>

                {/* AI View (Clipped based on slider or mode) */}
                <div
                    className={`${styles.viewPanel} ${styles.aiPanel}`}
                    style={{
                        clipPath: viewMode === 'compare'
                            ? `inset(0 0 0 ${sliderPosition}%)`
                            : viewMode === 'ai'
                                ? 'inset(0)'
                                : 'inset(0 100% 0 0)'
                    }}
                >
                    <div className={styles.imageContainer}>
                        {protectedUrl ? (
                            <>
                                <img src={protectedUrl} alt="AI View" className={styles.image} />
                                {/* AI Confusion Overlay */}
                                <div className={styles.aiOverlay}>
                                    <div className={styles.scanLines}></div>
                                    <div className={styles.noiseEffect}></div>
                                    <div className={styles.errorBox}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                                        </svg>
                                        <span>Recognition Failed</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className={styles.placeholder} style={{ background: 'rgba(239, 68, 68, 0.05)' }}>
                                <span className={styles.placeholderIcon}>🤖</span>
                                <span>AI View</span>
                            </div>
                        )}
                    </div>
                    <div className={styles.viewIndicator}>
                        <span className={styles.indicatorDot} style={{ background: 'var(--reality-ai)' }}></span>
                        <span className={styles.indicatorText}>Unrecognizable</span>
                    </div>
                </div>

                {/* Slider Handle (only in compare mode) */}
                {viewMode === 'compare' && (
                    <div
                        className={styles.sliderHandle}
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className={styles.handleLine}></div>
                        <div className={styles.handleGrip}>
                            <span>⟷</span>
                        </div>
                    </div>
                )}

                {/* Labels */}
                <div className={styles.labels}>
                    <span className={`${styles.label} ${styles.humanLabel}`}>👁️ Human View</span>
                    <span className={`${styles.label} ${styles.aiLabel}`}>🤖 AI View</span>
                </div>
            </div>

            {/* Info Text */}
            <p className={styles.infoText}>
                {viewMode === 'compare'
                    ? '← Drag to compare human vs AI perspective →'
                    : viewMode === 'human'
                        ? 'This is exactly what humans see - no visible changes'
                        : 'AI models see scrambled, unrecognizable data'
                }
            </p>
        </div>
    );
}
