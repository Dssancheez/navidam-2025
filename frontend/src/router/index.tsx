import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound.tsx";
import Header from "@/Componentes/Header.tsx";
import Postales from "@/pages/Postales";
import Personas from "@/pages/Personas";


export const router = createBrowserRouter([
    {path: "*", element: <PageNotFound/>},
    {path: "/", element: <Header/>},
    {path: "/postales", element: <Postales/>},
    {path: "/personas", element:<Personas/>}
]);