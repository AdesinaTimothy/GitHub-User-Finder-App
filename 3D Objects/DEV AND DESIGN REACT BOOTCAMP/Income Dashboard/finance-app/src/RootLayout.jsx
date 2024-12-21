import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";


export default function Rootlayout () {
    return (
        <div className="main-page">
            <div className="sidebar-segment">
                <Sidebar />
            </div>

            <div className="main-content-segment">
                <Outlet />
            </div>
        </div>
    )
}