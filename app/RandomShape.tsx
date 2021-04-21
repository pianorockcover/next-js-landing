import React, { useEffect, useState } from "react";
import { svgPath } from "blobs/v2";
import styled from "styled-components";
import { content } from "../content";

const Svg = styled.svg`
  position: absolute;
  z-index: 1;
  height: 100%;
  left: -100px;
  width: 100%;
  display: flex;
  align-items: cenver;
  justify-content: flex-start;
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
    <Svg className="fill-bubble">
      <path d={path}></path>
    </Svg>
  );
};
