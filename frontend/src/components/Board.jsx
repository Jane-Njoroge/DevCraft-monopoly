import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Dice = ({ value }) => {
    return (
        <div
            style={{
                width: '50px',
                height: '50px',
                border: '2px solid black',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                backgroundColor: 'white',
                margin: '5px',
            }}
        >
            {value}
        </div>
    );
};

const Board = ({ selectedToken }) => {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [playerId, setPlayerId] = useState(null);
    const [playerBalance, setPlayerBalance] = useState(0);
    const [playerPosition, setPlayerPosition] = useState(0);
    const [properties, setProperties] = useState({});
    const [playerName, setPlayerName] = useState('');
    const [players, setPlayers] = useState([]);
    const [tokenPosition, setTokenPosition] = useState(0);

    useEffect(() => {
      const fetchProperties = async () => {
          try {
              const response = await axios.get('http://localhost:5000/properties');
              setProperties(response.data);
          } catch (error) {
              console.error(error);
          }
      };

      const fetchPlayers = async () => {
          try {
              const response = await axios.get('http://localhost:5000/players');
              if (response.status === 200) {
                  setPlayers(response.data);
              } else {
                  console.error("Failed to fetch players:", response.status);
              }
          } catch (error) {
              console.error("Error fetching players:", error);
          }
      };

      fetchProperties();
      fetchPlayers();
  }, []);

  
  useEffect(() => {
      socket.on('update_position', (updatedPosition) => {
          setTokenPosition(updatedPosition);
      });

      return () => {
          socket.off('update_position');
      };
  }, []);

    const createPlayer = async () => {
        try {
            const response = await axios.post('http://localhost:5000/player', {
                name: playerName,
            });

            if (response.status === 201) {
                setPlayerId(response.data.player.id);
                setPlayerBalance(response.data.player.balance);
                setPlayers([...players, response.data.player]);
                alert("Player created!");
              return response.data.player.id; // Return the new player ID
            }else {
              throw new Error("Failed to create player"); // Handle non-201 status
            }
        } catch (error) {
            console.error(error);
            alert("Failed to create player. Please try again.");
          return null; // Return null if player creation fails
        }
    };

    const rollDice = async () => {
        if (!playerId) {
            alert("Please create a player first.");
            return;
        }
        try {
            const response = await axios.post(`http://localhost:5000/roll_dice/${playerId}`);
            setDice1(response.data.dice[0]);
            setDice2(response.data.dice[1]);
            setPlayerPosition(response.data.new_position);
            setTokenPosition(response.data.new_position);
            checkForRentPayment(response.data.new_position);
        } catch (error) {
            console.error(error);
             alert("Failed to roll dice. Please try again."); // add alert for  roll dice failure
        }
    };

    const checkForRentPayment = async (position) => {
        if (properties[position] && properties[position] !== playerId) {
            const ownerId = properties[position];
            const rent = getRentForPosition(position);
            try {
                const response = await axios.post('http://localhost:5000/pay_rent', {
                    payer_id: playerId,
                    owner_id: ownerId,
                    rent: rent,
                });
                setPlayerBalance(response.data.payer_balance);
                alert(`Rent paid to Player ${ownerId}!`);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const getRentForPosition = (position) => {
        const rentValues = {
            1: 10,
            3: 20,
        };
        return rentValues[position] || 0;
    };

   const handleCreateAndRoll = async () => {
        const newPlayerId = await createPlayer();
        if (newPlayerId) {
            await rollDice();
        }
    };

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('http://localhost:5000/properties');
                setProperties(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchPlayers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/players');
                if (response.status === 200) {
                    setPlayers(response.data);
                } else {
                    console.error("Failed to fetch players:", response.status);
                }
            } catch (error) {
                console.error("Error fetching players:", error);
            }
        };

        fetchProperties();
        fetchPlayers();
    }, []);

    useEffect(() => {
        if (players.length > 0 && playerId === null) {
            setPlayerId(players[0].id);
            setPlayerBalance(players[0].balance);
            alert(`Welcome back, ${players[0].name}!`);
        }
    }, [players, playerId]);

    return (
        <div className="monopoly-board">
            <div className="row">
                <div className="corner go">
                    GO 🚗
                    {selectedToken && selectedToken.image && (
                        <img
                            src={selectedToken.image}
                            alt={selectedToken.name}
                            style={{ width: '30px', height: '30px', objectFit: 'contain' }}
                        />
                    )}
                </div>
                <div className="property brown">Mediterranean Ave<br />$60</div>
                <div className="community-chest">🎁<br />Community Chest</div>
                <div className="property brown">Baltic Ave<br />$60</div>
                <div className="tax">💰<br />Income Tax</div>
                <div className="railroad">🚂<br />Reading RR</div>
                <div className="property light-blue">Oriental Ave<br />$100</div>
                <div className="chance">❓<br />Chance</div>
                <div className="property light-blue">Vermont Ave<br />$100</div>
                <div className="property light-blue">Connecticut Ave<br />$120</div>
                <div className="corner jail">🚔<br />Jail</div>
            </div>
            <div className="middle">
                <div className="column">
                    <div className="property purple">St. Charles Pl<br />$140</div>
                    <div className="utility">💡<br />Electric Co.</div>
                    <div className="property purple">States Ave<br />$140</div>
                    <div className="property purple">Virginia Ave<br />$160</div>
                    <div className="railroad">🚂<br />Pennsylvania RR</div>
                    <div className="property orange">St. James Pl<br />$180</div>
                    <div className="community-chest">🎁<br />Community Chest</div>
                    <div className="property orange">Tennessee Ave<br />$180</div>
                    <div className="property orange">New York Ave<br />$200</div>
                </div>
                <div className="center">
                    <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <Dice value={dice1} />
                        <Dice value={dice2} />
                    </div>
                    <div className="card chance-card">❓ Chance</div>
                    <div className="card community-card">🎁 Community Chest</div>
                    <button className="btn roll" onClick={rollDice}>🎲 Roll Dice</button>
                    <input
                        type="text"
                        placeholder="Enter Player Name"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                    />
                    <button className="btn start" onClick={handleCreateAndRoll}>🚀 Create Player</button>
                    <p>Player Balance: {playerBalance}</p>
                    <p>Player Position: {playerPosition}</p>
                </div>
                <div className="column">
                    <div className="property red">Kentucky Ave<br />$220</div>
                    <div className="chance">❓<br />Chance</div>
                    <div className="property red">Indiana Ave<br />$220</div>
                    <div className="property red">Illinois Ave<br />$240</div>
                    <div className="railroad">🚂<br />B&O RR</div>
                    <div className="property yellow">Atlantic Ave<br />$260</div>
                    <div className="property yellow">Ventnor Ave<br />$260</div>
                    <div className="utility">💦<br />Water Works</div>
                    <div className="property yellow">Marvin Gardens<br />$280</div>
                </div>
            </div>

            <div className="row">
                <div className="corner free-parking">🅿️<br />Free Parking</div>
                <div className="property green">Pacific Ave<br />$300</div>
                <div className="property green">North Carolina Ave<br />$300</div>
                <div className="community-chest">🎁<br />Community Chest</div>
                <div className="property green">Pennsylvania Ave<br />$320</div>
                <div className="railroad">🚂<br />Short Line RR</div>
                <div className="chance">❓<br />Chance</div>
                <div className="property blue">Park Place<br />$350</div>
                <div className="luxury-tax">💎<br />Luxury Tax</div>
                <div className="property blue">Boardwalk<br />$400</div>
                <div className="corner go-to-jail">🚓<br />Go to Jail</div>
            </div>
            <style>
                {`
                    .monopoly-board {
                        display: grid;
                        grid-template-rows: 120px 1fr 120px;
                        grid-template-columns: 120px 1fr 120px;
                        width: 720px;
                        height: 720px;
                        background: limegreen;
                        border: 15px solid black;
                        margin: auto;
                        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
                    }

                    .row {
                        display: grid;
                        grid-template-columns: repeat(11, 1fr);
                        grid-column: 1 / 4;
                    }

                    .middle {
                        display: grid;
                        grid-template-columns: 120px 1fr 120px;
                        grid-column: 1 / 4;
                        grid-row: 2 / 3;
                    }

                    .column {
                        display: grid;
                        grid-template-rows: repeat(9, 1fr);
                    }

                    .corner {
                        width: 100%;
                        height: 100%;
                        background-color: white;
                        border: 3px solid black;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                        font-weight: bold;
                    }

                    .property, .community-chest, .tax, .railroad, .chance, .utility, .luxury-tax {
                        width: 100%;
                        height: 100%;
                        border: 3px solid black;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        font-size: 12px;
                        transition: transform 0.2s ease-in-out;
                    }

                    .property.brown { background: #8B4513; color: white; }
                    .property.light-blue { background: #ADD8E6; color: black; }
                    .property.purple { background: #DDA0DD; color: white; }
                    .property.orange { background: #FFA500; color: white; }
                    .property.red { background: #FF4500; color: white; }
                    .property.yellow { background: #FFD700; color: black; }
                    .property.green { background: #228B22; color: white; }
                    .property.blue { background: #1E90FF; color: white; }

                    .property:hover {
                        transform: scale(1.1);
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
                    }

                    .chance-card, .community-card {
                        width: 140px;
                        height: 70px;
                        background: white;
                        border-radius: 10px;
                        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                        transition: transform 0.2s ease;
                        margin: 10px;
                    }

                    .chance-card:hover, .community-card:hover {
                        transform: rotate(5deg);
                    }

                    .btn {
                        background-color: #FF4500;
                        color: white;
                        padding: 12px;
                        border: none;
                        cursor: pointer;
                        font-weight: bold;
                        transition: 0.3s;
                        border-radius: 5px;
                        margin: 10px;
                    }

                    .btn:hover {
                        background-color: #FF6347;
                    }

                    .center{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                `}
            </style>
        </div>
    );
};

export default Board;
