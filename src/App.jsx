import React from 'react'
import Nav from './component/nav'
import Landing from './component/Landing'
import Slide from './component/Slide'
import Cards from './component/Cards'
import Foot from './component/Foot'

function App() {
  return (
    <>
    <div className='w-screen min-h-screen bg-zinc-900 text-white overflow-hidden'>
      <Nav/>
      <Landing/>
      <Slide/>
      <Cards/>
      <Foot/>
    </div>

    </>
  )
}
export default App
