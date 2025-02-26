import React, { useState, useEffect } from 'react';

function MonopolyTimer() {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showContent, setShowContent] = useState(false);
 

  useEffect(() => {
    setStartTime(Date.now());

    const interval = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };


  return (
    <div style={{
      backgroundColor: '#98FB98',
      width: '500px',
      padding: '20px',
      borderRadius: '10px',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
      <div style={{
        backgroundColor: '#008080',
        padding: '15px',
        borderRadius: '5px',
        color: 'white',
        width: '60%'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold' }}>Time Tracker</span>
          <span>{formatTime(elapsedTime)}</span>
        </div>

        <div style={{ borderBottom: '1px solid white', paddingBottom: '5px' }}>
          <span>00:00:00</span> <span style={{ marginLeft: '10px' }}>Welcome to Monopoly</span>
        </div>

        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ height: '100px', width: '10px', backgroundColor: '#ADD8E6', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '50%', backgroundColor: '#00CED1' }}></div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '50%', backgroundColor: '#ADD8E6' }}></div>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: '#D3D3D3',
        padding: '10px',
        borderRadius: '5px',
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>BANK</span>
          <div style={{ cursor: 'pointer' }} onClick={() => setShowContent(!showContent)}>
            {showContent ? (
              <svg width="20" height="20" viewBox="0 0 20 20">
                <polygon points="10,18 14,12 6,12" fill="black" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20">
                <polygon points="10,2 14,8 6,8" fill="black" />
              </svg>
            )}
          </div>
        </div>

        {showContent && (
          <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#CD853F' }}></div>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#CD853F' }}></div>

            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#DC143C' }}></div>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#DC143C' }}></div>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#DC143C' }}></div>

            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#FFD700' }}></div>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#FFD700' }}></div>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#FFD700' }}></div>

            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#FF00FF' }}></div>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#FF00FF' }}></div>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#FF00FF' }}></div>

            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#00FF7F' }}></div>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#00FF7F' }}></div>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#00FF7F' }}></div>

            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#00BFFF' }}></div>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: '#00BFFF' }}></div>

            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: 'white' }}></div>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: 'white' }}></div>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: 'white' }}></div>
            <div style={{ width: '30px', height: '30px', border: '1px solid black', margin: '5px', backgroundColor: 'white' }}></div>
          </div>
        )}
        
        {showContent && (
           <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <svg width="20" height="20" viewBox="0 0 20 20">
               <rect x="2" y="2" width="16" height="10" fill="#32CD32" rx="2" />
               <polygon points="10,12 6,18 14,18" fill="#32CD32" />
             </svg>
             <span>0</span>
           </div>
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <svg width="20" height="20" viewBox="0 0 20 20">
               <rect x="2" y="2" width="16" height="10" fill="#FF0000" rx="2" />
               <polygon points="10,12 6,18 14,18" fill="#FF0000" />
             </svg>
             <span>0</span>
           </div>
         </div>
        )}
      </div>
    </div>
  );
}

export default MonopolyTimer;
