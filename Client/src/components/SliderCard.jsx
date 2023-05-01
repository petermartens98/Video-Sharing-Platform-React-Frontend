import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  margin-top: 10px;
  margin-bottom: ${(props) => (props.type === "sm" ? "5px" : "35px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 5px;
  &:hover {
    transform: scale(1.02);
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 120px;
  background-color: #999;
  border-radius:5px;
  flex: 1;
`;

const TimeStamp = styled.span`
  background-color: black;
  color: white;
  padding: 1px 3px;
  border-radius: 5px;
  position: relative;
  z-index: 1;
  top: ${(props) => (props.type === "sm" ? "5px" : "auto")};
  bottom: 28px;
  right: -5px;
`;



const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "18px"};
  margin-left:10px;
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 5px;
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
      <ImageContainer>
        <Image
          type={type}
          src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"
        />
        <TimeStamp>5:03</TimeStamp>
      </ImageContainer>
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://avatars.githubusercontent.com/u/87671757?s=40&v=4"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Peter Martens</ChannelName>
            <Info>660,908 views</Info>
            <Info>1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;