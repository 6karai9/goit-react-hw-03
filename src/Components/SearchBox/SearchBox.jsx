import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => (
  <div className={styles.searchBox}>
    <h2>Find contacts by name</h2>
    <input type="text" value={value} onChange={onChange} />
  </div>
);

export default SearchBox;
