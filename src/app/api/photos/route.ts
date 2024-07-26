import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM photos ORDER BY timestamp ASC");
    client.release();
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("Error fetching data from PostgreSQL:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
