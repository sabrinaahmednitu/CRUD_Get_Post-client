import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/user/${id}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);
     const handleUpdateUser = (event) => {
       event.preventDefault();
       const name = event.target.name.value;
       const email = event.target.email.value;
      
       const  updateUser = { name, email };

       fetch(`http://localhost:5000/user/${id}`, {
         method: 'PUT',
         headers: {
           'Content-type': 'application/json',
         },
         body: JSON.stringify(updateUser),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           alert('user added succesfully');
           event.target.reset();
         });
     };
    return (
      <div>
        <h1>i am update : {id} </h1>
        <h1>i am update : {user.name} </h1>
        <form onSubmit={handleUpdateUser} className="mx-auto mt-5 w-50 mb-5">
          <input type="text" name="name" placeholder="name" />
          <br />
          <br />
          <input type="email" name="email" placeholder="email" />
          <br />
          <br />
          <button className="btn btn-primary d-block mx-auto">Add user</button>
        </form>
      </div>
    );
};

export default Update;