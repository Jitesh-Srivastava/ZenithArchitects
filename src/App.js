import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Contact from './Pages/Contact'
import { imagelist } from './Exports'
import MasonryImageDisplay from './Components/MasonryImageDisplay'
import About from './Pages/About'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='project' element={<MasonryImageDisplay imageList={imagelist} />} />
      </Routes>
    </>
  )
}
