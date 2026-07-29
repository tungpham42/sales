import React from "react";
import { Button } from "antd";

const HotlineButton: React.FC = () => {
  return (
    <a
      style={{
        display: "block",
        width: "fit-content",
        margin: "auto",
        position: "relative",
        bottom: "-60px",
      }}
      rel="noreferrer"
      target="_blank"
      href="tel:+84368571310"
    >
      <Button type="primary" size="large" className="btn-primary">
        Hotline: 0368571310
      </Button>
    </a>
  );
};

export default HotlineButton;
