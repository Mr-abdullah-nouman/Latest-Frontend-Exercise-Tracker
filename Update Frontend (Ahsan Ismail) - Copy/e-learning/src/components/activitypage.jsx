import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Form from './Form'

import NAV from './nav';
function ActivityPage() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [dataDisplay,setdata]=React.useState([]);
  
  const [currenData,setCurrentData]=React.useState();
  const GetData = ( ) => {
     
     
    axios
      .get("http://localhost:4000/user/get-excercise", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then(function (response) {
        const {data}=response?.data;
        setdata(data)

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const DeleteData=(id)=>{
    console.log("http://localhost:4000/user/delete-excercise/"+id,"dd")
    axios
      .delete("http://localhost:4000/user/delete-exercise/"+id, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then(function (response) {
        GetData();

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  React.useEffect(()=>{
    GetData()
  },[])
  return (
    <div>
    <NAV/>
      <h1 className='table_head mt-5'>Activity Page</h1>
      <Table striped bordered hover variant="white">
      <thead>
        <tr>
          <th>#ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Type Of Exercise</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Actions</th>
          
        </tr>
      </thead>
      <tbody>
      {dataDisplay.map(x=>  <tr>
          <td>{x._id}</td>
          <td>{x.name}</td>
          <td>{x.description}</td>
          <td>{x.type_of_excercise}</td> 
          <td>{x.duration}</td> 
          <td>{x.date}</td> 
          <td>
          
          <Button onClick={()=>{
            setCurrentData(x);
            handleShow()
          }} variant="primary" type="submit">
            Edit 
          </Button>
          <Button onClick={()=>DeleteData(x._id)} variant="primary" type="submit">
            Delete
          </Button>
          </td>
        </tr>)}
        
      </tbody>
     
    </Table>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currenData?<Form onUpdate={()=>{
            GetData();
          }} updateData={currenData}/>:<></>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </div>
  
  );
}

export default ActivityPage;