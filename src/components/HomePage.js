import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react';
import Heading from './Heading';
import About from './About';
import Contacts from './Contacts';

function HomePage(){

    const [tabIndex, setTabIndex] = useState(0);

    return (
    <div className="app-container">
      <Tabs variant='enclosed' className="tabs-container" index={tabIndex}>
        <TabList className="tab-list">
          <Heading className="heading" />
          <Tab className="tab" onClick={()=>setTabIndex(0)}>About</Tab>
          <Tab className="tab" onClick={()=>setTabIndex(1)}>Contact</Tab>
        </TabList>
        <TabPanels className="tab-panels">
          <TabPanel className="tab-panel">
            <About />
            <Button w="100%" colorScheme="blue" size="lg" onClick={()=>setTabIndex(1)}>
              Contact Us Today!
            </Button>
          </TabPanel>
          <TabPanel className="tab-panel">
            <Contacts />
            <div className="centered-container">
              <Button w="50%" colorScheme="green" onClick={() => setTabIndex(0)}>
                Thank You!
              </Button>
          </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </div>
    );
}

export default HomePage;