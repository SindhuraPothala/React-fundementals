import "./Greeting.css"

function Greeting(greeting){
     
    return(
        <div>
            <p>ProductName {greeting.receivedName}</p>
            <p>Price {greeting.price}</p>
            <p>{greeting.isAvailable===true?"In Stock":"Out of Stock"}</p>
        </div>
    )
}

export default Greeting;