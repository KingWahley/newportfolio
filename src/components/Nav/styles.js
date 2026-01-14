import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  /* @media(max-width: 1199.99px){
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: var(--black-2);
    } */

  @media (min-width: 1200px) {
    height: 25vh;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  H3 {
    color: var(--purple);
    padding: 10px;
  }
`;

export const StyledLogo = styled.div`
  width: 100px;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  width: 100%;
  padding:30px

  a {
    text-decoration: none;
    color: var(--white);
    font-family: var(--font-stack-3);
    font-size: 1.25rem;
  }

  /* MOBILE */
  @media (max-width: 1199.99px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    background: var(--black-2);
    flex-direction: column;
    justify-content: center;
    gap: 32px;

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.35s ease;
    z-index: 9;

    a {
      font-size: 1.1rem;
    }
  }
`;

export const StyledHamburger = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;

  display: none;
  width: 34px;
  height: 24px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 999;

  span {
    width: 100%;
    height: 3px;
    background: var(--purple);
    border-radius: 2px;
  }

  @media (max-width: 1199.99px) {
    display: flex;
  }
`;

export const StyledWheel = styled.div`
  position: relative;
  padding: 2px;
  height: 50px;
  width: 50px;
  z-index: 3;
  border-radius: 50%;
  border: 2px solid var(--green);

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
`;

export const StyledPointer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -20px;
  height: 5px;
  width: 5px;
  border-radius: 50%;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 63, 109, 0.6);
  z-index: 4;
  border-radius: 50%;
`;

export const StyledNavTrigger = styled.div`
    display: ${(props) => (props.showNavWheel ? "none" : "block")}
    height: 50px;
    width: 50px;
    background: var(--yellow);
    border-radius: 50%;
    cursor: pointer;

    @media(min-width: 1200px){
        display: none;
    }
`;
