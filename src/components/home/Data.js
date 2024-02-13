import React from 'react';
import { motion } from 'framer-motion';
const Data = () => {
	return (
		<motion.div
			initial='offscreen'
			whileInView='onscreen'
			transition={{ duration: 4 }}
			viewport={{ once: false, amount: 0.8 }}
			className='home__data'
		>
			<motion.h1
				variants={{
					offscreen: { x: 500, rotate: -10 },
					onscreen: {
						x: 0,
						rotate: 0,
						transition: { type: 'spring', bounce: 0.2, duration: 0.9 },
					},
				}}
				className='home__title'
			>
				Zhang <br />
				Z-LianG
				<svg xmlns='http://www.w3.org/2000/svg' className='home__logo ' viewBox='0 0 512 512'>
					<path
						d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z'
						fill='var(--container-color)'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={32}
					/>
				</svg>
			</motion.h1>
			<motion.div
				variants={{
					offscreen: { opacity: 0, scale: 5 },
					onscreen: {
						opacity: 1,
						scale: 1,
						transition: { type: 'spring', duration: 4 },
					},
				}}
				className='home__subtitle'
			>
				Frontend Engerneer
			</motion.div>
			<p className='home__description'>
				我想成為前端工程師， 我非常的積極也很樂意學習， 希望能用我所學為貴公司發揮所能．
			</p>

			<a href='#contact' className='button button--flex'>
				Say Hello
				<svg
					width='25px'
					height='25px'
					viewBox='0 0 24 24'
					className='button__icon'
					fill='var(--container-color)'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z'
						stroke='#000000'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</a>
		</motion.div>
	);
};

export default Data;
