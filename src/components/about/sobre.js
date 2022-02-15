import "./style.css"
import imgRickMorty from "../../assets/rick&&morty.png"

const About = () => {

    return (
        <div className="container">
            <div className="Sobre">
                <div className="titulo">
                    <h2>Sobre a Serie</h2>
                </div>
                <div className="texto">
                    <p>Rick & Morty é uma série animada de comédia que mostra as aventuras interdimensionais de Rick, 
                        a mente mais brilhante da galáxia, e seu neto Morty.
                    </p>
                    <p>
                    Com sua arma capaz de criar portais para viajar no tempo-espaço, Rick leva Morty para explorar todos as absurdas formas de vida que o universo é capaz de sustentar. 
                    Apesar de genial, Rick tem sofre de alcoolismo e possui uma relação conflituosa com sua família, fruto da sua visão cínica da vida e seu egoísmo.
                    Por outro lado, Morty está longe de ter o intelecto do seu avô, mas é o único capaz de fazê-lo ser um pouquinho mais gentil.
                    </p>
                </div>
            </div>
            <div className="div-imgRickMorty">
                <img src={imgRickMorty} alt="rick e morty saltando do portal"/>
            </div>
        </div>
    )
}

export default About;