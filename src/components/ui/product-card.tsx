
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  brand: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  onToggleWishlist?: (productId: string) => void;
}

const ProductCard = ({ product, onAddToCart, onToggleWishlist }: ProductCardProps) => {
  const discount = product.originalPrice ? 
    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-destructive text-white px-2 py-1 rounded-md text-sm font-medium">
            -{discount}%
          </div>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          onClick={() => onToggleWishlist?.(product.id)}
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">{product.brand}</p>
          
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-foreground">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <Button
            className="w-full mt-3"
            onClick={() => onAddToCart?.(product.id)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
