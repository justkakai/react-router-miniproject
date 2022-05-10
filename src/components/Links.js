import { NavLink } from 'react-router-dom';

export default function Links() {
    return (
        <div>
            <NavLink to="/"><h1>Meet Me @ the Altar</h1></NavLink>
            <nav style={{ textAlign: "center" }}>
                <NavLink to="vocals" className="instrument-links">vocals</NavLink>
                <NavLink to="guitarbass" className="instrument-links">guitar/ bass</NavLink>
                <NavLink to="drums" className="instrument-links">drums</NavLink>
            </nav>
        </div>
    )
}
