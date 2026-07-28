import React from "react";
import { Button } from "antd";
import {
  ArrowRightOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  DownOutlined,
  MessageOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../i18n/LanguageContext";
import EditorWindow from "./EditorWindow";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section style={{ padding: "64px 0 40px" }}>
      <div
        className="container hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <span className="eyebrow">{t("hero.eyebrow")}</span>
          <h1
            style={{
              fontSize: 46,
              lineHeight: 1.14,
              fontWeight: 600,
              letterSpacing: "-0.015em",
            }}
          >
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
          </h1>
          <p
            style={{
              marginTop: 22,
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--slate-soft)",
              maxWidth: 520,
            }}
          >
            {t("hero.subtitle")}
          </p>

          <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
            <a href="/#products">
              <Button
                size="large"
                type="primary"
                className="btn-primary"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                {t("hero.ctaPrimary")}
              </Button>
            </a>
            <a href="/#products">
              <Button size="large" className="btn-teal" style={{ color: "#fff" }}>
                {t("hero.ctaSecondary")}
              </Button>
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: 22,
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
            {["hero.trust1", "hero.trust2", "hero.trust3"].map((k) => (
              <span
                key={k}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "var(--slate-soft)",
                }}
              >
                <CheckCircleOutlined style={{ color: "var(--teal)" }} />
                {t(k as any)}
              </span>
            ))}
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <EditorWindow tab={t("hero.mockToolbarLabel")}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                paddingBottom: 14,
                borderBottom: "1px solid var(--line)",
                marginBottom: 16,
                color: "var(--slate-soft)",
                fontSize: 15,
              }}
            >
              <BoldOutlined />
              <ItalicOutlined />
              <UnderlineOutlined />
              <span style={{ width: 1, height: 16, background: "var(--line)" }} />
              <span
                className="mono"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--indigo)",
                  background: "rgba(59,76,202,0.08)",
                  border: "1px solid rgba(59,76,202,0.2)",
                  padding: "5px 10px",
                  borderRadius: 8,
                }}
              >
                {t("hero.mockDropdownLabel")}
                <DownOutlined style={{ fontSize: 9 }} />
              </span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["CTA", "TOC", "Products", "Pricing", "FAQ", "Alert"].map((chip, i) => (
                <span
                  key={chip}
                  className="tag-chip"
                  style={
                    i === 0
                      ? { background: "var(--indigo)", color: "#fff", borderColor: "var(--indigo)" }
                      : undefined
                  }
                >
                  {chip}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: 18,
                height: 8,
                borderRadius: 4,
                background: "var(--paper-dim)",
                width: "92%",
              }}
            />
            <div
              style={{
                marginTop: 10,
                height: 8,
                borderRadius: 4,
                background: "var(--paper-dim)",
                width: "68%",
              }}
            />
            <div
              style={{
                marginTop: 16,
                height: 46,
                borderRadius: 10,
                background: "rgba(242,169,59,0.16)",
                border: "1px dashed var(--amber)",
              }}
            />
          </EditorWindow>

          <div
            style={{
              position: "absolute",
              right: -14,
              bottom: -30,
              width: 210,
              background: "var(--ink)",
              borderRadius: 14,
              padding: "12px 14px",
              boxShadow: "var(--shadow-card)",
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: "var(--teal)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <MessageOutlined style={{ color: "#fff", fontSize: 13 }} />
            </span>
            <span style={{ color: "#fff", fontSize: 12.5, lineHeight: 1.5 }}>
              {t("hero.chatBubble")}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid h1 {
            font-size: 34px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
