import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    console.log(placeholderModificada)
  

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatoria}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto