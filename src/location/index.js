import "./style.css"

const Location = ({location}) => {

    console.log(location)

    return (
        <>
            <div className="modal">
                <p>name: {location.name}</p>
                <p>dimension: {location.dimension}</p>
                <p>type: {location.type}</p>
            </div>
        </>
    )
}

export default Location;