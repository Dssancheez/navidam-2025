import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound.tsx";
import Home from "@/pages/Home.tsx";
import Postales from "@/pages/Postales.tsx";



export const router = createBrowserRouter([
    {path: "*", element: <PageNotFound/>},
    {path: "/", element: <Home/>},
    {path: "/postales", element: <Postales/>}
]);