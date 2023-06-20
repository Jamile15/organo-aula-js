import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.item)
    return(
        <div>
            <label>
                {props.label}
                <select>
                    {props.item.map( item => <option>{item}</option>)}
                </select>
            </label>
        </div>

    )
}
export default ListaSuspensa