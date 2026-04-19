import { useLocation } from 'react-router-dom';

// Halaman yang punya header sendiri (tidak tampilkan Header global)
const pagesWithOwnHeader = ['/pintar-uc', '/pintar-mr', '/pintar-puass', '/pintar-jp', '/mmpi2-online'];

const Header = () => {
    const location = useLocation();

    if (pagesWithOwnHeader.includes(location.pathname)) return null;

    return (
        <header style={{ padding: '24px 20px 12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                {/* Left: greeting */}
                <div>
                    <div style={{ fontSize: '20px', fontWeight: '900', color: 'white', lineHeight: 1.2 }}>
                        Hi, Profesional 👋
                    </div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '3px', fontWeight: '500' }}>
                        Anda tepat sekali berkunjung disini
                    </div>
                </div>

                {/* Right: avatar */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(255,255,255,0.05)',
                        padding: '4px 12px 4px 6px',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        position: 'relative'
                    }}>
                        <img
                            src="https://ui-avatars.com/api/?name=Akademi&background=C6FF00&color=000"
                            alt="Akademi"
                            style={{ width: '32px', height: '32px', borderRadius: '50%' }}
                        />
                        <span style={{ fontSize: '13px', fontWeight: '800', color: 'white' }}>Akademi</span>
                        <div style={{
                            position: 'absolute',
                            top: '-4px',
                            right: '-8px',
                            background: 'gold',
                            color: 'black',
                            fontSize: '9px',
                            fontWeight: '900',
                            padding: '1px 5px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                        }}>PRO</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
