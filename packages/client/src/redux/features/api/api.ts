import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { InvoicingTags } from "redux/features/invoicing/tags";

const tagTypes: string[] = [...Object.values(InvoicingTags)];

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/invoicing/" }),
  endpoints: () => ({}),
  tagTypes,
});
