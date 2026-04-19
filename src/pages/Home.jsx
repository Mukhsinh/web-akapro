import { useEffect, useRef } from 'react';
import HeroBanner from '../components/HeroBanner';
import BentoMenu from '../components/BentoMenu';
import DashboardCard from '../components/DashboardCard';

const Home = () => {
    const hasSpoken = useRef(false);

    useEffect(() => {
        if (hasSpoken.current) return;
        hasSpoken.current = true;

        // Ucapan selamat datang dengan aksen semangat dan gembira
        const speak = () => {
            if (!window.speechSynthesis) return;
            window.speechSynthesis.cancel();
            const utter = new SpeechSynthesisUtterance(
                'Selamat datang para profesional! Kami sangat senang Anda hadir di sini!'
            );
            utter.lang = 'id-ID';
            utter.rate = 1.15;
            utter.pitch = 1.4;
            utter.volume = 1;
            window.speechSynthesis.speak(utter);
        };

        // Delay sedikit agar browser siap
        const timer = setTimeout(speak, 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="home-page">
            <HeroBanner />
            <BentoMenu />
            <DashboardCard />
        </div>
    );
};

export default Home;
