import { useState, useEffect } from "react";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast, Toaster } from "sonner";
import { bugattiToastError } from "@/lib/toast-config";
import { fetchInventoryData, type InventoryRecord } from "@/lib/api";

export function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [products, setProducts] = useState<InventoryRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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

  useEffect(() => {
    const controller = new AbortController();

    fetchInventoryData(controller.signal)
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((fetchError) => {
        if (controller.signal.aborted) {
          return;
        }

        setProducts([]);
        setIsLoading(false);
        setError(fetchError instanceof Error ? fetchError.message : "Failed to load inventory");
      });

    return () => controller.abort();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
      maximumFractionDigits: 2,
    }).format(value);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    toast.error("Read-only inventory demo", {
      description: `${newProduct.name} was not saved because create endpoints are not implemented yet`,
      ...bugattiToastError,
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
    toast.error("Delete endpoint not implemented", {
      description: `${productName} was not removed because this page is currently read-only`,
      ...bugattiToastError,
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-6xl font-heading tracking-tight uppercase text-white leading-none" style={{ fontWeight: 400 }}>
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
          <Search className="size-4 text-white/50 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search product name or SKU..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-sans text-sm placeholder:text-white/50 backdrop-blur-[16px] transition-colors"
            style={{ fontWeight: 330, letterSpacing: '-0.14px', outline: 'none' }}
            onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.65)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="figma-card overflow-hidden border border-white/20 rounded-lg bg-white/5">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/20 bg-white/5">
              <tr>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-white">SKU</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-white">PRODUCT</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-white">CATEGORY</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-white">STOCK</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-white">PRICE</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-white">SUPPLIER</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-white">LOCATION</th>
                <th className="px-4 py-3 text-left figma-mono-label text-xs text-white">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className="border-b border-white/20">
                    <td colSpan={8} className="px-4 py-4">
                      <div className="h-8 rounded bg-white/10 animate-pulse" />
                    </td>
                  </tr>
                ))
              ) : error ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-sm text-[#c4c7c8]">
                    {error}
                  </td>
                </tr>
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-sm text-[#c4c7c8]">
                    No inventory items match the current search.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-white/20 table-row-hover">
                    <td className="px-4 py-4 text-sm font-mono text-white" style={{ fontWeight: 400 }}>{product.sku}</td>
                    <td className="px-4 py-4 text-sm text-white" style={{ fontWeight: 480, letterSpacing: '-0.14px' }}>{product.name}</td>
                    <td className="px-4 py-4 figma-mono-label text-xs text-[#c4c7c8]">{product.category}</td>
                    <td className="px-4 py-4 text-sm font-sans" style={{ fontWeight: 330, letterSpacing: '-0.1px' }}>
                      <span className="text-white" style={{ fontWeight: product.quantity <= product.minimum ? 540 : 330 }}>
                        {product.quantity} {product.unit}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm font-sans text-white" style={{ fontWeight: 480, letterSpacing: '-0.14px' }}>
                      {formatCurrency(product.price)}
                    </td>
                    <td className="px-4 py-4 text-xs text-[#c4c7c8]" style={{ fontWeight: 330, letterSpacing: '-0.1px' }}>{product.supplier}</td>
                    <td className="px-4 py-4 figma-mono-label text-xs text-[#c4c7c8]">{product.location}</td>
                    <td className="px-4 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 text-white hover:bg-white/10 rounded-full transition-colors figma-glass-dark">
                          <Edit className="size-4" />
                        </button>
                        <button
                          className="p-2 text-white hover:bg-white/10 rounded-full transition-colors figma-glass-dark"
                          onClick={() => handleDeleteProduct(product.name)}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="bg-white/[0.18] border border-white/25 max-w-2xl backdrop-blur-[30px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading tracking-tight uppercase text-white" style={{ fontWeight: 540 }}>
              ADD PRODUCT
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleAddProduct} className="flex flex-col gap-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label className="figma-mono-label text-xs text-white">
                  PRODUCT NAME <span className="text-white/50">*</span>
                </Label>
                <Input
                  placeholder="Enter product name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  required
                  className="bg-white/10 border-white/25 text-white font-sans placeholder:text-white/45 focus:border-white/60"
                  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="figma-mono-label text-xs text-white">
                  SKU <span className="text-white/50">*</span>
                </Label>
                <Input
                  placeholder="Enter SKU"
                  value={newProduct.sku}
                  onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })}
                  required
                  className="bg-white/10 border-white/25 text-white font-sans placeholder:text-white/45 focus:border-white/60"
                  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="figma-mono-label text-xs text-white">
                  CATEGORY <span className="text-white/50">*</span>
                </Label>
                <Input
                  placeholder="Enter category"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  required
                  className="bg-white/10 border-white/25 text-white font-sans placeholder:text-white/45 focus:border-white/60"
                  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="figma-mono-label text-xs text-white">
                  QUANTITY <span className="text-white/50">*</span>
                </Label>
                <Input
                  type="number"
                  placeholder="Enter quantity"
                  value={newProduct.quantity}
                  onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                  required
                  className="bg-white/10 border-white/25 text-white font-sans placeholder:text-white/45 focus:border-white/60"
                  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="figma-mono-label text-xs text-white">
                  PRICE <span className="text-white/50">*</span>
                </Label>
                <Input
                  type="number"
                  placeholder="Enter price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  required
                  className="bg-white/10 border-white/25 text-white font-sans placeholder:text-white/45 focus:border-white/60"
                  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="figma-mono-label text-xs text-white">
                  SUPPLIER <span className="text-white/50">*</span>
                </Label>
                <Input
                  placeholder="Enter supplier"
                  value={newProduct.supplier}
                  onChange={(e) => setNewProduct({ ...newProduct, supplier: e.target.value })}
                  required
                  className="bg-white/10 border-white/25 text-white font-sans placeholder:text-white/45 focus:border-white/60"
                  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="figma-mono-label text-xs text-white">
                WAREHOUSE LOCATION <span className="text-white/50">*</span>
              </Label>
              <Input
                placeholder="Enter warehouse location"
                value={newProduct.location}
                onChange={(e) => setNewProduct({ ...newProduct, location: e.target.value })}
                required
                className="bg-white/10 border-white/25 text-white font-sans placeholder:text-white/45 focus:border-white/60"
                style={{ fontWeight: 330, letterSpacing: "-0.14px" }}
              />
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
                className="bg-white/10 border-white/25 text-white hover:border-white/60 font-sans text-sm"
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
