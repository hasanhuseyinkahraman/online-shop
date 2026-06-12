import {useLocation} from 'react-router';
const ListItem = ({ product, onRemove }) => {
    const location = useLocation();



    async function addToCart(product) {        
        const response = await fetch("http://localhost:3000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
   
    };
    
    async function removeFromCart(product) {
        console.log("Trying to remove product with id:", product.id);
        const response = await fetch(`http://localhost:3000/cart/${product.id}`, {
          method: "DELETE"
      });
      
      if (response.ok) {
        onRemove(product.id);
      }
    };

  return (
    <div className="w-72 h-99 bg-gray-100 outline-1 outline-gray-300 rounded-2xl overflow-clip">
        <img src={product.image} alt={product.title} className="w-full rounded-b-2xl" />
        <div className="p-3">
            <p className="text-nowrap truncate">{product.title}</p>
            <div className="flex justify-between"><p className="text-sm text-gray-500">{product.category}</p><p className="">{product.price} TRY</p></div>
            
            {location.pathname === "/cart" ? (            
                <div className="flex flex-col mt-1">
                <button onClick={() => removeFromCart(product)} className="bg-red-500 text-white cursor-pointer rounded-2xl py-1">Sepetten Çıkar</button>
                </div>)
                : 

                (            
                <div className="flex justify-end mt-1">
                    <button onClick={() => addToCart(product)} className="bg-blue-500 text-white cursor-pointer rounded-2xl px-4 py-1">Sepete ekle</button>
                </div>)
                }
        </div>
    </div>
  )
}

export default ListItem