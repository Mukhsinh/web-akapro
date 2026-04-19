import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            background: 'var(--midnight-carbon)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            gap: '16px',
            padding: '20px',
            textAlign: 'center'
        }}>
            <span style={{ fontSize: '64px' }}>🔍</span>
            <h1 style={{ fontSize: '32px', fontWeight: '900' }}>404</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                Halaman tidak ditemukan
            </p>
            <button className="btn-primary" onClick={() => navigate('/')}>
                Kembali ke Beranda
            </button>
        </div>
    );
};

export default NotFound;
