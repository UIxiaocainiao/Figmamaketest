import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Inventory } from "./components/Inventory";
import { Purchase } from "./components/Purchase";
import { Sales } from "./components/Sales";
import { Suppliers } from "./components/Suppliers";
import { Customers } from "./components/Customers";
import { Reports } from "./components/Reports";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "inventory", Component: Inventory },
      { path: "purchase", Component: Purchase },
      { path: "sales", Component: Sales },
      { path: "suppliers", Component: Suppliers },
      { path: "customers", Component: Customers },
      { path: "reports", Component: Reports },
      { path: "*", Component: NotFound },
    ],
  },
]);
