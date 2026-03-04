import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Skills = () => {
  return (
    <StyledSkill>
      <FlexWrapper $justify="center" $align="center">
        <SectionSkills>
          <SkillTitle> Skills </SkillTitle>
          <SkillList>
            <SkillItem>
              PHOTOSHOP
              <ItemProgress></ItemProgress>
            </SkillItem>
            <SkillItem>
              Illustrator
              <ItemProgress></ItemProgress>
            </SkillItem>
            <SkillItem>
              Figma
              <ItemProgress></ItemProgress>
            </SkillItem>
            <SkillItem>
              HTML/ CSS
              <ItemProgress></ItemProgress>
            </SkillItem>
            <SkillItem>
              JQuery
              <ItemProgress></ItemProgress>
            </SkillItem>
          </SkillList>
        </SectionSkills>

        <div>
          {/* сделай карточку */}
          <h2> Awards & Recognitions </h2>

          <div>
            <h3>2004</h3>
            <span>Designer of the month</span>
            <p>
              iacentem substantiales um se sed esse haec Possit facis qui a a a
              patriam .
            </p>
          </div>
        </div>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.section`
  display: flex;
  justify-content: space-between;
  outline: 2px solid red;
  height: 100vh;
  width: 100%;
`;
const SectionSkills = styled.div`
  display: flex;
  flex-direction: column;
`;
const SkillTitle = styled.h2``;
const SkillList = styled.ul``;
const SkillItem = styled.li``;
const ItemProgress = styled.span``;
