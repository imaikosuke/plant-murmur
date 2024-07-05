import { NextRequest, NextResponse } from "next/server";
import { mockData } from "@/lib/mockData";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  if (!start || !end) {
    return NextResponse.json({ error: "Start and end dates are required" }, { status: 400 });
  }

  const startDate = new Date(start);
  const endDate = new Date(end);

  const filteredData = mockData.filter((item) => {
    const timestamp = new Date(item.timestamp);
    return timestamp >= startDate && timestamp <= endDate;
  });

  return NextResponse.json(filteredData, { status: 200 });
}
