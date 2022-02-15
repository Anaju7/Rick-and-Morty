import "./style.css"
import { BsGithub, BsLinkedin} from "react-icons/bs";
import rickMorty from "../../assets/dança-RM.png";
import rickMortyImg from "../../assets/rick&morty.png";

const Footer = () => {

    return (
            <div className="footer">
                <div className="conteudo">
                    <h2>contatos</h2>
                    <a href="https://github.com/Anaju7" target="_blank" rel="noreferrer"><BsGithub className="icon-footer" size="40px" /></a>
                    <a href="https://www.linkedin.com/in/ana-ju/" target="_blank" rel="noreferrer"><BsLinkedin className="icon-footer" size="40px" /></a>
                </div>
                <img src={rickMorty} className="img-footer" alt="rick e morty dançando juntos"/>
                <img src={rickMortyImg} className="img-footer2" alt="rick e morty saindo do portal e fazendo gestos"/>
            </div>
    )
}

export default Footer;