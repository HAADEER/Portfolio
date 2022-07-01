import "./counter.css" ;


const DecrementCount = ({decrease}) =>{

    return <div  className =' d-flex justify-content-center'>
        <button type="button" className = "btn btn-danger" onClick={decrease}>-</button>
    </div>

}

export default DecrementCount;