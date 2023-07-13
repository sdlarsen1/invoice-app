import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InvoicingService } from 'src/invoicing/invoicing.service';
import { InvoicingLibrary } from 'src/invoicing/invoicing.library';
import { CreateInvoiceDto } from 'src/invoicing/invoice/dto/invoice.dto';
import { CreateInvoiceLineDto } from 'src/invoicing/invoice-line/dto/invoice-line.dto';

@Controller('invoicing')
export class InvoicingController {
  constructor(
    private readonly invoicingService: InvoicingService,
    private readonly invoicingLibrary: InvoicingLibrary,
  ) {}

  @Get('invoice')
  getInvoices() {
    return this.invoicingLibrary.getInvoices();
  }

  @Get('invoice/:id')
  getInvoice(@Param('id') id: string) {
    return this.invoicingLibrary.getInvoice(id);
  }

  @Post()
  createInvoice(@Body() invoice: CreateInvoiceDto) {
    return this.invoicingLibrary.createInvoice(invoice);
  }

  @Get('invoiceLine')
  getInvoiceLines() {
    return this.invoicingLibrary.getInvoiceLines();
  }

  @Get('invoiceLine/:id')
  getInvoiceLine(@Param('id') id: string) {
    return this.invoicingLibrary.getInvoiceLine(id);
  }

  @Post('invoiceLine')
  createInvoiceLine(@Body() invoiceLine: CreateInvoiceLineDto) {
    return this.invoicingLibrary.createInvoiceLine(invoiceLine);
  }
}
