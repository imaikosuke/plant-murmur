"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { Photo } from "@/lib/mockPhotos";

export default function AlbumPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  async function fetchPhotos() {
    setError(null);
    try {
      const response = await fetch("/api/photos");
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result: Photo[] = await response.json();
      setPhotos(result);
    } catch (error) {
      setError((error as Error).message);
      setPhotos([]);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">植物の記録</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.photo_id} className="bg-white rounded-lg shadow-lg p-4">
              <Image
                src={photo.photo_url}
                alt={`Photo ${photo.photo_id}`}
                className="rounded-lg w-full object-cover mb-4"
                width={150}
                height={150}
              />
              <p className="text-gray-600">{dayjs(photo.timestamp).format("YYYY-MM-DD HH:mm")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
