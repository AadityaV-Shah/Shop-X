"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
};

export default function FeaturedProductsCarousel() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=10")
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

    if (loading) return <p className="text-center p-6">Loading products...</p>;

    return (
        <section className="max-w-7xl mx-auto px-6 py-16 border-b-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Featured Products</h2>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="bg-white rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 p-4 mt-10 mb-10 flex flex-col items-center">
                            <Image
                                src={product.thumbnail}
                                alt={product.title}
                                width={250}
                                height={250}
                                className="object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-black font-semibold text-lg text-center">{product.title}</h3>
                            <p className="text-blue-600 font-bold mt-2 pb-5">${product.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
