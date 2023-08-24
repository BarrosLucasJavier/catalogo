
import { ProductsProvider } from "./context/products.context"
import Home from "./page/home/Home"


function App() {

  return (
    <ProductsProvider>
      <Home/>
    </ProductsProvider>
  )
}

export default App
