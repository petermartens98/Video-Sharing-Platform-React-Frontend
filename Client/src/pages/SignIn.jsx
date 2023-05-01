import React, { useState } from "react";
import styled from "styled-components";
import { RiImageAddFill } from 'react-icons/ri';

//document.documentElement.style.overflow = 'hidden';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  margin-top: 100px;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid gray;
  border-radius:5px;
  padding: 50px 80px;
  gap: 10px;
  ${({ theme }) =>
    theme.mode === "Dark"
      ? `border: 1px solid ${theme.soft}`
      : `border: 1px solid ${theme.dark}`};
`;
const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 24px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 120%;
  color: ${({ theme }) => theme.text};
  ${({ theme }) =>
    theme.mode === "Light" && `border: 1px solid ${theme.dark}`};
`;

const Button = styled.button`
  border-radius: 3px;
  border: 1px solid darkgray;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  &:hover {
    filter: brightness(120%);
  }
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const Forgot = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    font-weight:bolder;
  }
`;

const ProfilePictureInput = () => {
  return (
    <label htmlFor="fileInput" className="profilePicLabel" style={{ cursor: 'pointer', fontSize: '12px' }}>
      <RiImageAddFill className="profilePicIcon" />
      <span> Add Profile Picture?</span>
      <input type="file" id="fileInput" accept="image/*" className="profilePicInput" style={{ display: 'none' }} />
      <style>
        {`
          .profilePicLabel:hover {
            font-weight: bolder;
          }
        `}
      </style>
    </label>
  );
};


const SignIn = () => {
  const [avatarURL, setAvatarURL] = useState(null);
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign in</Button>
        <Forgot>Forgot Password?</Forgot>
        <Title>Register</Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <ProfilePictureInput/>
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
