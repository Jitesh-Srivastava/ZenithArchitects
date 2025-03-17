import { Box } from "@mui/material";
import DesignedLink from "./DesignedLink";

export default function Menu(props) {

    return (
        <Box display={"flex"} gap={'5rem'}>
            {
                props.endPoints.map(({ name, path }, index) => {
                    return (
                        <DesignedLink key={index} name={name} path={path} />
                    )
                })
            }
        </Box>
    )
}
