import React, { useEffect, useState } from "react";
import Api from "../api";
import './index.css'
import Location from "../location";
import axios from "axios";

const Card = () => {
    // personagem
    const [personagens, setDados] = useState([]); 

    // localizaçoes
    const [locations, setLocations] = useState({});

    // info vem informações sobre a paginação e tamanho do json
    const [info, setInfo] = useState({});

    // modal
    const [display, setdisplay] = useState(false);

    // paginação
    const [page, setpages] = useState('')

    // url inicial da pagina inicial
    const urlInicial = "/character?page=1";

    // get da api com a urlbase
    const chamadaApi = (url) => {
        // fiz um ternario se tiver alguma page ele faz o get na url da page, se não ele faz na url inicial
        Api.get(page? page : url)
        .then(response => {
            // populei a variavel o array personagens com tds os dado que vem de results
            setDados(response.data.results);
            // populei o array de info com informações sobre a paginação
            setInfo(response.data.info)
        }).catch(error => {
            console.error(error)
        })
    }

    useEffect(() => {
        // chamada api para a url inicial ou para as urls que retornam em page-next e page-prev
        chamadaApi(urlInicial,page);
        // coloquei page como parametro para ficar observando as mudanças de estado dessa variavel page
    }, [page])

    const avanca = () => {
        // popula a variavel page com a url next que vem de info
        setpages(info.next)
    }

    const voltar = () => {
         // popula a variavel page com a url prev que vem de info
        setpages(info.prev)
    }

    const teste = (url) => {
        // faz o get em cada url dos personagens
        axios.get(url)
        .then(response => {
            // essa variavel pega os dados que vem da location url e coloca em um objeto
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

    // console.log(dados)

    
    return ( 
        <>
        <div className="cards">
                {
                    personagens.map((item,index) => {
                       return (
                        <div className="card" key={index}>
                            <img className="" src={item.image} alt=""/>
                            <div className="card-body">
                                <strong>{item.name}</strong>
                                <button onClick={() => {
                                    // chama a função para fz um get em cada uma das urls que retorna de cada item
                                    teste(item.location.url)
                                    // chama a função para mudar o display do modal
                                    setdisplay(!display)
                                }}>mais</button>
                            </div>
                        </div>
                       )
                       
                    })
                }
                {
                    // faz um ternario para o modal ficar interativo
                    display &&
                    <Location location={locations} />
                }
        </div>
        <div className="pagination">
            <button onClick={voltar} className="prev">-</button>
            <button onClick={avanca} className="next">+</button>
        </div>
        </>
    )
}

export default Card;