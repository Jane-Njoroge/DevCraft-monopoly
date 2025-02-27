import React, { useState } from 'react';

const RaceCar = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div style={{
      width: '500px',
      padding: '20px',
      backgroundColor: '#008080', 
      border: '2px solid #808080', 
      borderRadius: '5px',
      color: 'white',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXG7zBUICPaePjAgZhwgKPMeYfJjeVIPOHIA&s"
            alt="Player Icon"
            style={{ width: '30px', marginRight: '10px', filter: 'invert(1)' }} 
          />
          <h2>Racecar</h2>
        </div>
        <div>
          <h2>$1,500</h2>
        </div>
        <div style={{ cursor: 'pointer' }} onClick={() => setShowContent(!showContent)}>
          {showContent ? (
            <svg width="20" height="20" viewBox="0 0 20 20">
              <polygon points="10,2 14,8 6,8" fill="white" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20">
              <polygon points="10,18 14,12 6,12" fill="white" />
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
  );
};

export default RaceCar;
