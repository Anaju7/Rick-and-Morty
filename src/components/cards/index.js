import React, { useEffect, useState } from "react";
import Api from "../../api";
import './style.css'
import Location from "../location";
import axios from "axios";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";


const Card = () => {
    // personagem
    const [personagens, setDados] = useState([]); 

    // localizaçoes
    const [locations, setLocations] = useState({});

    // info vem informações sobre a paginação e dados do json
    const [info, setInfo] = useState({});

    // modal
    const [display, setdisplay] = useState(false);

    // recupera o id de cada personagem
    const [idPersonagem, setId] = useState({})

    // paginação
    const [page, setpages] = useState('');

    // filtro
    const [search, setSearch] = useState('');

    // url inicial da pagina inicial
    const urlInicial = "/character?page=1";
    const urlpersonagens = "/character/"


    // função para retornar dados da api e fazer a filtragem
    const chamadaApi = (url, pg) => {
        // fiz um ternario se tiver alguma page ele faz o get na url da page, se não ele faz na url inicial
        Api.get(`${pg? pg : url}&name=${search}`  )
        .then(response => {
            // populei a variavel o array personagens com tds os dados que vem de results
            setDados(response.data.results);
            // populei o array de info com informações sobre a paginação e outros dados
            setInfo(response.data.info)
        }).catch(error => {
            console.error(error)
        })
    }

    useEffect(() => {
        chamadaApi(urlInicial,page);
    }, [page, search])


   
    // função para recuperar dados de localização
    const getLocation = (url) => {
        axios.get(url)
        .then(response => {
            setLocations({})
            const dados = {
                type: response.data.type,
                name: response.data.name,
                dimension: response.data.dimension,
            }
            setLocations(dados)
        }).catch(erro => {
            console.error(erro);
        })

    }

    // função para recuperar dados de cada personagem individual
    const Getpersonagem = (id) => {
        Api.get(`${urlpersonagens}${id}`)
        .then(response => {
            const dadosPerso = {
                name: response.data.name,
                status: response.data.status,
                species: response.data.species,
                type: response.data.type,
                gender: response.data.gender,
                image: response.data.image,
            }
            setId(dadosPerso);
        }).catch(err => {
            console.error(err)
        })
    }

    const toggle = () => {
        setdisplay(!display)
    }

    // funções paginação
    const avanca = () => {
        // popula a variavel page com a url next que vem de info
        setpages(info.next)
    }
    const voltar = () => {
         // popula a variavel page com a url prev que vem de info
        setpages(info.prev)
    }

    
    return ( 
        <>
        <div>
           <h1>Pesonagens</h1>
        </div>
        <form>
            <input onChange={(e) => {
                setSearch(e.target.value)
            }} 
            value={search}
            type="text"
            className="filtro-personagens"
            placeholder="Procure Personagens"/>
        </form>
            <div className="cards" >
                    {
                        personagens.map((item,index) => {
                        return (
                            <div className="card" key={index} onClick={() => {
                                toggle()
                                getLocation(item.location.url)
                                Getpersonagem(item.id)
                            }}>
                                <img src={item.image} alt={item.name}/>
                                <div className="card-body">
                                    <strong>{item.name}</strong>
                                </div>
                            </div>
                        )
                        
                        })
                    }
                    {
                        display &&
                        <div onClick={toggle} className="background-modal">
                            <Location  location={locations} personagem={idPersonagem} />
                        </div>
                    }
            </div>
        <div className="pagination">
            <button onClick={voltar} ><IoIosArrowDropleft className="icon" size="50px" /></button>
            <button onClick={avanca} ><IoIosArrowDropright className="icon" size="50px" /></button>
        </div>
        </>
    )
}

export default Card;