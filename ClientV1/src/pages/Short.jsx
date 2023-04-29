import React, { useState } from "react";
import styled from 'styled-components';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MiniShortsCard from "../components/MiniShortsCard";

const Container = styled.div`
  z-index:0;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  position: relative; /* Make the container position-relative */
`;

const VideoFrame = styled.div`
  position: relative;
  width: 100%;
  margin-top: 25px;
  padding-bottom: 177.77%;
  background-color: black;
  border-radius: 8px;
`;

const VideoPlayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0; /* Position the container at the top-right corner of the parent container */
  right: 0;
  display: flex;
  flex-direction: column; /* Make the container vertical */
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: -55px;
  margin-top:700px;
  background-color: transparent;
  border-radius: 8px;
`;

const LikeDislikeButtons = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(activeButton === button ? null : button);
  };

  return (
  <>
      <LikeButtonComponent
        isActive={activeButton === 'like'}
        onClick={() => handleButtonClick('like')}
      />
      <LikeCount>123</LikeCount>
      <DisLikeButtonComponent
        isActive={activeButton === 'dislike'}
        onClick={() => handleButtonClick('dislike')}
      />
      <DisLikeCount>27</DisLikeCount>
  </>
  );
};

const LikeButton = styled(ThumbUpOutlinedIcon)`
  color: ${({ isActive, theme }) => isActive ? 'green' : theme.text};
  cursor: pointer;
  margin-bottom: 5px;
  border-radius: 50%; 
  border: 1px solid;
  border-color: ${({ isActive, theme }) => isActive ? 'green' : theme.text};
  padding:5px;
  border-radius: 50%; 
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
    border: 1px solid green;
    color: green;
    transition: all 0.2s ease;
  }
};
`

const LikeButtonComponent = ({ isActive, onClick }) => {
  const handleClick = () => {
    if (!isActive) {
      onClick();
    } else {
      onClick(null); // set active state to null if already active
    }
  };

  return (
    <LikeButton isActive={isActive} onClick={handleClick} />
  );
};

const DislikeButton = styled(ThumbDownOffAltOutlinedIcon)`
  color: ${({ isActive, theme }) => isActive ? 'red' : theme.text};
  cursor: pointer;
  border: 1px solid;
  border-color: ${({ isActive, theme }) => isActive ? 'red' : theme.text};
  padding:5px;
  margin-bottom: 5px;
  border-radius: 50%; 
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    border: 1px solid red;
    color: red;
    transform: scale(1);
    transition: all 0.2s ease;
  }
};
`

const DisLikeButtonComponent = ({ isActive, onClick }) => {
  const handleClick = () => {
    if (!isActive) {
      onClick();
    } else {
      onClick(null); // set active state to null if already active
    }
  };

  return (
    <DislikeButton isActive={isActive} onClick={handleClick} />
  );
};

const RelatedTitle = styled.div`
  font-size: 20px;
  text-align:center;
  margin-top: 20px;
  fontweight:bolder;
  color: ${({ theme }) => theme.text};
`;

const Subscribe = styled.button`
  --bg-color: #cc1a00;
  --dark-bg-color: #b21800;
  background-color: var(--bg-color);
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: var(--dark-bg-color);
  }
  &:active {
    transform: scale(.98);
  }
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;


const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  .slick-slide > div {
    display: flex;
    justify-content: center;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
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
      transition: all 0.3s ease;
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

const LikeCount = styled.span`
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`

const DisLikeCount = styled.span`
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`
const ShareButton = styled(ReplyOutlinedIcon)`
color: ${({ theme }) => theme.text};
  cursor: pointer;
  margin-bottom: 5px;
  border-radius: 50%; 
  border: 1px solid;
  border-color: ${({ theme }) => theme.text};
  padding:5px;
  border-radius: 50%; 
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
    border-color: dodgerblue;
    color: dodgerblue;
    transition: all 0.2s ease;
  }
  };
`;

const Short = ({ videoId }) => {
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <div className="slick-next"></div>,
    nextArrow: <div className="slick-next"></div>,
    dots: false,
    pauseOnHover: true,
    autoplay: !isPaused,
    autoplaySpeed: 3400,
    draggable: false,
    swipe: false,
    touchMove: false,
    beforeChange: (current, next) => console.log(`Slide changing from ${current} to ${next}`),
    afterChange: current => console.log(`Slide changed to ${current}`),
  };
  return (
    <Container>
      <VideoFrame>
        <VideoPlayer
          src={`https://www.youtube.com/embed/HYKm_JLKelg?autoplay=1`}
          frameBorder="0"
          allowFullScreen
        ></VideoPlayer>
      </VideoFrame>
      <ButtonContainer>
        <LikeDislikeButtons/>
        <ShareButton/>
      </ButtonContainer>
      <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://avatars.githubusercontent.com/u/87671757?s=40&v=4" />
            <ChannelDetail>
              <ChannelName>Peter</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
      <RelatedTitle>Suggestions</RelatedTitle>
      <StyledSlider {...settings}>
        <MiniShortsCard />
        <MiniShortsCard />
        <MiniShortsCard />
        <MiniShortsCard />
        <MiniShortsCard />
        <MiniShortsCard />
        <MiniShortsCard />
      </StyledSlider>
    </Container>
  );
};

export default Short;
