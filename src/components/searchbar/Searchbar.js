import React, { useState } from "react";

const Searchbar = (props) => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    console.log("search", searchTerm);
  };

  return (
    <div className="search">
      <div className="search__bar">
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyUp={() => onSearch(value)}
          placeholder="Search for products..."
        />
        <img src="images/search-icon.png" alt="search icon" />
      </div>
      <div className="search__result"></div>
    </div>
  );
};

export default Searchbar;
