"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#d113bb] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/ecommerce">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black tracking-tight">Shop/<span className="text-white">X</span></span>
          </div>
        </Link>

        <div className="flex gap-6">
          <Link href="/ecommerce/products" className="hover:text-black">
            Products
          </Link>
          <Link href="/ecommerce/cart" className="hover:text-black">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
