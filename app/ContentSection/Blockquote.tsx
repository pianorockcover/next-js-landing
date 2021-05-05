import React from "react";
import styled from "styled-components";

const Wrapper = styled.blockquote`
  margin-bottom: 25px;
  background: ${({ theme }) => theme.contentSection.blockquote.bg};
  color: ${({ theme }) => theme.contentSection.blockquote.color};
  border-left: ${({ theme }) =>
    `10px solid ${theme.contentSection.blockquote.border}`};
  padding: 15px;
  font-style: italic;
  position: relative;
  display: block;
  width: 100%;
  padding-left: 50px;

  &:before {
    content: '"';
    display: block;
    position: absolute;
    font-size: 77px;
    top: 10px;
    line-height: 1;
    left: 10px;
    color: ${({ theme }) => theme.contentSection.blockquote.quotes};
  }
`;

const Author = styled.div`
  font-weight: 500;
  text-align: right;
`;

interface BlockquoteProps {
  author?: string;
  text: string;
}

export const Blockquote: React.FC<BlockquoteProps> = ({ text, author }) => (
  <Wrapper>
    <div dangerouslySetInnerHTML={{ __html: text }} />
    <Author>{author}</Author>
  </Wrapper>
);
