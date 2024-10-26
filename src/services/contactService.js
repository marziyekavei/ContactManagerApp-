import axios from "axios";

const SERVER_URL = "https://contactmanagerserver.vercel.app";

//@dec get all contact 
//@route GET http://localhost:9000/contacts
export const getAllContacts = () => {
    const url = `${SERVER_URL}/contacts`;
    return axios.get(url);
}

//@dec get contact whith contactid
//@route GET http://localhost:9000/contacts/:contactId
export const getContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.get(url);
}

//@dec get all group 
//@route GET http://localhost:9000/groups
export const getAllGroupes = () => {
    const url = `${SERVER_URL}/groups`;
    return axios.get(url);
}

//@dec get all group whith groupid
//@route GET http://localhost:9000/groups/:groupId
export const getGroup = (groupId) => {
    const url = `${SERVER_URL}/groups/${groupId}`;
    return axios.get(url);
}

//@dec create new contact
//@route POST http://localhost:9000/contacts
export const createContact = (contact) => {
    const url = `${SERVER_URL}/contacts`;
    return axios.post(url,contact);
}


//@dec update contact
//@route PUT http://localhost:9000/contacts/:contactId
export const updateContact = (contact, contactId) =>{
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.put(url, contact);
}

//@dec delete contact
//@route DELETE http://localhost:9000/contacts/:contactId
export const deleteContact = (contactId) =>{
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(url); 
}
