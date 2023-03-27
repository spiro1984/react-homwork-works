import React from "react";
import PropTypes from "prop-types";
import { Input } from "./SearchBarStyles";

const SearchBar = ({ handleSearch, placeholder }) => {
  return <Input placeholder={placeholder} onChange={handleSearch} />;
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default SearchBar;
