import { Box, ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material'

export default function MasonryImageDisplay(props) {

    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ width: { md: '900px', sm: '300px', xs: '200px' }, height: '100%', justifySelf: 'center' }}>
            <ImageList variant='masonry' cols={isMd ? 1 : 3} gap={4}>
                {props.imageList.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

// This component recieves imageList as a prop and outputs the display of the images.
// It is resposive for the different screen sizes.
// It has its own width and height = full, and alings itself at center of the screen.