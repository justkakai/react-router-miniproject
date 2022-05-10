import edith from "../images/edith-victoria-vocals.jpg"

export default function Vocals() {
    return (
        <div className="details">
            <div className="image-container-1">
                <img src={edith} alt="edith-victoria-vocals" />
            </div>
            <h2>edith victoria</h2>
            <h3>vocals</h3>
        </div>
    )
}