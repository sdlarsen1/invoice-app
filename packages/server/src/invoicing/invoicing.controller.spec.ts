import { InvoicingController } from 'src/invoicing/invoicing.controller';
import { InvoicingLibrary } from 'src/invoicing/invoicing.library';
import { InvoicingService } from 'src/invoicing/invoicing.service';
import { Test } from '@nestjs/testing';
import { InvoiceLineService } from 'src/invoicing/invoice-line/invoice-line.service';
import { InvoiceService } from 'src/invoicing/invoice/invoice.service';
import { HttpAdapter } from 'src/util/http.adapter';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

describe('InvoicingController', () => {
  let invoicingController: InvoicingController;
  let invoicingService: InvoicingService;
  let invoicingLibrary: InvoicingLibrary;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [InvoicingController],
      providers: [
        InvoicingService,
        InvoicingLibrary,
        InvoiceService,
        InvoiceLineService,
        HttpAdapter,
        HttpService,
        ConfigService,
        {
          provide: 'AXIOS_INSTANCE_TOKEN',
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    invoicingController =
      moduleRef.get<InvoicingController>(InvoicingController);
    invoicingService = moduleRef.get<InvoicingService>(InvoicingService);
    invoicingLibrary = moduleRef.get<InvoicingLibrary>(InvoicingLibrary);
  });

  it('should be defined', () => {
    expect(invoicingController).toBeDefined();
  });

  describe('getInvoices', () => {
    it('should return an array of invoices', async () => {
      const result = ['test'];
      jest
        .spyOn(invoicingLibrary, 'getInvoices')
        .mockImplementation(() => Promise.resolve(result));
      expect(await invoicingController.getInvoices()).toBe(result);
    });
  });
});
