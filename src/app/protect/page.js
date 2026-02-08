'use client';

import { useState, useCallback } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CloakingChamber from '@/components/protect/CloakingChamber';
import MetamorphosisScreen from '@/components/protect/MetamorphosisScreen';
import RevelationDashboard from '@/components/protect/RevelationDashboard';
import styles from './page.module.css';

export default function ProtectPage() {
    const [stage, setStage] = useState('upload'); // 'upload', 'processing', 'complete'
    const [uploadedFile, setUploadedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleUpload = useCallback((file) => {
        setUploadedFile(file);
        const url = URL.createObjectURL(file);
        setImageUrl(url);
        setStage('processing');
    }, []);

    const handleProcessingComplete = useCallback(() => {
        setStage('complete');
    }, []);

    const handleReset = useCallback(() => {
        if (imageUrl) {
            URL.revokeObjectURL(imageUrl);
        }
        setUploadedFile(null);
        setImageUrl(null);
        setStage('upload');
    }, [imageUrl]);

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {/* Background Effects */}
                <div className={styles.bgEffects}>
                    <div className={styles.gradientOrb1}></div>
                    <div className={styles.gradientOrb2}></div>
                    <div className={styles.gridOverlay}></div>
                </div>

                <div className={styles.container}>
                    {/* Stage Indicator */}
                    <div className={styles.stageIndicator}>
                        <div className={`${styles.stageStep} ${stage === 'upload' ? styles.active : stage !== 'upload' ? styles.completed : ''}`}>
                            <span className={styles.stepNumber}>1</span>
                            <span className={styles.stepLabel}>Upload</span>
                        </div>
                        <div className={styles.stepConnector}>
                            <div className={`${styles.connectorFill} ${stage !== 'upload' ? styles.active : ''}`}></div>
                        </div>
                        <div className={`${styles.stageStep} ${stage === 'processing' ? styles.active : stage === 'complete' ? styles.completed : ''}`}>
                            <span className={styles.stepNumber}>2</span>
                            <span className={styles.stepLabel}>Cloaking</span>
                        </div>
                        <div className={styles.stepConnector}>
                            <div className={`${styles.connectorFill} ${stage === 'complete' ? styles.active : ''}`}></div>
                        </div>
                        <div className={`${styles.stageStep} ${stage === 'complete' ? styles.active : ''}`}>
                            <span className={styles.stepNumber}>3</span>
                            <span className={styles.stepLabel}>Protected</span>
                        </div>
                    </div>

                    {/* Dynamic Content */}
                    <div className={styles.content}>
                        {stage === 'upload' && (
                            <CloakingChamber onUpload={handleUpload} />
                        )}

                        {stage === 'processing' && (
                            <MetamorphosisScreen
                                imageUrl={imageUrl}
                                onComplete={handleProcessingComplete}
                            />
                        )}

                        {stage === 'complete' && (
                            <RevelationDashboard
                                originalUrl={imageUrl}
                                protectedUrl={imageUrl}
                                onReset={handleReset}
                            />
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
