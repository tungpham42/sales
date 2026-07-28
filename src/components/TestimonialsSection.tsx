import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { testimonials } from "../data/content";

const TestimonialsSection: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t("testimonials.eyebrow")}</span>
          <h2>{t("testimonials.title")}</h2>
        </div>

        <div
          className="testimonials-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {testimonials.map((item) => (
            <div
              key={item.name}
              style={{
                background: "var(--white)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-card)",
                padding: 26,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink)" }}>
                &ldquo;{item.quote[lang]}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 22 }}>
                <span
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "var(--ink)",
                    color: "var(--amber)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                  className="mono"
                >
                  {item.initials}
                </span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: 12.5, color: "var(--slate-soft)" }}>
                    {item.role[lang]}
                  </div>
                </div>
              </div>
            </div>
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
