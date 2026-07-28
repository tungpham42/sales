import React from "react";
import { StarFilled } from "@ant-design/icons";
import { useLanguage } from "../i18n/LanguageContext";
import { testimonials } from "../data/content";
import Reveal from "./Reveal";

const TestimonialsSection: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">{t("testimonials.eyebrow")}</span>
            <h2>{t("testimonials.title")}</h2>
          </div>
        </Reveal>

        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
          }}
        >
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 120}>
              <div
                className="hover-lift"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-card)",
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <StarFilled
                        key={idx}
                        style={{ color: "var(--amber)", fontSize: 13 }}
                      />
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: "var(--ink)",
                    }}
                  >
                    &ldquo;{item.quote[lang]}&rdquo;
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginTop: 24,
                  }}
                >
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "var(--grad-indigo)",
                      color: "var(--amber)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 700,
                      boxShadow: "0 8px 18px rgba(59,76,202,0.28)",
                    }}
                    className="mono"
                  >
                    {item.initials}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--ink)",
                      }}
                    >
                      {item.name}
                    </div>
                    <div style={{ fontSize: 12.5, color: "var(--slate-soft)" }}>
                      {item.role[lang]}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
