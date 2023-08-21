import { createBrowserRouter } from "react-router-dom";
import NewPhoto from "./components/NewPhoto/NewPhoto";
import Dashboard from "./components/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/new",
        element: <NewPhoto />,
    },
]);

export default router