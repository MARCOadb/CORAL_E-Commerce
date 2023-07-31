import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './style.scss';
import {useState, useRef, useEffect} from 'react';
import Vector from "../../assets/pics/Product/Vector.png";
import Vector2 from "../../assets/pics/Product/Vector2.png";
export default function ProductPhotos() {
    const sliderRef = useRef();

    const settings = {
        centerMode: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    className: "center",
                    centerMode: true,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };
    useEffect(() => {
        
        const handleResize = () => {
          setWindowSize(window.innerWidth);
        };
    
       
        window.addEventListener("resize", handleResize);
    
       
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    

    return (
        <div className='slider'>
        <button className='arrow-right' onClick={handleNextClick}>
        <img src={Vector} alt="Arrow" />
       
         </button>
         <button className='arrow-left'onClick={handlePrevClick}>
        <img src={Vector2} alt="Arrow" />
        
         </button>
           <Slider {...settings} ref={sliderRef} className='product-photos'>
            <div className='ex1'>ex1</div>
            <div className='ex2'>ex2</div>
            <div className='ex3'>ex3</div>
            <div className='ex4'>ex4</div>
            <div className='ex5'>ex5</div>
           </Slider>
        </div>
       
    )
}