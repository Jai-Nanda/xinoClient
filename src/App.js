import React from 'react'
import Login from './pages/Login'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Jai from './pages/Jai'
import Navbar from './components/Navbar'
import Analytics from './pages/Analytics'
const App = () => {
	return (
		<div>
			<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route path="/auth" element={<Auth/>} />
				<Route path="/dashboard" element={<Dashboard/>} />
				<Route path="/" element={<Jai/>} />
				<Route path="/analytics" element={<Analytics/>} />
			</Routes>

			</BrowserRouter>
		</div>
	)
}

export default App
