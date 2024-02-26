
import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import './App.css';
import { Contacts, AddContact, EditContact, Navbar, ViewContact, Contact } from './Components';
import { getAllContacts, getAllGroupes, createContact, deleteContact } from './services/contactService';
import { confirmAlert } from 'react-confirm-alert';
import { Comment, CurrentLine, Foreground, Purple, Yellow } from './helpers/colors';
import { ContactContext } from "./context/contactContext";
import _ from 'lodash';
import {useImmer} from "use-immer";
import {ToastContainer, toast} from 'react-toastify';


const App = () => {

  const [contacts, setContacts] = useImmer([]);
  const [fillteredContacts, setFillteredContacts] = useImmer([]);
  const [loading, setLoading] = useImmer(false);
  const [groups, setGroups] = useImmer([]);
 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroupes();
        setContacts(contactsData);
        setFillteredContacts(contactsData);
        setGroups(groupsData);

        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const createContactForm = async (values) => {
    try {
      setLoading(draft => !draft);
      const { status, data } = await createContact(values);

      if (status === 201) {
        toast.success("مخاطب با موفقیت ساخته شده", {icon:"🚀"})
        setContacts(draft => {draft.push(data)});
        setFillteredContacts(draft => {draft.push(data)});

        setLoading(prevLoading => !prevLoading);
        navigate("/contacts");
      }
    } catch (err) {
      console.log(err.message);
      setLoading(prevLoading => !prevLoading);
    }
  }

  const confirmDelete = (contactId, contFullName) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div dir='rtl' style={{ backgroundColor: CurrentLine, border: `1px solid ${Purple}`, borderRadius: '1em' }}
            className='p-4'
          >
            <h1 style={{ color: Yellow }}> پاک کردن مخاطب </h1>
            <p style={{ color: Foreground }}>
              از حذف مخاطب {contFullName} مطمعن هستی؟
            </p>
            <button onClick={() => {
              removeContact(contactId);
              onClose();
            }} className='btn mx-2'
              style={{ backgroundColor: Purple }}
            > مطمعن هستم </button>
            <button onClick={onClose} className='btn' style={{ backgroundColor: Comment }}>
              انصراف
            </button>

          </div>
        )
      }
    })
  }

  const removeContact = async (contactId) => {
    const contactsBackup = [...contacts];
    try {
      setContacts(draft => draft.filter(c => c.id !== contactId));
      setFillteredContacts(draft => draft.filter(c => c.id !== contactId));

      const { status } = await deleteContact(contactId);
      toast.error("مخاطب با موفقیت پاک شد", {icon:"💣"})
      if (status !== 200) {
        setContacts(contactsBackup);
        setFillteredContacts(contactsBackup);
      }

    } catch (err) {
      console.log(err.message);
      setContacts(contactsBackup);
      setFillteredContacts(contactsBackup);
    }
  }

  const contactSearch = _.debounce(Query=> {
    if(!Query) return setFillteredContacts([...contacts]);
    
      setFillteredContacts((draft) => draft.filter((c) => c.fullName.toLowerCase().includes(Query.toLowerCase())))
  }, 1000);

  return (
    <ContactContext.Provider value={{
      loading,
      setLoading,
      setContacts,
      setFillteredContacts,
      contacts,
      fillteredContacts,
      groups,
      deleteContact: confirmDelete,
      createContact: createContactForm,
      contactSearch,
    }}>
      <div className="App">
        <ToastContainer rtl={true} position='top-right'theme='colored'/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to="/contacts" />} />
          <Route path='/contacts' element={<Contacts />} />

          <Route path='/contacts/add' element={<AddContact />} />

          <Route path='/contacts/:contactId' element={<ViewContact />} />
          <Route path='/contacts/edit/:contactId' element={<EditContact />} />

        </Routes>
      </div>
    </ContactContext.Provider>
  );
}

export default App;
