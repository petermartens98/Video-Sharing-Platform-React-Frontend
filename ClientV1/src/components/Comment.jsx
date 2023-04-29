import React from "react";
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

const LikeDislikeReply = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
const IconWrapper = styled.div`
  font-size: 10px;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

const Reply = styled.span`
  font-size: display;
  margin-left:20px;
  cursor: pointer;
  &:hover {
    color: gray;
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
        <LikeDislikeReply>
          <IconWrapper>
            <ThumbUpOutlinedIcon />
          </IconWrapper>
          <span>10</span>
          <IconWrapper>
            <ThumbDownOffAltOutlinedIcon />
          </IconWrapper>
          <span>2</span>
          <Reply>Reply</Reply>
        </LikeDislikeReply>
      </Details>
    </Container>
  );
};

export default Comment;
