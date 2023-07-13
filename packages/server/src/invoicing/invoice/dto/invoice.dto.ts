import { IsDate, IsString, ValidateNested } from 'class-validator';
import { InvoiceStatus } from '../enum/invoice-status.enum';
import { PartialType } from '@nestjs/swagger';
import { CreateInvoiceLineDto } from 'src/invoicing/invoice-line/dto/invoice-line.dto';

export class CustomerDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  address: string;
}

export class CreateInvoiceDto {
  @IsDate()
  dueAt: Date;

  @IsString()
  description: string;

  @ValidateNested()
  billTo: CustomerDto;

  @ValidateNested()
  billFrom: CustomerDto;

  @IsString()
  status: InvoiceStatus;

  @ValidateNested()
  invoiceLines: CreateInvoiceLineDto[];
}

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {}
