
import {Button} from 'react-bootstrap'

const DecrementCount = (props) =>{

 

    return <div>
                                         {/* disabled={props.count <= 0} */}
        <Button variant="danger" onClick={props.fun}>-</Button>
    </div>

}

export default DecrementCount;