import React, { useState, useEffect } from 'react';

const apiBaseUrl = 'http://localhost:5000'; 

const tokens = [
  {
    name: "Scottie Dog",
    image: "https://m.media-amazon.com/images/I/31QRCkfPrTL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Battleship",
    image: "https://i.ebayimg.com/images/g/4REAAOSwluNg-yzq/s-l400.jpg",
  },
  {
    name: "Iron",
    image: "https://wjla.com/resources/media/cb20c219-dbbf-47e7-82c5-8b176335be99-irontokenmonopolyeliminatedwiki_296.jpg?1436532636854",
  },
  {
    name: "Thimble",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj1B5jrWlpUl38_vkQSBkdVZq6-EkKGvw5w&s",
  },
  {
    name: "Shoe",
    image: "https://c8.alamy.com/comp/CWBY7F/monopoly-boot-CWBY7F.jpg",
  },
  {
    name: "wheelbarrow",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQlaSEzYZjgbX7vVR7J-AxpSvGj7-wf2T2g&s",
  },
  {
    name: "Top Hat",
    image: "https://media.istockphoto.com/id/471505659/photo/monopoly-top-hat-game-piece.jpg?s=612x612&w=0&k=20&c=dp_HiVwyEofOFISVQRyQ_qJQKR8JWK-uQcOBfsQ7TZ4=",
  },
  {
    name: "Racecar",
    image: "https://i.ebayimg.com/images/g/8xQAAOSwnbxgMjYb/s-l1200.jpg",
  },
];

const RaceCar = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedToken, setSelectedToken] = useState({});
  const [balance, setBalance] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchPlayerBalance = async () => {
      setIsLoading(true); 
      try {
        const response = await fetch(`${apiBaseUrl}/players`); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data && data.length > 0) {
          setBalance(data[0].balance); 
        } else {
          console.log("No players found.");
          setBalance(1500); 
        }
      } catch (error) {
        console.error("Failed to fetch player balance:", error);
        setBalance(1500); 
      } finally {
        setIsLoading(false); 
      }
    };

    const randomIndex = Math.floor(Math.random() * tokens.length);
    setSelectedToken(tokens[randomIndex]);
    fetchPlayerBalance(); 
  }, []);

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
            src={selectedToken.image}
            alt={selectedToken.name}
            style={{ width: '30px', marginRight: '10px', filter: 'invert(1)' }}
          />
          <h2>{selectedToken.name}</h2>
        </div>
        <div>
          <h2>${isLoading ? "Loading..." : (balance !== null ? balance : "Error")}</h2>
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
        </div>
      )}

      {showContent && (
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        </div>
      )}
    </div>
  );
};

export default RaceCar;
