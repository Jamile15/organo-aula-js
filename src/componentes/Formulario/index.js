import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const time = [
    'Programação',
    'Front-End',
    'Data Science',
    'Develops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem2" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa item={time}/>
            </form>
        </section>
    )
}

export default Formulario