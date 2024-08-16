import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGithub = () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // user login With Email, Name, PhotoURL, and Password
  // const createUser = (email, password, displayName, photoURL) => {
  //   setLoading(true);
  //   return createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Update additional user info
  //       return updateProfile(auth.currentUser, {
  //         displayName: displayName,
  //         photoURL: photoURL,
  //       });
  //     });
  // };
  const createUser = async (email, password, name, photoURL) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      setUser(user);
      setLoading(false);
      return user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     console.log("user in the auth state changed", currentUser);
  //     setUser(currentUser);
  //     setLoading(false);
  //   });
  //   return () => {
  //     unSubscribe();
  //   };
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
    // console.log("current user", currentUser);
      setLoading(false);
      //if user exist then issue a token
      if (currentUser) {
        axios
          .post("https://blog-website-server-self.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
         //   console.log("token response", res.data);
          });
      } else {
        axios
          .post(
            "https://blog-website-server-self.vercel.app/jwt/logout",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
          //  console.log(res.data);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loading,
    signIn,
    logOut,
    signInWithGoogle,
    signInWithGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
export default AuthProvider;
