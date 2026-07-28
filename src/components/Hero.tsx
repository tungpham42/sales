import React from "react";
import { Button } from "antd";
import {
  ArrowRightOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  DownOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../i18n/LanguageContext";
import EditorWindow from "./EditorWindow";
import Reveal from "./Reveal";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const stats: { value: string; label: string }[] = [
    { value: t("hero.statSetupValue"), label: t("hero.statSetupLabel") },
    { value: t("hero.statSupportValue"), label: t("hero.statSupportLabel") },
    { value: t("hero.statTrialValue"), label: t("hero.statTrialLabel") },
  ];

  return (
    <section
      style={{
        padding: "72px 0 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        className="hero-blob"
        style={{
          width: 420,
          height: 420,
          top: -140,
          left: -120,
          background:
            "radial-gradient(circle, rgba(59,76,202,0.22), transparent 70%)",
        }}
      />
      <span
        className="hero-blob"
        style={{
          width: 380,
          height: 380,
          top: 40,
          right: -140,
          background:
            "radial-gradient(circle, rgba(43,184,163,0.2), transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <span
        className="hero-blob"
        style={{
          width: 260,
          height: 260,
          bottom: -100,
          left: "38%",
          background:
            "radial-gradient(circle, rgba(242,169,59,0.16), transparent 70%)",
          animationDelay: "-11s",
        }}
      />

      <div
        className="container hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 56,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot pulse-dot" />
              {t("hero.eyebrow")}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1
              style={{
                fontSize: 50,
                lineHeight: 1.12,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {t("hero.titleLine1")}
              <br />
              <span className="gradient-text">{t("hero.titleLine2")}</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p
              style={{
                marginTop: 24,
                fontSize: 17.5,
                lineHeight: 1.72,
                color: "var(--slate-soft)",
                maxWidth: 520,
              }}
            >
              {t("hero.subtitle")}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 34,
                flexWrap: "wrap",
              }}
            >
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
                <Button
                  size="large"
                  type="primary"
                  className="btn-teal"
                  style={{ color: "#fff" }}
                >
                  {t("hero.ctaSecondary")}
                </Button>
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div
              className="hero-stats"
              style={{
                display: "flex",
                gap: 0,
                marginTop: 48,
                paddingTop: 28,
                borderTop: "1px solid var(--line)",
                maxWidth: 520,
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    flex: 1,
                    paddingLeft: i === 0 ? 0 : 22,
                    borderLeft: i === 0 ? "none" : "1px solid var(--line)",
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--ink)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      marginTop: 4,
                      fontSize: 12.5,
                      color: "var(--slate-soft)",
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} style={{ position: "relative" }}>
          <EditorWindow tab={t("hero.mockToolbarLabel")} className="bounce-in">
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
              <span
                style={{ width: 1, height: 16, background: "var(--line)" }}
              />
              <span
                className="mono"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  background: "var(--grad-indigo)",
                  padding: "6px 11px",
                  borderRadius: 8,
                  boxShadow: "0 6px 16px rgba(59,76,202,0.34)",
                }}
              >
                {t("hero.mockDropdownLabel")}
                <DownOutlined style={{ fontSize: 9 }} />
              </span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["CTA", "TOC", "Products", "Pricing", "FAQ", "Alert"].map(
                (chip, i) => (
                  <span
                    key={chip}
                    className="tag-chip"
                    style={
                      i === 0
                        ? {
                            background: "var(--indigo)",
                            color: "#fff",
                            borderColor: "var(--indigo)",
                          }
                        : undefined
                    }
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>

            <div
              style={{
                marginTop: 20,
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
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                className="blink-cursor"
                style={{
                  display: "inline-block",
                  width: 2,
                  height: 14,
                  marginLeft: 2,
                  background: "var(--indigo)",
                }}
              />
            </div>
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
            className="bounce-in"
            style={{
              position: "absolute",
              right: -14,
              bottom: -30,
              width: 220,
              background: "var(--ink)",
              borderRadius: 14,
              padding: "13px 15px",
              boxShadow: "0 20px 45px rgba(20,25,43,0.35)",
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              animationDelay: "0.35s",
            }}
          >
            <span
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: "var(--grad-teal)",
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
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid h1 {
            font-size: 36px !important;
          }
          .hero-stats {
            flex-wrap: wrap;
            gap: 18px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
