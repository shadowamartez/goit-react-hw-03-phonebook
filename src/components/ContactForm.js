import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
    handleAddContact = (values, { resetForm }, contacts) => {
        const { name, number } = values;

        if (contacts.some((contact) => contact.name === name)) {
        alert(`${name} is already in contacts!`);
        return;
        }

        const newContact = {
        id: nanoid(),
        name,
        number,
        };

        this.props.addContact(newContact);

        resetForm();
    };

    render() {
        const { contacts } = this.props;

        return (
        <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={(values, actions) =>
            this.handleAddContact(values, actions, contacts)
            }
        >
            <Form>
            <label htmlFor="name">Name</label>
            <Field
                type="text"
                id="name"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label htmlFor="number">Number</label>
            <Field
                type="tel"
                id="number"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button type="submit">Add contact</button>
            </Form>
        </Formik>
        );
    }
}; 

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired, 
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
};





