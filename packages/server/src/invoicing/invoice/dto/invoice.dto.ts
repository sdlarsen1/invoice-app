import { IsDate, IsString, ValidateNested } from 'class-validator';
import { InvoiceStatus } from '../enum/invoice-status.enum';

export class Customer {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  address: string;
}

export class CreateInvoiceDto {
  @IsDate()
  createdAt: Date;

  @IsDate()
  dueAt: Date;

  @IsString()
  description: string;

  @ValidateNested()
  billTo: Customer;

  @ValidateNested()
  billFrom: Customer;

  @IsString()
  status: InvoiceStatus;
}
