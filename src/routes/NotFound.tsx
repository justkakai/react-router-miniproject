import React from 'react';
import { useNavigate } from 'react-router-dom';
import lost from "../images/lost.png"

export default function NotFound() {

    let navigate = useNavigate();

    return (
        <div className="details">
            <h2 className="not-found-h2">you seem a bit ... lost?</h2>
            <div className="image-container-5">
                <img src={lost} alt="are-you-lost" />
            </div>
            <button className="home-redirect" onClick={() => {navigate("/")}}>yes please take me home, i'm scared</button>
        </div>
    )
}