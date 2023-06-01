import { Component } from "react";
import { ContactForm } from "./ContactFrom/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

  saveContact = (contact) => {
    if (this.state.contacts.find(obj => obj.name.toLowerCase() === contact.name.toLowerCase())) {
      return alert(`${contact.name} is already in contacts.`)
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = (evt) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== evt.target.closest('li').id),
    }))
  }

  filterContacts = (evt) => {
    this.setState({filter: evt.target.value.trim()})
  }

  render() {
    return (
      <div>

        <h1>Phonebook</h1>
        <ContactForm saveContact={this.saveContact} />

        {this.state.contacts.length
          ? <><h2>Contacts</h2>
              <Filter filterValue={this.filterContacts} />
              <ContactList deleteContact={this.deleteContact} contacts={this.state.filter
                ? this.state.contacts.filter(obj => obj.name.toLowerCase().includes(this.state.filter.toLowerCase()))
                : this.state.contacts} />
            </>
          : <p>Add some contacts</p>}
        
      </div>
    );
  };
};
