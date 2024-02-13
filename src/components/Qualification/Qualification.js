import React, { useState } from 'react';
import './qualification.css';
import { MdCastForEducation } from 'react-icons/md';
import { FaBriefcase } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section id='intro' className='qualifiction section'>
			<h2 className='section__title'>Qualifiction</h2>
			<span className='section__subtitle'>我的個人經歷</span>
			<div className='qualification__container container'>
				<div className='qualification__tabs'>
					<div
						className={
							toggleState === 1
								? 'qualification__button  button--flex qualification__active'
								: 'qualification__button  button--flex'
						}
						onClick={() => {
							toggleTab(1);
						}}
					>
						<MdCastForEducation className='qualification__icon' />
						工作經歷
					</div>
					<div
						className={
							toggleState === 2
								? 'qualification__button  button--flex qualification__active'
								: 'qualification__button  button--flex'
						}
						onClick={() => {
							toggleTab(2);
						}}
					>
						<FaBriefcase className='qualification__icon' />
						學歷
					</div>
				</div>

				<div className='qualification__sections'>
					<div
						className={
							toggleState === 1 ? 'qaulification__content-active' : 'qualification__content'
						}
					>
						<div className='qualification__data'>
							<div></div>
							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
							<div>
								<h3 className='qualification__title'>作業員</h3>
								<span className='qualification__subtitle'>Jtouch 介面光電</span>
								<div className='qualification__calender'>
									<SlCalender />
									2014-06 ~ 2014-09
								</div>
							</div>

							{/* <div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div> */}
						</div>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>內外場工作人員</h3>
								<span className='qualification__subtitle'>古城豆花</span>
								<div className='qualification__calender'>
									<SlCalender />
									2014-06 ~ 2014-09
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<div className='qualification__line'></div>
							</div>
						</div>
						<div className='qualification__data'>
							<div></div>
							<div>
								<span className='qualification__rounder'></span>
								<div className='qualification__line'></div>
							</div>
							<div>
								<h3 className='qualification__title'>台積電廠務助理工程師</h3>
								<span className='qualification__subtitle'>河筧工程</span>
								<div className='qualification__calender'>
									<SlCalender />
									2014-06 ~ 2014-09
								</div>
							</div>
						</div>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>資深技術員</h3>
								<span className='qualification__subtitle'>采鈺科技股份有限工程師</span>
								<div className='qualification__calender'>
									<SlCalender />
									2014-06 ~ 2014-09
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<div className='qualification__line'></div>
							</div>
						</div>
					</div>

					<div
						className={
							toggleState === 2 ? 'qaulification__content-active' : 'qualification__content'
						}
					>
						<div className='qualification__data'>
							<div></div>
							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
							<div>
								<h3 className='qualification__title'>國中</h3>
								<span className='qualification__subtitle'>自強國中</span>
								<div className='qualification__calender'>
									<SlCalender />
									2014-06 ~ 2014-09
								</div>
							</div>

							{/* <div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div> */}
						</div>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>資訊系</h3>
								<span className='qualification__subtitle'>私立治平高中</span>
								<div className='qualification__calender'>
									<SlCalender />
									2014-06 ~ 2014-09
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<div className='qualification__line'></div>
							</div>
						</div>
						<div className='qualification__data'>
							<div></div>
							<div>
								<span className='qualification__rounder'></span>
								<div className='qualification__line'></div>
							</div>
							<div>
								<h3 className='qualification__title'>資訊工程系</h3>
								<span className='qualification__subtitle'>私立南台大學</span>
								<div className='qualification__calender'>
									<SlCalender />
									2014-06 ~ 2014-09
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
