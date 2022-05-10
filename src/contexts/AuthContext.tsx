import { GoogleAuthProvider, signInWithPopup, UserInfo } from "firebase/auth";
import { createContext, ReactNode, useState } from "react";
import { auth } from "../lib/firebase";

export type User = Pick<UserInfo, "displayName" | "photoURL" | "uid" | "email">

type AuthProviderProps = {
  children: ReactNode
}

type AuthContextType = {
  user: User;
  signIn: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  const signIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then(result => {
      const credentials = GoogleAuthProvider.credentialFromResult(result);
      const token = credentials?.accessToken;

      const { user } = result;
      setUser(user);
    })
    .catch(err => {
      const { code, message } = err;
      console.error({code, message})
    })
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}