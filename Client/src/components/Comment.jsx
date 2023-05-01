import React, { useState } from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const LikeDislikeReplyWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const LikeDislikeButtons = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [likeCount, setLikeCount] = useState(15);
  const [dislikeCount, setDislikeCount] = useState(2);

  const handleButtonClick = (button) => {
    setActiveButton(activeButton === button ? null : button);

    if (button === 'like') {
      setLikeCount(activeButton === 'like' ? likeCount - 1 : likeCount + 1);
      setDislikeCount(activeButton === 'dislike' ? dislikeCount - 1 : dislikeCount);
    } else {
      setDislikeCount(activeButton === 'dislike' ? dislikeCount - 1 : dislikeCount + 1);
      setLikeCount(activeButton === 'like' ? likeCount - 1 : likeCount);
    }
  };

  return (
  <>
      <LikeButtonComponent
        isActive={activeButton === 'like'}
        onClick={() => handleButtonClick('like')}
      />
      <span>{likeCount}</span>
      <DisLikeButtonComponent
        isActive={activeButton === 'dislike'}
        onClick={() => handleButtonClick('dislike')}
      />
      <span>{dislikeCount}</span>
  </>
  );
};


const LikeButton = styled(ThumbUpOutlinedIcon)`
  color: ${({ isActive, theme }) => isActive ? 'green' : theme.text};
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
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

const DisLikeButton = styled(ThumbDownOffAltOutlinedIcon)`
  color: ${({ isActive, theme }) => isActive ? 'red' : theme.text};
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
    color: red;
    transition: all 0.2s ease;
  }
`;


const DisLikeButtonComponent = ({ isActive, onClick }) => {
  const handleClick = () => {
    if (!isActive) {
      onClick();
    } else {
      onClick(null); // set active state to null if already active
    }
  };

  return (
    <DisLikeButton isActive={isActive} onClick={handleClick} />
  );
};

const Reply = styled.span`
  font-size: display;
  margin-left:20px;
  cursor: pointer;
  &:hover {
    color: gray;
  }
  &:active {
    transform: scale(.98);
  }
`;


const Comment = () => {
  return (
    <Container>
      <Avatar src="https://i1.sndcdn.com/avatars-001040350189-hn54or-t500x500.jpg" />
      <Details>
        <Name>
          Beluga<Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
          laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
          tempore reiciendis quod, optio ullam cumque? Quidem numquam sint
          mollitia totam reiciendis?
        </Text>
        <LikeDislikeReplyWrapper>
          <LikeDislikeButtons/>
          <Reply>Reply</Reply>
        </LikeDislikeReplyWrapper>
      </Details>
    </Container>
  );
};

export default Comment;
