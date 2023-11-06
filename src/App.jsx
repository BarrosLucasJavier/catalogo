
import { ProductsProvider } from "./context/products.context"
import { BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from "./routes"


function App() {

  return (
    <Router>
      <ProductsProvider>
        <AppRoutes/>
      </ProductsProvider>
    </Router>
  )
}

export default App
