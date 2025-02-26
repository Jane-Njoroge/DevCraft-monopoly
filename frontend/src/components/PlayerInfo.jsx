import React from 'react';

const PlayerInfo = () => {
  

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
            src="data:image/jpeg;base64,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" // Replace with your actual image path
            alt="Player Icon"
            style={{ width: '30px', marginRight: '10px', filter: 'invert(1)' }} 
          />
          <h2>Player</h2>
        </div>
        <div>
          <h2>$1,500</h2>
        </div>
      </div>

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
    </div>
  );
};

export default PlayerInfo;
