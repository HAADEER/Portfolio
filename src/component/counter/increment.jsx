import './counter.css';


const IncrementCount = ({increase}) =>{

    //console.log(props.fun)

    return <div className =' d-flex justify-content-center'>
        <button type="button" className ="btn btn-primary" onClick={()=>increase()}>+</button>
    </div>
}

export default IncrementCount