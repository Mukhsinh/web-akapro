import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavigationDock from './components/NavigationDock';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const ProdukApp = lazy(() => import('./pages/ProdukApp'));
const Pelatihan = lazy(() => import('./pages/Pelatihan'));
const Jadwal = lazy(() => import('./pages/Jadwal'));
const Sertifikasi = lazy(() => import('./pages/Sertifikasi'));
const TentangKami = lazy(() => import('./pages/TentangKami'));
const Artikel = lazy(() => import('./pages/Artikel'));
const Mitra = lazy(() => import('./pages/Mitra'));
const PusatBantuan = lazy(() => import('./pages/PusatBantuan'));
const PintarUC = lazy(() => import('./pages/PintarUC'));
const PintarMR = lazy(() => import('./pages/PintarMR'));
const PintarPUASS = lazy(() => import('./pages/PintarPUASS'));
const PintarJP = lazy(() => import('./pages/PintarJP'));
const MMPI2Online = lazy(() => import('./pages/MMPI2Online'));
const Admin = lazy(() => import('./pages/Admin'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
    <div style={{
        background: 'var(--midnight-carbon)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--electric-lime)',
        fontSize: '14px',
        fontWeight: '700'
    }}>
        Memuat...
    </div>
);

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <div className="app-container">
                    <Header />
                    <main style={{ paddingBottom: '100px' }}>
                        <Suspense fallback={<PageLoader />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/aplikasi" element={<ProdukApp />} />
                                <Route path="/pintar-uc" element={<PintarUC />} />
                                <Route path="/pintar-mr" element={<PintarMR />} />
                                <Route path="/pintar-puass" element={<PintarPUASS />} />
                                <Route path="/pintar-jp" element={<PintarJP />} />
                                <Route path="/mmpi2-online" element={<MMPI2Online />} />
                                <Route path="/pelatihan" element={<Pelatihan />} />
                                <Route path="/jadwal" element={<Jadwal />} />
                                <Route path="/sertifikasi" element={<Sertifikasi />} />
                                <Route path="/tentang" element={<TentangKami />} />
                                <Route path="/artikel" element={<Artikel />} />
                                <Route path="/mitra" element={<Mitra />} />
                                <Route path="/bantuan" element={<PusatBantuan />} />
                                <Route path="/admin" element={<Admin />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </main>
                    <NavigationDock />
                </div>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
