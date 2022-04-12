import styled from "@emotion/styled";
import MQ from "../../global/MediaQueries";

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  & > div,
  & > ul {
    flex: 1;
  }

  ${MQ.tablet} {
    flex-direction: row;
  }
`;

export default Flex;
