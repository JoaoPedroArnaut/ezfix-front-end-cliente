import React from 'react'
import Input from './Input'

const TecnicoPerfilEnd = () => {
    return (
        <>
            <div className="w-2/3">
                <span className="font-semibold text-2xl">Endereço:</span>
                <div className="flex justify-between">
                    <div className="w-4/12">
                        <Input label="CEP" value="09182-440" alternativoDois onChange disabled={true}/>
                    </div>
                    <div className="w-7/12">
                        <Input label="Bairro" value="Jd. Las Vegas" alternativoDois disabled={true}/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-4/5">
                        <Input label="Rua" value="R. Antônio Zanetti" alternativoDois disabled={true}/>
                    </div>
                    <div className="w-12">
                        <Input label="Número" value="285" alternativoDois disabled={true}/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-12">
                        <Input label="Estado" value="SP" alternativoDois disabled={true}/>
                    </div>
                    <div className="w-4/5">
                        <Input label="Cidade" value="Santo André" alternativoDois disabled={true}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TecnicoPerfilEnd