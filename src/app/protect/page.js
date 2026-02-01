'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import UploadZone from '@/components/protect/UploadZone';
import ProcessingScreen from '@/components/protect/ProcessingScreen';
import ResultsDashboard from '@/components/protect/ResultsDashboard';
import styles from './page.module.css';

export default function ProtectPage() {
    const [stage, setStage] = useState('upload'); // upload, processing, results
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload = (file) => {
        // Create preview URL
        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);
        setStage('processing');
    };

    const handleProcessingComplete = () => {
        setStage('results');
    };

    const handleReset = () => {
        if (imagePreview) {
            URL.revokeObjectURL(imagePreview);
        }
        setImagePreview(null);
        setStage('upload');
    };

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className="container">
                    {/* Page Header */}
                    <div className={styles.header}>
                        <h1 className={styles.title}>
                            {stage === 'upload' && 'Protect Your Photo'}
                            {stage === 'processing' && 'Immunizing...'}
                            {stage === 'results' && 'Protection Complete'}
                        </h1>
                        {stage === 'upload' && (
                            <p className={styles.subtitle}>
                                Upload a photo and we&apos;ll make it invisible to AI facial recognition
                            </p>
                        )}
                    </div>

                    {/* Content Area */}
                    <div className={styles.content}>
                        {stage === 'upload' && (
                            <UploadZone onImageUpload={handleImageUpload} />
                        )}

                        {stage === 'processing' && (
                            <ProcessingScreen
                                imagePreview={imagePreview}
                                onComplete={handleProcessingComplete}
                            />
                        )}

                        {stage === 'results' && (
                            <ResultsDashboard
                                originalImage={imagePreview}
                                onReset={handleReset}
                            />
                        )}
                    </div>

                    {/* Free Credits Notice */}
                    {stage === 'upload' && (
                        <div className={styles.creditsNotice}>
                            <span className={styles.coinsIcon}>🪙</span>
                            <span>You have <strong>5 free Cloak Coins</strong> • 1 coin = 1 protected photo</span>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
