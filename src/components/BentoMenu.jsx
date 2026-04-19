import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Fungsi TTS (Text-to-Speech) bahasa Indonesia
const speak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'id-ID';
    utter.rate = 1.05;
    utter.pitch = 1.1;
    window.speechSynthesis.speak(utter);
};

const BentoMenu = () => {
    const navigate = useNavigate();

    const menuItems = [
        {
            iconUrl: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Office%20Building.png',
            label: 'Tentang Kami', path: '/tentang', isPro: false,
            speech: 'Tentang Kami'
        },
        {
            iconUrl: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png',
            label: 'Produk Aplikasi', path: '/aplikasi', isPro: true,
            speech: 'Produk Aplikasi'
        },
        {
            iconUrl: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Graduation%20Cap.png',
            label: 'Jasa Pelatihan', path: '/pelatihan', isPro: true,
            speech: 'Jasa Pelatihan'
        },
        {
            iconUrl: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Spiral%20Calendar.png',
            label: 'Jadwal Pelatihan', path: '/jadwal', isPro: false,
            speech: 'Jadwal Pelatihan'
        },
        {
            iconUrl: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Military%20Medal.png',
            label: 'Sertifikasi Kompetensi',
            path: '/sertifikasi',
            special: true,
            isPro: true,
            speech: 'Sertifikasi Kompetensi'
        },
        {
            iconUrl: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Newspaper.png',
            label: 'Artikel', path: '/artikel', isPro: false,
            speech: 'Artikel'
        },
        {
            iconUrl: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png',
            label: 'Mitra Bersama', path: '/mitra', isPro: false, comingSoon: true,
            speech: 'Mitra Bersama'
        },
        {
            iconUrl: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Headphone.png',
            label: 'Pusat Bantuan', path: '/bantuan', isPro: false,
            speech: 'Pusat Bantuan'
        },
    ];

    return (
        <div className="bento-grid" style={{ gap: '16px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', padding: '0 20px' }}>
            {menuItems.map((item, idx) => (
                <motion.div
                    key={idx}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        speak(item.speech);
                        navigate(item.path);
                    }}
                    className="glass"
                    style={{
                        padding: '24px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '16px',
                        cursor: 'pointer',
                        boxShadow: item.special ? '0 0 15px rgba(198, 255, 0, 0.2)' : '0 4px 15px rgba(0,0,0,0.2)',
                        borderColor: item.special ? 'rgba(198, 255, 0, 0.3)' : 'var(--glass-border)',
                        position: 'relative',
                        borderRadius: '24px',
                        background: 'rgba(255,255,255,0.03)'
                    }}
                >
                    {item.isPro && (
                        <div style={{
                            position: 'absolute',
                            top: '-12px',
                            right: '20px',
                            background: '#FFD700',
                            color: 'black',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '900',
                            letterSpacing: '1px',
                            boxShadow: '0 4px 10px rgba(255, 215, 0, 0.4)'
                        }}>
                            PRO
                        </div>
                    )}
                    {item.comingSoon && (
                        <div style={{
                            position: 'absolute',
                            top: '-12px',
                            right: '20px',
                            background: 'var(--electric-lime)',
                            color: 'black',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '10px',
                            fontWeight: '900',
                            letterSpacing: '0.5px',
                            boxShadow: '0 4px 10px rgba(198, 255, 0, 0.4)'
                        }}>
                            COMING SOON
                        </div>
                    )}

                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: idx * 0.2 }}
                        style={{
                            width: '72px',
                            height: '72px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src={item.iconUrl}
                            alt={item.label}
                            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))' }}
                        />
                    </motion.div>

                    <span style={{ fontSize: '13px', fontWeight: '700', color: 'white', textAlign: 'center' }}>
                        {item.label}
                    </span>
                </motion.div>
            ))}
        </div>
    );
};

export default BentoMenu;
