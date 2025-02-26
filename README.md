# Infotechtion Assessment

Technical Implementation
1.	Project Setup
•	Initialize a Vite project with React & TypeScript:
npm create vite@latest my-ecommerce-app --template react-ts
cd my-ecommerce-app
npm install

•	Install Dependencies:
npm install axios @tanstack/react-query tailwindcss lucide-react

2.	Fetching Data from FakeStore API
•	Use Axios and React Query for efficient data fetching & caching.
•	API Endpoint: https://fakestoreapi.com/products?limit=15
•	Implement a fetchProducts function inside App.tsx:
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
const { data } = await axios.get("https://fakestoreapi.com/products?limit=10");
  return data;
};

const { data: products, isLoading, error } = useQuery<ProductDataType[]>({
  	queryKey: ["products"],
  	queryFn: fetchProducts,
});

3.	Create Components
•	Hero.tsx: Displays the hero banner.
•	Products.tsx: Receives productsData as props & applies sorting, filtering, and search on the products.
•	ProductCard.tsx: Displays an Individual Product.
4.	Handling State & User Interactions
•	Implemented search, category filter, and sorting in Products.tsx using useState.
5.	Responsive Design
•	The website is built using TailwindCSS framework with a Mobile first design to ensure responsiveness, especially on mobile devices.
6.	Layout Adjustments
•	CSS grid layout module is used to adjust product listing layout on different devices.
•	Media queries with TainwindCSS are used to ensure responsiveness in the layout.
7.	Performance Optimization
•	Re-rendering: The Product.tsx Component containing the Product listing, is wrapped in React.memo to implement component memoization. Memoization prevents component from re-rendering unless props change. 
•	Image optimization: lazy loading is used to optimize image rendering. 
