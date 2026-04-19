import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Mail, Phone } from 'lucide-react';

const PusatBantuan = () => {
    const handleWhatsApp = () => {
        const text = "Selamat Pagi, saya .... dari instansi/rumah sakit .... , berminat untuk :\n\n1. Informasi aplikasi\n2. Informasi pelatihan\n3. Submit artikel\n4. Mitra kerjasama\n\nMohon informasi lebih lanjut.";
        window.open(`https://wa.me/6285726112001?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div style={{
            background: 'var(--midnight-carbon)',
            minHeight: '100vh',
            padding: '100px 20px 40px',
            color: 'white'
        }}>
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '12px' }}>
                    Pusat Bantuan
                </h1>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
                    Hubungi kami untuk informasi lebih lanjut
                </p>
            </motion.div>

            {/* CS Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass"
                style={{
                    padding: '32px 24px',
                    borderRadius: '24px',
                    marginBottom: '24px',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(198, 255, 0, 0.1) 0%, rgba(255,255,255,0.05) 100%)',
                    border: '1px solid rgba(198, 255, 0, 0.2)'
                }}
            >
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'var(--electric-lime)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    boxShadow: '0 8px 24px rgba(198, 255, 0, 0.3)'
                }}>
                    <MessageCircle size={40} color="black" />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>CS Akapro</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                    Siap membantu Anda 24/7
                </p>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWhatsApp}
                    style={{
                        width: '100%',
                        padding: '16px',
                        borderRadius: '16px',
                        background: '#25D366',
                        color: 'white',
                        border: 'none',
                        fontSize: '15px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)'
                    }}
                >
                    <MessageCircle size={20} />
                    Chat via WhatsApp
                </motion.button>
            </motion.div>

            {/* Company Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass"
                style={{
                    padding: '24px',
                    borderRadius: '24px',
                    marginBottom: '24px'
                }}
            >
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--electric-lime)' }}>
                    Informasi Kontak
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '12px',
                            background: 'rgba(198, 255, 0, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <MapPin size={20} color="var(--electric-lime)" />
                        </div>
                        <div>
                            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Alamat</p>
                            <p style={{ fontSize: '14px', fontWeight: '600', lineHeight: 1.5 }}>
                                Akademi Profesional Indonesia<br />
                                Perumahan Saphire Blok C3<br />
                                Jl. Truntum Pekalongan
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '12px',
                            background: 'rgba(198, 255, 0, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <Phone size={20} color="var(--electric-lime)" />
                        </div>
                        <div>
                            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>WhatsApp</p>
                            <p style={{ fontSize: '14px', fontWeight: '600' }}>085726112001</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '12px',
                            background: 'rgba(198, 255, 0, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <Mail size={20} color="var(--electric-lime)" />
                        </div>
                        <div>
                            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Email</p>
                            <p style={{ fontSize: '14px', fontWeight: '600' }}>akademiprofesional@gmail.com</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ marginTop: '32px' }}
            >
                <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '16px' }}>
                    Layanan Kami
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {[
                        { label: 'Informasi Aplikasi', icon: '📱' },
                        { label: 'Informasi Pelatihan', icon: '🎓' },
                        { label: 'Submit Artikel', icon: '📄' },
                        { label: 'Mitra Kerjasama', icon: '🤝' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleWhatsApp}
                            className="glass"
                            style={{
                                padding: '20px 16px',
                                borderRadius: '16px',
                                textAlign: 'center',
                                cursor: 'pointer',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <div style={{ fontSize: '32px', marginBottom: '8px' }}>{item.icon}</div>
                            <p style={{ fontSize: '12px', fontWeight: '600' }}>{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default PusatBantuan;
