import { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    }
    getProducts();
  }, []);



  return <>
    <div className="flex justify-center my-10">
      <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <ListItem key={product.id} product={product} />
      ))}
      </div>
    </div>
  </>;
}

export default App;
