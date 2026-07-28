import React from "react";
import { Collapse } from "antd";
import { useLanguage } from "../i18n/LanguageContext";
import { faqs } from "../data/content";

const FaqSection: React.FC = () => {
  const { t, lang } = useLanguage();

  const items = faqs.map((faq, index) => ({
    key: String(index),
    label: <span style={{ fontWeight: 600, color: "var(--ink)" }}>{faq.q[lang]}</span>,
    children: (
      <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--slate-soft)", margin: 0 }}>
        {faq.a[lang]}
      </p>
    ),
  }));

  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="section-heading">
          <span className="eyebrow">{t("faq.eyebrow")}</span>
          <h2>{t("faq.title")}</h2>
        </div>

        <Collapse
          items={items}
          bordered={false}
          expandIconPosition="end"
          style={{ background: "transparent" }}
        />
      </div>
    </section>
  );
};

export default FaqSection;
