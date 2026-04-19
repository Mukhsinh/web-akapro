import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
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
                    <span style={{ fontSize: '48px' }}>⚠️</span>
                    <h2 style={{ fontSize: '24px', fontWeight: '800' }}>Terjadi Kesalahan</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                        Silakan muat ulang halaman.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn-primary"
                    >
                        Muat Ulang
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
