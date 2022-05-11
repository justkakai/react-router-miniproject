import { NavLink } from 'react-router-dom';

export default function Links() {
    return (
        <div>
            <NavLink to="/"><h1>Meet Me @ the Altar</h1></NavLink>
            <nav style={{ textAlign: "center" }}>
                <NavLink to="vocals" className="instrument-links" style={({ isActive }) => {
                    return {
                        color: isActive ? "#91ff00" : ""
                    }
                }}>vocals</NavLink>
                <NavLink to="guitar-and-bass" className="instrument-links" style={({ isActive }) => {
                    return {
                        color: isActive ? "#91ff00" : ""
                    }
                }}>guitar/ bass</NavLink>
                <NavLink to="drums" className="instrument-links" style={({ isActive }) => {
                    return {
                        color: isActive ? "#91ff00" : ""
                    }
                }}>drums</NavLink>
            </nav>
        </div>
    )
}
