import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { MyContext } from '../Data/data';
import { useNavigate } from 'react-router-dom';
import './addbooks.css';

const AddBook = () => {
  const { addBook } = useContext(MyContext);
  const navigate = useNavigate();

  const initialValues = {
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

  const handleSubmit = (values, { resetForm }) => {
    addBook(values);
    resetForm();
    navigate('/add');
  };

  return (
    <div >
      <div className="book-form-container">
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <div className="form-group">
            <label htmlFor="title">TITLE</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" className="error-message" />

            <label htmlFor=" ISBN_number">ISBN_number</label>
            <Field type="text" name="ISBN_number" />
            <ErrorMessage name="ISBN_number" component="div" className="error-message" />

            <label htmlFor="publication_date">Publication_date</label>
            <Field type="date" name="publication_date" />
            <ErrorMessage name="publication_date" component="div" className="error-message" />

            Name:<Field htmlFor="author.name" type="text" name="author.name" />
            <ErrorMessage name="author.name" component="div" className="error-message" />
            
            Birth Date:<Field htmlFor="author.birth_date" type="text" name="author.birth_date" />
            <ErrorMessage name="author.birth_date" component="div" className="error-message" />

            Biography:<Field htmlFor="author.biography" type="text" name="author.biography" />
            <ErrorMessage name="author.biography" component="div" className="error-message" />
           
            <button type="submit" className="submit-button">
            Submit
            </button>
            </div>
        </Form>
      </Formik>
      </div>
      </div>
  );
};

export default AddBook;






