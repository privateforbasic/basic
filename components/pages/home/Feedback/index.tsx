import { StyledSection } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

const Feedback = ({ data }) => {
  const { feedbacks, button, icon } = data;

  const settings = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 100,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 200,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 200,
      },
    },
  };

  return (
    <StyledSection>
      <img src={icon.src} alt={icon.alt} />
      <section>
        <section className="swiper-container">
          <div className="swiper-wrapper">
            <Swiper {...settings}>
              {feedbacks.map(
                ({ fullName, feedback, image: { src, alt }, id }) => (
                  <SwiperSlide key={id}>
                    <li className="swiper-slide">
                      <img src={src} alt={alt} />
                      <fieldset>
                        <legend>{fullName}</legend>
                        <p>{feedback}</p>
                      </fieldset>
                    </li>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
          <a href={button.href} target="_blank">
            {button.text}
          </a>
        </section>
      </section>
    </StyledSection>
  );
};

export default Feedback;
