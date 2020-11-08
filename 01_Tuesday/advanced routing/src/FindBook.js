import React, { useState } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

function FindBook(props) {
  const initialBook = { id: "", title: "", info: "" };
  const [book, setBook] = useState(initialBook);

  const handleSubmit = (event) => {
    event.preventDefault();
    const foundBook = props.bookFacade.findBook(book.id);
    setBook({ ...foundBook });
  };

  function handleChange(event) {
    const value = event.target.value;
    const id = event.target.id;
    setBook({
      ...book,
      [id]: value,
    });
  }

  return (
    <div>
      <h2>Find a book!</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <label>
          Search for ID:
          <input type="text" id="id" value={book.id} onChange={handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
      <p>
        Title: {book.title}
        <br></br>Info: {book.info}
        <br></br>ID: {book.id}
      </p>

      <button
        onClick={
          ((e) => e.preventDefault(), props.bookFacade.deleteBook(book.id))
        }
      >
        Delete
      </button>
    </div>
  );
}

export default FindBook;
