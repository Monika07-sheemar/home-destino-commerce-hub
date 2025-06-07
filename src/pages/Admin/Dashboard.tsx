
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ShoppingBag, TrendingUp, DollarSign, Package, Store } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$124,563',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Total Orders',
      value: '2,847',
      change: '+8.2%',
      icon: ShoppingBag,
      color: 'text-blue-600'
    },
    {
      title: 'Active Customers',
      value: '1,249',
      change: '+5.4%',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Total Products',
      value: '5,632',
      change: '+3.1%',
      icon: Package,
      color: 'text-orange-600'
    },
    {
      title: 'Active Merchants',
      value: '89',
      change: '+15.3%',
      icon: Store,
      color: 'text-indigo-600'
    },
    {
      title: 'Growth Rate',
      value: '23.1%',
      change: '+2.4%',
      icon: TrendingUp,
      color: 'text-emerald-600'
    }
  ];

  const recentOrders = [
    { id: '#12345', customer: 'John Doe', amount: '$299.99', status: 'Completed', date: '2024-01-15' },
    { id: '#12346', customer: 'Jane Smith', amount: '$149.50', status: 'Processing', date: '2024-01-15' },
    { id: '#12347', customer: 'Mike Johnson', amount: '$89.99', status: 'Shipped', date: '2024-01-14' },
    { id: '#12348', customer: 'Sarah Wilson', amount: '$199.99', status: 'Pending', date: '2024-01-14' },
  ];

  const topMerchants = [
    { name: 'TechGear Pro', revenue: '$45,230', orders: 234 },
    { name: 'Fashion Hub', revenue: '$38,920', orders: 189 },
    { name: 'Home Essentials', revenue: '$32,100', orders: 156 },
    { name: 'Sports Central', revenue: '$28,540', orders: 142 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview of your e-commerce platform</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest orders from customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Merchants */}
        <Card>
          <CardHeader>
            <CardTitle>Top Merchants</CardTitle>
            <CardDescription>Best performing merchants this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topMerchants.map((merchant, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{merchant.name}</p>
                    <p className="text-sm text-muted-foreground">{merchant.orders} orders</p>
                  </div>
                  <p className="font-medium text-green-600">{merchant.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
