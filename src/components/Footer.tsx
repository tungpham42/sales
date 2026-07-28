import React from "react";
import { LayoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "56px 0 28px" }}>
      <div
        className="container footer-grid"
        style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32 }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: "var(--ink)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--amber)",
              }}
            >
              <LayoutOutlined style={{ fontSize: 14 }} />
            </span>
            <span className="mono" style={{ fontWeight: 600, color: "var(--ink)" }}>
              SOFTY
            </span>
          </div>
          <p style={{ marginTop: 14, fontSize: 13.5, color: "var(--slate-soft)", maxWidth: 260 }}>
            {t("footer.tagline")}
          </p>
        </div>

        <div>
          <div className="mono" style={{ fontSize: 12, textTransform: "uppercase", color: "var(--slate-soft)", marginBottom: 14 }}>
            {t("footer.products")}
          </div>
          <FooterLink to="/products/softy-layouts">SOFTY Custom Layouts</FooterLink>
          <FooterLink to="/products/ai-chatbot">AI Chatbot</FooterLink>
        </div>

        <div>
          <div className="mono" style={{ fontSize: 12, textTransform: "uppercase", color: "var(--slate-soft)", marginBottom: 14 }}>
            {t("footer.company")}
          </div>
          <FooterLink href="/#services">{t("footer.about")}</FooterLink>
          <FooterLink href="tel:+84368571310">{t("footer.contact")}</FooterLink>
        </div>

        <div>
          <div className="mono" style={{ fontSize: 12, textTransform: "uppercase", color: "var(--slate-soft)", marginBottom: 14 }}>
            {t("footer.support")}
          </div>
          <FooterLink href="/#faq">{t("footer.docs")}</FooterLink>
          <FooterLink href="/#faq">{t("footer.changelog")}</FooterLink>
        </div>
      </div>

      <div className="container" style={{ marginTop: 40, fontSize: 12.5, color: "var(--slate-soft)" }}>
        © {year} SOFTY. {t("footer.rights")}
      </div>

      <style>{`
        @media (max-width: 800px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

const FooterLink: React.FC<{ to?: string; href?: string; children: React.ReactNode }> = ({
  to,
  href,
  children,
}) => {
  const style: React.CSSProperties = {
    display: "block",
    fontSize: 13.5,
    color: "var(--slate)",
    marginBottom: 10,
  };
  if (to) {
    return (
      <Link to={to} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
};

export default Footer;
