import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();

  // menu animation states
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

  // close menu on route change
  useEffect(() => {
    if (mounted) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const items = [
    { to: "/services", label: "Послуги" },
    { to: "/pricing", label: "Ціни" },
    { to: "/portfolio", label: "Портфоліо" },
    { to: "/contacts", label: "Контакти" },
  ];

  return (
    <>
      <header className="topbar">
        <div className="topbarRow">
          <div>
            <div className="brandTitle">Barre Studio</div>
            <div className="brandSub">
              {location.pathname === "/" ? "М’який, читабельний інтерфейс" : "Навігація по сайту"}
            </div>
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