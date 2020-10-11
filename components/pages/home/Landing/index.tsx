import Link from "next/link";
import { StyledSection } from "./styles";
import { ButtonScrollLink, Button } from "@atoms";

const Landing = ({ data }) => {
  const { hgroup, buttomText } = data;

  return (
    <StyledSection>
      <section className="container">
        {/* <h1>Getting a new profession has never been easier than it is now</h1>
          <h1>
            Նոր մասնագիտություն ձեռք բերելը դեռևս չի եղել այսքան{" "}
            <span id="typed"></span>
          </h1> */}
        <hgroup>
          <div className="text-top">
            <h2>{hgroup.top}</h2>
          </div>
          <div className="text-bottom">
            <h2>{hgroup.bottom}</h2>
          </div>
        </hgroup>
        {/* <a className="sign-up">
              Դասընթացներ <img src="/images/icons/arrow-down.svg" alt="" />
            </a> */}
        <Link href="/courses">
          <Button title={buttomText} variant="primary" />
        </Link>
      </section>
      <section id="notification">
        <h4>
          Մեքենայական ուսուցման <br />
          դասընթացի գրանցումը բաց է
        </h4>
        <a href="#">Մանրամասն &rarr;</a>
      </section>
      <ButtonScrollLink />
      <section id="landingVideo">
        <video
          // src="/video/intro.mp4"
          src=""
          autoPlay
          muted
          playsInline
          loop
        ></video>
      </section>
    </StyledSection>
  );
};

export default Landing;
