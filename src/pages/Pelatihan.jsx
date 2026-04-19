import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, TrendingUp, Shield, Users, Target, Award, Briefcase, BarChart } from 'lucide-react';

const programs = [
    { 
        title: 'Penganggaran RS', 
        color: '#C6FF00', 
        icon: BarChart,
        description: 'Penyusunan anggaran rumah sakit yang efektif dan efisien'
    },
    { 
        title: 'Penatausahaan BLUD', 
        color: '#00D9FF', 
        icon: BookOpen,
        description: 'Pengelolaan keuangan BLUD sesuai regulasi terkini'
    },
    { 
        title: 'Unit Cost RS', 
        color: '#FF6B6B', 
        icon: TrendingUp,
        description: 'Perhitungan biaya satuan layanan kesehatan yang akurat'
    },
    { 
        title: 'Renstra RS', 
        color: '#4ECDC4', 
        icon: Target,
        description: 'Perencanaan strategis untuk pengembangan rumah sakit'
    },
    { 
        title: 'Manajemen Resiko', 
        color: '#FFD93D', 
        icon: Shield,
        description: 'Identifikasi dan mitigasi risiko operasional RS'
    },
    { 
        title: 'Manajemen Komplain', 
        color: '#A8E6CF', 
        icon: Users,
        description: 'Penanganan keluhan pasien secara profesional'
    },
    { 
        title: 'Survey Kepuasan', 
        color: '#FF8B94', 
        icon: Award,
        description: 'Pengukuran dan peningkatan kepuasan pelanggan'
    },
    { 
        title: 'Distribusi Insentif', 
        color: '#C7CEEA', 
        icon: Briefcase,
        description: 'Sistem pembagian insentif yang adil dan transparan'
    },
    { 
        title: 'Manajemen KPI', 
        color: '#FFDAC1', 
        icon: BarChart,
        description: 'Monitoring dan evaluasi indikator kinerja utama'
    },
];

const Pelatihan = () => {
    const handleWhatsApp = () => {
        const text = "Halo AKAPRO Indonesia, saya ingin informasi tentang program pelatihan.";
        window.open(`https://wa.me/6285726112001?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
            minHeight: '100vh',
            padding: '100px 20px 40px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background Elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '-10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(198, 255, 0, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                animation: 'float 8s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '-10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(198, 255, 0, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                animation: 'float 10s ease-in-out infinite reverse'
            }} />

            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                style={{ position: 'relative', zIndex: 1 }}
            >
                <div style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    background: 'rgba(198, 255, 0, 0.1)',
                    border: '1px solid rgba(198, 255, 0, 0.3)',
                    borderRadius: '20px',
                    marginBottom: '16px'
                }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--electric-lime)', letterSpacing: '1px' }}>
                        PROFESSIONAL TRAINING
                    </span>
                </div>
                <h1 style={{ 
                    fontSize: '42px', 
                    fontWeight: '900', 
                    color: 'white', 
                    marginBottom: '12px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #c6ff00 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-1px'
                }}>
                    Program Pelatihan
                </h1>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '48px', maxWidth: '600px' }}>
                    Tingkatkan kompetensi tim Anda dengan pelatihan profesional berbasis praktik terbaik industri
                </p>
            </motion.div>

            {/* Modern Grid Cards with 3D Isometric Style */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
                marginBottom: '80px',
                position: 'relative',
                zIndex: 1
            }}>
                {programs.map((prog, idx) => {
                    const Icon = prog.icon;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08, type: 'spring', stiffness: 100 }}
                            whileHover={{ y: -12, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '28px',
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                minHeight: '280px',
                                cursor: 'pointer',
                                border: '1px solid rgba(255,255,255,0.1)',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 12px 48px rgba(0,0,0,0.4)'
                            }}
                            onClick={handleWhatsApp}
                        >
                            {/* Animated Gradient Background */}
                            <motion.div 
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 90, 0]
                                }}
                                transition={{ 
                                    duration: 20, 
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    position: 'absolute',
                                    top: '-50%',
                                    right: '-50%',
                                    width: '200%',
                                    height: '200%',
                                    background: `radial-gradient(circle, ${prog.color}15 0%, transparent 50%)`,
                                    filter: 'blur(60px)'
                                }} 
                            />

                            {/* 3D Isometric Icon Container */}
                            <motion.div 
                                whileHover={{ rotateY: 15, rotateX: -10 }}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    background: `linear-gradient(135deg, ${prog.color} 0%, ${prog.color}dd 100%)`,
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '24px',
                                    boxShadow: `0 12px 32px ${prog.color}50, inset 0 -4px 8px rgba(0,0,0,0.2)`,
                                    position: 'relative',
                                    zIndex: 1,
                                    transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                <Icon size={40} color="rgba(0,0,0,0.8)" strokeWidth={2.5} />
                                
                                {/* 3D Shadow Effect */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-8px',
                                    left: '8px',
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(0,0,0,0.3)',
                                    borderRadius: '20px',
                                    filter: 'blur(12px)',
                                    zIndex: -1,
                                    transform: 'translateZ(-10px)'
                                }} />
                            </motion.div>

                            {/* Content */}
                            <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: '900',
                                    color: 'white',
                                    lineHeight: 1.2,
                                    marginBottom: '12px',
                                    letterSpacing: '-0.5px'
                                }}>
                                    {prog.title}
                                </h3>

                                <p style={{
                                    fontSize: '14px',
                                    color: 'rgba(255,255,255,0.65)',
                                    lineHeight: 1.6,
                                    marginBottom: '20px'
                                }}>
                                    {prog.description}
                                </p>
                            </div>

                            {/* CTA Badge */}
                            <motion.div 
                                whileHover={{ x: 5 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '10px 16px',
                                    background: `linear-gradient(135deg, ${prog.color}20 0%, ${prog.color}10 100%)`,
                                    borderRadius: '12px',
                                    border: `1px solid ${prog.color}40`,
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                <span style={{ 
                                    fontSize: '13px', 
                                    fontWeight: '700', 
                                    color: prog.color,
                                    letterSpacing: '0.5px'
                                }}>
                                    Silakan Chat Kami
                                </span>
                                <motion.span 
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    style={{ color: prog.color, fontSize: '16px', fontWeight: '900' }}
                                >
                                    →
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Floating WhatsApp Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                style={{
                    position: 'fixed',
                    bottom: '120px',
                    right: '20px',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 8px 32px rgba(37, 211, 102, 0.5)',
                    zIndex: 999
                }}
            >
                <MessageCircle size={28} color="white" strokeWidth={2.5} />
            </motion.button>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-20px) translateX(10px); }
                }
            `}</style>
        </div>
    );
};

export default Pelatihan;
