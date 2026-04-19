import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Modern professional avatar SVGs for each role
const AvatarDireksi = () => (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="90">
        <ellipse cx="40" cy="97" rx="22" ry="4" fill="#000" opacity="0.08" />
        <rect x="14" y="54" width="52" height="42" rx="14" fill="#1a3a2a" />
        <polygon points="40,56 32,68 40,72 48,68" fill="white" opacity="0.95" />
        <polygon points="40,60 37,72 40,78 43,72" fill="#e8622a" />
        <polygon points="40,56 26,54 28,70" fill="#243f30" />
        <polygon points="40,56 54,54 52,70" fill="#243f30" />
        <rect x="46" y="60" width="8" height="5" rx="1" fill="white" opacity="0.5" />
        <circle cx="40" cy="34" r="18" fill="#f5c9a0" />
        <path d="M22 30 Q22 14 40 14 Q58 14 58 30 Q56 20 40 20 Q24 20 22 30Z" fill="#3a2010" />
        <circle cx="34" cy="33" r="2.2" fill="#2a1a0a" />
        <circle cx="46" cy="33" r="2.2" fill="#2a1a0a" />
        <circle cx="35" cy="32.2" r="0.7" fill="white" />
        <circle cx="47" cy="32.2" r="0.7" fill="white" />
        <path d="M34 40 Q40 45 46 40" stroke="#c0845a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <ellipse cx="22" cy="35" rx="3" ry="4" fill="#f5c9a0" />
        <ellipse cx="58" cy="35" rx="3" ry="4" fill="#f5c9a0" />
    </svg>
);

const AvatarCFO = () => (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="90">
        <ellipse cx="40" cy="97" rx="22" ry="4" fill="#000" opacity="0.08" />
        <rect x="14" y="54" width="52" height="42" rx="14" fill="#2d5a8e" />
        <polygon points="40,56 33,68 40,72 47,68" fill="white" opacity="0.95" />
        <polygon points="40,60 37.5,72 40,77 42.5,72" fill="#f0c040" />
        <polygon points="40,56 26,54 29,70" fill="#1e3f6a" />
        <polygon points="40,56 54,54 51,70" fill="#1e3f6a" />
        <rect x="17" y="62" width="10" height="13" rx="2" fill="white" opacity="0.25" />
        <rect x="19" y="64" width="6" height="2" rx="1" fill="white" opacity="0.5" />
        <circle cx="40" cy="34" r="18" fill="#e8b88a" />
        <path d="M22 28 Q22 13 40 13 Q58 13 58 28 Q55 18 40 18 Q25 18 22 28Z" fill="#1a0a00" />
        <rect x="29" y="30" width="10" height="7" rx="3" fill="none" stroke="#555" strokeWidth="1.5" />
        <rect x="41" y="30" width="10" height="7" rx="3" fill="none" stroke="#555" strokeWidth="1.5" />
        <line x1="39" y1="33" x2="41" y2="33" stroke="#555" strokeWidth="1.5" />
        <line x1="22" y1="33" x2="29" y2="33" stroke="#555" strokeWidth="1" />
        <line x1="51" y1="33" x2="58" y2="33" stroke="#555" strokeWidth="1" />
        <circle cx="34" cy="33" r="1.5" fill="#2a1a0a" />
        <circle cx="46" cy="33" r="1.5" fill="#2a1a0a" />
        <path d="M34 40 Q40 44 46 40" stroke="#b07840" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <ellipse cx="22" cy="35" rx="3" ry="4" fill="#e8b88a" />
        <ellipse cx="58" cy="35" rx="3" ry="4" fill="#e8b88a" />
    </svg>
);

