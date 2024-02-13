import { React, useState } from 'react';
import {
	AiFillHome,
	AiOutlineUser,
	AiOutlineMail,
	AiOutlineClose,
	AiOutlineAppstore,
} from 'react-icons/ai';
import { FaFileAlt, FaBriefcase } from 'react-icons/fa';
import { GoFileDirectoryFill } from 'react-icons/go';
import './header.css';
const Header = () => {
	window.addEventListener('scroll', function () {
		const header = this.document.querySelector('.header');
		if (this.scrollY >= 80) header.classList.add('scroll-header');
		else header.classList.remove('scroll-header');
	});

	const [showMenu, setShowMenu] = useState(false);
	const [toggle, setToggle] = useState(1);
	const HandleToggle = (num) => {
		setToggle(num);
	};
	return (
		<header className='header'>
			<nav className='nav container'>
				<a href='index.html' className='nav__logo'>
					Z-Liang
				</a>

				<div data-toggle={showMenu} className='nav__menu'>
					<ul className='nav__list grid'>
						<li className='nav__item'>
							<a
								href='#home'
								className={toggle === 1 ? 'nav__link active-link' : 'nav__link'}
								onClick={() => {
									HandleToggle(1);
								}}
							>
								<AiFillHome className='nav__icon' />
								Home
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#about'
								className={toggle === 2 ? 'nav__link active-link' : 'nav__link'}
								onClick={() => {
									HandleToggle(2);
								}}
							>
								<AiOutlineUser className='nav__icon' />
								About
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#skills'
								className={toggle === 4 ? 'nav__link active-link' : 'nav__link'}
								onClick={() => {
									HandleToggle(4);
								}}
							>
								<FaFileAlt className='nav__icon' />
								Skills
							</a>
						</li>
						<li className='nav__item'>
							<a href='#services' className='nav__link'>
								<FaBriefcase className='nav__icon' />
								Services
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#portfolio'
								className={toggle === 5 ? 'nav__link active-link' : 'nav__link'}
								onClick={() => {
									HandleToggle(5);
								}}
							>
								<GoFileDirectoryFill className='nav__icon' />
								Portfolio
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#contact'
								className={toggle === 3 ? 'nav__link active-link' : 'nav__link'}
								onClick={() => {
									HandleToggle(3);
								}}
							>
								<AiOutlineMail className='nav__icon' />
								Contact
							</a>
						</li>
					</ul>
					<AiOutlineClose className='nav__close' onClick={() => setShowMenu(!showMenu)} />
				</div>
				<div className='nav__toggle' onClick={() => setShowMenu(!showMenu)}>
					<AiOutlineAppstore />
				</div>
			</nav>
		</header>
	);
};

export default Header;
