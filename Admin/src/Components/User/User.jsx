import  { useState } from 'react';
import {  Edit, Trash, Eye, RefreshCw } from 'lucide-react';

const User = () => {
  // Static user data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Member',
      status: 'Active',
      dateJoined: '2023-01-15T08:00:00Z',
      lastLogin: '2024-08-25T12:34:56Z',
      totalBudget: 5000,
      totalIncome: 15000,
      totalExpenses: 2000,
      investments: 3000,
      loans: 1000,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Admin',
      status: 'Inactive',
      dateJoined: '2023-03-10T08:00:00Z',
      lastLogin: '2024-08-20T15:22:33Z',
      totalBudget: 7000,
      totalIncome: 18000,
      totalExpenses: 2500,
      investments: 3500,
      loans: 1200,
    },
    // Add more static users as needed
  ]);

  
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [resetPassword, setResetPassword] = useState('');

  // Handle view user details
  const handleViewUser = (user) => {
    
    setEditUser(user);
    setShowModal(true);
  };

  // Handle edit user
  const handleEditUser = () => {
    // Implement edit functionality
    setUsers(users.map(user => (user.id === editUser.id ? editUser : user)));
    setShowModal(false);
  };

  // Handle delete user
  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Handle activate/deactivate user
  const handleToggleStatus = () => {
    setEditUser({
      ...editUser,
      status: editUser.status === 'Active' ? 'Inactive' : 'Active',
    });
  };

  // Handle reset password
  const handleResetPassword = () => {
    if (resetPassword) {
      // Implement password reset logic
      alert(`Password for ${editUser.email} has been reset.`);
    }
    setResetPassword('');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.status}</td>
                <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                    onClick={() => handleViewUser(user)}
                  >
                    <Eye className="inline mr-1" /> View
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                    onClick={() => handleEditUser(user)}
                  >
                    <Edit className="inline mr-1" /> Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <Trash className="inline mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Details Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            {editUser && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={editUser.name}
                    onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={editUser.email}
                    onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <input
                    type="text"
                    value={editUser.role}
                    onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    value={editUser.status}
                    onChange={(e) => setEditUser({ ...editUser, status: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="mb-4 flex items-center">
                  <button
                    className={`py-2 px-4 rounded-md ${editUser.status === 'Active' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
                    onClick={() => handleToggleStatus(editUser)}
                  >
                    {editUser.status === 'Active' ? 'Deactivate' : 'Activate'}
                  </button>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Reset Password</label>
                  <input
                    type="password"
                    value={resetPassword}
                    onChange={(e) => setResetPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  />
                  <button
                    className="mt-2 bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                    onClick={handleResetPassword}
                  >
                    <RefreshCw className="inline mr-1" /> Reset Password
                  </button>
                </div>
              </>
            )}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleEditUser}
              >
                Save Changes
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={() => handleDeleteUser(editUser.id)}
              >
                Delete User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
