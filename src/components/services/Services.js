import { React, useState } from 'react';
import './services.css';
import { GrServices } from 'react-icons/gr';
import { FaArrowRight } from 'react-icons/fa6';
import { TiTimesOutline } from 'react-icons/ti';
import { CiCircleCheck } from 'react-icons/ci';

const Services = () => {
	const [toggleState, setToggleState] = useState(0);
	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section className='services section' id='services'>
			<h2 className='section__title'>Services</h2>
			<span className='section__subtitle'>我可以提供給公司的戰力</span>

			<div className='services__container container grid'>
				<div className='services__content'>
					<div>
						<GrServices className='services__icon' />
						<h3 className='services__title'>網頁設計</h3>
					</div>

					<span
						className='services__button'
						onClick={() => {
							toggleTab(1);
						}}
					>
						View More
						<TiTimesOutline className='services__button-icon' />
					</span>
					<div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
						<div className='services__modal-content'>
							<TiTimesOutline
								className='services__modal-close'
								onClick={() => {
									toggleTab(0);
								}}
							/>
							<h3 className='services__modal-title'>網頁設計師</h3>
							<p className='services__modal-description'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, temporibus!
							</p>

							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<CiCircleCheck className='services__modal-icon' />
									<p className='services__modal-info'>Lorem ipsum dolor sit amet consectetur.</p>
								</li>

								<li className='services__modal-service'>
									<CiCircleCheck className='services__modal-icon' />
									<p className='services__modal-info'>Lorem ipsum dolor sit amet.</p>
								</li>

								<li className='services__modal-service'>
									<CiCircleCheck className='services__modal-icon' />
									<p className='services__modal-info'>Lorem ipsum dolor sit amet consectetur.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='services__content'>
					<div>
						<GrServices className='services__icon' />
						<h3 className='services__title'>前端程式開發</h3>
					</div>

					<span
						className='services__button'
						onClick={() => {
							toggleTab(2);
						}}
					>
						View More
						<FaArrowRight className='services__button-icon' />
					</span>
					<div className={toggleState === 2 ? 'services__modal active-modal' : 'services__modal'}>
						<div className='services__modal-content'>
							<TiTimesOutline
								className='services__modal-close'
								onClick={() => {
									toggleTab(0);
								}}
							/>
							<h3 className='services__modal-title'>前端工程師</h3>
							<p className='services__modal-description'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, temporibus!
							</p>

							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<CiCircleCheck className='services__modal-icon' />
									<p className='services__modal-info'>Lorem ipsum dolor sit amet consectetur.</p>
								</li>

								<li className='services__modal-service'>
									<CiCircleCheck className='services__modal-icon' />
									<p className='services__modal-info'>Lorem ipsum dolor sit amet.</p>
								</li>

								<li className='services__modal-service'>
									<CiCircleCheck className='services__modal-icon' />
									<p className='services__modal-info'>Lorem ipsum dolor sit amet consectetur.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='services__content'>
					<div>
						<GrServices className='services__icon' />
						<h3 className='services__title'>網頁程式維護</h3>
					</div>

					<span
						className='services__button'
						onClick={() => {
							toggleTab(3);
						}}
					>
						View More
						<FaArrowRight className='services__button-icon' />
					</span>
					<div className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal'}>
						<div className='services__modal-content'>
							<TiTimesOutline
								className='services__modal-close'
								onClick={() => {
									toggleTab(0);
								}}
							/>
							<h3 className='services__modal-title'>前端工程</h3>
							<p className='services__modal-description'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, temporibus!
							</p>

							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<CiCircleCheck className='services__modal-icon' />
									<p className='services__modal-info'>Lorem ipsum dolor sit amet consectetur.</p>
								</li>

								<li className='services__modal-service'>
									<CiCircleCheck className='services__modal-icon' />
									<p className='services__modal-info'>Lorem ipsum dolor sit amet.</p>
								</li>

								<li className='services__modal-service'>
									<CiCircleCheck className='services__modal-icon' />
									<p className='services__modal-info'>Lorem ipsum dolor sit amet consectetur.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
