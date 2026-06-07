import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart, removeFromCart } from "@/features/count/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      <h1>🛒 My Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>

          <button
            onClick={() =>
              dispatch(
                addToCart({
                  ...item,
                  quantity: 1,
                }),
              )
            }
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}
