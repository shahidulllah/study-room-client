import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "./Root";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CreateAssignment from "../Pages/CreateAssignment";
import PrivateRoute from "../Components/PrivateRoute";
import Assignment from "../Pages/Assignment";
import Update from "../Pages/Update";
import ViewAssignment from "../Pages/ViewAssignment";
import TakeAssignment from "../Pages/TakeAssignment";
import MyAssignment from "../Pages/MyAssignment";
import PendingAssignment from "../Pages/PendingAssignment";
import GiveMarks from "../Pages/GiveMarks";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/createAssignment",
                element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
            },
            {
                path: "/takeAssignment/:id",
                element: <TakeAssignment></TakeAssignment>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/assignments`)
            },
            {
                path: "/assignments",
                element: <Assignment></Assignment>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/assignments`)
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/assignments/${params.id}`)
            },
            {
                path: "/viewAssignment/:id",
                element: <PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/assignments`)
            },
            {
                path: "/myAssignment",
                element: <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>,
            },
            {
                path: "/pendingAssignment",
                element: <PrivateRoute><PendingAssignment></PendingAssignment></PrivateRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/submited`)
            },
            {
                path: "/giveMarks/:id",
                element: <PrivateRoute><GiveMarks></GiveMarks></PrivateRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/submited`)
            },
        ]
    },
]);