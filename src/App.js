import React from 'react'
import Login from './pages/Login'
// import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Analytics from './pages/Analytics'
import Register from './pages/Register'
const App = () => {
	return (
		<div>
			<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route path="/register" element={<Register/>} />
				<Route path="/dashboard" element={<Dashboard/>} />
				<Route path="/" element={<Home/>} />
				<Route path="/analytics" element={<Analytics/>} />
				<Route path="/login" element={<Login/>} />
			</Routes>

			</BrowserRouter>
		</div>
	)
}

export default App
