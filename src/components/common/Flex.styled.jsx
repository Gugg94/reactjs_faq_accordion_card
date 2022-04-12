import styled from "@emotion/styled";
import MQ from "../../global/MediaQueries";

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 50px;

  & > div,
  & > ul {
    flex: 1;
  }

  ${MQ.mobile} {
    flex-direction: "row";
    text-align: left;
  }
`;

export default Flex;
