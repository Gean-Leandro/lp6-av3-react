import { useEffect, useState } from 'react'
import './App.css'
import MyNavBar from './components/MyNavBar/MyNavBar'
import MyFooter from './components/Footer/MyFooter'
import Content from './components/Content/Content'
import { productService } from './services/ProductService'

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() =>{
    const fetchData = async () => {
      const result = await productService.listProducts();
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <MyNavBar/>
      <div className="bg-[#1C1C1C]">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="mb-10 text-white text-lg">PRODUTOS</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map(product => (
              <Content name={product.name} description={product.description}/>
            ))}
          </div>
        </div>
      </div>
      <MyFooter/>
    </>
  )
}

export default App