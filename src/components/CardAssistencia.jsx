import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CardAssistencia = ({ nome, avaliacao, categorias, endereco }) => {
    return (

        <div className="w-full bg-blue-light h-28 flex rounded-lg p-4">
            <div className="w-2/5 flex justify-around items-center">
                <img src="/download.png" alt="" className="rounded-full h-20" />
            </div>
            <div className="w-4/5 p-2">
                <p>{nome}</p>
                <div className="flex justify-between w-2/3">
                    <p><FontAwesomeIcon icon={faStar} className="text-amarelo" />{avaliacao}</p>
                    <p> | </p>
                    <p>{categorias}</p>
                </div>
                <p>{endereco}</p>
            </div>
        </div>
    )
}

export default CardAssistencia