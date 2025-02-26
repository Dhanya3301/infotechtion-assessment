import { Heart, ShoppingCart } from "lucide-react";

export interface ProductDataType {
  id: number;
  title: string;
  image: string;
  price: string;
  category: string;
  description: string;
}

const ProductCard = ({ product }: { product: ProductDataType }) => {
  return (
    <div className="w-full mb-8 md:mb-4 md:px-2 flex flex-col gap-1 min-h-80 bg-transparent rounded-lg relative">
      <img
        className="h-full rounded-lg object-fit"
        loading="lazy"
        src={product.image}
        alt="Product image"
      />
      <div className="absolute top-1 right-3 text-base flex flex-end gap-1">
        <Heart className="h-9 w-9 rounded-full bg-[rgb(25,25,25)] p-2 hover:cursor-pointer hover:bg-[rgba(25,25,25,0.5)]" />
        <ShoppingCart className="h-9 w-9 rounded-full bg-[rgb(25,25,25)] p-2 hover:cursor-pointer hover:bg-[rgba(25,25,25,0.5)]" />
      </div>
      <div className="flex justify-between gap-8 px-2">
        <h1 className="text-lg truncate">{product.title}</h1>
        <p className="text-lg">${product.price}</p>
      </div>
      <h2 className="text-base truncate text-white/50op px-2">
        {product.description}
      </h2>
    </div>
  );
};

export default ProductCard;
