
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div className="animate-fadeIn">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Shop the Latest Trends
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover amazing products at unbeatable prices. From electronics to fashion,
              we've got everything you need.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="px-8">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop"
              alt="Online shopping"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      
      {/* Featured products section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Link to="/products" className="text-brand-accent hover:underline">
            View All
          </Link>
        </div>
        
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      {/* Categories section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Shop by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/products?category=electronics" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Electronics"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">Electronics</h3>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/products?category=clothing" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Clothing"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">Clothing</h3>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/products?category=books" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Books"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">Books</h3>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/products?category=home" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Home & Kitchen"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">Home & Kitchen</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to action section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Start Shopping?
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who shop with us every day.
          Create an account to get started!
        </p>
        <Button asChild size="lg" className="px-8">
          <Link to="/signup">Sign Up Now</Link>
        </Button>
      </section>
    </div>
  );
};

export default Index;
