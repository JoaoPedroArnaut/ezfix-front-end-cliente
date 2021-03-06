import React from 'react'
import Botao from "../components/Botao";
import BoxEtapas from "../components/BoxEtapas";


function acompanhamento() {
    return (
        <>
            <section className="w-full p-24 flex flex-col items-center">

                <div className="flex items-center w-full justify-between border-b-2 pb-2">
                    <Botao estilo={3} onClick={() => { router.push("/index") }} text="voltar" />
                    <h1 className="text-4xl">Seu Pedido</h1>
                </div>

                <section className="bg-blue-light p-10 flex items-center w-full mt-8 rounded-2xl">
                    <BoxEtapas />
                </section>

            </section>


        </>
    )

}

export default acompanhamento;