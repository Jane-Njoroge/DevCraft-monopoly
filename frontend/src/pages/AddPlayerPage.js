import React, { useState,useEffect } from 'react'
import './addplayer.css'
import { useNavigate } from 'react-router-dom';
import logo from './log.png'

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
//useEffect(() => {
   // const newGameID = Math.floor(100000 + Math.random() * 900000);
    //setGameID(newGameID)
//}, [])



const tokens = ["Car", "Hat", "Dog", "Boat", "Thimble"]

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








//const addPlayer = async() => {
   // if(players.length === 0) {
       // alert("No players found!");
       // return;
  //  }

       // const randomIndex = Math.floor(Math.random()* players.length);
       // const selectedPlayer = players[randomIndex];

        
       //const token = Math.floor(1000 + Math.random() * 9000);
      // const token = getRandomToken();
      // selectedPlayer.token = token;

      // try{
       // await fetch("https://backend.com/api/update-player", {
        //    method:"POST",
          //  headers:{
          //      "Content-Type":"application/json",
          //  },
          //  body:JSON.stringify(selectedPlayer),
       // });
      // } catch (error) {
      //  console.error("Error updating player:",error);
     //  }
     //  console.log(`player ${selectedPlayer.name} assigned token: ${token}`);
       
//}
//const hostPlayer = players.find(player => player.isHost);
//const otherPlayers = players.filter(player => !player.isHost)



    
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