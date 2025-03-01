// components/InteractiveImage.jsx
import { useEffect, useRef } from 'react';
import Script from 'next/script';

const InteractiveImage = () => {
    const vantaRef = useRef(null);
    useEffect(() => {
        // Ensure window and VANTA are available (i.e. on client side)
        if (typeof window !== 'undefined' && window.VANTA && vantaRef.current) {
            const vantaEffect = window.VANTA.BIRDS({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
            });

            // Cleanup on unmount
            return () => {
                if (vantaEffect) vantaEffect.destroy();
            };
        }
    }, []);

    return (
        <>
            {/* Load the external scripts before the component renders */}
            <Script src="/three.r134.min.js" strategy="beforeInteractive" />
            <Script src="/vanta.birds.min.js" strategy="beforeInteractive" />

            <div ref={vantaRef} style={{ width: '100%', height: '100vh' }}>
                {/* Your interactive image or other content can go here */}
            </div>
        </>
    );
};

export default InteractiveImage;
