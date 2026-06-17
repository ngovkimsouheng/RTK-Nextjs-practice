"use client";
import { FaMinus } from "react-icons/fa";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart, removeFromCart } from "@/features/count/cartSlice";
import { IoIosAddCircle } from "react-icons/io";
import Link from "next/link";
import { IoArrowBackCircle } from "react-icons/io5";

export default function Carts() {
  const dispatch = useDispatch();

  // get cart from redux
  const cart = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="max-w-7xl  mx-auto container py-20">
      <div className="flex py-6 justify-between items-center">
        <Link href="/cart">
          <IoArrowBackCircle className="text-3xl" />
        </Link>

        {cart.length > 0 && (
          <h2 className=" text-xl font-bold">
            Total: $
            {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
          </h2>
        )}
      </div>
      {cart.length === 0 ? (
        <p className="h-screen container mx-auto max-w-7xl text-center  ">
          Cart is empty
        </p>
      ) : (
        <div className="grid gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded flex items-center gap-4"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />

              {/* INFO */}
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                className="bg-blue-600 cursor-pointer text-white px-3 py-1 rounded"
                onClick={() =>
                  dispatch(
                    addToCart({
                      ...item,
                      quantity: 1,
                    }),
                  )
                }
              >
                <IoIosAddCircle />
              </button>

              {/* REMOVE BUTTON */}
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <FaMinus />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
