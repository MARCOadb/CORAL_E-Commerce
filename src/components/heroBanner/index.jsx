import './style.scss'

import { useState, useEffect } from 'react'

import hero from '../../assets/pics/Home/hero.png'
import heroMobile from '../../assets/pics/Home/banner1-mobile.png'
import hero2Mobile from '../../assets/pics/Home/banner2-mobile.png'
import arrowIcon from '../../assets/icon/arrow.svg'

import useBreakpoint from '../../hooks/useBreakPoint'

export default function HeroBanner({ order }) {
    const { phone, desktop } = useBreakpoint();
    const [currentSlide, setCurrentSlide] = useState(0)

    const bannerImages = [heroMobile, hero2Mobile]

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
                <>
                    {order == 1 ? (
                        <div className='auto-slider'>
                            <img src={bannerImages[1]} alt="Banner Image" className="banner-img" />
                            <img src={bannerImages[0]} alt="Banner Image" className="banner-img" />
                            <img src={bannerImages[1]} alt="Banner Image" className="banner-img" />
                            <img src={bannerImages[0]} alt="Banner Image" className="banner-img" />
                            <img src={bannerImages[1]} alt="Banner Image" className="banner-img" />
                        </div>
                    ) : (
                        <div className='auto-slider'>
                            <img src={bannerImages[0]} alt="Banner Image" className="banner-img" />
                            <img src={bannerImages[1]} alt="Banner Image" className="banner-img" />
                            <img src={bannerImages[0]} alt="Banner Image" className="banner-img" />
                            <img src={bannerImages[1]} alt="Banner Image" className="banner-img" />
                            <img src={bannerImages[0]} alt="Banner Image" className="banner-img" />
                        </div>
                    )}
                </>
            )
            }
        </div >
    )
}