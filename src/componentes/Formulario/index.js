import { useState } from 'react'
import Botao from '../Botão'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {


    const timeCargo =
        [
            'Programação',
            'Front-End',
            'Develops',
            'UX e Design',
            'Mobile',
            'Inovação e Gestão'
        ]

        const [nome, setNome] = useState('')
        const [cargo, setcargo] = useState('')
        const [imagem, setImagem] = useState('')
        const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log( 'form enviado' ,nome, cargo, imagem, time)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatoria={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                     />
                    
                <CampoTexto
                    obrigatoria={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setcargo(valor)}
                     />

                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                     />

                <ListaSuspensa
                    obrigatoria={true}
                    label="Time"
                    item={timeCargo}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}

                     />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario