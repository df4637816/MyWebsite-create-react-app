import React from 'react';
import { FaIdBadge } from 'react-icons/fa';
const Frontend = ({ level }) => {
	return (
		<div className='skills__content'>
			<h3 className='skills__title'>Frontend developer</h3>
			<div className='skills__box'>
				<div className='skills__group'>
					<div className='skills__data'>
						<FaIdBadge className='skill__icon' />

						<div>
							<h3 className='skills__name'>HTML</h3>
							<span
								className='skills__level'
								data-skills='80%'
								style={{
									background: `conic-gradient(var(--body-color) ${level.html} ,rgba(100, 100, 100, 0.8) 40deg)`,
								}}
							></span>
						</div>
					</div>

					<div className='skills__data'>
						<FaIdBadge className='skill__icon' />

						<div>
							<h3 className='skills__name'>CSS&SCSS</h3>
							<span
								className='skills__level'
								data-skills='70%'
								style={{
									background: `conic-gradient(var(--body-color) ${level.css} ,rgba(100, 100, 100, 0.8) 40deg)`,
								}}
							></span>
						</div>
					</div>

					<div className='skills__data'>
						<FaIdBadge className='skill__icon' />

						<div>
							<h3 className='skills__name'>Javascript</h3>
							<span
								className='skills__level'
								data-skills='70%'
								style={{
									background: `conic-gradient(var(--body-color) ${level.javascript} ,rgba(100, 100, 100, 0.8) 40deg)`,
								}}
							></span>
						</div>
					</div>
				</div>

				<div className='skills__group'>
					<div className='skills__data'>
						<FaIdBadge className='skill__icon' />

						<div>
							<h3 className='skills__name'>Git</h3>
							<span
								className='skills__level'
								data-skills='60%'
								style={{
									background: `conic-gradient(var(--body-color) ${level.git} ,rgba(100, 100, 100, 0.8) 40deg)`,
								}}
							></span>
						</div>
					</div>

					<div className='skills__data'>
						<FaIdBadge className='skill__icon' />

						<div>
							<h3 className='skills__name'>Bootstrap</h3>
							<span
								className='skills__level'
								data-skills='60%'
								style={{
									background: `conic-gradient(var(--body-color) ${level.bootstrap} ,rgba(100, 100, 100, 0.8) 40deg)`,
								}}
							></span>
						</div>
					</div>

					<div className='skills__data'>
						<FaIdBadge className='skill__icon' />

						<div>
							<h3 className='skills__name'>React</h3>
							<span
								className='skills__level'
								data-skills='70%'
								style={{
									background: `conic-gradient(var(--body-color) ${level.react} ,rgba(100, 100, 100, 0.8) 40deg)`,
								}}
							></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Frontend;
