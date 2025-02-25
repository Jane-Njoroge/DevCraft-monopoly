import React, { useState } from 'react'
import './addplayer.css'

const AddPlayerPage = () => {
    const [players,setPlayers] = useState(['VAN']);

    const [currentPlayer,setCurrentPlayer] = useState('VAN')

    const addPlayer = () => {

    if(players.length < 8){
        const newPlayer = `PLAYER ${players.length + 1}`
        setPlayers([...players,currentPlayer]);
        setCurrentPlayer(newPlayer);
    }
}

    const handleBack = () => {
        console.log('Back button clicked')
    };

    const handleRules = () => {
        console.log('Rules button clicked!');
        
    };

    const handlePlay = () => {
        console.log('Play button clicked');
        
    };

    return (
        <div className='addplayerpage-container'>
            <img src='' alt='' className='img-log'/>
                     
                  <div className='game-section'>
                
                <div className='current-player'>
                    <h2>PLAYER</h2>

                    <h3 className='player-name'>{currentPlayer}</h3>

                    <img
                    src=''
                    alt='car Token'
                    className='car-token'
                    />
                </div>
    
                

                <div className='player-list'>
                 {players.map((player,index) => (
                    <div key={index} className='player-item'>
                        <span className='player-dot'>🔵</span>
                        <span>{player}</span>
                        <img
                        src=''
                        alt=''
                        className=''
                        />

                    </div>
                 ))}

                </div>

            </div>

            <div className='button-group'>
                <button onClick={handleBack}>BACK</button>
                <button onClick={handleRules}>RULES</button>
                <button onClick={addPlayer}>ADD PLAYER</button>
                <button onClick={handlePlay}>PLAY</button>
            </div>

        </div>
    )
}
export default AddPlayerPage;