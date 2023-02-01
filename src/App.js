// import du lieu + css
import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import Browse from './pages/browse/Browse';
import Search from './pages/search/Search';
import Navbar from './component/Navbar'

function App() {
	return (
		<BrowserRouter>
		<Navbar />
		  <Routes>
			<Route path="/" element={<Browse/>}/>
			<Route path="/search" element={<Search/>}/>
		  </Routes>
		</BrowserRouter>
	  );
}

export default App;
