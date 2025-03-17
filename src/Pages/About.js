import { Box } from '@mui/material'
import React from 'react'
import AboutCard from '../Test/AboutCard'


export default function About() {
    return (
        <Box>
            <AboutCard image='/images/archi.jpg' heading={'Architecture'} color={'whitesmoke'} />
            <AboutCard image='/images/interior.jpg' heading={'Interior Designing'} direction={'row-reverse'} />
            <AboutCard image='/images/consultation.jpeg' heading={'Consultation'} color={'whitesmoke'} />
        </Box>
    )
}
