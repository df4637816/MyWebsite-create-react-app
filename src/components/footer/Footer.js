import React from 'react';
import { AiOutlineGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import './footer.css';
const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Z-Liang</h1>

				<ul className='footer__list'>
					<li>
						<a href='#about' className='footer__link'>
							About
						</a>
					</li>
					<li>
						<a href='#portfolio' className='footer__link'>
							Portfolio
						</a>
					</li>
					<li>
						<a href='#intro' className='footer__link'>
							My qualifications
						</a>
					</li>
				</ul>

				<div className='footer__social'>
					<a
						href='https://github.com/df4637816'
						className='footer__social-link'
						target='_blank'
						rel='noreferrer'
					>
						<AiOutlineGithub />
					</a>

					<a
						href='https://www.instagram.com/?hl=zh-tw'
						className='footer__social-link'
						target='_blank'
						rel='noreferrer'
					>
						<AiFillInstagram />
					</a>

					<a
						href='https://www.facebook.com/'
						className='footer__social-link'
						target='_blank'
						rel='noreferrer'
					>
						<AiFillFacebook />
					</a>
				</div>

				<span className='footer__copy'>&#169;zhongZliang All rights reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
