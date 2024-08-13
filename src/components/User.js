import { useState } from "react"; 
const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    return(
        <div className="user-card">
            <h2> count:{count} </h2>
            <h2> count2:{count2} </h2>
            <h2>Name:{props.userName}</h2>
            <h3>Location: {props.location}</h3>
            <h4>Contact Info: eashueashu7373@gmail.com</h4>
        </div>
    )
}

export default User;