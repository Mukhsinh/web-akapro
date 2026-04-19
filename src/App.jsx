import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavigationDock from './components/NavigationDock';
import Home from './pages/Home';
import ProdukApp from './pages/ProdukApp';
import Pelatihan from './pages/Pelatihan';
import Jadwal from './pages/Jadwal';
import Sertifikasi from './pages/Sertifikasi';
import TentangKami from './pages/TentangKami';
import Artikel from './pages/Artikel';
import Mitra from './pages/Mitra';
import PusatBantuan from './pages/PusatBantuan';
import PintarUC from './pages/PintarUC';
import PintarMR from './pages/PintarMR';
import PintarPUASS from './pages/PintarPUASS';
import PintarJP from './pages/PintarJP';
import MMPI2Online from './pages/MMPI2Online';
import Admin from './pages/Admin';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main style={{ paddingBottom: '100px' }}>
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
                    </Routes>
                </main>
                <NavigationDock />
            </div>
        </Router>
    );
}

export default App;
