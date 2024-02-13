import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
const Skills = () => {
	return (
		<section className='skills section' id='skills'>
			<h2 className='section__title'>Skills</h2>
			<span className='section__subtitle'>我的技能</span>
			<div className='skills__container container grid'>
				<Frontend
					level={{
						html: '20%',
						css: '30%',
						javascript: '30%',
						git: '40%',
						bootstrap: '40%',
						react: '30%',
					}}
				/>
				<Backend level={{ mongo: '70%', node: '60%' }} />
			</div>
		</section>
	);
};

export default Skills;
