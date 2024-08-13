import React from "react";

class UserClass extends React.Component{
    constructor (props){
        super(props);

     this.state={
        count :0,
        count2: 2,
     }
    }
    render(){
        const{count, count2}= this.state;
        return (
       <div className="user-card">
       <h2>count:{count}</h2>
       {/* <h2>count2: {count2}</h2> */}
       {/* NEVER UPDATE STATE VARIABLES DIRECTLY */}
       <button onClick={() => {
        this.setState({
            count:this.state.count+1,
        })
       }}>Count</button>
            <h2>User name:{this.props.userName}</h2>
            <h3>Location: chandigarh</h3>
            <h4>Contact Info: eashueashu7373@gmail.com</h4>
        </div>
        );
    }
}

export default UserClass;