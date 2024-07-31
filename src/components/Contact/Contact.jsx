import styles from '../ContactList/ContactList.module.css';

const Contact = ({ contact, onDeleteContact }) => (
  <li className={styles.listItem}>
    <p>{contact.name}: {contact.number}</p>
    <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </li>
);

export default Contact;
