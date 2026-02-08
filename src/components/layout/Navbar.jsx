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

    const navLinks = [
        { href: '/#features', label: 'Features' },
        { href: '/#how-it-works', label: 'How It Works' },
        { href: '/pricing', label: 'Pricing' },
    ];

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <nav className={`${styles.nav} container`}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#7dd3fc" />
                                    <stop offset="50%" stopColor="#a78bfa" />
                                    <stop offset="100%" stopColor="#f0abfc" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M16 3L4 9V15C4 23 10 29 16 31C22 29 28 23 28 15V9L16 3Z"
                                stroke="url(#navLogoGrad)"
                                strokeWidth="2"
                                fill="rgba(125, 211, 252, 0.1)"
                            />
                            <path
                                d="M11 15L14.5 18.5L21 12"
                                stroke="url(#navLogoGrad)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <span className={styles.logoText}>
                        Cloak<span className={styles.logoAccent}>Social</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className={styles.navActions}>
                    <Link href="/dashboard" className={styles.loginBtn}>
                        Log In
                    </Link>
                    <Link href="/protect" className={styles.ctaBtn}>
                        <span className={styles.ctaIcon}>🛡️</span>
                        Cloak Photo
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuContent}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className={styles.mobileActions}>
                        <Link
                            href="/dashboard"
                            className={styles.mobileLoginBtn}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Log In
                        </Link>
                        <Link
                            href="/protect"
                            className={styles.mobileCta}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            🛡️ Cloak Photo
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
