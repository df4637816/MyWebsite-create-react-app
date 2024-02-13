import React from 'react';
import { FaIdBadge } from 'react-icons/fa';
const Backend = ({ level }) => {
	return (
		<div className='skills__content'>
			<h3 className='skills__title'>Backend developer</h3>
			<div className='box'>
				<div className='skills__group'>
					<div className='skills__data'>
						<FaIdBadge className='skill__icon' />

						<div>
							<h3 className='skills__name'>Mongodb</h3>
							<span
								className='skills__level'
								data-skills='30%'
								style={{
									background: `conic-gradient(var(--body-color) ${level.mongo} ,rgba(100, 100, 100, 0.8)40deg)`,
								}}
							></span>
						</div>
					</div>

					<div className='skills__data'>
						<FaIdBadge className='skill__icon' />

						<div>
							<h3 className='skills__name'>Node js</h3>
							<span
								className='skills__level'
								data-skills='40%'
								style={{
									background: `conic-gradient(var(--body-color) ${level.node} ,rgba(100, 100, 100, 0.8) 40deg)`,
								}}
							></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Backend;
