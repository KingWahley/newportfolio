import styled from 'styled-components'
import {motion} from "framer-motion"

const animations = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100}
}

// const mobileStyle = {
//     '@media(max-width: 1199.99px)': {
//         marginTop: '30%'
//     }
// }

const AnimatedPage = ({children}) => {
    return (
        <StyledDiv as={motion.div} variants={animations} initial="intial" animate="animate" exit="exit" transition={{duration: 0.5}}>
            {children}
        </StyledDiv>
    );
}
 
export default AnimatedPage;


const StyledDiv = styled.div`

    /* /* @media(max-width: 800px){
        margin-top: 40%;
    } */

    /* @media(max-width: 1199.99px){
        margin-top: 50px;;
    } */
`