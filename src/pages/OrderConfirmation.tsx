
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
  // Redirect if accessed directly (without placing an order)
  useEffect(() => {
    const orderPlaced = localStorage.getItem("last_order_id");
    if (!orderPlaced) {
      localStorage.setItem("last_order_id", orderId);
    }
  }, [orderId]);

  return (
    <div className="container mx-auto px-4 py-16 text-center animate-fadeIn">
      <div className="max-w-md mx-auto">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
        <h1 className="text-2xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-2">
          Thank you for your purchase! Your order has been placed and is being processed.
        </p>
        <p className="text-gray-600 mb-8">
          Your order number is: <span className="font-semibold">{orderId}</span>
        </p>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            A confirmation email will be sent to your registered email address with the order details.
          </p>
          
          <Button asChild className="w-full">
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
