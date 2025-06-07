
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">HD</span>
              </div>
              <span className="text-xl font-bold text-primary">Home Destino</span>
            </div>
            <p className="text-muted-foreground">
              Your ultimate destination for quality products from top brands around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/brands" className="hover:text-primary transition-colors">Brands</Link></li>
              <li><Link to="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-primary transition-colors">Returns</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* For Merchants */}
          <div className="space-y-4">
            <h3 className="font-semibold">For Merchants</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/merchant/register" className="hover:text-primary transition-colors">Become a Seller</Link></li>
              <li><Link to="/merchant/login" className="hover:text-primary transition-colors">Merchant Login</Link></li>
              <li><Link to="/merchant/help" className="hover:text-primary transition-colors">Seller Help</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Home Destino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
