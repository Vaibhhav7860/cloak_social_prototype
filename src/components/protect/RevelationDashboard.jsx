'use client';

import { useState } from 'react';
import Link from 'next/link';
import DualRealityViewer from './DualRealityViewer';
import styles from './RevelationDashboard.module.css';

export default function RevelationDashboard({ originalUrl, protectedUrl, onReset }) {
    const [isDownloading, setIsDownloading] = useState(false);
    const shieldScore = 97; // Simulated

    const handleDownload = () => {
        setIsDownloading(true);
        // Simulate download
        setTimeout(() => {
            if (protectedUrl) {
                const link = document.createElement('a');
                link.href = protectedUrl;
                link.download = 'cloaked-photo.jpg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            setIsDownloading(false);
        }, 500);
    };

    const metrics = [
        { label: 'Shield Score', value: `${shieldScore}`, unit: '/100', icon: '🛡️' },
        { label: 'AI Confusion', value: '95%', unit: '+', icon: '🤖' },
        { label: 'Visual Change', value: '<0.1', unit: '%', icon: '👁️' },
    ];

    return (
        <div className={styles.dashboard}>
            {/* Success Header */}
            <div className={styles.header}>
                <div className={styles.successIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="8 12 11 15 16 9" />
                    </svg>
                </div>
                <h2 className={styles.title}>Cloak Activated!</h2>
                <p className={styles.subtitle}>Your photo is now protected from AI recognition</p>
            </div>

            {/* Metrics Cards */}
            <div className={styles.metrics}>
                {metrics.map((metric, index) => (
                    <div key={index} className={styles.metricCard}>
                        <span className={styles.metricIcon}>{metric.icon}</span>
                        <div className={styles.metricValue}>
                            <span className={styles.metricNumber}>{metric.value}</span>
                            <span className={styles.metricUnit}>{metric.unit}</span>
                        </div>
                        <span className={styles.metricLabel}>{metric.label}</span>
                    </div>
                ))}
            </div>

            {/* Shield Score Gauge */}
            <div className={styles.gaugeSection}>
                <div className={styles.gauge}>
                    <svg viewBox="0 0 120 120">
                        <defs>
                            <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#7dd3fc" />
                                <stop offset="50%" stopColor="#a78bfa" />
                                <stop offset="100%" stopColor="#f0abfc" />
                            </linearGradient>
                        </defs>
                        <circle cx="60" cy="60" r="54" className={styles.gaugeBg} />
                        <circle
                            cx="60" cy="60" r="54"
                            className={styles.gaugeProgress}
                            style={{
                                strokeDasharray: 339.3,
                                strokeDashoffset: 339.3 * (1 - shieldScore / 100)
                            }}
                        />
                    </svg>
                    <div className={styles.gaugeValue}>
                        <span className={styles.gaugeNumber}>{shieldScore}</span>
                        <span className={styles.gaugeLabel}>Shield Score</span>
                    </div>
                </div>
                <p className={styles.gaugeNote}>
                    Excellent protection! AI systems will have a 97% failure rate recognizing this photo.
                </p>
            </div>

            {/* Dual Reality Viewer */}
            <DualRealityViewer
                originalUrl={originalUrl}
                protectedUrl={protectedUrl}
            />

            {/* Protection Details */}
            <div className={styles.details}>
                <h3 className={styles.detailsTitle}>Protection Applied</h3>
                <div className={styles.detailsList}>
                    <div className={styles.detailItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Adversarial perturbations applied</span>
                    </div>
                    <div className={styles.detailItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Metadata completely scrubbed</span>
                    </div>
                    <div className={styles.detailItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Deepfake training prevention active</span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className={styles.actions}>
                <button
                    className={styles.downloadBtn}
                    onClick={handleDownload}
                    disabled={isDownloading}
                >
                    {isDownloading ? (
                        <>
                            <span className={styles.spinner}></span>
                            Preparing...
                        </>
                    ) : (
                        <>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download Protected Photo
                        </>
                    )}
                </button>
                <button className={styles.resetBtn} onClick={onReset}>
                    Cloak Another Photo
                </button>
            </div>

            {/* Share / Upsell */}
            <div className={styles.footer}>
                <p className={styles.footerText}>
                    Love CloakSocial? <Link href="/pricing" className={styles.upgradeLink}>Upgrade for unlimited protection</Link>
                </p>
            </div>
        </div>
    );
}
