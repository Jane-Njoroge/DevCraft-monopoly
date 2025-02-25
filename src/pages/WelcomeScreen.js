import {useState} from "react";
import  { useNavigate } from "react-router-dom";
import "./WelcomeScreen.css";


function WelcomeScreen()  {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const PlayButton = () => (
               <button 
               className={`play-btn ${isHovered ? 'hovered' : ''}`}
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
               onClick={() => navigate("/SignUp")}>
                   Play Game {isHovered && '>>'}
                   </button>
            )

    return (
        <div className="WelcomeScreen">
        <div className="screen">
            <PlayButton/>
            
        </div>
        </div>
    )
    
    }


export default WelcomeScreen