const AvatarAdmin = () => (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="90">
        <ellipse cx="40" cy="97" rx="22" ry="4" fill="#000" opacity="0.08" />
        <rect x="14" y="54" width="52" height="42" rx="14" fill="#2d8c5e" />
        <polygon points="40,56 33,66 40,70 47,66" fill="#1a5c3a" />
        <rect x="16" y="60" width="14" height="18" rx="3" fill="white" opacity="0.2" />
        <rect x="18" y="58" width="10" height="4" rx="1" fill="white" opacity="0.35" />
        <rect x="19" y="63" width="8" height="1.5" rx="0.5" fill="white" opacity="0.4" />
        <rect x="19" y="66" width="6" height="1.5" rx="0.5" fill="white" opacity="0.4" />
        <rect x="19" y="69" width="7" height="1.5" rx="0.5" fill="white" opacity="0.4" />
        <path d="M50 62 Q56 68 54 76" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
        <circle cx="54" cy="77" r="3" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
        <circle cx="40" cy="34" r="18" fill="#f5d5b8" />
        <path d="M22 28 Q22 13 40 13 Q58 13 58 28 Q55 17 40 17 Q25 17 22 28Z" fill="#5a3010" />
        <ellipse cx="58" cy="22" rx="5" ry="10" fill="#5a3010" />
        <circle cx="34" cy="33" r="2.2" fill="#2a1a0a" />
        <circle cx="46" cy="33" r="2.2" fill="#2a1a0a" />
        <circle cx="35" cy="32.2" r="0.7" fill="white" />
        <circle cx="47" cy="32.2" r="0.7" fill="white" />
        <path d="M34 40 Q40 46 46 40" stroke="#c0845a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <ellipse cx="22" cy="35" rx="3" ry="4" fill="#f5d5b8" />
        <ellipse cx="58" cy="35" rx="3" ry="4" fill="#f5d5b8" />
    </svg>
);

