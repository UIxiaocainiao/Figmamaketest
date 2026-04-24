import { customers, inventoryItems, purchaseOrders, salesOrders, suppliers } from "./data.js";

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

function sum(values: number[]) {
  return values.reduce((total, value) => total + value, 0);
}

export function getDashboardPayload(): DashboardPayload {
  const totalInventoryValue = sum(
    inventoryItems.map((item) => item.quantity * item.unitPrice),
  );

  const monthlyPurchaseValue = sum(purchaseOrders.map((order) => order.amount));
  const monthlySalesValue = sum(salesOrders.map((order) => order.amount));
  const lowStock = inventoryItems
    .filter((item) => item.quantity <= item.minimum)
    .map((item) => ({
      name: item.name,
      sku: item.sku,
      current: item.quantity,
      minimum: item.minimum,
      unit: item.unit,
    }))
    .sort((left, right) => left.current - right.current);

  const recentOrders = [
    ...purchaseOrders.map<RecentOrder>((order) => ({
      id: order.id,
      type: "PURCHASE",
      counterparty: suppliers.find((supplier) => supplier.id === order.supplierId)?.name ?? "Unknown Supplier",
      amount: order.amount,
      status: order.status,
      timestamp: order.orderedAt,
    })),
    ...salesOrders.map<RecentOrder>((order) => ({
      id: order.id,
      type: "SALES",
      counterparty: customers.find((customer) => customer.id === order.customerId)?.name ?? "Unknown Customer",
      amount: order.amount,
      status: order.status,
      timestamp: order.soldAt,
    })),
  ]
    .sort((left, right) => new Date(right.timestamp).getTime() - new Date(left.timestamp).getTime())
    .slice(0, 6);

  return {
    stats: [
      { title: "TOTAL INVENTORY", value: totalInventoryValue, change: "+6.4%", type: "inventory" },
      { title: "MONTHLY PURCHASE", value: monthlyPurchaseValue, change: "+4.9%", type: "purchase" },
      { title: "MONTHLY SALES", value: monthlySalesValue, change: "+9.7%", type: "sales" },
      { title: "STOCK ALERTS", value: lowStock.length, change: "RESTOCK", type: "alerts" },
    ],
    recentOrders,
    lowStock,
  };
}
