import React from 'react';

const AdminPanel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-6">Admin Panel</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-yellow-400">Name:</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-yellow-400">Host by:</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-yellow-400">Hosted on:</label>
            <input
              type="date"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-yellow-400">Team Size:</label>
            <input
              type="number"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-yellow-400">Registration Price:</label>
            <input
              type="number"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-yellow-400">Hackathon Link:</label>
            <input
              type="url"
              placeholder="https://example.com"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-yellow-400">Upload Banner Image:</label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
