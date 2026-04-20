import { useNavigate, useLocation } from 'react-router-dom';
import useWhatsApp from '../hooks/useWhatsApp';

const VOICE_PAGES = ['/', '/aplikasi', '/pelatihan'];

const speakLabel = (label) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(label);
    utter.lang = 'id-ID';
    utter.rate = 1.1;
    utter.pitch = 1.1;
    window.speechSynthesis.speak(utter);
};

const IconHome = ({ active }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z"
            fill={active ? 'var(--electric-lime)' : 'none'}
            stroke={active ? 'var(--electric-lime)' : '#888'}
            strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
);

const IconApps = ({ active }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="2" fill={active ? 'var(--electric-lime)' : 'none'} stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" />
        <rect x="14" y="3" width="7" height="7" rx="2" fill={active ? 'var(--electric-lime)' : 'none'} stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" />
        <rect x="3" y="14" width="7" height="7" rx="2" fill={active ? 'var(--electric-lime)' : 'none'} stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" />
        <rect x="14" y="14" width="7" height="7" rx="2" fill={active ? 'var(--electric-lime)' : 'none'} stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" />
    </svg>
);

const IconGrad = ({ active }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L22 8L12 13L2 8L12 3Z" fill={active ? 'var(--electric-lime)' : 'none'} stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M6 10.5V16C6 16 8.5 19 12 19C15.5 19 18 16 18 16V10.5" stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="22" y1="8" x2="22" y2="14" stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

const IconCalendar = ({ active }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="16" rx="3" fill={active ? 'rgba(198,255,0,0.15)' : 'none'} stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" />
        <path d="M3 10H21" stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" />
        <path d="M8 3V7M16 3V7" stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="8" cy="15" r="1.2" fill={active ? 'var(--electric-lime)' : '#888'} />
        <circle cx="12" cy="15" r="1.2" fill={active ? 'var(--electric-lime)' : '#888'} />
        <circle cx="16" cy="15" r="1.2" fill={active ? 'var(--electric-lime)' : '#888'} />
    </svg>
);

const IconArticle = ({ active }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="16" height="18" rx="3" fill={active ? 'rgba(198,255,0,0.15)' : 'none'} stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" />
        <path d="M8 8H16M8 12H16M8 16H12" stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

const IconMitra = ({ active }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3.5" stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" />
        <circle cx="17" cy="9" r="2.5" stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" />
        <path d="M2 20C2 17 5 15 9 15C13 15 16 17 16 20" stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17 14C19.5 14 22 15.5 22 18" stroke={active ? 'var(--electric-lime)' : '#888'} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

const IconWA = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.5l5.797-1.522A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.51-5.17-1.4l-.37-.22-3.44.9.92-3.36-.24-.38A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    </svg>
);

const NavigationDock = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { icon: (a) => <IconHome active={a} />, path: '/', label: 'Beranda', isNew: false },
        { icon: (a) => <IconApps active={a} />, path: '/aplikasi', label: 'Aplikasi', isNew: true },
        { icon: (a) => <IconGrad active={a} />, path: '/pelatihan', label: 'Pelatihan', isNew: true },
        { icon: (a) => <IconCalendar active={a} />, path: '/jadwal', label: 'Jadwal', isNew: false },
        { icon: (a) => <IconArticle active={a} />, path: '/artikel', label: 'Artikel', isNew: false },
        { icon: (a) => <IconMitra active={a} />, path: '/mitra', label: 'Mitra', isNew: false },
    ];

    const { openChat } = useWhatsApp();

    const handleWA = () => {
        const msg = 'Halo AKAPRO, saya ingin bertanya mengenai pelatihan dan layanan yang tersedia.';
        openChat(msg);
    };

    const handleNavClick = (path, label) => {
        if (VOICE_PAGES.includes(location.pathname)) speakLabel(label);
        navigate(path);
    };

    const leftItems = navItems.slice(0, 3);
    const rightItems = navItems.slice(3);

    return (
        <>
            <div style={{ position: 'fixed', bottom: '16px', left: '12px', right: '12px', height: '72px', display: 'flex', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(30px)', background: 'rgba(13,13,13,0.92)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '28px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', padding: '0 8px' }}>
                {leftItems.map((item, idx) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <div key={idx} onClick={() => handleNavClick(item.path, item.label)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', cursor: 'pointer', flex: 1, position: 'relative', padding: '6px 0' }}>
                            {item.isNew && <span style={{ position: 'absolute', top: 0, right: '8px', fontSize: '7px', fontWeight: '800', color: '#fff', background: '#ff3b30', borderRadius: '4px', padding: '1px 3px', letterSpacing: '0.3px', animation: 'newBlink 1.2s ease-in-out infinite', zIndex: 2 }}>NEW</span>}
                            {item.icon(isActive)}
                            <span style={{ fontSize: '9px', fontWeight: '700', color: isActive ? 'var(--electric-lime)' : '#666', letterSpacing: '0.2px' }}>{item.label}</span>
                            {isActive && <div style={{ position: 'absolute', bottom: 0, width: '20px', height: '3px', background: 'var(--electric-lime)', borderRadius: '2px', boxShadow: '0 0 8px rgba(198,255,0,0.6)' }} />}
                        </div>
                    );
                })}
                <div style={{ flex: '0 0 64px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button onClick={handleWA} aria-label="Hubungi via WhatsApp" style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', border: '3px solid rgba(13,13,13,0.95)', boxShadow: '0 4px 20px rgba(37,211,102,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', outline: 'none', marginTop: '-28px' }}>
                        <IconWA />
                    </button>
                </div>
                {rightItems.map((item, idx) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <div key={idx} onClick={() => handleNavClick(item.path, item.label)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', cursor: 'pointer', flex: 1, position: 'relative', padding: '6px 0' }}>
                            {item.isNew && <span style={{ position: 'absolute', top: 0, right: '8px', fontSize: '7px', fontWeight: '800', color: '#fff', background: '#ff3b30', borderRadius: '4px', padding: '1px 3px', letterSpacing: '0.3px', animation: 'newBlink 1.2s ease-in-out infinite', zIndex: 2 }}>NEW</span>}
                            {item.icon(isActive)}
                            <span style={{ fontSize: '9px', fontWeight: '700', color: isActive ? 'var(--electric-lime)' : '#666', letterSpacing: '0.2px' }}>{item.label}</span>
                            {isActive && <div style={{ position: 'absolute', bottom: 0, width: '20px', height: '3px', background: 'var(--electric-lime)', borderRadius: '2px', boxShadow: '0 0 8px rgba(198,255,0,0.6)' }} />}
                        </div>
                    );
                })}
            </div>
            <style>{`@keyframes newBlink { 0%, 100% { opacity: 1; box-shadow: 0 0 4px rgba(255,59,48,0.6); } 50% { opacity: 0.5; box-shadow: 0 0 8px rgba(255,59,48,0.9); } }`}</style>
        </>
    );
};

export default NavigationDock;