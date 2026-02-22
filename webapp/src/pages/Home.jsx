import { Link } from "react-router-dom";
import PricingSection from "../components/PricingSection";

export default function Home() {
  return (
    <div className="container" style={{ padding: "22px 0 40px" }}>
      <section className="glass" style={{ padding: 18 }}>
        <div className="badge" style={{ marginBottom: 12 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--accent2)" }} />
          Студия движения • Barre Studio
        </div>

        <h1 className="h1">Тонус, осанка и гибкость — красиво и безопасно</h1>
        <p className="p" style={{ marginTop: 10 }}>
          У нас тренировки в стиле “barre” и направления для гибкости и укрепления тела.
          Подходит новичкам и тем, кто хочет дисциплину, форму и лёгкость в движении.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Link className="btnLink" to="/services">Смотреть услуги</Link>
          <Link className="btnLink" to="/schedule">Расписание</Link>
          <Link className="btnLink" to="/contacts">Контакты</Link>
        </div>
      </section>

      <section style={{ marginTop: 16 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
          <h2 className="h2" style={{ margin: 0 }}>Популярные направления</h2>
          <Link to="/services" className="smallMuted" style={{ textDecoration: "none" }}>
            Все услуги →
          </Link>
        </div>

        <div className="grid cols-2" style={{ marginTop: 12 }}>
          <div className="glass" style={{ padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div className="cardTitle">Barre</div>
              <span className="dot" />
            </div>
            <p className="p" style={{ marginTop: 8 }}>
              Силовая работа у станка + контроль корпуса. Тонус, осанка, выносливость.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
              <span className="chip">тон</span>
              <span className="chip">осанка</span>
            </div>
          </div>

          <div className="glass" style={{ padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div className="cardTitle">Stretching</div>
              <span className="dot" />
            </div>
            <p className="p" style={{ marginTop: 8 }}>
              Мягкая растяжка и мобильность. Снимаем зажимы, улучшаем амплитуду.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
              <span className="chip">мобилити</span>
              <span className="chip">релакс</span>
            </div>
          </div>

          <div className="glass" style={{ padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div className="cardTitle">Pilates</div>
              <span className="dot" />
            </div>
            <p className="p" style={{ marginTop: 8 }}>
              Стабилизация, дыхание, контроль. Идеально для кора и спины.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
              <span className="chip">кор</span>
              <span className="chip">спина</span>
            </div>
          </div>

          <div className="glass" style={{ padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div className="cardTitle">Functional</div>
              <span className="dot" />
            </div>
            <p className="p" style={{ marginTop: 8 }}>
              Функциональные связки на всё тело: сила + координация + энергия.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
              <span className="chip">сила</span>
              <span className="chip">энергия</span>
            </div>
          </div>
        </div>
      </section>

      {/* ЦЕНЫ */}
      <PricingSection />
    </div>
  );
}