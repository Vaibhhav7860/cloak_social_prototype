'use client';

import styles from './Features.module.css';

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
        title: 'Adversarial Protection',
        description: 'Military-grade perturbation technology that confuses all major facial recognition AI systems.',
        highlight: '95%+ Confusion Rate',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
        title: 'Invisible to Humans',
        description: 'Changes are completely imperceptible. Your photos look exactly the same to friends and family.',
        highlight: '0.1% Visual Change',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
        ),
        title: 'Complete Metadata Removal',
        description: 'All EXIF data, GPS coordinates, and identifying information stripped from your photos.',
        highlight: '100% Data Scrubbed',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        title: 'Lightning Fast',
        description: 'Advanced optimization delivers protection in seconds, not minutes. No waiting around.',
        highlight: '< 15 Seconds',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
        ),
        title: 'Easy Download',
        description: 'Download your protected photos in original quality. JPEG, PNG, and HEIC supported.',
        highlight: 'Full Quality',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
            </svg>
        ),
        title: 'Visual Proof',
        description: "See exactly how your photo confuses AI with our built-in AI-Buster demonstration.",
        highlight: 'Trust Verification',
    },
];

export default function Features() {
    return (
        <section className={styles.features} id="features">
            <div className="container">
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <span className={styles.eyebrow}>Why CloakSocial</span>
                    <h2 className={styles.title}>
                        Complete Protection for Your <span className="text-gradient">Digital Identity</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Our advanced adversarial technology makes your photos invisible to AI while
                        remaining perfectly normal for human viewing.
                    </p>
                </div>

                {/* Features Grid */}
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDescription}>{feature.description}</p>
                            <span className={styles.highlight}>{feature.highlight}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
