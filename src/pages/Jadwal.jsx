import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Download, X } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { supabase } from '../lib/supabaseClient';

const events = [
    {
        title: 'Manajemen Unit Cost Rumah Sakit',
        subtitle: 'Strategi Pengelolaan Keuangan & Optimalisasi Pendapatan RS',
        date: '15-17 Mei 2026',
        location: 'Hotel Santika Premiere, Yogyakarta',
        investment: { single: '3.200.000', twin: '2.600.000', noStay: '1.750.000' },
        quota: 20,
        background: 'Dalam era JKN yang dinamis, pengelolaan unit cost menjadi instrumen krusial bagi sustainabilitas Rumah Sakit. Ketepatan dalam menghitung biaya per layanan menentukan efisiensi operasional dan akurasi penetapan tarif.',
        objectives: [
            'Memahami konsep dasar manajemen biaya di sektor kesehatan',
            'Menguasai teknik perhitungan Activity Based Costing (ABC)',
            'Mampu melakukan simulasi tarif berbasis biaya riil',
            'Menyusun strategi subsidi silang dan efisiensi biaya'
        ],
        target: 'Direktur Keuangan, Manajer Keuangan RS, Kepala Bagian Anggaran, Konsultan Manajemen Kesehatan.',
        curriculum: [
            { topic: 'Konsep Dasar & Klasifikasi Biaya di Rumah Sakit', jp: 4 },
            { topic: 'Metode Perhitungan Unit Cost (ABC & Double Distribution)', jp: 8 },
            { topic: 'Simulasi Perhitungan Menggunakan Software Support', jp: 4 },
            { topic: 'Analisis Break Even Point (BEP) Layanan Medik', jp: 4 },
            { topic: 'Penyusunan Tarif Berbasis Unit Cost & Market Pricing', jp: 4 }
        ]
    },
    {
        title: 'Manajemen Resiko & Keselamatan Pasien',
        subtitle: 'Patient Safety & Risk Management in Digital Era',
        date: '22-24 Juni 2026',
        location: 'The Trans Resort, Bali',
        investment: { single: '3.200.000', twin: '2.600.000', noStay: '1.750.000' },
        quota: 15,
        background: 'Keselamatan pasien adalah prioritas utama akreditasi Rumah Sakit. Mitigasi resiko klinis dan non-klinis melalui pendekatan sistematik menjadi kunci dalam mencegah KTD (Kejadian Tidak Diharapkan).',
        objectives: [
            'Memahami standar akreditasi keselamatan pasien terbaru',
            'Mampu melakukan RCA (Root Cause Analysis) secara benar',
            'Menguasai teknik FMEA (Failure Mode and Effects Analysis)',
            'Membangun budaya keselamatan di lingkungan kerja'
        ],
        target: 'Komite Mutu & Keselamatan Pasien, Manajer Resiko, Kepala Ruangan, Perawat Senior.',
        curriculum: [
            { topic: 'Instrumen Identifikasi Resiko Klinis', jp: 4 },
            { topic: 'Audit Keselamatan Pasien & Manajemen Insiden', jp: 6 },
            { topic: 'Implementasi RCA Terintegrasi pada Kejadian Sentinel', jp: 6 },
            { topic: 'Digitalisasi Pelaporan Insiden Keselamatan Pasien', jp: 4 },
            { topic: 'Monitoring, Review, dan Pelaporan Resiko', jp: 4 }
        ]
    }
];

