import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import HeaderOrder from "../components/HeaderOrder"
import Footer from '../components/Footer'
import DetalhesAlternado from '../components/DetalhesAlternado'
import { api } from '../api/api'
import { useRouter } from 'next/router'
import Carregamento from '../components/Carregamento'

const detalhespedido = () => {

    const router = useRouter()

    const [tituloPagina, setTituloPagina] = useState()
    const [estagio, setEstagio] = useState(2)
    const [carregado, setCarregado] = useState(false)
    const [pedido,setPedido] = useState({})


    function alternaTitulo(estagio) {
        estagio == 3 ? setTituloPagina("Pagamento")
            : setTituloPagina("Pedidos")
    }

    useEffect(() => {
        alternaTitulo(estagio)

        api.get(`/orcamentos/${router.asPath.replace("/detalhespedido?", "")}`).then(res => {
            setCarregado(true)
            setPedido(res.data)
            console.log(res.data);
        }, err => {

        })
    }, []);

    if (carregado) {
        return (
            <>
                <Navbar fixed={true} />
                <HeaderOrder tituloPagina={tituloPagina} />
                <DetalhesAlternado pedido={pedido} estagio={estagio} />
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <Navbar fixed={false} />
                <Carregamento />
            </>
        )
    }
}

export default detalhespedido