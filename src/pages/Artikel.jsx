import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import {
    Search,
    Filter,
    Eye,
    Download,
    User,
    Mail,
    Building,
    Phone,
    Image as ImageIcon,
    FileText,
    Upload,
    CheckCircle,
    ChevronRight,
    ChevronLeft,
    X,
    ArrowRight
} from 'lucide-react';

// --- Shared Styles ---
const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '14px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit'
};

const cardStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '24px',
    padding: '24px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
};

const CATEGORIES = [
    'Manajemen Keuangan',
    'Manajemen Resiko',
    'Manajemen Komplain',
    'Manajemen SDM',
    'Lainnya'
];

const SAMPLE_ARTICLES = [
    {
        id: 'sample-1',
        judul: 'Optimasi Arus Kas pada RSUD di Masa Transisi Digital',
        penulis: 'Dr. Ahmad Rizal, SE, Ak',
        instansi: 'Universitas Indonesia',
        kategori: 'Manajemen Keuangan',
        abstrak: 'Penelitian ini mengeksplorasi strategi pengelolaan cash flow yang efektif bagi Rumah Sakit Umum Daerah menggunakan sistem otomasi pelaporan keuangan terintegrasi.',
        keywords: 'Cash Flow, Rumah Sakit, Digitalisasi, Keuangan',
        views: 124,
        downloads: 45,
        status: 'approved',
        isi_artikel: 'Pendahuluan\nManajemen keuangan di sektor publik, khususnya rumah sakit, menghadapi tantangan besar dalam hal likuiditas...\n\nMetode\nPenelitian ini menggunakan pendekatan kualitatif deskriptif dengan melakukan observasi pada 3 RSUD percontohan...\n\nHasil\nImplementasi sistem dashboard keuangan real-time mampu meningkatkan efisiensi operasional hingga 30%...',
        foto_penulis_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
        id: 'sample-2',
        judul: 'Mitigasi Resiko Operasional dalam Layanan Gawat Darurat',
        penulis: 'Siti Aminah, M.Si, QCRO',
        instansi: 'Lembaga Manajemen Resiko Indonesia',
        kategori: 'Manajemen Resiko',
        abstrak: 'Analisis mendalam mengenai penerapan ISO 31000 dalam mengidentifikasi dan memitigasi resiko kegagalan koordinasi pada unit gawat darurat.',
        keywords: 'ISO 31000, Mitigasi Resiko, IGD, Manajemen Resiko',
        views: 89,
        downloads: 32,
        status: 'approved',
        isi_artikel: 'Pendahuluan\nUnit Gawat Darurat merupakan area dengan tingkat resiko tertinggi dalam ekosistem rumah sakit...\n\nAnalisis\nBerdasarkan data insiden selama 12 bulan terakhir, kelelahan staf menjadi faktor resiko utama...\n\nStrategi\nPenerapan checklist koordinasi digital terbukti menurunkan angka malpraktik sebesar 15%...',
        foto_penulis_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
        id: 'sample-3',
        judul: 'Transformasi Budaya Pelayanan melalui Sistem Komplain Terpadu',
        penulis: 'Mukhsin Hadi, SE, M.Si',
        instansi: 'AKAPRO Indonesia',
        kategori: 'Manajemen Komplain',
        abstrak: 'Studi kasus tentang bagaimana penanganan keluhan pelanggan yang sistematis dapat meningkatkan indeks kepuasan masyarakat terhadap layanan publik.',
        keywords: 'Kepuasan Pelanggan, Komplain, Service Recovery, AKAPRO',
        views: 256,
        downloads: 112,
        status: 'approved',
        isi_artikel: 'Pendahuluan\nKomplain bukanlah hambatan, melainkan peluang untuk melakukan perbaikan berkelanjutan...\n\nMetodologi\nService Recovery Paradox diuji melalui survei kepuasan pelanggan pasca-penanganan keluhan...\n\nKesimpulan\nKecepatan respon di bawah 2 jam meningkatkan loyalitas pelanggan sebesar 40%...',
        foto_penulis_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
        id: 'sample-4',
        judul: 'Strategi Retensi Talenta Medis di Era Kompetisi Global',
        penulis: 'Drs. Bambang Wijaya, MM',
        instansi: 'HR Healthcare Association',
        kategori: 'Manajemen SDM',
        abstrak: 'Mengulas metode pengembangan karier dan pemberian insentif non-finansial bagi tenaga medis untuk menurunkan tingkat turnover di rumah sakit swasta.',
        keywords: 'SDM, Retensi Staf, Tenaga Medis, Manajemen Bakat',
        views: 156,
        downloads: 67,
        status: 'approved',
        isi_artikel: 'Pendahuluan\nKelangkaan tenaga spesialis menjadi isu krusial dalam manajemen sumber daya manusia di sektor kesehatan...\n\nAnalisis Data\nFaktor lingkungan kerja menyumbang 55% terhadap keputusan staf untuk bertahan...\n\nRekomendasi\nProgram mentoring dan fleksibilitas jadwal menjadi kunci utama dalam retensi talenta...',
        foto_penulis_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    {
        id: 'sample-5',
        judul: 'Penerapan Kaizen dalam Optimalisasi Alur Pasien Rawat Jalan',
        penulis: 'Ir. Hendra Gunawan, LSSBB',
        instansi: 'Lean Healthcare Institute',
        kategori: 'Lainnya',
        abstrak: 'Implementasi filosofi Kaizen dan Lean Six Sigma untuk mereduksi waktu tunggu pasien di instalasi rawat jalan rumah sakit tipe B.',
        keywords: 'Lean Healthcare, Kaizen, Efisiensi, Alur Pasien',
        views: 312,
        downloads: 88,
        status: 'approved',
        isi_artikel: 'Pelayanan kesehatan yang efisien...',
        foto_penulis_url: 'https://plus.unsplash.com/premium_photo-1664102145112-23c2a6328a4a?w=100&h=100&fit=crop'
    }
];

// --- Sub-Components (Memoized for Speed) ---

const SkeletonCard = () => (
    <div style={{ ...cardStyle, cursor: 'default', border: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ width: '80px', height: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }} />
            <div style={{ width: '60px', height: '14px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }} />
        </div>
        <div style={{ width: '100%', height: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', marginBottom: '12px' }} />
        <div style={{ width: '80%', height: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', marginBottom: '16px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
            <div style={{ flex: 1 }}>
                <div style={{ width: '100px', height: '14px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '6px' }} />
                <div style={{ width: '60px', height: '10px', background: 'rgba(255,255,255,0.03)', borderRadius: '3px' }} />
            </div>
        </div>
        <div style={{ width: '100%', height: '60px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }} />
    </div>
);

const ArticleCard = memo(({ article, onClick }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -5, background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(198,255,0,0.3)' }}
        style={cardStyle}
        onClick={() => onClick(article)}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <span style={{
                fontSize: '11px',
                fontWeight: '800',
                color: 'var(--electric-lime)',
                background: 'rgba(198,255,0,0.1)',
                padding: '4px 12px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
            }}>
                {article.kategori}
            </span>
            <div style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Eye size={12} /> {article.views || 0}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Download size={12} /> {article.downloads || 0}</span>
            </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'white', marginBottom: '12px', lineHeight: '1.4' }}>
            {article.judul}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            {article.foto_penulis_url ? (
                <img loading="lazy" src={article.foto_penulis_url} alt={article.penulis} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.1)' }} />
            ) : (
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={18} color="rgba(255,255,255,0.4)" /></div>
            )}
            <div>
                <p style={{ fontSize: '14px', fontWeight: '700', color: 'rgba(255,255,255,0.9)' }}>{article.penulis}</p>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{article.instansi}</p>
            </div>
        </div>

        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {article.abstrak}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {article.keywords?.split(',').map((kw, i) => (
                <span key={i} style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>
                    #{kw.trim()}
                </span>
            ))}
        </div>
    </motion.div>
));

// --- Main Page Component ---

export default function Artikel() {
    const [activeTab, setActiveTab] = useState('publikasi');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [viewingArticle, setViewingArticle] = useState(null);

    // Form State additions
    const [uploadingPhoto, setUploadingPhoto] = useState(false);
    const [uploadingFile, setUploadingFile] = useState(false);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    // Form State
    const [formStep, setFormStep] = useState(1);
    const [formData, setFormData] = useState({
        penulis: '', email: '', instansi: '', no_whatsapp: '',
        judul: '', kategori: '', abstrak: '', keywords: '',
        isi_artikel: '', mode_input: 'ketik',
        foto_penulis_url: '', file_url: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        fetchArticles();

        // Audio Greeting
        const speak = () => {
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance('Artikel Akademi Profesional');
                utterance.lang = 'id-ID';
                utterance.rate = 0.9;
                utterance.pitch = 1;
                window.speechSynthesis.speak(utterance);
            }
        };

        // Timeout to handle browser autoplay restrictions
        const timer = setTimeout(speak, 1000);
        return () => clearTimeout(timer);
    }, []);

    const uploadFile = async (file, bucket) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { data, error } = await supabase.storage.from(bucket).upload(filePath, file);

        if (error) throw error;

        const { data: { publicUrl } } = supabase.storage.from(bucket).getPublicUrl(filePath);
        return publicUrl;
    };

    const fetchArticles = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('artikel')
                .select('*')
                .eq('status', 'approved')
                .order('created_at', { ascending: false });

            if (!error && data) {
                const dbArticles = data || [];
                const merged = [...dbArticles];

                SAMPLE_ARTICLES.forEach(sample => {
                    if (!merged.find(a => a.judul === sample.judul)) {
                        merged.push(sample);
                    }
                });

                setArticles(merged);
            } else {
                setArticles(SAMPLE_ARTICLES);
            }
        } catch (err) {
            console.error("Fetch error:", err);
            setArticles(SAMPLE_ARTICLES);
        }
        setLoading(false);
    };

    const handleOpenArticle = async (article) => {
        setViewingArticle(article);
        // Increment views in database
        try {
            const { error } = await supabase.rpc('increment_article_views', { article_id: article.id });
            if (error) throw error;
            // Update local state for instant feedback
            setArticles(prev => prev.map(a => a.id === article.id ? { ...a, views: (a.views || 0) + 1 } : a));
        } catch (e) {
            // Fallback to direct update if RPC fails
            await supabase.from('artikel').update({ views: (article.views || 0) + 1 }).eq('id', article.id);
        }
    };

    const filteredArticles = articles.filter(a => {
        const matchesSearch = (a.judul?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
            (a.penulis?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
            (a.keywords?.toLowerCase() || '').includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'Semua' || a.kategori === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formStep < 3) {
            // Validation before next step
            if (formStep === 1 && (!formData.penulis || !formData.email)) return;
            if (formStep === 2 && (!formData.judul || !formData.kategori)) return;
            setFormStep(prev => prev + 1);
            return;
        }

        setIsSubmitting(true);
        try {
            let finalPhotoUrl = formData.foto_penulis_url;
            let finalFileUrl = formData.file_url;

            // Handle Photo Upload if not already uploaded
            if (photoPreview && photoPreview.startsWith('blob:')) {
                // In a real scenario, we'd upload the file from the preview's source or state
                // For simplicity, let's assume we have a 'photoFile' state
            }

            const { error } = await supabase.from('artikel').insert([{
                ...formData,
                status: 'pending',
                views: 0,
                downloads: 0,
                foto_penulis_url: finalPhotoUrl,
                file_url: finalFileUrl
            }]);

            if (!error) {
                setSubmitSuccess(true);
                setFormData({ penulis: '', email: '', instansi: '', no_whatsapp: '', judul: '', kategori: '', abstrak: '', keywords: '', isi_artikel: '', mode_input: 'ketik', foto_penulis_url: '', file_url: '' });
                setPhotoPreview(null);
                setSelectedFile(null);
            } else {
                throw error;
            }
        } catch (error) {
            alert("Terjadi kesalahan: " + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{ background: 'var(--midnight-carbon)', minHeight: '100vh', padding: '20px', color: 'white' }}>

            {/* Header Section */}
            <header style={{ maxWidth: '1200px', margin: '0 auto 40px', padding: '40px 0 0' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: '900', marginBottom: '12px', background: 'linear-gradient(to right, #fff, #888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-1px' }}
                >
                    Jurnal AKAPRO
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '650px', lineHeight: '1.7' }}
                >
                    Pusat publikasi artikel berkualitas. Bagikan pembaruan metode, hasil best practice dan gagasan inovatif Anda kepada komunitas profesional.
                </motion.p>
            </header>

            {/* Tabs / Navigation */}
            <div style={{ maxWidth: '1200px', margin: '0 auto 40px', display: 'flex', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '16px', position: 'sticky', top: '0', background: 'var(--midnight-carbon)', zIndex: 100, paddingTop: '10px' }}>
                {[
                    { id: 'publikasi', label: 'Publikasi Artikel', icon: <FileText size={18} /> },
                    { id: 'submit', label: 'Submit Artikel Baru', icon: <Upload size={18} /> }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            padding: '12px 28px',
                            borderRadius: '16px',
                            border: 'none',
                            background: activeTab === tab.id ? 'var(--electric-lime)' : 'rgba(255,255,255,0.03)',
                            color: activeTab === tab.id ? '#000' : 'rgba(255,255,255,0.6)',
                            fontSize: '14px',
                            fontWeight: '800',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                            boxShadow: activeTab === tab.id ? '0 10px 20px rgba(198,255,0,0.2)' : 'none'
                        }}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'publikasi' ? (
                    <motion.div
                        key="publikasi"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{ maxWidth: '1200px', margin: '0 auto' }}
                    >
                        {/* Search & Categories */}
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div style={{ position: 'relative', flex: 1, minWidth: '320px' }}>
                                <Search size={20} style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }} />
                                <input
                                    type="text"
                                    placeholder="Cari riset berdasarkan judul, penulis, atau kata kunci..."
                                    style={{ ...inputStyle, paddingLeft: '52px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', fontSize: '15px' }}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px', maxWidth: '100%' }}>
                                {['Semua', ...CATEGORIES].map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        style={{
                                            padding: '10px 20px',
                                            borderRadius: '14px',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            background: selectedCategory === cat ? 'rgba(198,255,0,0.15)' : 'rgba(255,255,255,0.02)',
                                            color: selectedCategory === cat ? 'var(--electric-lime)' : 'rgba(255,255,255,0.5)',
                                            fontSize: '13px',
                                            fontWeight: '700',
                                            whiteSpace: 'nowrap',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content Stats Bar */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: '600' }}>
                                Menampilkan <span style={{ color: 'white' }}>{filteredArticles.length}</span> karya ilmiah terpilih
                            </div>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <div style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', fontSize: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    Total Dilihat: <span style={{ color: 'var(--electric-lime)' }}>{articles.reduce((acc, curr) => acc + (curr.views || 0), 0)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Grid */}
                        {loading ? (
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
                                gap: '24px'
                            }}>
                                {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i} />)}
                            </div>
                        ) : (
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
                                gap: '24px'
                            }}>
                                {filteredArticles.map(article => (
                                    <ArticleCard key={article.id} article={article} onClick={handleOpenArticle} />
                                ))}
                            </div>
                        )}

                        {!loading && filteredArticles.length === 0 && (
                            <div style={{ padding: '120px 20px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '40px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                                <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔎</div>
                                <p style={{ fontSize: '20px', color: 'white', fontWeight: '800', marginBottom: '8px' }}>Tidak ada hasil</p>
                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>Coba gunakan kata kunci lain atau ubah filter kategori</p>
                                <button onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }} style={{ padding: '12px 24px', borderRadius: '12px', background: 'var(--electric-lime)', color: 'black', fontSize: '14px', fontWeight: '800', border: 'none', cursor: 'pointer' }}>Lihat Semua Artikel</button>
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="submit"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{ maxWidth: '850px', margin: '0 auto' }}
                    >
                        {submitSuccess ? (
                            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ textAlign: 'center', padding: '80px 40px', background: 'rgba(198,255,0,0.06)', borderRadius: '40px', border: '1px solid rgba(198,255,0,0.2)' }}>
                                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--electric-lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', boxShadow: '0 0 30px var(--lime-glow)' }}>
                                    <CheckCircle size={50} color="black" />
                                </div>
                                <h2 style={{ fontSize: '32px', fontWeight: '900', color: 'white', marginBottom: '16px' }}>Pengiriman Berhasil!</h2>
                                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '40px', lineHeight: '1.8', maxWidth: '500px', margin: '0 auto 40px' }}>
                                    Terima kasih atas kontribusi Anda. Artikel Anda telah masuk ke sistem antrian review. Kami akan menghubungi Anda melalui email untuk pembaruan status publikasi.
                                </p>
                                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                                    <button onClick={() => { setSubmitSuccess(false); setFormStep(1); }} style={{ padding: '16px 32px', borderRadius: '16px', background: 'var(--electric-lime)', color: '#000', fontWeight: '900', border: 'none', cursor: 'pointer' }}>Submit Artikel Lainnya</button>
                                    <button onClick={() => { setSubmitSuccess(false); setActiveTab('publikasi'); }} style={{ padding: '16px 32px', borderRadius: '16px', background: 'white', color: '#000', fontWeight: '900', border: 'none', cursor: 'pointer' }}>Lihat Publikasi</button>
                                </div>
                            </motion.div>
                        ) : (
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                                {/* Form Navigation Header */}
                                <div style={{ padding: '32px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        {[1, 2, 3].map(step => (
                                            <div key={step} style={{
                                                width: '32px', height: '32px', borderRadius: '50%',
                                                background: formStep === step ? 'var(--electric-lime)' : formStep > step ? 'rgba(198,255,0,0.2)' : 'rgba(255,255,255,0.05)',
                                                color: formStep === step ? 'black' : 'white',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '14px', fontWeight: '800'
                                            }}>
                                                {formStep > step ? '✓' : step}
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'white' }}>
                                            {formStep === 1 ? 'Profil Penulis' : formStep === 2 ? 'Detail Riset' : 'Naskah Lengkap'}
                                        </h3>
                                        <p style={{ fontSize: '11px', color: 'var(--electric-lime)', fontWeight: '700', textTransform: 'uppercase' }}>Tahap {formStep} dari 3</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} style={{ padding: '40px' }}>
                                    <AnimatePresence mode="wait">
                                        {formStep === 1 && (
                                            <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} style={{ display: 'grid', gap: '24px' }}>

                                                {/* Photo Upload Section */}
                                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                                                    <div style={{ position: 'relative' }}>
                                                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '2px dashed rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                                            {photoPreview ? (
                                                                <img src={photoPreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                            ) : (
                                                                <User size={40} color="rgba(255,255,255,0.2)" />
                                                            )}
                                                            {uploadingPhoto && (
                                                                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} style={{ width: '24px', height: '24px', border: '2px solid var(--electric-lime)', borderTopColor: 'transparent', borderRadius: '50%' }} />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <label style={{ position: 'absolute', bottom: '0', right: '0', background: 'var(--electric-lime)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                                                            <Upload size={14} color="black" />
                                                            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={async (e) => {
                                                                const file = e.target.files[0];
                                                                if (file) {
                                                                    setUploadingPhoto(true);
                                                                    try {
                                                                        const url = await uploadFile(file, 'artikel-foto');
                                                                        setFormData({ ...formData, foto_penulis_url: url });
                                                                        setPhotoPreview(URL.createObjectURL(file));
                                                                    } catch (err) {
                                                                        alert("Gagal upload foto: " + err.message);
                                                                    } finally {
                                                                        setUploadingPhoto(false);
                                                                    }
                                                                }
                                                            }} />
                                                        </label>
                                                    </div>
                                                </div>

                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                                    <div>
                                                        <label style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: '700', marginBottom: '8px', display: 'block' }}>NAMA LENGKAP & GELAR</label>
                                                        <div style={{ position: 'relative' }}>
                                                            <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }} />
                                                            <input required style={{ ...inputStyle, paddingLeft: '48px' }} placeholder="Contoh: Prof. Andi Yusuf, M.Psi" value={formData.penulis} onChange={e => setFormData({ ...formData, penulis: e.target.value })} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: '700', marginBottom: '8px', display: 'block' }}>EMAIL KORESPONDENSI</label>
                                                        <div style={{ position: 'relative' }}>
                                                            <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }} />
                                                            <input type="email" required style={{ ...inputStyle, paddingLeft: '48px' }} placeholder="email@profesional.id" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                                    <div>
                                                        <label style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: '700', marginBottom: '8px', display: 'block' }}>INSTANSI / LEMBAGA</label>
                                                        <div style={{ position: 'relative' }}>
                                                            <Building size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }} />
                                                            <input required style={{ ...inputStyle, paddingLeft: '48px' }} placeholder="Sebutkan Universitas / Instansi" value={formData.instansi} onChange={e => setFormData({ ...formData, instansi: e.target.value })} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: '700', marginBottom: '8px', display: 'block' }}>NOMOR WHATSAPP</label>
                                                        <div style={{ position: 'relative' }}>
                                                            <Phone size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }} />
                                                            <input type="tel" required style={{ ...inputStyle, paddingLeft: '48px' }} placeholder="08XXXXXXXXXX" value={formData.no_whatsapp} onChange={e => setFormData({ ...formData, no_whatsapp: e.target.value })} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button" onClick={() => setFormStep(2)} style={{ ...inputStyle, background: 'var(--electric-lime)', color: '#000', fontWeight: '900', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '16px', boxShadow: '0 10px 20px rgba(198,255,0,0.15)' }}>
                                                    Lanjut: Detail Riset <ChevronRight size={20} />
                                                </button>
                                            </motion.div>
                                        )}

                                        {formStep === 2 && (
                                            <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} style={{ display: 'grid', gap: '24px' }}>
                                                <div>
                                                    <label style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: '700', marginBottom: '8px', display: 'block' }}>JUDUL ARTIKEL ILMIAH</label>
                                                    <input required style={{ ...inputStyle, fontSize: '16px', fontWeight: '700' }} placeholder="Masukkan judul lengkap naskah Anda" value={formData.judul} onChange={e => setFormData({ ...formData, judul: e.target.value })} />
                                                </div>
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                                    <div>
                                                        <label style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: '700', marginBottom: '8px', display: 'block' }}>BIDANG ILMU</label>
                                                        <select required style={{ ...inputStyle, appearance: 'none' }} value={formData.kategori} onChange={e => setFormData({ ...formData, kategori: e.target.value })}>
                                                            <option value="" disabled style={{ background: '#111' }}>Pilih Kategori</option>
                                                            {CATEGORIES.map(c => <option key={c} value={c} style={{ background: '#111' }}>{c}</option>)}
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: '700', marginBottom: '8px', display: 'block' }}>KATA KUNCI</label>
                                                        <input required style={inputStyle} placeholder="Minimal 3 kata kunci, dipisahkan koma" value={formData.keywords} onChange={e => setFormData({ ...formData, keywords: e.target.value })} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: '700', marginBottom: '8px', display: 'block' }}>ABSTRAK SINGKAT (INDO/INGGRIS)</label>
                                                    <textarea required style={{ ...inputStyle, minHeight: '160px', resize: 'vertical', lineHeight: '1.7' }} placeholder="Tuliskan ringkasan penelitian Anda secara padat (max 250 kata)..." value={formData.abstrak} onChange={e => setFormData({ ...formData, abstrak: e.target.value })} />
                                                </div>
                                                <div style={{ display: 'flex', gap: '12px' }}>
                                                    <button type="button" onClick={() => setFormStep(1)} style={{ ...inputStyle, width: 'auto', padding: '14px 24px' }}><ChevronLeft size={20} /></button>
                                                    <button type="button" onClick={() => setFormStep(3)} style={{ ...inputStyle, background: 'var(--electric-lime)', color: '#000', fontWeight: '900', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                                        Lanjut: Isi Naskah <ChevronRight size={20} />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}

                                        {formStep === 3 && (
                                            <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} style={{ display: 'grid', gap: '24px' }}>
                                                <div>
                                                    <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
                                                        <button type="button" onClick={() => setFormData({ ...formData, mode_input: 'ketik' })} style={{ flex: 1, padding: '16px', borderRadius: '16px', border: '1px solid ' + (formData.mode_input === 'ketik' ? 'var(--electric-lime)' : 'rgba(255,255,255,0.1)'), background: formData.mode_input === 'ketik' ? 'rgba(198,255,0,0.05)' : 'rgba(255,255,255,0.02)', color: 'white', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                                            <FileText size={18} /> Editor Teks
                                                        </button>
                                                        <button type="button" onClick={() => setFormData({ ...formData, mode_input: 'upload' })} style={{ flex: 1, padding: '16px', borderRadius: '16px', border: '1px solid ' + (formData.mode_input === 'upload' ? 'var(--electric-lime)' : 'rgba(255,255,255,0.1)'), background: formData.mode_input === 'upload' ? 'rgba(198,255,0,0.05)' : 'rgba(255,255,255,0.02)', color: 'white', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                                            <Upload size={18} /> Upload Berkas
                                                        </button>
                                                    </div>

                                                    {formData.mode_input === 'ketik' ? (
                                                        <textarea required style={{ ...inputStyle, minHeight: '350px', resize: 'vertical', lineHeight: '1.9', fontSize: '16px', fontFamily: 'serif' }} placeholder="Tuangkan isi artikel riset lengkap Anda di sini... gunakan struktur yang baik (Pendahuluan, Metode, Hasil, Diskusi)." value={formData.isi_artikel} onChange={e => setFormData({ ...formData, isi_artikel: e.target.value })} />
                                                    ) : (
                                                        <div style={{ border: '2px dashed ' + (selectedFile ? 'var(--electric-lime)' : 'rgba(255,255,255,0.15)'), borderRadius: '24px', padding: '80px 40px', textAlign: 'center', background: 'rgba(255,255,255,0.01)', position: 'relative' }}>
                                                            {uploadingFile && (
                                                                <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.8)', borderRadius: '24px', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                                                                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} style={{ width: '40px', height: '40px', border: '3px solid var(--electric-lime)', borderTopColor: 'transparent', borderRadius: '50%' }} />
                                                                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontWeight: '500', letterSpacing: '2px' }}>PUBLIKASI ARTIKEL</p>
                                                                </div>
                                                            )}
                                                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ marginBottom: '24px' }}>
                                                                {selectedFile ? <CheckCircle size={48} color="var(--electric-lime)" /> : <Upload size={48} color="var(--electric-lime)" />}
                                                            </motion.div>
                                                            <p style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
                                                                {selectedFile ? selectedFile.name : 'Seret file naskah ke sini'}
                                                            </p>
                                                            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '32px' }}>
                                                                {selectedFile ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` : 'Mendukung format MS Word (.doc, .docx) dan PDF'}
                                                            </p>
                                                            <label style={{ ...inputStyle, width: 'auto', padding: '12px 32px', border: '1px solid var(--electric-lime)', color: 'var(--electric-lime)', fontWeight: '800', cursor: 'pointer', display: 'inline-block' }}>
                                                                {selectedFile ? 'Ganti File' : 'Pilih File'}
                                                                <input type="file" accept=".doc,.docx,.pdf" style={{ display: 'none' }} onChange={async (e) => {
                                                                    const file = e.target.files[0];
                                                                    if (file) {
                                                                        setSelectedFile(file);
                                                                        setUploadingFile(true);
                                                                        try {
                                                                            const url = await uploadFile(file, 'artikel-word');
                                                                            setFormData({ ...formData, file_url: url });
                                                                        } catch (err) {
                                                                            alert("Gagal upload file: " + err.message);
                                                                            setSelectedFile(null);
                                                                        } finally {
                                                                            setUploadingFile(false);
                                                                        }
                                                                    }
                                                                }} />
                                                            </label>
                                                        </div>
                                                    )}
                                                </div>

                                                <div style={{ display: 'flex', gap: '12px' }}>
                                                    <button type="button" onClick={() => setFormStep(2)} style={{ ...inputStyle, width: 'auto', padding: '14px 24px' }}><ChevronLeft size={20} /></button>
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        style={{ ...inputStyle, background: 'var(--electric-lime)', color: '#000', fontWeight: '900', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', boxShadow: '0 15px 30px rgba(198,255,0,0.2)' }}
                                                    >
                                                        {isSubmitting ? (
                                                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} style={{ width: '20px', height: '20px', border: '3px solid #000', borderTopColor: 'transparent', borderRadius: '50%' }} />
                                                        ) : (
                                                            <>Submit Final Riset <ArrowRight size={20} /></>
                                                        )}
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </form>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modern Article Viewer Modal */}
            <AnimatePresence>
                {viewingArticle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(10px)' }}
                        onClick={() => setViewingArticle(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            style={{ background: '#0D0D0D', width: '100%', maxWidth: '1000px', height: '90vh', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Modal Toolbar */}
                            <div style={{ padding: '20px 32px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <button onClick={() => window.print()} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '700' }}><Download size={16} /> Simpan PDF</button>
                                    <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)' }} />
                                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', fontWeight: '600' }}>DOI: {viewingArticle.doi || 'Processing...'}</span>
                                </div>
                                <button onClick={() => setViewingArticle(null)} style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: 'white', cursor: 'pointer', padding: '8px', borderRadius: '12px' }}><X size={20} /></button>
                            </div>

                            {/* Scrollable Modal Content */}
                            <div style={{ flex: 1, overflowY: 'auto', padding: '48px 64px' }}>
                                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                                    <span style={{ color: 'var(--electric-lime)', fontSize: '13px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '16px', display: 'block', letterSpacing: '2px' }}>{viewingArticle.kategori}</span>
                                    <h1 style={{ fontSize: '38px', fontWeight: '900', lineHeight: '1.2', color: 'white', marginBottom: '32px' }}>{viewingArticle.judul}</h1>

                                    <div style={{ display: 'flex', gap: '32px', marginBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '32px' }}>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: '900', textTransform: 'uppercase', marginBottom: '12px' }}>Penulis Utama</p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                                {viewingArticle.foto_penulis_url ? (
                                                    <img src={viewingArticle.foto_penulis_url} alt="" style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--electric-lime)' }} />
                                                ) : (
                                                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={24} /></div>
                                                )}
                                                <div>
                                                    <p style={{ fontSize: '17px', fontWeight: '800', color: 'white' }}>{viewingArticle.penulis}</p>
                                                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{viewingArticle.instansi}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ width: '200px' }}>
                                            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: '900', textTransform: 'uppercase', marginBottom: '12px' }}>Metrik Riset</p>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                                <div><p style={{ fontSize: '18px', fontWeight: '900', color: 'white' }}>{viewingArticle.views}</p><p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>Dilihat</p></div>
                                                <div><p style={{ fontSize: '18px', fontWeight: '900', color: 'white' }}>{viewingArticle.downloads}</p><p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>Unduh</p></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ background: 'rgba(255,255,255,0.01)', padding: '40px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '48px', position: 'relative', overflow: 'hidden' }}>
                                        <div style={{ position: 'absolute', top: '0', left: '0', width: '4px', height: '100%', background: 'var(--electric-lime)' }} />
                                        <h3 style={{ fontSize: '13px', fontWeight: '900', color: 'var(--electric-lime)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Abstract</h3>
                                        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', lineHeight: '2', fontStyle: 'italic', fontWeight: '400' }}>{viewingArticle.abstrak}</p>
                                    </div>

                                    <div style={{ marginBottom: '56px' }}>
                                        <h3 style={{ fontSize: '13px', fontWeight: '900', color: 'rgba(255,255,255,0.4)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>Keywords</h3>
                                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                            {viewingArticle.keywords?.split(',').map((kw, i) => (
                                                <span key={i} style={{ fontSize: '12px', padding: '10px 24px', background: 'rgba(255,255,255,0.03)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', fontWeight: '700', transition: 'all 0.3s ease', cursor: 'default' }}>{kw.trim()}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {viewingArticle.isi_artikel && (
                                        <div style={{ paddingTop: '48px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                            <h3 style={{ fontSize: '13px', fontWeight: '900', color: 'rgba(255,255,255,0.4)', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '1px' }}>Article Content</h3>
                                            <div style={{ fontSize: '19px', color: 'rgba(255,255,255,0.85)', lineHeight: '2.2', whiteSpace: 'pre-wrap', fontFamily: '"Ibarra Real Nova", "Georgia", serif', textAlign: 'justify', letterSpacing: '0.2px' }}>
                                                {viewingArticle.isi_artikel}
                                            </div>
                                        </div>
                                    )}

                                    <div style={{ height: '100px' }} />
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div style={{ padding: '24px 64px', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center' }}>
                                {viewingArticle.file_url ? (
                                    <a
                                        href={viewingArticle.file_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', padding: '16px 48px', borderRadius: '16px', background: 'var(--electric-lime)', color: 'black', fontWeight: '900', border: 'none', cursor: 'pointer', fontSize: '15px' }}
                                    >
                                        Download Full Manuscript
                                    </a>
                                ) : (
                                    <button
                                        onClick={() => window.print()}
                                        style={{ padding: '16px 48px', borderRadius: '16px', background: 'var(--electric-lime)', color: 'black', fontWeight: '900', border: 'none', cursor: 'pointer', fontSize: '15px' }}
                                    >
                                        Download Full PDF Version
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
         @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400;0,700;1,400&display=swap');
         
         body { overflow-x: hidden; scroll-behavior: smooth; }
         ::-webkit-scrollbar { width: 10px; height: 10px; }
         ::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); }
         ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; border: 2px solid transparent; background-clip: content-box; }
         ::-webkit-scrollbar-thumb:hover { background: var(--electric-lime); border: 2px solid transparent; background-clip: content-box; }
         
         select { 
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E"); 
            background-repeat: no-repeat; 
            background-position: right 18px center; 
            padding-right: 48px !important; 
         }

         input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
         
         @media (max-width: 768px) {
            .modal-content-padding { padding: 32px 24px !important; }
            .modal-title-size { fontSize: 28px !important; }
            .form-grid-2 { grid-template-columns: 1fr !important; }
         }
       `}</style>
        </div>
    );
}
