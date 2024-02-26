import { createContext } from 'react';

export const ContactContext = createContext({
    loading: false,
    setLoading: ()=>{},
    setContacts: () =>{},
    setFillteredContacts: ()=>{},
    contacts: [],
    fillteredContacts: [],
    groups: [],
    deleteContact: () =>{},
    updateContact: ()=>{},
    createContact: ()=>{},
    contactSearch: ()=>{}
});