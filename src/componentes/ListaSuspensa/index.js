import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-supensa'>
            <label>
                {props.label}
            </label>
            <select
             required={props.obrigatoria}
              value={props.valor}
              onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.item.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>

    )
}
export default ListaSuspensa