import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-600 p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          植物のつぶやき
        </Link>
        <nav className="flex space-x-4">
          <Link href="/condition" className="text-white hover:text-gray-300">
            土壌水分データ
          </Link>
          <Link href="/album" className="text-white hover:text-gray-300">
            アルバム
          </Link>
        </nav>
      </div>
    </header>
  );
}
