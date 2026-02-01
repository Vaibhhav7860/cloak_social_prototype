'use client';

import { useState, useCallback } from 'react';
import styles from './UploadZone.module.css';

export default function UploadZone({ onImageUpload }) {
    const [isDragActive, setIsDragActive] = useState(false);
    const [error, setError] = useState(null);

    const handleDrag = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setIsDragActive(true);
        } else if (e.type === 'dragleave') {
            setIsDragActive(false);
        }
    }, []);

    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/png', 'image/heic', 'image/heif'];
        const maxSize = 20 * 1024 * 1024; // 20MB

        if (!validTypes.includes(file.type)) {
            return 'Please upload a JPEG, PNG, or HEIC image.';
        }
        if (file.size > maxSize) {
            return 'File size must be less than 20MB.';
        }
        return null;
    };

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
        setError(null);

        const file = e.dataTransfer?.files[0];
        if (file) {
            const validationError = validateFile(file);
            if (validationError) {
                setError(validationError);
                return;
            }
            onImageUpload(file);
        }
    }, [onImageUpload]);

    const handleFileSelect = (e) => {
        setError(null);
        const file = e.target.files?.[0];
        if (file) {
            const validationError = validateFile(file);
            if (validationError) {
                setError(validationError);
                return;
            }
            onImageUpload(file);
        }
    };

    return (
        <div className={styles.uploadContainer}>
            <div
                className={`${styles.uploadZone} ${isDragActive ? styles.active : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <div className={styles.uploadContent}>
                    {/* Shield Icon */}
                    <div className={styles.iconWrapper}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M12 8v4" />
                            <path d="M12 16h.01" />
                        </svg>
                    </div>

                    {/* Upload Text */}
                    <h3 className={styles.title}>
                        {isDragActive ? 'Drop your photo here!' : 'Drag & drop your photo'}
                    </h3>
                    <p className={styles.subtitle}>
                        or click to select from your device
                    </p>

                    {/* File Input */}
                    <label className={styles.uploadButton}>
                        <input
                            type="file"
                            accept="image/jpeg,image/png,image/heic,image/heif"
                            onChange={handleFileSelect}
                            className={styles.fileInput}
                        />
                        <span className={styles.buttonIcon}>📷</span>
                        Choose Photo
                    </label>

                    {/* Supported Formats */}
                    <p className={styles.formats}>
                        Supports JPEG, PNG, HEIC • Max 20MB
                    </p>

                    {/* Error Message */}
                    {error && (
                        <div className={styles.error}>
                            <span>⚠️</span> {error}
                        </div>
                    )}
                </div>

                {/* Animated Border */}
                <div className={styles.borderGlow}></div>
            </div>

            {/* Trust Signals */}
            <div className={styles.trustSignals}>
                <div className={styles.trustItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Your photo is processed securely</span>
                </div>
                <div className={styles.trustItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    </svg>
                    <span>Photos are never stored</span>
                </div>
                <div className={styles.trustItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    <span>256-bit encryption</span>
                </div>
            </div>
        </div>
    );
}
