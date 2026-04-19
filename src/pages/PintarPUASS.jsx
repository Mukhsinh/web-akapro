import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PintarPUASS = () => {
    const navigate = useNavigate();
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleDemo = () => {
        const text = "Halo AKAPRO Indonesia, saya ingin mengajukan demo untuk aplikasi PINTAR PUASS.";
        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
    };

    const modules = [
        { icon: '💬', title: 'Pengelolaan Komplain', desc: 'Sistem tiket keluhan terstruktur dengan SLA otomatis.' },
        { icon: '📋', title: 'Survey Kepuasan', desc: 'Survey digital real-time dengan analisis sentimen.' },
        { icon: '📢', title: 'Permohonan Informasi', desc: 'Portal informasi publik terintegrasi & transparan.' },
        { icon: '🔒', title: 'Aduan Internal', desc: 'Whistleblowing system aman & terlindungi.' },
    ];

    const stats = [
        { value: '< 2 Jam', label: 'Respons Pertama' },
        { value: '98%', label: 'Resolusi Tepat Waktu' },
        { value: '4.8★', label: 'Kepuasan Rata-rata' },
    ];

    return (
        <div style={{ background: '#fff8f0', minHeight: '100vh', fontFamily: 'Inter, sans-serif', paddingBottom: '60px' }}>

            {/* HEADER */}
            <div style={{ position: 'relative', background: 'linear-gradient(160deg, #f59e0b 0%, #d97706 100%)', paddingBottom: '40px' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
                    <div style={{ position: 'absolute', top: '40px', right: '60px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0, height: '40px', background: '#fff8f0', borderRadius: '40px 40px 0 0' }} />

                <div style={{ padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}>
                    <button onClick={() => navigate(-1)} style={{ background: 'rgba(255,255,255,0.25)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)', flexShrink: 0 }}>
                        <ArrowLeft size={18} />
                    </button>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', padding: '6px 14px', backdropFilter: 'blur(8px)' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '7px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: '#d97706', fontSize: '11px', fontWeight: '900' }}>P</span>
                        </div>
                        <span style={{ fontSize: '15px', fontWeight: '900', color: 'white', letterSpacing: '0.5px' }}>PINTAR-PUASS</span>
                    </div>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    style={{ padding: '20px 20px 16px', display: 'flex', alignItems: 'flex-start', gap: '16px', position: 'relative' }}>
                    <div style={{ flex: 1 }}>
                        <h1 style={{ fontSize: '20px', fontWeight: '900', color: 'white', lineHeight: 1.25, margin: 0 }}>
                            Platform Kepuasan & Pengelolaan Keluhan Terpadu
                            <span style={{ display: 'block', color: '#fef3c7', marginTop: '4px', fontSize: '15px', fontWeight: '700' }}>
                                Ubah Keluhan Jadi Kepercayaan
                            </span>
                        </h1>
                        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, margin: '10px 0 0' }}>
                            Komplain · Survey · Informasi Publik · Aduan Internal · Eskalasi Otomatis
                        </p>
                    </div>
                    <div style={{ width: '110px', flexShrink: 0, height: '120px', borderRadius: '20px', background: 'rgba(255,255,255,0.15)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', backdropFilter: 'blur(8px)' }}>
                        <svg viewBox="0 0 100 100" width="90" height="90">
                            <rect x="15" y="20" width="70" height="50" rx="10" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                            <rect x="22" y="30" width="40" height="4" rx="2" fill="white" opacity="0.8" />
                            <rect x="22" y="38" width="30" height="3" rx="1.5" fill="white" opacity="0.5" />
                            <rect x="22" y="45" width="35" height="3" rx="1.5" fill="white" opacity="0.5" />
                            <circle cx="72" cy="65" r="14" fill="#f59e0b" />
                            <path d="M66 65 L70 69 L78 61" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                            <path d="M30 70 L30 82 L38 76 L46 82 L46 70" fill="rgba(255,255,255,0.3)" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            <div style={{ padding: '20px 20px 0' }}>
                <p style={{ fontSize: '13px', color: '#78350f', lineHeight: 1.7, margin: 0 }}>
                    Aplikasi pengelolaan komplain, survey kepuasan masyarakat, permohonan informasi, dan aduan internal yang terintegrasi dengan mekanisme penanganan <strong style={{ color: '#d97706' }}>eskalatif otomatis</strong> dan analisis data terstruktur.
                </p>
            </div>

            {/* Stats */}
            <div style={{ padding: '20px 20px 0' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', borderRadius: '24px', padding: '20px', boxShadow: '0 4px 24px rgba(245,158,11,0.3)', display: 'flex', justifyContent: 'space-around' }}>
                    {stats.map(({ value, label }) => (
                        <div key={label} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '18px', fontWeight: '900', color: 'white' }}>{value}</div>
                            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.75)', marginTop: '2px', fontWeight: '600' }}>{label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Modules */}
            <div style={{ padding: '16px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {modules.map((m, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                        style={{ background: 'white', borderRadius: '20px', padding: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '24px', marginBottom: '8px' }}>{m.icon}</div>
                        <div style={{ fontSize: '13px', fontWeight: '800', color: '#92400e', marginBottom: '4px' }}>{m.title}</div>
                        <div style={{ fontSize: '11px', color: '#a16207', lineHeight: 1.5 }}>{m.desc}</div>
                    </motion.div>
                ))}
            </div>

            {/* Escalation Flow */}
            <div style={{ padding: '16px 20px 0' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'white', borderRadius: '24px', padding: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontSize: '12px', fontWeight: '900', color: '#92400e', letterSpacing: '1px', margin: '0 0 14px', textTransform: 'uppercase' }}>Alur Eskalasi Otomatis</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {[
                            { step: '1', label: 'Keluhan Masuk', sub: 'Via app, web, atau QR code', color: '#f59e0b' },
                            { step: '2', label: 'Klasifikasi Otomatis', sub: 'AI sorting berdasarkan urgensi', color: '#f97316' },
                            { step: '3', label: 'Penugasan Tim', sub: 'Notifikasi real-time ke PIC', color: '#ef4444' },
                            { step: '4', label: 'Resolusi & Feedback', sub: 'Konfirmasi kepuasan pasien', color: '#22c55e' },
                        ].map(({ step, label, sub, color }) => (
                            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <span style={{ fontSize: '12px', fontWeight: '900', color: 'white' }}>{step}</span>
                                </div>
                                <div>
                                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#1a1a1a' }}>{label}</div>
                                    <div style={{ fontSize: '11px', color: '#888', marginTop: '1px' }}>{sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* CTA */}
            <div style={{ padding: '32px 20px 0' }}>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={handleDemo}
                    style={{ width: '100%', padding: '13px 20px', borderRadius: '16px', background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)', color: 'white', fontWeight: '800', fontSize: '14px', border: 'none', cursor: 'pointer', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 8px 28px rgba(245,158,11,0.4)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)', borderRadius: '18px 18px 0 0', pointerEvents: 'none' }} />
                    <span style={{ fontSize: '18px' }}>⭐</span>
                    <span>Ajukan Demo Sekarang</span>
                    <span style={{ fontSize: '16px', marginLeft: '2px' }}>→</span>
                </motion.button>
                <p style={{ textAlign: 'center', fontSize: '11px', color: '#a16207', marginTop: '10px' }}>
                    Tim kami akan menghubungi Anda untuk aktivasi akun demo eksklusif.
                </p>
            </div>
        </div>
    );
};

export default PintarPUASS;
