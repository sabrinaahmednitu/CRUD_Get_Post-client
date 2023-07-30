
const Add = () => {
    const handleuser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user={name,email}
        console.log(name, email);


        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
            });
          
    }
    return (
      <div className="border w-50 mx-auto">
        <div>
          <h1 className='text-center mt-5' >Add some User</h1>
          <form onSubmit={handleuser} className="mx-auto mt-5 w-50 mb-5">
            <input type="text" name="name" placeholder="name" />
            <br />
            <br />
            <input type="email" name="email" placeholder="email" />
            <br />
            <br />
            <button className="btn btn-primary d-block mx-auto">
              Add user
            </button>
          </form>
        </div>
      </div>
    );
};

export default Add;