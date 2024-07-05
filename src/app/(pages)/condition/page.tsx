"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import dayjs from "dayjs";
import { Condition } from "@/lib/mockData";

export default function ConditionPage() {
  const [data, setData] = useState<Condition[]>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    if (startDate && endDate) {
      fetchData(startDate, endDate);
    }
  }, [startDate, endDate]);

  async function fetchData(start: string, end: string) {
    const response = await fetch(`/api/conditions?start=${start}&end=${end}`, {
      method: "GET",
    });
    const result = await response.json();
    setData(result);
  }

  const chartData = {
    labels: data.map((item) => dayjs(item.timestamp).format("YYYY-MM-DD HH:mm")),
    datasets: [
      {
        label: "土壌水分（%）",
        data: data.map((item) => item.moisture),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">土壌水分データ推移</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">開始日</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700">終了日</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </div>
          <button
            onClick={() => {
              if (startDate && endDate) fetchData(startDate, endDate);
            }}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition duration-200"
          >
            更新
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}
