import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Shared header for product detail pages (Pintar-*, MMPI2, etc.)
 *
 * Props:
 *  - gradient: CSS background string
 *  - bgColor: page background color (for the bottom curve)
 *  - label: badge text (e.g. "PINTAR-UC")
 *  - labelColor: accent color for the badge letter
 *  - badgeLetter: single char shown in the white badge icon
 *  - title: main heading text
 *  - subtitle: colored subtitle below title
 *  - subtitleColor: color for subtitle
 *  - description: small paragraph below title
 *  - illustration: optional React node rendered on the right
 *  - topPadding: override top padding (default '52px')
 *  - decorators: optional React node for background decorative elements
 */
const PageHeader = ({
    gradient,
    bgColor = '#f5f5f5',
    label,
    labelColor,
    badgeLetter,
    title,
    subtitle,
    subtitleColor = 'rgba(255,255,255,0.8)',
    description,
    illustration,
    topPadding = '52px',
    decorators,
}) => {
    const navigate = useNavigate();

    return (
        <div style={{ position: 'relative', background: gradient, paddingBottom: '40px' }}>
            {decorators}
            <div style={{
                position: 'absolute', bottom: '-1px', left: 0, right: 0, height: '40px',
                background: bgColor, borderRadius: '40px 40px 0 0'
            }} />

            {/* Back button + badge */}
            <div style={{ padding: `${topPadding} 20px 0`, display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}>
                <button
                    onClick={() => navigate(-1)}
                    aria-label="Kembali"
                    style={{
                        background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%',
                        width: '36px', height: '36px', cursor: 'pointer', color: 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        backdropFilter: 'blur(8px)', flexShrink: 0
                    }}
                >
                    <ArrowLeft size={18} />
                </button>
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(255,255,255,0.15)', borderRadius: '20px', padding: '6px 14px',
                    backdropFilter: 'blur(8px)'
                }}>
                    <div style={{
                        width: '24px', height: '24px', borderRadius: '7px', background: 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <span style={{ color: labelColor, fontSize: '11px', fontWeight: '900' }}>{badgeLetter}</span>
                    </div>
                    <span style={{ fontSize: '15px', fontWeight: '900', color: 'white', letterSpacing: '0.5px' }}>{label}</span>
                </div>
            </div>

            {/* Hero content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                style={{ padding: '20px 20px 16px', display: 'flex', alignItems: 'flex-start', gap: '16px', position: 'relative' }}
            >
                <div style={{ flex: 1 }}>
                    <h1 style={{ fontSize: '20px', fontWeight: '900', color: 'white', lineHeight: 1.25, margin: 0 }}>
                        {title}
                        {subtitle && (
                            <span style={{ display: 'block', color: subtitleColor, marginTop: '4px', fontSize: '15px', fontWeight: '700' }}>
                                {subtitle}
                            </span>
                        )}
                    </h1>
                    {description && (
                        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: '10px 0 0' }}>
                            {description}
                        </p>
                    )}
                </div>
                {illustration && (
                    <div style={{
                        width: '120px', flexShrink: 0, height: '130px', borderRadius: '20px',
                        background: 'rgba(255,255,255,0.15)', overflow: 'hidden',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)', padding: '8px',
                        backdropFilter: 'blur(8px)'
                    }}>
                        {illustration}
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default PageHeader;
