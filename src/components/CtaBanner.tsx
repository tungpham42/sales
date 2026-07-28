import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useLanguage } from "../i18n/LanguageContext";

const CtaBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section--ink" style={{ padding: "80px 0" }}>
      <div
        className="container"
        style={{ textAlign: "center", maxWidth: 620 }}
      >
        <h2 style={{ fontSize: 30, lineHeight: 1.25 }}>{t("cta.title")}</h2>
        <p style={{ marginTop: 14, fontSize: 15.5, color: "rgba(255,255,255,0.68)" }}>
          {t("cta.subtitle")}
        </p>
        <a href="/#pricing">
          <Button
            size="large"
            style={{
              marginTop: 30,
              background: "var(--amber)",
              borderColor: "var(--amber)",
              color: "var(--ink)",
              fontWeight: 600,
              height: 46,
              padding: "0 26px",
              borderRadius: 10,
            }}
            icon={<ArrowRightOutlined />}
            iconPosition="end"
          >
            {t("cta.button")}
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
