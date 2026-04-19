import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import useDemo from '../hooks/useDemo';

const PintarMR = () => {
    const handleDemo = useDemo('PINTAR MR');
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const features = [
        { icon: '🛡️', title: 'ISO 31000', desc: 'Kerangka manajemen risiko internasional yang terstandarisasi.' },
        { icon: '📊', title: 'Balance Scorecard', desc: 'Monitoring KPI dan risiko berjalan simultan dalam satu dashboard.' },
        { icon: '🗺️', title: 'Risk Mapping', desc: 'Peta risiko visual interaktif dengan heat map prioritas.' },
        { icon: '🔔', title: 'Early Warning', desc: 'Notifikasi otomatis saat indikator risiko melampaui ambang batas.' },
    ];

    const risks = [
        { level: 'Kritis', color: '#FF3B5C', items: ['Keselamatan Pasien', 'Kepatuhan Regulasi'] },
        { level: 'Tinggi', color: '#FF8C00', items: ['Operasional SDM', 'Keuangan RS'] },
        { level: 'Sedang', color: '#FFB800', items: ['Reputasi Institusi', 'Teknologi Informasi'] },
    ];

    return (
        <div style={{ background: '#f0f2f8', minHeight: '100vh', fontFamily: 'Inter, sans-serif', paddingBottom: '60px' }}>

            <PageHeader
                gradient="linear-gradient(160deg, #6c3fc5 0%, #3a1a8a 100%)"
                bgColor="#f0f2f8"
                label="PINTAR-MR"
                labelColor="#6c3fc5"
                badgeLetter="M"
                title="Manajemen Risiko Terintegrasi Berbasis ISO 31000"
                subtitle="Lindungi Institusi dari Risiko Tersembunyi"
                subtitleColor="#d4b8ff"
                description="ISO 31000 · Renstra · Balance Scorecard · Risk Register · Mitigasi Otomatis"
                decorators={
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} style={{ position: 'absolute', width: `${60 + i * 30}px`, height: `${60 + i * 30}px`, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', top: `${10 + i * 8}%`, right: `${-10 + i * 5}%` }} />
                        ))}
                    </div>
                }
                illustration={
                    <svg viewBox="0 0 100 100" width="90" height="90">
                        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                        <polygon points="50,22 78,36 78,64 50,78 22,64 22,36" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <polygon points="50,34 66,42 66,58 50,66 34,58 34,42" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                        <circle cx="50" cy="50" r="8" fill="white" opacity="0.9" />
                        <path d="M46 50 L49 53 L55 47" stroke="#6c3fc5" strokeWidth="2" strokeLinecap="round" fill="none" />
                    </svg>
                }
            />

            <div style={{ padding: '20px 20px 0' }}>
                <p style={{ fontSize: '13px', color: '#4a3a6a', lineHeight: 1.7, margin: 0 }}>
                    Aplikasi Manajemen Risiko berbasis <strong style={{ color: '#6c3fc5' }}>ISO 31000</strong> yang terintegrasi dari Renstra dan pengukuran berbasis balance scorecard — monitoring risiko dan KPI RS berjalan simultan dalam satu platform yang komprehensif.
                </p>
            </div>

            {/* Risk Level Visual */}
            <div style={{ padding: '24px 20px 0' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'white', borderRadius: '24px', padding: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontSize: '12px', fontWeight: '900', color: '#3a1a8a', letterSpacing: '1px', margin: '0 0 16px', textTransform: 'uppercase' }}>Matriks Risiko</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {risks.map(({ level, color, items }) => (
                            <div key={level} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '70px', flexShrink: 0, background: color, borderRadius: '8px', padding: '4px 8px', textAlign: 'center' }}>
                                    <span style={{ fontSize: '10px', fontWeight: '800', color: 'white' }}>{level}</span>
                                </div>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    {items.map(item => (
                                        <span key={item} style={{ fontSize: '11px', background: `${color}15`, color, border: `1px solid ${color}30`, borderRadius: '6px', padding: '3px 8px', fontWeight: '600' }}>{item}</span>
                                    ))}
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
                        <div style={{ fontSize: '13px', fontWeight: '800', color: '#3a1a8a', marginBottom: '4px' }}>{f.title}</div>
                        <div style={{ fontSize: '11px', color: '#6a5a8a', lineHeight: 1.5 }}>{f.desc}</div>
                    </motion.div>
                ))}
            </div>

            {/* ISO Strip */}
            <div style={{ padding: '16px 20px 0' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'linear-gradient(135deg, #6c3fc5 0%, #3a1a8a 100%)', borderRadius: '24px', padding: '18px 20px', boxShadow: '0 4px 24px rgba(108,63,197,0.3)' }}>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.55)', fontWeight: '700', letterSpacing: '1.5px', marginBottom: '10px' }}>ALUR MANAJEMEN RISIKO ISO 31000</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        {['Identifikasi', 'Analisis', 'Evaluasi', 'Mitigasi', 'Monitor'].map((step, i) => (
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
                    <h3 style={{ fontSize: '12px', fontWeight: '900', color: '#3a1a8a', letterSpacing: '1px', margin: '0 0 12px', textTransform: 'uppercase' }}>Manfaat Utama</h3>
                    {['Deteksi dini risiko operasional & klinis', 'Laporan risiko otomatis siap audit', 'Integrasi Renstra & KPI dalam satu platform', 'Mitigasi terstruktur berbasis evidence'].map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6c3fc5', flexShrink: 0, marginTop: '5px' }} />
                            <span style={{ fontSize: '13px', color: '#4a3a6a', lineHeight: 1.5 }}>{item}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* CTA */}
            <div style={{ padding: '32px 20px 0' }}>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={handleDemo}
                    style={{ width: '100%', padding: '13px 20px', borderRadius: '16px', background: 'linear-gradient(135deg, #8b5cf6 0%, #6c3fc5 100%)', color: 'white', fontWeight: '800', fontSize: '14px', border: 'none', cursor: 'pointer', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 8px 28px rgba(108,63,197,0.4)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)', borderRadius: '18px 18px 0 0', pointerEvents: 'none' }} />
                    <span style={{ fontSize: '18px' }}>🛡️</span>
                    <span>Ajukan Demo Sekarang</span>
                    <span style={{ fontSize: '16px', marginLeft: '2px' }}>→</span>
                </motion.button>
                <p style={{ textAlign: 'center', fontSize: '11px', color: '#8a7aaa', marginTop: '10px' }}>
                    Tim kami akan menghubungi Anda untuk aktivasi akun demo eksklusif.
                </p>
            </div>
        </div>
    );
};

export default PintarMR;
