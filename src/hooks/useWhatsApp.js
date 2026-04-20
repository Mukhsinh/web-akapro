import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const useWhatsApp = () => {
    const [csData, setCsData] = useState({
        nomor: '6285726112001',
        nama: 'CS AKAPRO'
    });

    useEffect(() => {
        const fetchCS = async () => {
            try {
                // Fetch the active CS from cs_whatsapp table
                const { data, error } = await supabase
                    .from('cs_whatsapp')
                    .select('nomor, nama')
                    .eq('status', 'aktif')
                    .limit(1)
                    .single();

                if (!error && data) {
                    let num = data.nomor.replace(/[^0-9]/g, '');
                    // Format to international (62...) if it starts with 0
                    if (num.startsWith('0')) {
                        num = '62' + num.substring(1);
                    }
                    setCsData({ nomor: num, nama: data.nama });
                }
            } catch (e) {
                console.error("Error fetching WA number from Supabase:", e);
                // Fallback number is already set in initial state
            }
        };
        fetchCS();
    }, []);

    /**
     * Opens WhatsApp chat with the active CS number.
     * @param {string} message - Pre-filled message for the chat.
     */
    const openChat = (message = '') => {
        const url = `https://wa.me/${csData.nomor}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return {
        whatsappNumber: csData.nomor,
        csName: csData.nama,
        openChat
    };
};

export default useWhatsApp;
