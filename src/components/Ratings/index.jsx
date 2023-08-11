import React, { useState, useEffect, useContext } from 'react'
import MobileLayout from '../../layouts/mobileLayout'
import PlusSvg from '../../assets/icon/PlusSvg'
import styles from './style.module.scss'
import StarSvg from "../../assets/icon/StarSvg";
import productImage from '../../assets/pics/Home/bolsa-boujee.png'
import useBreakpoint from '../../hooks/useBreakPoint'
import Header from '../header'
import Footer from '../footer';
import DefaultBtn from '../defaultBtn';
import Modal from '../modal';
import { toast } from 'react-toastify';
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { AuthContext } from '../../contexts/AuthContext';
import { db } from '../../services/firebaseConnection';
import { useLocation } from 'react-router-dom';
import getUserById from '../../services/getUserById';

export default function Ratings({ setRatingsOpen, product }) {
    const { phone, desktop } = useBreakpoint()
    const [reviewModalOpen, setReviewModalOpen] = useState(false)
    const [reviewStars, setReviewStars] = useState(5)
    const [reviewTitle, setReviewTitle] = useState('')
    const [reviewDescription, setReviewDescription] = useState('')
    const [reviewImages, setReviewImages] = useState([])
    const [reviewsList, setReviewsList] = useState([])

    const location = useLocation()
    const itemId = location.state.itemId
    const docRef = doc(db, 'products', itemId)

    const { user } = useContext(AuthContext)

    function handleStars(i) {
        setReviewStars(i)
    }

    function handleFile(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0]
            const imageUrl = URL.createObjectURL(image)

            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                setReviewImages([...reviewImages, imageUrl])
            } else {
                toast.error('The image must be .jpeg or .png type')
            }
        }
    }

    useEffect(() => {
        async function getReviews() {
            // var reviewList = []
            await getDoc(docRef)
                .then((snapshot) => {
                    snapshot.data().reviews.map((review) => {
                        setReviewsList([...reviewsList, review])
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        getReviews()
    }, [])

    useEffect(() => {
        setReviewStars(5)
        setReviewTitle('')
        setReviewDescription('')
        setReviewImages([])
    }, [reviewModalOpen])

    async function handleSubmitReview(e) {
        e.preventDefault()
        if (reviewTitle !== '' && reviewDescription !== '') {
            const currentDate = getDate();
            let reviewList = reviewsList
            let review = {
                reviewStars: reviewStars,
                reviewTitle: reviewTitle,
                reviewDescription: reviewDescription,
                reviewImages: reviewImages,
                user: user.uid,
                reviewDate: currentDate
            }
            reviewList.push(review)
            await updateDoc(docRef, {
                reviews: reviewsList
            })
                .then(() => {
                    toast.success('Review Saved!')
                    setReviewModalOpen(false)
                    setReviewsList(reviewList)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            toast.error('The Review must have a title and a description')
        }
    }

    function getDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
        const year = today.getFullYear();

        return `${day}/${month}/${year}`;
    }

    async function getUserName(id) {
        const user = await getUserById(id)
        return user.name
    }

    const reviewArr = []
    useEffect(() => {
        for (let i = 0; i < reviewsList?.length; i++) {
            reviewArr.push(reviewsList[i])
        }
    }, [reviewsList])

    return (
        <>
            {phone ? (
                <MobileLayout open setOpen={setRatingsOpen} icon={'arrow'} iconAngle={90} iconStroke={'#13101E'} buttons={[{ text: 'Write a Review', btnIcon: <PlusSvg plus stroke={'#fff'} />, onClick: () => setReviewModalOpen(true) }]}>
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

                            <MobileLayout open={reviewModalOpen} setOpen={setReviewModalOpen} buttons={[{ text: 'Submit Review', onClick: handleSubmitReview }]} icon={'cross'} title={'Add Review'} iconAngle={90} iconStroke={'#1B4B66'}>
                                <div className={styles.reviewContent}>
                                    <form>
                                        <div className={styles.reviewRating}>
                                            <h1 className='text-high-emphasis title-regular'>Product Rating</h1>
                                            <div style={{ display: "flex", gap: '8px' }}>
                                                <StarSvg fill={`${reviewStars >= 1 ? '#FF8C4B' : '#f1f1f1'}`} stroke={`${reviewStars >= 1 ? '#FF8C4B' : '#f1f1f1'}`} onClick={() => handleStars(1)} />
                                                <StarSvg fill={`${reviewStars >= 2 ? '#FF8C4B' : '#f1f1f1'}`} stroke={`${reviewStars >= 2 ? '#FF8C4B' : '#f1f1f1'}`} onClick={() => handleStars(2)} />
                                                <StarSvg fill={`${reviewStars >= 3 ? '#FF8C4B' : '#f1f1f1'}`} stroke={`${reviewStars >= 3 ? '#FF8C4B' : '#f1f1f1'}`} onClick={() => handleStars(3)} />
                                                <StarSvg fill={`${reviewStars >= 4 ? '#FF8C4B' : '#f1f1f1'}`} stroke={`${reviewStars >= 4 ? '#FF8C4B' : '#f1f1f1'}`} onClick={() => handleStars(4)} />
                                                <StarSvg fill={`${reviewStars >= 5 ? '#FF8C4B' : '#f1f1f1'}`} stroke={`${reviewStars >= 5 ? '#FF8C4B' : '#f1f1f1'}`} onClick={() => handleStars(5)} />
                                            </div>
                                        </div>
                                        <label className={styles.titleContainer}>
                                            <h1 className='text-high-emphasis title-regular'>Review Title</h1>
                                            <input className={`${styles.titleInput} title-medium`} type="text" placeholder="Enter Title" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} />
                                        </label>
                                        <label className={styles.inputContainer}>
                                            <h1 className='text-high-emphasis title-regular'>Review Description</h1>
                                            <textarea name="product-description" placeholder='Enter Description' className='title-medium' value={reviewDescription} onChange={(e) => setReviewDescription(e.target.value)}></textarea>
                                        </label>
                                        <div className={styles.photosContainer}>
                                            <h1 className='text-high-emphasis title-regular'>Upload Product Images</h1>

                                            <div className={styles.reviewUserPhotosContainer}>
                                                <div className={styles.reviewUserPhotos}>
                                                    {reviewImages.map((image, index) => (
                                                        <img src={image} key={index} />
                                                    ))}
                                                    <label className={styles.imageInput}>
                                                        <input type="file" accept='image/*' onChange={handleFile} />
                                                        <span><PlusSvg stroke={'#fff'} plus /></span>
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
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
                        </div>
                    </div>
                </MobileLayout>
            ) : (
                <>
                    <div className={styles.content}>
                        <div className={styles.productRating}>
                            <div>
                                <div className={styles.productName}>
                                    <h1 className='text-high-emphasis display-medium'>{product?.name}</h1>
                                    <span className='text-low-emphasis body-medium'>{product?.description}</span>
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
                                </div>
                            </div>
                            <div className={styles.productPhotos}>
                                <h1 className='text-high-emphasis display-small'>Customer Photos</h1>
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
                        <Modal open={reviewModalOpen} setOpen={setReviewModalOpen}></Modal>
                        {reviewModalOpen && (
                            <div className={styles.modal}>
                                <div className={styles.reviewContent}>
                                    <form onSubmit={handleSubmitReview}>
                                        <div className={styles.reviewRating}>
                                            <h1 className='text-high-emphasis title-regular'>Product Rating</h1>
                                            <div style={{ display: "flex", gap: '8px' }}>
                                                <StarSvg fill={`${reviewStars >= 1 ? '#FF8C4B' : '#f1f1f1'}`} stroke={`${reviewStars >= 1 ? '#FF8C4B' : '#f1f1f1'}`} onClick={() => handleStars(1)} />
                                                <StarSvg fill={`${reviewStars >= 2 ? '#FF8C4B' : '#f1f1f1'}`} stroke={`${reviewStars >= 2 ? '#FF8C4B' : '#f1f1f1'}`} onClick={() => handleStars(2)} />
                                                <StarSvg fill={`${reviewStars >= 3 ? '#FF8C4B' : '#f1f1f1'}`} stroke={`${reviewStars >= 3 ? '#FF8C4B' : '#f1f1f1'}`} onClick={() => handleStars(3)} />
                                                <StarSvg fill={`${reviewStars >= 4 ? '#FF8C4B' : '#f1f1f1'}`} stroke={`${reviewStars >= 4 ? '#FF8C4B' : '#f1f1f1'}`} onClick={() => handleStars(4)} />
                                                <StarSvg fill={`${reviewStars >= 5 ? '#FF8C4B' : '#f1f1f1'}`} stroke={`${reviewStars >= 5 ? '#FF8C4B' : '#f1f1f1'}`} onClick={() => handleStars(5)} />
                                            </div>
                                        </div>
                                        <label className={styles.titleContainer}>
                                            <h1 className='text-high-emphasis title-regular'>Review Title</h1>
                                            <input className={`${styles.titleInput} title-medium`} type="text" placeholder="Enter Title" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} />
                                        </label>
                                        <label className={styles.inputContainer}>
                                            <h1 className='text-high-emphasis title-regular'>Review Description</h1>
                                            <textarea name="product-description" placeholder='Enter Description' className='title-medium' value={reviewDescription} onChange={(e) => setReviewDescription(e.target.value)}></textarea>
                                        </label>
                                        <div className={styles.photosContainer}>
                                            <h1 className='text-high-emphasis title-regular'>Upload Product Images</h1>

                                            <div className={styles.reviewUserPhotosContainer}>
                                                <div className={styles.reviewUserPhotos}>
                                                    {reviewImages.map((image, index) => (
                                                        <img src={image} key={index} />
                                                    ))}
                                                    <label className={styles.imageInput}>
                                                        <input type="file" accept='image/*' onChange={handleFile} />
                                                        <span><PlusSvg stroke={'#fff'} plus /></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <button type='submit' className={`${styles.submitBtn} title-regular`}>Submit Review</button>
                                    </form>
                                </div>
                            </div>
                        )}
                        <div className={styles.separator}></div>
                        <div className={styles.ratingsContainer}>
                            {console.log(reviewsList)}
                            {/* {reviewsList.map((review) => (
                                <div className={styles.rating}>
                                    <div className={styles.ratingTitle}>
                                        <div className={styles.titleStar}>
                                            <span className='text-high-emphasis display-medium'>{review.reviewStars}.0</span>
                                            <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={30} />
                                        </div>
                                        <div className={styles.ratingUser}>
                                            <span className='text-high-emphasis display-medium'>{getUserName(review.user)}</span>
                                            <span className='text-low-emphasis body-medium'>{review.reviewDate}</span>
                                        </div>
                                    </div>
                                    <div className={styles.ratingContent}>
                                        <span className='text-high-emphasis display-small'>{review.reviewTitle}</span>
                                        <span className='text-low-emphasis body-medium' style={{ margin: '4px 0 16px 0' }}>{review.reviewDescription}</span>
                                        <div className={styles.ratingPhotos}>
                                            <div>
                                                {review.reviewImages.map((image) => (
                                                    <img src={image} alt={product?.name} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))} */}
                        </div>
                    </div>

                </>
            )}
        </>
    )
}