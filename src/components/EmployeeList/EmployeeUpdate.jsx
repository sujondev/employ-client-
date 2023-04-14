import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EmployeeUpdate = () => {

    const employee = useLoaderData()

    const handleUpdateEmployee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;

        const data = {
            name,
            email,
            number
        }

        fetch(`http://localhost:5000/updateEmployee/${employee._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Employee Updated Successfully');
                    form.reset();
                }
            })

    }



    return (
        <div>
            <div className='flex justify-center justify-items-center'>
                <div className='w-96'>
                    <h1 className='text-2xl font-bold text-center mb-5'>Add Employee</h1>
                    <form onSubmit={handleUpdateEmployee}>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered mb-5 w-full" required />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered mb-5 w-full" required />
                        <input type="number" name='number' required aria-required="true" title="Please enter a valid mobile number" placeholder="Mobile Number" className="input input-bordered mb-5 w-full" />
                        <button className="btn w-full">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default EmployeeUpdate;