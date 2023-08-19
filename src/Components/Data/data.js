import {createContext, useState} from "react"

export const MyContext = createContext();

const Data = ({ children }) => {
  const [books,setBooks] = useState(
    [
        {
          id : 1,
          title : "BOOK 1",
          ISBN_number: "4-527610-92-1",
          publication_date: "25/03/2010",
          author: {
            name : 'AUTHOR 1', 
            birth_date:'12/05/1985',
            biography:'author 1 bio'
            }
        },
        {
          id : 2,
          title : "BOOK 2",
          ISBN_number: "5-527610-92-7",
          publication_date: "12/12/2013",
          author: {
            name : 'AUTHOR 2', 
            birth_date:'03/08/1980',
            biography:'author 2 bio'
            }
        },
        {
          id : 3,
          title : "BOOK 3",
          ISBN_number: "6-527610-92-3",
          publication_date: "23/06/2017",
          author: {
            name : 'AUTHOR 3', 
            birth_date:'01/02/1987',
            biography:'author 3 bio'
            }
        }]
);  
    const addBook = (book) => {
        book.id = Date.now();
        setBooks([...books, book]);
      };
    
      const deleteBook = (id) => {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
      };
      const [editing, setEditing] = useState(false);

      const initialBook = { title : " ",
      ISBN_number: " ",
      publication_date: " ",
      author: {
        name : ' ', 
        birth_date:' ',
        biography:' '
        }};
  
      const [currentBook, setCurrentBook] = useState(initialBook);
  
      const editbook = (id, book) => {
      setEditing(true);
      setCurrentBook(book);
    };
  
    const updateBook = (newBook) => {
      setBooks(
        books.map((book) => (book.id === currentBook.id ? newBook : book))
      );
      setCurrentBook(initialBook);
      setEditing(false);
    };
    
      return (
        <div>
          <MyContext.Provider
            value={{ books, addBook, deleteBook,editbook,updateBook, currentBook, editing,setEditing}}>
            {children}
          </MyContext.Provider>
        </div>
      );
}
    export default Data;