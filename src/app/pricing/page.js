import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Pricing - CloakSocial',
    description: 'Choose your CloakSocial plan. Protect your photos from AI with flexible pricing tiers and Cloak Coins.',
};

const plans = [
    {
        name: 'Free',
        price: '₹0',
        period: 'forever',
        coins: 5,
        description: 'Try CloakSocial with free credits',
        features: [
            '5 Cloak Coins (one-time)',
            '3 free photos/month',
            'Basic protection',
            'Standard processing speed',
            'Email support',
        ],
        cta: 'Get Started Free',
        popular: false,
    },
    {
        name: 'Basic',
        price: '₹999',
        period: '/month',
        coins: 25,
        description: 'For individuals protecting family photos',
        features: [
            '25 Cloak Coins/month',
            '30-day immunization history',
            'Priority processing',
            'All protection features',
            'Email support',
        ],
        cta: 'Start Basic',
        popular: false,
    },
    {
        name: 'Standard',
        price: '₹1,499',
        period: '/month',
        coins: 60,
        description: 'For active social media users',
        features: [
            '60 Cloak Coins/month',
            'Batch processing (up to 10)',
            'Protection presets',
            '90-day history',
            'Priority support',
            '10 coins rollover',
        ],
        cta: 'Start Standard',
        popular: true,
    },
    {
        name: 'Advanced',
        price: '₹1,999',
        period: '/month',
        coins: 150,
        description: 'For professionals and influencers',
        features: [
            '150 Cloak Coins/month',
            'Batch processing (up to 20)',
            '4K image support',
            'Analytics dashboard',
            'Unlimited history',
            'Live chat support',
            '30 coins rollover',
        ],
        cta: 'Start Advanced',
        popular: false,
    },
];

const coinEarning = [
    { action: 'Sign up', coins: '+5', icon: '🎁' },
    { action: 'Refer a friend', coins: '+3', icon: '👥' },
    { action: 'Share on social', coins: '+1', icon: '📱' },
    { action: 'Submit feedback', coins: '+2', icon: '💬' },
    { action: 'Annual subscription', coins: '+20', icon: '🎉' },
];

export default function PricingPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className="container">
                    {/* Header */}
                    <header className={styles.header}>
                        <span className={styles.eyebrow}>Pricing</span>
                        <h1 className={styles.title}>
                            Simple, Transparent <span className="text-gradient">Pricing</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Choose the plan that fits your needs. All plans include our core protection technology.
                        </p>
                    </header>

                    {/* Pricing Grid */}
                    <div className={styles.pricingGrid}>
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
                            >
                                {plan.popular && (
                                    <span className={styles.popularBadge}>Most Popular</span>
                                )}
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.planName}>{plan.name}</h3>
                                    <p className={styles.planDescription}>{plan.description}</p>
                                </div>
                                <div className={styles.priceWrapper}>
                                    <span className={styles.price}>{plan.price}</span>
                                    <span className={styles.period}>{plan.period}</span>
                                </div>
                                <div className={styles.coinsIncluded}>
                                    <span className={styles.coinIcon}>🪙</span>
                                    <span>{plan.coins} Cloak Coins{plan.period !== 'forever' ? '/month' : ''}</span>
                                </div>
                                <ul className={styles.featureList}>
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <span className={styles.checkIcon}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/protect"
                                    className={`${styles.ctaBtn} ${plan.popular ? styles.primary : ''}`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Cloak Coins Explainer */}
                    <section className={styles.coinsSection}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.coinEmoji}>🪙</span>
                            How Cloak Coins Work
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Cloak Coins are your credits for protecting photos. 1 Coin = 1 Protected Photo.
                        </p>

                        <div className={styles.coinsGrid}>
                            {/* Earning Coins */}
                            <div className={styles.coinsCard}>
                                <h3>Earn Coins</h3>
                                <ul className={styles.coinsList}>
                                    {coinEarning.map((item, idx) => (
                                        <li key={idx}>
                                            <span className={styles.coinAction}>
                                                <span>{item.icon}</span>
                                                {item.action}
                                            </span>
                                            <span className={styles.coinAmount}>{item.coins}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Spending Coins */}
                            <div className={styles.coinsCard}>
                                <h3>Spend Coins</h3>
                                <ul className={styles.coinsList}>
                                    <li>
                                        <span className={styles.coinAction}>
                                            <span>🖼️</span>
                                            Standard photo protection
                                        </span>
                                        <span className={styles.coinAmount}>1 coin</span>
                                    </li>
                                    <li>
                                        <span className={styles.coinAction}>
                                            <span>📦</span>
                                            Batch processing (per photo)
                                        </span>
                                        <span className={styles.coinAmount}>1 coin</span>
                                    </li>
                                    <li>
                                        <span className={styles.coinAction}>
                                            <span>🎬</span>
                                            Video frame (coming soon)
                                        </span>
                                        <span className={styles.coinAmount}>5 coins</span>
                                    </li>
                                    <li>
                                        <span className={styles.coinAction}>
                                            <span>⚡</span>
                                            Priority processing
                                        </span>
                                        <span className={styles.coinAmount}>+1 coin</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className={styles.faqSection}>
                        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>What happens to my unused coins?</h3>
                                <p>Standard and Advanced plans allow coin rollover. Free and Basic plans reset monthly.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can I upgrade or downgrade anytime?</h3>
                                <p>Yes! You can change your plan at any time. Pro-rated credits will be applied.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you store my photos?</h3>
                                <p>No. All photos are deleted within 1 hour of processing. We never store your images.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Is there a money-back guarantee?</h3>
                                <p>Yes! We offer a 7-day money-back guarantee on all paid plans.</p>
                            </div>
                        </div>
                    </section>

                    {/* Enterprise CTA */}
                    <section className={styles.enterpriseSection}>
                        <div className={styles.enterpriseCard}>
                            <div className={styles.enterpriseContent}>
                                <h2>Need a Custom Plan?</h2>
                                <p>
                                    For enterprises, agencies, or high-volume users, we offer custom pricing
                                    with white-label options, SSO, and dedicated support.
                                </p>
                            </div>
                            <a href="mailto:enterprise@cloaksocial.com" className={styles.enterpriseBtn}>
                                Contact Sales
                            </a>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
