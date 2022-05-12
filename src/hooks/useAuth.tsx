import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


export function useAuth() {
  const { user, signIn, setUser } = useContext(AuthContext);
  return { user, signIn, setUser }
}