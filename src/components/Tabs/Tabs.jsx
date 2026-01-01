import React from 'react'
import { StyledTab, StyledTabsWrapper, StyledTabs, inActiveTab, StyledTabPanel } from './styles'


export const Tab = ({label, color, active, onClick}) => {
    return (
        <StyledTab
            color={color}
            active={active}
            onClick={onClick}
            inActiveStyle={inActiveTab}
        >
            <span></span>
            {label}
        </StyledTab>

    )
}

export const Tabs = ({selectedTab, onChange, children}) => {

    const tabs = children.map((child) => {

        const handleClick = (e) =>{
            onChange(e, child.props.value)
        }

        return React.cloneElement(child, {
            active: child.props.value === selectedTab,
            onClick: handleClick
        })
    })

    return (
        <StyledTabsWrapper>
            <StyledTabs>
                {tabs}
            </StyledTabs>
        </StyledTabsWrapper>
    )
}

export const TabPanel = ({ children, value, selectedIndex }) => {
    const hidden = value !== selectedIndex

    return (
        <StyledTabPanel hidden={hidden} active={!hidden}>
            {children}
        </StyledTabPanel>
    )
}