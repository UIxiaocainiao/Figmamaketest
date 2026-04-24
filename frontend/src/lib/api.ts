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

export interface InventoryRecord {
  id: number;
  sku: string;
  name: string;
  category: string;
  quantity: number;
  minimum: number;
  unit: string;
  price: number;
  supplier: string;
  location: string;
}

export interface SupplierRecord {
  id: number;
  name: string;
  contact: string;
  phone: string;
  email: string;
  address: string;
  products: number;
  totalPurchase: number;
}

export interface CustomerRecord {
  id: number;
  name: string;
  contact: string;
  phone: string;
  email: string;
  address: string;
  orders: number;
  totalSales: number;
  level: "VIP" | "STANDARD";
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

export async function fetchInventoryData(signal?: AbortSignal): Promise<InventoryRecord[]> {
  return fetchJson<InventoryRecord[]>("/inventory", signal);
}

export async function fetchSuppliersData(signal?: AbortSignal): Promise<SupplierRecord[]> {
  return fetchJson<SupplierRecord[]>("/suppliers", signal);
}

export async function fetchCustomersData(signal?: AbortSignal): Promise<CustomerRecord[]> {
  return fetchJson<CustomerRecord[]>("/customers", signal);
}
