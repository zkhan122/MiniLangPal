import { createContext, useContext, useState, useEffect } from "react";

const UserNameContext = createContext();

export default function UserNameContextProvider({ children }) {
    const [username, setUsername] = useState(0);

    return (
        <UserNameContext.Provider
            value={{
                username,
                setUsername,
            }}
            >{children}</UserNameContext.Provider>
    );
}

export const Username = () => {
    return useContext(UserNameContext);
};