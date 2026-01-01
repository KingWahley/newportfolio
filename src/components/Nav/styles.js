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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 250px;
  font-family: var(--font-stack-4);
  text-transform: capitalize;
  font-size: 0.8em;
  margin-top: -20px;

  a {
    text-decoration: none;
    color: var(--white);
    font-family: var(--font-stack-3);
  }

  a:first-child {
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
  }

  a:nth-child(2) {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
  }

  a:nth-child(3) {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, -50%);
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

// export const StyledPointer = styled.div`
//         position: absolute;
//         top: 50%;
//         left: -30px;
//         transform: translateY(-50%);
//         width: 0;
//         height: 0;
//         border-right: 20px solid var(--green);
//         border-top: 5px solid transparent;
//         border-bottom: 5px solid transparent;
//         z-index: -2;
// `

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
