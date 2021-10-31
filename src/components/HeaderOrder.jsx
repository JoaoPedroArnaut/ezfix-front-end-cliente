import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Botao from './Botao'

    return (
        <>
            <div className="pt-24 flex justify-around">
                <div className="w-4/5">
                    <div className="sm:w-full flex justify-between pb-3 mt-12 ">
                        <Botao estilo={4} text="Voltar" icone={faArrowLeft}/>
                        <p className="text-3xl font-bold">{tituloPagina}</p>
                    </div>
                    <hr />


                </div>

            </div>
        </>
    )
}

export default HeaderOrder
