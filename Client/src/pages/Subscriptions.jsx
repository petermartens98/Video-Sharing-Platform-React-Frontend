import React, { useState } from "react";
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SubsCard from "../components/SubsCard";
import SliderCard from "../components/SliderCard";
import ShortsCard from "../components/ShortsCard";

const Container = styled.div`
  display: flex;
  width: 100%
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Title = styled.h2`
  width: 100%;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  color: ${({ theme }) => theme.text};
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  .slick-slide > div {
    display: flex;
    justify-content: center;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    z-index: 1;
    top: 35%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.text};
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translateY(-50%) scale(1.1);
      background-color:gray;
    }
    &:before {
      display: none;
    }
  }
  .slick-prev {
    left: -40px;
  }
  .slick-next {
    right: -40px;
  }
`;

 const Subscriptions = () => {
  const [isPaused, setIsPaused] = useState(false);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <div className="slick-next"></div>,
    nextArrow: <div className="slick-next"></div>,
    dots: false,
    pauseOnHover: true,
    autoplay: !isPaused,
    autoplaySpeed: 3000,
    draggable: false,
    swipe: false,
    touchMove: false,
    beforeChange: (current, next) => console.log(`Slide changing from ${current} to ${next}`),
    afterChange: current => console.log(`Slide changed to ${current}`),
  };
   return (
    <Container>
      <Title>Subscriptions</Title>
      <StyledSlider {...settings}>
          <SubsCard />
          <SubsCard />
          <SubsCard />
          <SubsCard />
          <SubsCard />
          <SubsCard />
          <SubsCard />
        </StyledSlider>
        <Title>Recent Videos</Title>
        <StyledSlider {...settings}>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
        </StyledSlider>
        <Title>Recent Shorts</Title>
        <StyledSlider {...settings}>
          <ShortsCard />
          <ShortsCard />
          <ShortsCard />
          <ShortsCard />
          <ShortsCard />
          <ShortsCard />
          <ShortsCard />
      </StyledSlider>
    </Container>

   )
 }
 
 export default Subscriptions