import { BagProvider } from "./contexts/BagContext";
import RoutesApp from "./routes";

import AuthProvider from "./contexts/AuthContext";

import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter className="App">
      <AuthProvider>
        <BagProvider>
          <ToastContainer autoClose={3000} />
          <RoutesApp />
        </BagProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
