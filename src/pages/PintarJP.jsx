import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';

const PintarJP = () => {
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
        const text = "Halo AKAPRO Indonesia, saya ingin mengajukan demo untuk aplikasi PINTAR Jasa Pelayanan.";
        const targetNumber = waNumber || '6285211516088';
        window.open(`https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const containerStyle = {
        background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)', // Light Blue Gradient
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
                .title-wrapper { display: flex; flex-direction: column; }
                .title-text { font-size: 26px; }
                .diorama-wrapper { transform: scale(0.85); height: 350px !important; margin-top: 20px !important; margin-bottom: 20px !important; }
                .info-grid { grid-template-columns: 1fr !important; gap: 20px !important; margin-bottom: 30px !important; }
                .target-grid { grid-template-columns: 1fr !important; gap: 16px !important; padding: 30px 20px !important; margin-bottom: 30px !important; }
                .cta-button { font-size: 16px !important; padding: 18px !important; border-width: 4px !important; }
            
                @media (min-width: 768px) {
                    .poster-padding { padding: 60px 40px; }
                    .title-text { font-size: 42px; }
                    .diorama-wrapper { transform: scale(1); height: 450px !important; margin-top: 40px !important; margin-bottom: 60px !important; }
                    .info-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important; gap: 32px !important; margin-bottom: 50px !important; }
                    .target-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 24px !important; padding: 40px !important; margin-bottom: 50px !important;}
                    .cta-button { font-size: 22px !important; padding: 24px !important; border-width: 6px !important; }
                }
            `}</style>

            {/* Seamless Background Ambient Glows */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }} />
            <div style={{ position: 'absolute', top: '40%', right: '-15%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />

            {/* Grid Pattern Overlay for Poster Aesthetic */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0H0v30h30V0zM29 1H1v28h28V1z\' fill=\'%230ea5e9\' fill-opacity=\'0.04\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', zIndex: 1, maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' }} />

            <div style={posterInnerWidth} className="poster-padding">
                {/* Header Logo */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(2, 132, 199, 0.3)' }}>
                        <motion.img
                            animate={{ y: [-2, 2, -2] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Money%20Bag.png"
                            style={{ width: '28px', filter: 'brightness(1.2)' }}
                        />
                    </div>
                    <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#0369a1', margin: 0, letterSpacing: '0.5px' }}>
                        PINTAR JP
                    </h1>
                </motion.div>

                {/* Main Title Section */}
                <motion.h2 className="title-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }} style={{ fontWeight: '900', lineHeight: 1.2, color: '#0f172a', marginBottom: '16px', maxWidth: '100%', wordWrap: 'break-word' }}>
                    Distribusi Jasa Pelayanan Terintegrasi: <br />
                    <span style={{ color: '#0284c7' }}>Menyelaraskan KPI & Keadilan Karyawan</span>
                </motion.h2>

                {/* SEAMLESS CSS 3D ISOMETRIC DIORAMA (LIGHT BLUE) */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="diorama-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1200px' }}>

                    {/* The Isometric Stepped Podium Diorama */}
                    <div style={{
                        position: 'relative',
                        width: '380px',
                        height: '380px',
                        transform: 'rotateX(60deg) rotateZ(-45deg)',
                        transformStyle: 'preserve-3d'
                    }}>
                        {/* Tier 1: Base Layer */}
                        <div style={{ position: 'absolute', inset: '0', background: '#e0f2fe', borderRadius: '40px', boxShadow: '15px 15px 0 rgba(2, 132, 199, 0.15)', border: '4px solid white', transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }} />

                        {/* Tier 2: Middle Step */}
                        <div style={{ position: 'absolute', inset: '15%', background: 'linear-gradient(135deg, #bae6fd 0%, #7dd3fc 100%)', borderRadius: '30px', boxShadow: '10px 10px 0 #38bdf8', border: '3px solid white', transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }} />

                        {/* Tier 3: Top Step */}
                        <div style={{ position: 'absolute', inset: '35%', background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', borderRadius: '20px', boxShadow: '8px 8px 0 #075985', border: '2px solid #7dd3fc', transform: 'translateZ(60px)', transformStyle: 'preserve-3d' }} />

                        {/* Floating Links/Paths between tiers */}
                        <motion.div animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: 'absolute', top: '50%', left: '20%', width: '30%', height: '4px', background: '#0ea5e9', transform: 'translateZ(45px) rotate(45deg)' }} />

                        {/* Emojis Placed on Tiers (Elevated correctly to prevent clipping) */}
                        {/* Main Top Center Item */}
                        <div style={{ position: 'absolute', top: '15%', left: '15%', width: '160px', transform: 'translateZ(140px) rotateZ(45deg) rotateX(-60deg)' }}>
                            <motion.img
                                animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png"
                                style={{ width: '100%', filter: 'drop-shadow(-20px 30px 15px rgba(2,132,199,0.3))' }}
                            />
                        </div>

                        {/* Tier 2 Bottom Left */}
                        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '90px', transform: 'translateZ(90px) rotateZ(45deg) rotateX(-60deg)' }}>
                            <motion.img
                                animate={{ y: [-15, 15, -15] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Chart%20Increasing.png"
                                style={{ width: '100%', filter: 'drop-shadow(-15px 25px 10px rgba(2,132,199,0.4))' }}
                            />
                        </div>

                        {/* Tier 2 Top Right */}
                        <div style={{ position: 'absolute', top: '5%', right: '-5%', width: '110px', transform: 'translateZ(90px) rotateZ(45deg) rotateX(-60deg)' }}>
                            <motion.img
                                animate={{ y: [-10, 10, -10] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Office%20Worker.png"
                                style={{ width: '100%', filter: 'drop-shadow(-15px 20px 10px rgba(2,132,199,0.3))' }}
                            />
                        </div>

                        {/* Floating around Base */}
                        <div style={{ position: 'absolute', bottom: '25%', right: '5%', width: '80px', transform: 'translateZ(60px) rotateZ(45deg) rotateX(-60deg)' }}>
                            <motion.img
                                animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Money%20with%20Wings.png"
                                style={{ width: '100%', filter: 'drop-shadow(-10px 15px 10px rgba(2,132,199,0.3))' }}
                            />
                        </div>
                    </div>

                    {/* Left/Right Floating Accent Cards inside Diorama */}
                    <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity }} style={{ position: 'absolute', left: '-20px', top: '20%', background: 'white', padding: '12px 20px', borderRadius: '16px', boxShadow: '0 15px 30px rgba(2,132,199,0.15)', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '10px', height: '10px', background: '#38bdf8', borderRadius: '50%' }} />
                        <span style={{ fontWeight: '800', color: '#1e293b', fontSize: '14px' }}>Integrasi KPI</span>
                    </motion.div>

                    <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} style={{ position: 'absolute', right: '-20px', bottom: '20%', background: 'white', padding: '12px 20px', borderRadius: '16px', boxShadow: '0 15px 30px rgba(2,132,199,0.15)', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '10px', height: '10px', background: '#0284c7', borderRadius: '50%' }} />
                        <span style={{ fontWeight: '800', color: '#1e293b', fontSize: '14px' }}>Hitung Otomatis</span>
                    </motion.div>
                </motion.div>

                {/* Middle Info Grid */}
                <div className="info-grid" style={{ display: 'grid' }}>
                    {/* Latar Belakang */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: 'white', borderRadius: '32px', padding: '40px', boxShadow: '0 20px 50px rgba(2,132,199,0.08)', position: 'relative' }}>
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
                            Tantangan dalam distribusi insentif yang adil dan memotivasi. Aplikasi kami mengintegrasikan KPI operasional dengan kompensasi untuk mencapai target RS secara berkelanjutan.
                        </p>
                    </motion.div>

                    {/* Manfaat Integrasi */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', borderRadius: '32px', padding: '40px', color: 'white', boxShadow: '0 20px 50px rgba(2, 132, 199, 0.25)' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '800', margin: '0 0 24px 0' }}>MANFAAT INTEGRASI</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                'Keadilan dan Transparansi Insentif Berbasis Kinerja.',
                                'Meningkatkan Kepatuhan Medis.',
                                'Peningkatan Produktivitas & Motivasi.',
                                'Analisis Performa yang Lebih Presisi.'
                            ].map((item, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', fontWeight: '500' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#bae6fd', marginTop: '6px', boxShadow: '0 0 10px #7dd3fc' }}></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Target Pengguna Section */}
                <motion.div className="target-grid" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'white', borderRadius: '32px', boxShadow: '0 20px 50px rgba(2,132,199,0.08)', display: 'grid' }}>
                    <div style={{ gridColumn: '1 / -1' }}>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', textAlign: 'center', marginBottom: '16px' }}>TARGET PENGGUNA</h3>
                    </div>
                    {[
                        { title: 'Risk/KPI Officer', desc: 'Pemantau performa rutin.', img: 'Man%20Office%20Worker' },
                        { title: 'Strategic Planner', desc: 'Penentu arah kebijakan.', img: 'Man%20Technologist' },
                        { title: 'Hospital Admin', desc: 'Pengelola distribusi dana.', img: 'Woman%20Office%20Worker' }
                    ].map((user, idx) => (
                        <div key={idx} style={{ background: '#f0f9ff', borderRadius: '24px', padding: '32px 20px', textAlign: 'center', border: '2px solid transparent', transition: 'all 0.3s ease', cursor: 'default' }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = '#bae6fd'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(2,132,199,0.15)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            <motion.img
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 4, repeat: Infinity, delay: idx * 0.3 }}
                                src={`https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/${user.img}.png`}
                                alt={user.title}
                                style={{ width: '90px', margin: '0 auto 24px', filter: 'drop-shadow(0 15px 15px rgba(2, 132, 199, 0.2))' }}
                            />
                            <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0284c7', margin: '0 0 8px 0' }}>{user.title}</h4>
                            <p style={{ fontSize: '13px', color: '#475569', margin: 0, fontWeight: '500' }}>{user.desc}</p>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Button (ORANGE / ACCENT) */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.button
                        className="cta-button"
                        whileHover={{ scale: 1.03, boxShadow: '0 25px 45px rgba(234, 88, 12, 0.5)' }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleDemo}
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            borderRadius: '30px',
                            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', // Orange accent!
                            color: 'white',
                            fontWeight: '900',
                            outline: '2px solid #ea580c',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            boxShadow: '0 20px 40px rgba(234, 88, 12, 0.4)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        [ AJUKAN DEMO SEKARANG ]
                        <motion.span animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                    </motion.button>
                </motion.div>

            </div>
        </div>
    );
};

export default PintarJP;
