import IncrementCount from "./increment";
import DecrementCount from "./decrement";
import { useState } from "react";
//import './counter.css';
import { Container , Card  , Row , Col} from "react-bootstrap";
import "./counter.css";

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
    <Card.Body >
      <Card.Title className="text-center">{count}</Card.Title>
      <Row >
        <Col>
      <IncrementCount className="buttonLook btn" fun={increase}/>
      </Col>
      <Col>
      <DecrementCount className="buttonLook btn" fun={decrease}/>
      </Col>
      </Row>

    </Card.Body>
  </Card>

    </Container>

}

export default Counter;