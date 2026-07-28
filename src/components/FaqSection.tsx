import React from "react";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useLanguage } from "../i18n/LanguageContext";
import { faqs } from "../data/content";
import Reveal from "./Reveal";

const FaqSection: React.FC = () => {
  const { t, lang } = useLanguage();

  const items = faqs.map((faq, index) => ({
    key: String(index),
    label: (
      <span style={{ fontWeight: 600, color: "var(--ink)", fontSize: 15.5 }}>
        {faq.q[lang]}
      </span>
    ),
    children: (
      <p
        style={{
          fontSize: 14.5,
          lineHeight: 1.7,
          color: "var(--slate-soft)",
          margin: 0,
        }}
      >
        {faq.a[lang]}
      </p>
    ),
  }));

  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">{t("faq.eyebrow")}</span>
            <h2>{t("faq.title")}</h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Collapse
            items={items}
            bordered={false}
            expandIconPosition="end"
            expandIcon={({ isActive }) => (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: isActive
                    ? "var(--grad-indigo)"
                    : "var(--paper-dim)",
                  color: isActive ? "#fff" : "var(--slate-soft)",
                  transform: isActive ? "rotate(135deg)" : "rotate(0deg)",
                  transition: "all 0.3s var(--ease)",
                }}
              >
                <PlusOutlined style={{ fontSize: 12 }} />
              </span>
            )}
            style={{ background: "transparent" }}
            className="faq-collapse"
          />
        </Reveal>
      </div>

      <style>{`
        .faq-collapse .ant-collapse-item {
          background: var(--white);
          border: 1px solid var(--line) !important;
          border-radius: var(--radius-card) !important;
          margin-bottom: 14px;
          overflow: hidden;
          transition: border-color 0.28s var(--ease), box-shadow 0.28s var(--ease);
        }
        .faq-collapse .ant-collapse-item:hover {
          border-color: var(--indigo) !important;
          box-shadow: 0 10px 26px rgba(20,25,43,0.06);
        }
        .faq-collapse .ant-collapse-header {
          padding: 20px 22px !important;
        }
        .faq-collapse .ant-collapse-content-box {
          padding: 0 22px 20px !important;
        }
      `}</style>
    </section>
  );
};

export default FaqSection;
