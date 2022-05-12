import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, ReactNode, useState } from "react";
import { api } from "../lib/api";
import { auth } from "../lib/firebase";

export type User = {
  name: string,
  email: string,
  imageURL?: string,
  created_at?: string,
  uid: string;
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthContextType = {
  user: User | null;
  signIn: () => void;
  setUser: (user: User) => void;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null >(null);

  const signIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then(async (result) => {
      const { user } = result;
      const { email, displayName, photoURL, uid } = user;
      const userApi:User = await api.post("/users", {
        email,
        name: displayName,
        imageURL: photoURL,
        uid,
      });
      setUser(userApi);
    })
    .catch(err => {
      const { code, message } = err;
      console.error({code, message})
    })
  }


  return (
    <AuthContext.Provider value={{ user, signIn, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}