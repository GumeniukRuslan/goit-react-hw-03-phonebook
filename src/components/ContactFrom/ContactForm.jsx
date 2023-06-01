import { nanoid } from "nanoid";
import { Component } from "react";

export class ContactForm extends Component {

  state = {
    name: '',
    number: ''
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })
  submitForm = (evt) => {
    evt.preventDefault();
    this.props.saveContact({ ...this.state, id: nanoid() })
    evt.target.reset()
  }

  render() {
    return (
    <form onSubmit={this.submitForm}>
      <div>
        <label htmlFor="userName">Name</label>
        <input onChange={this.handleChange} id="userName" type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required />
      </div>
      <div>
        <label htmlFor="userNumber">Number</label>
        <input onChange={this.handleChange} id="userNumber" type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required />
      </div>
      <button type="submit">Add contact</button>
    </form>
  )
  } 
}