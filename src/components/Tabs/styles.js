import styled from 'styled-components'

export const StyledTab = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-stack-1);
    font-size: 0.8em;
    margin: 0 10px;
    cursor: pointer;
    ${(props) => !props.active && props.inActiveStyle}

    span{
        display: ${props => props.active ? 'inline-block' : 'none'};
        height: 3px;
        width: 3px;
        background: var(--red);
        border-radius: 50%;
        margin-right: 10px;
    }
    
    :first-child{
        margin-left: 0;
    }
    
    :last-child{
        margin-right: 0;
    }

    :hover{
        opacity: 1;
    }
`

export const StyledTabsWrapper = styled.div`
    margin: 20px 0;
    
`

export const StyledTabs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const inActiveTab = {
    opacity: 0.65
}

export const StyledTabPanel = styled.div`
    
`