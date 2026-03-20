import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex-col items-center text-center justify-center">
        <h1 className="text-4xl font-bold text-black">Welcome!</h1>
        <br />
        <h1 className="text-3xl text-black">Please click the button below to continue.</h1>
        <br />
        <Link href="/ecommerce">
        <button className="p-3 bg-blue-600 rounded-2xl hover:scale-110 transition">Homepage</button>
        </Link>
      </div>
    </main>
  );
}
