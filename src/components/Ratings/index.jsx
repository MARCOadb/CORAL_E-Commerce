import React, { useState, useEffect, useContext } from "react";
import MobileLayout from "../../layouts/mobileLayout";
import PlusSvg from "../../assets/icon/PlusSvg";
import styles from "./style.module.scss";
import StarSvg from "../../assets/icon/StarSvg";
import useBreakpoint from "../../hooks/useBreakPoint";
import DefaultBtn from "../defaultBtn";
import Modal from "../modal";
import { toast } from "react-toastify";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../../contexts/AuthContext";
import { db } from "../../services/firebaseConnection";
import { useLocation } from "react-router-dom";
import getUserById from "../../services/getUserById";
import { BagContext } from "../../contexts/BagContext";
import { reload } from "firebase/auth";
import { render } from "@testing-library/react";

export default function Ratings({ setRatingsOpen, product, setAverageRatingsNumber, itemId }) {
  const { update } = useContext(BagContext);
  const { phone, desktop } = useBreakpoint();
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewStars, setReviewStars] = useState(5);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewDescription, setReviewDescription] = useState("");
  const [reviewImages, setReviewImages] = useState([]);
  const [reviewsList, setReviewsList] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [allReviewImages, setAllReviewImages] = useState([]);
  const [ratingStars, setRatingStars] = useState([]);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const docRef = doc(db, "products", itemId);

  const { signed, user } = useContext(AuthContext);

  function handleStars(i) {
    setReviewStars(i);
  }

  function handleFile(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const reader = new FileReader();

      if (image.type === "image/jpeg" || image.type === "image/png") {
        reader.onloadend = () => {
          setReviewImages([...reviewImages, reader.result]);
        };

        if (image) {
          reader.readAsDataURL(image);
        }
      } else {
        toast.error("The image must be .jpeg or .png type");
      }
    }
  }

  useEffect(() => {
    async function getReviews() {
      var reviewList = [];
      var reviewImagesList = [];
      var reviewStarsList = [];
      await getDoc(docRef)
        .then((snapshot) => {
          snapshot.data().reviews.forEach((review) => {
            reviewList.push(review);
            reviewStarsList.push(review.reviewStars);
            review.reviewImages.map((image) => {
              reviewImagesList.push(image);
            });
          });
          setReviewsList(reviewList);
          setAllReviewImages(reviewImagesList);
          setRatingStars(reviewStarsList);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getReviews();
  }, [loading]);

  useEffect(() => {
    setReviewStars(5);
    setReviewTitle("");
    setReviewDescription("");
    setReviewImages([]);
  }, [reviewModalOpen]);

  async function handleSubmitReview(e) {
    e.preventDefault();
    setLoading(true);
    if (reviewTitle !== "" && reviewDescription !== "") {
      const currentDate = getDate();
      let reviewList = reviewsList;
      let review = {
        reviewStars: reviewStars,
        reviewTitle: reviewTitle,
        reviewDescription: reviewDescription,
        reviewImages: reviewImages,
        user: user.uid,
        reviewDate: currentDate,
      };
      reviewList.push(review);
      await updateDoc(docRef, {
        reviews: reviewsList,
      })
        .then(() => {
          toast.success("Review Saved!");
          setReviewModalOpen(false);
          setReviewsList(reviewList);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    } else {
      toast.error("The Review must have a title and a description");
    }
  }

  function getDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  }

  async function getUserName(id) {
    const user = await getUserById(id);
    const userName = user.firstName + " " + user.lastName;
    return userName;
  }

  const [userNamesFetched, setUserNamesFetched] = useState(false);

  useEffect(() => {
    if (reviewsList.length > 0) {
      const fetchUserNames = async () => {
        const updatedReviews = await Promise.all(
          reviewsList.map(async (review) => {
            const userName = await getUserName(review.user);
            return {
              ...review,
              userName: userName,
            };
          })
        );
        setReviewData(updatedReviews);
        setUserNamesFetched(true);
      };
      fetchUserNames();
    }
  }, [reviewsList]);

  const [averageRating, setAverageRating] = useState();
  const [starsFive, setStarsFive] = useState();
  const [starsFour, setStarsFour] = useState();
  const [starsThree, setStarsThree] = useState();
  const [starsTwo, setStarsTwo] = useState();
  const [starsOne, setStarsOne] = useState();

  useEffect(() => {
    let sum = 0;
    if (ratingStars.length < 1) {
      setAverageRating("0.0");
      setStarsFive(0);
      setStarsFour(0);
      setStarsThree(0);
      setStarsTwo(0);
      setStarsOne(0);
    } else {
      for (let i = 0; i < ratingStars.length; i++) {
        sum += ratingStars[i];
      }
      const media = Math.round((sum / ratingStars.length) * 2) / 2;
      setAverageRating(media % 1 === 0 ? `${media}.0` : media);

      const star5 = ratingStars.filter((number) => number === 5);
      const star4 = ratingStars.filter((number) => number === 4);
      const star3 = ratingStars.filter((number) => number === 3);
      const star2 = ratingStars.filter((number) => number === 2);
      const star1 = ratingStars.filter((number) => number === 1);

      setStarsFive((star5.length * 100) / ratingStars.length);
      setStarsFour((star4.length * 100) / ratingStars.length);
      setStarsThree((star3.length * 100) / ratingStars.length);
      setStarsTwo((star2.length * 100) / ratingStars.length);
      setStarsOne((star1.length * 100) / ratingStars.length);
    }
  }, [ratingStars, reviewsList, loading]);

  function handleReviewModalOpen(bool) {
    if (signed) {
      setReviewModalOpen(bool);
    } else {
      setLoginModalOpen(true);
    }
  }

  useEffect(() => {
    setAverageRatingsNumber(averageRating);
  }, [averageRating, reviewsList, loading]);

  return (
    <>
      {phone ? (
        <>
          {reviewData.length === 0 ? (
            <>
              <MobileLayout
                open
                setOpen={setRatingsOpen}
                icon={"arrow"}
                iconAngle={90}
                iconStroke={"#13101E"}
                buttons={[{ text: "Write a Review", btnIcon: <PlusSvg plus stroke={"#fff"} />, onClick: () => handleReviewModalOpen(true) }]}
              >
                <div className={styles.noTasks}>
                  <div>
                    <h1 className="text-high-emphasis display-small">There are no reviews for this product yet!</h1>
                  </div>
                </div>
                <MobileLayout
                  open={reviewModalOpen}
                  setOpen={setReviewModalOpen}
                  buttons={[{ text: "Submit Review", onClick: handleSubmitReview }]}
                  icon={"cross"}
                  title={"Add Review"}
                  iconAngle={90}
                  iconStroke={"#1B4B66"}
                >
                  <div className={styles.reviewContent}>
                    <form>
                      <div className={styles.reviewRating}>
                        <h1 className="text-high-emphasis title-regular">Product Rating</h1>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <StarSvg fill={`${reviewStars >= 1 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 1 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(1)} />
                          <StarSvg fill={`${reviewStars >= 2 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 2 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(2)} />
                          <StarSvg fill={`${reviewStars >= 3 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 3 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(3)} />
                          <StarSvg fill={`${reviewStars >= 4 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 4 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(4)} />
                          <StarSvg fill={`${reviewStars >= 5 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 5 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(5)} />
                        </div>
                      </div>
                      <label className={styles.titleContainer}>
                        <h1 className="text-high-emphasis title-regular">Review Title</h1>
                        <input className={`${styles.titleInput} title-medium`} type="text" placeholder="Enter Title" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} />
                      </label>
                      <label className={styles.inputContainer}>
                        <h1 className="text-high-emphasis title-regular">Review Description</h1>
                        <textarea
                          name="product-description"
                          placeholder="Enter Description"
                          className="title-medium"
                          value={reviewDescription}
                          onChange={(e) => setReviewDescription(e.target.value)}
                        ></textarea>
                      </label>
                      <div className={styles.photosContainer}>
                        <h1 className="text-high-emphasis title-regular">Upload Product Images</h1>

                        <div className={styles.reviewUserPhotosContainer}>
                          <div className={styles.reviewUserPhotos}>
                            {reviewImages.map((image, index) => (
                              <img src={image} key={index} />
                            ))}
                            <label className={styles.imageInput}>
                              <input type="file" accept="image/*" onChange={handleFile} />
                              <span>
                                <PlusSvg stroke={"#fff"} plus />
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </MobileLayout>
              </MobileLayout>
            </>
          ) : (
            <MobileLayout
              open
              setOpen={setRatingsOpen}
              icon={"arrow"}
              iconAngle={90}
              iconStroke={"#13101E"}
              buttons={[{ text: "Write a Review", btnIcon: <PlusSvg plus stroke={"#fff"} />, onClick: () => handleReviewModalOpen(true) }]}
            >
              <div className={styles.content}>
                <div className={styles.productRating}>
                  <div className={styles.productName}>
                    <h1 className="text-high-emphasis body-medium">{product?.name}</h1>
                    <span className="text-low-emphasis title-medium">{product?.description}</span>
                  </div>
                  <div className={styles.graphicRating}>
                    <div className={styles.ratingNumber}>
                      <span className="text-high-emphasis title-regular">{averageRating}</span>
                      <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={20} />
                      <span className="text-high-emphasis title-regular">Average Rating</span>
                    </div>
                    <div className={styles.ratingsGraphic}>
                      <div className={styles.barContainer}>
                        <span className="text-low-emphasis title-medium">5.0</span>
                        <div>
                          <div style={{ width: starsFive + "%" }} className={styles.bar}></div>
                        </div>
                      </div>
                      <div className={styles.barContainer}>
                        <span className="text-low-emphasis title-medium">4.0</span>
                        <div>
                          <div style={{ width: starsFour + "%" }} className={styles.bar}></div>
                        </div>
                      </div>
                      <div className={styles.barContainer}>
                        <span className="text-low-emphasis title-medium">3.0</span>
                        <div>
                          <div style={{ width: starsThree + "%" }} className={styles.bar}></div>
                        </div>
                      </div>
                      <div className={styles.barContainer}>
                        <span className="text-low-emphasis title-medium">2.0</span>
                        <div>
                          <div style={{ width: starsTwo + "%" }} className={styles.bar}></div>
                        </div>
                      </div>
                      <div className={styles.barContainer}>
                        <span className="text-low-emphasis title-medium">1.0</span>
                        <div>
                          <div style={{ width: starsOne + "%" }} className={styles.bar}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Modal open={loginModalOpen} setOpen={setLoginModalOpen}></Modal>
                  {loginModalOpen && (
                    <>
                      <div className="loginModal">
                        <span className="text-high-emphasis">You are not authenticated!</span>
                        <span className="text-high-emphasis">Please log in to continue</span>
                        <a href="/login">Log In</a>
                      </div>
                    </>
                  )}

                  <MobileLayout
                    open={reviewModalOpen}
                    setOpen={setReviewModalOpen}
                    buttons={[{ text: "Submit Review", onClick: handleSubmitReview }]}
                    icon={"cross"}
                    title={"Add Review"}
                    iconAngle={90}
                    iconStroke={"#1B4B66"}
                  >
                    <div className={styles.reviewContent}>
                      <form>
                        <div className={styles.reviewRating}>
                          <h1 className="text-high-emphasis title-regular">Product Rating</h1>
                          <div style={{ display: "flex", gap: "8px" }}>
                            <StarSvg fill={`${reviewStars >= 1 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 1 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(1)} />
                            <StarSvg fill={`${reviewStars >= 2 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 2 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(2)} />
                            <StarSvg fill={`${reviewStars >= 3 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 3 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(3)} />
                            <StarSvg fill={`${reviewStars >= 4 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 4 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(4)} />
                            <StarSvg fill={`${reviewStars >= 5 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 5 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(5)} />
                          </div>
                        </div>
                        <label className={styles.titleContainer}>
                          <h1 className="text-high-emphasis title-regular">Review Title</h1>
                          <input className={`${styles.titleInput} title-medium`} type="text" placeholder="Enter Title" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} />
                        </label>
                        <label className={styles.inputContainer}>
                          <h1 className="text-high-emphasis title-regular">Review Description</h1>
                          <textarea
                            name="product-description"
                            placeholder="Enter Description"
                            className="title-medium"
                            value={reviewDescription}
                            onChange={(e) => setReviewDescription(e.target.value)}
                          ></textarea>
                        </label>
                        <div className={styles.photosContainer}>
                          <h1 className="text-high-emphasis title-regular">Upload Product Images</h1>

                          <div className={styles.reviewUserPhotosContainer}>
                            <div className={styles.reviewUserPhotos}>
                              {reviewImages.map((image, index) => (
                                <img src={image} key={index} />
                              ))}
                              <label className={styles.imageInput}>
                                <input type="file" accept="image/*" onChange={handleFile} />
                                <span>
                                  <PlusSvg stroke={"#fff"} plus />
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </MobileLayout>

                  <div className={styles.productPhotos}>
                    <h1 className="text-high-emphasis title-regular">Customer Photos</h1>
                    <div className={styles.photoCarousel}>
                      <div>
                        {allReviewImages.map((image, index) => (
                          <img src={image} key={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.ratingsContainer}>
                  {reviewData.map((review) => (
                    <div className={styles.rating}>
                      <div className={styles.ratingTitle}>
                        <div className={styles.titleStar}>
                          <span className="text-high-emphasis">{review.reviewStars}.0</span>
                          <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={30} />
                        </div>
                        <div className={styles.ratingUser}>
                          <span className="text-high-emphasis title-regular">{review.userName}</span>
                          <span className="text-low-emphasis title-medium">{review.reviewDate}</span>
                        </div>
                      </div>
                      <div className={styles.ratingContent}>
                        <span className="text-high-emphasis title-regular">{review.reviewTitle}</span>
                        <span className="text-low-emphasis title-medium" style={{ margin: "4px 0 16px 0" }}>
                          {review.reviewDescription}
                        </span>
                        <div className={styles.ratingPhotos}>
                          <div>
                            {review.reviewImages.map((image, index) => (
                              <img src={image} alt={product?.name} key={index} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MobileLayout>
          )}
        </>
      ) : (
        <>
          {reviewData.length === 0 ? (
            <>
              <div className={styles.noTasks}>
                <h1 className="display-medium-he">There are no reviews for this product yet!</h1>
                <div className={styles.reviewBtn}>
                  <DefaultBtn icon={<PlusSvg plus stroke={"#fff"} />} onClick={() => handleReviewModalOpen(true)}>
                    Write a Review
                  </DefaultBtn>
                </div>
              </div>
              <Modal open={reviewModalOpen} setOpen={setReviewModalOpen}></Modal>
              {reviewModalOpen && (
                <div className={styles.modal}>
                  <div className={styles.reviewContent}>
                    <form onSubmit={handleSubmitReview}>
                      <div className={styles.reviewRating}>
                        <h1 className="text-high-emphasis title-regular">Product Rating</h1>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <StarSvg fill={`${reviewStars >= 1 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 1 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(1)} />
                          <StarSvg fill={`${reviewStars >= 2 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 2 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(2)} />
                          <StarSvg fill={`${reviewStars >= 3 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 3 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(3)} />
                          <StarSvg fill={`${reviewStars >= 4 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 4 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(4)} />
                          <StarSvg fill={`${reviewStars >= 5 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 5 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(5)} />
                        </div>
                      </div>
                      <label className={styles.titleContainer}>
                        <h1 className="text-high-emphasis title-regular">Review Title</h1>
                        <input className={`${styles.titleInput} title-medium`} type="text" placeholder="Enter Title" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} />
                      </label>
                      <label className={styles.inputContainer}>
                        <h1 className="text-high-emphasis title-regular">Review Description</h1>
                        <textarea
                          name="product-description"
                          placeholder="Enter Description"
                          className="title-medium"
                          value={reviewDescription}
                          onChange={(e) => setReviewDescription(e.target.value)}
                        ></textarea>
                      </label>
                      <div className={styles.photosContainer}>
                        <h1 className="text-high-emphasis title-regular">Upload Product Images</h1>

                        <div className={styles.reviewUserPhotosContainer}>
                          <div className={styles.reviewUserPhotos}>
                            {reviewImages.map((image, index) => (
                              <img src={image} key={index} />
                            ))}
                            <label className={styles.imageInput}>
                              <input type="file" accept="image/*" onChange={handleFile} />
                              <span>
                                <PlusSvg stroke={"#fff"} plus />
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className={`${styles.submitBtn} title-regular`}>
                        Submit Review
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {!loading && (
                <div className={styles.content}>
                  <div className={styles.productRating}>
                    <div>
                      <div className={styles.productName}>
                        <h1 className="text-high-emphasis display-medium">{product?.name}</h1>
                        <span className="text-low-emphasis body-medium">{product?.description}</span>
                      </div>
                      <div className={styles.graphicRating}>
                        <div className={styles.ratingNumber}>
                          <span className="text-high-emphasis display-medium">{averageRating}</span>
                          <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={24} />
                          <span className="text-high-emphasis display-small">Average Rating</span>
                        </div>
                        <div className={styles.ratingsGraphic}>
                          <div className={styles.barContainer}>
                            <span className="text-low-emphasis display-small">5.0</span>
                            <div>
                              <div style={{ width: starsFive + "%" }} className={styles.bar}></div>
                            </div>
                          </div>
                          <div className={styles.barContainer}>
                            <span className="text-low-emphasis display-small">4.0</span>
                            <div>
                              <div style={{ width: starsFour + "%" }} className={styles.bar}></div>
                            </div>
                          </div>
                          <div className={styles.barContainer}>
                            <span className="text-low-emphasis display-small">3.0</span>
                            <div>
                              <div style={{ width: starsThree + "%" }} className={styles.bar}></div>
                            </div>
                          </div>
                          <div className={styles.barContainer}>
                            <span className="text-low-emphasis display-small">2.0</span>
                            <div>
                              <div style={{ width: starsTwo + "%" }} className={styles.bar}></div>
                            </div>
                          </div>
                          <div className={styles.barContainer}>
                            <span className="text-low-emphasis display-small">1.0</span>
                            <div>
                              <div style={{ width: starsOne + "%" }} className={styles.bar}></div>
                            </div>
                          </div>
                        </div>
                        {desktop && (
                          <div className={styles.reviewBtn}>
                            <DefaultBtn icon={<PlusSvg plus stroke={"#fff"} />} onClick={() => handleReviewModalOpen(true)}>
                              Write a Review
                            </DefaultBtn>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={styles.productPhotos}>
                      <h1 className="text-high-emphasis display-small">Customer Photos</h1>
                      <div className={styles.photoCarousel}>
                        <div>
                          {allReviewImages.map((image, index) => (
                            <img src={image} key={index} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Modal open={loginModalOpen} setOpen={setLoginModalOpen}></Modal>
                  {loginModalOpen && (
                    <>
                      <div className="loginModal">
                        <span className="text-high-emphasis">You are not authenticated!</span>
                        <span className="text-high-emphasis">Please log in to continue</span>
                        <a href="/login">Log In</a>
                      </div>
                    </>
                  )}
                  <Modal open={reviewModalOpen} setOpen={setReviewModalOpen}></Modal>
                  {reviewModalOpen && (
                    <div className={styles.modal}>
                      <div className={styles.reviewContent}>
                        <form onSubmit={handleSubmitReview}>
                          <div className={styles.reviewRating}>
                            <h1 className="text-high-emphasis title-regular">Product Rating</h1>
                            <div style={{ display: "flex", gap: "8px" }}>
                              <StarSvg fill={`${reviewStars >= 1 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 1 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(1)} />
                              <StarSvg fill={`${reviewStars >= 2 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 2 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(2)} />
                              <StarSvg fill={`${reviewStars >= 3 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 3 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(3)} />
                              <StarSvg fill={`${reviewStars >= 4 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 4 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(4)} />
                              <StarSvg fill={`${reviewStars >= 5 ? "#FF8C4B" : "#f1f1f1"}`} stroke={`${reviewStars >= 5 ? "#FF8C4B" : "#f1f1f1"}`} onClick={() => handleStars(5)} />
                            </div>
                          </div>
                          <label className={styles.titleContainer}>
                            <h1 className="text-high-emphasis title-regular">Review Title</h1>
                            <input className={`${styles.titleInput} title-medium`} type="text" placeholder="Enter Title" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} />
                          </label>
                          <label className={styles.inputContainer}>
                            <h1 className="text-high-emphasis title-regular">Review Description</h1>
                            <textarea
                              name="product-description"
                              placeholder="Enter Description"
                              className="title-medium"
                              value={reviewDescription}
                              onChange={(e) => setReviewDescription(e.target.value)}
                            ></textarea>
                          </label>
                          <div className={styles.photosContainer}>
                            <h1 className="text-high-emphasis title-regular">Upload Product Images</h1>

                            <div className={styles.reviewUserPhotosContainer}>
                              <div className={styles.reviewUserPhotos}>
                                {reviewImages.map((image, index) => (
                                  <img src={image} key={index} />
                                ))}
                                <label className={styles.imageInput}>
                                  <input type="file" accept="image/*" onChange={handleFile} />
                                  <span>
                                    <PlusSvg stroke={"#fff"} plus />
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <button type="submit" className={`${styles.submitBtn} title-regular`}>
                            Submit Review
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                  <div className={styles.separator}></div>
                  <div className={styles.ratingsContainer}>
                    {reviewData.map((review) => (
                      <div className={styles.rating}>
                        <div className={styles.ratingTitle}>
                          <div className={styles.titleStar}>
                            <span className="text-high-emphasis display-medium">{review.reviewStars}.0</span>
                            <StarSvg fill="#FF8C4B" stroke="#FF8C4B" width={30} />
                          </div>
                          <div className={styles.ratingUser}>
                            <span className="text-high-emphasis display-medium">{review.userName}</span>
                            <span className="text-low-emphasis body-medium">{review.reviewDate}</span>
                          </div>
                        </div>
                        <div className={styles.ratingContent}>
                          <span className="text-high-emphasis display-small">{review.reviewTitle}</span>
                          <span className="text-low-emphasis body-medium" style={{ margin: "4px 0 16px 0" }}>
                            {review.reviewDescription}
                          </span>
                          <div className={styles.ratingPhotos}>
                            <div>
                              {review.reviewImages.map((image, index) => (
                                <img src={image} alt={product?.name} key={index} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
