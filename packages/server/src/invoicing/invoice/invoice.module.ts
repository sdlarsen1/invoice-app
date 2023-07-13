import { Module } from '@nestjs/common';
import { InvoiceService } from 'src/invoicing/invoice/invoice.service';
import { HttpAdapter } from 'src/util/http.adapter';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [InvoiceService, HttpAdapter],
  exports: [InvoiceService],
})
export class InvoiceModule {}
