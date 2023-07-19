//COMPONENTS
import NavBarMobile from "../../components/navBarMobile";
import Header from "../../components/header";
import Footer from "../../components/footer";

//HOOKS
import useBreakpoint from "../../hooks/useBreakPoint";
import { useState, useEffect, useRef } from "react";

//IMAGES & ICONS
import hero from '../../assets/pics/Category/hero.png'
import PlusSvg from "../../assets/icon/PlusSvg";
import MinusSvg from "../../assets/icon/MinusSvg";

//STYLES
import styles from './style.module.scss'

export default function Category() {
    const { phone, desktop } = useBreakpoint();

    //STATES
    const [openSize, setOpenSize] = useState(false)
    const [heightSize, setHeightSize] = useState(null)

    const [openColor, setOpenColor] = useState(false)
    const [heightColor, setHeightColor] = useState(null)

    const [openBrand, setOpenBrand] = useState(false)
    const [heightBrand, setHeightBrand] = useState(null)

    const [openPrice, setOpenPrice] = useState(false)
    const [heightPrice, setHeightPrice] = useState(null)

    const [openDiscount, setOpenDiscount] = useState(false)
    const [heightDiscount, setHeightDiscount] = useState(null)

    const [openAvaliability, setOpenAvaliability] = useState(false)
    const [heightAvaliability, setHeightAvaliability] = useState(null)

    //REFS
    const sizeRefHeight = useRef()
    const colorRefHeight = useRef()
    const brandRefHeight = useRef()
    const priceRefHeight = useRef()
    const discountRefHeight = useRef()
    const avaliabilityRefHeight = useRef()

    //EFFECT
    useEffect(() => {
        setHeightSize(`${sizeRefHeight.current.scrollHeight}px`)
        setHeightColor(`${colorRefHeight.current.scrollHeight}px`)
        setHeightBrand(`${brandRefHeight.current.scrollHeight}px`)
        setHeightPrice(`${priceRefHeight.current.scrollHeight}px`)
        setHeightDiscount(`${discountRefHeight.current.scrollHeight}px`)
        setHeightAvaliability(`${avaliabilityRefHeight.current.scrollHeight}px`)
    }, [
        sizeRefHeight.current.scrollHeight,
        colorRefHeight.current.scrollHeight,
        brandRefHeight.current.scrollHeight,
        priceRefHeight.current.scrollHeight,
        discountRefHeight.current.scrollHeight,
        avaliabilityRefHeight.current.scrollHeight
    ])

    //HANDLES
    function handleOpenSize() {
        setOpenSize(!openSize)
    }

    function handleOpenColor() {
        setOpenColor(!openColor)
    }

    function handleOpenBrand() {
        setOpenBrand(!openBrand)
    }

    function handleOpenPrice() {
        setOpenPrice(!openPrice)
    }

    function handleOpenDiscount() {
        setOpenDiscount(!openDiscount)
    }

    function handleOpenAvaliability() {
        setOpenAvaliability(!openAvaliability)
    }

    return (
        <>
            <Header />

            <div className={styles.content}>
                <img src={hero} alt="Hero Banner" className={styles.heroBanner} />

                <div className={styles.breadcrump}>
                    componente breadcrump aqui
                </div>

                <h1 className={`text-primary display-medium ${styles.categoryName}`}>Handbags</h1>

                <div className={styles.categoriesContainer}>
                    <div className={`text-dark ${styles.sideMenu}`}>

                        <div className={styles.menuCategory}>
                            <div className={styles.filterTitle}>
                                <span>Size</span>
                                <button onClick={handleOpenSize}>{openSize ? (
                                    <PlusSvg plus={false} />
                                ) : (
                                    <PlusSvg plus={true} />
                                )}</button>
                            </div>
                            <div
                                className={`${styles.filterContent} ${openSize && styles.show}`}
                                ref={sizeRefHeight}
                                style={{ height: openSize ? heightSize : '0px' }}
                            >
                                <span>SIZE AQUI</span>
                            </div>

                        </div>

                        <div className={styles.menuCategory}>
                            <div className={styles.filterTitle}>
                                <span>Color</span>
                                <button onClick={handleOpenColor}>{openColor ? (
                                    <PlusSvg plus={false} />
                                ) : (
                                    <PlusSvg plus={true} />
                                )}</button>
                            </div>
                            <div
                                className={`${styles.filterContent} ${openColor && styles.show}`}
                                ref={colorRefHeight}
                                style={{ height: openColor ? heightColor : '0px' }}
                            >
                                <div className={styles.options}>
                                    <div>
                                        <input type="radio" name="selectedColor" />
                                        <label>teste</label>
                                    </div>

                                    <div>
                                        <input type="radio" name="selectedColor" />
                                        <label>teste</label>
                                    </div>

                                    <div>
                                        <input type="radio" name="selectedColor" />
                                        <label>teste</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.menuCategory}>
                            <div className={styles.filterTitle}>
                                <span>Brand</span>
                                <button onClick={handleOpenBrand}>{openBrand ? (
                                    <PlusSvg plus={false} />
                                ) : (
                                    <PlusSvg plus={true} />
                                )}</button>
                            </div>
                            <div
                                className={`${styles.filterContent} ${openBrand && styles.show}`}
                                ref={brandRefHeight}
                                style={{ height: openBrand ? heightBrand : '0px' }}
                            >
                                <span>BRAND AQUI</span>
                            </div>
                        </div>

                        <div className={styles.menuCategory}>
                            <div className={styles.filterTitle}>
                                <span>Price</span>
                                <button onClick={handleOpenPrice}>{openPrice ? (
                                    <PlusSvg plus={false} />
                                ) : (
                                    <PlusSvg plus={true} />
                                )}</button>
                            </div>
                            <div
                                className={`${styles.filterContent} ${openPrice && styles.show}`}
                                ref={priceRefHeight}
                                style={{ height: openPrice ? heightPrice : '0px' }}
                            >
                                <span>PRICE AQUI</span>
                            </div>
                        </div>

                        <div className={styles.menuCategory}>
                            <div className={styles.filterTitle}>
                                <span>Discount</span>
                                <button onClick={handleOpenDiscount}>{openDiscount ? (
                                    <PlusSvg plus={false} />
                                ) : (
                                    <PlusSvg plus={true} />
                                )}</button>
                            </div>
                            <div
                                className={`${styles.filterContent} ${openDiscount && styles.show}`}
                                ref={discountRefHeight}
                                style={{ height: openDiscount ? heightDiscount : '0px' }}
                            >
                                <span>DISCOUNT AQUI</span>
                            </div>
                        </div>

                        <div className={styles.menuCategory}>
                            <div className={styles.filterTitle}>
                                <span>Avaliability</span>
                                <button onClick={handleOpenAvaliability}>{openAvaliability ? (
                                    <PlusSvg plus={false} />
                                ) : (
                                    <PlusSvg plus={true} />
                                )}</button>
                            </div>
                            <div
                                className={`${styles.filterContent} ${openAvaliability && styles.show}`}
                                ref={avaliabilityRefHeight}
                                style={{ height: openAvaliability ? heightAvaliability : '0px' }}
                            >
                                <span>AVALIABILITY AQUI</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.itemsGrid}>componente grid de items</div>
                </div>

            </div>

            <Footer />
            {phone && <NavBarMobile />}
        </>
    )
}