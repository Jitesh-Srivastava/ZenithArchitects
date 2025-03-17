import { NavLink } from "react-router-dom";
import '../Css/UnderlineMotion.css'
import '../Css/DrawerMenu.css'
import { Box } from "@mui/material";


export default function DesignedLink(props) {

    return (
        <Box>
            <NavLink to={props.path || '/'} className='double-underline-new move-right' color="inherit"> {props.name || 'name = "name"'} </NavLink>
        </Box>
    )
}
