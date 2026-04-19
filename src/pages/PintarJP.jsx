import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PintarJP = () => {
    const navigate = useNavigate();
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleDemo = () => {
        const text = "Halo AKAPRO Indonesia, saya ingin mengajukan demo untuk aplikasi PINTAR JP.";
        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
    };

    const features = [
        { icon: '⚖️', title: 'Distribusi Adil', desc: 'Perhitungan insentif berbasis KPI individu & unit secara proporsional.' },
        { icon: '📈', title: 'KPI Terintegrasi', desc: 'Kinerja terukur dan linier dengan distribusi jasa pelayanan.' },
        { icon: '🧾', title: 'Pajak Otomatis', desc: 'Integrasi PPh 21 otomatis, akurat, dan tersistematis.' },
        { icon: '📱', title: 'Slip Digital', desc: 'Slip jasa pelayanan digital transparan untuk setiap tenaga medis.' },
    ];

    const roles = [
        { role: 'Dokter Spesialis', pct: 85, color: '#0ea5e9' },
        { role: 'Dokter Umum', pct: 70, color: '#38bdf8' },
        { role: 'Perawat', pct: 60, color: '#7dd3fc' },
        { role: 'Tenaga Penunjang', pct: 45, color: '#bae6fd' },
    ];

    return (
        <div style={{ background: '#f0f9ff', minHeight: '100vh', fontFamily: 'Inter, sans-serif', paddingBottom: '60px' }}>

            {/* HEADER */}
            <div style={{ position: 'relative', background: 'linear-gradient(160deg, #0284c7 0%, #0c4a6e 100%)', paddingBottom: '40px' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
                    <svg style={{ position: 'absolute', bottom: 0, right: 0, opacity: 0.1 }} width="200" height="200" viewBox="0 0 200 200">
                        <circle cx="150" cy="50" r="80" fill="white" />
                        <circle cx="50" cy="150" r="60" fill="white" />
                    </svg>
                </div>
                <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0, height: '40px', background: '#f0f9ff', borderRadius: '40px 40px 0 0' }} />

                <div style={{ padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}>
                    <button onClick={() => navigate(-1)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)', flexShrink: 0 }}>
                        <ArrowLeft size={18} />
                    </button>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.15)', borderRadius: '20px', padding: '6px 14px', backdropFilter: 'blur(8px)' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '7px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: '#0284c7', fontSize: '11px', fontWeight: '900' }}>J</span>
                        </div>
                        <span style={{ fontSize: '15px', fontWeight: '900', color: 'white', letterSpacing: '0.5px' }}>PINTAR-JP</span>
                    </div>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    style={{ padding: '20px 20px 16px', display: 'flex', alignItems: 'flex-start', gap: '16px', position: 'relative' }}>
                    <div style={{ flex: 1 }}>
                        <h1 style={{ fontSize: '20px', fontWeight: '900', color: 'white', lineHeight: 1.25, margin: 0 }}>
                            Distribusi Insentif Jasa Pelayanan Berbasis KPI
                            <span style={{ display: 'block', color: '#bae6fd', marginTop: '4px', fontSize: '15px', fontWeight: '700' }}>
                                Keadilan untuk Setiap Tenaga Medis
                            </span>
                        </h1>
                        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: '10px 0 0' }}>
                            KPI Individu · KPI Unit · Jasa Medis · PPh 21 · Slip Digital
                        </p>
                    </div>
                    <div style={{ width: '110px', flexShrink: 0, height: '120px', borderRadius: '20px', background: 'rgba(255,255,255,0.12)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.2)', backdropFilter: 'blur(8px)' }}>
                        <svg viewBox="0 0 100 100" width="90" height="90">
                            <rect x="20" y="55" width="12" height="30" rx="3" fill="rgba(255,255,255,0.4)" />
                            <rect x="36" y="40" width="12" height="45" rx="3" fill="rgba(255,255,255,0.6)" />
                            <rect x="52" y="30" width="12" height="55" rx="3" fill="rgba(255,255,255,0.8)" />
                            <rect x="68" y="20" width="12" height="65" rx="3" fill="white" />
                            <path d="M26 52 L42 37 L58 27 L74 17" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" fill="none" />
                            <circle cx="26" cy="52" r="3" fill="#bae6fd" />
                            <circle cx="42" cy="37" r="3" fill="#bae6fd" />
                            <circle cx="58" cy="27" r="3" fill="#bae6fd" />
                            <circle cx="74" cy="17" r="3" fill="#bae6fd" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            <div style={{ padding: '20px 20px 0' }}>
                <p style={{ fontSize: '13px', color: '#0c4a6e', lineHeight: 1.7, margin: 0 }}>
                    Aplikasi pengelolaan distribusi insentif jasa pelayanan rumah sakit yang terintegrasi dengan <strong style={{ color: '#0284c7' }}>KPI individu dan KPI Unit</strong> — kinerja terukur dan linier dengan distribusi insentif yang diberikan.
                </p>
            </div>

            {/* KPI Distribution Visual */}
            <div style={{ padding: '20px 20px 0' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'white', borderRadius: '24px', padding: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontSize: '12px', fontWeight: '900', color: '#0c4a6e', letterSpacing: '1px', margin: '0 0 16px', textTransform: 'uppercase' }}>Distribusi Berdasarkan Kinerja</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {roles.map(({ role, pct, color }) => (
                            <div key={role}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#1a1a1a' }}>{role}</span>
                                    <span style={{ fontSize: '12px', fontWeight: '800', color }}>{pct}%</span>
                                </div>
                                <div style={{ height: '8px', background: '#f0f9ff', borderRadius: '4px', overflow: 'hidden' }}>
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                                        style={{ height: '100%', background: color, borderRadius: '4px' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Features */}
            <div style={{ padding: '16px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {features.map((f, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                        style={{ background: 'white', borderRadius: '20px', padding: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                        <div style={{ fontSize: '13px', fontWeight: '800', color: '#0c4a6e', marginBottom: '4px' }}>{f.title}</div>
                        <div style={{ fontSize: '11px', color: '#0369a1', lineHeight: 1.5 }}>{f.desc}</div>
                    </motion.div>
                ))}
            </div>

            {/* Flow Strip */}
            <div style={{ padding: '16px 20px 0' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0c4a6e 100%)', borderRadius: '24px', padding: '18px 20px', boxShadow: '0 4px 24px rgba(2,132,199,0.3)' }}>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.55)', fontWeight: '700', letterSpacing: '1.5px', marginBottom: '10px' }}>ALUR PERHITUNGAN INSENTIF</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        {['Input KPI', 'Verifikasi', 'Kalkulasi', 'Pajak PPh', 'Distribusi'].map((step, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '8px', padding: '5px 10px', fontSize: '11px', fontWeight: '700', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>{step}</div>
                                {i < 4 && <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>›</span>}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Manfaat */}
            <div style={{ padding: '16px 20px 0' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'white', borderRadius: '24px', padding: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontSize: '12px', fontWeight: '900', color: '#0c4a6e', letterSpacing: '1px', margin: '0 0 12px', textTransform: 'uppercase' }}>Manfaat Utama</h3>
                    {['Distribusi insentif transparan & berkeadilan', 'Eliminasi konflik internal tenaga medis', 'Perhitungan pajak otomatis & akurat', 'Retensi SDM terbaik rumah sakit'].map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0284c7', flexShrink: 0, marginTop: '5px' }} />
                            <span style={{ fontSize: '13px', color: '#0c4a6e', lineHeight: 1.5 }}>{item}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* CTA */}
            <div style={{ padding: '32px 20px 0' }}>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={handleDemo}
                    style={{ width: '100%', padding: '13px 20px', borderRadius: '16px', background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)', color: 'white', fontWeight: '800', fontSize: '14px', border: 'none', cursor: 'pointer', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 8px 28px rgba(2,132,199,0.4)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)', borderRadius: '18px 18px 0 0', pointerEvents: 'none' }} />
                    <span style={{ fontSize: '18px' }}>💼</span>
                    <span>Ajukan Demo Sekarang</span>
                    <span style={{ fontSize: '16px', marginLeft: '2px' }}>→</span>
                </motion.button>
                <p style={{ textAlign: 'center', fontSize: '11px', color: '#0369a1', marginTop: '10px' }}>
                    Tim kami akan menghubungi Anda untuk aktivasi akun demo eksklusif.
                </p>
            </div>
        </div>
    );
};

export default PintarJP;
