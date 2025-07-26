import { Button, Collapse, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import React from "react";

function Day06() {
  return (
    <>
      {/* <Tabs
        defaultActiveKey="1"
        centered
        tabBarExtraContent={<Button>LOGO</Button>}
        type="card"
      >
        <TabPane tab="Details" key="1">
          <p>Product Details go here.</p>
        </TabPane>
        <TabPane tab="Reviews" key="2"></TabPane>
        <TabPane tab="Shipping" key="3"></TabPane>
      </Tabs> */}

      <Collapse accordion>
        <Collapse.Panel header="How do I return a product?" key="1">
          <p>You can return within 30 days...</p>
        </Collapse.Panel>
        <Collapse.Panel header="Where is my order?" key="2">
          <p>Check your email for tracking...</p>
        </Collapse.Panel>
      </Collapse>
    </>
  );
}

export default Day06;
