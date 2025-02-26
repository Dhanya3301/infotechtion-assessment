import axios from "axios";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { useQuery } from "@tanstack/react-query";
import { ProductDataType } from "./components/ProductCard";
import Footer from "./components/Footer";
import { Loader2 } from "lucide-react";

const fetchProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products?limit=15");
  return data;
};

function App() {

  const { data: products, isLoading, error } = useQuery<ProductDataType[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return (
    <div className="flex flex-1 items-center justify-center w-full h-screen">
      <Loader2 className="w-10 h-10 animate-spin text-white"/>
    </div>
  )
  if (error) return <p>Error: {error.message}</p>;

  return <div className="min-h-screen flex flex-col w-full font-mono">
    <Hero />
    <Products productsData={products ?? []}/>
    <Footer/>
  </div>;
}

export default App;
