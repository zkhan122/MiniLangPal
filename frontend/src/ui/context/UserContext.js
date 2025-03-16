import { createContext, useContext, useState } from "react";

const UserContext = createContext();

// Renamed from "Username" to "UserProvider"
export function UserProvider({ children }) {
  const [user, setUser] = useState(null); // Now stores { username, role }

  const login = (username, role) => {
    setUser({ username, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Changed from "Username" to "useUser"
export const useUser = () => useContext(UserContext);