import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useWhatsApp from '../hooks/useWhatsApp';
import { Database, ShieldCheck, MessageSquare, Landmark, BrainCircuit, X, MessageCircle, ArrowRight, User, Phone, Building, ChevronRight, ChevronLeft, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const apps = [
    {
        id: 1,
        title: 'PINTAR UC',
        shortTitle: 'PINTAR UC',
        desc: 'Sistem penghitungan unit cost akurat integrasi clinical pathway cegah kerugian.',
        iconUrl: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bar%20Chart.png',
        accent: '#00ECFF',
        isPro: true,
        steps: [
            {
                tag: 'URGENCY',
                title: 'Transparansi Biaya Mutlak Diperlukan',
                content: 'Sistem penghitungan unit cost terintegrasi berbasis Activity Based Costing Modified dengan metode double distribution dan terintegrasi dengan clinical pathway sehingga dapat digunakan untuk kendali biaya rumah sakit dengan cermat dan akurat dan menghindarkan Rumah Sakit dari kerugian yang tidak terukur dan tidak teridentifikasi.',
                img: 'https://images.unsplash.com/photo-1551288049-bbda3865c670?q=80&w=1000'
            }
        ]
    },
    {
        id: 2,
        title: 'PINTAR MR',
        shortTitle: 'PINTAR MR',
        desc: 'Manajemen resiko ISO 31000 terintegrasi Renstra & balance scorecard.',
        iconUrl: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Shield.png',
        accent: '#FF00E5',
        isPro: true,
        steps: [
            {
                tag: 'URGENCY',
                title: 'Lindungi Reputasi Institusi',
                content: 'Aplikasi Manajemen Resiko berbasis ISO 31000 yang terintegrasi dari Renstra dan pengukuran berbasis balance scored card sehingga monitoring resiko dan KPI RS dapat berjalan simultan.',
                img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1000'
            },
            {
                tag: 'SOLUTION',
                title: 'Framework ISO 31000',
                content: 'Integrasi rencana strategis dan balance scorecard dalam satu dashboard mitigasi resiko yang intuitif dan komprehensif.',
                img: 'https://images.unsplash.com/photo-1512418490979-92798ccc1380?q=80&w=1000'
            },
            {
                tag: 'RISK',
                title: 'Kekacauan Operasional',
                content: 'Tanpa manajemen resiko, insiden keselamatan pasien bisa menjadi masif, berujung pada gugatan hukum dan pencabutan izin operasional.',
                img: 'https://images.unsplash.com/photo-1454160811907-284a7c0d6941?q=80&w=1000'
            }
        ]
    },
    {
        id: 3,
        title: 'Aplikasi PINTAR PUASS',
        shortTitle: 'PINTAR PUASS',
        desc: 'Opsi eskalasi keluhan terstruktur untuk kepuasan maksimal.',
        iconUrl: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Glowing%20Star.png',
        accent: '#FFB800',
        isPro: true,
        steps: [
            {
                tag: 'URGENCY',
                title: 'Satu Keluhan Bisa Viral',
                content: 'Apikasi Pengelolaan Komplain, Survey Kepuasan Masyarakat, Permohonan Informasi, dan Aduan Internal yang terintegrasi dengan mekanisme penanganan eskalatif dan report yang yang dilengkapi analisis data yang terstruktur.',
                img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000'
            },
            {
                tag: 'SOLUTION',
                title: 'Eskalasi Otomatis',
                content: 'Sistem deteksi dini keluhan yang langsung terhubung ke level manajemen, memastikan setiap masalah selesai sebelum membesar.',
                img: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1000'
            },
            {
                tag: 'RISK',
                title: 'Kehancuran Kepercayaan',
                content: 'Abai terhadap suara pasien mengakibatkan penurunan drastis jumlah kunjungan dan sanksi dari otoritas pengawas rumah sakit.',
                img: 'https://images.unsplash.com/photo-1522071823991-b9671f903f60?q=80&w=1000'
            }
        ]
    },
    {
        id: 4,
        title: 'PINTAR JP',
        shortTitle: 'PINTAR JP',
        desc: 'Distribusi insentif transparan terintegrasi KPI individu & unit.',
        iconUrl: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Briefcase.png',
        accent: '#00FF85',
        isPro: true,
        steps: [
            {
                tag: 'URGENCY',
                title: 'Keadilan Bagi Tenaga Medis',
                content: 'Aplikasi pengelolaan distribusi insentif jasa pelayanan rumah sakit yang terintegrasi dengan KPI individu dan KPI Unit, sehingga kinerja akan terukur dan linier dengan distribusi insentif jasa pelayanan yang diberikan.',
                img: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=1000'
            },
            {
                tag: 'SOLUTION',
                title: 'Otomasi KPI & Pajak',
                content: 'Perhitungan jasa medis otomatis berbasis kinerja individu, lengkap dengan integrasi PPh yang akurat dan tersistematis.',
                img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000'
            },
            {
                tag: 'RISK',
                title: 'Eksodus Tenaga Ahli',
                content: 'Distribusi insentif yang tidak adil memicu pengunduran diri massal dokter dan perawat terbaik, melumpuhkan layanan rumah sakit.',
                img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1000'
            }
        ]
    },
    {
        id: 5,
        title: 'Aplikasi MMPI-2 Online',
        shortTitle: 'MMPI-2 Online',
        desc: 'Uji psikologi standar emas dengan analisis realtime yang komprehensif.',
        iconUrl: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Light%20Bulb.png',
        accent: '#C6FF00',
        isPro: true,
        steps: [
            {
                tag: 'URGENCY',
                title: 'Kecepatan Assessment SDM',
                content: 'Aplikasi pengujian MMPI-2 Online yang terintegrasi dengan analisis data sesuai standaridisasi dan hasil dapat langsung terlihat secara realtime, dan semuanya dilakukan secara online, sehingga praktis, mudah dan akurat.',
                img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000'
            },
            {
                tag: 'SOLUTION',
                title: 'Platform Digital Secure',
                content: 'Uji MMPI-2 yang dapat diakses dari mana saja dengan sistem anti-curang dan hasil analisis yang langsung tersedia seketika.',
                img: 'https://images.unsplash.com/photo-1484417824246-34f1c94ef556?q=80&w=1000'
            },
            {
                tag: 'RISK',
                title: 'Salah Penempatan SDM',
                content: 'Tanpa deteksi psikologis yang akurat, Anda berisiko menempatkan individu yang tidak stabil pada posisi kritikal perusahaan.',
                img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000'
            }
        ]
    }
];

const ProdukApp = () => {
    const navigate = useNavigate();
    const [selectedApp, setSelectedApp] = useState(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ nama: '', instansi: '', noWa: '' });

    const { openChat } = useWhatsApp();

    const handleWA = () => {
        const text = `Halo CS AKAPRO, saya tertarik untuk Demo Aplikasi: ${selectedApp?.title}\nNama: ${formData.nama}\nInstansi: ${formData.instansi}\nWA: ${formData.noWa}`;
        openChat(text);
    };

    const nextStep = () => {
        if (currentStep < selectedApp.steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowForm(true);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const displayTitle = "Produk";

    return (
        <div style={{ padding: '20px', paddingBottom: '100px' }}>
            <div style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '900', letterSpacing: '-0.5px' }}>
                    {displayTitle} <span style={{ color: 'var(--electric-lime)' }}>Aplikasi</span>
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    Solusi digital terintegrasi untuk institusi profesional.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
                {apps.map((app) => (
                    <motion.div
                        key={app.id}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const routes = {
                                'PINTAR UC': '/pintar-uc',
                                'PINTAR MR': '/pintar-mr',
                                'PINTAR PUASS': '/pintar-puass',
                                'PINTAR JP': '/pintar-jp',
                                'MMPI-2 Online': '/mmpi2-online',
                            };
                            const route = routes[app.shortTitle];
                            if (route) {
                                navigate(route);
                            } else {
                                setSelectedApp(app);
                                setCurrentStep(0);
                                setShowForm(false);
                            }
                        }}
                        className="glass"
                        style={{
                            padding: '24px 16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        {/* Accent Glow */}
                        <div style={{
                            position: 'absolute', top: '-20px', right: '-20px',
                            width: '60px', height: '60px',
                            background: app.accent,
                            filter: 'blur(40px)',
                            opacity: 0.2
                        }} />

                        {app.isPro && (
                            <div style={{
                                position: 'absolute', top: '-2px', right: '-2px', // positioned on outer frame
                                background: '#FFD700', borderRadius: '12px 24px 12px 12px', padding: '4px 8px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 4px 10px rgba(255,215,0,0.4)',
                                color: 'black', fontSize: '10px', fontWeight: '900', letterSpacing: '0.5px',
                                zIndex: 10
                            }}>
                                PRO
                            </div>
                        )}

                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                                position: 'relative',
                                alignSelf: 'flex-start',
                                marginBottom: '4px',
                                height: '72px'
                            }}>
                            <img src={app.iconUrl} alt={app.shortTitle} style={{ width: '72px', height: '72px', objectFit: 'contain', filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))' }} />
                        </motion.div>
                        <div>
                            <h4 style={{ fontSize: '14px', fontWeight: '800', lineHeight: 1.3 }}>{app.shortTitle}</h4>
                            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>{app.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedApp && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 100 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'var(--midnight-carbon)',
                            zIndex: 4000,
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Wave Background Element */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '60%', overflow: 'hidden', zIndex: -1 }}>
                            <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path d="M0 0H1440V680C1440 680 1200 780 720 780C240 780 0 680 0 680V0Z" fill={selectedApp.accent} fillOpacity="0.05" />
                                <path d="M0 650C250 750 600 550 900 650C1200 750 1440 650 1440 650V800H0V650Z" fill="var(--midnight-carbon)" />
                            </svg>
                        </div>

                        {/* Top Controls */}
                        <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '4px' }}>
                                {[0, 1, 2].map(i => (
                                    <div key={i} style={{
                                        width: showForm ? '4px' : (currentStep === i ? '20px' : '6px'),
                                        height: '4px',
                                        borderRadius: '4px',
                                        background: showForm ? 'rgba(255,255,255,0.1)' : (currentStep === i ? selectedApp.accent : 'rgba(255,255,255,0.2)'),
                                        transition: 'all 0.3s ease'
                                    }} />
                                ))}
                            </div>
                            <button
                                onClick={() => setSelectedApp(null)}
                                style={{
                                    width: '36px', height: '36px', borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.05)', border: 'none',
                                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {!showForm ? (
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -50, opacity: 0 }}
                                        style={{ flex: 1, padding: '0 24px', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <div style={{ height: '35vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                            <div style={{
                                                width: '240px', height: '240px', borderRadius: '40px',
                                                overflow: 'hidden', boxShadow: `0 20px 40px -10px ${selectedApp.accent}33`,
                                                border: '2px solid rgba(255,255,255,0.1)'
                                            }}>
                                                <img
                                                    src={selectedApp.steps[currentStep].img}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    alt="visual"
                                                />
                                            </div>
                                            {/* Static Icon Badge */}
                                            <div style={{
                                                position: 'absolute', bottom: '10px', right: '15%',
                                                width: '56px', height: '56px', borderRadius: '18px',
                                                background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                                            }}>
                                                <img src={selectedApp.iconUrl} alt={selectedApp.shortTitle} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                                            </div>
                                        </div>

                                        <div style={{ marginTop: '20px' }}>
                                            <span style={{
                                                fontSize: '11px', fontWeight: '900', color: selectedApp.accent,
                                                letterSpacing: '2px', background: `${selectedApp.accent}15`,
                                                padding: '4px 12px', borderRadius: '100px'
                                            }}>
                                                {selectedApp.steps[currentStep].tag}
                                            </span>
                                            <h2 style={{ fontSize: '32px', fontWeight: '900', marginTop: '16px', lineHeight: 1.1 }}>
                                                {selectedApp.steps[currentStep].title}
                                            </h2>
                                            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginTop: '16px', lineHeight: 1.5 }}>
                                                {selectedApp.steps[currentStep].content}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Footer navigation */}
                                <div style={{ padding: '32px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                                    <button
                                        onClick={() => setShowForm(true)}
                                        style={{ color: 'var(--text-secondary)', fontSize: '14px', border: 'none', background: 'none', fontWeight: '600' }}
                                    >
                                        Skip
                                    </button>
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        {currentStep > 0 && (
                                            <button
                                                onClick={prevStep}
                                                style={{
                                                    width: '56px', height: '56px', borderRadius: '50%',
                                                    background: 'rgba(255,255,255,0.05)', border: 'none',
                                                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                }}
                                            >
                                                <ChevronLeft size={24} />
                                            </button>
                                        )}
                                        <button
                                            onClick={nextStep}
                                            style={{
                                                width: '56px', height: '56px', borderRadius: '50%',
                                                background: selectedApp.accent, border: 'none',
                                                color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                            }}
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0 24px 40px' }}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                                >
                                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                                        <h2 style={{ fontSize: '28px', fontWeight: '900' }}>Siap Untuk Transformasi?</h2>
                                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '8px' }}>
                                            Dapatkan akses demo eksklusif <span style={{ color: selectedApp.accent }}>{selectedApp.shortTitle}</span>.
                                        </p>
                                    </div>

                                    <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '0 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <User size={18} color="rgba(255,255,255,0.4)" />
                                            <input
                                                type="text"
                                                placeholder="Nama Lengkap"
                                                style={{ background: 'transparent', border: 'none', padding: '16px 0', width: '100%', color: 'white', outline: 'none' }}
                                                value={formData.nama}
                                                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                                            />
                                        </div>
                                        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '0 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <Building size={18} color="rgba(255,255,255,0.4)" />
                                            <input
                                                type="text"
                                                placeholder="Instansi / Rumah Sakit"
                                                style={{ background: 'transparent', border: 'none', padding: '16px 0', width: '100%', color: 'white', outline: 'none' }}
                                                value={formData.instansi}
                                                onChange={(e) => setFormData({ ...formData, instansi: e.target.value })}
                                            />
                                        </div>
                                        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '0 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <Phone size={18} color="rgba(255,255,255,0.4)" />
                                            <input
                                                type="text"
                                                placeholder="No. WhatsApp (Aktif)"
                                                style={{ background: 'transparent', border: 'none', padding: '16px 0', width: '100%', color: 'white', outline: 'none' }}
                                                value={formData.noWa}
                                                onChange={(e) => setFormData({ ...formData, noWa: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            onClick={handleWA}
                                            style={{
                                                marginTop: '16px',
                                                padding: '18px',
                                                borderRadius: '16px',
                                                background: selectedApp.accent,
                                                color: 'black',
                                                fontWeight: '800',
                                                border: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '12px'
                                            }}
                                        >
                                            <MessageCircle size={20} /> Jadwalkan Demo via WhatsApp
                                        </button>
                                        <p style={{ textAlign: 'center', fontSize: '11px', color: 'var(--text-secondary)' }}>
                                            Data Anda aman. Tim kami akan menghubungi dalam <br /> 1x24 jam untuk aktivasi akun demo.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProdukApp;
