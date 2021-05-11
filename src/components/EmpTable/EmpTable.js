import React from "react";
import "./style.css";

// following documentation from randomuser for body lay out
function EmpTable (props) {
  return (
    <div className="container">
        <table className="table striped bordered ">
            <thead className="thead-dark">
                <tr>
                    <th>Photo</th>
                    <th className="text-center"><button variant="outline-dark" name="firstName" onClick={props.sortEmp}>First Name</button></th>
                    <th className="text-center" name="lastName">Last Name</th>
                    <th className="text-center" name="email">E-mail</th>
                    <th className="text-center" name="cell">Cell Phone Number</th>
                    <th className="text-center" name="dob">Age</th>
                </tr>
            </thead>
            <tbody>
            {props.results.map(result => (
                <tr>
                    <td><img alt="employee" src= {result.picture.thumbnail}></img></td>
                    <td className="text-center">{result.name.first}</td>
                    <td className="text-center">{result.name.last}</td>
                    <td className="text-center">{result.email}</td>
                    <td className="text-center">{result.cell}</td>
                    <td className="text-center">{result.dob.age}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}
export default EmpTable;