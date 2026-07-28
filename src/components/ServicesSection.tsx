import React from "react";
import {
  CodeOutlined,
  BgColorsOutlined,
  ThunderboltOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useLanguage } from "../i18n/LanguageContext";
import { services } from "../data/content";

const icons = [
  CodeOutlined,
  BgColorsOutlined,
  ThunderboltOutlined,
  ApiOutlined,
];

const ServicesSection: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t("services.eyebrow")}</span>
          <h2>{t("services.title")}</h2>
          <p>{t("services.subtitle")}</p>
        </div>

        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title[lang]}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-card)",
                  padding: 24,
                }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "var(--paper-dim)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--indigo)",
                    fontSize: 18,
                  }}
                >
                  <Icon />
                </span>
                <h4 style={{ fontSize: 16.5, marginTop: 16, lineHeight: 1.35 }}>
                  {service.title[lang]}
                </h4>
                <p
                  style={{
                    marginTop: 8,
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "var(--slate-soft)",
                  }}
                >
                  {service.desc[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <a
        style={{
          display: "block",
          width: "fit-content",
          margin: "auto",
          position: "relative",
          bottom: "-42px",
        }}
        rel="noreferrer"
        target="_blank"
        href="tel:+84368571310"
      >
        <Button type="primary" size="large" className="btn-primary">
          Hotline: 0368571310
        </Button>
      </a>

      <style>{`
        @media (max-width: 1000px) {
          .services-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
