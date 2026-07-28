import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

const CtaBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      className="section--ink"
      style={{ padding: "92px 0", position: "relative", overflow: "hidden" }}
    >
      <span
        className="hero-blob"
        style={{
          width: 460,
          height: 460,
          top: -180,
          left: "50%",
          marginLeft: -230,
          background:
            "radial-gradient(circle, rgba(59,76,202,0.4), transparent 70%)",
        }}
      />
      <span
        className="hero-blob"
        style={{
          width: 300,
          height: 300,
          bottom: -140,
          right: "18%",
          background:
            "radial-gradient(circle, rgba(43,184,163,0.32), transparent 70%)",
          animationDelay: "-8s",
        }}
      />

      <div
        className="container"
        style={{
          textAlign: "center",
          maxWidth: 620,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Reveal>
          <h2 style={{ fontSize: 32, lineHeight: 1.25 }}>{t("cta.title")}</h2>
        </Reveal>
        <Reveal delay={100}>
          <p
            style={{
              marginTop: 16,
              fontSize: 15.5,
              color: "rgba(255,255,255,0.68)",
            }}
          >
            {t("cta.subtitle")}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <a href="/#pricing">
            <Button
              size="large"
              className="cta-amber-btn"
              style={{
                marginTop: 32,
                background:
                  "linear-gradient(135deg, #f5bb5f, var(--amber) 60%, var(--amber-deep))",
                border: "none",
                color: "var(--ink)",
                fontWeight: 700,
                height: 48,
                padding: "0 28px",
                borderRadius: 11,
                boxShadow: "0 14px 34px rgba(242,169,59,0.32)",
              }}
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              {t("cta.button")}
            </Button>
          </a>
        </Reveal>
      </div>

      <style>{`
        .cta-amber-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(242,169,59,0.42) !important;
          filter: brightness(1.03);
        }
      `}</style>
    </section>
  );
};

export default CtaBanner;
