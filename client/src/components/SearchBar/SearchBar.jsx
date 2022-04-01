import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCharacters } from "../../actions";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameCharacters(name));
    setSearch(name);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleInputChange(e)}
        />
        <button type="Submit" onClick={(e) => handleSubmit(e)}>
          Search
        </button>
      </form>
    </div>
  );
}
