import { useCallback, useState } from "react";
import { Invoice } from "app/domain/entities/Invoice";

type Payload = { invoice: Invoice; isNew: boolean };

type OpenParams = {
  payload: Payload;
};

export const useInvoiceModal = () => {
  const [isOpen, setOpen] = useState(false);
  const [payload, setPayload] = useState<Payload | undefined>(undefined);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, [setOpen]);

  const open = useCallback(
    (params: OpenParams) => {
      setPayload(params.payload);
      toggle();
    },
    [toggle, setPayload]
  );

  return {
    open,
    isOpen,
    setOpen,
    payload,
    toggle,
    setPayload,
  };
};
