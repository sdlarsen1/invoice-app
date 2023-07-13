import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InvoicingService } from 'src/invoicing/invoicing.service';
import { InvoicingLibrary } from 'src/invoicing/invoicing.library';
import { CreateInvoiceDto } from 'src/invoicing/invoice/dto/invoice.dto';

@Controller('invoicing')
export class InvoicingController {
  constructor(
    private readonly invoicingService: InvoicingService,
    private readonly invoicingLibrary: InvoicingLibrary,
  ) {}

  @Get('invoice')
  getInvoices() {
    return this.invoicingService.getInvoices();
  }

  @Get('invoice/:id')
  getInvoice(@Param('id') id: string) {
    return this.invoicingService.getInvoice(id);
  }

  @Post()
  createInvoice(@Body() invoice: CreateInvoiceDto) {
    return this.invoicingLibrary.createInvoice(invoice);
  }

  @Get('invoiceLine')
  getInvoiceLines() {
    return this.invoicingService.getInvoiceLines();
  }
}