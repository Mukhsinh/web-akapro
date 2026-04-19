import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MMPI2Online = () => {
    const navigate = useNavigate();
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleDemo = () => {
        const text = "Halo AKAPRO Indonesia, saya ingin mengajukan demo untuk aplikasi MMPI-2 Online.";
        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
    };

    const scales = [
        { code: 'L', name: 'Lie Scale', color: '#a855f7' },
        { code: 'F', name: 'Infrequency', color: '#8b5cf6' },
        { code: 'K', name: 'Correction', color: '#7c3aed' },
        { code: 'Hs', name: 'Hypochondriasis', color: '#6d28d9' },
        { code: 'D', name: 'Depression', color: '#5b21b6' },
        { code: 'Hy', name: 'Hysteria', color: '#4c1d95' },
    ];

    const features = [
        { icon: '🧠', title: 'Standar Emas', desc: '567 item MMPI-2 tervalidasi secara klinis & psikometrik.' },
        { icon: '⚡', title: 'Hasil Real-time', desc: 'Laporan psikologis tersedia langsung setelah pengisian.' },
        { icon: '🔐', title: 'Anti-Curang', desc: 'Sistem deteksi inkonsistensi jawaban otomatis.' },
        { icon: '☁️', title: 'Akses Online', desc: 'Dapat diakses dari mana saja, kapan saja, perangkat apa saja.' },
    ];

    return (
        <div style={{ background: '#faf5ff', minHeight: '100vh', fontFamily: 'Inter, sans-serif', paddingBottom: '60px' }}>

            {/* HEADER */}
            <div style={{ position: 'relative', background: 'linear-gradient(160deg, #7c3aed 0%, #4c1d95 100%)', paddingBottom: '40px' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
                    {[...Array(4)].map((_, i) => (
                        <motion.div key={i}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
                            style={{ position: 'absolute', top: `${5 + i * 10}%`, right: `${-5 + i * 8}%`, width: `${80 + i * 20}px`, height: `${80 + i * 20}px`, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)' }} />
                    ))}
                </div>
                <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0, height: '40px', background: '#faf5ff', borderRadius: '40px 40px 0 0' }} />

                <div style={{ padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}>
                    <button onClick={() => navigate(-1)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)', flexShrink: 0 }}>
                        <ArrowLeft size={18} />
                    </button>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.15)', borderRadius: '20px', padding: '6px 14px', backdropFilter: 'blur(8px)' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '7px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: '#7c3aed', fontSize: '9px', fontWeight: '900' }}>M2</span>
                        </div>
                        <span style={{ fontSize: '15px', fontWeight: '900', color: 'white', letterSpacing: '0.5px' }}>MMPI-2 Online</span>
                    </div>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    style={{ padding: '20px 20px 16px', display: 'flex', alignItems: 'flex-start', gap: '16px', position: 'relative' }}>
                    <div style={{ flex: 1 }}>
                        <h1 style={{ fontSize: '20px', fontWeight: '900', color: 'white', lineHeight: 1.25, margin: 0 }}>
                            Uji Psikologi MMPI-2 Digital Standar Emas
                            <span style={{ display: 'block', color: '#e9d5ff', marginTop: '4px', fontSize: '15px', fontWeight: '700' }}>
                                Assessment SDM Akurat & Efisien
                            </span>
                        </h1>
                        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: '10px 0 0' }}>
                            567 Item · Analisis Real-time · Anti-Curang · Laporan Klinis Lengkap
                        </p>
                    </div>
                    <div style={{ width: '110px', flexShrink: 0, height: '120px', borderRadius: '20px', background: 'rgba(255,255,255,0.12)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.2)', backdropFilter: 'blur(8px)' }}>
                        <svg viewBox="0 0 100 100" width="90" height="90">
                            <circle cx="50" cy="45" r="28" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                            <path d="M30 45 Q35 30 50 28 Q65 30 70 45 Q65 60 50 62 Q35 60 30 45Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                            <path d="M38 45 Q42 38 50 37 Q58 38 62 45 Q58 52 50 53 Q42 52 38 45Z" fill="rgba(255,255,255,0.2)" />
                            <circle cx="50" cy="45" r="6" fill="white" opacity="0.9" />
                            <circle cx="50" cy="45" r="3" fill="#7c3aed" />
                            <line x1="50" y1="17" x2="50" y2="12" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="73" y1="45" x2="78" y2="45" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="27" y1="45" x2="22" y2="45" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="66" y1="29" x2="70" y2="25" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="34" y1="29" x2="30" y2="25" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            <div style={{ padding: '20px 20px 0' }}>
                <p style={{ fontSize: '13px', color: '#4c1d95', lineHeight: 1.7, margin: 0 }}>
                    Aplikasi pengujian <strong style={{ color: '#7c3aed' }}>MMPI-2 Online</strong> terintegrasi dengan analisis data sesuai standarisasi — hasil dapat langsung terlihat secara real-time, dilakukan secara online, sehingga praktis, mudah, dan akurat.
                </p>
            </div>

            {/* Scale Preview */}
            <div style={{ padding: '20px 20px 0' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'white', borderRadius: '24px', padding: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontSize: '12px', fontWeight: '900', color: '#4c1d95', letterSpacing: '1px', margin: '0 0 14px', textTransform: 'uppercase' }}>Skala Klinis MMPI-2</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {scales.map(({ code, name, color }) => (
                            <div key={code} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: `${color}12`, border: `1px solid ${color}30`, borderRadius: '10px', padding: '6px 10px' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontSize: '9px', fontWeight: '900', color: 'white' }}>{code}</span>
                                </div>
                                <span style={{ fontSize: '11px', fontWeight: '600', color }}>{name}</span>
                            </div>
                        ))}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(0,0,0,0.04)', borderRadius: '10px', padding: '6px 10px' }}>
                            <span style={{ fontSize: '11px', color: '#888' }}>+4 skala lainnya</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Features */}
            <div style={{ padding: '16px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {features.map((f, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                        style={{ background: 'white', borderRadius: '20px', padding: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                        <div style={{ fontSize: '13px', fontWeight: '800', color: '#4c1d95', marginBottom: '4px' }}>{f.title}</div>
                        <div style={{ fontSize: '11px', color: '#6d28d9', lineHeight: 1.5 }}>{f.desc}</div>
                    </motion.div>
                ))}
            </div>

            {/* Process Strip */}
            <div style={{ padding: '16px 20px 0' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)', borderRadius: '24px', padding: '18px 20px', boxShadow: '0 4px 24px rgba(124,58,237,0.35)' }}>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.55)', fontWeight: '700', letterSpacing: '1.5px', marginBottom: '10px' }}>ALUR PENGUJIAN MMPI-2</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        {['Registrasi', 'Pengisian', 'Skoring', 'Analisis', 'Laporan'].map((step, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '8px', padding: '5px 10px', fontSize: '11px', fontWeight: '700', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>{step}</div>
                                {i < 4 && <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>›</span>}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Use Cases */}
            <div style={{ padding: '16px 20px 0' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'white', borderRadius: '24px', padding: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontSize: '12px', fontWeight: '900', color: '#4c1d95', letterSpacing: '1px', margin: '0 0 12px', textTransform: 'uppercase' }}>Kasus Penggunaan</h3>
                    {['Seleksi & rekrutmen tenaga medis', 'Evaluasi psikologis berkala SDM', 'Asesmen jabatan struktural RS', 'Deteksi dini gangguan psikologis'].map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7c3aed', flexShrink: 0, marginTop: '5px' }} />
                            <span style={{ fontSize: '13px', color: '#4c1d95', lineHeight: 1.5 }}>{item}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* CTA */}
            <div style={{ padding: '32px 20px 0' }}>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={handleDemo}
                    style={{ width: '100%', padding: '13px 20px', borderRadius: '16px', background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)', color: 'white', fontWeight: '800', fontSize: '14px', border: 'none', cursor: 'pointer', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 8px 28px rgba(124,58,237,0.4)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)', borderRadius: '18px 18px 0 0', pointerEvents: 'none' }} />
                    <span style={{ fontSize: '18px' }}>💡</span>
                    <span>Ajukan Demo Sekarang</span>
                    <span style={{ fontSize: '16px', marginLeft: '2px' }}>→</span>
                </motion.button>
                <p style={{ textAlign: 'center', fontSize: '11px', color: '#7c3aed', marginTop: '10px' }}>
                    Tim kami akan menghubungi Anda untuk aktivasi akun demo eksklusif.
                </p>
            </div>
        </div>
    );
};

export default MMPI2Online;
