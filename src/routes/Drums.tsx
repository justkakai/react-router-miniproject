import React from "react"
import ada from "../images/ada-juarez-drums.jpg"

export default function Drums() {
    return (
        <div className="details">
            <div className="image-container">
                <img src={ada} alt="ada-juarez-drums" />
            </div>
            <h2>ada juarez</h2>
            <h3>drums</h3>
        </div>
    )
}