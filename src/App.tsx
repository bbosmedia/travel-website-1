import React from 'react'
import './App.css'
import Nvabar from './components/Navbar/Nvabar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Services from './pages/Services'
import Products from './pages/Products'

function App() {
	return (
		<div className="App">
			<Nvabar></Nvabar>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/services' element={<Services />} />
				<Route path='/products' element={<Products />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
