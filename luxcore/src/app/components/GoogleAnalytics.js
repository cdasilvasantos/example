// components/GoogleAnalytics.js
'use client';

import Script from 'next/script';

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
    return (
        <>
            <Script 
                strategy="afterInteractive" 
                src={`https://www.googletagmanager.com/gtag/js?id=$G-ZC5THDW0CG`} 
            />
            <Script 
                id='google-analytics' 
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('consent', 'default', {
                        'analytics_storage': 'denied'
                    });
                    
                    gtag('config', '$G-ZC5THDW0CG', {
                        page_path: window.location.pathname,
                    });
                    `,
                }}
            />
        </>
    );
}
