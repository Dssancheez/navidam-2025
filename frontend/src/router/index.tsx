import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound.tsx";
import Home from "@/pages/Home.tsx";
<<<<<<< HEAD
import Postales from "@/pages/Postales.tsx";


=======
import Header from "@/Componentes/Header.tsx";
import Postales from "@/pages/Postales";
import Personas from "@/pages/Personas";
>>>>>>> 8122258b4347c3fa578a1f955abac350ecd5f206

export const router = createBrowserRouter([
    {path: "*", element: <PageNotFound/>},
    {path: "/", element: <Home/>},
<<<<<<< HEAD
    {path: "/postales", element: <Postales/>}
=======
    {path: "/", element: <Header/>},
    {path: "/postales", element: <Postales/>},
    {path: "/personas", element:<Personas/>},
>>>>>>> 8122258b4347c3fa578a1f955abac350ecd5f206
]);