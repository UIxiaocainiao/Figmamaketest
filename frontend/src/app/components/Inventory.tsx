import { useState, useEffect } from "react";
import { Search, Plus, Edit, Trash2, X } from "lucide-react";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast, Toaster } from "sonner";
import { bugattiToastStyle, bugattiToastError } from "@/lib/toast-config";

export function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    sku: "",
    category: "",
    quantity: "",
    price: "",
    supplier: "",
    location: "",
  });

  // Keyboard shortcut: Ctrl/Cmd + K to open add product dialog
  useKeyboardShortcut("k", () => setIsAddDialogOpen(true), { ctrl: true });

  const products = [
    {
      id: 1,
      sku: "SKU-001",
      name: "Laptop Computer",
      category: "ELECTRONICS",
      quantity: 45,
      unit: "PCS",
      price: "5,999.00",
      supplier: "Supplier A",
      location: "WAREHOUSE A-01",
    },
    {
      id: 2,
      sku: "SKU-002",
      name: "Wireless Mouse",
      category: "ACCESSORIES",
      quantity: 156,
      unit: "PCS",
      price: "89.00",
      supplier: "Supplier B",
      location: "WAREHOUSE A-02",
    },
    {
      id: 3,
      sku: "SKU-003",
      name: "Mechanical Keyboard",
      category: "ACCESSORIES",
      quantity: 78,
      unit: "PCS",
      price: "399.00",
      supplier: "Supplier A",
      location: "WAREHOUSE A-03",
    },
    {
      id: 4,
      sku: "SKU-004",
      name: "27-inch Monitor",
      category: "ELECTRONICS",
      quantity: 32,
      unit: "PCS",
      price: "1,899.00",
      supplier: "Supplier C",
      location: "WAREHOUSE B-01",
    },
    {
      id: 5,
      sku: "SKU-005",
      name: "USB-C Cable",
      category: "ACCESSORIES",
      quantity: 245,
      unit: "PCS",
      price: "29.00",
      supplier: "Supplier B",
      location: "WAREHOUSE A-04",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Product added successfully", {
      description: `${newProduct.name} has been added to inventory`,
      ...bugattiToastStyle,
    });
    setIsAddDialogOpen(false);
    setNewProduct({
      name: "",
      sku: "",
      category: "",
      quantity: "",
      price: "",
      supplier: "",
      location: "",
    });
  };

  const handleDeleteProduct = (productName: string) => {
    toast.error("Product deleted", {
      description: `${productName} has been removed from inventory`,
      ...bugattiToastError,
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-6xl font-heading tracking-tight uppercase text-black leading-none" style={{ fontWeight: 400 }}>
          INVENTORY
        </h1>
        <Button
          onClick={() => setIsAddDialogOpen(true)}
          className="figma-pill"
        >
          <Plus className="size-4 mr-2" />
          ADD PRODUCT
        </Button>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <Search className="size-4 text-black/40 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search product name or SKU..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-black/10 rounded-lg text-black font-sans text-sm placeholder:text-black/40 transition-colors"
            style={{ fontWeight: 330, letterSpacing: '-0.14px', outline: 'none' }}
            onFocus={(e) => e.target.style.borderColor = '#000000'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="border border-black/10 rounded-lg overflow-hidden bg-white figma-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-black/10 bg-black/2">
              <tr>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-black">SKU</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-black">PRODUCT</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-black">CATEGORY</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-black">STOCK</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-black">PRICE</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-black">SUPPLIER</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-black">LOCATION</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-black">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-black/10 table-row-hover">
                  <td className="px-4 py-4 text-sm font-mono text-black" style={{ fontWeight: 400 }}>{product.sku}</td>
                  <td className="px-4 py-4 text-sm text-black" style={{ fontWeight: 480, letterSpacing: '-0.14px' }}>{product.name}</td>
                  <td className="px-4 py-4 figma-mono-label text-xs text-black/60">{product.category}</td>
                  <td className="px-4 py-4 text-sm font-sans" style={{ fontWeight: 330, letterSpacing: '-0.1px' }}>
                    <span className={product.quantity < 50 ? "text-black" : "text-black"} style={{ fontWeight: product.quantity < 50 ? 540 : 330 }}>
                      {product.quantity} {product.unit}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm font-sans text-black" style={{ fontWeight: 480, letterSpacing: '-0.14px' }}>¥{product.price}</td>
                  <td className="px-4 py-4 text-xs text-black/60" style={{ fontWeight: 330, letterSpacing: '-0.1px' }}>{product.supplier}</td>
                  <td className="px-4 py-4 figma-mono-label text-xs text-black/60">{product.location}</td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-black hover:bg-black/5 rounded-full transition-colors figma-glass-dark">
                        <Edit className="size-4" />
                      </button>
                      <button
                        className="p-2 text-black hover:bg-black/5 rounded-full transition-colors figma-glass-dark"
                        onClick={() => handleDeleteProduct(product.name)}
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="bg-white border border-black/20 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading tracking-tight uppercase text-black" style={{ fontWeight: 540 }}>
              ADD PRODUCT
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleAddProduct} className="flex flex-col gap-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label className="figma-mono-label text-xs text-black">
                  PRODUCT NAME <span className="text-black/40">*</span>
                </Label>
                <Input
                  placeholder="Enter product name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  required
                  className="bg-white border-black/10 text-black font-sans focus:border-black"
                  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="figma-mono-label text-xs text-black">
                  SKU <span className="text-black/40">*</span>
                </Label>
                <Input
                  placeholder="Enter SKU"
                  value={newProduct.sku}
                  onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })}
                  required
                  className="bg-white border-black/10 text-black font-sans focus:border-black"
                  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="figma-mono-label text-xs text-black">
                  CATEGORY <span className="text-black/40">*</span>
                </Label>
                <Input
                  placeholder="Enter category"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  required
                  className="bg-white border-black/10 text-black font-sans focus:border-black"
                  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="figma-mono-label text-xs text-black">
                  QUANTITY <span className="text-black/40">*</span>
                </Label>
                <Input
                  type="number"
                  placeholder="Enter quantity"
                  value={newProduct.quantity}
                  onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                  required
                  className="bg-white border-black/10 text-black font-sans focus:border-black"
                  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="figma-mono-label text-xs text-black">
                  PRICE <span className="text-black/40">*</span>
                </Label>
                <Input
                  type="number"
                  placeholder="Enter price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  required
                  className="bg-white border-black/10 text-black font-sans focus:border-black"
                  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="figma-mono-label text-xs text-black">
                  SUPPLIER <span className="text-black/40">*</span>
                </Label>
                <Input
                  placeholder="Enter supplier"
                  value={newProduct.supplier}
                  onChange={(e) => setNewProduct({ ...newProduct, supplier: e.target.value })}
                  required
                  className="bg-white border-black/10 text-black font-sans focus:border-black"
                  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-xs font-mono tracking-[1.4px] uppercase text-white">
                WAREHOUSE LOCATION <span className="text-black/40">*</span>
              </Label>
              <Input
                placeholder="Enter warehouse location"
                value={newProduct.location}
                onChange={(e) => setNewProduct({ ...newProduct, location: e.target.value })}
                required
                className="bg-transparent border-[#999999] text-white font-mono focus:border-white"
              />
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
                className="bg-white border-black/10 text-black hover:border-black font-sans text-sm"
                style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
              >
                CANCEL
              </Button>
              <Button
                type="submit"
                className="figma-pill"
              >
                SAVE PRODUCT
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Toaster position="top-right" />
    </div>
  );
}
