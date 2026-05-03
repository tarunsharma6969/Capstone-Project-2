import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Settings() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      
      <Sidebar />

      <div className="ml-20 md:ml-64">
        
        <Navbar />

        <div className="p-6">
          
          {/* Header */}
          <h1 className="text-4xl font-bold text-cyan-400">
            Control Panel ⚙️
          </h1>

          <p className="text-gray-400 mt-3 mb-8">
            Configure profile systems, security layers, notification control, and administrative preferences.
          </p>

          {/* System Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-gray-400">Security Index</p>
              <h2 className="text-3xl font-bold text-green-400 mt-2">
                98%
              </h2>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-gray-400">Active Sessions</p>
              <h2 className="text-3xl font-bold text-cyan-400 mt-2">
                12
              </h2>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-gray-400">Alerts</p>
              <h2 className="text-3xl font-bold text-pink-400 mt-2">
                3
              </h2>
            </div>

          </div>

          {/* Settings Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Profile Settings */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                Profile Settings
              </h2>

              <input
                type="text"
                placeholder="Admin Name"
                className="w-full p-3 mb-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
              />

              <input
                type="email"
                placeholder="Admin Email"
                className="w-full p-3 mb-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
              />

              <select className="w-full p-3 mb-4 rounded-xl bg-slate-800 border border-slate-700 outline-none">
                <option>Executive Access</option>
                <option>Manager Access</option>
                <option>Viewer Access</option>
              </select>

              <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold transition">
                Save Profile
              </button>
            </div>

            {/* Security Settings */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <h2 className="text-2xl font-bold text-pink-400 mb-6">
                Security Layer
              </h2>

              <input
                type="password"
                placeholder="New Password"
                className="w-full p-3 mb-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 mb-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
              />

              <div className="flex items-center justify-between bg-slate-800 p-4 rounded-xl mb-4">
                <span>Two-Factor Authentication</span>
                <span className="text-green-400 font-bold">Enabled</span>
              </div>

              <button className="bg-pink-500 hover:bg-pink-400 text-white px-6 py-3 rounded-xl font-semibold transition">
                Update Security
              </button>
            </div>

          </div>

          {/* Notification Preferences */}
          <div className="mt-10 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              Notification Preferences
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between bg-slate-800 p-4 rounded-xl">
                <span>Email Alerts</span>
                <span className="text-green-400">Active</span>
              </div>

              <div className="flex justify-between bg-slate-800 p-4 rounded-xl">
                <span>Security Notifications</span>
                <span className="text-green-400">Active</span>
              </div>

              <div className="flex justify-between bg-slate-800 p-4 rounded-xl">
                <span>System Reports</span>
                <span className="text-yellow-400">Weekly</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Settings;