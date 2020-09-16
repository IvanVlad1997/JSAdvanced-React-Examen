 import React from 'react';
 import {  Formik } from 'formik';
 import {Form } from 'react-bootstrap'
 import {connect} from 'react-redux'
 import {changeUsers} from '../../redux/UserList/UserListActions'


 const FormComponent = (props) => (
   <div>
     <h1>Datele utilizatorului:</h1>
     <Formik
       initialValues={{  nume:'', prenume: '', salariu: '', meserie: '' }}
       validate={values => {
         const errors = {};
         if (!values.nume) {
             errors.nume = 'Numele trebuie completat'
         }
        else if (values.nume[0] !== values.nume[0].toUpperCase())
             errors.nume = 'Prima literă trebuie să fie mare'
        
        if (!values.salariu) {
            errors.salariu = 'Salariul trebuie completat'
        }
         
        return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
             const data = new Date()
             const id = props.userReducer.counter
            const valuesPlusDate ={...values, data, id}
            props.changeUsers(valuesPlusDate)
          
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <Form onSubmit={handleSubmit}>
         
            <Form.Group >
                <Form.Label>Nume</Form.Label>
                <Form.Control
                 
                type="text"
                name="nume"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nume} />
            </Form.Group>
            {errors.nume && touched.nume && errors.nume}

            <Form.Group >
                <Form.Label>Prenume</Form.Label>
                <Form.Control                 
                type="text"
                name="prenume"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.prenume} />
            </Form.Group>
            {errors.prenume && touched.prenume && errors.prenume}

            <Form.Group >
                <Form.Label>Meserie</Form.Label>
                <Form.Control                 
                type="text"
                name="meserie"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.meserie} />
            </Form.Group>
            {errors.meserie && touched.meserie && errors.meserie}
     
            <Form.Group >
                <Form.Label>Salariu</Form.Label>
                <Form.Control                 
                type="number"
                name="salariu"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.salariu} />
            </Form.Group>
            {errors.salariu && touched.salariu && errors.salariu}
          
           <button className = "btn btn-primary" type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>


   </div>
 );

 const mapStateToProps = (state) => {
   return {
    userReducer : state.userReducer
   }
 }
 
 export default connect(mapStateToProps, {changeUsers})(FormComponent);