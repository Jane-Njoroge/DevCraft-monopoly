import React from "react";
import "./NewGame.css"
import { useNavigate } from "react-router-dom";

function NewGamePage(){

    const navigate = useNavigate()

    return(
        <div className="newgame-page">
            <button className="newgame-btn" onClick={() => navigate('/add-player')}>
                New Game
                </button>

        </div>
    )

}
export default NewGamePage;