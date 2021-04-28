import styled from "styled-components";

interface ProductStyleCommonProps {
  fullView?: boolean;
}

const ProductContainer = styled.div<ProductStyleCommonProps>`
  position: relative;
  display: inline-flex;
  vertical-align: top;

  ${({ fullView }) =>
    fullView &&
    `
        display: flex;
        height: 100%;
   `}
`;

interface BgProps {
  left?: boolean;
}

const Bg = styled.div<BgProps>`
  box-shadow: 0 0 10px 3px rgb(156 156 156 / 17%);
  border-radius: 10px;
  background: #f7f7f7;
  width: 300px;
  height: 100%;
  position: absolute;
  z-index: 1;
  height: calc(100% - 5px);
  top: 5px;

  ${({ left }) =>
    left
      ? `
        transform: rotate(-5deg);
        left: -5px;
    `
      : `
        transform: rotate(5deg);
        right: -5px;
   `}
`;

const Wrapper = styled.div<ProductStyleCommonProps>`
  box-shadow: 0 0 10px 3px rgb(156 156 156 / 17%);
  border-radius: 10px;
  width: 300px;
  max-width: 100%;
  display: flex;
  background: #ffffff;
  flex-direction: column;
  position: relative;
  z-index: 2;

  ${({ fullView }) =>
    fullView &&
    `
        boxShadow: none;
        width: 100%;
    `}
`;

const Image = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  overflow: hidden;

  & > img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Price = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: 0px;
  transform: rotate(-3deg);
  font-size: 25px;
`;

const Name = styled.div`
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 25px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 0.7px;
  font-weight: 900;
  text-transform: uppercase;
`;

const SubName = styled.div`
  font-weight: 400;
  text-transform: none;
  font-size: 16px;
  letter-spacing: normal;
  opacity: 0.7;
  margin-top: 7px;
`;

const OptionsWrapper = styled.div`
  padding-top: 20px;
  overflow: auto;
  padding-bottom: 20px;
  flex: 1;
`;

interface OptionProps {
  plus?: boolean;
}

const Option = styled.div<OptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  padding-bottom: ${({ plus }) => (plus ? 0 : 5)}px;
  padding-top: ${({ plus }) => (plus ? 0 : 5)}px;

  & > svg {
    margin-right: 5px;
    width: ${({ plus }) => (plus ? 35 : 25)}px;
    height: ${({ plus }) => (plus ? 35 : 25)}px;
  }
`;

const BtnWrapper = styled.div`
  padding: 15px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface LabelsWrapperProps {
  staticPos?: boolean;
}

const LabelsWrapper = styled.div<LabelsWrapperProps>`
  position: absolute;
  top: 15px;
  left: -1px;

  ${({ staticPos }) =>
    staticPos &&
    `
        position: static;
        width: fit-content;
        margin-top: 20px;
  `}
`;

const Label = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding: 8px 10px;
  box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.3);
  font-weight: 600;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &:before,
  &:after {
    content: "";
    position: absolute;
  }

  &:before {
    width: 7px;
    height: calc(100% + 7px);
    top: 0;
    left: -6.5px;
    padding: 0 0 7px;
    background: inherit;
    border-radius: 5px 0 0 5px;
  }

  &:after {
    width: 5px;
    height: 5px;
    bottom: -5px;
    left: -4.5px;
    border-radius: 5px 0 0 5px;
  }
`;

export const ProductStyles = {
  ProductContainer,
  Bg,
  Wrapper,
  Image,
  Price,
  Name,
  SubName,
  OptionsWrapper,
  Option,
  BtnWrapper,
  LabelsWrapper,
  Label,
};
