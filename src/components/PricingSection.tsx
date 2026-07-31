import React from "react";
import { Button } from "antd";
import { CheckOutlined, PhoneOutlined } from "@ant-design/icons";
import { useLanguage } from "../i18n/LanguageContext";
import { products } from "../data/content";
import { buildPlanMailto } from "../utils/mailto";
import Reveal from "./Reveal";

const PricingSection: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="pricing" className="section">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">{t("pricing.eyebrow")}</span>
            <h2>{t("pricing.title")}</h2>
            <p>{t("pricing.subtitle")}</p>
          </div>
        </Reveal>

        {products.map((product, pIdx) => {
          const accentVar =
            product.accent === "indigo" ? "var(--indigo)" : "var(--teal)";
          return (
            <div key={product.slug} style={{ marginBottom: 48 }}>
              <Reveal>
                <h3
                  style={{
                    fontSize: 18,
                    marginBottom: 18,
                    color: "var(--ink)",
                  }}
                >
                  {product.name}
                </h3>
              </Reveal>
              <div
                className="pricing-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                  alignItems: "stretch", // Ensures cards in the same row are equal height
                }}
              >
                {product.pricing.map((tier, tIdx) => (
                  <Reveal key={tier.id} delay={tIdx * 120}>
                    <div
                      key={tier.id}
                      className="hover-lift"
                      style={{
                        position: "relative",
                        display: "flex", // Added flex layout
                        flexDirection: "column", // Stack items vertically
                        background: "var(--white)",
                        border: tier.popular
                          ? `1.5px solid ${accentVar}`
                          : "1px solid var(--line)",
                        borderRadius: "var(--radius-card)",
                        padding: 28,
                        height: "100%", // Stretch to fill grid cell
                      }}
                    >
                      {tier.popular && (
                        <span
                          className="mono"
                          style={{
                            position: "absolute",
                            top: -12,
                            right: 24,
                            background: accentVar,
                            color: "#fff",
                            fontSize: 11,
                            padding: "4px 10px",
                            borderRadius: 999,
                          }}
                        >
                          {t("pricing.mostPopular")}
                        </span>
                      )}
                      <span
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          color: "var(--ink)",
                        }}
                      >
                        {tier.name[lang]}
                      </span>
                      <div
                        style={{
                          marginTop: 14,
                          display: "flex",
                          alignItems: "baseline",
                          gap: 6,
                        }}
                      >
                        <span
                          className="mono"
                          style={{
                            fontSize: 34,
                            fontWeight: 600,
                            color: "var(--ink)",
                          }}
                        >
                          {tier.price[lang]}
                        </span>
                        <span
                          style={{ fontSize: 13, color: "var(--slate-soft)" }}
                        >
                          {t("pricing.perYear")}
                        </span>
                      </div>
                      <span
                        className="tag-chip"
                        style={{ marginTop: 12, display: "inline-flex" }}
                      >
                        {tier.sites[lang]}
                      </span>

                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "20px 0 24px",
                        }}
                      >
                        {tier.bullets.map((b) => (
                          <li
                            key={b[lang]}
                            style={{
                              display: "flex",
                              gap: 10,
                              marginBottom: 10,
                              fontSize: 14,
                            }}
                          >
                            <CheckOutlined
                              style={{ color: accentVar, marginTop: 3 }}
                            />
                            <span>{b[lang]}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Added a class here for responsive targeting */}
                      <div className="pricing-buttons">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={buildPlanMailto(
                            product.name,
                            tier.name[lang],
                            tier.price[lang],
                            lang,
                          )}
                          style={{ flex: 1 }}
                        >
                          <Button
                            size="large" // Added size="large" to match the Contact button height
                            block
                            type={tier.popular ? "primary" : "default"}
                            className={
                              tier.popular
                                ? product.accent === "teal"
                                  ? "btn-teal"
                                  : "btn-primary"
                                : "btn-ghost"
                            }
                          >
                            {t("pricing.cta")}
                          </Button>
                        </a>

                        {/* Contact Hotline Button */}
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="zalo:0368571310"
                          style={{ flex: 1 }}
                        >
                          <Button
                            size="large"
                            block
                            type="default"
                            className="btn-ghost btn-contact"
                          >
                            <PhoneOutlined style={{ color: "#E11D48" }} />
                            <span style={{ color: "#E11D48" }}>
                              {t("pricing.contact")}
                            </span>
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        /* Default layout for buttons (desktop / tablet) */
        .pricing-buttons {
          margin-top: auto;
          display: flex;
          gap: 10px;
        }

        /* Stack cards into a single column on tablet/mobile */
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Stack buttons vertically on small mobile devices to prevent overflow */
        @media (max-width: 480px) {
          .pricing-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default PricingSection;
