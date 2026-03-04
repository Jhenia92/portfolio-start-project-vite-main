import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { myTheme } from "../../styles/Theme.styled";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper>
        <Logo />
        <Menu />
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${myTheme.colors.primary};
  min-height: 70px;
`;
