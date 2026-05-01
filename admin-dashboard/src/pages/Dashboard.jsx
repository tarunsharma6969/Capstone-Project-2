import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-20 md:ml-64">
        
        {/* Navbar */}
        <Navbar />

        {/* Dashboard Body */}
        <div className="p-6">
          
          {/* Header */}
          <h1 className="text-4xl font-bold text-cyan-400">
            Command Center 🚀
          </h1>

          <p className="text-gray-400 mt-3 mb-8">
            Welcome back, Admin. Core dashboard is stable.
          </p>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <p className="text-gray-400">Total Users</p>
              <h2 className="text-3xl font-bold mt-2 text-cyan-400">
                12,540
              </h2>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <p className="text-gray-400">Revenue</p>
              <h2 className="text-3xl font-bold mt-2 text-green-400">
                $48,290
              </h2>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <p className="text-gray-400">Orders</p>
              <h2 className="text-3xl font-bold mt-2 text-yellow-400">
                1,245
              </h2>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <p className="text-gray-400">Growth</p>
              <h2 className="text-3xl font-bold mt-2 text-pink-400">
                +18.2%
              </h2>
            </div>

          </div>

          {/* Admin Insights Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            
            {/* Insights */}
            <div className="lg:col-span-2 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                Admin Insights
              </h2>

              <div className="space-y-4">
                
                <div className="bg-slate-800 p-4 rounded-xl">
                  <p className="text-gray-400">Revenue Status</p>
                  <h3 className="text-green-400 font-semibold text-lg">
                    Revenue increased by 12% this month
                  </h3>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl">
                  <p className="text-gray-400">User Activity</p>
                  <h3 className="text-yellow-400 font-semibold text-lg">
                    User engagement dropped by 5%
                  </h3>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl">
                  <p className="text-gray-400">System Health</p>
                  <h3 className="text-pink-400 font-semibold text-lg">
                    Server uptime stable at 99.2%
                  </h3>
                </div>

              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                Activity Feed
              </h2>

              <ul className="space-y-4 text-gray-300">
                <li className="border-b border-slate-800 pb-2">
                  New user registered: Tarun Sharma
                </li>

                <li className="border-b border-slate-800 pb-2">
                  Monthly sales target achieved
                </li>

                <li className="border-b border-slate-800 pb-2">
                  3 pending admin approvals
                </li>

                <li>
                  Analytics report generated
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;