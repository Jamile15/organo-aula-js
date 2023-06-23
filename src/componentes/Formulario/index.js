import Botao from '../Botão'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const time =
    [
        'Programação',
        'Front-End',
        'Develops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('formulario foi submetido :)')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatoria={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatoria={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto  label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatoria={true}label="Time"  item={time}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario