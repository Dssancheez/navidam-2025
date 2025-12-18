import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound.tsx";
<<<<<<< HEAD
import Home from "@/pages/Home.tsx";
=======
import Header from "@/Componentes/Header.tsx";
import Postales from "@/pages/Postales";
>>>>>>> 0f83aacf4447967e31e988339b5836852ffa3cc0


export const router = createBrowserRouter([
    {path: "*", element: <PageNotFound/>},
<<<<<<< HEAD
    {path: "/", element: <Home/>}
=======
    {path: "/", element: <Header/>},
    {path: "/postales", element: <Postales/>}
>>>>>>> 0f83aacf4447967e31e988339b5836852ffa3cc0
]);