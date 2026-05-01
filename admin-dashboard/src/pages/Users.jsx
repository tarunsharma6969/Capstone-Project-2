import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Users() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      
      <Sidebar />

      <div className="ml-20 md:ml-64">
        
        <Navbar />

        <div className="p-6">
          
          <h1 className="text-4xl font-bold text-cyan-400">
            Workforce Hub 👥
          </h1>

          <p className="text-gray-400 mt-3 mb-8">
            Manage users and monitor team activity.
          </p>

          {/* User Table */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg overflow-hidden">
            
            <table className="w-full text-left">
              
              <thead className="bg-slate-800">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Role</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="p-4">Tarun Sharma</td>
                  <td className="p-4">tarun@gmail.com</td>
                  <td className="p-4 text-cyan-400">Admin</td>
                </tr>

                <tr className="border-b border-slate-800">
                  <td className="p-4">Jatin Kumar</td>
                  <td className="p-4">jatin@gmail.com</td>
                  <td className="p-4 text-green-400">Editor</td>
                </tr>

                <tr>
                  <td className="p-4">Sameer Raj</td>
                  <td className="p-4">sameer@gmail.com</td>
                  <td className="p-4 text-yellow-400">Viewer</td>
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