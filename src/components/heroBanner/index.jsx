import './style.scss'

import hero from '../../assets/pics/hero.png'
import heroMobile from '../../assets/pics/banner1-mobile.png'
import hero2Mobile from '../../assets/pics/banner2-mobile.png'
import arrowIcon from '../../assets/icon/arrow.svg'

import useBreakpoint from '../../hooks/useBreakPoint'

export default function HeroBanner() {
    const { phone, desktop } = useBreakpoint();

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
                <div className='auto-slider'>
                    <img src={heroMobile} alt="Banner Image" className="banner-img" />
                    <img src={hero2Mobile} alt="Banner Image" className="banner-img" />
                </div>
            )}
        </div>
    )
}