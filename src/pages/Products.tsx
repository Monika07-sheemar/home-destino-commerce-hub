
import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ui/product-card';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample products data - this will come from Supabase later
  const products = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      brand: 'AudioTech',
      rating: 4.5,
      reviews: 128
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 299.99,
      originalPrice: 399.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      brand: 'FitPro',
      rating: 4.8,
      reviews: 256
    },
    {
      id: '3',
      name: 'Organic Coffee Beans',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400',
      brand: 'GreenBean',
      rating: 4.3,
      reviews: 89
    },
    {
      id: '4',
      name: 'Designer Backpack',
      price: 89.99,
      originalPrice: 120.00,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      brand: 'UrbanStyle',
      rating: 4.6,
      reviews: 174
    },
    {
      id: '5',
      name: 'Smartphone Case',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
      brand: 'TechGuard',
      rating: 4.2,
      reviews: 95
    },
    {
      id: '6',
      name: 'Gaming Keyboard',
      price: 149.99,
      originalPrice: 180.00,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
      brand: 'GameTech',
      rating: 4.7,
      reviews: 203
    }
  ];

  const categories = ['All Categories', 'Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Beauty', 'Books'];
  const brands = ['All Brands', 'AudioTech', 'FitPro', 'GreenBean', 'UrbanStyle', 'TechGuard', 'GameTech'];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">All Products</h1>
        <p className="text-muted-foreground">Discover amazing products from top brands</p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand.toLowerCase()}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border rounded-md">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('grid')}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('list')}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          Showing {products.length} products
        </p>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Products Grid */}
      <div className={viewMode === 'grid' 
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        : 'space-y-4'
      }>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(id) => console.log('Add to cart:', id)}
            onToggleWishlist={(id) => console.log('Toggle wishlist:', id)}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center space-x-2">
          <Button variant="outline" disabled>Previous</Button>
          <Button variant="default">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
