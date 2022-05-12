import Home from ".";
import { AuthProvider } from "./contexts/AuthContext";

export function App() {

  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  )
}