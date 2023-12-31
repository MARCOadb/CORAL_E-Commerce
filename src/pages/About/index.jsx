import Header from "../../components/header";
import Footer from "../../components/footer";

import useBreakpoint from "../../hooks/useBreakPoint";
import "./style.scss";

import bannerImg from "../../assets/pics/About/banner-about.png";
import bannerFullImg from "../../assets/pics/About/banner-about-full.png";
import bagsImg from "../../assets/pics/About/bags.png";
import watchImg from "../../assets/pics/About/watch.png";
import sunglassesImg from "../../assets/pics/About/sunglasses.png";

export default function About() {
  const { phone, desktop } = useBreakpoint();

  return (
    <>
      <Header path="about" />

      <div>
        {desktop ? (
          <>
            <div className="banner ">
              <img src={bannerImg} alt="Banner About" />
              <div className="gradient">
                <div className="title-textbox">
                  <h1 className="title text-high-emphasis">ABOUT</h1>
                  <p className="body-regular text-low-emphasis">Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
            </div>
            <div className="content-max-width">
              <div className="content-container">
                <div className="main-textbox">
                  <h2 className="display-small-he">About</h2>
                  <p className="body-regular text-low-emphasis">
                    Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                    text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                  </p>
                </div>
                <div className="description-rows">
                  <div className="textbox">
                    <h2 className="display-small-he">About</h2>
                    <p className="body-regular text-low-emphasis">
                      Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                      text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </div>
                  <img src={bagsImg} alt="Bags" />
                </div>
                <div className="description-rows">
                  <img src={watchImg} alt="Watch" />
                  <div className="textbox">
                    <h2 className="display-small-he">About</h2>
                    <p className="body-regular text-low-emphasis">
                      Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                      text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </div>
                </div>
                <div className="description-rows">
                  <div className="textbox">
                    <h2 className="display-small-he">About</h2>
                    <p className="body-regular text-low-emphasis">
                      Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                      text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </div>
                  <img src={sunglassesImg} alt="Sunglasses" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="banner">
              <img src={bannerFullImg} alt="Banner" />
              <div className="gradient">
                <div className="title-textbox">
                  <h1 className="title text-bright">ABOUT</h1>
                  <p className="body-regular text-bright">Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
            </div>
            <div className="content-container">
              <div className="main-textbox">
                <h2 className="display-small-he">About</h2>
                <p className="body-regular text-low-emphasis">
                  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text
                  of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                </p>
              </div>
              <div className="description-rows">
                <div className="textbox">
                  <h2 className="display-small-he">About</h2>
                  <p className="body-regular text-low-emphasis">
                    Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                    text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                  </p>
                </div>
                <img src={bagsImg} alt="Bags" />
              </div>
              <div className="description-rows">
                <div className="textbox">
                  <h2 className="display-small-he">About</h2>
                  <p className="body-regular text-low-emphasis">
                    Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                    text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                  </p>
                  <img src={watchImg} alt="Watch" />
                </div>
              </div>
              <div className="description-rows">
                <div className="textbox">
                  <h2 className="display-small-he">About</h2>
                  <p className="body-regular text-low-emphasis">
                    Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                    text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
                  </p>
                </div>
                <img src={sunglassesImg} alt="Sunglasses" />
              </div>
            </div>
          </>
        )}
      </div>

      <Footer spacer={false} />
    </>
  );
}
