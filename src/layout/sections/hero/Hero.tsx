import styled from "styled-components";
import photo from "../../../assets/images/popkovich.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Hero = () => {
  return (
    <StyledHero>
      <FlexWrapper $direction="column" $justify="center" $align="center">
        <HeroTitle>
          Building designs that work purely driven by Passion for art and Design
        </HeroTitle>
        <HeroText>
          Labore accusam in modo compungi, iacentem substantiales um se sed esse
          haec. Possit facis qui a a a patriam Dianae sibi aperit honestate
          doctrinam
        </HeroText>
      </FlexWrapper>
    </StyledHero>
  );
};

const StyledHero = styled.main`
  background-color: #222222;
  outline: 2px solid red;
  background-image: url(${photo});
  background-repeat: no-repeat;
  background-position: right;

  min-height: 100vh;
  width: 100%;
`;

const HeroTitle = styled.h1`
  font-weight: 900;
  font-size: 110px;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #fff;
`;
const HeroText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #fff;
`;
