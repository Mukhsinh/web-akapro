import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ShoppingCart, Store, CreditCard } from 'lucide-react';

const products = [
    { id: 1, name: 'Batik Eksekutif AKAPRO', price: '250.000', seller: 'Mitra Garmen', image: '👔' },
    { id: 2, name: 'Paket Snack Coffee Break', price: '35.000', seller: 'Mitra Catering', image: '☕' },
    { id: 3, name: 'Tumbler Premium AKAPRO', price: '120.000', seller: 'Mitra Merchandise', image: '🥤' },
];

const Mitra = () => {
    const [view, setView] = useState('shop');

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>Mitra Bersama</h2>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <button onClick={() => setView('shop')} className="glass" style={{ padding: '8px 16px', fontSize: '12px', border: view === 'shop' ? '1px solid var(--electric-lime)' : '1px solid var(--glass-border)', color: view === 'shop' ? 'var(--electric-lime)' : 'white' }}>Belanja</button>
                <button onClick={() => setView('register')} className="glass" style={{ padding: '8px 16px', fontSize: '12px', border: view === 'register' ? '1px solid var(--electric-lime)' : '1px solid var(--glass-border)', color: view === 'register' ? 'var(--electric-lime)' : 'white' }}>Buka Toko</button>
            </div>

            {view === 'shop' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        {products.map((p) => (
                            <motion.div key={p.id} className="glass" style={{ padding: '16px', display: 'flex', flexDirection: 'column' }}>
                                <div style={{
                                    height: '100px',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '40px',
                                    marginBottom: '12px'
                                }}>
                                    {p.image}
                                </div>
                                <h5 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '4px', height: '36px', overflow: 'hidden' }}>{p.name}</h5>
                                <p style={{ fontSize: '14px', color: 'var(--electric-lime)', fontWeight: '800', marginBottom: '8px' }}>Rp {p.price}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                                    <Store size={10} /> {p.seller}
                                </div>
                                <button style={{
                                    background: 'var(--electric-lime)',
                                    color: 'black',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '8px',
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '6px'
                                }}>
                                    <ShoppingCart size={14} /> Beli
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(198, 255, 0, 0.05)', marginTop: '20px' }}>
                        <p style={{ fontSize: '12px', textAlign: 'center' }}>
                            <CreditCard size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Pembayaran Rekening Bersama (AKAPRO Escrow)
                        </p>
                    </div>
                </div>
            ) : (
                <div className="glass" style={{ padding: '24px' }}>
                    <h3 style={{ marginBottom: '16px' }}>Pendaftaran Mitra</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                        Bergabunglah sebagai mitra strategis AKAPRO dan pasarkan produk Anda kepada komunitas profesional kami.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <input type="text" placeholder="Nama Toko / Perusahaan" className="glass" style={{ padding: '12px' }} />
                        <input type="text" placeholder="Kategori Produk" className="glass" style={{ padding: '12px' }} />
                        <textarea placeholder="Deskripsi Singkat" className="glass" style={{ padding: '12px', height: '100px' }}></textarea>
                        <button className="btn-primary">Daftar Sekarang</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mitra;
