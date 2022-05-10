import tea from "../images/tea-campbell-guitar-bass.jpg"

export default function GuitarBass() {
    return (
        <div className="details">
            <div className="image-container">
                <img src={tea} alt="tea-campbell-guitar-bass" />
            </div>
            <h2>téa campbell</h2>
            <h3>guitar / bass</h3>
        </div>
    )
}