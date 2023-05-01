import React, { useState } from "react";
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  width: 100%;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  margin-top:35px;
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
    margin-top: 3px;
    z-index: 1;
    top: 37%;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
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
    &:active {
      transform: translateY(-50%) scale(1.05);
      background-color:darkgray;
      transition: all 0.s ease;
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

const Bubbles = styled.div`

`
const Bubble = styled.span`
  align-items: center;
  text-align:center;
  font-size: 17px;
  gap: 5px;
  margin-right: 15px;
  margin-top: 0px;
  cursor: pointer;
  height: 24px;
  width: 75px;
  padding-right: 5px;
  padding-left: 5px;
  border: 1px solid #CCCCCC;
  background-color: transparent;
  color:  ${({ theme }) => theme.text};
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  &:hover {
    background-color: gray;
  }

  &:active {
    transform: scale(.9);
  }
`;

const Explore = () => {
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
        <Title>Topics</Title>
        <StyledSlider {...settings}>
          <Bubble>Trending</Bubble>
          <Bubble>Programming</Bubble>
          <Bubble>Science</Bubble>
          <Bubble>Sports</Bubble>
          <Bubble>Gaming</Bubble>
          <Bubble>Movies</Bubble>
          <Bubble>News</Bubble>
          <Bubble>Podcasts</Bubble>
          <Bubble>Music</Bubble>
        </StyledSlider>
    </Container>
    )};
export default Explore;