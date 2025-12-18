import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound.tsx";
import Postales from "@/pages/Postales";
import Home from "@/pages/Home";


export const router = createBrowserRouter([
    {path: "*", element: <PageNotFound/>},
    {path: "/", element: <Home/>},
    {path: "/postales", element: <Postales/>}
]);