import { createContext, useEffect, useState } from 'react';
import { auth, FireBase } from 'services/firebase';

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface AuthContextData {
  signInWithGoogle: () => Promise<void>;
  user?: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// TODO: será que aqui num presica salvas as coisas no Local history?
const AuthProvider: React.FC = (props) => {
  const { children } = props;

  const [user, setUser] = useState<User>();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({ id: uid, name: displayName, avatar: photoURL });
      }
    });
  }, []);

  const signInWithGoogle = async () => {
    const provider = new FireBase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({ id: uid, name: displayName, avatar: photoURL });
    }
  };

  return (
    <AuthContext.Provider value={{ signInWithGoogle, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
