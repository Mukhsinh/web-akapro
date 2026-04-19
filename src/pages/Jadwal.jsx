import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Download, X } from 'lucide-react';
import jsPDF from 'jspdf';

const events = [
    {
        title: 'Pelatihan Manajemen Unit Cost RS',
        date: '15-17 Mei 2026',
        location: 'Hotel Santika Premiere, Yogyakarta',
        investment: { single: '6.500.000', twin: '5.500.000', noStay: '4.500.000' },
        quota: 20
    },
    {
        title: 'Manajemen Resiko & ISO 31000',
        date: '22-24 Juni 2026',
        location: 'Hotel Merlynn Park, Jakarta',
        investment: { single: '7.000.000', twin: '6.000.000', noStay: '5.000.000' },
        quota: 15
    }
];

const Jadwal = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const generateTOR = (event) => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.width;
        doc.setFillColor(198, 255, 0);
        doc.rect(0, 0, pageWidth, 35, 'F');
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text('AKADEMI PROFESIONAL INDONESIA', pageWidth / 2, 15, { align: 'center' });
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('Perumahan Saphire Blok C3, Jl. Truntum Pekalongan', pageWidth / 2, 22, { align: 'center' });
        doc.text('Email: akademiprofesional@gmail.com | WA: 085726112001', pageWidth / 2, 28, { align: 'center' });
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('TERM OF REFERENCE (TOR)', pageWidth / 2, 50, { align: 'center' });
        doc.text(event.title, pageWidth / 2, 58, { align: 'center' });
        doc.save(`TOR_${event.title.replace(/\s+/g, '_')}.pdf`);
    };

    return (
        <div style={{ background: 'var(--midnight-carbon)', minHeight: '100vh', padding: '100px 20px 40px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '24px', color: 'white' }}>
                Jadwal Pelatihan
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {events.map((ev, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="glass" style={{ padding: '24px', borderRadius: '24px' }}>
                        <h4 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--electric-lime)', marginBottom: '16px' }}>{ev.title}</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-secondary)' }}><Calendar size={16} /> {ev.date}</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-secondary)' }}><MapPin size={16} /> {ev.location}</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-secondary)' }}><Users size={16} /> Sisa Kuota: {ev.quota}</div>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', marginBottom: '20px', fontSize: '13px' }}>
                            <p style={{ marginBottom: '4px' }}>Investasi (Single): Rp {ev.investment.single}</p>
                            <p style={{ marginBottom: '4px' }}>Investasi (Twin): Rp {ev.investment.twin}</p>
                            <p>Investasi (Non-Inap): Rp {ev.investment.noStay}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button onClick={() => generateTOR(ev)} style={{ flex: 1, padding: '14px', borderRadius: '12px', background: 'rgba(198, 255, 0, 0.1)', border: '1px solid var(--electric-lime)', color: 'var(--electric-lime)', fontSize: '14px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <Download size={18} /> Unduh TOR
                            </button>
                            <button onClick={() => setSelectedEvent(ev)} style={{ flex: 1, padding: '14px', borderRadius: '12px', background: 'var(--electric-lime)', border: 'none', color: 'black', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}>
                                Daftar Sekarang
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.9)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', overflowY: 'auto' }} onClick={() => setSelectedEvent(null)}>
                        <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="glass" style={{ width: '100%', maxWidth: '400px', padding: '28px', borderRadius: '24px', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }} onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => setSelectedEvent(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}>
                                <X size={18} />
                            </button>
                            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '24px' }}>Form Registrasi</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <input type="text" placeholder="Nama Lengkap *" style={{ padding: '14px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '14px', outline: 'none' }} />
                                <input type="email" placeholder="Email *" style={{ padding: '14px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '14px', outline: 'none' }} />
                                <input type="tel" placeholder="No. WhatsApp *" style={{ padding: '14px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '14px', outline: 'none' }} />
                                <input type="text" placeholder="Instansi/Rumah Sakit *" style={{ padding: '14px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '14px', outline: 'none' }} />
                                <select style={{ padding: '14px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '14px', outline: 'none' }}>
                                    <option value="">Pilih Jenis Kamar *</option>
                                    <option value="single">Single Room</option>
                                    <option value="twin">Twin Sharing</option>
                                    <option value="nostay">Non-Inap</option>
                                </select>
                                <div style={{ padding: '16px', border: '2px solid var(--electric-lime)', borderRadius: '16px', background: 'rgba(198, 255, 0, 0.05)', marginTop: '8px' }}>
                                    <p style={{ fontSize: '12px', fontWeight: '700', marginBottom: '8px', color: 'var(--electric-lime)' }}>Metode Pembayaran:</p>
                                    <p style={{ fontSize: '14px', marginBottom: '4px' }}>Transfer Bank BRI</p>
                                    <p style={{ fontSize: '16px', fontWeight: '800', color: 'var(--electric-lime)' }}>1234-5678-9012</p>
                                    <p style={{ fontSize: '13px', marginTop: '4px' }}>a.n. AKAPRO Indonesia</p>
                                </div>
                                <button style={{ width: '100%', padding: '16px', borderRadius: '12px', background: 'var(--electric-lime)', border: 'none', color: 'black', fontSize: '15px', fontWeight: '800', cursor: 'pointer', marginTop: '12px' }} onClick={() => { alert('Terima kasih! Kami akan menghubungi Anda segera.'); setSelectedEvent(null); }}>
                                    Konfirmasi Pendaftaran
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Jadwal;
