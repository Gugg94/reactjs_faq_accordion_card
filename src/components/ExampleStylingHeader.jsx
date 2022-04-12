import styled from "@emotion/styled";

// Could be moved to separate file
const StyledHeader = styled.h1`
  background-color: ${({ theme }) => theme.colors.header};
  &:hover {
    background-color: green;
  }
  @media (min-width: 768px) {
    background-color: beige;
  }
`;

function Header(props) {
  return <StyledHeader>{props.title}</StyledHeader>;
}

export default Header;
