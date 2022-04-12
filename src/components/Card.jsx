import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Flex from "./common/Flex.styled";
import FaqItems from "../Content/FaqItems";
import FaqItem from "./FaqItem";
import MQ from "../global/MediaQueries";

const StyledCard = styled.div`
  background-color: white;
  color: black;
  border-radius: 25px;
`;

const FaqList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Image = styled.img`
  max-width: 100%;
`;

function Card() {
  return (
    <StyledCard>
      <Flex>
        <div>
          <Image src="./images/illustration-woman-online-desktop.svg" alt="" />
        </div>
        <div
          css={css`
            padding: 50px;
          `}
        >
          <div
            css={css`
              text-align: center;

              ${MQ.tablet} {
                text-align: left;
              }
            `}
          >
            <h1>FAQ</h1>
          </div>
          <FaqList>
            {FaqItems.map((item, index) => (
              <FaqItem key={index} item={item} />
            ))}
          </FaqList>
        </div>
      </Flex>
    </StyledCard>
  );
}

export default Card;
