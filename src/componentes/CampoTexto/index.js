import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`
    

    let valor = 'jamile'

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={props.obrigatoria}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto