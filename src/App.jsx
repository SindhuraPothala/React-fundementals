import ProductCard from "./ProductCard.jsx"
import Greeting from "./Greeting.jsx"
  
function App() {
  const productName="Chocolates"
  const price=20
 

  return (
    <div>
      <Greeting receivedName={productName} price={20} isAvailable={false}/>
    </div>
  )
}

export default App