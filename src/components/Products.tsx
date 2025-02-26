import { ArrowUp, Check, ChevronDown, Frown, Search, XCircle } from "lucide-react";
import React, { useState } from "react";
import ProductCard, { ProductDataType } from "./ProductCard";
import MaxWidthWrapper from "./MaxwidthWrapper";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCategories = async () => {
  const { data } = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return ["All", ...data];
};

const Products = React.Memo(({ productsData }: { productsData: ProductDataType[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSelect = (category: string) => {
    setSelected(category);
    setIsOpen(false);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const getFilteredProducts = () => {
    return productsData
      .filter((product) => {
        const matchesCategory =
          selected === "All" ||
          product.category.toLowerCase() === selected.toLowerCase();
        const matchesSearch = product.title
          .toLowerCase()
          .includes(query.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        const priceA = parseFloat(`${a.price}`.replace("$", ""));
        const priceB = parseFloat(`${b.price}`.replace("$", ""));
        return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
      });
  };

  const filteredProducts = getFilteredProducts();

  console.log(categories);

  return (
    <div className="bg-[rgb(25,25,25)] w-full rounded-tr-3xl rounded-tl-3xl mt-[80vh] relative z-20 text-white text-2xl sm:text-3xl md:text-4xl font-bold sm:p-6 md:p-8">
      <MaxWidthWrapper className="flex flex-col gap-6">
        <div className="flex justify-center relative">
          <hr className="w-12 absolute md:top-0 top-4 border-2 border-white/60" />
        </div>

        <div className="flex flex-col pt-4 gap-4 w-full">
          <div className="relative w-full max-w-xs md:w-80 mx-auto">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 text-sm md:text-lg bg-white/60 text-black rounded-3xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <XCircle className="w-5 h-5 text-black/60 hover:text-gray-700" />
              </button>
            )}
          </div>
          <div className="flex flex-row justify-between items-center gap-4 w-full">
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-sm md:text-lg text-white/50">
                Sort by <span className="font-bold text-white">Price</span>
              </h1>
              <button onClick={toggleSortOrder}>
                <ArrowUp
                  className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white hover:bg-white/20 hover:cursor-pointer rounded-full transition-transform ${
                    sortOrder === "desc" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <div className="relative max-w-44 md:max-w-60 md:min-w-48">
              <button
                className="w-full px-4 py-2 text-left text-sm md:text-lg bg-white/60 text-black rounded-3xl shadow-md flex justify-between items-center overflow-hidden whitespace-nowrap"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="text-black/50">Filter: </span>&nbsp;
                <span className="truncate">{selected || "All"}</span>
                <ChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <ul className="absolute mt-2 w-full bg-white shadow-md rounded-md overflow-hidden z-10">
                  {categories?.map((category, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 flex text-lg justify-between items-center hover:bg-gray-200 cursor-pointer text-gray-800"
                      onClick={() => handleSelect(category)}
                    >
                      {category}
                      {selected === category && (
                        <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center gap-2">
            <p className="text-[rgb(116,117,122)] text-2xl">Sorry, No products found</p>
            <Frown className="h-7 w-7 text-[rgb(116,117,122)]"/>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
});

export default Products;
