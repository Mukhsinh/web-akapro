import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';

const PintarMR = () => {
    const [waNumber, setWaNumber] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchWhatsappNumber();
    }, []);

    const fetchWhatsappNumber = async () => {
        try {
            const { data, error } = await supabase
                .from('customer_service')
                .select('nomor')
                .eq('status', 'aktif')
                .limit(1);

            if (error) throw error;
            if (data && data.length > 0) {
                let num = data[0].nomor.replace(/\D/g, '');
                if (num.startsWith('0')) {
                    num = '62' + num.substring(1);
                }
                setWaNumber(num);
            }
        } catch (error) {
            console.error('Error fetching WA number:', error);
            setWaNumber('6285211516088');
        }
    };

    const handleDemo = () => {
        const text = "Halo AKAPRO Indonesia, saya ingin mengajukan demo untuk aplikasi Manajemen Resiko Terintegrasi.";
        const targetNumber = waNumber || '6285211516088';
        window.open(`https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`, '_blank');
    };

    // Staggered animation wrapper
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    // Light Blue theme palette
    const colors = {
        bg: '#eff6ff',        // blue-50
        cardBg: '#ffffff',
        textDark: '#1e3a8a',  // blue-900
        textMuted: '#475569', // slate-600
        accentBlue: '#2563eb',// blue-600
        accentLight: '#bfdbfe',// blue-200
        orangeGrad: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
    };

    return (
        <div style={{ background: colors.bg, minHeight: '100vh', fontFamily: 'Inter, sans-serif', paddingBottom: '60px', overflowX: 'hidden', position: 'relative' }}>

            {/* Background Decorative Blobs */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(191, 219, 254, 0.6) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />
            <div style={{ position: 'absolute', top: '30%', right: '-20%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }} />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ position: 'relative', zIndex: 1, padding: '24px 20px', maxWidth: '600px', margin: '0 auto' }}
            >
                {/* Header Logo equivalent */}
                <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: colors.accentBlue, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'white', fontSize: '14px', fontWeight: '900' }}>MR</span>
                    </div>
                    <span style={{ fontSize: '16px', fontWeight: '800', color: colors.textDark, letterSpacing: '0.5px' }}>PINTAR-MR</span>
                </motion.div>

                {/* Main Hero Header */}
                <motion.h1 variants={itemVariants} style={{ fontSize: '28px', fontWeight: '900', color: colors.textDark, lineHeight: 1.2, marginBottom: '24px' }}>
                    Sistem Manajemen Resiko Terintegrasi: Menyelaraskan Renstra & Balanced Scorecard
                </motion.h1>

                {/* Top Main Image */}
                <motion.div variants={itemVariants} style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '32px' }}>
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ width: '90%', borderRadius: '24px', position: 'relative' }}
                    >
                        {/* We use hue-rotate to change the generated purple image to blue to perfectly match request */}
                        <img src="/images/3d/mr_hero.png" alt="Dashboard Terintegrasi" style={{ width: '100%', height: 'auto', objectFit: 'contain', filter: 'hue-rotate(-50deg)', mixBlendMode: 'multiply' }} />
                    </motion.div>
                </motion.div>

                {/* Latar Belakang Card (Left Aligned Poster Style) */}
                <motion.div variants={itemVariants} style={{ width: '85%', background: colors.cardBg, borderRadius: '24px', padding: '24px', boxShadow: '0 15px 35px rgba(37,99,235,0.08)', marginBottom: '32px', border: `1px solid ${colors.accentLight}`, position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-40px', right: '-20px', width: '120px' }}>
                        <motion.img
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            src="/images/3d/mr_latar.png" alt="Latar Belakang" style={{ width: '100%', filter: 'hue-rotate(-50deg)', mixBlendMode: 'multiply' }}
                        />
                    </div>
                    <h2 style={{ fontSize: '18px', fontWeight: '900', color: colors.textDark, marginBottom: '12px', marginTop: '40px', textTransform: 'uppercase' }}>
                        Latar Belakang
                    </h2>
                    <p style={{ fontSize: '14px', color: colors.textMuted, lineHeight: 1.6, margin: 0 }}>
                        Tantangan data resiko yang terfragmentasi. Aplikasi kami mengintegrasikan manajemen resiko dengan perencanaan strategis untuk mencapai target organisasi.
                    </p>
                </motion.div>

                {/* Manfaat Integrasi Card (Right Aligned Poster Style) */}
                <motion.div variants={itemVariants} style={{ width: '85%', marginLeft: 'auto', background: colors.cardBg, borderRadius: '24px', padding: '24px', boxShadow: '0 15px 35px rgba(37,99,235,0.08)', marginBottom: '32px', border: `1px solid ${colors.accentLight}`, position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-50px', left: '-20px', width: '120px' }}>
                        <motion.img
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            src="/images/3d/manfaat.png" alt="Manfaat" style={{ width: '100%', filter: 'hue-rotate(60deg)', mixBlendMode: 'multiply' }}
                        />
                    </div>
                    <h2 style={{ fontSize: '18px', fontWeight: '900', color: colors.textDark, marginBottom: '12px', marginTop: '50px', textTransform: 'uppercase' }}>
                        Manfaat Integrasi
                    </h2>
                    <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '14px', color: colors.textMuted, lineHeight: 1.6, listStyleType: 'disc' }}>
                        <li style={{ paddingBottom: '6px' }}>Visibilitas Resiko Strategis Secara Real-time.</li>
                        <li style={{ paddingBottom: '6px' }}>Penyelarasan Mitigasi dengan Tujuan Renstra.</li>
                        <li style={{ paddingBottom: '6px' }}>Performa BSC Berbasis Data Resiko.</li>
                        <li>Keputusan Manajemen yang Lebih Akurat & Proaktif.</li>
                    </ul>
                </motion.div>

                {/* Custom SVG Pathway Infographic Component */}
                <motion.div variants={itemVariants} style={{ width: '100%', background: colors.cardBg, borderRadius: '24px', padding: '24px', boxShadow: '0 15px 35px rgba(37,99,235,0.08)', marginBottom: '32px', border: `1px solid ${colors.accentLight}` }}>
                    <div style={{ display: 'inline-block', background: colors.accentBlue, color: 'white', fontWeight: '800', fontSize: '12px', padding: '4px 12px', borderRadius: '12px', marginBottom: '16px', transform: 'rotate(-2deg)' }}>
                        Clinical Pathway
                    </div>

                    {/* SVG Diagram imitating the mock logic */}
                    <div style={{ width: '100%', height: '140px', background: '#eff6ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                        <svg width="100%" height="100%" viewBox="0 0 300 120" style={{ position: 'absolute' }}>
                            <path d="M 50 60 Q 100 20 150 60 T 250 60" fill="none" stroke="#60a5fa" strokeWidth="4" strokeDasharray="6,6" />
                            <path d="M 50 60 Q 100 100 150 60 T 250 60" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="6,6" />
                        </svg>

                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', zIndex: 1 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                <div style={{ fontSize: '32px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}>👤</div>
                                <span style={{ fontSize: '10px', fontWeight: '800', color: colors.textDark }}>Diagnosis</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                <div style={{ fontSize: '32px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}>🧪</div>
                                <span style={{ fontSize: '10px', fontWeight: '800', color: colors.textDark }}>Tests</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                <div style={{ fontSize: '32px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}>🛡️</div>
                                <span style={{ fontSize: '10px', fontWeight: '800', color: colors.textDark }}>Procedure</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                <div style={{ fontSize: '32px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}>📈</div>
                                <span style={{ fontSize: '10px', fontWeight: '800', color: colors.textDark }}>Recovery</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Target Pengguna (Bottom Wide Card) */}
                <motion.div variants={itemVariants} style={{ width: '100%', background: colors.cardBg, borderRadius: '24px', padding: '24px', boxShadow: '0 15px 35px rgba(37,99,235,0.08)', marginBottom: '40px', border: `1px solid ${colors.accentLight}` }}>
                    <div style={{ position: 'relative', width: '100%', height: '140px', background: '#eff6ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', overflow: 'hidden' }}>
                        {/* We use target image and hue-rotate to blue so it matches */}
                        <motion.img animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            src="/images/3d/target.png" alt="Target Pengguna" style={{ height: '120%', filter: 'hue-rotate(60deg)', mixBlendMode: 'multiply' }} />
                    </div>

                    <h2 style={{ fontSize: '18px', fontWeight: '900', color: colors.textDark, marginBottom: '12px', textTransform: 'uppercase' }}>
                        Target Pengguna
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div style={{ background: '#eff6ff', padding: '12px', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: '800', color: colors.textDark, margin: '0 0 4px 0' }}>Risk Officer</h3>
                            <p style={{ fontSize: '11px', color: colors.textMuted, margin: 0 }}>Identifikasi risiko rutin.</p>
                        </div>
                        <div style={{ background: '#eff6ff', padding: '12px', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: '800', color: colors.textDark, margin: '0 0 4px 0' }}>Strategic Planner</h3>
                            <p style={{ fontSize: '11px', color: colors.textMuted, margin: 0 }}>Penyelarasan Renstra.</p>
                        </div>
                        <div style={{ gridColumn: 'span 2', background: '#eff6ff', padding: '12px', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: '800', color: colors.textDark, margin: '0 0 4px 0' }}>Hospital Administrator, Komite Medik, Bagian SIMRS.</h3>
                        </div>
                    </div>
                </motion.div>

                {/* CTA BUTTON */}
                <motion.div variants={itemVariants} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleDemo}
                        style={{
                            width: '100%',
                            padding: '18px 20px',
                            borderRadius: '100px',
                            background: colors.orangeGrad,
                            color: 'white',
                            fontWeight: '900',
                            fontSize: '18px',
                            border: '4px solid rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 15px 30px rgba(234, 88, 12, 0.4)',
                            zIndex: 2,
                            letterSpacing: '1px'
                        }}>
                        [ AJUKAN DEMO SEKARANG ]
                    </motion.button>

                    {/* Animated Finger Cursor (CSS Emoji) */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                        style={{ position: 'absolute', bottom: '-25px', right: '30px', fontSize: '40px', zIndex: 3, filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.2))' }}
                    >
                        👆🏻
                    </motion.div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default PintarMR;
