import { useState } from 'react'
import './App.css'
import MyNavBar from './components/MyNavBar/MyNavBar'
import MyFooter from './components/Footer/MyFooter'
import Content from './components/Content/Content'

function App() {
  return (
    <>
      <MyNavBar/>
      <Content/>
      <MyFooter/>
    </>
  )
}

export default App