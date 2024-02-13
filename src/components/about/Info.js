import React from 'react';
import { BsFillAwardFill, BsFillBriefcaseFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
const Info = () => {
	return (
		<div className='about__info grid'>
			<div className='about__box'>
				<BsFillAwardFill />
				<h3 className='about__title'>Experience</h3>
				<span className='about__subtitle'>
					No Experience but i have do some side project by myself
				</span>
			</div>
			<div className='about__box'>
				<BiSupport />
				<h3 className='about__title'>Support</h3>
				<span className='about__subtitle'>No support</span>
			</div>
			<div className='about__box'>
				<BsFillBriefcaseFill />
				<h3 className='about__title'>Completed</h3>
				<span className='about__subtitle'>3 + Project</span>
			</div>
		</div>
	);
};

export default Info;
