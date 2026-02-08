'use client';

import { useState, useEffect } from 'react';
import styles from './VerifiedSecureBadge.module.css';

export default function VerifiedSecureBadge({ shieldScore = 97 }) {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimated(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const protectionLevel = shieldScore >= 90 ? 'Maximum' : shieldScore >= 70 ? 'High' : 'Standard';
    const timestamp = new Date().toISOString().split('T')[0];

    return (
        <div className={`${styles.badge} ${isAnimated ? styles.animated : ''}`}>
            {/* Shield Icon */}
            <div className={styles.shieldContainer}>
                <div className={styles.shieldGlow}></div>
                <svg viewBox="0 0 48 56" fill="none" className={styles.shieldIcon}>
                    <defs>
                        <linearGradient id="verifiedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#7dd3fc" />
                            <stop offset="50%" stopColor="#a78bfa" />
                            <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M24 4L4 12V26C4 40 14 50 24 54C34 50 44 40 44 26V12L24 4Z"
                        stroke="url(#verifiedGrad)"
                        strokeWidth="2.5"
                        fill="rgba(16, 185, 129, 0.1)"
                    />
                    <path
                        d="M16 28L22 34L34 20"
                        stroke="url(#verifiedGrad)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.checkmark}
                    />
                </svg>
            </div>

            {/* Badge Content */}
            <div className={styles.content}>
                <div className={styles.titleRow}>
                    <span className={styles.title}>Verified Secure</span>
                    <span className={styles.protectionPill}>{protectionLevel}</span>
                </div>

                <div className={styles.details}>
                    <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Shield Score</span>
                        <span className={styles.detailValue}>{shieldScore}/100</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Protected On</span>
                        <span className={styles.detailValue}>{timestamp}</span>
                    </div>
                </div>

                <div className={styles.protections}>
                    <span className={styles.protectionItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        AI Recognition Blocked
                    </span>
                    <span className={styles.protectionItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Metadata Scrubbed
                    </span>
                    <span className={styles.protectionItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Deepfake Protected
                    </span>
                </div>
            </div>

            {/* Animated Border */}
            <div className={styles.borderGlow}></div>
        </div>
    );
}
