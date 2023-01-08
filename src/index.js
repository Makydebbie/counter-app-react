import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";

// Pages
import Index from "./pages/Index";
import ReducerCounter from "./pages/ReducerCounter";
import CustomCounter from "./pages/CustomCounter";
import Error from "./pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        errorElement: <Error />
    },
    {
        path: "/custom",
        element: <CustomCounter />,
    },
    {
        path: "/reducer",
        element: <ReducerCounter />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
