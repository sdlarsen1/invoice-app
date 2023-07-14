import { api } from "redux/features/api/api";
import { Invoice } from "app/domain/entities/Invoice";
import { InvoicingTags } from "redux/features/invoicing/tags";

const invoicingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getInvoices: builder.query<Invoice[], void>({
      query: () => ({ url: `/invoice` }),
      providesTags: [InvoicingTags.INVOICE_STATE],
    }),
  }),
});

export const { useGetInvoicesQuery } = invoicingApi;
