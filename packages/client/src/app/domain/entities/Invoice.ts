import { InvoiceStatus } from "app/domain/constants/InvoiceStatus";
import { Customer } from "app/domain/entities/Customer";

export type Invoice = {
  id: string;
  description: string;
  createdAt: Date;
  dueAt: Date;
  status: InvoiceStatus;
  billTo: Customer;
  billFrom: Customer;
};
