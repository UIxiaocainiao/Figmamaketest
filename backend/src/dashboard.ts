interface Supplier {
  id: number;
  name: string;
}

interface Customer {
  id: number;
  name: string;
}

interface InventoryItem {
  sku: string;
  name: string;
  quantity: number;
  minimum: number;
  unit: string;
  unitPrice: number;
}

interface PurchaseOrder {
  id: string;
  supplierId: number;
  amount: number;
  status: "COMPLETED" | "PENDING" | "PROCESSING";
  orderedAt: string;
}

interface SalesOrder {
  id: string;
  customerId: number;
  amount: number;
  status: "COMPLETED" | "PENDING" | "PROCESSING";
  soldAt: string;
}

const suppliers: Supplier[] = [
  { id: 1, name: "Summit Supply Co." },
  { id: 2, name: "Blue Harbor Trading" },
  { id: 3, name: "Vertex Industrial" },
];

const customers: Customer[] = [
  { id: 1, name: "Acme Retail" },
  { id: 2, name: "Northwind Stores" },
  { id: 3, name: "Harbor Front Market" },
];

const inventoryItems: InventoryItem[] = [
  { sku: "INV-001", name: "Warehouse Scanner", quantity: 24, minimum: 20, unit: "PCS", unitPrice: 149 },
  { sku: "INV-002", name: "Thermal Printer", quantity: 12, minimum: 18, unit: "PCS", unitPrice: 229 },
  { sku: "INV-003", name: "Packing Tape", quantity: 44, minimum: 60, unit: "BOX", unitPrice: 12 },
  { sku: "INV-004", name: "Barcode Labels", quantity: 18, minimum: 30, unit: "ROLL", unitPrice: 19 },
  { sku: "INV-005", name: "Storage Bin", quantity: 96, minimum: 40, unit: "PCS", unitPrice: 34 },
];

const purchaseOrders: PurchaseOrder[] = [
  { id: "PO-001", supplierId: 1, amount: 12500, status: "COMPLETED", orderedAt: "2026-04-20T09:30:00.000Z" },
  { id: "PO-002", supplierId: 2, amount: 25000, status: "PENDING", orderedAt: "2026-04-22T12:00:00.000Z" },
  { id: "PO-003", supplierId: 3, amount: 18400, status: "PROCESSING", orderedAt: "2026-04-23T15:45:00.000Z" },
];

const salesOrders: SalesOrder[] = [
  { id: "SO-102", customerId: 2, amount: 8900, status: "PROCESSING", soldAt: "2026-04-21T08:20:00.000Z" },
  { id: "SO-103", customerId: 3, amount: 15600, status: "COMPLETED", soldAt: "2026-04-22T10:10:00.000Z" },
  { id: "SO-104", customerId: 1, amount: 12450, status: "COMPLETED", soldAt: "2026-04-24T06:50:00.000Z" },
];

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
