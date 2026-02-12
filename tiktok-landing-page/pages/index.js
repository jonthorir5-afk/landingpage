import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function LandingPage() {
  const [showPopup, setShowPopup] = useState(false);

  // ===== CUSTOMIZE THESE VALUES =====
  const profileImage = 'https://imgur.com/a/Bd3phWH'; // Creator image
  const ofCardImage = 'https://YOUR-TEASER-IMAGE-URL.jpg'; // Teaser image
  const creatorName = 'Ariana';
  const username = '@username';
  const onlyFansUrl = 'https://onlyfans.com/YOURMODEL';
  const META_PIXEL_ID = '693023723805931';
  // ==================================

  useEffect(() => {
    if (typeof window !== 'undefined' && META_PIXEL_ID) {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', META_PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  }, []);

  const handleOFClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleContinue = () => {
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 1.00,
        currency: 'USD',
        content_name: 'OnlyFans Link Click',
      });
    }

    window.open(onlyFansUrl, '_blank');
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Head>
        <title>{creatorName} - Exclusive Content</title>
        <meta name="description" content={`Unlock exclusive content from ${creatorName}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{
        minHeight: '100vh',
        background: '#2b2d42',
        backgroundImage: `linear-gradient(rgba(43, 45, 66, 0.85), rgba(43, 45, 66, 0.85)), url(${profileImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        <div style={{
          maxWidth: '600px',
          width: '100%',
          padding: '40px 20px 20px',
        }}>

          {/* Profile Header */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            marginBottom: '20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}>
            <div style={{
              width: '100%',
              height: '400px',
              backgroundImage: `url(${profileImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />

            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60%',
              background: 'linear-gradient(to top, rgba(106, 90, 205, 0.9) 0%, rgba(106, 90, 205, 0.6) 50%, transparent 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '32px 24px',
            }}>
              <h1 style={{
                fontSize: '42px',
                fontWeight: '700',
                color: '#fff',
                margin: '0 0 8px 0',
              }}>
                {creatorName}
              </h1>

              <p style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.9)',
                margin: 0,
              }}>
                {username}
              </p>
            </div>
          </div>

          {/* Main OF Card */}
          <a
            href="#"
            onClick={handleOFClick}
            style={{
              position: 'relative',
              display: 'block',
              height: '280px',
              borderRadius: '20px',
              overflow: 'hidden',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              cursor: 'pointer',
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${ofCardImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />

            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(106, 90, 205, 0.75), rgba(138, 43, 226, 0.65))',
            }} />

            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '32px 24px',
              textAlign: 'center',
            }}>
              <h2 style={{
                fontSize: '30px',
                fontWeight: '700',
                color: '#fff',
                margin: 0,
              }}>
                Unlock My Exclusive Content 🔥
              </h2>
            </div>
          </a>

        </div>

        {/* Confirmation Popup */}
        {showPopup && (
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }} onClick={handleCancel}>
            <div style={{
              background: '#1a1d2e',
              borderRadius: '24px',
              padding: '40px 32px',
              maxWidth: '380px',
              width: '100%',
              textAlign: 'center',
            }} onClick={(e) => e.stopPropagation()}>
              <h2 style={{ color: '#fff', marginBottom: '12px' }}>
                Continue?
              </h2>

              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
                You are about to visit an external page.
              </p>

              <button
                onClick={handleContinue}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'linear-gradient(135deg,#6a5acd,#8a2be2)',
                  border: 'none',
                  borderRadius: '12px',
                  color: '#fff',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginBottom: '10px',
                }}
              >
                Continue
              </button>

              <button
                onClick={handleCancel}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '12px',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
