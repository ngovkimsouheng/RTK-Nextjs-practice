"use client";
import { Spinner } from "@/components/ui/spinner";
import { useGetAllProductsQuery } from "@/service/ecommerce";
import Link from "next/link";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { section } from "framer-motion/client";
export default function ProductList() {
  const { data, isLoading, error } = useGetAllProductsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const itemsPerPage = 8;
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");
  // "asc" | "desc" | "none"
  const filteredProducts =
    data
      ?.filter((product) => {
        const searchText = search.toLowerCase();

        const matchSearch = [
          product.id,
          product.title,
          product.description,
          product.price,
        ]
          .join(" ")
          .toLowerCase()
          .includes(searchText);

        let matchPrice = true;

        if (priceFilter === "under50") {
          matchPrice = product.price < 50;
        }

        if (priceFilter === "50to100") {
          matchPrice = product.price >= 50 && product.price <= 100;
        }

        if (priceFilter === "above100") {
          matchPrice = product.price > 100;
        }

        return matchSearch && matchPrice;
      })
      .sort((a, b) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "desc") return b.price - a.price;
        return 0;
      }) || [];
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  console.log("product :", data);
  if (isLoading)
    return (
      <div className="h-screen grid place-content-center">
        <Spinner className="size-8" />´
      </div>
    );
  if (error) return <div>Failed to fetch products</div>;

  return (
    <section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.title}</DialogTitle>
          </DialogHeader>

          <img
            src={selectedProduct?.image}
            alt={selectedProduct?.title}
            className="w-full h-60 object-contain rounded"
          />

          <div className="flex flex-col gap-3">
            <p className="text-blue-600 font-semibold">
              Price: ${selectedProduct?.price}
            </p>

            <p className="text-gray-600">{selectedProduct?.description}</p>
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex max-w-7xl  container mx-auto sticky top-20 justify-between items-center mb-4">
        <div className="flex gap-4 items-center mb-4">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-md px-3 py-2 w-80"
          />

          {/* <select
            value={priceFilter}
            onChange={(e) => {
              setPriceFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-md px-3 py-2"
          >
            <option value="all">All Prices</option>
            <option value="under50">Under $50</option>
            <option value="50to100">$50 - $100</option>
            <option value="above100">Above $100</option>
          </select> */}
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-md px-3 py-2"
          >
            <option value="none">Sort by price</option>
            <option value="asc">Price: Low → High</option>
            <option value="desc">Price: High → Low</option>
          </select>
        </div>
      </div>
      {/* <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 place-items-center mx-auto max-w-7xl container gap-6 pb-10 pt-35">
        {data.slice(0, 8).map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="border-gray-200 cursor-pointer shadow-2xs border p-5 rounded-lg w-75 flex flex-col gap-2"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-contain rounded"
            />

            <h3 className="font-bold text-xl line-clamp-1">{product.title}</h3>
            <p className="text-blue-600">Price: ${product.price}</p>
            <p className="text-[16px] text-gray-600 line-clamp-2">
              {product.description}
            </p>
          </Link>
        ))}
      </div> */}
      <div className="container  mt-20 max-w-7xl mx-auto">
        <Table>
          {/* <TableCaption>Product List</TableCaption> */}

          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentProducts?.map((product) => (
              <TableRow
                key={product.id}
                className="cursor-pointer hover:bg-muted"
                // onClick={() => router.push(`/product/${product.id}`)}
                onClick={() => {
                  setSelectedProduct(product);
                  setOpen(true);
                }}
              >
                <TableCell>{product.id}</TableCell>
                <TableCell>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-12 h-12 object-contain"
                  />
                </TableCell>
                <TableCell>{product.title}</TableCell>{" "}
                <TableCell className="truncate max-w-xs">
                  {product.description}
                </TableCell>
                <TableCell className="text-right">${product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  if (currentPage > 1) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(i + 1);
                  }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  if (currentPage < totalPages) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
