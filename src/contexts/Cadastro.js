import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { ValidacoesContext } from "./Validacoes";

export const CadastroContext = createContext({});

export const CadastroProvider = ({children}) => {

    const [stage, setStages] = useState([true]);
    const [pgForm, setPgForm] = useState(0);
    const [tituloForm, setTituloForm] = useState('Dados Do Usuario');
    const [form, setForm] = useState({});
    const [formPronto, setFormPronto] = useState(0)
    const router = useRouter();
    
    function trocaPg(novoTitulo) {
        let tmpEtapa = stage;
        tmpEtapa.push(true)
        setStages(tmpEtapa)
        setPgForm(pgForm + 1)
        setTituloForm(novoTitulo)
    }

    function voltar(novoTitulo){
        let tmpEtapa = stage;
        tmpEtapa.pop()
        setStages(tmpEtapa)
        setPgForm(pgForm - 1)
        setFormPronto(formPronto - 1)
        setTituloForm(novoTitulo)
    }

    
    function enviar(dados) {
        setForm({ ...form, ...dados })
        setFormPronto(formPronto + 1)
    }

    useEffect(() => {
        console.log(form);
    }, [form])

    function limpaFormatacao(v){
        v = v.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gi, '')
        return v;
    }

    function cadastra(form){
        return axios.post("http://localhost:8080/auth/novoSolicitante/", {
                "bairro": form.bairro,
                "cep": limpaFormatacao(form.cep),
                "cidade": form.cidade,
                "complemento": form.complemento,
                "cpf": limpaFormatacao(form.cpf),
                "dataNascimento": form.dataNasc,
                "email": form.email,
                "estado": form.estado,
                "logradouro": form.logradouro,
                "nome": form.nome,
                "numero": form.numero,
                "senha": form.senha,
                "telefonePrimario": limpaFormatacao(form.telPrimario),
                "telefoneSecundario": limpaFormatacao(form.telSecundario)
            })
    }

    return (<CadastroContext.Provider value={{enviar, trocaPg, voltar, cadastra,tituloForm, stage, pgForm,form,formPronto}}>{children}</CadastroContext.Provider>)
}