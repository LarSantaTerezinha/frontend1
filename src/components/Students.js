import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getStudents } from '../services/StudentService';
import "../App.css";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
   let mounted = true;
   getStudents()
     .then(data => {
       if(mounted) {
         setStudents(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>ID</th>
            <th>Primeiro Nome</th>
            <th>Último Nome</th>
            <th>No. Registro</th>
            <th>Email</th>
            <th>Curso</th>
            </tr>
        </thead>
        <tbody>
            {students.map((stu) =>
            <tr key={stu.id}>
                <td>{stu.studentId}</td>
                <td>{stu.FirstName}</td>
                <td>{stu.LastName}</td>
                <td>{stu.RegistrationNo}</td>
                <td>{stu.Email}</td>
                <td>{stu.Course}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Students;