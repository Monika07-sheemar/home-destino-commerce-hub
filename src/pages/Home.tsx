
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ui/product-card';

const Home = () => {
  // Sample data - this will come from Supabase later
  const featuredProducts = [
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
    }
  ];

  const categories = [
    { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300', count: '2,500+' },
    { name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300', count: '3,200+' },
    { name: 'Home & Garden', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300', count: '1,800+' },
    { name: 'Sports', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300', count: '1,200+' },
    { name: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300', count: '900+' },
    { name: 'Books', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300', count: '5,000+' }
  ];

  const stats = [
    { icon: ShoppingBag, label: 'Products', value: '10,000+' },
    { icon: Users, label: 'Happy Customers', value: '50,000+' },
    { icon: TrendingUp, label: 'Brands', value: '20+' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Welcome to <span className="text-primary">Home Destino</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover amazing products from top brands around the world. 
              Quality, variety, and exceptional service - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="text-lg px-8">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/brands">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Explore Brands
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">Shop by Category</h2>
          <p className="text-muted-foreground">Explore our wide range of product categories</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to={`/category/${category.name.toLowerCase()}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-4 text-center space-y-3">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.count} items</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
          <p className="text-muted-foreground">Discover our handpicked selection of amazing products</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(id) => console.log('Add to cart:', id)}
              onToggleWishlist={(id) => console.log('Toggle wishlist:', id)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="outline" size="lg">
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Start Shopping?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover amazing products from top brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Create Account
              </Button>
            </Link>
            <Link to="/merchant/register">
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Become a Seller
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
