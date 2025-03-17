import { Box, Grid2, useMediaQuery, useTheme } from "@mui/material";
import ContactForm from "../Components/ContactForm";
import DesignedLink from "../Components/DesignedLink";

export default function Contact(props) {

    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box bgcolor={'rgb(255, 255, 255)'}>

            <Grid2 container columns={12} minHeight={'600px'} maxHeight={'1200px'} justifySelf={"center"} width={!isMd ? '85vw' : '98vw'}>

                <Grid2 size={isMd ? 12 : 6} padding={isMd ? '30px' : '50px'} display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={isMd ? '70px' : '140px'} >

                    <Box>
                        <h1>Turning Concepts into Iconic Designs!</h1>
                        <h4>Create the Space You've always imagined.</h4>
                    </Box>

                    <Box>
                        <label>Email Address</label>
                        <DesignedLink path='contact' name='afzal@architects.in' />
                    </Box>

                    <Box>
                        <label>Explore Our Work </label>
                        <DesignedLink path='contact' name='instagram' />
                    </Box>

                </Grid2>

                <Grid2 size={isMd ? 12 : 6} padding={isMd ? '30px' : '50px'} alignSelf={"center"}>
                    <ContactForm />
                </Grid2>
            </Grid2>

        </Box >
    )
}
