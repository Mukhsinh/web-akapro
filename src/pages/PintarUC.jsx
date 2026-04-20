import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';

const PintarUC = () => {
    const [csNumber, setCsNumber] = useState('6281234567890');

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch Admin registered CS
        const fetchCS = async () => {
            const { data } = await supabase.from('customer_service').select('nomor').eq('status', 'aktif').limit(1);
            if (data && data.length > 0) {
                let num = data[0].nomor.replace(/\D/g, ''); // remove non-digits
                if (num.startsWith('0')) num = '62' + num.substring(1); // format to international
                setCsNumber(num);
            }
        };
        fetchCS();
    }, []);

    const handleDemo = () => {
        const text = `Halo AKAPRO Indonesia, saya ingin mengajukan demo untuk aplikasi PINTAR UC.`;
        window.open(`https://wa.me/${csNumber}?text=${encodeURIComponent(text)}`, '_blank');
    };

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div style={{ backgroundColor: '#ebfdf5', minHeight: '100vh', fontFamily: "'Inter', sans-serif", overflowX: 'hidden', color: '#064e3b' }}>

            {/* Soft decorative background blobs */}
            <div style={{ position: 'fixed', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(167,243,208,0.8) 0%, transparent 70%)', filter: 'blur(30px)', zIndex: 0 }} />
            <div style={{ position: 'fixed', bottom: '-10%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(110,231,183,0.5) 0%, transparent 70%)', filter: 'blur(30px)', zIndex: 0 }} />

            <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 1, paddingBottom: '100px' }}>

                {/* --- TOP SECTION (HEADER + HERO IMAGE) --- */}
                <div style={{ padding: '40px 24px 0' }}>
                    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                            <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #059669, #10b981)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '14px' }}>P</div>
                            <span style={{ fontSize: '18px', fontWeight: '900', color: '#047857', letterSpacing: '0.5px' }}>PINTAR - UC</span>
                        </div>
                        <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#0f172a', lineHeight: 1.25, margin: '0 0 16px', letterSpacing: '-0.5px' }}>
                            Sistem Unit Cost Terintegrasi<br />
                            Clinical Pathway:<br />
                            <span style={{ color: '#047857' }}>Masa Depan Manajemen<br />Rumah Sakit Cerdas</span>
                        </h1>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ width: '100%', marginTop: '20px', display: 'flex', justifyContent: 'center', filter: 'drop-shadow(0 20px 30px rgba(4,120,87,0.15))' }}>
                        <img src="/images/3d/hero.png" alt="Clinical Pathway Monitor" style={{ width: '110%', maxWidth: '500px', objectFit: 'contain', transform: 'scale(1.05)' }} />
                    </motion.div>
                </div>

                {/* --- FLOATING CARDS SECTION (LATAR BELAKANG & MANFAAT) --- */}
                <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginTop: '-20px' }}>

                    {/* Left/Top Card: Latar Belakang */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeIn}
                        style={{ background: 'white', borderRadius: '24px', padding: '0 0 24px 0', border: '1px solid rgba(167,243,208,0.5)', boxShadow: '0 10px 40px rgba(4,120,87,0.08)', overflow: 'hidden' }}
                    >
                        <div style={{ width: '100%', height: '250px', background: '#e2f5ec', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src="/images/3d/latar.png" alt="Latar Belakang Desk" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to top, white, transparent)' }} />
                        </div>
                        <div style={{ padding: '24px' }}>
                            <h3 style={{ fontSize: '13px', fontWeight: '900', color: '#047857', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 12px' }}>LATAR BELAKANG</h3>
                            <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                                Tantangan data medis dan keuangan yang terpisah. Aplikasi kami mengintegrasikan kepatuhan medis dengan akurasi biaya riil.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right/Bottom Card: Manfaat */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeIn} transition={{ delay: 0.1 }}
                        style={{ background: '#dcfce7', borderRadius: '24px', padding: '0 0 24px 0', border: '1px solid #10b981', boxShadow: '0 10px 40px rgba(16,185,129,0.15)', overflow: 'hidden' }}
                    >
                        <div style={{ width: '100%', height: '250px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#ebfdf5' }}>
                            <img src="/images/3d/manfaat.png" alt="Manfaat Icons" style={{ width: '110%', height: '110%', objectFit: 'contain' }} />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to top, #dcfce7, transparent)' }} />
                        </div>
                        <div style={{ padding: '24px' }}>
                            <h3 style={{ fontSize: '13px', fontWeight: '900', color: '#064e3b', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 16px' }}>MANFAAT</h3>
                            <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {[
                                    'Hitung biaya riil per tindakan.',
                                    'Optimalisasi margin pelayanan.',
                                    'Peningkatan kepatuhan standar medis.',
                                    'Pengambilan keputusan berbasis data.'
                                ].map((item, idx) => (
                                    <li key={idx} style={{ fontSize: '14px', color: '#1e293b', lineHeight: 1.5, display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', marginTop: '6px', flexShrink: 0 }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>

                {/* --- TARGET PENGGUNA SECTION --- */}
                <div style={{ padding: '0 20px 20px' }}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeIn} transition={{ delay: 0.2 }}
                        style={{ background: 'white', borderRadius: '24px', padding: '24px', border: '1px solid rgba(167,243,208,0.7)', boxShadow: '0 10px 40px rgba(4,120,87,0.06)', position: 'relative' }}
                    >
                        <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                            <img src="/images/3d/target.png" alt="Target Pengguna Avatars" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>

                        <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#047857', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 16px', textAlign: 'center' }}>TARGET PENGGUNA</h3>

                        <p style={{ textAlign: 'center', fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: '600' }}>
                            Direksi RS, Manajer Keuangan,<br />Komite Medik, Bagian SIMRS.
                        </p>
                    </motion.div>
                </div>

                {/* --- MOCKUP CTA BUTTON (RELATIVE FLOW) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
                    style={{ position: 'relative', marginTop: '24px', padding: '0 20px', zIndex: 10, paddingBottom: '40px' }}
                >
                    <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDemo}
                            style={{
                                width: '100%', padding: '18px 24px',
                                borderRadius: '100px',
                                background: 'linear-gradient(to right, #fb923c, #ea580c)',
                                color: 'white', fontWeight: '900', fontSize: '15px',
                                border: '2px solid rgba(255,255,255,0.4)', cursor: 'pointer',
                                letterSpacing: '1px', textTransform: 'uppercase',
                                boxShadow: '0 12px 30px rgba(234, 88, 12, 0.4), inset 0 -4px 10px rgba(0,0,0,0.1)',
                                position: 'relative', overflow: 'hidden'
                            }}
                        >
                            {/* Reflection spec */}
                            <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '30%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)', borderRadius: '100px 100px 0 0' }} />
                            Ajukan Demo
                        </motion.button>

                        {/* Finger Cursor Animation overlaying button slightly */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: [0, -10, 0], opacity: 1 }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                            style={{ position: 'absolute', bottom: '-15px', right: '30px', fontSize: '32px', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))', pointerEvents: 'none' }}
                        >
                            👆
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default PintarUC;
