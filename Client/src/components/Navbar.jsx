import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  width:100%;
  z-index:1;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  max-width: 400px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 25px; /* larger than width to make it look more oval */
  &:focus-within {
    border-color: dodgerblue;
  }
`;

const Input = styled.input`
  border: none;
  font-size: 15px;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    filter: brightness(120%);
  }
  &:active {
    transform: scale(1.0001);
  }
`;

const SearchIcon = styled(SearchOutlinedIcon)`
  color: gray;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
  &:active {
    transform: scale(1.1);
  }
`;

const HomeButton = styled(HomeIcon)`
  color: ${({ theme }) => theme.text};
  font-size: 34px !important;
  position: absolute;
  top: 15px;
  left: 15px;
  &:hover{
    color: grey;
    transform:scale(1.05)
  }
`;

const Navbar = () => {
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
    return (
      <Container>
        <Wrapper>
          <Link to="/">
            <HomeButton />
          </Link>
          <Search>
            <Input placeholder="Search" />
            <SearchIcon />
          </Search>
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon /> SIGN IN
            </Button>
          </Link>
        </Wrapper>
      </Container>
    );
  }
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchIcon />
        </Search>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon /> SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
