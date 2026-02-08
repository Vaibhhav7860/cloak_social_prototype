import styles from './GlassCard.module.css';

export default function GlassCard({
    children,
    className = '',
    hover = true,
    glow = false,
    padding = 'md',
    ...props
}) {
    const classes = [
        styles.card,
        hover ? styles.hover : '',
        glow ? styles.glow : '',
        styles[`padding-${padding}`],
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classes} {...props}>
            {glow && <div className={styles.glowEffect}></div>}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}
