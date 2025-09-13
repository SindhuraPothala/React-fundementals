function Greeting({receivedName,price,isAvailable}){
     
    return(
        <div>
            <p>ProductName {receivedName}</p>
            <p>Price {price}</p>
            <p>{isAvailable===true?"In Stock":"Out of Stock"}</p>
        </div>
    )
}

export default Greeting;