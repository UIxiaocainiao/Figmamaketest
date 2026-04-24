export interface BackendHealth {
  status: "ok";
  databaseConfigured: boolean;
  timestamp: string;
}

export interface DashboardStat {
  title: string;
  value: number;
  change: string;
  type: "inventory" | "purchase" | "sales" | "alerts";
}

export interface RecentOrder {
  id: string;
  type: "PURCHASE" | "SALES";
  counterparty: string;
  amount: number;
  status: "COMPLETED" | "PENDING" | "PROCESSING";
  timestamp: string;
}

export interface StockAlert {
  name: string;
  sku: string;
  current: number;
  minimum: number;
  unit: string;
}

export interface DashboardPayload {
  stats: DashboardStat[];
  recentOrders: RecentOrder[];
  lowStock: StockAlert[];
}

function getApiBaseUrl() {
  return import.meta.env.VITE_API_BASE_URL?.trim() || "/api";
}

async function fetchJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function fetchBackendHealth(signal?: AbortSignal): Promise<BackendHealth> {
  return fetchJson<BackendHealth>("/health", signal);
}

export async function fetchDashboardData(signal?: AbortSignal): Promise<DashboardPayload> {
  return fetchJson<DashboardPayload>("/dashboard", signal);
}
