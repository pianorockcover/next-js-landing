import React, { useCallback, useContext, useMemo } from "react";
import styled from "styled-components";
import { content } from "../../content";
import { ContentSectionContext } from "./ContentSection";
import { ZoomIn } from "react-bootstrap-icons";

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

    & > svg {
      opacity: 1;
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
  background: ${({ theme }) => theme.contentSection.image.text.bg};
  color: ${({ theme }) => theme.contentSection.image.text.color};
  padding: 10px;
  bottom: 10px;
  left: 10px;
  width: calc(100% - 20px);
  font-weight: 300;
  z-index: 3;
`;

const ZoomIcon = styled(ZoomIn)`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  width: 30px;
  position: absolute;
  height: 30px;
  left: calc(50% - 15px);
  top: calc(50% - 15px);
  z-index: 2;
  color: ${({ theme }) => theme.contentSection.image.zoomIcom};
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
      <ZoomIcon />
      <Img src={`${contentImagePath}/small-${src}${content.cash}`} alt={text} />
      {text && <Text dangerouslySetInnerHTML={{ __html: text }} />}
    </Wrapper>
  );
};
