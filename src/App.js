import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Component/Login'
import Register from './Component/Register'
import ProtectedRoute from './Services/ProtectedRoute'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path="/" element={<ProtectedRoute/>}>
                        <Route path='/' element={<Home/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>   
        </>
    )
}

export default App