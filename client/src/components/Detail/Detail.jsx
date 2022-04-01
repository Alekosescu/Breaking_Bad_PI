import React from "react";
import { getDetail, getDeleteDetail } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
    return function () {
      dispatch(getDeleteDetail());
    }
  }, [dispatch, id]);

  const myCharacter = useSelector((state) => state.detail);

  return (
    <div>
      {myCharacter.length > 0 ? (
        <div>
          <h1>I am {myCharacter[0].name}</h1>
          <img
            src={myCharacter[0].img ? myCharacter[0].img : myCharacter[0].image}
            alt=""
            width="500px"
            height="700px"
          />
          <h2>Status: {myCharacter[0].status}</h2>
          <p>Birthdate: {myCharacter[0].birthday}</p>
          <h5>
            Occupations:{" "}
            {!myCharacter[0].createdAtDb
              ? myCharacter[0].occupation + " "
              : myCharacter[0].occupations.map((el) => el.name + " ")}
          </h5>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <Link to="/home">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}
