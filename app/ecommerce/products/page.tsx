"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
};

export default function AllProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState(""); // search state
    const { addToCart } = useCart();
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=0")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch products:", err);
                setLoading(false);
            });
    }, []);

    // Filter products based on search text
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    if (loading)
        return <p className="text-center p-6 text-gray-500">Loading products...</p>;

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-black">
                    All Products
                </h2>

                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search products..."
                        className="px-4 py-2 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                                   focus:border-transparent w-64 placeholder-gray-400 text-black"
                    />
                </div>
            </div>

            {/* Render filtered products */}
            {showToast && (
                <div className="fixed top-6 right-6 bg-black text-white px-5 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
                    Item added to cart 🛒
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_-10px_15px_-3px_rgba(0,0,0,0.1)] 
                                   hover:scale-105 transition-transform duration-300 p-4 flex flex-col items-center"
                    >
                        <div className="w-full h-60 relative mb-4">
                            <Image
                                src={product.thumbnail}
                                alt={product.title}
                                fill
                                className="object-fit rounded-lg"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                        </div>
                        <h3 className="text-black font-semibold text-lg text-center mb-2">
                            {product.title}
                        </h3>
                        <p className="text-gray-700 font-bold">${product.price}</p>
                        <button
                            onClick={() => {
                                addToCart({
                                    id: product.id,
                                    title: product.title,
                                    price: product.price,
                                    thumbnail: product.thumbnail,
                                });

                                setShowToast(true);
                                setTimeout(() => setShowToast(false), 2000); // hide after 2s
                            }}
                            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section >
    );
}