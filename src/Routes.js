import { createBrowserRouter } from "react-router-dom";
import NewPhoto from "./components/NewPhoto/NewPhoto";
import Dashboard from "./components/Dashboard/Dashboard";
import Top from "./components/Top/Top";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/new",
        element: <NewPhoto />,
    },
    {
        path: "/end",
        element: <Top />,
    },
]);

export default router