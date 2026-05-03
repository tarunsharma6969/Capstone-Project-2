import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Users() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      
      <Sidebar />

      <div className="ml-20 md:ml-64">
        
        <Navbar />

        <div className="p-6">
          
          {/* Header */}
          <h1 className="text-4xl font-bold text-cyan-400">
            Workforce Hub 👥
          </h1>

          <p className="text-gray-400 mt-3 mb-8">
            Manage users, monitor permissions, and review administrative access.
          </p>

          {/* User Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-gray-400">Active Users</p>
              <h2 className="text-3xl font-bold text-green-400 mt-2">
                8,942
              </h2>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-gray-400">Pending Requests</p>
              <h2 className="text-3xl font-bold text-yellow-400 mt-2">
                124
              </h2>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-gray-400">Blocked Accounts</p>
              <h2 className="text-3xl font-bold text-pink-400 mt-2">
                38
              </h2>
            </div>

          </div>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full md:w-96 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 outline-none"
            />
          </div>

          {/* User Table */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg overflow-hidden">
            
            <table className="w-full text-left">
              
              <thead className="bg-slate-800">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>

              <tbody>
                
                <tr className="border-b border-slate-800">
                  <td className="p-4">Tarun Sharma</td>
                  <td className="p-4">tarun@gmail.com</td>
                  <td className="p-4 text-cyan-400">Admin</td>
                  <td className="p-4 text-green-400">Active</td>
                </tr>

                <tr className="border-b border-slate-800">
                  <td className="p-4">Jatin Kumar</td>
                  <td className="p-4">jatin@gmail.com</td>
                  <td className="p-4 text-green-400">Editor</td>
                  <td className="p-4 text-yellow-400">Pending</td>
                </tr>

                <tr className="border-b border-slate-800">
                  <td className="p-4">Sameer Raj</td>
                  <td className="p-4">sameer@gmail.com</td>
                  <td className="p-4 text-yellow-400">Viewer</td>
                  <td className="p-4 text-green-400">Active</td>
                </tr>

                <tr>
                  <td className="p-4">Apoorv Singh</td>
                  <td className="p-4">apoorv@gmail.com</td>
                  <td className="p-4 text-pink-400">Manager</td>
                  <td className="p-4 text-pink-400">Blocked</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Users;