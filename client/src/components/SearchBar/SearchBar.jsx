import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCharacters } from "../../actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();    
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length > 0) {
      dispatch(getNameCharacters(name));
      setName("");
    } else {
      alert("Please enter a name");
    }
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
          value={name}
          onChange={(e) => handleInputChange(e)}
        />
        <button type="Submit" onClick={(e) => handleSubmit(e)}>
          Search
        </button>
      </form>
    </div>
  );
}
