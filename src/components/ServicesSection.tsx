import React from "react";
import {
  CodeOutlined,
  BgColorsOutlined,
  ThunderboltOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../i18n/LanguageContext";
import { services } from "../data/content";
import Reveal from "./Reveal";

const icons = [
  CodeOutlined,
  BgColorsOutlined,
  ThunderboltOutlined,
  ApiOutlined,
];
const accents = [
  "var(--grad-indigo)",
  "var(--grad-teal)",
  "var(--grad-indigo)",
  "var(--grad-teal)",
];

const ServicesSection: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">{t("services.eyebrow")}</span>
            <h2>{t("services.title")}</h2>
            <p>{t("services.subtitle")}</p>
          </div>
        </Reveal>
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
              <Reveal key={service.title[lang]} delay={i * 100}>
                <div
                  className="hover-lift"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-card)",
                    padding: 26,
                    height: "100%",
                  }}
                >
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: accents[i],
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 19,
                      boxShadow: "0 8px 18px rgba(20,25,43,0.16)",
                    }}
                  >
                    <Icon />
                  </span>
                  <h4
                    style={{ fontSize: 16.5, marginTop: 18, lineHeight: 1.35 }}
                  >
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
              </Reveal>
            );
          })}
        </div>
      </div>

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
