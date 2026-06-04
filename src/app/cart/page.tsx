"use client";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart, removeFromCart } from "@/features/count/cartSlice";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const products = [
    {
      id: 1,
      name: "Test Product 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1CuF5ByhjpYZMllwvBG75hNLw58TW7Dp6Q&s",
      price: 10,
    },
    {
      id: 2,
      name: "Test Product 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwaeSvY8cHXucks7SMVly0j9qxwFyC8n4vg&s",
      price: 20,
    },
    {
      id: 3,
      name: "Test Product 3",
      image:
        "https://res.cloudinary.com/petrescue/image/upload/c_crop,g_custom/v1765947389/h5q0rhudvnobv8y4az6d.jpg",
      price: 30,
    },
  ];

  return (
    <div className="p-6">
      <div className="flex gap-6  items-center mb-6">
        <div className="relative">
          <h1 className="text-xl flex justify-center items-center gap-4 font-bold">
            My Cart :{" "}
            <Link href="/carts">
              <FaShoppingCart className="inline text-2xl" />
            </Link>
          </h1>
          <div className=" absolute -top-0 -right-2  text-white ">
            {totalItems > 0 && (
              <span className="bg-red-500 w-4 h-4  rounded-full flex items-center justify-center  text-white">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg w-60 flex flex-col gap-2"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />

            <h3 className="font-bold">{product.name}</h3>
            <p>Price: ${product.price}</p>

            <div className="flex gap-2">
              <button
                className="bg-blue-600 cursor-pointer text-white px-3 py-1 rounded"
                onClick={() =>
                  dispatch(
                    addToCart({
                      ...product,
                      quantity: 1,
                    }),
                  )
                }
              >
                Add
              </button>

              <button
                className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded"
                onClick={() => dispatch(removeFromCart(product.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
