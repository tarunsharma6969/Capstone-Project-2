import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Analytics() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      
      <Sidebar />

      <div className="ml-20 md:ml-64">
        
        <Navbar />

        <div className="p-6">
          
          <h1 className="text-4xl font-bold text-cyan-400">
            Intelligence Reports 📊
          </h1>

          <p className="text-gray-400 mt-3 mb-8">
            Monitor business performance and operational trends.
          </p>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <h2 className="text-2xl font-bold text-green-400 mb-4">
                Revenue Analytics
              </h2>

              <p className="text-gray-300">
                Revenue increased by 12.4% this quarter.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                User Growth
              </h2>

              <p className="text-gray-300">
                User registrations increased by 8.7%.
              </p>
            </div>

          </div>

          {/* Forecast */}
          <div className="mt-8 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Forecast
            </h2>

            <p className="text-gray-300">
              Predicted growth may reach +21% next quarter.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Analytics;