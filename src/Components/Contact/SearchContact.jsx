import React from 'react';
import {Purple} from '../../helpers/colors';
import {useContext} from 'react';
import {ContactContext} from '../../context/contactContext'

const SearchContact = () => {
  const {contactSearch} = useContext(ContactContext);
  return (
    <div className="col">
    <div className="input-group mx-2 w-75" dir="ltr">
        <span className="input-group-text" id="basic-addon" style={{backgroundColor:Purple}}>
            <i className="fas fa-search"></i>
        </span>
        <input type="text" 
        dir="rtl" 
        onChange={event => contactSearch(event.target.value)}
        className="form-control" 
        placeholder="جستجوی مخاطب" 
        aria-label="search"
        aria-describedby="basic-addon"/>
    </div>
</div>
  )
}

export default SearchContact;
