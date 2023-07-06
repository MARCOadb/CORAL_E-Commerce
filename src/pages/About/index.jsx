import styles from "./styles.scss";
import bannerImg from "../../assets/pics/banner-about.png";
import bagsImg from "../../assets/pics/bags.png";
import watchImg from "../../assets/pics/watch.png";
import sunglassesImg from "../../assets/pics/sunglasses.png";

export default function About() {
  return (
    <>
      <div className="banner">
        <img src={bannerImg} alt="Banner About" />
        <div className="gradient">
          <div className="title-textbox">
            <h1>ABOUT</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
              simply dummy text of the printing.
            </p>
          </div>
        </div>
      </div>
      <div className="content-max-width">
        <div className="content-container">
          <div className="main-textbox">
            <h2>About</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
              simply dummy text of the printing. Lorem Ipsum is simply dummy
              text of the printing. Lorem Ipsum is simply dummy text of the
              printing. Lorem Ipsum is simply dummy text of the printing. Lorem
              Ipsum is simply dummy text of the printing.
            </p>
          </div>
          <div className="description-rows">
            <div className="textbox">
              <h2>About</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
                simply dummy text of the printing. Lorem Ipsum is simply dummy
                text of the printing. Lorem Ipsum is simply dummy text of the
                printing. Lorem Ipsum is simply dummy text of the printing.
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <img src={bagsImg} alt="Bags" />
          </div>
          <div className="description-rows">
            <img src={watchImg} alt="Watch" />
            <div className="textbox">
              <h2>About</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
                simply dummy text of the printing. Lorem Ipsum is simply dummy
                text of the printing. Lorem Ipsum is simply dummy text of the
                printing. Lorem Ipsum is simply dummy text of the printing.
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
          </div>
          <div className="description-rows">
            <div className="textbox">
              <h2>About</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
                simply dummy text of the printing. Lorem Ipsum is simply dummy
                text of the printing. Lorem Ipsum is simply dummy text of the
                printing. Lorem Ipsum is simply dummy text of the printing.
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <img src={sunglassesImg} alt="Sunglasses" />
          </div>
        </div>
      </div>
    </>
  );
}
