import React from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  z-index: 2;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  justify-content: center;
`;

interface LoaderProps {
  show: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ show }) =>
  show ? (
    <LoaderWrapper>
      <Spinner animation="border" variant="primary" />
    </LoaderWrapper>
  ) : null;
