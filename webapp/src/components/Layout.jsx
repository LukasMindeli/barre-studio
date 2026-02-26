import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Layout({ children }) {
  const location = useLocation();

  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  const openMenu = () => {
    setMounted(true);
    requestAnimationFrame(() => setActive(true));
  };

  const closeMenu = () => {
    setActive(false);
    setTimeout(() => setMounted(false), 190);
  };

  useEffect(() => {
    if (mounted) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const items = [
    { to: "/", label: "Головна" },
    { to: "/services", label: "Послуги" },
    { to: "/pricing", label: "Ціни" },
    { to: "/trainers", label: "Тренери" },
    { to: "/schedule", label: "Розклад" },
    { to: "/contacts", label: "Контакти" },
  ];

  // Убираем любые "указатели". На Home — просто пусто.
  const subTitle = location.pathname === "/" ? "" : "";

  return (
    <>
      <header className="topbar">
        <div className="topbarRow">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link
              to="/"
              aria-label="На головну"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <img
                src={logo}
                alt="Barre Studio logo"
                style={{
                  width: 28,
                  height: 28,
                  objectFit: "contain",
                  display: "block",
                }}
              />

              <div className="brandTitle" style={{ fontSize: 26, cursor: "pointer" }}>
                Barre Studio
              </div>
            </Link>

            {subTitle ? <div className="brandSub">{subTitle}</div> : null}
          </div>

          <button
            type="button"
            className={"burger" + (mounted && active ? " active" : "")}
            aria-label="Відкрити меню"
            onClick={() => (mounted ? closeMenu() : openMenu())}
          >
            <div className="burgerLines" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </header>

      <main className="pageMain">{children}</main>

      {mounted && (
        <div className="menuOverlay" onClick={closeMenu}>
          <div
            className={"menuPanel" + (active ? " active" : "")}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="menuTitle">Навігація</div>

            <nav className="menuList">
              {items.map((it) => (
                <Link key={it.to} to={it.to} className="menuLink">
                  {it.label}
                  <span>→</span>
                </Link>
              ))}
            </nav>

            <button className="menuClose" type="button" onClick={closeMenu}>
              Закрити
            </button>
          </div>
        </div>
      )}
    </>
  );
}