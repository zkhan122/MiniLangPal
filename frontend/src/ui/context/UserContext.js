import React, { createContext, useState, useContext } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (username, role) => {
    setUser({ username, role});
  };

  const logout = () => {
    setUser(null);
    window.location.replace("/");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);