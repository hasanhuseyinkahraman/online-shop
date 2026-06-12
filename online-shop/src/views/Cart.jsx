import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
export const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getCart() {
      const response = await fetch("http://localhost:3000/cart");
      const data = await response.json();
      setCart(data);
      console.log(data);
    }
    getCart();
  }, []);

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className="flex justify-center text-2xl mt-10">Sepetiniz boş.</div>
      ) : (
        <div className="flex justify-center my-10">
          <div className="grid grid-cols-4 gap-5">
            {cart.map((product) => (
              <ListItem key={product.id} product={product} onRemove={handleRemoveItem} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
