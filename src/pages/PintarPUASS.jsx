import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';

const PintarPUASS = () => {
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
        const text = "Halo AKAPRO Indonesia, saya ingin mengajukan demo untuk aplikasi PINTAR PUASS.";
        const targetNumber = waNumber || '6285211516088';
        window.open(`https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const containerStyle = {
        background: 'linear-gradient(180deg, #fffbf7 0%, #ffedd5 100%)',
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif',
        padding: '0 0 80px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#1e293b',
        position: 'relative',
        overflow: 'hidden'
    };

    const posterInnerWidth = {
        width: '100%',
        maxWidth: '900px',
        position: 'relative',
        zIndex: 2,
    };

    return (
        <div style={containerStyle}>
            {/* INJECTED MULTI-DEVICE RESPONSIVE STYLE SHEET */}
            <style>{`
                .poster-padding { padding: 30px 20px; }
                .title-text { font-size: 22px; }
                .hero-image { width: 100%; max-width: 500px; object-fit: contain; transform: scale(1.05); }
                .info-grid { grid-template-columns: 1fr !important; gap: 20px !important; margin-bottom: 30px !important; }
                .target-card { background: white; border-radius: 24px; padding: 24px; border: 1px solid rgba(253, 186, 116, 0.7); box-shadow: 0 10px 40px rgba(234, 88, 12, 0.06); }
                .cta-button { font-size: 15px !important; padding: 18px !important; border-radius: 30px !important; }
            
                @media (min-width: 768px) {
                    .poster-padding { padding: 60px 40px; }
                    .title-text { font-size: 32px; }
                    .info-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; margin-bottom: 50px !important; }
                    .cta-button { font-size: 18px !important; padding: 20px !important; }
                }
            `}</style>

            {/* Seamless Background Ambient Glows */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(234, 88, 12, 0.08) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }} />
            <div style={{ position: 'absolute', top: '40%', right: '-15%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(253, 186, 116, 0.15) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />

            {/* Grid Pattern Overlay for Poster Aesthetic */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0H0v30h30V0zM29 1H1v28h28V1z\' fill=\'%23ea580c\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', zIndex: 1, maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' }} />

            <div style={posterInnerWidth} className="poster-padding">
                {/* Header Logo */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(234, 88, 12, 0.3)' }}>
                        <motion.img
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Magnifying%20Glass%20Tilted%20Right.png"
                            style={{ width: '28px', filter: 'brightness(2)' }}
                        />
                    </div>
                    <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#c2410c', margin: 0, letterSpacing: '0.5px' }}>
                        PINTAR PUASS
                    </h1>
                </motion.div>

                {/* Main Title Section */}
                <motion.h2 className="title-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }} style={{ fontWeight: '900', lineHeight: 1.25, color: '#1e293b', marginBottom: '24px', maxWidth: '100%' }}>
                    Sistem Informasi Pengaduan & Survey: <br />
                    <span style={{ color: '#ea580c' }}>Mengubah Keluhan Jadi Kepercayaan</span>
                </motion.h2>

                {/* STATIC HERO IMAGE (REPLACING CSS DIORAMA) */}
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ width: '100%', marginBottom: '40px', display: 'flex', justifyContent: 'center', filter: 'drop-shadow(0 20px 30px rgba(234,88,12,0.15))' }}>
                    <img src="/images/3d/hero.png" alt="PINTAR PUASS Hero" className="hero-image" />
                </motion.div>

                {/* Middle Info Grid */}
                <div className="info-grid" style={{ display: 'grid' }}>
                    {/* Latar Belakang */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: 'white', borderRadius: '32px', padding: '40px', boxShadow: '0 20px 50px rgba(234,88,12,0.08)', position: 'relative' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <motion.img
                                animate={{ rotate: [-10, 10, -10] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png"
                                style={{ width: '36px' }}
                            />
                            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', margin: 0 }}>LATAR BELAKANG</h3>
                        </div>
                        <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                            Tantangan penyelesaian komplain yang lambat dan tersebar di berbagai saluran menyulitkan pencapaian kepuasan optimal. Aplikasi PINTAR PUASS menyatukan Pengaduan Masyarakat, Survey Digital Kepuasan, dan Whistleblowing secara terpusat.
                        </p>
                    </motion.div>

                    {/* Manfaat Integrasi */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)', borderRadius: '32px', padding: '40px', color: 'white', boxShadow: '0 20px 50px rgba(234, 88, 12, 0.25)' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '800', margin: '0 0 24px 0' }}>MANFAAT INTEGRASI</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                'Pusat Data Aduan Satu Pintu.',
                                'Prioritas SLA & Eskalasi Otomatis.',
                                'Whistleblowing Aman & Terenkripsi.',
                                'Analisis Sentimen & Kepuasan Real-time.'
                            ].map((item, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', fontWeight: '600' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffedd5', marginTop: '6px', boxShadow: '0 0 10px #fff' }}></div>
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

                        <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#ea580c', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 16px', textAlign: 'center' }}>TARGET PENGGUNA</h3>

                        <p style={{ textAlign: 'center', fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: '600' }}>
                            Customer Service, Risk & Compliance,<br />Manajemen & Direksi.
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

export default PintarPUASS;
