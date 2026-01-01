import styled from "styled-components";

export const StyledWrapper = styled.div`
  @media (min-width: 1200px) {
    height: 50vh;
  }
`;

export const StyledSection = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    width: 100%;
  }
`;
export const StyledMainSection = styled.div`
  @media (min-width: 1200px) {
    flex: 0.8;
  }
`;

export const StyledIntro = styled.div`
  margin-bottom: 30px;

  h4 {
    font-weight: normal;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 10px;
  }

  p {
    font-family: var(--font-stack-1);
    font-size: 0.8em;
    color: var(--grey-2);
    line-height: 1.5;

    span {
      color: var(--purple);
    }
  }
`;

export const StyledSkillsSection = styled.div`
  h4 {
    font-weight: normal;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 10px;
  }
`;

export const StyledSkills = styled.div`
  div:nth-child(2) > div:nth-child(2),
  div:nth-child(3) > div:nth-child(2) {
    margin-top: 20px;
  }

  > div:nth-child(2),
  > div:nth-child(3) {
    margin-top: 20px;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px; /* 🔥 increase spacing here */

    > div:nth-child(2),
    > div:nth-child(3) {
      margin-top: 0;
    }
  }
`;

export const StyledSkill = styled.div`
  font-family: var(--font-stack-1);

  h5 {
    font-size: 1em;
    font-weight: normal;
    text-transform: capitalize;
    color: var(--grey-2);
    margin-bottom: 5px;
  }

  p {
    color: var(--grey-2);
    font-size: 0.8em;
    line-height: 1.5;
  }
`;

export const StyledSidebar = styled.div`
  margin-top: 20px;

  @media (min-width: 1200px) {
    flex: 0.2;
    padding: 0 20px;
  }
`;

export const StyledServices = styled.div`
  h4 {
    font-weight: normal;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 10px;
  }

  li {
    list-style: none;
    text-transform: capitalize;
    font-family: var(--font-stack-1);
    font-size: 0.8em;
    margin-bottom: 10px;
  }
`;

export const StyledOtherServices = styled.div`
  margin-top: 20px;

  h4 {
    font-weight: normal;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 10px;
  }

  li {
    list-style: none;
    text-transform: capitalize;
    font-family: var(--font-stack-1);
    font-size: 0.8em;
    margin-bottom: 10px;
  }
`;

export const StyledActions = styled.div`
  font-size: 0.8em;
  font-family: var(--font-stack-3);
  text-transform: uppercase;
  margin-top: 30px;

  > div {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  span {
    color: var(--green);
  }
`;

export const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;

  svg {
    height: 20px;
    width: 20px;
  }
`;
