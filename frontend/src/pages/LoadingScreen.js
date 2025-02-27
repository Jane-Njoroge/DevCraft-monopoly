import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import danceGif from './dance.gif'



const LoadingScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => navigate("/new-game"),4000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="screener" style={{background:'black', height:'100vh', justifyContent:'center',alignItems:'center',display:'flex'} }>
            <img style={{width:'150px',height:'150px'}}
                 src={danceGif} 
                 alt="Loading.."
                 />
   
        </div>
    )
}

export default LoadingScreen

