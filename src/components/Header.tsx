import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { MenuOutlined, GlobalOutlined, LayoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const navItems: { key: string; hash: string }[] = [
  { key: "nav.products", hash: "/#products" },
  { key: "nav.services", hash: "/#services" },
  { key: "nav.pricing", hash: "/#pricing" },
  { key: "nav.faq", hash: "/#faq" },
];

const Header: React.FC = () => {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(247, 248, 251, 0.86)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: 9,
              background: "var(--ink)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--amber)",
            }}
          >
            <LayoutOutlined style={{ fontSize: 17 }} />
          </span>
          <span
            className="mono"
            style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)" }}
          >
            SOFTY
          </span>
        </Link>

        <nav
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 32 }}
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.hash}
              style={{ fontSize: 14, fontWeight: 500, color: "var(--slate)" }}
            >
              {t(item.key as any)}
            </a>
          ))}
        </nav>

        <Space size={10} className="desktop-nav">
          <Button
            onClick={toggleLang}
            icon={<GlobalOutlined />}
            className="btn-ghost"
          >
            {lang === "vi" ? "EN" : "VI"}
          </Button>
          <a href="/#pricing">
            <Button type="primary" className="btn-primary">
              {t("nav.getStarted")}
            </Button>
          </a>
        </Space>

        <Button
          className="mobile-nav-trigger"
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
          style={{ display: "none" }}
        />
      </div>

      <Drawer
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={280}
      >
        <Space direction="vertical" size={20} style={{ width: "100%" }}>
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.hash}
              onClick={() => setOpen(false)}
              style={{ fontSize: 16, fontWeight: 500, color: "var(--ink)" }}
            >
              {t(item.key as any)}
            </a>
          ))}
          <Button
            block
            onClick={toggleLang}
            icon={<GlobalOutlined />}
            className="btn-ghost"
          >
            {lang === "vi" ? "English" : "Tiếng Việt"}
          </Button>
          <a href="/#pricing" onClick={() => setOpen(false)}>
            <Button block type="primary" className="btn-primary">
              {t("nav.getStarted")}
            </Button>
          </a>
        </Space>
      </Drawer>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-trigger { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
