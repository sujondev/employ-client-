import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/employees')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, []);

    const handledelet = (id) => {
        fetch(`http://localhost:5000/deleteEmployee/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const remaining = employees.filter(employee => employee._id !== id);
                    setEmployees(remaining);
                }
            })
    }





    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head*/}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>number</th>
                        <th>address</th>
                        <th>gender</th>
                        <th>relationship</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {employees?.map((employee, i) => <tr key={employee._id}>
                        <th>{i + 1}</th>
                        <td>{employee.fistname}</td>
                        <td>{employee.email}</td>
                        <td>{employee.number}</td>
                        <td>{employee.address}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.relationship}</td>
                        <td><Link to={`/update/${employee._id}`}><button className='btn btn-xs'>Update</button></Link></td>
                        <td><button onClick={() => handledelet(employee._id)} className='btn btn-xs'>delete</button></td>
                    </tr>)

                    }
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;