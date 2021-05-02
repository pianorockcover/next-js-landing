import React, { useEffect, useMemo, useState } from "react";
import { svgPath } from "blobs/v2";
import styled from "styled-components";
import { content } from "../content";
import { navbarHeight } from "./Navbar/Navbar";
import * as icons from "react-bootstrap-icons";

const RandomShapeArea = styled.div`
  position: absolute;
  width: ${content.headerBlob.size}px;
  height: ${content.headerBlob.size}px;
  top: ${content.headerBlob.position.top - navbarHeight}px;
  left: auto;
  right: ${content.headerBlob.position.right}px;
  bottom: auto;
  left: auto;
  z-index: 1;
`;

const RandomShapeWrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-image: url(/images/header-bg.jpg${content.cash});
  clip-path: url(#headerArtClip);
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
`;

const Gradient = styled.div`
  clip-path: url(#headerArtClip);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.header.shape.imageOverlay};
`;

const Mask = styled.svg`
  position: absolute;
`;

const SvgOne = styled.svg`
  position: absolute;
  left: -10px;
  transform: rotate(18deg);
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  fill: ${({ theme }) => theme.header.shape.one.background};
`;

const SvgTwo = styled.svg`
  position: absolute;
  left: -10px;
  transform: rotate(10deg);
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
  fill: ${({ theme }) => theme.header.shape.two.background};
`;

const Icon = styled.div`
  position: absolute;
  z-index: 4;
  color: #ffffff;
  opacity: 0.4;
  margin-top: 60%;
  margin-left: -30px;
  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const RandomShape: React.FC = () => {
  const [path, setPath] = useState<string>();

  useEffect(() => {
    setPath(
      svgPath({
        ...content.headerBlob,
      })
    );
  }, []);

  return (
    <RandomShapeArea>
      <Mask>
        <clipPath id="headerArtClip">
          <path d={path}></path>
        </clipPath>
      </Mask>
      <SvgOne>
        <path d={path}></path>
      </SvgOne>
      <SvgTwo>
        <path d={path}></path>
      </SvgTwo>
      <RandomShapeWrapper>
        <Gradient />
      </RandomShapeWrapper>
      {content.headerBlob.icons.map((icon, i) => {
        const IconComponent = useMemo(() => icons[icon.type], []);
        return (
          <Icon style={icon["style"]} key={i}>
            <IconComponent />
          </Icon>
        );
      })}
    </RandomShapeArea>
  );
};
