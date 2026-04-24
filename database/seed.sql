INSERT INTO customers (name, email, phone)
VALUES
  ('Acme Retail', 'buyer@acme.test', '+1-202-555-0100'),
  ('Northwind Stores', 'ops@northwind.test', '+1-202-555-0110')
ON CONFLICT (email) DO NOTHING;

INSERT INTO suppliers (name, contact_name, email, phone)
VALUES
  ('Summit Supply Co.', 'Lena Hart', 'lena@summit.test', '+1-202-555-0120'),
  ('Blue Harbor Trading', 'Noah Park', 'noah@blueharbor.test', '+1-202-555-0130');

INSERT INTO inventory_items (sku, name, description, supplier_id, quantity, unit_price)
VALUES
  ('INV-001', 'Warehouse Scanner', 'Handheld scanner for stock intake.', 1, 24, 149.00),
  ('INV-002', 'Thermal Printer', 'Receipt and label printer.', 2, 12, 229.00)
ON CONFLICT (sku) DO NOTHING;
