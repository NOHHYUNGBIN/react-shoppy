import React, { createContext, useContext, useEffect, useState } from "react";
import { logOut, logIn, onUserStateChange } from "../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
