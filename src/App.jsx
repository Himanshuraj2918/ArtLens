import React from 'react'
import Navbar from './components/Navbar'
import ArtCard from './components/ArtCard'

const App = () => {
  return (
      <div className='flex flex-col gap-10 '>
        <Navbar />
        <ArtCard/>
      </div>
  )
}

export default App
