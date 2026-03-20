import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "E-Commerce Frontend",
  description: "Frontend-only e-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[white]!">
        <CartProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-160px)]">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
