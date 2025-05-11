
import React from "react";
import { Plus } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <Button 
            size="icon"
            onClick={handleAddToCart} 
            className="absolute bottom-2 right-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Plus className="h-5 w-5" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium truncate">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <span className="text-xs text-gray-500 capitalize">{product.category}</span>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
