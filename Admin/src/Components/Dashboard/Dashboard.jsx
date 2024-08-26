import { User2, DollarSign, BarChart,  CreditCard,  Settings } from "lucide-react";
import { LineChart, PieChart as RechartsPieChart, Tooltip, Legend, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Pie} from 'recharts';

const data = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  // Add more data as needed
];

const pieData = [
  { name: 'Rent', value: 4000 },
  { name: 'Groceries', value: 3000 },
  { name: 'Utilities', value: 2000 },
  // Add more data as needed
];

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 flex items-center">
            <Settings className="mr-2" /> Settings
          </button>
          <img
            src="/path-to-profile-pic.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
          <div className="flex items-center">
            <User2 className="text-blue-500 text-3xl mr-4" />
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-xl font-bold">5,000</p>
              <p className="text-green-500 text-sm">+2% from last month</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
          <div className="flex items-center">
            <DollarSign className="text-green-500 text-3xl mr-4" />
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-xl font-bold">$500,000</p>
              <p className="text-green-500 text-sm">+5% from last month</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
          <div className="flex items-center">
            <CreditCard className="text-red-500 text-3xl mr-4" />
            <div>
              <p className="text-sm text-gray-600">Active Loans</p>
              <p className="text-xl font-bold">300</p>
              <p className="text-red-500 text-sm">-1% from last month</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
          <div className="flex items-center">
            <BarChart className="text-yellow-500 text-3xl mr-4" />
            <div>
              <p className="text-sm text-gray-600">Investment Overview</p>
              <p className="text-xl font-bold">$200,000</p>
              <p className="text-green-500 text-sm">+8% from last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Income and Expense Analytics */}
      <div className="p-4 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-bold mb-4">Income and Expense Analytics</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#8884d8" />
            <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Expense Distribution */}
      <div className="p-4 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-bold mb-4">Expense Distribution</h2>
        <ResponsiveContainer width="100%" height={400}>
          <RechartsPieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              <Tooltip />
              <Legend />
            </Pie>
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Transactions Table */}
      <div className="p-4 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-bold mb-4">Recent Transactions</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Action</th>
              <th className="py-2 px-4 border-b">Date/Time</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">Purchased Product</td>
              <td className="py-2 px-4 border-b">Aug 24, 2024 10:00 AM</td>
              <td className="py-2 px-4 border-b text-green-500">Completed</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* System Health and Performance Metrics */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">System Health and Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-600">System Uptime</p>
            <p className="text-2xl font-bold">99.9%</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-600">Current Load</p>
            <p className="text-2xl font-bold">25%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
