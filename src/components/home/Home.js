import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { motion } from 'framer-motion';
const textVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: '-220%',
		transition: {
			repeat: Infinity,
			repeatType: 'mirror',
			duration: 20,
			ease: 'linear',
		},
	},
};

const Home = () => {
	return (
		<section className='home section relative' id='home'>
			<div className='home__container  container grid'>
				<div className='home__content grid'>
					<Social />

					<div className='home__img'></div>
					<motion.div
						variants={textVariants}
						initial='initial'
						animate='animate'
						className='sliderWrite'
					>
						HELLO !! WELCOME TO MY WEBSITE
					</motion.div>
					<Data />
				</div>

				<ScrollDown />
			</div>
		</section>
	);
};

export default Home;
