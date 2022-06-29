import './counter.css';
import {Button} from 'react-bootstrap'

const IncrementCount = (props) =>{

    //console.log(props.fun)

    return <div className =' d-flex justify-content-center'>
        <button type="button" className ="btn btn-primary" onClick={props.fun}>+</button>
    </div>
}

export default IncrementCount