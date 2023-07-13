import { Module } from '@nestjs/common';
import { InvoicingController } from 'src/invoicing/invoicing.controller';
import { InvoicingService } from 'src/invoicing/invoicing.service';
import { HttpModule } from '@nestjs/axios';
import { HttpAdapter } from 'src/util/http.adapter';

@Module({
  imports: [HttpModule],
  controllers: [InvoicingController],
  providers: [InvoicingService, HttpAdapter],
})
export class InvoicingModule {}
