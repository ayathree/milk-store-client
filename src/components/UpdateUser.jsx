import { Link, useLoaderData } from "react-router-dom";


const UpdateUser = () => {
    const userData = useLoaderData();
    const{_id, email}= userData;

    const handleUserUpdate=e=>{
        e.preventDefault();
        const form= e.target;
        const email= form.email.value;
        const newEmail={email};
        console.log(newEmail);
        // send data to backend
        fetch(`https://ofline-database-server.vercel.app/newUser/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newEmail)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.matchedCount>0) {
                alert('updated item successfully')
                
            }
        })



    }
    return (
        <div>
        <Link to={'/user'}><button className="btn">All User</button></Link>
        <div className="hero min-h-screen ">
<div className="hero-content flex-col lg:flex-row-reverse">

<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleUserUpdate} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" name="email" defaultValue={email} className="input input-bordered" required />
    </div>
    
    <div className="form-control mt-6">
      <button className="btn bg-purple-400">Update</button>
    </div>
  </form>
</div>
</div>
</div>
        
    </div>
    );
};

export default UpdateUser;