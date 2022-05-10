import { useEffect, useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Loading } from "./components/Loading";
import { SignIn } from "./components/SignIn/indext";
import { Widget } from "./components/Widget";
import { AuthProvider, User } from "./contexts/AuthContext";
import { auth } from "./lib/firebase";

export function App() {
  const [user, setUser] = useState<User>()
  const [isFetchingUser, setIsFetchingUser] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        const { displayName, photoURL, uid, email } = user;
  
        setUser({
          displayName, 
          photoURL, 
          uid, 
          email
        })
      }
      setIsFetchingUser(false);
    })


    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <AuthProvider>
      {user 
      ? 
        <section className="h-screen grid place-items-center">
          <Dashboard imageURL={user.photoURL!} name={user.displayName!} email={user.email!}/>
          <Widget />
        </section>
      : <section className="h-screen grid place-items-center">
          {isFetchingUser ? <Loading large/> : <SignIn /> }
        </section>
      }
      
    </AuthProvider>
  )
}