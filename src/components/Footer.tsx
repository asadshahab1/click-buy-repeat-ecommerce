
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ShopEase</h3>
            <p className="text-sm text-gray-600">
              Your one-stop shop for all your shopping needs.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-brand-accent">All Products</Link>
              </li>
              <li>
                <Link to="/products?category=electronics" className="text-gray-600 hover:text-brand-accent">Electronics</Link>
              </li>
              <li>
                <Link to="/products?category=clothing" className="text-gray-600 hover:text-brand-accent">Clothing</Link>
              </li>
              <li>
                <Link to="/products?category=books" className="text-gray-600 hover:text-brand-accent">Books</Link>
              </li>
              <li>
                <Link to="/products?category=home" className="text-gray-600 hover:text-brand-accent">Home & Kitchen</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/profile" className="text-gray-600 hover:text-brand-accent">My Profile</Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-600 hover:text-brand-accent">My Orders</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 hover:text-brand-accent">Shopping Cart</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">
                Email: support@shopease.com
              </li>
              <li className="text-gray-600">
                Phone: (123) 456-7890
              </li>
              <li className="text-gray-600">
                Address: 1234 Main St, City, Country
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
