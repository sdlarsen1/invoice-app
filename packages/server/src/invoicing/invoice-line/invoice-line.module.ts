import { Module } from '@nestjs/common';
import { HttpAdapter } from 'src/util/http.adapter';
import { HttpModule } from '@nestjs/axios';
import { InvoiceLineService } from 'src/invoicing/invoice-line/invoice-line.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [InvoiceLineService, HttpAdapter],
  exports: [InvoiceLineService],
})
export class InvoiceLineModule {}
