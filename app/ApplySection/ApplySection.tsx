import React, { useCallback, useContext } from "react";
import { Container as BsContainer } from "react-bootstrap";
import styled, { keyframes, useTheme } from "styled-components";
import { content } from "../../content";
import { ActionButton } from "../Buttons/ActionButton";
import { FeedbackFormContext } from "../FeedbackForm";
import { useIcon } from "../utils/getIcon";

const Container = styled(BsContainer)`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const animation = keyframes`
    0% {
        background-position: 22% 0%;
    }

    50% {
        background-position: 79% 100%;
    }

    100% {
        background-position: 22% 0%;
    }
`;

const Wrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  background: ${({ theme }) => theme.applySection.bg};
  background-size: 400% 400%;
  animation: ${animation} 5s ease infinite;
`;

const IconBlock = styled.div`
  display: flex;
  align-itemx: flex-start;
  max-width: 500px;

  & > svg {
    width: 65px;
    height: 65px;
    margin-right: 15px;
    color: ${({ theme }) => theme.applySection.icon};
  }
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.applySection.title};
  font-size: 30px;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.applySection.text};
  font-weight: 300;
`;

export const ApplySection: React.FC = () => {
  const { toggleFeedback } = useContext(FeedbackFormContext);
  const openFeedback = useCallback(() => toggleFeedback({ visible: true }), []);

  const theme = useTheme();

  const Icon = useIcon(content.applySection.icon);

  return (
    <Wrapper>
      <Container>
        <IconBlock>
          <Icon />
          <div>
            <Title
              dangerouslySetInnerHTML={{
                __html: content.applySection.title,
              }}
            />
            <Text
              dangerouslySetInnerHTML={{
                __html: content.applySection.text,
              }}
            />
          </div>
        </IconBlock>
        <ActionButton
          onClick={openFeedback}
          icon={content.applySection.button.icon}
          style={{ ...theme.applySection.button, marginLeft: 100 }}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: content.applySection.button.title,
            }}
          />
        </ActionButton>
      </Container>
    </Wrapper>
  );
};
