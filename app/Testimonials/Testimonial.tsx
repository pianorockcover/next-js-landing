import React, { useCallback } from "react";
import styled from "styled-components";
import { content } from "../../content";
import { StarFill } from "react-bootstrap-icons";

export const testimonialInSliderClassName = "testimonial-in-slider";

const Star = styled(StarFill)`
  margin-right: 5px;
  width: 10px;
`;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.testimonials.item.bg};
  padding: 20px;
  box-shadow: 5px 5px 10px 1px ${({ theme }) => theme.testimonials.item.shadow};
  border-radius: 5px;
  color: ${({ theme }) => theme.testimonials.item.color};
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const Ava = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-position: center;
  background-size: contain;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 15px;
`;

const Title = styled.div`
  font-weight: 500;
`;

const Name = styled.div`
  font-size: 13px;
  opacity: 0.7;
`;

const Rating = styled.div`
  color: ${({ theme }) => theme.testimonials.item.rating};
`;
const Body = styled.div``;

export interface TestimonialProps {
  title: string;
  name: string;
  ava: string;
  rating: number;
  text: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  title,
  name,
  ava,
  rating,
  text,
}) => {
  const Stars = useCallback(
    () => (
      <>
        {new Array(rating).fill(null).map((_, i) => (
          <Star key={i} />
        ))}
      </>
    ),
    []
  );

  return (
    <Wrapper className={testimonialInSliderClassName}>
      <Header>
        <Ava
          style={{
            backgroundImage: `url(/images/testimonials/${ava}${content.cash})`,
          }}
        />
        <div>
          <Title>{title}</Title>
          <Name>{name}</Name>
          <Rating>
            <Stars />
          </Rating>
        </div>
      </Header>
      <Body dangerouslySetInnerHTML={{ __html: text }} />
    </Wrapper>
  );
};
