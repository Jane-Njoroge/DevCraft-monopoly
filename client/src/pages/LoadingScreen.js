import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import danceGif from './dance.gif'



const LoadingScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => navigate("/game-ready"),4000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="screen" style={{background:'black'}}>
            <img style={{width:'150px',height:'150px'}}
                 src={danceGif} 
                 alt="Loading.."
                 />
   
        </div>
    )
}

export default LoadingScreen

