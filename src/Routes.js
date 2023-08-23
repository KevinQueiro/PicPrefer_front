import { createBrowserRouter } from "react-router-dom";
import NewPhoto from "./components/NewPhoto/NewPhoto";
import Dashboard from "./components/Dashboard/Dashboard";
import Top from "./components/Top/Top";
import Manage from "./components/Manage/Manage";

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
        path: "/end/:id",
        element: <Top />,
    },
    {
        path: "/manage",
        element: <Manage />,
    },
]);

export default router