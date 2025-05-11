
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you're looking for does not exist.</p>
        <Button onClick={() => navigate("/products")}>
          Back to Products
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <Button
        variant="ghost"
        className="mb-6 flex items-center gap-2"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-brand-accent font-semibold text-xl mt-2">
              ${product.price.toFixed(2)}
            </p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-2">Category</h2>
            <p className="text-gray-600 capitalize">{product.category}</p>
          </div>
          
          <Button
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => addItem(product)}
          >
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
