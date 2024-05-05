import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../axios/useAxiosSecure";

// read user
const User = () => {
    const loadedUser = useLoaderData();
    const[users, setUsers]= useState(loadedUser);
    const axiosSecure = useAxiosSecure();
    //  const url = 'https://ofline-database-server.vercel.app/newUser'
    const url ='/newUser'
     useEffect(()=>{
      // task 10
      // fetch(url, {credentials: 'include'})
      // .then(res=>res.json())
      // .then(data=>setUsers(data))
      axiosSecure.get(url)
      .then(res=> setUsers(res.data))
     },[axiosSecure])
    
   
    // delete user
    const handleUserDelete=id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://ofline-database-server.vercel.app/newUser/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if (data.deletedCount>0) {
                             Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success"
                      });
                        
                    }
                    // delete user from ui

                    const remaining = users.filter(user=>user._id!==id)
                    setUsers(remaining)
                })
            
            }
          });
        
    }
    return (
        <div>
            <Link to={'/'}><button className="btn">Go back</button></Link>
            <Link to={'/register'}><button className="btn">New User</button></Link>
            <h1>user:{loadedUser.length}</h1>
            <div className="overflow-x-auto p-9">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        
        <th>Email</th>
        
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
      
      {/* row 2 */}
      {
        users.map(user=><tr className="hover" key={user._id}>
        {/* read user */}
        <td>{user.email}</td>
        
        <td className="flex flex-row gap-3">
            {/* update user */}
        <Link to={'/updateUser/:id'}><button className="btn bg-purple-400">Edit</button></Link>
        {/* delete user */}
            <button onClick={()=>handleUserDelete(user._id)} className="btn bg-purple-400">Delete</button>
        </td>
      </tr >
      )
      }
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default User;