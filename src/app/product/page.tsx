"use client";
import { Spinner } from "@/components/ui/spinner"
import { useGetAllProductsQuery } from "@/service/ecommerce";

export default function ProductList() {
  const { data, isLoading, error } = useGetAllProductsQuery();

  if (isLoading) return <div className="h-screen grid place-content-center"><Spinner className="size-8" /></div>;
  if (error) return <div>Failed to fetch products</div>;

  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 place-items-center mx-auto max-w-7xl container gap-6 pb-10 pt-35">
      {data?.map((product) => (
        <div
          key={product.uuid}
          className="border-gray-200 cursor-pointer shadow-2xs border p-5 rounded-lg w-75 flex flex-col gap-2"
        >
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-60 object-contain rounded"
          />

          <h3 className="font-bold text-xl">{product.name}</h3>
          <p className="text-blue-600">Price: ${product.priceOut}</p>
          <p className="text-[16px] text-gray-600 line-clamp-2">{product.description}</p>
        </div>
      ))}
    </div>
  );
}
