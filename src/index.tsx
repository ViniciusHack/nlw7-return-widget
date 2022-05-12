import React, { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Loading } from './components/Loading';
import { SignIn } from './components/SignIn/indext';
import { Widget } from './components/Widget';
import { useAuth } from './hooks/useAuth';
import { auth } from './lib/firebase';

const Home: React.FC = () => {
  const { user, setUser } = useAuth();
  const [isFetchingUser, setIsFetchingUser] = useState(true);

  console.log(user, setUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user) {
        const { displayName, photoURL, email, uid } = user;
        if(!email || !displayName || !photoURL) {
          throw new Error("There aren't info enough");
        }

        setUser({
          name: displayName,
          email,
          imageURL: photoURL,
          uid
        })
        
      }
      setIsFetchingUser(false);
    })


    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <>
    {user 
      ? 
        <section className="h-screen grid place-items-center">
          <Dashboard/>
          <Widget />
        </section>
      : <section className="h-screen grid place-items-center">
          {isFetchingUser ? <Loading large/> : <SignIn /> }
        </section>
      }
    </>
  );
}

export default Home;