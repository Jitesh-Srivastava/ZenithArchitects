import { Box, Grid2 } from '@mui/material'

export default function AboutDiscCard(props) {

    const bulletList = [
        'Interior Renovation',
        'New construction',
        'Conceptual design',
        'Building restoration',
        'Construction administration',
        'Computer rendering'
    ]
    const archi = 'Our goal is to create spaces that enhance your community. With expertise in renovations, new construction, construction administration and much more, our architectural team has the skill and know-how to bring your vision to life, all while keeping you on track and on budget.'

    return (
        <Box height={'100%'} width={'100%'} display={'flex'} flexDirection={'column'} alignContent={'center'} justifyContent={'center'} gap={'2rem'}>

            <h1>{props.heading || 'heading'}</h1>

            <p>{props.discription || archi}</p>

            <Grid2 container columns={8}>
                {(props.bulletList || bulletList).map((item, index) => {
                    return (
                        <Grid2 size={4}>
                            <li key={index}>{item}</li>
                        </Grid2>
                    )
                })}
            </Grid2>

        </Box>
    )
}
