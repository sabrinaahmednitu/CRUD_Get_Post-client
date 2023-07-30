import React, { useEffect, useState } from 'react';

const Get = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    
    const handleDelete=()=> {
    
    }
    return (
        <div>
            <h1 className="text-center mt-5 mb-3" >get the user from where you post user</h1>
            {
                users.map(user => <div className='border w-50 mx-auto mb-4 text-center'>
                    <p>{ user.name}</p>
                    <p>{user.email}</p>
                    <button className='btn btn-info text-white' >Update</button>
                    <button onClick={handleDelete} className='btn btn-danger' >Delete</button>
                </div> )
            }
        </div>
    );
};

export default Get;