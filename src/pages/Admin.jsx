import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import { LogOut, Plus, Edit, Trash2, Save } from 'lucide-react';

const Admin = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('pelatihan');
    const [pelatihan, setPelatihan] = useState([]);
    const [artikel, setArtikel] = useState([]);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
            setUser(session.user);
            loadData();
        }
        setLoading(false);
    };

    const loadData = async () => {
        // Load pelatihan
        const { data: pelatihanData } = await supabase
            .from('pelatihan')
            .select('*')
            .order('created_at', { ascending: false });
        setPelatihan(pelatihanData || []);

        // Load artikel
        const { data: artikelData } = await supabase
            .from('artikel')
            .select('*')
            .order('created_at', { ascending: false });
        setArtikel(artikelData || []);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            alert('Login gagal: ' + error.message);
        } else {
            setUser(data.user);
            loadData();
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    if (loading) {
        return (
            <div style={{
                background: 'var(--midnight-carbon)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
            }}>
                Loading...
            </div>
        );
    }

    if (!user) {
        return (
            <div style={{
                background: 'var(--midnight-carbon)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass"
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        padding: '32px',
                        borderRadius: '24px'
                    }}
                >
                    <h2 style={{
                        fontSize: '28px',
                        fontWeight: '900',
                        marginBottom: '8px',
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Admin Login
                    </h2>
                    <p style={{
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        marginBottom: '32px',
                        textAlign: 'center'
                    }}>
                        Masuk untuk mengelola konten
                    </p>

                    <form onSubmit={handleLogin} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            style={{
                                padding: '14px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            style={{
                                padding: '14px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '16px',
                                borderRadius: '12px',
                                background: 'var(--electric-lime)',
                                border: 'none',
                                color: 'black',
                                fontSize: '15px',
                                fontWeight: '800',
                                cursor: 'pointer',
                                marginTop: '8px'
                            }}
                        >
                            Login
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div style={{
            background: 'var(--midnight-carbon)',
            minHeight: '100vh',
            padding: '100px 20px 40px',
            color: 'white'
        }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px'
            }}>
                <div>
                    <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '4px' }}>
                        Admin Dashboard
                    </h1>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                        {user.email}
                    </p>
                </div>
                <button
                    onClick={handleLogout}
                    style={{
                        padding: '10px 16px',
                        borderRadius: '12px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    <LogOut size={16} />
                    Logout
                </button>
            </div>

            {/* Tabs */}
            <div style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '24px',
                overflowX: 'auto'
            }}>
                {['pelatihan', 'artikel', 'konten'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '20px',
                            border: 'none',
                            background: activeTab === tab ? 'var(--electric-lime)' : 'rgba(255,255,255,0.05)',
                            color: activeTab === tab ? 'black' : 'white',
                            fontSize: '14px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            textTransform: 'capitalize',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="glass" style={{
                padding: '24px',
                borderRadius: '24px',
                minHeight: '400px'
            }}>
                {activeTab === 'pelatihan' && (
                    <div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '20px'
                        }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '800' }}>
                                Kelola Pelatihan
                            </h3>
                            <button style={{
                                padding: '10px 16px',
                                borderRadius: '12px',
                                background: 'var(--electric-lime)',
                                border: 'none',
                                color: 'black',
                                fontSize: '14px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <Plus size={16} />
                                Tambah Pelatihan
                            </button>
                        </div>
                        
                        {pelatihan.length === 0 ? (
                            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '40px 0' }}>
                                Belum ada data pelatihan
                            </p>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {pelatihan.map((item) => (
                                    <div
                                        key={item.id}
                                        style={{
                                            padding: '16px',
                                            background: 'rgba(255,255,255,0.03)',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <div>
                                            <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>
                                                {item.judul}
                                            </h4>
                                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                {item.tanggal_mulai} - {item.tanggal_selesai}
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <button style={{
                                                padding: '8px',
                                                borderRadius: '8px',
                                                background: 'rgba(198, 255, 0, 0.1)',
                                                border: '1px solid var(--electric-lime)',
                                                color: 'var(--electric-lime)',
                                                cursor: 'pointer'
                                            }}>
                                                <Edit size={16} />
                                            </button>
                                            <button style={{
                                                padding: '8px',
                                                borderRadius: '8px',
                                                background: 'rgba(255, 0, 0, 0.1)',
                                                border: '1px solid #ff4444',
                                                color: '#ff4444',
                                                cursor: 'pointer'
                                            }}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'artikel' && (
                    <div>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '20px' }}>
                            Kelola Artikel
                        </h3>
                        
                        {artikel.length === 0 ? (
                            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '40px 0' }}>
                                Belum ada artikel yang disubmit
                            </p>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {artikel.map((item) => (
                                    <div
                                        key={item.id}
                                        style={{
                                            padding: '16px',
                                            background: 'rgba(255,255,255,0.03)',
                                            borderRadius: '12px'
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'start',
                                            marginBottom: '12px'
                                        }}>
                                            <div style={{ flex: 1 }}>
                                                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>
                                                    {item.judul}
                                                </h4>
                                                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                    {item.penulis} • {item.instansi}
                                                </p>
                                            </div>
                                            <span style={{
                                                padding: '4px 12px',
                                                borderRadius: '12px',
                                                background: item.status === 'published' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 165, 0, 0.1)',
                                                color: item.status === 'published' ? '#00ff00' : '#ffa500',
                                                fontSize: '11px',
                                                fontWeight: '700',
                                                textTransform: 'uppercase'
                                            }}>
                                                {item.status}
                                            </span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <button style={{
                                                padding: '8px 16px',
                                                borderRadius: '8px',
                                                background: 'rgba(0, 255, 0, 0.1)',
                                                border: '1px solid #00ff00',
                                                color: '#00ff00',
                                                fontSize: '12px',
                                                fontWeight: '600',
                                                cursor: 'pointer'
                                            }}>
                                                Approve
                                            </button>
                                            <button style={{
                                                padding: '8px 16px',
                                                borderRadius: '8px',
                                                background: 'rgba(255, 0, 0, 0.1)',
                                                border: '1px solid #ff4444',
                                                color: '#ff4444',
                                                fontSize: '12px',
                                                fontWeight: '600',
                                                cursor: 'pointer'
                                            }}>
                                                Reject
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'konten' && (
                    <div>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '20px' }}>
                            Kelola Konten Halaman
                        </h3>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            Edit konten untuk berbagai halaman website
                        </p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{
                                padding: '16px',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '12px'
                            }}>
                                <label style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', display: 'block' }}>
                                    Nomor WhatsApp CS
                                </label>
                                <input
                                    type="text"
                                    defaultValue="085726112001"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'white',
                                        fontSize: '14px',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            
                            <button style={{
                                padding: '14px',
                                borderRadius: '12px',
                                background: 'var(--electric-lime)',
                                border: 'none',
                                color: 'black',
                                fontSize: '15px',
                                fontWeight: '800',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px'
                            }}>
                                <Save size={18} />
                                Simpan Perubahan
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
