import IncrementCount from "./increment";
import DecrementCount from "./decrement";
import { useState } from "react";
//import './counter.css';
import { Container , Card  , Row , Col} from "react-bootstrap";
import "./counter.css";
import { useSelector , useDispatch} from "react-redux";
import {IncrementAction , DecrementAction} from '../../redux/features/counterSlice'

const Counter = () =>{

    //const [count , setCount] = useState(0)
    const count = useSelector(state => state.counter.count)
    console.log("use selector " , useSelector(state => state))
    console.log("count " , count);
    const dispatch = useDispatch();

    const increase = () => {
      console.log("incrase")
        dispatch(IncrementAction())
    }

    const decrease = () => {
      console.log("decrease")

        if(count>0){
           dispatch(DecrementAction())
        }
    }

    return <Container className="mt-5 w-25">

<Card style={{ width: '18rem' }}>
    <Card.Body >
      <Card.Title className="text-center">{count}</Card.Title>
      <Row >
        <Col>
      <IncrementCount className="buttonLook btn" increase={increase}/>
      </Col>
      <Col>
      <DecrementCount className="buttonLook btn" decrease={decrease}/>
      </Col>
      </Row>

    </Card.Body>
  </Card>

    </Container>

}

export default Counter;