import React from 'react';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <main className="flex-grow p-4 md:ml-64">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-xl font-bold mb-4">Admin Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-blue-50 border border-blue-200 rounded-lg shadow"
            >
              <h3 className="font-bold text-lg mb-2">User Management</h3>
              <p>Manage users and their roles</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-green-50 border border-green-200 rounded-lg shadow"
            >
              <h3 className="font-bold text-lg mb-2">Transaction History</h3>
              <p>View all transactions</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow"
            >
              <h3 className="font-bold text-lg mb-2">Settings</h3>
              <p>Application settings</p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AdminPage;
