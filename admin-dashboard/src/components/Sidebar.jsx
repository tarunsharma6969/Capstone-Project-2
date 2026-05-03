function Sidebar() {
  const navButton =
    "w-full p-3 rounded-xl hover:bg-slate-800 transition text-left";

  return (
    <div className="fixed top-0 left-0 h-screen w-20 md:w-64 bg-slate-900 text-white p-4 border-r border-slate-800 shadow-2xl">
      
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-cyan-400 text-2xl font-bold hidden md:block">
          NeoAdmin X
        </h1>

        <h1 className="text-cyan-400 text-2xl font-bold block md:hidden text-center">
          NX
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        
        <button
          type="button"
          onClick={() => (window.location.href = "/")}
          className={`${navButton} bg-slate-800 text-cyan-400 font-semibold`}
        >
          Dashboard
        </button>

        <button
          type="button"
          onClick={() => (window.location.href = "/users")}
          className={navButton}
        >
          Users
        </button>

        <button
          type="button"
          onClick={() => (window.location.href = "/analytics")}
          className={navButton}
        >
          Analytics
        </button>

        <button
          type="button"
          onClick={() => (window.location.href = "/settings")}
          className={navButton}
        >
          Settings
        </button>

      </nav>

      {/* Bottom Status */}
      <div className="absolute bottom-8 left-4 right-4">
        <div className="bg-slate-800 p-4 rounded-2xl text-center">
          <p className="text-sm text-gray-400">System Status</p>
          <p className="text-green-400 font-bold">Operational</p>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;