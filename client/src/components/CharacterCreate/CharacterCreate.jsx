import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postCharacter, getOccupations } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./CharacterCreate.css";

export default function CharacterCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const occupations = useSelector((state) => state.occupations);

  const [input, setInput] = useState({
    name: "",
    nickname: "",
    birthdate: "",
    image: "",
    status: "",
    occupation: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        status: e.target.value,
      });
    }
  }

  function handleSelect(e) {
    setInput({
      ...input,
      occupation: [...input.occupation, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("input", input);
    dispatch(postCharacter(input));
    alert("Character created successfully");
    setInput({
      name: "",
      nickname: "",
      birthdate: "",
      image: "",
      status: "",
      occupation: [],
    });
    navigate("/home");
  }

  useEffect(() => {
    dispatch(getOccupations());
  }, [dispatch]);

  return (
    <div className="backgroundCreate">
      <Link to="/home">Back</Link>
      <h1>Create your Character!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Nickname:</label>
          <input
            type="text"
            value={input.nickname}
            name="nickname"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Birthday:</label>
          <input
            type="text"
            value={input.birthday}
            name="birthday"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Status: </label>
          <label>
            Alive
            <input
              type="checkbox"
              name="Alive"
              value="Alive"
              onChange={(e) => handleCheck(e)}
            />
          </label>
          <label>
            Deceased
            <input
              type="checkbox"
              name="Deceased"
              value="Deceased"
              onChange={(e) => handleCheck(e)}
            />
          </label>
          <label>
            Unknown
            <input
              type="checkbox"
              name="Unknown"
              value="Unknown"
              onChange={(e) => handleCheck(e)}
            />
          </label>
        </div>
        <select onChange={(e) => handleSelect(e)}>
          {occupations.map((occ, item) => (
            <option key={item} value={occ.name}>{occ.name}</option>
          ))}
        </select>

        <ul>
          <li>{input.occupation.map((el) => el + " ,")}</li>
        </ul>

        <button type="submit">Create Character</button>
      </form>
    </div>
  );
}
