import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ContactForm from './Form'

function ContactList(props){ 
    return (
        <div className="row">
            <div className="col-md-8">
                <h2>Listing Contacts - {props.contacts.length}</h2>
<<<<<<< HEAD
                <ul className="list-group">
                    { props.contacts.map(contact => {
                        return <li key={contact._id} className="list-group-item">
                                <Link to={`/contacts/${contact._id}`}>{contact.name}</Link></li>
=======
                <ul>
                    {props.contacts.map(contact => {
                        return <li key={contact._id}><Link to={`/contacts/${contact._id}`}>{contact.name}</Link></li>
>>>>>>> 70328143b2cdb4016131f2a535cd6143fecbc85b
                    })}
                </ul>
            </div>
            <div className="col-md-4">
                <ContactForm />
            </div>
        </div>
       
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(ContactList)