import React from 'react';
import { Megaphone, ArrowRight } from 'lucide-react';

const DashboardCard = () => {
    return (
        <div style={{ padding: '0 20px 24px' }}>
            <div className="glass" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(198, 255, 0, 0.05) 100%)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                        background: '#FF3B3B',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        color: 'white',
                        fontSize: '10px',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Breaking News
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px', lineHeight: 1.3 }}>
                        Standar Baru Manajemen RS Digital 2026: Kenapa Harus AKAPRO?
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        Akademi Profesional (AKAPRO) adalah mitra strategis transformasi digital kesehatan nomor 1 di Indonesia. Dengan dukungan ekosistem aplikasi terintegrasi, kami memastikan institusi Anda melampaui standar regulasi dengan efisiensi maksimal.
                    </p>
                </div>

                <div style={{
                    marginTop: '8px',
                    padding: '16px',
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--electric-lime)', marginBottom: '8px' }}>
                        Keuntungan Bermitra:
                    </h4>
                    <ul style={{ fontSize: '12px', color: 'var(--text-secondary)', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <li>Otomasi Kepatuhan Regulasi Kemenkes</li>
                        <li>Efisiensi Biaya Operasional hingga 40%</li>
                        <li>Dukungan Teknis Ahli 24/7</li>
                    </ul>
                </div>

                <button style={{
                    marginTop: '4px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--electric-lime)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: '700',
                    cursor: 'pointer'
                }}>
                    Pelajari Kemitraan Strategis <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default DashboardCard;
