// Import Swiper React components
import { React } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Carousel.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousel() {
    return (
        <Swiper
            spaceBetween={40}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide className='custom-carousel'>
                <div className='row'>
                    <h1 className=''>Hello I Am First Tile</h1>
                </div>
                <div className='row h-100 '>
                </div>
            </SwiperSlide>
            <SwiperSlide className='custom-carousel'>Slide 2</SwiperSlide>
            <SwiperSlide className='custom-carousel'>Slide 3</SwiperSlide>
            <SwiperSlide className='custom-carousel'>Slide 4</SwiperSlide>
            <SwiperSlide className='custom-carousel'>Slide 5</SwiperSlide>
            <SwiperSlide className='custom-carousel'>Slide 6</SwiperSlide>
            <SwiperSlide className='custom-carousel'>Slide 7</SwiperSlide>
            <SwiperSlide className='custom-carousel'>Slide 8</SwiperSlide>
            ...
        </Swiper>
    );
}

export default Carousel;