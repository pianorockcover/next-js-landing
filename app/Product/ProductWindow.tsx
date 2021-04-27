import React from "react";
import { ModalWindow } from "../ModalWindow";
import { Product, ProductProps } from "./Product";
import Slick from "react-slick";
import styled from "styled-components";
import { content } from "../../content";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slider = styled.div`
  width: 400px;
`;

const Content = styled.div`
  flex: 1;
  background: #ffffff;
  box-shadow: 0 0 30px 3px rgb(66 66 66 / 30%);
  position: relative;
  z-index: 1;
  height: 600px;
`;

const Image = styled.div`
  background-color: #ffffff;
  height: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const modalStyles = {
  background: "transparent",
  paddingBottom: 0,
  boxShadow: "none",
};

type ProductWindowProps = ProductProps & {
  visible?: boolean;
  onFeedback?: (id: number) => () => void;
  onClose?: () => void;
};

export const ProductWindow: React.FC<ProductWindowProps> = ({
  visible,
  onClose,
  onFeedback,
  ...props
}) => {
  return (
    <>
      <ModalWindow
        visible={visible}
        onClose={onClose}
        size="lg"
        style={modalStyles}
      >
        <Wrapper className="product-window">
          <Slider>
            <Slick dots={true}>
              {(props.images || []).map((image, i) => (
                <div key={i}>
                  <Image
                    style={{
                      backgroundImage: `url(/images/products/${props.id}/${image}${content.cash})`,
                    }}
                  />
                </div>
              ))}
            </Slick>
          </Slider>
          <Content>
            <Product {...props} onClick={onFeedback} fullView={true} />
          </Content>
        </Wrapper>
      </ModalWindow>
    </>
  );
};
