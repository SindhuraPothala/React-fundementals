

function ProductCard(product) {

    const containerStyle = {
        borderRadius: '8px',
        border: '1px solid black',
        margin: '20px',
        textAlign: 'center',
        padding: '15px',
        
    }

    const pnameStyle = {
        color: 'black',
        fontSize: '20px',
        fontWeight: 'bold'
    }
    const priceStyle = {
        color: "blue",
        fontSize: '20px'
    }
    const stockStyle = {
        color: 'green',
        fontSize: '25px'
    }
 
    return (
        <div style={containerStyle}>
            <p style={pnameStyle}>ProductName: {product.productName}</p>
            <p style={priceStyle}>Price: {product.price}</p>
            <p style={stockStyle}>{product.isAvailable === true ? "In Stock" : "Out of stock"}</p>
        </div>
    )
}

export default ProductCard; 