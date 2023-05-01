import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  margin-bottom: 45px;
  cursor: pointer;
  gap: 10px;
  &:hover {
    transform: scale(1.015);
  }
`;


const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius:50%;
  margin-top:5px;
  background-color: #999;
  overflow: hidden;
  flex: 1;
`;

const ChannelName = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  text-align:center;
  margin:10px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom:5px;
  text-align:center;
`;

const SubsCard = ({ type }) => {
  return (
    <Link to="/channel/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://yt3.googleusercontent.com/ytc/AGIKgqMP6gHKgB5Vry0KGHKg4PF7gHMKs2XRfQvpXwIXRA=s900-c-k-c0x00ffffff-no-rj"
        />
        <ChannelName>Mr. Beast</ChannelName>
        <Info>140M Subscribers</Info>
      </Container>
    </Link>
  );
};

export default SubsCard;