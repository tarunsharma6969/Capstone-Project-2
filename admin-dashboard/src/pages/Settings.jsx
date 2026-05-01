import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Settings() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      
      <Sidebar />

      <div className="ml-20 md:ml-64">
        
        <Navbar />

        <div className="p-6">
          
          <h1 className="text-4xl font-bold text-cyan-400">
            Control Panel ⚙️
          </h1>

          <p className="text-gray-400 mt-3 mb-8">
            Manage profile, preferences, and security settings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Profile Settings */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
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

              <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold transition">
                Save Changes
              </button>
            </div>

            {/* Security Settings */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <h2 className="text-2xl font-bold text-pink-400 mb-4">
                Security Settings
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

              <button className="bg-pink-500 hover:bg-pink-400 text-white px-6 py-3 rounded-xl font-semibold transition">
                Update Password
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Settings;