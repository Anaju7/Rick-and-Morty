import "./style.css"

const Location = ({location, personagem}) => {

    console.log(personagem)

    return (
        <>
            <div className="modal">
                <div className="personagem">
                    <img src={personagem.image}/>
                    <p>{personagem.name}</p>
                </div>
                <div className="infos">
                <p><strong></strong>{personagem.gender}</p>
                <p><strong>Name: </strong> {location.name}</p>
                <p><strong>Dimension: </strong> {location.dimension}</p>
                <p><strong>Type: </strong> {location.type}</p>
                </div>
            </div>
        </>
    )
}

export default Location;