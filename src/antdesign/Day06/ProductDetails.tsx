import { Card, Collapse, Tabs, Grid } from "antd";
import React from "react";

const { TabPane } = Tabs;
const { Panel } = Collapse;
const { useBreakpoint } = Grid;

function ProductDetails() {
  const screens = useBreakpoint();
  const tabPosition = screens.md ? "top" : "left";

  return (
    <Card style={{ margin: "40px auto", padding: 20 }}>
      <Tabs
        defaultActiveKey="1"
        tabPosition={tabPosition}
        style={{ marginBottom: 24 }}
      >
        <TabPane key="1" tab="Overview"></TabPane>
        <TabPane key="2" tab="Specifications"></TabPane>
        <TabPane key="3" tab="Reviews"></TabPane>
      </Tabs>
      <Collapse accordion>
        <Panel header="Warranty Info" key="1"></Panel>
        <Panel header="Support" key="2"></Panel>
        <Panel header="Shipping Policy" key="3"></Panel>
      </Collapse>
    </Card>
  );
}

export default ProductDetails;
