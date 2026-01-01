import { useState } from "react";
import { Tab, Tabs, TabPanel } from "../../components/Tabs/Tabs";
import PortfolioCarousel from "../../components/Portfolio/PortfolioCarousel/PortfolioCarousel";
import Container from "../../components/Container/Container";
import { StyledWrapper } from "./styles";
// import { IconOne, IconTwo, IconThree } from '../../components/Portfolio/PortfolioTabIcons/PortfolioTabIcons';
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <AnimatedPage>
      <StyledWrapper>
        <Container removeMargin={true}>
          <Tabs selectedTab={activeTab} onChange={handleChange}>
            <Tab key={1} color="#DE0F0F" label="Websites" value={1} />
            <Tab key={2} color="#DE0F0F" label="Web Applications" value={2} />
            <Tab
              key={3}
              color="#DE0F0F"
              label="Mobile Applications"
              value={3}
            />
            <Tab key={4} color="#DE0F0F" label="Others" value={4} />
          </Tabs>
          <div>
            <TabPanel value={activeTab} selectedIndex={1}>
              <PortfolioCarousel />
            </TabPanel>
            <TabPanel value={activeTab} selectedIndex={2}>
              <ComingSoon />
            </TabPanel>
            <TabPanel value={activeTab} selectedIndex={3}>
              <ComingSoon />
            </TabPanel>
            <TabPanel value={activeTab} selectedIndex={4}>
              <ComingSoon />
            </TabPanel>
          </div>
        </Container>
      </StyledWrapper>
    </AnimatedPage>
  );
};

export default Portfolio;
