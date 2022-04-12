import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const softRed = "hsl(14, 88%, 65%)";

const StyledFaqItem = styled.li``;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  cursor: pointer;

  &:hover {
    color: ${softRed};
  }
`;

const Answer = styled.div`
  color: hsl(240, 6%, 50%);
  text-align: left;

  p {
    margin-top: 0;
  }
`;

const Divider = styled.hr`
  border: none;
  background-color: hsl(240, 5%, 91%);
  height: 2px;
`;

function FaqItem({ item: { question, answer } }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledFaqItem>
      <Question
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <p
          css={css`
            font-weight: ${expanded && 700};
          `}
        >
          {question}
        </p>
        {expanded ? (
          <FaChevronUp color={softRed} />
        ) : (
          <FaChevronDown color={softRed} />
        )}
      </Question>
      <Answer>
        {expanded && <p>{answer}</p>}
        <Divider />
      </Answer>
    </StyledFaqItem>
  );
}

export default FaqItem;
