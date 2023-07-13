import { IsDate, IsString, ValidateNested } from 'class-validator';

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
}

export class Customer {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  address: string;
}
