import React from 'react';
import './collections.css';
import { Data } from './Data';
import { Swiper, SwiperSlide, Pagination, EffectCube } from './Swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import { useMediaQuery } from '@uidotdev/usehooks';
const Collections = () => {
	const isSmallDevice = useMediaQuery('only screen and (max-width : 360px)');
	return (
		<section id='portfolio' className='collections section container'>
			<h2 className='section__titile'>My Collections</h2>
			<span className='section__subtitle'>Side Project</span>
			{isSmallDevice ? (
				<Swiper
					pagination={true}
					modules={[Pagination]}
					className='collections__container mySwiper'
				>
					{Data.map((data) => {
						return (
							<SwiperSlide className='collections__card' key={data.id}>
								<div className='collection__title'>{data.title}</div>
								<img src={data.Image} alt='spring' />
							</SwiperSlide>
						);
					})}
				</Swiper>
			) : (
				<Swiper
					effect={'cube'}
					grabCursor={true}
					cubeEffect={{
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}}
					pagination={true}
					modules={[EffectCube, Pagination]}
					className='collections__container mySwiper'
				>
					{Data.map((data) => {
						return (
							<SwiperSlide className='collections__card' key={data.id}>
								<div className='collection__title'>{data.title}</div>
								<img src={data.Image} alt='spring' />
							</SwiperSlide>
						);
					})}
				</Swiper>
			)}
		</section>
	);
};

export default Collections;
