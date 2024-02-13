import React from 'react';
import { AiOutlineGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
const Social = () => {
	return (
		<div className='home__social'>
			<a
				href='https://github.com/df4637816'
				className='home__social-icon'
				target='_blank'
				rel='noreferrer'
			>
				<AiOutlineGithub />
			</a>
			<a
				href='https://www.instagram.com/?hl=zh-tw'
				className='home__social-icon'
				target='_blank'
				rel='noreferrer'
			>
				<AiFillInstagram />
			</a>
			<a
				href='https://www.facebook.com/'
				className='home__social-icon'
				target='_blank'
				rel='noreferrer'
			>
				<AiFillFacebook />
			</a>
		</div>
	);
};

export default Social;
