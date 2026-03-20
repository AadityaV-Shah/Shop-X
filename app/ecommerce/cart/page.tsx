"use client";

import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
    const { cart, removeFromCart, clearCart } = useCart();

    if (cart.length === 0) {
        return <p className="p-10 text-center text-black">Your cart is empty!</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-10">
            <h1 className="text-3xl font-bold mb-6 text-black">Your Cart</h1>

            {cart.map((item) => (
                <div key={item.id} className="flex justify-between mb-4 border-b pb-4">
                    <div>
                        <h2 className="font-semibold text-black">{item.title}</h2>
                        <p className="text-black">Qty: {item.quantity}</p>
                    </div>

                    <div className="text-right">
                        <p className="font-bold text-black">${item.price * item.quantity}</p>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 text-sm"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}

            <div className="flex justify-between">
                <button
                    onClick={clearCart}
                    className="mt-6 bg-black text-white px-6 py-2 rounded"
                >
                    Clear Cart
                </button>

                <button
                    className="mt-6 bg-black text-white px-6 py-2 rounded"
                >
                    Checkout
                </button>
            </div>
        </div>
    );
}