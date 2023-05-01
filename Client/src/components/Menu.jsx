import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PeterTube from "../img/logo.png";

import {
  Home as HomeIcon,
  ExploreOutlined as ExploreOutlinedIcon,
  SubscriptionsOutlined as SubscriptionsOutlinedIcon,
  VideoLibraryOutlined as VideoLibraryOutlinedIcon,
  HistoryOutlined as HistoryOutlinedIcon,
  LibraryMusicOutlined as LibraryMusicOutlinedIcon,
  SportsEsportsOutlined as SportsEsportsOutlinedIcon,
  SportsBasketballOutlined as SportsBasketballOutlinedIcon,
  MovieOutlined as MovieOutlinedIcon,
  ArticleOutlined as ArticleOutlinedIcon,
  LiveTvOutlined as LiveTvOutlinedIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  FlagOutlined as FlagOutlinedIcon,
  HelpOutlineOutlined as HelpOutlineOutlinedIcon,
  SettingsBrightnessOutlined as SettingsBrightnessOutlinedIcon,
  FilterOutlined as FilterOutlined
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.aside`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
  /* Shared styles */
  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;

    &:hover {
      background-color: ${({ theme }) => theme.soft};
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 28px;
  margin-right:5px;
`;

const Login = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    transform: scale(1.02);
  }s
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  border-radius:2px;
  padding-left:5px;
  font-size:14px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
  &:active {
    transform: scale(.995);
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;


const Menu = ({ darkMode, setDarkMode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return null; // or return a message or alternative content
  };
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={PeterTube} />
            PeterTube
          </Logo>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <HomeIcon />
          Home
        </Item>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <FilterOutlined />
          Feed
        </Item>
        </Link>
        <Link to="/explore" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
        </Link>
        <Link to="subscriptions" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
        </Link>
        <Hr />

          <Item>
            <VideoLibraryOutlinedIcon />
            Library
          </Item>


          <Item>
            <HistoryOutlinedIcon />
            History
          </Item>

        <Hr />
        <Login>
          Sign in to like, comment, and subscribe.
          <Link to="signin" style={{textDecoration:"none"}}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>PETERTUBE SERVICES</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
