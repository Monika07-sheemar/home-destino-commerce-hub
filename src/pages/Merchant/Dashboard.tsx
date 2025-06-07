
import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Package, TrendingUp, DollarSign, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MerchantDashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$12,543',
      change: '+8.2%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Total Products',
      value: '89',
      change: '+12.5%',
      icon: Package,
      color: 'text-blue-600'
    },
    {
      title: 'Total Orders',
      value: '234',
      change: '+5.4%',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Profile Views',
      value: '1,429',
      change: '+3.1%',
      icon: Eye,
      color: 'text-orange-600'
    }
  ];

  const recentProducts = [
    { id: '1', name: 'Wireless Headphones', price: '$199.99', status: 'Active', sales: 45 },
    { id: '2', name: 'Smart Watch', price: '$299.99', status: 'Active', sales: 23 },
    { id: '3', name: 'Phone Case', price: '$29.99', status: 'Draft', sales: 0 },
    { id: '4', name: 'Bluetooth Speaker', price: '$79.99', status: 'Active', sales: 18 },
  ];

  const recentOrders = [
    { id: '#12345', product: 'Wireless Headphones', amount: '$199.99', status: 'Completed', date: '2024-01-15' },
    { id: '#12346', product: 'Smart Watch', amount: '$299.99', status: 'Processing', date: '2024-01-15' },
    { id: '#12347', product: 'Bluetooth Speaker', amount: '$79.99', status: 'Shipped', date: '2024-01-14' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Merchant Dashboard</h1>
          <p className="text-muted-foreground">Manage your products and track your performance</p>
        </div>
        <Link to="/merchant/products/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Products */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Products</CardTitle>
            <CardDescription>Your latest product listings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{product.price}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/merchant/products">
                <Button variant="outline" className="w-full">View All Products</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest orders for your products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.product}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/merchant/orders">
                <Button variant="outline" className="w-full">View All Orders</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MerchantDashboard;
