import { Invoice } from "app/domain/entities/Invoice";
import { InvoiceStatus } from "app/domain/constants/InvoiceStatus";
import { endOfMonth } from "date-fns";

type P = {
  invoice?: Invoice | undefined;
  isFetching: boolean;
};

export const useInvoiceSubmit = ({ invoice, isFetching }: P) => {
  const defaults = {
    description: "",
    createdAt: new Date(),
    dueAt: endOfMonth(new Date()),
    status: InvoiceStatus.PENDING,
    billToName: "",
    billToEmail: "",
    billToAddress: "",
    billFromName: "",
    billFromEmail: "",
    billFromAddress: "",
    notes: "",
  };

  return { defaults };
};
