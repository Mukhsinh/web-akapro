import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MMPI2Online = () => {
    const navigate = useNavigate();
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
        const text = "Halo AKAPRO Indonesia, saya ingin mengajukan demo untuk aplikasi MMPI-2 Online.";
        const targetNumber = waNumber || '6285211516088';
        window.open(`https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const containerStyle = {
        background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)', // Light Gray Dominant Gradient
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif',
        padding: '0 0 80px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#0f172a',
        position: 'relative',
        overflow: 'hidden'
    };

    const posterInnerWidth = {
        width: '100%',
        maxWidth: '900px',
        position: 'relative',
        zIndex: 2,
    };

    // We'll use a deep Teal accent color for the contrast blocks, ensuring the page feels medical but gray dominant
    const accentColor = '#0f766e';
    const accentColorLight = '#5eead4';

    return (
        <div style={containerStyle}>
            {/* INJECTED MULTI-DEVICE RESPONSIVE STYLE SHEET */}
            <style>{`
                .poster-padding { padding: 30px 20px; }
                .title-text { font-size: 22px; }
                .hero-image { width: 100%; max-width: 500px; object-fit: contain; transform: scale(1.05); }
                .info-grid { grid-template-columns: 1fr !important; gap: 20px !important; margin-bottom: 30px !important; }
                .target-card { background: white; border-radius: 24px; padding: 24px; border: 1px solid rgba(148, 163, 184, 0.7); box-shadow: 0 10px 40px rgba(71, 85, 105, 0.05); }
                .cta-button { font-size: 15px !important; padding: 18px !important; border-radius: 30px !important; }
            
                @media (min-width: 768px) {
                    .poster-padding { padding: 60px 40px; }
                    .title-text { font-size: 32px; }
                    .info-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; margin-bottom: 50px !important; }
                    .cta-button { font-size: 18px !important; padding: 20px !important; }
                }
            `}</style>

            {/* Nav Back Button */}
            <div style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 10 }}>
                <button onClick={() => navigate(-1)} style={{ background: 'white', border: '1px solid #cbd5e1', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    <ArrowLeft size={20} />
                </button>
            </div>

            {/* Seamless Background Ambient Glows */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(148, 163, 184, 0.2) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }} />
            <div style={{ position: 'absolute', top: '40%', right: '-15%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(15, 118, 110, 0.08) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />

            {/* Grid Pattern Overlay for Poster Aesthetic */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0H0v30h30V0zM29 1H1v28h28V1z\' fill=\'%2364748b\' fill-opacity=\'0.04\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', zIndex: 1, maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' }} />

            <div style={posterInnerWidth} className="poster-padding">
                {/* Header Logo */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #475569 0%, #334155 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(71, 85, 105, 0.2)' }}>
                        <motion.img
                            animate={{ y: [-2, 2, -2] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Brain.png"
                            style={{ width: '28px' }}
                        />
                    </div>
                    <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#334155', margin: 0, letterSpacing: '0.5px' }}>
                        MMPI-2 Online
                    </h1>
                </motion.div>

                {/* Main Title Section */}
                <motion.h2 className="title-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }} style={{ fontWeight: '900', lineHeight: 1.25, color: '#0f172a', marginBottom: '24px', maxWidth: '100%' }}>
                    Sistem MMPI-2 Online Terintegrasi: <br />
                    <span style={{ color: accentColor }}>Evaluasi Kepribadian Akurat & Pelaporan Real-time</span>
                </motion.h2>

                {/* STATIC HERO IMAGE (REPLACING CSS DIORAMA) */}
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ width: '100%', marginBottom: '40px', display: 'flex', justifyContent: 'center', filter: 'drop-shadow(0 20px 30px rgba(15, 118, 110, 0.15))' }}>
                    <img src="/images/3d/hero.png" alt="MMPI-2 Online Hero" className="hero-image" style={{ filter: 'grayscale(1) brightness(0.9) sepia(0.2) hue-rotate(140deg) saturate(1.5)' }} />
                </motion.div>

                {/* Middle Info Grid */}
                <div className="info-grid" style={{ display: 'grid' }}>
                    {/* Latar Belakang */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: 'white', borderRadius: '32px', padding: '40px', boxShadow: '0 20px 50px rgba(71,85,105,0.05)', position: 'relative' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <motion.img
                                animate={{ rotate: [-10, 10, -10] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png"
                                style={{ width: '36px' }}
                            />
                            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: 0 }}>LATAR BELAKANG</h3>
                        </div>
                        <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                            Tantangan data penilaian yang terfragmentasi. Aplikasi kami mengintegrasikan evaluasi MMPI-2 dengan laporan komprehensif untuk mencapai diagnostik yang berkelanjutan.
                        </p>
                    </motion.div>

                    {/* Manfaat Integrasi */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: `linear-gradient(135deg, ${accentColor} 0%, #115e59 100%)`, borderRadius: '32px', padding: '40px', color: 'white', boxShadow: '0 20px 50px rgba(15,118,110,0.2)' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '800', margin: '0 0 24px 0' }}>MANFAAT INTEGRASI</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                'Evaluasi Kepribadian Online Terstandardisasi.',
                                'Penyelarasan Diagnosis dengan Protokol Klinis.',
                                'Peningkatan Kepatuhan Standar Medis.',
                                'Analisis Performa yang Lebih Presisi.'
                            ].map((item, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', fontWeight: '500' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: accentColorLight, marginTop: '6px', boxShadow: `0 0 10px ${accentColorLight}` }}></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Target Pengguna Section (Matching Pintar UC style) */}
                <div style={{ padding: '0 0 40px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="target-card"
                    >
                        <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                            <img src="/images/3d/target.png" alt="Target Pengguna Avatars" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>

                        <h3 style={{ fontSize: '14px', fontWeight: '900', color: accentColor, letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 16px', textAlign: 'center' }}>TARGET PENGGUNA</h3>

                        <p style={{ textAlign: 'center', fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: '600' }}>
                            Risk/KPI Officer, Manajer Program,<br />Hospital Administrator.
                        </p>
                    </motion.div>
                </div>

                {/* --- MOCKUP CTA BUTTON (RELATIVE FLOW) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
                    style={{ position: 'relative', marginTop: '24px', padding: '0 20px', zIndex: 10 }}
                >
                    <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDemo}
                            className="cta-button"
                            style={{
                                width: '100%',
                                background: 'linear-gradient(to right, #fb923c, #ea580c)',
                                color: 'white', fontWeight: '900',
                                border: '2px solid rgba(255,255,255,0.4)', cursor: 'pointer',
                                letterSpacing: '1px', textTransform: 'uppercase',
                                boxShadow: '0 12px 30px rgba(234, 88, 12, 0.4), inset 0 -4px 10px rgba(0,0,0,0.1)',
                                position: 'relative', overflow: 'hidden'
                            }}
                        >
                            {/* Reflection spec */}
                            <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '30%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)', borderRadius: '100px 100px 0 0' }} />
                            Ajukan Demo
                        </motion.button>

                        {/* Finger Cursor Animation overlaying button slightly */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: [0, -10, 0], opacity: 1 }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                            style={{ position: 'absolute', bottom: '-15px', right: '10%', fontSize: '32px', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))', pointerEvents: 'none' }}
                        >
                            👆
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default MMPI2Online;
