// components/CookieBanner.js
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../lib/storageHelper';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false); // Default to false

    useEffect(() => {
        const storedConsent = getLocalStorage('cookie_consent');
        console.log('Stored Consent:', storedConsent); // Check the stored value

        if (storedConsent === null || storedConsent === 'undefined') {
            // If no consent is stored, or if the stored value is 'undefined'
            setShowBanner(true); // Update to show the banner
        }
    }, []);

    const handleAccept = () => {
        setLocalStorage('cookie_consent', true);
        setShowBanner(false);
        // Trigger any action required for accepting cookies
    };
    
    const handleDecline = () => {
        setLocalStorage('cookie_consent', false);
        setShowBanner(false);
        // Trigger any action required for declining cookies
    };


 


    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                        bg-gray-700 rounded-lg shadow`}>

            <div className='text-center'>
                <Link href="/info/cookies">
                    <p>We use <span className='font-bold text-sky-400'>cookies</span> on our site.</p>
                </Link>
            </div>

            <div className='flex gap-2'>
                <button onClick={handleDecline} className='...'>Decline</button>
                <button onClick={handleAccept} className='...'>Allow Cookies</button>
            </div>
        </div>
    );
}
