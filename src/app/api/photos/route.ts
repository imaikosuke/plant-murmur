import { NextRequest, NextResponse } from "next/server";
import { mockPhotos, Photo } from "@/lib/mockPhotos";

export async function GET(req: NextRequest) {
  return NextResponse.json(mockPhotos, { status: 200 });
}
