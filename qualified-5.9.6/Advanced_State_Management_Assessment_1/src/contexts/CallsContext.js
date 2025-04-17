import { createContext, useState } from "react";

export const CallsContext = createContext({
    calls: [],
    setCalls: () => {},
});

export function CallsContextProvider({ initialData, children }) {
    const [calls, setCalls] = useState(initialData);
    return (
        <CallsContext.Provider value={{ calls, setCalls }}>
            {children}
        </CallsContext.Provider>
    );
}