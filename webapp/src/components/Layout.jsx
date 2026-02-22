import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CREAM = "rgba(255, 243, 214, 0.95)";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  const items = [
    { to: "/services", label: "Все виды услуг" },
    { to: "/trainers", label: "Тренера" },
    { to: "/schedule", label: "Расписание" },
    { to: "/contacts", label: "Контакты" },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}>
          <div style={styles.title}>Barre Studio</div>
          <div style={styles.subtitle}>
            {location.pathname === "/" ? "Студия барре и растяжки" : ""}
          </div>
        </div>

        <button
          type="button"
          aria-label="Открыть меню"
          onClick={() => setOpen((v) => !v)}
          style={styles.burger}
        >
          <span style={styles.bLine} />
          <span style={styles.bLine} />
          <span style={styles.bLine} />
        </button>
      </header>

      <main style={styles.main}>{children}</main>

      {open && (
        <div style={styles.overlay} onClick={close}>
          <div style={styles.panel} onClick={(e) => e.stopPropagation()}>
            <div style={styles.panelTitle}>Навигация</div>

            <nav style={styles.nav}>
              {items.map((it) => (
                <Link
                  key={it.to}
                  to={it.to}
                  onClick={close}
                  style={styles.navItem}
                >
                  {it.label}
                </Link>
              ))}
            </nav>

            <button type="button" onClick={close} style={styles.closeBtn}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "transparent",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(21,21,21,0.55)",
    backdropFilter: "blur(10px)",
  },
  brand: { display: "flex", flexDirection: "column", gap: 2 },
  title: { fontSize: 20, fontWeight: 800, letterSpacing: 0.3, color: "#F5F5F5" },
  subtitle: { fontSize: 12, opacity: 0.85, color: "rgba(245,245,245,0.75)" },

  burger: {
    width: 44,
    height: 44,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  bLine: {
    width: 18,
    height: 2,
    background: "rgba(255,255,255,0.9)",
    borderRadius: 999,
  },

  main: { padding: 0 },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 50,
  },

  panel: {
    width: "min(320px, 90vw)",
    height: "100%",
    padding: 18,
    borderLeft: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(20,20,20,0.92)",
    backdropFilter: "blur(12px)",
    display: "flex",
    flexDirection: "column",
    gap: 14,

    // ВАЖНО: принудительно задаём цвет на весь блок меню
    color: CREAM,
  },

  panelTitle: {
    fontSize: 14,
    letterSpacing: 0.2,
    color: CREAM,
    WebkitTextFillColor: CREAM,
  },

  nav: { display: "flex", flexDirection: "column", gap: 10, marginTop: 6 },

  navItem: {
    padding: "12px 12px",
    borderRadius: 12,
    textDecoration: "none",

    // железобетонно кремовый
    color: CREAM,
    WebkitTextFillColor: CREAM,

    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
  },

  closeBtn: {
    marginTop: "auto",
    padding: "12px 12px",
    borderRadius: 12,

    // железобетонно кремовый
    color: CREAM,
    WebkitTextFillColor: CREAM,

    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    cursor: "pointer",
  },
};