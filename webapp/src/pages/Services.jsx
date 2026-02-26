import { TELEGRAM_URL, SERVICES } from "../data/content";

export default function Services() {
  return (
    <div className="container">
      <section className="panel" style={{ padding: 18 }}>
        <h1 className="h1" style={{ fontSize: "clamp(26px, 4.2vw, 44px)" }}>
          Послуги
        </h1>
        <p className="p" style={{ marginTop: 10, maxWidth: 860 }}>
          Оберіть напрям. Далі — пишіть у Telegram: підкажемо формат і підберемо час.
        </p>

        <a
          className="btn btnPrimary"
          style={{ marginTop: 14 }}
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
        >
          Написати в Telegram
        </a>
      </section>

      <section style={{ marginTop: 16 }}>
        <div className="grid cols2">
          {SERVICES.map((s) => (
            <div key={s.id} className="panel soft" style={{ padding: 16 }}>
              <div className="cardTitle">{s.title}</div>
              <p className="p" style={{ marginTop: 10 }}>
                {s.desc}
              </p>

              <div className="chips" style={{ marginTop: 12 }}>
                {s.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}