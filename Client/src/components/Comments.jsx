import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div`
`;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 25px;
  &:focus-within{
    border: 1px solid dodgerblue;
  }
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar  src="https://avatars.githubusercontent.com/u/87671757?s=40&v=4" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      
    </Container>
  );
};

export default Comments;
