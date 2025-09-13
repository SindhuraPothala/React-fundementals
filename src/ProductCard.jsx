function ProductCard(){
    const productName="Chocolates"
    const price=20
    isAvailable=true
    return(
        <div>
            <p>ProductName: {productName}</p>
            <p>Price: {price}</p>
            <p>{isAvailable===true?"In Stock":"Out of Stock"}</p>
        </div>
    )
}

export default ProductCard; 