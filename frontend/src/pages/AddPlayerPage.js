import React, { useState,useEffect } from 'react'
import './addplayer.css'
import { useNavigate } from 'react-router-dom';
import logo from './log.png'
import token1 from './token1.jpeg'
import token2 from './token2.jpeg'
import token3 from './token3.jpeg'
import token4 from './token4.jpeg'
import token5 from './token5.jpeg'
import token6 from './token6.jpeg'
import token7 from './token7.jpeg'
import token8 from './token8.jpeg'

const AddPlayerPage = () => {

//const [gameID, setGameID] = useState('')
const [gameLink, setGameLink] = useState('')
const [copied, setCopied] = useState(false);
const [players, setPlayers] = useState([]);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);

const navigate = useNavigate();

useEffect(()=> {
const handleCopyLink  = async () => {
    try{
    const response =  await fetch("https://backend.com/api/create-game");
    const data  = await response.json();
    const link = `https://game.com/json/${data.gameID}`;
    setGameLink(link)
    await navigator.clipboard.writeText(link)
    setCopied(true);

    console.log("Game link copied:", link);
    
 } catch (error){
    console.error("Error fetching game link:",error);
 }
 
};
 handleCopyLink();
}, []);




const tokens = [
    <img src={token1} alt='token1' style={{width:'20px',height:'20px'}}/>,
    <img src={token2} alt='token2' style={{width:'20px',height:'20px'}}/>,
    <img src={token3} alt='token3' style={{width:'20px',height:'20px'}}/>,
    <img src={token4} alt='token4' style={{width:'20px',height:'20px'}}/>,
    <img src={token5} alt='token5' style={{width:'20px',height:'20px'}}/>,
    <img src={token6} alt='token6' style={{width:'20px',height:'20px'}}/>,
    <img src={token7} alt='token7' style={{width:'20px',height:'20px'}}/>,
    <img src={token8} alt='token8' style={{width:'20px',height:'20px'}}/>
]

const getRandomToken = () => {
    return tokens[Math.floor(Math.random() * tokens.length)];
}

useEffect(() => {
    const fetchPlayers =  async () => {
        try{
            const response = await fetch("https://backend.com/api/players");
            if (!response.ok) throw new Error("Failed to fetch players");

            const data = await response.json();
            setPlayers(data);
        } catch (err) {
            setError(err.message);
        }finally {
            setLoading(false);
        }
    };
}, []);


const addPlayer = async () => {
    if (players.length === 0) {
        alert("No players found!");
        return;
    }
    const randomIndex = Math.floor(Math.random() * players.length);
    const selectedPlayer = {...players[randomIndex]};
    selectedPlayer.token = getRandomToken();

    try{
        await fetch("https://backend.com/api/update-player",{
            method:"POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body:JSON.stringify(selectedPlayer),
        })
        console.log(`Player ${selectedPlayer.name} assigned token: ${selectedPlayer.token}`);

        setPlayers(players.map(player =>
            player.id === selectedPlayer.id? selectedPlayer : player
        ));
        
    } catch (error) {
        console.error("Error updating player:",error);
    }
};

const hostPlayer = players.find(player => player.isHost);
const otherPlayers = players.filter(player => !player.isHost);



    
    const handleBack = () => {
        navigate('/new-game')
        console.log('Back button clicked')
    };

    const handleRules = () => {
        navigate('')
        console.log('Rules button clicked!');
        
    };
     

    
        const handlePlay = () => {
        navigate('/game-board')
        console.log('Play button clicked');
        
    };

    return (
        <div className='addplayerpage-container'>
            <img src={logo} alt='logo' className='img-logo'/>
                     
                  <div className='game-section'>
                
                <div className='current-player'>
                    <h2>PLAYER</h2>
                    <button>
                    {copied ? "copied!" : "copy Invite Link"}
                    </button>
                    {gameLink && <p>Game Link:<a href={gameLink}>{gameLink}</a></p>}
                    {hostPlayer ? (
                        <p>{hostPlayer.name} (Host)- Token: {hostPlayer.token || "Not assigned"}</p>
                    ) : (
                        <p>No host assigned yet.</p>
                    )}
                </div>
    
                

                <ul className='player-list'>
                 {otherPlayers.length > 0 ? ( 
                    otherPlayers.map((player) => (
                    <li key={player.id} className='player-item'>
                        <span className='player-dot'>🔵</span> {player.name} 
                        (Token: {player.token || "Not assinged"})
                    </li>
                 ))

                ) : (
                    <p>No other players added</p>
                )}

                </ul>

            </div>

            <div className='button-group'>
                <ul>
                <li><button onClick={handleBack}>BACK</button></li>
               <li><button onClick={handleRules}>RULES</button></li>
               <li> <button onClick={addPlayer}>ADD PLAYER</button></li>
               <li><button onClick={handlePlay}>PLAY</button></li>
                </ul>
            </div>

        </div>
    )
}
export default AddPlayerPage;