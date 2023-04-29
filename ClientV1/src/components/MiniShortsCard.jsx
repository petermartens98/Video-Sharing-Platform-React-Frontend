import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 140px;
  margin-bottom: 45px;
  margin-top:10px;
  cursor: pointer;
  gap: 5px;
  &:hover {
    transform: scale(1.015);
  }
`;


const Image = styled.img`
  height: 225px;
  width: 150px;
  margin-top:5px;
  background-color: #999;
  border-radius:5px;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 4px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #999;
  margin-right: 2px;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 11px;
  color: ${({ theme }) => theme.textSoft};
  margin: 8px 0px;
`;

const Info = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom:5px;
`;

const MiniShortsCard = ({ type }) => {
  return (
    <Link to="/short/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://avatars.githubusercontent.com/u/87671757?s=40&v=4"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Peter Martens</ChannelName>
            <Info>1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default MiniShortsCard;