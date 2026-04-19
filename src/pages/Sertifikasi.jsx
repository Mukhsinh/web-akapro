import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certs = [
    {
        title: 'Sertifikasi Ahli Akuntansi Keuangan',
        desc: 'Program sertifikasi untuk profesional akuntansi dalam menyusun laporan keuangan sesuai standar IFRS dan peraturan lokal.',
        modules: ['Pelaporan Keuangan', 'Audit Internal', 'Manajemen Perpajakan']
    },
    {
        title: 'Sertifikasi Manajemen Resiko (QCRO)',
        desc: 'Pengakuan kompetensi tingkat internasional untuk pengelolaan resiko enterprise berbasis ISO 31000.',
        modules: ['Identifikasi Resiko', 'Analisis Kualitatif', 'Strategi Mitigasi']
    }
];

const Sertifikasi = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '24px' }}>Sertifikasi Kompetensi</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {certs.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        className="glass"
                        style={{ padding: '24px', borderTop: '4px solid gold' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <Award size={32} color="gold" />
                            <h3 style={{ fontSize: '18px', fontWeight: '800' }}>{cert.title}</h3>
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>{cert.desc}</p>
                        <div style={{ display: 'grid', gap: '10px' }}>
                            {cert.modules.map((m, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                                    <CheckCircle size={14} color="var(--electric-lime)" /> {m}
                                </div>
                            ))}
                        </div>
                        <button className="btn-primary" style={{ marginTop: '24px', width: '100%', background: 'white', color: 'black' }}>
                            Unduh Kurikulum
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Sertifikasi;
