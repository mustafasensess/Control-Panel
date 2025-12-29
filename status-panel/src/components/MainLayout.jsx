import {useState} from "react";
import {useServices} from "../contexts/ServiceContext.jsx";
import Sidebar from "./Sidebar.jsx";
import {CircularProgress} from "@mui/material";
import {Outlet} from "react-router-dom"



function MainLayout() {

    const {loading} = useServices();
    const [open, setOpen] = useState(true);

    function handleDrawer() {
        setOpen(s => !s);
    }

    return (
        <div>
            <Sidebar open={open} handleDrawer={handleDrawer}/>


            {loading ? (
                <div style={{display: 'flex', justifyContent: 'center', padding: 50}}>
                    <CircularProgress/>
                </div>
            ) : (
                <Outlet/>
            )}

        </div>
    )
}

export default MainLayout;
