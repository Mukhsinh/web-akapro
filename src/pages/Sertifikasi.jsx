import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Download, X, BookOpen, Target, FileText } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { supabase } from '../lib/supabaseClient';

const certs = [
    {
        title: 'Sertifikasi Manajemen Keuangan Rumah Sakit (SMK-RS)',
        subtitle: 'Profesional Keuangan Kesehatan Terakreditasi',
        desc: 'Program spesialisasi bagi manajer keuangan RS untuk menguasai pengelolaan unit cost, BLU/BLUD, dan optimalisasi pajak.',
        background: 'Manajemen keuangan di sektor kesehatan memerlukan keahlian khusus karena kompleksitas sumber pendapatan dan regulasi BLU/BLUD. Sertifikasi ini memastikan kompetensi pengelola keuangan sesuai standar nasional.',
        target: 'Manajer Keuangan RS, Bendahara Penerimaan/Pengeluaran, Konsultan Keuangan Medik',
        output: 'Peserta tersertifikasi mampu menyusun RBA/RKA yang akurat, melakukan evaluasi kinerja keuangan, dan meminimalkan temuan pemeriksaan.',
        investment: '4.500.000',
        modules: [
            { name: 'Manajemen Biaya & Unit Cost', details: 'Analisis biaya per pasien, per-DRG, dan strategi outsourcing.', jp: 8 },
            { name: 'Pengelolaan Keuangan BLU/BLUD', details: 'Fleksibilitas keuangan, remunerasi, dan tata kelola aset.', jp: 6 },
            { name: 'Audit Internal & Fraud Control', details: 'Sistem pengendalian intern dan mitigasi kecurangan klaim.', jp: 6 }
        ]
    },
    {
        title: 'Sertifikasi Manajemen Resiko (QCRO - AKAPRO)',
        subtitle: 'Qualified Certified Risk Officer for Institutional Governance',
        desc: 'Pengakuan kompetensi tingkat tinggi untuk pengelolaan resiko korporat/lembaga berbasis ISO 31000:2018.',
        background: 'Di tengah ketidakpastian global, kemampuan mengidentifikasi dan mengelola resiko adalah aset strategis. Sertifikasi QCRO memberikan metodologi teruji untuk menjaga keberlangsungan organisasi.',
        target: 'Chief Risk Officer, Auditor Internal, Direktur Kepatuhan, Manajer Operasional',
        output: 'Peserta memiliki kemampuan menyusun Risk Map, melakukan stress testing, dan membangun budaya sadar resiko secara sistematis.',
        investment: '5.500.000',
        modules: [
            { name: 'Governance, Risk, and Compliance (GRC)', details: 'Integrasi tata kelola, manajemen resiko, dan kepatuhan regulasi.', jp: 6 },
            { name: 'Risk Assessment Techniques', details: 'Analisis SWOT, FMEA, dan simulasi Monte Carlo.', jp: 10 },
            { name: 'Strategic Risk Mitigation', details: 'Transfer resiko, asuransi, dan manajemen krisis.', jp: 4 }
        ]
    }
];

