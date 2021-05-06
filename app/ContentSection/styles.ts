import styled from "styled-components";
import { IconBlock } from "./IconBlock";
import { Image } from "./Image";
import { Anchor } from "../Anchor";
import { Blockquote } from "./Blockquote";
import { Accordion } from "./Accordion";

const H2 = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const H3 = styled.h2``;

interface ParagraphProps {
  background?: string;
  color?: string;
}

const P = styled.p<ParagraphProps>`
  background: ${({ background }) => background};
  color: ${({ color }) => color};

  ${({ background }) =>
    background &&
    `
        padding: 15px;
    `}
`;

const Hr = styled.div`
  margin-bottom: 40px;
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.hr};
`;

export const ContentBlocks = {
  H2,
  H3,
  P,
  Hr,
  Blockquote,
  IconBlock,
  Image,
  Anchor,
  Accordion,
};
