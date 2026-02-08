'use client';

import { useState, useCallback } from 'react';
import styles from './CloakingChamber.module.css';

export default function CloakingChamber({ onUpload }) {
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState(null);

    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/png', 'image/heic', 'image/webp'];
        const maxSize = 20 * 1024 * 1024; // 20MB

        if (!validTypes.includes(file.type.toLowerCase())) {
            return 'Please upload a JPEG, PNG, HEIC, or WebP image.';
        }
        if (file.size > maxSize) {
            return 'File size must be under 20MB.';
        }
        return null;
    };

    const handleFile = useCallback((file) => {
        setError(null);
        const validationError = validateFile(file);
        if (validationError) {
            setError(validationError);
            return;
        }
        onUpload(file);
    }, [onUpload]);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    }, [handleFile]);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleInputChange = useCallback((e) => {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
    }, [handleFile]);

    return (
        <div className={styles.chamber}>
            {/* Background Glow */}
            <div className={styles.glowEffect}></div>

            {/* Chamber Header */}
            <div className={styles.header}>
                <div className={styles.portalIcon}>
                    <svg viewBox="0 0 48 56" fill="none">
                        <defs>
                            <linearGradient id="chamberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#7dd3fc" />
                                <stop offset="50%" stopColor="#a78bfa" />
                                <stop offset="100%" stopColor="#f0abfc" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M24 4L4 12V26C4 40 14 50 24 54C34 50 44 40 44 26V12L24 4Z"
                            stroke="url(#chamberGrad)"
                            strokeWidth="2"
                            fill="rgba(125, 211, 252, 0.05)"
                        />
                    </svg>
                </div>
                <h2 className={styles.title}>Cloaking Chamber</h2>
                <p className={styles.subtitle}>Your photo enters the protection process</p>
            </div>

            {/* Drop Zone */}
            <div
                className={`${styles.dropZone} ${isDragging ? styles.dragging : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                <div className={styles.dropContent}>
                    <div className={styles.uploadIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                    </div>
                    <p className={styles.dropText}>
                        <span className={styles.dropHighlight}>Drag & drop</span> your photo here
                    </p>
                    <p className={styles.dropOr}>or</p>
                    <label className={styles.browseBtn}>
                        <input
                            type="file"
                            accept="image/jpeg,image/png,image/heic,image/webp"
                            onChange={handleInputChange}
                            hidden
                        />
                        Browse Files
                    </label>
                    <p className={styles.fileHint}>JPEG, PNG, HEIC, WebP • Max 20MB</p>
                </div>

                {/* Animated Border */}
                <div className={styles.animatedBorder}></div>

                {/* Portal Particles */}
                <div className={styles.particles}>
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className={styles.particle} style={{ '--i': i }}></div>
                    ))}
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className={styles.error}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{error}</span>
                </div>
            )}

            {/* Trust Signals */}
            <div className={styles.trustSignals}>
                <div className={styles.trustItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    <span>Client-side processing</span>
                </div>
                <div className={styles.trustItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>8-15 seconds</span>
                </div>
                <div className={styles.trustItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    </svg>
                    <span>Auto-deleted after</span>
                </div>
            </div>
        </div>
    );
}
