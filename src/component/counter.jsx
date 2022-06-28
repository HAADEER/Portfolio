import IncrementCount from "./increment";
import DecrementCount from "./decrement";
import { useState } from "react";
//import './counter.css';
import { Container , Card  , Row , Col} from "react-bootstrap";


const Counter = () =>{

    const [count , setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        if(count>0){
            setCount(count - 1)
        }
    }

    return <Container className="mt-5 w-25">

<Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{count}</Card.Title>
      <Row >
        <Col>
      <IncrementCount className="buttonLook" fun={increase}/>
      </Col>
      <Col>
      <DecrementCount className="buttonLook" fun={decrease}/>
      </Col>
      </Row>

    </Card.Body>
  </Card>

    </Container>

}

export default Counter;