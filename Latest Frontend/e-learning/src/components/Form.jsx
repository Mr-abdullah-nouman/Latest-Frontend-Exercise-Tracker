import axios from "axios";
import React from "react";
import { Col, Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import NAV from './nav';
function DataForm({updateData,onUpdate}) {
  const [message,setmessage]=React.useState("");
  const submitExercise = (e) => {
    e.preventDefault();
    
    if(updateData)
    {
      const data = {
        _id: e.target[0].value,
        name: e.target[1].value,
        description: e.target[2].value,
        duration: e.target[3].value,
        type_of_excercise: e.target[4].value,
      };
      axios
      .put("http://localhost:4000/user/edit-exercise", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then(function (response) {
        setmessage("Data updated successfully");
        onUpdate();
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else
    {
     
      const data = {
         
        name: e.target[1].value,
        description: e.target[2].value,
        duration: e.target[3].value,
        type_of_excercise: e.target[4].value,
      };
      axios
        .post("http://localhost:4000/user/save-excercise", data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        })
        .then(function (response) {
          setmessage("Data inserted successfully");
  
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <div>
    <NAV/>
       <div className={updateData?"m-0":""} id={"form"}>
     <Col lg={8} className="m-auto">
        <Form onSubmit={submitExercise}>
        <Form.Control defaultValue={updateData?updateData?._id:""} 
        hidden={true}
        type="text" placeholder="Enter name" />
          <Form.Group className="mb-3">
            <Form.Label className="color-w">Name</Form.Label>
            <Form.Control defaultValue={updateData?updateData?.name:""} type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="color-w">Description</Form.Label>
            <Form.Control defaultValue={updateData?updateData?.description:""} type="text" placeholder="Enter Description" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="color-w">Duration</Form.Label>
            <Form.Control defaultValue={updateData?updateData?.duration:""} type="number" placeholder="Enter Duration" />
          </Form.Group>
          <Form.Label className="color-w">Type of excercise</Form.Label>

          <Form.Select defaultValue={updateData?updateData?.type_of_excercise:""} aria-label="Default select example" className="mb-3">
            <option>Select exercise</option>
            {["run", "bicycle ride", "swim", "walk", "hike"].map(
              (item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              }
            )}
          </Form.Select>
          {
            <h5 style={{color:"white"}}>
                {message}
            </h5>
          }
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </div> 
    </div>
   
  );
}

export default DataForm;
