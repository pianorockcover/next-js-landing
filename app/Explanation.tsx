import React, { useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import { content } from "../content";
import Lightbox from "react-awesome-lightbox";

const ExplanationWrapper = styled.div`
  margin-top: -400px;
  position: relative;
  z-index: 2;
`;

const ExplanationContent = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 300px;
  border-radius: 10px;
  margin-top: 20px;
  background: #ffffff;
  padding: 30px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 28px;
  line-height: 31px;
  margin-bottom: 50px;
`;

const Text = styled.div`
  font-size: 22px;
`;

const ArtContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Art = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  position: absolute;
  border: 1px solid #ececec;
  box-shadow: 5px 10px 30px 3px rgb(66 66 66 / 10%);
  padding: 7px;
  background: #ffffff;
  border-radius: 100%;
  cursor: pointer;

  & > span {
    position: absolute;
    transition: background 0.2s ease-in-out;
    z-index: 2;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 100%;
    background: transparent;
  }
`;

const Image = styled.div`
  border: 1px solid #ececec;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position-y: top;
  background-position-x: center;
  background-repeat: no-repeat;
  border-radius: 100%;
`;

const galleryImages = content.explanation.art.map(({ url, title }) => ({
  url: `/images/explanation/${url}${content.cash}`,
  title: title || url,
}));

export const Explanation: React.FC = () => {
  const [galleryImageIndex, setGalleryImageIndex] = useState<number>(0);

  const closeGallery = useCallback(() => setGalleryImageIndex(0), []);

  const onImageClick = useCallback(
    (i: number) => () => setGalleryImageIndex(i),
    []
  );

  return (
    <>
      {galleryImageIndex && (
        <Lightbox
          images={galleryImages}
          startIndex={galleryImageIndex - 1}
          onClose={closeGallery}
        />
      )}
      <ExplanationWrapper>
        <Container>
          <ExplanationContent className="shadow-primary-tr">
            <Row>
              <Col md={6}>
                <Title
                  dangerouslySetInnerHTML={{
                    __html: content.explanation.title,
                  }}
                />
                <Text
                  dangerouslySetInnerHTML={{ __html: content.explanation.text }}
                />
              </Col>
              <Col md={6}>
                {content.explanation.art && (
                  <ArtContainer>
                    <Art style={{ width: content.explanation.artWidth }}>
                      {content.explanation.art.map(
                        ({ url, diameter, ...style }, i) => (
                          <ImageContainer
                            key={i}
                            style={{
                              ...style,
                              width: diameter,
                              height: diameter,
                              zIndex: i + 1,
                            }}
                            onClick={onImageClick(i + 1)}
                          >
                            <span className="hover-bg-primary"></span>
                            <Image
                              style={{
                                backgroundImage: `url(/images/explanation/small-${url}${content.cash})`,
                              }}
                            />
                          </ImageContainer>
                        )
                      )}
                    </Art>
                  </ArtContainer>
                )}
              </Col>
            </Row>
          </ExplanationContent>
        </Container>
      </ExplanationWrapper>
    </>
  );
};
