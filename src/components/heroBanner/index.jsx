import './style.scss'

import Slider from 'react-slick';
import { useState, useEffect } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import hero from '../../assets/pics/Home/hero.png'
import heroMobile from '../../assets/pics/Home/mob-only/banner1-mobile.png'
import hero2Mobile from '../../assets/pics/Home/mob-only/banner2-mobile.png'
import arrowIcon from '../../assets/icon/arrow.svg'

import useBreakpoint from '../../hooks/useBreakPoint'

export default function HeroBanner() {
    const { phone, desktop } = useBreakpoint();
    const bannerImages = [heroMobile, hero2Mobile]

    const settings = {
        centerMode: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    className: "center",
                    centerMode: true,
                    centerPadding: "12px",
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="hero-banner">
            {desktop ? (
                <>
                    <img src={hero} alt="Banner Image" className="banner-img" />
                    <button>
                        <img src={arrowIcon} alt="Arrow" />
                        <span>See more</span>
                    </button>
                </>

            ) : (
                <div className={windowSize > 600 ? 'auto-slider-big' : 'auto-slider'}>
                    <Slider {...settings} className='slider'>
                        <div>
                            <img src={bannerImages[0]} />
                        </div>
                        <div>
                            <img src={bannerImages[1]} />
                        </div>
                    </Slider>
                </div>
            )}
        </div >
    )
}