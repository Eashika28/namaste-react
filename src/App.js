import React from "react";
import { createRoot } from "react-dom/client"; // Correct import
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => {
  return(
<div className="app">
 <Header/>
 <Body/>
</div>
  );
};



const root = createRoot(document.getElementById("root")); // Correct usage
root.render(<AppLayout/>);
