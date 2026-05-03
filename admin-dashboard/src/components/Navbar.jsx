function Navbar() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = now.toLocaleDateString();

  return (
    <div className="ml-20 md:ml-64 h-20 bg-slate-900 border-b border-slate-800 text-white flex items-center justify-between px-6 shadow-lg">
      
      {/* Search Bar */}
      <div className="bg-slate-800 px-4 py-2 rounded-xl w-40 md:w-96">
        <input
          type="text"
          placeholder="Search command center..."
          className="bg-transparent outline-none w-full text-sm text-white placeholder-gray-400"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-6">
        
        {/* Clock */}
        <div className="hidden md:block text-right">
          <p className="text-cyan-400 font-bold">{time}</p>
          <p className="text-xs text-gray-400">{date}</p>
        </div>

        {/* Notifications */}
        <div className="relative cursor-pointer">
          <span className="text-2xl">🔔</span>
          <span className="absolute -top-2 -right-2 bg-cyan-400 text-slate-950 text-xs px-2 rounded-full font-bold">
            3
          </span>
        </div>

        {/* Messages */}
        <div className="relative cursor-pointer">
          <span className="text-2xl">📩</span>
          <span className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs px-2 rounded-full font-bold">
            2
          </span>
        </div>

        {/* Admin Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-slate-950 font-bold">
            A
          </div>

          <div className="hidden md:block">
            <p className="font-semibold">Admin</p>
            <p className="text-xs text-gray-400">Executive Control</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;