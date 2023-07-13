import Header from "../../components/header";
import Footer from "../../components/footer";

import useBreakpoint from "../../hooks/useBreakPoint";
import "./style.scss";

import bannerImg from "../../assets/pics/banner-about.png";
import bannerFullImg from "../../assets/pics/banner-about-full.png";
import bagsImg from "../../assets/pics/bags.png";
import watchImg from "../../assets/pics/watch.png";
import sunglassesImg from "../../assets/pics/sunglasses.png";

export default function About() {
  const { phone, desktop } = useBreakpoint();

  return (
    <>
      <Header />

      <div>
        {desktop ? (
          <>
            <div className="banner ">
              <img src={bannerImg} alt="Banner About" />
              <div className="gradient">
                <div className="title-textbox">
<<<<<<< HEAD
                  <h1 className="title text-high-emphasis">ABOUT</h1>
                  <p className="body-regular text-low-emphasis">
                    Lorem Ipsum is simply dummy text of the printing. Lorem
                    Ipsum is simply dummy text of the printing.
                  </p>
=======
                  <h1>ABOUT</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.</p>
>>>>>>> 4d735e18c1a221a462d5638f1996dd578233c5e6
                </div>
              </div>
            </div>
            <div className="content-max-width">
              <div className="content-container">
                <div className="main-textbox">
<<<<<<< HEAD
                  <h2 className="display-small-he">About</h2>
                  <p className="body-regular text-low-emphasis">
                    Lorem Ipsum is simply dummy text of the printing. Lorem
                    Ipsum is simply dummy text of the printing. Lorem Ipsum is
                    simply dummy text of the printing. Lorem Ipsum is simply
                    dummy text of the printing. Lorem Ipsum is simply dummy text
                    of the printing. Lorem Ipsum is simply dummy text of the
                    printing.
=======
                  <h2>About</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                    text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
>>>>>>> 4d735e18c1a221a462d5638f1996dd578233c5e6
                  </p>
                </div>
                <div className="description-rows">
                  <div className="textbox">
<<<<<<< HEAD
                    <h2 className="display-small-he">About</h2>
                    <p className="body-regular text-low-emphasis">
                      Lorem Ipsum is simply dummy text of the printing. Lorem
                      Ipsum is simply dummy text of the printing. Lorem Ipsum is
                      simply dummy text of the printing. Lorem Ipsum is simply
                      dummy text of the printing. Lorem Ipsum is simply dummy
                      text of the printing. Lorem Ipsum is simply dummy text of
                      the printing.
=======
                    <h2>About</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                      text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
>>>>>>> 4d735e18c1a221a462d5638f1996dd578233c5e6
                    </p>
                  </div>
                  <img src={bagsImg} alt="Bags" />
                </div>
                <div className="description-rows">
                  <img src={watchImg} alt="Watch" />
                  <div className="textbox">
<<<<<<< HEAD
                    <h2 className="display-small-he">About</h2>
                    <p className="body-regular text-low-emphasis">
                      Lorem Ipsum is simply dummy text of the printing. Lorem
                      Ipsum is simply dummy text of the printing. Lorem Ipsum is
                      simply dummy text of the printing. Lorem Ipsum is simply
                      dummy text of the printing. Lorem Ipsum is simply dummy
                      text of the printing. Lorem Ipsum is simply dummy text of
                      the printing.
=======
                    <h2>About</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                      text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
>>>>>>> 4d735e18c1a221a462d5638f1996dd578233c5e6
                    </p>
                  </div>
                </div>
                <div className="description-rows">
                  <div className="textbox">
<<<<<<< HEAD
                    <h2 className="display-small-he">About</h2>
                    <p className="body-regular text-low-emphasis">
                      Lorem Ipsum is simply dummy text of the printing. Lorem
                      Ipsum is simply dummy text of the printing. Lorem Ipsum is
                      simply dummy text of the printing. Lorem Ipsum is simply
                      dummy text of the printing. Lorem Ipsum is simply dummy
                      text of the printing. Lorem Ipsum is simply dummy text of
                      the printing.
=======
                    <h2>About</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                      text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
>>>>>>> 4d735e18c1a221a462d5638f1996dd578233c5e6
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
<<<<<<< HEAD
                  <h1 className="title text-bright">ABOUT</h1>
                  <p className="body-regular text-bright">
                    Lorem Ipsum is simply dummy text of the printing. Lorem
                    Ipsum is simply dummy text of the printing.
                  </p>
=======
                  <h1>ABOUT</h1>
                  <p className="title-paragraph">Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.</p>
>>>>>>> 4d735e18c1a221a462d5638f1996dd578233c5e6
                </div>
              </div>
            </div>
            <div className="content-container">
              <div className="main-textbox">
<<<<<<< HEAD
                <h2 className="display-small-he">About</h2>
                <p className="body-regular text-low-emphasis">
                  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum
                  is simply dummy text of the printing. Lorem Ipsum is simply
                  dummy text of the printing. Lorem Ipsum is simply dummy text
                  of the printing. Lorem Ipsum is simply dummy text of the
                  printing. Lorem Ipsum is simply dummy text of the printing.
=======
                <h2>About</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text
                  of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
>>>>>>> 4d735e18c1a221a462d5638f1996dd578233c5e6
                </p>
              </div>
              <div className="description-rows">
                <div className="textbox">
<<<<<<< HEAD
                  <h2 className="display-small-he">About</h2>
                  <p className="body-regular text-low-emphasis">
                    Lorem Ipsum is simply dummy text of the printing. Lorem
                    Ipsum is simply dummy text of the printing. Lorem Ipsum is
                    simply dummy text of the printing. Lorem Ipsum is simply
                    dummy text of the printing. Lorem Ipsum is simply dummy text
                    of the printing. Lorem Ipsum is simply dummy text of the
                    printing.
=======
                  <h2>About</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                    text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
>>>>>>> 4d735e18c1a221a462d5638f1996dd578233c5e6
                  </p>
                </div>
                <img src={bagsImg} alt="Bags" />
              </div>
              <div className="description-rows">
                <div className="textbox">
<<<<<<< HEAD
                  <h2 className="display-small-he">About</h2>
                  <p className="body-regular text-low-emphasis">
                    Lorem Ipsum is simply dummy text of the printing. Lorem
                    Ipsum is simply dummy text of the printing. Lorem Ipsum is
                    simply dummy text of the printing. Lorem Ipsum is simply
                    dummy text of the printing. Lorem Ipsum is simply dummy text
                    of the printing. Lorem Ipsum is simply dummy text of the
                    printing.
=======
                  <h2>About</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                    text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
>>>>>>> 4d735e18c1a221a462d5638f1996dd578233c5e6
                  </p>
                  <img src={watchImg} alt="Watch" />
                </div>
              </div>
              <div className="description-rows">
                <div className="textbox">
<<<<<<< HEAD
                  <h2 className="display-small-he">About</h2>
                  <p className="body-regular text-low-emphasis">
                    Lorem Ipsum is simply dummy text of the printing. Lorem
                    Ipsum is simply dummy text of the printing. Lorem Ipsum is
                    simply dummy text of the printing. Lorem Ipsum is simply
                    dummy text of the printing. Lorem Ipsum is simply dummy text
                    of the printing. Lorem Ipsum is simply dummy text of the
                    printing.
=======
                  <h2>About</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy
                    text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
>>>>>>> 4d735e18c1a221a462d5638f1996dd578233c5e6
                  </p>
                </div>
                <img src={sunglassesImg} alt="Sunglasses" />
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
