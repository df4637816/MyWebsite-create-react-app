import React from 'react';
import './about.css';
import AboutImg from '../../assets/cat.jpg';
import Info from './Info';
const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section__title'>About Me</h2>
			<span className='section__subtitle'>自我介紹</span>

			<div className='about__container container grid'>
				<img
					src={AboutImg}
					style={{ filter: ' grayscale(1) brightness(2)' }}
					alt='aboutme'
					className='about__img'
				/>

				<div className='about__data'>
					<Info />

					<p className='about__description'>
						為前端工程師做準備的小白,從Html css js
						開始自學到使用React框架，到現在還在努力希望能夠成為公司的助力，朝向資深前端工程師發展{' '}
					</p>

					<a download='' href='#11' className='button button--flex'>
						Download CV
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
