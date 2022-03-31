import React from "react";

export default function Paginate({
  charactersPerPage,
  allCharacters,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
