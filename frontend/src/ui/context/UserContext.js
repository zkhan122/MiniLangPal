import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
 const [user, setUser] = useState(null);
 const [isValidating, setIsValidating] = useState(true);

 useEffect(() => {
   const validateCachedUser = async () => {
     const storedUser = localStorage.getItem("user");
     
     if (!storedUser) {
       setIsValidating(false);
       return;
     }

     try {
       const parsedUser = JSON.parse(storedUser);
       const { username, role } = parsedUser;

       const endpoint = role === 'admin' 
         ? `/admin/validate/${username}`
         : `/users/validate/${username}`;

       const response = await fetch(endpoint);
       
       if (response.ok) {
         const validatedUser = await response.json();
         setUser(validatedUser);
       } else if (response.status === 404) {
         localStorage.removeItem("user");
         setUser(null);
       } else {
         setUser(parsedUser);
       }
     } catch (error) {
       const parsedUser = JSON.parse(storedUser);
       setUser(parsedUser);
     }
     
     setIsValidating(false);
   };

   validateCachedUser();
 }, []);

 useEffect(() => {
   const handleStorageChange = (event) => {
     if (event.key === "user") {
       if (event.newValue) {
         setUser(JSON.parse(event.newValue));
       } else {
         setUser(null);
       }
     }
   };

   window.addEventListener("storage", handleStorageChange);
   return () => window.removeEventListener("storage", handleStorageChange);
 }, []);

 const login = (username, role) => {
   const userObj = { username, role };
   localStorage.setItem("user", JSON.stringify(userObj));
   setUser(userObj);
 };

 const logout = () => {
   setUser(null);
   localStorage.removeItem("user");
 };

 if (isValidating) {
   return <div>Validating user...</div>;
 }

 return (
   <UserContext.Provider value={{ user, login, logout }}>
     {children}
   </UserContext.Provider>
 );
}

export const useUser = () => useContext(UserContext);