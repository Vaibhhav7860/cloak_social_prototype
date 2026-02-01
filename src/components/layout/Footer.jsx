import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContent} container`}>
                {/* Main Footer */}
                <div className={styles.footerGrid}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className={styles.logo}>
                            <div className={styles.logoIcon}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2L3 7V12C3 17.5 6.8 22.7 12 24C17.2 22.7 21 17.5 21 12V7L12 2Z"
                                        stroke="url(#footerShieldGradient)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="url(#footerShieldFill)"
                                    />
                                    <defs>
                                        <linearGradient id="footerShieldGradient" x1="3" y1="2" x2="21" y2="24">
                                            <stop stopColor="#00d9ff" />
                                            <stop offset="1" stopColor="#8b5cf6" />
                                        </linearGradient>
                                        <linearGradient id="footerShieldFill" x1="3" y1="2" x2="21" y2="24">
                                            <stop stopColor="rgba(0, 217, 255, 0.2)" />
                                            <stop offset="1" stopColor="rgba(139, 92, 246, 0.2)" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className={styles.logoText}>
                                Cloak<span className={styles.logoAccent}>Social</span>
                            </span>
                        </Link>
                        <p className={styles.brandDescription}>
                            Protecting personal photos from AI surveillance with invisible, military-grade adversarial technology.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" aria-label="Twitter" className={styles.socialLink}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
                            </a>
                            <a href="#" aria-label="GitHub" className={styles.socialLink}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className={styles.linksColumn}>
                        <h4>Product</h4>
                        <ul>
                            <li><Link href="/protect">Protect Photo</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/#features">Features</Link></li>
                            <li><Link href="/#how-it-works">How It Works</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">API Reference</a></li>
                            <li><a href="#">Help Center</a></li>
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Press Kit</a></li>
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">GDPR</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} CloakSocial. All rights reserved.
                    </p>
                    <div className={styles.trustBadges}>
                        <span className={styles.badge}>🔒 256-bit Encryption</span>
                        <span className={styles.badge}>🛡️ No Photo Storage</span>
                        <span className={styles.badge}>✓ GDPR Compliant</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
