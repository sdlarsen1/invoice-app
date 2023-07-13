import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateInvoiceLineDto {
  @IsString()
  invoiceId: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}

export class UpdateInvoiceLineDto extends PartialType(CreateInvoiceLineDto) {}
