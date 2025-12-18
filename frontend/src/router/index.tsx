import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound.tsx";
import Home from "@/pages/Home.tsx";
import Postales from "@/pages/Postales.tsx";
import Header from "@/Componentes/Header.tsx";
import Personas from "@/pages/Personas";


export const router = createBrowserRouter([
    {path: "*", element: <PageNotFound/>},
    {path: "/", element: <Home/>},
    {path: "/postales", element: <Postales/>},
    {path: "/", element: <Header/>},
    {path: "/personas", element:<Personas/>},
]);