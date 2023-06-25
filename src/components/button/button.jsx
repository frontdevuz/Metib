import React from "react";
import { Button, Space } from "antd";
import "./button.scss";

const Btn = () => (
  <React.Fragment>
    <Space direction="vertical" style={{ width: "100%" }}>
      <Button type="primary" block>
        Primary
      </Button>
    </Space>
  </React.Fragment>
);

export default Btn;
