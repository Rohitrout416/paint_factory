import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Heading from './Heading';
import About from './About';
import Contacts from './Contacts';

function HomePage(){

    return (
    <div className="app-container">
      <Tabs variant='enclosed' className="tabs-container">
        <TabList className="tab-list">
          <Heading className="heading" />
          <Tab className="tab">About</Tab>
          <Tab className="tab">Contact</Tab>
        </TabList>
        <TabPanels className="tab-panels">
          <TabPanel className="tab-panel">
            <About />
          </TabPanel>
          <TabPanel className="tab-panel">
            <Contacts />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    );
}

export default HomePage;