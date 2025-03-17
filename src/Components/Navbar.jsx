import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import Menu from './Menu';
import DrawerMenu from './DrawerMenu'
import { endPoints } from '../Exports'

export default function Navbar(props) {

    const theme = useTheme()
    // check whether screen size is below or equal to tab screen(medium screen size). It returns bool.
    const isMd = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box display={'flex'} justifyContent={`${isMd ? 'space-between' : 'space-evenly'}`} alignItems={'center'} padding={'10px 24px'} width={'auto'} height={'80px'} bgcolor={'whitesmoke'}>

            {/* This Block display Title and Logo compatible with phone and Web */}
            <Box display={'flex'} alignItems={'center'} gap={'25px'}>
                <img style={{ zIndex: 100 }} src="/logo.png" alt="logo" width={isMd ? '65vw' : '85vw'} height={isMd ? '65vh' : '85vh'} />
                <Typography variant={isMd ? 'h7' : 'h5'} zIndex={100} component={'h6'}>{props.title || 'Zenith Architects & Designers'}</Typography>
            </Box>

            <Box>
                {isMd ? <DrawerMenu endPoints={endPoints} /> : <Menu endPoints={endPoints} />}
            </Box>

        </Box>
    )
}
