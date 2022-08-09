import React from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../store/action/repost";
import "./searchinput.css";

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleSearch = (evt) => {
    dispatch(searchByName(evt.target.value));
  };

  return (
    <div>
      <input
        type="text"
        id="search-navbar"
        className="input is-info search"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
