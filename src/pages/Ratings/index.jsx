import React, { useState } from 'react'
import MobileLayout from '../../layouts/mobileLayout'
import PlusSvg from '../../assets/icon/PlusSvg'
import styles from './style.module.scss'
import StarSvg from "../../assets/icon/StarSvg";
import productImage from '../../assets/pics/Home/bolsa-boujee.png'
import useBreakpoint from '../../hooks/useBreakPoint'
import Header from '../../components/header'
import Footer from '../../components/footer';
import DefaultBtn from '../../components/defaultBtn';
import Modal from '../../components/modal';

export default function Ratings() {
    const { phone, desktop } = useBreakpoint()
    const [reviewModalOpen, setReviewModalOpen] = useState(false)
    return (
        <>
            {phone ? (
                <MobileLayout open icon={'arrow'} iconAngle={90} iconStroke={'#13101E'} buttons={[{ text: 'Write a Review', btnIcon: <PlusSvg plus stroke={'#fff'} />, onClick: () => setReviewModalOpen(true) }]}>
                    <div className={styles.content}>
                        <div className={styles.productRating}>
                            <div className={styles.productName}>
                                <h1 className='text-high-emphasis body-medium'>Boujee</h1>
                                <span className='text-low-emphasis title-medium'>Baker Solid Black Washable Shoulder Bag</span>
                            </div>
                            <div className={styles.graphicRating}>
                                <div className={styles.ratingNumber}>
                                    <span className='text-high-emphasis title-regular'>4.5</span>
                                    <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={20} />
                                    <span className='text-high-emphasis title-regular'>Average Rating</span>
                                </div>
                                <div className={styles.ratingsGraphic}>
                                    <div className={styles.barContainer}>
                                        <span className='text-low-emphasis title-medium'>5.0</span>
                                        <div>
                                            <div style={{ width: '75%' }} className={styles.bar}></div>
                                        </div>
                                    </div>
                                    <div className={styles.barContainer}>
                                        <span className='text-low-emphasis title-medium'>4.0</span>
                                        <div>
                                            <div style={{ width: '50%' }} className={styles.bar}></div>
                                        </div>
                                    </div>
                                    <div className={styles.barContainer}>
                                        <span className='text-low-emphasis title-medium'>3.0</span>
                                        <div>
                                            <div style={{ width: '10%' }} className={styles.bar}></div>
                                        </div>
                                    </div>
                                    <div className={styles.barContainer}>
                                        <span className='text-low-emphasis title-medium'>2.0</span>
                                        <div>
                                            <div style={{ width: '20%' }} className={styles.bar}></div>
                                        </div>
                                    </div>
                                    <div className={styles.barContainer}>
                                        <span className='text-low-emphasis title-medium'>1.0</span>
                                        <div>
                                            <div style={{ width: '45%' }} className={styles.bar}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <MobileLayout open={reviewModalOpen} setOpen={setReviewModalOpen} icon={'arrow'} title={'Add Review'} iconAngle={90} iconStroke={'#13101E'}>
                                <div>oi</div>
                            </MobileLayout>
                            <div className={styles.productPhotos}>
                                <h1 className='text-high-emphasis title-regular'>Customer Photos</h1>
                                <div className={styles.photoCaroulsel}>
                                    <div>
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.ratingsContainer}>
                            <div className={styles.rating}>
                                <div className={styles.ratingTitle}>
                                    <div className={styles.titleStar}>
                                        <span className='text-high-emphasis'>4.0</span>
                                        <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={20} />
                                    </div>
                                    <div className={styles.ratingUser}>
                                        <span className='text-high-emphasis title-regular'>Vincent Lobo</span>
                                        <span className='text-low-emphasis title-medium'>20/03/2021</span>
                                    </div>
                                </div>
                                <div className={styles.ratingContent}>
                                    <span className='text-high-emphasis title-regular'>Must go for the class feel.</span>
                                    <span className='text-low-emphasis title-medium' style={{ margin: '4px 0 16px 0' }}>Totally amazing! I loved the material and the quality. It has a jolly vibe in it which makes me feel happy everytime I put it on.</span>
                                    <div className={styles.ratingPhotos}>
                                        <div>
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rating}>
                                <div className={styles.ratingTitle}>
                                    <div className={styles.titleStar}>
                                        <span className='text-high-emphasis'>4.0</span>
                                        <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={20} />
                                    </div>
                                    <div className={styles.ratingUser}>
                                        <span className='text-high-emphasis title-regular'>Vincent Lobo</span>
                                        <span className='text-low-emphasis title-medium'>20/03/2021</span>
                                    </div>
                                </div>
                                <div className={styles.ratingContent}>
                                    <span className='text-high-emphasis title-regular'>Must go for the class feel.</span>
                                    <span className='text-low-emphasis title-medium' style={{ margin: '4px 0 16px 0' }}>Totally amazing! I loved the material and the quality. It has a jolly vibe in it which makes me feel happy everytime I put it on.</span>
                                    <div className={styles.ratingPhotos}>
                                        <div>
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rating}>
                                <div className={styles.ratingTitle}>
                                    <div className={styles.titleStar}>
                                        <span className='text-high-emphasis'>4.0</span>
                                        <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={20} />
                                    </div>
                                    <div className={styles.ratingUser}>
                                        <span className='text-high-emphasis title-regular'>Vincent Lobo</span>
                                        <span className='text-low-emphasis title-medium'>20/03/2021</span>
                                    </div>
                                </div>
                                <div className={styles.ratingContent}>
                                    <span className='text-high-emphasis title-regular'>Must go for the class feel.</span>
                                    <span className='text-low-emphasis title-medium' style={{ margin: '4px 0 16px 0' }}>Totally amazing! I loved the material and the quality. It has a jolly vibe in it which makes me feel happy everytime I put it on.</span>
                                    <div className={styles.ratingPhotos}>
                                        <div>
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MobileLayout>
            ) : (
                <>
                    <Header />
                    <div className={styles.content}>
                        <div className={styles.productRating}>
                            <div>
                                <div className={styles.productName}>
                                    <h1 className='text-high-emphasis display-medium'>Boujee</h1>
                                    <span className='text-low-emphasis body-medium'>Baker Solid Black Washable Shoulder Bag</span>
                                </div>
                                <div className={styles.graphicRating}>
                                    <div className={styles.ratingNumber}>
                                        <span className='text-high-emphasis display-medium'>4.5</span>
                                        <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={24} />
                                        <span className='text-high-emphasis display-small'>Average Rating</span>
                                    </div>
                                    <div className={styles.ratingsGraphic}>
                                        <div className={styles.barContainer}>
                                            <span className='text-low-emphasis display-small'>5.0</span>
                                            <div>
                                                <div style={{ width: '75%' }} className={styles.bar}></div>
                                            </div>
                                        </div>
                                        <div className={styles.barContainer}>
                                            <span className='text-low-emphasis display-small'>4.0</span>
                                            <div>
                                                <div style={{ width: '50%' }} className={styles.bar}></div>
                                            </div>
                                        </div>
                                        <div className={styles.barContainer}>
                                            <span className='text-low-emphasis display-small'>3.0</span>
                                            <div>
                                                <div style={{ width: '10%' }} className={styles.bar}></div>
                                            </div>
                                        </div>
                                        <div className={styles.barContainer}>
                                            <span className='text-low-emphasis display-small'>2.0</span>
                                            <div>
                                                <div style={{ width: '20%' }} className={styles.bar}></div>
                                            </div>
                                        </div>
                                        <div className={styles.barContainer}>
                                            <span className='text-low-emphasis display-small'>1.0</span>
                                            <div>
                                                <div style={{ width: '45%' }} className={styles.bar}></div>
                                            </div>
                                        </div>
                                    </div>
                                    {desktop && (
                                        <div className={styles.reviewBtn}>
                                            <DefaultBtn icon={<PlusSvg plus stroke={'#fff'} />} onClick={() => setReviewModalOpen(true)}>Write a Review</DefaultBtn>
                                        </div>
                                    )}

                                    <Modal open={reviewModalOpen} setOpen={setReviewModalOpen}></Modal>
                                    {reviewModalOpen && (
                                        <div className={styles.modal}>
                                            <span>oi</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles.productPhotos}>
                                <h1 className='text-high-emphasis display-medium'>Customer Photos</h1>
                                <div className={styles.photoCaroulsel}>
                                    <div>
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                        <img src={productImage} alt="Product Name" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.ratingsContainer}>
                            <div className={styles.rating}>
                                <div className={styles.ratingTitle}>
                                    <div className={styles.titleStar}>
                                        <span className='text-high-emphasis display-medium'>4.0</span>
                                        <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={30} />
                                    </div>
                                    <div className={styles.ratingUser}>
                                        <span className='text-high-emphasis display-medium'>Vincent Lobo</span>
                                        <span className='text-low-emphasis body-medium'>20/03/2021</span>
                                    </div>
                                </div>
                                <div className={styles.ratingContent}>
                                    <span className='text-high-emphasis display-small'>Must go for the class feel.</span>
                                    <span className='text-low-emphasis body-medium' style={{ margin: '4px 0 16px 0' }}>Totally amazing! I loved the material and the quality. It has a jolly vibe in it which makes me feel happy everytime I put it on.</span>
                                    <div className={styles.ratingPhotos}>
                                        <div>
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.rating}>
                                <div className={styles.ratingTitle}>
                                    <div className={styles.titleStar}>
                                        <span className='text-high-emphasis display-medium'>4.0</span>
                                        <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={30} />
                                    </div>
                                    <div className={styles.ratingUser}>
                                        <span className='text-high-emphasis display-medium'>Vincent Lobo</span>
                                        <span className='text-low-emphasis body-medium'>20/03/2021</span>
                                    </div>
                                </div>
                                <div className={styles.ratingContent}>
                                    <span className='text-high-emphasis display-small'>Must go for the class feel.</span>
                                    <span className='text-low-emphasis body-medium' style={{ margin: '4px 0 16px 0' }}>Totally amazing! I loved the material and the quality. It has a jolly vibe in it which makes me feel happy everytime I put it on.</span>
                                    <div className={styles.ratingPhotos}>
                                        <div>
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.rating}>
                                <div className={styles.ratingTitle}>
                                    <div className={styles.titleStar}>
                                        <span className='text-high-emphasis display-medium'>4.0</span>
                                        <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={30} />
                                    </div>
                                    <div className={styles.ratingUser}>
                                        <span className='text-high-emphasis display-medium'>Vincent Lobo</span>
                                        <span className='text-low-emphasis body-medium'>20/03/2021</span>
                                    </div>
                                </div>
                                <div className={styles.ratingContent}>
                                    <span className='text-high-emphasis display-small'>Must go for the class feel.</span>
                                    <span className='text-low-emphasis body-medium' style={{ margin: '4px 0 16px 0' }}>Totally amazing! I loved the material and the quality. It has a jolly vibe in it which makes me feel happy everytime I put it on.</span>
                                    <div className={styles.ratingPhotos}>
                                        <div>
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                            <img src={productImage} alt="Product Name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    )
}
