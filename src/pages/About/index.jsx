import styles from "./styles.scss";

export default function About() {
  return (
    <>
      <div className="banner">
        <img src="./assets/pics/banner-about.png" />
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
      <div className="content-container">
        <div className="main-textbox">
          <h2>About</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing. Lorem Ipsum is simply dummy text
            of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing.
          </p>
        </div>
        <div className="description-rows">
          <div className="textbox">
            <h2>About</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
              simply dummy text of the printing. Lorem Ipsum is simply dummy
              text of the printing. Lorem Ipsum is simply dummy text of the
              printing. Lorem Ipsum is simply dummy text of the printing. Lorem
              Ipsum is simply dummy text of the printing.
            </p>
          </div>
          <img src="./assets/pics/bags.png" />
        </div>
        <div className="description-rows">
          <img src="./assets/pics/watch.png" />
          <div className="textbox">
            <h2>About</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
              simply dummy text of the printing. Lorem Ipsum is simply dummy
              text of the printing. Lorem Ipsum is simply dummy text of the
              printing. Lorem Ipsum is simply dummy text of the printing. Lorem
              Ipsum is simply dummy text of the printing.
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
              printing. Lorem Ipsum is simply dummy text of the printing. Lorem
              Ipsum is simply dummy text of the printing.
            </p>
          </div>
          <img src="./assets/pics/sunglasses.png" />
        </div>
      </div>
    </>
  );
}
