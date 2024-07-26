import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">植物のつぶやき</h1>
        <p className="text-lg mb-8">植物の観察や記録を自動化するプロダクト</p>
        <div className="flex justify-center space-x-4">
          <Link href="/condition">
            <p className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
              土壌水分の記録を見にいく
            </p>
          </Link>
          <Link href="/album">
            <p className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              写真の記録を見にいく
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
