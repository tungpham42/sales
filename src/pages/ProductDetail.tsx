import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../i18n/LanguageContext";
import { products } from "../data/content";
import EditorWindow from "../components/EditorWindow";
import CtaBanner from "../components/CtaBanner";
import Reveal from "../components/Reveal";
import { buildPlanMailto } from "../utils/mailto";

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="container section" style={{ textAlign: "center" }}>
        <h2>{t("detail.notFoundTitle")}</h2>
        <p style={{ marginTop: 12, color: "var(--slate-soft)" }}>
          {t("detail.notFoundBody")}
        </p>
        <Link to="/" style={{ display: "inline-block", marginTop: 24 }}>
          <Button className="btn-ghost" icon={<ArrowLeftOutlined />}>
            {t("detail.back")}
          </Button>
        </Link>
      </div>
    );
  }

  const accentVar =
    product.accent === "indigo" ? "var(--indigo)" : "var(--teal)";

  return (
    <>
      <section className="section--tight">
        <div className="container">
          <Link to="/">
            <Button
              className="btn-ghost"
              icon={<ArrowLeftOutlined />}
              style={{ marginBottom: 32 }}
            >
              {t("detail.back")}
            </Button>
          </Link>

          <div
            className="detail-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "center",
            }}
          >
            <Reveal>
              <div>
                <span
                  className="eyebrow"
                  style={
                    product.accent === "teal"
                      ? undefined
                      : {
                          color: accentVar,
                          background: "rgba(59,76,202,0.08)",
                          borderColor: "rgba(59,76,202,0.18)",
                        }
                  }
                >
                  {t("detail.overview")}
                </span>
                <h1 style={{ fontSize: 34, lineHeight: 1.25, marginTop: 14 }}>
                  {product.name}
                </h1>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 16,
                    color: "var(--slate-soft)",
                  }}
                >
                  {product.tagline[lang]}
                </p>
                <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.75 }}>
                  {product.summary[lang]}
                </p>
                <a href="#pricing-detail">
                  <Button
                    size="large"
                    type="primary"
                    className={
                      product.accent === "teal" ? "btn-teal" : "btn-primary"
                    }
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                    style={{ marginTop: 26 }}
                  >
                    {t("detail.cta")}
                  </Button>
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <EditorWindow tab={product.windowTab} dark>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {product.chips.map((chip) => (
                    <span
                      key={chip}
                      className="tag-chip"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        borderColor: "rgba(255,255,255,0.14)",
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {[92, 74, 58].map((w) => (
                    <div
                      key={w}
                      style={{
                        height: 9,
                        borderRadius: 4,
                        width: `${w}%`,
                        background: "rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </div>
              </EditorWindow>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <h2>{t("detail.features")}</h2>
            </div>
          </Reveal>
          <div
            className="feature-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 20,
            }}
          >
            {product.features.map((f, i) => (
              <Reveal key={f.title[lang]} delay={(i % 4) * 90}>
                <div
                  key={f.title[lang]}
                  className="hover-lift"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-card)",
                    padding: 22,
                    display: "flex",
                    gap: 14,
                    height: "100%",
                  }}
                >
                  <span
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background:
                        product.accent === "teal"
                          ? "rgba(43,184,163,0.12)"
                          : "rgba(59,76,202,0.1)",
                      color: accentVar,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckOutlined />
                  </span>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        color: "var(--ink)",
                        fontSize: 15,
                      }}
                    >
                      {f.title[lang]}
                    </div>
                    <div
                      style={{
                        marginTop: 6,
                        fontSize: 13.5,
                        lineHeight: 1.6,
                        color: "var(--slate-soft)",
                      }}
                    >
                      {f.desc[lang]}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing-detail" className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <h2>{t("pricing.title")}</h2>
            </div>
          </Reveal>
          <div
            className="pricing-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              alignItems: "stretch", // Added to stretch cards to identical heights
            }}
          >
            {product.pricing.map((tier, i) => (
              <Reveal key={tier.id} delay={i * 130}>
                <div
                  key={tier.id}
                  className="hover-lift"
                  style={{
                    position: "relative",
                    display: "flex", // Added Flexbox layout
                    flexDirection: "column", // Stack contents vertically
                    height: "100%", // Stretch card to fill the grid cell
                    background: "var(--white)",
                    border: tier.popular
                      ? `1.5px solid ${accentVar}`
                      : "1px solid var(--line)",
                    borderRadius: "var(--radius-card)",
                    padding: 28,
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
                    <span style={{ fontSize: 13, color: "var(--slate-soft)" }}>
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

                  {/* Updated button container with side-by-side flex layout */}
                  <div style={{ marginTop: "auto", display: "flex", gap: 10 }}>
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
      </section>

      <CtaBanner />

      <style>{`
        @media (max-width: 900px) {
          .detail-grid, .feature-grid, .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

export default ProductDetail;
