import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Dashboard - CloakSocial',
    description: 'Manage your CloakSocial account, view protection history, and track your Cloak Coins.',
};

// Mock data for demonstration
const userData = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    plan: 'Standard',
    coins: 47,
    protectedPhotos: 156,
    memberSince: 'January 2026',
};

const recentActivity = [
    { id: 1, filename: 'family_photo_2026.jpg', date: '2 hours ago', shieldScore: 98 },
    { id: 2, filename: 'vacation_beach.png', date: 'Yesterday', shieldScore: 96 },
    { id: 3, filename: 'birthday_party.jpg', date: '3 days ago', shieldScore: 97 },
    { id: 4, filename: 'kids_playground.jpg', date: '1 week ago', shieldScore: 95 },
    { id: 5, filename: 'graduation_ceremony.jpg', date: '2 weeks ago', shieldScore: 99 },
];

export default function DashboardPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className="container">
                    {/* Header */}
                    <header className={styles.header}>
                        <div className={styles.headerContent}>
                            <h1 className={styles.greeting}>
                                Welcome back, <span className="text-gradient">{userData.name}</span>
                            </h1>
                            <p className={styles.memberInfo}>Member since {userData.memberSince}</p>
                        </div>
                        <Link href="/protect" className={styles.protectBtn}>
                            🛡️ Protect New Photo
                        </Link>
                    </header>

                    {/* Stats Grid */}
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}>🪙</div>
                            <div className={styles.statContent}>
                                <span className={styles.statValue}>{userData.coins}</span>
                                <span className={styles.statLabel}>Cloak Coins</span>
                            </div>
                            <Link href="/pricing" className={styles.addCoinsBtn}>
                                + Add Coins
                            </Link>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statIcon}>🛡️</div>
                            <div className={styles.statContent}>
                                <span className={styles.statValue}>{userData.protectedPhotos}</span>
                                <span className={styles.statLabel}>Photos Protected</span>
                            </div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statIcon}>⭐</div>
                            <div className={styles.statContent}>
                                <span className={styles.statValue}>{userData.plan}</span>
                                <span className={styles.statLabel}>Current Plan</span>
                            </div>
                            <Link href="/pricing" className={styles.upgradeBtn}>
                                Manage Plan
                            </Link>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statIcon}>📊</div>
                            <div className={styles.statContent}>
                                <span className={styles.statValue}>97</span>
                                <span className={styles.statLabel}>Avg Shield Score</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className={styles.contentGrid}>
                        {/* Immunization History */}
                        <section className={styles.historySection}>
                            <div className={styles.sectionHeader}>
                                <h2>Recent Protection History</h2>
                                <button className={styles.viewAllBtn}>View All</button>
                            </div>
                            <div className={styles.historyList}>
                                {recentActivity.map((item) => (
                                    <div key={item.id} className={styles.historyItem}>
                                        <div className={styles.historyImage}>
                                            <div className={styles.imagePlaceholder}>
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                                    <path d="M21 15l-5-5L5 21" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={styles.historyDetails}>
                                            <span className={styles.historyFilename}>{item.filename}</span>
                                            <span className={styles.historyDate}>{item.date}</span>
                                        </div>
                                        <div className={styles.historyScore}>
                                            <span className={styles.scoreValue}>{item.shieldScore}</span>
                                            <span className={styles.scoreLabel}>Shield Score</span>
                                        </div>
                                        <button className={styles.downloadBtn}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                                <polyline points="7 10 12 15 17 10" />
                                                <line x1="12" y1="15" x2="12" y2="3" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Quick Actions & Stats */}
                        <aside className={styles.sidebar}>
                            {/* Quick Actions */}
                            <div className={styles.quickActions}>
                                <h3>Quick Actions</h3>
                                <Link href="/protect" className={styles.actionBtn}>
                                    <span>📷</span>
                                    Protect New Photo
                                </Link>
                                <Link href="/protect" className={styles.actionBtn}>
                                    <span>📦</span>
                                    Batch Upload
                                </Link>
                                <Link href="/pricing" className={styles.actionBtn}>
                                    <span>🪙</span>
                                    Buy More Coins
                                </Link>
                                <button className={styles.actionBtn}>
                                    <span>👥</span>
                                    Invite Friends (+3 🪙)
                                </button>
                            </div>

                            {/* Coins Summary */}
                            <div className={styles.coinsSummary}>
                                <h3>This Month</h3>
                                <div className={styles.coinsBreakdown}>
                                    <div className={styles.coinRow}>
                                        <span>Plan allocation</span>
                                        <span className={styles.coinPlus}>+60</span>
                                    </div>
                                    <div className={styles.coinRow}>
                                        <span>Rollover</span>
                                        <span className={styles.coinPlus}>+7</span>
                                    </div>
                                    <div className={styles.coinRow}>
                                        <span>Photos protected</span>
                                        <span className={styles.coinMinus}>-20</span>
                                    </div>
                                    <div className={`${styles.coinRow} ${styles.coinTotal}`}>
                                        <span>Balance</span>
                                        <span>{userData.coins}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Protection Tip */}
                            <div className={styles.tipCard}>
                                <span className={styles.tipIcon}>💡</span>
                                <h4>Pro Tip</h4>
                                <p>Enable batch processing to protect multiple photos at once and save time!</p>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
