// ProductDetailModal.jsx

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ProductDetailModal({
  open,
  setOpen,
  product,
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>
            {product?.title}
          </DialogTitle>
        </DialogHeader>

        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-60 object-contain rounded"
        />

        <div className="flex flex-col gap-2">
          <p className="text-blue-600">
            Price: ${product?.price}
          </p>

          <p className="text-gray-600">
            {product?.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}