import { InvoiceStatus } from "app/domain/constants/InvoiceStatus";
import { Customer } from "app/domain/entities/Customer";
import { InvoiceLine } from "app/domain/entities/InvoiceLine";

export type Invoice = {
  id: string;
  description: string;
  createdAt: Date;
  dueAt: Date;
  status: InvoiceStatus;
  billTo: Customer;
  billFrom: Customer;
  total: number;
  notes?: string;
  invoiceLines?: InvoiceLine[];
};
