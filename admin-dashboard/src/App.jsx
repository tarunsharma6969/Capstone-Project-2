import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  const path = window.location.hash.replace("#", "");

  if (path === "/users") return <Users />;
  if (path === "/analytics") return <Analytics />;
  if (path === "/settings") return <Settings />;

  return <Dashboard />;
}

export default App;