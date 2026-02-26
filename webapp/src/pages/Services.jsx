import { TELEGRAM_URL, SERVICES } from "../data/content";

function getServiceImage(file) {
  try {
    return new URL(`../assets/services/${file}`, import.meta.url).href;
  } catch {
    return null;
  }
}

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
          {SERVICES.map((s) => {
            const img = getServiceImage(s.image);

            return (
              <div key={s.id} className="panel soft" style={{ padding: 0, overflow: "hidden" }}>
                {/* фото сверху */}
                <div
                  style={{
                    height: 170,
                    background: img
                      ? `url(${img}) center/cover no-repeat`
                      : "linear-gradient(180deg, rgba(0,0,0,.06), rgba(0,0,0,0))",
                    borderBottom: "1px solid rgba(0,0,0,.06)",
                  }}
                />

                <div style={{ padding: 16 }}>
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
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}