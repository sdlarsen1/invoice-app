import { useInvoiceModal } from "./useInvoiceModal";
import { createContext, ReactNode, useContext } from "react";

const Context = createContext({
  invoiceModal: {} as ReturnType<typeof useInvoiceModal>,
});

interface P {
  children: ReactNode;
}

const { Provider } = Context;
const InvoiceModalProvider = ({ children }: P) => {
  const invoiceModal = useInvoiceModal();
  return <Provider value={{ invoiceModal }}>{children}</Provider>;
};

export function useInvoiceModalContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("hook must be used within a provider");
  }
  return context;
}

export default InvoiceModalProvider;
