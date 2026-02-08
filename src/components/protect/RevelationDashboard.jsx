'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import DualRealityViewer from './DualRealityViewer';
import styles from './RevelationDashboard.module.css';

export default function RevelationDashboard({ originalUrl, protectedUrl, onReset }) {
    const [badgeEnabled, setBadgeEnabled] = useState(true);
    const [badgePosition, setBadgePosition] = useState('bottom-right');
    const [isDownloading, setIsDownloading] = useState(false);
    const canvasRef = useRef(null);
    const imageRef = useRef(null);
    const shieldScore = 97;

    const metrics = [
        { label: 'Shield Score', value: `${shieldScore}`, unit: '/100', icon: '🛡️' },
        { label: 'AI Confusion', value: '95%', unit: '+', icon: '🤖' },
        { label: 'Visual Change', value: '<0.1', unit: '%', icon: '👁️' },
    ];

    const positions = [
        { id: 'top-left', label: 'Top Left' },
        { id: 'top-right', label: 'Top Right' },
        { id: 'bottom-left', label: 'Bottom Left' },
        { id: 'bottom-right', label: 'Bottom Right' },
    ];

    const handleDownload = () => {
        setIsDownloading(true);

        if (!badgeEnabled) {
            const link = document.createElement('a');
            link.href = protectedUrl;
            link.download = 'cloaked-photo.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setIsDownloading(false);
            return;
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = imageRef.current;

        if (!img) {
            setIsDownloading(false);
            return;
        }

        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);
        drawBadge(ctx, canvas.width, canvas.height, badgePosition);

        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'cloaked-photo-verified.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            setIsDownloading(false);
        }, 'image/jpeg', 0.95);
    };

    const drawBadge = (ctx, w, h, position) => {
        const badgeWidth = Math.min(120, w * 0.25);
        const badgeHeight = badgeWidth * 0.4;
        const padding = 15;
        const radius = 8;

        let x, y;
        switch (position) {
            case 'top-left': x = padding; y = padding; break;
            case 'top-right': x = w - badgeWidth - padding; y = padding; break;
            case 'bottom-left': x = padding; y = h - badgeHeight - padding; break;
            default: x = w - badgeWidth - padding; y = h - badgeHeight - padding;
        }

        ctx.save();
        ctx.beginPath();
        ctx.roundRect(x, y, badgeWidth, badgeHeight, radius);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fill();
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;
        ctx.stroke();

        const iconSize = badgeHeight * 0.6;
        const iconX = x + 8;
        const iconY = y + (badgeHeight - iconSize) / 2;

        ctx.beginPath();
        ctx.moveTo(iconX + iconSize / 2, iconY);
        ctx.lineTo(iconX, iconY + iconSize * 0.25);
        ctx.lineTo(iconX, iconY + iconSize * 0.6);
        ctx.quadraticCurveTo(iconX + iconSize / 2, iconY + iconSize, iconX + iconSize / 2, iconY + iconSize);
        ctx.quadraticCurveTo(iconX + iconSize / 2, iconY + iconSize, iconX + iconSize, iconY + iconSize * 0.6);
        ctx.lineTo(iconX + iconSize, iconY + iconSize * 0.25);
        ctx.closePath();
        ctx.fillStyle = '#10b981';
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(iconX + iconSize * 0.3, iconY + iconSize * 0.5);
        ctx.lineTo(iconX + iconSize * 0.45, iconY + iconSize * 0.65);
        ctx.lineTo(iconX + iconSize * 0.7, iconY + iconSize * 0.35);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        const fontSize = badgeHeight * 0.25;
        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.fillStyle = '#ffffff';
        ctx.textBaseline = 'middle';
        const textX = iconX + iconSize + 6;
        ctx.fillText('CLOAK', textX, y + badgeHeight * 0.35);
        ctx.font = `${fontSize * 0.85}px sans-serif`;
        ctx.fillStyle = '#10b981';
        ctx.fillText('SOCIAL', textX, y + badgeHeight * 0.65);
        ctx.restore();
    };

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

            {/* Protected Photo Preview with Badge */}
            <div className={styles.photoPreview}>
                <div className={styles.imageContainer}>
                    {protectedUrl && (
                        <>
                            <img
                                ref={imageRef}
                                src={protectedUrl}
                                alt="Protected"
                                className={styles.image}
                                crossOrigin="anonymous"
                            />
                            {badgeEnabled && (
                                <div className={`${styles.badgeOverlay} ${styles[badgePosition.replace('-', '')]}`}>
                                    <div className={styles.badge}>
                                        <div className={styles.badgeIcon}>
                                            <svg viewBox="0 0 24 28" fill="none">
                                                <path d="M12 2L2 6V13C2 19.5 7 25 12 27C17 25 22 19.5 22 13V6L12 2Z" fill="#10b981" />
                                                <path d="M8 14L11 17L16 11" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className={styles.badgeText}>
                                            <span className={styles.badgeVerified}>CLOAK</span>
                                            <span className={styles.badgeSecure}>SOCIAL</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    <canvas ref={canvasRef} style={{ display: 'none' }} />
                </div>

                {/* Badge Controls */}
                <div className={styles.badgeControls}>
                    <div className={styles.toggleRow}>
                        <span>Protection Badge</span>
                        <button
                            className={`${styles.toggle} ${badgeEnabled ? styles.on : ''}`}
                            onClick={() => setBadgeEnabled(!badgeEnabled)}
                        >
                            <span className={styles.toggleHandle}></span>
                        </button>
                    </div>
                    {badgeEnabled && (
                        <div className={styles.positionRow}>
                            <span>Position:</span>
                            <div className={styles.positionGrid}>
                                {positions.map((pos) => (
                                    <button
                                        key={pos.id}
                                        className={`${styles.positionBtn} ${badgePosition === pos.id ? styles.active : ''}`}
                                        onClick={() => setBadgePosition(pos.id)}
                                        title={pos.label}
                                    >
                                        <span className={`${styles.dot} ${styles[pos.id.replace('-', '')]}`}></span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Dual Reality Viewer */}
            <DualRealityViewer originalUrl={originalUrl} protectedUrl={protectedUrl} />

            {/* Actions */}
            <div className={styles.actions}>
                <button className={styles.downloadBtn} onClick={handleDownload} disabled={isDownloading}>
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
                            Download {badgeEnabled ? 'with Badge' : 'without Badge'}
                        </>
                    )}
                </button>
                <button className={styles.resetBtn} onClick={onReset}>
                    Cloak Another Photo
                </button>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                <p className={styles.footerText}>
                    Love CloakSocial? <Link href="/pricing" className={styles.upgradeLink}>Upgrade for unlimited protection</Link>
                </p>
            </div>
        </div>
    );
}
