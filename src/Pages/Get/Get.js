import React, { useEffect, useState } from 'react';

const Get = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    
    const handleUserDelete = id => {
        const confirmDelete = window.confirm('are you sure you want to delete?')
        if (confirmDelete) {
            console.log('deleting id with user', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method:'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount === 1) {
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining);
                    // console.log(remaining);
                    }
                })
    }
       
    }
    return (
      <div>
        <h1 className="text-center mt-5 mb-3">
          get the user from where you post user
        </h1>
        {users.map((user) => (
          <div key={user._id} className="border w-50 mx-auto mb-4 text-center">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button className="btn btn-info text-white">Update</button>
            <button onClick={()=>handleUserDelete(user._id)} className="btn btn-danger">
              Delete
            </button>
          </div>
        ))}
      </div>
    );
};

export default Get;