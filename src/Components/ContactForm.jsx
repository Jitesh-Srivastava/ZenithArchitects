import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import axios from 'axios'

export default function ContactForm() {

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const [formData, setFormData] = useState(
    {
      'name': '',
      'email': '',
      'phone': '',
      'requirement': ''
    },
  )
  const [validator, setValidator] = useState({
    'name': false,
    'email': false,
    'phone': false,
    'requirement': false,
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })

    switch (name) {
      // Check name field shouldn't be empty
      case 'name': value.length > 1 ? setValidator({ ...validator, [name]: true }) : setValidator({ ...validator, [name]: false });
        break;
      // Email format validator.
      case 'email': setValidator({ ...validator, [name]: !emailRegex.test(value) });
        break;
      // Phone number digits should be equal to 10.
      case 'phone': (value.length === 10) ? setValidator({ ...validator, [name]: false }) : setValidator({ ...validator, [name]: true });
        break;
      // Requirement message shouldn't be empty.
      case 'requirement': value.length > 4 ? setValidator({ ...validator, [name]: true }) : setValidator({ ...validator, [name]: false });
        break

      default: console.log('Deafult Case hit');
        break;
    }
    console.log(validator);

  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form Submitted');
    alert('Form has been succesfully submitted.')

  }

  return (
    <Box component='form' display={"flex"} flexDirection={"column"} gap={4} onSubmit={(e) => handleSubmit(e)}>

      <TextField variant="standard" required type="text" label='Name' name="name" value={formData.name} onChange={(e) => handleChange(e)} />
      <TextField variant="standard" required type="email" label='Email Address' name="email" helperText={validator.email ? 'Invalid Email Format' : ''} value={formData.email} error={validator.email} onChange={(e) => { handleChange(e) }} />
      <TextField variant="standard" required type="number" label='Phone' name="phone" helperText={validator.phone ? 'Enter valid 10 digit mobile number' : ''} value={formData.phone} error={validator.phone} onChange={(e) => handleChange(e)} />
      <TextField variant="standard" required type="text" label='Requirement' name="requirement" value={formData.requirement} onChange={(e) => handleChange(e)} />
      <Button disabled={(!validator.email && !validator.phone && validator.name && validator.requirement) ? 0 : 1}
        sx={{
          backgroundColor: 'black',
          color: 'white',
          width: '120px',
          '&:hover': { backgroundColor: '#333' }
        }} variant="contained" type="submit" >Submit</Button>
    </Box>
  )
}
// Upto Submit it is working.
// Now upload data to backend and reset form entries.