const Jadwal = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
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

    const generateTOR = (event) => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
        const marginX = 20;

        // Header Function
        const renderHeader = () => {
            doc.setFillColor(20, 20, 20);
            doc.rect(0, 0, pageWidth, 40, 'F');
            doc.setTextColor(198, 255, 0);
            doc.setFontSize(26);
            doc.setFont('helvetica', 'bold');
            doc.text('AKAPRO', 20, 22);
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text('AKADEMI PROFESIONAL INDONESIA', 20, 30);
            doc.setFontSize(8);
            doc.text('Perumahan Saphire Blok C3, Jl. Truntum Pekalongan', pageWidth - 20, 20, { align: 'right' });
            doc.text('Email: akademiprofesional@gmail.com | WA: 085726112001', pageWidth - 20, 25, { align: 'right' });
        };

        let currentY = 55;
        const checkPageBreak = (needed) => {
            if (currentY + needed > pageHeight - 30) {
                doc.addPage();
                currentY = 25;
                return true;
            }
            return false;
        };

        const renderTextWithBreaks = (title, content) => {
            checkPageBreak(15);
            doc.setFontSize(11);
            doc.setFont('helvetica', 'bold');
            doc.text(title, 20, currentY);
            currentY += 8;

            const lines = doc.splitTextToSize(content, pageWidth - 45);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');

            lines.forEach(line => {
                checkPageBreak(7);
                doc.text(line, 25, currentY);
                currentY += 6;
            });
            currentY += 6;
        };

        // Render Page 1
        renderHeader();
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text('TERM OF REFERENCE (TOR)', pageWidth / 2, currentY, { align: 'center' });
        currentY += 8;
        doc.setFontSize(14);
        doc.text(event.title.toUpperCase(), pageWidth / 2, currentY, { align: 'center' });
        currentY += 10;
        doc.setDrawColor(198, 255, 0);
        doc.setLineWidth(1);
        doc.line(20, currentY, pageWidth - 20, currentY);

        currentY += 12;
        renderTextWithBreaks('I. LATAR BELAKANG', event.background);

        // Objectives List
        checkPageBreak(15);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text('II. TUJUAN PELATIHAN', 20, currentY);
        currentY += 8;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        event.objectives.forEach((obj, idx) => {
            const wrappedObj = doc.splitTextToSize(`${idx + 1}. ${obj}`, pageWidth - 50);
            wrappedObj.forEach(line => {
                checkPageBreak(7);
                doc.text(line, 25, currentY);
                currentY += 6;
            });
        });
        currentY += 6;

        renderTextWithBreaks('III. SASARAN PESERTA', event.target);

        // Curriculum Table
        checkPageBreak(60);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text('IV. STRUKTUR MATERI / KURIKULUM', 20, currentY);
        currentY += 5;

        const tableData = event.curriculum.map((m, idx) => [
            (idx + 1).toString(),
            m.topic,
            m.jp + ' JP'
        ]);

        autoTable(doc, {
            startY: currentY,
            head: [['NO', 'MATERI PEMBELAJARAN', 'WAKTU']],
            body: tableData,
            styles: { fontSize: 9, cellPadding: 4 },
            headStyles: { fillColor: [20, 20, 20], textColor: [198, 255, 0], fontStyle: 'bold' },
            alternateRowStyles: { fillColor: [245, 245, 245] },
            margin: { left: 20, right: 20 },
            didDrawPage: (data) => {
                currentY = data.cursor.y;
            }
        });

        currentY += 15;

        // Investment Section in TOR
        checkPageBreak(40);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text('V. BIAYA INVESTASI', 20, currentY);
        currentY += 8;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(`1. Tidak Menginap: Rp ${event.investment.noStay}`, 25, currentY);
        currentY += 6;
        doc.text(`2. Menginap (Twin Sharing): Rp ${event.investment.twin}`, 25, currentY);
        currentY += 6;
        doc.text(`3. Menginap (Single): Rp ${event.investment.single}`, 25, currentY);
        currentY += 10;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        doc.text('* Biaya sudah termasuk sertifikat, materi pelatihan, room meeting, dan konsumsi.', 25, currentY);

        currentY += 15;

        // Signature section
        checkPageBreak(60);
        const sigX = pageWidth - 85;
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text('Pekalongan, ' + new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }), sigX, currentY);
        currentY += 6;
        doc.text('Direktur AKAPRO,', sigX, currentY);

        currentY += 5;
        if (signatureUrl) {
            try {
                doc.addImage(signatureUrl, 'PNG', sigX + 5, currentY, 40, 20);
                currentY += 22;
            } catch (e) {
                console.error("Error adding signature image:", e);
                currentY += 25;
            }
        } else {
            currentY += 25;
        }

        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text('Mukhsin Hadi, SE, M.Si', sigX, currentY);
        doc.line(sigX, currentY + 1, sigX + 60, currentY + 1);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.text('Direktur Utama', sigX, currentY + 5);

        // Watermark ttd eletronik removed as requested

        // Global Footer & Page Numbering
        const totalPages = doc.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(150);
            doc.text('Sistem Informasi AKAPRO - Professional Academy Indonesia', 20, pageHeight - 15);
            doc.text(`Halaman ${i} dari ${totalPages}`, pageWidth - 20, pageHeight - 15, { align: 'right' });
        }

        doc.save(`TOR_${event.title.replace(/\s+/g, '_')}.pdf`);
    };

    return (
        <div style={{ background: 'var(--midnight-carbon)', minHeight: '100vh', padding: '60px 20px', color: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontSize: 'clamp(32px, 8vw, 64px)',
                            fontWeight: '900',
                            letterSpacing: '-2px',
                            background: 'linear-gradient(to bottom, #fff 50%, rgba(255,255,255,0.4))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: '1.1'
                        }}
                    >
                        Jadwal Pelatihan
                    </motion.h2>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                    gap: '24px'
                }}>
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass"
                            style={{
                                padding: 'clamp(20px, 5vw, 40px)',
                                borderRadius: '40px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden',
                                height: '100%'
                            }}
                        >
                            <div style={{ position: 'absolute', top: 0, right: 0, padding: '24px', opacity: 0.1 }}>
                                <Users size={80} />
                            </div>

                            <div style={{ marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--electric-lime)', fontWeight: '700', fontSize: '13px' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--electric-lime)', boxShadow: '0 0 10px var(--electric-lime)' }}></div>
                                        BATCH 2026
                                    </div>
                                    <div style={{ background: 'rgba(198, 255, 0, 0.15)', padding: '6px 14px', borderRadius: '100px', fontSize: '11px', color: 'var(--electric-lime)', fontWeight: '800', border: '1px solid rgba(198, 255, 0, 0.3)' }}>
                                        Mulai Rp {event.investment.noStay}
                                    </div>
                                </div>
                                <h3 style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: '800', marginBottom: '12px', lineHeight: '1.3' }}>{event.title}</h3>
                                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontWeight: '500' }}>{event.subtitle}</p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                                    <Calendar size={16} color="var(--electric-lime)" /> {event.date}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                                    <MapPin size={16} color="var(--electric-lime)" /> {event.location}
                                </div>
                            </div>

                            <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '12px', position: 'relative', zIndex: 1 }}>
                                <button
                                    onClick={() => generateTOR(event)}
                                    style={{ flex: '1 1 200px', padding: '18px', borderRadius: '24px', background: 'white', color: 'black', border: 'none', fontWeight: '900', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: 'all 0.3s' }}
                                >
                                    <Download size={20} /> Unduh TOR
                                </button>
                                <button onClick={() => setSelectedEvent(event)} style={{ flex: '0 0 auto', padding: '18px 24px', borderRadius: '24px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontWeight: '800', cursor: 'pointer' }}>
                                    Detail
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedEvent && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.95)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(20px)' }}>
                        <motion.div initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }} style={{ width: '100%', maxWidth: '700px', background: '#111', padding: '48px', borderRadius: '50px', position: 'relative', border: '1px solid rgba(255,255,255,0.1)', maxHeight: '90vh', overflowY: 'auto' }}>
                            <button onClick={() => setSelectedEvent(null)} style={{ position: 'absolute', top: '32px', right: '32px', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white', transition: 'all 0.3s' }}>
                                <X size={24} />
                            </button>

                            <h3 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '16px', lineHeight: '1.2' }}>{selectedEvent.title}</h3>
                            <div style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <h4 style={{ fontSize: '13px', fontWeight: '800', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px' }}>BIAYA INVESTASI</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>Tidak Menginap</p>
                                        <p style={{ fontSize: '16px', fontWeight: '800', color: 'var(--electric-lime)' }}>Rp {selectedEvent.investment.noStay}</p>
                                    </div>
                                    <div style={{ background: 'rgba(198,255,0,0.05)', padding: '12px', borderRadius: '16px', border: '1px solid rgba(198,255,0,0.1)' }}>
                                        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>Menginap (Twin)</p>
                                        <p style={{ fontSize: '16px', fontWeight: '800', color: 'var(--electric-lime)' }}>Rp {selectedEvent.investment.twin}</p>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>Menginap (Single)</p>
                                        <p style={{ fontSize: '16px', fontWeight: '800', color: 'var(--electric-lime)' }}>Rp {selectedEvent.investment.single}</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                <div>
                                    <h4 style={{ fontSize: '13px', fontWeight: '800', color: 'rgba(255,255,255,0.3)', marginBottom: '12px', letterSpacing: '1px' }}>LATAR BELAKANG</h4>
                                    <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)' }}>{selectedEvent.background}</p>
                                </div>

                                <div>
                                    <h4 style={{ fontSize: '13px', fontWeight: '800', color: 'rgba(255,255,255,0.3)', marginBottom: '12px', letterSpacing: '1px' }}>TUJUAN PELATIHAN</h4>
                                    <div style={{ display: 'grid', gap: '12px' }}>
                                        {selectedEvent.objectives.map((obj, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '12px', fontSize: '15px', color: 'rgba(255,255,255,0.8)' }}>
                                                <div style={{ color: 'var(--electric-lime)', fontWeight: '900' }}>0{i + 1}</div>
                                                {obj}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button onClick={() => setSelectedEvent(null)} style={{ width: '100%', padding: '24px', borderRadius: '24px', background: 'var(--electric-lime)', border: 'none', color: 'black', fontSize: '16px', fontWeight: '900', cursor: 'pointer', marginTop: '48px', boxShadow: '0 10px 30px rgba(198,255,0,0.3)' }}>
                                Tutup Detail
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Jadwal;
