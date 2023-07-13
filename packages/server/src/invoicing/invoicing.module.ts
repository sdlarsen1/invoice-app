import { Module } from '@nestjs/common';
import { InvoicingController } from 'src/invoicing/invoicing.controller';
import { InvoicingService } from 'src/invoicing/invoicing.service';
import { HttpModule } from '@nestjs/axios';
import { HttpAdapter } from 'src/util/http.adapter';
import { InvoiceModule } from 'src/invoicing/invoice/invoice.module';
import { InvoicingLibrary } from 'src/invoicing/invoicing.library';
import { InvoiceLineModule } from 'src/invoicing/invoice-line/invoice-line.module';

@Module({
  imports: [HttpModule, InvoiceModule, InvoiceLineModule],
  controllers: [InvoicingController],
  providers: [InvoicingService, HttpAdapter, InvoicingLibrary],
})
export class InvoicingModule {}
