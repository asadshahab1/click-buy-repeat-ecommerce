
import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  { id: "electronics", name: "Electronics" },
  { id: "clothing", name: "Clothing" },
  { id: "books", name: "Books" },
  { id: "home", name: "Home & Kitchen" }
];

export const products: Product[] = [
  {
    id: "prod-01",
    name: "Wireless Headphones",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    category: "electronics"
  },
  {
    id: "prod-02",
    name: "Smart Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    description: "Fitness tracker with heart rate monitor, GPS, and water resistance.",
    category: "electronics"
  },
  {
    id: "prod-03",
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    description: "Soft, breathable cotton t-shirt in various colors.",
    category: "clothing"
  },
  {
    id: "prod-04",
    name: "Denim Jeans",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGplYW5zfGVufDB8fDB8fHww",
    description: "Classic fit jeans made from premium denim fabric.",
    category: "clothing"
  },
  {
    id: "prod-05",
    name: "Bestselling Novel",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    description: "Award-winning fiction novel by a renowned author.",
    category: "books"
  },
  {
    id: "prod-06",
    name: "Cookbook Collection",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tib29rfGVufDB8fDB8fHww",
    description: "Set of 3 cookbooks featuring recipes from around the world.",
    category: "books"
  },
  {
    id: "prod-07",
    name: "Coffee Maker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1606909685022-8d97dd0933a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZSUyMG1ha2VyfGVufDB8fDB8fHww",
    description: "Programmable coffee maker with built-in grinder.",
    category: "home"
  },
  {
    id: "prod-08",
    name: "Throw Pillows",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1584346133934-2a9979ece01f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpbGxvd3N8ZW58MHx8MHx8fDA%3D",
    description: "Set of 2 decorative throw pillows for your living room.",
    category: "home"
  },
  {
    id: "prod-09",
    name: "Smartphone",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D",
    description: "Latest model smartphone with advanced camera system.",
    category: "electronics"
  },
  {
    id: "prod-10",
    name: "Winter Jacket",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGphY2tldHxlbnwwfHwwfHx8MA%3D",
    description: "Waterproof and insulated jacket for cold weather.",
    category: "clothing"
  },
  {
    id: "prod-11",
    name: "Science Book Set",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaWVuY2UlMjBib29rc3xlbnwwfHwwfHx8MA%3D",
    description: "Collection of educational science books for all ages.",
    category: "books"
  },
  {
    id: "prod-12",
    name: "Kitchen Mixer",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1594496474953-8c2f10d9287d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWl4ZXJ8ZW58MHx8MHx8fDA%3D",
    description: "Professional-grade stand mixer for all your baking needs.",
    category: "home"
  }
];
