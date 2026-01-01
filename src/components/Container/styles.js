import styled from 'styled-components'

export const StyledWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    /* overflow: hidden; */

    @media(max-width: 700px){
        width: ${props => props.margin ? '100%' : '80%'};
        margin: ${props => props.margin ? 0 : '0 auto'};
    }
`