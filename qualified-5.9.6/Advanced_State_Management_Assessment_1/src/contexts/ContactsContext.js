import { createContext, useState } from "react";

export const ContactsContext = createContext({
    contacts: [],
    setContacts: () => {},
});

export function ContactsContextProvider({ initialData, children}) {
    const [contacts, setContacts] = useState(initialData);
    return(
        <ContactsContext.Provider value={{ contacts, setContacts }}>
            {children}
        </ContactsContext.Provider>
    );
}