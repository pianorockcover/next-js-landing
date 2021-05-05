import React, { useCallback, useContext, useMemo } from "react";
import styled from "styled-components";
import { content } from "../../content";
import { ContentSectionContext } from "./ContentSection";

export const contentImagePath = "/images/content";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 25px;
  cursor: pointer;
  width: 100%;

  & > img {
    width: 100%;
    height: auto;
    transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out;
  }

  &:hover {
    & > img {
      transform: scale(1.1);
      filter: blur(1px);
    }
  }
`;

const Img = styled.img`
  position: relative;
  width: 300px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Text = styled.div`
  position: absolute;
  border-radius: 10px;
  background: #000000bf;
  color: #fff;
  padding: 10px;
  bottom: 10px;
  left: 10px;
  width: calc(100% - 20px);
  font-weight: 300;
`;

interface ImageProps {
  src: string;
  text?: string;
  height?: string | number;
}

export const Image: React.FC<ImageProps> = ({ src, text, height }) => {
  const { galleryImages, onOpenImage } = useContext(ContentSectionContext);
  const index = useMemo(
    () =>
      galleryImages.indexOf(`${contentImagePath}/${src}${content.cash}`) + 1,
    []
  );
  const onClick = useCallback(() => onOpenImage(index), [index]);

  return (
    <Wrapper style={{ height }} onClick={onClick}>
      <Img src={`${contentImagePath}/small-${src}${content.cash}`} alt={text} />
      {text && <Text dangerouslySetInnerHTML={{ __html: text }} />}
    </Wrapper>
  );
};
