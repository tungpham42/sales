import React from "react";
import { Button } from "antd";

const HotlineButton: React.FC = () => {
  return (
    <a
      style={{
        display: "block",
        width: "fit-content",
        margin: "auto",
      }}
      rel="noreferrer"
      target="_blank"
      href="zalo:0368571310"
    >
      <Button type="primary" size="large" className="btn-primary">
        Hotline: 0368571310
      </Button>
    </a>
  );
};

export default HotlineButton;
