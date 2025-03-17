import { Box, Grid2, useMediaQuery, useTheme } from '@mui/material'
import AboutDiscCard from './AboutDiscCard';

export default function AboutCard(props) {

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box bgcolor={props.color} padding={'80px'}>

            <Grid2 container columns={isMd ? 6 : 12} display={'flex'} flexDirection={props.direction || 'row'}>

                <Grid2 size={6} display={'flex'} justifyContent={'center'}>
                    <img src={props.image || "images/archi.jpg"} alt="image" width={'90%'} />
                </Grid2>

                <Grid2 size={6} padding={'20px'}>
                    <AboutDiscCard
                        heading={props.heading}
                        discription={props.discription}
                        bulletList={props.bulletList}
                    />
                </Grid2>
            </Grid2>

        </Box>
    )
}