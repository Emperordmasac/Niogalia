import React from 'react';

//INTERNAL IMPORTS
import styles from '@/src/styles/styles.module.css';

//--INPORT ICONS
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
      <div className={styles.searchbar_container}>
        <BsSearch onClick={() => {}} className={styles.search_icon} />
        <input
          type="text"
          placeholder="Search Products, Categories and SubCategories"
        />
      </div>
    </div>
  );
};

export default SearchBar;
