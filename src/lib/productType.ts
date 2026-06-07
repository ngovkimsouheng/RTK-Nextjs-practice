export type ComputerSpec = {
  processor: string;
  ram: string;
  storage: string;
  gpu: string;
  os: string;
  screenSize: string;
  battery: string;
};

export type ProductColor = {
  color: string;
  images: string[];
};

export type Category = {
  uuid: string;
  name: string;
  description: string;
  media: null | string;
};

export type ProductType = {
  uuid: string;
  name: string;
  description: string;
  computerSpec: ComputerSpec;
  stockQuantity: number;
  priceOut: number;
  discount: number;
  color: ProductColor[];
  thumbnail: string;
  images: string[];
  filteredImage: null | string;
  warranty: string;
  availability: boolean;
  category: Category;
};
