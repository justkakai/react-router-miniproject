import React from "react"
import group from "../images/mmta.jpg"

export default function Home() {
    return (
        <div className="details">
            <div className="image-container-4">
                <img src={group} alt="mmta-group" />
            </div>
            <p className="on-tour">🟢 on tour</p>
            <a href="https://www.meetmeatthealtar.com/tour" target="_blank" rel="noreferrer" className="buy-tickets">PURCHASE TICKETS</a>
        </div>
    )
}


