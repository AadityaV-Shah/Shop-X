import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 border-b-4">
            <div className="py-6 px-8 grid md:grid-cols-2 gap-12 items-center bg-amber-100 rounded-xl">
              
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-black">
                        Discover Quality Products
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Browse our curated collection of modern and affordable products.
                    </p>
                    <Link
                        href="/ecommerce/products"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                    >
                        Shop Now
                    </Link>
                </div>          
            
                <div className="h-70 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                    <span className="text-gray-500">
                        <img
                            src="https://logistics.ru/sites/default/files/2022-12/3fb7a0aa67.jpg"
                            alt="Hero"
                            className="object-cover w-full h-full"
                        />
                    </span>
                </div>
            </div>
        </section>
    );
}
