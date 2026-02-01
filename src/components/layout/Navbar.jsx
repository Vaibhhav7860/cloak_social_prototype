'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <nav className={`${styles.nav} container`}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2L3 7V12C3 17.5 6.8 22.7 12 24C17.2 22.7 21 17.5 21 12V7L12 2Z"
                                stroke="url(#shieldGradient)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="url(#shieldFill)"
                            />
                            <path
                                d="M9 12L11 14L15 10"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <defs>
                                <linearGradient id="shieldGradient" x1="3" y1="2" x2="21" y2="24">
                                    <stop stopColor="#00d9ff" />
                                    <stop offset="1" stopColor="#8b5cf6" />
                                </linearGradient>
                                <linearGradient id="shieldFill" x1="3" y1="2" x2="21" y2="24">
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

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    <li><Link href="/#features">Features</Link></li>
                    <li><Link href="/#how-it-works">How It Works</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                </ul>

                {/* CTA Buttons */}
                <div className={styles.navActions}>
                    <Link href="/dashboard" className={styles.loginBtn}>
                        Log In
                    </Link>
                    <Link href="/protect" className={styles.ctaBtn}>
                        <span className={styles.ctaBtnIcon}>🛡️</span>
                        Protect Photo
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <ul className={styles.mobileNavLinks}>
                    <li><Link href="/#features" onClick={() => setIsMobileMenuOpen(false)}>Features</Link></li>
                    <li><Link href="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link></li>
                    <li><Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link></li>
                    <li><Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>Log In</Link></li>
                </ul>
                <Link href="/protect" className={styles.mobileCta} onClick={() => setIsMobileMenuOpen(false)}>
                    🛡️ Protect Your Photo
                </Link>
            </div>
        </header>
    );
}
