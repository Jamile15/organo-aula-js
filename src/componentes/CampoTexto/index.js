import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    console.log(placeholderModificada)
    const [valor, setValor] = useState('jamile ')

    const aoDigitado = (evento) => {
        setValor (evento.target.value)
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