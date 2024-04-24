import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

// create user
const Register = () => {
    const {createUser}= useContext(AuthContext)
    const handleAddUser=e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {email,password};
        console.log(newUser)
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            fetch('https://ofline-database-server.vercel.app/newUser',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if (data.insertedId) {
                    alert('added new user successfully')
                    form.reset();
                }
            })

        })
        .catch(error=>{
            console.log(error)
        })

    }  

    return (
        <div>
            <Link to={'/user'}><button className="btn">All User</button></Link>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-purple-500">Register now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleAddUser} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-purple-400">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Register;