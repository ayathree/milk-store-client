import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MilkCard = ({milk, milks, setMilks}) => {
    const{_id, name, description, taste, photo}= milk;
    const handleDelete=_id=>{
        console.log(_id)
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
                fetch(`http://localhost:5000/milk/${_id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if (data.deletedCount>0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        //   delete item from ui
                        const remaining= milks.filter(milky=>milky._id!==_id)
                        setMilks(remaining)

                        
                    }
                })
            
            }
          });
    }

    return (
        <div>
            <div className="hero w-full bg-purple-300">
  <div className="hero-content flex-col lg:flex-row">
    <img src={photo} className="max-w-sm rounded-lg h-[200px] w-[250px]" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">{description}</p>
      <p>{taste}</p>
     <div className="flex flex-row gap-6">
        {/* delete */}
     <button onClick={()=>handleDelete(_id)} className="btn ">delete</button>
     {/* update */}
      <Link to={`/update/${_id}`}><button className="btn">update</button></Link>
     </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default MilkCard;