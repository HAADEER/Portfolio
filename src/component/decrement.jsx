import "./counter.css" ;
import {Button} from 'react-bootstrap'

const DecrementCount = (props) =>{

 

    return <div  className =' d-flex justify-content-center'>
        <button type="button" className = "btn btn-danger" onClick={props.fun}>-</button>
    </div>

}

export default DecrementCount;