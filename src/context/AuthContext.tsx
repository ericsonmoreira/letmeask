import { createContext, useState } from 'react';
import { auth, FireBase } from 'services/firebase';

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface AuthContextData {
  signInWithGoogle: () => void;
  user?: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = (props) => {
  const { children } = props;

  const [user, setUser] = useState<User>();

  const signInWithGoogle = async () => {
    const provider = new FireBase.auth.GoogleAuthProvider();

    const response = await auth.signInWithPopup(provider);

    if (response.user) {
      const { displayName, photoURL, uid } = response.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({ id: uid, name: displayName, avatar: photoURL });
    }

    console.log(response);
  };

  return (
    <AuthContext.Provider value={{ signInWithGoogle, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
