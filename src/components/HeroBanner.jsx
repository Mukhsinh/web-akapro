import { motion } from 'framer-motion';

const HeroBanner = () => {
    return (
        <div style={{ padding: '0 20px 20px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass"
                style={{
                    relative: 'relative',
                    height: '180px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '24px',
                    background: 'linear-gradient(135deg, rgba(198, 255, 0, 0.1) 0%, rgba(13, 13, 13, 0.9) 100%)',
                    borderColor: 'rgba(198, 255, 0, 0.2)'
                }}
            >
                <div style={{ zIndex: 1 }}>
                    <h3 style={{ fontSize: '13px', color: 'var(--electric-lime)', fontWeight: '700', marginBottom: '4px', textTransform: 'uppercase' }}>
                        PRODUK UNGGULAN
                    </h3>
                    <h2 style={{ fontSize: '20px', fontWeight: '900', maxWidth: '320px', marginBottom: '16px', lineHeight: 1.2 }}>
                        Aplikasi manajemen rumah sakit yang paling dicari oleh para Direktur rumah sakit
                    </h2>
                    <button
                        onClick={() => {
                            const template = "Halo CS AKAPRO, saya ingin berkonsultasi mengenai solusi manajemen rumah sakit yang paling tepat untuk institusi kami. Mohon bantuannya.";
                            window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(template)}`, '_blank');
                        }}
                        className="btn-primary"
                        style={{ padding: '10px 20px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        Hubungi Kami
                    </button>
                </div>

                {/* Decorative 3D-like element */}
                <div style={{
                    position: 'absolute',
                    right: '-20px',
                    bottom: '-20px',
                    width: '140px',
                    height: '140px',
                    background: 'var(--electric-lime)',
                    borderRadius: '30px',
                    transform: 'rotate(-15deg)',
                    opacity: 0.1,
                    filter: 'blur(40px)'
                }} />
            </motion.div>
        </div>
    );
};

export default HeroBanner;
