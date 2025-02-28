import React, { useState, useEffect } from 'react';

const tokens = [
  { name: "Scottie Dog", 
    image: "https://m.media-amazon.com/images/I/31QRCkfPrTL._AC_UF894,1000_QL80_.jpg"
  },
  { name: "Top Hat", 
    image: "https://media.istockphoto.com/id/471505659/photo/monopoly-top-hat-game-piece.jpg?s=612x612&w=0&k=20&c=dp_HiVwyEofOFISVQRyQ_qJQKR8JWK-uQcOBfsQ7TZ4=",
    },
  { name: "Iron", 
    image: "https://wjla.com/resources/media/cb20c219-dbbf-47e7-82c5-8b176335be99-irontokenmonopolyeliminatedwiki_296.jpg?1436532636854",
   },
  { name: "Thimble", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj1B5jrWlpUl38_vkQSBkdVZq6-EkKGvw5w&s",
   },
  { name: "Wheelbarrow", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQlaSEzYZjgbX7vVR7J-AxpSvGj7-wf2T2g&s",
   },
  { name: "Shoe", 
    image: "https://c8.alamy.com/comp/CWBY7F/monopoly-boot-CWBY7F.jpg", 
  },
  { name: "Battleship",
    image: "https://i.ebayimg.com/images/g/4REAAOSwluNg-yzq/s-l400.jpg",
   },
  { name: "Racecar", 
    image: "https://i.ebayimg.com/images/g/8xQAAOSwnbxgMjYb/s-l1200.jpg",
   },
];

const RectangleIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <rect x="2" y="2" width="16" height="10" fill={color} rx="2" />
    <polygon points="10,12 6,18 14,18" fill={color} />
  </svg>
);

const PlayerInfo = () => {
  const [selectedToken, setSelectedToken] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tokens.length);
    setSelectedToken(tokens[randomIndex]);
    setIsLoading(false);
  }, []);

  const colors = [
    '#CD853F', '#CD853F', '#DC143C', '#DC143C', '#DC143C', '#FFD700', '#FFD700', '#FFD700',
    '#FF00FF', '#FF00FF', '#FF00FF', '#00FF7F', '#00FF7F', '#00FF7F', '#00BFFF', '#00BFFF',
    'white', 'white', 'white', 'white',
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{
      width: '500px',
      padding: '20px',
      backgroundColor: '#008080',
      border: '2px solid #808080',
      borderRadius: '5px',
      color: 'white',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={selectedToken.image}
            alt={selectedToken.name}
            style={{ width: '30px', marginRight: '10px', filter: 'invert(1)' }}
          />
          <h2>{selectedToken.name}</h2>
        </div>
        <div>
          <h2>$1,500</h2>
        </div>
      </div>

      <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: '30px',
              height: '30px',
              border: '1px solid black',
              margin: '5px',
              backgroundColor: color,
            }}
          ></div>
        ))}
      </div>
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RectangleIcon color="#32CD32" />
          <span>0</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RectangleIcon color="#FF0000" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;