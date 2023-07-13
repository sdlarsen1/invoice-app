import { Controller, Get, Param } from '@nestjs/common';
import { InvoicingService } from 'src/invoicing/invoicing.service';

@Controller('invoicing')
export class InvoicingController {
  constructor(private readonly invoicingService: InvoicingService) {}

  @Get()
  getInvoices() {
    return this.invoicingService.getInvoices();
  }

  @Get(':id')
  getInvoice(@Param('id') id: string) {
    return this.invoicingService.getInvoice(id);
  }
}
