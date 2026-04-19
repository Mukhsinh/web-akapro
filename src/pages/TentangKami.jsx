import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react';

const experts = [
    { name: 'Dr. Ahmad Profesional', role: 'Direktur Utama', photo: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Siti Akuntansi, SE, M.Ak', role: 'Tenaga Ahli Keuangan', photo: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Budi Resiko, ST, QCRO', role: 'Tenaga Ahli Manajemen Resiko', photo: 'https://i.pravatar.cc/150?u=3' },
];

const TentangKami = () => {
    return (
        <div style={{ padding: '20px' }}>
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px' }}>Tentang Kami</h2>
                <div className="glass" style={{ padding: '24px' }}>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        Akademi Profesional Indonesia (AKAPRO) adalah lembaga pengembangan kompetensi dan solusi digital enterprise
                        yang berfokus pada penguatan kapasitas tenaga profesional di sektor kesehatan dan sektor publik.
                        Kami menghadirkan inovasi teknologi yang terintegrasi untuk mendukung tata kelola organisasi yang transparan dan akuntabel.
                    </p>
                </div>
            </section>

            <section style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Tenaga Ahli</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
                    {experts.map((exp, idx) => (
                        <motion.div key={idx} className="glass" style={{ padding: '16px', textAlign: 'center' }}>
                            <img src={exp.photo} alt={exp.name} style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '12px' }} />
                            <h5 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '4px' }}>{exp.name}</h5>
                            <p style={{ fontSize: '11px', color: 'var(--electric-lime)' }}>{exp.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Kontak & Lokasi</h3>
                <div className="glass" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '14px' }}>
                        <MapPin color="var(--electric-lime)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <p style={{ color: 'var(--text-secondary)' }}>Perumahan Saphire Blok C3, Jl. Truntum Pekalongan</p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '14px' }}>
                        <Phone color="var(--electric-lime)" size={20} style={{ flexShrink: 0 }} />
                        <p style={{ color: 'var(--text-secondary)' }}>085726112001</p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '14px' }}>
                        <Mail color="var(--electric-lime)" size={20} style={{ flexShrink: 0 }} />
                        <p style={{ color: 'var(--text-secondary)' }}>akademiprofesional@gmail.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TentangKami;
