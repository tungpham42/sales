import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { products } from "../data/content";
import EditorWindow from "./EditorWindow";
import Reveal from "./Reveal";

const ProductsSection: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="products" className="section">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">{t("products.eyebrow")}</span>
            <h2>{t("products.title")}</h2>
            <p>{t("products.subtitle")}</p>
          </div>
        </Reveal>

        <div
          className="products-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}
        >
          {products.map((product, idx) => {
            const accentVar =
              product.accent === "indigo" ? "var(--indigo)" : "var(--teal)";
            const gradVar =
              product.accent === "indigo"
                ? "var(--grad-indigo)"
                : "var(--grad-teal)";
            const glowClass =
              product.accent === "indigo"
                ? "editor-window--glow-indigo"
                : "editor-window--glow-teal";

            return (
              <Reveal key={product.slug} delay={idx * 120}>
                <EditorWindow
                  tab={product.windowTab}
                  className={`editor-window--hover ${glowClass}`}
                >
                  <div
                    style={{
                      height: 4,
                      margin: "-26px -26px 22px",
                      background: gradVar,
                    }}
                  />
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
                    {product.accent === "teal"
                      ? "AI Chat Widget"
                      : "TinyMCE add-on"}
                  </span>
                  <h3 style={{ fontSize: 23, marginTop: 14, lineHeight: 1.3 }}>
                    {product.name}
                  </h3>
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: "var(--slate-soft)",
                    }}
                  >
                    {product.tagline[lang]}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginTop: 18,
                    }}
                  >
                    {product.chips.map((chip) => (
                      <span key={chip} className="tag-chip">
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: 22 }}>
                    <span
                      className="mono"
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.06em",
                        color: "var(--slate-soft)",
                        textTransform: "uppercase",
                      }}
                    >
                      {t("products.keyFeatures")}
                    </span>
                    <ul
                      style={{
                        listStyle: "none",
                        margin: "12px 0 0",
                        padding: 0,
                      }}
                    >
                      {product.features.slice(0, 4).map((f) => (
                        <li
                          key={f.title[lang]}
                          style={{
                            display: "flex",
                            gap: 10,
                            marginBottom: 10,
                            fontSize: 14.5,
                          }}
                        >
                          <span
                            style={{
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              background:
                                product.accent === "teal"
                                  ? "rgba(43,184,163,0.14)"
                                  : "rgba(59,76,202,0.1)",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: 1,
                            }}
                          >
                            <CheckOutlined
                              style={{ color: accentVar, fontSize: 11 }}
                            />
                          </span>
                          <span>{f.title[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={`/products/${product.slug}`}>
                    <Button
                      style={{ marginTop: 8 }}
                      className={
                        product.accent === "teal" ? "btn-teal" : "btn-primary"
                      }
                      type="primary"
                      icon={<ArrowRightOutlined />}
                      iconPosition="end"
                    >
                      {t("products.viewDetail")}
                    </Button>
                  </Link>
                </EditorWindow>
              </Reveal>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;
