import { Link, useLoaderData } from "react-router-dom";


const Update = () => {
    const milk = useLoaderData();
    const{_id, name, description, taste, photo}= milk
    const handleUpdate=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const taste = form.taste.value;
        const photo = form.photo.value;
        const updatedMilk = {name, description,taste,photo}
        console.log(updatedMilk)

        // send data to backend
        fetch(`http://localhost:5000/milk/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedMilk)
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
            <Link to={'/'}><button className="btn">Go back</button></Link>
            <div>
            <h1 className="text-6xl text-purple-500 text-center">Update here</h1>
           
            
            <form onSubmit={handleUpdate} className="flex flex-col justify-center p-20" >
                <h1>Name</h1>
                <input type="text" name="name" defaultValue={name} id="" className="border-2 border-black"/>
                <br />
                <h1>Description</h1>
                <input type="text" name="description" defaultValue={description} id="" className="border-2 border-black" />
                <br />
                <h1>Taste</h1>
                <input type="text" name="taste" defaultValue={taste} id="" className="border-2 border-black" />
                <br />
                <h1>Photo</h1>
                <input type="text" name="photo" defaultValue={photo} id="" className="border-2 border-black" />
                <br />
                <input type="submit" value="Update" className="btn bg-purple-400" />
            </form>
        </div>
        </div>
    );
};

export default Update;