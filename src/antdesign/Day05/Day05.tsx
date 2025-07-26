import { EditOutlined } from "@ant-design/icons";
import { Button, Drawer, Modal, Popover, Space, Tooltip } from "antd";
import React, { useState } from "react";

function Day05() {
  const [openDrawer, setOpenDrawer] = useState(false);

  //   const [openModal, setOpenModal] = useState(false);
  //   const [confirmLoading, setConfirmLoading] = useState(false);

  //   const handleOk = () => {
  //     setConfirmLoading(true);
  //     setTimeout(() => {
  //       setOpenModal(false);
  //       setConfirmLoading(false);
  //     }, 3000);
  //   };

  //   const handleCancel = () => {
  //     setOpenModal(false);
  //   };

  return (
    <div>
      {/* <Button type="primary" onClick={() => setOpenModal(true)}>
        Open Modal
      </Button>
      <Modal
        title="Edit Product"
        style={{ top: 20 }}
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        confirmLoading={confirmLoading}
        cancelText="Close"
      >
        Editing:
      </Modal> */}

      <Button type="primary" onClick={() => setOpenDrawer(true)}>
        Open Drawer
      </Button>
      <Drawer
        title="Edit Product"
        width={720}
        styles={{
          body: {
            paddingBottom: 20,
          },
        }}
        placement="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        closable={true}
        extra={
          <Space>
            <Button type="primary">Submit</Button>
          </Space>
        }
      >
        <p>Full form goes here</p>
        <Tooltip title="Click to edit">
          <Button icon={<EditOutlined />} />
        </Tooltip>

        <Popover
          content={<div>Product ID: 1234</div>}
          title="Details"
          trigger={["click"]}
        >
          <Button>Info</Button>
        </Popover>
      </Drawer>
    </div>
  );
}

export default Day05;
