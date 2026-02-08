import Link from 'next/link';
import styles from './GradientButton.module.css';

export default function GradientButton({
    children,
    href,
    variant = 'primary', // primary, secondary, ghost
    size = 'md', // sm, md, lg
    icon,
    iconPosition = 'left',
    fullWidth = false,
    className = '',
    ...props
}) {
    const classes = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        className
    ].filter(Boolean).join(' ');

    const content = (
        <>
            {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
            <span className={styles.text}>{children}</span>
            {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
            {variant === 'primary' && <div className={styles.shine}></div>}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={classes} {...props}>
                {content}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {content}
        </button>
    );
}
