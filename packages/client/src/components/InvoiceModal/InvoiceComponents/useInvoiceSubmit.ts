import { Invoice } from "app/domain/entities/Invoice";
import { useMemo } from "react";
import { InvoiceStatus } from "app/domain/constants/InvoiceStatus";

type P = {
  invoice?: Invoice | undefined;
  isFetching: boolean;
};

export const useInvoiceSubmit = ({ invoice, isFetching }: P) => {
  const defaults = useMemo(() => {
    console.log("invoice in hook", invoice);
    return invoice && !isFetching
      ? {
          description: invoice.description,
          createdAt: invoice.createdAt,
          dueAt: invoice.dueAt,
          status: invoice.status,
          billToName: invoice.billTo.name,
          billToEmail: invoice.billTo.email,
          billToAddress: invoice.billTo.address,
          billFromName: invoice.billFrom.name,
          billFromEmail: invoice.billFrom.email,
          billFromAddress: invoice.billFrom.address,
          notes: invoice.notes,
        }
      : {
          description: "",
          createdAt: new Date(),
          dueAt: new Date(),
          status: InvoiceStatus.PENDING,
          billToName: "poo",
          billToEmail: "poo",
          billToAddress: "",
          billFromName: "",
          billFromEmail: "",
          billFromAddress: "",
          notes: "",
        };
  }, [invoice, isFetching]);

  return { defaults };
};
