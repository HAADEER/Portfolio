
import {Button} from 'react-bootstrap'

const IncrementCount = (props) =>{

    //console.log(props.fun)

    return <div>
        <Button variant="primary" onClick={props.fun}>+</Button>
    </div>
}

export default IncrementCount