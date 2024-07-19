import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  if (!start || !end) {
    return NextResponse.json({ error: "Start and end dates are required" }, { status: 400 });
  }

  const startDate = new Date(start).toISOString();
  const endDate = new Date(end).toISOString();

  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM conditions WHERE timestamp BETWEEN $1 AND $2 ORDER BY timestamp ASC",
      [startDate, endDate]
    );
    client.release();
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("Error fetching data from PostgreSQL:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
