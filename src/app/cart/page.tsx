"use client";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart, removeFromCart } from "@/features/count/cartSlice";
import { IoIosAddCircle } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const products = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=500",
      price: 25,
    },
    {
      id: 2,
      name: "Snake Plant",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrs3k0stcZCm1r01diPV70u1LJh40ObwvfQ&s",
      price: 18,
    },
    {
      id: 3,
      name: "Peace Lily",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
      price: 22,
    },
    {
      id: 4,
      name: "Aloe Vera",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500",
      price: 15,
    },
    {
      id: 5,
      name: "Fiddle Leaf Fig",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
      price: 35,
    },
    {
      id: 6,
      name: "Rubber Plant",
      image:
        "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=500",
      price: 28,
    },
    {
      id: 7,
      name: "ZZ Plant",
      image:
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=500",
      price: 20,
    },
    {
      id: 8,
      name: "Pothos Golden",
      image:
        "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=500",
      price: 17,
    },
    {
      id: 9,
      name: "Boston Fern",
      image:
        "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=500",
      price: 24,
    },
    {
      id: 10,
      name: "Chinese Money Plant",
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500",
      price: 19,
    },
  ];

  return (
    <div className="max-w-7xl py-20 container mx-auto">
      <div className="flex gap-6  items-center mb-6">
        <Link href="/carts" className="relative z-100">
          <div className="text-xl flex justify-center items-center gap-4 font-bold">
            My Cart : <FaShoppingCart className="inline text-2xl" />
          </div>
          <div className=" absolute -top-0 -right-2  text-white ">
            {totalItems > 0 && (
              <span className="bg-red-500 w-5 h-5  rounded-full flex items-center justify-center  text-white">
                {totalItems}
              </span>
            )}
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-y-4 container mx-auto max-w-7xl">
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
                className="bg-blue-600 cursor-pointer active:bg-blue-400 text-white px-3 w-6 h-6 grid place-content-center rounded-full"
                onClick={() =>
                  dispatch(
                    addToCart({
                      ...product,
                      quantity: 1,
                    }),
                  )
                }
              >
                <IoIosAddCircle />
              </button>
              {cart.find((item) => item.id === product.id) && (
                <button
                  className="bg-red-500 active:bg-red-400 cursor-pointer text-white w-6 h-6 grid place-content-center rounded-full"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  <FaMinus />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
