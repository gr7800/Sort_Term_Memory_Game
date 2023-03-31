import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from '../Pages/HomePage'
import Result from '../Pages/Result'
import Startgame from '../Pages/Startgame'
import Startpractice from '../Pages/Startpractice'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path= "/startgame" element={<Startgame/>}/>
        <Route path= "/startpractice" element={<Startpractice/>}/>
        <Route path= "/result" element={<Result/>}/>
    </Routes>
  )
}

export default MainRoutes