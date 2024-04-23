import { Link } from "react-router-dom";


const Update = () => {
    return (
        <div>
            <Link to={'/'}><button className="btn">Go back</button></Link>
            <h2>update</h2>
        </div>
    );
};

export default Update;