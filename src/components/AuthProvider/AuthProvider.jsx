import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const registerHandler = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginHandler = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };
  const logOutHandler = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    registerHandler,
    loginHandler,
    logOutHandler,
    handleGoogleLogin,
    setUser,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      return () => {
        unsubscribe();
      };
    });
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
