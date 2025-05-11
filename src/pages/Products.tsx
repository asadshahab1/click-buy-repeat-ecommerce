
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (categoryParam) {
      result = result.filter(product => product.category === categoryParam);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [categoryParam, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8">
        {categoryParam 
          ? `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Products` 
          : "All Products"}
      </h1>
      
      <div className="flex flex-col md:flex-row md:gap-8">
        <aside className="md:w-1/4 md:min-w-[250px] mb-6 md:mb-0">
          <div className="sticky top-24">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <CategoryFilter />
          </div>
        </aside>
        
        <main className="md:w-3/4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-2">No products found</h2>
              <p className="text-gray-600">
                Try changing your filters or search query
              </p>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
