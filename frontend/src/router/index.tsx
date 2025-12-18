import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound.tsx";
import Home from "@/pages/Home.tsx";
import Postales from "@/pages/Postales.tsx";
<<<<<<< HEAD


import Header from "@/Componentes/Header.tsx";
import Personas from "@/pages/Personas";
=======
import Header from "@/Componentes/Header.tsx";
import Personas from "@/pages/Personas";

>>>>>>> d01a4fa9805ed17dcf518b246ba0df59435b96d9

export const router = createBrowserRouter([
    {path: "*", element: <PageNotFound/>},
    {path: "/", element: <Home/>},
<<<<<<< HEAD
    {path: "/postales", element: <Postales/>},
    {path: "/", element: <Header/>},
    {path: "/postales", element: <Postales/>},
    {path: "/personas", element:<Personas/>}
=======
    {path: "/postales", element: <Postales/>},
    {path: "/", element: <Header/>},
    {path: "/personas", element:<Personas/>},
>>>>>>> d01a4fa9805ed17dcf518b246ba0df59435b96d9
]);