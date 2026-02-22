import { Link } from "react-router-dom";

const PREVIEW_SERVICES = [
  {
    title: "Barre",
    desc: "Силовая работа у станка + контроль корпуса. Тонус, осанка, выносливость.",
    tags: ["тон", "осанка"],
  },
  {
    title: "Stretching",
    desc: "Мягкая растяжка и мобильность. Снимаем зажимы, улучшаем амплитуду.",
    tags: ["мобилити", "релакс"],
  },
  {
    title: "Pilates",
    desc: "Стабилизация, дыхание, контроль. Идеально для кора и спины.",
    tags: ["кор", "спина"],
  },
  {
    title: "Functional",
    desc: "Функциональные связки на всё тело: сила + координация + энергия.",
    tags: ["сила", "энергия"],
  },
];

export default function Home() {
  return (
    <div className="container" style={{ padding: "22px 0 40px" }}>
      <section className="glass" style={{ padding: 18 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span className="badge">
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--accent2)" }} />
            Студия движения • Barre Studio
          </span>

          <h1 className="h1">Тонус, осанка и гибкость — красиво и безопасно</h1>

          <p className="p" style={{ maxWidth: 820 }}>
            У нас тренировки в стиле “barre” и направления для гибкости и укрепления тела.
            Подходит новичкам и тем, кто хочет дисциплину, форму и легкость в движении.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
            <Link to="/services" className="btn" style={{ textDecoration: "none" }}>
              Смотреть услуги
            </Link>
            <Link to="/schedule" className="btn" style={{ textDecoration: "none" }}>
              Расписание
            </Link>
            <Link to="/contacts" className="btn" style={{ textDecoration: "none" }}>
              Контакты
            </Link>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 16 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: 0.2 }}>Популярные направления</h2>
          <Link to="/services" style={{ color: "var(--muted)", textDecoration: "none" }}>
            Все услуги →
          </Link>
        </div>

        <div className="grid cols-2" style={{ marginTop: 12 }}>
          {PREVIEW_SERVICES.map((s) => (
            <div key={s.title} className="glass" style={{ padding: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 16, fontWeight: 900 }}>{s.title}</div>
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: "linear-gradient(90deg, var(--accent), var(--accent2))",
                      boxShadow: "0 0 20px rgba(124,92,255,.35)",
                    }}
                  />
                </div>

                <p className="p">{s.desc}</p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {s.tags.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