const IsoDiorama = ({ scene }) => {
    const scenes = {
        hero: (
            <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <ellipse cx="100" cy="130" rx="80" ry="20" fill="#b8e8d4" opacity="0.5" />
                <rect x="55" y="40" width="90" height="60" rx="6" fill="#1a5c3a" />
                <rect x="60" y="45" width="80" height="50" rx="4" fill="#e8f5f0" />
                <rect x="65" y="52" width="50" height="4" rx="2" fill="#2d8c5e" opacity="0.7" />
                <rect x="65" y="60" width="35" height="3" rx="2" fill="#2d8c5e" opacity="0.4" />
                <rect x="65" y="67" width="45" height="3" rx="2" fill="#2d8c5e" opacity="0.4" />
                <rect x="65" y="74" width="30" height="3" rx="2" fill="#e8622a" opacity="0.5" />
                <rect x="93" y="100" width="14" height="12" rx="2" fill="#1a5c3a" />
                <rect x="82" y="112" width="36" height="5" rx="2" fill="#1a5c3a" />
                <circle cx="38" cy="68" r="10" fill="#f5d5b8" />
                <rect x="30" y="78" width="16" height="22" rx="4" fill="white" />
                <rect x="32" y="80" width="12" height="2" rx="1" fill="#2d8c5e" />
                <circle cx="155" cy="55" r="10" fill="#f0c040" opacity="0.9" />
                <text x="151" y="59" fontSize="10" fill="white" fontWeight="bold">$</text>
                <circle cx="168" cy="75" r="7" fill="#f0c040" opacity="0.6" />
                <rect x="148" y="95" width="8" height="20" rx="2" fill="#2d8c5e" opacity="0.7" />
                <rect x="158" y="88" width="8" height="27" rx="2" fill="#2d8c5e" opacity="0.9" />
                <rect x="168" y="100" width="8" height="15" rx="2" fill="#2d8c5e" opacity="0.5" />
            </svg>
        ),
        latarBelakang: (
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <polygon points="60,20 100,40 60,60 20,40" fill="#d4f0e4" />
                <polygon points="20,40 60,60 60,100 20,80" fill="#b8e8d4" />
                <polygon points="100,40 60,60 60,100 100,80" fill="#9adbc4" />
                <rect x="42" y="30" width="36" height="28" rx="3" fill="white" opacity="0.9" />
                <rect x="44" y="32" width="32" height="3" rx="1" fill="#2d8c5e" opacity="0.5" />
                <rect x="44" y="38" width="24" height="2" rx="1" fill="#2d8c5e" opacity="0.3" />
                <rect x="44" y="43" width="28" height="2" rx="1" fill="#2d8c5e" opacity="0.3" />
                <circle cx="75" cy="48" r="8" fill="#f5d5b8" />
                <rect x="69" y="56" width="12" height="16" rx="3" fill="#2d8c5e" />
            </svg>
        ),
        manfaat: (
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <polygon points="60,15 100,35 60,55 20,35" fill="#d4f0e4" />
                <polygon points="20,35 60,55 60,95 20,75" fill="#b8e8d4" />
                <polygon points="100,35 60,55 60,95 100,75" fill="#9adbc4" />
                <path d="M52 38 C52 34 56 30 60 34 C64 30 68 34 68 38 C68 44 60 50 60 50 C60 50 52 44 52 38Z" fill="#e8622a" opacity="0.8" />
                <ellipse cx="85" cy="62" rx="10" ry="4" fill="#f0c040" />
                <rect x="75" y="58" width="20" height="6" rx="0" fill="#f0c040" />
                <ellipse cx="85" cy="58" rx="10" ry="4" fill="#f5d060" />
                <path d="M30 65 L30 78 Q30 85 38 88 Q46 85 46 78 L46 65 Z" fill="#2d8c5e" opacity="0.8" />
                <path d="M35 73 L37 76 L43 70" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    };
    return scenes[scene] || null;
};

const PintarUC = () => {
    const navigate = useNavigate();
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleDemo = () => {
        const text = "Halo AKAPRO Indonesia, saya ingin mengajukan demo untuk aplikasi PINTAR UC.";
        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
    };

    const users = [
        { label: 'Direksi RS', avatar: <AvatarDireksi />, bg: 'linear-gradient(160deg, #e8f0ff 0%, #d0deff 100%)', accent: '#1a3a2a' },
        { label: 'CFO', avatar: <AvatarCFO />, bg: 'linear-gradient(160deg, #fff8e0 0%, #ffedb0 100%)', accent: '#2d5a8e' },
        { label: 'Admin RS', avatar: <AvatarAdmin />, bg: 'linear-gradient(160deg, #e0f5ec 0%, #c0e8d4 100%)', accent: '#1a5c3a' },
    ];

    return (
        <div style={{ background: '#f5f5f5', minHeight: '100vh', fontFamily: 'Inter, sans-serif', paddingBottom: '60px' }}>

            {/* ── HEADER TOKOPEDIA-STYLE ── */}
            <div style={{ position: 'relative', background: 'linear-gradient(160deg, #2d8c5e 0%, #1a5c3a 100%)', paddingBottom: '40px' }}>
                {/* Rounded bottom curve */}
                <div style={{
                    position: 'absolute', bottom: '-1px', left: 0, right: 0, height: '40px',
                    background: '#f5f5f5',
                    borderRadius: '40px 40px 0 0'
                }} />

                {/* Top bar: back + logo */}
                <div style={{ padding: '52px 20px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button
                        onClick={() => navigate(-1)}
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
                            width: '24px', height: '24px', borderRadius: '7px',
                            background: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <span style={{ color: '#1a5c3a', fontSize: '11px', fontWeight: '900' }}>P</span>
                        </div>
                        <span style={{ fontSize: '15px', fontWeight: '900', color: 'white', letterSpacing: '0.5px' }}>PINTAR-UC</span>
                    </div>
                </div>

                {/* Hero content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    style={{ padding: '20px 20px 16px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}
                >
                    <div style={{ flex: 1 }}>
                        <h1 style={{ fontSize: '20px', fontWeight: '900', color: 'white', lineHeight: 1.25, margin: 0 }}>
                            Sistem Unit Cost Terintegrasi Clinical Pathway
                            <span style={{ display: 'block', color: '#b8f0d4', marginTop: '4px', fontSize: '15px', fontWeight: '700' }}>
                                Masa Depan Manajemen RS Cerdas
                            </span>
                        </h1>
                        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: '10px 0 0' }}>
                            Activity Based Costing Modified + double distribution + clinical pathway + IDRG + IDRG
                        </p>
                    </div>
                    <div style={{
                        width: '120px', flexShrink: 0, height: '130px', borderRadius: '20px',
                        background: 'rgba(255,255,255,0.15)',
                        overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)', padding: '8px',
                        backdropFilter: 'blur(8px)'
                    }}>
                        <IsoDiorama scene="hero" />
                    </div>
                </motion.div>
            </div>

            {/* Description */}
            <div style={{ padding: '20px 20px 0' }}>
                <p style={{ fontSize: '13px', color: '#3a5a4a', lineHeight: 1.7, margin: 0 }}>
                    Sistem penghitungan unit cost terintegrasi berbasis Activity Based Costing Modified dengan metode double distribution dan terintegrasi dengan clinical pathway — untuk kendali biaya rumah sakit yang cermat, akurat, dan terhindar dari <strong style={{ color: '#c0392b' }}>kerugian yang tidak teridentifikasi</strong>.
                </p>
            </div>

            {/* Cards */}
            <div style={{ padding: '24px 20px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>

                {/* Latar Belakang */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'white', borderRadius: '24px', padding: '20px', display: 'flex', gap: '16px', alignItems: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
                >
                    <div style={{ width: '100px', height: '100px', flexShrink: 0, borderRadius: '16px', background: 'linear-gradient(135deg, #d4f0e4 0%, #c0e8d4 100%)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IsoDiorama scene="latarBelakang" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '12px', fontWeight: '900', color: '#1a3a2a', letterSpacing: '1px', margin: '0 0 8px', textTransform: 'uppercase' }}>Latar Belakang</h3>
                        <p style={{ fontSize: '13px', color: '#4a6a5a', lineHeight: 1.6, margin: 0 }}>
                            Tantangan data medis dan keuangan yang terpisah. Aplikasi kami mengintegrasikan kepatuhan medis dengan akurasi biaya riil.
                        </p>
                    </div>
                </motion.div>

                {/* Clinical Pathway strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'linear-gradient(135deg, #2d8c5e 0%, #1a5c3a 100%)', borderRadius: '24px', padding: '18px 20px', boxShadow: '0 4px 24px rgba(45,140,94,0.25)' }}
                >
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.55)', fontWeight: '700', letterSpacing: '1.5px', marginBottom: '10px' }}>CLINICAL PATHWAY</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        {['Diagnosis', 'Tests', 'Procedure', 'Recovery'].map((step, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '8px', padding: '5px 12px', fontSize: '11px', fontWeight: '700', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>{step}</div>
                                {i < 3 && <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>›</span>}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Manfaat */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'white', borderRadius: '24px', padding: '20px', display: 'flex', gap: '16px', alignItems: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
                >
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '12px', fontWeight: '900', color: '#1a3a2a', letterSpacing: '1px', margin: '0 0 12px', textTransform: 'uppercase' }}>Manfaat</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {['Hitung biaya riil per tindakan', 'Optimalisasi margin pelayanan', 'Peningkatan kepatuhan standar medis', 'Pengambilan keputusan berbasis data'].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2d8c5e', flexShrink: 0, marginTop: '5px' }} />
                                    <span style={{ fontSize: '13px', color: '#3a5a4a', lineHeight: 1.5 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ width: '90px', height: '110px', flexShrink: 0, borderRadius: '16px', background: 'linear-gradient(135deg, #d4f0e4 0%, #c0e8d4 100%)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IsoDiorama scene="manfaat" />
                    </div>
                </motion.div>

                {/* Target Pengguna */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'white', borderRadius: '24px', padding: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
                >
                    <h3 style={{ fontSize: '12px', fontWeight: '900', color: '#1a3a2a', letterSpacing: '1px', margin: '0 0 16px', textTransform: 'uppercase' }}>Target Pengguna</h3>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                        {users.map(({ label, avatar, bg, accent }) => (
                            <div key={label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                <div style={{
                                    width: '100%', borderRadius: '20px', background: bg,
                                    display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                                    paddingTop: '14px', overflow: 'hidden',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                                    minHeight: '110px'
                                }}>
                                    {avatar}
                                </div>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: accent, textAlign: 'center', letterSpacing: '0.3px' }}>{label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* CTA */}
            <div style={{ padding: '32px 20px 0' }}>
                <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(232,98,42,0.45)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleDemo}
                    style={{
                        width: '100%', padding: '13px 20px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #ff6b1a 0%, #e8420a 100%)',
                        color: 'white', fontWeight: '800', fontSize: '14px',
                        border: 'none', cursor: 'pointer',
                        letterSpacing: '0.5px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: '8px',
                        boxShadow: '0 8px 28px rgba(232,98,42,0.4)',
                        position: 'relative', overflow: 'hidden'
                    }}
                >
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)',
                        borderRadius: '18px 18px 0 0', pointerEvents: 'none'
                    }} />
                    <span style={{ fontSize: '18px' }}>🚀</span>
                    <span>Ajukan Demo Sekarang</span>
                    <span style={{ fontSize: '16px', marginLeft: '2px' }}>→</span>
                </motion.button>
                <p style={{ textAlign: 'center', fontSize: '11px', color: '#6a8a7a', marginTop: '10px' }}>
                    Tim kami akan menghubungi Anda untuk aktivasi akun demo eksklusif.
                </p>
            </div>
        </div>
    );
};

export default PintarUC;
