import "./style.css";
import { IoMdTransgender } from "react-icons/io";
import { IoPlanetSharp } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";
import { RiAliensFill } from "react-icons/ri";
import { IoMan } from "react-icons/io5";

const Location = ({location, personagem}) => {

    return (
        <div className="background-modal">
            <div className="modal">
                <h3 className="titulo-modal">Detalhes</h3>
                <div className="detalhes-personagem">
                    <div className="personagem">
                        <img src={personagem.image} alt={personagem.name}/>
                        <h3>{personagem.name}</h3>
                    </div>
                    <div className="modal-body">
                        <div className="infos">
                            <p><IoMdTransgender className="icon" size="20px"/> {personagem.gender}</p>
                            {
                                location.name && 
                                <p><IoPlanetSharp className="icon" size="20px"/> {location.name}</p>
                            }
                            {
                                location.dimension &&
                                <p><MdOutlinePlace className="icon" size="20px"/> {location.dimension}</p>
                            }
                            {
                            personagem.species === "Human"?
                            <p><IoMan className="icon" size="20px"/>{personagem.species}</p> 
                            : <p><RiAliensFill className="icon" size="20px"/> {personagem.species}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location;