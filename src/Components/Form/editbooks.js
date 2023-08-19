import React, { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { MyContext } from '../Data/data';
import './addbooks.css';

const Editbook = () => {
  const { currentBook, setEditing, updateBook } = useContext(MyContext);
  const navigate = useNavigate();

  const initialValues ={
    title : " ",
    ISBN_number: " ",
    publication_date: " ",
    author: {
      name : ' ', 
      birth_date:' ',
      biography:' '
  }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Title is required';
    }

    if (!values.ISBN_number) {
      errors.ISBN_number = 'ISBN_number is required';
    }

    if (!values.publication_date) {
      errors.publication_date = 'Publication Date is required';
    }

    if (!values.author.name) {
        errors.author.name = 'Author Name is required';
    }

    if (!values.author.birth_date) {
        errors.author.birth_date = 'Publication Date is required';
    }

    if (!values.author.biography) {
        errors.author.biography = 'Publication Date is required';
    }

    return errors;
  };

 
  const onSubmit = async ()=>{
    try {
      setEditing(currentBook.id);
      updateBook(initialValues);
      alert("Success");
    navigate('/edit');
    } catch (error) {
      alert("Fail");
    }
  };

  return (
    <div className="book-form-container">
      <div className='center'>
      <Formik initialValues={initialValues}
        validate={validateForm}
        onSubmit={onSubmit} >
        <Form  className="form">
          <div className="form-group">
          <label htmlFor="title">title</label>
            <Field type="text"  id="title" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <label htmlFor="isbn">ISBN_number</label>
            <Field type="text" name="isbn" />
            <ErrorMessage name="isbn" component="div" className="error-message" />

            <label htmlFor="publicationDate">Publication_date</label>
            <Field type="date" name="publicationDate" />
            <ErrorMessage name="publicationDate" component="div" className="error-message" />

            <label htmlFor="author">Author</label>
            <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div>
            <label htmlFor="birth_date"> Birth Date:</label>
            <Field type="text" name="birth_date" />
            <ErrorMessage name="birth_date" component="div" className="error-message" />
            </div>
            <div>
            <label htmlFor="biography">Biography:</label>
            <Field type="text" name="biography" />
            <ErrorMessage name="biography" component="div" className="error-message" />
            </div>
          <button className="btn btn-primary" type="submit">
            Update book
          </button>

            <button
              className="btn btn-primary"
              type="button"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
        </Form>
      </Formik>
      </div>
    </div>
  );
};

export default Editbook;