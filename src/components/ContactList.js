import PropTypes from 'prop-types';

export function ContactList({ contacts, filter, onDeleteContact }) {
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul>
        {filteredContacts.map((contact) => (
            <li key={contact.id}>
                {contact.name}: {contact.number}
                <b> </b>
                <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
            </li>
        ))}
        </ul>
    );
};

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired, 
    filter: PropTypes.string.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
};
