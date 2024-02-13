import React from 'react';
import '../src/App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/Qualification/Qualification';
import Collections from './components/collections/Collections';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
function App() {
	return (
		<>
			<Header />

			<main className='main'>
				<Home />
				<About />
				<Skills />
				<Services />
				<Qualification />
				<Collections />
				<Contact />
			</main>
			<Footer />
			<Scrollup />
		</>
	);
}

export default App;
