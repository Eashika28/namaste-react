import React from "react";
import { createRoot } from "react-dom/client"; // Correct import
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";


const AppLayout = () => {
  return(
<div className="app">
 <Header/>
 <Body/>
</div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>
  }
])


const root = createRoot(document.getElementById("root")); // Correct usage
//root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);
