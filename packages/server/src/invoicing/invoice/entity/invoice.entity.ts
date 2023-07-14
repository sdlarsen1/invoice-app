import { InvoiceStatus } from 'src/invoicing/invoice/enum/invoice-status.enum';

export class Customer {
  name: string;
  email: string;
  address: string;
}

export class Invoice {
  id: string;
  description: string;
  createdAt: Date;
  dueAt: Date;
  status: InvoiceStatus;
  billTo: Customer;
  billFrom: Customer;
  total: number;
}
