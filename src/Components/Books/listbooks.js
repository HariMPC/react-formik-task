import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Data/data';
import './listbooks.css'; 
// import BookDetail from './bookdetails';
const BookList = () => {
  const { books, deleteBook} = useContext(MyContext);

  return (
    <div className="book-list-container">
      <h2 className="list-title">Book List</h2>
      <Link to={'/view'} className="book-link"></Link>
      
        {books.map((book) => (
          <ul className="list">
            <li key={book.id}>
            <li>ID: {book.id}</li>
            <li>Title: {book.title}</li>
            <li>ISBN: {book.ISBN_number}</li>
            <li>Publication Date: {book.publication_date}</li>
            <li>Author:
            <ul>
              <li>{book.author.name} </li>
              <li>{book.author.birth_date}</li>
              <li>{book.author.biography}</li>
            </ul>
           </li>
           <div> <button className="delete-button" onClick={() => deleteBook(book.id)}>
              Delete
            </button >
            </div>
          </li>
          </ul>
        ))}
      
    </div>
  );
};

export default BookList;




