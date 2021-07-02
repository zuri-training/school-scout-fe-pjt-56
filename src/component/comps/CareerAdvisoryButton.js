import { Link } from "react-router-dom"
import './CareerAdvisoryButton.css'
import arr from "./images/left-arrow.svg";

export const CareerAdvisoryButton = () => {
    return (
        <div className="cad-cab-btn">
            <div className="cad-btn-container">
                <Link to="" className="cad-btn-back">
                    <img className="" src={ arr } alt="" />
                    <p className="cad-btn-link">Back</p>
                </Link>
            </div>
        </div>
    )
}
