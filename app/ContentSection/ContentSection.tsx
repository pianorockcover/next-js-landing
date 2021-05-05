import React, { useCallback, useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { content } from "../../content";
import { ContentBlocks } from "./styles";
import styled from "styled-components";
import Lightbox from "react-awesome-lightbox";
import { noop } from "lodash";
import { contentImagePath } from "./Image";

const ContentSectionWrapper = styled.div`
  background: ${({ theme }) => theme.contentSection.bg};
  color: ${({ theme }) => theme.contentSection.color};
  box-shadow: ${({ theme }) =>
    `0px 0px 10px 1px ${theme.contentSection.shadow}`};
  padding-top: 70px;
  padding-bottom: 50px;
  position: relative;
`;

interface ContentSectionContextProps {
  onOpenImage: (id: number) => void;
  galleryImages: string[];
}

export const ContentSectionContext = React.createContext({
  onOpenImage: noop,
  galleryImages: [],
});

export interface ContentBlock {
  type?: string;
  props?: any;
  text?: string;
}

export const ContentSection: React.FC = () => {
  const galleryImages = useMemo(() => {
    const imgs = [];
    content.contentSection.forEach((row) =>
      row.forEach(
        (col) =>
          col.type === "Image" &&
          imgs.push(`${contentImagePath}/${col.props.src}${content.cash}`)
      )
    );

    return imgs;
  }, []);

  const [galleryImageIndex, setGalleryImageIndex] = useState<number>(0);

  const closeGallery = useCallback(() => setGalleryImageIndex(0), []);

  const providerValue: ContentSectionContextProps = useMemo(
    () => ({
      onOpenImage: setGalleryImageIndex,
      galleryImages,
    }),
    []
  );

  return (
    <>
      {galleryImageIndex > 0 ? (
        <Lightbox
          image={galleryImages.length === 1 ? galleryImages[0] : undefined}
          images={galleryImages.length > 1 ? galleryImages : undefined}
          startIndex={galleryImageIndex - 1}
          onClose={closeGallery}
          n
        />
      ) : null}
      <ContentSectionContext.Provider value={providerValue}>
        <ContentSectionWrapper>
          <Container>
            {content.contentSection.map((row, i) => (
              <Row key={i}>
                {row.map(({ type, props, text }, j) => {
                  const Block = useMemo(() => type && ContentBlocks[type], []);

                  return (
                    <Col key={j}>
                      {Block ? (
                        <Block
                          dangerouslySetInnerHTML={{ __html: text }}
                          {...{ ...props, text }}
                        />
                      ) : null}
                    </Col>
                  );
                })}
              </Row>
            ))}
          </Container>
        </ContentSectionWrapper>
      </ContentSectionContext.Provider>
    </>
  );
};
