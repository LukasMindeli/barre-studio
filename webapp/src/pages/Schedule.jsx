import { TELEGRAM_URL } from "../data/content";

const SCHEDULE = [
  { day: "Понеділок", slots: ["12:00–14:00", "18:00–22:00"] },
  { day: "Вівторок", slots: ["17:00–21:00"] },
  { day: "Середа", slots: ["15:00–21:00"] },
  { day: "Четвер", slots: ["11:00–12:00", "18:00–22:00"] },
  { day: "Пʼятниця", slots: ["За записом"] },
  { day: "Субота", slots: ["10:00–13:00", "20:00–21:00"] },
  { day: "Неділя", slots: ["10:00–14:00"] },
];

export default function Schedule() {
  return (
    <div className="container">
      <section className="panel" style={{ padding: 18 }}>
        <h1 className="h1" style={{ fontSize: "clamp(26px, 4.2vw, 44px)" }}>
          Розклад
        </h1>

        <p className="p" style={{ marginTop: 10, maxWidth: 860 }}>
          Орієнтовні вікна для занять. Точний час узгоджуємо в Telegram під ваш графік і напрям.
        </p>

        <a
          className="btn btnPrimary"
          style={{ marginTop: 14 }}
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
        >
          Записатися в Telegram
        </a>
      </section>

      <section style={{ marginTop: 16 }}>
        <div className="grid cols2">
          {SCHEDULE.map((d) => (
            <div key={d.day} className="panel soft" style={{ padding: 16 }}>
              <div className="cardTitle">{d.day}</div>
              <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 10 }}>
                {d.slots.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}