import useWhatsApp from './useWhatsApp';

/**
 * Returns a handler that opens a WhatsApp demo request for the given app name.
 * @param {string} appName - e.g. "PINTAR UC"
 */
const useDemo = (appName) => {
    const { openChat } = useWhatsApp();

    const handleDemo = () => {
        const text = `Halo AKAPRO Indonesia, saya ingin mengajukan demo untuk aplikasi ${appName}.`;
        openChat(text);
    };
    return handleDemo;
};

export default useDemo;
