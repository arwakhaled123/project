
import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import './Course_Details.css';
import { Link } from "react-router-dom";
function Course_Details() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <div className="Parent">
        <div className="child">
          <div className="cont-child">
            <p className="det-new-course">Create New Course</p>
            <Form className="form-group" noValidate validated={validated} onSubmit={handleSubmit}>
              <label htmlFor="Course Name" className="label">Course Name</label>
              <input id="Course Name" type="text" className="form-control inputs" required />

              <label htmlFor="Description" className="label">Description</label>
              <textarea id="Description" type="text" className="form-control inputs input-desc" required />

              <label htmlFor="Skills" className="label">Skills</label>
              <input id="Skills" type="text" className="form-control inputs" required />

              <label htmlFor="User Lever" className="label">User Lever</label>
              <input id="User Lever" type="text" className="form-control inputs" required />

              <label htmlFor="Cover" className="label">Cover</label>
              <input id="Cover" type="file" className="form-control inputs" required />

              <Link className="link-start" to="/publish">
                <button type="submit" className="next"><i id="next">Next</i></button> 
              </Link>
              </Form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Course_Details;