function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 md:w-64 bg-slate-900 text-white p-4">
      <h1 className="text-cyan-400 text-2xl font-bold mb-8">
        NeoAdmin X
      </h1>

      <nav className="flex flex-col gap-4">
        <a
          href="/"
          className="p-3 rounded-xl hover:bg-slate-800 transition"
        >
          Dashboard
        </a>

        <a
          href="/users"
          className="p-3 rounded-xl hover:bg-slate-800 transition"
        >
          Users
        </a>

        <a
          href="/analytics"
          className="p-3 rounded-xl hover:bg-slate-800 transition"
        >
          Analytics
        </a>

        <a
          href="/settings"
          className="p-3 rounded-xl hover:bg-slate-800 transition"
        >
          Settings
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;