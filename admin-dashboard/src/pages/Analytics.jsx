import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Analytics() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      
      <Sidebar />

      <div className="ml-20 md:ml-64">
        
        <Navbar />

        <div className="p-6">
          
          {/* Header */}
          <h1 className="text-4xl font-bold text-cyan-400">
            Intelligence Reports 📊
          </h1>

          <p className="text-gray-400 mt-3 mb-8">
            Monitor growth patterns, performance metrics, and strategic forecasting.
          </p>

          {/* Top Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-10">
            
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-gray-400">Quarterly Revenue</p>
              <h2 className="text-3xl font-bold text-green-400 mt-2">
                $148K
              </h2>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-gray-400">Conversion Rate</p>
              <h2 className="text-3xl font-bold text-cyan-400 mt-2">
                64%
              </h2>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-gray-400">Engagement Score</p>
              <h2 className="text-3xl font-bold text-yellow-400 mt-2">
                82%
              </h2>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-gray-400">System Load</p>
              <h2 className="text-3xl font-bold text-pink-400 mt-2">
                71%
              </h2>
            </div>

          </div>

          {/* Analytics Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Revenue Trends */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <h2 className="text-2xl font-bold text-green-400 mb-6">
                Revenue Trends
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">January</p>
                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400">February</p>
                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400">March</p>
                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Growth */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                User Growth Matrix
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">New Users</p>
                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div className="bg-cyan-400 h-3 rounded-full w-4/5"></div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400">Retention</p>
                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div className="bg-cyan-400 h-3 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400">Expansion</p>
                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div className="bg-cyan-400 h-3 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Forecast Panel */}
          <div className="mt-10 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Strategic Forecast
            </h2>

            <p className="text-gray-300 text-lg">
              Based on current operational patterns, projected enterprise growth may reach 
              <span className="text-cyan-400 font-bold"> +21%</span> next quarter with stable retention.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Analytics;