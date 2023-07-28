import RoutesApp from "./routes";

import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </div>
  );
}
export default App;
