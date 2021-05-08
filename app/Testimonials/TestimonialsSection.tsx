import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { content } from "../../content";
import Slick from "react-slick";
import { Testimonial, testimonialInSliderClassName } from "./Testimonial";
import { Container } from "react-bootstrap";

const Wrapper = styled.div`
  padding-top: 90px;
  padding-bottom: 70px;
  background: ${({ theme }) => theme.testimonials.bg};
`;

const Title = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.testimonials.title};
`;

export const TestimonialsSection: React.FC = () => {
  const [testimonialHeight, setTestimonialHeight] = useState<number>();

  useEffect(() => {
    let maxHeight = 0;
    document
      .querySelectorAll(`.${testimonialInSliderClassName}`)
      .forEach((el) => {
        maxHeight = el.clientHeight > maxHeight ? el.clientHeight : maxHeight;
      });

    setTestimonialHeight(maxHeight);
  }, []);

  return (
    <>
      <style>
        {`
            .${testimonialInSliderClassName} {
                min-height: ${testimonialHeight}px;
            }
        `}
      </style>
      <Wrapper>
        <Container>
          <Title>{content.testimonials.title}</Title>
          <Slick
            slidesToShow={3}
            className="testimonials-slick"
            touchMove={false}
          >
            {content.testimonials.items.map((testimonial, i) => (
              <div key={i}>
                <Testimonial {...testimonial} />
              </div>
            ))}
          </Slick>
        </Container>
      </Wrapper>
    </>
  );
};
