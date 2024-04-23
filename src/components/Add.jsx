import { Link } from "react-router-dom";

// create
const Add = () => {
    const handleAdd = event=>{
        event.preventDefault();
        const form =event.target;
        const name = form.name.value;
        const description = form.description.value;
        const taste = form.taste.value;
        const photo = form.photo.value;

        const newMilk = {name, description, taste,photo};
        console.log(newMilk)

        fetch('http://localhost:5000/milk',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newMilk)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.insertedId) {
                alert('Milk item added successfully')
                form.reset();
                
            }
        })

    }
    return (
        <div>
            <h1 className="text-6xl text-purple-500 text-center">Add your Milk</h1>
            <Link to={'/'}><button className="mx-4 btn  bg-purple-400">Go Home</button></Link>
            
            <form onSubmit={handleAdd} className="flex flex-col justify-center p-20" >
                <h1>Name</h1>
                <input type="text" name="name" id="" className="border-2 border-black"/>
                <br />
                <h1>Description</h1>
                <input type="text" name="description" id="" className="border-2 border-black" />
                <br />
                <h1>Taste</h1>
                <input type="text" name="taste" id="" className="border-2 border-black" />
                <br />
                <h1>Photo</h1>
                <input type="text" name="photo" id="" className="border-2 border-black" />
                <br />
                <input type="submit" value="Add" className="btn bg-purple-400" />
            </form>
        </div>
    );
};

export default Add;