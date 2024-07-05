export interface Condition {
  id: number;
  moisture: number;
  timestamp: string;
}

export const mockData: Condition[] = [
  { id: 1, moisture: 20, timestamp: "2024-07-01T10:00:00Z" },
  { id: 2, moisture: 22, timestamp: "2024-07-01T11:00:00Z" },
  { id: 3, moisture: 18, timestamp: "2024-07-01T12:00:00Z" },
  { id: 4, moisture: 24, timestamp: "2024-07-01T13:00:00Z" },
  { id: 5, moisture: 21, timestamp: "2024-07-01T14:00:00Z" },
  { id: 6, moisture: 19, timestamp: "2024-07-01T15:00:00Z" },
  { id: 7, moisture: 23, timestamp: "2024-07-01T16:00:00Z" },
  { id: 8, moisture: 20, timestamp: "2024-07-01T17:00:00Z" },
  { id: 9, moisture: 22, timestamp: "2024-07-01T18:00:00Z" },
  { id: 10, moisture: 25, timestamp: "2024-07-01T19:00:00Z" },
  // 追加のデータ...
];
