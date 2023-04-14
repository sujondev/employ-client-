import React from 'react';

const AddEmployee = () => {

    const handleAddEmployee = (e) => {
        e.preventDefault();
        const form = e.target;
        const fistname = form.firstname.value;
        const lastname = form.lastname.value;
        const phone = form.number.value;
        const address = form.address.value;
        const gender = form.option.value;
        const relationship = form.relationship.value;


        const data = {
            fistname,
            lastname,
            email,
            phone,
            address,
            gender,
            relationship,
        }

        fetch('http://localhost:5000/addEmployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Employee added successfully');
                }
            })

    }

    return (
        <div className='flex justify-center justify-items-center'>
            <div className='w-96'>
                <h1 className='text-2xl font-bold text-center mb-5'>Add Employee</h1>
                <form onSubmit={handleAddEmployee}>
                    <input type="text" name='firstname' placeholder="Name" className="input input-bordered mb-5 w-full" required />
                    <input type="text" name='email' placeholder="Email" className="input input-bordered mb-5 w-full" required />
                    <input type="number" name='number' required aria-required="true" title="Please enter a valid mobile number" placeholder="Mobile Number" className="input input-bordered mb-5 w-full" />
                    <input type="text" name='address' placeholder="Address" className="input input-bordered mb-5 w-full" required />
                    <select name="option" className="input input-bordered mb-5 w-full">
                        <option disabled selected>Select gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                    </select>
                    <input type="text" name='relationship' placeholder="Relationship" className="input input-bordered mb-5 w-full" required />
                    <button className="btn w-full">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;