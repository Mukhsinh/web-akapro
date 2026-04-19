const WA_NUMBER = import.meta.env.VITE_WA_NUMBER || '6281234567890';

/**
 * Returns a handler that opens a WhatsApp demo request for the given app name.
 * @param {string} appName - e.g. "PINTAR UC"
 */
const useDemo = (appName) => {
    const handleDemo = () => {
        const text = `Halo AKAPRO Indonesia, saya ingin mengajukan demo untuk aplikasi ${appName}.`;
        window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    };
    return handleDemo;
};

export default useDemo;
