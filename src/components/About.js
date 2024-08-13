import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
        <h1>About</h1>
        <h2>This is namaste react series</h2>
        <User userName={"Eashika singla"} location={"chandigarh-funComp"}/>
        <UserClass userName={"Eashika(class)"}/>
        </div>
    );
}

export default About;