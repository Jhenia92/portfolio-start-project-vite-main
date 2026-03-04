import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="">
            <Icon iconId={"facebook"} />
          </a>
        </li>
        <li>
          <a href="">
            <Icon iconId={"insta"} />
          </a>
        </li>
        <li>
          <a href="">
            <Icon iconId={"twitter"} />
          </a>
        </li>
        <li>
          <a href="">
            <Icon iconId={"skype"} />
          </a>
        </li>
        <li>
          <a href="">
            <Icon iconId={"linked"} />
          </a>
        </li>
        <li>
          <a href="">
            <Icon iconId={"dribbble"} />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="mailto:lee.tommy22@gmail.com">
            <Icon iconId="mail" />
            lee.tommy22@gmail.com
          </a>
        </li>
        <li>
          <a href="tel:+001 235 1245 2356">
            <Icon iconId="phone" />
            +001 235 1245 2356
          </a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ul {
    display: flex;
    gap: 25px;
  }
`;
