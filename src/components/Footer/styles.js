import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;

  @media (min-width: 1200px) {
    height: 15vh;
  }
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > button {
      background: radial-gradient(
        139.47% 802.11% at 85.84% 0%,
        #5445fc 0%,
        #ba4abc 100%
      );
      outline: none;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      font-family: var(--font-stack-3);
      text-transform: capitalize;
      color: var(--white);
    }
  }
`;

export const StyledSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`;

export const StyledIcon = styled.div`
  a {
    text-decoration: none;
  }

  svg {
    color: var(--purple-2);
  }
`;

export const StyledCopyrightText = styled.p`
  font-family: var(--font-stack-2);
  text-transform: uppercase;
  font-size: 0.8em;
  color: var(--purple-2);
  border-top: 1px solid var(--grey-3);
  padding-top: 10px;
`;
