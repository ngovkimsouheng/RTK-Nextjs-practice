// import { ProductType } from "@/lib/productType";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// type ProductResponse = {
//   content: ProductType[];
// };
// export const ecommerceApi = createApi({
//   reducerPath: "ecommerceApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://ishop.cheat.casa/api/v1",
//   }),
//   endpoints: (builder) => ({
//     getAllProducts: builder.query<ProductType[], void>({
//       query: () => "/products",
//     }),
//   }),
// });

// export const { useGetAllProductsQuery } = ecommerceApi;

import { ProductType } from "@/lib/productType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ProductResponse = {
  content: ProductType[];
};

export const ecommerceApi = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ishop.cheat.casa/api/v1",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductType[], void>({
      query: () => "/products",
      transformResponse: (response: ProductResponse) => response.content,
    }),
  }),
});

export const { useGetAllProductsQuery } = ecommerceApi;