const Sertifikasi = () => {
    /* ... existing state and effects ... */
    const [selectedCert, setSelectedCert] = useState(null);
    const [signatureUrl, setSignatureUrl] = useState(null);

    useEffect(() => {
        const getSig = async () => {
            try {
                const { data, error } = await supabase.from('konten_halaman').select('value').eq('halaman', 'global').eq('key', 'signature_url');
                if (!error && data && data.length > 0) {
                    setSignatureUrl(data[0].value);
                }
            } catch (err) {
                console.error("Error fetching signature:", err);
            }
        };
        getSig();
    }, []);

    /* ... PDF generation logic ... */

    return (
        <div style={{ background: 'var(--midnight-carbon)', minHeight: '100vh', padding: '60px 20px', color: 'white' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: '900' }}>
                        Sertifikasi Kompetensi
                    </motion.h2>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                    gap: '24px'
                }}>
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="glass"
                            style={{
                                padding: 'clamp(20px, 5vw, 40px)',
                                borderRadius: '40px',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                border: '1px solid rgba(255,255,255,0.05)',
                                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <FileText size={20} color="var(--electric-lime)" />
                                    <div style={{ background: 'rgba(198, 255, 0, 0.1)', padding: '4px 12px', borderRadius: '100px', fontSize: '10px', color: 'var(--electric-lime)', fontWeight: '800' }}>OFFICIAL PROGRAM</div>
                                </div>
                                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', color: 'var(--electric-lime)', fontWeight: '700', border: '1px solid rgba(198, 255, 0, 0.2)' }}>
                                    Investasi: Rp {cert.investment}
                                </div>
                            </div>

                            <h3 style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: '800', marginBottom: '12px', lineHeight: '1.3' }}>{cert.title}</h3>
                            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '20px', letterSpacing: '0.5px' }}>{cert.subtitle}</p>

                            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '32px' }}>{cert.desc}</p>

                            <div style={{ display: 'grid', gap: '12px', marginBottom: '40px' }}>
                                {cert.modules.map((m, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>
                                        <CheckCircle size={18} color="var(--electric-lime)" /> {m.name}
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                <button
                                    onClick={() => generateCurriculumPDF(cert)}
                                    style={{ flex: '1 1 180px', padding: '18px', borderRadius: '20px', background: 'white', color: 'black', border: 'none', fontWeight: '800', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(255,255,255,0.1)' }}
                                >
                                    <Download size={20} /> Unduh Kurikulum
                                </button>
                                <button
                                    onClick={() => setSelectedCert(cert)}
                                    style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }}
                                >
                                    <Target size={24} color="var(--electric-lime)" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.95)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(15px)' }}>
                        <motion.div initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }} style={{ width: '100%', maxWidth: '600px', background: '#111', padding: '48px', borderRadius: '48px', position: 'relative', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <button onClick={() => setSelectedCert(null)} style={{ position: 'absolute', top: '32px', right: '32px', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}>
                                <X size={20} />
                            </button>

                            <div style={{ marginBottom: '32px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <BookOpen size={24} color="var(--electric-lime)" />
                                    <h3 style={{ fontSize: '28px', fontWeight: '900' }}>Detail Program</h3>
                                </div>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-secondary)' }}>{selectedCert.title}</h4>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxHeight: '50vh', overflowY: 'auto', paddingRight: '12px' }}>
                                <div>
                                    <h5 style={{ fontSize: '12px', fontWeight: '800', color: 'var(--electric-lime)', marginBottom: '12px', letterSpacing: '1px' }}>LATAR BELAKANG</h5>
                                    <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.6)' }}>{selectedCert.background}</p>
                                </div>
                                <div>
                                    <h5 style={{ fontSize: '12px', fontWeight: '800', color: 'var(--electric-lime)', marginBottom: '12px', letterSpacing: '1px' }}>TARGET OUTPUT</h5>
                                    <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.6)' }}>{selectedCert.output}</p>
                                </div>
                                <div>
                                    <h5 style={{ fontSize: '12px', fontWeight: '800', color: 'var(--electric-lime)', marginBottom: '12px', letterSpacing: '1px' }}>MATERI PEMBELAJARAN</h5>
                                    <div style={{ display: 'grid', gap: '16px' }}>
                                        {selectedCert.modules.map((m, i) => (
                                            <div key={i} style={{ padding: '20px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                <p style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px' }}>{m.name}</p>
                                                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{m.details}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button style={{ width: '100%', padding: '20px', borderRadius: '24px', background: 'var(--electric-lime)', border: 'none', color: 'black', fontSize: '16px', fontWeight: '900', cursor: 'pointer', marginTop: '40px' }} onClick={() => { setSelectedCert(null); }}>
                                Tutup Detail
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Sertifikasi;
